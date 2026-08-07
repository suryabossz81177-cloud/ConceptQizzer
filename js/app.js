/*==================================================
  Concept Quizzer
  File : js/app.js
  Part : 4A
==================================================*/

"use strict";

/*==============================
  APP STATE
==============================*/

const App={

currentClass:null,

currentSubject:null,

currentChapter:null

};

/*==============================
  DOM ELEMENTS
==============================*/

const preloader=
document.getElementById("preloader");

const classScreen=
document.getElementById("classScreen");

const subjectScreen=
document.getElementById("subjectScreen");

const chapterScreen=
document.getElementById("chapterScreen");

const dashboardScreen=
document.getElementById("dashboardScreen");

const classGrid=
document.getElementById("classGrid");

const subjectGrid=
document.getElementById("subjectGrid");

const chapterGrid=
document.getElementById("chapterGrid");

const selectedClassTitle=
document.getElementById("selectedClassTitle");

const selectedSubjectTitle=
document.getElementById("selectedSubjectTitle");

const chapterTitle=
document.getElementById("chapterTitle");

const chapterSubtitle=
document.getElementById("chapterSubtitle");

const searchInput=
document.getElementById("searchInput");

/*==============================
  START APP
==============================*/

document.addEventListener(

"DOMContentLoaded",

initApp

);

function initApp(){

hideLoader();

registerClassCards();

}

/*==============================
  LOADER
==============================*/

function hideLoader(){

setTimeout(()=>{

if(preloader){

preloader.style.opacity="0";

preloader.style.visibility="hidden";

setTimeout(()=>{

preloader.remove();

},500);

}

},700);

}

/*==============================
  CLASS SELECTION
==============================*/

function registerClassCards(){

const cards=

document.querySelectorAll(".classCard");

cards.forEach(card=>{

card.addEventListener(

"click",

()=>{

cards.forEach(c=>{

c.classList.remove("active");

});

card.classList.add("active");

const classId=

Number(card.dataset.class);

App.currentClass=

ConceptQuizzerData.classes.find(

item=>item.id===classId

);

if(!App.currentClass) return;

loadSubjects();

}

);

});

}

/*==============================
  LOAD SUBJECTS
==============================*/

function loadSubjects(){

selectedClassTitle.textContent=

App.currentClass.name;

subjectGrid.innerHTML="";

App.currentClass.subjects.forEach(subject=>{

const card=

document.createElement("button");

card.type="button";

card.className="subjectCard";

card.innerHTML=

`

<div class="subjectIcon">

${subject.icon}

</div>

<h3>

${subject.name}

</h3>

<p>

${subject.chapters.length} Chapters

</p>

`;

card.addEventListener(

"click",

()=>{

App.currentSubject=

subject;

loadChapters();

}

);

subjectGrid.appendChild(card);

});

classScreen.classList.add("hidden");

subjectScreen.classList.remove("hidden");

}

/*==============================
  LOAD CHAPTERS
==============================*/

function loadChapters(){

selectedSubjectTitle.textContent=

App.currentSubject.name;

chapterGrid.innerHTML="";

App.currentSubject.chapters.forEach(

(chapter,index)=>{

const card=

document.createElement("button");

card.type="button";

card.className="chapterCard";

card.innerHTML=

`

<div class="chapterNumber">

${index+1}

</div>

<div class="chapterContent">

<h3>

${chapter}

</h3>

<p>

Open Chapter

</p>

</div>

`;

card.addEventListener(

"click",

()=>{

App.currentChapter=

chapter;

openDashboard();

}

);

chapterGrid.appendChild(card);

});

subjectScreen.classList.add("hidden");

chapterScreen.classList.remove("hidden");

}

/*==============================
  OPEN DASHBOARD
==============================*/

function openDashboard(){

chapterTitle.textContent=

App.currentChapter;

/* Subject name only */
chapterSubtitle.textContent=

`${App.currentClass.name} • ${App.currentSubject.name}`;

chapterScreen.classList.add("hidden");

dashboardScreen.classList.remove("hidden")
  ;

}

/*==============================
  BACK BUTTONS
==============================*/

document
.getElementById("backToClasses")
.addEventListener(
"click",
()=>{
subjectScreen.classList.add("hidden");
classScreen.classList.remove("hidden");
});

document
.getElementById("backToSubjects")
.addEventListener(
"click",
()=>{
chapterScreen.classList.add("hidden");
subjectScreen.classList.remove("hidden");
});

document
.getElementById("backToChapters")
.addEventListener(
"click",
()=>{
dashboardScreen.classList.add("hidden");
chapterScreen.classList.remove("hidden");
});

/*==============================
  SEARCH SUBJECTS
==============================*/

if(searchInput){

searchInput.addEventListener(

"input",

function(){

const keyword=

this.value
.toLowerCase()
.trim();

const cards=

subjectGrid.querySelectorAll(

".subjectCard"

);

cards.forEach(card=>{

const text=

card.innerText
.toLowerCase();

card.style.display=

text.includes(keyword)

?

"block"

:

"none";

});

});

}

/*==============================
  THEME BUTTON
==============================*/

const themeButton=
document.getElementById("themeButton");

if(themeButton){

themeButton.addEventListener(

"click",

()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"cq-theme",

document.body.classList.contains("dark")

?

"dark"

:

"light"

);

}

);

const savedTheme=

localStorage.getItem("cq-theme");

if(savedTheme==="dark"){

document.body.classList.add("dark");

}

}

/*==============================
  HERO BUTTONS
==============================*/

const startLearning=
document.getElementById("startLearning");

const exploreButton=
document.getElementById("exploreButton");

[startLearning,exploreButton].forEach(btn=>{

if(!btn) return;

btn.addEventListener(

"click",

()=>{

document.getElementById(

"classScreen"

).scrollIntoView({

behavior:"smooth"

});

}

);

});

/*==============================
  APP READY
==============================*/

console.clear();

console.log("✅ Concept Quizzer Loaded");

console.log(
ConceptQuizzerData
);

console.log(
App
);
