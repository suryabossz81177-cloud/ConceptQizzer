/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER BUILDER
  Package 12.5 — Step 6.3

  Purpose:
  • Create a standard chapter structure
  • Validate chapter data
  • Keep 300+ chapters consistent
  • Work with the existing ChapterData system
==================================================*/

(function () {

  "use strict";


  /* ================================================
     DEFAULT CHAPTER STRUCTURE
  ================================================= */

  function create(config = {}) {

    const chapter = {

      id: config.id || "",

      class: config.class || "",

      subject: config.subject || "",

      chapterNumber:
        Number(config.chapterNumber || 1),

      title:
        config.title || "Chapter Title",

      description:
        config.description || "",

      estimatedReadingTime:
        config.estimatedReadingTime ||
        "25–35 minutes",

      difficulty:
        config.difficulty ||
        "Beginner",

      summary:
        config.summary || "",

      sections:
        Array.isArray(config.sections)
          ? config.sections
          : [],

      importantPoints:
        Array.isArray(config.importantPoints)
          ? config.importantPoints
          : [],

      keyTerms:
        Array.isArray(config.keyTerms)
          ? config.keyTerms
          : [],

      revisionQuestions:
        Array.isArray(config.revisionQuestions)
          ? config.revisionQuestions
          : [],

      mcqs:
        Array.isArray(config.mcqs)
          ? config.mcqs
          : [],

      flashcards:
        Array.isArray(config.flashcards)
          ? config.flashcards
          : [],

      version:
        config.version || "1.0",

      status:
        config.status || "published"

    };


    return chapter;

  }


  /* ================================================
     VALIDATE CHAPTER
  ================================================= */

  function validate(chapter) {

    const errors = [];


    if (!chapter) {
      errors.push(
        "Chapter data is missing."
      );

      return errors;
    }


    if (!chapter.id) {
      errors.push(
        "Chapter ID is required."
      );
    }


    if (!chapter.class) {
      errors.push(
        "Class is required."
      );
    }


    if (!chapter.subject) {
      errors.push(
        "Subject is required."
      );
    }


    if (!chapter.title) {
      errors.push(
        "Chapter title is required."
      );
    }


    if (
      !Number.isFinite(
        Number(chapter.chapterNumber)
      )
    ) {
      errors.push(
        "Chapter number must be a number."
      );
    }


    if (
      !Array.isArray(
        chapter.sections
      )
    ) {
      errors.push(
        "Sections must be an array."
      );
    }


    if (
      !Array.isArray(
        chapter.mcqs
      )
    ) {
      errors.push(
        "MCQs must be an array."
      );
    }


    return errors;

  }


  /* ================================================
     CHECK UNIQUE ID FORMAT
  ================================================= */

  function isValidId(id) {

    if (
      typeof id !== "string" ||
      !id.trim()
    ) {
      return false;
    }


    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
      id
    );

  }


  /* ================================================
     CREATE SIMPLE CHAPTER ID
  ================================================= */

  function makeId(
    classNumber,
    subject,
    title
  ) {

    const clean = function (value) {

      return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    };


    return [
      "class",
      clean(classNumber),
      clean(subject),
      clean(title)
    ]
      .filter(Boolean)
      .join("-");

  }


  /* ================================================
     FREEZE BASIC STRUCTURE
     Prevent accidental modification
  ================================================= */

  function prepare(config = {}) {

    const chapter =
      create(config);


    const errors =
      validate(chapter);


    if (errors.length) {

      console.error(
        "❌ Chapter validation failed:",
        errors
      );

      return {
        success: false,
        errors: errors,
        data: chapter
      };

    }


    return {
      success: true,
      errors: [],
      data: chapter
    };

  }


  /* ================================================
     PUBLIC API
  ================================================= */

  window.ChapterBuilder = {

    create: create,

    validate: validate,

    prepare: prepare,

    makeId: makeId,

    isValidId: isValidId,

    version: "1.0"

  };


  console.log(
    "✅ Universal Chapter Builder loaded."
  );


})();
