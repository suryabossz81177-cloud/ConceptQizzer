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

  renderExperiments(chapter.experiments || []);

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
  INTERACTIVE VIRTUAL SCIENCE LAB
==================================================*/

function renderExperiments(experiments){
  const section = document.getElementById("virtualLabSection");
  const grid = document.getElementById("virtualLabGrid");
  const count = document.getElementById("virtualLabCount");

  if(!section || !grid){ return; }
  grid.innerHTML = "";

  if(!Array.isArray(experiments) || experiments.length === 0){
    section.style.display = "none";
    return;
  }

  section.style.display = "block";
  if(count) count.textContent = experiments.length + " Experiments";

  experiments.forEach(function(exp, index){
    const card = document.createElement("article");
    card.className = "scienceLabCard";
    card.dataset.experiment = exp.id || ("experiment-" + index);

    const controlsHTML = (exp.controls || []).map(function(control){
      if(control.type === "select"){
        const options = (control.options || []).map(function(label, i){
          const value = (control.values && control.values[i]) || label;
          return `<option value="${escapeAttr(value)}">${escapeHTML(label)}</option>`;
        }).join("");
        return `<label class="labControl"><span>${escapeHTML(control.label)}</span><select data-control="${escapeAttr(control.id)}">${options}</select></label>`;
      }
      const value = control.value != null ? control.value : control.min;
      const unit = control.unit || "";
      return `<label class="labControl"><span class="labControlTop"><span>${escapeHTML(control.label)}</span><b data-value-for="${escapeAttr(control.id)}">${escapeHTML(value + unit)}</b></span><input data-control="${escapeAttr(control.id)}" type="range" min="${escapeAttr(control.min)}" max="${escapeAttr(control.max)}" step="${escapeAttr(control.step || 1)}" value="${escapeAttr(value)}" data-unit="${escapeAttr(unit)}"></label>`;
    }).join("");

    card.innerHTML = `
      <div class="scienceLabHeader"><div class="scienceLabIcon">${exp.icon || "🔬"}</div><div><span class="scienceLabBadge">Experiment ${index + 1} • ${escapeHTML(exp.badge || "Virtual investigation")}</span><h3>${escapeHTML(exp.title || "Virtual Experiment")}</h3></div></div>
      <p class="scienceLabGoal"><b>Mission:</b> ${escapeHTML(exp.goal || "Investigate the effect of changing a variable.")}</p>
      <div class="scienceLabQuestion"><b>🔎 Question:</b> ${escapeHTML(exp.question || "What happens when a variable changes?")}</div>
      <div class="scienceLabStage"><div class="stageGraphic"><div class="stageObject">${exp.icon || "🔬"}</div><div class="stageLabel">Change the controls and run the test</div></div><div class="stageHint">Variables: ${(exp.variables || []).map(escapeHTML).join(" • ")}</div></div>
      <div class="labControlsGrid">${controlsHTML}</div>
      <div class="labPrediction"><label><b>Before you run:</b> What do you predict?</label><select data-prediction><option value="">Choose a prediction</option><option value="increase">The result will increase</option><option value="decrease">The result will decrease</option><option value="little">There will be little change</option><option value="different">A different condition will give a better result</option></select></div>
      <div class="scienceLabActions"><button type="button" class="labRunButton">▶ Run Experiment</button><button type="button" class="labResetButton">↺ Reset</button></div>
      <div class="scienceLabResult" aria-live="polite"><div class="resultHeadline"></div><div class="resultMeter"><i></i></div><p class="resultExplanation"></p></div>
      <div class="trialArea"><div class="trialHeader"><b>📋 Your Trial Record</b><button type="button" class="clearTrials">Clear</button></div><div class="trialTableWrap"><table class="trialTable"><thead><tr><th>#</th><th>Settings</th><th>Result</th></tr></thead><tbody></tbody></table></div></div>`;

    grid.appendChild(card);
    const controls = Array.from(card.querySelectorAll("[data-control]"));

    controls.forEach(function(input){
      if(input.type === "range"){
        input.addEventListener("input", function(){
          const out = card.querySelector(`[data-value-for="${cssEscape(input.dataset.control)}"]`);
          if(out) out.textContent = input.value + (input.dataset.unit || "");
        });
      }
    });

    function readValues(){
      const values = {};
      controls.forEach(function(input){ values[input.dataset.control] = input.type === "range" ? Number(input.value) : input.value; });
      return values;
    }

    function addTrial(result, values){
      const tbody = card.querySelector("tbody");
      const row = document.createElement("tr");
      const trialNumber = tbody.children.length + 1;
      const settings = Object.keys(values).map(function(key){ return key + ": " + values[key]; }).join(" • ");
      row.innerHTML = `<td>${trialNumber}</td><td>${escapeHTML(settings)}</td><td>${escapeHTML(String(result.value) + " " + (result.unit || ""))}</td>`;
      tbody.appendChild(row);
      card.classList.add("experimentCompleted");

      const storageKey = "cq-science-lab-trials-" + (activeChapter && activeChapter.id ? activeChapter.id : chapterKey) + "-" + exp.id;
      try{
        const old = JSON.parse(localStorage.getItem(storageKey) || "[]");
        old.push({settings:values, result:result});
        localStorage.setItem(storageKey, JSON.stringify(old.slice(-12)));
      }catch(e){}
    }

    card.querySelector(".labRunButton").addEventListener("click", function(){
      const values = readValues();
      let result;
      try{
        result = typeof exp.calculate === "function" ? exp.calculate(values) : {headline:"Test completed", value:"—", unit:"", explanation:"Record what you observed."};
      }catch(error){
        console.error("Virtual lab error:", error);
        result = {headline:"The simulation could not calculate this trial", value:"—", unit:"", explanation:"Reset the experiment and try again."};
      }
      const box = card.querySelector(".scienceLabResult");
      box.querySelector(".resultHeadline").textContent = result.headline || "Result";
      box.querySelector(".resultExplanation").textContent = result.explanation || "Use the evidence to explain what happened.";
      const meter = box.querySelector(".resultMeter i");
      const numeric = Number(result.value);
      const width = Number.isFinite(numeric) ? Math.max(8, Math.min(100, Math.round(Math.abs(numeric) % 100))) : 65;
      meter.style.width = width + "%";
      box.classList.add("show");
      addTrial(result, values);
      localStorage.setItem("cq-science-lab-completed-" + (activeChapter && activeChapter.id ? activeChapter.id : chapterKey) + "-" + exp.id, "true");
    });

    card.querySelector(".labResetButton").addEventListener("click", function(){
      (exp.controls || []).forEach(function(control){
        const input = card.querySelector(`[data-control="${cssEscape(control.id)}"]`);
        if(!input) return;
        const value = control.value != null ? control.value : control.min;
        input.value = value;
        if(input.type === "range"){
          const out = card.querySelector(`[data-value-for="${cssEscape(control.id)}"]`);
          if(out) out.textContent = value + (control.unit || "");
        }
      });
      card.querySelector("[data-prediction]").value = "";
      card.querySelector(".scienceLabResult").classList.remove("show");
    });

    card.querySelector(".clearTrials").addEventListener("click", function(){
      card.querySelector("tbody").innerHTML = "";
      card.classList.remove("experimentCompleted");
      const storageKey = "cq-science-lab-trials-" + (activeChapter && activeChapter.id ? activeChapter.id : chapterKey) + "-" + exp.id;
      localStorage.removeItem(storageKey);
    });
  });
}

function escapeHTML(value){
  return String(value == null ? "" : value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}
function escapeAttr(value){ return escapeHTML(value); }
function cssEscape(value){
  if(window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(String(value));
  return String(value).replace(/[^a-zA-Z0-9_-]/g,"\\$&");
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

    (chapter.importantPoints || []).forEach(x => parts.push(x));
    (chapter.keyTerms || []).forEach(x => parts.push(x));

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
          ...(section.blocks || []).flatMap(b => [b.title || "", b.text || ""])
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
