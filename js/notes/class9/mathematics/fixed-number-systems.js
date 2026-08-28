/* ConceptQizzer — Class 9 Mathematics — render-safe chapter file */
/* Required global ChapterData declaration. Do not convert to ES module export. */

"use strict";

const ChapterData = {
  "id": "9-mathematics-number-systems",
  "title": "Number Systems",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 1,
  "file": "js/notes/class9/mathematics/number-systems.js",
  "enabled": true,
  "description": "A Class 9 standard, deeply detailed study of Number Systems. It builds the number hierarchy from natural numbers to real numbers, explains rational and irrational numbers, decimal expansions, locating numbers on the number line, laws of exponents, surds and rationalisation. Earlier notes and examples are retained and expanded with step-by-step reasoning, proof-style thinking, exam traps and additional practice.",
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
    "A correct final answer with no reasoning may lose marks in descriptive questions."
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
  "chapterSummary": "Number Systems develops the complete real-number framework and the algebraic skills needed to work confidently with fractions, decimals, radicals and powers. The enhanced version keeps the earlier material while adding deeper explanations, more worked examples, reasoning-based practice and stronger Class 9 exam preparation.",
  "sections": [
    {
      "id": "number-sets-and-the-real-number-system",
      "title": "Number Sets and the Real Number System",
      "blocks": [
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
        }
      ]
    }
  ]
};
