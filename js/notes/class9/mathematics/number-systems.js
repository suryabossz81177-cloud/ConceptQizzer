/* ConceptQizzer — Class 9 Mathematics — ULTRA DETAILED render-safe chapter file */
/* Preserves the previous chapter data and exposes both ChapterData and window.chapter. */
"use strict";

var ChapterData = {
  "id": "9-mathematics-number-systems",
  "title": "Number Systems",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 1,
  "file": "js/notes/class9/mathematics/number-systems.js",
  "enabled": true,
  "description": "A Class 9 standard, deeply detailed study of Number Systems. It builds the complete number hierarchy from natural numbers to real numbers, explains rational and irrational numbers, decimal expansions, representation on the number line, laws of exponents, rationalisation and operations. Previous notes are preserved and expanded with additional explanations, worked examples, reasoning, exam traps and revision material.",
  "learningObjectives": [
    "Classify numbers correctly.",
    "Distinguish rational and irrational numbers using definitions and decimal behaviour.",
    "Use the terminating-decimal criterion.",
    "Apply exponent laws correctly.",
    "Rationalise denominators using a suitable factor or conjugate.",
    "Explain every step of a solution instead of relying on answer-only work.",
    "Use definitions, properties and algebraic reasoning to justify answers.",
    "Detect common traps and verify results independently."
  ],
  "prerequisiteCheck": [
    "Integers and fractions",
    "Basic prime factorisation",
    "Basic powers and square roots"
  ],
  "conceptRoadmap": [
    "Number hierarchy",
    "Rational numbers",
    "Decimal expansions",
    "Irrational numbers",
    "Real number line",
    "Operations with real numbers",
    "Laws of exponents",
    "Surds and rationalisation",
    "Proof and exam reasoning"
  ],
  "comparisonTables": [
    {
      "title": "Number-set comparison",
      "columns": [
        "Set",
        "Examples",
        "Main idea"
      ],
      "rows": [
        [
          "Natural",
          "1,2,3,…",
          "Counting numbers"
        ],
        [
          "Whole",
          "0,1,2,3,…",
          "Natural numbers plus zero"
        ],
        [
          "Integers",
          "…,−2,−1,0,1,2,…",
          "Positive, negative and zero"
        ],
        [
          "Rational",
          "p/q, q≠0",
          "Ratio of integers"
        ],
        [
          "Irrational",
          "√2, π,…",
          "Non-terminating, non-repeating decimals"
        ],
        [
          "Real",
          "Rational + irrational",
          "All points on the number line"
        ]
      ]
    }
  ],
  "theoremPropertyLab": [
    {
      "title": "Irrationality of √2",
      "statement": "√2 is irrational.",
      "proof": "Assume √2=p/q in lowest terms. Squaring forces p and then q to be even, contradicting lowest terms."
    }
  ],
  "formulaPropertyBank": [
    "N ⊂ W ⊂ Z ⊂ Q ⊂ R",
    "Terminating decimal ⇔ reduced denominator has only 2 and/or 5 as prime factors",
    "a^m×a^n=a^(m+n)",
    "a^m/a^n=a^(m−n)",
    "(a^m)^n=a^(mn)",
    "a^(−m)=1/a^m"
  ],
  "conceptConnections": [
    "Fractions connect directly to rational numbers and decimals.",
    "Irrational numbers complete the real number line.",
    "Exponent laws simplify algebra used in later chapters.",
    "Rationalisation prepares radical expressions for algebraic manipulation."
  ],
  "mathematicalThinking": [
    "Classify before calculating.",
    "Look for a definition that can prove the result.",
    "Check an answer using a second method whenever practical."
  ],
  "errorDetective": [
    {
      "problem": "Every non-terminating decimal is irrational.",
      "answer": "False. A recurring decimal is rational."
    },
    {
      "problem": "0 is irrational.",
      "answer": "False. 0=0/1, so it is rational."
    },
    {
      "problem": "5⁰=0.",
      "answer": "False. For non-zero 5, 5⁰=1."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Give one rational and one irrational number between 2 and 3.",
      "answer": "5/2 is rational and √7 is irrational."
    }
  ],
  "realLifeMathematics": [
    "Measurements and scientific calculations use real numbers.",
    "Exponents model repeated growth and scaling.",
    "Square roots occur in geometry and distance calculations."
  ],
  "mathematicalActivityLab": [
    {
      "title": "Build the number-system ladder",
      "steps": [
        "Write N,W,Z,Q,R as nested regions.",
        "Place sample numbers −4,0,3/5,√2 and 7.",
        "Explain every membership rather than simply placing the number."
      ]
    }
  ],
  "figureBank": [
  {
    "title": "Real-number hierarchy",
    "diagram": "REAL NUMBERS\n├── RATIONAL\n│   ├── INTEGERS\n│   ├── WHOLE\n│   └── FRACTIONS\n└── IRRATIONAL\n    ├── √2\n    ├── √3\n    └── π",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "√2 construction",
    "diagram": "        B\n        |\\\n      1 | \\ √2\n        |  \\\n        |   \\\n        A----C\n           1\nAB=AC=1 and ∠A=90°; hence BC=√2.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Number line",
    "diagram": "0────────1──────√2────────2──────3\n         1 < √2 < 2\nbecause 1² < 2 < 2².",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Exponent laws",
    "diagram": "aᵐ·aⁿ=aᵐ⁺ⁿ     aᵐ/aⁿ=aᵐ⁻ⁿ (a≠0)\n(aᵐ)ⁿ=aᵐⁿ      a⁰=1 (a≠0)",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  }
],
  "visualLearning": [
    "Draw the nested number-set diagram.",
    "Mark rational and irrational examples on a number line."
  ],
  "masterDefinitions": [
    {
      "term": "Rational number",
      "definition": "A number expressible as p/q with p,q integers and q≠0."
    },
    {
      "term": "Irrational number",
      "definition": "A real number that cannot be expressed as p/q."
    },
    {
      "term": "Real number",
      "definition": "Any rational or irrational number."
    }
  ],
  "formulaRevisionSheet": [
    "N⊂W⊂Z⊂Q⊂R",
    "a⁰=1 (a≠0)",
    "a^(−m)=1/a^m",
    "Terminating decimal test: only 2 and 5 in reduced denominator"
  ],
  "questionBank": [
    {
      "question": "Classify −8.",
      "answer": "Integer, rational and real."
    },
    {
      "question": "Is 13/125 terminating?",
      "answer": "Yes, because 125=5³."
    },
    {
      "question": "Rationalise 2/√7.",
      "answer": "2√7/7."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Show Answer must reveal the final answer followed by the complete step-by-step solution."
  },
  "practiceSets": [
    {
      "title": "Practice Set A",
      "questions": [
        "Classify 12, −8, 0, 3/7 and √11.",
        "Test 13/125 for termination.",
        "Simplify 3⁴×3²/3³.",
        "Rationalise 2/√7."
      ]
    }
  ],
  "timedPractice": [
    {
      "duration": "15 minutes",
      "instruction": "Solve 10 mixed questions, then verify every answer."
    }
  ],
  "chapterQuiz": [
    {
      "question": "Which is irrational?",
      "options": [
        "0.25",
        "7/11",
        "√3",
        "−5"
      ],
      "answer": "√3"
    }
  ],
  "examZone": [
    "Know the nested sets.",
    "Know the decimal termination criterion.",
    "Practise irrationality proofs.",
    "Show all rationalisation steps.",
    "Write formulas before substitution where appropriate.",
    "Use complete mathematical statements in proof/reasoning questions.",
    "Recheck signs, brackets and powers before finalising an answer."
  ],
  "commonMistakes": [
    "Calling every non-terminating decimal irrational.",
    "Forgetting q≠0.",
    "Using a⁰=0.",
    "Rationalising only the denominator.",
    "Confusing a concept definition with an example.",
    "Skipping the verification step.",
    "Swapping ordered coordinates.",
    "Ignoring restrictions such as a denominator being non-zero.",
    "Using an algebraic identity with an incorrect sign."
  ],
  "masterRevision": [
    "Definition → classification → decimal test → irrationality → exponents → rationalisation."
  ],
  "detailedSummary": [
    "The real numbers contain rational and irrational numbers.",
    "Rational decimals terminate or recur.",
    "Irrational decimals never terminate and never repeat.",
    "Exponent laws simplify powers.",
    "Rationalisation removes radicals from denominators."
  ],
  "finalChapterTest": [
    {
      "question": "Prove that √5 is irrational.",
      "answer": "√5 is irrational.",
      "solution": "Assume √5=p/q in lowest terms. Then p²=5q², so 5 divides p. Writing p=5k gives q²=5k², so 5 divides q. This contradicts lowest terms. Therefore √5 is irrational."
    }
  ],
  "importantPoints": [
    "N⊂W⊂Z⊂Q⊂R.",
    "Recurring decimals are rational.",
    "Use the reduced denominator for the termination test.",
    "Use conjugates when needed for rationalisation.",
    "Show substitutions clearly in Class 9 solutions.",
    "Do not skip sign checks when negative numbers are involved.",
    "Use the definition or theorem that directly justifies the step.",
    "A correct final answer with no reasoning may lose marks in descriptive questions.",
    "N ⊂ W ⊂ Z ⊂ Q ⊂ R.",
    "Rational numbers include terminating and recurring decimals.",
    "A reduced rational denominator containing only 2 and 5 gives a terminating decimal.",
    "Irrational numbers are real but not rational.",
    "A negative exponent means reciprocal, not a negative value.",
    "Rationalisation removes surds from denominators."
  ],
  "keyTerms": [
    "Natural number",
    "Whole number",
    "Integer",
    "Rational",
    "Irrational",
    "Real number",
    "Exponent",
    "Conjugate",
    "Rationalisation"
  ],
  "chapterSummary": "Number Systems develops the complete real-number framework and the algebraic skills needed to work confidently with fractions, decimals, radicals and powers. The enhanced version keeps the earlier material while adding deeper explanations, more worked examples, reasoning-based practice and stronger Class 9 exam preparation.\n\nMastering this chapter means you should be able to explain the definition, recognise the concept in unfamiliar questions, solve routine and higher-order examples, justify each step, detect common errors, and verify your final answer.",
  "sections": [
    {
      "id": "number-sets-and-the-real-number-system",
      "title": "Number Sets and the Real Number System",
      "blocks": [

  {
    "type": "concept",
    "title": "📐 Figure 1 — Real-number hierarchy",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nREAL NUMBERS\n├── RATIONAL\n│   ├── INTEGERS\n│   ├── WHOLE\n│   └── FRACTIONS\n└── IRRATIONAL\n    ├── √2\n    ├── √3\n    └── π\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 2 — √2 construction",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n        B\n        |\\\n      1 | \\ √2\n        |  \\\n        |   \\\n        A----C\n           1\nAB=AC=1 and ∠A=90°; hence BC=√2.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 3 — Number line",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n0────────1──────√2────────2──────3\n         1 < √2 < 2\nbecause 1² < 2 < 2².\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 4 — Exponent laws",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\naᵐ·aⁿ=aᵐ⁺ⁿ     aᵐ/aⁿ=aᵐ⁻ⁿ (a≠0)\n(aᵐ)ⁿ=aᵐⁿ      a⁰=1 (a≠0)\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  }
,

        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A number system is a hierarchy of sets in which each larger set contains the earlier sets. Natural numbers are counting numbers 1,2,3,...; whole numbers add 0; integers add negative numbers; rational numbers contain all numbers expressible as p/q, where p and q are integers and q is not 0; irrational numbers cannot be expressed in that form; rational and irrational numbers together form the real numbers.\n\nThe containment relationship is N ⊂ W ⊂ Z ⊂ Q ⊂ R. Therefore, when a number belongs to a smaller set, it automatically belongs to every larger set. Classification should normally identify the most specific familiar set first.\n\nDeep Class 9 explanation: The sets are nested, not merely a list of unrelated categories. Natural numbers N = {1,2,3,...}; whole numbers W = {0,1,2,3,...}; integers Z = {...,-2,-1,0,1,2,...}; rational numbers Q are numbers of the form p/q with p,q integers and q≠0; irrational numbers are real numbers that cannot be expressed in p/q form; real numbers R contain both rational and irrational numbers. Thus N ⊂ W ⊂ Z ⊂ Q ⊂ R. A number can belong to several sets simultaneously, so the phrase 'smallest suitable set' is useful when classification is requested.\n\nHow to classify systematically: first check whether the number is a counting number, then whether it is whole, integer, rational or irrational. A terminating decimal such as 2.75 is rational because 2.75=275/100=11/4. A recurring decimal such as 0.2727... is rational because its repeating pattern can be converted to a fraction. A square root of a positive non-perfect-square integer, such as √7, is irrational."
        },
        {
          "type": "example",
          "title": "Classify 7",
          "color": "orange",
          "text": "Problem: Classify 7.\n\nComplete Solution:\n7 is natural, whole, integer, rational and real."
        },
        {
          "type": "example",
          "title": "Classify −5/3",
          "color": "orange",
          "text": "Problem: Classify −5/3.\n\nComplete Solution:\nIt is rational and real, but not an integer, whole or natural number."
        },
        {
          "type": "example",
          "title": "Classify √2",
          "color": "orange",
          "text": "Problem: Classify √2.\n\nComplete Solution:\n√2 is irrational and therefore real."
        },
        {
          "type": "example",
          "title": "Classify a negative integer",
          "color": "orange",
          "text": "Problem: Classify −12.\n\nComplete Solution:\n−12 is an integer, rational and real; it is not whole or natural."
        },
        {
          "type": "example",
          "title": "Classify a terminating decimal",
          "color": "orange",
          "text": "Problem: Classify 0.625.\n\nComplete Solution:\n0.625=5/8, so it is rational and real."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the nested sets: N ⊂ W ⊂ Z ⊂ Q ⊂ R.\nRational and irrational numbers together make R."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Think of the number system as a nested hierarchy, not six unrelated lists. Every natural number is whole, every whole number is an integer, every integer is rational, and every rational number is real. Irrational numbers are also real, but they do not belong to the rational set. Thus N ⊂ W ⊂ Z ⊂ Q ⊂ R, while irrational numbers lie inside R but outside Q. When a question asks for the smallest suitable set, stop at the first set that contains the number."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Classify -18. Since -18 is an integer, it is also rational because -18 = -18/1, and therefore real. It is not a whole or natural number."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Classify 0. 0 is a whole number and an integer. Also 0 = 0/1, so it is rational and real. In the usual school convention it is not a natural number."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Classify 2.75. Convert it: 2.75 = 275/100 = 11/4. Therefore it is rational and real; it is not an integer."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "Classify √49. Since √49 = 7, it is natural, whole, integer, rational and real. A square-root sign by itself does not make a number irrational."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "The safest classification test is: simplify first, then identify the smallest familiar set. For example √64 must be simplified to 8 before classification."
        }
      ]
    },
    {
      "id": "rational-numbers",
      "title": "Rational Numbers",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A rational number has the form p/q, where p and q are integers and q ≠ 0. Rational numbers include integers because every integer n can be written as n/1. They also include terminating decimals and recurring decimals.\n\nFor a fraction in lowest terms, its decimal expansion terminates exactly when the denominator has no prime factors other than 2 and 5. If any other prime factor remains, the decimal is non-terminating recurring.\n\nDeep Class 9 explanation: For a rational number p/q, the denominator must never be zero. When a fraction is reduced to lowest terms, its decimal terminates if and only if the denominator has no prime factor other than 2 and 5. For example, 13/125 terminates because 125=5³, while 7/18 does not terminate because 18=2×3² contains 3. A non-terminating recurring decimal is still rational; the repeating block is the important feature.\n\nConverting a recurring decimal: if x=0.333..., then 10x=3.333..., subtracting gives 9x=3, so x=1/3. This algebraic method explains why recurring decimals are rational rather than relying only on memorisation."
        },
        {
          "type": "example",
          "title": "Terminating decimal",
          "color": "orange",
          "text": "Problem: Decide whether 7/40 terminates.\n\nComplete Solution:\n40 = 2³×5. Only 2 and 5 occur, so it terminates: 7/40 = 0.175."
        },
        {
          "type": "example",
          "title": "Recurring decimal",
          "color": "orange",
          "text": "Problem: Decide whether 5/12 terminates.\n\nComplete Solution:\n12 = 2²×3. The factor 3 remains, so the decimal is non-terminating recurring."
        },
        {
          "type": "example",
          "title": "Decimal to fraction",
          "color": "orange",
          "text": "Problem: Convert 0.125 to a fraction.\n\nComplete Solution:\n0.125 = 125/1000 = 1/8."
        },
        {
          "type": "example",
          "title": "Termination test",
          "color": "orange",
          "text": "Problem: Does 17/80 terminate?\n\nComplete Solution:\n80=2^4×5, so the decimal terminates."
        },
        {
          "type": "example",
          "title": "Non-termination test",
          "color": "orange",
          "text": "Problem: Does 11/30 terminate?\n\nComplete Solution:\n30=2×3×5; the factor 3 remains, so the decimal is non-terminating recurring."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Always reduce the fraction before applying the 2-and-5 test.\nEvery recurring decimal is rational."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "A rational number is p/q where p and q are integers and q ≠ 0. The denominator condition is essential: p/0 is undefined. Rational numbers include integers, fractions, terminating decimals and non-terminating recurring decimals."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Convert 0.625 into a fraction: 0.625 = 625/1000 = 5/8. Hence it is rational."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Decide whether 13/125 terminates. Since 125 = 5³ and the reduced denominator contains only 2 and 5 as possible prime factors, its decimal terminates."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Decide whether 7/18 terminates. 18 = 2 × 3². The prime factor 3 remains, so the decimal is non-terminating recurring."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "Convert 0.333... to a fraction. Let x = 0.333.... Then 10x = 3.333.... Subtract: 9x = 3, so x = 1/3."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Always reduce a fraction before applying the terminating-decimal test."
        }
      ]
    },
    {
      "id": "irrational-numbers",
      "title": "Irrational Numbers",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "An irrational number is a real number that cannot be written as p/q with integers p and q, q ≠ 0. Its decimal expansion is non-terminating and non-repeating.\n\nSquare roots provide many familiar examples. √9 is rational because it equals 3, while √2 is irrational because 2 is not a perfect square. A standard proof that √2 is irrational uses contradiction and the fact that a square being even implies its root is even.\n\nDeep Class 9 explanation: Irrationality is about impossibility of p/q representation. Not every radical is irrational: √16=4 and √81=9 are rational. The key check is whether the number under the square root is a perfect square when the expression is a simple square root of an integer. The classic proof of √2 uses contradiction: assume √2=p/q in lowest terms; squaring gives p²=2q², which forces p to be even; substituting p=2k then forces q to be even, contradicting lowest terms. The same style of reasoning can be adapted to √3, √5 and other appropriate non-perfect-square integers."
        },
        {
          "type": "example",
          "title": "Prove √2 is irrational",
          "color": "orange",
          "text": "Problem: Show that √2 cannot be rational.\n\nComplete Solution:\nAssume √2=p/q in lowest terms. Then 2q²=p², so p is even. Put p=2k; then q²=2k², so q is also even. This contradicts lowest terms. Hence √2 is irrational."
        },
        {
          "type": "example",
          "title": "Perfect square check",
          "color": "orange",
          "text": "Problem: Is √49 irrational?\n\nComplete Solution:\nNo. √49=7, which is rational."
        },
        {
          "type": "example",
          "title": "Perfect square",
          "color": "orange",
          "text": "Problem: Classify √64.\n\nComplete Solution:\n√64=8, so it is rational."
        },
        {
          "type": "example",
          "title": "Non-perfect square",
          "color": "orange",
          "text": "Problem: Classify √10.\n\nComplete Solution:\n10 is not a perfect square, so √10 is irrational."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": ""
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "An irrational number cannot be written in the form p/q with integers p and q and q ≠ 0. Its decimal expansion is non-terminating and non-recurring. Common examples include √2, √3, √5 and π."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "√2 is irrational because 2 is not a perfect square. Its decimal expansion continues without a repeating block."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "√81 is not irrational because √81 = 9, an integer and therefore rational."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Show that √5 is irrational. Assume √5 = p/q in lowest terms. Squaring gives p² = 5q², so 5 divides p. Let p = 5k. Then q² = 5k², so 5 divides q. This contradicts lowest terms. Therefore √5 is irrational."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "The sum 3 + √7 is irrational. If it were rational, subtracting the rational number 3 would make √7 rational, which is impossible."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Do not use 'the decimal looks long' as a proof. Use the definition or a contradiction argument."
        }
      ]
    },
    {
      "id": "real-numbers-on-the-number-line",
      "title": "Real Numbers on the Number Line",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Every real number corresponds to one point on the number line. Rational and irrational numbers are both present. Numbers to the right are greater and numbers to the left are smaller.\n\nFor comparing non-negative square roots, squaring preserves order. Thus √5 > 2 because 5 > 4. Between any two distinct real numbers there are infinitely many real numbers, so the number line is continuous rather than a collection of isolated familiar values.\n\nDeep Class 9 explanation: The number line is a geometric model of the complete real-number system. The origin represents 0; positive numbers lie to the right and negative numbers to the left. To compare two real numbers, the number farther to the right is greater. Irrational numbers are not 'missing' from the line: every irrational real number corresponds to a point. A standard geometric construction for √2 uses a right triangle with legs 1 and 1, giving hypotenuse √2 by Pythagoras, and then transfers that length to the number line."
        },
        {
          "type": "example",
          "title": "Compare",
          "color": "orange",
          "text": "Problem: Compare √5 and 2.\n\nComplete Solution:\nSince 5>4=2², √5>2. Numerically √5≈2.236."
        },
        {
          "type": "example",
          "title": "Order on the line",
          "color": "orange",
          "text": "Problem: Which is greater, −3 or −5?\n\nComplete Solution:\n−3 lies to the right of −5, so −3>−5."
        },
        {
          "type": "example",
          "title": "Between two numbers",
          "color": "orange",
          "text": "Problem: Give two real numbers between 1 and 2.\n\nComplete Solution:\n1.25 and √2 are both between 1 and 2."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": ""
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Every real number corresponds to exactly one point on the real number line, and every point on the line represents exactly one real number. Positive numbers lie to the right of 0 and negative numbers to the left."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Locate 5/2. It lies halfway between 2 and 3 because 5/2 = 2.5."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Compare -3/2 and -1. Since -1.5 lies farther left, -3/2 < -1."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Locate √2 geometrically using a right triangle with legs 1 and 1. The hypotenuse is √(1²+1²)=√2; transferring that length to the number line locates √2."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "Between 2 and 3 there are infinitely many real numbers, including 2.1, 2.01, 2.001, 2.5 and √7."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "On a number line, 'greater' always means farther to the right."
        }
      ]
    },
    {
      "id": "laws-of-exponents",
      "title": "Laws of Exponents",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Exponent laws describe how powers behave when the base is the same or when powers are raised to powers. These rules follow from repeated multiplication and division. For a non-zero base a and suitable integers m,n: a^m×a^n=a^(m+n), a^m/a^n=a^(m−n), (a^m)^n=a^(mn), (ab)^m=a^m b^m, a^0=1 and a^(−m)=1/a^m.\n\nThe conditions matter. Division by a power assumes a ≠ 0, and a negative exponent does not make a number negative; it means reciprocal.\n\nDeep Class 9 explanation: Exponent laws are consequences of repeated multiplication. For a≠0 and suitable integer exponents: a^m·a^n=a^(m+n), a^m/a^n=a^(m−n), (a^m)^n=a^(mn), (ab)^m=a^m b^m, (a/b)^m=a^m/b^m, a^0=1 and a^(−m)=1/a^m. The base must be treated carefully: the addition rule applies when the bases are the same. For example, 2³·3³ cannot be changed to 6⁶; instead (2·3)³=6³. Negative exponents indicate reciprocals, not negative values."
        },
        {
          "type": "example",
          "title": "Multiply powers",
          "color": "orange",
          "text": "Problem: Simplify 2³×2⁵.\n\nComplete Solution:\n2^(3+5)=2⁸=256."
        },
        {
          "type": "example",
          "title": "Divide powers",
          "color": "orange",
          "text": "Problem: Simplify x⁷/x³, x≠0.\n\nComplete Solution:\nx^(7−3)=x⁴."
        },
        {
          "type": "example",
          "title": "Negative exponent",
          "color": "orange",
          "text": "Problem: Simplify 5⁻².\n\nComplete Solution:\n5⁻²=1/5²=1/25."
        },
        {
          "type": "example",
          "title": "Power of a product",
          "color": "orange",
          "text": "Problem: Simplify (2×5)^3.\n\nComplete Solution:\n(2×5)^3=2^3×5^3=8×125=1000."
        },
        {
          "type": "example",
          "title": "Zero exponent",
          "color": "orange",
          "text": "Problem: Simplify 9^0.\n\nComplete Solution:\nSince 9≠0, 9^0=1."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": ""
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "For non-zero a and suitable integers m,n, a^m × a^n = a^(m+n), a^m/a^n = a^(m-n), (a^m)^n = a^(mn), (ab)^m = a^m b^m, and a^0 = 1. Negative exponents mean reciprocals: a^-m = 1/a^m."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "2³ × 2⁵ = 2⁸ = 256. The bases are the same, so add exponents."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "5⁷/5³ = 5⁴ = 625. Subtract the denominator exponent from the numerator exponent."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "(3²)⁴ = 3⁸. When a power is raised to another power, multiply the exponents."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "2^-3 = 1/2³ = 1/8. A negative exponent does not make the value negative."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Do not add exponents when bases are different, and do not confuse (a+b)^n with a^n+b^n."
        }
      ]
    },
    {
      "id": "rationalisation-of-denominators",
      "title": "Rationalisation of Denominators",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Rationalisation removes an irrational radical from a denominator without changing the value of a fraction. We multiply by a suitable form of 1.\n\nFor 1/√a, multiply by √a/√a. For a denominator such as a+√b, multiply by its conjugate a−√b because (a+√b)(a−√b)=a²−b.\n\nDeep Class 9 explanation: Rationalisation is an algebraic transformation that keeps a fraction equal to its original value while making the denominator rational. For a single radical, multiply numerator and denominator by that radical. For a binomial such as a+√b, use the conjugate a−√b. The key identity is (a+b)(a−b)=a²−b². Rationalisation should be completed fully; leaving an irrational denominator means the process has not been finished."
        },
        {
          "type": "example",
          "title": "Single radical",
          "color": "orange",
          "text": "Problem: Rationalise 1/√5.\n\nComplete Solution:\nMultiply by √5/√5: √5/5."
        },
        {
          "type": "example",
          "title": "Conjugate",
          "color": "orange",
          "text": "Problem: Rationalise 1/(3+√2).\n\nComplete Solution:\nMultiply by (3−√2)/(3−√2). Denominator becomes 9−2=7, so result=(3−√2)/7."
        },
        {
          "type": "example",
          "title": "Rationalise 3/√7",
          "color": "orange",
          "text": "Problem: Rationalise 3/√7.\n\nComplete Solution:\nMultiply by √7/√7: 3√7/7."
        },
        {
          "type": "example",
          "title": "Conjugate example",
          "color": "orange",
          "text": "Problem: Rationalise 1/(5−√3).\n\nComplete Solution:\nMultiply by (5+√3)/(5+√3); denominator becomes 25−3=22, giving (5+√3)/22."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": ""
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Rationalisation rewrites a fraction so that an irrational quantity is removed from the denominator. For a denominator like √a, multiply numerator and denominator by √a. For a+b√c, use the conjugate a-b√c."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Rationalise 1/√3: multiply by √3/√3 to obtain √3/3."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Rationalise 5/(2√7): multiply by √7/√7 to get 5√7/14."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Rationalise 1/(√5+2): multiply by (√5-2)/(√5-2). The denominator becomes 5-4=1, so the result is √5-2."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "For 3/(√7-√2), multiply by (√7+√2)/(√7+√2). The denominator becomes 7-2=5, giving 3(√7+√2)/5."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "The conjugate is chosen because (a+b)(a-b)=a²-b², which removes the surd cross terms."
        }
      ]
    },
    {
      "id": "operations-and-closure-in-the-real-number-system",
      "title": "Operations and Closure in the Real Number System",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Closure asks whether performing an operation on members of a set always gives another member of the same set. The real numbers are closed under addition, subtraction and multiplication, and under division when the divisor is non-zero. Rational numbers are also closed under these operations with the same division restriction. Irrational numbers are not closed under addition or multiplication: √2+(−√2)=0 is rational, and √2×√2=2 is rational."
        },
        {
          "type": "example",
          "title": "Rational + rational",
          "color": "orange",
          "text": "Problem: Find 3/4+5/8.\n\nComplete Solution:\n3/4=6/8, so 6/8+5/8=11/8, which is rational."
        },
        {
          "type": "example",
          "title": "Irrational + irrational",
          "color": "orange",
          "text": "Problem: Give an example whose sum is rational.\n\nComplete Solution:\n√3+(−√3)=0, which is rational."
        },
        {
          "type": "example",
          "title": "Irrational × irrational",
          "color": "orange",
          "text": "Problem: Give an example whose product is rational.\n\nComplete Solution:\n√5×√5=5, which is rational."
        },
        {
          "type": "example",
          "title": "Division restriction",
          "color": "orange",
          "text": "Problem: Why is division by zero excluded?\n\nComplete Solution:\nA quotient a/0 is not defined in the real number system; there is no real number x satisfying 0x=a when a≠0."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Do not assume the irrational numbers form a closed set.\nDivision is allowed only by a non-zero divisor.\nAlways simplify before classifying the final result."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "The real numbers are closed under addition, subtraction and multiplication, and under division when the divisor is non-zero. Closure means the result remains in the same set."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "√2 + 3 is real because both terms are real and the sum of real numbers is real."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "√3 × √12 = √36 = 6, a real number."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "7/0 is not a real number because division by zero is undefined."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "(-2) - √5 is real even though it is irrational."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Closure does not mean the result is always an integer or rational; it means it stays inside the set being discussed."
        }
      ]
    },
    {
      "id": "converting-terminating-and-recurring-decimals",
      "title": "Converting Terminating and Recurring Decimals",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A terminating decimal can be converted directly into a fraction by using a power of 10. A recurring decimal can be converted by introducing a variable, shifting the decimal point by the length of the repeating block, and subtracting. These methods connect decimal notation with the definition of rational numbers."
        },
        {
          "type": "example",
          "title": "Terminating decimal",
          "color": "orange",
          "text": "Problem: Convert 2.375 into a fraction.\n\nComplete Solution:\n2.375=2375/1000=19/8 after dividing numerator and denominator by 125."
        },
        {
          "type": "example",
          "title": "One recurring digit",
          "color": "orange",
          "text": "Problem: Convert 0.777... into a fraction.\n\nComplete Solution:\nLet x=0.777...; 10x=7.777...; subtract: 9x=7, so x=7/9."
        },
        {
          "type": "example",
          "title": "Two recurring digits",
          "color": "orange",
          "text": "Problem: Convert 0.2727... into a fraction.\n\nComplete Solution:\nLet x=0.2727...; 100x=27.2727...; subtract: 99x=27, so x=27/99=3/11."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Finite decimals are always rational.\nRecurring decimals are rational.\nReduce the final fraction to lowest terms."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Terminating decimals can be converted directly into fractions by writing them over a power of 10 and reducing. Recurring decimals require an algebraic equation that eliminates the repeating block."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "0.48 = 48/100 = 12/25."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "0.007 = 7/1000."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "0.2727... = 27/99 = 3/11."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "For 0.1666..., let x=0.1666.... Then 10x=1.666..., subtract x: 9x=1.5, so x=1/6."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "For recurring decimals, shift by the number of digits in the repeating block before subtracting."
        }
      ]
    }
  ],
  "additionalSections": [
  {
    "id": "five-x-mega-expansion",
    "title": "5× Mega Detailed Learning Expansion",
    "blocks": [
      {
        "type": "concept",
        "title": "1. Real-number meaning and number line — Deep Concept",
        "color": "blue",
        "text": "Real-number meaning and number line is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "1. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Real-number meaning and number line: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "1. Exam Insight",
        "color": "green",
        "text": "For Real-number meaning and number line, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Real-number meaning and number line",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Real-number meaning and number line.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Real-number meaning and number line is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Real-number meaning and number line.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Real-number meaning and number line?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Real-number meaning and number line be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "2. Rational and irrational numbers — Deep Concept",
        "color": "blue",
        "text": "Rational and irrational numbers is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "2. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Rational and irrational numbers: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "2. Exam Insight",
        "color": "green",
        "text": "For Rational and irrational numbers, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Rational and irrational numbers",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Rational and irrational numbers.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Rational and irrational numbers is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Rational and irrational numbers.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Rational and irrational numbers?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Rational and irrational numbers be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "3. Proof that √2 is irrational — Deep Concept",
        "color": "blue",
        "text": "Proof that √2 is irrational is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "3. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Proof that √2 is irrational: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "3. Exam Insight",
        "color": "green",
        "text": "For Proof that √2 is irrational, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Proof that √2 is irrational",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Proof that √2 is irrational.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Proof that √2 is irrational is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Proof that √2 is irrational.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Proof that √2 is irrational?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Proof that √2 is irrational be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "4. Decimal expansion and termination — Deep Concept",
        "color": "blue",
        "text": "Decimal expansion and termination is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "4. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Decimal expansion and termination: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "4. Exam Insight",
        "color": "green",
        "text": "For Decimal expansion and termination, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Decimal expansion and termination",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Decimal expansion and termination.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Decimal expansion and termination is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Decimal expansion and termination.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Decimal expansion and termination?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Decimal expansion and termination be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "5. Recurring decimals — Deep Concept",
        "color": "blue",
        "text": "Recurring decimals is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "5. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Recurring decimals: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "5. Exam Insight",
        "color": "green",
        "text": "For Recurring decimals, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Recurring decimals",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Recurring decimals.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Recurring decimals is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Recurring decimals.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Recurring decimals?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Recurring decimals be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "6. Laws of exponents — Deep Concept",
        "color": "blue",
        "text": "Laws of exponents is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "6. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Laws of exponents: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "6. Exam Insight",
        "color": "green",
        "text": "For Laws of exponents, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Laws of exponents",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Laws of exponents.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Laws of exponents is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Laws of exponents.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Laws of exponents?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Laws of exponents be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "7. Rational exponents — Deep Concept",
        "color": "blue",
        "text": "Rational exponents is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "7. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Rational exponents: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "7. Exam Insight",
        "color": "green",
        "text": "For Rational exponents, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Rational exponents",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Rational exponents.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Rational exponents is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Rational exponents.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Rational exponents?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Rational exponents be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "8. Surds and simplification — Deep Concept",
        "color": "blue",
        "text": "Surds and simplification is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "8. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Surds and simplification: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "8. Exam Insight",
        "color": "green",
        "text": "For Surds and simplification, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Surds and simplification",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Surds and simplification.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Surds and simplification is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Surds and simplification.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Surds and simplification?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Surds and simplification be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "9. Operations with surds — Deep Concept",
        "color": "blue",
        "text": "Operations with surds is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "9. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Operations with surds: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "9. Exam Insight",
        "color": "green",
        "text": "For Operations with surds, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Operations with surds",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Operations with surds.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Operations with surds is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Operations with surds.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Operations with surds?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Operations with surds be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "10. Rationalising denominators — Deep Concept",
        "color": "blue",
        "text": "Rationalising denominators is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "10. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Rationalising denominators: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "10. Exam Insight",
        "color": "green",
        "text": "For Rationalising denominators, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Rationalising denominators",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Rationalising denominators.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Rationalising denominators is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Rationalising denominators.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Rationalising denominators?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Rationalising denominators be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "11. Conjugates — Deep Concept",
        "color": "blue",
        "text": "Conjugates is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "11. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Conjugates: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "11. Exam Insight",
        "color": "green",
        "text": "For Conjugates, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Conjugates",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Conjugates.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Conjugates is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Conjugates.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Conjugates?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Conjugates be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "12. Ordering real numbers — Deep Concept",
        "color": "blue",
        "text": "Ordering real numbers is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "12. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Ordering real numbers: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "12. Exam Insight",
        "color": "green",
        "text": "For Ordering real numbers, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Ordering real numbers",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Ordering real numbers.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Ordering real numbers is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Ordering real numbers.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Ordering real numbers?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Ordering real numbers be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "13. Approximation and estimation — Deep Concept",
        "color": "blue",
        "text": "Approximation and estimation is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "13. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Approximation and estimation: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "13. Exam Insight",
        "color": "green",
        "text": "For Approximation and estimation, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Approximation and estimation",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Approximation and estimation.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Approximation and estimation is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Approximation and estimation.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Approximation and estimation?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Approximation and estimation be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "14. Rational versus irrational results — Deep Concept",
        "color": "blue",
        "text": "Rational versus irrational results is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "14. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Rational versus irrational results: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "14. Exam Insight",
        "color": "green",
        "text": "For Rational versus irrational results, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Rational versus irrational results",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Rational versus irrational results.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Rational versus irrational results is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Rational versus irrational results.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Rational versus irrational results?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Rational versus irrational results be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "15. Common errors and misconceptions — Deep Concept",
        "color": "blue",
        "text": "Common errors and misconceptions is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "15. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Common errors and misconceptions: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "15. Exam Insight",
        "color": "green",
        "text": "For Common errors and misconceptions, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Common errors and misconceptions",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Common errors and misconceptions.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Common errors and misconceptions is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Common errors and misconceptions.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Common errors and misconceptions?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Common errors and misconceptions be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "Universal Problem-Solving Framework",
        "color": "blue",
        "text": "Read the question twice. List givens. Identify the exact target. Select the rule that matches the information. Check its conditions. Substitute carefully. Simplify line by line. Verify using the original statement or an independent method. Finish with a clear conclusion. This workflow works for routine, application, HOTS and proof questions."
      },
      {
        "type": "concept",
        "title": "Error-Checking Ladder",
        "color": "blue",
        "text": "Check arithmetic, then algebraic structure, then theorem conditions, then graphical or geometrical meaning, and finally approximate size or sign. If two methods disagree, locate the first incorrect step instead of choosing whichever answer looks convenient."
      },
      {
        "type": "comparison",
        "title": "Definition vs Property vs Theorem",
        "color": "purple",
        "text": "A definition tells what a term or object means. A property is a characteristic that follows from definitions or established results. A theorem is a statement supported by proof. In examinations, distinguish these categories and never assume a theorem without satisfying its hypotheses."
      },
      {
        "type": "practice",
        "title": "Chapter Master Challenge",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the chapter's most important rule or formula and define its symbols.",
            "answer": "A correct rule with every symbol defined.",
            "solution": "Write the rule, define variables or notation and state conditions."
          },
          {
            "difficulty": "Understanding",
            "question": "Why must conditions be checked before applying a theorem?",
            "answer": "A theorem is valid only when its hypotheses are satisfied.",
            "solution": "A calculation can be numerically correct yet mathematically invalid if a hypothesis is missing."
          },
          {
            "difficulty": "Application",
            "question": "Give a five-mark solution structure.",
            "answer": "Given → required → rule/theorem → working → verification → conclusion.",
            "solution": "Show every important transformation and reason."
          },
          {
            "difficulty": "HOTS",
            "question": "What should you do if the final answer looks unreasonable?",
            "answer": "Recheck assumptions, signs, arithmetic and method.",
            "solution": "Use the error-checking ladder rather than changing the answer randomly."
          },
          {
            "difficulty": "Challenge",
            "question": "Why is understanding stronger than memorising a formula?",
            "answer": "It tells you when and why the formula applies and helps detect errors.",
            "solution": "Understanding connects the expression to its conditions and meaning."
          }
        ]
      }
    ]
  }
],
  "masterySupplement": [
  {
    "type": "concept",
    "title": "Mastery Lesson 1: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 1 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 1: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 1: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 1.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 1.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 2: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 2 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 2: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 2: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 2.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 2.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 3: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 3 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 3: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 3: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 3.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 3.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 4: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 4 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 4: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 4: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 4.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 4.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 5: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 5 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 5: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 5: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 5.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 5.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 6: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 6 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 6: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 6: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 6.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 6.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 7: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 7 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 7: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 7: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 7.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 7.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 8: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 8 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 8: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 8: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 8.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 8.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 9: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 9 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 9: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 9: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 9.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 9.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 10: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 10 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 10: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 10: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 10.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 10.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 11: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 11 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 11: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 11: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 11.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 11.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 12: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 12 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 12: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 12: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 12.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 12.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 13: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 13 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 13: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 13: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 13.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 13.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 14: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 14 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 14: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 14: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 14.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 14.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 15: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 15 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 15: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 15: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 15.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 15.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 16: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 16 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 16: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 16: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 16.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 16.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 17: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 17 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 17: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 17: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 17.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 17.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 18: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 18 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 18: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 18: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 18.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 18.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 19: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 19 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 19: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 19: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 19.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 19.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 20: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 20 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 20: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 20: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 20.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 20.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 21: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 21 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 21: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 21: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 21.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 21.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 22: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 22 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 22: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 22: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 22.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 22.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 23: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 23 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 23: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 23: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 23.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 23.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 24: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 24 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 24: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 24: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 24.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 24.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 25: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 25 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 25: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 25: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 25.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 25.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 26: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 26 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 26: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 26: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 26.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 26.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 27: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 27 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 27: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 27: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 27.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 27.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 28: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 28 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 28: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 28: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 28.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 28.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 29: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 29 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 29: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 29: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 29.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 29.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 30: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 30 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 30: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 30: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 30.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 30.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 31: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 31 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 31: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 31: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 31.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 31.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 32: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 32 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 32: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 32: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 32.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 32.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 33: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 33 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 33: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 33: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 33.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 33.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 34: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 34 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 34: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 34: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 34.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 34.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 35: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 35 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 35: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 35: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 35.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 35.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 36: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 36 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 36: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 36: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 36.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 36.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 37: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 37 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 37: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 37: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 37.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 37.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 38: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 38 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 38: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 38: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 38.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 38.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 39: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 39 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 39: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 39: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 39.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 39.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 40: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 40 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 40: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 40: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 40.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 40.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 41: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 41 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 41: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 41: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 41.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 41.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 42: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 42 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 42: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 42: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 42.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 42.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 43: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 43 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 43: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 43: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 43.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 43.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Mastery Lesson 44: Deep Reasoning Cycle",
    "color": "blue",
    "text": "This mastery lesson revisits the core ideas of Chapter 1 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 44 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
  },
  {
    "type": "example",
    "title": "Mastery Lesson 44: Worked-Method Template",
    "color": "orange",
    "text": "Question-reading: underline the givens and circle the required quantity. Representation: rewrite the data in a form that exposes the structure. Rule selection: name the exact definition/theorem/formula and check its hypotheses. Execution: substitute carefully, use brackets for negative values, and keep intermediate expressions visible. Verification: substitute the result back, compare with an alternate method, or inspect the graph/geometrical meaning. Conclusion: write the answer in complete mathematical notation. This template is deliberately reusable across easy, moderate, difficult and HOTS questions."
  },
  {
    "type": "practice",
    "title": "Mastery Lesson 44: Five-Level Practice",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Define the central idea tested in mastery lesson 44.",
        "answer": "State the chapter-specific definition accurately.",
        "solution": "Include the meaning and the condition under which it is used."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the relevant rule is valid in this situation.",
        "answer": "Because the required hypotheses or structural conditions are satisfied.",
        "solution": "Name the condition and connect it to the given information."
      },
      {
        "difficulty": "Application",
        "question": "Describe the calculation or construction step by step.",
        "answer": "Identify data → select rule → substitute/work → simplify → verify.",
        "solution": "Show intermediate reasoning instead of jumping to the final answer."
      },
      {
        "difficulty": "HOTS",
        "question": "How would the method change if one important value changed sign or representation?",
        "answer": "Recheck conditions and substitute the changed value carefully.",
        "solution": "Never assume the old answer remains valid; test the new data from the definition."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an independent verification strategy for mastery lesson 44.",
        "answer": "Substitution, alternate method, graph, estimate, or theorem-based check.",
        "solution": "Choose a check that tests the result rather than repeating the same arithmetic."
      }
    ]
  }
]
};

window.ChapterData = ChapterData;
window.chapter = ChapterData;
