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
localStorage.getItem("cq-current-chapter") ||
"patterns-in-mathematics";

/*==================================================
  PERMANENT CHAPTER NOTES LOADER
  Uses the Universal Chapter Registry.

  IMPORTANT:
  Chapter files currently use:
      const ChapterData = {...}

  We load their source and convert that declaration
  to window.ChapterData before executing it. This
  prevents "Identifier ChapterData has already been
  declared" when notes.html already has Chapter 1
  loaded.
==================================================*/

async function loadChapter(key){

  try {

    /* Chapter 1 can use the already-loaded data */
    if (
      key === "patterns-in-mathematics" &&
      typeof ChapterData !== "undefined"
    ) {
      renderChapter(ChapterData);
      return;
    }

    /* Load the Universal Registry if needed */
    if (!window.ChapterRegistry) {

      await loadScript(
        "js/chapter-registry.js"
      );

    }

    const registry =
      window.ChapterRegistry || [];

    const entry =
      registry.find(
        item => item && item.id === key
      );

    if (!entry || !entry.enabled) {

      console.error(
        "Notes chapter not found in registry:",
        key
      );

      return;
    }

    /* Load selected chapter data */
    const response =
      await fetch(entry.file, {
        cache: "no-store"
      });

    if (!response.ok) {
      throw new Error(
        "Could not load notes file: " +
        entry.file
      );
    }

    let source =
      await response.text();

    /*
      Convert:
        const ChapterData = {...}

      into:
        window.ChapterData = {...}

      so every chapter can be loaded safely
      without changing the chapter files.
    */
    source =
      source.replace(
        /(^|\n)\s*const\s+ChapterData\s*=/,
        "$1window.ChapterData ="
      );

    window.ChapterData = undefined;

    const runChapter =
      new Function(
        "window",
        source + "\n//# sourceURL=" +
        entry.file
      );

    runChapter(window);

    if (!window.ChapterData) {
      throw new Error(
        "ChapterData was not created by " +
        entry.file
      );
    }

    renderChapter(
      window.ChapterData
    );

  } catch (error) {

    console.error(
      "Notes loader error:",
      error
    );

  }

}

function loadScript(src){

  return new Promise(
    function(resolve, reject){

      const existing =
        document.querySelector(
          'script[src="' + src + '"]'
        );

      if (existing) {
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

        if (window.ChapterRegistry) {
          resolve();
        }

        return;
      }

      const script =
        document.createElement("script");

      script.src = src;
      script.onload = resolve;
      script.onerror = reject;

      document.head.appendChild(script);

    }
  );

}

/* Start Notes loading */
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

/*==================================================
  PACKAGE 12
  AI DOUBT SOLVER — STEP 3
  SMART PATTERN SOLVER
==================================================*/

const doubtQuestion = document.getElementById("doubtQuestion");
const askDoubtBtn = document.getElementById("askDoubtBtn");
const doubtAnswer = document.getElementById("doubtAnswer");

if (askDoubtBtn && doubtQuestion && doubtAnswer) {

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function showAnswer(content) {
    doubtAnswer.innerHTML = `
      <div class="answerPlaceholder">
        ${content}
      </div>
    `;
  }

  function numberFormat(num) {
    if (!Number.isFinite(num)) return String(num);

    if (Number.isInteger(num)) {
      return String(num);
    }

    return Number(num.toFixed(6)).toString();
  }

  function getNumbers(text) {

    const matches = text.match(
      /[-+]?(?:\d+(?:\.\d+)?|\.\d+)/g
    );

    if (!matches) return [];

    return matches
      .map(Number)
      .filter(Number.isFinite);
  }

  function detectPattern(numbers) {

    if (numbers.length < 2) {
      return {
        type: "insufficient",
        rule: "Not enough numbers",
        next: null
      };
    }

    /* -------------------------------------------
       1. CONSTANT DIFFERENCE
    ------------------------------------------- */

    const differences = [];

    for (let i = 1; i < numbers.length; i++) {
      differences.push(numbers[i] - numbers[i - 1]);
    }

    const sameDifference = differences.every(
      d => Math.abs(d - differences[0]) < 0.000001
    );

    if (sameDifference) {

      const difference = differences[0];
      const next = numbers[numbers.length - 1] + difference;

      if (difference > 0) {
        return {
          type: "addition",
          rule: `Add ${numberFormat(difference)} each time`,
          next: next,
          difference: difference
        };
      }

      if (difference < 0) {
        return {
          type: "subtraction",
          rule: `Subtract ${numberFormat(Math.abs(difference))} each time`,
          next: next,
          difference: difference
        };
      }

      return {
        type: "constant",
        rule: "The number stays the same",
        next: numbers[numbers.length - 1]
      };
    }

    /* -------------------------------------------
       2. CONSTANT RATIO
    ------------------------------------------- */

    if (!numbers.includes(0)) {

      const ratios = [];

      for (let i = 1; i < numbers.length; i++) {
        ratios.push(numbers[i] / numbers[i - 1]);
      }

      const sameRatio = ratios.every(
        r => Math.abs(r - ratios[0]) < 0.000001
      );

      if (sameRatio && Number.isFinite(ratios[0])) {

        const ratio = ratios[0];
        const next = numbers[numbers.length - 1] * ratio;

        if (ratio > 1) {
          return {
            type: "multiplication",
            rule: `Multiply by ${numberFormat(ratio)} each time`,
            next: next,
            ratio: ratio
          };
        }

        if (ratio > 0 && ratio < 1) {
          return {
            type: "division",
            rule: `Divide by ${numberFormat(1 / ratio)} each time`,
            next: next,
            ratio: ratio
          };
        }

        if (ratio < 0) {
          return {
            type: "multiplication",
            rule: `Multiply by ${numberFormat(ratio)} each time`,
            next: next,
            ratio: ratio
          };
        }
      }
    }

    /* -------------------------------------------
       3. ALTERNATING DIFFERENCES
    ------------------------------------------- */

    if (differences.length >= 2) {

      const evenDiffs = [];
      const oddDiffs = [];

      differences.forEach((d, i) => {
        if (i % 2 === 0) {
          evenDiffs.push(d);
        } else {
          oddDiffs.push(d);
        }
      });

      const evenSame =
        evenDiffs.length > 0 &&
        evenDiffs.every(
          d => Math.abs(d - evenDiffs[0]) < 0.000001
        );

      const oddSame =
        oddDiffs.length > 0 &&
        oddDiffs.every(
          d => Math.abs(d - oddDiffs[0]) < 0.000001
        );

      if (evenSame && oddSame && differences.length >= 2) {

        const nextDifference =
          differences.length % 2 === 0
            ? evenDiffs[0]
            : oddDiffs[0];

        const next =
          numbers[numbers.length - 1] + nextDifference;

        return {
          type: "alternating",
          rule:
            `Alternating differences: ` +
            `${numberFormat(evenDiffs[0])}, ` +
            `${numberFormat(oddDiffs[0])}`,
          next: next,
          difference: nextDifference
        };
      }
    }

    /* -------------------------------------------
       4. REPEATING CYCLE
    ------------------------------------------- */

    for (let size = 1; size <= Math.floor(numbers.length / 2); size++) {

      let valid = true;

      for (let i = size; i < numbers.length; i++) {
        if (
          Math.abs(numbers[i] - numbers[i % size]) >
          0.000001
        ) {
          valid = false;
          break;
        }
      }

      if (valid) {

        const nextIndex = numbers.length % size;
        const next = numbers[nextIndex];

        return {
          type: "repeating",
          rule: `Repeating cycle of ${size} number(s)`,
          next: next,
          cycle: numbers.slice(0, size)
        };
      }
    }

    return {
      type: "unknown",
      rule: "No simple pattern detected",
      next: null
    };
  }

  function solveQuestion(question) {

    const numbers = getNumbers(question);

    /* -------------------------------------------
       NO NUMBERS
    ------------------------------------------- */

    if (numbers.length === 0) {

      const q = question.toLowerCase();

      if (
        q.includes("what is pattern") ||
        q.includes("define pattern") ||
        q === "pattern"
      ) {

        return `
          <div class="answerContent">

            <div style="font-size:52px;">📘</div>

            <h2>What is a Pattern?</h2>

            <p>
              A <strong>pattern</strong> is a repeated or
              regular arrangement that follows a rule.
            </p>

            <div class="exampleBox">

              <h3>💡 Example</h3>

              <p style="font-size:22px;">
                <strong>2, 4, 6, 8, 10...</strong>
              </p>

              <p>
                The rule is:
                <strong>Add 2 each time.</strong>
              </p>

            </div>

            <div class="tipBox">

              <h3>🧠 Remember</h3>

              <p>
                To solve a number pattern, compare the
                numbers and find the rule.
              </p>

            </div>

          </div>
        `;
      }

      return `
        <div class="answerContent">

          <div style="font-size:52px;">🔢</div>

          <h2>Enter a Number Pattern</h2>

          <p>
            I can find the next number when you give me
            a sequence.
          </p>

          <div class="exampleBox">

            <h3>Try this:</h3>

            <p style="font-size:22px;">
              <strong>2, 4, 6, 8</strong>
            </p>

            <p>
              or
            </p>

            <p style="font-size:22px;">
              <strong>5, 10, 15, 20</strong>
            </p>

          </div>

        </div>
      `;
    }

    /* -------------------------------------------
       TOO FEW NUMBERS
    ------------------------------------------- */

    if (numbers.length < 2) {

      return `
        <div class="answerContent">

          <div style="font-size:52px;">⚠️</div>

          <h2>Need More Numbers</h2>

          <p>
            Please enter at least <strong>2 numbers</strong>
            so I can look for a pattern.
          </p>

          <div class="exampleBox">

            <h3>Example</h3>

            <p>
              <strong>2, 4, 6, 8</strong>
            </p>

          </div>

        </div>
      `;
    }

    /* -------------------------------------------
       DETECT PATTERN
    ------------------------------------------- */

    const result = detectPattern(numbers);

    /* -------------------------------------------
       UNKNOWN PATTERN
    ------------------------------------------- */

    if (result.type === "unknown") {

      return `
        <div class="answerContent">

          <div style="font-size:52px;">🧠</div>

          <h2>Pattern Not Clear</h2>

          <p>
            I couldn't identify a simple arithmetic pattern
            in:
          </p>

          <div class="exampleBox">

            <p style="font-size:21px;">
              <strong>${numbers
                .map(numberFormat)
                .join(", ")}</strong>
            </p>

          </div>

          <div class="tipBox">

            <h3>💡 Try</h3>

            <p>
              Enter 3 or more numbers and check whether
              they are increasing, decreasing, multiplying,
              dividing or repeating.
            </p>

          </div>

        </div>
      `;
    }

    /* -------------------------------------------
       SUCCESSFUL ANSWER
    ------------------------------------------- */

    let explanation = "";

    if (result.type === "addition") {

      explanation = `
        <p>
          Each number increases by
          <strong>${numberFormat(result.difference)}</strong>.
        </p>

        <p>
          Therefore:
          <strong>
            ${numberFormat(numbers[numbers.length - 1])}
            + ${numberFormat(result.difference)}
            =
            ${numberFormat(result.next)}
          </strong>
        </p>
      `;

    } else if (result.type === "subtraction") {

      explanation = `
        <p>
          Each number decreases by
          <strong>${numberFormat(
            Math.abs(result.difference)
          )}</strong>.
        </p>

        <p>
          Therefore:
          <strong>
            ${numberFormat(numbers[numbers.length - 1])}
            − ${numberFormat(
              Math.abs(result.difference)
            )}
            =
            ${numberFormat(result.next)}
          </strong>
        </p>
      `;

    } else if (result.type === "multiplication") {

      explanation = `
        <p>
          Each number is multiplied by
          <strong>${numberFormat(result.ratio)}</strong>.
        </p>

        <p>
          Therefore:
          <strong>
            ${numberFormat(numbers[numbers.length - 1])}
            × ${numberFormat(result.ratio)}
            =
            ${numberFormat(result.next)}
          </strong>
        </p>
      `;

    } else if (result.type === "division") {

      explanation = `
        <p>
          Each number is divided by
          <strong>${numberFormat(1 / result.ratio)}</strong>.
        </p>

        <p>
          Therefore:
          <strong>
            ${numberFormat(numbers[numbers.length - 1])}
            ÷ ${numberFormat(1 / result.ratio)}
            =
            ${numberFormat(result.next)}
          </strong>
        </p>
      `;

    } else if (result.type === "alternating") {

      explanation = `
        <p>
          The pattern uses alternating differences.
        </p>

        <p>
          The next change is
          <strong>${numberFormat(
            result.difference
          )}</strong>.
        </p>
      `;

    } else if (result.type === "repeating") {

      explanation = `
        <p>
          The sequence repeats a fixed cycle:
        </p>

        <p>
          <strong>
            ${result.cycle.map(numberFormat).join(" → ")}
          </strong>
        </p>
      `;
    }

    return `
      <div class="answerContent">

        <div style="font-size:52px;">🎯</div>

        <h2>Pattern Solved!</h2>

        <div class="exampleBox">

          <h3>🔢 Your Pattern</h3>

          <p style="font-size:21px;">
            <strong>
              ${numbers.map(numberFormat).join(" → ")}
            </strong>
          </p>

        </div>

        <div class="tipBox">

          <h3>📐 Rule</h3>

          <p>
            <strong>${result.rule}</strong>
          </p>

        </div>

        <div class="answerResult">

          <p>Next Number</p>

          <div style="
            font-size:42px;
            font-weight:800;
            margin:10px 0;
          ">
            ${numberFormat(result.next)}
          </div>

        </div>

        <div class="explanationBox">

          <h3>🧠 Explanation</h3>

          ${explanation}

        </div>

        <div class="tipBox">

          <h3>💡 Study Tip</h3>

          <p>
            Always compare consecutive numbers first.
            This helps you discover the rule quickly.
          </p>

        </div>

      </div>
    `;
  }

  askDoubtBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const question = doubtQuestion.value.trim();

    if (!question) {

      showAnswer(`
        <div style="font-size:52px;">⚠️</div>

        <h2>Please type a question</h2>

        <p>
          Try:
          <strong>2, 4, 6, 8</strong>
        </p>
      `);

      return;
    }

    askDoubtBtn.disabled = true;
    askDoubtBtn.innerHTML = "⏳ Solving...";

    showAnswer(`
      <div style="font-size:52px;">🤖</div>

      <h2>Analysing Pattern...</h2>

      <p>
        Checking the numbers and finding the rule.
      </p>
    `);

    setTimeout(function () {

      try {

        const resultHTML = solveQuestion(question);

        showAnswer(resultHTML);

      } catch (error) {

        showAnswer(`
          <div style="font-size:52px;">⚠️</div>

          <h2>Something went wrong</h2>

          <p>
            Please try the question again.
          </p>
        `);

        console.error(
          "Package 12 Error:",
          error
        );
      }

      askDoubtBtn.disabled = false;
      askDoubtBtn.innerHTML = "🤖 Ask AI";

    }, 700);

  });

        }
