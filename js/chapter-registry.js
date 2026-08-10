/* CONCEPT QUIZZER — FIXED REGISTRY */

window.ChapterRegistry = [
  {
    id: "6-mathematics-patterns-in-mathematics",
    aliases: ["patterns-in-mathematics"],
    class: 6,
    subject: "Mathematics",
    chapterNumber: 1,
    title: "Patterns in Mathematics",
    file: "js/notes/class6/mathematics/patterns-in-mathematics.js",
    enabled: true
  },
  {
    id: "6-mathematics-lines-and-angles",
    aliases: ["class6-mathematics-lines-and-angles","lines-and-angles"],
    class: 6,
    subject: "Mathematics",
    chapterNumber: 2,
    title: "Lines and Angles",
    file: "js/notes/class6/mathematics/lines-and-angles.js",
    fileCandidates: [
      "js/notes/class6/mathematics/lines-and-angles.js",
      "js/notes/class6/mathematics/lines_and_angles.js",
      "js/notes/class6/mathematics/lines-and-angles-notes.js"
    ],
    enabled: true
  },
  {
    id: "6-mathematics-number-play",
    aliases: ["class6-mathematics-number-play","number-play"],
    class: 6,
    subject: "Mathematics",
    chapterNumber: 3,
    title: "Number Play",
    file: "js/notes/class6/mathematics/number-play.js",
    enabled: true
  }
];

(function(){
  "use strict";
  const registry = window.ChapterRegistry;
  window.ConceptQuizzer = window.ConceptQuizzer || {};

  window.ConceptQuizzer.getRegistry = () => registry;
  window.ConceptQuizzer.getEnabledChapters = () =>
    registry.filter(c => c && c.enabled !== false);
  window.ConceptQuizzer.getAllChapters = () =>
    registry.filter(c => c && c.enabled !== false);

  window.ConceptQuizzer.findChapter = function(id){
    const key = String(id || "").toLowerCase();
    return registry.find(c =>
      c && c.enabled !== false &&
      (
        String(c.id || "").toLowerCase() === key ||
        (Array.isArray(c.aliases) &&
          c.aliases.some(a => String(a).toLowerCase() === key))
      )
    ) || null;
  };

  console.log("✅ Fixed Chapter Registry:", registry.length, "chapters");
})();
