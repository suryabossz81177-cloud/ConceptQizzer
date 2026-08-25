window.ChapterData = {
  "id": "8-mathematics-factorisation",
  "class": 8,
  "subject": "Mathematics",
  "chapterNumber": 14,
  "title": "Factorisation",
  "description": "Too-detailed Class 8 Mathematics notes on factors, common factors, grouping, algebraic identities, difference of squares, fractional coefficients, reasoning and challenging problems.",
  "summary": "Factorisation is the reverse of expansion. Expressions are factorised using common factors, grouping and standard identities, followed by verification.",
  "sections": [
    {
      "title": "📘 Chapter Introduction",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Factorisation is the process of writing an algebraic expression as a product of its factors. It is the reverse of expansion: instead of multiplying factors to obtain an expression, we start with an expression and find the factors that were multiplied."
        },
        {
          "type": "paragraph",
          "text": "Why this topic matters: factorisation makes algebraic expressions shorter, easier to understand and easier to simplify. It is also a foundation for solving equations and many later algebraic problems."
        },
        {
          "type": "application",
          "title": "🌍 Real-Life Connection",
          "text": "Grouping objects into equal groups is a simple way to understand factors. In algebra, we similarly look for a common quantity or pattern that can be taken out, leaving simpler factors."
        },
        {
          "type": "fact",
          "title": "💡 Big Idea",
          "text": "Expansion and factorisation are opposite processes. For example, 3(x + 4) expands to 3x + 12, while 3x + 12 factorises back to 3(x + 4)."
        }
      ]
    },
    {
      "title": "🔹 1. Factors of an Algebraic Expression",
      "blocks": [
        {
          "type": "definition",
          "title": "Factor",
          "text": "A factor is an algebraic expression that is multiplied by another expression to produce the given expression."
        },
        {
          "type": "paragraph",
          "text": "For example, in 6x, the factors include 6 and x. In 12xy, 12, x and y are factors, and products such as 3 × 4xy can also be used to represent the same expression."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 1",
          "question": "Identify the factors of 15x²y.",
          "steps": [
            "Write the coefficient and variables separately.",
            "15x²y = 15 × x × x × y.",
            "Therefore 15, x, x and y are the basic factors."
          ],
          "answer": "Basic factors: 15, x, x and y."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 2",
          "question": "Write 24ab as a product in two different ways.",
          "steps": [
            "24ab = 6 × 4ab.",
            "Also, 24ab = 8 × 3ab."
          ],
          "answer": "Possible factorizations include 6 × 4ab and 8 × 3ab."
        }
      ]
    },
    {
      "title": "🔹 2. Common Factors",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The first step in many factorisation problems is to look for a factor common to every term."
        },
        {
          "type": "rule",
          "title": "Common Factor Rule",
          "text": "If every term contains the same numerical factor, variable, or algebraic factor, take the greatest useful common factor outside the brackets."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 3 — Numerical Common Factor",
          "question": "Factorise 18x + 30.",
          "steps": [
            "The greatest common factor of 18 and 30 is 6.",
            "Take 6 outside the bracket.",
            "18x + 30 = 6(3x + 5).",
            "Check by expanding: 6 × 3x + 6 × 5 = 18x + 30."
          ],
          "answer": "6(3x + 5)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 4 — Variable Common Factor",
          "question": "Factorise 12x² + 18x.",
          "steps": [
            "The common numerical factor is 6.",
            "Both terms contain x.",
            "So the common factor is 6x.",
            "12x² + 18x = 6x(2x + 3)."
          ],
          "answer": "6x(2x + 3)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 5 — More Than One Variable",
          "question": "Factorise 15a²b + 25ab².",
          "steps": [
            "The common numerical factor is 5.",
            "Both terms contain a and b.",
            "Common factor = 5ab.",
            "15a²b + 25ab² = 5ab(3a + 5b)."
          ],
          "answer": "5ab(3a + 5b)."
        }
      ]
    },
    {
      "title": "🔹 3. Factorisation by Taking Out the Common Factor",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This method is based on the distributive property. If an expression has the form ax + ay, the common factor a can be taken outside: ax + ay = a(x + y)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 6",
          "question": "Factorise 7x + 21.",
          "steps": [
            "Common factor of 7x and 21 is 7.",
            "Take 7 outside.",
            "7x + 21 = 7(x + 3)."
          ],
          "answer": "7(x + 3)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 7",
          "question": "Factorise 16p²q − 24pq².",
          "steps": [
            "Common numerical factor = 8.",
            "Common variable factor = pq.",
            "Common factor = 8pq.",
            "16p²q − 24pq² = 8pq(2p − 3q)."
          ],
          "answer": "8pq(2p − 3q)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 8 — Negative Common Factor",
          "question": "Factorise −6x + 15.",
          "steps": [
            "A common factor is 3.",
            "Taking −3 can make the bracket start with a positive x-term.",
            "−6x + 15 = −3(2x − 5)."
          ],
          "answer": "−3(2x − 5)."
        },
        {
          "type": "tip",
          "title": "🧠 Tip",
          "text": "When signs look awkward, choosing a negative common factor can make the expression inside the bracket simpler."
        }
      ]
    },
    {
      "title": "🔹 4. Factorisation by Grouping",
      "blocks": [
        {
          "type": "paragraph",
          "text": "When four terms do not have one common factor, we can sometimes group them into pairs. The goal is to create a common bracket."
        },
        {
          "type": "rule",
          "title": "Grouping Pattern",
          "text": "ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 9",
          "question": "Factorise ax + ay + bx + by.",
          "steps": [
            "Group the first two and last two terms.",
            "a(x + y) + b(x + y).",
            "The common factor is (x + y).",
            "Take it outside."
          ],
          "answer": "(a + b)(x + y)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 10",
          "question": "Factorise 3x + 3y + 5x + 5y.",
          "steps": [
            "Group: (3x + 3y) + (5x + 5y).",
            "Take common factors: 3(x + y) + 5(x + y).",
            "Take (x + y) common.",
            "Result = (3 + 5)(x + y)."
          ],
          "answer": "8(x + y)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 11",
          "question": "Factorise 2a² + 6a + ab + 3b.",
          "steps": [
            "Group: (2a² + 6a) + (ab + 3b).",
            "Take factors: 2a(a + 3) + b(a + 3).",
            "Now (a + 3) is common.",
            "Factorised form = (2a + b)(a + 3)."
          ],
          "answer": "(2a + b)(a + 3)."
        }
      ]
    },
    {
      "title": "🔹 5. Factorisation Using Identities",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Some expressions match standard algebraic identities. Recognising the pattern can make factorisation much faster."
        },
        {
          "type": "formula",
          "title": "Important Identities",
          "formula": "a² + 2ab + b² = (a + b)²\na² − 2ab + b² = (a − b)²\na² − b² = (a + b)(a − b)"
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 12 — Perfect Square",
          "question": "Factorise x² + 10x + 25.",
          "steps": [
            "x² is the square of x.",
            "25 is the square of 5.",
            "2 × x × 5 = 10x.",
            "So the expression matches a² + 2ab + b².",
            "Therefore x² + 10x + 25 = (x + 5)²."
          ],
          "answer": "(x + 5)²."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 13 — Difference of Squares",
          "question": "Factorise x² − 49.",
          "steps": [
            "x² is a square.",
            "49 = 7².",
            "Use a² − b² = (a + b)(a − b).",
            "Therefore x² − 49 = (x + 7)(x − 7)."
          ],
          "answer": "(x + 7)(x − 7)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 14",
          "question": "Factorise 9p² − 24pq + 16q².",
          "steps": [
            "9p² = (3p)².",
            "16q² = (4q)².",
            "2 × 3p × 4q = 24pq.",
            "The middle term is negative.",
            "So the expression is (3p − 4q)²."
          ],
          "answer": "(3p − 4q)²."
        },
        {
          "type": "examTip",
          "title": "🎯 Identity Check",
          "text": "For a perfect-square trinomial, check: first term is a square, last term is a square, and the middle term is twice the product of their square roots."
        }
      ]
    },
    {
      "title": "🔹 6. Factorising the Difference of Two Squares",
      "blocks": [
        {
          "type": "definition",
          "title": "Difference of Squares",
          "text": "An expression of the form a² − b² can always be factorised as (a + b)(a − b)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 15",
          "question": "Factorise 25x² − 36y².",
          "steps": [
            "25x² = (5x)².",
            "36y² = (6y)².",
            "Apply the difference-of-squares identity.",
            "25x² − 36y² = (5x + 6y)(5x − 6y)."
          ],
          "answer": "(5x + 6y)(5x − 6y)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 16",
          "question": "Factorise 81a² − 100.",
          "steps": [
            "81a² = (9a)².",
            "100 = 10².",
            "Therefore 81a² − 100 = (9a + 10)(9a − 10)."
          ],
          "answer": "(9a + 10)(9a − 10)."
        }
      ]
    },
    {
      "title": "🔹 7. Factorisation of Expressions with Fractions",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Fractions can appear as numerical coefficients. The same factorisation rules still apply. When fractions are written in these notes, they are displayed as proper vertical mathematical fractions rather than slash notation."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 17",
          "question": "Factorise an expression with a fractional common factor.",
          "steps": [
            "Consider <span class=\"cq-fraction\"><span class=\"cq-num\">3x</span><span class=\"cq-den\">4</span></span> + <span class=\"cq-fraction\"><span class=\"cq-num\">9</span><span class=\"cq-den\">8</span></span>.",
            "A common factor is {F('3','8')}.",
            "<span class=\"cq-fraction\"><span class=\"cq-num\">3x</span><span class=\"cq-den\">4</span></span> + <span class=\"cq-fraction\"><span class=\"cq-num\">9</span><span class=\"cq-den\">8</span></span> = <span class=\"cq-fraction\"><span class=\"cq-num\">3</span><span class=\"cq-den\">8</span></span>(2x + 3)."
          ],
          "answer": "<span class=\"cq-fraction\"><span class=\"cq-num\">3</span><span class=\"cq-den\">8</span></span>(2x + 3)."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 18",
          "question": "Factorise an expression containing fractional coefficients.",
          "steps": [
            "Consider <span class=\"cq-fraction\"><span class=\"cq-num\">5a</span><span class=\"cq-den\">6</span></span> − <span class=\"cq-fraction\"><span class=\"cq-num\">10</span><span class=\"cq-den\">9</span></span>b.",
            "A common numerical factor can be selected using the least convenient denominator and then simplified carefully.",
            "The expression can be written as <span class=\"cq-fraction\"><span class=\"cq-num\">5</span><span class=\"cq-den\">18</span></span>(3a − 4b)."
          ],
          "answer": "<span class=\"cq-fraction\"><span class=\"cq-num\">5</span><span class=\"cq-den\">18</span></span>(3a − 4b)."
        },
        {
          "type": "warning",
          "title": "⚠️ Fraction Warning",
          "text": "Never cancel a factor across addition or subtraction. Factorisation must be done term by term before common factors are taken outside."
        }
      ]
    },
    {
      "title": "🔹 8. Choosing the Correct Method",
      "blocks": [
        {
          "type": "paragraph",
          "text": "A factorisation problem may be solved by different methods, but the quickest method depends on its structure."
        },
        {
          "type": "comparison",
          "title": "Method Guide",
          "items": [
            "All terms share a factor → take the common factor.",
            "Four terms can be paired → try grouping.",
            "Three terms match a² + 2ab + b² or a² − 2ab + b² → use a square identity.",
            "Two square terms are separated by subtraction → use difference of squares.",
            "Always check by expanding the final factors."
          ]
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 19 — Identify First",
          "question": "Factorise 4x² − 12x + 9.",
          "steps": [
            "First look for a common factor: none.",
            "Check the square pattern: 4x² = (2x)² and 9 = 3².",
            "2 × 2x × 3 = 12x and the middle sign is negative.",
            "So use the square identity."
          ],
          "answer": "(2x − 3)²."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 20 — Mixed Strategy",
          "question": "Factorise 6x² − 24.",
          "steps": [
            "Take the common factor 6.",
            "6(x² − 4).",
            "Now x² − 4 is a difference of squares.",
            "x² − 4 = (x + 2)(x − 2)."
          ],
          "answer": "6(x + 2)(x − 2)."
        }
      ]
    },
    {
      "title": "🧠 Think & Understand",
      "blocks": [
        {
          "type": "think",
          "title": "Why?",
          "text": "Why is factorisation called the reverse of expansion? Because expansion multiplies factors to form an expression, while factorisation rewrites the expression as a product."
        },
        {
          "type": "think",
          "title": "How?",
          "text": "How can you tell whether x² + 8x + 16 is a perfect-square expression? Check the square roots of the first and last terms and compare twice their product with the middle term."
        },
        {
          "type": "think",
          "title": "What If?",
          "text": "What happens if the middle term in a square trinomial is negative? The identity with (a − b)² may be appropriate."
        },
        {
          "type": "think",
          "title": "Reasoning",
          "text": "Why is x² + 16 not factorised using the difference-of-squares identity? Because it is a sum of squares, not a difference."
        },
        {
          "type": "think",
          "title": "HOTS",
          "text": "Can an expression have more than one factorisation form? Yes. A factor can sometimes be split further, so complete factorisation may contain several factors."
        }
      ]
    },
    {
      "title": "⚠️ Common Mistakes",
      "blocks": [
        {
          "type": "commonMistake",
          "title": "Sign Error",
          "mistake": "Writing (a + b)² = a² + b².",
          "correction": "The correct identity contains the middle term: a² + 2ab + b²."
        },
        {
          "type": "commonMistake",
          "title": "Middle Term",
          "mistake": "Forgetting the factor 2 in a perfect-square identity.",
          "correction": "Always calculate 2ab."
        },
        {
          "type": "commonMistake",
          "title": "Difference of Squares",
          "mistake": "Writing a² − b² = (a − b)².",
          "correction": "The correct factorisation is (a + b)(a − b)."
        },
        {
          "type": "commonMistake",
          "title": "Incomplete Factorisation",
          "mistake": "Stopping after taking a common factor when the bracket can be factorised further.",
          "correction": "Check the remaining bracket for identities or another common factor."
        },
        {
          "type": "commonMistake",
          "title": "Fraction Cancellation",
          "mistake": "Cancelling terms across addition or subtraction.",
          "correction": "Only common factors of a complete product may be cancelled."
        }
      ]
    },
    {
      "title": "🎯 Exam Zone",
      "blocks": [
        {
          "type": "formula",
          "title": "Must-Know Identities",
          "formula": "a² + 2ab + b² = (a + b)²\na² − 2ab + b² = (a − b)²\na² − b² = (a + b)(a − b)"
        },
        {
          "type": "examTip",
          "title": "Fast Method",
          "text": "Always check for a common factor before using an identity."
        },
        {
          "type": "examTip",
          "title": "Verification",
          "text": "Multiply the factors back. If the original expression returns, the factorisation is correct."
        },
        {
          "type": "examTip",
          "title": "Question Pattern",
          "text": "Common exam questions include factorising by common factor, grouping, standard identities, difference of squares and mixed-method expressions."
        }
      ]
    },
    {
      "title": "📝 Practice Questions",
      "blocks": [
        {
          "type": "practice",
          "title": "Basic",
          "questions": [
            "Factorise 12x + 18.",
            "Factorise 20a − 30b.",
            "Factorise 9p² + 12p.",
            "Write the three standard factorisation identities.",
            "Factorise x² − 25."
          ]
        },
        {
          "type": "practice",
          "title": "Standard",
          "questions": [
            "Factorise 15x² + 25x.",
            "Factorise 4a² − 12a + 9.",
            "Factorise 16p² − 81q².",
            "Factorise 3x + 3y + 7x + 7y.",
            "Factorise 2a² + 8a + ab + 4b."
          ]
        },
        {
          "type": "practice",
          "title": "Application",
          "questions": [
            "Express the area of a rectangle with algebraic dimensions in factorised form when its area is given as a polynomial.",
            "A square area is represented by x² + 12x + 36. Find its side length by factorisation.",
            "Factorise an algebraic expression representing the difference between two square areas."
          ]
        },
        {
          "type": "practice",
          "title": "HOTS & Reasoning",
          "questions": [
            "Explain why a² + b² cannot be factorised using the difference-of-squares identity.",
            "Find a suitable factorisation method for 5x² + 20x.",
            "A student writes x² − 10x + 25 = (x + 5)². Identify and correct the error.",
            "Factorise 2x² − 18 completely.",
            "Factorise 3a² − 12ab + 12b² completely."
          ]
        }
      ]
    },
    {
      "title": "🏆 Challenge Zone",
      "blocks": [
        {
          "type": "challenge",
          "title": "Challenge 1",
          "question": "Factorise 12x² − 75 completely.",
          "answer": "Take 3: 3(4x² − 25), then use difference of squares: 3(2x + 5)(2x − 5)."
        },
        {
          "type": "challenge",
          "title": "Challenge 2",
          "question": "Factorise 18a² − 48ab + 32b² completely.",
          "answer": "Take 2: 2(9a² − 24ab + 16b²) = 2(3a − 4b)²."
        },
        {
          "type": "challenge",
          "title": "Challenge 3",
          "question": "Factorise 4x² − 12xy + 9y² − 25z².",
          "answer": "First factorise the first three terms: (2x − 3y)² − (5z)². Then use difference of squares: (2x − 3y + 5z)(2x − 3y − 5z)."
        },
        {
          "type": "challenge",
          "title": "Challenge 4",
          "question": "Factorise 6a² + 15ab − 4a − 10b by grouping.",
          "answer": "Group: (6a² + 15ab) − (4a + 10b) = 3a(2a + 5b) − 2(2a + 5b) = (3a − 2)(2a + 5b)."
        }
      ]
    },
    {
      "title": "🔄 Chapter Revision",
      "blocks": [
        {
          "type": "formula",
          "title": "Formula Revision",
          "formula": "Common factor: ax + ay = a(x + y)\nGrouping: ax + ay + bx + by = (a + b)(x + y)\na² + 2ab + b² = (a + b)²\na² − 2ab + b² = (a − b)²\na² − b² = (a + b)(a − b)"
        },
        {
          "type": "paragraph",
          "title": "Quick Revision",
          "text": "1. Look for a common factor. 2. Check whether grouping is possible. 3. Look for standard identities. 4. Factorise completely. 5. Verify by expansion."
        },
        {
          "type": "important",
          "title": "Main Concept",
          "text": "Good factorisation is not just finding any factor. The aim is usually to write the expression as a product of simpler factors and continue until no useful factorisation remains."
        }
      ]
    },
    {
      "title": "⭐ Important Points",
      "blocks": [
        {
          "type": "keypoint",
          "title": "Common Factor",
          "text": "Take out the greatest useful common factor first."
        },
        {
          "type": "keypoint",
          "title": "Grouping",
          "text": "Pair terms to create a common bracket."
        },
        {
          "type": "keypoint",
          "title": "Perfect Square",
          "text": "Recognise the first square, last square and the middle term 2ab."
        },
        {
          "type": "keypoint",
          "title": "Difference of Squares",
          "text": "a² − b² factorises into (a + b)(a − b)."
        },
        {
          "type": "keypoint",
          "title": "Verification",
          "text": "Expansion is the best direct check of a factorisation."
        },
        {
          "type": "keypoint",
          "title": "Fractions",
          "text": "Fractional coefficients follow the same factorisation rules; display fractions vertically and simplify carefully."
        }
      ]
    },
    {
      "title": "🔑 Key Terms",
      "blocks": [
        {
          "type": "definition",
          "title": "Factor",
          "text": "An expression multiplied by another expression to produce a given expression."
        },
        {
          "type": "definition",
          "title": "Factorisation",
          "text": "Writing an algebraic expression as a product of its factors."
        },
        {
          "type": "definition",
          "title": "Common Factor",
          "text": "A factor shared by every term of an expression."
        },
        {
          "type": "definition",
          "title": "Identity",
          "text": "An algebraic equality that is true for all permissible values of its variables."
        },
        {
          "type": "definition",
          "title": "Perfect Square Trinomial",
          "text": "A three-term expression that can be written as the square of a binomial."
        },
        {
          "type": "definition",
          "title": "Difference of Squares",
          "text": "An expression of the form a² − b²."
        }
      ]
    },
    {
      "title": "📖 Chapter Summary",
      "blocks": [
        {
          "type": "summary",
          "title": "Complete Summary",
          "text": "Factorisation rewrites an algebraic expression as a product of simpler factors and reverses the process of expansion. The main methods are taking out a common factor, grouping terms, and using standard identities. The key identities are the two perfect-square identities and the difference-of-squares identity. A common factor should be checked first, and expressions should be factorised completely whenever possible. The final answer should be verified by multiplying the factors. Fractional coefficients can also be factorised using the same ideas, with fractions written in clear vertical form."
        }
      ]
    }
  ],
  "importantPoints": [
    "Look for a common factor first.",
    "Use grouping when four terms can produce a common bracket.",
    "Recognise perfect-square patterns.",
    "Use the difference-of-squares identity for two square terms separated by subtraction.",
    "Factorise completely and verify by expansion.",
    "Write mathematical fractions vertically rather than with slash notation."
  ],
  "keyTerms": [
    {
      "term": "Factor",
      "definition": "An expression multiplied by another to form the given expression."
    },
    {
      "term": "Factorisation",
      "definition": "Writing an expression as a product of factors."
    },
    {
      "term": "Common Factor",
      "definition": "A factor shared by all terms."
    },
    {
      "term": "Identity",
      "definition": "An equality true for all permissible values."
    },
    {
      "term": "Perfect Square Trinomial",
      "definition": "A trinomial that is the square of a binomial."
    },
    {
      "term": "Difference of Squares",
      "definition": "An expression of the form a² − b²."
    }
  ]
};
