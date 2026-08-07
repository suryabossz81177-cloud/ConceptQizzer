"use strict";

/* ==========================================
   ConceptQizzer App
========================================== */

const App = {

selectedClass:null,

selectedSubject:null,

selectedChapter:null

};

/* ==========================================
   DOM
========================================== */

const classGrid=document.getElementById("classGrid");
const subjectGrid=document.getElementById("subjectGrid");
const chapterGrid=document.getElementById("chapterGrid");

const classScreen=document.getElementById("classScreen");
const subjectScreen=document.getElementById("subjectScreen");
const chapterScreen=document.getElementById("chapterScreen");
const dashboardScreen=document.getElementById("dashboardScreen");

const selectedClassTitle=document.getElementById("selectedClassTitle");
const selectedSubjectTitle=document.getElementById("selectedSubjectTitle");
const chapterTitle=document.getElementById("chapterTitle");
const chapterSubtitle=document.getElementById("chapterSubtitle");

/* ==========================================
   INIT
========================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

initializeClassSelection();

}

);

/* ==========================================
   CLASS SELECTION
========================================== */

function initializeClassSelection(){

const cards=

document.querySelectorAll(".classCard");

cards.forEach(card=>{

card.addEventListener(

"click",

()=>{

cards.forEach(item=>{

item.classList.remove("active");

});

card.classList.add("active");

App.selectedClass=

card.dataset.class;

renderSubjects();

}

);

});

}

/* ==========================================
   RENDER SUBJECTS
========================================== */

function renderSubjects(){

const classData=

ConceptQizzerData
.classes[App.selectedClass];

if(!classData) return;

selectedClassTitle.textContent=

classData.name;

subjectGrid.innerHTML="";

Object.entries(classData.subjects)

.forEach(([key,subject])=>{

const card=

document.createElement("button");

card.type="button";

card.className="subjectCard";

card.innerHTML=`

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

App.selectedSubject=key;

renderChapters();

}

);

subjectGrid.appendChild(card);

});

classScreen.classList.add("hidden");

subjectScreen.classList.remove("hidden");

}

/* ==========================================
   RENDER CHAPTERS
========================================== */

function renderChapters(){

const subject=

ConceptQizzerData
.classes[App.selectedClass]
.subjects[App.selectedSubject];

if(!subject) return;

selectedSubjectTitle.textContent=

subject.name;

chapterGrid.innerHTML="";

subject.chapters.forEach(

(chapter,index)=>{

const card=

document.createElement("button");

card.type="button";

card.className="chapterCard";

card.innerHTML=`

<div class="chapterNumber">

${index+1}

</div>

<div class="chapterContent">

<h3>

${chapter}

</h3>

<p>

Tap to start learning

</p>

</div>

`;

card.addEventListener(

"click",

()=>{

App.selectedChapter=

chapter;

openDashboard();

}

);

chapterGrid.appendChild(card);

}

);

subjectScreen.classList.add("hidden");

chapterScreen.classList.remove("hidden");

}

/* ==========================================
   DASHBOARD
========================================== */

function openDashboard(){

chapterTitle.textContent=

App.selectedChapter;

chapterSubtitle.textContent=

`Class ${App.selectedClass} • ${
ConceptQizzerData
.classes[App.selectedClass]
.subjects[App.selectedSubject]
.name
}`;

chapterScreen.classList.add("hidden");

dashboardScreen.classList.remove("hidden");

}

/* ==========================================
   BACK BUTTONS
========================================== */

const backToClass=

document.getElementById(

"backToClass"

);

const backToSubject=

document.getElementById(

"backToSubject"

);

const backToChapters=

document.getElementById(

"backToChapters"

);

if(backToClass){

backToClass.addEventListener(

"click",

()=>{

subjectScreen.classList.add(

"hidden"

);

classScreen.classList.remove(

"hidden"

);

}

);

}

if(backToSubject){

backToSubject.addEventListener(

"click",

()=>{

chapterScreen.classList.add(

"hidden"

);

subjectScreen.classList.remove(

"hidden"

);

}

);

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

}

);

}

/* ==========================================
   SEARCH CHAPTER
========================================== */

const searchInput=

document.querySelector(

".searchBar input"

);

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

"flex"

:

"none";

});

}

);

}

/* ==========================================
   DARK MODE
========================================== */

const themeButton=

document.getElementById(

"themeButton"

);

if(themeButton){

const savedTheme=

localStorage.getItem(

"cq-theme"

);

if(savedTheme==="dark"){

document.body.classList.add(

"dark"

);

}

themeButton.addEventListener(

"click",

()=>{

document.body.classList.toggle(

"dark"

);

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

}

/* ==========================================
   CONTINUE LEARNING
========================================== */

function saveProgress(){

localStorage.setItem(

"cq-progress",

JSON.stringify(App)

);

}

window.addEventListener(

"beforeunload",

saveProgress

);

const savedProgress=

localStorage.getItem(

"cq-progress"

);

if(savedProgress){

try{

const progress=

JSON.parse(savedProgress);

App.selectedClass=

progress.selectedClass;

App.selectedSubject=

progress.selectedSubject;

App.selectedChapter=

progress.selectedChapter;

}catch(error){

console.error(

"Progress restore failed.",

error

);

}

}

/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollButton=

document.getElementById(

"scrollTopButton"

);

if(scrollButton){

window.addEventListener(

"scroll",

()=>{

scrollButton.classList.toggle(

"hidden",

window.scrollY<300

);

}

);

scrollButton.addEventListener(

"click",

()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

);

}

/* ==========================================
   LOADER
========================================== */

window.addEventListener(

"load",

()=>{

const loader=

document.getElementById(

"preloader"

);

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},400);

},500);

}

});

/* ==========================================
   APP READY
========================================== */

console.log(

"✅ ConceptQizzer Loaded"

);

console.log(

ConceptQizzerData

);
