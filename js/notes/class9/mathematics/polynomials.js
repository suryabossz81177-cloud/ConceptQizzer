/* ConceptQizzer — Class 9 Mathematics — ULTRA DETAILED render-safe chapter file */
/* Preserves the previous chapter data and exposes both ChapterData and window.chapter. */
"use strict";

const ChapterData = {
  "id": "9-mathematics-polynomials",
  "title": "Polynomials",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 2,
  "file": "js/notes/class9/mathematics/polynomials.js",
  "enabled": true,
  "description": "A Class 9 standard, deeply detailed study of Polynomials. It explains polynomial expressions, terms, coefficients, degree, classification, value and zeroes, graphical interpretation, factorisation, algebraic identities and theorem-based reasoning. Previous notes are preserved and expanded with many step-by-step examples and exam-focused reasoning.",
  "learningObjectives": [
    "Read polynomial structure correctly.",
    "Find degree and classify polynomials.",
    "Evaluate polynomials at given values.",
    "Use zeros, Remainder Theorem and Factor Theorem.",
    "Expand and factorise using identities.",
    "Explain every step of a solution instead of relying on answer-only work.",
    "Use definitions, properties and algebraic reasoning to justify answers.",
    "Detect common traps and verify results independently."
  ],
  "prerequisiteCheck": [
    "Algebraic expressions",
    "Substitution",
    "Basic multiplication and factorisation"
  ],
  "conceptRoadmap": [
    "Meaning and structure",
    "Terms and coefficients",
    "Degree and classification",
    "Value of a polynomial",
    "Zeroes",
    "Remainder Theorem",
    "Factor Theorem",
    "Factorisation",
    "Algebraic identities",
    "Graphical interpretation"
  ],
  "comparisonTables": [
    {
      "title": "Classification by degree and terms",
      "columns": [
        "Feature",
        "Type",
        "Example"
      ],
      "rows": [
        [
          "Degree 0",
          "Constant",
          "7"
        ],
        [
          "Degree 1",
          "Linear",
          "3x−2"
        ],
        [
          "Degree 2",
          "Quadratic",
          "x²−5x+6"
        ],
        [
          "Degree 3",
          "Cubic",
          "2x³+x−1"
        ],
        [
          "One term",
          "Monomial",
          "5x²"
        ],
        [
          "Two terms",
          "Binomial",
          "x²−9"
        ],
        [
          "Three terms",
          "Trinomial",
          "x²+3x+2"
        ]
      ]
    }
  ],
  "theoremPropertyLab": [
    {
      "title": "Remainder Theorem",
      "statement": "Remainder on division by x−a is p(a).",
      "proof": "p(x)=(x−a)q(x)+r; put x=a to get p(a)=r."
    },
    {
      "title": "Factor Theorem",
      "statement": "x−a is a factor iff p(a)=0.",
      "proof": "The remainder is p(a), and a divisor is a factor exactly when its remainder is zero."
    }
  ],
  "formulaPropertyBank": [
    "p(a)=remainder when divided by x−a",
    "x−a is a factor ⇔ p(a)=0",
    "(a+b)²=a²+2ab+b²",
    "(a−b)²=a²−2ab+b²",
    "a²−b²=(a−b)(a+b)"
  ],
  "conceptConnections": [
    "Zeros connect equations and graphs.",
    "Remainder connects division with substitution.",
    "Factor theorem turns a zero into a factor.",
    "Identities connect expansion and factorisation."
  ],
  "mathematicalThinking": [
    "Before expanding, ask whether an identity matches.",
    "Before long division, check whether the Remainder Theorem is enough.",
    "Verify a factor by substitution."
  ],
  "errorDetective": [
    {
      "problem": "p(3)=5 means x−3 is a factor.",
      "answer": "False. It is a factor only when p(3)=0."
    },
    {
      "problem": "(−2)²=−4.",
      "answer": "False. (−2)²=4."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Find a quadratic polynomial with zeros 2 and −5.",
      "answer": "(x−2)(x+5)=x²+3x−10."
    }
  ],
  "realLifeMathematics": [
    "Polynomials model areas, costs, motion and production.",
    "Identities make repeated calculations faster."
  ],
  "mathematicalActivityLab": [
    {
      "title": "Identity verification",
      "steps": [
        "Choose values for a and b.",
        "Evaluate both sides numerically.",
        "Repeat with negative and fractional values.",
        "Explain why numerical checking is evidence, not a general proof."
      ]
    }
  ],
  "visualLearning": [
    "Use an area model for (a+b)².",
    "Sketch a quadratic and mark its x-axis zeros."
  ],
  "masterDefinitions": [
    {
      "term": "Polynomial",
      "definition": "An algebraic expression with non-negative integer powers of the variable."
    },
    {
      "term": "Zero",
      "definition": "A value a for which p(a)=0."
    },
    {
      "term": "Identity",
      "definition": "An equation true for all allowed values."
    }
  ],
  "formulaRevisionSheet": [
    "(a+b)²=a²+2ab+b²",
    "(a−b)²=a²−2ab+b²",
    "a²−b²=(a−b)(a+b)",
    "p(a)=remainder for divisor x−a"
  ],
  "questionBank": [
    {
      "question": "Degree of 4x⁵−2x²+7?",
      "answer": "5."
    },
    {
      "question": "Find p(2) for x²−3x+1.",
      "answer": "−1."
    },
    {
      "question": "Is x+1 a factor of x³−x²−x+1?",
      "answer": "Yes, because p(−1)=0."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Show Answer must reveal the final answer followed by the complete step-by-step solution."
  },
  "practiceSets": [
    {
      "title": "Practice Set A",
      "questions": [
        "Classify 4x³−7x+1.",
        "Find p(−2) for x²+4x−1.",
        "Find the remainder of 2x³+x−5 on division by x−1.",
        "Factor x²−9.",
        "Expand (2x−3)²."
      ]
    }
  ],
  "timedPractice": [
    {
      "duration": "20 minutes",
      "instruction": "Solve 12 mixed polynomial questions with complete working."
    }
  ],
  "chapterQuiz": [
    {
      "question": "If p(2)=0, which is a factor?",
      "options": [
        "x+2",
        "x−2",
        "2x−1",
        "x²+2"
      ],
      "answer": "x−2"
    }
  ],
  "examZone": [
    "Use brackets for negative substitution.",
    "Write the theorem before applying it when appropriate.",
    "Recognise identity patterns.",
    "Write formulas before substitution where appropriate.",
    "Use complete mathematical statements in proof/reasoning questions.",
    "Recheck signs, brackets and powers before finalising an answer."
  ],
  "commonMistakes": [
    "Confusing degree with coefficient.",
    "Forgetting zero coefficients when identifying degree.",
    "Treating an example check as a proof of an identity.",
    "Confusing a concept definition with an example.",
    "Skipping the verification step.",
    "Swapping ordered coordinates.",
    "Ignoring restrictions such as a denominator being non-zero.",
    "Using an algebraic identity with an incorrect sign."
  ],
  "masterRevision": [
    "Structure → degree → evaluation → zeros → theorems → identities."
  ],
  "detailedSummary": [
    "Polynomial expressions use non-negative integer powers.",
    "Degree is the highest exponent with a non-zero coefficient.",
    "Zeros make the polynomial zero.",
    "Remainder and Factor Theorems turn substitution into powerful shortcuts.",
    "Identities make expansion and factorisation efficient."
  ],
  "finalChapterTest": [
    {
      "question": "For p(x)=x³−6x²+11x−6, prove x−1 is a factor and factorise p(x).",
      "answer": "p(x)=(x−1)(x−2)(x−3).",
      "solution": "p(1)=1−6+11−6=0, so x−1 is a factor. Division gives x²−5x+6=(x−2)(x−3). Hence p(x)=(x−1)(x−2)(x−3)."
    }
  ],
  "importantPoints": [
    "p(a)=0 means a is a zero.",
    "x−a is a factor iff p(a)=0.",
    "Use identities in both directions.",
    "Negative substitution requires brackets.",
    "Show substitutions clearly in Class 9 solutions.",
    "Do not skip sign checks when negative numbers are involved.",
    "Use the definition or theorem that directly justifies the step.",
    "A correct final answer with no reasoning may lose marks in descriptive questions.",
    "A polynomial has only non-negative integer powers of the variable.",
    "Degree is the highest power with a non-zero coefficient.",
    "x-a is a factor if and only if p(a)=0.",
    "For division by x-a, the remainder is p(a).",
    "Use identities in both expansion and factorisation."
  ],
  "keyTerms": [
    "Polynomial",
    "Term",
    "Coefficient",
    "Degree",
    "Zero",
    "Remainder Theorem",
    "Factor Theorem",
    "Identity",
    "Factorisation"
  ],
  "chapterSummary": "Polynomials builds the algebraic language and techniques required for later mathematics: structure, degree, evaluation, zeros, theorem-based factor checks and identity-based factorisation. The enhanced version keeps the earlier material while adding deeper explanations, more worked examples, reasoning-based practice and stronger Class 9 exam preparation.\n\nMastering this chapter means you should be able to explain the definition, recognise the concept in unfamiliar questions, solve routine and higher-order examples, justify each step, detect common errors, and verify your final answer.",
  "sections": [
    {
      "id": "polynomial-meaning-and-structure",
      "title": "Polynomial: Meaning and Structure",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A polynomial in one variable is an expression in which the variable has only non-negative integer exponents and the coefficients are numbers. Terms are joined by addition or subtraction. Examples include 3x²−5x+7, x⁴−2 and 9.\n\nExpressions such as 1/x, √x and x⁻¹ are not polynomials in x because the exponents are not non-negative integers.\n\nDeep Class 9 explanation: A polynomial in one variable is an algebraic expression in which the exponent of the variable in every term is a non-negative integer. The coefficient may be any real number. Thus 5x^3−2x+7 is a polynomial, while 1/x+x², √x+1 and x^(1/2)+3 are not polynomials in x. The terms are separated by plus or minus signs. A missing power has coefficient zero, so x²+5 can be viewed as x²+0x+5 when comparing coefficients."
        },
        {
          "type": "example",
          "title": "Identify",
          "color": "orange",
          "text": "Problem: Is 4x³−7x+2 a polynomial?\n\nComplete Solution:\nYes. The exponents 3,1,0 are all non-negative integers."
        },
        {
          "type": "example",
          "title": "Non-example",
          "color": "orange",
          "text": "Problem: Is 2/x+1 a polynomial?\n\nComplete Solution:\nNo. 2/x=2x⁻¹, whose exponent is −1."
        },
        {
          "type": "example",
          "title": "Identify a non-polynomial",
          "color": "orange",
          "text": "Problem: Is 3x^2+1/x a polynomial in x?\n\nComplete Solution:\nNo. 1/x=x^−1 contains a negative exponent."
        },
        {
          "type": "example",
          "title": "Missing term",
          "color": "orange",
          "text": "Problem: Write x^3+4 in descending powers.\n\nComplete Solution:\nx^3+0x^2+0x+4."
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
          "text": "A polynomial in x is an expression made from terms whose coefficients are numbers and whose powers of x are non-negative integers. Thus 3x²-5x+7 is a polynomial, while 1/x, √x and x^-2 are not polynomials in x."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "In 4x³-7x+9, the terms are 4x³, -7x and 9. Their coefficients are 4, -7 and 9."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "In -2x²+5, the missing x-term has coefficient 0. It is often useful to write -2x²+0x+5 when comparing coefficients."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "3 is a constant polynomial because it contains no variable."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "x⁴+2x²-1 is a polynomial even though the x³ and x terms are missing; missing terms simply have zero coefficients."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Check the exponent first. A negative or fractional exponent is a quick warning that the expression is not a polynomial."
        }
      ]
    },
    {
      "id": "terms-coefficients-and-degree",
      "title": "Terms, Coefficients and Degree",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A term is a part separated by + or −. Its coefficient is its numerical factor. The degree of a non-zero polynomial is the greatest exponent of the variable with a non-zero coefficient. A constant non-zero polynomial has degree 0.\n\nLike terms have identical variable parts and exponents, so their coefficients can be combined. Unlike terms cannot be combined directly.\n\nDeep Class 9 explanation: The coefficient of a term is the numerical factor multiplying the variable part. In −7x³, the coefficient is −7. The degree of a non-zero polynomial is the highest exponent with a non-zero coefficient. The degree is not the number of terms. The zero polynomial is treated separately because it has no unique highest power. In ordered expressions, arranging terms from highest power to lowest power is called standard form."
        },
        {
          "type": "example",
          "title": "Degree",
          "color": "orange",
          "text": "Problem: Find the degree of 7x⁵−3x²+x−8.\n\nComplete Solution:\nThe highest exponent is 5, so degree=5."
        },
        {
          "type": "example",
          "title": "Like terms",
          "color": "orange",
          "text": "Problem: Simplify 4x²+7x²−3x.\n\nComplete Solution:\nThe x² terms combine: 11x²−3x."
        },
        {
          "type": "example",
          "title": "Degree",
          "color": "orange",
          "text": "Problem: Find the degree of 7−2x^5+3x^2.\n\nComplete Solution:\nThe highest exponent is 5, so degree=5."
        },
        {
          "type": "example",
          "title": "Coefficient",
          "color": "orange",
          "text": "Problem: Find the coefficient of x^4 in −9x^4+2x−1.\n\nComplete Solution:\nThe coefficient is −9."
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
          "text": "The degree of a non-zero polynomial is the highest exponent of the variable with a non-zero coefficient. The zero polynomial needs special care because its degree is not defined in the usual school treatment."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Degree of 5x⁴-2x²+1 is 4."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Degree of -9x+11 is 1."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Degree of 17 is 0 because a non-zero constant can be written as 17x⁰."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "In 3x⁵+0x⁴+2x²-8, the degree is 5."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "The number of terms and the degree are different ideas: 7x⁴+2x has two terms but degree 4."
        }
      ]
    },
    {
      "id": "types-of-polynomials",
      "title": "Types of Polynomials",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "By degree, a polynomial can be constant, linear, quadratic, cubic and so on. By number of terms it can be monomial, binomial or trinomial. These classifications can be combined, such as quadratic trinomial.\n\nClassification helps identify which techniques are likely to be useful.\n\nDeep Class 9 explanation: By degree, a non-zero constant is degree 0, a linear polynomial has degree 1, a quadratic has degree 2 and a cubic has degree 3. By number of terms, one term is a monomial, two terms a binomial and three terms a trinomial. These two classifications describe different features and should not be confused."
        },
        {
          "type": "example",
          "title": "Classify",
          "color": "orange",
          "text": "Problem: Classify 5x²−2x+8.\n\nComplete Solution:\nIt is a quadratic trinomial."
        },
        {
          "type": "example",
          "title": "Classify",
          "color": "orange",
          "text": "Problem: Classify 7x³−1.\n\nComplete Solution:\nIt is a cubic binomial."
        },
        {
          "type": "example",
          "title": "Classify by degree",
          "color": "orange",
          "text": "Problem: Classify 4x^2−x+7.\n\nComplete Solution:\nIt is a quadratic trinomial."
        },
        {
          "type": "example",
          "title": "Classify by terms",
          "color": "orange",
          "text": "Problem: Classify 5x^3.\n\nComplete Solution:\nIt is a cubic monomial."
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
          "text": "By number of terms, a polynomial may be a monomial, binomial or trinomial. By degree, it may be linear, quadratic, cubic, etc. Classification depends on the feature being asked."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "7x is a monomial and linear polynomial."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "x²-9 is a binomial and quadratic polynomial."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "2x³+x-5 is a trinomial and cubic polynomial."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "12 is a monomial and constant polynomial."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "A polynomial can have more than one label, such as 'quadratic binomial'."
        }
      ]
    },
    {
      "id": "value-of-a-polynomial",
      "title": "Value of a Polynomial",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "To find p(a), substitute a for x everywhere. Negative values must be placed inside brackets so that powers are evaluated correctly. Evaluation is the bridge between symbolic algebra and numerical calculation.\n\nDeep Class 9 explanation: To find p(a), replace every occurrence of x by a and simplify carefully. Parentheses are essential for negative substitutions. For example, if p(x)=x²−3x+2, then p(−2)=(-2)²−3(-2)+2 =4+6+2=12. Evaluation is the bridge between an algebraic expression and numerical output."
        },
        {
          "type": "example",
          "title": "Evaluate",
          "color": "orange",
          "text": "Problem: For p(x)=2x²−5x+3, find p(−1).\n\nComplete Solution:\np(−1)=2(−1)²−5(−1)+3=2+5+3=10."
        },
        {
          "type": "example",
          "title": "Evaluate",
          "color": "orange",
          "text": "Problem: Find p(2) for p(x)=x³−4x+1.\n\nComplete Solution:\np(2)=8−8+1=1."
        },
        {
          "type": "example",
          "title": "Negative substitution",
          "color": "orange",
          "text": "Problem: Find p(−3) for p(x)=x^2+2x−1.\n\nComplete Solution:\np(−3)=9−6−1=2."
        },
        {
          "type": "example",
          "title": "Zero value",
          "color": "orange",
          "text": "Problem: Find p(0) for p(x)=6x^3−4x+9.\n\nComplete Solution:\np(0)=9."
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
          "text": "To evaluate p(x) at x=a, replace every x by a, including x², x³ and so on. Parentheses are essential when a is negative."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "If p(x)=x²-3x+2, then p(2)=4-6+2=0."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For p(x)=2x³-x+4, p(-1)=2(-1)³-(-1)+4=-2+1+4=3."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "For p(x)=5x²+1, p(0)=1."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If p(x)=x³-4x, then p(3)=27-12=15."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "When substituting a negative value, write it in parentheses before applying powers."
        }
      ]
    },
    {
      "id": "zeros-of-a-polynomial",
      "title": "Zeros of a Polynomial",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A zero of p(x) is a value a for which p(a)=0. The word zero refers to the input value that makes the polynomial's value zero.\n\nGraphically, zeros correspond to points where the graph meets the x-axis. A polynomial can have more than one zero.\n\nDeep Class 9 explanation: A zero of p(x) is a value a for which p(a)=0. For a polynomial represented by y=p(x), a real zero is the x-coordinate of a point where the graph meets the x-axis. A polynomial may have one, two or more real zeroes depending on its degree and shape, but the class 9 focus is on understanding the meaning and checking zeroes by substitution."
        },
        {
          "type": "example",
          "title": "Linear zero",
          "color": "orange",
          "text": "Problem: Find the zero of 3x−12.\n\nComplete Solution:\n3x−12=0, so x=4."
        },
        {
          "type": "example",
          "title": "Quadratic zero check",
          "color": "orange",
          "text": "Problem: Check whether 2 is a zero of x²−5x+6.\n\nComplete Solution:\n4−10+6=0, so 2 is a zero."
        },
        {
          "type": "example",
          "title": "Check zero",
          "color": "orange",
          "text": "Problem: Is 2 a zero of x^2−4?\n\nComplete Solution:\np(2)=4−4=0, so 2 is a zero."
        },
        {
          "type": "example",
          "title": "Not a zero",
          "color": "orange",
          "text": "Problem: Is 3 a zero of x^2−4?\n\nComplete Solution:\np(3)=9−4=5≠0, so 3 is not a zero."
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
          "text": "A number a is a zero of p(x) if p(a)=0. Geometrically, for a polynomial graph y=p(x), a zero is an x-coordinate where the graph meets the x-axis."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For p(x)=x-5, p(5)=0, so 5 is a zero."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For p(x)=x²-9, p(3)=0 and p(-3)=0, so both 3 and -3 are zeroes."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "For p(x)=2x+6, the zero is found from 2x+6=0, giving x=-3."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "For p(x)=x²+1, there is no real zero because x²+1 cannot equal 0 for real x."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "A zero is a number, not the entire expression x-a. The expression x-a is associated with the factor theorem."
        }
      ]
    },
    {
      "id": "remainder-theorem",
      "title": "Remainder Theorem",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "When p(x) is divided by x−a, the remainder is p(a). The reason is the division form p(x)=(x−a)q(x)+r. Substituting x=a eliminates the first term and leaves p(a)=r.\n\nDeep Class 9 explanation: If p(x) is divided by x−a, the remainder is p(a). This follows from the division algorithm p(x)=(x−a)q(x)+r, where r is constant because the divisor has degree 1. Putting x=a makes the first term zero, leaving p(a)=r. For x+a, write the divisor as x−(−a), so the remainder is p(−a)."
        },
        {
          "type": "example",
          "title": "Remainder",
          "color": "orange",
          "text": "Problem: Find the remainder when x³−4x+7 is divided by x−2.\n\nComplete Solution:\np(2)=8−8+7=7, so remainder=7."
        },
        {
          "type": "example",
          "title": "Remainder",
          "color": "orange",
          "text": "Problem: Find the remainder when x^2+3x+5 is divided by x−1.\n\nComplete Solution:\np(1)=1+3+5=9."
        },
        {
          "type": "example",
          "title": "Divisor x+2",
          "color": "orange",
          "text": "Problem: Find the remainder when x^3−1 is divided by x+2.\n\nComplete Solution:\nUse p(−2)=−8−1=−9."
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
          "text": "When p(x) is divided by x-a, the remainder is p(a). This turns polynomial division into a direct substitution problem."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For p(x)=x³+2x²-5, the remainder on division by x-2 is p(2)=8+8-5=11."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For p(x)=2x²-7x+3, the remainder on division by x+1 is p(-1)=2+7+3=12."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "If p(4)=9, then division of p(x) by x-4 leaves remainder 9."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If p(-3)=0, division by x+3 leaves remainder 0."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "For divisor x+a, substitute -a, not a."
        }
      ]
    },
    {
      "id": "factor-theorem",
      "title": "Factor Theorem",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "x−a is a factor of p(x) if and only if p(a)=0. This follows directly from the Remainder Theorem because a divisor is a factor exactly when the remainder is zero.\n\nDeep Class 9 explanation: The Factor Theorem is a direct consequence of the Remainder Theorem. If p(a)=0, the remainder on division by x−a is zero, so x−a is a factor. Conversely, if x−a is a factor, the remainder must be zero, hence p(a)=0. This gives a fast method for testing factors without polynomial long division."
        },
        {
          "type": "example",
          "title": "Factor test",
          "color": "orange",
          "text": "Problem: Is x−3 a factor of x³−4x²+x+6?\n\nComplete Solution:\np(3)=27−36+3+6=0, so x−3 is a factor."
        },
        {
          "type": "example",
          "title": "Test factor",
          "color": "orange",
          "text": "Problem: Is x+1 a factor of x^2+3x+2?\n\nComplete Solution:\np(−1)=1−3+2=0, so yes."
        },
        {
          "type": "example",
          "title": "Find a parameter",
          "color": "orange",
          "text": "Problem: If x−2 is a factor of x^2+kx−6, find k.\n\nComplete Solution:\np(2)=4+2k−6=0, so k=1."
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
          "text": "x-a is a factor of p(x) if and only if p(a)=0. It is the remainder theorem with the special case of remainder zero."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For p(x)=x²-5x+6, p(2)=4-10+6=0, so x-2 is a factor."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For p(x)=x³-8, p(2)=0, so x-2 is a factor."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "To test x+3, evaluate p(-3). If the value is zero, x+3 is a factor."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If p(1)=7, then x-1 is not a factor."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "The sign inside the divisor reverses in the substitution: x+5 → use p(-5)."
        }
      ]
    },
    {
      "id": "algebraic-identities",
      "title": "Algebraic Identities",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "An identity is true for every allowed value of its variables. Identities are especially useful because expansion and factorisation become two directions of the same process.\n\nThe most useful Class 9 identities include square identities, difference of squares and (x+a)(x+b). Recognising the pattern is usually faster and safer than multiplying everything blindly.\n\nDeep Class 9 explanation: Identities are equations true for all permissible values of the variables. Unlike an equation that may be true only for particular values, an identity remains true universally. Identities are used in both expansion and factorisation. The safest approach is to match the expression with a known pattern before multiplying everything out."
        },
        {
          "type": "example",
          "title": "Expand",
          "color": "orange",
          "text": "Problem: Expand (x+5)².\n\nComplete Solution:\nx²+10x+25."
        },
        {
          "type": "example",
          "title": "Factorise",
          "color": "orange",
          "text": "Problem: Factorise x²−25.\n\nComplete Solution:\nx²−5²=(x−5)(x+5)."
        },
        {
          "type": "example",
          "title": "Product",
          "color": "orange",
          "text": "Problem: Expand (x+2)(x+7).\n\nComplete Solution:\nx²+9x+14."
        },
        {
          "type": "example",
          "title": "Expand",
          "color": "orange",
          "text": "Problem: Expand (2x+3)^2.\n\nComplete Solution:\n4x^2+12x+9."
        },
        {
          "type": "example",
          "title": "Factorise by identity",
          "color": "orange",
          "text": "Problem: Factorise 9x^2−25.\n\nComplete Solution:\n(3x−5)(3x+5)."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "(a+b)²=a²+2ab+b²\n(a−b)²=a²−2ab+b²\na²−b²=(a−b)(a+b)\n(x+a)(x+b)=x²+(a+b)x+ab"
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Identities are equations true for every value of the variables. They are useful for expansion, simplification, mental calculation and factorisation."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "(a+b)² = a²+2ab+b². For a=3,b=2, both sides equal 25."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "(a-b)² = a²-2ab+b². For a=5,b=2, the result is 9."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "a²-b²=(a-b)(a+b). Thus 49-25 = (7-5)(7+5)=24."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "(x+a)(x+b)=x²+(a+b)x+ab. For a=2,b=3, x²+5x+6."
        },
        {
          "type": "example",
          "title": "Worked Example 5",
          "color": "orange",
          "text": "(a+b+c)²=a²+b²+c²+2ab+2bc+2ca."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Use identities in reverse when factorising."
        }
      ]
    },
    {
      "id": "factorisation-by-common-factor-and-grouping",
      "title": "Factorisation by Common Factor and Grouping",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Factorisation means expressing a polynomial as a product of simpler factors. First look for a common factor. If no single factor is common to every term, grouping may reveal a common binomial. The result should always be checked by multiplication."
        },
        {
          "type": "example",
          "title": "Common factor",
          "color": "orange",
          "text": "Problem: Factorise 6x²+9x.\n\nComplete Solution:\nThe common factor is 3x: 6x²+9x=3x(2x+3)."
        },
        {
          "type": "example",
          "title": "Grouping",
          "color": "orange",
          "text": "Problem: Factorise ax+ay+bx+by.\n\nComplete Solution:\nGroup: a(x+y)+b(x+y)=(a+b)(x+y)."
        },
        {
          "type": "example",
          "title": "Difference of squares",
          "color": "orange",
          "text": "Problem: Factorise 25x²−49.\n\nComplete Solution:\n(5x)²−7²=(5x−7)(5x+7)."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Look for a common factor first.\nUse identities when the pattern is visible.\nMultiply back to verify."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Factorisation expresses a polynomial as a product. First look for a common numerical or algebraic factor; if none is common to every term, grouping may reveal a common binomial factor."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "6x²+9x = 3x(2x+3)."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "x²+5x+6 = x²+2x+3x+6 = x(x+2)+3(x+2)=(x+2)(x+3)."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "4a²-12a = 4a(a-3)."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "2x³+6x²+3x+9 = 2x²(x+3)+3(x+3)=(x+3)(2x²+3)."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "After factorisation, multiply the factors back mentally to check."
        }
      ]
    },
    {
      "id": "using-zeroes-to-factorise-a-quadratic",
      "title": "Using Zeroes to Factorise a Quadratic",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "If a quadratic polynomial has known zeroes α and β, then a polynomial with leading coefficient 1 can be written as (x−α)(x−β). For a general quadratic ax²+bx+c, the leading coefficient must be accounted for."
        },
        {
          "type": "example",
          "title": "Two known zeroes",
          "color": "orange",
          "text": "Problem: Form a quadratic polynomial whose zeroes are 3 and −2.\n\nComplete Solution:\np(x)=(x−3)(x+2)=x²−x−6."
        },
        {
          "type": "example",
          "title": "Check a factor",
          "color": "orange",
          "text": "Problem: Is x−4 a factor of x²−7x+12?\n\nComplete Solution:\np(4)=16−28+12=0, so x−4 is a factor."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "A zero α corresponds to factor x−α.\nCheck signs carefully.\nFor a monic quadratic, sum/product relationships are useful."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "If a quadratic has zeroes α and β and leading coefficient 1, it can be written as (x-α)(x-β). For a general quadratic ax²+bx+c, factorisation may require taking out a coefficient first or using suitable identities."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Zeroes 2 and 5 give (x-2)(x-5)=x²-7x+10."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Zeroes -3 and 4 give (x+3)(x-4)=x²-x-12."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "x²-9 has zeroes 3 and -3, so it becomes (x-3)(x+3)."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "For x²+7x+12, numbers 3 and 4 have product 12 and sum 7, so the factorisation is (x+3)(x+4)."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "For x²+bx+c, search for two numbers whose product is c and sum is b."
        }
      ]
    }
  ]
};

window.ChapterData = ChapterData;
window.chapter = ChapterData;
