const quizDatabase = {
  class6: {
    mathematics: {
      "patterns-in-mathematics": {
        easy: [
{
question: "What is a pattern?",
options: [
"A random arrangement",
"A repeated rule or design",
"Only a drawing",
"A type of number"
],
answer: 1
},
{
question: "Which of these is a number pattern?",
options: [
"2, 4, 6, 8",
"A, B, C",
"Red, Blue",
"Circle, Square"
],
answer: 0
},
{
question: "What comes next? 5, 10, 15, ?",
options: [
"18",
"20",
"25",
"30"
],
answer: 1
},
{
question: "What comes next? 3, 6, 9, ?",
options: [
"10",
"11",
"12",
"15"
],
answer: 2
},
{
question: "Which pattern increases by 2?",
options: [
"2, 4, 6, 8",
"5, 10, 15",
"3, 6, 9",
"1, 4, 9"
],
answer: 0
},
{
question: "What comes next? A, C, E, ?",
options: [
"F",
"G",
"H",
"I"
],
answer: 1
},
{
question: "Which is an even number pattern?",
options: [
"1,3,5,7",
"2,4,6,8",
"5,10,15",
"3,6,9"
],
answer: 1
},
{
question: "What comes next? 7, 14, 21, ?",
options: [
"24",
"27",
"28",
"30"
],
answer: 2
},
{
question: "Which shape pattern repeats?",
options: [
"Circle, Square, Circle, Square",
"Circle, Triangle, Star",
"Square, Rectangle",
"None"
],
answer: 0
},
{
question: "Patterns help us to...",
options: [
"Predict the next term",
"Erase numbers",
"Draw maps",
"Write essays"
],
answer: 0
}
],
        medium: [
  {
    question: "What comes next? 12, 18, 24, 30, ?",
    options: ["34", "36", "38", "40"],
    answer: 1
  },
  {
    question: "Which rule generates 6, 11, 16, 21, 26?",
    options: ["Add 4", "Add 5", "Add 6", "Multiply by 2"],
    answer: 1
  },
  {
    question: "What is the missing number? 4, 8, 16, 32, ?",
    options: ["48", "56", "64", "72"],
    answer: 2
  },
  {
    question: "What comes next? 30, 27, 24, 21, ?",
    options: ["19", "18", "17", "16"],
    answer: 1
  },
  {
    question: "Which sequence follows a multiplication rule?",
    options: [
      "5, 10, 15, 20",
      "3, 6, 12, 24",
      "10, 15, 20, 25",
      "8, 12, 16, 20"
    ],
    answer: 1
  },
  {
    question: "What is the next term? 1, 4, 7, 10, ?",
    options: ["12", "13", "14", "15"],
    answer: 1
  },
  {
    question: "Which number completes the pattern? 100, 90, 80, 70, ?",
    options: ["65", "60", "55", "50"],
    answer: 1
  },
  {
    question: "What is the next term? 2, 6, 18, 54, ?",
    options: ["108", "144", "162", "216"],
    answer: 2
  },
  {
    question: "A pattern starts at 9 and increases by 7 each time. What is the fourth term?",
    options: ["23", "28", "30", "37"],
    answer: 1
  },
  {
    question: "What comes next? 1, 3, 5, 7, 9, ?",
    options: ["10", "11", "12", "13"],
    answer: 1
  }
],

hard: [
  {
    question: "What comes next? 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: 2
  },
  {
    question: "The differences in a sequence are 3, 5, 7, 9. If the first term is 2, what is the fifth term?",
    options: ["22", "24", "26", "28"],
    answer: 1
  },
  {
    question: "What is the missing term? 3, 9, 27, 81, ?",
    options: ["162", "216", "243", "324"],
    answer: 2
  },
  {
    question: "Which rule generates 4, 9, 19, 39, 79?",
    options: ["×2 + 1", "×2 - 1", "×3 + 1", "+5"],
    answer: 0
  },
  {
    question: "What comes next? 50, 45, 37, 26, 12, ?",
    options: ["0", "-3", "-5", "-7"],
    answer: 2
  },
  {
    question: "A sequence is 1, 4, 9, 16, 25. What is the next term?",
    options: ["30", "32", "36", "40"],
    answer: 2
  },
  {
    question: "What is the missing number? 5, 11, 23, 47, ?",
    options: ["91", "93", "95", "97"],
    answer: 2
  },
  {
    question: "If a sequence follows ×2 + 3, starting with 2, what is the fourth term?",
    options: ["25", "29", "35", "41"],
    answer: 1
  },
  {
    question: "What comes next? 64, 32, 16, 8, ?",
    options: ["6", "4", "2", "1"],
    answer: 1
  },
  {
    question: "Which sequence has differences increasing by 2?",
    options: [
      "2, 5, 10, 17, 26",
      "2, 4, 6, 8, 10",
      "3, 6, 9, 12, 15",
      "1, 2, 4, 8, 16"
    ],
    answer: 0
  },
  {
    question: "What is the 6th term of 4, 8, 12, 16, ...?",
    options: ["20", "24", "28", "32"],
    answer: 1
  },
  {
    question: "What is the next number? 1, 2, 4, 7, 11, ?",
    options: ["15", "16", "17", "18"],
    answer: 1
  },
  {
    question: "Which number completes the pattern? 81, 27, 9, 3, ?",
    options: ["0", "1", "2", "6"],
    answer: 1
  },
  {
    question: "What is the next term? 7, 14, 28, 56, ?",
    options: ["84", "98", "112", "120"],
    answer: 2
  },
  {
    question: "A pattern begins 3, 6, 11, 18, 27. What is the next term?",
    options: ["36", "38", "40", "42"],
    answer: 1
  }
],

tooHard: [
  {
    question: "What comes next? 2, 5, 11, 23, 47, ?",
    options: ["93", "94", "95", "96"],
    answer: 2
  },
  {
    question: "What is the missing term? 1, 4, 10, 22, 46, ?",
    options: ["90", "92", "94", "96"],
    answer: 2
  },
  {
    question: "A sequence follows ×3 - 1. Starting with 2, what is the fifth term?",
    options: ["122", "160", "161", "162"],
    answer: 2
  },
  {
    question: "What comes next? 3, 8, 18, 38, 78, ?",
    options: ["154", "156", "158", "160"],
    answer: 2
  },
  {
    question: "Find the missing number: 2, 6, 12, 20, 30, 42, ?",
    options: ["54", "56", "58", "60"],
    answer: 1
  },
  {
    question: "The differences are 2, 4, 6, 8, 10. If the first term is 1, what is the sixth term?",
    options: ["31", "36", "37", "41"],
    answer: 2
  },
  {
    question: "What is the next term? 1, 3, 6, 10, 15, 21, ?",
    options: ["27", "28", "29", "30"],
    answer: 1
  },
  {
    question: "Which rule generates 2, 7, 17, 37, 77?",
    options: ["×2 + 3", "×2 + 1", "×3 + 1", "+5"],
    answer: 0
  },
  {
    question: "What is the missing number? 4, 10, 22, 46, 94, ?",
    options: ["186", "188", "190", "192"],
    answer: 2
  },
  {
    question: "What comes next? 100, 50, 25, 12.5, ?",
    options: ["5", "6.25", "7.5", "8"],
    answer: 1
  },
  {
    question: "If the nth term is 2n + 3, what is the 12th term?",
    options: ["25", "27", "29", "30"],
    answer: 1
  },
  {
    question: "What is the next term? 5, 10, 20, 40, 80, ?",
    options: ["120", "140", "160", "180"],
    answer: 2
  },
  {
    question: "A sequence begins 2, 4, 8, 16. What is the 10th term?",
    options: ["256", "512", "1024", "2048"],
    answer: 2
  },
  {
    question: "What is the missing number? 1, 8, 27, 64, ?, 216",
    options: ["100", "125", "144", "150"],
    answer: 1
  },
  {
    question: "What comes next? 6, 13, 27, 55, 111, ?",
    options: ["221", "222", "223", "224"],
    answer: 2
  },
  {
    question: "The differences of a pattern are 4, 7, 10, 13. If the first term is 2, what is the fifth term?",
    options: ["30", "32", "36", "40"],
    answer: 1
  },
  {
    question: "What is the next term? 2, 3, 5, 8, 13, 21, ?",
    options: ["32", "34", "35", "36"],
    answer: 1
  },
  {
    question: "A sequence follows ×2 - 1. Starting at 5, what is the sixth term?",
    options: ["121", "129", "145", "161"],
    answer: 1
  },
  {
    question: "What is the missing number? 10, 18, 34, 66, ?",
    options: ["128", "130", "132", "134"],
    answer: 1
  },
  {
    question: "What comes next? 2, 9, 28, 65, 126, ?",
    options: ["215", "217", "219", "221"],
    answer: 1
  }
],

extreme: [
  {
    question: "What is the next term? 2, 6, 12, 20, 30, 42, ?",
    options: ["54", "56", "58", "60"],
    answer: 1
  },
  {
    question: "What comes next? 1, 2, 6, 24, 120, ?",
    options: ["480", "600", "720", "840"],
    answer: 2
  },
  {
    question: "Find the missing term: 2, 5, 14, 41, 122, ?",
    options: ["243", "365", "366", "367"],
    answer: 1
  },
  {
    question: "What is the next term? 3, 8, 18, 38, 78, ?",
    options: ["156", "158", "160", "162"],
    answer: 1
  },
  {
    question: "A sequence follows ×2 + n, where n increases by 1 each time. Starting with 1, what are the first four terms?",
    options: [
      "1, 3, 8, 19",
      "1, 3, 7, 16",
      "1, 4, 10, 23",
      "1, 2, 5, 12"
    ],
    answer: 0
  },
  {
    question: "What is the next term? 1, 3, 7, 15, 31, 63, ?",
    options: ["95", "111", "127", "129"],
    answer: 2
  },
  {
    question: "What comes next? 2, 10, 30, 68, 130, ?",
    options: ["200", "210", "222", "240"],
    answer: 2
  },
  {
    question: "What is the missing term? 5, 11, 23, 47, 95, ?",
    options: ["189", "190", "191", "192"],
    answer: 2
  },
  {
    question: "If the nth term is n² + n, what is the 10th term?",
    options: ["100", "110", "120", "121"],
    answer: 1
  },
  {
    question: "What is the next term? 1, 4, 10, 22, 46, 94, ?",
    options: ["186", "188", "190", "192"],
    answer: 2
  },
  {
    question: "A pattern has first differences 2, 5, 10, 17, 26. What is the next difference?",
    options: ["35", "36", "37", "38"],
    answer: 2
  },
  {
    question: "What is the 8th term of 2, 4, 8, 16, 32, ...?",
    options: ["128", "192", "256", "512"],
    answer: 2
  },
  {
    question: "What is the missing number? 1, 5, 13, 29, 61, ?",
    options: ["121", "122", "123", "125"],
    answer: 2
  },
  {
    question: "What comes next? 4, 9, 19, 39, 79, ?",
    options: ["157", "158", "159", "160"],
    answer: 2
  },
  {
    question: "What is the next term? 2, 9, 28, 65, 126, ?",
    options: ["215", "217", "219", "221"],
    answer: 1
  },
  {
    question: "If the nth term is n³ + 1, what is the 6th term?",
    options: ["215", "216", "217", "218"],
    answer: 2
  },
  {
    question: "A sequence is 3, 6, 12, 24, 48. What is the 9th term?",
    options: ["384", "512", "768", "1024"],
    answer: 2
  },
  {
    question: "What is the missing number? 7, 15, 31, 63, 127, ?",
    options: ["253", "254", "255", "256"],
    answer: 2
  },
  {
    question: "The differences are 1, 4, 9, 16, 25. If the first term is 3, what is the sixth term?",
    options: ["52", "58", "61", "63"],
    answer: 2
  },
  {
    question: "What comes next? 2, 7, 17, 37, 77, ?",
    options: ["151", "153", "155", "157"],
    answer: 1
  },
  {
    question: "What is the next term? 1, 8, 27, 64, 125, ?",
    options: ["196", "216", "225", "243"],
    answer: 1
  },
  {
    question: "A sequence follows ×3 - 2. Starting with 2, what is the sixth term?",
    options: ["242", "484", "486", "728"],
    answer: 2
  },
  {
    question: "What comes next? 10, 20, 40, 80, 160, ?",
    options: ["240", "280", "320", "360"],
    answer: 2
  },
  {
    question: "What is the missing term? 2, 12, 36, 80, 150, ?",
    options: ["240", "252", "258", "270"],
    answer: 1
  },
  {
    question: "Which rule best describes 2, 6, 18, 54, 162?",
    options: [
      "Add consecutive multiples of 4",
      "Multiply by 3",
      "Multiply by 2 and add 2",
      "Square each term"
    ],
    answer: 1
  }
]
      },

"lines-and-angles": {

  easy: [
    {
      question: "Which figure has two endpoints?",
      options: [
        "Line",
        "Line segment",
        "Ray",
        "Point"
      ],
      answer: 1
    },

    {
      question: "Which figure has exactly one endpoint?",
      options: [
        "Line",
        "Line segment",
        "Ray",
        "Point"
      ],
      answer: 2
    },

    {
      question: "What are three or more points on the same straight line called?",
      options: [
        "Parallel points",
        "Collinear points",
        "Angular points",
        "Reflex points"
      ],
      answer: 1
    },

    {
      question: "The common endpoint of the two rays forming an angle is called the:",
      options: [
        "Arm",
        "Side",
        "Vertex",
        "Line"
      ],
      answer: 2
    },

    {
      question: "Which angle measures exactly 90°?",
      options: [
        "Acute angle",
        "Right angle",
        "Obtuse angle",
        "Straight angle"
      ],
      answer: 1
    },

    {
      question: "Which of these is an acute angle?",
      options: [
        "45°",
        "90°",
        "120°",
        "180°"
      ],
      answer: 0
    },

    {
      question: "Which of these is an obtuse angle?",
      options: [
        "30°",
        "75°",
        "90°",
        "120°"
      ],
      answer: 3
    },

    {
      question: "A straight angle measures:",
      options: [
        "90°",
        "120°",
        "180°",
        "360°"
      ],
      answer: 2
    },

    {
      question: "Which angle is greater than 180° but less than 360°?",
      options: [
        "Acute",
        "Right",
        "Obtuse",
        "Reflex"
      ],
      answer: 3
    },

    {
      question: "In ∠ABC, which letter represents the vertex?",
      options: [
        "A",
        "B",
        "C",
        "None"
      ],
      answer: 1
    }
  ],

  medium: [
    {
      question: "Which statement about a ray is correct?",
      options: [
        "It has no endpoint",
        "It has two endpoints",
        "It has one endpoint",
        "It has three endpoints"
      ],
      answer: 2
    },

    {
      question: "Which angle is smaller than a right angle?",
      options: [
        "120°",
        "90°",
        "45°",
        "180°"
      ],
      answer: 2
    },

    {
      question: "Which angle is greater than 90° but less than 180°?",
      options: [
        "Acute",
        "Right",
        "Obtuse",
        "Reflex"
      ],
      answer: 2
    },

    {
      question: "How many endpoints does a line segment have?",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      answer: 2
    },

    {
      question: "How many endpoints does a line have?",
      options: [
        "0",
        "1",
        "2",
        "4"
      ],
      answer: 0
    },

    {
      question: "If three points lie on the same straight line, they are:",
      options: [
        "Non-collinear",
        "Collinear",
        "Reflex",
        "Parallel"
      ],
      answer: 1
    },

    {
      question: "Which angle is larger?",
      options: [
        "25°",
        "40°",
        "75°",
        "15°"
      ],
      answer: 2
    },

    {
      question: "What is the measure of a straight angle?",
      options: [
        "45°",
        "90°",
        "180°",
        "270°"
      ],
      answer: 2
    },

    {
      question: "Which object can represent a line segment?",
      options: [
        "A ruler",
        "An endless road",
        "A single point",
        "A ray of light"
      ],
      answer: 0
    },

    {
      question: "In ∠PQR, the vertex is:",
      options: [
        "P",
        "Q",
        "R",
        "P and R"
      ],
      answer: 1
    }
  ],

  hard: [
    {
      question: "Which angle is exactly halfway between 90° and 180°?",
      options: [
        "125°",
        "135°",
        "145°",
        "150°"
      ],
      answer: 1
    },

    {
      question: "Which pair contains only acute angles?",
      options: [
        "30°, 60°",
        "90°, 45°",
        "100°, 80°",
        "120°, 30°"
      ],
      answer: 0
    },

    {
      question: "Which pair contains one acute and one obtuse angle?",
      options: [
        "40°, 120°",
        "90°, 180°",
        "30°, 60°",
        "180°, 270°"
      ],
      answer: 0
    },

    {
      question: "A 270° angle is a:",
      options: [
        "Right angle",
        "Straight angle",
        "Reflex angle",
        "Acute angle"
      ],
      answer: 2
    },

    {
      question: "Which statement is false?",
      options: [
        "A ray has one endpoint",
        "A line segment has two endpoints",
        "A line has two endpoints",
        "An angle has a vertex"
      ],
      answer: 2
    },

    {
      question: "Which angle has the widest opening?",
      options: [
        "30°",
        "90°",
        "120°",
        "60°"
      ],
      answer: 2
    },

    {
      question: "If an angle is greater than 180° but less than 360°, it is:",
      options: [
        "Acute",
        "Obtuse",
        "Straight",
        "Reflex"
      ],
      answer: 3
    },

    {
      question: "Which set contains three collinear points?",
      options: [
        "A, B and C on one straight line",
        "A, B and C forming a triangle",
        "Three points at different locations",
        "Three points forming an angle"
      ],
      answer: 0
    },

    {
      question: "Which angle is closest to a right angle?",
      options: [
        "10°",
        "40°",
        "85°",
        "150°"
      ],
      answer: 2
    },

    {
      question: "Which statement correctly compares 60° and 120°?",
      options: [
        "Both are acute",
        "60° is acute and 120° is obtuse",
        "Both are obtuse",
        "60° is obtuse and 120° is acute"
      ],
      answer: 1
    }
  ],

  tooHard: [
    {
      question: "Which classification is completely correct?",
      options: [
        "45° acute, 90° right, 135° obtuse",
        "90° acute, 180° obtuse, 270° straight",
        "120° acute, 180° reflex, 45° right",
        "30° obtuse, 90° reflex, 180° acute"
      ],
      answer: 0
    },

    {
      question: "Which sequence contains only angles greater than 90° and less than 180°?",
      options: [
        "100°, 120°, 150°",
        "45°, 100°, 150°",
        "90°, 120°, 180°",
        "120°, 180°, 150°"
      ],
      answer: 0
    },

    {
      question: "Which statement best distinguishes a line from a ray?",
      options: [
        "A line has two endpoints",
        "A ray has no endpoint",
        "A line extends in both directions while a ray extends in one",
        "A ray extends in both directions"
      ],
      answer: 2
    },

    {
      question: "Which angle is exactly twice a right angle?",
      options: [
        "45°",
        "90°",
        "180°",
        "270°"
      ],
      answer: 2
    },

    {
      question: "Which angle is exactly three times a right angle?",
      options: [
        "180°",
        "270°",
        "300°",
        "360°"
      ],
      answer: 1
    },

    {
      question: "Which option correctly identifies the vertex in ∠XYZ?",
      options: [
        "X",
        "Y",
        "Z",
        "X and Z"
      ],
      answer: 1
    },

    {
      question: "Which group contains one acute, one right and one obtuse angle?",
      options: [
        "30°, 90°, 120°",
        "90°, 180°, 270°",
        "45°, 60°, 80°",
        "100°, 120°, 150°"
      ],
      answer: 0
    },

    {
      question: "Which is impossible for a standard angle classification in this chapter?",
      options: [
        "30°",
        "90°",
        "180°",
        "400°"
      ],
      answer: 3
    },

    {
      question: "Which figure has a fixed measurable length?",
      options: [
        "Line",
        "Line segment",
        "Ray",
        "Point"
      ],
      answer: 1
    },

    {
      question: "Which statement about collinear points is correct?",
      options: [
        "They must form a triangle",
        "They lie on the same straight line",
        "They always form a right angle",
        "They must be endpoints of a ray"
      ],
      answer: 1
    }
  ],

  extreme: [
    {
      question: "Which option contains the correct classification of all five angles?",
      options: [
        "45° acute, 90° right, 120° obtuse, 180° straight, 270° reflex",
        "45° right, 90° acute, 120° straight, 180° reflex, 270° obtuse",
        "45° obtuse, 90° right, 120° acute, 180° reflex, 270° straight",
        "45° acute, 90° obtuse, 120° right, 180° straight, 270° reflex"
      ],
      answer: 0
    },

    {
      question: "Which statement correctly describes all three: line, segment and ray?",
      options: [
        "All have two endpoints",
        "Line has none, ray has one, segment has two",
        "Line has one, ray has two, segment has none",
        "All have one endpoint"
      ],
      answer: 1
    },

    {
      question: "If ∠ABC is 135°, which statement is correct?",
      options: [
        "It is acute and B is not the vertex",
        "It is right and A is the vertex",
        "It is obtuse and B is the vertex",
        "It is reflex and C is the vertex"
      ],
      answer: 2
    },

    {
      question: "Which angle is greater than a straight angle but smaller than a full turn?",
      options: [
        "45°",
        "90°",
        "180°",
        "270°"
      ],
      answer: 3
    },

    {
      question: "Which option contains only pairs of collinear points?",
      options: [
        "A-B on one line and C-D on another line",
        "A-B forming an angle and C-D forming a triangle",
        "A-B-C on one straight line",
        "Points forming a circle"
      ],
      answer: 2
    },

    {
      question: "Which statement about a line segment is always true?",
      options: [
        "It extends endlessly in both directions",
        "It has exactly two endpoints",
        "It has exactly one endpoint",
        "It cannot have a measurable length"
      ],
      answer: 1
    },

    {
      question: "Which angle is closest to 180° without being a straight angle?",
      options: [
        "179°",
        "90°",
        "45°",
        "270°"
      ],
      answer: 0
    },

    {
      question: "Which angle is closest to 360° without being a full turn?",
      options: [
        "180°",
        "270°",
        "359°",
        "90°"
      ],
      answer: 2
    },

    {
      question: "Which option correctly identifies the arms of ∠ABC?",
      options: [
        "AB and BC",
        "BA and BC",
        "A and C only",
        "Only B"
      ],
      answer: 1
    },

    {
      question: "Which complete statement is correct?",
      options: [
        "A line has two endpoints and a ray has none",
        "A line segment has no endpoints and an angle has no vertex",
        "A line extends both ways, a ray one way, and a segment has fixed endpoints",
        "All three are exactly the same"
      ],
      answer: 2
    }
  ]

      }
      
    }
  }
};

/*==================================================
  PACKAGE 13.1.3 — STEP 2
  CLASS 6 • MATHEMATICS • NUMBER PLAY
  Quiz database addition
==================================================*/

"use strict";

/*
  IMPORTANT:
  Paste this block at the VERY END of quizDatabase.js,
  AFTER the main `quizDatabase = { ... };` declaration.

  It does NOT replace the existing database.
*/

quizDatabase.class6 = quizDatabase.class6 || {};
quizDatabase.class6.mathematics =
  quizDatabase.class6.mathematics || {};

quizDatabase.class6.mathematics["number-play"] = {

  easy: [
    {
      question: "Which number is a palindrome?",
      options: ["1234", "1331", "1243", "1456"],
      answer: 1
    },
    {
      question: "What is the smallest 4-digit number that can be made using 2, 3, 4 and 7 once each?",
      options: ["2347", "2374", "2437", "2734"],
      answer: 0
    },
    {
      question: "What is the largest 4-digit number that can be made using 2, 3, 4 and 7 once each?",
      options: ["7234", "7423", "7432", "7342"],
      answer: 2
    },
    {
      question: "Which number is the same when read forwards and backwards?",
      options: ["2451", "3443", "4512", "5632"],
      answer: 1
    },
    {
      question: "In the Collatz process, what is done to an even number?",
      options: ["Multiply by 3", "Add 1", "Divide by 2", "Square it"],
      answer: 2
    },
    {
      question: "In the Collatz process, what is done to an odd number?",
      options: ["Divide by 2", "Multiply by 3 and add 1", "Subtract 1", "Multiply by 2"],
      answer: 1
    },
    {
      question: "What is estimation?",
      options: [
        "Finding an exact answer every time",
        "Finding a reasonable approximate value",
        "Guessing without thinking",
        "Ignoring the data"
      ],
      answer: 1
    },
    {
      question: "What is Kaprekar's constant for the suitable 4-digit routine?",
      options: ["6174", "6147", "6741", "6471"],
      answer: 0
    },
    {
      question: "Which is a useful reason for studying number puzzles?",
      options: [
        "They develop logical thinking",
        "They remove the need for calculation",
        "They make every answer exact",
        "They are only games"
      ],
      answer: 0
    },
    {
      question: "What should you do before deciding the rule of a number pattern?",
      options: [
        "Guess immediately",
        "Check several terms",
        "Choose the biggest number",
        "Ignore the first term"
      ],
      answer: 1
    }
  ],

  medium: [
    {
      question: "What is the difference between the largest and smallest numbers made from 2, 3, 4 and 7?",
      options: ["5085", "5185", "5095", "5075"],
      answer: 0
    },
    {
      question: "Which number is NOT palindromic?",
      options: ["1221", "2442", "3553", "1231"],
      answer: 3
    },
    {
      question: "Starting with 6, what is the next number in the Collatz process?",
      options: ["18", "12", "3", "2"],
      answer: 2
    },
    {
      question: "After 3 in the Collatz process, what comes next?",
      options: ["4", "8", "9", "10"],
      answer: 3
    },
    {
      question: "Which number is formed by arranging 8, 1, 5 and 3 in descending order?",
      options: ["1358", "8531", "8513", "8351"],
      answer: 1
    },
    {
      question: "Which number is formed by arranging 8, 1, 5 and 3 in ascending order?",
      options: ["1358", "1385", "1538", "1835"],
      answer: 0
    },
    {
      question: "A reasonable estimate should be:",
      options: [
        "Random",
        "Close enough for the purpose",
        "Always exact",
        "Always smaller than the real value"
      ],
      answer: 1
    },
    {
      question: "Which time shows repeated digits?",
      options: ["10:24", "11:11", "12:34", "09:27"],
      answer: 1
    },
    {
      question: "Why can a number string that looks like a time still be invalid?",
      options: [
        "Clock notation has fixed limits",
        "All repeated digits are invalid",
        "Times cannot contain zero",
        "Hours never use digits"
      ],
      answer: 0
    },
    {
      question: "Which is the best first step in a number-puzzle problem?",
      options: [
        "Look for the rule or condition",
        "Write a random answer",
        "Skip the data",
        "Use multiplication every time"
      ],
      answer: 0
    }
  ],

  hard: [
    {
      question: "What is 7432 − 2347?",
      options: ["5085", "5185", "4985", "5075"],
      answer: 0
    },
    {
      question: "What is 7432 + 2347?",
      options: ["9679", "9779", "9789", "9879"],
      answer: 1
    },
    {
      question: "Which sequence follows a multiply-by-2 rule?",
      options: ["3, 6, 12, 24", "2, 5, 8, 11", "20, 18, 16, 14", "1, 4, 7, 10"],
      answer: 0
    },
    {
      question: "Which sequence follows a subtract-5 rule?",
      options: ["30, 25, 20, 15", "2, 7, 12, 17", "3, 6, 12, 24", "4, 8, 16, 32"],
      answer: 0
    },
    {
      question: "If a number is 64 and the rule is divide by 2 repeatedly, what is the next term?",
      options: ["16", "32", "128", "62"],
      answer: 1
    },
    {
      question: "Which number is a palindrome?",
      options: ["4004", "4014", "4104", "4401"],
      answer: 0
    },
    {
      question: "For a suitable 4-digit Kaprekar routine, what operation is repeated?",
      options: [
        "Add ascending and descending numbers",
        "Subtract the smaller arrangement from the larger arrangement",
        "Multiply both arrangements",
        "Divide the larger by the smaller"
      ],
      answer: 1
    },
    {
      question: "Which statement about the Collatz conjecture is correct?",
      options: [
        "It has been proved for every positive integer",
        "It is an unsolved conjecture",
        "It applies only to even numbers",
        "It always reaches 6174"
      ],
      answer: 1
    },
    {
      question: "Why is estimation useful before an exact calculation?",
      options: [
        "It can provide a quick reasonableness check",
        "It guarantees the exact answer",
        "It removes the need to understand the problem",
        "It always gives a smaller value"
      ],
      answer: 0
    },
    {
      question: "If a pattern fits the first two terms but fails on later terms, what should you do?",
      options: [
        "Keep the same rule",
        "Recheck and find a rule that fits all relevant terms",
        "Ignore the later terms",
        "Choose the largest term"
      ],
      answer: 1
    },
    {
      question: "What is 3 × 3 + 1?",
      options: ["9", "10", "11", "12"],
      answer: 1
    },
    {
      question: "Starting from 10 in the Collatz process, what is the next term?",
      options: ["5", "20", "31", "4"],
      answer: 0
    },
    {
      question: "Which pair contains two palindromic numbers?",
      options: ["121 and 1331", "123 and 132", "245 and 542", "120 and 121"],
      answer: 0
    },
    {
      question: "What is the smallest number using 1, 5, 8 and 9 once each?",
      options: ["1589", "1859", "1598", "1958"],
      answer: 0
    },
    {
      question: "What is the largest number using 1, 5, 8 and 9 once each?",
      options: ["9851", "9815", "9581", "8951"],
      answer: 0
    }
  ],

  tooHard: [
    {
      question: "Apply one Kaprekar step to 3524. What is the result?",
      options: ["3087", "3088", "3097", "3187"],
      answer: 0
    },
    {
      question: "Apply one Kaprekar step to 2110.",
      options: ["0999", "0990", "1089", "999"],
      answer: 0
    },
    {
      question: "Starting with 13 in the Collatz process, what is the first next term?",
      options: ["26", "39", "40", "42"],
      answer: 1
    },
    {
      question: "Starting with 13, what is the second term after applying the Collatz rule twice?",
      options: ["20", "40", "41", "42"],
      answer: 1
    },
    {
      question: "Which statement best describes a number pattern?",
      options: [
        "It must always use addition",
        "It follows a rule connecting its terms",
        "It must contain only even numbers",
        "It must be increasing"
      ],
      answer: 1
    },
    {
      question: "If a 4-digit number has all four digits equal, why is the usual Kaprekar routine not a suitable test for the 6174 result?",
      options: [
        "There are not four distinct arrangements producing the required difference",
        "The number is too large",
        "All digits become negative",
        "Kaprekar uses only 3-digit numbers"
      ],
      answer: 0
    },
    {
      question: "Which is the best reason to verify an estimated answer?",
      options: [
        "To see whether the estimate is sensible",
        "To make the estimate exact",
        "To avoid understanding units",
        "To guarantee zero error"
      ],
      answer: 0
    },
    {
      question: "Which number is both a palindrome and a multiple of 11?",
      options: ["121", "123", "125", "127"],
      answer: 0
    },
    {
      question: "If the rule is 'add 3, then multiply by 2', starting from 4, what is the next term?",
      options: ["11", "14", "8", "7"],
      answer: 0
    },
    {
      question: "For the pattern 4, 7, 13, 25, the rule from one term to the next is:",
      options: [
        "Multiply by 2 and subtract 1",
        "Add 3 each time",
        "Multiply by 3",
        "Subtract 1 each time"
      ],
      answer: 0
    },
    {
      question: "What is the main mathematical skill developed by digit-rearrangement puzzles?",
      options: [
        "Understanding place value",
        "Memorising tables only",
        "Drawing circles",
        "Measuring temperature"
      ],
      answer: 0
    },
    {
      question: "Why is a clock-pattern puzzle different from an unrestricted digit puzzle?",
      options: [
        "Valid times must obey hour and minute limits",
        "Clocks cannot show repeated digits",
        "Clocks have no numbers",
        "All times are palindromes"
      ],
      answer: 0
    },
    {
      question: "What is the next Collatz term after 16?",
      options: ["8", "32", "49", "15"],
      answer: 0
    },
    {
      question: "What is the next Collatz term after 5?",
      options: ["10", "15", "16", "11"],
      answer: 2
    },
    {
      question: "Which strategy is strongest when solving an unfamiliar number puzzle?",
      options: [
        "Test small cases and identify a rule",
        "Guess the final answer",
        "Use only multiplication",
        "Ignore exceptions"
      ],
      answer: 0
    },
    {
      question: "A good mathematical rule should:",
      options: [
        "Explain the observed terms consistently",
        "Work for only one example",
        "Always increase numbers",
        "Never use subtraction"
      ],
      answer: 0
    },
    {
      question: "What does a palindrome demonstrate about its digits?",
      options: [
        "A form of left-right symmetry",
        "That all digits are even",
        "That the number is prime",
        "That the digits are increasing"
      ],
      answer: 0
    },
    {
      question: "Which is an example of estimation?",
      options: [
        "Saying a 198-page book has about 200 pages",
        "Counting exactly 198 pages",
        "Writing 198 as 189",
        "Ignoring the number of pages"
      ],
      answer: 0
    },
    {
      question: "Why should units be considered when estimating a quantity?",
      options: [
        "The unit gives meaning to the estimate",
        "Units always make estimates exact",
        "Units are unnecessary",
        "Units change every number to zero"
      ],
      answer: 0
    },
    {
      question: "Which process is algorithmic because it follows fixed steps?",
      options: [
        "Kaprekar's routine",
        "Random guessing",
        "Choosing any number",
        "Drawing a picture"
      ],
      answer: 0
    }
  ],

  extreme: [
    {
      question: "What is one Kaprekar step for 6174 itself?",
      options: ["6174", "6147", "6417", "6741"],
      answer: 0
    },
    {
      question: "Why does 6174 remain unchanged under the suitable 4-digit Kaprekar routine?",
      options: [
        "7641 − 1467 = 6174",
        "6174 − 6174 = 6174",
        "7164 − 1467 = 6174",
        "7641 + 1467 = 6174"
      ],
      answer: 0
    },
    {
      question: "Starting with 27, the Collatz sequence begins 27, 82, 41, ... What is the next term?",
      options: ["82", "123", "124", "83"],
      answer: 2
    },
    {
      question: "For the Collatz sequence starting at 10, how many steps are needed to reach 1?",
      options: ["4", "5", "6", "7"],
      answer: 2
    },
    {
      question: "If a number pattern is 2, 5, 11, 23, 47, what is the rule?",
      options: [
        "Multiply by 2 and add 1",
        "Add consecutive odd numbers",
        "Multiply by 3 and subtract 1",
        "Add 3 each time"
      ],
      answer: 0
    },
    {
      question: "Using digits 1, 2, 3 and 4 once each, what is the difference between the largest and smallest numbers?",
      options: ["3087", "3086", "3078", "3187"],
      answer: 0
    },
    {
      question: "Which number is the smallest 5-digit palindrome using 1, 2, 3, 4 and 5 as its first five digits in a symmetric construction?",
      options: ["12321", "12341", "12421", "12521"],
      answer: 0
    },
    {
      question: "What is the key idea behind a supercell puzzle?",
      options: [
        "Compare a cell with every required neighbour",
        "Choose the centre cell automatically",
        "Choose the largest number in the whole grid",
        "Choose every even number"
      ],
      answer: 0
    },
    {
      question: "Why is the Collatz statement called a conjecture?",
      options: [
        "It is believed to be true but has not been proved for all positive integers",
        "It is known to be false",
        "It applies only to decimals",
        "It was proved centuries ago"
      ],
      answer: 0
    },
    {
      question: "Which statement about estimation is strongest?",
      options: [
        "The best estimate depends on the purpose and available information",
        "Every estimate must be exact",
        "Estimation is useful only in mathematics exams",
        "A smaller estimate is always better"
      ],
      answer: 0
    },
    {
      question: "If a sequence follows the rule 'multiply by 3 and subtract 2', what comes after 8?",
      options: ["22", "24", "26", "28"],
      answer: 0
    },
    {
      question: "For the sequence 1, 4, 10, 22, 46, what is the rule?",
      options: [
        "Multiply by 2 and add 2",
        "Multiply by 2 and subtract 1",
        "Add 6 each time",
        "Multiply by 3 and add 1"
      ],
      answer: 0
    },
    {
      question: "Which property makes 1221 a palindrome?",
      options: [
        "The first and last digits match and the middle pair matches",
        "All digits are prime",
        "The number is even",
        "Its digits increase"
      ],
      answer: 0
    },
    {
      question: "Why is testing several terms important when finding a pattern rule?",
      options: [
        "Different rules can fit a small number of terms",
        "The first term is always wrong",
        "Patterns never have rules",
        "More terms make every answer exact"
      ],
      answer: 0
    },
    {
      question: "Which activity most directly combines place value and algorithmic thinking?",
      options: [
        "Kaprekar's routine",
        "Colouring a shape",
        "Reading a clock",
        "Counting objects"
      ],
      answer: 0
    },
    {
      question: "If an estimate is 500 and the actual value is 492, the estimate is:",
      options: [
        "Reasonably close",
        "Exactly correct",
        "Always wrong",
        "Impossible to compare"
      ],
      answer: 0
    },
    {
      question: "Which is a valid 4-digit number for studying the usual Kaprekar routine?",
      options: ["3524", "1111", "2222", "0000"],
      answer: 0
    },
    {
      question: "What is the main lesson of the number games in this chapter?",
      options: [
        "Simple rules can create rich mathematical patterns",
        "All mathematics is guessing",
        "Only calculators can solve number problems",
        "Patterns cannot be explained"
      ],
      answer: 0
    },
    {
      question: "Which statement best describes computational thinking?",
      options: [
        "Breaking a problem into logical, testable steps",
        "Doing calculations without a plan",
        "Memorising every possible answer",
        "Avoiding patterns"
      ],
      answer: 0
    },
    {
      question: "A mathematical puzzle is most convincing when the proposed rule:",
      options: [
        "Explains all the relevant observations and survives checking",
        "Works only once",
        "Produces the biggest answer",
        "Uses the most operations"
      ],
      answer: 0
    },
    {
      question: "What should you do if your first rule fails on a later term?",
      options: [
        "Reject or revise the rule and test a better one",
        "Ignore the later term",
        "Change the question",
        "Keep the rule without checking"
      ],
      answer: 0
    },
    {
      question: "Which pair contains two numbers with the same digits in reverse order?",
      options: ["123 and 321", "124 and 421", "135 and 351", "All of these"],
      answer: 3
    },
    {
      question: "What is the first result when applying the Collatz rule to 7?",
      options: ["14", "21", "22", "8"],
      answer: 2
    },
    {
      question: "What is the next result after 22 in the Collatz sequence?",
      options: ["11", "44", "67", "10"],
      answer: 0
    },
    {
      question: "Which statement is true about number patterns?",
      options: [
        "A pattern may use different operations if a definite rule explains the terms",
        "Every pattern must add the same number",
        "Every pattern must multiply by the same number",
        "Every pattern must increase"
      ],
      answer: 0
    }
  ]
};

/*==================================================
  CONCEPT QUIZZER
  PACKAGE 13.1.4 — QUIZ DATABASE ADDITION
  CLASS 6 • MATHEMATICS • CHAPTER 4
  Data Handling and Presentation
==================================================*/

quizDatabase.class6 = quizDatabase.class6 || {};
quizDatabase.class6.mathematics =
  quizDatabase.class6.mathematics || {};

quizDatabase.class6.mathematics["data-handling-and-presentation"] = {

  easy: [
    { question: "What is data?", options: ["Collected information", "A single answer", "Only a picture", "A colour"], answer: 0 },
    { question: "One complete group of tally marks represents:", options: ["3", "4", "5", "10"], answer: 2 },
    { question: "What does frequency tell us?", options: ["How often something occurs", "Its colour", "Its shape", "Its name"], answer: 0 },
    { question: "What is used to explain the value of a symbol in a pictograph?", options: ["Title", "Key", "Border", "Heading"], answer: 1 },
    { question: "Which graph uses rectangular bars for categories?", options: ["Bar graph", "Pictograph only", "Circle", "Number line"], answer: 0 },
    { question: "If one symbol represents 2 books, 5 symbols represent:", options: ["7", "10", "12", "15"], answer: 1 },
    { question: "If frequencies are 3, 4 and 5, the total is:", options: ["10", "11", "12", "13"], answer: 2 },
    { question: "What should you check before reading a graph?", options: ["The scale", "The phone battery", "The border", "The font"], answer: 0 },
    { question: "Which is an example of data?", options: ["Favourite sports of students", "A blank page", "A pencil", "A colour alone"], answer: 0 },
    { question: "A bar graph is mainly used to:", options: ["Compare categories", "Write stories", "Draw faces", "Measure time directly"], answer: 0 }
  ],

  medium: [
    { question: "A tally record has two groups of five and three extra marks. What is the frequency?", options: ["10", "12", "13", "15"], answer: 2 },
    { question: "A pictograph uses 1 symbol = 4 students. Six symbols represent:", options: ["20", "24", "26", "30"], answer: 1 },
    { question: "Frequencies are 8, 6, 11 and 5. How many observations are there?", options: ["25", "28", "30", "32"], answer: 2 },
    { question: "A graph has scale 5 per division. A bar reaches the sixth division. Its value is:", options: ["25", "30", "35", "40"], answer: 1 },
    { question: "Which category has the greatest frequency: A=12, B=17, C=9, D=15?", options: ["A", "B", "C", "D"], answer: 1 },
    { question: "If 23 students chose cricket and 16 chose football, how many more chose cricket?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "A table records 9 red, 4 blue and 7 green objects. How many objects are recorded?", options: ["18", "19", "20", "21"], answer: 2 },
    { question: "If one pictograph symbol represents 5 cars, 7 symbols represent:", options: ["30", "35", "40", "45"], answer: 1 },
    { question: "Which statement is correct?", options: ["The key can be ignored", "Scale helps read graph values", "Every symbol always means 1", "Bars need not have values"], answer: 1 },
    { question: "A category has frequency 18 and another has frequency 11. Their difference is:", options: ["5", "6", "7", "8"], answer: 2 }
  ],

  hard: [
    { question: "A survey has frequencies 12, 15, 9 and 14. What is the total?", options: ["48", "49", "50", "51"], answer: 2 },
    { question: "A pictograph has 8 symbols and 1 symbol = 6 students. How many students are represented?", options: ["42", "48", "54", "56"], answer: 1 },
    { question: "A bar graph uses a scale of 10. A bar reaches 7 divisions. What is its value?", options: ["60", "70", "80", "90"], answer: 1 },
    { question: "A class records 18, 23, 15 and 24 books read by four groups. Which group read the most?", options: ["18", "23", "15", "24"], answer: 3 },
    { question: "The total frequency is 40. Three categories have frequencies 9, 12 and 7. The fourth frequency is:", options: ["10", "11", "12", "13"], answer: 0 },
    { question: "A pictograph uses 1 symbol = 8 kg. A half-symbol represents:", options: ["2 kg", "4 kg", "6 kg", "8 kg"], answer: 1 },
    { question: "If A=16 and B=24 in a bar graph, B exceeds A by:", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "Which total matches frequencies 6, 9, 4, 11 and 10?", options: ["38", "40", "41", "42"], answer: 1 },
    { question: "A graph scale labels 0, 5, 10, 15, 20. A bar reaches 15. The value is:", options: ["10", "12", "15", "20"], answer: 2 },
    { question: "If 5 symbols represent 35 objects, one symbol represents:", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "A survey records 31 votes for A and 19 for B. What percentage is not needed to answer 'how many more'?", options: ["31", "19", "12", "50"], answer: 3 },
    { question: "Which is the best first step when interpreting a bar graph?", options: ["Read the scale", "Guess the tallest bar", "Ignore labels", "Count the pixels"], answer: 0 },
    { question: "A table has 72 observations divided among four categories. Three frequencies are 18, 21 and 16. The last is:", options: ["15", "16", "17", "18"], answer: 2 },
    { question: "A pictograph has 9 full symbols and 1 half-symbol. If one full symbol = 10, the total is:", options: ["90", "95", "100", "105"], answer: 1 },
    { question: "Why can a misleading scale be a problem?", options: ["It can give a false impression", "It makes bars rectangular", "It adds categories", "It removes data automatically"], answer: 0 }
  ],

  tooHard: [
    { question: "A survey has total 96 observations. Frequencies are 21, 18, 27 and x. Find x.", options: ["28", "29", "30", "31"], answer: 2 },
    { question: "A pictograph uses 1 symbol = 12 units. How many symbols are needed for 84 units?", options: ["6", "7", "8", "9"], answer: 1 },
    { question: "A bar graph scale is 4 per division. A bar is 9 divisions high. What is its value?", options: ["32", "34", "36", "40"], answer: 2 },
    { question: "Values are 18, 25, 31 and 26. What is the difference between the greatest and least?", options: ["11", "12", "13", "14"], answer: 2 },
    { question: "A frequency table has 5 categories with total 75. Four frequencies are 14, 17, 12 and 19. The fifth is:", options: ["11", "12", "13", "14"], answer: 0 },
    { question: "If 3 half-symbols each represent half of 10, together they represent:", options: ["10", "15", "20", "30"], answer: 1 },
    { question: "A graph has scale 2 per small division. A bar reaches 13 small divisions. What is its value?", options: ["24", "26", "28", "30"], answer: 1 },
    { question: "A category has 42 observations. Another has 28. The first is how many times the second?", options: ["1.25", "1.5", "2", "2.5"], answer: 1 },
    { question: "A pictograph shows 4, 6, 3 and 7 symbols with key 1 symbol = 5. Total objects are:", options: ["90", "95", "100", "105"], answer: 2 },
    { question: "A bar graph has values 14, 21, 35 and 28. What fraction of the total belongs to 35?", options: ["1/4", "1/3", "2/5", "1/2"], answer: 1 },
    { question: "If all frequencies in a table are doubled, the total number of observations becomes:", options: ["Half", "The same", "Double", "Four times"], answer: 2 },
    { question: "A graph scale changes from 1 per division to 5 per division. If the bar stays at 6 divisions, the value changes from 6 to:", options: ["11", "20", "30", "36"], answer: 2 },
    { question: "A table has 120 observations. The first three categories contain 25%, 20% and 15%. How many remain?", options: ["40", "48", "50", "52"], answer: 1 },
    { question: "A pictograph has 11 symbols and 1 symbol = 6. One category is shown with 4 symbols. Its value is:", options: ["18", "20", "24", "30"], answer: 2 },
    { question: "Which conclusion is safest from a bar graph?", options: ["The tallest bar represents the greatest value shown", "The tallest bar proves the category is best in every situation", "The graph predicts the future exactly", "The graph proves causation"], answer: 0 },
    { question: "Frequencies 8, 12, 15, 9 and 6 have mean frequency:", options: ["8", "9", "10", "11"], answer: 2 },
    { question: "A total of 90 students are shown. 36 chose A. What percentage of the total is A?", options: ["30%", "35%", "40%", "45%"], answer: 2 },
    { question: "If a bar value is 48 on a scale of 6 per division, the bar reaches:", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "A pictograph has 7 full symbols and 2 half-symbols. With 1 symbol = 8, total is:", options: ["56", "60", "64", "72"], answer: 1 },
    { question: "If a table is missing one frequency, which information is most useful for finding it?", options: ["The total observations and all other frequencies", "The title only", "The colour of the table", "The number of rows only"], answer: 0 }
  ],

  extreme: [
    { question: "A data set has total 240. Four categories are 48, 36, 54 and 42. The fifth is:", options: ["50", "54", "60", "64"], answer: 2 },
    { question: "A pictograph key is 1 symbol = 12. A category has 7 symbols and another has 4 symbols. Their difference is:", options: ["24", "30", "36", "48"], answer: 2 },
    { question: "A graph scale is 7 per division. A bar reaches 12 divisions. Its value is:", options: ["77", "84", "91", "98"], answer: 1 },
    { question: "A data set contains 150 observations. Category A is 36, B is 42, C is 28 and D is 19. The remaining category is:", options: ["25", "26", "27", "28"], answer: 2 },
    { question: "A pictograph shows 9 full symbols and 3 half-symbols. If one symbol = 16, the total is:", options: ["144", "160", "168", "192"], answer: 2 },
    { question: "Five categories have values 18, 24, 30, 36 and 42. What is the difference between the total and the sum of the first three?", options: ["54", "60", "72", "78"], answer: 1 },
    { question: "A bar graph uses 3 units per division. Two bars are 11 and 17 divisions high. Their difference is:", options: ["15", "18", "21", "24"], answer: 1 },
    { question: "A total of 180 observations is divided in the ratio 2:3:4. The largest category is:", options: ["40", "60", "80", "90"], answer: 2 },
    { question: "A pictograph has 15 symbols for 120 items. The key is:", options: ["6 per symbol", "7 per symbol", "8 per symbol", "10 per symbol"], answer: 2 },
    { question: "Values are 12, 18, 24, 30 and 36. If every value is increased by 5, the new total increases by:", options: ["5", "10", "20", "25"], answer: 3 },
    { question: "A frequency table totals 200. Four categories are 35%, 25%, 15% and 10%. The last category is:", options: ["15", "20", "25", "30"], answer: 1 },
    { question: "A graph scale is 4 per division. A bar represents 52. How many divisions does it reach?", options: ["11", "12", "13", "14"], answer: 2 },
    { question: "A pictograph uses a half-symbol for 5 units. Three half-symbols and four full symbols represent:", options: ["45", "50", "55", "60"], answer: 2 },
    { question: "A category has 64 observations and another has 40. The first exceeds the second by what percentage of the second?", options: ["40%", "50%", "60%", "80%"], answer: 2 },
    { question: "A graph shows A=28, B=35, C=49, D=42. What is C as a fraction of the total?", options: ["1/4", "7/22", "7/22 approximately", "1/3"], answer: 2 },
    { question: "A data set has 8 categories with average frequency 15. What is the total number of observations?", options: ["100", "110", "120", "130"], answer: 2 },
    { question: "A pictograph key changes from 1 symbol = 5 to 1 symbol = 8. For 10 symbols, the represented value increases by:", options: ["20", "25", "30", "35"], answer: 2 },
    { question: "A graph has equal divisions labelled 0, 12, 24, 36, 48. A bar reaches the third division. Its value is:", options: ["24", "30", "36", "48"], answer: 2 },
    { question: "A survey has 250 observations. A=70, B=55, C=45, D=30. What percentage belongs to the remaining category?", options: ["15%", "20%", "25%", "30%"], answer: 1 },
    { question: "A category is represented by 18 symbols at 4 items per symbol. Another has 12 symbols. How many more items does the first represent?", options: ["20", "24", "30", "36"], answer: 1 },
    { question: "If all values in a frequency table are multiplied by 3, the total frequency is multiplied by:", options: ["1", "2", "3", "6"], answer: 2 },
    { question: "A bar graph uses a scale of 2.5 per division. A bar reaches 8 divisions. Its value is:", options: ["16", "18", "20", "22"], answer: 2 },
    { question: "A total of 360 is divided into categories of 20%, 30%, 25% and 15%. The remaining percentage is:", options: ["5%", "10%", "15%", "20%"], answer: 1 },
    { question: "The frequencies 16, 24, 32 and 40 are shown. The greatest frequency is what fraction of the total?", options: ["1/4", "5/14", "5/7", "2/5"], answer: 1 },
    { question: "A misleading graph starts its vertical axis at 90 instead of 0. What is the main risk?", options: ["It may exaggerate visual differences", "It always makes bars shorter", "It changes the collected data", "It removes the need for a scale"], answer: 0 }
  ]
};

"use strict";
quizDatabase.class6 = quizDatabase.class6 || {};
quizDatabase.class6.mathematics = quizDatabase.class6.mathematics || {};
quizDatabase.class6.mathematics["prime-time"] = {
  easy:[
    {question:"Which number is a factor of 12?",options:["5","6","7","11"],answer:1},
    {question:"Which is a multiple of 7?",options:["13","14","15","16"],answer:1},
    {question:"How many positive factors does a prime number have?",options:["1","2","3","Many"],answer:1},
    {question:"Which number is prime?",options:["9","12","13","15"],answer:2},
    {question:"Which number is composite?",options:["2","3","5","8"],answer:3},
    {question:"The number 1 is:",options:["Prime","Composite","Neither","Even prime"],answer:2},
    {question:"Which is divisible by 5?",options:["32","41","45","48"],answer:2},
    {question:"Which is divisible by 10?",options:["25","30","35","42"],answer:1},
    {question:"Which is an even prime number?",options:["1","2","4","6"],answer:1},
    {question:"Which is a factor of 20?",options:["3","4","7","9"],answer:1}
  ],
  medium:[
    {question:"Which list contains all positive factors of 18?",options:["1,2,3,6,9,18","1,3,6,18","2,3,9,18","1,2,4,9,18"],answer:0},
    {question:"Which number is a common factor of 12 and 20?",options:["3","4","5","7"],answer:1},
    {question:"Which is a common multiple of 4 and 6?",options:["10","12","14","18"],answer:1},
    {question:"What is the least positive common multiple of 4 and 6?",options:["8","10","12","24"],answer:2},
    {question:"Which number is divisible by 3?",options:["124","135","142","151"],answer:1},
    {question:"Which number is divisible by 9?",options:["126","134","145","152"],answer:0},
    {question:"Which number is divisible by 4?",options:["214","316","327","339"],answer:1},
    {question:"If 6 × 8 = 48, which statement is correct?",options:["6 is a multiple of 48","48 is a factor of 6","6 is a factor of 48","8 is a multiple of 48"],answer:2},
    {question:"Which number is NOT prime?",options:["17","19","21","23"],answer:2},
    {question:"How many positive factors does 16 have?",options:["3","4","5","6"],answer:2}
  ],
  hard:[
    {question:"What is the greatest common factor of 18 and 24?",options:["3","6","9","12"],answer:1},
    {question:"What is the least common multiple of 6 and 8?",options:["12","18","24","48"],answer:2},
    {question:"Which number is divisible by both 3 and 5?",options:["42","50","60","64"],answer:2},
    {question:"Which number is prime?",options:["27","29","33","39"],answer:1},
    {question:"How many positive factors does 24 have?",options:["6","7","8","9"],answer:2},
    {question:"Which pair has a common factor greater than 1?",options:["8 and 15","14 and 25","18 and 27","11 and 20"],answer:2},
    {question:"The digit sum of 729 is 18. Therefore 729 is divisible by:",options:["2 only","3 and 9","5 only","10 only"],answer:1},
    {question:"Which is the smallest common multiple of 5 and 8?",options:["20","30","40","80"],answer:2},
    {question:"Which statement about factors is true?",options:["Every factor is greater than the number","Factors divide exactly","Factors are always multiples","A number has infinitely many factors"],answer:1},
    {question:"Which number has exactly two positive factors?",options:["25","27","31","35"],answer:2},
    {question:"Which number is divisible by 4?",options:["312","314","318","322"],answer:0},
    {question:"Which number is both a multiple of 6 and 9?",options:["18","21","27","30"],answer:0},
    {question:"The common factors of 16 and 24 include:",options:["5","6","8","12"],answer:2},
    {question:"Which number is composite?",options:["37","41","43","45"],answer:3},
    {question:"If 7 is a factor of 56, then 56 is:",options:["a factor of 7","a multiple of 7","prime","not divisible by 7"],answer:1}
  ],
  tooHard:[
    {question:"Find the greatest common factor of 36 and 48.",options:["6","8","12","16"],answer:2},
    {question:"Find the least common multiple of 12 and 15.",options:["30","45","60","120"],answer:2},
    {question:"Which number has exactly 6 positive factors?",options:["12","13","16","17"],answer:0},
    {question:"Which number between 40 and 50 is prime?",options:["42","45","47","49"],answer:2},
    {question:"A number is divisible by 2 and 5. What must be true?",options:["It ends in 0","It ends in 5","It is odd","It is prime"],answer:0},
    {question:"The prime factorisation of 60 contains:",options:["2,3,5","2,4,5","3,4,5","2,3,6"],answer:0},
    {question:"Which is a common multiple of 8 and 12?",options:["20","24","28","36"],answer:1},
    {question:"What is the greatest common factor of 45 and 60?",options:["5","10","15","20"],answer:2},
    {question:"Which number is divisible by 9 but not by 2?",options:["126","135","144","162"],answer:1},
    {question:"A number has factors 1, 2, 4, 7, 14 and 28. The number is:",options:["14","28","42","56"],answer:1},
    {question:"Which pair has least common multiple 24?",options:["4 and 6","6 and 8","8 and 12","3 and 8"],answer:1},
    {question:"Which number is divisible by both 4 and 3?",options:["18","24","26","34"],answer:1},
    {question:"If a number has exactly two positive factors, it must be:",options:["Even","Odd","Prime","Composite"],answer:2},
    {question:"Which number is NOT a factor of 72?",options:["6","8","9","11"],answer:3},
    {question:"Which pair has greatest common factor 9?",options:["18 and 27","18 and 24","27 and 36","45 and 54"],answer:0},
    {question:"What is the least positive number divisible by 4, 6 and 8?",options:["12","24","36","48"],answer:1},
    {question:"A number divisible by 3 has digit sum:",options:["Always 3","A multiple of 3","Always 9","Always even"],answer:1},
    {question:"Which number is divisible by 4 and 5?",options:["20","25","30","35"],answer:0},
    {question:"Which number has prime factors 2, 3 and 5?",options:["20","30","45","50"],answer:1},
    {question:"If 15 is a factor of 90, which is also true?",options:["90 is a multiple of 15","15 is a multiple of 90","90 is prime","15 has no factors"],answer:0}
  ],
  extreme:[
    {question:"Find the least positive number divisible by 6, 8 and 9.",options:["36","48","72","144"],answer:2},
    {question:"Find the greatest common factor of 72 and 108.",options:["12","18","24","36"],answer:1},
    {question:"A number has exactly 3 positive factors. Which form can it have?",options:["p² where p is prime","2p where p is prime","p³ for every prime p","Any odd number"],answer:0},
    {question:"Which number between 80 and 100 is prime?",options:["87","91","97","99"],answer:2},
    {question:"A number is divisible by 2, 3 and 5. What is the smallest positive such number?",options:["15","20","30","60"],answer:2},
    {question:"The prime factorisation of 84 is:",options:["2×3×14","2²×3×7","3²×2×7","2×6×7"],answer:1},
    {question:"Which number has exactly 8 positive factors?",options:["24","30","36","49"],answer:0},
    {question:"If two numbers have GCF 6 and LCM 60, which pair could be them?",options:["12 and 30","18 and 24","6 and 30","10 and 36"],answer:0},
    {question:"The LCM of 18 and 24 is:",options:["48","54","72","96"],answer:2},
    {question:"Which number is divisible by 3, 4 and 5?",options:["40","50","60","70"],answer:2},
    {question:"If 2²×3×5 is a prime factorisation, the number is:",options:["30","40","60","90"],answer:2},
    {question:"Which pair has GCF 12?",options:["24 and 36","36 and 48","48 and 60","60 and 72"],answer:0},
    {question:"A number is divisible by 9 and 5 and lies between 40 and 60. It is:",options:["45","50","54","55"],answer:0},
    {question:"Which number has exactly 5 positive factors?",options:["16","18","24","30"],answer:0},
    {question:"The smallest common multiple of 9, 12 and 15 is:",options:["90","120","180","360"],answer:2},
    {question:"Which statement is always true for positive integers a and b?",options:["Every multiple of a is a factor of a","Every common multiple is divisible by each given number","Every factor is larger than its number","Every odd number is prime"],answer:1},
    {question:"Which number is divisible by 8?",options:["312","318","322","326"],answer:0},
    {question:"If a number is divisible by 6, it must be divisible by:",options:["2 and 3","3 and 5","4 and 6","5 and 6"],answer:0},
    {question:"Which number has prime factors only 2 and 3?",options:["42","48","50","70"],answer:1},
    {question:"If the LCM of two numbers is equal to their product, their GCF is:",options:["0","1","2","The larger number"],answer:1},
    {question:"Which number has exactly 10 positive factors?",options:["48","72","81","90"],answer:3},
    {question:"A number has prime factorisation 2³×3². What is the number?",options:["72","108","144","216"],answer:3},
    {question:"Which is the least positive common multiple of 14 and 21?",options:["28","35","42","84"],answer:2},
    {question:"Which number is both a perfect square and composite?",options:["13","17","25","29"],answer:2},
    {question:"Which number is divisible by 4, 6 and 9?",options:["36","48","54","72"],answer:3}
  ]

,
"perimeter-and-area": {
  easy: [
    {question:"What does perimeter measure?",options:["The surface inside a shape","The distance around a closed shape","The number of corners","The diagonal"],answer:1},
    {question:"What does area measure?",options:["Distance around a shape","Surface covered by a shape","Number of sides","Only the length"],answer:1},
    {question:"The perimeter of a square with side 5 cm is:",options:["10 cm","15 cm","20 cm","25 cm"],answer:2},
    {question:"The area of a square with side 4 cm is:",options:["8 cm²","12 cm²","16 cm²","20 cm²"],answer:2},
    {question:"The area of a rectangle 6 cm by 3 cm is:",options:["9 cm²","18 cm²","24 cm²","36 cm²"],answer:1},
    {question:"The perimeter of a rectangle 7 cm by 2 cm is:",options:["9 cm","14 cm","18 cm","21 cm"],answer:2},
    {question:"Which unit is suitable for perimeter?",options:["cm","cm²","m²","square cm"],answer:0},
    {question:"Which unit is suitable for area?",options:["cm","m","cm²","km"],answer:2},
    {question:"Fencing a garden usually requires finding its:",options:["Area","Perimeter","Volume","Mass"],answer:1},
    {question:"Tiling a floor usually requires finding its:",options:["Area","Perimeter","Height only","Boundary only"],answer:0}
  ],
  medium: [
    {question:"A rectangle is 12 m long and 5 m wide. Its perimeter is:",options:["17 m","24 m","34 m","60 m"],answer:2},
    {question:"A rectangle is 12 m long and 5 m wide. Its area is:",options:["17 m²","34 m²","60 m²","120 m²"],answer:2},
    {question:"A square has perimeter 32 cm. Its side is:",options:["6 cm","8 cm","10 cm","16 cm"],answer:1},
    {question:"A square has side 9 m. Its area is:",options:["18 m²","36 m²","72 m²","81 m²"],answer:3},
    {question:"A rectangle has length 10 cm and breadth 4 cm. The difference between its perimeter and area numerically is:",options:["10","12","14","16"],answer:2},
    {question:"A rectangle has perimeter 30 cm and length 10 cm. Its breadth is:",options:["3 cm","5 cm","10 cm","15 cm"],answer:1},
    {question:"A rectangle has area 48 cm² and length 8 cm. Its breadth is:",options:["4 cm","5 cm","6 cm","8 cm"],answer:2},
    {question:"Which is an area unit?",options:["m","m²","cm","km"],answer:1},
    {question:"A square side changes from 4 cm to 8 cm. Its area becomes:",options:["2 times","4 times","8 times","16 times"],answer:1},
    {question:"A shape has outside sides 5, 4, 3 and 6 cm. Its perimeter is:",options:["14 cm","16 cm","18 cm","20 cm"],answer:2}
  ],
  hard: [
    {question:"A rectangular field is 25 m by 14 m. How much fencing is needed for one complete boundary?",options:["39 m","50 m","78 m","350 m"],answer:2},
    {question:"A floor is 12 m by 8 m. Its area is:",options:["20 m²","40 m²","96 m²","192 m²"],answer:2},
    {question:"A square has area 121 cm². Its side is:",options:["9 cm","10 cm","11 cm","12 cm"],answer:2},
    {question:"A rectangle has perimeter 46 cm and length 15 cm. Its breadth is:",options:["6 cm","8 cm","10 cm","16 cm"],answer:1},
    {question:"A rectangle has area 72 cm² and breadth 8 cm. Its length is:",options:["7 cm","8 cm","9 cm","10 cm"],answer:2},
    {question:"A 10 cm by 6 cm rectangle has a 4 cm by 2 cm rectangle removed from a corner. Its remaining area is:",options:["44 cm²","48 cm²","52 cm²","60 cm²"],answer:2},
    {question:"Two rectangles of areas 24 cm² and 18 cm² are joined without overlap. Total area is:",options:["6 cm²","42 cm²","48 cm²","432 cm²"],answer:1},
    {question:"Which statement is correct?",options:["Perimeter uses square units","Area uses linear units","Perimeter measures boundary and area measures surface","Area and perimeter always have the same value"],answer:2},
    {question:"A square has side 12 cm. Its perimeter is:",options:["24 cm","36 cm","48 cm","144 cm"],answer:2},
    {question:"A rectangle has length 18 m and breadth 7 m. Its area is:",options:["50 m²","126 m²","140 m²","252 m²"],answer:1},
    {question:"A square's side is doubled. Its perimeter becomes:",options:["Half","Double","Triple","Four times"],answer:1},
    {question:"A square's side is doubled. Its area becomes:",options:["Double","Triple","Four times","Eight times"],answer:2},
    {question:"A rectangle is 20 cm by 9 cm. Its perimeter is:",options:["29 cm","40 cm","58 cm","180 cm"],answer:2},
    {question:"A 15 m by 10 m garden is fenced. If a 3 m gate is left unfenced, fencing needed is:",options:["47 m","50 m","53 m","56 m"],answer:0},
    {question:"A rectangular sheet has area 90 cm² and length 15 cm. Its breadth is:",options:["5 cm","6 cm","7 cm","8 cm"],answer:1}
  ],
  tooHard: [
    {question:"A rectangle has perimeter 64 cm. If its length is 20 cm, its breadth is:",options:["10 cm","12 cm","14 cm","16 cm"],answer:1},
    {question:"A square has perimeter 52 m. Its area is:",options:["104 m²","169 m²","196 m²","208 m²"],answer:1},
    {question:"A 18 m by 12 m rectangle has a 6 m by 4 m corner removed. Remaining area is:",options:["168 m²","180 m²","192 m²","200 m²"],answer:1},
    {question:"A rectangular garden is 30 m by 18 m. A path is made around its boundary. If only the outer boundary is fenced, the required fence length is:",options:["48 m","60 m","96 m","540 m"],answer:2},
    {question:"A rectangle has area 144 cm². Which pair could be its length and breadth?",options:["10 cm and 14 cm","12 cm and 12 cm","16 cm and 9 cm","18 cm and 7 cm"],answer:2},
    {question:"A square and rectangle have the same perimeter of 40 cm. The square has side 10 cm. Which rectangle dimensions are possible?",options:["5 cm × 15 cm","8 cm × 12 cm","9 cm × 11 cm","4 cm × 16 cm"],answer:1},
    {question:"A 12 cm × 10 cm rectangle is divided into two equal rectangles along its length. Each has area:",options:["30 cm²","50 cm²","60 cm²","120 cm²"],answer:2},
    {question:"A 20 cm × 8 cm rectangle is divided into four equal squares. What is the side of each square?",options:["2 cm","4 cm","5 cm","8 cm"],answer:2},
    {question:"A square has area 225 cm². Its perimeter is:",options:["45 cm","60 cm","75 cm","90 cm"],answer:1},
    {question:"A rectangular floor is 9 m × 7 m. Tiles cover 1 m² each. How many tiles are needed if there are no gaps?",options:["16","32","63","72"],answer:2},
    {question:"A 16 cm × 9 cm rectangle has the same area as a square. The square's side is:",options:["10 cm","12 cm","14 cm","15 cm"],answer:1},
    {question:"A rectangle's length is 3 times its breadth. If breadth is 6 cm, its perimeter is:",options:["18 cm","24 cm","36 cm","48 cm"],answer:2},
    {question:"A square and a rectangle both have area 64 cm². If rectangle length is 16 cm, its breadth is:",options:["2 cm","4 cm","8 cm","16 cm"],answer:1},
    {question:"A rectangular plot 24 m × 15 m has a 2 m wide gate opening. Fence needed is:",options:["74 m","76 m","78 m","80 m"],answer:0},
    {question:"A shape is made of two non-overlapping rectangles with areas 35 cm² and 42 cm². Its area is:",options:["7 cm²","70 cm²","77 cm²","1470 cm²"],answer:2},
    {question:"If every side of a polygon is measured and added, the result gives its:",options:["Area","Perimeter","Volume","Capacity"],answer:1},
    {question:"A rectangle has perimeter 50 cm. If breadth is 8 cm, length is:",options:["9 cm","12 cm","17 cm","25 cm"],answer:2},
    {question:"A square has side 15 cm. If a 5 cm × 5 cm square is cut from one corner, remaining area is:",options:["175 cm²","200 cm²","225 cm²","250 cm²"],answer:1},
    {question:"A rectangle's area is 120 m² and length is 15 m. Its perimeter is:",options:["30 m","38 m","46 m","60 m"],answer:2},
    {question:"A square has perimeter 80 cm. What is its area?",options:["160 cm²","320 cm²","400 cm²","640 cm²"],answer:2}
  ],
  extreme: [
    {question:"A rectangle has area 240 cm² and perimeter 64 cm. Its dimensions are:",options:["10 cm × 24 cm","12 cm × 20 cm","15 cm × 16 cm","8 cm × 30 cm"],answer:1},
    {question:"A square has the same area as a rectangle 18 cm × 8 cm. Its side is:",options:["10 cm","12 cm","14 cm","16 cm"],answer:1},
    {question:"A 30 m × 20 m rectangle has a 10 m × 8 m rectangular section removed. Remaining area is:",options:["480 m²","500 m²","520 m²","600 m²"],answer:2},
    {question:"A rectangle has perimeter 100 m. If its length is 30 m, its area is:",options:["400 m²","500 m²","600 m²","900 m²"],answer:2},
    {question:"A square has perimeter 96 cm. A rectangle has the same perimeter and length 32 cm. Which is its breadth?",options:["12 cm","16 cm","20 cm","24 cm"],answer:1},
    {question:"A 24 cm × 16 cm rectangle is divided into squares of greatest possible equal side length. What is that side length?",options:["4 cm","6 cm","8 cm","12 cm"],answer:2},
    {question:"A rectangular room is 8 m × 6 m. A 1 m wide strip runs along the entire inside boundary. What is the area left in the central rectangle?",options:["24 m²","30 m²","36 m²","48 m²"],answer:0},
    {question:"A square of side 20 cm has a 5 cm × 5 cm corner removed. The remaining area is:",options:["350 cm²","375 cm²","395 cm²","400 cm²"],answer:1},
    {question:"A rectangle and square have equal perimeter 48 cm. If rectangle dimensions are 16 cm × 8 cm, which has larger area?",options:["Rectangle by 16 cm²","Square by 16 cm²","Same area","Cannot determine"],answer:1},
    {question:"A rectangle's length is twice its breadth. If its area is 98 cm², its breadth is:",options:["5 cm","6 cm","7 cm","8 cm"],answer:2},
    {question:"A square's area is 196 m². What is its perimeter?",options:["28 m","42 m","56 m","196 m"],answer:2},
    {question:"A rectangular field is 45 m × 28 m. A 3 m gate is left open. Fence required is:",options:["143 m","146 m","149 m","152 m"],answer:0},
    {question:"A 20 cm × 15 cm rectangle is split into two rectangles of equal area. If one part has length 10 cm, its breadth is:",options:["10 cm","15 cm","20 cm","30 cm"],answer:1},
    {question:"A square and rectangle have equal area 144 cm². The rectangle is 18 cm long. Its perimeter is:",options:["34 cm","36 cm","52 cm","68 cm"],answer:2},
    {question:"A 25 m × 16 m garden is surrounded by a 1 m wide path outside it. The outer rectangle is 27 m × 18 m. Its area is:",options:["400 m²","450 m²","486 m²","550 m²"],answer:2},
    {question:"A rectangle has dimensions 14 cm × 9 cm. If both dimensions increase by 2 cm, the new area is:",options:["126 cm²","150 cm²","176 cm²","196 cm²"],answer:2},
    {question:"A square of side 10 cm is enlarged to side 15 cm. By how much does its area increase?",options:["50 cm²","100 cm²","125 cm²","150 cm²"],answer:2},
    {question:"A rectangle has area 180 cm² and length 20 cm. If its length is reduced by 5 cm while area remains 180 cm², new breadth is:",options:["8 cm","10 cm","12 cm","15 cm"],answer:2},
    {question:"A rectangular sheet 32 cm × 20 cm is cut into the largest possible equal squares. How many squares are obtained?",options:["8","10","16","20"],answer:1},
    {question:"A square and rectangle have equal area 100 cm². The rectangle is 25 cm × 4 cm. Which has smaller perimeter?",options:["Square","Rectangle","Same","Cannot determine"],answer:0},
    {question:"A rectangle has perimeter 72 cm. If its length and breadth differ by 10 cm, the dimensions are:",options:["23 cm and 13 cm","21 cm and 15 cm","26 cm and 10 cm","30 cm and 6 cm"],answer:0},
    {question:"A 12 m × 9 m room is covered by square tiles of side 3 m. How many complete tiles are needed?",options:["9","12","18","36"],answer:1},
    {question:"A rectangular field 40 m × 25 m has a 5 m × 5 m pond inside it. Land area remaining is:",options:["975 m²","1000 m²","1025 m²","1125 m²"],answer:0},
    {question:"A square has perimeter equal to the perimeter of a 18 cm × 6 cm rectangle. What is the square's area?",options:["144 cm²","196 cm²","225 cm²","256 cm²"],answer:2},
    {question:"A rectangle has area 300 cm² and one side 20 cm. If both sides are increased by 5 cm, new area is:",options:["375 cm²","400 cm²","450 cm²","500 cm²"],answer:2}
]
}

};
