/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER TEMPLATE
  Package 12.5 — Step 6
==================================================*/

window.createChapterData = function (config = {}) {

  return {

    /* ================================
       BASIC INFORMATION
    ================================= */

    id: config.id || "chapter-id",

    class: config.class || 6,

    subject: config.subject || "Subject",

    chapterNumber:
      config.chapterNumber || 1,

    title:
      config.title || "Chapter Title",

    description:
      config.description || "",


    /* ================================
       NOTES
    ================================= */

    sections:
      config.sections || [],


    /* ================================
       IMPORTANT POINTS
    ================================= */

    importantPoints:
      config.importantPoints || [],


    /* ================================
       KEY TERMS
    ================================= */

    keyTerms:
      config.keyTerms || [],


    /* ================================
       SUMMARY
    ================================= */

    summary:
      config.summary || "",


    /* ================================
       IMPORTANT QUESTIONS
    ================================= */

    questions:
      config.questions || [],


    /* ================================
       QUIZ
    ================================= */

    quiz:
      config.quiz || [],


    /* ================================
       FLASHCARDS
    ================================= */

    flashcards:
      config.flashcards || [],


    /* ================================
       REVISION
    ================================= */

    revision:
      config.revision || [],


    /* ================================
       METADATA
    ================================= */

    version:
      config.version || "1.0",

    status:
      config.status || "published"

  };

};
