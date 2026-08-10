"use strict";

/* Concept Quizzer — robust navigation controller
   Works with both supported data.js formats:
   1) classes: [{id:6, ...}, ...]
   2) classes: {6:{...}, 7:{...}, ...}
*/

const AppState = {
  selectedClass: null,
  selectedSubject: null,
  selectedChapter: null,
  darkMode: false
};

const $ = (id) => document.getElementById(id);

const classScreen = $("classScreen");
const subjectScreen = $("subjectScreen");
const chapterScreen = $("chapterScreen");
const dashboardScreen = $("dashboardScreen");
const classGrid = $("classGrid");
const subjectGrid = $("subjectGrid");
const chapterGrid = $("chapterGrid");
const selectedClassTitle = $("selectedClassTitle");
const selectedSubjectTitle = $("selectedSubjectTitle");
const chapterTitle = $("chapterTitle");
const chapterSubtitle = $("chapterSubtitle");
const searchInput = $("searchInput");

function getData() {
  if (typeof ConceptQuizzerData !== "undefined") return ConceptQuizzerData;
  if (window.ConceptQuizzerData) return window.ConceptQuizzerData;
  return null;
}

function getClasses() {
  const data = getData();
  if (!data || !data.classes) return [];

  if (Array.isArray(data.classes)) return data.classes;

  return Object.entries(data.classes).map(([key, value]) => ({
    ...value,
    id: Number(value?.id ?? key)
  }));
}

function getClassData(classId) {
  return getClasses().find(item => Number(item.id) === Number(classId)) || null;
}

function getSubjects(classData) {
  if (!classData?.subjects) return [];

  if (Array.isArray(classData.subjects)) {
    return classData.subjects.map((subject, index) => ({
      ...subject,
      id: subject.id ?? subject.key ?? String(index)
    }));
  }

  return Object.entries(classData.subjects).map(([key, subject]) => ({
    ...subject,
    id: subject?.id ?? key
  }));
}

function getSubjectData(classData, subjectId) {
  return getSubjects(classData).find(
    subject => String(subject.id) === String(subjectId)
  ) || null;
}

function hideAllScreens() {
  [classScreen, subjectScreen, chapterScreen, dashboardScreen]
    .filter(Boolean)
    .forEach(screen => screen.classList.add("hidden"));
}

function showScreen(screen) {
  hideAllScreens();
  if (screen) screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function registerClassCards() {
  document.querySelectorAll(".classCard").forEach(card => {
    card.addEventListener("click", () => {
      const classId = Number(card.dataset.class);
      const classData = getClassData(classId);

      if (!classData) {
        console.error("Class not found in ConceptQuizzerData:", classId);
        alert(`Class ${classId} data is not available yet.`);
        return;
      }

      document.querySelectorAll(".classCard").forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      AppState.selectedClass = classId;
      AppState.selectedSubject = null;
      AppState.selectedChapter = null;

      loadSubjects();
    });
  });
}

function loadSubjects() {
  const classData = getClassData(AppState.selectedClass);

  if (!classData) {
    console.error("Unable to load class:", AppState.selectedClass);
    return;
  }

  if (selectedClassTitle) selectedClassTitle.textContent = classData.name || `Class ${AppState.selectedClass}`;
  if (!subjectGrid) return;

  subjectGrid.innerHTML = "";
  const subjects = getSubjects(classData);

  if (!subjects.length) {
    subjectGrid.innerHTML = `<div class="emptyState">No subjects are available for this class yet.</div>`;
  }

  subjects.forEach(subject => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "subjectCard";
    card.style.setProperty("--subject-color", subject.color || "#5b5cf0");

    const chapterCount = Array.isArray(subject.chapters) ? subject.chapters.length : 0;

    card.innerHTML = `
      <div class="subjectIcon">${subject.icon || "📚"}</div>
      <h3>${escapeHtml(subject.name || "Subject")}</h3>
      <p>${chapterCount} Chapters</p>
      <span class="subjectArrow">→</span>
    `;

    card.addEventListener("click", () => {
      AppState.selectedSubject = subject.id;
      AppState.selectedChapter = null;
      loadChapters();
    });

    subjectGrid.appendChild(card);
  });

  showScreen(subjectScreen);
}

function loadChapters() {
  const classData = getClassData(AppState.selectedClass);
  const subject = getSubjectData(classData, AppState.selectedSubject);

  if (!classData || !subject) {
    console.error("Unable to load subject:", AppState.selectedSubject);
    return;
  }

  if (selectedSubjectTitle) selectedSubjectTitle.textContent = subject.name || "Chapters";
  if (!chapterGrid) return;

  chapterGrid.innerHTML = "";
  const chapters = Array.isArray(subject.chapters) ? subject.chapters : [];

  chapters.forEach((chapter, index) => {
    const name = typeof chapter === "string" ? chapter : (chapter?.name || `Chapter ${index + 1}`);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "chapterCard";

    card.innerHTML = `
      <div class="chapterLabel">Chapter ${index + 1}</div>
      <h3>${escapeHtml(name)}</h3>
      <div class="chapterArrow" aria-hidden="true">→</div>
    `;

    card.addEventListener("click", () => {
      AppState.selectedChapter = name;
      openDashboard();
    });

    chapterGrid.appendChild(card);
  });

  showScreen(chapterScreen);
}

function openDashboard() {
  const classData = getClassData(AppState.selectedClass);
  const subject = getSubjectData(classData, AppState.selectedSubject);

  if (!classData || !subject || !AppState.selectedChapter) return;

  if (chapterTitle) chapterTitle.textContent = AppState.selectedChapter;
  if (chapterSubtitle) chapterSubtitle.textContent = `${classData.name || "Class"} • ${subject.name || "Subject"}`;

  showScreen(dashboardScreen);
}

function registerNavigation() {
  $("backToClasses")?.addEventListener("click", () => showScreen(classScreen));
  $("backToSubjects")?.addEventListener("click", () => showScreen(subjectScreen));
  $("backToChapters")?.addEventListener("click", () => showScreen(chapterScreen));

  $("themeButton")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    AppState.darkMode = document.body.classList.contains("dark");
    localStorage.setItem("cq-theme", AppState.darkMode ? "dark" : "light");
  });
}

function restoreTheme() {
  if (localStorage.getItem("cq-theme") === "dark") {
    document.body.classList.add("dark");
    AppState.darkMode = true;
  }
}

function hideLoader() {
  const loader = $("preloader");
  if (loader) loader.remove();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initializeApp() {
  hideLoader();
  restoreTheme();
  registerClassCards();
  registerNavigation();

  if (!getData()) {
    console.error("ConceptQuizzerData was not loaded. Check js/data.js path.");
  }
}

// Restore only the theme; never automatically reopen an old screen.
// This prevents a stale localStorage state from breaking navigation.
document.addEventListener("DOMContentLoaded", initializeApp);

console.log("✅ Concept Quizzer navigation ready");
