/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER SELECTOR
  Package 12.5 — Step 7 Part 5
==================================================*/

(function () {

  "use strict";


  function initChapterSelector() {

    const select =
      document.getElementById(
        "universalChapterSelect"
      );

    if (!select) {
      console.warn(
        "Universal Chapter Selector: select not found."
      );
      return;
    }


    /* Wait until the universal chapter system
       is available */

    if (
      !window.ConceptQuizzer ||
      typeof window.ConceptQuizzer.getAllChapters !==
        "function"
    ) {

      console.warn(
        "Universal Chapter System is not ready."
      );

      setTimeout(
        initChapterSelector,
        300
      );

      return;
    }


    const chapters =
      window.ConceptQuizzer.getAllChapters();


    /* Clear existing options */

    select.innerHTML = "";


    /* No chapters */

    if (!chapters.length) {

      const option =
        document.createElement("option");

      option.value = "";

      option.textContent =
        "No chapters available";

      select.appendChild(
        option
      );

      return;
    }


    /* Add all chapters */

    chapters.forEach(
      function (chapter) {

        const option =
          document.createElement("option");

        option.value =
          chapter.id;

        option.textContent =
          `Class ${chapter.class} — ` +
          `${chapter.subject} — ` +
          `Chapter ${chapter.chapterNumber}: ` +
          `${chapter.title}`;

        select.appendChild(
          option
        );

      }
    );


    /* Get currently loaded chapter */

    const current =
      typeof window.ConceptQuizzer
        .getChapterMeta === "function"
        ? window.ConceptQuizzer.getChapterMeta()
        : null;


    if (current) {

      select.value =
        current.id;

    } else {

      const saved =
        localStorage.getItem(
          "cq-current-chapter"
        );

      if (saved) {

        select.value =
          saved;

      }

    }


    /*========================================
      CHAPTER CHANGE
    ========================================*/

    select.addEventListener(
      "change",
      async function () {

        const chapterId =
          select.value;

        if (!chapterId) {
          return;
        }


        select.disabled = true;

        const originalText =
          select.options[
            select.selectedIndex
          ]?.textContent || "Loading...";


        try {

          /* Save selected chapter */

          localStorage.setItem(
            "cq-current-chapter",
            chapterId
          );


          /* Use universal selector */

          if (
            typeof window.ConceptQuizzer
              .selectChapter === "function"
          ) {

            await window.ConceptQuizzer
              .selectChapter(
                chapterId
              );

          }


          /*
            Reload the page so all existing
            chapter-dependent features
            start with the new ChapterData.
          */

          window.location.reload();


        } catch (error) {

          console.error(
            "Chapter switching failed:",
            error
          );

          alert(
            "Unable to load this chapter. Please try again."
          );

          select.disabled = false;

        }

      }
    );


    console.log(
      "Universal Chapter Selector ready:",
      chapters.length,
      "chapter(s)"
    );

  }


  /*========================================
    START
  ========================================*/

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initChapterSelector
    );

  } else {

    initChapterSelector();

  }


})();
