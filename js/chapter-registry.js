/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER REGISTRY
  Fixed Registry — Compatible with notes.html / notes.js
==================================================*/

window.ChapterRegistry = [

  /* ================================================
     CLASS 6 — MATHEMATICS
  ================================================= */

  {
    id: "6-mathematics-patterns-in-mathematics",
    aliases: [
      "patterns-in-mathematics"
    ],
    class: 6,
    subject: "Mathematics",
    chapterNumber: 1,
    title: "Patterns in Mathematics",
    file: "js/notes/class6/mathematics/patterns-in-mathematics.js",
    enabled: true
  },

  {
    id: "6-mathematics-lines-and-angles",
    aliases: [
      "class6-mathematics-lines-and-angles"
    ],
    class: 6,
    subject: "Mathematics",
    chapterNumber: 2,
    title: "Lines and Angles",
    file: "js/notes/class6/mathematics/lines-and-angles.js",
    enabled: true
  },

  {
    id: "6-mathematics-number-play",
    aliases: [
      "class6-mathematics-number-play"
    ],
    class: 6,
    subject: "Mathematics",
    chapterNumber: 3,
    title: "Number Play",
    file: "js/notes/class6/mathematics/number-play.js",
    enabled: true
  }

];

/*==================================================
  REGISTRY HELPERS
==================================================*/

(function () {
  "use strict";

  const registry = window.ChapterRegistry;

  if (!Array.isArray(registry)) {
    console.error("ChapterRegistry must be an array.");
    return;
  }

  const ids = new Set();

  registry.forEach(function (chapter) {
    if (!chapter || typeof chapter !== "object") return;

    if (ids.has(chapter.id)) {
      console.error("Duplicate chapter ID:", chapter.id);
    }

    ids.add(chapter.id);

    if (chapter.enabled === undefined) {
      chapter.enabled = true;
    }

    if (!Array.isArray(chapter.aliases)) {
      chapter.aliases = [];
    }
  });

  function matchesId(chapter, id) {
    if (!chapter || !id) return false;

    if (chapter.id === id) return true;

    return chapter.aliases.some(function (alias) {
      return alias === id;
    });
  }

  window.ConceptQuizzer = window.ConceptQuizzer || {};

  window.ConceptQuizzer.getRegistry = function () {
    return registry;
  };

  window.ConceptQuizzer.getEnabledChapters = function () {
    return registry.filter(function (chapter) {
      return chapter && chapter.enabled !== false;
    });
  };

  window.ConceptQuizzer.findChapter = function (id) {
    return registry.find(function (chapter) {
      return chapter &&
        chapter.enabled !== false &&
        matchesId(chapter, id);
    }) || null;
  };

  window.ConceptQuizzer.getChaptersByClass = function (classNumber) {
    return registry.filter(function (chapter) {
      return chapter &&
        Number(chapter.class) === Number(classNumber) &&
        chapter.enabled !== false;
    });
  };

  window.ConceptQuizzer.getChaptersBySubject = function (subject) {
    const target = String(subject || "").trim().toLowerCase();

    return registry.filter(function (chapter) {
      return chapter &&
        String(chapter.subject || "").trim().toLowerCase() === target &&
        chapter.enabled !== false;
    });
  };

  /* Compatibility helpers used by the universal navigation system. */
  window.ConceptQuizzer.getAllChapters = function () {
    return registry.filter(function (chapter) {
      return chapter && chapter.enabled !== false;
    });
  };

  console.log(
    "Chapter Registry loaded:",
    registry.length,
    "chapter(s)"
  );

})();
