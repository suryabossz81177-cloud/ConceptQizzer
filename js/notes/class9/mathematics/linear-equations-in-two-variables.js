/* ConceptQizzer — corrected chapter with topic-placed accurate SVG figures */
"use strict";
window.ChapterData = {
  "id": "9-mathematics-linear-equations-in-two-variables",
  "title": "Linear Equations in Two Variables",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 4,
  "file": "js/notes/class9/mathematics/linear-equations-in-two-variables.js",
  "enabled": true,
  "description": "A Class 9 standard, deeply detailed study of Linear Equations in Two Variables. It explains variables, standard form, solution pairs, verification, tables, graphs, intercepts, special lines and the connection between algebra and straight-line geometry. Previous notes are preserved and expanded with detailed modelling, multiple worked examples and exam-style reasoning.",
  "learningObjectives": [
    "Understand what a two-variable linear equation represents.",
    "Generate and verify solution pairs.",
    "Construct tables and graphs.",
    "Find x- and y-intercepts.",
    "Interpret special lines x=k and y=k.",
    "Explain every step of a solution instead of relying on answer-only work.",
    "Use definitions, properties and algebraic reasoning to justify answers.",
    "Detect common traps and verify results independently."
  ],
  "prerequisiteCheck": [
    "Simple equations",
    "Ordered pairs",
    "Cartesian plane",
    "Substitution"
  ],
  "conceptRoadmap": [
    "Meaning of a linear equation",
    "Variables and constants",
    "Solution pairs",
    "Verification",
    "Tables of values",
    "Graphing",
    "Intercepts",
    "Special lines",
    "Word problems",
    "Algebra–geometry connection"
  ],
  "comparisonTables": [
    {
      "title": "Common forms and meanings",
      "columns": [
        "Form",
        "Graph/meaning",
        "Example"
      ],
      "rows": [
        [
          "ax+by+c=0",
          "General linear equation",
          "2x+3y−6=0"
        ],
        [
          "y=mx+c",
          "y written in terms of x",
          "y=2x+1"
        ],
        [
          "x=k",
          "Vertical line",
          "x=4"
        ],
        [
          "y=k",
          "Horizontal line",
          "y=−2"
        ]
      ]
    }
  ],
  "theoremPropertyLab": [
    {
      "title": "Solution-set graph principle",
      "statement": "The graph of a linear equation in two variables is a straight line and every point on it is a solution.",
      "proof": "Each plotted point is generated from a pair satisfying the equation. The linear relationship between x and y produces a straight-line set of points; points on that line satisfy the same equation."
    }
  ],
  "formulaPropertyBank": [
    "General form: ax+by+c=0",
    "x-intercept: set y=0",
    "y-intercept: set x=0",
    "If ax+by=c and b≠0, y=(c−ax)/b"
  ],
  "conceptConnections": [
    "Coordinate Geometry supplies the plane and ordered pairs.",
    "Algebra supplies substitution and rearrangement.",
    "A graph visually represents the complete set of solutions."
  ],
  "mathematicalThinking": [
    "Ask whether a point satisfies the equation before plotting it.",
    "Use intercepts when they give simple values.",
    "Use a third point to check a graph."
  ],
  "errorDetective": [
    {
      "problem": "A student gives one pair as the complete solution of x+y=5.",
      "answer": "Wrong. There are infinitely many solutions."
    },
    {
      "problem": "A student finds x-intercept by putting x=0.",
      "answer": "Wrong. For x-intercept put y=0."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Find three integer solutions of 2x−y=4.",
      "answer": "(0,−4),(1,−2),(2,0)."
    }
  ],
  "realLifeMathematics": [
    "Linear relationships model simple costs, distance at constant speed, unit conversion and budgeting.",
    "Graphs communicate trends clearly."
  ],
  "mathematicalActivityLab": [
    {
      "title": "Human graph",
      "steps": [
        "Mark axes.",
        "Choose x+y=6.",
        "Assign different x-values to students.",
        "Calculate y and stand at the corresponding points.",
        "Observe the straight-line pattern."
      ]
    }
  ],
  "figureBank": [
    {
      "title": "Straight-line graph",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Straight-line graph\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Graph of a linear equation</text><line x1=\"350\" y1=\"60\" x2=\"350\" y2=\"290\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"230\" x2=\"630\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"270\" x2=\"560\" y2=\"90\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"585\" y=\"90\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">y = mx + c</text><text x=\"365\" y=\"75\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">y</text><text x=\"620\" y=\"220\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">x</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Every solution pair lies on the straight line</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Intercepts",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Intercepts\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">x- and y-intercepts</text><line x1=\"350\" y1=\"60\" x2=\"350\" y2=\"285\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"230\" x2=\"620\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"230\" x2=\"510\" y2=\"90\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"170\" cy=\"230\" r=\"6\" fill=\"#172033\"/><circle cx=\"350\" cy=\"145\" r=\"6\" fill=\"#172033\"/><text x=\"160\" y=\"255\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">(a,0)</text><text x=\"365\" y=\"140\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">(0,b)</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">x-intercept: y=0   |   y-intercept: x=0</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Solution check",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Solution check\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Checking a solution pair</text><text x=\"350\" y=\"100\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"25\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2x + y = 7</text><text x=\"350\" y=\"155\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"21\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">For (3,1): 2(3)+1 = 7</text><text x=\"350\" y=\"210\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">LHS = RHS  ✓</text><text x=\"350\" y=\"270\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Therefore (3,1) is a solution</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Infinitely many solutions",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Infinitely many solutions\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Infinitely many solutions</text><line x1=\"350\" y1=\"65\" x2=\"350\" y2=\"285\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"230\" x2=\"620\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"260\" x2=\"560\" y2=\"100\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A line contains infinitely many points</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Parallel lines",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Parallel lines\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Parallel linear graphs</text><line x1=\"350\" y1=\"60\" x2=\"350\" y2=\"285\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"230\" x2=\"630\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"260\" x2=\"560\" y2=\"90\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"170\" x2=\"560\" y2=\"0\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Same slope, different intercept → parallel lines</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    }
  ],
  "visualLearning": [
    "Make a value table before plotting.",
    "Mark intercepts clearly.",
    "Compare x=k with y=k visually."
  ],
  "masterDefinitions": [
    {
      "term": "Linear equation in two variables",
      "definition": "An equation of first degree in two variables, commonly ax+by+c=0."
    },
    {
      "term": "Solution",
      "definition": "An ordered pair that makes the equation true."
    },
    {
      "term": "Intercept",
      "definition": "A point where a graph meets an axis."
    }
  ],
  "formulaRevisionSheet": [
    "x-intercept → y=0",
    "y-intercept → x=0",
    "x=k → vertical line",
    "y=k → horizontal line"
  ],
  "questionBank": [
    {
      "question": "Give two solutions of 3x+y=6.",
      "answer": "(0,6) and (2,0)."
    },
    {
      "question": "Find the y-intercept of 4x+2y=8.",
      "answer": "(0,4)."
    },
    {
      "question": "Does (3,−1) satisfy x−2y=5?",
      "answer": "Yes."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Show Answer must reveal the final answer followed by the complete step-by-step solution."
  },
  "practiceSets": [
    {
      "title": "Practice Set A",
      "questions": [
        "Find five solutions of x−y=3.",
        "Find both intercepts of 3x+2y=12.",
        "Verify ordered pairs.",
        "Draw graphs using two or three points."
      ]
    }
  ],
  "timedPractice": [
    {
      "duration": "20 minutes",
      "instruction": "Solve 12 mixed questions involving solutions, intercepts and graphs."
    }
  ],
  "chapterQuiz": [
    {
      "question": "A linear equation in two variables generally has:",
      "options": [
        "No solution",
        "One solution",
        "Two solutions",
        "Infinitely many solutions"
      ],
      "answer": "Infinitely many solutions"
    }
  ],
  "examZone": [
    "Write ordered pairs in x,y order.",
    "Show substitution for verification.",
    "Use y=0 for x-intercept.",
    "Use x=0 for y-intercept.",
    "Use a ruler for the straight line.",
    "Write formulas before substitution where appropriate.",
    "Use complete mathematical statements in proof/reasoning questions.",
    "Recheck signs, brackets and powers before finalising an answer."
  ],
  "commonMistakes": [
    "Treating it as a one-variable equation.",
    "Swapping x and y.",
    "Finding the wrong intercept.",
    "Drawing a curve instead of a straight line.",
    "Confusing a concept definition with an example.",
    "Skipping the verification step.",
    "Swapping ordered coordinates.",
    "Ignoring restrictions such as a denominator being non-zero.",
    "Using an algebraic identity with an incorrect sign."
  ],
  "masterRevision": [
    "Choose a value → calculate the other → make a table → plot → join → verify."
  ],
  "detailedSummary": [
    "A linear equation in two variables generally has infinitely many solutions.",
    "The solution set forms a straight line.",
    "Intercepts provide convenient graph points.",
    "Special equations x=k and y=k give vertical and horizontal lines."
  ],
  "finalChapterTest": [
    {
      "question": "For 2x+3y=12, find both intercepts and explain how they give the graph.",
      "answer": "x-intercept=(6,0), y-intercept=(0,4).",
      "solution": "Set y=0: 2x=12, x=6. Set x=0: 3y=12, y=4. Plot (6,0) and (0,4) and join them with a straight line. Every point on that line satisfies the equation."
    }
  ],
  "importantPoints": [
    "A solution is an ordered pair.",
    "There are generally infinitely many solutions.",
    "All solutions lie on a straight line.",
    "x-intercept uses y=0.",
    "y-intercept uses x=0.",
    "Show substitutions clearly in Class 9 solutions.",
    "Do not skip sign checks when negative numbers are involved.",
    "Use the definition or theorem that directly justifies the step.",
    "A correct final answer with no reasoning may lose marks in descriptive questions.",
    "A solution is an ordered pair (x,y).",
    "A linear equation in two variables generally has infinitely many solutions.",
    "All solution points lie on one straight line.",
    "For x-intercept set y=0; for y-intercept set x=0.",
    "x=k is vertical; y=k is horizontal.",
    "Always verify solution pairs in the original equation."
  ],
  "keyTerms": [
    "Linear equation",
    "Variable",
    "Solution",
    "Ordered pair",
    "Graph",
    "Straight line",
    "Intercept",
    "x-intercept",
    "y-intercept"
  ],
  "chapterSummary": "Linear Equations in Two Variables connects algebra with coordinate geometry by showing that infinitely many solution pairs form one straight-line graph. The enhanced version keeps the earlier material while adding deeper explanations, more worked examples, reasoning-based practice and stronger Class 9 exam preparation.\n\nMastering this chapter means you should be able to explain the definition, recognise the concept in unfamiliar questions, solve routine and higher-order examples, justify each step, detect common errors, and verify your final answer.",
  "sections": [
    {
      "id": "linear-equation-in-two-variables",
      "title": "Linear Equation in Two Variables",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A linear equation in two variables is an equation in which the variables occur only to the first power. A common form is ax+by+c=0, where a and b are not both zero.\n\nA solution is an ordered pair (x,y) that makes the equation true. Unlike a typical equation in one variable, a linear equation in two variables generally has infinitely many solutions.\n\nDeep Class 9 explanation: A linear equation in two variables can be written as ax+by+c=0, where a,b,c are real numbers and a and b are not both zero. Each variable occurs only to the first power. Expressions such as x²+y=5 are not linear because x has degree 2. An equation such as 2x+3y=6 describes a relationship between two quantities; it does not determine a single ordered pair."
        },
        {
          "type": "example",
          "title": "Check a solution",
          "color": "orange",
          "text": "Problem: Does (2,3) satisfy 2x+y=7?\n\nComplete Solution:\n2(2)+3=7, so yes."
        },
        {
          "type": "example",
          "title": "Reject a point",
          "color": "orange",
          "text": "Problem: Does (1,4) satisfy 2x+y=7?\n\nComplete Solution:\n2(1)+4=6, so no."
        },
        {
          "type": "example",
          "title": "Check linearity",
          "color": "orange",
          "text": "Problem: Is 3x−2y+7=0 linear?\n\nComplete Solution:\nYes. Both variables occur only to the first power."
        },
        {
          "type": "example",
          "title": "Non-linear example",
          "color": "orange",
          "text": "Problem: Is x^2+y=5 linear?\n\nComplete Solution:\nNo. x has degree 2."
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
          "text": "A linear equation in two variables can be written as ax+by+c=0, where a,b,c are real numbers and a and b are not both zero. Each solution is an ordered pair (x,y) that makes the equation true. One equation in two variables generally has infinitely many real solutions."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Check whether (2,3) satisfies 2x+y=7. Substitution gives 4+3=7, so yes."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Check whether (-1,4) satisfies 3x-2y=-11. We get -3-8=-11, so yes."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "For x+y=5, if x=2 then y=3. If x=10 then y=-5. Different choices of one variable generate different solutions."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "The equation 0x+5y=10 reduces to y=2, which is a horizontal line."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "The equation is linear only when the powers of x and y are 1 and the variables are not multiplied together."
        }
      ]
    },
    {
      "id": "finding-solution-pairs",
      "title": "Finding Solution Pairs",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Choose a value for one variable and calculate the other. For x+y=5, if x=0 then y=5; if x=2 then y=3; if x=5 then y=0. There is no need for one unique pair because infinitely many choices are possible.\n\nA value table keeps the process organised and provides points for graphing.\n\nDeep Class 9 explanation: A solution is an ordered pair (x,y) that makes the equation true. Because one variable can often be chosen freely and the other calculated, a linear equation in two variables generally has infinitely many solutions. A table is a systematic way to generate convenient points before drawing the graph."
        },
        {
          "type": "example",
          "title": "Three solutions",
          "color": "orange",
          "text": "Problem: Find three solutions of x+y=5.\n\nComplete Solution:\n(0,5),(1,4),(5,0)."
        },
        {
          "type": "example",
          "title": "Generate pairs",
          "color": "orange",
          "text": "Problem: Find three solutions of 2x+y=7.\n\nComplete Solution:\nx=0→y=7; x=1→y=5; x=3→y=1. Pairs: (0,7),(1,5),(3,1)."
        },
        {
          "type": "example",
          "title": "Check a pair",
          "color": "orange",
          "text": "Problem: Is (4,−1) a solution of 2x+y=7?\n\nComplete Solution:\n8−1=7, so yes."
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
          "text": "To find solutions, choose a convenient value for one variable and calculate the other. The resulting ordered pair must always be written in the order (x,y)."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For 2x+y=8, take x=0 → y=8, giving (0,8)."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For 2x+y=8, take x=3 → 6+y=8 → y=2, giving (3,2)."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "For 3x-2y=6, take x=2 → 6-2y=6 → y=0, giving (2,0)."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "For x-4y=12, take y=1 → x-4=12 → x=16, giving (16,1)."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "A single solution pair does not describe the entire equation; the equation usually has infinitely many solution pairs."
        }
      ]
    },
    {
      "id": "graph-of-a-linear-equation",
      "title": "Graph of a Linear Equation",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 Straight-line graph",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Straight-line graph\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Graph of a linear equation</text><line x1=\"350\" y1=\"60\" x2=\"350\" y2=\"290\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"230\" x2=\"630\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"270\" x2=\"560\" y2=\"90\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"585\" y=\"90\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">y = mx + c</text><text x=\"365\" y=\"75\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">y</text><text x=\"620\" y=\"220\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">x</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Every solution pair lies on the straight line</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "When all solution points of a linear equation are plotted, they lie on one straight line. Conversely, every point on that line satisfies the equation.\n\nTwo distinct solution points determine a straight line, although a third point is a useful check. Accurate axes, scale and labels are essential in an exam graph.\n\nDeep Class 9 explanation: The graph is the set of all points whose coordinates satisfy the equation. For a linear equation, these points lie on one straight line. Two distinct solution points are enough to determine the line, although three points are often used for verification. A point not satisfying the equation cannot lie on its graph."
        },
        {
          "type": "example",
          "title": "Graph x+y=4",
          "color": "orange",
          "text": "Problem: Find two convenient points.\n\nComplete Solution:\nPut x=0 → (0,4). Put y=0 → (4,0). Plot and join these points with a straight line."
        },
        {
          "type": "example",
          "title": "Two-point graph",
          "color": "orange",
          "text": "Problem: Graph x+y=3 using two points.\n\nComplete Solution:\nUse (0,3) and (3,0), plot them and draw the straight line through them."
        },
        {
          "type": "example",
          "title": "Point on graph",
          "color": "orange",
          "text": "Problem: Does (2,2) lie on x+y=3?\n\nComplete Solution:\n2+2=4≠3, so it does not."
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
          "text": "When all solution pairs of a linear equation are plotted on the Cartesian plane, they lie on one straight line. Conversely, every point on that line is a solution of the equation."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For x+y=4, solution pairs include (0,4),(1,3),(2,2),(4,0). Plotting them gives one straight line."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For y=2x+1, points (0,1),(1,3),(2,5) lie on the same line."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "To draw a graph accurately, use at least two points, preferably three for verification."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If a plotted point is not on the line, substitute its coordinates into the equation to check whether it is actually a solution."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "The graph represents the whole set of solutions, not just the two points used to draw the line."
        }
      ]
    },
    {
      "id": "x-intercept-and-y-intercept",
      "title": "x-Intercept and y-Intercept",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 Intercepts",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Intercepts\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">x- and y-intercepts</text><line x1=\"350\" y1=\"60\" x2=\"350\" y2=\"285\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"230\" x2=\"620\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"230\" x2=\"510\" y2=\"90\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"170\" cy=\"230\" r=\"6\" fill=\"#172033\"/><circle cx=\"350\" cy=\"145\" r=\"6\" fill=\"#172033\"/><text x=\"160\" y=\"255\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">(a,0)</text><text x=\"365\" y=\"140\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">(0,b)</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">x-intercept: y=0   |   y-intercept: x=0</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The x-intercept is found by setting y=0. The y-intercept is found by setting x=0. These give convenient points for drawing a graph.\n\nThe word intercept refers to where the graph meets an axis, not merely to a number without its coordinate context.\n\nDeep Class 9 explanation: The x-intercept is found by putting y=0; the y-intercept is found by putting x=0. These are not separate formulas to memorise—they follow directly from the definitions of the axes. For 2x+3y=6, y=0 gives x=3, so the x-intercept is (3,0); x=0 gives y=2, so the y-intercept is (0,2)."
        },
        {
          "type": "example",
          "title": "Intercepts",
          "color": "orange",
          "text": "Problem: Find intercepts of 2x+3y=6.\n\nComplete Solution:\nFor x-intercept: y=0 gives x=3 → (3,0). For y-intercept: x=0 gives y=2 → (0,2)."
        },
        {
          "type": "example",
          "title": "Find intercepts",
          "color": "orange",
          "text": "Problem: Find intercepts of x+2y=4.\n\nComplete Solution:\ny=0→x=4, so x-intercept (4,0). x=0→y=2, so y-intercept (0,2)."
        },
        {
          "type": "example",
          "title": "Axis meaning",
          "color": "orange",
          "text": "Problem: Why is y=0 used for the x-intercept?\n\nComplete Solution:\nEvery point on the x-axis has y-coordinate 0."
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
          "text": "The x-intercept is where the graph meets the x-axis, so y=0. The y-intercept is where the graph meets the y-axis, so x=0. These conditions come directly from the definitions of the axes."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For 2x+3y=12, set y=0: 2x=12, so x-intercept=(6,0)."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For 2x+3y=12, set x=0: 3y=12, so y-intercept=(0,4)."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "For x-y=5, x-intercept=(5,0) and y-intercept=(0,-5)."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If an equation has no x-intercept, its graph does not meet the x-axis; a horizontal line y=k with k≠0 is an example."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "For x-intercept set y=0; for y-intercept set x=0. This is one of the most common exam traps."
        }
      ]
    },
    {
      "id": "special-linear-graphs",
      "title": "Special Linear Graphs",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 Parallel lines",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Parallel lines\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Parallel linear graphs</text><line x1=\"350\" y1=\"60\" x2=\"350\" y2=\"285\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"230\" x2=\"630\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"260\" x2=\"560\" y2=\"90\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"170\" x2=\"560\" y2=\"0\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Same slope, different intercept → parallel lines</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "figure",
          "title": "📐 Infinitely many solutions",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Infinitely many solutions\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Infinitely many solutions</text><line x1=\"350\" y1=\"65\" x2=\"350\" y2=\"285\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"230\" x2=\"620\" y2=\"230\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"260\" x2=\"560\" y2=\"100\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A line contains infinitely many points</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The equation x=k represents a vertical line because every point has the same x-coordinate. The equation y=k represents a horizontal line because every point has the same y-coordinate.\n\nThese are important special cases because one variable is fixed while the other can take many values.\n\nDeep Class 9 explanation: The equation x=a fixes the x-coordinate, so every solution has the form (a,y), giving a vertical line parallel to the y-axis. The equation y=b fixes the y-coordinate, so every solution has the form (x,b), giving a horizontal line parallel to the x-axis. These are important special cases of linear equations in two variables."
        },
        {
          "type": "example",
          "title": "Vertical line",
          "color": "orange",
          "text": "Problem: Describe x=−3.\n\nComplete Solution:\nIt is a vertical line through x=−3; points include (−3,−2),(−3,0),(−3,5)."
        },
        {
          "type": "example",
          "title": "Horizontal line",
          "color": "orange",
          "text": "Problem: Describe y=4.\n\nComplete Solution:\nIt is a horizontal line through y=4; points include (−2,4),(0,4),(5,4)."
        },
        {
          "type": "example",
          "title": "Vertical line",
          "color": "orange",
          "text": "Problem: Describe x=−4.\n\nComplete Solution:\nIt is a vertical line parallel to the y-axis."
        },
        {
          "type": "example",
          "title": "Horizontal line",
          "color": "orange",
          "text": "Problem: Describe y=6.\n\nComplete Solution:\nIt is a horizontal line parallel to the x-axis."
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
          "text": "Equations x=k represent vertical lines because every point has the same x-coordinate k. Equations y=k represent horizontal lines because every point has the same y-coordinate k."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "x=3 contains (3,-2),(3,0),(3,5), all sharing x=3."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "y=-4 contains (-5,-4),(0,-4),(7,-4), all sharing y=-4."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "x=0 is the y-axis."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "y=0 is the x-axis."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "A vertical line x=k has undefined slope in higher-level language; at Class 9 level, focus on its constant x-coordinate."
        }
      ]
    },
    {
      "id": "algebra-and-geometry-together",
      "title": "Algebra and Geometry Together",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A linear equation describes a collection of points algebraically, while its graph displays the same collection visually. Substitution checks whether an individual point belongs to the line; plotting shows many solutions together.\n\nThis connection is fundamental for later chapters involving graphs, simultaneous equations and coordinate geometry.\n\nDeep Class 9 explanation: This chapter establishes a central idea of coordinate geometry: an algebraic condition can describe a geometric object. The equation gives the rule; the solution pairs are its points; the complete collection of those points is the graph. This connection becomes essential in later chapters involving lines, slopes and systems of equations."
        },
        {
          "type": "example",
          "title": "Verify a graph point",
          "color": "orange",
          "text": "Problem: Does (−1,6) lie on x+y=5?\n\nComplete Solution:\n−1+6=5, so yes. The point belongs to the graph."
        },
        {
          "type": "example",
          "title": "Equation to graph",
          "color": "orange",
          "text": "Problem: What geometric object represents x=2?\n\nComplete Solution:\nAll points (2,y) form a vertical straight line through x=2."
        },
        {
          "type": "example",
          "title": "Graph to equation",
          "color": "orange",
          "text": "Problem: What equation describes the x-axis?\n\nComplete Solution:\ny=0."
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
          "text": "An equation and its graph describe the same mathematical relationship in two languages. Algebra gives a rule; geometry displays all ordered pairs satisfying that rule."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For x+y=6, (2,4) is an algebraic solution and a point on the geometric line."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For y=2x, increasing x by 1 increases y by 2, which is visible as a consistently rising line."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "The intersection of two graphs, when considered together, represents a common ordered pair satisfying both equations."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "A table is a bridge: choose x, calculate y, then plot the resulting pair."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Always connect the equation, table, ordered pairs and graph; they are four views of the same relationship."
        }
      ]
    },
    {
      "id": "verification-of-solution-pairs",
      "title": "Verification of Solution Pairs",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 Solution check",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Solution check\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Checking a solution pair</text><text x=\"350\" y=\"100\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"25\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2x + y = 7</text><text x=\"350\" y=\"155\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"21\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">For (3,1): 2(3)+1 = 7</text><text x=\"350\" y=\"210\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">LHS = RHS  ✓</text><text x=\"350\" y=\"270\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Therefore (3,1) is a solution</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Verification means substituting both coordinates into the original equation and checking equality. This is more reliable than judging by appearance or by using a table without checking."
        },
        {
          "type": "example",
          "title": "Verify a solution",
          "color": "orange",
          "text": "Problem: Check whether (3,2) satisfies 2x+y=8.\n\nComplete Solution:\nLHS=2(3)+2=8, which equals RHS 8. Therefore (3,2) is a solution."
        },
        {
          "type": "example",
          "title": "Reject a pair",
          "color": "orange",
          "text": "Problem: Check whether (1,4) satisfies 3x−y=0.\n\nComplete Solution:\n3(1)−4=−1, not 0. Therefore (1,4) is not a solution."
        },
        {
          "type": "example",
          "title": "Find an unknown coordinate",
          "color": "orange",
          "text": "Problem: Find k if (k,5) satisfies 2x+y=13.\n\nComplete Solution:\n2k+5=13, so 2k=8 and k=4. The required pair is (4,5)."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Always substitute into the original equation.\nAn ordered pair is either a solution or it is not.\nVerification catches sign and arithmetic errors."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Verification means substituting both coordinates into the original equation and checking whether the left-hand side equals the right-hand side."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For 4x+y=10, test (2,2): 4(2)+2=10, so it is a solution."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For x-3y=5, test (1,-2): 1-3(-2)=7, not 5, so it is not a solution."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "For 2x+5y=0, test (-5,2): -10+10=0, so it satisfies the equation."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If a student's calculated pair fails substitution, the pair or an earlier algebraic step must contain an error."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Verify with the original equation, not a transformed intermediate equation when possible."
        }
      ]
    },
    {
      "id": "building-a-graph-from-a-table",
      "title": "Building a Graph from a Table",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A table converts an equation into several solution pairs. Plot the pairs using the ordered-pair convention and join them with a straight line. The line represents infinitely many additional solutions, not only the plotted points."
        },
        {
          "type": "example",
          "title": "Equation x+y=4",
          "color": "orange",
          "text": "Problem: Generate three solution pairs.\n\nComplete Solution:\nChoose x=0,2,4. Then y=4,2,0. Points are (0,4),(2,2),(4,0)."
        },
        {
          "type": "example",
          "title": "Equation 2x−y=2",
          "color": "orange",
          "text": "Problem: Generate points for x=0,1,2.\n\nComplete Solution:\ny=2x−2, so y=−2,0,2. Points are (0,−2),(1,0),(2,2)."
        },
        {
          "type": "example",
          "title": "Why a line?",
          "color": "orange",
          "text": "Problem: Why does a linear equation produce a straight line?\n\nComplete Solution:\nThe relation between x and y changes at a constant linear rate, and the complete set of ordered-pair solutions forms a straight-line locus in the coordinate plane."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Choose easy values.\nPlot at least two distinct points.\nExtend the line because infinitely many solutions exist."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "A value table systematically generates points. Select several x-values, calculate y-values, write ordered pairs, plot them accurately and join them with a straight line."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For y=x+2, choose x=-2,-1,0,1. The y-values are 0,1,2,3, giving four points."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For 2x+y=6, rewrite y=6-2x. At x=0,1,2, y=6,4,2."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "If two points appear inconsistent with the line, recompute the table before drawing."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "Using a third point after drawing through two points is an excellent accuracy check."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Keep x-values simple and calculate y carefully; table errors create graph errors."
        }
      ]
    },
    {
      "id": "word-problems-and-mathematical-modelling",
      "title": "Word Problems and Mathematical Modelling",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "In applications, variables represent unknown quantities and the equation represents a condition connecting them. Define variables before writing the equation, translate the words carefully, then verify whether the resulting pair makes sense in context."
        },
        {
          "type": "example",
          "title": "Cost model",
          "color": "orange",
          "text": "Problem: A notebook costs ₹x and a pen costs ₹y. Two notebooks and three pens cost ₹90. Write the equation.\n\nComplete Solution:\n2x+3y=90."
        },
        {
          "type": "example",
          "title": "Age relation",
          "color": "orange",
          "text": "Problem: A person's age is x years and another person's age is y years. Their total age is 30. Model it.\n\nComplete Solution:\nx+y=30. If both ages are realistic, x and y should be non-negative."
        },
        {
          "type": "example",
          "title": "Perimeter model",
          "color": "orange",
          "text": "Problem: A rectangle has length x cm and breadth y cm. Its perimeter is 40 cm.\n\nComplete Solution:\n2x+2y=40, or x+y=20."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Define variables first.\nTranslate each condition into an equation.\nCheck whether the mathematical solution is meaningful in the real situation."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Real situations can often be represented by a linear relationship when two quantities change at a constant rate or satisfy a fixed total. The modelling process is: define variables → form equation → find solutions → interpret and verify."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "A notebook costs ₹20 and a pen costs ₹10. If the total is ₹100, 20x+10y=100 models the purchase combinations."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "If a taxi charges a fixed ₹50 plus ₹12 per kilometre, the cost can be represented by C=50+12d."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "If a rectangle has perimeter 30 cm, 2l+2b=30, or l+b=15, relates its length and breadth."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "For a class with boys b and girls g and total 40 students, b+g=40 represents every possible distribution."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "After solving, check whether the values make sense in the real context; quantities such as number of students cannot be negative or fractional."
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
          "title": "1. Meaning of a linear equation in two variables — Deep Concept",
          "color": "blue",
          "text": "Meaning of a linear equation in two variables is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "1. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Meaning of a linear equation in two variables: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "1. Exam Insight",
          "color": "green",
          "text": "For Meaning of a linear equation in two variables, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Meaning of a linear equation in two variables",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Meaning of a linear equation in two variables.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Meaning of a linear equation in two variables is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Meaning of a linear equation in two variables.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Meaning of a linear equation in two variables?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Meaning of a linear equation in two variables be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "2. Ordered-pair solutions — Deep Concept",
          "color": "blue",
          "text": "Ordered-pair solutions is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "2. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Ordered-pair solutions: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "2. Exam Insight",
          "color": "green",
          "text": "For Ordered-pair solutions, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Ordered-pair solutions",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Ordered-pair solutions.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Ordered-pair solutions is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Ordered-pair solutions.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Ordered-pair solutions?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Ordered-pair solutions be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "3. Generating solutions — Deep Concept",
          "color": "blue",
          "text": "Generating solutions is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "3. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Generating solutions: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "3. Exam Insight",
          "color": "green",
          "text": "For Generating solutions, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Generating solutions",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Generating solutions.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Generating solutions is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Generating solutions.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Generating solutions?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Generating solutions be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "4. Tables of values — Deep Concept",
          "color": "blue",
          "text": "Tables of values is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "4. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Tables of values: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "4. Exam Insight",
          "color": "green",
          "text": "For Tables of values, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Tables of values",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Tables of values.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Tables of values is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Tables of values.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Tables of values?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Tables of values be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "5. Graph of a linear equation — Deep Concept",
          "color": "blue",
          "text": "Graph of a linear equation is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "5. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Graph of a linear equation: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "5. Exam Insight",
          "color": "green",
          "text": "For Graph of a linear equation, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Graph of a linear equation",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Graph of a linear equation.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Graph of a linear equation is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Graph of a linear equation.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Graph of a linear equation?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Graph of a linear equation be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "6. Intercept method — Deep Concept",
          "color": "blue",
          "text": "Intercept method is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "6. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Intercept method: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "6. Exam Insight",
          "color": "green",
          "text": "For Intercept method, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Intercept method",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Intercept method.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Intercept method is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Intercept method.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Intercept method?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Intercept method be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "7. Checking points — Deep Concept",
          "color": "blue",
          "text": "Checking points is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "7. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Checking points: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "7. Exam Insight",
          "color": "green",
          "text": "For Checking points, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Checking points",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Checking points.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Checking points is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Checking points.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Checking points?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Checking points be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "8. Positive and negative slope intuition — Deep Concept",
          "color": "blue",
          "text": "Positive and negative slope intuition is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "8. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Positive and negative slope intuition: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "8. Exam Insight",
          "color": "green",
          "text": "For Positive and negative slope intuition, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Positive and negative slope intuition",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Positive and negative slope intuition.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Positive and negative slope intuition is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Positive and negative slope intuition.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Positive and negative slope intuition?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Positive and negative slope intuition be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "9. Equivalent equations — Deep Concept",
          "color": "blue",
          "text": "Equivalent equations is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "9. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Equivalent equations: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "9. Exam Insight",
          "color": "green",
          "text": "For Equivalent equations, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Equivalent equations",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Equivalent equations.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Equivalent equations is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Equivalent equations.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Equivalent equations?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Equivalent equations be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "10. Horizontal and vertical lines — Deep Concept",
          "color": "blue",
          "text": "Horizontal and vertical lines is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "10. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Horizontal and vertical lines: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "10. Exam Insight",
          "color": "green",
          "text": "For Horizontal and vertical lines, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Horizontal and vertical lines",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Horizontal and vertical lines.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Horizontal and vertical lines is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Horizontal and vertical lines.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Horizontal and vertical lines?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Horizontal and vertical lines be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "11. Real-life modelling — Deep Concept",
          "color": "blue",
          "text": "Real-life modelling is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "11. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Real-life modelling: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "11. Exam Insight",
          "color": "green",
          "text": "For Real-life modelling, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Real-life modelling",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Real-life modelling.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Real-life modelling is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Real-life modelling.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Real-life modelling?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Real-life modelling be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "12. Word-to-equation translation — Deep Concept",
          "color": "blue",
          "text": "Word-to-equation translation is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "12. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Word-to-equation translation: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "12. Exam Insight",
          "color": "green",
          "text": "For Word-to-equation translation, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Word-to-equation translation",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Word-to-equation translation.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Word-to-equation translation is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Word-to-equation translation.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Word-to-equation translation?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Word-to-equation translation be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "13. Graph interpretation — Deep Concept",
          "color": "blue",
          "text": "Graph interpretation is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "13. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Graph interpretation: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "13. Exam Insight",
          "color": "green",
          "text": "For Graph interpretation, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Graph interpretation",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Graph interpretation.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Graph interpretation is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Graph interpretation.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Graph interpretation?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Graph interpretation be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "14. Infinite solutions — Deep Concept",
          "color": "blue",
          "text": "Infinite solutions is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "14. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Infinite solutions: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "14. Exam Insight",
          "color": "green",
          "text": "For Infinite solutions, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Infinite solutions",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Infinite solutions.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Infinite solutions is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Infinite solutions.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Infinite solutions?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Infinite solutions be independently checked?",
              "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
              "solution": "Choose the verification that matches the structure of the problem."
            }
          ]
        },
        {
          "type": "concept",
          "title": "15. Fractional solutions — Deep Concept",
          "color": "blue",
          "text": "Fractional solutions is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
        },
        {
          "type": "example",
          "title": "15. Step-by-Step Worked Example",
          "color": "orange",
          "text": "Reliable method for Fractional solutions: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "15. Exam Insight",
          "color": "green",
          "text": "For Fractional solutions, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
        },
        {
          "type": "practice",
          "title": "Practice — Fractional solutions",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the main definition or rule associated with Fractional solutions.",
              "answer": "State the standard definition or rule accurately.",
              "solution": "Write the mathematical rule and include its meaning or condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Explain why Fractional solutions is useful.",
              "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
              "solution": "Connect the concept to a concrete mathematical task."
            },
            {
              "difficulty": "Application",
              "question": "Give a step-by-step approach to a typical problem on Fractional solutions.",
              "answer": "Identify data → choose the matching rule → work carefully → verify.",
              "solution": "A complete method includes the relevant condition and intermediate steps."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a likely error in Fractional solutions?",
              "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
              "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Fractional solutions be independently checked?",
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 1 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 2 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 3 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 4 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 5 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 6 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 7 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 8 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 9 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 10 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 11 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 12 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 13 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 14 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 15 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 16 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 17 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 18 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 19 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 20 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 21 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 22 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 23 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 24 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 25 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 26 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 27 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 28 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 29 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 30 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 31 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 32 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 33 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 34 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 35 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 36 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 37 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 38 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 39 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 40 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 41 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 42 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 43 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
      "text": "This mastery lesson revisits the core ideas of Chapter 4 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 44 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
