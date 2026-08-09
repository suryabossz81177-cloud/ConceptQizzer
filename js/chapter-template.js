/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER TEMPLATE
  Package 12.5 — Step 6.2
==================================================*/

window.createChapterData = function (config = {}) {

  return {

    /* ================================
       BASIC INFORMATION
    ================================= */

    id: config.id || "chapter-id",

    class: config.class || "6",

    subject: config.subject || "Mathematics",

    chapterNumber:
      config.chapterNumber || 1,

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


    /* ================================
       SUMMARY
    ================================= */

    summary:
      config.summary || "",


    /* ================================
       CHAPTER SECTIONS
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
       REVISION QUESTIONS
    ================================= */

    revisionQuestions:
      config.revisionQuestions || [],


    /* ================================
       MCQs
    ================================= */

    mcqs:
      config.mcqs || [],


    /* ================================
       FLASHCARDS
    ================================= */

    flashcards:
      config.flashcards || [],


    /* ================================
       METADATA
    ================================= */

    version:
      config.version || "1.0",

    status:
      config.status || "published"

  };

};
