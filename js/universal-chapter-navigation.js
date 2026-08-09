/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER NAVIGATION
  Creative Step 4
  Designed for 300+ chapters
==================================================*/

(function () {

  "use strict";


  function initChapterNavigation() {

    const previousButton =
      document.getElementById("previousChapter");

    const nextButton =
      document.getElementById("nextChapter");


    if (!previousButton || !nextButton) {
      return;
    }


    if (
      !window.ConceptQuizzer ||
      typeof window.ConceptQuizzer.getAllChapters !==
        "function"
    ) {

      setTimeout(
        initChapterNavigation,
        300
      );

      return;
    }


    const chapters =
      window.ConceptQuizzer.getAllChapters();


    if (!chapters.length) {
      return;
    }


    /* ------------------------------------------
       SORT ALL CHAPTERS
       Class → Subject → Chapter Number
    ------------------------------------------ */

    chapters.sort(function (a, b) {

      const classDifference =
        Number(a.class || 0) -
        Number(b.class || 0);

      if (classDifference !== 0) {
        return classDifference;
      }


      const subjectA =
        String(a.subject || "").toLowerCase();

      const subjectB =
        String(b.subject || "").toLowerCase();


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


    /* ------------------------------------------
       CURRENT CHAPTER
    ------------------------------------------ */

    const current =
      typeof window.ConceptQuizzer
        .getChapterMeta === "function"
        ? window.ConceptQuizzer.getChapterMeta()
        : null;


    const currentId =
      current?.id ||
      localStorage.getItem(
        "cq-current-chapter"
      );


    const currentIndex =
      chapters.findIndex(
        chapter =>
          chapter.id === currentId
      );


    if (currentIndex === -1) {
      return;
    }


    const previous =
      currentIndex > 0
        ? chapters[currentIndex - 1]
        : null;


    const next =
      currentIndex <
      chapters.length - 1
        ? chapters[currentIndex + 1]
        : null;


    /* ------------------------------------------
       BUTTON CONTENT
    ------------------------------------------ */

    if (previous) {

      previousButton.disabled = false;

      previousButton.innerHTML = `
        <span class="material-icons-round">
          arrow_back
        </span>

        <span>
          Previous
        </span>
      `;

      previousButton.title =
        `Go to ${previous.title}`;

    } else {

      previousButton.disabled = true;

      previousButton.innerHTML = `
        <span class="material-icons-round">
          arrow_back
        </span>

        <span>
          First Chapter
        </span>
      `;

    }


    if (next) {

      nextButton.disabled = false;

      nextButton.innerHTML = `
        <span>
          Next
        </span>

        <span class="material-icons-round">
          arrow_forward
        </span>
      `;

      nextButton.title =
        `Go to ${next.title}`;

    } else {

      nextButton.disabled = true;

      nextButton.innerHTML = `
        <span>
          Last Chapter
        </span>

        <span class="material-icons-round">
          arrow_forward
        </span>
      `;

    }


    /* ------------------------------------------
       CHAPTER COUNTER
    ------------------------------------------ */

    let counter =
      document.getElementById(
        "chapterCounter"
      );


    if (!counter) {

      counter =
        document.createElement("div");

      counter.id =
        "chapterCounter";

      counter.className =
        "chapterCounter";


      const navigation =
        document.querySelector(
          ".navigationButtons"
        );


      if (navigation) {

        navigation.insertBefore(
          counter,
          nextButton
        );

      }

    }


    counter.innerHTML = `
      <span class="counterSmall">
        CHAPTER
      </span>

      <strong>
        ${currentIndex + 1}
      </strong>

      <span class="counterDivider">
        /
      </span>

      <span>
        ${chapters.length}
      </span>
    `;


    /* ------------------------------------------
       PREVIOUS
    ------------------------------------------ */

    previousButton.onclick =
      async function () {

        if (!previous) {
          return;
        }

        await switchChapter(
          previous.id
        );

      };


    /* ------------------------------------------
       NEXT
    ------------------------------------------ */

    nextButton.onclick =
      async function () {

        if (!next) {
          return;
        }

        await switchChapter(
          next.id
        );

      };


    console.log(
      "Universal Navigation ready:",
      currentIndex + 1,
      "of",
      chapters.length
    );

  }


  /* ------------------------------------------
     SWITCH CHAPTER
  ------------------------------------------ */

  async function switchChapter(
    chapterId
  ) {

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


      window.location.reload();

    } catch (error) {

      console.error(
        "Chapter navigation failed:",
        error
      );

    }

  }


  /* ------------------------------------------
     START
  ------------------------------------------ */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initChapterNavigation
    );

  } else {

    initChapterNavigation();

  }

})();
