
var state = {
  currentView: "home-view",
  currentClass: null,
  currentSubject: null,
  currentChapter: null,
  user: null,
  quizState: {
    questions: [],
    currentIndex: 0,
    answers: {}
  }
};

document.addEventListener("DOMContentLoaded", function() {
  hideLoader();
  initTheme();
  renderClassesGrid();
  renderPopularChapters();
  initSearchEngine();
});

function hideLoader() {
  var loader = document.getElementById("loading-screen");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(function() { loader.style.display = "none"; }, 300);
  }
}

function navigateTo(viewId, params) {
  params = params || {};
  var sections = document.querySelectorAll(".view-section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }

  var target = document.getElementById(viewId);
  if (target) {
    target.classList.add("active");
    state.currentView = viewId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (viewId === "classes-view") {
    renderAllClassesGrid();
  } else if (viewId === "subjects-view" && params.classId) {
    state.currentClass = params.classId;
    renderSubjectsGrid(params.classId);
  } else if (viewId === "chapters-view" && params.subjectId) {
    state.currentSubject = params.subjectId;
    renderChaptersGrid(params.classId || state.currentClass, params.subjectId);
  } else if (viewId === "chapter-detail-view" && params.chapterTitle) {
    state.currentChapter = decodeURIComponent(params.chapterTitle);
    renderChapterDetail(state.currentChapter);
  } else if (viewId === "dashboard-view") {
    renderDashboard();
  }
}

function selectClass(classId) {
  state.currentClass = classId;
  navigateTo("subjects-view", { classId: classId });
}

function selectSubject(subjectId) {
  state.currentSubject = subjectId;
  navigateTo("chapters-view", { classId: state.currentClass, subjectId: subjectId });
}

function openChapter(encodedTitle) {
  var title = decodeURIComponent(encodedTitle);
  state.currentChapter = title;
  navigateTo("chapter-detail-view", { chapterTitle: encodeURIComponent(title) });
}

function initTheme() {
  var currentTheme = localStorage.getItem("cq_theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeButtonUI(currentTheme);

  var toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
      var activeTheme = document.documentElement.getAttribute("data-theme");
      var nextTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("cq_theme", nextTheme);
      updateThemeButtonUI(nextTheme);
    });
  }
}

function updateThemeButtonUI(theme) {
  var toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

function renderClassesGrid() {
  var container = document.getElementById("classes-grid");
  if (!container || !window.ConceptQuizzerData) return;

  var html = "";
  for (var i = 0; i < window.ConceptQuizzerData.classes.length; i++) {
    var c = window.ConceptQuizzerData.classes[i];
    html += '<div class="card class-card" onclick="selectClass('' + c.id + '')">' +
      '<h3>' + c.name + '</h3>' +
      '<p style="color: var(--text-muted); font-size: 0.9rem;">' + c.totalChapters + ' Chapters</p>' +
    '</div>';
  }
  container.innerHTML = html;
}

function renderAllClassesGrid() {
  var container = document.getElementById("all-classes-grid");
  if (!container || !window.ConceptQuizzerData) return;

  var html = "";
  for (var i = 0; i < window.ConceptQuizzerData.classes.length; i++) {
    var c = window.ConceptQuizzerData.classes[i];
    html += '<div class="card class-card" onclick="selectClass('' + c.id + '')">' +
      '<h3>' + c.name + '</h3>' +
      '<p style="color: var(--text-muted); font-size: 0.9rem;">' + c.totalChapters + ' Chapters</p>' +
    '</div>';
  }
  container.innerHTML = html;
}

function renderPopularChapters() {
  var container = document.getElementById("popular-chapters-grid");
  if (!container) return;

  var popular = [
    { classId: "class-10", subjectId: "c10-sci", class: "Class 10", subject: "Science", title: "Light – Reflection and Refraction" },
    { classId: "class-10", subjectId: "c10-math", class: "Class 10", subject: "Mathematics", title: "Introduction to Trigonometry" },
    { classId: "class-9", subjectId: "c9-ai", class: "Class 9", subject: "Artificial Intelligence", title: "Introduction to AI" },
    { classId: "class-8", subjectId: "c8-sci", class: "Class 8", subject: "Science", title: "Electricity: Magnetic and Heating Effects" },
    { classId: "class-9", subjectId: "c9-math", class: "Class 9", subject: "Mathematics", title: "Polynomials" },
    { classId: "class-10", subjectId: "c10-it", class: "Class 10", subject: "Information Technology", title: "Database Management System (DBMS)" }
  ];

  var html = "";
  for (var i = 0; i < popular.length; i++) {
    var item = popular[i];
    html += '<div class="card" onclick="openChapter('' + encodeURIComponent(item.title) + '')">' +
      '<span class="badge" style="width: fit-content;">' + item.class + ' • ' + item.subject + '</span>' +
      '<h4 style="font-size: 1.15rem; margin-bottom: 0.8rem;">' + item.title + '</h4>' +
      '<p style="color: var(--text-muted); font-size: 0.85rem; margin-top: auto;">NCERT Notes • Diagrams • 125 Question Bank</p>' +
    '</div>';
  }
  container.innerHTML = html;
}

function renderSubjectsGrid(classId) {
  var container = document.getElementById("subjects-grid");
  var titleEl = document.getElementById("subjects-title");
  if (!container) return;

  var cls = null;
  for (var i = 0; i < window.ConceptQuizzerData.classes.length; i++) {
    if (window.ConceptQuizzerData.classes[i].id === classId) {
      cls = window.ConceptQuizzerData.classes[i];
      break;
    }
  }
  if (!cls) return;

  if (titleEl) titleEl.innerText = cls.name + " - Choose Subject";

  var html = "";
  for (var j = 0; j < cls.subjects.length; j++) {
    var s = cls.subjects[j];
    html += '<div class="card" onclick="selectSubject('' + s.id + '')">' +
      '<h3 style="font-size: 1.4rem; color: var(--primary); margin-bottom: 0.5rem;">' + s.name + '</h3>' +
      '<p style="color: var(--text-muted);">' + s.count + ' Chapters available</p>' +
    '</div>';
  }
  container.innerHTML = html;
}

function renderChaptersGrid(classId, subjectId) {
  var container = document.getElementById("chapters-grid");
  var titleEl = document.getElementById("chapters-title");
  if (!container) return;

  var cls = null;
  for (var i = 0; i < window.ConceptQuizzerData.classes.length; i++) {
    if (window.ConceptQuizzerData.classes[i].id === classId) {
      cls = window.ConceptQuizzerData.classes[i];
      break;
    }
  }
  var sub = null;
  if (cls) {
    for (var j = 0; j < cls.subjects.length; j++) {
      if (cls.subjects[j].id === subjectId) {
        sub = cls.subjects[j];
        break;
      }
    }
  }
  if (!sub) return;

  if (titleEl) titleEl.innerText = cls.name + " • " + sub.name + " Chapters";

  var html = "";
  for (var k = 0; k < sub.chapters.length; k++) {
    var ch = sub.chapters[k];
    html += '<div class="card" onclick="openChapter('' + encodeURIComponent(ch) + '')">' +
      '<span class="badge" style="width: fit-content;">Chapter ' + (k + 1) + '</span>' +
      '<h4 style="font-size: 1.2rem; margin-bottom: 0.8rem;">' + ch + '</h4>' +
      '<div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted); margin-top: auto;">' +
        '<span>📖 Detailed Notes</span>' +
        '<span>⚡ 125 Qs</span>' +
      '</div>' +
    '</div>';
  }
  container.innerHTML = html;
}

function renderChapterDetail(title) {
  document.getElementById("chapter-header-title").innerText = title;
  switchTab("notes");
}

function switchTab(tab) {
  var title = state.currentChapter || "Chapter Content";
  var tabs = ['notes', 'diagrams', 'examples', 'exercises'];
  for (var i = 0; i < tabs.length; i++) {
    var btn = document.getElementById('tab-btn-' + tabs[i]);
    if (btn) {
      if (tabs[i] === tab) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  }

  var box = document.getElementById("tab-content-box");
  if (!box) return;

  if (tab === 'notes') {
    box.innerHTML = 
      '<h2>1. Executive Summary & Core Concept</h2>' +
      '<p>This chapter <strong>' + title + '</strong> covers key foundational laws strictly mapped to the NCERT/CBSE curriculum for competitive board preparation.</p>' +
      '<h2>2. Key Definitions & Formulations</h2>' +
      '<p><strong>• Standard Axiom:</strong> The primary law governing physical and mathematical logic in ' + title + '.</p>' +
      '<p><strong>• Formula Derivation:</strong> Key variables, standard units, and dimensional equations.</p>' +
      '<h2>3. Important Formulae List</h2>' +
      '<ul style="margin-left:1.5rem; margin-bottom:1.5rem;">' +
        '<li><strong>SI Unit:</strong> Standard metric representation used across numerical evaluations.</li>' +
        '<li><strong>Limiting Conditions:</strong> Boundaries under which equations remain invariant.</li>' +
      '</ul>';
  } else if (tab === 'diagrams') {
    box.innerHTML = 
      '<h2>Visual Diagrams & Schematics</h2>' +
      '<div style="background:var(--bg-main); border:2px dashed var(--primary); border-radius:8px; padding:2rem; text-align:center; margin:1.5rem 0;">' +
        '🖼️ [Interactive Labeled Diagram Schematic for ' + title + ']' +
      '</div>';
  } else if (tab === 'examples') {
    box.innerHTML = 
      '<h2>Solved Step-by-Step Examples</h2>' +
      '<div style="background:var(--bg-main); padding:1.2rem; border-radius:8px; border-left:4px solid var(--primary); margin-bottom:1.5rem;">' +
        '<h3>Example Problem 1:</h3>' +
        '<p><strong>Question:</strong> Apply fundamental laws to evaluate parameters in ' + title + '.</p>' +
        '<p><strong>Solution:</strong> Substituting standard values yields exact theoretical equilibrium.</p>' +
      '</div>';
  } else if (tab === 'exercises') {
    box.innerHTML = 
      '<h2>Practice Exercises & Board Questions</h2>' +
      '<p>1. State the primary law of ' + title + ' and derive its standard unit.</p>' +
      '<p>2. Solve numerical problem for variable boundary conditions.</p>' +
      '<button class="btn btn-primary" style="margin-top:1.5rem;" onclick="startQuiz()">⚡ Test Your Knowledge with Quiz</button>';
  }
}

function initSearchEngine() {
  var input = document.getElementById("main-search-input");
  var modal = document.getElementById("search-results");
  if (!input || !modal) return;

  var allChapters = window.ConceptQuizzerData.getAllChaptersFlat();

  input.addEventListener("input", function(e) {
    var query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      modal.style.display = "none";
      modal.innerHTML = "";
      return;
    }

    var matches = [];
    for (var i = 0; i < allChapters.length; i++) {
      var ch = allChapters[i];
      if (ch.chapterTitle.toLowerCase().indexOf(query) !== -1 ||
          ch.subjectName.toLowerCase().indexOf(query) !== -1 ||
          ch.className.toLowerCase().indexOf(query) !== -1) {
        matches.push(ch);
        if (matches.length >= 8) break;
      }
    }

    if (matches.length === 0) {
      modal.innerHTML = '<div style="padding:1rem; color:var(--text-muted); text-align:center;">No matching chapters found.</div>';
    } else {
      var html = "";
      for (var j = 0; j < matches.length; j++) {
        var item = matches[j];
        html += '<div class="search-result-item" onclick="openChapter('' + encodeURIComponent(item.chapterTitle) + ''); document.getElementById('search-results').style.display='none';">' +
          '<div style="font-weight:700; font-size:0.95rem; color:var(--text-main);">' + item.chapterTitle + '</div>' +
          '<div style="font-size:0.8rem; color:var(--text-muted);">' + item.className + ' • ' + item.subjectName + '</div>' +
        '</div>';
      }
      modal.innerHTML = html;
    }
    modal.style.display = "block";
  });

  document.addEventListener("click", function(e) {
    if (!input.contains(e.target) && !modal.contains(e.target)) {
      modal.style.display = "none";
    }
  });
}

function startQuiz() {
  var title = state.currentChapter || "General Chapter";
  var sampleQuestions = [
    {
      q: "What is the core principle behind " + title + "?",
      options: ["Fundamental Law of Conservation", "Principle of Superposition", "Enthalpy Retention Standard", "Dynamic Force Equilibrium"],
      correct: 0
    },
    {
      q: "Assertion (A): Concepts in " + title + " apply universally under standard conditions. Reason (R): Quantitative laws remain invariant.",
      options: ["Both A and R are true, and R is correct explanation", "Both A and R are true, but R is not correct explanation", "A is true, R is false", "A is false, R is true"],
      correct: 0
    },
    {
      q: "Which standard SI unit is associated with measurement in " + title + "?",
      options: ["Joule (J)", "Pascal (Pa)", "Newton (N)", "Meter per Second (m/s)"],
      correct: 0
    }
  ];

  state.quizState.questions = sampleQuestions;
  state.quizState.currentIndex = 0;
  state.quizState.answers = {};
  
  navigateTo("quiz-view");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  var q = state.quizState.questions[state.quizState.currentIndex];
  var container = document.getElementById("quiz-question-container");
  if (!container || !q) return;

  var html = '<h3 style="font-size:1.25rem; margin-bottom:1.2rem;">Question ' + (state.quizState.currentIndex + 1) + ' of ' + state.quizState.questions.length + '</h3>' +
    '<p style="font-size:1.1rem; font-weight:600; margin-bottom:1.5rem;">' + q.q + '</p><div>';

  for (var i = 0; i < q.options.length; i++) {
    var opt = q.options[i];
    var isSelected = (state.quizState.answers[state.quizState.currentIndex] === i);
    html += '<button class="option-btn ' + (isSelected ? 'selected' : '') + '" onclick="selectQuizOption(' + i + ')">' +
      '<strong>' + String.fromCharCode(65 + i) + '.</strong> ' + opt +
    '</button>';
  }
  html += '</div>';

  container.innerHTML = html;
  document.getElementById("quiz-progress-fill").style.width = (((state.quizState.currentIndex + 1) / state.quizState.questions.length) * 100) + '%';
}

function selectQuizOption(index) {
  state.quizState.answers[state.quizState.currentIndex] = index;
  renderQuizQuestion();
}

function nextQuestion() {
  if (state.quizState.currentIndex < state.quizState.questions.length - 1) {
    state.quizState.currentIndex++;
    renderQuizQuestion();
  } else {
    submitQuiz();
  }
}

function submitQuiz() {
  var score = 0;
  for (var i = 0; i < state.quizState.questions.length; i++) {
    if (state.quizState.answers[i] === state.quizState.questions[i].correct) score++;
  }

  var percent = Math.round((score / state.quizState.questions.length) * 100);

  document.getElementById("result-score-text").innerText = score + ' / ' + state.quizState.questions.length;
  document.getElementById("result-percent-text").innerText = percent + '%';

  navigateTo("result-view");
}

function openAuthModal() {
  var modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "flex";
}

function closeAuthModal() {
  var modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "none";
}

function renderDashboard() {
  var historyList = document.getElementById("dashboard-quiz-history");
  if (historyList) {
    historyList.innerHTML = 
      '<div style="padding:1rem; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between;">' +
        '<div><strong>Light – Reflection and Refraction</strong><br><small style="color:var(--text-muted)">Score: 92% • Class 10 Science</small></div>' +
        '<span class="badge">Passed</span>' +
      '</div>';
  }
}

function generateCertificate() {
  var canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 700;
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 1000, 700);

  ctx.strokeStyle = "#4f46e5";
  ctx.lineWidth = 12;
  ctx.strokeRect(20, 20, 960, 660);

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 38px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("CERTIFICATE OF ACHIEVEMENT", 500, 130);

  ctx.fillStyle = "#64748b";
  ctx.font = "20px sans-serif";
  ctx.fillText("PROUDLY PRESENTED TO", 500, 180);

  ctx.fillStyle = "#4f46e5";
  ctx.font = "bold 44px sans-serif";
  ctx.fillText("Student Learner", 500, 260);

  ctx.fillStyle = "#0f172a";
  ctx.font = "22px sans-serif";
  ctx.fillText("For mastering the chapter:", 500, 330);
  
  ctx.font = "bold 26px sans-serif";
  ctx.fillText(state.currentChapter || "Light – Reflection and Refraction", 500, 380);

  var link = document.createElement("a");
  link.download = "Certificate_" + (state.currentChapter || "ConceptQuizzer") + ".png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
