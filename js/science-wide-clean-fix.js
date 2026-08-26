/*========================================================
  CONCEPT QUIZZER — CLASS 8 SCIENCE
  CLEAN SCIENCE RENDERER

  Purpose:
  - Render the complete chapter as ONE continuous reading flow.
  - Keep section headings, but do not create separate section cards.
  - Never expose internal id / title / renderAs / cardStyle metadata.
  - Remove generic renderer/debug output left by older renderers.
  - Keep colourful blocks, tables, visuals, activities and examples.
========================================================*/
(function () {
  "use strict";

  var STYLE_ID = "cq-science-clean-renderer-v2";

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;

    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      /* ===== Wide reading layout ===== */
      main.notesContainer,
      .notesContainer {
        width: 100% !important;
        max-width: 1500px !important;
        margin: 0 auto !important;
        padding-left: 10px !important;
        padding-right: 10px !important;
        box-sizing: border-box !important;
      }

      #notesContent,
      .notesContent {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
      }

      /* One continuous chapter stream — no section wrapper cards */
      .cq-science-flow {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
      }

      .cq-science-section {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
      }

      .cq-science-section + .cq-science-section {
        margin-top: 28px !important;
      }

      .cq-science-section-title {
        margin: 0 0 18px !important;
        padding: 0 6px 12px !important;
        font-size: clamp(1.55rem, 4vw, 2.35rem) !important;
        line-height: 1.25 !important;
        font-weight: 800 !important;
        color: #4f46d9 !important;
        border-bottom: 2px solid rgba(79,70,217,.14) !important;
      }

      /* Every actual information block stays colourful */
      .cq-science-block {
        width: 100% !important;
        box-sizing: border-box !important;
        margin: 0 0 18px !important;
        padding: 22px !important;
        border-radius: 24px !important;
        background: linear-gradient(135deg,#f8f7ff,#eeeaff) !important;
        border: 1px solid rgba(99,102,241,.12) !important;
        box-shadow: 0 8px 24px rgba(40,45,100,.06) !important;
      }

      .cq-science-block:nth-child(3n) { background: linear-gradient(135deg,#effcf6,#e5f8ee) !important; }
      .cq-science-block:nth-child(3n+1) { background: linear-gradient(135deg,#fff8eb,#fff0d5) !important; }
      .cq-science-block:nth-child(3n+2) { background: linear-gradient(135deg,#f4efff,#ebe5ff) !important; }

      .cq-science-block h3,
      .cq-science-block h4 {
        margin: 0 0 12px !important;
        font-weight: 800 !important;
        color: #20263a !important;
      }

      .cq-science-block p,
      .cq-science-block li,
      .cq-science-block td,
      .cq-science-block th {
        font-size: 1.02rem !important;
        line-height: 1.75 !important;
        color: #303446 !important;
      }

      .cq-science-block p { margin: 0 !important; }
      .cq-science-block ul,
      .cq-science-block ol { margin: 8px 0 0 22px !important; }

      .cq-science-definition { border-left: 6px solid #6366f1 !important; }
      .cq-science-example { border-left: 6px solid #f59e0b !important; }
      .cq-science-fact { border-left: 6px solid #10b981 !important; }
      .cq-science-warning { border-left: 6px solid #ef4444 !important; }
      .cq-science-think { border-left: 6px solid #8b5cf6 !important; }
      .cq-science-real { border-left: 6px solid #0ea5e9 !important; }
      .cq-science-safety { border-left: 6px solid #f97316 !important; }
      .cq-science-exam { border-left: 6px solid #ec4899 !important; }
      .cq-science-summary { border-left: 6px solid #14b8a6 !important; }
      .cq-science-process { border-left: 6px solid #7c3aed !important; }
      .cq-science-observation { border-left: 6px solid #2563eb !important; }
      .cq-science-important { border-left: 6px solid #dc2626 !important; }

      .cq-science-visual {
        overflow-x: auto !important;
        padding: 14px !important;
      }

      .cq-science-visual > div,
      .cq-science-visual svg,
      .cq-science-visual canvas {
        max-width: 100% !important;
      }

      .cq-science-table-wrap { overflow-x: auto !important; }
      .cq-science-table {
        width: 100% !important;
        border-collapse: collapse !important;
        min-width: 520px !important;
      }
      .cq-science-table th,
      .cq-science-table td {
        padding: 12px !important;
        border: 1px solid rgba(80,80,120,.14) !important;
        text-align: left !important;
        vertical-align: top !important;
      }
      .cq-science-table th { font-weight: 800 !important; background: rgba(99,102,241,.10) !important; }

      .cq-science-steps li { margin-bottom: 8px !important; }

      /* Hide all renderer/debug metadata wherever an old renderer left it */
      #notesContent .cardStyleMeta,
      #notesContent .renderAsMeta,
      #notesContent .renderMeta,
      #notesContent .internalMeta,
      #notesContent .cq-internal,
      #notesContent [data-cq-internal="true"],
      #notesContent [data-render-as],
      #notesContent [data-card-style] {
        display: none !important;
      }

      @media (max-width: 700px) {
        main.notesContainer,
        .notesContainer {
          width: 100% !important;
          max-width: none !important;
          padding-left: 6px !important;
          padding-right: 6px !important;
        }

        .cq-science-block { padding: 18px !important; border-radius: 20px !important; }
        .cq-science-section-title { padding-left: 4px !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function blockTitle(title, fallback) {
    return title ? '<h3>' + title + '</h3>' : (fallback ? '<h3>' + fallback + '</h3>' : '');
  }

  function renderBlock(block) {
    if (!block || !block.type) return "";
    var type = block.type;
    var title = block.title || "";
    var text = block.text || "";
    var cls = "cq-science-block";
    var html = "";

    if (type === "paragraph") {
      return '<div class="' + cls + '">' + blockTitle(title) + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "definition") {
      return '<div class="' + cls + ' cq-science-definition">' + blockTitle(title, "Definition") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "example") {
      return '<div class="' + cls + ' cq-science-example">' + blockTitle(title, "Solved Example") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "fact") {
      return '<div class="' + cls + ' cq-science-fact">' + blockTitle(title, "Important Fact") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "warning") {
      return '<div class="' + cls + ' cq-science-warning">' + blockTitle(title, "Common Mistake / Warning") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "think") {
      return '<div class="' + cls + ' cq-science-think">' + blockTitle(title, "Think & Understand") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "realLife") {
      return '<div class="' + cls + ' cq-science-real">' + blockTitle(title, "Real-Life Connection") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "safety") {
      return '<div class="' + cls + ' cq-science-safety">' + blockTitle(title, "Safety First") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "examTip") {
      return '<div class="' + cls + ' cq-science-exam">' + blockTitle(title, "Exam Tip") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "summary") {
      return '<div class="' + cls + ' cq-science-summary">' + blockTitle(title, "Quick Summary") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "important") {
      return '<div class="' + cls + ' cq-science-important">' + blockTitle(title, "Important") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "observation") {
      return '<div class="' + cls + ' cq-science-observation">' + blockTitle(title, "Observation") + '<p>' + esc(text) + '</p></div>';
    }

    if (type === "process") {
      html = '<div class="' + cls + ' cq-science-process">' + blockTitle(title, "Process");
      if (Array.isArray(block.steps)) {
        html += '<ol class="cq-science-steps">' + block.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") + '</ol>';
      }
      if (text) html += '<p>' + esc(text) + '</p>';
      return html + '</div>';
    }

    if (type === "experiment") {
      html = '<div class="' + cls + ' cq-science-example">' + blockTitle(title, "Investigation / Activity");
      if (text) html += '<p>' + esc(text) + '</p>';
      if (Array.isArray(block.steps)) {
        html += '<ol class="cq-science-steps">' + block.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") + '</ol>';
      }
      return html + '</div>';
    }

    if (type === "table") {
      html = '<div class="' + cls + '">' + blockTitle(title) + '<div class="cq-science-table-wrap"><table class="cq-science-table"><tbody>';
      if (Array.isArray(block.rows)) {
        block.rows.forEach(function (row, ri) {
          html += '<tr>';
          row.forEach(function (cell) {
            html += ri === 0 ? '<th>' + esc(cell) + '</th>' : '<td>' + esc(cell) + '</td>';
          });
          html += '</tr>';
        });
      }
      return html + '</tbody></table></div></div>';
    }

    if (type === "visual") {
      return '<div class="' + cls + ' cq-science-visual">' + blockTitle(title) + (block.html || '') + '</div>';
    }

    /* Unknown block: show its actual text only; never expose object metadata. */
    if (text) {
      return '<div class="' + cls + '"><p>' + esc(text) + '</p></div>';
    }

    return "";
  }

  function renderChapter(chapter) {
    var root = document.getElementById("notesContent");
    if (!root || !chapter) return;

    var sections = Array.isArray(chapter.sections) ? chapter.sections : [];
    var out = '<div class="cq-science-flow">';

    sections.forEach(function (section) {
      if (!section) return;
      out += '<section class="cq-science-section">';
      if (section.title) {
        out += '<h2 class="cq-science-section-title">' + esc(section.title) + '</h2>';
      }
      if (Array.isArray(section.blocks)) {
        section.blocks.forEach(function (block) {
          out += renderBlock(block);
        });
      } else if (section.content) {
        out += '<div class="cq-science-block"><p>' + esc(section.content) + '</p></div>';
      }
      out += '</section>';
    });

    out += '</div>';
    root.innerHTML = out;
  }

  function clean() {
    addStyles();
    if (window.ChapterData && window.ChapterData.sections) {
      renderChapter(window.ChapterData);
    }
  }

  window.addEventListener("cq:chapter-loaded", function (event) {
    if (event.detail && event.detail.chapter) {
      renderChapter(event.detail.chapter);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", clean, { once: true });
  } else {
    clean();
  }

  window.CQScienceCleanRenderer = { render: renderChapter };
})();
