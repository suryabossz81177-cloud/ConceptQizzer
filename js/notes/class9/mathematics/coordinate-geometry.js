// Class 9 Mathematics — ConceptQizzer enhanced notes
// Previous structured data preserved and expanded.
// Render-safe: no topic `number` field and no `subsections` field.

const notes = {
  "id": "9-mathematics-coordinate-geometry",
  "title": "Coordinate Geometry",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 3,
  "file": "js/notes/class9/mathematics/coordinate-geometry.js",
  "enabled": true,
  "description": "A Class 9 standard, deeply detailed study of Coordinate Geometry. It develops the Cartesian plane from first principles: axes, origin, ordered pairs, abscissa and ordinate, quadrants, plotting, reading coordinates and geometric interpretation. Earlier notes are preserved and expanded with repeated plotting and sign-based examples.",
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
  "topics": [
    {
      "title": "Cartesian Plane",
      "content": "The Cartesian plane is formed by two perpendicular number lines. The horizontal line is the x-axis and the vertical line is the y-axis. Their intersection is the origin O(0,0).\n\nA point is represented by an ordered pair (x,y). The first coordinate tells horizontal movement and the second tells vertical movement. The order cannot be reversed.\n\nDeep Class 9 explanation: The Cartesian plane is formed by two mutually perpendicular number lines: the horizontal x-axis and vertical y-axis. Their intersection is the origin O(0,0). The plane is divided into four quadrants. A point is identified uniquely by an ordered pair (x,y). The order matters because (2,5) and (5,2) generally represent different points. The horizontal movement is determined by x first, followed by vertical movement determined by y.",
      "examples": [
        {
          "title": "Plot A(3,2)",
          "problem": "Locate A(3,2).",
          "solution": "Move 3 units right and then 2 units up from the origin."
        },
        {
          "title": "Plot B(−4,1)",
          "problem": "Locate B(−4,1).",
          "solution": "Move 4 units left and 1 unit up."
        },
        {
          "title": "Identify origin",
          "problem": "What are the coordinates of the intersection of the axes?",
          "solution": "The origin is (0,0)."
        },
        {
          "title": "Order matters",
          "problem": "Compare (3,−2) and (−2,3).",
          "solution": "They are different ordered pairs and represent different points."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Quadrants and Signs",
      "content": "The axes divide the plane into four quadrants. Quadrant I has (+,+), II has (−,+), III has (−,−), and IV has (+,−). A point on either axis is not in a quadrant.\n\nSigns are better understood as directions: positive x means right, negative x means left, positive y means up and negative y means down.\n\nDeep Class 9 explanation: The signs of x and y determine the quadrant. Quadrant I has (+,+), II has (−,+), III has (−,−), and IV has (+,−). A point with either coordinate zero lies on an axis and therefore belongs to no quadrant. This sign rule is one of the fastest exam tools in the chapter.",
      "examples": [
        {
          "title": "Quadrant",
          "problem": "Where is (−5,−2)?",
          "solution": "Both coordinates are negative, so it is in Quadrant III."
        },
        {
          "title": "Quadrant I",
          "problem": "Identify the quadrant of (4,7).",
          "solution": "Both coordinates are positive, so Quadrant I."
        },
        {
          "title": "Quadrant III",
          "problem": "Identify the quadrant of (−4,−7).",
          "solution": "Both coordinates are negative, so Quadrant III."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Plotting and Reading Coordinates",
      "content": "To plot, start at the origin, move horizontally using x, then vertically using y. To read a point, reverse this process.\n\nAlways check the sign after plotting. A negative x must place the point left of the y-axis; a negative y must place it below the x-axis.\n\nDeep Class 9 explanation: To plot (a,b), start at the origin, move a units horizontally according to the sign of a, then move b units vertically according to the sign of b. To read a point from a graph, reverse the process: read the horizontal coordinate first and vertical coordinate second. Never swap them.",
      "examples": [
        {
          "title": "Read a description",
          "problem": "A point is 4 units left and 3 units below O. What are its coordinates?",
          "solution": "(−4,−3)."
        },
        {
          "title": "Plot a point",
          "problem": "How do you plot (−3,4)?",
          "solution": "Move 3 units left from the origin, then 4 units up."
        },
        {
          "title": "Read a pair",
          "problem": "A point is 5 units right and 2 units down. Write its coordinates.",
          "solution": "(5,−2)."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Points on the Axes",
      "content": "Every point on the x-axis has y=0 and therefore looks like (x,0). Every point on the y-axis has x=0 and looks like (0,y). The origin is (0,0) and belongs to both axes.\n\nDeep Class 9 explanation: Every point on the x-axis has y=0, so its form is (a,0). Every point on the y-axis has x=0, so its form is (0,b). The origin is the special point (0,0), which lies on both axes. Because quadrants are regions between the axes, an axis point is not assigned to any quadrant.",
      "examples": [
        {
          "title": "Find k",
          "problem": "(7,k) lies on x-axis. Find k.",
          "solution": "k=0."
        },
        {
          "title": "Find k",
          "problem": "(k,−3) lies on y-axis. Find k.",
          "solution": "k=0."
        },
        {
          "title": "x-axis",
          "problem": "Write a point on the x-axis with x-coordinate −9.",
          "solution": "(−9,0)."
        },
        {
          "title": "y-axis",
          "problem": "Write a point on the y-axis with y-coordinate 8.",
          "solution": "(0,8)."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Distance from the Axes",
      "content": "For P(x,y), the perpendicular distance from the y-axis is |x| and from the x-axis is |y|. Absolute value is necessary because distance cannot be negative.\n\nDeep Class 9 explanation: In the coordinate plane, the distance of (x,y) from the x-axis is |y| because the vertical coordinate measures vertical displacement. Its distance from the y-axis is |x| because the horizontal coordinate measures horizontal displacement. Absolute value is necessary because distance cannot be negative.",
      "examples": [
        {
          "title": "Distance",
          "problem": "Find distances of P(−6,4) from both axes.",
          "solution": "From y-axis: |−6|=6 units. From x-axis: |4|=4 units."
        },
        {
          "title": "Distance from x-axis",
          "problem": "Find the distance of (−6,4) from the x-axis.",
          "solution": "|4|=4 units."
        },
        {
          "title": "Distance from y-axis",
          "problem": "Find the distance of (−6,4) from the y-axis.",
          "solution": "|−6|=6 units."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Reflection and Symmetry",
      "content": "Reflection changes the position of a point while preserving its distance from the mirror line. Reflection in the x-axis changes only y; reflection in the y-axis changes only x; reflection in the origin changes both signs.\n\nDeep Class 9 explanation: Reflection across the x-axis changes the sign of y but keeps x unchanged: (x,y)→(x,−y). Reflection across the y-axis changes the sign of x: (x,y)→(−x,y). Reflection in the origin changes both signs: (x,y)→(−x,−y). These rules can be understood geometrically as preserving distance from the relevant axis.",
      "examples": [
        {
          "title": "x-axis reflection",
          "problem": "Reflect (3,−5) in x-axis.",
          "solution": "(3,5)."
        },
        {
          "title": "y-axis reflection",
          "problem": "Reflect (−2,4) in y-axis.",
          "solution": "(2,4)."
        },
        {
          "title": "origin reflection",
          "problem": "Reflect (−3,−6) in origin.",
          "solution": "(3,6)."
        },
        {
          "title": "x-axis reflection",
          "problem": "Reflect (3,−5) in the x-axis.",
          "solution": "(3,5)."
        },
        {
          "title": "y-axis reflection",
          "problem": "Reflect (3,−5) in the y-axis.",
          "solution": "(−3,−5)."
        }
      ],
      "keyPoints": []
    },
    {
      "title": "Ordered Pairs, Abscissa and Ordinate",
      "content": "An ordered pair (x,y) has a first component called the abscissa and a second component called the ordinate. The pair is ordered, so changing the order changes the location unless the coordinates happen to be equal.",
      "examples": [
        {
          "title": "Identify coordinates",
          "problem": "For P(−7,4), find abscissa and ordinate.",
          "solution": "Abscissa = −7 and ordinate = 4."
        },
        {
          "title": "Construct a point",
          "problem": "Write the point whose abscissa is 5 and ordinate is −3.",
          "solution": "The ordered pair is (5,−3)."
        },
        {
          "title": "Compare pairs",
          "problem": "Are (2,−4) and (−4,2) the same point?",
          "solution": "No. Their coordinates are in different orders, so they represent different points."
        }
      ],
      "keyPoints": [
        "First coordinate = x = abscissa.",
        "Second coordinate = y = ordinate.",
        "Order matters."
      ]
    },
    {
      "title": "Sign-Based Coordinate Reasoning",
      "content": "Many coordinate questions can be solved without drawing the full graph. Determine the signs of x and y first, identify the quadrant, then use zero-coordinate rules for axis points.",
      "examples": [
        {
          "title": "Quadrant II",
          "problem": "Where is (−8,5)?",
          "solution": "x is negative and y is positive, so the point lies in Quadrant II."
        },
        {
          "title": "Quadrant IV",
          "problem": "Where is (6,−9)?",
          "solution": "x is positive and y is negative, so the point lies in Quadrant IV."
        },
        {
          "title": "Axis point",
          "problem": "Where is (0,−6)?",
          "solution": "x=0, so the point lies on the y-axis, not in a quadrant."
        }
      ],
      "keyPoints": [
        "Use signs before plotting.",
        "Zero is an axis condition.",
        "Axis points are not quadrant points."
      ]
    }
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
    "A correct final answer with no reasoning may lose marks in descriptive questions."
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
  "chapterSummary": "Coordinate Geometry converts position into numbers and prepares the student to understand graphs of equations. The enhanced version keeps the earlier material while adding deeper explanations, more worked examples, reasoning-based practice and stronger Class 9 exam preparation."
};

export default notes;
