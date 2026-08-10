/*==================================================
  Concept Quizzer
  FINAL NAVIGATION FIX — 2026-08-10
  IMPORTANT: data.js declares ConceptQuizzerData with `const`.
  Therefore it must be read as a lexical global, not only from window.
==================================================*/
"use strict";

const App = {
  currentClass: null,
  currentSubject: null,
  currentChapter: null
};

function byId(id) {
  return document.getElementById(id);
}

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

/* data.js uses: const ConceptQuizzerData = {...};
   `const` globals are NOT properties of window. */
function getData() {
  try {
    if (typeof ConceptQuizzerData !== "undefined") {
      return ConceptQuizzerData;
    }
  } catch (e) {}

  return window.ConceptQuizzerData || null;
}

function getClasses() {
  const data = getData();
  const source = data && data.classes;

  if (!source) return [];

  if (Array.isArray(source)) return source;

  return Object.keys(source).map(function (key) {
    const item = source[key];
    if (!item) return null;
    if (item.id == null) item.id = Number(key);
    return item;
  }).filter(Boolean);
}

function getClassById(id) {
  const wanted = Number(id);
  return getClasses().find(function (item) {
    return Number(item.id) === wanted;
  }) || null;
}

function getSubjects(classData) {
  if (!classData || !classData.subjects) return [];

  if (Array.isArray(classData.subjects)) {
    return classData.subjects.map(function (subject, index) {
      return {
        key: subject.id || String(index),
        data: subject
      };
    });
  }

  return Object.keys(classData.subjects).map(function (key) {
    return {
      key: key,
      data: classData.subjects[key]
    };
  });
}

function setScreen(activeScreen) {
  [classScreen, subjectScreen, chapterScreen, dashboardScreen]
    .forEach(function (screen) {
      if (screen) screen.classList.add("hidden");
    });

  if (activeScreen) activeScreen.classList.remove("hidden");
}

function scrollTop() {
  window.scrollTo(0, 0);
}

function hideLoader() {
  if (!preloader) return;

  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";

  setTimeout(function () {
    if (preloader && preloader.parentNode) {
      preloader.remove();
    }
  }, 500);
}

function registerClassCards() {
  document.querySelectorAll(".classCard").forEach(function (card) {
    if (card.dataset.cqBound === "true") return;
    card.dataset.cqBound = "true";

    card.addEventListener("click", function (event) {
      event.preventDefault();

      const classId = Number(card.dataset.class);
      const selectedClass = getClassById(classId);

      if (!selectedClass) {
        console.error("Concept Quizzer: class not found", classId, getClasses());
        showDataError("Class data could not be found. Please check js/data.js.");
        return;
      }

      document.querySelectorAll(".classCard").forEach(function (item) {
        item.classList.remove("active");
      });
      card.classList.add("active");

      App.currentClass = selectedClass;
      App.currentSubject = null;
      App.currentChapter = null;

      loadSubjects();
    });
  });
}

function loadSubjects() {
  if (!App.currentClass || !subjectGrid) return;

  selectedClassTitle.textContent =
    App.currentClass.name || ("Class " + App.currentClass.id);

  subjectGrid.innerHTML = "";

  const subjects = getSubjects(App.currentClass);

  subjects.forEach(function (entry) {
    const subject = entry.data;
    if (!subject) return;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "subjectCard";

    const chapterCount = Array.isArray(subject.chapters)
      ? subject.chapters.length
      : 0;

    card.innerHTML = `
      <div class="subjectIcon">${subject.icon || "📚"}</div>
      <h3>${escapeHTML(subject.name || entry.key)}</h3>
      <p>${chapterCount} Chapters</p>
    `;

    card.addEventListener("click", function () {
      App.currentSubject = subject;
      App.currentChapter = null;
      loadChapters();
    });

    subjectGrid.appendChild(card);
  });

  setScreen(subjectScreen);
  scrollTop();
}

function loadChapters() {
  if (!App.currentSubject || !chapterGrid) return;

  selectedSubjectTitle.textContent =
    App.currentSubject.name || "Chapters";

  chapterGrid.innerHTML = "";

  const chapters = Array.isArray(App.currentSubject.chapters)
    ? App.currentSubject.chapters
    : [];

  chapters.forEach(function (chapter, index) {
    const chapterName = typeof chapter === "string"
      ? chapter
      : (chapter && (chapter.title || chapter.name)) || "Untitled Chapter";

    const card = document.createElement("button");
    card.type = "button";
    card.className = "chapterCard";

    card.innerHTML = `
      <div class="chapterNumber">Chapter ${index + 1}</div>
      <div class="chapterContent">
        <h3>${escapeHTML(chapterName)}</h3>
        <p>Open Chapter</p>
      </div>
    `;

    card.addEventListener("click", function () {
      App.currentChapter = chapterName;
      openDashboard();
    });

    chapterGrid.appendChild(card);
  });

  setScreen(chapterScreen);
  scrollTop();
}

function openDashboard() {
  if (!App.currentClass || !App.currentSubject || !App.currentChapter) return;

  if (chapterTitle) {
    chapterTitle.textContent = App.currentChapter;
  }

  if (chapterSubtitle) {
    chapterSubtitle.textContent =
      (App.currentClass.name || ("Class " + App.currentClass.id)) +
      " • " +
      (App.currentSubject.name || "Subject");
  }

  setScreen(dashboardScreen);
  scrollTop();
}

function registerNavigation() {
  const backToClasses = byId("backToClasses");
  const backToSubjects = byId("backToSubjects");
  const backToChapters = byId("backToChapters");

  if (backToClasses) {
    backToClasses.onclick = function () {
      setScreen(classScreen);
      scrollTop();
    };
  }

  if (backToSubjects) {
    backToSubjects.onclick = function () {
      setScreen(subjectScreen);
      scrollTop();
    };
  }

  if (backToChapters) {
    backToChapters.onclick = function () {
      setScreen(chapterScreen);
      scrollTop();
    };
  }
}

function registerTheme() {
  const themeButton = byId("themeButton");
  if (!themeButton || themeButton.dataset.cqBound === "true") return;

  themeButton.dataset.cqBound = "true";

  if (localStorage.getItem("cq-theme") === "dark") {
    document.body.classList.add("dark");
  }

  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "cq-theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}

function registerHeroButtons() {
  [byId("startLearning"), byId("exploreButton")]
    .forEach(function (button) {
      if (!button || button.dataset.cqBound === "true") return;
      button.dataset.cqBound = "true";

      button.addEventListener("click", function () {
        if (classScreen) classScreen.scrollIntoView({ behavior: "smooth" });
      });
    });
}

function registerSearch() {
  if (!searchInput || searchInput.dataset.cqBound === "true") return;
  searchInput.dataset.cqBound = "true";

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    document.querySelectorAll("#subjectGrid .subjectCard")
      .forEach(function (card) {
        card.style.display = card.innerText.toLowerCase().includes(keyword)
          ? ""
          : "none";
      });
  });
}

function makeChapterKey() {
  if (!App.currentClass || !App.currentSubject || !App.currentChapter) {
    return null;
  }

  const cleanChapter = String(App.currentChapter)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const subjectId = App.currentSubject.id || App.currentSubject.name || "subject";

  return String(App.currentClass.id) + "-" +
    String(subjectId).toLowerCase().replace(/[^a-z0-9]+/g, "-") +
    "-" + cleanChapter;
}

function registerDashboardCards() {
  const notesCard = byId("notesCard");
  const quizCard = byId("quizCard");

  if (notesCard && notesCard.dataset.cqBound !== "true") {
    notesCard.dataset.cqBound = "true";
    notesCard.addEventListener("click", function () {
      const key = makeChapterKey();
      if (key) localStorage.setItem("cq-current-chapter", key);
      window.location.href = "notes.html";
    });
  }

  if (quizCard && quizCard.dataset.cqBound !== "true") {
    quizCard.dataset.cqBound = "true";
    quizCard.addEventListener("click", function () {
      const key = makeChapterKey();
      if (key) localStorage.setItem("cq-current-chapter", key);
      window.location.href = "quiz.html";
    });
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showDataError(message) {
  console.error("Concept Quizzer:", message);

  const target = classScreen || document.body;
  if (!target) return;

  let box = byId("cqDataError");
  if (box) return;

  box = document.createElement("div");
  box.id = "cqDataError";
  box.style.cssText =
    "margin:20px;padding:18px;border-radius:18px;background:#fff1f2;color:#991b1b;font-family:Poppins,sans-serif;text-align:center;";
  box.innerHTML = "<strong>Something went wrong.</strong><br>" + escapeHTML(message);
  target.appendChild(box);
}

function initApp() {
  const data = getData();

  if (!data || !data.classes) {
    showDataError("js/data.js did not load correctly.");
    hideLoader();
    return;
  }

  registerClassCards();
  registerNavigation();
  registerTheme();
  registerHeroButtons();
  registerSearch();
  registerDashboardCards();
  hideLoader();

  console.log(
    "✅ Concept Quizzer ready. Classes:",
    getClasses().map(function (item) { return item.id; })
  );
}

document.addEventListener("DOMContentLoaded", initApp);
