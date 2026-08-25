/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER LOADER
  Package 12.5 — Step 3
  FIXED: Registry Loading Race Condition
==================================================*/

(function () {

  "use strict";

  window.ConceptQuizzer =
    window.ConceptQuizzer || {};


  /*==================================================
    GET CHAPTER ID
  ==================================================*/

  function getChapterId() {

    const params =
      new URLSearchParams(
        window.location.search
      );

    const urlChapter =
      params.get("chapter");

    if (urlChapter) {

      localStorage.setItem(
        "cq-current-chapter",
        urlChapter
      );

      return urlChapter;

    }


    const savedChapter =
      localStorage.getItem(
        "cq-current-chapter"
      );

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


    /* Automatic fallback */

    if (
      Array.isArray(
        window.ChapterRegistry
      )
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


  /*==================================================
    WAIT FOR CHAPTER REGISTRY
    FIX FOR SCRIPT LOADING ORDER
  ==================================================*/

  function waitForRegistry(
    timeout = 10000
  ) {

    return new Promise(
      function (resolve) {

        const start =
          Date.now();


        function check() {

          if (
            Array.isArray(
              window.ChapterRegistry
            )
          ) {

            resolve(
              window.ChapterRegistry
            );

            return;

          }


          if (
            Date.now() - start >=
            timeout
          ) {

            console.error(
              "ChapterRegistry did not load within timeout."
            );

            resolve([]);

            return;

          }


          setTimeout(
            check,
            50
          );

        }


        check();

      }
    );

  }


  /*==================================================
    FIND CHAPTER
  ==================================================*/

  function findChapter(id) {

    if (
      !id ||
      !Array.isArray(
        window.ChapterRegistry
      )
    ) {

      return null;

    }


    const wantedId =
      String(id).trim();


    return (
      window.ChapterRegistry.find(
        chapter =>
          chapter &&
          String(
            chapter.id || ""
          ).trim() === wantedId &&
          chapter.enabled !== false
      ) || null
    );

  }


  /*==================================================
    LOAD SCRIPT
  ==================================================*/

  function loadScript(src) {

    return new Promise(
      function (resolve, reject) {

        if (!src) {

          reject(
            new Error(
              "Chapter file path is empty."
            )
          );

          return;

        }


        const existing =
          document.querySelector(
            `script[data-chapter-script="${src}"]`
          );


        if (existing) {

          /* If already loaded, continue */

          if (
            existing.dataset.loaded ===
            "true"
          ) {

            resolve();

          } else {

            existing.addEventListener(
              "load",
              resolve,
              { once: true }
            );

            existing.addEventListener(
              "error",
              function () {

                reject(
                  new Error(
                    "Unable to load chapter file: " +
                    src
                  )
                );

              },
              { once: true }
            );

          }

          return;

        }


        const script =
          document.createElement(
            "script"
          );


        script.src = src;

        script.dataset.chapterScript =
          src;


        script.onload =
          function () {

            script.dataset.loaded =
              "true";

            resolve();

          };


        script.onerror =
          function () {

            reject(
              new Error(
                "Unable to load chapter file: " +
                src
              )
            );

          };


        document.head.appendChild(
          script
        );

      }
    );

  }


  /*==================================================
    LOAD CHAPTER
  ==================================================*/

  async function loadChapter() {

    const chapterId =
      getChapterId();


    if (!chapterId) {

      console.warn(
        "No chapter selected."
      );

      return null;

    }


    /* IMPORTANT:
       Wait until registry exists */

    await waitForRegistry();


    const registryEntry =
      findChapter(chapterId);


    if (!registryEntry) {

      console.error(
        "Chapter not found in ChapterRegistry:",
        chapterId
      );

      console.error(
        "Available chapters:",
        window.ChapterRegistry
      );

      return null;

    }


    try {

      /* Clear old chapter data before loading */

      window.ChapterData =
        undefined;


      await loadScript(
        registryEntry.file
      );


      if (
        typeof window.ChapterData ===
        "undefined"
      ) {

        console.error(
          "Chapter file loaded but ChapterData was not found:",
          registryEntry.file
        );

        return null;

      }


      /*================================================
        SAVE CURRENT CHAPTER
      =================================================*/

      window.ConceptQuizzer.currentChapter =
        window.ChapterData;


      window.ConceptQuizzer.currentChapterMeta =
        registryEntry;


      /*================================================
        DISPATCH EVENT
      =================================================*/

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


      console.log(
        "ConceptQizzer chapter loaded:",
        chapterId
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


  /*==================================================
    GET CURRENT CHAPTER
  ==================================================*/

  window.ConceptQuizzer.getChapter =
    function () {

      return (
        window.ConceptQuizzer.currentChapter ||
        null
      );

    };


  /*==================================================
    GET CHAPTER META
  ==================================================*/

  window.ConceptQuizzer.getChapterMeta =
    function () {

      return (
        window.ConceptQuizzer.currentChapterMeta ||
        null
      );

    };


  /*==================================================
    PUBLIC LOAD FUNCTION
  ==================================================*/

  window.ConceptQuizzer.loadChapter =
    loadChapter;


  /*==================================================
    UNIVERSAL CHAPTER SWITCHER
  ==================================================*/

  window.ConceptQuizzer.selectChapter =
    async function (chapterId) {

      if (!chapterId) {

        console.warn(
          "No chapter ID provided."
        );

        return null;

      }


      /* Wait for registry before searching */

      await waitForRegistry();


      const chapter =
        findChapter(chapterId);


      if (!chapter) {

        console.error(
          "Chapter not found:",
          chapterId
        );

        return null;

      }


      localStorage.setItem(
        "cq-current-chapter",
        chapter.id
      );


      const url =
        new URL(
          window.location.href
        );


      url.searchParams.set(
        "chapter",
        chapter.id
      );


      window.history.replaceState(
        {},
        "",
        url
      );


      return await loadChapter();

    };


  /*==================================================
    GET ALL CHAPTERS
  ==================================================*/

  window.ConceptQuizzer.getAllChapters =
    function () {

      if (
        !Array.isArray(
          window.ChapterRegistry
        )
      ) {

        return [];

      }


      return window.ChapterRegistry.filter(
        chapter =>
          chapter &&
          chapter.enabled !== false
      );

    };


  /*==================================================
    AUTOMATIC LOAD
  ==================================================*/

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
