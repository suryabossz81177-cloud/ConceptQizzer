// Class 9 Mathematics — ConceptQizzer enhanced notes
// Previous structured data preserved and expanded.
// Render-safe: no topic `number` field and no `subsections` field.

const notes = {
  "id": "9-mathematics-linear-equations-in-two-variables",
  "title": "Linear Equations in Two Variables",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 4,
  "file": "js/notes/class9/mathematics/linear-equations-in-two-variables.js",
  "enabled": true,
  "description": "A Class 9 standard, deeply detailed study of Linear Equations in Two Variables. It explains the meaning of variables, standard form, ordered-pair solutions, verification, tables, graphing, intercepts, special lines and the connection between algebraic equations and straight-line geometry. Earlier notes are preserved and expanded with many step-by-step examples and exam-style reasoning.",
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
  "topics": [
    {
      "title": "Linear Equation in Two Variables",
      "content": "A linear equation in two variables is an equation in which the variables occur only to the first power. A common form is ax+by+c=0, where a and b are not both zero.\n\nA solution is an ordered pair (x,y) that makes the equation true. Unlike a typical equation in one variable, a linear equation in two variables generally has infinitely many solutions.\n\nDeep Class 9 explanation: A linear equation in two variables can be written as ax+by+c=0, where a,b,c are real numbers and a and b are not both zero. Each variable occurs only to the first power. Expressions such as x²+y=5 are not linear because x has degree 2. An equation such as 2x+3y=6 describes a relationship between two quantities; it does not determine a single ordered pair.",
      "examples": [
        {
          "title": "Check a solution",
          "problem": "Does (2,3) satisfy 2x+y=7?",
          "solution": "2(2)+3=7, so yes."
        },
        {
          "title": "Reject a point",
          "problem": "Does (1,4) satisfy 2x+y=7?",
          "solution": "2(1)+4=6, so no."
        },
        {
          "title": "Check linearity",
          "problem": "Is 3x−2y+7=0 linear?",
          "solution": "Yes. Both variables occur only to the first power."
        },
        {
          "title": "Non-linear example",
          "problem": "Is x^2+y=5 linear?",
          "solution": "No. x has degree 2."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Finding Solution Pairs",
      "content": "Choose a value for one variable and calculate the other. For x+y=5, if x=0 then y=5; if x=2 then y=3; if x=5 then y=0. There is no need for one unique pair because infinitely many choices are possible.\n\nA value table keeps the process organised and provides points for graphing.\n\nDeep Class 9 explanation: A solution is an ordered pair (x,y) that makes the equation true. Because one variable can often be chosen freely and the other calculated, a linear equation in two variables generally has infinitely many solutions. A table is a systematic way to generate convenient points before drawing the graph.",
      "examples": [
        {
          "title": "Three solutions",
          "problem": "Find three solutions of x+y=5.",
          "solution": "(0,5),(1,4),(5,0)."
        },
        {
          "title": "Generate pairs",
          "problem": "Find three solutions of 2x+y=7.",
          "solution": "x=0→y=7; x=1→y=5; x=3→y=1. Pairs: (0,7),(1,5),(3,1)."
        },
        {
          "title": "Check a pair",
          "problem": "Is (4,−1) a solution of 2x+y=7?",
          "solution": "8−1=7, so yes."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Graph of a Linear Equation",
      "content": "When all solution points of a linear equation are plotted, they lie on one straight line. Conversely, every point on that line satisfies the equation.\n\nTwo distinct solution points determine a straight line, although a third point is a useful check. Accurate axes, scale and labels are essential in an exam graph.\n\nDeep Class 9 explanation: The graph is the set of all points whose coordinates satisfy the equation. For a linear equation, these points lie on one straight line. Two distinct solution points are enough to determine the line, although three points are often used for verification. A point not satisfying the equation cannot lie on its graph.",
      "examples": [
        {
          "title": "Graph x+y=4",
          "problem": "Find two convenient points.",
          "solution": "Put x=0 → (0,4). Put y=0 → (4,0). Plot and join these points with a straight line."
        },
        {
          "title": "Two-point graph",
          "problem": "Graph x+y=3 using two points.",
          "solution": "Use (0,3) and (3,0), plot them and draw the straight line through them."
        },
        {
          "title": "Point on graph",
          "problem": "Does (2,2) lie on x+y=3?",
          "solution": "2+2=4≠3, so it does not."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "x-Intercept and y-Intercept",
      "content": "The x-intercept is found by setting y=0. The y-intercept is found by setting x=0. These give convenient points for drawing a graph.\n\nThe word intercept refers to where the graph meets an axis, not merely to a number without its coordinate context.\n\nDeep Class 9 explanation: The x-intercept is found by putting y=0; the y-intercept is found by putting x=0. These are not separate formulas to memorise—they follow directly from the definitions of the axes. For 2x+3y=6, y=0 gives x=3, so the x-intercept is (3,0); x=0 gives y=2, so the y-intercept is (0,2).",
      "examples": [
        {
          "title": "Intercepts",
          "problem": "Find intercepts of 2x+3y=6.",
          "solution": "For x-intercept: y=0 gives x=3 → (3,0). For y-intercept: x=0 gives y=2 → (0,2)."
        },
        {
          "title": "Find intercepts",
          "problem": "Find intercepts of x+2y=4.",
          "solution": "y=0→x=4, so x-intercept (4,0). x=0→y=2, so y-intercept (0,2)."
        },
        {
          "title": "Axis meaning",
          "problem": "Why is y=0 used for the x-intercept?",
          "solution": "Every point on the x-axis has y-coordinate 0."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Special Linear Graphs",
      "content": "The equation x=k represents a vertical line because every point has the same x-coordinate. The equation y=k represents a horizontal line because every point has the same y-coordinate.\n\nThese are important special cases because one variable is fixed while the other can take many values.\n\nDeep Class 9 explanation: The equation x=a fixes the x-coordinate, so every solution has the form (a,y), giving a vertical line parallel to the y-axis. The equation y=b fixes the y-coordinate, so every solution has the form (x,b), giving a horizontal line parallel to the x-axis. These are important special cases of linear equations in two variables.",
      "examples": [
        {
          "title": "Vertical line",
          "problem": "Describe x=−3.",
          "solution": "It is a vertical line through x=−3; points include (−3,−2),(−3,0),(−3,5)."
        },
        {
          "title": "Horizontal line",
          "problem": "Describe y=4.",
          "solution": "It is a horizontal line through y=4; points include (−2,4),(0,4),(5,4)."
        },
        {
          "title": "Vertical line",
          "problem": "Describe x=−4.",
          "solution": "It is a vertical line parallel to the y-axis."
        },
        {
          "title": "Horizontal line",
          "problem": "Describe y=6.",
          "solution": "It is a horizontal line parallel to the x-axis."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Algebra and Geometry Together",
      "content": "A linear equation describes a collection of points algebraically, while its graph displays the same collection visually. Substitution checks whether an individual point belongs to the line; plotting shows many solutions together.\n\nThis connection is fundamental for later chapters involving graphs, simultaneous equations and coordinate geometry.\n\nDeep Class 9 explanation: This chapter establishes a central idea of coordinate geometry: an algebraic condition can describe a geometric object. The equation gives the rule; the solution pairs are its points; the complete collection of those points is the graph. This connection becomes essential in later chapters involving lines, slopes and systems of equations.",
      "examples": [
        {
          "title": "Verify a graph point",
          "problem": "Does (−1,6) lie on x+y=5?",
          "solution": "−1+6=5, so yes. The point belongs to the graph."
        },
        {
          "title": "Equation to graph",
          "problem": "What geometric object represents x=2?",
          "solution": "All points (2,y) form a vertical straight line through x=2."
        },
        {
          "title": "Graph to equation",
          "problem": "What equation describes the x-axis?",
          "solution": "y=0."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Verification of Solution Pairs",
      "content": "Verification means substituting both coordinates into the original equation and checking equality. This is more reliable than judging by appearance or by using a table without checking.",
      "examples": [
        {
          "title": "Verify a solution",
          "problem": "Check whether (3,2) satisfies 2x+y=8.",
          "solution": "LHS=2(3)+2=8, which equals RHS 8. Therefore (3,2) is a solution."
        },
        {
          "title": "Reject a pair",
          "problem": "Check whether (1,4) satisfies 3x−y=0.",
          "solution": "3(1)−4=−1, not 0. Therefore (1,4) is not a solution."
        },
        {
          "title": "Find an unknown coordinate",
          "problem": "Find k if (k,5) satisfies 2x+y=13.",
          "solution": "2k+5=13, so 2k=8 and k=4. The required pair is (4,5)."
        }
      ],
      "keyPoints": [
        "Always substitute into the original equation.",
        "An ordered pair is either a solution or it is not.",
        "Verification catches sign and arithmetic errors."
      ]
    },
    {
      "title": "Building a Graph from a Table",
      "content": "A table converts an equation into several solution pairs. Plot the pairs using the ordered-pair convention and join them with a straight line. The line represents infinitely many additional solutions, not only the plotted points.",
      "examples": [
        {
          "title": "Equation x+y=4",
          "problem": "Generate three solution pairs.",
          "solution": "Choose x=0,2,4. Then y=4,2,0. Points are (0,4),(2,2),(4,0)."
        },
        {
          "title": "Equation 2x−y=2",
          "problem": "Generate points for x=0,1,2.",
          "solution": "y=2x−2, so y=−2,0,2. Points are (0,−2),(1,0),(2,2)."
        },
        {
          "title": "Why a line?",
          "problem": "Why does a linear equation produce a straight line?",
          "solution": "The relation between x and y changes at a constant linear rate, and the complete set of ordered-pair solutions forms a straight-line locus in the coordinate plane."
        }
      ],
      "keyPoints": [
        "Choose easy values.",
        "Plot at least two distinct points.",
        "Extend the line because infinitely many solutions exist."
      ]
    },
    {
      "title": "Word Problems and Mathematical Modelling",
      "content": "In applications, variables represent unknown quantities and the equation represents a condition connecting them. Define variables before writing the equation, translate the words carefully, then verify whether the resulting pair makes sense in context.",
      "examples": [
        {
          "title": "Cost model",
          "problem": "A notebook costs ₹x and a pen costs ₹y. Two notebooks and three pens cost ₹90. Write the equation.",
          "solution": "2x+3y=90."
        },
        {
          "title": "Age relation",
          "problem": "A person's age is x years and another person's age is y years. Their total age is 30. Model it.",
          "solution": "x+y=30. If both ages are realistic, x and y should be non-negative."
        },
        {
          "title": "Perimeter model",
          "problem": "A rectangle has length x cm and breadth y cm. Its perimeter is 40 cm.",
          "solution": "2x+2y=40, or x+y=20."
        }
      ],
      "keyPoints": [
        "Define variables first.",
        "Translate each condition into an equation.",
        "Check whether the mathematical solution is meaningful in the real situation."
      ]
    }
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
    "A correct final answer with no reasoning may lose marks in descriptive questions."
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
  "chapterSummary": "Linear Equations in Two Variables connects algebra with coordinate geometry by showing that infinitely many solution pairs form one straight-line graph. The enhanced version keeps the earlier material while adding deeper explanations, more worked examples, reasoning-based practice and stronger Class 9 exam preparation."
};

export default notes;
