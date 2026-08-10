/*==================================================
  CONCEPT QUIZZER
  CLASS 6 • MATHEMATICS
  CHAPTER 2 • LINES AND ANGLES
==================================================*/

const ChapterData = {
  id: "6-mathematics-lines-and-angles",
  class: 6,
  subject: "Mathematics",
  chapterNumber: 2,
  title: "Lines and Angles",

  description:
    "Detailed, easy-to-understand notes covering lines, rays, line segments, angles, angle relationships, parallel lines and transversals.",

  summary:
    "Lines extend indefinitely in both directions. Rays have one endpoint and extend in one direction, while line segments have two endpoints. Angles can be classified by their measures. Complementary angles sum to 90°, supplementary angles sum to 180°, linear-pair angles are supplementary, vertically opposite angles are equal, and parallel lines cut by a transversal create important equal and supplementary angle relationships.",

  sections: [
    {
      id: "basic-terms",
      title: "1. Basic Terms",
      blocks: [
        {
          type: "definition",
          title: "Line",
          text:
            "A line extends indefinitely in both directions."
        },
        {
          type: "definition",
          title: "Ray",
          text:
            "A ray has one endpoint and extends indefinitely in one direction."
        },
        {
          type: "definition",
          title: "Line Segment",
          text:
            "A line segment has two endpoints."
        },
        {
          type: "paragraph",
          text:
            "When two lines meet, they form angles."
        }
      ]
    },

    {
      id: "types-of-angles",
      title: "2. Types of Angles",
      blocks: [
        {
          type: "paragraph",
          text:
            "Angles are classified according to their measure."
        },
        {
          type: "example",
          title: "Angle Classification",
          text:
            "Acute angle: less than 90°. Right angle: 90°. Obtuse angle: between 90° and 180°. Straight angle: 180°. Reflex angle: between 180° and 360°."
        },
        {
          type: "tip",
          title: "Remember",
          text:
            "A right angle is exactly 90°, while a straight angle is exactly 180°."
        }
      ]
    },

    {
      id: "complementary-supplementary",
      title: "3. Complementary and Supplementary Angles",
      blocks: [
        {
          type: "definition",
          title: "Complementary Angles",
          text:
            "Two angles are complementary if their sum is 90°."
        },
        {
          type: "definition",
          title: "Supplementary Angles",
          text:
            "Two angles are supplementary if their sum is 180°."
        },
        {
          type: "example",
          title: "Examples",
          text:
            "The complement of 35° is 55° because 35° + 55° = 90°. The supplement of 112° is 68° because 112° + 68° = 180°."
        }
      ]
    },

    {
      id: "adjacent-linear-pair",
      title: "4. Adjacent Angles and Linear Pair",
      blocks: [
        {
          type: "definition",
          title: "Adjacent Angles",
          text:
            "Adjacent angles share a vertex and a common arm without overlapping interiors."
        },
        {
          type: "definition",
          title: "Linear Pair",
          text:
            "A linear pair consists of adjacent angles whose non-common arms form a straight line. Therefore, their sum is 180°."
        },
        {
          type: "example",
          title: "Example",
          text:
            "If one angle of a linear pair is 72°, the other angle is 108° because 72° + 108° = 180°."
        },
        {
          type: "warning",
          title: "Common Mistake",
          text:
            "All adjacent angles are not necessarily a linear pair. A linear pair must have non-common arms forming a straight line."
        }
      ]
    },

    {
      id: "vertically-opposite",
      title: "5. Vertically Opposite Angles",
      blocks: [
        {
          type: "definition",
          title: "Vertically Opposite Angles",
          text:
            "When two lines intersect, each pair of vertically opposite angles is equal."
        },
        {
          type: "example",
          title: "Example",
          text:
            "If two lines intersect and one angle is 48°, its vertically opposite angle is also 48°."
        },
        {
          type: "tip",
          title: "Remember",
          text:
            "Vertically opposite angles are equal. They are not necessarily adjacent."
        }
      ]
    },

    {
      id: "parallel-transversal",
      title: "6. Parallel Lines and a Transversal",
      blocks: [
        {
          type: "definition",
          title: "Transversal",
          text:
            "A transversal is a line that intersects two or more lines."
        },
        {
          type: "paragraph",
          text:
            "If two parallel lines are cut by a transversal, corresponding angles are equal, alternate interior angles are equal, and interior angles on the same side are supplementary."
        },
        {
          type: "example",
          title: "Same-Side Interior Angles",
          text:
            "If one same-side interior angle is 110°, its partner is 70° because 110° + 70° = 180°."
        }
      ]
    },

    {
      id: "converse-results",
      title: "7. Converse Results",
      blocks: [
        {
          type: "paragraph",
          text:
            "Angle relationships can also be used to prove that two lines are parallel."
        },
        {
          type: "fact",
          title: "Parallel-Line Tests",
          text:
            "Equal corresponding angles, equal alternate interior angles, or supplementary same-side interior angles imply parallelism under the standard configuration."
        }
      ]
    },

    {
      id: "parallel-same-line",
      title: "8. Lines Parallel to the Same Line",
      blocks: [
        {
          type: "fact",
          title: "Property",
          text:
            "If two lines are each parallel to the same line, they are parallel to each other."
        }
      ]
    },

    {
      id: "real-life",
      title: "9. Real-Life Connections",
      blocks: [
        {
          type: "application",
          title: "Where We See These Ideas",
          text:
            "Parallel-line and angle relationships appear in road crossings, railway tracks, window frames, architecture, surveying and geometric design."
        }
      ]
    },

    {
      id: "common-misconceptions",
      title: "10. Common Misconceptions",
      blocks: [
        {
          type: "warning",
          title: "Avoid These Mistakes",
          text:
            "Vertically opposite angles are equal, not necessarily adjacent. All adjacent angles are not linear pairs. Corresponding-angle equality requires the parallel-line condition when used as a direct theorem. Supplementary means the sum is 180°, not that the angles must be equal."
        }
      ]
    },

    {
      id: "quick-revision",
      title: "11. Quick Revision",
      blocks: [
        {
          type: "summary",
          title: "Key Rules",
          text:
            "Linear pair → 180°. Vertically opposite angles → equal. With parallel lines and a transversal: corresponding angles are equal, alternate interior angles are equal, and same-side interior angles are supplementary. Converse angle conditions can establish parallel lines."
        }
      ]
    },

    {
      id: "chapter-exercise",
      title: "Chapter Exercise with Answers",
      blocks: [
        {
          type: "example",
          title: "Q1",
          text:
            "Complement of 35°? Answer: 55°."
        },
        {
          type: "example",
          title: "Q2",
          text:
            "Supplement of 112°? Answer: 68°."
        },
        {
          type: "example",
          title: "Q3",
          text:
            "One angle of a linear pair is 72°. Other? Answer: 108°."
        },
        {
          type: "example",
          title: "Q4",
          text:
            "Two lines intersect and one angle is 48°. Its vertically opposite angle? Answer: 48°."
        },
        {
          type: "example",
          title: "Q5",
          text:
            "If corresponding angles are equal, what can be concluded? Answer: The two lines are parallel."
        },
        {
          type: "example",
          title: "Q6",
          text:
            "If a transversal cuts parallel lines and one interior angle is 110°, its same-side interior partner? Answer: 70°."
        },
        {
          type: "example",
          title: "Q7",
          text:
            "Can two obtuse angles be complementary? Answer: No."
        },
        {
          type: "example",
          title: "Q8 — HOTS",
          text:
            "Two supplementary angles are in the ratio 2:3. Find them. Let the angles be 2x and 3x. Then 2x + 3x = 180°, so 5x = 180° and x = 36°. Therefore the angles are 72° and 108°."
        }
      ]
    }
  ],

  importantPoints: [
    "A line extends indefinitely in both directions.",
    "A ray has one endpoint; a line segment has two endpoints.",
    "Complementary angles sum to 90°.",
    "Supplementary angles sum to 180°.",
    "A linear pair always sums to 180°.",
    "Vertically opposite angles are equal.",
    "For parallel lines cut by a transversal, corresponding angles are equal.",
    "For parallel lines cut by a transversal, alternate interior angles are equal.",
    "Same-side interior angles are supplementary.",
    "Angle relationships can be used to prove that lines are parallel."
  ],

  keyTerms: [
    "Line",
    "Ray",
    "Line Segment",
    "Angle",
    "Acute Angle",
    "Right Angle",
    "Obtuse Angle",
    "Straight Angle",
    "Reflex Angle",
    "Complementary Angles",
    "Supplementary Angles",
    "Adjacent Angles",
    "Linear Pair",
    "Vertically Opposite Angles",
    "Parallel Lines",
    "Transversal"
  ]
};

/* Keep both forms available for different versions of the loader. */
