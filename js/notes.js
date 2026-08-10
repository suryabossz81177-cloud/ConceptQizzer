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

const chapterKey =
  localStorage.getItem("cq-current-chapter") || "";

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

    let entry =
      registry.find(
        chapter => chapter && chapter.id === key
      );

    /*
      Compatibility fallback:
      If an older app.js stored a chapter key with a prefix,
      try matching the final slug.
    */
    if (!entry) {
      const normalizedKey =
        String(key)
          .toLowerCase()
          .replace(/^\d+-[^-]+-/, "");

      entry = registry.find(chapter => {
        if (!chapter) return false;

        const id =
          String(chapter.id || "").toLowerCase();

        return (
          id === normalizedKey ||
          id.endsWith("-" + normalizedKey)
        );
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
    const converted =
      source.replace(
        /(^|\n)\s*const\s+ChapterData\s*=/,
        "$1window.CQ_LOADED_CHAPTER ="
      );

    if (converted === source) {
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

sections.forEach((section,index)=>{

const card=document.createElement("div");

card.className="noteCard";

  card.dataset.index = index;

let html=`<h3>${section.title}</h3>`;

if(section.blocks){

section.blocks.forEach(block=>{

if(block.type==="paragraph"){

html+=`<p>${block.text}</p>`;

}

else if(block.type==="definition"){

html+=`
<div class="definitionBox">
<h4>${block.title}</h4>
<p>${block.text}</p>
</div>
`;

}

else if(block.type==="example"){

html+=`
<div class="exampleBox">
<h4>${block.title}</h4>
<p>${block.text}</p>
</div>
`;

}

  else if(block.type==="application"){

html+=`
<div class="applicationBox">
<h4>${block.title}</h4>
<p>${block.text}</p>
</div>
`;

}

  else if(block.type==="fact"){

html+=`
<div class="factBox">
<h4>💡 ${block.title}</h4>
<p>${block.text}</p>
</div>
`;

}

else if(block.type==="warning"){

html+=`
<div class="warningBox">
<h4>⚠️ ${block.title}</h4>
<p>${block.text}</p>
</div>
`;

}

else if(block.type==="tip"){

html+=`
<div class="tipBox">
<h4>🧠 ${block.title}</h4>
<p>${block.text}</p>
</div>
`;

}

else if(block.type==="examTip"){

html+=`
<div class="examBox">
<h4>🎯 ${block.title}</h4>
<p>${block.text}</p>
</div>
`;

}

else if(block.type==="summary"){

html+=`
<div class="infoCard">
<h4>📌 Chapter Summary</h4>
<p>${block.text}</p>
</div>
`;

}
  
});

}else{

html+=`<p>${section.content}</p>`;

}

card.innerHTML=html;

notesContainer.appendChild(card);

  card.addEventListener("click", () => {
    localStorage.setItem(
        "cq-last-read-" + chapterKey,
        index
    );
});

  const searchInput = document.getElementById("chapterSearch");

if (searchInput && !searchInput.dataset.bound) {

    searchInput.dataset.bound = "true";

    searchInput.addEventListener("input", function () {

        const query = this.value.toLowerCase();

        document.querySelectorAll(".noteCard").forEach(card => {

            const text = card.textContent.toLowerCase();

            card.style.display = text.includes(query) ? "" : "none";

        });

    });

}

});

}
/*==================================================
  IMPORTANT POINTS
==================================================*/

function renderImportantPoints(points){

points.forEach(point=>{

const item=

document.createElement("li");

item.textContent=

point;

importantContainer.appendChild(item);

});

}

/*==================================================
  KEY TERMS
==================================================*/

function renderKeyTerms(terms){

terms.forEach(term=>{

const chip=

document.createElement("span");

chip.textContent=

term;

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

document.addEventListener("DOMContentLoaded", function () {

  const doubtQuestion = document.getElementById("doubtQuestion");
  const askDoubtBtn = document.getElementById("askDoubtBtn");
  const doubtAnswer = document.getElementById("doubtAnswer");

  if (!doubtQuestion || !askDoubtBtn || !doubtAnswer) {
    console.warn("AI Doubt Solver elements not found.");
    return;
  }

  const escapeHTML = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  function showAnswer(html) {
    doubtAnswer.style.display = "block";
    doubtAnswer.style.visibility = "visible";
    doubtAnswer.style.opacity = "1";
    doubtAnswer.innerHTML = `<div class="answerContent">${html}</div>`;

    try {
      localStorage.setItem("cq-last-ai-answer", html);
    } catch (e) {}
  }

  function getNumbers(text) {
    const matches = text.match(/[-+]?(?:\d+(?:\.\d+)?|\.\d+)/g);
    return matches ? matches.map(Number).filter(Number.isFinite) : [];
  }

  function formatNumber(n) {
    if (!Number.isFinite(n)) return String(n);
    return Number(n.toFixed(8)).toString();
  }

  function chapterText() {
    if (!activeChapter) return "";

    const parts = [];

    if (activeChapter.title) parts.push(activeChapter.title);
    if (activeChapter.description) parts.push(activeChapter.description);
    if (activeChapter.summary) parts.push(activeChapter.summary);

    (activeChapter.sections || []).forEach(section => {
      if (section.title) parts.push(section.title);

      (section.blocks || []).forEach(block => {
        if (block.title) parts.push(block.title);
        if (block.text) parts.push(block.text);
      });

      if (section.content) parts.push(section.content);
    });

    (activeChapter.importantPoints || []).forEach(x => parts.push(x));
    (activeChapter.keyTerms || []).forEach(x => parts.push(x));

    return parts.join(" ");
  }

  function findChapterAnswer(question) {
    if (!activeChapter) return null;

    const q = question.toLowerCase();
    const sections = activeChapter.sections || [];

    /* Exact/common concept questions from the chapter */
    const conceptMap = [
      {
        keys: ["what is a pattern", "define pattern", "meaning of pattern"],
        title: "What is a Pattern?",
        find: ["pattern"]
      },
      {
        keys: ["what is a number pattern", "define number pattern"],
        title: "What is a Number Pattern?",
        find: ["patterns-in-numbers"]
      },
      {
        keys: ["what is a shape pattern", "define shape pattern"],
        title: "What is a Shape Pattern?",
        find: ["patterns-in-shapes"]
      },
      {
        keys: ["how to find the rule", "how do i find the rule", "what is the rule"],
        title: "How to Find the Rule",
        find: ["finding-the-rule"]
      },
      {
        keys: ["why are patterns important", "importance of patterns", "why study patterns"],
        title: "Importance of Patterns",
        find: ["importance-of-patterns"]
      },
      {
        keys: ["real life", "everyday life", "where are patterns used", "application of patterns"],
        title: "Patterns in Everyday Life",
        find: ["real-life-patterns"]
      }
    ];

    const match = conceptMap.find(item =>
      item.keys.some(key => q.includes(key))
    );

    if (match) {
      const section = sections.find(s =>
        match.find.some(id =>
          s.id === id ||
          s.title.toLowerCase().includes(id.replace(/-/g, " "))
        )
      );

      if (section) {
        const blocks = section.blocks || [];
        const definition = blocks.find(b => b.type === "definition");
        const example = blocks.find(b => b.type === "example");
        const paragraph = blocks.find(b => b.type === "paragraph");
        const tip = blocks.find(b =>
          b.type === "tip" || b.type === "application" || b.type === "examTip"
        );

        return `
          <div style="font-size:50px;">📚</div>
          <h2>${escapeHTML(match.title)}</h2>

          ${definition ? `
            <div class="definitionBox">
              <h3>📖 Definition</h3>
              <p>${escapeHTML(definition.text)}</p>
            </div>
          ` : ""}

          ${paragraph ? `
            <p>${escapeHTML(paragraph.text)}</p>
          ` : ""}

          ${example ? `
            <div class="exampleBox">
              <h3>💡 Example</h3>
              <p>${escapeHTML(example.text)}</p>
            </div>
          ` : ""}

          ${tip ? `
            <div class="tipBox">
              <h3>🧠 Remember</h3>
              <p>${escapeHTML(tip.text)}</p>
            </div>
          ` : ""}
        `;
      }
    }

    /* Keyword-based chapter search */
    const words = q
      .replace(/[?.,!]/g, " ")
      .split(/\s+/)
      .filter(w => w.length >= 4);

    let bestSection = null;
    let bestScore = 0;

    sections.forEach(section => {
      const searchable = [
        section.title || "",
        section.content || "",
        ...(section.blocks || []).flatMap(b => [
          b.title || "",
          b.text || ""
        ])
      ].join(" ").toLowerCase();

      const score = words.reduce(
        (total, word) => total + (searchable.includes(word) ? 1 : 0),
        0
      );

      if (score > bestScore) {
        bestScore = score;
        bestSection = section;
      }
    });

    if (bestSection && bestScore >= 1) {
      const blocks = bestSection.blocks || [];
      const definition = blocks.find(b => b.type === "definition");
      const example = blocks.find(b => b.type === "example");
      const paragraph = blocks.find(b => b.type === "paragraph");

      return `
        <div style="font-size:50px;">📚</div>
        <h2>${escapeHTML(bestSection.title)}</h2>

        ${definition ? `
          <div class="definitionBox">
            <h3>📖 Key Concept</h3>
            <p>${escapeHTML(definition.text)}</p>
          </div>
        ` : ""}

        ${paragraph ? `
          <p>${escapeHTML(paragraph.text)}</p>
        ` : ""}

        ${example ? `
          <div class="exampleBox">
            <h3>💡 Example</h3>
            <p>${escapeHTML(example.text)}</p>
          </div>
        ` : ""}

        <div class="tipBox">
          <h3>🧠 Chapter Tip</h3>
          <p>
            This answer is based on the current chapter notes.
            Check the related section above for the full explanation.
          </p>
        </div>
      `;
    }

    return null;
  }

  function solveNumberPattern(question) {
    const numbers = getNumbers(question);

    if (numbers.length < 2) return null;

    /* Constant difference: + / - */
    const differences = [];
    for (let i = 1; i < numbers.length; i++) {
      differences.push(numbers[i] - numbers[i - 1]);
    }

    const sameDifference = differences.every(
      d => Math.abs(d - differences[0]) < 0.000001
    );

    if (sameDifference) {
      const d = differences[0];
      const next = numbers[numbers.length - 1] + d;

      let rule = "The number stays the same.";
      if (d > 0) rule = `Add ${formatNumber(d)} each time.`;
      if (d < 0) rule = `Subtract ${formatNumber(Math.abs(d))} each time.`;

      return `
        <div style="font-size:50px;">🎯</div>
        <h2>Pattern Solved!</h2>

        <div class="exampleBox">
          <h3>🔢 Your Pattern</h3>
          <p style="font-size:22px;">
            <strong>${numbers.map(formatNumber).join(" → ")}</strong>
          </p>
        </div>

        <div class="tipBox">
          <h3>📐 Rule</h3>
          <p><strong>${rule}</strong></p>
        </div>

        <div class="answerBox">
          <h3>✅ Next Number</h3>
          <p style="font-size:36px;">
            <strong>${formatNumber(next)}</strong>
          </p>
        </div>

        <div class="explanationBox">
          <h3>🧠 Explanation</h3>
          <p>
            ${formatNumber(numbers[numbers.length - 1])}
            ${d >= 0 ? "+" : "−"}
            ${formatNumber(Math.abs(d))}
            =
            <strong>${formatNumber(next)}</strong>
          </p>
        </div>
      `;
    }

    /* Constant ratio: × / ÷ */
    if (!numbers.includes(0)) {
      const ratios = [];

      for (let i = 1; i < numbers.length; i++) {
        ratios.push(numbers[i] / numbers[i - 1]);
      }

      const sameRatio = ratios.every(
        r => Math.abs(r - ratios[0]) < 0.000001
      );

      if (sameRatio && Number.isFinite(ratios[0])) {
        const r = ratios[0];
        const next = numbers[numbers.length - 1] * r;

        let rule = `Multiply by ${formatNumber(r)} each time.`;

        if (r > 0 && r < 1) {
          rule = `Divide by ${formatNumber(1 / r)} each time.`;
        }

        return `
          <div style="font-size:50px;">🎯</div>
          <h2>Pattern Solved!</h2>

          <div class="exampleBox">
            <h3>🔢 Your Pattern</h3>
            <p style="font-size:22px;">
              <strong>${numbers.map(formatNumber).join(" → ")}</strong>
            </p>
          </div>

          <div class="tipBox">
            <h3>📐 Rule</h3>
            <p><strong>${rule}</strong></p>
          </div>

          <div class="answerBox">
            <h3>✅ Next Number</h3>
            <p style="font-size:36px;">
              <strong>${formatNumber(next)}</strong>
            </p>
          </div>
        `;
      }
    }

    /* Alternating difference */
    if (differences.length >= 3) {
      const a = differences[0];
      const b = differences[1];

      const alternating = differences.every((d, i) =>
        Math.abs(d - (i % 2 === 0 ? a : b)) < 0.000001
      );

      if (alternating) {
        const nextDifference =
          differences.length % 2 === 0 ? a : b;

        const next =
          numbers[numbers.length - 1] + nextDifference;

        return `
          <div style="font-size:50px;">🔁</div>
          <h2>Alternating Pattern</h2>

          <div class="exampleBox">
            <h3>🔢 Pattern</h3>
            <p style="font-size:22px;">
              <strong>${numbers.map(formatNumber).join(" → ")}</strong>
            </p>
          </div>

          <div class="tipBox">
            <h3>📐 Rule</h3>
            <p>
              The differences alternate between
              <strong>${formatNumber(a)}</strong> and
              <strong>${formatNumber(b)}</strong>.
            </p>
          </div>

          <div class="answerBox">
            <h3>✅ Next Number</h3>
            <p style="font-size:36px;">
              <strong>${formatNumber(next)}</strong>
            </p>
          </div>
        `;
      }
    }

    /* Repeating cycle */
    for (let size = 1; size <= Math.floor(numbers.length / 2); size++) {
      let valid = true;

      for (let i = size; i < numbers.length; i++) {
        if (Math.abs(numbers[i] - numbers[i % size]) > 0.000001) {
          valid = false;
          break;
        }
      }

      if (valid) {
        const next = numbers[numbers.length % size];

        return `
          <div style="font-size:50px;">🔁</div>
          <h2>Repeating Pattern</h2>

          <div class="exampleBox">
            <h3>🔢 Pattern</h3>
            <p style="font-size:22px;">
              <strong>${numbers.map(formatNumber).join(" → ")}</strong>
            </p>
          </div>

          <div class="tipBox">
            <h3>📐 Rule</h3>
            <p>
              The sequence repeats a cycle of
              <strong>${size}</strong> number(s).
            </p>
          </div>

          <div class="answerBox">
            <h3>✅ Next Number</h3>
            <p style="font-size:36px;">
              <strong>${formatNumber(next)}</strong>
            </p>
          </div>
        `;
      }
    }

    return `
      <div style="font-size:50px;">🔍</div>
      <h2>Pattern Needs More Analysis</h2>
      <p>
        I found the numbers, but they do not follow one of the
        simple rules supported by this solver.
      </p>
      <div class="tipBox">
        <h3>💡 Try</h3>
        <p>
          Check addition, subtraction, multiplication, division
          or an alternating rule.
        </p>
      </div>
    `;
  }

  function buildAnswer(question) {

    /* Number patterns have priority */
    const numbers = getNumbers(question);

    if (numbers.length >= 2) {
      return solveNumberPattern(question);
    }

    /* Chapter-aware answer */
    const chapterAnswer = findChapterAnswer(question);

    if (chapterAnswer) {
      return chapterAnswer;
    }

    return `
      <div style="font-size:50px;">🤔</div>
      <h2>I couldn't find that in this chapter</h2>

      <p>
        Try asking a question specifically about
        <strong>${escapeHTML(
          typeof ChapterData !== "undefined"
            ? activeChapter.title
            : "this chapter"
        )}</strong>.
      </p>

      <div class="exampleBox">
        <h3>💡 Try asking</h3>
        <p>What is a pattern?</p>
        <p>What is a number pattern?</p>
        <p>How do I find the rule?</p>
        <p>2, 4, 6, 8, ?</p>
      </div>
    `;
  }

  askDoubtBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const question = doubtQuestion.value.trim();

    if (!question) {
      showAnswer(`
        <div style="font-size:50px;">⚠️</div>
        <h2>Please type a question</h2>
        <p>Ask something about this chapter.</p>
      `);
      return;
    }

    askDoubtBtn.disabled = true;
    askDoubtBtn.innerHTML = "⏳ Solving...";

    showAnswer(`
      <div style="font-size:50px;">🤖</div>
      <h2>Thinking...</h2>
      <p>Checking your question against this chapter.</p>
    `);

    setTimeout(function () {
      try {
        showAnswer(buildAnswer(question));
      } catch (error) {
        console.error("Package 12 Final Error:", error);

        showAnswer(`
          <div style="font-size:50px;">⚠️</div>
          <h2>Something went wrong</h2>
          <p>Please try the question again.</p>
        `);
      }

      askDoubtBtn.disabled = false;
      askDoubtBtn.innerHTML = "🤖 Ask AI";
    }, 450);
  });

  /* Restore the previous answer if the page is revisited */
  try {
    const savedAnswer = localStorage.getItem("cq-last-ai-answer");
    if (savedAnswer && doubtAnswer) {
      doubtAnswer.style.display = "block";
    }
  } catch (e) {}

});
