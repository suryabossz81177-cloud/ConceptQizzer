/* ConceptQizzer — Class 9 Mathematics — ULTRA DETAILED + DEEP MASTERY EDITION */
/* Same ChapterData contract used by the existing Class 9 Mathematics files. */
"use strict";

const ChapterData = {
  "id": "9-mathematics-herons-formula",
  "title": "Heron’s Formula",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 10,
  "file": "js/notes/class9/mathematics/herons-formula.js",
  "enabled": true,
  "description": "A comprehensive Class 9 Heron’s Formula chapter covering why the formula is needed, triangle conditions, semiperimeter, formula anatomy, derivation, solved examples, special cases, triangulation, scaling, units, errors and HOTS.",
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
  ]
};


ChapterData.sections.push([
  {
    "id": "deep-1",
    "title": "Why Heron’s formula is needed",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "The familiar area formula 1/2×base×height requires a perpendicular height. If only the three sides are known, the height is not directly given. Heron’s formula solves this by converting three side lengths into area through the semiperimeter. It is especially useful for scalene triangles and for triangles where no convenient height is supplied."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For sides 13 cm, 14 cm and 15 cm, s=(13+14+15)/2=21 cm. Area=√(21×8×7×6)=84 cm². The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Why Heron’s formula is needed",
        "color": "purple",
        "questions": [
          {
            "topic": "Why Heron’s formula is needed",
            "difficulty": "Basic",
            "question": "State the main idea of why heron’s formula is needed in one sentence.",
            "answer": "The familiar area formula 1/2×base×height requires a perpendicular height.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Why Heron’s formula is needed",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in why heron’s formula is needed matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Why Heron’s formula is needed",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For sides 13 cm, 14 cm and 15 cm, s=(13+14+15)/2=21 cm. Area=√(21×8×7×6)=84 cm². What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Why Heron’s formula is needed",
            "difficulty": "HOTS",
            "question": "A student applies a formula from why heron’s formula is needed without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Why Heron’s formula is needed",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires why heron’s formula is needed, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-2",
    "title": "Semiperimeter — meaning and role",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "The semiperimeter is half the perimeter. For side lengths a,b,c, s=(a+b+c)/2. The factors s−a, s−b and s−c measure how far the semiperimeter lies beyond each individual side. Heron’s formula is Area=√[s(s−a)(s−b)(s−c)]. Use the same length unit for all sides before calculating."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For 5, 6, 7, s=9; factors are 4,3,2. Area=√(9×4×3×2)=√216=6√6 cm². The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Semiperimeter — meaning and role",
        "color": "purple",
        "questions": [
          {
            "topic": "Semiperimeter — meaning and role",
            "difficulty": "Basic",
            "question": "State the main idea of semiperimeter — meaning and role in one sentence.",
            "answer": "The semiperimeter is half the perimeter.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Semiperimeter — meaning and role",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in semiperimeter — meaning and role matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Semiperimeter — meaning and role",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For 5, 6, 7, s=9; factors are 4,3,2. Area=√(9×4×3×2)=√216=6√6 cm². What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Semiperimeter — meaning and role",
            "difficulty": "HOTS",
            "question": "A student applies a formula from semiperimeter — meaning and role without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Semiperimeter — meaning and role",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires semiperimeter — meaning and role, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-3",
    "title": "Triangle inequality before applying the formula",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Three positive lengths form a triangle only if the sum of any two sides is greater than the third side. Equivalently, s−a, s−b and s−c must all be positive for a non-degenerate triangle. If a+b=c, the points are collinear and the area is zero; if a+b<c, no triangle exists."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "4,7,12 cannot form a triangle because 4+7=11<12. Heron’s formula must not be used as if the triangle existed. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Triangle inequality before applying the formula",
        "color": "purple",
        "questions": [
          {
            "topic": "Triangle inequality before applying the formula",
            "difficulty": "Basic",
            "question": "State the main idea of triangle inequality before applying the formula in one sentence.",
            "answer": "Three positive lengths form a triangle only if the sum of any two sides is greater than the third side.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Triangle inequality before applying the formula",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in triangle inequality before applying the formula matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Triangle inequality before applying the formula",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: 4,7,12 cannot form a triangle because 4+7=11<12. Heron’s formula must not be used as if the triangle existed. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Triangle inequality before applying the formula",
            "difficulty": "HOTS",
            "question": "A student applies a formula from triangle inequality before applying the formula without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Triangle inequality before applying the formula",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires triangle inequality before applying the formula, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-4",
    "title": "Step-by-step Heron workflow",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Step 1: write a,b,c. Step 2: calculate perimeter. Step 3: divide by 2 to obtain s. Step 4: calculate s−a, s−b, s−c separately. Step 5: multiply the four factors. Step 6: take the square root. Step 7: attach square units and check whether the magnitude is sensible."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For 9,10,17: s=18; factors 9,8,1; area=√(18×9×8×1)=√1296=36 square units. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Step-by-step Heron workflow",
        "color": "purple",
        "questions": [
          {
            "topic": "Step-by-step Heron workflow",
            "difficulty": "Basic",
            "question": "State the main idea of step-by-step heron workflow in one sentence.",
            "answer": "Step 1: write a,b,c.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Step-by-step Heron workflow",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in step-by-step heron workflow matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Step-by-step Heron workflow",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For 9,10,17: s=18; factors 9,8,1; area=√(18×9×8×1)=√1296=36 square units. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Step-by-step Heron workflow",
            "difficulty": "HOTS",
            "question": "A student applies a formula from step-by-step heron workflow without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Step-by-step Heron workflow",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires step-by-step heron workflow, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-5",
    "title": "Exact answers and simplification",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Keep square roots exact when possible. Factor the number under the radical into a perfect-square factor and a remaining factor. For example √72=√(36×2)=6√2. Do not convert to a decimal unless requested."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For sides 5,5,6: s=8; area=√(8×3×3×2)=√144=12 cm². The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Exact answers and simplification",
        "color": "purple",
        "questions": [
          {
            "topic": "Exact answers and simplification",
            "difficulty": "Basic",
            "question": "State the main idea of exact answers and simplification in one sentence.",
            "answer": "Keep square roots exact when possible.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Exact answers and simplification",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in exact answers and simplification matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Exact answers and simplification",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For sides 5,5,6: s=8; area=√(8×3×3×2)=√144=12 cm². What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Exact answers and simplification",
            "difficulty": "HOTS",
            "question": "A student applies a formula from exact answers and simplification without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Exact answers and simplification",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires exact answers and simplification, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-6",
    "title": "Comparing Heron and base-height methods",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Heron’s formula uses all three sides directly. The base-height method is often shorter when height is known or easy to derive. In an equilateral triangle of side a, the height is √3a/2, so area=(√3/4)a². Heron’s formula gives the same result but requires more algebra."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For a 6-6-6 triangle, base-height gives 9√3 cm² immediately; Heron also gives 9√3 cm². The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Comparing Heron and base-height methods",
        "color": "purple",
        "questions": [
          {
            "topic": "Comparing Heron and base-height methods",
            "difficulty": "Basic",
            "question": "State the main idea of comparing heron and base-height methods in one sentence.",
            "answer": "Heron’s formula uses all three sides directly.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Comparing Heron and base-height methods",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in comparing heron and base-height methods matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Comparing Heron and base-height methods",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For a 6-6-6 triangle, base-height gives 9√3 cm² immediately; Heron also gives 9√3 cm². What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Comparing Heron and base-height methods",
            "difficulty": "HOTS",
            "question": "A student applies a formula from comparing heron and base-height methods without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Comparing Heron and base-height methods",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires comparing heron and base-height methods, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-7",
    "title": "Reverse and application problems",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Sometimes the question asks for a side or a comparison after area has been found. Heron’s formula may lead to an equation involving a square root. Square both sides only after isolating the radical, and remember that lengths are positive."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If a triangle has sides 13,14,15 and another has base 14 with height 12, both areas are 84 cm²; equal area does not imply equal triangles. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Reverse and application problems",
        "color": "purple",
        "questions": [
          {
            "topic": "Reverse and application problems",
            "difficulty": "Basic",
            "question": "State the main idea of reverse and application problems in one sentence.",
            "answer": "Sometimes the question asks for a side or a comparison after area has been found.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Reverse and application problems",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in reverse and application problems matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Reverse and application problems",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If a triangle has sides 13,14,15 and another has base 14 with height 12, both areas are 84 cm²; equal area does not imply equal triangles. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Reverse and application problems",
            "difficulty": "HOTS",
            "question": "A student applies a formula from reverse and application problems without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Reverse and application problems",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires reverse and application problems, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-8",
    "title": "HOTS interpretation",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "In multi-step problems, decide whether a claimed triangle is possible, whether Heron is appropriate, and whether the requested quantity is area or perimeter. Do not confuse semiperimeter s with side length. Check units: s is a length, the product under the square root has units of length⁴, and its square root has units of length²."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If s=20 and the three factors are 7,6,5, area=√4200=10√42 square units; the unit is squared. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — HOTS interpretation",
        "color": "purple",
        "questions": [
          {
            "topic": "HOTS interpretation",
            "difficulty": "Basic",
            "question": "State the main idea of hots interpretation in one sentence.",
            "answer": "In multi-step problems, decide whether a claimed triangle is possible, whether Heron is appropriate, and whether the requested quantity is area or perimeter.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "HOTS interpretation",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in hots interpretation matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "HOTS interpretation",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If s=20 and the three factors are 7,6,5, area=√4200=10√42 square units; the unit is squared. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "HOTS interpretation",
            "difficulty": "HOTS",
            "question": "A student applies a formula from hots interpretation without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "HOTS interpretation",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires hots interpretation, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  }
]);
ChapterData.theoremPropertyLab=[{"title": "Heron formula", "statement": "Δ=√[s(s−a)(s−b)(s−c)].", "conditions": "Positive side lengths satisfying triangle inequality."}];
ChapterData.realLifeMathematics=["Land measurement", "Triangular plots", "Surveying"];
ChapterData.mathematicalActivityLab=[{"title": "Heron lab", "steps": ["Choose valid side triples.", "Compute s.", "Calculate four factors.", "Find area.", "Cross-check."]}];
ChapterData.visualLearning=["Draw altitude for derivation.", "Show semiperimeter factors."];
ChapterData.renderCompatibility={rendererStyle:"ConceptQizzer ChapterData",answerReveal:"show-answer",tables:"native-renderer-tables",rawJSONForStudents:false};
window.ChapterData=ChapterData;
window.chapter=ChapterData;
