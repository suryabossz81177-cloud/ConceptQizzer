/*========================================================
  CONCEPT QUIZZER
  CLASS 8 SCIENCE NOTES — WIDE + CLEAN PRESENTATION FIX
  No content is changed. This only fixes presentation.
========================================================*/
(function () {
  "use strict";

  function injectStyles() {
    if (document.getElementById("cq-science-wide-clean-style")) return;

    const style = document.createElement("style");
    style.id = "cq-science-wide-clean-style";
    style.textContent = `
      /* Make the reading area wide and remove unnecessary side gutters */
      .notesContainer,
      main.notesContainer {
        width: 100% !important;
        max-width: 1500px !important;
        box-sizing: border-box !important;
        margin-left: auto !important;
        margin-right: auto !important;
        padding-left: 12px !important;
        padding-right: 12px !important;
      }

      #notesContent,
      .notesContent {
        width: 100% !important;
        max-width: none !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        box-sizing: border-box !important;
      }

      #notesContent .noteCard,
      .notesContent .noteCard,
      #notesContent > div {
        width: 100% !important;
        max-width: none !important;
        box-sizing: border-box !important;
      }

      /* Remove renderer/debug metadata from the visible chapter */
      #notesContent .cq-internal,
      #notesContent .internalMeta,
      #notesContent .renderMeta,
      #notesContent .cardStyleMeta,
      #notesContent .renderAsMeta,
      #notesContent [data-cq-internal="true"] {
        display: none !important;
      }

      /* Mobile: use almost the complete screen width */
      @media (max-width: 700px) {
        .notesContainer,
        main.notesContainer {
          width: 100% !important;
          max-width: none !important;
          padding-left: 8px !important;
          padding-right: 8px !important;
        }

        #notesContent,
        .notesContent {
          width: 100% !important;
        }

        #notesContent .noteCard,
        .notesContent .noteCard,
        #notesContent > div {
          width: 100% !important;
          max-width: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function removeOnlyRendererLabels() {
    const root = document.getElementById("notesContent");
    if (!root) return;

    /* Remove only generic renderer labels — never remove actual note content. */
    const labels = new Set([
      "Science Blocks",
      "Card Style",
      "Render As"
    ]);

    root.querySelectorAll("h1,h2,h3,h4,h5,h6,span,p,div").forEach(function (el) {
      if (el.children.length === 0 && labels.has(el.textContent.trim())) {
        el.remove();
      }
    });
  }

  function clean() {
    injectStyles();
    removeOnlyRendererLabels();
  }

  /* Apply immediately and again whenever notes are rendered/updated. */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", clean, { once: true });
  } else {
    clean();
  }

  window.addEventListener("cq:chapter-loaded", function () {
    setTimeout(clean, 0);
    setTimeout(clean, 150);
  });

  const observer = new MutationObserver(function () {
    clean();
  });

  function startObserver() {
    const root = document.getElementById("notesContent");
    if (!root) {
      setTimeout(startObserver, 200);
      return;
    }
    observer.observe(root, { childList: true, subtree: true });
    clean();
  }

  startObserver();
})();
