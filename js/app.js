/*==================================================
  Concept Quizzer
  NAVIGATION FIX — 2026-08-10
  Works with BOTH data.js formats:
  1) classes: [ { id: 6, ... } ]
  2) classes: { 6: { ... } }
==================================================*/
"use strict";

const App = {
  currentClass: null,
  currentSubject: null,
  currentChapter: null
};

function byId(id){ return document.getElementById(id); }

const preloader = byId("preloader");
const classScreen = byId("classScreen");
const subjectScreen = byId("subjectScreen");
const chapterScreen = byId("chapterScreen");
const dashboardScreen = byId("dashboardScreen");
const subjectGrid = byId("subjectGrid");
const chapterGrid = byId("chapterGrid");
const selectedClassTitle = byId("selectedClassTitle");
const selectedSubjectTitle = byId("selectedSubjectTitle");
const chapterTitle = byId("chapterTitle");
const chapterSubtitle = byId("chapterSubtitle");
const searchInput = byId("searchInput");

function getClasses(){
  const source = window.ConceptQuizzerData && window.ConceptQuizzerData.classes;
  if (!source) return [];
  if (Array.isArray(source)) return source;
  return Object.keys(source).map(function(key){
    const item = source[key];
    if (!item) return null;
    if (item.id == null) item.id = Number(key);
    return item;
  }).filter(Boolean);
}

function getClassById(id){
  const wanted = Number(id);
  return getClasses().find(function(item){ return Number(item.id) === wanted; }) || null;
}

function getSubjects(classData){
  if (!classData || !classData.subjects) return [];
  if (Array.isArray(classData.subjects)) {
    return classData.subjects.map(function(subject, index){
      return { key: subject.id || String(index), data: subject };
    });
  }
  return Object.keys(classData.subjects).map(function(key){
    return { key: key, data: classData.subjects[key] };
  });
}

function setScreen(active){
  [classScreen, subjectScreen, chapterScreen, dashboardScreen].forEach(function(screen){
    if (screen) screen.classList.add("hidden");
  });
  if (active) active.classList.remove("hidden");
}

function hideLoader(){
  if (!preloader) return;
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
  setTimeout(function(){
    if (preloader && preloader.parentNode) preloader.remove();
  }, 500);
}

function registerClassCards(){
  const cards = document.querySelectorAll(".classCard");
  cards.forEach(function(card){
    // Avoid duplicate listeners if this file is initialized again.
    if (card.dataset.cqBound === "true") return;
    card.dataset.cqBound = "true";

    card.addEventListener("click", function(event){
      event.preventDefault();
      event.stopPropagation();

      cards.forEach(function(c){ c.classList.remove("active"); });
      card.classList.add("active");

      const classId = Number(card.getAttribute("data-class"));
      const selected = getClassById(classId);

      if (!selected) {
        console.error("Concept Quizzer: Class not found:", classId, getClasses());
        alert("Class data could not be loaded. Please refresh once.");
        return;
      }

      App.currentClass = selected;
      App.currentSubject = null;
      App.currentChapter = null;

      loadSubjects();
    });
  });
}

function loadSubjects(){
  if (!App.currentClass || !subjectGrid) return;

  if (selectedClassTitle) selectedClassTitle.textContent = App.currentClass.name || ("Class " + App.currentClass.id);
  subjectGrid.innerHTML = "";

  const subjects = getSubjects(App.currentClass);

  subjects.forEach(function(entry){
    const subject = entry.data;
    if (!subject) return;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "subjectCard";
    card.innerHTML = `
      <div class="subjectIcon">${subject.icon || "📚"}</div>
      <h3>${subject.name || entry.key}</h3>
      <p>${Array.isArray(subject.chapters) ? subject.chapters.length : 0} Chapters</p>
    `;

    card.addEventListener("click", function(){
      App.currentSubject = subject;
      App.currentChapter = null;
      loadChapters();
    });

    subjectGrid.appendChild(card);
  });

  setScreen(subjectScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadChapters(){
  if (!App.currentSubject || !chapterGrid) return;

  if (selectedSubjectTitle) selectedSubjectTitle.textContent = App.currentSubject.name || "Chapters";
  chapterGrid.innerHTML = "";

  const chapters = Array.isArray(App.currentSubject.chapters) ? App.currentSubject.chapters : [];

  chapters.forEach(function(chapter, index){
    const card = document.createElement("button");
    card.type = "button";
    card.className = "chapterCard";
    card.innerHTML = `
      <div class="chapterNumber">${index + 1}</div>
      <div class="chapterContent">
        <h3>${chapter}</h3>
        <p>Open Chapter</p>
      </div>
    `;

    card.addEventListener("click", function(){
      App.currentChapter = chapter;
      openDashboard();
    });

    chapterGrid.appendChild(card);
  });

  setScreen(chapterScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDashboard(){
  if (!App.currentClass || !App.currentSubject || !App.currentChapter) return;

  if (chapterTitle) chapterTitle.textContent = App.currentChapter;
  if (chapterSubtitle) chapterSubtitle.textContent =
    (App.currentClass.name || ("Class " + App.currentClass.id)) + " • " + (App.currentSubject.name || "Subject");

  setScreen(dashboardScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function registerNavigation(){
  const backToClasses = byId("backToClasses");
  const backToSubjects = byId("backToSubjects");
  const backToChapters = byId("backToChapters");

  if (backToClasses) backToClasses.onclick = function(){ setScreen(classScreen); window.scrollTo({top:0,behavior:"smooth"}); };
  if (backToSubjects) backToSubjects.onclick = function(){ setScreen(subjectScreen); window.scrollTo({top:0,behavior:"smooth"}); };
  if (backToChapters) backToChapters.onclick = function(){ setScreen(chapterScreen); window.scrollTo({top:0,behavior:"smooth"}); };
}

function registerTheme(){
  const themeButton = byId("themeButton");
  if (!themeButton || themeButton.dataset.cqBound === "true") return;
  themeButton.dataset.cqBound = "true";

  if (localStorage.getItem("cq-theme") === "dark") document.body.classList.add("dark");

  themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    localStorage.setItem("cq-theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

function registerHeroButtons(){
  [byId("startLearning"), byId("exploreButton")].forEach(function(btn){
    if (!btn || btn.dataset.cqBound === "true") return;
    btn.dataset.cqBound = "true";
    btn.addEventListener("click", function(){
      if (classScreen) classScreen.scrollIntoView({behavior:"smooth"});
    });
  });
}

function registerSearch(){
  if (!searchInput || searchInput.dataset.cqBound === "true") return;
  searchInput.dataset.cqBound = "true";
  searchInput.addEventListener("input", function(){
    const keyword = this.value.toLowerCase().trim();
    document.querySelectorAll("#subjectGrid .subjectCard").forEach(function(card){
      card.style.display = card.innerText.toLowerCase().includes(keyword) ? "" : "none";
    });
  });
}

function registerDashboardCards(){
  const makeKey = function(){
    if (!App.currentClass || !App.currentSubject || !App.currentChapter) return null;
    const clean = String(App.currentChapter).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return String(App.currentClass.id) + "-" + String(App.currentSubject.id || App.currentSubject.name || "subject").toLowerCase() + "-" + clean;
  };

  const notesCard = byId("notesCard");
  const quizCard = byId("quizCard");

  if (notesCard && notesCard.dataset.cqBound !== "true") {
    notesCard.dataset.cqBound = "true";
    notesCard.addEventListener("click", function(){
      const key = makeKey();
      if (key) localStorage.setItem("cq-current-chapter", key);
      window.location.href = "notes.html";
    });
  }

  if (quizCard && quizCard.dataset.cqBound !== "true") {
    quizCard.dataset.cqBound = "true";
    quizCard.addEventListener("click", function(){
      const key = makeKey();
      if (key) localStorage.setItem("cq-current-chapter", key);
      window.location.href = "quiz.html";
    });
  }
}

function initApp(){
  // If data.js failed to load, show a useful diagnostic instead of silently doing nothing.
  if (!window.ConceptQuizzerData || !window.ConceptQuizzerData.classes) {
    console.error("Concept Quizzer: data.js is not loaded or has no classes.");
    return;
  }

  registerClassCards();
  registerNavigation();
  registerTheme();
  registerHeroButtons();
  registerSearch();
  registerDashboardCards();
  hideLoader();

  console.log("✅ Concept Quizzer navigation ready", getClasses().map(function(c){ return c.id; }));
}

document.addEventListener("DOMContentLoaded", initApp);
