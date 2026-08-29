/* ConceptQizzer — Class 9 Mathematics — ULTRA DETAILED render-safe chapter file */
/* Preserves the previous chapter data and exposes both ChapterData and window.chapter. */
"use strict";

const ChapterData = {
  "id": "9-mathematics-coordinate-geometry",
  "title": "Coordinate Geometry",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 3,
  "file": "js/notes/class9/mathematics/coordinate-geometry.js",
  "enabled": true,
  "description": "A Class 9 standard, deeply detailed study of Coordinate Geometry. It develops the Cartesian plane from first principles: axes, origin, ordered pairs, abscissa, ordinate, quadrants, plotting, reading coordinates, axis points, distances from axes and reflections. Previous notes are preserved and expanded with repeated plotting, sign-based reasoning and exam-style examples.",
  "learningObjectives": [
    "Locate and read points.",
    "Identify quadrants from coordinate signs.",
    "Recognise points on axes.",
    "Calculate distances from axes.",
    "Apply reflection rules.",
    "Explain every step of a solution instead of relying on answer-only work.",
    "Use definitions, properties and algebraic reasoning to justify answers.",
    "Detect common traps and verify results independently."
  ],
  "prerequisiteCheck": [
    "Integers and signs",
    "Number line",
    "Ordered pairs"
  ],
  "conceptRoadmap": [
    "Cartesian plane",
    "Axes and origin",
    "Ordered pairs",
    "Abscissa and ordinate",
    "Quadrants and signs",
    "Plotting points",
    "Points on axes",
    "Reading graphs",
    "Symmetry and interpretation"
  ],
  "comparisonTables": [
    {
      "title": "Signs and locations",
      "columns": [
        "Location",
        "x",
        "y"
      ],
      "rows": [
        [
          "Quadrant I",
          "+",
          "+"
        ],
        [
          "Quadrant II",
          "−",
          "+"
        ],
        [
          "Quadrant III",
          "−",
          "−"
        ],
        [
          "Quadrant IV",
          "+",
          "−"
        ],
        [
          "x-axis",
          "any",
          "0"
        ],
        [
          "y-axis",
          "0",
          "any"
        ],
        [
          "Origin",
          "0",
          "0"
        ]
      ]
    }
  ],
  "theoremPropertyLab": [
    {
      "title": "Reflection rules",
      "statement": "x-axis: (x,y)→(x,−y); y-axis: (x,y)→(−x,y); origin: (x,y)→(−x,−y).",
      "proof": "Reflection preserves the distance from the mirror line and reverses the relevant direction."
    }
  ],
  "formulaPropertyBank": [
    "x-axis: y=0",
    "y-axis: x=0",
    "Origin=(0,0)",
    "Distance from y-axis=|x|",
    "Distance from x-axis=|y|"
  ],
  "conceptConnections": [
    "The number line becomes the two-dimensional coordinate plane.",
    "Coordinates provide the language for graphs.",
    "The next chapter uses coordinates to graph equations."
  ],
  "mathematicalThinking": [
    "Translate words such as left/right/up/down into signs.",
    "Check whether an axis condition forces one coordinate to zero."
  ],
  "errorDetective": [
    {
      "problem": "(−2,3) is plotted to the right.",
      "answer": "Wrong: negative x means left."
    },
    {
      "problem": "(0,5) is in Quadrant II.",
      "answer": "Wrong: it lies on the y-axis, not in a quadrant."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Find all points with x=−3 that are 5 units from the x-axis.",
      "answer": "(−3,5) and (−3,−5)."
    }
  ],
  "realLifeMathematics": [
    "Maps use coordinate locations.",
    "Graphs use ordered pairs to display measurements.",
    "Computer graphics use coordinate systems."
  ],
  "mathematicalActivityLab": [
    {
      "title": "Human coordinate plane",
      "steps": [
        "Mark an origin and axes on the floor.",
        "Call out coordinates.",
        "Move to each point.",
        "Reflect selected points and record the new coordinates."
      ]
    }
  ],
  "figureBank": [
  {
    "title": "Cartesian plane",
    "diagram": "              y\n              ↑\n       II     │     I\n              │\n←─────────────O────────────→ x\n              │\n      III     │     IV",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Ordered pair",
    "diagram": "P(x,y)\n          ↑ y\n          │      ● P\n          │\n──────────O────────────→ x\n          └── x ──┘",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Axes",
    "diagram": "y-axis: x=0\nx-axis: y=0\n\n          y\n          ↑\n          │ ●(0,y)\n──────────O──────────→ x\n       ●(x,0)",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Reflection",
    "diagram": "P(x,y)\n→ x-axis: P′(x,−y)\n→ y-axis: P″(−x,y)",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Quadrant signs",
    "diagram": "          y\n          ↑\n    II    │    I\n  (−,+)   │  (+,+)\n───────────O──────────→ x\n  (−,−)   │  (+,−)\n   III    │    IV",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  }
],
  "visualLearning": [
    "Draw four quadrants with sign pairs.",
    "Plot a point and all three reflections."
  ],
  "masterDefinitions": [
    {
      "term": "Cartesian plane",
      "definition": "A plane formed by two perpendicular coordinate axes."
    },
    {
      "term": "Ordered pair",
      "definition": "(x,y), where x is first and y is second."
    },
    {
      "term": "Origin",
      "definition": "The intersection of the axes, (0,0)."
    }
  ],
  "formulaRevisionSheet": [
    "x-axis → y=0",
    "y-axis → x=0",
    "distance from y-axis=|x|",
    "distance from x-axis=|y|"
  ],
  "questionBank": [
    {
      "question": "Quadrant of (4,−7)?",
      "answer": "IV."
    },
    {
      "question": "Find k if (k,8) is on y-axis.",
      "answer": "0."
    },
    {
      "question": "Reflect (−2,6) in y-axis.",
      "answer": "(2,6)."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Show Answer must reveal the final answer followed by the complete step-by-step solution."
  },
  "practiceSets": [
    {
      "title": "Practice Set A",
      "questions": [
        "State the quadrant of (2,5),(−3,4),(−1,−6),(7,−2).",
        "Find points on the axes.",
        "Find distances from axes.",
        "Apply all three reflection rules."
      ]
    }
  ],
  "timedPractice": [
    {
      "duration": "15 minutes",
      "instruction": "Plot 12 points and solve 8 coordinate questions."
    }
  ],
  "chapterQuiz": [
    {
      "question": "The point (−4,3) lies in:",
      "options": [
        "I",
        "II",
        "III",
        "IV"
      ],
      "answer": "II"
    }
  ],
  "examZone": [
    "Keep x first and y second.",
    "Label axes and scale.",
    "Do not put axis points into quadrants.",
    "Write formulas before substitution where appropriate.",
    "Use complete mathematical statements in proof/reasoning questions.",
    "Recheck signs, brackets and powers before finalising an answer."
  ],
  "commonMistakes": [
    "Swapping coordinates.",
    "Ignoring signs.",
    "Using negative distance.",
    "Calling axis points quadrant points.",
    "Confusing a concept definition with an example.",
    "Skipping the verification step.",
    "Swapping ordered coordinates.",
    "Ignoring restrictions such as a denominator being non-zero.",
    "Using an algebraic identity with an incorrect sign."
  ],
  "masterRevision": [
    "Horizontal first, vertical second.",
    "Right/up positive; left/down negative.",
    "Axis means one coordinate is zero.",
    "Reflection changes predictable signs."
  ],
  "detailedSummary": [
    "The Cartesian plane combines two number lines.",
    "Ordered pairs locate points.",
    "Signs determine quadrants.",
    "Absolute values give distances from axes.",
    "Reflection creates systematic coordinate changes."
  ],
  "finalChapterTest": [
    {
      "question": "A(−3,4), B(3,4), C(3,−4), D(−3,−4) are plotted. What figure do they form?",
      "answer": "A rectangle.",
      "solution": "AB and CD are horizontal, BC and DA are vertical. Opposite sides are parallel and equal, and adjacent sides are perpendicular. Hence the figure is a rectangle."
    }
  ],
  "importantPoints": [
    "Ordered pair is (x,y).",
    "Quadrants: I(+,+), II(−,+), III(−,−), IV(+,−).",
    "x-axis has y=0.",
    "y-axis has x=0.",
    "Show substitutions clearly in Class 9 solutions.",
    "Do not skip sign checks when negative numbers are involved.",
    "Use the definition or theorem that directly justifies the step.",
    "A correct final answer with no reasoning may lose marks in descriptive questions.",
    "An ordered pair is written (x,y), with x first.",
    "Abscissa = x-coordinate; ordinate = y-coordinate.",
    "Quadrants: I(+,+), II(-,+), III(-,-), IV(+,-).",
    "x-axis has y=0; y-axis has x=0.",
    "Distance from x-axis is |y|; distance from y-axis is |x|.",
    "Reflection in x-axis changes y; reflection in y-axis changes x."
  ],
  "keyTerms": [
    "Cartesian plane",
    "x-axis",
    "y-axis",
    "Origin",
    "Ordered pair",
    "Quadrant",
    "Abscissa",
    "Ordinate",
    "Reflection",
    "Symmetry"
  ],
  "chapterSummary": "Coordinate Geometry converts position into numbers and prepares the student to understand graphs of equations. The enhanced version keeps the earlier material while adding deeper explanations, more worked examples, reasoning-based practice and stronger Class 9 exam preparation.\n\nMastering this chapter means you should be able to explain the definition, recognise the concept in unfamiliar questions, solve routine and higher-order examples, justify each step, detect common errors, and verify your final answer.",
  "sections": [
    {
      "id": "cartesian-plane",
      "title": "Cartesian Plane",
      "blocks": [

  {
    "type": "concept",
    "title": "📐 Figure 1 — Cartesian plane",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n              y\n              ↑\n       II     │     I\n              │\n←─────────────O────────────→ x\n              │\n      III     │     IV\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 2 — Ordered pair",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nP(x,y)\n          ↑ y\n          │      ● P\n          │\n──────────O────────────→ x\n          └── x ──┘\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 3 — Axes",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\ny-axis: x=0\nx-axis: y=0\n\n          y\n          ↑\n          │ ●(0,y)\n──────────O──────────→ x\n       ●(x,0)\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 4 — Reflection",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nP(x,y)\n→ x-axis: P′(x,−y)\n→ y-axis: P″(−x,y)\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 5 — Quadrant signs",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n          y\n          ↑\n    II    │    I\n  (−,+)   │  (+,+)\n───────────O──────────→ x\n  (−,−)   │  (+,−)\n   III    │    IV\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  }
,

        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The Cartesian plane is formed by two perpendicular number lines. The horizontal line is the x-axis and the vertical line is the y-axis. Their intersection is the origin O(0,0).\n\nA point is represented by an ordered pair (x,y). The first coordinate tells horizontal movement and the second tells vertical movement. The order cannot be reversed.\n\nDeep Class 9 explanation: The Cartesian plane is formed by two mutually perpendicular number lines: the horizontal x-axis and vertical y-axis. Their intersection is the origin O(0,0). The plane is divided into four quadrants. A point is identified uniquely by an ordered pair (x,y). The order matters because (2,5) and (5,2) generally represent different points. The horizontal movement is determined by x first, followed by vertical movement determined by y."
        },
        {
          "type": "example",
          "title": "Plot A(3,2)",
          "color": "orange",
          "text": "Problem: Locate A(3,2).\n\nComplete Solution:\nMove 3 units right and then 2 units up from the origin."
        },
        {
          "type": "example",
          "title": "Plot B(−4,1)",
          "color": "orange",
          "text": "Problem: Locate B(−4,1).\n\nComplete Solution:\nMove 4 units left and 1 unit up."
        },
        {
          "type": "example",
          "title": "Identify origin",
          "color": "orange",
          "text": "Problem: What are the coordinates of the intersection of the axes?\n\nComplete Solution:\nThe origin is (0,0)."
        },
        {
          "type": "example",
          "title": "Order matters",
          "color": "orange",
          "text": "Problem: Compare (3,−2) and (−2,3).\n\nComplete Solution:\nThey are different ordered pairs and represent different points."
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
          "text": "The Cartesian plane is formed by two perpendicular number lines: the horizontal x-axis and vertical y-axis. Their intersection is the origin O(0,0). A point is located by an ordered pair (x,y), where the first coordinate is measured horizontally and the second vertically."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "To plot A(3,2), move 3 units right from the origin and then 2 units up."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "To plot B(-4,1), move 4 units left and then 1 unit up."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Point C(0,-5) lies on the y-axis because its x-coordinate is zero."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "Point D(6,0) lies on the x-axis because its y-coordinate is zero."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Never reverse the order of an ordered pair. (2,5) and (5,2) are different points."
        }
      ]
    },
    {
      "id": "quadrants-and-signs",
      "title": "Quadrants and Signs",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The axes divide the plane into four quadrants. Quadrant I has (+,+), II has (−,+), III has (−,−), and IV has (+,−). A point on either axis is not in a quadrant.\n\nSigns are better understood as directions: positive x means right, negative x means left, positive y means up and negative y means down.\n\nDeep Class 9 explanation: The signs of x and y determine the quadrant. Quadrant I has (+,+), II has (−,+), III has (−,−), and IV has (+,−). A point with either coordinate zero lies on an axis and therefore belongs to no quadrant. This sign rule is one of the fastest exam tools in the chapter."
        },
        {
          "type": "example",
          "title": "Quadrant",
          "color": "orange",
          "text": "Problem: Where is (−5,−2)?\n\nComplete Solution:\nBoth coordinates are negative, so it is in Quadrant III."
        },
        {
          "type": "example",
          "title": "Quadrant I",
          "color": "orange",
          "text": "Problem: Identify the quadrant of (4,7).\n\nComplete Solution:\nBoth coordinates are positive, so Quadrant I."
        },
        {
          "type": "example",
          "title": "Quadrant III",
          "color": "orange",
          "text": "Problem: Identify the quadrant of (−4,−7).\n\nComplete Solution:\nBoth coordinates are negative, so Quadrant III."
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
          "text": "The axes divide the plane into four quadrants. Quadrant I has (+,+), II has (-,+), III has (-,-), and IV has (+,-). The signs tell the quadrant immediately when neither coordinate is zero."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "(-3,5) lies in Quadrant II."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "(-7,-2) lies in Quadrant III."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "(4,-6) lies in Quadrant IV."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "(2,9) lies in Quadrant I."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "A point on an axis is not in any quadrant."
        }
      ]
    },
    {
      "id": "plotting-and-reading-coordinates",
      "title": "Plotting and Reading Coordinates",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "To plot, start at the origin, move horizontally using x, then vertically using y. To read a point, reverse this process.\n\nAlways check the sign after plotting. A negative x must place the point left of the y-axis; a negative y must place it below the x-axis.\n\nDeep Class 9 explanation: To plot (a,b), start at the origin, move a units horizontally according to the sign of a, then move b units vertically according to the sign of b. To read a point from a graph, reverse the process: read the horizontal coordinate first and vertical coordinate second. Never swap them."
        },
        {
          "type": "example",
          "title": "Read a description",
          "color": "orange",
          "text": "Problem: A point is 4 units left and 3 units below O. What are its coordinates?\n\nComplete Solution:\n(−4,−3)."
        },
        {
          "type": "example",
          "title": "Plot a point",
          "color": "orange",
          "text": "Problem: How do you plot (−3,4)?\n\nComplete Solution:\nMove 3 units left from the origin, then 4 units up."
        },
        {
          "type": "example",
          "title": "Read a pair",
          "color": "orange",
          "text": "Problem: A point is 5 units right and 2 units down. Write its coordinates.\n\nComplete Solution:\n(5,−2)."
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
          "text": "To read a plotted point, first project vertically or horizontally to the axes and record the x-coordinate first, then the y-coordinate. To plot a point, reverse this process: move along x, then along y."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "P(-2,4): x=-2 and y=4. So it is two units left and four units above the origin."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Q(5,-3): five units right and three units below the origin."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "If a point is 6 units left and 2 units down, its coordinates are (-6,-2)."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If a point is 4 units right and 0 units vertically, it is (4,0)."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Use a fixed routine: horizontal movement first, vertical movement second."
        }
      ]
    },
    {
      "id": "points-on-the-axes",
      "title": "Points on the Axes",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Every point on the x-axis has y=0 and therefore looks like (x,0). Every point on the y-axis has x=0 and looks like (0,y). The origin is (0,0) and belongs to both axes.\n\nDeep Class 9 explanation: Every point on the x-axis has y=0, so its form is (a,0). Every point on the y-axis has x=0, so its form is (0,b). The origin is the special point (0,0), which lies on both axes. Because quadrants are regions between the axes, an axis point is not assigned to any quadrant."
        },
        {
          "type": "example",
          "title": "Find k",
          "color": "orange",
          "text": "Problem: (7,k) lies on x-axis. Find k.\n\nComplete Solution:\nk=0."
        },
        {
          "type": "example",
          "title": "Find k",
          "color": "orange",
          "text": "Problem: (k,−3) lies on y-axis. Find k.\n\nComplete Solution:\nk=0."
        },
        {
          "type": "example",
          "title": "x-axis",
          "color": "orange",
          "text": "Problem: Write a point on the x-axis with x-coordinate −9.\n\nComplete Solution:\n(−9,0)."
        },
        {
          "type": "example",
          "title": "y-axis",
          "color": "orange",
          "text": "Problem: Write a point on the y-axis with y-coordinate 8.\n\nComplete Solution:\n(0,8)."
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
          "text": "Every point on the x-axis has y=0, so its form is (x,0). Every point on the y-axis has x=0, so its form is (0,y). The origin is the only point common to both axes."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Which axis contains (-8,0)? The y-coordinate is zero, so it lies on the x-axis."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Which axis contains (0,12)? The x-coordinate is zero, so it lies on the y-axis."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "The point (0,0) is the origin."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "A point (a,0) can be anywhere on the x-axis depending on a."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Do not say a point with x=0 lies on the x-axis; it lies on the y-axis."
        }
      ]
    },
    {
      "id": "distance-from-the-axes",
      "title": "Distance from the Axes",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "For P(x,y), the perpendicular distance from the y-axis is |x| and from the x-axis is |y|. Absolute value is necessary because distance cannot be negative.\n\nDeep Class 9 explanation: In the coordinate plane, the distance of (x,y) from the x-axis is |y| because the vertical coordinate measures vertical displacement. Its distance from the y-axis is |x| because the horizontal coordinate measures horizontal displacement. Absolute value is necessary because distance cannot be negative."
        },
        {
          "type": "example",
          "title": "Distance",
          "color": "orange",
          "text": "Problem: Find distances of P(−6,4) from both axes.\n\nComplete Solution:\nFrom y-axis: |−6|=6 units. From x-axis: |4|=4 units."
        },
        {
          "type": "example",
          "title": "Distance from x-axis",
          "color": "orange",
          "text": "Problem: Find the distance of (−6,4) from the x-axis.\n\nComplete Solution:\n|4|=4 units."
        },
        {
          "type": "example",
          "title": "Distance from y-axis",
          "color": "orange",
          "text": "Problem: Find the distance of (−6,4) from the y-axis.\n\nComplete Solution:\n|−6|=6 units."
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
          "text": "For a point (x,y), its perpendicular distance from the x-axis is |y| and its perpendicular distance from the y-axis is |x|. Absolute value is used because distance cannot be negative."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For P(-4,7), distance from x-axis = |7|=7 units; distance from y-axis = |-4|=4 units."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "For Q(6,-3), distances are 3 units from x-axis and 6 units from y-axis."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "A point (0,5) is 5 units from the x-axis and 0 units from the y-axis."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "A point (-8,0) is 0 units from the x-axis and 8 units from the y-axis."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "The coordinate used for distance from an axis is the one perpendicular to that axis."
        }
      ]
    },
    {
      "id": "reflection-and-symmetry",
      "title": "Reflection and Symmetry",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Reflection changes the position of a point while preserving its distance from the mirror line. Reflection in the x-axis changes only y; reflection in the y-axis changes only x; reflection in the origin changes both signs.\n\nDeep Class 9 explanation: Reflection across the x-axis changes the sign of y but keeps x unchanged: (x,y)→(x,−y). Reflection across the y-axis changes the sign of x: (x,y)→(−x,y). Reflection in the origin changes both signs: (x,y)→(−x,−y). These rules can be understood geometrically as preserving distance from the relevant axis."
        },
        {
          "type": "example",
          "title": "x-axis reflection",
          "color": "orange",
          "text": "Problem: Reflect (3,−5) in x-axis.\n\nComplete Solution:\n(3,5)."
        },
        {
          "type": "example",
          "title": "y-axis reflection",
          "color": "orange",
          "text": "Problem: Reflect (−2,4) in y-axis.\n\nComplete Solution:\n(2,4)."
        },
        {
          "type": "example",
          "title": "origin reflection",
          "color": "orange",
          "text": "Problem: Reflect (−3,−6) in origin.\n\nComplete Solution:\n(3,6)."
        },
        {
          "type": "example",
          "title": "x-axis reflection",
          "color": "orange",
          "text": "Problem: Reflect (3,−5) in the x-axis.\n\nComplete Solution:\n(3,5)."
        },
        {
          "type": "example",
          "title": "y-axis reflection",
          "color": "orange",
          "text": "Problem: Reflect (3,−5) in the y-axis.\n\nComplete Solution:\n(−3,−5)."
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
          "text": "Reflections change signs according to the mirror axis. Reflection in the x-axis: (x,y)→(x,-y). Reflection in the y-axis: (x,y)→(-x,y). Reflection in the origin: (x,y)→(-x,-y)."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Reflect (3,5) in the x-axis: (3,-5)."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Reflect (-4,2) in the y-axis: (4,2)."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Reflect (-6,-1) in the origin: (6,1)."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "The distance of a point and its reflection from the mirror axis is equal, showing the geometric meaning of reflection."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Reflection in an axis changes only the coordinate perpendicular to that axis."
        }
      ]
    },
    {
      "id": "ordered-pairs-abscissa-and-ordinate",
      "title": "Ordered Pairs, Abscissa and Ordinate",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "An ordered pair (x,y) has a first component called the abscissa and a second component called the ordinate. The pair is ordered, so changing the order changes the location unless the coordinates happen to be equal."
        },
        {
          "type": "example",
          "title": "Identify coordinates",
          "color": "orange",
          "text": "Problem: For P(−7,4), find abscissa and ordinate.\n\nComplete Solution:\nAbscissa = −7 and ordinate = 4."
        },
        {
          "type": "example",
          "title": "Construct a point",
          "color": "orange",
          "text": "Problem: Write the point whose abscissa is 5 and ordinate is −3.\n\nComplete Solution:\nThe ordered pair is (5,−3)."
        },
        {
          "type": "example",
          "title": "Compare pairs",
          "color": "orange",
          "text": "Problem: Are (2,−4) and (−4,2) the same point?\n\nComplete Solution:\nNo. Their coordinates are in different orders, so they represent different points."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "First coordinate = x = abscissa.\nSecond coordinate = y = ordinate.\nOrder matters."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "In (x,y), x is the abscissa and y is the ordinate. The abscissa tells horizontal position; the ordinate tells vertical position. Both together uniquely locate the point."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For (-7,4), abscissa=-7 and ordinate=4."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "If abscissa is 5 and ordinate is -2, the point is (5,-2)."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "If a point is on the y-axis, its abscissa must be zero."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "If a point is on the x-axis, its ordinate must be zero."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Remember: 'x comes first' and x is the abscissa."
        }
      ]
    },
    {
      "id": "sign-based-coordinate-reasoning",
      "title": "Sign-Based Coordinate Reasoning",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Many coordinate questions can be solved without drawing the full graph. Determine the signs of x and y first, identify the quadrant, then use zero-coordinate rules for axis points."
        },
        {
          "type": "example",
          "title": "Quadrant II",
          "color": "orange",
          "text": "Problem: Where is (−8,5)?\n\nComplete Solution:\nx is negative and y is positive, so the point lies in Quadrant II."
        },
        {
          "type": "example",
          "title": "Quadrant IV",
          "color": "orange",
          "text": "Problem: Where is (6,−9)?\n\nComplete Solution:\nx is positive and y is negative, so the point lies in Quadrant IV."
        },
        {
          "type": "example",
          "title": "Axis point",
          "color": "orange",
          "text": "Problem: Where is (0,−6)?\n\nComplete Solution:\nx=0, so the point lies on the y-axis, not in a quadrant."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Use signs before plotting.\nZero is an axis condition.\nAxis points are not quadrant points."
        },
        {
          "type": "concept",
          "title": "Deep Concept",
          "color": "blue",
          "text": "Many coordinate questions can be solved without drawing. Determine the signs from the stated quadrant, then use any given distance or axis condition to determine magnitudes."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "A point in Quadrant III has both coordinates negative. If its distances from the y-axis and x-axis are 4 and 7, the point is (-4,-7)."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "A point in Quadrant II with distances 3 from y-axis and 8 from x-axis is (-3,8)."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "A point in Quadrant IV with x-coordinate 6 and distance 2 from x-axis is (6,-2)."
        },
        {
          "type": "example",
          "title": "Worked Example 4",
          "color": "orange",
          "text": "A point in Quadrant I with ordinate 5 and distance 4 from y-axis is (4,5)."
        },
        {
          "type": "example",
          "title": "Exam Insight",
          "color": "orange",
          "text": "Use quadrant for signs and distances for absolute values; combine both to form the ordered pair."
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
        "title": "1. Cartesian plane — Deep Concept",
        "color": "blue",
        "text": "Cartesian plane is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "1. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Cartesian plane: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "1. Exam Insight",
        "color": "green",
        "text": "For Cartesian plane, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Cartesian plane",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Cartesian plane.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Cartesian plane is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Cartesian plane.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Cartesian plane?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Cartesian plane be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "2. Ordered pairs — Deep Concept",
        "color": "blue",
        "text": "Ordered pairs is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "2. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Ordered pairs: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "2. Exam Insight",
        "color": "green",
        "text": "For Ordered pairs, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Ordered pairs",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Ordered pairs.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Ordered pairs is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Ordered pairs.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Ordered pairs?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Ordered pairs be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "3. Quadrants — Deep Concept",
        "color": "blue",
        "text": "Quadrants is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "3. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Quadrants: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "3. Exam Insight",
        "color": "green",
        "text": "For Quadrants, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Quadrants",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Quadrants.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Quadrants is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Quadrants.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Quadrants?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Quadrants be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "4. Plotting points — Deep Concept",
        "color": "blue",
        "text": "Plotting points is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "4. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Plotting points: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "4. Exam Insight",
        "color": "green",
        "text": "For Plotting points, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Plotting points",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Plotting points.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Plotting points is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Plotting points.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Plotting points?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Plotting points be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "5. Distance from axes — Deep Concept",
        "color": "blue",
        "text": "Distance from axes is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "5. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Distance from axes: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "5. Exam Insight",
        "color": "green",
        "text": "For Distance from axes, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Distance from axes",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Distance from axes.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Distance from axes is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Distance from axes.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Distance from axes?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Distance from axes be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "6. Reflection and symmetry — Deep Concept",
        "color": "blue",
        "text": "Reflection and symmetry is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "6. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Reflection and symmetry: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "6. Exam Insight",
        "color": "green",
        "text": "For Reflection and symmetry, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Reflection and symmetry",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Reflection and symmetry.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Reflection and symmetry is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Reflection and symmetry.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Reflection and symmetry?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Reflection and symmetry be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "7. Collinearity — Deep Concept",
        "color": "blue",
        "text": "Collinearity is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "7. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Collinearity: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "7. Exam Insight",
        "color": "green",
        "text": "For Collinearity, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Collinearity",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Collinearity.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Collinearity is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Collinearity.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Collinearity?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Collinearity be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "8. Graphs of linear relations — Deep Concept",
        "color": "blue",
        "text": "Graphs of linear relations is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "8. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Graphs of linear relations: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "8. Exam Insight",
        "color": "green",
        "text": "For Graphs of linear relations, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Graphs of linear relations",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Graphs of linear relations.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Graphs of linear relations is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Graphs of linear relations.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Graphs of linear relations?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Graphs of linear relations be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "9. Intercepts — Deep Concept",
        "color": "blue",
        "text": "Intercepts is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "9. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Intercepts: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "9. Exam Insight",
        "color": "green",
        "text": "For Intercepts, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Intercepts",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Intercepts.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Intercepts is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Intercepts.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Intercepts?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Intercepts be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "10. Horizontal and vertical distances — Deep Concept",
        "color": "blue",
        "text": "Horizontal and vertical distances is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "10. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Horizontal and vertical distances: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "10. Exam Insight",
        "color": "green",
        "text": "For Horizontal and vertical distances, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Horizontal and vertical distances",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Horizontal and vertical distances.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Horizontal and vertical distances is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Horizontal and vertical distances.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Horizontal and vertical distances?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Horizontal and vertical distances be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "11. Coordinate patterns — Deep Concept",
        "color": "blue",
        "text": "Coordinate patterns is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "11. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Coordinate patterns: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "11. Exam Insight",
        "color": "green",
        "text": "For Coordinate patterns, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Coordinate patterns",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Coordinate patterns.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Coordinate patterns is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Coordinate patterns.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Coordinate patterns?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Coordinate patterns be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "12. Midpoint — Deep Concept",
        "color": "blue",
        "text": "Midpoint is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "12. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Midpoint: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "12. Exam Insight",
        "color": "green",
        "text": "For Midpoint, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Midpoint",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Midpoint.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Midpoint is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Midpoint.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Midpoint?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Midpoint be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "13. Distance formula — Deep Concept",
        "color": "blue",
        "text": "Distance formula is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "13. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Distance formula: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "13. Exam Insight",
        "color": "green",
        "text": "For Distance formula, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Distance formula",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Distance formula.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Distance formula is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Distance formula.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Distance formula?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Distance formula be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "14. Section formula — Deep Concept",
        "color": "blue",
        "text": "Section formula is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "14. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Section formula: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "14. Exam Insight",
        "color": "green",
        "text": "For Section formula, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Section formula",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Section formula.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Section formula is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Section formula.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Section formula?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Section formula be independently checked?",
            "answer": "Substitute back, use an alternate method, or check its graph or geometric meaning.",
            "solution": "Choose the verification that matches the structure of the problem."
          }
        ]
      },
      {
        "type": "concept",
        "title": "15. Coordinate-area reasoning — Deep Concept",
        "color": "blue",
        "text": "Coordinate-area reasoning is developed from first principles. Begin with the exact mathematical meaning, identify the conditions under which the rule is valid, connect the idea to earlier mathematics, and then apply it. The objective is durable understanding: know what each symbol means, why each operation is allowed, how the result is represented, and how it can be checked. A strong student should be able to explain the definition, demonstrate the method, identify a trap, and verify an answer independently."
      },
      {
        "type": "example",
        "title": "15. Step-by-Step Worked Example",
        "color": "orange",
        "text": "Reliable method for Coordinate-area reasoning: Step 1 — write the givens. Step 2 — state what is required. Step 3 — select the matching definition, theorem, identity, graph rule or algebraic method. Step 4 — substitute with brackets around negative values. Step 5 — simplify line by line. Step 6 — verify with the original condition, an alternate method, a graph or a numerical estimate. Step 7 — state the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "15. Exam Insight",
        "color": "green",
        "text": "For Coordinate-area reasoning, do not jump to the final answer. Show why the method applies. Check hypotheses before using a theorem, preserve exact values where possible, and inspect the final sign, unit or geometrical meaning."
      },
      {
        "type": "practice",
        "title": "Practice — Coordinate-area reasoning",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the main definition or rule associated with Coordinate-area reasoning.",
            "answer": "State the standard definition or rule accurately.",
            "solution": "Write the mathematical rule and include its meaning or condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Explain why Coordinate-area reasoning is useful.",
            "answer": "It gives a way to interpret, calculate, represent or verify a mathematical relationship.",
            "solution": "Connect the concept to a concrete mathematical task."
          },
          {
            "difficulty": "Application",
            "question": "Give a step-by-step approach to a typical problem on Coordinate-area reasoning.",
            "answer": "Identify data → choose the matching rule → work carefully → verify.",
            "solution": "A complete method includes the relevant condition and intermediate steps."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a likely error in Coordinate-area reasoning?",
            "answer": "Applying a rule without checking conditions or mishandling signs or notation.",
            "solution": "Check the definition, hypotheses, signs, arithmetic and final meaning."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Coordinate-area reasoning be independently checked?",
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 1 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 2 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 3 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 4 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 5 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 6 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 7 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 8 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 9 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 10 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 11 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 12 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 13 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 14 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 15 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 16 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 17 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 18 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 19 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 20 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 21 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 22 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 23 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 24 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 25 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 26 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 27 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 28 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 29 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 30 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 31 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 32 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 33 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 34 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 35 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 36 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 37 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 38 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 39 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 40 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 41 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 42 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 43 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
    "text": "This mastery lesson revisits the core ideas of Chapter 3 through a deliberate reasoning cycle. First identify the mathematical object, expression, relation or representation involved. Next state the definition and every condition that must be satisfied. Then choose a suitable theorem, identity, formula, coordinate rule or algebraic operation. Perform the transformation one line at a time, keeping signs, labels and units consistent. Finally verify the conclusion from the original information. Lesson 44 also trains transfer: after solving a routine version, ask what changes if a value is negative, zero, fractional, unusually large, or placed in a different representation. This is how a memorised procedure becomes flexible mathematical understanding."
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
