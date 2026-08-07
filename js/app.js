/*==========================================================
 ConceptQizzer
 Package 1 — File 4A
 File : js/app.js
==========================================================*/

"use strict";

/* ================================
   DOM ELEMENTS
================================ */

const classScreen =
document.getElementById("classScreen");

const subjectScreen =
document.getElementById("subjectScreen");

const chapterScreen =
document.getElementById("chapterScreen");

const dashboardScreen =
document.getElementById("dashboardScreen");

const classGrid =
document.getElementById("classGrid");

const subjectGrid =
document.getElementById("subjectGrid");

const chapterGrid =
document.getElementById("chapterGrid");

const selectedClassTitle =
document.getElementById("selectedClassTitle");

const selectedSubjectTitle =
document.getElementById("selectedSubjectTitle");

const chapterTitle =
document.getElementById("chapterTitle");

const chapterSubtitle =
document.getElementById("chapterSubtitle");

const searchInput =
document.querySelector(".searchBar input");

const themeButton =
document.getElementById("themeButton");

/* ================================
   INITIALIZE
================================ */

initializeApp();

function initializeApp(){

registerClassButtons();

registerThemeButton();

}

/* ================================
   CLASS CLICK
================================ */

function registerClassButtons(){

const cards =
document.querySelectorAll(".classCard");

cards.forEach(card=>{

card.addEventListener("click",()=>{

cards.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

const selectedClass =
card.dataset.class;

AppState.selectedClass =
selectedClass;

loadSubjects(selectedClass);

});

});

}

/* ================================
   SUBJECTS
================================ */

function loadSubjects(classNumber){

const classData =
ConceptQizzerData
.classes[classNumber];

if(!classData) return;

selectedClassTitle.textContent =
classData.name;

subjectGrid.innerHTML="";

Object.entries(classData.subjects)
.forEach(([key,subject])=>{

const card =
document.createElement("button");

card.className="subjectCard";

card.innerHTML=`

<div
style="font-size:60px">

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

card.addEventListener("click",()=>{

AppState.selectedSubject=key;

loadChapters(classNumber,key);

});

subjectGrid.appendChild(card);

});

classScreen.classList.add("hidden");

subjectScreen.classList.remove("hidden");

}

/* =================================
   CHAPTERS
================================= */

function loadChapters(classNumber,subjectKey){

const subject=

ConceptQizzerData
.classes[classNumber]
.subjects[subjectKey];

if(!subject) return;

selectedSubjectTitle.textContent=
subject.name;

chapterGrid.innerHTML="";

subject.chapters.forEach((chapter,index)=>{

const card=
document.createElement("button");

card.className="chapterCard";

card.innerHTML=`

<div class="chapterNumber">

${index+1}

</div>

<h3>

${chapter}

</h3>

<p>

Tap to open complete learning dashboard

</p>

<div class="chapterFooter">

<span class="chapterBadge">

Start Learning

</span>

<span class="chapterArrow">

→

</span>

</div>

`;

card.addEventListener("click",()=>{

AppState.selectedChapter=
chapter;

openDashboard(
classNumber,
subject,
chapter
);

});

chapterGrid.appendChild(card);

});

subjectScreen.classList.add("hidden");

chapterScreen.classList.remove("hidden");

}

/* =================================
   DASHBOARD
================================= */

function openDashboard(

classNumber,
subject,
chapter

){

chapterTitle.textContent=
chapter;

chapterSubtitle.textContent=

`Class ${classNumber} • ${subject.name}`;

chapterScreen.classList.add("hidden");

dashboardScreen.classList.remove("hidden");

AppState.continueLearning={

class:classNumber,

subject:subject.name,

chapter:chapter

};

}

/* =================================
   BACK BUTTONS
================================= */

document
.getElementById("backToClass")
.addEventListener("click",()=>{

subjectScreen.classList.add("hidden");

classScreen.classList.remove("hidden");

});

document
.getElementById("backToSubject")
.addEventListener("click",()=>{

chapterScreen.classList.add("hidden");

subjectScreen.classList.remove("hidden");

});

document
.getElementById("backToChapters")
.addEventListener("click",()=>{

dashboardScreen.classList.add("hidden");

chapterScreen.classList.remove("hidden");

});

/* =================================
   SEARCH
================================= */

if(searchInput){

searchInput.addEventListener("input",(e)=>{

const value=

e.target.value
.toLowerCase()
.trim();

document
.querySelectorAll(".chapterCard")
.forEach(card=>{

const title=

card.querySelector("h3")
.textContent
.toLowerCase();

card.style.display=

title.includes(value)

?

"block"

:

"none";

});

});

}

/* =================================
   DARK MODE
================================= */

if(themeButton){

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("dark");

AppState.darkMode=

!AppState.darkMode;

localStorage.setItem(

"cq-dark-mode",

AppState.darkMode

);

});

}

const savedTheme=

localStorage.getItem(

"cq-dark-mode"

);

if(savedTheme==="true"){

document.body.classList.add("dark");

AppState.darkMode=true;

}

/* =================================
   CONTINUE LEARNING
================================= */

function saveProgress(){

localStorage.setItem(

"cq-progress",

JSON.stringify(

AppState.continueLearning

)

);

}

function loadProgress(){

const progress=

localStorage.getItem(

"cq-progress"

);

if(progress){

AppState.continueLearning=

JSON.parse(progress);

}

}

loadProgress();

/* =================================
   SAVE WHEN CHAPTER OPENS
================================= */

const oldOpenDashboard=

openDashboard;

openDashboard=function(

classNumber,
subject,
chapter

){

oldOpenDashboard(

classNumber,
subject,
chapter

);

saveProgress();

showToast(

"Progress Saved"

);

};

/* =================================
   TOAST
================================= */

function showToast(message){

const toast=

document.getElementById("toast");

const toastMessage=

document.getElementById("toastMessage");

if(!toast) return;

toastMessage.textContent=

message;

toast.classList.remove("hidden");

setTimeout(()=>{

toast.classList.add("hidden");

},2500);

}

/* =================================
   BOOKMARKS
================================= */

function toggleBookmark(){

if(!AppState.selectedChapter) return;

const index=

AppState.bookmarks.indexOf(

AppState.selectedChapter

);

if(index===-1){

AppState.bookmarks.push(

AppState.selectedChapter

);

showToast(

"Chapter Bookmarked"

);

}else{

AppState.bookmarks.splice(

index,

1

);

showToast(

"Bookmark Removed"

);

}

localStorage.setItem(

"cq-bookmarks",

JSON.stringify(

AppState.bookmarks

)

);

}

const bookmarkButton=

document.getElementById(

"bookmarkButton"

);

if(bookmarkButton){

bookmarkButton.addEventListener(

"click",

toggleBookmark

);

}

const savedBookmarks=

localStorage.getItem(

"cq-bookmarks"

);

if(savedBookmarks){

AppState.bookmarks=

JSON.parse(savedBookmarks);

}

/* =================================
   SCROLL TO TOP
================================= */

const scrollButton=

document.getElementById(

"scrollTopButton"

);

window.addEventListener(

"scroll",

()=>{

if(!scrollButton) return;

if(window.scrollY>300){

scrollButton.classList.remove(

"hidden"

);

}else{

scrollButton.classList.add(

"hidden"

);

}

}

);

if(scrollButton){

scrollButton.addEventListener(

"click",

()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* =================================
   LOADING SCREEN
================================= */

window.addEventListener(

"load",

()=>{

const loader=

document.getElementById(

"loadingScreen"

);

if(loader){

setTimeout(()=>{

loader.classList.add(

"hidden"

);

},800);

}

});

/* =================================
   OPEN FEATURE BUTTONS
================================= */

document

.querySelectorAll(

".dashboardCard"

)

.forEach(card=>{

card.addEventListener(

"click",

()=>{

showToast(

"This feature will be connected in Package 2."

);

});

});

/* =================================
   START LEARNING BUTTON
================================= */

const startLearningButton=

document.getElementById(

"startLearning"

);

if(startLearningButton){

startLearningButton.addEventListener(

"click",

()=>{

document

.getElementById("classScreen")

.scrollIntoView({

behavior:"smooth"

});

});

}

/* =================================
   SEARCH FOCUS
================================= */

if(searchInput){

searchInput.addEventListener(

"focus",

()=>{

searchInput.parentElement.classList.add(

"active"

);

});

searchInput.addEventListener(

"blur",

()=>{

searchInput.parentElement.classList.remove(

"active"

);

});

}

/* =================================
   ESC KEY CLOSE MODAL
================================= */

document.addEventListener(

"keydown",

(event)=>{

if(event.key==="Escape"){

const modal=

document.getElementById(

"modal"

);

if(modal){

modal.classList.add(

"hidden"

);

}

}

});

/* =================================
   SIMPLE RIPPLE EFFECT
================================= */

document

.querySelectorAll("button")

.forEach(button=>{

button.addEventListener(

"click",

function(){

this.classList.add(

"clicked"

);

setTimeout(()=>{

this.classList.remove(

"clicked"

);

},250);

}

);

});

/* =================================
   PREVENT EMPTY SEARCH
================================= */

if(searchInput){

searchInput.addEventListener(

"keydown",

(event)=>{

if(

event.key==="Enter"

&&

searchInput.value.trim()===""

){

event.preventDefault();

showToast(

"Please enter a chapter name."

);

}

});

}

/* =================================
   APP READY
================================= */

console.log(

"ConceptQizzer Loaded Successfully"

);

showToast(

"Welcome to ConceptQizzer 🚀"

);

/* =================================
   PACKAGE 1 COMPLETED
================================= */
