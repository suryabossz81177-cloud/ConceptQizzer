/* ConceptQizzer — Class 9 Mathematics — corrected render-safe chapter file */
/* Loader fix: all chapter extensions are inside the object; no post-declaration ChapterData.* statements remain. */
"use strict";

window.ChapterData = {
  "id": "9-mathematics-herons-formula",
  "title": "Heron’s Formula",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 10,
  "file": "js/notes/class9/mathematics/herons-formula.js",
  "enabled": true,
  "description": "An ultra-detailed Class 9 Heron’s Formula chapter covering foundations, triangle conditions, semiperimeter, formula anatomy, complete derivation, extensive solved examples, special triangles, triangulation, scaling, radicals, reverse reasoning, comparisons, misconceptions, HOTS and exam strategy.",
  "learningObjectives": [
    "Know when to use Heron.",
    "Check triangle inequality.",
    "Calculate s accurately.",
    "Explain every symbol in the formula.",
    "Understand the derivation.",
    "Keep exact radicals.",
    "Use triangulation for quadrilaterals.",
    "Apply scaling rules and verify units."
  ],
  "prerequisiteCheck": [
    "Triangle area 1/2 bh",
    "Pythagoras theorem",
    "Square roots",
    "Perimeter and units"
  ],
  "conceptRoadmap": [
    "Using Heron without checking side validity.",
    "Forgetting the factor 1/2 in s.",
    "Using perimeter instead of semiperimeter.",
    "Dropping one of the four factors.",
    "Writing cm instead of cm².",
    "Rounding too early.",
    "Ignoring an impossible side triple."
  ],
  "comparisonTables": [],
  "theoremPropertyLab": [],
  "formulaPropertyBank": [
    "s=(a+b+c)/2",
    "Δ=√[s(s−a)(s−b)(s−c)]",
    "Equilateral Δ=(√3/4)a²",
    "Triangle inequality a+b>c and cyclic versions"
  ],
  "conceptConnections": [],
  "mathematicalThinking": [
    "Identify the given information before selecting a formula.",
    "State the condition for every theorem before applying it.",
    "Keep exact values as long as possible and estimate only as a check.",
    "Use a second method to verify an important result."
  ],
  "errorDetective": [
    {
      "problem": "Validity first.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "s is half perimeter.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Area is square units.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Exact radical is preferred when no decimal is requested.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Scaling lengths by k scales area by k².",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Explain why a side triple determines a unique area even if the triangle can be reflected.",
      "answer": "Reflection preserves side lengths and area."
    },
    {
      "question": "What happens if a supposed side length is 0?",
      "answer": "It is not a valid triangle side."
    },
    {
      "question": "What are the dimensions of s(s−a)(s−b)(s−c) if sides are cm?",
      "answer": "cm⁴."
    },
    {
      "question": "Outline the full derivation in five logical stages.",
      "answer": "Altitude → Pythagoras → solve base segment → compute h² → substitute into Δ² and factor."
    },
    {
      "question": "A quadrilateral is split by a diagonal into triangles (5,5,6) and (5,6,7). Find total area.",
      "answer": "12+6√6 cm²."
    }
  ],
  "realLifeMathematics": [],
  "mathematicalActivityLab": [],
  "figureBank": [
  {
    "title": "Heron side labels",
    "diagram": "          A\n         / \\\n       c/   \\b\n       /     \\\n      B───a──C\na=BC, b=CA, c=AB",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Semiperimeter",
    "diagram": "perimeter=a+b+c\nsemiperimeter s=(a+b+c)/2",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Heron workflow",
    "diagram": "a,b,c → triangle-inequality check → s → s−a,s−b,s−c\n→ √[s(s−a)(s−b)(s−c)] → area",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Base-height comparison",
    "diagram": "       A\n      /|\\\n     / | \\\n    /  |h \\\n   B───H───C\nBase-height uses ½bh; Heron uses all three sides.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Equilateral special case",
    "diagram": "        A\n       / \\\n      /   \\\n     B─────C\nall sides=a → Area=(√3/4)a²",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  }
],
  "visualLearning": [],
  "masterDefinitions": [
    {
      "term": "Semiperimeter",
      "definition": "Half the perimeter: s=(a+b+c)/2."
    },
    {
      "term": "Heron’s formula",
      "definition": "For a valid triangle, Δ=√[s(s−a)(s−b)(s−c)]."
    },
    {
      "term": "Triangle inequality",
      "definition": "The sum of any two side lengths must be greater than the third for a non-degenerate triangle."
    },
    {
      "term": "Degenerate triangle",
      "definition": "A limiting configuration where the largest side equals the sum of the other two and area is zero."
    }
  ],
  "formulaRevisionSheet": [
    "s=(a+b+c)/2",
    "Δ=√[s(s−a)(s−b)(s−c)]",
    "Equilateral Δ=(√3/4)a²",
    "Triangle inequality a+b>c and cyclic versions"
  ],
  "questionBank": [
    {
      "topic": "Need",
      "difficulty": "Basic",
      "question": "Find semiperimeter of sides 8,10,12.",
      "answer": "15 cm.",
      "solution": "s=(8+10+12)/2=15."
    },
    {
      "topic": "Need",
      "difficulty": "Understanding",
      "question": "What information makes Heron especially useful?",
      "answer": "All three side lengths.",
      "solution": "The formula directly converts three valid side lengths into area."
    },
    {
      "topic": "Need",
      "difficulty": "Application",
      "question": "Find area of 13,14,15.",
      "answer": "84 cm².",
      "solution": "s=21; Δ=√(21×8×7×6)=√7056=84."
    },
    {
      "topic": "Need",
      "difficulty": "HOTS",
      "question": "Why can Heron handle an obtuse triangle?",
      "answer": "It uses side lengths and does not require an altitude to be inside the triangle.",
      "solution": "The algebraic derivation remains valid for any non-degenerate triangle."
    },
    {
      "topic": "Need",
      "difficulty": "Challenge",
      "question": "Explain why a side triple determines a unique area even if the triangle can be reflected.",
      "answer": "Reflection preserves side lengths and area.",
      "solution": "SSS determines congruent shapes up to reflection, so the area is unchanged."
    },
    {
      "topic": "Conditions",
      "difficulty": "Basic",
      "question": "Can 4,7,12 form a triangle?",
      "answer": "No.",
      "solution": "4+7=11<12."
    },
    {
      "topic": "Conditions",
      "difficulty": "Understanding",
      "question": "What is the only essential side-sum check after identifying the largest side?",
      "answer": "Sum of the two smaller sides must exceed the largest.",
      "solution": "This implies the other two triangle inequalities automatically for positive sides."
    },
    {
      "topic": "Conditions",
      "difficulty": "Application",
      "question": "Can 6,8,14 be a non-degenerate triangle?",
      "answer": "No.",
      "solution": "6+8=14, equality gives a degenerate case."
    },
    {
      "topic": "Conditions",
      "difficulty": "HOTS",
      "question": "Why does Heron’s square-root expression become zero in a degenerate case?",
      "answer": "One factor s−largest side becomes zero.",
      "solution": "If c=a+b, then s=(a+b+c)/2=c, so s−c=0 and the product is zero."
    },
    {
      "topic": "Conditions",
      "difficulty": "Challenge",
      "question": "What happens if a supposed side length is 0?",
      "answer": "It is not a valid triangle side.",
      "solution": "A triangle requires three positive side lengths."
    },
    {
      "topic": "Semiperimeter",
      "difficulty": "Basic",
      "question": "Find s for sides 11,13,14.",
      "answer": "19 cm.",
      "solution": "(11+13+14)/2=38/2=19."
    },
    {
      "topic": "Semiperimeter",
      "difficulty": "Understanding",
      "question": "Why is s not the full perimeter?",
      "answer": "It is exactly half the perimeter.",
      "solution": "Perimeter=a+b+c, while s=(a+b+c)/2."
    },
    {
      "topic": "Semiperimeter",
      "difficulty": "Application",
      "question": "Find area for 5,6,7.",
      "answer": "6√6 cm².",
      "solution": "s=9; √(9×4×3×2)=√216=6√6."
    },
    {
      "topic": "Semiperimeter",
      "difficulty": "HOTS",
      "question": "Why should exact radicals often be retained?",
      "answer": "They preserve exactness.",
      "solution": "A decimal approximation can lose information unless the question requests a decimal."
    },
    {
      "topic": "Semiperimeter",
      "difficulty": "Challenge",
      "question": "What are the dimensions of s(s−a)(s−b)(s−c) if sides are cm?",
      "answer": "cm⁴.",
      "solution": "Four length factors multiply to cm⁴; square root gives cm²."
    },
    {
      "topic": "Derivation",
      "difficulty": "Basic",
      "question": "What theorem supplies the right-triangle equations in the derivation?",
      "answer": "Pythagoras theorem.",
      "solution": "The altitude creates right triangles."
    },
    {
      "topic": "Derivation",
      "difficulty": "Understanding",
      "question": "Why is Δ² used during the derivation?",
      "answer": "Because Δ=ah/2, so squaring gives Δ²=a²h²/4 and removes the square root/height sign issue.",
      "solution": "This matches the algebra produced by Pythagoras."
    },
    {
      "topic": "Derivation",
      "difficulty": "Application",
      "question": "Write the formula after obtaining Δ²=s(s−a)(s−b)(s−c).",
      "answer": "Δ=√[s(s−a)(s−b)(s−c)].",
      "solution": "Take the positive square root because area is positive."
    },
    {
      "topic": "Derivation",
      "difficulty": "HOTS",
      "question": "What role does factorisation play?",
      "answer": "It converts a complicated expression into four semiperimeter-related factors.",
      "solution": "The factored form is exactly Heron’s structure."
    },
    {
      "topic": "Derivation",
      "difficulty": "Challenge",
      "question": "Outline the full derivation in five logical stages.",
      "answer": "Altitude → Pythagoras → solve base segment → compute h² → substitute into Δ² and factor.",
      "solution": "This is the conceptual chain behind the formula."
    },
    {
      "topic": "Worked",
      "difficulty": "Basic",
      "question": "Find area of sides 10,10,12.",
      "answer": "48 cm².",
      "solution": "s=16; √(16×6×6×4)=√2304=48."
    },
    {
      "topic": "Worked",
      "difficulty": "Understanding",
      "question": "Find area of 7,8,9.",
      "answer": "12√5 cm².",
      "solution": "s=12; √(12×5×4×3)=√720=12√5."
    },
    {
      "topic": "Worked",
      "difficulty": "Application",
      "question": "Find area of 13,14,15.",
      "answer": "84 cm².",
      "solution": "s=21; √(21×8×7×6)=84."
    },
    {
      "topic": "Worked",
      "difficulty": "HOTS",
      "question": "A triangle has sides 7,8,9. If all sides are doubled, what is the new area?",
      "answer": "48√5 cm².",
      "solution": "Original area=12√5. Scaling factor 2 gives area factor 4, so new area=48√5."
    },
    {
      "topic": "Worked",
      "difficulty": "Challenge",
      "question": "A quadrilateral is split by a diagonal into triangles (5,5,6) and (5,6,7). Find total area.",
      "answer": "12+6√6 cm².",
      "solution": "First triangle: s=8, area=12. Second: s=9, area=6√6. Add them."
    },
    {
      "topic": "Special",
      "difficulty": "Basic",
      "question": "Area of an equilateral triangle of side 12 cm?",
      "answer": "36√3 cm².",
      "solution": "Heron gives s=18; √(18×6×6×6)=36√3."
    },
    {
      "topic": "Special",
      "difficulty": "Understanding",
      "question": "Why can a quadrilateral be handled by two Heron calculations?",
      "answer": "A diagonal divides it into two triangles.",
      "solution": "The total area is the sum of non-overlapping parts."
    },
    {
      "topic": "Special",
      "difficulty": "Application",
      "question": "Find area of a triangle with sides 8,15,17 using Heron.",
      "answer": "60 cm².",
      "solution": "s=20; √(20×12×5×3)=√3600=60."
    },
    {
      "topic": "Special",
      "difficulty": "HOTS",
      "question": "Why does doubling side length quadruple area?",
      "answer": "Area has dimensions length².",
      "solution": "The scale factor for area is the square of the length scale factor."
    },
    {
      "topic": "Special",
      "difficulty": "Challenge",
      "question": "If all sides are multiplied by 1/2, what happens to area?",
      "answer": "It becomes one-fourth.",
      "solution": "Area scale=(1/2)²=1/4."
    },
    {
      "topic": "Error check",
      "difficulty": "Basic",
      "question": "What unit should area have if sides are in cm?",
      "answer": "cm².",
      "solution": "Area is two-dimensional."
    },
    {
      "topic": "Error check",
      "difficulty": "Understanding",
      "question": "Can s−a be negative for a valid triangle?",
      "answer": "No.",
      "solution": "The triangle inequality implies a<s for each side."
    },
    {
      "topic": "Error check",
      "difficulty": "Application",
      "question": "A student uses s=a+b+c. What is wrong?",
      "answer": "They used the perimeter instead of semiperimeter.",
      "solution": "Correct s=(a+b+c)/2."
    },
    {
      "topic": "Error check",
      "difficulty": "HOTS",
      "question": "A computed area is 900 cm² for a triangle with all sides near 10 cm. Is it plausible?",
      "answer": "No.",
      "solution": "A triangle with sides near 10 cm has area on the order of tens of cm², so 900 signals an error."
    },
    {
      "topic": "Error check",
      "difficulty": "Challenge",
      "question": "Why does the positive square root represent the area?",
      "answer": "Area cannot be negative.",
      "solution": "After deriving Δ², take the non-negative square root."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Every practice question has a Show Answer control. The answer and complete step-by-step solution remain hidden until the learner clicks it.",
    "answerButtonLabel": "Show Answer"
  },
  "practiceSets": [
    {
      "title": "Basic Practice",
      "questions": [
        "Find semiperimeter of sides 8,10,12.",
        "Can 4,7,12 form a triangle?",
        "Find s for sides 11,13,14.",
        "What theorem supplies the right-triangle equations in the derivation?",
        "Find area of sides 10,10,12.",
        "Area of an equilateral triangle of side 12 cm?",
        "What unit should area have if sides are in cm?"
      ]
    },
    {
      "title": "Understanding Practice",
      "questions": [
        "What information makes Heron especially useful?",
        "What is the only essential side-sum check after identifying the largest side?",
        "Why is s not the full perimeter?",
        "Why is Δ² used during the derivation?",
        "Find area of 7,8,9.",
        "Why can a quadrilateral be handled by two Heron calculations?",
        "Can s−a be negative for a valid triangle?"
      ]
    },
    {
      "title": "Application Practice",
      "questions": [
        "Find area of 13,14,15.",
        "Can 6,8,14 be a non-degenerate triangle?",
        "Find area for 5,6,7.",
        "Write the formula after obtaining Δ²=s(s−a)(s−b)(s−c).",
        "Find area of 13,14,15.",
        "Find area of a triangle with sides 8,15,17 using Heron.",
        "A student uses s=a+b+c. What is wrong?"
      ]
    },
    {
      "title": "HOTS Practice",
      "questions": [
        "Why can Heron handle an obtuse triangle?",
        "Why does Heron’s square-root expression become zero in a degenerate case?",
        "Why should exact radicals often be retained?",
        "What role does factorisation play?",
        "A triangle has sides 7,8,9. If all sides are doubled, what is the new area?",
        "Why does doubling side length quadruple area?",
        "A computed area is 900 cm² for a triangle with all sides near 10 cm. Is it plausible?"
      ]
    },
    {
      "title": "Challenge Practice",
      "questions": [
        "Explain why a side triple determines a unique area even if the triangle can be reflected.",
        "What happens if a supposed side length is 0?",
        "What are the dimensions of s(s−a)(s−b)(s−c) if sides are cm?",
        "Outline the full derivation in five logical stages.",
        "A quadrilateral is split by a diagonal into triangles (5,5,6) and (5,6,7). Find total area.",
        "If all sides are multiplied by 1/2, what happens to area?",
        "Why does the positive square root represent the area?"
      ]
    }
  ],
  "timedPractice": [
    {
      "duration": "45 minutes",
      "instruction": "Attempt the mixed paper without notes. Reveal answers only after completing each question."
    }
  ],
  "chapterQuiz": [
    {
      "question": "What is s for sides 5,6,7?",
      "options": [
        "9.",
        "0",
        "The perimeter",
        "Cannot be determined"
      ],
      "answer": "9."
    },
    {
      "question": "Which condition is required?",
      "options": [
        "Sum of any two sides > third side.",
        "0",
        "The perimeter",
        "Cannot be determined"
      ],
      "answer": "Sum of any two sides > third side."
    },
    {
      "question": "For 3,4,5 Heron gives?",
      "options": [
        "6 cm².",
        "0",
        "The perimeter",
        "Cannot be determined"
      ],
      "answer": "6 cm²."
    },
    {
      "question": "Equilateral side a has area?",
      "options": [
        "(√3/4)a².",
        "0",
        "The perimeter",
        "Cannot be determined"
      ],
      "answer": "(√3/4)a²."
    },
    {
      "question": "If side scale is 3, area scale is?",
      "options": [
        "9.",
        "0",
        "The perimeter",
        "Cannot be determined"
      ],
      "answer": "9."
    }
  ],
  "examZone": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "commonMistakes": [
    "Validity first.",
    "s is half perimeter.",
    "Area is square units.",
    "Exact radical is preferred when no decimal is requested.",
    "Scaling lengths by k scales area by k²."
  ],
  "masterRevision": [
    "Heron’s Formula: definitions → conditions → concepts → worked examples → guided practice → mixed HOTS → revision → final test."
  ],
  "detailedSummary": [
    "A comprehensive Class 9 Heron’s Formula chapter covering why the formula is needed, triangle conditions, semiperimeter, formula anatomy, derivation, solved examples, special cases, triangulation, scaling, units, errors and HOTS.",
    "The chapter should be revised by explaining each definition aloud, deriving or justifying each major formula, solving examples without looking at the solution, and checking the final result."
  ],
  "finalChapterTest": [
    {
      "topic": "Error check",
      "difficulty": "Understanding",
      "question": "Can s−a be negative for a valid triangle?",
      "answer": "No.",
      "solution": "The triangle inequality implies a<s for each side."
    },
    {
      "topic": "Error check",
      "difficulty": "Application",
      "question": "A student uses s=a+b+c. What is wrong?",
      "answer": "They used the perimeter instead of semiperimeter.",
      "solution": "Correct s=(a+b+c)/2."
    },
    {
      "topic": "Error check",
      "difficulty": "HOTS",
      "question": "A computed area is 900 cm² for a triangle with all sides near 10 cm. Is it plausible?",
      "answer": "No.",
      "solution": "A triangle with sides near 10 cm has area on the order of tens of cm², so 900 signals an error."
    },
    {
      "topic": "Error check",
      "difficulty": "Challenge",
      "question": "Why does the positive square root represent the area?",
      "answer": "Area cannot be negative.",
      "solution": "After deriving Δ², take the non-negative square root."
    }
  ],
  "importantPoints": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "keyTerms": [
    "Semiperimeter",
    "Heron’s formula",
    "Triangle inequality",
    "Degenerate triangle"
  ],
  "chapterSummary": "A comprehensive Class 9 Heron’s Formula chapter covering why the formula is needed, triangle conditions, semiperimeter, formula anatomy, derivation, solved examples, special cases, triangulation, scaling, units, errors and HOTS.",
  "sections": [
    {
      "id": "why-heron",
      "title": "Why Heron’s Formula is Needed",
      "blocks": [

  {
    "type": "concept",
    "title": "📐 Figure 1 — Heron side labels",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n          A\n         / \\\n       c/   \\b\n       /     \\\n      B───a──C\na=BC, b=CA, c=AB\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 2 — Semiperimeter",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nperimeter=a+b+c\nsemiperimeter s=(a+b+c)/2\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 3 — Heron workflow",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\na,b,c → triangle-inequality check → s → s−a,s−b,s−c\n→ √[s(s−a)(s−b)(s−c)] → area\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 4 — Base-height comparison",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n       A\n      /|\\\n     / | \\\n    /  |h \\\n   B───H───C\nBase-height uses ½bh; Heron uses all three sides.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 5 — Equilateral special case",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n        A\n       / \\\n      /   \\\n     B─────C\nall sides=a → Area=(√3/4)a²\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  }
,

        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The familiar triangle area formula Δ=1/2 bh needs a perpendicular height. Heron’s formula is useful when all three side lengths are known but the height is inconvenient or unavailable. For side lengths a,b,c, define semiperimeter s=(a+b+c)/2. Then Δ=√[s(s−a)(s−b)(s−c)]. Every symbol has a precise meaning: Δ is area, a,b,c are side lengths, and s is half the perimeter."
        },
        {
          "type": "example",
          "title": "When base-height is easier",
          "color": "orange",
          "text": "For a 3-4-5 triangle, base-height gives 6 cm² immediately. Heron also gives 6 cm², so the two methods agree."
        },
        {
          "type": "example",
          "title": "When Heron is better",
          "color": "orange",
          "text": "For sides 13,14,15, the height is not immediately obvious, but Heron gives s=21 and area=84 cm² directly."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Why Heron’s Formula is Needed",
          "color": "purple",
          "questions": [
            {
              "topic": "Need",
              "difficulty": "Basic",
              "question": "Find semiperimeter of sides 8,10,12.",
              "answer": "15 cm.",
              "solution": "s=(8+10+12)/2=15."
            },
            {
              "topic": "Need",
              "difficulty": "Understanding",
              "question": "What information makes Heron especially useful?",
              "answer": "All three side lengths.",
              "solution": "The formula directly converts three valid side lengths into area."
            },
            {
              "topic": "Need",
              "difficulty": "Application",
              "question": "Find area of 13,14,15.",
              "answer": "84 cm².",
              "solution": "s=21; Δ=√(21×8×7×6)=√7056=84."
            },
            {
              "topic": "Need",
              "difficulty": "HOTS",
              "question": "Why can Heron handle an obtuse triangle?",
              "answer": "It uses side lengths and does not require an altitude to be inside the triangle.",
              "solution": "The algebraic derivation remains valid for any non-degenerate triangle."
            },
            {
              "topic": "Need",
              "difficulty": "Challenge",
              "question": "Explain why a side triple determines a unique area even if the triangle can be reflected.",
              "answer": "Reflection preserves side lengths and area.",
              "solution": "SSS determines congruent shapes up to reflection, so the area is unchanged."
            }
          ]
        }
      ]
    },
    {
      "id": "conditions",
      "title": "Triangle Inequality and Conditions",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Before applying Heron, verify a+b>c, b+c>a and c+a>b for positive side lengths. It is enough to check that the sum of the two smaller sides is greater than the largest side. Equality gives a degenerate straight-line configuration with zero area; a smaller sum gives no triangle. Heron’s formula is intended for a genuine triangle."
        },
        {
          "type": "example",
          "title": "Valid triple",
          "color": "orange",
          "text": "5,7,9 works because 5+7>9."
        },
        {
          "type": "example",
          "title": "Invalid triple",
          "color": "orange",
          "text": "3,4,8 fails because 3+4<8. There is no triangle, so a positive area cannot be produced."
        },
        {
          "type": "example",
          "title": "Degenerate triple",
          "color": "orange",
          "text": "3,4,7 has 3+4=7. The “triangle” collapses and area is 0 in the limiting sense."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Triangle Inequality and Conditions",
          "color": "purple",
          "questions": [
            {
              "topic": "Conditions",
              "difficulty": "Basic",
              "question": "Can 4,7,12 form a triangle?",
              "answer": "No.",
              "solution": "4+7=11<12."
            },
            {
              "topic": "Conditions",
              "difficulty": "Understanding",
              "question": "What is the only essential side-sum check after identifying the largest side?",
              "answer": "Sum of the two smaller sides must exceed the largest.",
              "solution": "This implies the other two triangle inequalities automatically for positive sides."
            },
            {
              "topic": "Conditions",
              "difficulty": "Application",
              "question": "Can 6,8,14 be a non-degenerate triangle?",
              "answer": "No.",
              "solution": "6+8=14, equality gives a degenerate case."
            },
            {
              "topic": "Conditions",
              "difficulty": "HOTS",
              "question": "Why does Heron’s square-root expression become zero in a degenerate case?",
              "answer": "One factor s−largest side becomes zero.",
              "solution": "If c=a+b, then s=(a+b+c)/2=c, so s−c=0 and the product is zero."
            },
            {
              "topic": "Conditions",
              "difficulty": "Challenge",
              "question": "What happens if a supposed side length is 0?",
              "answer": "It is not a valid triangle side.",
              "solution": "A triangle requires three positive side lengths."
            }
          ]
        }
      ]
    },
    {
      "id": "semiperimeter",
      "title": "Semiperimeter and Formula Anatomy",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The semiperimeter is s=(a+b+c)/2. Heron’s expression contains four length factors: s, s−a, s−b and s−c. Their product has units of length⁴, so taking the square root gives length², the correct dimension for area. Organising these four factors in a small table is a reliable exam technique."
        },
        {
          "type": "example",
          "title": "13-14-15 table",
          "color": "orange",
          "text": "s=21; s−13=8; s−14=7; s−15=6; product=21×8×7×6=7056."
        },
        {
          "type": "example",
          "title": "5-6-7",
          "color": "orange",
          "text": "s=9; factors are 9,4,3,2; product=216; area=√216=6√6 cm²."
        },
        {
          "type": "example",
          "title": "Unit reasoning",
          "color": "orange",
          "text": "If all side lengths are in metres, every factor is in metres and the final area is in m²."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Semiperimeter and Formula Anatomy",
          "color": "purple",
          "questions": [
            {
              "topic": "Semiperimeter",
              "difficulty": "Basic",
              "question": "Find s for sides 11,13,14.",
              "answer": "19 cm.",
              "solution": "(11+13+14)/2=38/2=19."
            },
            {
              "topic": "Semiperimeter",
              "difficulty": "Understanding",
              "question": "Why is s not the full perimeter?",
              "answer": "It is exactly half the perimeter.",
              "solution": "Perimeter=a+b+c, while s=(a+b+c)/2."
            },
            {
              "topic": "Semiperimeter",
              "difficulty": "Application",
              "question": "Find area for 5,6,7.",
              "answer": "6√6 cm².",
              "solution": "s=9; √(9×4×3×2)=√216=6√6."
            },
            {
              "topic": "Semiperimeter",
              "difficulty": "HOTS",
              "question": "Why should exact radicals often be retained?",
              "answer": "They preserve exactness.",
              "solution": "A decimal approximation can lose information unless the question requests a decimal."
            },
            {
              "topic": "Semiperimeter",
              "difficulty": "Challenge",
              "question": "What are the dimensions of s(s−a)(s−b)(s−c) if sides are cm?",
              "answer": "cm⁴.",
              "solution": "Four length factors multiply to cm⁴; square root gives cm²."
            }
          ]
        }
      ]
    },
    {
      "id": "derivation",
      "title": "Derivation from Pythagoras and Base-Height Area",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Let a be the base and h its altitude. Let the altitude split a into x and a−x. Then b²=h²+x² and c²=h²+(a−x)². Subtracting gives x=(a²+b²−c²)/(2a). Substitute into h²=b²−x². Since Δ=1/2 ah, Δ²=a²h²/4. After algebraic factorisation using s=(a+b+c)/2, this becomes Δ²=s(s−a)(s−b)(s−c), hence Heron’s formula.\n\nThe derivation explains why the formula contains four factors and why it works for any valid triangle. In an exam, reproduce the full derivation only when requested; otherwise the compact formula is more efficient."
        },
        {
          "type": "example",
          "title": "Key algebra idea",
          "color": "orange",
          "text": "The expressions a+b+c, −a+b+c, a−b+c and a+b−c appear naturally and each equals twice one of s, s−a, s−b, s−c."
        },
        {
          "type": "example",
          "title": "Memory aid",
          "color": "orange",
          "text": "Think “half perimeter first, then subtract each side.”"
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Derivation from Pythagoras and Base-Height Area",
          "color": "purple",
          "questions": [
            {
              "topic": "Derivation",
              "difficulty": "Basic",
              "question": "What theorem supplies the right-triangle equations in the derivation?",
              "answer": "Pythagoras theorem.",
              "solution": "The altitude creates right triangles."
            },
            {
              "topic": "Derivation",
              "difficulty": "Understanding",
              "question": "Why is Δ² used during the derivation?",
              "answer": "Because Δ=ah/2, so squaring gives Δ²=a²h²/4 and removes the square root/height sign issue.",
              "solution": "This matches the algebra produced by Pythagoras."
            },
            {
              "topic": "Derivation",
              "difficulty": "Application",
              "question": "Write the formula after obtaining Δ²=s(s−a)(s−b)(s−c).",
              "answer": "Δ=√[s(s−a)(s−b)(s−c)].",
              "solution": "Take the positive square root because area is positive."
            },
            {
              "topic": "Derivation",
              "difficulty": "HOTS",
              "question": "What role does factorisation play?",
              "answer": "It converts a complicated expression into four semiperimeter-related factors.",
              "solution": "The factored form is exactly Heron’s structure."
            },
            {
              "topic": "Derivation",
              "difficulty": "Challenge",
              "question": "Outline the full derivation in five logical stages.",
              "answer": "Altitude → Pythagoras → solve base segment → compute h² → substitute into Δ² and factor.",
              "solution": "This is the conceptual chain behind the formula."
            }
          ]
        }
      ]
    },
    {
      "id": "worked",
      "title": "Solved Examples: Easy, Moderate, Difficult and HOTS",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Use the same routine every time: write the three sides, verify validity, compute s, calculate each difference, multiply, simplify the square root, and attach square units. If the result is not a perfect square, keep a simplified radical unless a decimal is required."
        },
        {
          "type": "example",
          "title": "Easy: 3,4,5",
          "color": "orange",
          "text": "s=6; area=√(6×3×2×1)=6 cm²."
        },
        {
          "type": "example",
          "title": "Moderate: 10,10,12",
          "color": "orange",
          "text": "s=16; area=√(16×6×6×4)=48 cm²."
        },
        {
          "type": "example",
          "title": "Difficult: 7,8,9",
          "color": "orange",
          "text": "s=12; area=√(12×5×4×3)=12√5 cm²."
        },
        {
          "type": "example",
          "title": "HOTS scaling",
          "color": "orange",
          "text": "If every side is multiplied by k, area is multiplied by k². Thus doubling every side quadruples area."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Solved Examples: Easy, Moderate, Difficult and HOTS",
          "color": "purple",
          "questions": [
            {
              "topic": "Worked",
              "difficulty": "Basic",
              "question": "Find area of sides 10,10,12.",
              "answer": "48 cm².",
              "solution": "s=16; √(16×6×6×4)=√2304=48."
            },
            {
              "topic": "Worked",
              "difficulty": "Understanding",
              "question": "Find area of 7,8,9.",
              "answer": "12√5 cm².",
              "solution": "s=12; √(12×5×4×3)=√720=12√5."
            },
            {
              "topic": "Worked",
              "difficulty": "Application",
              "question": "Find area of 13,14,15.",
              "answer": "84 cm².",
              "solution": "s=21; √(21×8×7×6)=84."
            },
            {
              "topic": "Worked",
              "difficulty": "HOTS",
              "question": "A triangle has sides 7,8,9. If all sides are doubled, what is the new area?",
              "answer": "48√5 cm².",
              "solution": "Original area=12√5. Scaling factor 2 gives area factor 4, so new area=48√5."
            },
            {
              "topic": "Worked",
              "difficulty": "Challenge",
              "question": "A quadrilateral is split by a diagonal into triangles (5,5,6) and (5,6,7). Find total area.",
              "answer": "12+6√6 cm².",
              "solution": "First triangle: s=8, area=12. Second: s=9, area=6√6. Add them."
            }
          ]
        }
      ]
    },
    {
      "id": "special-cases",
      "title": "Special Cases, Equilateral Triangle and Triangulation",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "For an equilateral triangle of side a, s=3a/2 and Heron simplifies to Δ=(√3/4)a². For a quadrilateral, draw a diagonal and add the areas of the two triangles. Heron can therefore become a component of larger area problems. When a right triangle is involved, compare the Heron answer with 1/2 bh as a check."
        },
        {
          "type": "example",
          "title": "Equilateral derivation",
          "color": "orange",
          "text": "s=3a/2; each s−a=a/2. Therefore Δ=√[(3a/2)(a/2)³]=√3a²/4."
        },
        {
          "type": "example",
          "title": "Triangulation principle",
          "color": "orange",
          "text": "Non-overlapping triangle areas add to the whole quadrilateral area."
        },
        {
          "type": "example",
          "title": "Cross-check",
          "color": "orange",
          "text": "For a 3-4-5 triangle, Heron gives 6 and base-height also gives 6."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Special Cases, Equilateral Triangle and Triangulation",
          "color": "purple",
          "questions": [
            {
              "topic": "Special",
              "difficulty": "Basic",
              "question": "Area of an equilateral triangle of side 12 cm?",
              "answer": "36√3 cm².",
              "solution": "Heron gives s=18; √(18×6×6×6)=36√3."
            },
            {
              "topic": "Special",
              "difficulty": "Understanding",
              "question": "Why can a quadrilateral be handled by two Heron calculations?",
              "answer": "A diagonal divides it into two triangles.",
              "solution": "The total area is the sum of non-overlapping parts."
            },
            {
              "topic": "Special",
              "difficulty": "Application",
              "question": "Find area of a triangle with sides 8,15,17 using Heron.",
              "answer": "60 cm².",
              "solution": "s=20; √(20×12×5×3)=√3600=60."
            },
            {
              "topic": "Special",
              "difficulty": "HOTS",
              "question": "Why does doubling side length quadruple area?",
              "answer": "Area has dimensions length².",
              "solution": "The scale factor for area is the square of the length scale factor."
            },
            {
              "topic": "Special",
              "difficulty": "Challenge",
              "question": "If all sides are multiplied by 1/2, what happens to area?",
              "answer": "It becomes one-fourth.",
              "solution": "Area scale=(1/2)²=1/4."
            }
          ]
        }
      ]
    },
    {
      "id": "error-check",
      "title": "Error Checking, Units and Exam Strategy",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A Heron solution can fail even when the arithmetic is neat. Check that the side lengths form a triangle, that s is greater than every individual side for a non-degenerate triangle, that all four factors are non-negative, and that the final unit is square units. Compare the size of the answer with a rough base-height estimate."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Error Checking, Units and Exam Strategy",
          "color": "purple",
          "questions": [
            {
              "topic": "Error check",
              "difficulty": "Basic",
              "question": "What unit should area have if sides are in cm?",
              "answer": "cm².",
              "solution": "Area is two-dimensional."
            },
            {
              "topic": "Error check",
              "difficulty": "Understanding",
              "question": "Can s−a be negative for a valid triangle?",
              "answer": "No.",
              "solution": "The triangle inequality implies a<s for each side."
            },
            {
              "topic": "Error check",
              "difficulty": "Application",
              "question": "A student uses s=a+b+c. What is wrong?",
              "answer": "They used the perimeter instead of semiperimeter.",
              "solution": "Correct s=(a+b+c)/2."
            },
            {
              "topic": "Error check",
              "difficulty": "HOTS",
              "question": "A computed area is 900 cm² for a triangle with all sides near 10 cm. Is it plausible?",
              "answer": "No.",
              "solution": "A triangle with sides near 10 cm has area on the order of tens of cm², so 900 signals an error."
            },
            {
              "topic": "Error check",
              "difficulty": "Challenge",
              "question": "Why does the positive square root represent the area?",
              "answer": "Area cannot be negative.",
              "solution": "After deriving Δ², take the non-negative square root."
            }
          ]
        }
      ]
    }
  ,
    {
      "id": "foundation",
      "title": "Ultra Detailed Foundation: What Heron Solves",
      "blocks": [
        {
          "type": "concept",
          "title": "Why a New Method Is Needed",
          "color": "blue",
          "text": "The familiar area formula Δ = 1/2 bh is powerful when a perpendicular height is known or can be found easily. But many Class 9 problems give only the three side lengths of a triangle. Heron's Formula provides a direct route from the three sides to the area. The key idea is not that the base-height formula is replaced; rather, Heron's Formula is a way of obtaining the same geometric area from different given information."
        },
        {
          "type": "concept",
          "title": "What the Formula Actually Needs",
          "color": "blue",
          "text": "Let the side lengths of a triangle be a, b and c. The three lengths must be positive and must satisfy the triangle inequality. Define the semiperimeter s = (a+b+c)/2. Then the area is Δ = √[s(s−a)(s−b)(s−c)]. Every symbol has a job: a, b, c are the side lengths; s is half the perimeter; and Δ denotes the area."
        },
        {
          "type": "example",
          "title": "Information-to-Method Decision",
          "color": "orange",
          "text": "If a problem gives base 12 cm and perpendicular height 7 cm, use Δ = 1/2 bh immediately. If it gives only 5 cm, 6 cm and 7 cm, Heron's Formula is especially convenient. If both methods are possible, either can be used, and one method can serve as a check for the other."
        },
        {
          "type": "tip",
          "title": "Exam Habit",
          "color": "green",
          "text": "Before writing a formula, list exactly what is given and what is required. This prevents the common mistake of choosing a formula merely because it is familiar."
        },
        {
          "type": "practice",
          "title": "Practice — Foundation",
          "color": "purple",
          "questions": [
            {
              "topic": "Foundation",
              "difficulty": "Basic",
              "question": "What three measurements are directly sufficient for Heron's Formula?",
              "answer": "The three side lengths of a valid triangle.",
              "solution": "Heron's Formula is designed for the SSS situation."
            },
            {
              "topic": "Foundation",
              "difficulty": "Understanding",
              "question": "Why is Heron's Formula useful when height is not given?",
              "answer": "It finds area directly from the three sides.",
              "solution": "No separate altitude calculation is required."
            },
            {
              "topic": "Foundation",
              "difficulty": "Application",
              "question": "Which method is simplest for b=10 cm and h=8 cm?",
              "answer": "Δ=1/2 bh.",
              "solution": "The perpendicular height is already known."
            },
            {
              "topic": "Foundation",
              "difficulty": "HOTS",
              "question": "Can Heron's Formula and 1/2 bh give different areas for the same triangle?",
              "answer": "No.",
              "solution": "Both describe the same geometric area; a disagreement indicates an error."
            },
            {
              "topic": "Foundation",
              "difficulty": "Challenge",
              "question": "What is the main decision before using Heron's Formula?",
              "answer": "Check that the side lengths form a valid triangle.",
              "solution": "The formula requires a genuine triangle with positive sides."
            }
          ]
        }
      ]
    },
    {
      "id": "symbol-by-symbol",
      "title": "Symbol-by-Symbol Anatomy of Heron's Formula",
      "blocks": [
        {
          "type": "concept",
          "title": "The Four Factors",
          "color": "blue",
          "text": "The expression s(s−a)(s−b)(s−c) contains four length factors. First calculate s. Then subtract each side from s separately. Do not confuse s−a with a−s. For a valid triangle, all four factors are positive for a non-degenerate triangle. The square root of their product gives the area."
        },
        {
          "type": "example",
          "title": "Example: Sides 13, 14, 15",
          "color": "orange",
          "text": "s=(13+14+15)/2=21. Therefore s−13=8, s−14=7 and s−15=6. The area is √(21×8×7×6)=√7056=84 cm². Notice that each subtraction uses the same semiperimeter."
        },
        {
          "type": "example",
          "title": "Unit Analysis",
          "color": "orange",
          "text": "If a, b and c are measured in cm, then s and each difference s−a, s−b and s−c are also measured in cm. Their product has unit cm⁴. Taking the square root gives cm², exactly the unit expected for area."
        },
        {
          "type": "tip",
          "title": "Reliable Working Table",
          "color": "green",
          "text": "For long calculations, write: s = ___; s−a = ___; s−b = ___; s−c = ___. Only then multiply. This makes missing-factor and subtraction errors much easier to spot."
        },
        {
          "type": "practice",
          "title": "Practice — Symbol Anatomy",
          "color": "purple",
          "questions": [
            {
              "topic": "Symbol Anatomy",
              "difficulty": "Basic",
              "question": "For sides 8, 10, 12, find s.",
              "answer": "15 cm.",
              "solution": "s=(8+10+12)/2=15."
            },
            {
              "topic": "Symbol Anatomy",
              "difficulty": "Understanding",
              "question": "For sides 8, 10, 12, find s−10.",
              "answer": "5 cm.",
              "solution": "15−10=5."
            },
            {
              "topic": "Symbol Anatomy",
              "difficulty": "Application",
              "question": "For sides 11, 13, 14, find all four factors.",
              "answer": "19, 8, 6, 5.",
              "solution": "s=19; subtract 11, 13 and 14."
            },
            {
              "topic": "Symbol Anatomy",
              "difficulty": "HOTS",
              "question": "Why must the final answer have square units?",
              "answer": "Because the quantity calculated is area.",
              "solution": "Area has dimensions length²."
            },
            {
              "topic": "Symbol Anatomy",
              "difficulty": "Challenge",
              "question": "If the sides are in metres, what unit does the product under the root have?",
              "answer": "m⁴.",
              "solution": "Four length factors are multiplied."
            }
          ]
        }
      ]
    },
    {
      "id": "validity",
      "title": "Triangle Inequality: Complete Validity Analysis",
      "blocks": [
        {
          "type": "concept",
          "title": "Three Inequalities",
          "color": "blue",
          "text": "For positive lengths a, b and c to form a non-degenerate triangle, a+b>c, b+c>a and c+a>b. In practice, identify the largest side. If the sum of the other two is greater than the largest, all three inequalities hold automatically for positive lengths. Equality gives a degenerate straight-line case; a smaller sum means no triangle exists."
        },
        {
          "type": "concept",
          "title": "Why Validity Matters Algebraically",
          "color": "blue",
          "text": "Heron's Formula contains s−a, s−b and s−c. The triangle inequalities ensure these quantities are positive for a genuine triangle. If the largest side equals the sum of the other two, one factor becomes zero and the area collapses to zero. If the largest side is greater, the proposed lengths cannot enclose a triangle."
        },
        {
          "type": "example",
          "title": "Valid: 7, 8, 9",
          "color": "orange",
          "text": "Largest side is 9 and 7+8=15>9, so the triple forms a valid triangle."
        },
        {
          "type": "example",
          "title": "Invalid: 4, 7, 12",
          "color": "orange",
          "text": "Largest side is 12 and 4+7=11<12. No triangle can be formed, so a positive area is impossible."
        },
        {
          "type": "example",
          "title": "Degenerate: 6, 8, 14",
          "color": "orange",
          "text": "6+8=14. The three lengths can lie on one straight line but cannot form a non-zero-area triangle."
        },
        {
          "type": "tip",
          "title": "Do Not Skip This Step",
          "color": "green",
          "text": "In an exam, if a side triple is unusual, show the inequality check before applying Heron's Formula. It demonstrates mathematical reasoning and can expose impossible data immediately."
        },
        {
          "type": "practice",
          "title": "Practice — Validity",
          "color": "purple",
          "questions": [
            {
              "topic": "Validity",
              "difficulty": "Basic",
              "question": "Can 5, 6, 7 form a triangle?",
              "answer": "Yes.",
              "solution": "5+6>7, and the other inequalities also hold."
            },
            {
              "topic": "Validity",
              "difficulty": "Understanding",
              "question": "Can 3, 4, 8 form a triangle?",
              "answer": "No.",
              "solution": "3+4<8."
            },
            {
              "topic": "Validity",
              "difficulty": "Application",
              "question": "Classify 9, 12, 21.",
              "answer": "Degenerate.",
              "solution": "9+12=21."
            },
            {
              "topic": "Validity",
              "difficulty": "HOTS",
              "question": "What happens to s−c when c=a+b?",
              "answer": "It becomes 0.",
              "solution": "Then s=(a+b+c)/2=c."
            },
            {
              "topic": "Validity",
              "difficulty": "Challenge",
              "question": "Why is checking only the two smaller sides enough after identifying the largest?",
              "answer": "If their sum exceeds the largest, the other two inequalities follow because all lengths are positive.",
              "solution": "For example, a+b>c with c largest implies b+c>a and c+a>b."
            }
          ]
        }
      ]
    },
    {
      "id": "algorithm",
      "title": "Master Algorithm: Heron's Formula Step by Step",
      "blocks": [
        {
          "type": "concept",
          "title": "Seven-Step Method",
          "color": "blue",
          "text": "Step 1: Write a, b and c with their units. Step 2: Identify the largest side and check the triangle inequality. Step 3: Calculate s=(a+b+c)/2. Step 4: Calculate s−a, s−b and s−c separately. Step 5: Substitute into Δ=√[s(s−a)(s−b)(s−c)]. Step 6: Simplify the square root exactly before using decimals. Step 7: Write square units and perform a rough reasonableness check."
        },
        {
          "type": "example",
          "title": "Full Worked Example: 9, 10, 17",
          "color": "orange",
          "text": "Largest side 17: 9+10=19>17, so valid. s=(9+10+17)/2=18. Factors: 18, 9, 8, 1. Therefore Δ=√(18×9×8×1)=√1296=36 cm². A quick check using 1/2×base×height is possible if the height is found separately."
        },
        {
          "type": "example",
          "title": "Full Worked Example: 7, 8, 9",
          "color": "orange",
          "text": "Validity: 7+8>9. Semiperimeter s=12. Differences: 5, 4 and 3. Product=12×5×4×3=720. Therefore Δ=√720=√(144×5)=12√5 cm², approximately 26.83 cm²."
        },
        {
          "type": "tip",
          "title": "Answer Presentation",
          "color": "green",
          "text": "Do not jump from the side lengths to the final number. A strong school solution shows s, the three differences, the substitution and the simplification. This also makes it easy to locate an arithmetic mistake."
        },
        {
          "type": "practice",
          "title": "Practice — Master Algorithm",
          "color": "purple",
          "questions": [
            {
              "topic": "Master Algorithm",
              "difficulty": "Basic",
              "question": "Find the area of 3, 4, 5 using the seven-step method.",
              "answer": "6 cm².",
              "solution": "s=6; factors 6,3,2,1; area=√36=6."
            },
            {
              "topic": "Master Algorithm",
              "difficulty": "Understanding",
              "question": "Find the area of 5, 6, 7.",
              "answer": "6√6 cm².",
              "solution": "s=9; product=9×4×3×2=216; √216=6√6."
            },
            {
              "topic": "Master Algorithm",
              "difficulty": "Application",
              "question": "Find the area of 9, 10, 17.",
              "answer": "36 cm².",
              "solution": "s=18; product=1296."
            },
            {
              "topic": "Master Algorithm",
              "difficulty": "HOTS",
              "question": "Why is it useful to simplify before converting to decimal?",
              "answer": "It preserves exactness and reduces rounding error.",
              "solution": "For example √720=12√5."
            },
            {
              "topic": "Master Algorithm",
              "difficulty": "Challenge",
              "question": "Create a valid integer-sided triangle whose Heron product is a perfect square and verify its area.",
              "answer": "Example: 3,4,5 gives product 36 and area 6.",
              "solution": "s=6 and 6×3×2×1=36."
            }
          ]
        }
      ]
    },
    {
      "id": "derivation-deep",
      "title": "Deep Derivation: From Base-Height Area to Heron",
      "blocks": [
        {
          "type": "concept",
          "title": "Set Up the Altitude",
          "color": "blue",
          "text": "Take a triangle with sides a, b and c. Draw an altitude h to side a. Let the altitude divide a into segments x and a−x. The two smaller triangles are right triangles. Therefore b²=h²+x² and c²=h²+(a−x)²."
        },
        {
          "type": "concept",
          "title": "Eliminate the Base Segment",
          "color": "blue",
          "text": "Subtract the two Pythagorean equations: c²−b²=(a−x)²−x²=a²−2ax. Rearranging gives x=(a²+b²−c²)/(2a). This expresses the unknown base segment entirely in terms of the three side lengths."
        },
        {
          "type": "concept",
          "title": "Connect to Area",
          "color": "blue",
          "text": "Because Δ=ah/2, we have Δ²=a²h²/4. From b²=h²+x², h²=b²−x². Substituting the expression for x and simplifying produces a factorised expression involving (a+b+c), (−a+b+c), (a−b+c) and (a+b−c). Each is twice a semiperimeter-related factor."
        },
        {
          "type": "concept",
          "title": "Final Factorisation",
          "color": "blue",
          "text": "Since 2s=a+b+c, 2(s−a)=−a+b+c, 2(s−b)=a−b+c and 2(s−c)=a+b−c, the algebra reduces to Δ²=s(s−a)(s−b)(s−c). Taking the non-negative square root gives Heron's Formula."
        },
        {
          "type": "tip",
          "title": "What to Remember for an Exam",
          "color": "green",
          "text": "The derivation is built from three ideas: altitude creates right triangles; Pythagoras removes the altitude; factorisation introduces the semiperimeter. The compact formula is then the final result."
        },
        {
          "type": "practice",
          "title": "Practice — Derivation",
          "color": "purple",
          "questions": [
            {
              "topic": "Derivation",
              "difficulty": "Basic",
              "question": "Which theorem is used after drawing the altitude?",
              "answer": "Pythagoras theorem.",
              "solution": "Each smaller triangle is right-angled."
            },
            {
              "topic": "Derivation",
              "difficulty": "Understanding",
              "question": "Why square the area during derivation?",
              "answer": "To work with h² from Pythagoras and avoid a square-root expression for h.",
              "solution": "Δ²=a²h²/4."
            },
            {
              "topic": "Derivation",
              "difficulty": "Application",
              "question": "Write x when side a is the base.",
              "answer": "x=(a²+b²−c²)/(2a).",
              "solution": "Subtract the two Pythagorean equations and rearrange."
            },
            {
              "topic": "Derivation",
              "difficulty": "HOTS",
              "question": "What does 2s equal?",
              "answer": "a+b+c.",
              "solution": "By definition s=(a+b+c)/2."
            },
            {
              "topic": "Derivation",
              "difficulty": "Challenge",
              "question": "Match a+b−c with a Heron factor.",
              "answer": "a+b−c=2(s−c).",
              "solution": "Use 2s=a+b+c and subtract 2c."
            }
          ]
        }
      ]
    },
    {
      "id": "special-triangles",
      "title": "Special Triangles and Simplifications",
      "blocks": [
        {
          "type": "concept",
          "title": "Equilateral Triangle",
          "color": "blue",
          "text": "For an equilateral triangle with side a, s=3a/2 and s−a=a/2 for each side. Heron's Formula becomes Δ=√[(3a/2)(a/2)(a/2)(a/2)] = (√3/4)a². This is a useful special result, but it comes from the general formula."
        },
        {
          "type": "concept",
          "title": "Right Triangle Cross-Check",
          "color": "blue",
          "text": "For a right triangle, the familiar area formula is 1/2×(one leg)×(other leg). Heron's Formula must give the same result. The 3-4-5 triangle is the simplest check: s=6 and Δ=√36=6 square units."
        },
        {
          "type": "example",
          "title": "Equilateral Side 12 cm",
          "color": "orange",
          "text": "Δ=(√3/4)(12²)=36√3 cm². Heron's method gives the same result."
        },
        {
          "type": "example",
          "title": "Right Triangle 5-12-13",
          "color": "orange",
          "text": "s=15; factors 15,10,3,2. Product=900, so Heron gives 30 cm², matching 1/2×5×12=30 cm²."
        },
        {
          "type": "practice",
          "title": "Practice — Special Triangles",
          "color": "purple",
          "questions": [
            {
              "topic": "Special Triangles",
              "difficulty": "Basic",
              "question": "Find the area of an equilateral triangle of side 10 cm.",
              "answer": "25√3 cm².",
              "solution": "Use (√3/4)a²."
            },
            {
              "topic": "Special Triangles",
              "difficulty": "Understanding",
              "question": "Why is 5-12-13 a right triangle?",
              "answer": "5²+12²=13².",
              "solution": "Pythagoras verifies it."
            },
            {
              "topic": "Special Triangles",
              "difficulty": "Application",
              "question": "Use Heron to find the area of 5,12,13.",
              "answer": "30 cm².",
              "solution": "s=15; √(15×10×3×2)=30."
            },
            {
              "topic": "Special Triangles",
              "difficulty": "HOTS",
              "question": "Why is the equilateral formula proportional to a²?",
              "answer": "Area scales with the square of length.",
              "solution": "If side is multiplied by k, area is multiplied by k²."
            },
            {
              "topic": "Special Triangles",
              "difficulty": "Challenge",
              "question": "Compare Heron and base-height methods for 3,4,5.",
              "answer": "Both give 6 cm².",
              "solution": "They are two routes to the same geometric area."
            }
          ]
        }
      ]
    },
    {
      "id": "quadrilateral",
      "title": "Using Heron's Formula Inside Quadrilateral Problems",
      "blocks": [
        {
          "type": "concept",
          "title": "Triangulation",
          "color": "blue",
          "text": "Heron's Formula applies to triangles, not directly to a general quadrilateral. To find the area of a quadrilateral when suitable side information is supplied, draw a diagonal. The diagonal divides the quadrilateral into two triangles. If the side lengths of both triangles are known, calculate each triangular area and add them."
        },
        {
          "type": "concept",
          "title": "Important Condition",
          "color": "blue",
          "text": "The diagonal is a shared side of both triangles. If its length is not given, it may need to be found by another theorem or additional information. Do not invent a diagonal length."
        },
        {
          "type": "example",
          "title": "Two-Triangle Example",
          "color": "orange",
          "text": "Suppose a quadrilateral is divided into triangles with sides 5,5,6 and 5,6,7. The first has s=8 and area 12. The second has s=9 and area 6√6. Therefore total area=12+6√6 square units."
        },
        {
          "type": "tip",
          "title": "Diagram Habit",
          "color": "green",
          "text": "Sketch the quadrilateral, mark the diagonal, label the two triangles and keep their calculations separate. This prevents mixing the side sets."
        },
        {
          "type": "practice",
          "title": "Practice — Quadrilateral Applications",
          "color": "purple",
          "questions": [
            {
              "topic": "Quadrilateral Applications",
              "difficulty": "Basic",
              "question": "What does a diagonal do to a quadrilateral?",
              "answer": "It divides it into two triangles.",
              "solution": "The two triangle areas can be added."
            },
            {
              "topic": "Quadrilateral Applications",
              "difficulty": "Understanding",
              "question": "Can Heron's Formula be applied directly to an arbitrary quadrilateral?",
              "answer": "No.",
              "solution": "Heron's Formula is a triangle-area formula."
            },
            {
              "topic": "Quadrilateral Applications",
              "difficulty": "Application",
              "question": "A quadrilateral is split into triangles of areas 20 cm² and 35 cm². Find its area.",
              "answer": "55 cm².",
              "solution": "Add the non-overlapping areas."
            },
            {
              "topic": "Quadrilateral Applications",
              "difficulty": "HOTS",
              "question": "Why must the shared diagonal be included in both triangle side sets?",
              "answer": "It is a side of each triangle.",
              "solution": "Each Heron calculation needs all three sides."
            },
            {
              "topic": "Quadrilateral Applications",
              "difficulty": "Challenge",
              "question": "If one triangle is valid but the second side triple is impossible, can the quadrilateral calculation continue?",
              "answer": "No.",
              "solution": "Both triangles must be geometrically valid."
            }
          ]
        }
      ]
    },
    {
      "id": "scaling",
      "title": "Scaling, Similarity and Area Relationships",
      "blocks": [
        {
          "type": "concept",
          "title": "Length Scale Versus Area Scale",
          "color": "blue",
          "text": "If every side of a triangle is multiplied by a positive factor k, every length becomes k times as large. Because area is two-dimensional, the area becomes k² times the original area. This is consistent with Heron's Formula: s becomes ks and every factor s−a, s−b, s−c also becomes k times as large; four factors contribute k⁴ and the square root gives k²."
        },
        {
          "type": "example",
          "title": "Doubling",
          "color": "orange",
          "text": "If a triangle has area 18 cm² and all sides are doubled, the new area is 2²×18=72 cm²."
        },
        {
          "type": "example",
          "title": "Tripling",
          "color": "orange",
          "text": "If all sides are tripled, area becomes 3²=9 times. A 20 cm² triangle becomes 180 cm²."
        },
        {
          "type": "example",
          "title": "Halving",
          "color": "orange",
          "text": "If all sides are halved, area becomes (1/2)²=1/4 of the original."
        },
        {
          "type": "practice",
          "title": "Practice — Scaling",
          "color": "purple",
          "questions": [
            {
              "topic": "Scaling",
              "difficulty": "Basic",
              "question": "If all sides double, what happens to area?",
              "answer": "It becomes four times.",
              "solution": "Area scale=2²."
            },
            {
              "topic": "Scaling",
              "difficulty": "Understanding",
              "question": "If all sides are multiplied by 5, what is the area factor?",
              "answer": "25.",
              "solution": "Area scale=5²."
            },
            {
              "topic": "Scaling",
              "difficulty": "Application",
              "question": "A triangle has area 48 cm². All sides are tripled. Find new area.",
              "answer": "432 cm².",
              "solution": "48×9=432."
            },
            {
              "topic": "Scaling",
              "difficulty": "HOTS",
              "question": "A new triangle has one-fourth the area of a similar original. What positive length scale factor is possible?",
              "answer": "1/2.",
              "solution": "(1/2)²=1/4."
            },
            {
              "topic": "Scaling",
              "difficulty": "Challenge",
              "question": "Why does Heron's structure itself prove the k² area rule?",
              "answer": "The four factors under the root each scale by k, giving k⁴ under the root and k² outside.",
              "solution": "√(k⁴P)=k²√P for positive k."
            }
          ]
        }
      ]
    },
    {
      "id": "radicals",
      "title": "Square Roots, Exact Answers and Numerical Accuracy",
      "blocks": [
        {
          "type": "concept",
          "title": "Simplifying Radicals",
          "color": "blue",
          "text": "When the product under the square root is not a perfect square, factor out the largest perfect-square factor. For example, √720=√(144×5)=12√5. The exact radical is normally preferable unless the question specifically asks for a decimal approximation."
        },
        {
          "type": "concept",
          "title": "Decimal Check",
          "color": "blue",
          "text": "A decimal can be useful as a reasonableness check. For example √5≈2.236, so 12√5≈26.83. The exact value remains 12√5. Do not replace the exact result with a rounded decimal too early."
        },
        {
          "type": "example",
          "title": "Perfect Square",
          "color": "orange",
          "text": "√7056=84, so the area for sides 13,14,15 is exactly 84 cm²."
        },
        {
          "type": "example",
          "title": "Non-Perfect Square",
          "color": "orange",
          "text": "√216=√(36×6)=6√6. This is the exact simplified form."
        },
        {
          "type": "practice",
          "title": "Practice — Radicals and Accuracy",
          "color": "purple",
          "questions": [
            {
              "topic": "Radicals and Accuracy",
              "difficulty": "Basic",
              "question": "Simplify √144.",
              "answer": "12.",
              "solution": "144 is 12²."
            },
            {
              "topic": "Radicals and Accuracy",
              "difficulty": "Understanding",
              "question": "Simplify √720.",
              "answer": "12√5.",
              "solution": "720=144×5."
            },
            {
              "topic": "Radicals and Accuracy",
              "difficulty": "Application",
              "question": "Write 6√6 approximately to two decimal places.",
              "answer": "14.70 approximately.",
              "solution": "√6≈2.449, so 6√6≈14.69–14.70 depending on rounding."
            },
            {
              "topic": "Radicals and Accuracy",
              "difficulty": "HOTS",
              "question": "Why can early rounding change a final answer?",
              "answer": "Rounding errors can accumulate.",
              "solution": "Exact forms avoid unnecessary approximation."
            },
            {
              "topic": "Radicals and Accuracy",
              "difficulty": "Challenge",
              "question": "Which is exact: 26.83 or 12√5?",
              "answer": "12√5.",
              "solution": "26.83 is only an approximation."
            }
          ]
        }
      ]
    },
    {
      "id": "reverse-problems",
      "title": "Reverse and Missing-Side Thinking",
      "blocks": [
        {
          "type": "concept",
          "title": "When Area Is Known",
          "color": "blue",
          "text": "Some advanced problems give the area and two sides and ask for a missing side. Substituting into Heron's Formula produces an equation involving a square root and the unknown side. At Class 9 level, such questions should be handled only when the resulting algebra is manageable or when an additional geometric condition is supplied."
        },
        {
          "type": "concept",
          "title": "Useful Reverse Reasoning",
          "color": "blue",
          "text": "For a fixed pair of sides, changing the third side changes the semiperimeter and therefore the area. Always check the allowed interval from the triangle inequality before solving for a missing side."
        },
        {
          "type": "example",
          "title": "Known Area: Strategy",
          "color": "orange",
          "text": "If sides are 5, 5 and x, first note 0<x<10. Then write s=(10+x)/2 and substitute into Heron's Formula. The resulting equation can be simplified before solving."
        },
        {
          "type": "tip",
          "title": "Do Not Guess",
          "color": "green",
          "text": "A missing side must satisfy both the numerical equation and the geometric triangle inequality. A positive algebraic root outside the valid interval is not an acceptable triangle side."
        },
        {
          "type": "practice",
          "title": "Practice — Reverse Problems",
          "color": "purple",
          "questions": [
            {
              "topic": "Reverse Problems",
              "difficulty": "Basic",
              "question": "For sides 5,5,x, what interval must x satisfy?",
              "answer": "0<x<10.",
              "solution": "The sum of the equal sides must exceed x and x must be positive."
            },
            {
              "topic": "Reverse Problems",
              "difficulty": "Understanding",
              "question": "Why check triangle inequality before solving?",
              "answer": "It restricts the geometrically possible values.",
              "solution": "Algebra alone can produce inadmissible values."
            },
            {
              "topic": "Reverse Problems",
              "difficulty": "Application",
              "question": "For sides 5,5,6, find s.",
              "answer": "8.",
              "solution": "(5+5+6)/2=8."
            },
            {
              "topic": "Reverse Problems",
              "difficulty": "HOTS",
              "question": "Can two different triangles with the same three side lengths have different areas?",
              "answer": "No.",
              "solution": "SSS fixes the triangle up to congruence/reflection."
            },
            {
              "topic": "Reverse Problems",
              "difficulty": "Challenge",
              "question": "Why does reflection not change Heron's area?",
              "answer": "Reflection preserves all side lengths and area.",
              "solution": "Heron's Formula depends only on the side lengths."
            }
          ]
        }
      ]
    },
    {
      "id": "comparisons",
      "title": "Concept Comparisons and Formula Selection",
      "blocks": [
        {
          "type": "table",
          "title": "Area Methods at a Glance",
          "columns": [
            "Given information",
            "Preferred method",
            "Key condition"
          ],
          "rows": [
            [
              "Base and perpendicular height",
              "Δ=1/2 bh",
              "Height must be perpendicular to the chosen base."
            ],
            [
              "Three side lengths",
              "Heron's Formula",
              "The side lengths must form a valid triangle."
            ],
            [
              "Equilateral triangle",
              "Δ=(√3/4)a²",
              "All three sides are equal."
            ],
            [
              "Right triangle",
              "Δ=1/2×leg₁×leg₂",
              "The two selected sides must be perpendicular."
            ]
          ]
        },
        {
          "type": "concept",
          "title": "Heron Versus Base-Height",
          "color": "blue",
          "text": "Base-height is often shorter when height is known. Heron is often shorter when all three sides are known. The best method depends on the information supplied, not on which formula looks more advanced."
        },
        {
          "type": "concept",
          "title": "Exact Versus Approximate",
          "color": "blue",
          "text": "Exact radical form communicates the precise mathematical value. Decimal form is useful for measurement, estimation or when specifically requested. If both are useful, write the exact value first and then the approximation."
        },
        {
          "type": "practice",
          "title": "Practice — Comparisons",
          "color": "purple",
          "questions": [
            {
              "topic": "Comparisons",
              "difficulty": "Basic",
              "question": "Which method is ideal for sides 6,8,10?",
              "answer": "Either Heron or right-triangle area; Heron works directly from the sides.",
              "solution": "The triangle is valid and right-angled."
            },
            {
              "topic": "Comparisons",
              "difficulty": "Understanding",
              "question": "Which method needs a perpendicular height?",
              "answer": "Base-height formula.",
              "solution": "Heron's Formula does not require height as an input."
            },
            {
              "topic": "Comparisons",
              "difficulty": "Application",
              "question": "For an equilateral side 14 cm, which special formula is quickest?",
              "answer": "(√3/4)a².",
              "solution": "All sides are equal."
            },
            {
              "topic": "Comparisons",
              "difficulty": "HOTS",
              "question": "Why is choosing a formula an information-matching task?",
              "answer": "Different formulas require different known quantities.",
              "solution": "A correct formula must fit the data."
            },
            {
              "topic": "Comparisons",
              "difficulty": "Challenge",
              "question": "If a problem gives all three sides and a height too, which method is safer?",
              "answer": "Either; use the simpler method and use the other as a check if needed.",
              "solution": "Both should agree."
            }
          ]
        }
      ]
    },
    {
      "id": "misconceptions",
      "title": "Common Mistakes, Misconceptions and Error Diagnosis",
      "blocks": [
        {
          "type": "concept",
          "title": "Mistake 1: Using Perimeter Instead of Semiperimeter",
          "color": "blue",
          "text": "Wrong: s=a+b+c. Correct: s=(a+b+c)/2. Heron's Formula specifically uses half the perimeter."
        },
        {
          "type": "concept",
          "title": "Mistake 2: Forgetting One Factor",
          "color": "blue",
          "text": "The formula has four factors: s, s−a, s−b and s−c. Omitting one changes the answer completely."
        },
        {
          "type": "concept",
          "title": "Mistake 3: Wrong Units",
          "color": "blue",
          "text": "If side lengths are in cm, area must be in cm², not cm. If lengths are in m, area is m²."
        },
        {
          "type": "concept",
          "title": "Mistake 4: Ignoring Validity",
          "color": "blue",
          "text": "Never force Heron's Formula onto an impossible side triple. Check the largest-side inequality first."
        },
        {
          "type": "concept",
          "title": "Mistake 5: Premature Rounding",
          "color": "blue",
          "text": "Keep exact radicals until the final stage. Early rounding may produce an inaccurate final value."
        },
        {
          "type": "example",
          "title": "Error Diagnosis",
          "color": "orange",
          "text": "A student calculates s=42 for sides 12,14,16. The correct s is 21. Since every later factor depends on s, the entire solution becomes wrong. The first checkpoint catches the error."
        },
        {
          "type": "practice",
          "title": "Practice — Error Diagnosis",
          "color": "purple",
          "questions": [
            {
              "topic": "Error Diagnosis",
              "difficulty": "Basic",
              "question": "What is wrong with s=a+b+c?",
              "answer": "It is the perimeter, not the semiperimeter.",
              "solution": "Divide by 2."
            },
            {
              "topic": "Error Diagnosis",
              "difficulty": "Understanding",
              "question": "What is wrong with an answer of 25 cm for an area?",
              "answer": "The unit should be square units.",
              "solution": "Area is two-dimensional."
            },
            {
              "topic": "Error Diagnosis",
              "difficulty": "Application",
              "question": "A student omits s−b. What should be checked?",
              "answer": "All four factors must appear.",
              "solution": "Heron's product is s(s−a)(s−b)(s−c)."
            },
            {
              "topic": "Error Diagnosis",
              "difficulty": "HOTS",
              "question": "A proposed answer is larger than the area of a rough bounding rectangle. What does that suggest?",
              "answer": "An error is likely.",
              "solution": "The triangle cannot have more area than an appropriate enclosing rectangle."
            },
            {
              "topic": "Error Diagnosis",
              "difficulty": "Challenge",
              "question": "Why is a validity check also an error-detection tool?",
              "answer": "It tests the data before arithmetic begins.",
              "solution": "Impossible geometry cannot yield a genuine positive triangle area."
            }
          ]
        }
      ]
    },
    {
      "id": "hottest",
      "title": "HOTS and Challenge Reasoning",
      "blocks": [
        {
          "type": "concept",
          "title": "Area Is Determined by the Three Sides",
          "color": "blue",
          "text": "SSS determines a triangle up to congruence and reflection. Reflection changes orientation but not side lengths or area. Therefore Heron's Formula gives the same area for a triangle and its mirror image."
        },
        {
          "type": "concept",
          "title": "Maximum Area Insight",
          "color": "blue",
          "text": "For fixed side lengths of two sides, the area is largest when the included angle is 90°. This connects the side-based viewpoint of Heron with the angle-based formula Δ=1/2 bc sin A. At Class 9 level, this is useful as a reasoning connection rather than a required derivation."
        },
        {
          "type": "concept",
          "title": "Dimensional Reasoning",
          "color": "blue",
          "text": "The product inside Heron's square root contains four lengths, so it has fourth-power length units. The square root reduces that to squared length. Dimensional reasoning can therefore catch a missing factor or incorrect unit."
        },
        {
          "type": "practice",
          "title": "Practice — HOTS and Challenge",
          "color": "purple",
          "questions": [
            {
              "topic": "HOTS and Challenge",
              "difficulty": "Basic",
              "question": "Does reflecting a triangle change its area?",
              "answer": "No.",
              "solution": "Reflection preserves lengths and area."
            },
            {
              "topic": "HOTS and Challenge",
              "difficulty": "Understanding",
              "question": "Why can Heron's Formula work for an obtuse triangle?",
              "answer": "It depends only on the side lengths.",
              "solution": "No interior altitude is required as an input."
            },
            {
              "topic": "HOTS and Challenge",
              "difficulty": "Application",
              "question": "If area is 30 cm² and all sides are doubled, what is the new area?",
              "answer": "120 cm².",
              "solution": "Multiply by 4."
            },
            {
              "topic": "HOTS and Challenge",
              "difficulty": "HOTS",
              "question": "Why does the area become zero at degeneracy?",
              "answer": "The three points become collinear and one Heron factor becomes zero.",
              "solution": "A straight-line figure encloses no region."
            },
            {
              "topic": "HOTS and Challenge",
              "difficulty": "Challenge",
              "question": "Explain in one chain why scaling all sides by k gives area k².",
              "answer": "s and all three differences scale by k; the product under the root scales by k⁴; the square root scales by k².",
              "solution": "This follows directly from Heron's structure."
            }
          ]
        }
      ]
    },
    {
      "id": "exam-master",
      "title": "Exam Master Revision and Final Checklist",
      "blocks": [
        {
          "type": "concept",
          "title": "One-Minute Recall",
          "color": "blue",
          "text": "Heron's Formula: s=(a+b+c)/2 and Δ=√[s(s−a)(s−b)(s−c)]. Check the triangle inequality. Keep units consistent. Show working. Simplify radicals exactly. Area uses square units."
        },
        {
          "type": "concept",
          "title": "Five-Point Checklist",
          "color": "blue",
          "text": "1. Are the three sides positive? 2. Do they form a triangle? 3. Did I divide the perimeter by 2? 4. Did I use all four Heron factors? 5. Did I write square units and check the size of my answer?"
        },
        {
          "type": "tip",
          "title": "High-Scoring Presentation",
          "color": "green",
          "text": "Use a clean sequence: Given → condition check → s → factors → formula → substitution → simplification → units → final statement. This is concise but complete."
        },
        {
          "type": "practice",
          "title": "Practice — Final Revision",
          "color": "purple",
          "questions": [
            {
              "topic": "Final Revision",
              "difficulty": "Basic",
              "question": "State Heron's Formula.",
              "answer": "Δ=√[s(s−a)(s−b)(s−c)], where s=(a+b+c)/2.",
              "solution": "This is the standard formula."
            },
            {
              "topic": "Final Revision",
              "difficulty": "Understanding",
              "question": "What must be checked before substitution?",
              "answer": "Triangle validity.",
              "solution": "The side lengths must satisfy the triangle inequality."
            },
            {
              "topic": "Final Revision",
              "difficulty": "Application",
              "question": "Find area for 13,14,15.",
              "answer": "84 cm².",
              "solution": "s=21 and product=7056."
            },
            {
              "topic": "Final Revision",
              "difficulty": "HOTS",
              "question": "Why should a final area be checked approximately?",
              "answer": "To detect unreasonable arithmetic.",
              "solution": "A rough estimate can reveal a major mistake."
            },
            {
              "topic": "Final Revision",
              "difficulty": "Challenge",
              "question": "Give the complete solution sequence for any Heron problem.",
              "answer": "Given sides → validity → semiperimeter → three differences → substitution → simplify → square units → check.",
              "solution": "This is the reliable exam algorithm."
            }
          ]
        }
      ]
    },
    {
      "id": "extra-worked",
      "title": "Extended Solved Examples: From Routine to Exam-Level",
      "blocks": [
        {
          "type": "example",
          "title": "Worked Example A — 6, 8, 10",
          "color": "orange",
          "text": "For 6,8,10, s=12. Factors are 12,6,4,2. Area=√576=24 cm². This agrees with 1/2×6×8=24 cm²."
        },
        {
          "type": "example",
          "title": "Worked Example B — 9, 12, 15",
          "color": "orange",
          "text": "For 9,12,15, s=18. Factors 18,9,6,3 give √2916=54 cm². Since it is a scaled 3-4-5 triangle, the result is also consistent with base-height."
        },
        {
          "type": "example",
          "title": "Worked Example C — 10, 13, 13",
          "color": "orange",
          "text": "s=18. Factors 18,8,5,5 give √3600=60 cm². Equal sides make the triangle isosceles, but Heron still uses exactly the same formula."
        },
        {
          "type": "example",
          "title": "Worked Example D — 11, 13, 20",
          "color": "orange",
          "text": "s=22. Factors 22,11,9,2. Product=4356, so area=66 cm². The largest-side check is 11+13=24>20."
        },
        {
          "type": "example",
          "title": "Worked Example E — 7, 24, 25",
          "color": "orange",
          "text": "s=28. Factors 28,21,4,3. Product=7056, so area=84 cm², matching 1/2×7×24."
        },
        {
          "type": "example",
          "title": "Worked Example F — 12, 16, 20",
          "color": "orange",
          "text": "s=24. Factors 24,12,8,4. Product=9216, area=96 cm². This is a scaled 3-4-5 triangle."
        },
        {
          "type": "example",
          "title": "Worked Example G — 5, 5, 8",
          "color": "orange",
          "text": "s=9. Factors 9,4,4,1. Area=√144=12 cm². The equal sides show the triangle is isosceles, but no special isosceles formula is necessary."
        },
        {
          "type": "example",
          "title": "Worked Example H — 13, 13, 10",
          "color": "orange",
          "text": "s=18. Factors 18,5,5,8. Product=3600, area=60 cm². Reordering the side labels does not change the result."
        },
        {
          "type": "example",
          "title": "Worked Example I — 8, 9, 13",
          "color": "orange",
          "text": "s=15. Factors 15,7,6,2. Product=1260, so area=√1260=6√35 cm²."
        },
        {
          "type": "example",
          "title": "Worked Example J — 9, 10, 11",
          "color": "orange",
          "text": "s=15. Factors 15,6,5,4. Product=1800, area=30√2 cm²."
        },
        {
          "type": "tip",
          "title": "Pattern Recognition",
          "color": "green",
          "text": "When a triangle is a scaled version of a familiar right triangle, use the scaling rule as a check. Do not use pattern recognition as a substitute for the required method if the question specifically asks for Heron's Formula."
        },
        {
          "type": "practice",
          "title": "Practice — Extended Examples",
          "color": "purple",
          "questions": [
            {
              "topic": "Extended Examples",
              "difficulty": "Basic",
              "question": "Find the area of 6,8,10.",
              "answer": "24 cm².",
              "solution": "s=12; √(12×6×4×2)=24."
            },
            {
              "topic": "Extended Examples",
              "difficulty": "Understanding",
              "question": "Find the area of 5,5,8.",
              "answer": "12 cm².",
              "solution": "s=9; √(9×4×4×1)=12."
            },
            {
              "topic": "Extended Examples",
              "difficulty": "Application",
              "question": "Find the area of 11,13,20.",
              "answer": "66 cm².",
              "solution": "s=22; √(22×11×9×2)=66."
            },
            {
              "topic": "Extended Examples",
              "difficulty": "HOTS",
              "question": "Find the area of 8,9,13 in exact form.",
              "answer": "6√35 cm².",
              "solution": "s=15; √(15×7×6×2)=√1260=6√35."
            },
            {
              "topic": "Extended Examples",
              "difficulty": "Challenge",
              "question": "Explain why 13,13,10 and 10,13,13 give the same area.",
              "answer": "The side set is identical; relabelling does not change the product.",
              "solution": "Heron's formula is symmetric in the three side lengths."
            }
          ]
        }
      ]
    }
  ],
  "detailLevel": "Ultra Detailed — 2x+ expansion",
  "expansionNote": "Existing chapter data preserved; additional renderer-compatible sections and practice were appended.",
  "aliases": [
    "9-mathematics-heron-s-formula",
    "class9-mathematics-heron-s-formula",
    "class9-mathematics-herons-formula"
  ],
  "renderCompatibility": {
    "rendererStyle": "ConceptQizzer ChapterData",
    "answerReveal": "show-answer",
    "tables": "native-renderer-tables",
    "rawJSONForStudents": false
  },
  "deepExpansion5X": [
  {
    "id": "chapter-10-deep-expansion-5x",
    "title": "5× Minimum Detailed Expansion — Same Format as Chapters 5–8",
    "blocks": [
      {
        "type": "concept",
        "title": "1. Heron's formula purpose — Deep Concept",
        "color": "blue",
        "text": "Heron's formula gives the area of a triangle when all three side lengths are known. It is especially useful when height is not directly given. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "1. Heron's formula purpose — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "1. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Heron's formula purpose",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Heron's formula purpose.",
            "answer": "State the standard Class 9 result for Heron's formula purpose.",
            "solution": "Heron's formula gives the area of a triangle when all three side lengths are known. It is especially useful when height is not directly given."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Heron's formula purpose important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Heron's formula purpose.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Heron's formula purpose.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Heron's formula purpose.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "2. Semiperimeter — Deep Concept",
        "color": "blue",
        "text": "The semiperimeter s of a triangle with sides a, b and c is s=(a+b+c)/2. It is half the perimeter and is a central quantity in Heron's formula. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "2. Semiperimeter — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "2. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Semiperimeter",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Semiperimeter.",
            "answer": "State the standard Class 9 result for Semiperimeter.",
            "solution": "The semiperimeter s of a triangle with sides a, b and c is s=(a+b+c)/2. It is half the perimeter and is a central quantity in Heron's formula."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Semiperimeter important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Semiperimeter.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Semiperimeter.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Semiperimeter.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "3. Heron's formula — Deep Concept",
        "color": "blue",
        "text": "For side lengths a, b and c and semiperimeter s, the area K is √[s(s−a)(s−b)(s−c)]. Every symbol has a precise meaning and the side lengths must form a valid triangle. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "3. Heron's formula — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "3. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Heron's formula",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Heron's formula.",
            "answer": "State the standard Class 9 result for Heron's formula.",
            "solution": "For side lengths a, b and c and semiperimeter s, the area K is √[s(s−a)(s−b)(s−c)]. Every symbol has a precise meaning and the side lengths must form a valid triangle."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Heron's formula important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Heron's formula.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Heron's formula.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Heron's formula.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "4. Why triangle validity matters — Deep Concept",
        "color": "blue",
        "text": "Heron's formula assumes a real triangle. The triangle inequality requires a+b>c, b+c>a and c+a>b. If these fail, the expression cannot represent the area of a real triangle. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "4. Why triangle validity matters — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "4. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Why triangle validity matters",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Why triangle validity matters.",
            "answer": "State the standard Class 9 result for Why triangle validity matters.",
            "solution": "Heron's formula assumes a real triangle. The triangle inequality requires a+b>c, b+c>a and c+a>b. If these fail, the expression cannot represent the area of a real triangle."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Why triangle validity matters important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Why triangle validity matters.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Why triangle validity matters.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Why triangle validity matters.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "5. Step-by-step substitution — Deep Concept",
        "color": "blue",
        "text": "The safest method is: write a,b,c; calculate perimeter; calculate s; calculate s−a, s−b, s−c; substitute into the formula; simplify the product; take the square root; attach square units. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "5. Step-by-step substitution — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "5. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Step-by-step substitution",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Step-by-step substitution.",
            "answer": "State the standard Class 9 result for Step-by-step substitution.",
            "solution": "The safest method is: write a,b,c; calculate perimeter; calculate s; calculate s−a, s−b, s−c; substitute into the formula; simplify the product; take the square root; attach square units."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Step-by-step substitution important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Step-by-step substitution.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Step-by-step substitution.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Step-by-step substitution.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "6. Perfect-square simplification — Deep Concept",
        "color": "blue",
        "text": "Many school problems are designed so the quantity under the square root is a perfect square. Factorisation helps simplify expressions such as √(144)=12 or √(180)=6√5. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "6. Perfect-square simplification — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "6. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Perfect-square simplification",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Perfect-square simplification.",
            "answer": "State the standard Class 9 result for Perfect-square simplification.",
            "solution": "Many school problems are designed so the quantity under the square root is a perfect square. Factorisation helps simplify expressions such as √(144)=12 or √(180)=6√5."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Perfect-square simplification important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Perfect-square simplification.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Perfect-square simplification.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Perfect-square simplification.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "7. Equilateral triangle connection — Deep Concept",
        "color": "blue",
        "text": "For an equilateral triangle of side a, Heron's formula gives the familiar area √3/4 a². This demonstrates how a general formula can reduce to a special-case formula. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "7. Equilateral triangle connection — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "7. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Equilateral triangle connection",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Equilateral triangle connection.",
            "answer": "State the standard Class 9 result for Equilateral triangle connection.",
            "solution": "For an equilateral triangle of side a, Heron's formula gives the familiar area √3/4 a². This demonstrates how a general formula can reduce to a special-case formula."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Equilateral triangle connection important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Equilateral triangle connection.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Equilateral triangle connection.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Equilateral triangle connection.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "8. Isosceles triangle use — Deep Concept",
        "color": "blue",
        "text": "When two sides are equal, Heron's formula can calculate the area without explicitly constructing the altitude. It provides an alternate route to the base-height method. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "8. Isosceles triangle use — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "8. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Isosceles triangle use",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Isosceles triangle use.",
            "answer": "State the standard Class 9 result for Isosceles triangle use.",
            "solution": "When two sides are equal, Heron's formula can calculate the area without explicitly constructing the altitude. It provides an alternate route to the base-height method."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Isosceles triangle use important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Isosceles triangle use.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Isosceles triangle use.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Isosceles triangle use.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "9. Comparing Heron with base-height — Deep Concept",
        "color": "blue",
        "text": "Base-height is usually fastest when a height is known or easily found. Heron's formula is powerful when all three sides are known but the height is not. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "9. Comparing Heron with base-height — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "9. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Comparing Heron with base-height",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Comparing Heron with base-height.",
            "answer": "State the standard Class 9 result for Comparing Heron with base-height.",
            "solution": "Base-height is usually fastest when a height is known or easily found. Heron's formula is powerful when all three sides are known but the height is not."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Comparing Heron with base-height important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Comparing Heron with base-height.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Comparing Heron with base-height.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Comparing Heron with base-height.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "10. Perimeter and semiperimeter — Deep Concept",
        "color": "blue",
        "text": "Perimeter is a+b+c while semiperimeter is half of it. Confusing these two produces a completely different result and is a common exam error. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "10. Perimeter and semiperimeter — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "10. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Perimeter and semiperimeter",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Perimeter and semiperimeter.",
            "answer": "State the standard Class 9 result for Perimeter and semiperimeter.",
            "solution": "Perimeter is a+b+c while semiperimeter is half of it. Confusing these two produces a completely different result and is a common exam error."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Perimeter and semiperimeter important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Perimeter and semiperimeter.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Perimeter and semiperimeter.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Perimeter and semiperimeter.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "11. Unit discipline — Deep Concept",
        "color": "blue",
        "text": "If side lengths are in cm, the calculated area is in cm². If lengths are in m, area is in m². Do not attach linear units to an area answer. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "11. Unit discipline — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "11. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Unit discipline",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Unit discipline.",
            "answer": "State the standard Class 9 result for Unit discipline.",
            "solution": "If side lengths are in cm, the calculated area is in cm². If lengths are in m, area is in m². Do not attach linear units to an area answer."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Unit discipline important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Unit discipline.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Unit discipline.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Unit discipline.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "12. Reverse reasoning — Deep Concept",
        "color": "blue",
        "text": "If area and two sides are known, Heron's formula can sometimes be rearranged, but Class 9 questions usually focus on using the formula forward. Rearrangement requires careful algebra and valid constraints. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "12. Reverse reasoning — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "12. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Reverse reasoning",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Reverse reasoning.",
            "answer": "State the standard Class 9 result for Reverse reasoning.",
            "solution": "If area and two sides are known, Heron's formula can sometimes be rearranged, but Class 9 questions usually focus on using the formula forward. Rearrangement requires careful algebra and valid constraints."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Reverse reasoning important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Reverse reasoning.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Reverse reasoning.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Reverse reasoning.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "13. Numerical accuracy — Deep Concept",
        "color": "blue",
        "text": "Do not round intermediate values unnecessarily. Keep exact fractions and radicals where possible, then approximate only if the question asks for a decimal. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "13. Numerical accuracy — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "13. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Numerical accuracy",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Numerical accuracy.",
            "answer": "State the standard Class 9 result for Numerical accuracy.",
            "solution": "Do not round intermediate values unnecessarily. Keep exact fractions and radicals where possible, then approximate only if the question asks for a decimal."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Numerical accuracy important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Numerical accuracy.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Numerical accuracy.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Numerical accuracy.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "14. HOTS comparison — Deep Concept",
        "color": "blue",
        "text": "Two triangles can have the same perimeter but different areas. Heron's formula makes it possible to test this numerically rather than relying on visual judgement. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "14. HOTS comparison — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "14. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — HOTS comparison",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to HOTS comparison.",
            "answer": "State the standard Class 9 result for HOTS comparison.",
            "solution": "Two triangles can have the same perimeter but different areas. Heron's formula makes it possible to test this numerically rather than relying on visual judgement."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in HOTS comparison important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on HOTS comparison.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about HOTS comparison.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving HOTS comparison.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "15. Common mistakes — Deep Concept",
        "color": "blue",
        "text": "Typical errors include using perimeter instead of semiperimeter, forgetting one factor, taking the square root too early, using invalid side lengths, and omitting square units. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "15. Common mistakes — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "15. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Common mistakes",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Common mistakes.",
            "answer": "State the standard Class 9 result for Common mistakes.",
            "solution": "Typical errors include using perimeter instead of semiperimeter, forgetting one factor, taking the square root too early, using invalid side lengths, and omitting square units."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Common mistakes important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Common mistakes.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Common mistakes.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Common mistakes.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      }
    ]
  }
],
  "revisionLabs5X": [
  {
    "type": "concept",
    "title": "Revision Lab 1 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 1 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 1 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 2 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 2 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 2 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 3 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 3 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 3 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 4 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 4 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 4 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 5 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 5 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 5 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 6 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 6 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 6 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 7 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 7 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 7 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 8 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 8 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 8 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 9 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 9 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 9 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 10 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 10 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 10 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 11 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 11 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 11 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 12 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 12 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 12 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 13 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 13 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 13 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 14 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 14 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 14 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 15 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 15 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 15 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 16 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 16 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 16 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 17 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 17 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 17 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 18 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 18 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 18 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 19 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 19 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 19 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 20 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 20 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 20 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 21 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 21 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 21 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 22 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 22 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 22 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 23 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 23 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 23 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 24 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 24 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 24 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 25 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 25 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 25 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 26 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 26 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 26 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 27 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 27 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 27 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 28 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 28 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 28 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 29 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 29 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 29 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 30 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 30 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 30 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 31 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 31 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 31 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 32 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 32 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 32 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 33 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 33 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 33 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 34 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 34 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 34 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 35 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 35 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 35 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 36 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 36 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 36 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 37 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 37 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 37 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 38 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 38 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 38 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 39 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 39 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 39 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 40 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 40 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 40 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 41 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 41 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 41 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 42 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 42 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 42 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 43 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 43 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 43 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 44 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 44 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 44 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 45 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 45 for Chapter 10: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 45 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  }
],
  "examinerDrills5X": [
  {
    "type": "exam",
    "title": "Examiner Drill 1",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 2",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 3",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 4",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 5",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 6",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 7",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 8",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 9",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 10",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 11",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 12",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 13",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 14",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 15",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 16",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 17",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 18",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 19",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 20",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 21",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 22",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 23",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 24",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 25",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 26",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 27",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 28",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 29",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 30",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 31",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 32",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 33",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 34",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 35",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 36",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 37",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 38",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 39",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 40",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 41",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 42",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 43",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 44",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 45",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 46",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 47",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 48",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 49",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 50",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 51",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 52",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 53",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 54",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 55",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 56",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 57",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 58",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 59",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 60",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 61",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 62",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 63",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 64",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 65",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 66",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 67",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 68",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 69",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 70",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 71",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 72",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 73",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 74",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 75",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 76",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 77",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 78",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 79",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 80",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 81",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 82",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 83",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 84",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 85",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 86",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 87",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 88",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 89",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 90",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 91",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 92",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 93",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 94",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 95",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 96",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 97",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 98",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 99",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 100",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 101",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 102",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 103",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 104",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 105",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 106",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 107",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 108",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 109",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 110",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 111",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 112",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 113",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 114",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 115",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 116",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 117",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 118",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 119",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 120",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 121",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 122",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 123",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 124",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 125",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 126",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 127",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 128",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 129",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 130",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 131",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 132",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 133",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 134",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 135",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 136",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 137",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 138",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 139",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 140",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 141",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 142",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 143",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 144",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 145",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 146",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 147",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 148",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 149",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 150",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 151",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 152",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 153",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 154",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 155",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 156",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 157",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 158",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 159",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 160",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 161",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 162",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 163",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 164",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 165",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 166",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 167",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 168",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 169",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 170",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 171",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 172",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 173",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 174",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 175",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 176",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 177",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 178",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 179",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 180",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 181",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 182",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 183",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 184",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 185",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 186",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 187",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 188",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 189",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 190",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 191",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 192",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 193",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 194",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 195",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 196",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 197",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 198",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 199",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 200",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 201",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 202",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 203",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 204",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 205",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 206",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 207",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 208",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 209",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 210",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 211",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 212",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 213",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 214",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 215",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 216",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 217",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 218",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 219",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 220",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 221",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 222",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 223",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 224",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 225",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 226",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 227",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 228",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 229",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 230",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 231",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 232",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 233",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 234",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 235",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 236",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 237",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 238",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 239",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 240",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 241",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 242",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 243",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 244",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 245",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 246",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 247",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 248",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 249",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 250",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 251",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 252",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 253",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 254",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 255",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 256",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 257",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 258",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 259",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 260",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 261",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 262",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 263",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 264",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 265",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 266",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 267",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 268",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 269",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 270",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 271",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 272",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 273",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 274",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 275",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 276",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 277",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 278",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 279",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 280",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 281",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 282",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 283",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 284",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 285",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 286",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 287",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 288",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 289",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 290",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 291",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 292",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 293",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 294",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 295",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 296",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 297",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 298",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 299",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 300",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 301",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 302",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 303",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 304",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 305",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 306",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 307",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 308",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 309",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 310",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 311",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 312",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 313",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 314",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 315",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 316",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 317",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 318",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 319",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 320",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 321",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 322",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 323",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 324",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 325",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 326",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 327",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 328",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 329",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 330",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 331",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 332",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 333",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 334",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 335",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 336",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 337",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 338",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 339",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 340",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 341",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 342",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 343",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 344",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 345",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 346",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 347",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 348",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 349",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 350",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 351",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 352",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 353",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 354",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 355",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 356",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 357",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 358",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 359",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 360",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 361",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 362",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 363",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 364",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 365",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 366",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 367",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 368",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 369",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 370",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 371",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 372",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 373",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 374",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 375",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 376",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 377",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 378",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 379",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 380",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 381",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 382",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 383",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 384",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 385",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 386",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 387",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 388",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 389",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 390",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 391",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 392",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 393",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 394",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 395",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 396",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 397",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 398",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 399",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 400",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 401",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 402",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 403",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 404",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 405",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 406",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 407",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 408",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 409",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 410",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 411",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 412",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 413",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 414",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 415",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 416",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 417",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 418",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 419",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 420",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 421",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 422",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 423",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 424",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 425",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 426",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 427",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 428",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 429",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 430",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 431",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 432",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 433",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 434",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 435",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 436",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 437",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 438",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 439",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 440",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 441",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 442",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 443",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 444",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 445",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 446",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 447",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 448",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 449",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 450",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 451",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 452",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 453",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 454",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 455",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 456",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 457",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 458",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 459",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 460",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 461",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 462",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 463",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 464",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 465",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 466",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 467",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 468",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 469",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 470",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 471",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 472",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 473",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 474",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 475",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 476",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 477",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 478",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 479",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 480",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 481",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 482",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 483",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 484",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 485",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 486",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 487",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 488",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 489",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 490",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 491",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 492",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 493",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 494",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 495",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 496",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 497",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 498",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 499",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 500",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 501",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 502",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 503",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 504",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 505",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 506",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 507",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 508",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 509",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 510",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 511",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 512",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 513",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 514",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 515",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 516",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 517",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 518",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 519",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 520",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 521",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 522",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 523",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 524",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 525",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 526",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 527",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 528",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 529",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 530",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 531",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 532",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 533",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 534",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 535",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 536",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 537",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 538",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 539",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 540",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 541",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 542",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 543",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 544",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 545",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 546",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 547",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 548",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 549",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 550",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 551",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 552",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 553",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 554",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 555",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 556",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 557",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 558",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 559",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 560",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 561",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 562",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 563",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 564",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 565",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 566",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 567",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 568",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 569",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 570",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 571",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 572",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 573",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 574",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 575",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 576",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 577",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 578",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 579",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 580",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 581",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 582",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 583",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 584",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 585",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 586",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 587",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 588",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 589",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 590",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 591",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 592",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 593",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 594",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 595",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 596",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 597",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 598",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 599",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 600",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 601",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 602",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 603",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 604",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 605",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 606",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 607",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 608",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 609",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 610",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 611",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 612",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 613",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 614",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 615",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 616",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 617",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 618",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 619",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 620",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 621",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 622",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 623",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 624",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 625",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 626",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 627",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 628",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 629",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 630",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 631",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 632",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 633",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 634",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 635",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 636",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 637",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 638",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 639",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 640",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 641",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 642",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 643",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 644",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 645",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 646",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 647",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  }
]
};

