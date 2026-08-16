/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER REGISTRY
  Package 12.5 — Step 6.4A
  Designed for 300+ Chapters
==================================================*/

window.ChapterRegistry = [
  {
  id: "6-science-diversity-in-the-living-world",
  aliases: [
    "class6-science-diversity-in-the-living-world",
    "diversity-in-the-living-world"
  ],
  class: 6,
  subject: "Science",
  chapterNumber: 2,
  title: "Diversity in the Living World",
  file: "js/notes/class6/science/diversity-in-the-living-world.js",
  enabled: true
},
  
  {
    id: "6-science-the-wonderful-world-of-science",
    aliases: ["class6-science-the-wonderful-world-of-science", "the-wonderful-world-of-science"],
    class: 6, subject: "Science", chapterNumber: 1,
    title: "The Wonderful World of Science",
    file: "js/notes/class6/science/the-wonderful-world-of-science.js",
    enabled: true
  },


  /* ================================================
     CLASS 6 — MATHEMATICS
  ================================================= */

  {
    id: "patterns-in-mathematics",

    class: 6,

    subject: "Mathematics",

    chapterNumber: 1,

    title: "Patterns in Mathematics",

    file:
      "js/notes/class6/mathematics/patterns-in-mathematics.js",

    enabled: true
  },

  {
  id: "class6-mathematics-lines-and-angles",

  class: 6,

  subject: "Mathematics",

  chapterNumber: 2,

  title: "Lines and Angles",

  file:
    "js/notes/class6/mathematics/lines-and-angles.js",

  enabled: true
},

    {
    id: "class6-mathematics-number-play",

    class: 6,

    subject: "Mathematics",

    chapterNumber: 3,

    title: "Number Play",

    file:
      "js/notes/class6/mathematics/number-play.js",

    enabled: true
  },

  /*
  ---------------------------------------------------
  FUTURE CHAPTER EXAMPLE

  {
    id: "fractions",

    class: 6,

    subject: "Mathematics",

    chapterNumber: 2,

    title: "Fractions",

    file:
      "js/notes/class6/mathematics/fractions.js",

    enabled: true
  }

    {
    id: "class6-mathematics-number-play",

    class: 6,

    subject: "Mathematics",

    chapterNumber: 3,

    title: "Number Play",

    file:
      "js/notes/class6/mathematics/number-play.js",

    enabled: true
  },
  ---------------------------------------------------
  */


  /*
  ===================================================
  ADD FUTURE CHAPTERS ABOVE THIS LINE
  ===================================================
  */

  {
    id: "class6-mathematics-data-handling-and-presentation",
    class: 6,
    subject: "Mathematics",
    chapterNumber: 4,
    title: "Data Handling and Presentation",
    file:
      "js/notes/class6/mathematics/data-handling-and-presentation.js",
    enabled: true
  },

  {
    id: "class6-mathematics-prime-time",
    class: 6,
    subject: "Mathematics",
    chapterNumber: 5,
    title: "Prime Time",
    file:
      "js/notes/class6/mathematics/prime-time.js",
    enabled: true
  },

  {
    id: "class6-mathematics-perimeter-and-area",
    class: 6,
    subject: "Mathematics",
    chapterNumber: 6,
    title: "Perimeter and Area",
    file:
      "js/notes/class6/mathematics/perimeter-and-area.js",
    enabled: true
  },

  {
    id: "class6-mathematics-fractions",
    class: 6,
    subject: "Mathematics",
    chapterNumber: 7,
    title: "Fractions",
    file:
      "js/notes/class6/mathematics/fractions.js",
    enabled: true
  },

  {
    id: "class6-mathematics-playing-with-constructions",
    class: 6,
    subject: "Mathematics",
    chapterNumber: 8,
    title: "Playing with Constructions",
    file:
      "js/notes/class6/mathematics/playing-with-constructions.js",
    enabled: true
  },


  {
    id: "class6-mathematics-symmetry",
    class: 6,
    subject: "Mathematics",
    chapterNumber: 9,
    title: "Symmetry",
    file:
      "js/notes/class6/mathematics/symmetry.js",
    enabled: true
  },

  {
    id: "class6-mathematics-the-other-side-of-zero",
    class: 6,
    subject: "Mathematics",
    chapterNumber: 10,
    title: "The Other Side of Zero",
    file:
      "js/notes/class6/mathematics/the-other-side-of-zero.js",
    enabled: true
  },
];


/*==================================================
  REGISTRY VALIDATION
==================================================*/

(function () {

  "use strict";


  const registry =
    window.ChapterRegistry;


  if (!Array.isArray(registry)) {

    console.error(
      "❌ ChapterRegistry must be an array."
    );

    return;
  }


  const ids = new Set();


  registry.forEach(function (chapter, index) {

    if (!chapter || typeof chapter !== "object") {

      console.error(
        `❌ Invalid chapter at registry index ${index}.`
      );

      return;
    }


    /* ------------------------------------------
       REQUIRED FIELDS
    ------------------------------------------ */

    const requiredFields = [
      "id",
      "class",
      "subject",
      "chapterNumber",
      "title",
      "file"
    ];


    requiredFields.forEach(function (field) {

      if (
        chapter[field] === undefined ||
        chapter[field] === null ||
        chapter[field] === ""
      ) {

        console.error(
          `❌ Missing "${field}" in chapter:`,
          chapter
        );

      }

    });


    /* ------------------------------------------
       DUPLICATE ID CHECK
    ------------------------------------------ */

    if (ids.has(chapter.id)) {

      console.error(
        "❌ DUPLICATE CHAPTER ID:",
        chapter.id
      );

    } else {

      ids.add(chapter.id);

    }


    /* ------------------------------------------
       CHAPTER NUMBER CHECK
    ------------------------------------------ */

    if (
      !Number.isFinite(
        Number(chapter.chapterNumber)
      )
    ) {

      console.error(
        "❌ Invalid chapter number:",
        chapter
      );

    }


    /* ------------------------------------------
       ENABLED DEFAULT
    ------------------------------------------ */

    if (
      chapter.enabled === undefined
    ) {

      chapter.enabled = true;

    }

  });


  /*================================================
    SORTING

    Class
      ↓
    Subject
      ↓
    Chapter Number
  =================================================*/

  registry.sort(function (a, b) {

    const classDifference =
      Number(a.class || 0) -
      Number(b.class || 0);


    if (classDifference !== 0) {

      return classDifference;

    }


    const subjectA =
      String(a.subject || "")
        .toLowerCase();


    const subjectB =
      String(b.subject || "")
        .toLowerCase();


    if (subjectA < subjectB) {
      return -1;
    }


    if (subjectA > subjectB) {
      return 1;
    }


    return (
      Number(a.chapterNumber || 0) -
      Number(b.chapterNumber || 0)
    );

  });


  /*================================================
    PUBLIC REGISTRY HELPERS
  =================================================*/

  window.ConceptQuizzer =
    window.ConceptQuizzer || {};


  window.ConceptQuizzer.getRegistry =
    function () {

      return registry;

    };


  window.ConceptQuizzer.getEnabledChapters =
    function () {

      return registry.filter(
        function (chapter) {

          return (
            chapter &&
            chapter.enabled !== false
          );

        }
      );

    };


  window.ConceptQuizzer.findChapter =
    function (id) {

      return registry.find(
        function (chapter) {

          return (
            chapter &&
            chapter.id === id &&
            chapter.enabled !== false
          );

        }
      ) || null;

    };


  window.ConceptQuizzer.getChaptersByClass =
    function (classNumber) {

      return registry.filter(
        function (chapter) {

          return (
            chapter &&
            Number(chapter.class) ===
              Number(classNumber) &&
            chapter.enabled !== false
          );

        }
      );

    };


  window.ConceptQuizzer.getChaptersBySubject =
    function (subject) {

      const target =
        String(subject || "")
          .trim()
          .toLowerCase();


      return registry.filter(
        function (chapter) {

          return (
            chapter &&
            String(chapter.subject || "")
              .trim()
              .toLowerCase() === target &&
            chapter.enabled !== false
          );

        }
      );

    };


  console.log(
    `✅ Chapter Registry loaded: ${registry.length} chapter(s)`
  );

})();
