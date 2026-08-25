/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL NOTES ENGINE — COMIC SAFE V2
  IMPORTANT:
  Comic dialogue is NEVER joined into one paragraph.
  Each character gets its own separate DOM row.
==================================================*/

(function () {
  "use strict";

  window.ConceptQuizzer = window.ConceptQuizzer || {};

  function getElement(id) {
    return document.getElementById(id);
  }

  function safeText(value) {
    return value == null ? "" : String(value);
  }

  function renderComic(block) {
    const wrap = document.createElement("article");
    wrap.className = "cq-comic-story";
    wrap.setAttribute("data-render-as", "comic");

    const head = document.createElement("div");
    head.className = "cq-comic-header";

    const badge = document.createElement("div");
    badge.className = "cq-comic-badge";
    badge.textContent = "📖 COMIC STORY";

    const title = document.createElement("h3");
    title.className = "cq-comic-title";
    title.textContent = safeText(block.title || "Comic Story");

    head.appendChild(badge);
    head.appendChild(title);
    wrap.appendChild(head);

    const stage = document.createElement("div");
    stage.className = "cq-comic-stage";

    const dialogues = Array.isArray(block.dialogues) ? block.dialogues : [];

    dialogues.forEach(function (item, index) {
      const row = document.createElement("div");
      row.className = "cq-dialogue-row";
      row.dataset.dialogueIndex = index;

      const character = document.createElement("div");
      character.className = "cq-character-name";
      character.textContent = safeText(item.character || "Character");

      const bubble = document.createElement("div");
      bubble.className = "cq-dialogue-bubble";
      bubble.textContent = safeText(item.dialogue || "");

      row.appendChild(character);
      row.appendChild(bubble);
      stage.appendChild(row);
    });

    wrap.appendChild(stage);
    return wrap;
  }

  function renderBlock(block) {
    // CRITICAL: comic gets its own renderer and exits here.
    if (block && block.type === "comic") {
      return renderComic(block);
    }

    const el = document.createElement("div");
    el.className = "cq-content-block";

    if (!block) return el;

    const title = block.title ? document.createElement("h4") : null;
    if (title) {
      title.textContent = safeText(block.title);
      el.appendChild(title);
    }

    if (block.text) {
      const p = document.createElement("p");
      p.textContent = safeText(block.text);
      el.appendChild(p);
    }

    return el;
  }

  function injectComicStyles() {
    if (document.getElementById("cq-comic-safe-styles")) return;

    const style = document.createElement("style");
    style.id = "cq-comic-safe-styles";
    style.textContent = `
      .cq-comic-story{
        margin:24px 0;
        padding:0;
        overflow:hidden;
        border-radius:28px;
        background:linear-gradient(180deg,#fff,#f4f1ff);
        border:2px solid rgba(88,67,220,.18);
        box-shadow:0 12px 30px rgba(35,28,90,.10);
      }
      .cq-comic-header{
        padding:22px 22px 18px;
        background:linear-gradient(135deg,#5b45e8,#744ee8);
        color:#fff;
      }
      .cq-comic-badge{
        display:inline-block;
        padding:7px 12px;
        margin-bottom:10px;
        border-radius:999px;
        background:rgba(255,255,255,.18);
        font-weight:800;
        font-size:13px;
        letter-spacing:.5px;
      }
      .cq-comic-title{
        margin:0;
        font-size:25px;
        line-height:1.2;
        font-weight:900;
      }
      .cq-comic-stage{
        padding:20px 16px 24px;
      }
      .cq-dialogue-row{
        display:flex;
        flex-direction:column;
        gap:7px;
        margin:0 0 18px;
      }
      .cq-character-name{
        align-self:flex-start;
        padding:7px 13px;
        border-radius:999px;
        background:#ebe6ff;
        color:#4d39b8;
        font-weight:900;
        font-size:15px;
      }
      .cq-dialogue-bubble{
        width:100%;
        box-sizing:border-box;
        padding:15px 17px;
        border-radius:18px;
        background:#fff;
        border:1px solid #e3def8;
        color:#22283a;
        font-size:17px;
        line-height:1.65;
        box-shadow:0 5px 14px rgba(40,35,80,.07);
      }
      .cq-dialogue-row:nth-child(even) .cq-character-name{
        align-self:flex-end;
        background:#e6f7ef;
        color:#16734b;
      }
      .cq-dialogue-row:nth-child(even) .cq-dialogue-bubble{
        background:#f9fffc;
      }
      .cq-content-block h4{margin:0 0 8px;}
      .cq-content-block p{line-height:1.65;}
    `;
    document.head.appendChild(style);
  }

  function renderChapter(chapter) {
    if (!chapter) return;

    injectComicStyles();

    const title = getElement("chapterTitle");
    const heading = getElement("notesHeading");
    const description = getElement("notesDescription");
    const summary = getElement("chapterSummary");
    const notes = getElement("notesContent");
    const important = getElement("importantPoints");
    const terms = getElement("keyTermsContainer");

    if (title) title.textContent = chapter.title || "Chapter";
    if (heading) heading.textContent = chapter.title || "Chapter Notes";
    if (description) description.textContent = chapter.description || "";
    if (summary) summary.textContent = chapter.summary || "";

    if (notes) {
      notes.innerHTML = "";

      (chapter.sections || []).forEach(function(section, index) {
        const card = document.createElement("section");
        card.className = "noteCard";
        card.dataset.index = index;

        if (section.title) {
          const h3 = document.createElement("h3");
          h3.textContent = safeText(section.title);
          card.appendChild(h3);
        }

        (section.blocks || []).forEach(function(block) {
          // Every block is rendered independently.
          card.appendChild(renderBlock(block));
        });

        if (section.content) {
          const p = document.createElement("p");
          p.textContent = safeText(section.content);
          card.appendChild(p);
        }

        notes.appendChild(card);

        card.addEventListener("click", function () {
          const chapterId = chapter.id || "unknown";
          localStorage.setItem("cq-last-read-" + chapterId, index);
        });
      });
    }

    if (important) {
      important.innerHTML = "";
      (chapter.importantPoints || []).forEach(function(point) {
        const item = document.createElement("li");
        item.textContent = safeText(point);
        important.appendChild(item);
      });
    }

    if (terms) {
      terms.innerHTML = "";
      const termsData = chapter.keyTerms || {};
      if (Array.isArray(termsData)) {
        termsData.forEach(function(term) {
          const chip = document.createElement("span");
          chip.textContent = safeText(term);
          terms.appendChild(chip);
        });
      } else {
        Object.keys(termsData).forEach(function(term) {
          const chip = document.createElement("span");
          chip.textContent = term + ": " + termsData[term];
          terms.appendChild(chip);
        });
      }
    }

    console.log("Universal Notes Engine V2 loaded:", chapter.title);
  }

  window.addEventListener("cq:chapter-loaded", function(event) {
    if (event.detail && event.detail.chapter) {
      renderChapter(event.detail.chapter);
    }
  });

  if (typeof window.ChapterData !== "undefined") {
    renderChapter(window.ChapterData);
  }

  window.ConceptQuizzer.renderNotes = renderChapter;
})();
