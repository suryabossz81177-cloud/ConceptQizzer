/* ConceptQizzer — Class 9 Mathematics — ULTRA DETAILED render-safe chapter file */
/* Preserves the previous chapter data and exposes both ChapterData and window.chapter. */
"use strict";

const ChapterData = {
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
  ]
};

/* The notes loader evaluates this file and captures ChapterData. */
