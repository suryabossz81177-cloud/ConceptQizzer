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
  registerDashboardCards();
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


function scienceChaptersForClass(classId) {
  const cls = getClassById(classId);
  if (!cls) return [];
  const science = getSubjects(cls).find(function (entry) {
    return String(entry.key || entry.data.id || '').toLowerCase() === 'science';
  });
  return science && Array.isArray(science.data.chapters) ? science.data.chapters : [];
}

function scienceExperimentData(classId, chapterIndex, chapterName) {
  // Chapter 1 is the first fully interactive laboratory currently installed.
  if (Number(classId) === 6 && Number(chapterIndex) === 0) {
    return [
      {n:1, icon:'🖊️', title:'Pen Detective', tag:'Everyday Investigation', text:'Change ink level and tip condition, predict the result, then run the test.', link:'js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab&experiment=1'},
      {n:2, icon:'🌱', title:'Plant Mystery', tag:'NCERT-inspired Inquiry', text:'Change light, watering and nutrients and observe a simulated 7-day response.', link:'js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab&experiment=2'},
      {n:3, icon:'🚁', title:'Paper Helicopter', tag:'Extension Experiment', text:'Modify blade length and paper mass and compare the simulated fall time.', link:'js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab&experiment=3'},
      {n:4, icon:'🛝', title:'Ramp Investigation', tag:'Physics Extension', text:'Change slope and surface, then test how far the cart travels.', link:'js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab&experiment=4'},
      {n:5, icon:'❓', title:'Mystery Question Lab', tag:'Scientific Thinking', text:'Turn an observation into a testable question and choose the variable to investigate.', link:'js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab&experiment=5'}
    ];
  }
  return [1,2,3,4,5].map(function(n){
    return {n:n, icon:['🧪','🔬','🌡️','⚙️','💡'][n-1], title:'Experiment '+n, tag:'Coming with this chapter', text:'This chapter’s five interactive investigations will appear here as the laboratory is built.', link:null};
  });
}

function initScienceLabHub() {
  const classGrid = byId('scienceClassGrid');
  const chapterGrid = byId('scienceChapterGrid');
  const chapterPanel = byId('scienceChapterPanel');
  const experimentPanel = byId('scienceExperimentPanel');
  const experimentGrid = byId('scienceExperimentGrid');
  if (!classGrid || !chapterGrid || !experimentPanel || !experimentGrid) return;

  const classes = getClasses();
  classGrid.innerHTML = classes.map(function(c){
    return `<button type="button" class="scienceClassChip" data-science-class="${c.id}"><span>${c.id}</span><b>${escapeHTML(c.name || 'Class '+c.id)}</b></button>`;
  }).join('');

  classGrid.querySelectorAll('[data-science-class]').forEach(function(btn){
    btn.addEventListener('click', function(){
      classGrid.querySelectorAll('.scienceClassChip').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      const classId=Number(btn.dataset.scienceClass);
      const cls=getClassById(classId);
      document.getElementById('vslClassTitle').textContent=(cls?.name || 'Class '+classId)+' • Science Chapters';
      chapterPanel.classList.remove('hidden');
      experimentPanel.classList.add('hidden');
      const chapters=scienceChaptersForClass(classId);
      chapterGrid.innerHTML=chapters.map(function(ch,i){
        const count=(classId===6 && i===0)?5:5;
        return `<button type="button" class="scienceChapterCard" data-vsl-class="${classId}" data-vsl-index="${i}"><span class="vslChapterNo">Chapter ${i+1}</span><h3>${escapeHTML(typeof ch==='string'?ch:(ch.title||ch.name||'Chapter'))}</h3><span class="experimentCount">🧪 ${count} experiments</span></button>`;
      }).join('');
      chapterGrid.querySelectorAll('[data-vsl-index]').forEach(function(chBtn){
        chBtn.addEventListener('click',function(){
          chapterGrid.querySelectorAll('.scienceChapterCard').forEach(x=>x.classList.remove('active'));
          chBtn.classList.add('active');
          const ci=Number(chBtn.dataset.vslIndex), cId=Number(chBtn.dataset.vslClass);
          const chapters=scienceChaptersForClass(cId), name=chapters[ci];
          const title=typeof name==='string'?name:(name.title||name.name||'Chapter');
          document.getElementById('vslChapterTitle').textContent=`Chapter ${ci+1} • ${title}`;
          experimentPanel.classList.remove('hidden');
          const labs=scienceExperimentData(cId,ci,title);
          experimentGrid.innerHTML=labs.map(function(lab){
            const action=lab.link?`<a class="vslOpenLab" href="${lab.link}">Open Experiment <span class="material-icons-round">arrow_forward</span></a>`:`<span class="vslComing">Building this experiment next</span>`;
            return `<article class="scienceExperimentCard"><div class="experimentIcon">${lab.icon}</div><div class="experimentMeta">EXPERIMENT ${lab.n} • ${escapeHTML(lab.tag)}</div><h3>${escapeHTML(lab.title)}</h3><p>${escapeHTML(lab.text)}</p>${action}</article>`;
          }).join('');
          experimentPanel.scrollIntoView({behavior:'smooth',block:'start'});
        });
      });
    });
  });
}

function registerDashboardCards() {
  const notesCard = byId("notesCard");
  const quizCard = byId("quizCard");
  const scienceLabCard = byId("scienceLabCard");
  const practiceCard = byId("practiceCard");
  const progressCard = byId("progressCard");

  const isScience = App.currentSubject && String(App.currentSubject.id || App.currentSubject.name || "").toLowerCase() === "science";

  [practiceCard, progressCard].forEach(function(card){
    if (card) card.classList.toggle("subjectHiddenCard", !isScience ? true : true);
  });

  if (scienceLabCard) scienceLabCard.classList.toggle("scienceLabVisible", !!isScience);
  if (practiceCard) practiceCard.classList.add("forceHiddenDashboardCard");
  if (progressCard) progressCard.classList.add("forceHiddenDashboardCard");

  if (notesCard && notesCard.dataset.cqBound !== "true") {
    notesCard.dataset.cqBound = "true";
    notesCard.addEventListener("click", function () {
      const key = makeChapterKey();
      if (key) localStorage.setItem("cq-current-chapter", key);
      if (App.currentSubject && String(App.currentSubject.id || "").toLowerCase() === "science" && App.currentClass && Number(App.currentClass.id) === 6) {
        const idx = App.currentSubject.chapters.findIndex(function(c){ return (typeof c==='string'?c:c.title||c.name) === App.currentChapter; });
        if (idx === 0) {
          window.location.href = "js/chapters/science/class6/the-wonderful-world-of-science.html?tab=learn";
          return;
        }
      }
      window.location.href = "notes.html";
    });
  }

  if (quizCard && quizCard.dataset.cqBound !== "true") {
    quizCard.dataset.cqBound = "true";
    quizCard.addEventListener("click", function () {
      const key = makeChapterKey();
      if (key) localStorage.setItem("cq-current-chapter", key);
      if (App.currentSubject && String(App.currentSubject.id || "").toLowerCase() === "science" && App.currentClass && Number(App.currentClass.id) === 6) {
        const idx = App.currentSubject.chapters.findIndex(function(c){ return (typeof c==='string'?c:c.title||c.name) === App.currentChapter; });
        if (idx === 0) {
          window.location.href = "js/chapters/science/class6/the-wonderful-world-of-science.html?tab=quiz";
          return;
        }
      }
      window.location.href = "quiz.html";
    });
  }

  if (scienceLabCard && scienceLabCard.dataset.cqBound !== "true") {
    scienceLabCard.dataset.cqBound = "true";
    scienceLabCard.addEventListener("click", function(){
      const idx = App.currentSubject && Array.isArray(App.currentSubject.chapters) ? App.currentSubject.chapters.findIndex(function(c){ return (typeof c==='string'?c:c.title||c.name) === App.currentChapter; }) : 0;
      localStorage.setItem("cq-science-class", String(App.currentClass?.id || 6));
      localStorage.setItem("cq-science-chapter-index", String(Math.max(0,idx)));
      if (Number(App.currentClass?.id) === 6 && idx === 0) {
        window.location.href = "js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab";
      } else {
        document.getElementById("scienceLabHub")?.scrollIntoView({behavior:"smooth"});
      }
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
  initScienceLabHub();
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
