/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL CHAPTER DATA TEMPLATE
  Package 12.5 — Step 1
==================================================*/

const ChapterData = {

  /* BASIC INFORMATION */
  id: "chapter-id",

  class: 6,

  subject: "Mathematics",

  chapterNumber: 1,

  title: "Chapter Title",

  description: "Short description of the chapter.",


  /* CHAPTER NOTES */
  sections: [

    {
      id: "section-1",

      title: "Introduction",

      blocks: [

        {
          type: "paragraph",
          text: "Write the chapter explanation here."
        },

        {
          type: "definition",
          title: "Definition",
          text: "Write the important definition here."
        },

        {
          type: "example",
          title: "Example",
          text: "Write an example here."
        },

        {
          type: "tip",
          title: "Study Tip",
          text: "Write a useful study tip here."
        }

      ]
    }

  ],


  /* IMPORTANT POINTS */
  importantPoints: [

    "Important point 1",

    "Important point 2",

    "Important point 3"

  ],


  /* KEY TERMS */
  keyTerms: [

    "Term 1",

    "Term 2",

    "Term 3"

  ],


  /* CHAPTER SUMMARY */
  summary:
    "Write the complete chapter summary here.",


  /* QUIZ */
  quiz: [

    {
      id: "q1",

      question: "Question text?",

      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],

      answer: 0,

      explanation:
        "Explain why this answer is correct.",

      difficulty: "easy"
    }

  ],


  /* IMPORTANT QUESTIONS */
  questions: [

    {
      question:
        "Write an important question here.",

      answer:
        "Write the answer here.",

      marks: 2,

      difficulty: "easy"
    }

  ]

};
