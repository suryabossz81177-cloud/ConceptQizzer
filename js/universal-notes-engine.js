/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL NOTES ENGINE — COMIC ONE-BLOCK V3

  Comic format:
  • One complete comic = ONE block/card
  • Character name is shown INLINE with dialogue
  • No "Character" label
  • No "Dialogue" label
  • No separate Character/Dialogue cards
  • Every speaker still gets a NEW LINE
==================================================*/

(function () {
  "use strict";

  window.ConceptQuizzer = window.ConceptQuizzer || {};

  function getElement(id) {
    return document.getElementById(id);
  }

  function text(value) {
    return value == null ? "" : String(value);
  }

  function renderComic(block) {
    const story = document.createElement("article");
    story.className = "cq-comic-story cq-comic-one-block";
    story.setAttribute("data-render-as", "comic");

    const header = document.createElement("div");
    header.className = "cq-comic-header";

    const badge = document.createElement("div");
    badge.className = "cq-comic-badge";
    badge.textContent = "📖 COMIC STORY";

    const title = document.createElement("h3");
    title.className = "cq-comic-title";
    title.textContent = text(block.title || "Comic Story");

    header.appendChild(badge);
    header.appendChild(title);
    story.appendChild(header);

    const dialogueBox = document.createElement("div");
    dialogueBox.className = "cq-comic-dialogues";

    const dialogues = Array.isArray(block.dialogues) ? block.dialogues : [];

    dialogues.forEach(function (item, index) {
      const line = document.createElement("div");
      line.className = "cq-comic-line";
      line.dataset.dialogueIndex = index;

      // Name and dialogue are intentionally in the SAME visual block.
      // There are no labels such as "Character" or "Dialogue".
      const name = document.createElement("span");
      name.className = "cq-speaker";
      name.textContent = text(item.character || "Character") + ":";

      const speech = document.createElement("span");
      speech.className = "cq-speech";
      speech.textContent = text(item.dialogue || "");

      line.appendChild(name);
      line.appendChild(speech);
      dialogueBox.appendChild(line);
    });

    story.appendChild(dialogueBox);
    return story;
  }

  function renderBlock(block) {
    // Comic has a dedicated renderer. It must NEVER fall through
    // to a generic object renderer.
    if (block && block.type === "comic") {
      return renderComic(block);
    }

    const el = document.createElement("div");
    el.className = "cq-content-block";

    if (!block) return el;

    if (block.title) {
      const h4 = document.createElement("h4");
      h4.textContent = text(block.title);
      el.appendChild(h4);
    }

    if (block.text) {
      const p = document.createElement("p");
      p.textContent = text(block.text);
      el.appendChild(p);
    }

    return el;
  }

  function injectComicStyles() {
    if (document.getElementById("cq-comic-one-block-styles")) return;

    const style = document.createElement("style");
    style.id = "cq-comic-one-block-styles";
    style.textContent = `
      .cq-comic-one-block{
        margin:24px 0;
        overflow:hidden;
        border-radius:28px;
        background:linear-gradient(180deg,#ffffff 0%,#f7f4ff 100%);
        border:2px solid rgba(88,67,220,.16);
        box-shadow:0 12px 30px rgba(35,28,90,.10);
      }

      .cq-comic-one-block .cq-comic-header{
        padding:22px 22px 18px;
        background:linear-gradient(135deg,#5b45e8,#744ee8);
        color:#fff;
      }

      .cq-comic-one-block .cq-comic-badge{
        display:inline-block;
        padding:7px 12px;
        margin-bottom:10px;
        border-radius:999px;
        background:rgba(255,255,255,.18);
        font-weight:800;
        font-size:13px;
        letter-spacing:.4px;
      }

      .cq-comic-one-block .cq-comic-title{
        margin:0;
        font-size:25px;
        line-height:1.25;
        font-weight:900;
      }

      .cq-comic-one-block .cq-comic-dialogues{
        padding:22px 20px 26px;
      }

      /* ONE dialogue line = ONE visual block.
         Speaker and speech live together. */
      .cq-comic-one-block .cq-comic-line{
        display:block;
        margin:0;
        padding:15px 16px;
        border-bottom:1px solid rgba(88,67,220,.12);
        font-size:17px;
        line-height:1.65;
        color:#252a3a;
      }

      .cq-comic-one-block .cq-comic-line:last-child{
        border-bottom:0;
      }

      .cq-comic-one-block .cq-speaker{
        font-weight:900;
        color:#503bc4;
        margin-right:7px;
      }

      .cq-comic-one-block .cq-speech{
        font-weight:500;
      }

      .cq-comic-one-block .cq-comic-line:nth-child(even){
        background:rgba(102,76,232,.035);
        border-radius:14px;
      }

      @media (max-width:600px){
        .cq-comic-one-block .cq-comic-header{
          padding:20px 18px 16px;
        }
        .cq-comic-one-block .cq-comic-dialogues{
          padding:16px 12px 20px;
        }
        .cq-comic-one-block .cq-comic-line{
          padding:14px 12px;
          font-size:16px;
        }
      }
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
          h3.textContent = text(section.title);
          card.appendChild(h3);
        }

        (section.blocks || []).forEach(function(block) {
          card.appendChild(renderBlock(block));
        });

        if (section.content) {
          const p = document.createElement("p");
          p.textContent = text(section.content);
          card.appendChild(p);
        }

        notes.appendChild(card);

        card.addEventListener("click", function () {
          localStorage.setItem(
            "cq-last-read-" + (chapter.id || "unknown"),
            index
          );
        });
      });
    }

    if (important) {
      important.innerHTML = "";
      (chapter.importantPoints || []).forEach(function(point) {
        const item = document.createElement("li");
        item.textContent = text(point);
        important.appendChild(item);
      });
    }

    if (terms) {
      terms.innerHTML = "";
      const termsData = chapter.keyTerms || {};

      if (Array.isArray(termsData)) {
        termsData.forEach(function(term) {
          const chip = document.createElement("span");
          chip.textContent = text(term);
          terms.appendChild(chip);
        });
      } else {
        Object.keys(termsData).forEach(function(term) {
          const chip = document.createElement("span");
          chip.textContent = term + ": " + text(termsData[term]);
          terms.appendChild(chip);
        });
      }
    }

    console.log("Universal Notes Engine V3 loaded:", chapter.title);
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
