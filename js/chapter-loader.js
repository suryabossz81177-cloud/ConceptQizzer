/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER LOADER
  Package 12.5 — Step 3
==================================================*/

(function () {

  "use strict";

  window.ConceptQuizzer = window.ConceptQuizzer || {};

  function getChapterId() {

    return (
      localStorage.getItem("cq-current-chapter") ||
      new URLSearchParams(window.location.search).get("chapter") ||
      null
    );

  }


  function findChapter(id) {

    if (!id || !Array.isArray(window.ChapterRegistry)) {
      return null;
    }

    return window.ChapterRegistry.find(
      chapter =>
        chapter.id === id &&
        chapter.enabled !== false
    ) || null;

  }


  function loadScript(src) {

    return new Promise(function (resolve, reject) {

      const existing =
        document.querySelector(
          `script[data-chapter-script="${src}"]`
        );

      if (existing) {

        resolve();

        return;

      }


      const script =
        document.createElement("script");

      script.src = src;

      script.dataset.chapterScript = src;

      script.onload = function () {
        resolve();
      };

      script.onerror = function () {

        reject(
          new Error(
            "Unable to load chapter file: " + src
          )
        );

      };

      document.head.appendChild(script);

    });

  }


  async function loadChapter() {

    const chapterId = getChapterId();

    if (!chapterId) {

      console.warn(
        "No chapter selected."
      );

      return null;

    }


    const registryEntry =
      findChapter(chapterId);

    if (!registryEntry) {

      console.error(
        "Chapter not found in ChapterRegistry:",
        chapterId
      );

      return null;

    }


    try {

      await loadScript(
        registryEntry.file
      );


      if (
        typeof window.ChapterData ===
        "undefined"
      ) {

        console.error(
          "Chapter file loaded but ChapterData was not found."
        );

        return null;

      }


      window.ConceptQuizzer.currentChapter =
        window.ChapterData;


      window.ConceptQuizzer.currentChapterMeta =
        registryEntry;


      window.dispatchEvent(
        new CustomEvent(
          "cq:chapter-loaded",
          {
            detail: {
              chapter:
                window.ChapterData,

              meta:
                registryEntry
            }
          }
        )
      );


      return window.ChapterData;

    } catch (error) {

      console.error(
        "Chapter Loader Error:",
        error
      );

      return null;

    }

  }


  window.ConceptQuizzer.getChapter =
    function () {

      return (
        window.ConceptQuizzer.currentChapter ||
        null
      );

    };


  window.ConceptQuizzer.getChapterMeta =
    function () {

      return (
        window.ConceptQuizzer.currentChapterMeta ||
        null
      );

    };


  window.ConceptQuizzer.loadChapter =
    loadChapter;


  /* Automatically load on pages that need chapter data */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      loadChapter
    );

  } else {

    loadChapter();

  }

})();
