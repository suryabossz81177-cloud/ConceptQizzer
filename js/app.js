/*==========================================================
  Concept Quizzer
  Package 4
  File : js/app.js
==========================================================*/

"use strict";

/*========================
 GLOBAL STATE
========================*/

const state={

selectedClass:null,

selectedSubject:null,

selectedChapter:null

};

/*========================
 DOM ELEMENTS
========================*/

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

/*========================
 START APP
========================*/

document.addEventListener(

"DOMContentLoaded",

()=>{

hideLoader();

initializeClassCards();

}

);

function hideLoader(){

setTimeout(()=>{

preloader.style.opacity="0";

preloader.style.visibility="hidden";

setTimeout(()=>{

preloader.remove();

},500);

},800);

}

/*========================
 CLASS SELECTION
========================*/

function initializeClassCards(){

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

state.selectedClass=

Number(card.dataset.class);

showSubjects();

}

);

});

}

/*========================
 SHOW SUBJECTS
========================*/

function showSubjects(){

const classData=

ConceptQuizzerData.classes.find(

item=>item.id===state.selectedClass

);

if(!classData) return;

selectedClassTitle.textContent=

classData.name;

subjectGrid.innerHTML="";

classData.subjects.forEach(subject=>{

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

state.selectedSubject=

subject;

showChapters();

}

);

subjectGrid.appendChild(card);

});

classScreen.classList.add("hidden");

subjectScreen.classList.remove("hidden");

}

/*========================
 SHOW CHAPTERS
========================*/

function showChapters(){

selectedSubjectTitle.textContent=

state.selectedSubject.name;

chapterGrid.innerHTML="";

state.selectedSubject.chapters.forEach(

(chapter,index)=>{

const card=

document.createElement("button");

card.type="button";

card.className="chapterCard";

card.innerHTML=`

<div class="chapterNumber">

${index+1}

</div>

<h3>

${chapter}

</h3>

<p>

Open Chapter

</p>

`;

card.addEventListener(

"click",

()=>{

state.selectedChapter=

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

/*========================
 DASHBOARD
========================*/

function openDashboard(){

chapterTitle.textContent=

state.selectedChapter;

chapterSubtitle.textContent=

`${state.selectedClass} • ${state.selectedSubject.name}`;

chapterScreen.classList.add("hidden");

dashboardScreen.classList.remove("hidden");

}

/*========================
 BACK BUTTONS
========================*/

document

.getElementById(

"backToClasses"

)

.addEventListener(

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

document

.getElementById(

"backToSubjects"

)

.addEventListener(

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

document

.getElementById(

"backToChapters"

)

.addEventListener(

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

/*========================
 SEARCH
========================*/

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

/*========================
 THEME BUTTON
========================*/

const themeButton=

document.getElementById(

"themeButton"

);

if(themeButton){

themeButton.addEventListener(

"click",

()=>{

document.body.classList.toggle(

"dark"

);

}

);

}

/*========================
 SEARCH SHORTCUT
========================*/

const startLearning=

document.getElementById(

"startLearning"

);

if(startLearning){

startLearning.addEventListener(

"click",

()=>{

document.getElementById(

"classScreen"

).scrollIntoView({

behavior:"smooth"

});

});

}

/*========================
 EXPLORE BUTTON
========================*/

const exploreButton=

document.getElementById(

"exploreButton"

);

if(exploreButton){

exploreButton.addEventListener(

"click",

()=>{

document.getElementById(

"classScreen"

).scrollIntoView({

behavior:"smooth"

});

});

}

/*========================
 APP READY
========================*/

console.log(

"✅ Concept Quizzer Loaded Successfully"

);
