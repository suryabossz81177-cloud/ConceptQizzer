/*==================================================
  Concept Quizzer
  Notes Logic
  Package 3C
==================================================*/

"use strict";

const titleElement=
document.getElementById("chapterTitle");

const pathElement=
document.getElementById("chapterPath");

const headingElement=
document.getElementById("notesHeading");

const descriptionElement=
document.getElementById("notesDescription");

const notesContainer=
document.getElementById("notesContent");

const importantContainer=
document.getElementById("importantPoints");

const termsContainer=
document.getElementById("keyTermsContainer");

const summaryContainer=
document.getElementById("chapterSummary");

const progressText =
document.getElementById("progressText");

const progressFill =
document.getElementById("progressFill");

const urlChapter =
  new URLSearchParams(window.location.search).get("chapter");

const chapterKey =
  urlChapter ||
  localStorage.getItem("cq-current-chapter") ||
  "";

if (urlChapter) {
  localStorage.setItem("cq-current-chapter", urlChapter);
}

let activeChapter = null;

/*==================================================
  PACKAGE 13.1.3 — PERMANENT NOTES CHAPTER LOADER

  IMPORTANT:
  notes.html loads notesData.js first. That file contains
  the old/default ChapterData (Patterns in Mathematics).

  Therefore we MUST NOT use ChapterData directly here.

  Instead:
  1. Read cq-current-chapter.
  2. Find that chapter in ChapterRegistry.
  3. Fetch the chapter's own JS file.
  4. Convert its `const ChapterData = ...` into a
     private window object.
  5. Render THAT chapter.

  This makes Chapter 3 → Number Play show Number Play,
  not Chapter 1 → Patterns in Mathematics.
==================================================*/

async function loadChapter(key){

  try {

    if (!key) {
      throw new Error("No current chapter selected.");
    }

    /* Load registry if notes.html has not loaded it yet. */
    if (!Array.isArray(window.ChapterRegistry)) {
      await loadExternalScript("js/chapter-registry.js");
    }

    const registry =
      Array.isArray(window.ChapterRegistry)
        ? window.ChapterRegistry
        : [];

    const normalizedKey =
      String(key || "").trim().toLowerCase();

    let entry = registry.find(chapter => {
      if (!chapter || chapter.enabled === false) return false;

      const id = String(chapter.id || "").toLowerCase();
      const aliases = Array.isArray(chapter.aliases)
        ? chapter.aliases
        : [];

      return (
        id === normalizedKey ||
        aliases.some(alias =>
          String(alias).toLowerCase() === normalizedKey
        )
      );
    });

    if (!entry) {
      const slug = normalizedKey.replace(/^\d+-[^-]+-/, "");

      entry = registry.find(chapter => {
        if (!chapter || chapter.enabled === false) return false;
        const id = String(chapter.id || "").toLowerCase();
        return id === slug || id.endsWith("-" + slug);
      });
    }

    if (!entry || entry.enabled === false) {
      throw new Error(
        "Chapter was not found in ChapterRegistry: " + key
      );
    }

    if (!entry.file) {
      throw new Error(
        "Notes file is missing for: " + entry.title
      );
    }

    const response =
      await fetch(entry.file, {
        cache: "no-store"
      });

    if (!response.ok) {
      throw new Error(
        "Could not load notes file: " + entry.file
      );
    }

    let source = await response.text();

    /*
      Chapter files use:
        const ChapterData = {...}

      Do NOT execute that as a global const because
      notesData.js already has ChapterData.

      Convert only the declaration into:
        window.CQ_LOADED_CHAPTER = {...}
    */
    let converted = source;

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+ChapterData\s*=/,
      "$1window.CQ_LOADED_CHAPTER ="
    );

    converted = converted.replace(
      /window\.ChapterData\s*=/g,
      "window.CQ_LOADED_CHAPTER ="
    );

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+chapterData\s*=/,
      "$1window.CQ_LOADED_CHAPTER ="
    );

    converted = converted.replace(
      /window\.ChapterData\s*=/,
      "window.CQ_LOADED_CHAPTER ="
    );

    if (!/window\.CQ_LOADED_CHAPTER\s*=/.test(converted)) {
      throw new Error(
        "Invalid chapter notes file. Expected ChapterData declaration in: " +
        entry.file
      );
    }

    window.CQ_LOADED_CHAPTER = null;

    const executeChapter =
      new Function(
        "window",
        converted + "\n//# sourceURL=" + entry.file
      );

    executeChapter(window);

    const chapter =
      window.CQ_LOADED_CHAPTER;

    if (
      !chapter ||
      !Array.isArray(chapter.sections)
    ) {
      throw new Error(
        "Chapter data is empty or invalid: " + entry.title
      );
    }

    activeChapter = chapter;

    /*
      Keep the active chapter available to the AI/search
      features without touching the old ChapterData.
    */
    window.CQ_ACTIVE_CHAPTER = chapter;

    renderChapter(chapter);

  } catch (error) {

    console.error(
      "Concept Quizzer Notes Loader:",
      error
    );

    showNotesLoadError(
      error && error.message
        ? error.message
        : "Unknown notes loading error"
    );

  }

}

function loadExternalScript(src){

  return new Promise(function(resolve, reject){

    const existing =
      document.querySelector(
        'script[src="' + src + '"]'
      );

    if (existing) {
      if (Array.isArray(window.ChapterRegistry)) {
        resolve();
        return;
      }

      existing.addEventListener(
        "load",
        resolve,
        { once: true }
      );

      existing.addEventListener(
        "error",
        reject,
        { once: true }
      );

      return;
    }

    const script =
      document.createElement("script");

    script.src = src;

    script.onload = resolve;

    script.onerror = function(){
      reject(
        new Error(
          "Could not load " + src
        )
      );
    };

    document.head.appendChild(script);

  });

}

function showNotesLoadError(message){

  if (!notesContainer) return;

  notesContainer.innerHTML = `
    <div class="errorBox">
      <div class="icon">⚠️</div>
      <h3>Notes could not be loaded</h3>
      <p>${String(message)}</p>
      <p>Please refresh once after the file is replaced.</p>
    </div>
  `;

}

/* Start the permanent chapter loader. */
loadChapter(chapterKey);

function renderChapter(chapter){

titleElement.textContent=

chapter.title;

headingElement.textContent=

chapter.title;

descriptionElement.textContent=

chapter.description;

summaryContainer.textContent=

chapter.summary;

notesContainer.innerHTML="";

importantContainer.innerHTML="";

termsContainer.innerHTML="";

renderSections(chapter.sections);

renderImportantPoints(

chapter.importantPoints

);

renderKeyTerms(

chapter.keyTerms

);

  updateProgress(chapter);

  const lastRead = localStorage.getItem("cq-last-read-" + chapterKey);

if (lastRead !== null) {
  const card = document.querySelector(
    `.noteCard[data-index="${lastRead}"]`
  );

  if (card) {
    setTimeout(() => {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      card.classList.add("lastRead");

      setTimeout(() => {
        card.classList.remove("lastRead");
      }, 2000);
    }, 300);
  }
}
  
}

/*==================================================
  RENDER SECTIONS
==================================================*/
function renderSections(sections){

  const safeSections = Array.isArray(sections) ? sections : [];

  safeSections.forEach((section,index)=>{

    const card = document.createElement("div");
    card.className = "noteCard";
    card.dataset.index = index;

    let html = `
      <div class="sectionHeader">
        <span class="sectionNumber">${index + 1}</span>
        <h3>${escapeRenderHTML(section && section.title || "")}</h3>
      </div>
    `;

    const blocks = section && Array.isArray(section.blocks)
      ? section.blocks
      : [];

    if (blocks.length) {
      blocks.forEach((block, blockIndex) => {
        html += renderUniversalBlock(block, blockIndex);
      });
    } else if (section && section.content) {
      html += `<div class="contentBlock">${renderText(section.content)}</div>`;
    }

    card.innerHTML = html;
    notesContainer.appendChild(card);

    card.addEventListener("click", () => {
      localStorage.setItem("cq-last-read-" + chapterKey, index);
    });
  });

  bindUniversalInteractions();

  const searchInput = document.getElementById("chapterSearch");

  if(searchInput && !searchInput.dataset.bound){

    searchInput.dataset.bound = "true";

    searchInput.addEventListener("input", function(){

      const query = this.value.toLowerCase();

      document.querySelectorAll(".noteCard").forEach(card=>{
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "" : "none";
      });

    });
  }
}


/*==================================================
  UNIVERSAL CONTENT RENDERER
  Supports current + future Maths, Science, History,
  Civics, Geography, AI, IT and Class 6–10 content.
  Unknown block types are NEVER silently discarded.
==================================================*/

function escapeRenderHTML(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function renderText(value){
  return String(value ?? "")
    .replace(/\n/g,"<br>");
}

function blockTitle(block, fallback){
  return escapeRenderHTML(block && (block.title || block.heading) || fallback);
}

function getBlockText(block){
  if (!block) return "";
  return block.text ?? block.content ?? block.description ?? block.explanation ?? "";
}

function renderList(items, ordered=false){
  if (!Array.isArray(items) || !items.length) return "";
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map(x => `<li>${renderText(typeof x === "object" ? (x.text ?? x.content ?? JSON.stringify(x)) : x)}</li>`).join("")}</${tag}>`;
}

function renderUniversalBlock(block, blockIndex){

  if (!block || typeof block !== "object") {
    return "";
  }

  const type = String(block.type || block.kind || "paragraph").toLowerCase().trim();
  const text = getBlockText(block);

  /* ---------- TEXT / BASIC ---------- */

  if(type === "paragraph" || type === "text" || type === "intro"){
    return `<div class="cqBlock cqParagraph">${renderText(text)}</div>`;
  }

  if(type === "heading" || type === "subheading"){
    return `<div class="cqBlock cqHeading"><h4>${blockTitle(block,"Key Idea")}</h4>${text ? `<p>${renderText(text)}</p>` : ""}</div>`;
  }

  if(type === "concept" || type === "conceptcard" || type === "concept_card"){
    return `
      <div class="cqBlock cqConcept">
        <div class="cqIcon">💡</div>
        <div><h4>${blockTitle(block,"Concept")}</h4><div>${renderText(text)}</div></div>
      </div>`;
  }

  if(type === "definition" || type === "definitionbox"){
    return `
      <div class="cqBlock cqDefinition">
        <h4>📖 ${blockTitle(block,"Definition")}</h4>
        <div>${renderText(text)}</div>
      </div>`;
  }

  if(type === "keypoint" || type === "key_point" || type === "important"){
    return `
      <div class="cqBlock cqImportant">
        <h4>⭐ ${blockTitle(block,"Important Point")}</h4>
        <div>${renderText(text)}</div>
      </div>`;
  }

  /* ---------- EXAMPLES ---------- */

  if(type === "example" || type === "workedexample" || type === "worked_example" || type === "solvedexample"){
    const steps = Array.isArray(block.steps) ? block.steps :
                  Array.isArray(block.solution) ? block.solution : [];

    return `
      <div class="cqBlock cqExample">
        <div class="cqBadge">🧮 Solved Example</div>
        <h4>${blockTitle(block,"Example")}</h4>
        ${block.question ? `<div class="cqQuestion"><strong>❓ Question</strong><div>${renderText(block.question)}</div></div>` : ""}
        ${text ? `<div class="cqExplanation">${renderText(text)}</div>` : ""}
        ${steps.length ? `<div class="cqSteps"><strong>📝 Step-by-step</strong>${renderList(steps,true)}</div>` : ""}
        ${block.answer !== undefined ? `<div class="cqAnswer"><strong>✅ Answer</strong><div>${renderText(block.answer)}</div></div>` : ""}
      </div>`;
  }

  /* ---------- QUESTIONS / ASSESSMENT ---------- */

  if(type === "practice" || type === "questions" || type === "question" || type === "exercise"){
    const questions = Array.isArray(block.questions) ? block.questions :
                      Array.isArray(block.items) ? block.items :
                      (block.question ? [block] : []);
    return `
      <div class="cqBlock cqPractice">
        <h4>✏️ ${blockTitle(block,"Practice Questions")}</h4>
        ${renderQuestionList(questions)}
      </div>`;
  }

  if(type === "mcq" || type === "quiz" || type === "multiplechoice" || type === "multiple_choice"){
    const questions = Array.isArray(block.questions) ? block.questions : [block];
    return `
      <div class="cqBlock cqQuiz">
        <h4>🎯 ${blockTitle(block,"MCQ Challenge")}</h4>
        ${questions.map((q,i)=>renderMCQ(q,i)).join("")}
      </div>`;
  }

  if(type === "truefalse" || type === "true_false"){
    const items = Array.isArray(block.questions) ? block.questions :
                  Array.isArray(block.items) ? block.items : [block];
    return `
      <div class="cqBlock cqQuiz">
        <h4>✔️ ${blockTitle(block,"True or False")}</h4>
        ${items.map((q,i)=>`
          <div class="cqQ">
            <strong>${i+1}. ${renderText(q.question || q.text || "")}</strong>
            ${q.answer !== undefined ? `<details><summary>Show answer</summary><b>${renderText(q.answer)}</b></details>` : ""}
          </div>`).join("")}
      </div>`;
  }

  if(type === "fillblank" || type === "fill_blank"){
    const items = Array.isArray(block.questions) ? block.questions :
                  Array.isArray(block.items) ? block.items : [block];
    return `
      <div class="cqBlock cqQuiz">
        <h4>📝 ${blockTitle(block,"Fill in the Blanks")}</h4>
        ${items.map((q,i)=>`
          <div class="cqQ">
            <strong>${i+1}. ${renderText(q.question || q.text || "")}</strong>
            ${q.answer !== undefined ? `<details><summary>Show answer</summary><b>${renderText(q.answer)}</b></details>` : ""}
          </div>`).join("")}
      </div>`;
  }

  if(type === "assertionreason" || type === "assertion_reason"){
    return `
      <div class="cqBlock cqQuiz">
        <h4>🧠 ${blockTitle(block,"Assertion & Reason")}</h4>
        ${block.assertion ? `<p><b>Assertion:</b> ${renderText(block.assertion)}</p>` : ""}
        ${block.reason ? `<p><b>Reason:</b> ${renderText(block.reason)}</p>` : ""}
        ${block.options ? renderList(block.options) : ""}
        ${block.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "casestudy" || type === "case_study"){
    return `
      <div class="cqBlock cqCase">
        <h4>📚 ${blockTitle(block,"Case Study")}</h4>
        ${text ? `<div>${renderText(text)}</div>` : ""}
        ${block.questions ? `<div class="cqCaseQuestions">${renderQuestionList(block.questions)}</div>` : ""}
      </div>`;
  }

  /* ---------- SCIENCE ---------- */

  if(type === "experiment" || type === "activity" || type === "activitycard"){
    return `
      <div class="cqBlock cqActivity">
        <div class="cqBadge">🧪 Activity / Experiment</div>
        <h4>${blockTitle(block,"Try It Yourself")}</h4>
        ${block.aim ? `<p><b>🎯 Aim:</b> ${renderText(block.aim)}</p>` : ""}
        ${block.materials ? `<div><b>🧰 Materials</b>${renderList(block.materials)}</div>` : ""}
        ${block.procedure || block.steps ? `<div><b>🔬 Procedure</b>${renderList(block.procedure || block.steps,true)}</div>` : ""}
        ${block.observation ? `<p><b>👀 Observation:</b> ${renderText(block.observation)}</p>` : ""}
        ${block.result || block.conclusion ? `<p><b>✅ Conclusion:</b> ${renderText(block.result || block.conclusion)}</p>` : ""}
        ${text ? `<div>${renderText(text)}</div>` : ""}
      </div>`;
  }

  if(type === "observation"){
    return `<div class="cqBlock cqObservation"><h4>👀 ${blockTitle(block,"Observation")}</h4>${renderText(text)}</div>`;
  }

  if(type === "hypothesis"){
    return `<div class="cqBlock cqHypothesis"><h4>🔬 ${blockTitle(block,"Hypothesis")}</h4>${renderText(text)}</div>`;
  }

  /* ---------- FIGURES / DIAGRAMS / MAPS ---------- */

  if(type === "diagram" || type === "figure" || type === "sciencefigure" || type === "illustration"){
    const visual = block.html || block.svg || block.content || block.figure || "";
    const image = block.image || block.src || block.url || "";
    return `
      <div class="cqBlock cqFigure">
        <h4>🖼️ ${blockTitle(block,"Figure / Diagram")}</h4>
        ${image ? `<img src="${escapeRenderHTML(image)}" alt="${blockTitle(block,"Figure")}" loading="lazy">` : ""}
        ${visual ? `<div class="cqVisual">${visual}</div>` : ""}
        ${block.caption ? `<p class="cqCaption">${renderText(block.caption)}</p>` : ""}
      </div>`;
  }

  if(type === "map" || type === "mapactivity" || type === "geography_map"){
    const visual = block.html || block.svg || block.content || "";
    const image = block.image || block.src || block.url || "";
    return `
      <div class="cqBlock cqMap">
        <div class="cqBadge">🗺️ Map Work</div>
        <h4>${blockTitle(block,"Map")}</h4>
        ${image ? `<img src="${escapeRenderHTML(image)}" alt="${blockTitle(block,"Map")}" loading="lazy">` : ""}
        ${visual ? `<div class="cqVisual">${visual}</div>` : ""}
        ${block.labels ? `<div><b>Labels to learn:</b>${renderList(block.labels)}</div>` : ""}
        ${text ? `<p>${renderText(text)}</p>` : ""}
      </div>`;
  }

  /* ---------- MATHS / FORMULAS / TABLES / DATA ---------- */

  if(type === "formula" || type === "equation" || type === "theorem"){
    return `
      <div class="cqBlock cqFormula">
        <h4>📐 ${blockTitle(block,type === "theorem" ? "Theorem" : "Formula")}</h4>
        <div class="formulaContent">${renderText(block.formula || text)}</div>
        ${block.explanation ? `<p>${renderText(block.explanation)}</p>` : ""}
      </div>`;
  }

  if(type === "table" || type === "numbertable" || type === "comparison" || type === "compare"){
    const rows = Array.isArray(block.rows) ? block.rows : [];
    if(!rows.length){
      return `<div class="cqBlock cqTable"><h4>📊 ${blockTitle(block,"Table")}</h4>${text ? renderText(text) : ""}</div>`;
    }
    return `
      <div class="cqBlock cqTable">
        <h4>📊 ${blockTitle(block,"Table")}</h4>
        <div class="cqTableScroll">
          <table>
            <tbody>
              ${rows.map((row,r)=>`
                <tr>
                  ${(Array.isArray(row) ? row : [row]).map(cell =>
                    r === 0 ? `<th>${renderText(cell)}</th>` : `<td>${renderText(cell)}</td>`
                  ).join("")}
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  if(type === "data" || type === "dataset" || type === "graph" || type === "chart"){
    const rows = Array.isArray(block.rows) ? block.rows : [];
    return `
      <div class="cqBlock cqData">
        <h4>📊 ${blockTitle(block,"Data / Graph")}</h4>
        ${rows.length ? `<div class="cqTableScroll"><table><tbody>${rows.map((r,i)=>`<tr>${(Array.isArray(r)?r:[r]).map(c=>i===0?`<th>${renderText(c)}</th>`:`<td>${renderText(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : ""}
        ${block.html || block.svg || block.content ? `<div class="cqVisual">${block.html || block.svg || block.content}</div>` : ""}
        ${text ? `<p>${renderText(text)}</p>` : ""}
      </div>`;
  }

  /* ---------- SOCIAL SCIENCE ---------- */

  if(type === "timeline"){
    const items = Array.isArray(block.items) ? block.items : [];
    return `
      <div class="cqBlock cqTimeline">
        <h4>⏳ ${blockTitle(block,"Timeline")}</h4>
        ${items.map((item,i)=>`
          <div class="cqTimelineItem">
            <div class="cqTimelineDot">${i+1}</div>
            <div><b>${renderText(item.year || item.date || "")}</b><p>${renderText(item.text || item.event || item.description || item)}</p></div>
          </div>`).join("")}
      </div>`;
  }

  if(type === "process" || type === "flowchart" || type === "steps"){
    const steps = Array.isArray(block.steps) ? block.steps :
                  Array.isArray(block.items) ? block.items : [];
    return `
      <div class="cqBlock cqProcess">
        <h4>🔄 ${blockTitle(block,"Process")}</h4>
        ${steps.map((s,i)=>`
          <div class="cqProcessStep">
            <span>${i+1}</span>
            <div>${renderText(typeof s === "object" ? (s.text || s.title || s.description || "") : s)}</div>
          </div>`).join("")}
      </div>`;
  }

  if(type === "mindmap" || type === "mind_map"){
    const items = block.items || block.branches || block.points || [];
    return `
      <div class="cqBlock cqMindMap">
        <h4>🧠 ${blockTitle(block,"Mind Map")}</h4>
        ${Array.isArray(items) ? renderList(items) : renderText(items)}
      </div>`;
  }

  /* ---------- DIGITAL / AI / IT ---------- */

  if(type === "code" || type === "program" || type === "algorithm"){
    return `
      <div class="cqBlock cqCode">
        <h4>💻 ${blockTitle(block,"Code / Algorithm")}</h4>
        <pre><code>${escapeRenderHTML(block.code || text)}</code></pre>
        ${block.output ? `<div class="cqOutput"><b>Output:</b><br>${renderText(block.output)}</div>` : ""}
        ${block.explanation ? `<p>${renderText(block.explanation)}</p>` : ""}
      </div>`;
  }

  if(type === "ai" || type === "aiconcept" || type === "aitool"){
    return `
      <div class="cqBlock cqAI">
        <div class="cqBadge">🤖 AI / Digital Learning</div>
        <h4>${blockTitle(block,"AI Concept")}</h4>
        ${text ? `<p>${renderText(text)}</p>` : ""}
        ${block.prompt ? `<div class="cqPrompt"><b>Prompt:</b><br>${renderText(block.prompt)}</div>` : ""}
        ${block.example ? `<div class="cqExampleMini"><b>Example:</b><br>${renderText(block.example)}</div>` : ""}
      </div>`;
  }

  if(type === "ict" || type === "it" || type === "digital"){
    return `
      <div class="cqBlock cqDigital">
        <h4>💻 ${blockTitle(block,"Digital / IT Concept")}</h4>
        ${renderText(text)}
        ${block.steps ? renderList(block.steps,true) : ""}
      </div>`;
  }

  /* ---------- UNIVERSAL SPECIAL BLOCKS ---------- */

  if(type === "tip"){
    return `<div class="cqBlock cqTip"><h4>🧠 ${blockTitle(block,"Tip")}</h4>${renderText(text)}</div>`;
  }

  if(type === "fact"){
    return `<div class="cqBlock cqFact"><h4>✨ ${blockTitle(block,"Did You Know?")}</h4>${renderText(text)}</div>`;
  }

  if(type === "warning"){
    return `<div class="cqBlock cqWarning"><h4>⚠️ ${blockTitle(block,"Important")}</h4>${renderText(text)}</div>`;
  }

  if(type === "examtip" || type === "exam_tip"){
    return `<div class="cqBlock cqExam"><h4>🎯 ${blockTitle(block,"Exam Tip")}</h4>${renderText(text)}</div>`;
  }

  if(type === "application"){
    return `<div class="cqBlock cqApplication"><h4>🔎 ${blockTitle(block,"Real-Life Application")}</h4>${renderText(text)}</div>`;
  }

  if(type === "summary"){
    return `<div class="cqBlock cqSummary"><h4>📌 ${blockTitle(block,"Summary")}</h4>${renderText(text)}</div>`;
  }

  if(type === "flashcard"){
    return `
      <div class="cqBlock cqFlashcard">
        <h4>🃏 ${blockTitle(block,"Flashcard")}</h4>
        <p><b>Front:</b> ${renderText(block.front || block.question || "")}</p>
        <details><summary>Reveal</summary><p>${renderText(block.back || block.answer || text)}</p></details>
      </div>`;
  }

  if(type === "quote"){
    return `<blockquote class="cqBlock cqQuote">${renderText(block.quote || text)}${block.author ? `<footer>— ${renderText(block.author)}</footer>` : ""}</blockquote>`;
  }

  if(type === "checklist"){
    const items = Array.isArray(block.items) ? block.items : [];
    return `<div class="cqBlock cqChecklist"><h4>☑️ ${blockTitle(block,"Checklist")}</h4>${items.map(x=>`<label><input type="checkbox"> ${renderText(x)}</label>`).join("")}</div>`;
  }

  if(type === "html" || type === "rawhtml"){
    return `<div class="cqBlock cqRawHTML">${block.content || block.html || ""}</div>`;
  }

  /* ---------- UNKNOWN TYPES: FALLBACK INSTEAD OF DROPPING ---------- */

  return `
    <div class="cqBlock cqGeneric">
      <div class="cqBadge">📘 ${escapeRenderHTML(type)}</div>
      ${block.title || block.heading ? `<h4>${blockTitle(block,"Content")}</h4>` : ""}
      ${text ? `<div>${renderText(text)}</div>` : ""}
      ${block.question ? `<div class="cqQuestion"><b>❓ Question</b><p>${renderText(block.question)}</p></div>` : ""}
      ${block.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(block.answer)}</div></details>` : ""}
      ${Array.isArray(block.items) ? renderList(block.items) : ""}
    </div>`;
}

function renderQuestionList(questions){
  if(!Array.isArray(questions) || !questions.length) return "";
  return `<ol>${questions.map(q=>{
    if(typeof q === "string") return `<li>${renderText(q)}</li>`;
    return `<li>
      ${renderText(q.question || q.text || q.prompt || "")}
      ${Array.isArray(q.options) ? `<div class="cqOptions">${q.options.map((o,i)=>`<span>${String.fromCharCode(65+i)}. ${renderText(o)}</span>`).join("")}</div>` : ""}
      ${q.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(q.answer)}</div></details>` : ""}
    </li>`;
  }).join("")}</ol>`;
}

function renderMCQ(q,i){
  return `
    <div class="cqQ">
      <strong>${i+1}. ${renderText(q.question || q.text || q.prompt || "")}</strong>
      ${Array.isArray(q.options) ? `<div class="cqOptions">${q.options.map((o,j)=>`<span><b>${String.fromCharCode(65+j)}.</b> ${renderText(o)}</span>`).join("")}</div>` : ""}
      ${q.answer !== undefined ? `<details><summary>Show answer</summary><div><b>${renderText(q.answer)}</b>${q.explanation ? `<p>${renderText(q.explanation)}</p>` : ""}</div></details>` : ""}
    </div>`;
}

function bindUniversalInteractions(){
  document.querySelectorAll(".cqChecklist input").forEach(input=>{
    input.addEventListener("change",()=>{
      try{
        localStorage.setItem(
          "cq-check-"+chapterKey+"-"+Array.from(document.querySelectorAll(".cqChecklist input")).indexOf(input),
          input.checked ? "1" : "0"
        );
      }catch(e){}
    });
  });
}


/*==================================================
  UNIVERSAL RENDERER CSS
  Self-contained so new block types work even when
  notes.css has not been updated yet.
==================================================*/

function installUniversalRendererStyles(){

  if(document.getElementById("cqUniversalRendererStyles")) return;

  const style=document.createElement("style");
  style.id="cqUniversalRendererStyles";

  style.textContent=`
    .cqBlock{margin:20px 0;padding:20px;border-radius:22px;background:#fff;box-shadow:0 8px 24px rgba(30,40,90,.08);line-height:1.7}
    .cqBlock h4{margin:0 0 12px;font-size:21px}
    .cqParagraph{font-size:17px}
    .cqHeading{background:linear-gradient(135deg,#f7f4ff,#eef7ff)}
    .cqConcept{display:flex;gap:15px;background:linear-gradient(135deg,#eef5ff,#f8f1ff)}
    .cqIcon{font-size:34px}
    .cqDefinition{border-left:6px solid #5b4bea;background:#f4f1ff}
    .cqImportant{border-left:6px solid #f59e0b;background:#fff8e8}
    .cqExample{background:linear-gradient(135deg,#f4f0ff,#eef8ff);border:1px solid #ddd5ff}
    .cqBadge{display:inline-block;padding:7px 13px;border-radius:999px;background:#eee9ff;font-weight:800;margin-bottom:10px}
    .cqQuestion{padding:14px;border-radius:16px;background:#f8f8ff;margin:10px 0}
    .cqSteps{padding:14px;background:#fff;margin:10px 0;border-radius:16px}
    .cqAnswer{padding:14px;border-radius:16px;background:#eafbf1;margin-top:10px}
    .cqPractice,.cqQuiz{background:linear-gradient(135deg,#fff8ed,#f4f7ff)}
    .cqQ{padding:15px;margin:10px 0;background:#fff;border-radius:15px}
    .cqOptions{display:grid;gap:8px;margin-top:10px}
    .cqOptions span{padding:9px 12px;border-radius:12px;background:#f3f4ff}
    .cqActivity{background:linear-gradient(135deg,#effcf7,#f0f8ff);border-left:6px solid #10b981}
    .cqObservation{background:#f4fbff;border-left:6px solid #0ea5e9}
    .cqHypothesis{background:#faf5ff;border-left:6px solid #8b5cf6}
    .cqFigure,.cqMap{text-align:center;background:#fff}
    .cqFigure img,.cqMap img{max-width:100%;height:auto;border-radius:16px;margin:10px auto}
    .cqVisual{overflow:auto;max-width:100%;margin:10px 0}
    .cqCaption{font-style:italic;opacity:.8}
    .cqFormula{background:linear-gradient(135deg,#eff6ff,#f5f3ff)}
    .formulaContent{font-size:22px;font-weight:800;padding:18px;border-radius:16px;background:#fff;text-align:center;overflow:auto}
    .cqTableScroll{overflow-x:auto}
    .cqTable table,.cqData table{border-collapse:collapse;width:100%;min-width:500px}
    .cqTable th,.cqTable td,.cqData th,.cqData td{border:1px solid #ddd;padding:10px;text-align:left}
    .cqTable th,.cqData th{background:#eee9ff;font-weight:800}
    .cqData{background:#f7fbff}
    .cqTimelineItem{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid #eee}
    .cqTimelineDot,.cqProcessStep>span{min-width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#5b4bea;color:#fff;font-weight:800}
    .cqProcessStep{display:flex;gap:12px;align-items:flex-start;padding:10px 0}
    .cqMindMap{background:linear-gradient(135deg,#f8f1ff,#eef8ff)}
    .cqCode pre{overflow:auto;background:#111827;color:#fff;padding:16px;border-radius:15px}
    .cqOutput,.cqPrompt,.cqExampleMini{padding:12px;border-radius:14px;background:#f4f4f8;margin-top:10px}
    .cqAI{background:linear-gradient(135deg,#f1edff,#edf9ff);border-left:6px solid #6366f1}
    .cqDigital{background:#eef8ff;border-left:6px solid #06b6d4}
    .cqTip{background:#effbf5;border-left:6px solid #22c55e}
    .cqFact{background:#fff8e8;border-left:6px solid #f59e0b}
    .cqWarning{background:#fff1f2;border-left:6px solid #ef4444}
    .cqExam{background:#f1efff;border-left:6px solid #7c3aed}
    .cqApplication{background:#eff9ff;border-left:6px solid #0284c7}
    .cqSummary{background:#f5f5ff;border-left:6px solid #6366f1}
    .cqFlashcard{background:linear-gradient(135deg,#fff7ed,#f4f0ff)}
    .cqQuote{background:#f8f8ff;border-left:6px solid #6366f1;font-size:18px}
    .cqChecklist label{display:block;padding:9px 0}
    .cqGeneric{background:#fafafa;border:1px dashed #aaa}
    .sectionHeader{display:flex;align-items:center;gap:12px;margin-bottom:12px}
    .sectionHeader h3{margin:0}
    .sectionNumber{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#5b4bea;color:#fff;font-weight:800}
    .cqBlock details{margin-top:10px;padding:10px;border-radius:12px;background:#f7f7fb}
    .cqBlock summary{cursor:pointer;font-weight:800}
    .dark .cqBlock{background:#171b2a;color:#f5f7ff}
    .dark .cqQuestion,.dark .cqQ,.dark .cqSteps,.dark .cqAnswer,.dark .formulaContent,.dark .cqOptions span,.dark .cqBlock details{background:#202638;color:#f5f7ff}
  `;

  document.head.appendChild(style);
}

installUniversalRendererStyles();

/*==================================================
  IMPORTANT POINTS
==================================================*/

function renderImportantPoints(points){

  const safePoints = Array.isArray(points) ? points : [];

  safePoints.forEach((point,index)=>{

    const item = document.createElement("li");
    item.className = "cqImportantListItem";

    if (typeof point === "object" && point !== null) {
      item.innerHTML =
        `<strong>${escapeRenderHTML(point.title || point.heading || "Important")}</strong>` +
        (point.text || point.content ? `<div>${renderText(point.text || point.content)}</div>` : "");
    } else {
      item.textContent = String(point);
    }

    importantContainer.appendChild(item);
  });

}

/*==================================================
  KEY TERMS
==================================================*/

function renderKeyTerms(terms){

  const safeTerms = Array.isArray(terms) ? terms : [];

  safeTerms.forEach(term=>{

    const chip = document.createElement("span");

    if (typeof term === "object" && term !== null) {
      chip.textContent = String(term.term || term.title || term.word || "");
      if (term.definition) chip.title = String(term.definition);
    } else {
      chip.textContent = String(term);
    }

    termsContainer.appendChild(chip);
  });

}

/*==================================================
  PACKAGE 3E
  Navigation + Integration
==================================================*/

const backButton=
document.getElementById("backButton");

const bookmarkButton=
document.getElementById("bookmarkButton");

const previousButton=
document.getElementById("previousChapter");

const nextButton=
document.getElementById("nextChapter");

/*==============================
  BACK
==============================*/

if(backButton){

backButton.addEventListener(

"click",

()=>{

window.location.href="index.html";

});

}

/*==============================
  BOOKMARK
==============================*/

if(bookmarkButton){

bookmarkButton.addEventListener(

"click",

()=>{

bookmarkButton.innerHTML=

`

<span class="material-icons-round">

bookmark

</span>

`;

localStorage.setItem(

"cq-bookmark",

chapterKey

);

});

}

/*==============================
  PREVIOUS
==============================*/

if(previousButton){

previousButton.addEventListener(

"click",

()=>{

alert(

"Previous Chapter feature will be available in Package 4."

);

});

}

/*==============================
  NEXT
==============================*/

if(nextButton){

nextButton.addEventListener(

"click",

()=>{

alert(

"Next Chapter feature will be available in Package 4."

);

});

}

/*==============================
  PACKAGE 1 INTEGRATION
==============================*/

/*
In app.js (Dashboard → Notes button),
save the selected chapter before opening notes.html

Example:

localStorage.setItem(
"cq-current-chapter",
chapterKey
);

window.location.href="notes.html";

*/

function updateProgress(chapter){

const total = chapter.sections.length;

const completed = chapter.sections.filter(
section => section.blocks && section.blocks.length > 0
).length;

const percent = Math.round((completed / total) * 100);

progressText.textContent = percent + "%";
progressFill.style.width = percent + "%";

}

const themeBtn=document.getElementById("themeToggle");

if(themeBtn){

if(localStorage.getItem("cq-theme")==="dark"){

document.body.classList.add("dark");
themeBtn.textContent="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("cq-theme","dark");
themeBtn.textContent="☀️";

}else{

localStorage.setItem("cq-theme","light");
themeBtn.textContent="🌙";

}

});  

}

/*==================================================
  PACKAGE 12
  AI DOUBT SOLVER — FINAL
  Chapter-aware browser solver
==================================================*/


function initPackage12AI() {

  const doubtQuestion = document.getElementById("doubtQuestion");
  const askDoubtBtn = document.getElementById("askDoubtBtn");
  const doubtAnswer = document.getElementById("doubtAnswer");

  if (!doubtQuestion || !askDoubtBtn || !doubtAnswer) return;
  if (askDoubtBtn.dataset.aiBound === "true") return;
  askDoubtBtn.dataset.aiBound = "true";

  const escapeHTML = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const clean = value => String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

  const lower = value => clean(value).toLowerCase();

  function showAnswer(html) {
    doubtAnswer.style.display = "block";
    doubtAnswer.style.visibility = "visible";
    doubtAnswer.style.opacity = "1";
    doubtAnswer.innerHTML = `<div class="answerContent">${html}</div>`;
    try { localStorage.setItem("cq-last-ai-answer", html); } catch (e) {}
  }

  function getNumbers(text) {
    const matches = String(text).match(/[-+]?(?:\d+(?:\.\d+)?|\.\d+)/g);
    return matches ? matches.map(Number).filter(Number.isFinite) : [];
  }

  function formatNumber(n) {
    if (!Number.isFinite(n)) return String(n);
    return Number(n.toFixed(8)).toString();
  }

  /* --------------------------------------------------
     MATH ENGINE
     Handles common Class 6–10 school-math problems
     without eval() or unsafe code execution.
  -------------------------------------------------- */

  function wordToNumber(text) {
    const map = {
      zero:0, one:1, two:2, three:3, four:4, five:5, six:6,
      seven:7, eight:8, nine:9, ten:10, eleven:11, twelve:12,
      thirteen:13, fourteen:14, fifteen:15, sixteen:16, seventeen:17,
      eighteen:18, nineteen:19, twenty:20, thirty:30, forty:40,
      fifty:50, sixty:60, seventy:70, eighty:80, ninety:90,
      hundred:100, thousand:1000
    };
    let t = lower(text).replace(/-/g, " ");
    for (const [word, value] of Object.entries(map)) {
      t = t.replace(new RegExp("\\b" + word + "\\b", "g"), String(value));
    }
    return t;
  }

  function solveArithmetic(text) {
    let q = wordToNumber(text);
    q = q.replace(/[?=]/g, " ");
    q = q.replace(/(\d)\s*[x×]\s*(\d)/g, "$1*$2");
    q = q.replace(/\bplus\b|\badd\b|\badded to\b/g, "+");
    q = q.replace(/\bminus\b|\bsubtract\b|\bless\b/g, "-");
    q = q.replace(/\bmultiplied by\b|\btimes\b/g, "*");
    q = q.replace(/\bdivided by\b|\bdivide by\b/g, "/");
    q = q.replace(/\s+/g, " ").trim();

    const match = q.match(/(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)/);
    if (!match) return null;

    const a = Number(match[1]), op = match[2], b = Number(match[3]);
    let result;
    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") {
      if (b === 0) return `<h2>⚠️ Cannot divide by zero</h2>`;
      result = a / b;
    }

    return `
      <div class="answerBox">
        <h3>🧮 Answer</h3>
        <p style="font-size:30px"><strong>${formatNumber(result)}</strong></p>
      </div>
      <div class="explanationBox">
        <h3>📝 Working</h3>
        <p>${formatNumber(a)} ${escapeHTML(op)} ${formatNumber(b)} = <strong>${formatNumber(result)}</strong></p>
      </div>`;
  }

  function solvePercentage(text) {
    const q = lower(text);
    const nums = getNumbers(q);
    if (nums.length < 2) return null;

    let result = null;
    let explanation = "";

    if (/what is|find|calculate|of/.test(q) && /%|percent|percentage/.test(q)) {
      const percent = nums[0];
      const value = nums[1];
      result = value * percent / 100;
      explanation = `${percent}% of ${value} = (${percent}/100) × ${value}`;
    }

    const discount = q.match(/(?:price|marked price|mrp)[^0-9]*([0-9.]+).*?(?:discount)[^0-9]*([0-9.]+)\s*%/);
    if (discount) {
      const price = Number(discount[1]);
      const pct = Number(discount[2]);
      const saved = price * pct / 100;
      result = price - saved;
      explanation = `Discount = ${pct}% of ${price} = ${saved}. Selling price = ${price} − ${saved}.`;
    }

    if (result === null) return null;

    return `
      <div class="answerBox">
        <h3>📊 Answer</h3>
        <p style="font-size:30px"><strong>${formatNumber(result)}</strong></p>
      </div>
      <div class="explanationBox">
        <h3>📝 Step-by-step</h3>
        <p>${escapeHTML(explanation)}</p>
      </div>`;
  }

  function solveAverage(text) {
    if (!/average|mean/.test(lower(text))) return null;
    const nums = getNumbers(text);
    if (nums.length < 2) return null;
    const sum = nums.reduce((a,b) => a+b, 0);
    const avg = sum / nums.length;
    return `
      <div class="answerBox">
        <h3>📊 Mean / Average</h3>
        <p style="font-size:30px"><strong>${formatNumber(avg)}</strong></p>
      </div>
      <p>Sum = ${nums.map(formatNumber).join(" + ")} = ${formatNumber(sum)}</p>
      <p>Average = ${formatNumber(sum)} ÷ ${nums.length} = <strong>${formatNumber(avg)}</strong></p>`;
  }

  function solveSimpleInterest(text) {
    if (!/simple interest|si\b|rate.*interest|interest.*rate/.test(lower(text))) return null;
    const nums = getNumbers(text);
    if (nums.length < 3) return null;
    const [p, r, t] = nums;
    const si = p * r * t / 100;
    const amount = p + si;
    return `
      <div class="answerBox">
        <h3>💰 Simple Interest</h3>
        <p>SI = <strong>${formatNumber(si)}</strong></p>
        <p>Amount = <strong>${formatNumber(amount)}</strong></p>
      </div>
      <p>Formula: SI = (P × R × T) / 100</p>
      <p>= (${formatNumber(p)} × ${formatNumber(r)} × ${formatNumber(t)}) / 100</p>`;
  }

  function solveProfitLoss(text) {
    const q = lower(text);
    if (!/profit|loss|selling price|cost price/.test(q)) return null;
    const nums = getNumbers(q);
    if (nums.length < 2) return null;

    let cp, sp;
    const cpMatch = q.match(/(?:cost price|cp)[^0-9]*([0-9.]+)/);
    const spMatch = q.match(/(?:selling price|sp)[^0-9]*([0-9.]+)/);
    if (cpMatch && spMatch) {
      cp = Number(cpMatch[1]); sp = Number(spMatch[1]);
    } else {
      cp = nums[0]; sp = nums[1];
    }

    const diff = sp - cp;
    const pct = cp === 0 ? NaN : Math.abs(diff) * 100 / cp;
    const type = diff >= 0 ? "Profit" : "Loss";

    return `
      <div class="answerBox">
        <h3>💵 ${type}</h3>
        <p>${type} = <strong>${formatNumber(Math.abs(diff))}</strong></p>
        <p>${type}% = <strong>${formatNumber(pct)}%</strong></p>
      </div>
      <p>${type} = SP − CP = ${formatNumber(sp)} − ${formatNumber(cp)}</p>`;
  }

  function solveSpeedDistance(text) {
    const q = lower(text);
    if (!/speed|distance|time/.test(q)) return null;
    const nums = getNumbers(q);
    if (nums.length < 2) return null;

    let result = null, label = "", formula = "";

    if (/speed/.test(q) && /distance/.test(q) && /time/.test(q)) {
      const distance = nums[0], time = nums[1];
      result = distance / time;
      label = "Speed";
      formula = "Speed = Distance ÷ Time";
    } else if (/distance/.test(q) && /speed/.test(q)) {
      result = nums[0] * nums[1];
      label = "Distance";
      formula = "Distance = Speed × Time";
    } else if (/distance/.test(q) && /time/.test(q)) {
      result = nums[0] / nums[1];
      label = "Speed";
      formula = "Speed = Distance ÷ Time";
    } else return null;

    return `
      <div class="answerBox">
        <h3>🚗 ${label}</h3>
        <p style="font-size:30px"><strong>${formatNumber(result)}</strong></p>
      </div>
      <p>Formula: ${formula}</p>`;
  }

  function solveGeometry(text) {
    const q = lower(text);
    const nums = getNumbers(q);
    if (!nums.length) return null;

    if (/area.*rectangle|rectangle.*area/.test(q) && nums.length >= 2) {
      const a = nums[0] * nums[1];
      return `<div class="answerBox"><h3>▣ Rectangle Area</h3><p style="font-size:30px"><strong>${formatNumber(a)}</strong></p></div><p>Area = length × breadth = ${nums[0]} × ${nums[1]}</p>`;
    }

    if (/perimeter.*rectangle|rectangle.*perimeter/.test(q) && nums.length >= 2) {
      const p = 2 * (nums[0] + nums[1]);
      return `<div class="answerBox"><h3>▣ Rectangle Perimeter</h3><p style="font-size:30px"><strong>${formatNumber(p)}</strong></p></div><p>Perimeter = 2(l + b)</p>`;
    }

    if (/area.*triangle|triangle.*area/.test(q) && nums.length >= 2) {
      const a = 0.5 * nums[0] * nums[1];
      return `<div class="answerBox"><h3>△ Triangle Area</h3><p style="font-size:30px"><strong>${formatNumber(a)}</strong></p></div><p>Area = ½ × base × height</p>`;
    }

    if (/area.*circle|circle.*area/.test(q) && nums.length >= 1) {
      const a = Math.PI * nums[0] * nums[0];
      return `<div class="answerBox"><h3>⭕ Circle Area</h3><p style="font-size:30px"><strong>${formatNumber(a)}</strong></p></div><p>Area = πr² (using π ≈ 3.14159265)</p>`;
    }

    if (/pythagoras|pythagorean|right triangle/.test(q) && nums.length >= 2) {
      const c = Math.sqrt(nums[0] ** 2 + nums[1] ** 2);
      return `<div class="answerBox"><h3>📐 Pythagorean Theorem</h3><p>Hypotenuse = <strong>${formatNumber(c)}</strong></p></div><p>c² = a² + b²</p>`;
    }

    return null;
  }

  function solveLinearEquation(text) {
    const q = lower(text).replace(/,/g, "");
    const m = q.match(/(-?\d+(?:\.\d+)?)\s*x\s*([+-])\s*(\d+(?:\.\d+)?)\s*=\s*(-?\d+(?:\.\d+)?)/);
    if (!m) return null;

    const a = Number(m[1]);
    const sign = m[2] === "+" ? 1 : -1;
    const b = sign * Number(m[3]);
    const c = Number(m[4]);

    if (a === 0) return null;
    const x = (c - b) / a;

    return `
      <div class="answerBox">
        <h3>✏️ Equation Solved</h3>
        <p style="font-size:30px"><strong>x = ${formatNumber(x)}</strong></p>
      </div>
      <div class="explanationBox">
        <h3>📝 Steps</h3>
        <p>${escapeHTML(m[0])}</p>
        <p>${formatNumber(a)}x = ${formatNumber(c - b)}</p>
        <p>x = ${formatNumber(c - b)} ÷ ${formatNumber(a)} = <strong>${formatNumber(x)}</strong></p>
      </div>`;
  }

  function solveNumberPattern(text) {
    const numbers = getNumbers(text);
    if (numbers.length < 2) return null;

    const differences = [];
    for (let i = 1; i < numbers.length; i++) differences.push(numbers[i] - numbers[i-1]);

    if (differences.length && differences.every(d => Math.abs(d - differences[0]) < 1e-9)) {
      const d = differences[0];
      const next = numbers[numbers.length - 1] + d;
      return `
        <div class="answerBox">
          <h3>🔢 Pattern Solved</h3>
          <p>${numbers.map(formatNumber).join(" → ")} → <strong>${formatNumber(next)}</strong></p>
        </div>
        <p>Rule: ${d >= 0 ? "add" : "subtract"} ${formatNumber(Math.abs(d))} each time.</p>`;
    }

    if (!numbers.includes(0)) {
      const ratios = [];
      for (let i = 1; i < numbers.length; i++) ratios.push(numbers[i] / numbers[i-1]);
      if (ratios.length && ratios.every(r => Math.abs(r - ratios[0]) < 1e-9)) {
        const r = ratios[0];
        const next = numbers[numbers.length - 1] * r;
        return `
          <div class="answerBox">
            <h3>🔢 Pattern Solved</h3>
            <p>Next number = <strong>${formatNumber(next)}</strong></p>
          </div>
          <p>Rule: multiply by ${formatNumber(r)} each time.</p>`;
      }
    }

    return null;
  }

  function mathAnswer(question) {
    const q = lower(question);

    return (
      solveLinearEquation(question) ||
      solvePercentage(question) ||
      solveAverage(question) ||
      solveSimpleInterest(question) ||
      solveProfitLoss(question) ||
      solveSpeedDistance(question) ||
      solveGeometry(question) ||
      solveNumberPattern(question) ||
      solveArithmetic(question)
    );
  }

  /* --------------------------------------------------
     KNOWLEDGE ENGINE
     Uses the actual chapter registry + chapter files.
     This lets the chatbot search the complete project
     knowledge base instead of only the current chapter.
  -------------------------------------------------- */

  let knowledgeCache = null;
  let knowledgePromise = null;

  function sourceToObject(source) {
    let converted = String(source);

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+ChapterData\s*=/,
      "$1window.__CQ_KNOWLEDGE_CHAPTER ="
    );

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+chapterData\s*=/,
      "$1window.__CQ_KNOWLEDGE_CHAPTER ="
    );

    converted = converted.replace(
      /window\.ChapterData\s*=/,
      "window.__CQ_KNOWLEDGE_CHAPTER ="
    );

    if (!/window\.__CQ_KNOWLEDGE_CHAPTER\s*=/.test(converted)) return null;

    try {
      window.__CQ_KNOWLEDGE_CHAPTER = null;
      new Function("window", converted)(window);
      const value = window.__CQ_KNOWLEDGE_CHAPTER;
      return value && Array.isArray(value.sections) ? value : null;
    } catch (e) {
      console.warn("Knowledge chapter skipped:", e);
      return null;
    }
  }

  async function buildKnowledgeBase() {
    if (knowledgeCache) return knowledgeCache;
    if (knowledgePromise) return knowledgePromise;

    knowledgePromise = (async () => {
      try {
        if (!Array.isArray(window.ChapterRegistry)) {
          if (typeof loadExternalScript === "function") {
            await loadExternalScript("js/chapter-registry.js");
          }
        }

        const registry = Array.isArray(window.ChapterRegistry)
          ? window.ChapterRegistry.filter(x => x && x.enabled !== false && x.file)
          : [];

        const results = [];

        for (const entry of registry) {
          try {
            const response = await fetch(entry.file, { cache: "no-store" });
            if (!response.ok) continue;
            const source = await response.text();
            const chapter = sourceToObject(source);
            if (!chapter) continue;

            results.push({
              id: entry.id || chapter.id || "",
              title: entry.title || chapter.title || "",
              subject: entry.subject || "",
              className: entry.class || entry.className || "",
              chapter
            });
          } catch (e) {
            console.warn("Could not index:", entry.file, e);
          }
        }

        knowledgeCache = results;
        return results;
      } finally {
        knowledgePromise = null;
      }
    })();

    return knowledgePromise;
  }

  function chapterText(chapter) {
    const parts = [];
    if (chapter.title) parts.push(chapter.title);
    if (chapter.description) parts.push(chapter.description);
    if (chapter.summary) parts.push(chapter.summary);

    (chapter.sections || []).forEach(section => {
      if (section.title) parts.push(section.title);
      if (section.content) parts.push(section.content);
      (section.blocks || []).forEach(block => {
        if (block.title) parts.push(block.title);
        if (block.text) parts.push(block.text);
      });
    });

    (Array.isArray(chapter.importantPoints) ? chapter.importantPoints : []).forEach(x => parts.push(typeof x === "object" ? (x.text || x.content || x.title || "") : x));
    (Array.isArray(chapter.keyTerms) ? chapter.keyTerms : []).forEach(x => parts.push(typeof x === "object" ? (x.definition || x.term || x.title || "") : x));

    return clean(parts.join(" "));
  }

  function makeTokens(question) {
    return lower(question)
      .replace(/[^a-z0-9]+/g, " ")
      .split(/\s+/)
      .filter(w => w.length >= 3 && ![
        "what","when","where","which","who","whom","why","how",
        "does","do","did","can","could","would","should","the",
        "this","that","about","explain","tell","give","please",
        "find","calculate","solve","answer","class","chapter"
      ].includes(w));
  }

  function scoreText(tokens, text) {
    const source = lower(text);
    let score = 0;
    tokens.forEach(token => {
      if (source.includes(token)) score += token.length >= 7 ? 3 : 1;
    });
    return score;
  }

  function knowledgeAnswer(question, knowledge) {
    const tokens = makeTokens(question);
    if (!tokens.length || !knowledge.length) return null;

    const candidates = [];

    knowledge.forEach(item => {
      (item.chapter.sections || []).forEach(section => {
        const searchable = [
          item.title,
          item.subject,
          item.className,
          section.title || "",
          section.content || "",
          ...(Array.isArray(section.blocks) ? section.blocks : []).flatMap(b => [b.title || "", b.text || b.content || b.description || ""])
        ].join(" ");

        const score = scoreText(tokens, searchable);
        if (score > 0) {
          candidates.push({ item, section, score });
        }
      });
    });

    candidates.sort((a,b) => b.score - a.score);

    const best = candidates[0];
    if (!best || best.score < 2) return null;

    const blocks = (best.section.blocks || []).slice(0, 4);

    return `
      <div class="answerBox">
        <h3>📚 ${escapeHTML(best.item.title || "Relevant Chapter")}</h3>
        ${best.item.className ? `<p><strong>Class:</strong> ${escapeHTML(best.item.className)}</p>` : ""}
        ${best.item.subject ? `<p><strong>Subject:</strong> ${escapeHTML(best.item.subject)}</p>` : ""}
      </div>
      <div class="explanationBox">
        <h3>💡 ${escapeHTML(best.section.title || "Explanation")}</h3>
        ${
          blocks.length
          ? blocks.map(b => `
              <div style="margin:12px 0">
                <strong>${escapeHTML(b.title || b.type || "Concept")}</strong>
                <p>${escapeHTML(b.text || "")}</p>
              </div>
            `).join("")
          : `<p>${escapeHTML(best.section.content || "")}</p>`
        }
      </div>
      <div class="tipBox">
        <h3>🧠 Study Tip</h3>
        <p>This answer is taken from the project's indexed Class 6–10 learning content.</p>
      </div>`;
  }

  function currentChapterAnswer(question) {
    if (!window.CQ_ACTIVE_CHAPTER) return null;
    return knowledgeAnswer(question, [{
      title: window.CQ_ACTIVE_CHAPTER.title,
      subject: "",
      className: "",
      chapter: window.CQ_ACTIVE_CHAPTER
    }]);
  }

  async function buildAnswer(question) {
    const q = clean(question);

    if (!q) {
      return `<h2>⚠️ Ask me something</h2><p>Type a maths problem, science concept, definition, word problem, or question from any subject.</p>`;
    }

    const math = mathAnswer(q);
    if (math) return math;

    const current = currentChapterAnswer(q);
    if (current) return current;

    const knowledge = await buildKnowledgeBase();
    const allSubjects = knowledgeAnswer(q, knowledge);
    if (allSubjects) return allSubjects;

    return `
      <div style="font-size:50px">🤔</div>
      <h2>I couldn't find a reliable answer yet.</h2>
      <p>I can solve many Class 6–10 school-math problems and search the project's indexed chapter content across subjects.</p>
      <div class="exampleBox">
        <h3>Try asking</h3>
        <p>• Solve: 3x + 5 = 20</p>
        <p>• What is 25% of 240?</p>
        <p>• Explain photosynthesis.</p>
        <p>• Why does a rainbow form?</p>
        <p>• What is democracy?</p>
        <p>• Explain the main idea of this chapter.</p>
      </div>`;
  }

  askDoubtBtn.addEventListener("click", async function(event) {
    event.preventDefault();

    const question = doubtQuestion.value.trim();

    if (!question) {
      showAnswer(`<h2>⚠️ Please type a question</h2><p>Ask me anything from your Class 6–10 learning content.</p>`);
      return;
    }

    askDoubtBtn.disabled = true;
    askDoubtBtn.innerHTML = "⏳ Thinking...";

    showAnswer(`
      <div style="font-size:50px">🤖</div>
      <h2>Thinking...</h2>
      <p>Checking maths, the current chapter, and the complete indexed syllabus.</p>
    `);

    try {
      const answer = await buildAnswer(question);
      showAnswer(answer);
    } catch (error) {
      console.error("Concept Quizzer AI Engine:", error);
      showAnswer(`
        <div style="font-size:50px">⚠️</div>
        <h2>Something went wrong</h2>
        <p>The question could not be processed. Please try again.</p>
      `);
    } finally {
      askDoubtBtn.disabled = false;
      askDoubtBtn.innerHTML = "🤖 Ask AI";
    }
  });

  try {
    const savedAnswer = localStorage.getItem("cq-last-ai-answer");
    if (savedAnswer) {
      doubtAnswer.style.display = "block";
      doubtAnswer.innerHTML = `<div class="answerContent">${savedAnswer}</div>`;
    }
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", initPackage12AI);
document.addEventListener("cq-ai-ready", initPackage12AI);

/*==================================================
  UNIVERSAL READER + AI UI
==================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".notesContainer");
  if (!main) return;

  if (!document.getElementById("chapterReader")) {
    const reader = document.createElement("section");
    reader.id = "chapterReader";
    reader.className = "readerCard";
    reader.innerHTML = `
      <h2>📖 Chapter Reader</h2>
      <p id="readerStatus">Listen to the chapter using your device voice.</p>
      <div class="readerControls">
        <button type="button" id="readerPlay">▶️ Read</button>
        <button type="button" id="readerPause">⏸️ Pause</button>
        <button type="button" id="readerStop">⏹️ Stop</button>
      </div>
    `;

    const searchBox = document.querySelector(".searchBox");
    if (searchBox) searchBox.insertAdjacentElement("afterend", reader);
    else main.prepend(reader);

    const getText = () => [
      "chapterTitle",
      "notesDescription",
      "notesContent",
      "importantPoints",
      "chapterSummary"
    ].map(id => {
      const el = document.getElementById(id);
      return el ? el.innerText : "";
    }).join(". ").trim();

    const status = document.getElementById("readerStatus");
    const playButton = document.getElementById("readerPlay");
    const pauseButton = document.getElementById("readerPause");
    const stopButton = document.getElementById("readerStop");

    let readerChunks = [];
    let readerIndex = 0;
    let readerStopped = false;

    function splitReaderText(text) {
      const clean = String(text || "").replace(/\s+/g, " ").trim();
      if (!clean) return [];

      const sentences = clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [clean];
      const chunks = [];
      let current = "";

      sentences.forEach(sentence => {
        const part = sentence.trim();
        if (!part) return;

        if ((current + " " + part).trim().length > 180) {
          if (current) chunks.push(current.trim());
          current = part;
        } else {
          current = (current + " " + part).trim();
        }
      });

      if (current) chunks.push(current.trim());
      return chunks;
    }

    function speakNextReaderChunk() {
      if (readerStopped || readerIndex >= readerChunks.length) {
        if (!readerStopped) status.textContent = "✅ Reading finished.";
        return;
      }

      const utterance = new SpeechSynthesisUtterance(readerChunks[readerIndex]);
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utterance.onstart = () => {
        status.textContent =
          "🔊 Reading chapter... " +
          (readerIndex + 1) + "/" + readerChunks.length;
      };

      utterance.onend = () => {
        if (readerStopped) return;
        readerIndex++;
        setTimeout(speakNextReaderChunk, 60);
      };

      utterance.onerror = () => {
        if (!readerStopped) {
          status.textContent = "⚠️ Voice reading stopped. Tap Read to try again.";
        }
      };

      window.speechSynthesis.speak(utterance);
    }

    playButton.onclick = () => {
      if (!("speechSynthesis" in window)) {
        status.textContent = "Voice reading is not supported by this browser.";
        return;
      }

      const content = getText();

      if (!content) {
        status.textContent = "Chapter is still loading.";
        return;
      }

      window.speechSynthesis.cancel();
      readerStopped = false;
      readerChunks = splitReaderText(content);
      readerIndex = 0;

      if (!readerChunks.length) {
        status.textContent = "Chapter is still loading.";
        return;
      }

      speakNextReaderChunk();
    };

    pauseButton.onclick = () => {
      if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        status.textContent = "⏸️ Reading paused.";
      }
    };

    stopButton.onclick = () => {
      if ("speechSynthesis" in window) {
        readerStopped = true;
        window.speechSynthesis.cancel();
        status.textContent = "⏹️ Reading stopped.";
      }
    };

  }

  if (!document.getElementById("doubtQuestion")) {
    const ai = document.createElement("section");
    ai.id = "aiDoubtSolver";
    ai.className = "aiCard";
    ai.innerHTML = `
      <h2>🤖 AI Doubt Solver</h2>
      <p>Ask a question about the current chapter.</p>
      <textarea id="doubtQuestion" rows="3"
        placeholder="Example: What is the main concept of this chapter?"></textarea>
      <button type="button" id="askDoubtBtn">🤖 Ask AI</button>
      <div id="doubtAnswer" class="answerBox" style="display:none;"></div>
    `;

    const summary = document.querySelector(".summaryCard");
    const nav = document.querySelector(".navigationButtons");

    if (summary) summary.insertAdjacentElement("afterend", ai);
    else if (nav) nav.insertAdjacentElement("beforebegin", ai);
    else main.appendChild(ai);

    /* Package 12 owns the AI button logic.
       Trigger it after the dynamic UI has been inserted. */
    document.dispatchEvent(new Event("cq-ai-ready"));
  }
});
