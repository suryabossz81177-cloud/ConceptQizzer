/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER SELECTOR
  Creative Step 3
==================================================*/

(function () {

  "use strict";

  function initChapterSelector() {

    const select =
      document.getElementById("universalChapterSelect");

    if (!select) {
      console.warn(
        "Universal Chapter Selector: select not found."
      );
      return;
    }

    if (
      !window.ConceptQuizzer ||
      typeof window.ConceptQuizzer.getAllChapters !==
        "function"
    ) {
      setTimeout(initChapterSelector, 300);
      return;
    }

    const chapters =
      window.ConceptQuizzer.getAllChapters();

    select.innerHTML = "";

    if (!chapters.length) {

      const option =
        document.createElement("option");

      option.value = "";
      option.textContent = "No chapters available";

      select.appendChild(option);

      return;
    }


    /* =========================================
       GROUP BY CLASS + SUBJECT
    ========================================= */

    const groups = {};

    chapters.forEach(function (chapter) {

      const groupKey =
        `Class ${chapter.class} — ${chapter.subject}`;

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }

      groups[groupKey].push(chapter);

    });


    /* =========================================
       CREATE GROUPS
    ========================================= */

    Object.keys(groups).forEach(function (groupKey) {

      const group =
        document.createElement("optgroup");

      group.label =
        "📚 " + groupKey;


      groups[groupKey]
        .sort(function (a, b) {

          return (
            Number(a.chapterNumber || 0) -
            Number(b.chapterNumber || 0)
          );

        })
        .forEach(function (chapter) {

          const option =
            document.createElement("option");

          option.value =
            chapter.id;

          option.textContent =
            `Chapter ${chapter.chapterNumber} — ${chapter.title}`;

          group.appendChild(option);

        });


      select.appendChild(group);

    });


    /* =========================================
       CURRENT CHAPTER
    ========================================= */

    const current =
      typeof window.ConceptQuizzer
        .getChapterMeta === "function"
        ? window.ConceptQuizzer.getChapterMeta()
        : null;


    const saved =
      localStorage.getItem(
        "cq-current-chapter"
      );


    if (current && current.id) {

      select.value =
        current.id;

    } else if (saved) {

      select.value =
        saved;

    }


    /* =========================================
       CHAPTER SWITCH
    ========================================= */

    if (select.dataset.bound === "true") {
      return;
    }

    select.dataset.bound = "true";


    select.addEventListener(
      "change",
      async function () {

        const chapterId =
          select.value;

        if (!chapterId) {
          return;
        }


        select.disabled = true;


        try {

          localStorage.setItem(
            "cq-current-chapter",
            chapterId
          );


          if (
            window.ConceptQuizzer &&
            typeof window.ConceptQuizzer
              .selectChapter === "function"
          ) {

            await window.ConceptQuizzer
              .selectChapter(
                chapterId
              );

          }


          /*
            Reload the page so the complete
            existing Notes + AI + Reader
            system starts with the new chapter.
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
      "Creative Chapter Selector ready:",
      chapters.length,
      "chapter(s)"
    );

  }


  /* =========================================
     START
  ========================================= */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initChapterSelector
    );

  } else {

    initChapterSelector();

  }

})();
