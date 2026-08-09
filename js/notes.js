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

const chapterKey=
localStorage.getItem("cq-current-chapter");

loadChapter(chapterKey);

function loadChapter(key){

let chapter = ChapterData;

renderChapter(chapter);

}

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
  AI DOUBT SOLVER — FINAL
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

  const doubtQuestion = document.getElementById("doubtQuestion");
  const askDoubtBtn = document.getElementById("askDoubtBtn");
  const doubtAnswer = document.getElementById("doubtAnswer");

  if (!doubtQuestion || !askDoubtBtn || !doubtAnswer) {
    console.warn("AI Doubt Solver elements not found.");
    return;
  }

  function showAnswer(html) {
    doubtAnswer.style.display = "block";
    doubtAnswer.style.visibility = "visible";
    doubtAnswer.style.opacity = "1";

    doubtAnswer.innerHTML = `
      <div class="answerContent">
        ${html}
      </div>
    `;

    doubtAnswer.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }

  function getNumbers(text) {
    const matches = text.match(/[-+]?(?:\d+(?:\.\d+)?|\.\d+)/g);
    return matches ? matches.map(Number).filter(Number.isFinite) : [];
  }

  function formatNumber(n) {
    if (!Number.isFinite(n)) return String(n);
    return Number(n.toFixed(6)).toString();
  }

  function solvePattern(question) {

    const numbers = getNumbers(question);

    if (numbers.length < 2) {

      if (
        question.toLowerCase().includes("what is pattern") ||
        question.toLowerCase().includes("define pattern") ||
        question.toLowerCase().trim() === "pattern"
      ) {

        return `
          <div class="answerContent">
            <div style="font-size:55px;">📘</div>

            <h2>What is a Pattern?</h2>

            <p>
              A <strong>pattern</strong> is a repeated or
              regular arrangement that follows a rule.
            </p>

            <div class="exampleBox">
              <h3>💡 Example</h3>

              <p style="font-size:23px;">
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
                Compare consecutive numbers to find the rule.
              </p>
            </div>
          </div>
        `;
      }

      return `
        <div class="answerContent">
          <div style="font-size:55px;">🔢</div>

          <h2>Enter a Number Pattern</h2>

          <p>
            Give me a sequence of numbers and I will find
            the next number.
          </p>

          <div class="exampleBox">
            <h3>Try this:</h3>
            <p style="font-size:22px;">
              <strong>2, 4, 6, 8</strong>
            </p>
          </div>
        </div>
      `;
    }

    const differences = [];

    for (let i = 1; i < numbers.length; i++) {
      differences.push(numbers[i] - numbers[i - 1]);
    }

    /* ADDITION / SUBTRACTION */

    if (
      differences.every(
        d => Math.abs(d - differences[0]) < 0.000001
      )
    ) {

      const difference = differences[0];

      const next =
        numbers[numbers.length - 1] + difference;

      if (difference > 0) {

        return `
          <div class="answerContent">

            <div style="font-size:55px;">🎯</div>

            <h2>Pattern Solved!</h2>

            <div class="exampleBox">
              <h3>🔢 Your Pattern</h3>

              <p style="font-size:22px;">
                <strong>
                  ${numbers.map(formatNumber).join(" → ")}
                </strong>
              </p>
            </div>

            <div class="tipBox">
              <h3>📐 Rule</h3>

              <p>
                Add
                <strong>${formatNumber(difference)}</strong>
                each time.
              </p>
            </div>

            <div class="answerResult">
              <p>Next Number</p>

              <div style="
                font-size:46px;
                font-weight:900;
                margin:12px 0;
              ">
                ${formatNumber(next)}
              </div>
            </div>

            <div class="explanationBox">

              <h3>🧠 Explanation</h3>

              <p>
                ${formatNumber(numbers[numbers.length - 1])}
                +
                ${formatNumber(difference)}
                =
                <strong>${formatNumber(next)}</strong>
              </p>

            </div>

          </div>
        `;
      }

      if (difference < 0) {

        return `
          <div class="answerContent">

            <div style="font-size:55px;">🎯</div>

            <h2>Pattern Solved!</h2>

            <div class="exampleBox">
              <h3>🔢 Your Pattern</h3>

              <p style="font-size:22px;">
                <strong>
                  ${numbers.map(formatNumber).join(" → ")}
                </strong>
              </p>
            </div>

            <div class="tipBox">
              <h3>📐 Rule</h3>

              <p>
                Subtract
                <strong>${formatNumber(Math.abs(difference))}</strong>
                each time.
              </p>
            </div>

            <div class="answerResult">
              <p>Next Number</p>

              <div style="
                font-size:46px;
                font-weight:900;
                margin:12px 0;
              ">
                ${formatNumber(next)}
              </div>
            </div>

            <div class="explanationBox">

              <h3>🧠 Explanation</h3>

              <p>
                ${formatNumber(numbers[numbers.length - 1])}
                −
                ${formatNumber(Math.abs(difference))}
                =
                <strong>${formatNumber(next)}</strong>
              </p>

            </div>

          </div>
        `;
      }
    }

    /* MULTIPLICATION / DIVISION */

    if (!numbers.includes(0)) {

      const ratios = [];

      for (let i = 1; i < numbers.length; i++) {
        ratios.push(numbers[i] / numbers[i - 1]);
      }

      if (
        ratios.every(
          r => Math.abs(r - ratios[0]) < 0.000001
        )
      ) {

        const ratio = ratios[0];

        const next =
          numbers[numbers.length - 1] * ratio;

        if (ratio > 1) {

          return `
            <div class="answerContent">

              <div style="font-size:55px;">✖️</div>

              <h2>Multiplication Pattern</h2>

              <div class="exampleBox">

                <h3>🔢 Pattern</h3>

                <p style="font-size:22px;">
                  <strong>
                    ${numbers.map(formatNumber).join(" → ")}
                  </strong>
                </p>

              </div>

              <div class="tipBox">

                <h3>📐 Rule</h3>

                <p>
                  Multiply by
                  <strong>${formatNumber(ratio)}</strong>
                  each time.
                </p>

              </div>

              <div class="answerResult">

                <p>Next Number</p>

                <div style="
                  font-size:46px;
                  font-weight:900;
                ">
                  ${formatNumber(next)}
                </div>

              </div>

            </div>
          `;
        }

        if (ratio > 0 && ratio < 1) {

          const divisor = 1 / ratio;

          return `
            <div class="answerContent">

              <div style="font-size:55px;">➗</div>

              <h2>Division Pattern</h2>

              <div class="exampleBox">

                <h3>🔢 Pattern</h3>

                <p style="font-size:22px;">
                  <strong>
                    ${numbers.map(formatNumber).join(" → ")}
                  </strong>
                </p>

              </div>

              <div class="tipBox">

                <h3>📐 Rule</h3>

                <p>
                  Divide by
                  <strong>${formatNumber(divisor)}</strong>
                  each time.
                </p>

              </div>

              <div class="answerResult">

                <p>Next Number</p>

                <div style="
                  font-size:46px;
                  font-weight:900;
                ">
                  ${formatNumber(next)}
                </div>

              </div>

            </div>
          `;
        }
      }
    }

    return `
      <div class="answerContent">

        <div style="font-size:55px;">🧠</div>

        <h2>Pattern Not Clear</h2>

        <p>
          I could not identify a simple pattern.
        </p>

        <div class="exampleBox">

          <h3>Try a clearer sequence</h3>

          <p style="font-size:22px;">
            <strong>2, 4, 6, 8</strong>
          </p>

        </div>

      </div>
    `;
  }


  /* ASK AI BUTTON */

  askDoubtBtn.addEventListener("click", function (event) {

    event.preventDefault();

    const question =
      doubtQuestion.value.trim();

    if (!question) {

      showAnswer(`
        <div style="font-size:55px;">⚠️</div>

        <h2>Please type a question</h2>

        <p>
          Example:
          <strong>2, 4, 6, 8, ?</strong>
        </p>
      `);

      return;
    }

    askDoubtBtn.disabled = true;

    askDoubtBtn.innerHTML =
      "⏳ Solving...";


    /* SHOW ANSWER AREA */

    showAnswer(`
      <div style="font-size:55px;">🤖</div>

      <h2>Analysing Pattern...</h2>

      <p>
        Finding the rule...
      </p>
    `);


    setTimeout(function () {

      try {

        const answer =
          solvePattern(question);

        /* IMPORTANT:
           ANSWER STAYS ON SCREEN
        */

        showAnswer(answer);

      } catch (error) {

        console.error(
          "AI Solver Error:",
          error
        );

        showAnswer(`
          <div style="font-size:55px;">⚠️</div>

          <h2>Something went wrong</h2>

          <p>
            Please try again.
          </p>
        `);
      }


      askDoubtBtn.disabled = false;

      askDoubtBtn.innerHTML =
        "🤖 Ask AI";

    }, 500);

  });

});
