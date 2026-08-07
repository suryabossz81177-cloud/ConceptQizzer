"use strict";

/*==========================================================
  Concept Quizzer
  Package 1
  File 4
  Part 4A
==========================================================*/

/* ==========================
   DOM ELEMENTS
========================== */

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

const startLearning=
document.getElementById("startLearning");

const exploreButton=
document.getElementById("exploreButton");

/* ==========================
   APP INITIALIZATION
========================== */

document.addEventListener(

"DOMContentLoaded",

initializeApp

);

function initializeApp(){

registerClassCards();

registerNavigation();

registerTheme();

hideLoader();

}

/* ==========================
   CLASS CARD EVENTS
========================== */

function registerClassCards(){

const cards=

document.querySelectorAll(

".classCard"

);

cards.forEach(card=>{

card.addEventListener(

"click",

()=>{

cards.forEach(item=>{

item.classList.remove(

"active"

);

});

card.classList.add(

"active"

);

AppState.selectedClass=

card.dataset.class;

loadSubjects();

}

);

});

}

/* ==========================
   LOAD SUBJECTS
========================== */

function loadSubjects(){

const classData=

ConceptQuizzerData
.classes[
AppState.selectedClass
];

if(!classData) return;

selectedClassTitle.textContent=

classData.name;

subjectGrid.innerHTML="";

Object.entries(

classData.subjects

).forEach(

([key,subject])=>{

const card=

document.createElement(

"button"

);

card.type="button";

card.className=

"subjectCard";

card.innerHTML=

`

<div
class="subjectIcon">

${subject.icon}

</div>

<h3>

${subject.name}

</h3>

<p>

${subject.chapters.length}
Chapters

</p>

`;

card.addEventListener(

"click",

()=>{

AppState.selectedSubject=

key;

loadChapters();

}

);

subjectGrid.appendChild(

card

);

}

);

classScreen.classList.add(

"hidden"

);

subjectScreen.classList.remove(

"hidden"

);

}

/* ==========================
   START BUTTON
========================== */

if(startLearning){

startLearning.addEventListener(

"click",

()=>{

document

.getElementById(

"classScreen"

)

.scrollIntoView({

behavior:"smooth"

});

}

);

}

/* ==========================
   LOAD CHAPTERS
========================== */

function loadChapters(){

const subject=

ConceptQuizzerData
.classes[
AppState.selectedClass
]
.subjects[
AppState.selectedSubject
];

if(!subject) return;

selectedSubjectTitle.textContent=

subject.name;

chapterGrid.innerHTML="";

subject.chapters.forEach(

(chapter,index)=>{

const card=

document.createElement(

"button"

);

card.type="button";

card.className=

"chapterCard";

card.innerHTML=

`

<div
class="chapterNumber">

${index+1}

</div>

<h3>

${chapter}

</h3>

<p>

Tap to start learning

</p>

`;

card.addEventListener(

"click",

()=>{

AppState.selectedChapter=

chapter;

openDashboard();

}

);

chapterGrid.appendChild(

card

);

}

);

subjectScreen.classList.add(

"hidden"

);

chapterScreen.classList.remove(

"hidden"

);

}

/* ==========================
   OPEN DASHBOARD
========================== */

function openDashboard(){

const subject=

ConceptQuizzerData
.classes[
AppState.selectedClass
]
.subjects[
AppState.selectedSubject
];

chapterTitle.textContent=

AppState.selectedChapter;

chapterSubtitle.textContent=

`${ConceptQuizzerData.classes[
AppState.selectedClass
].name} • ${subject.name}`;

chapterScreen.classList.add(

"hidden"

);

dashboardScreen.classList.remove(

"hidden"

);

}

/* ==========================
   NAVIGATION
========================== */

function registerNavigation(){

const backToClasses=

document.getElementById(

"backToClasses"

);

const backToSubjects=

document.getElementById(

"backToSubjects"

);

const backToChapters=

document.getElementById(

"backToChapters"

);

if(backToClasses){

backToClasses.addEventListener(

"click",

()=>{

subjectScreen.classList.add(

"hidden"

);

classScreen.classList.remove(

"hidden"

);

});

}

if(backToSubjects){

backToSubjects.addEventListener(

"click",

()=>{

chapterScreen.classList.add(

"hidden"

);

subjectScreen.classList.remove(

"hidden"

);

});

}

if(backToChapters){

backToChapters.addEventListener(

"click",

()=>{

dashboardScreen.classList.add(

"hidden"

);

chapterScreen.classList.remove(

"hidden"

);

});

}

/* ==========================
   SEARCH
========================== */

if(searchInput){

searchInput.addEventListener(

"input",

function(){

const value=

this.value

.toLowerCase()

.trim();

document

.querySelectorAll(

".chapterCard"

)

.forEach(card=>{

const text=

card.textContent

.toLowerCase();

card.style.display=

text.includes(value)

?

"block"

:

"none";

});

});

}

/* ==========================
   THEME
========================== */

function registerTheme(){

const themeButton=

document.getElementById(

"themeButton"

);

if(!themeButton) return;

const savedTheme=

localStorage.getItem(

"cq-theme"

);

if(savedTheme==="dark"){

document.body.classList.add(

"dark"

);

AppState.darkMode=true;

}

themeButton.addEventListener(

"click",

()=>{

document.body.classList.toggle(

"dark"

);

AppState.darkMode=

document.body.classList.contains(

"dark"

);

localStorage.setItem(

"cq-theme",

AppState.darkMode

?

"dark"

:

"light"

);

});

}

/* ==========================
   LOADER
========================== */

function hideLoader(){

window.addEventListener(

"load",

()=>{

const loader=

document.getElementById(

"preloader"

);

if(!loader) return;

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},500);

},600);

});

}

/* ==========================
   SAVE PROGRESS
========================== */

window.addEventListener(

"beforeunload",

()=>{

localStorage.setItem(

"cq-progress",

JSON.stringify(AppState)

);

});

/* ==========================
   RESTORE PROGRESS
========================== */

const savedProgress=

localStorage.getItem(

"cq-progress"

);

if(savedProgress){

try{

const progress=

JSON.parse(savedProgress);

Object.assign(

AppState,

progress

);

}catch(error){

console.error(error);

}

}

/* ==========================
   APP READY
========================== */

console.log(

"✅ Concept Quizzer Ready"

);
