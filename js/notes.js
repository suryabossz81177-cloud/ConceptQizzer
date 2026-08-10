/* ==================================================
   CONCEPT QUIZZER — NOTES.JS
   Fixed universal chapter notes engine
   Uses notes.html + chapter-registry.js only.
   No chapter.html / notes-logic.js required.
   ================================================== */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const state = {
    chapter: null,
    meta: null,
    chapters: [],
    currentIndex: -1
  };

  function getChapterId() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("chapter");

    if (fromUrl) {
      localStorage.setItem("cq-current-chapter", fromUrl);
      return fromUrl;
    }

    const saved = localStorage.getItem("cq-current-chapter");
    if (saved) return saved;

    const bodyId = document.body.dataset.chapter;
    if (bodyId) {
      localStorage.setItem("cq-current-chapter", bodyId);
      return bodyId;
    }

    const first = (window.ChapterRegistry || []).find(c => c && c.enabled !== false);
    if (first) {
      localStorage.setItem("cq-current-chapter", first.id);
      return first.id;
    }

    return null;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  async function fetchText(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Could not load ${url} (HTTP ${response.status})`);
    }
    return await response.text();
  }

  function extractChapterData(source, file) {
    let code = String(source || "").trim();

    // Support the normal format: const ChapterData = {...};
    code = code.replace(
      /(^|\n)\s*const\s+ChapterData\s*=/,
      "$1window.__CQ_CHAPTER_DATA__ ="
    );

    // Also support let/var ChapterData and window.ChapterData.
    code = code.replace(
      /(^|\n)\s*(?:let|var)\s+ChapterData\s*=/,
      "$1window.__CQ_CHAPTER_DATA__ ="
    );

    code = code.replace(
      /window\.ChapterData\s*=/g,
      "window.__CQ_CHAPTER_DATA__ ="
    );

    if (!code.includes("__CQ_CHAPTER_DATA__")) {
      throw new Error(`Invalid chapter file: ${file}. Expected ChapterData.`);
    }

    window.__CQ_CHAPTER_DATA__ = null;

    // Chapter files are trusted project files; execute them in an isolated function scope.
    const run = new Function("window", code + `\n//# sourceURL=${file}`);
    run(window);

    const data = window.__CQ_CHAPTER_DATA__;
    window.__CQ_CHAPTER_DATA__ = null;

    if (!data || typeof data !== "object") {
      throw new Error(`Chapter data is empty: ${file}`);
    }

    if (!Array.isArray(data.sections)) {
      data.sections = [];
    }
    if (!Array.isArray(data.importantPoints)) data.importantPoints = [];
    if (!Array.isArray(data.keyTerms)) data.keyTerms = [];

    return data;
  }

  async function loadChapterFile(meta) {
    if (!meta || !meta.file) {
      throw new Error("Chapter registry entry has no notes file.");
    }

    const source = await fetchText(meta.file);
    return extractChapterData(source, meta.file);
  }

  function showError(message) {
    $("notesHeading").textContent = "Notes could not be loaded";
    $("notesDescription").textContent = "There was a problem loading this chapter.";
    $("notesContent").innerHTML = `
      <div class="errorBox">
        <div class="icon">⚠️</div>
        <h3>Chapter loading error</h3>
        <p>${escapeHtml(message)}</p>
        <p>Check that the chapter file exists at the path shown above.</p>
        <button class="navButton" onclick="location.reload()">Refresh</button>
      </div>`;
    console.error("Concept Quizzer notes error:", message);
  }

  function renderChapter(chapter, meta) {
    state.chapter = chapter;
    state.meta = meta;

    $("chapterTitle").textContent = chapter.title || meta.title || "Chapter";
    $("chapterPath").textContent = `Class ${chapter.class || meta.class || ""} • ${chapter.subject || meta.subject || ""}`;
    $("notesHeading").textContent = chapter.title || "Chapter Notes";
    $("notesDescription").textContent = chapter.description || "Easy-to-understand notes with important concepts and key points.";
    $("chapterSummary").textContent = chapter.summary || "";

    renderSections(chapter.sections);
    renderImportantPoints(chapter.importantPoints);
    renderKeyTerms(chapter.keyTerms);
    updateProgress(chapter);

    const key = chapter.id || meta.id;
    const lastRead = localStorage.getItem("cq-last-read-" + key);
    if (lastRead !== null) {
      const card = document.querySelector(`.noteCard[data-index="${Number(lastRead)}"]`);
      if (card) card.classList.add("lastRead");
    }

    updateNavigation();
  }

  function renderSections(sections) {
    const container = $("notesContent");
    container.innerHTML = "";

    if (!sections.length) {
      container.innerHTML = `<div class="errorBox"><h3>No notes found</h3><p>This chapter file loaded, but it contains no sections.</p></div>`;
      return;
    }

    sections.forEach((section, index) => {
      const card = document.createElement("article");
      card.className = "noteCard";
      card.dataset.index = index;

      let html = section.title ? `<h3>${escapeHtml(section.title)}</h3>` : "";

      if (Array.isArray(section.blocks)) {
        section.blocks.forEach(block => {
          if (!block) return;
          const title = escapeHtml(block.title || "");
          const text = escapeHtml(block.text || "");

          switch (block.type) {
            case "paragraph":
              html += `<p>${text}</p>`;
              break;
            case "definition":
              html += `<div class="definitionBox"><h4>${title || "Definition"}</h4><p>${text}</p></div>`;
              break;
            case "example":
              html += `<div class="exampleBox"><h4>${title || "Example"}</h4><p>${text}</p></div>`;
              break;
            case "application":
              html += `<div class="applicationBox"><h4>${title || "Application"}</h4><p>${text}</p></div>`;
              break;
            case "fact":
              html += `<div class="factBox"><h4>💡 ${title || "Fact"}</h4><p>${text}</p></div>`;
              break;
            case "warning":
              html += `<div class="warningBox"><h4>⚠️ ${title || "Warning"}</h4><p>${text}</p></div>`;
              break;
            case "tip":
              html += `<div class="tipBox"><h4>🧠 ${title || "Tip"}</h4><p>${text}</p></div>`;
              break;
            case "examTip":
              html += `<div class="examBox"><h4>🎯 ${title || "Exam Tip"}</h4><p>${text}</p></div>`;
              break;
            case "summary":
              html += `<div class="infoCard"><h4>📌 Summary</h4><p>${text}</p></div>`;
              break;
            default:
              if (text) html += `<p>${text}</p>`;
          }
        });
      } else if (section.content) {
        html += `<p>${escapeHtml(section.content)}</p>`;
      }

      card.innerHTML = html;
      container.appendChild(card);

      card.addEventListener("click", () => {
        const key = state.chapter?.id || state.meta?.id || "unknown";
        localStorage.setItem("cq-last-read-" + key, index);
      });
    });
  }

  function renderImportantPoints(points) {
    const container = $("importantPoints");
    container.innerHTML = "";
    points.forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      container.appendChild(li);
    });
  }

  function renderKeyTerms(terms) {
    const container = $("keyTermsContainer");
    container.innerHTML = "";
    terms.forEach(term => {
      const chip = document.createElement("span");
      chip.textContent = term;
      container.appendChild(chip);
    });
  }

  function updateProgress(chapter) {
    const total = Array.isArray(chapter.sections) ? chapter.sections.length : 0;
    const completed = (chapter.sections || []).filter(s => Array.isArray(s.blocks) && s.blocks.length > 0).length;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    $("progressText").textContent = percent + "%";
    $("progressFill").style.width = percent + "%";
  }

  function updateNavigation() {
    state.chapters = (window.ChapterRegistry || [])
      .filter(c => c && c.enabled !== false)
      .slice()
      .sort((a, b) => Number(a.class || 0) - Number(b.class || 0) ||
        String(a.subject || "").localeCompare(String(b.subject || "")) ||
        Number(a.chapterNumber || 0) - Number(b.chapterNumber || 0));

    const currentId = state.meta?.id || state.chapter?.id || getChapterId();
    state.currentIndex = state.chapters.findIndex(c => c.id === currentId);

    const prev = state.currentIndex > 0 ? state.chapters[state.currentIndex - 1] : null;
    const next = state.currentIndex >= 0 && state.currentIndex < state.chapters.length - 1 ? state.chapters[state.currentIndex + 1] : null;

    const prevBtn = $("previousChapter");
    const nextBtn = $("nextChapter");

    prevBtn.disabled = !prev;
    nextBtn.disabled = !next;
    prevBtn.title = prev ? `Go to ${prev.title}` : "First chapter";
    nextBtn.title = next ? `Go to ${next.title}` : "Last chapter";

    $("chapterCounter").innerHTML = state.currentIndex >= 0
      ? `<span>CHAPTER</span> <strong>${state.currentIndex + 1}</strong> / ${state.chapters.length}`
      : "";

    prevBtn.onclick = () => prev && switchChapter(prev.id);
    nextBtn.onclick = () => next && switchChapter(next.id);
  }

  async function switchChapter(id) {
    localStorage.setItem("cq-current-chapter", id);
    const url = new URL(window.location.href);
    url.searchParams.set("chapter", id);
    window.location.href = url.href;
  }

  function bindSearch() {
    const input = $("chapterSearch");
    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      document.querySelectorAll(".noteCard").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? "" : "none";
      });
    });
  }

  function bindTheme() {
    const btn = $("themeToggle");
    if (localStorage.getItem("cq-theme") === "dark") {
      document.body.classList.add("dark");
      btn.textContent = "☀️";
    }
    btn.addEventListener("click", () => {
      const dark = document.body.classList.toggle("dark");
      localStorage.setItem("cq-theme", dark ? "dark" : "light");
      btn.textContent = dark ? "☀️" : "🌙";
    });
  }

  function bindBookmark() {
    const btn = $("bookmarkButton");
    btn.addEventListener("click", () => {
      const id = state.meta?.id || state.chapter?.id;
      if (!id) return;
      localStorage.setItem("cq-bookmark", id);
      btn.innerHTML = '<span class="material-icons-round">bookmark</span>';
    });
  }

  function bindBack() {
    $("backButton").addEventListener("click", () => {
      if (document.referrer) history.back();
      else window.location.href = "index.html";
    });
  }

  async function start() {
    try {
      if (!Array.isArray(window.ChapterRegistry) || !window.ChapterRegistry.length) {
        throw new Error("ChapterRegistry is empty or chapter-registry.js did not load.");
      }

      const id = getChapterId();
      if (!id) throw new Error("No chapter is selected.");

      const meta = window.ChapterRegistry.find(c => c && c.id === id && c.enabled !== false);
      if (!meta) throw new Error(`Chapter '${id}' was not found in ChapterRegistry.`);

      const chapter = await loadChapterFile(meta);
      renderChapter(chapter, meta);

      // Make the active chapter available to other project features.
      window.CQ_ACTIVE_CHAPTER = chapter;
      window.ConceptQuizzer = window.ConceptQuizzer || {};
      window.ConceptQuizzer.currentChapter = chapter;
      window.ConceptQuizzer.currentChapterMeta = meta;
      window.ConceptQuizzer.getChapter = () => state.chapter;
      window.ConceptQuizzer.getChapterMeta = () => state.meta;
      window.ConceptQuizzer.getAllChapters = () => state.chapters;

      console.log("✅ Notes loaded:", chapter.title);
    } catch (error) {
      showError(error?.message || String(error));
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindSearch();
    bindTheme();
    bindBookmark();
    bindBack();
    start();
  });
})();
