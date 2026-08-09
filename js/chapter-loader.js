/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER LOADER
  Package 12.5 — Step 3
==================================================*/

(function () {

  "use strict";

  window.ConceptQuizzer = window.ConceptQuizzer || {};

function getChapterId() {

  const params = new URLSearchParams(window.location.search);

  const urlChapter = params.get("chapter");

  if (urlChapter) {
    localStorage.setItem("cq-current-chapter", urlChapter);
    return urlChapter;
  }

  const savedChapter =
    localStorage.getItem("cq-current-chapter");

  if (savedChapter) {
    return savedChapter;
  }

  const bodyChapter =
    document.body.dataset.chapter;

  if (bodyChapter) {
    localStorage.setItem(
      "cq-current-chapter",
      bodyChapter
    );
    return bodyChapter;
  }

  // Automatic fallback:
  // use the first enabled chapter
  // from the universal registry.

  if (
    Array.isArray(window.ChapterRegistry)
  ) {

    const firstChapter =
      window.ChapterRegistry.find(
        chapter =>
          chapter &&
          chapter.enabled !== false
      );

    if (firstChapter) {

      localStorage.setItem(
        "cq-current-chapter",
        firstChapter.id
      );

      return firstChapter.id;
    }
  }

  return null;
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
