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

}

/*==================================================
  PACKAGE 12
  AI DOUBT SOLVER — WORKING VERSION
==================================================*/

const doubtQuestion = document.getElementById("doubtQuestion");
const askDoubtBtn = document.getElementById("askDoubtBtn");
const doubtAnswer = document.getElementById("doubtAnswer");

if (askDoubtBtn && doubtQuestion && doubtAnswer) {

  askDoubtBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const question = doubtQuestion.value.trim();

    if (!question) {
      doubtAnswer.innerHTML = `
        <div class="answerPlaceholder">
          <div style="font-size:50px;">⚠️</div>
          <h3>Please type a question</h3>
          <p>Ask something related to this chapter.</p>
        </div>
      `;
      return;
    }

    askDoubtBtn.disabled = true;
    askDoubtBtn.innerHTML = "⏳ Solving...";

    /* Show loading message */
    doubtAnswer.innerHTML = `
      <div class="answerPlaceholder">
        <div style="font-size:50px;">🤖</div>
        <h3>Finding your answer...</h3>
        <p>Your question: "${question}"</p>
      </div>
    `;

    /* Generate answer */
    setTimeout(function () {

      let answer = "";

      const q = question.toLowerCase();

      if (
        q.includes("pattern") ||
        q.includes("what is pattern")
      ) {
        answer = `
          <h3>📘 What is a Pattern?</h3>
          <p>
            A pattern is a repeated or regular arrangement of
            numbers, shapes, objects, colours or other things.
          </p>
          <div class="exampleBox">
            <h4>Example</h4>
            <p>2, 4, 6, 8, 10...</p>
            <p>Here, 2 is added each time.</p>
          </div>
        `;
      }

      else if (
        q.includes("mathematics") ||
        q.includes("math")
      ) {
        answer = `
          <h3>🧮 Mathematics</h3>
          <p>
            Mathematics helps us understand numbers, shapes,
            patterns, measurements and logical relationships.
          </p>
        `;
      }

      else if (
        q.includes("example")
      ) {
        answer = `
          <h3>💡 Example of a Pattern</h3>
          <p>
            5, 10, 15, 20, 25...
          </p>
          <p>
            The rule is: <strong>add 5 each time.</strong>
          </p>
        `;
      }

      else {
        answer = `
          <h3>🤖 Concept Quizzer Answer</h3>
          <p>
            Your question was:
            <strong>${question}</strong>
          </p>

          <p>
            This question is related to the chapter.
            Read the chapter notes and examples carefully
            to understand the concept.
          </p>

          <div class="tipBox">
            <h4>🧠 Study Tip</h4>
            <p>
              Try identifying the rule, definition or example
              connected with your question.
            </p>
          </div>
        `;
      }

      /* IMPORTANT: Keep answer visible */
      doubtAnswer.innerHTML = `
        <div class="answerPlaceholder">
          ${answer}
        </div>
      `;

      askDoubtBtn.disabled = false;
      askDoubtBtn.innerHTML = "🤖 Ask AI";

    }, 700);

  });

}
