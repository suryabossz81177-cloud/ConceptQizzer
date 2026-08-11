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
,
"fractions": {
  easy: [
    {question:"In 3/7, which number is the numerator?",options:["3","7","10","1"],answer:0},
    {question:"In 5/9, which number is the denominator?",options:["5","9","14","4"],answer:1},
    {question:"Which is a proper fraction?",options:["7/4","9/9","3/8","11/5"],answer:2},
    {question:"Which is an improper fraction?",options:["2/7","4/9","8/5","1/6"],answer:2},
    {question:"Which fraction is equivalent to 1/2?",options:["2/3","2/4","3/5","4/7"],answer:1},
    {question:"What is 2/7 + 3/7?",options:["5/14","5/7","6/7","1/7"],answer:1},
    {question:"What is 6/9 in simplest form?",options:["2/3","3/4","1/2","4/6"],answer:0},
    {question:"Which fraction is greater?",options:["2/7","5/7","3/7","1/7"],answer:1},
    {question:"Which is a mixed number?",options:["7/3","2 1/4","5/5","9/2"],answer:1},
    {question:"What is 1/4 of 20?",options:["4","5","6","8"],answer:1}
  ],
  medium: [
    {question:"Which fraction is equivalent to 3/5?",options:["6/10","5/8","9/20","12/25"],answer:0},
    {question:"Which is greater?",options:["3/8","3/5","3/10","3/12"],answer:1},
    {question:"What is 4/9 + 2/9?",options:["6/18","6/9","2/9","8/9"],answer:1},
    {question:"What is 7/10 − 3/10?",options:["4/10","4/20","10/4","3/10"],answer:0},
    {question:"Convert 2 1/3 to an improper fraction.",options:["5/3","6/3","7/3","8/3"],answer:2},
    {question:"Convert 11/4 to a mixed number.",options:["2 1/4","2 3/4","3 1/4","3 3/4"],answer:1},
    {question:"Which is greater: 2/3 or 3/5?",options:["2/3","3/5","They are equal","Cannot compare"],answer:0},
    {question:"What is 1/2 + 1/4?",options:["2/6","3/4","1/6","2/4"],answer:1},
    {question:"What is 3/4 − 1/4?",options:["1/2","2/8","3/8","1/4"],answer:0},
    {question:"What is 3/5 of 20?",options:["8","10","12","15"],answer:2}
  ],
  hard: [
    {question:"Which is the greatest fraction?",options:["5/8","2/3","7/12","3/5"],answer:1},
    {question:"What is 2/3 + 1/6?",options:["3/9","4/6","5/6","1"],answer:2},
    {question:"What is 5/6 − 1/4?",options:["1/2","7/12","2/3","3/8"],answer:1},
    {question:"Simplify 18/24.",options:["2/3","3/4","4/5","6/8"],answer:1},
    {question:"Which is equivalent to 7/9?",options:["14/18","21/30","28/45","35/54"],answer:0},
    {question:"Arrange from smallest to largest: 1/2, 3/4, 2/3.",options:["1/2, 2/3, 3/4","2/3, 1/2, 3/4","3/4, 2/3, 1/2","1/2, 3/4, 2/3"],answer:0},
    {question:"What is 3/8 + 1/4?",options:["4/12","5/8","7/8","1/2"],answer:1},
    {question:"What is 7/8 − 1/2?",options:["3/8","5/8","1/4","4/8"],answer:0},
    {question:"What is 2/5 of 35?",options:["10","12","14","15"],answer:2},
    {question:"Which fraction is closest to 1?",options:["2/5","5/6","3/8","4/9"],answer:1},
    {question:"Convert 3 2/5 to an improper fraction.",options:["15/5","16/5","17/5","18/5"],answer:2},
    {question:"Convert 17/6 to a mixed number.",options:["2 5/6","3 1/6","2 1/6","3 5/6"],answer:0},
    {question:"What is 1/3 + 1/2?",options:["2/5","3/5","5/6","1/6"],answer:2},
    {question:"What is 5/8 − 1/4?",options:["1/8","2/8","3/8","4/8"],answer:2},
    {question:"Which pair is equivalent?",options:["2/3 and 8/12","3/4 and 6/10","4/5 and 8/15","5/6 and 10/18"],answer:0}
  ],
  tooHard: [
    {question:"What is 5/6 + 7/12?",options:["12/18","17/12","19/12","1 1/12"],answer:1},
    {question:"What is 7/8 − 5/12?",options:["11/24","13/24","15/24","17/24"],answer:1},
    {question:"Simplify 42/56.",options:["2/3","3/4","4/5","6/7"],answer:1},
    {question:"Which fraction lies between 1/2 and 3/4?",options:["1/3","5/8","7/8","2/5"],answer:1},
    {question:"What is 3/4 of 28?",options:["18","20","21","24"],answer:2},
    {question:"A ribbon is 5/6 m long. If 1/3 m is used, how much remains?",options:["1/2 m","2/3 m","1/3 m","5/9 m"],answer:0},
    {question:"Which is greater?",options:["7/10","2/3","5/8","3/5"],answer:0},
    {question:"What is 2 1/4 + 1 2/3?",options:["3 5/7","3 11/12","4 1/12","3 7/12"],answer:1},
    {question:"What is 4 1/5 − 2 3/10?",options:["1 7/10","1 9/10","2 1/10","2 7/10"],answer:1},
    {question:"If 3/5 of a number is 18, the number is:",options:["24","30","36","45"],answer:1},
    {question:"Which fraction is in simplest form?",options:["12/18","15/25","14/21","11/17"],answer:3},
    {question:"What is 7/9 + 5/6?",options:["29/18","31/18","35/18","37/18"],answer:1},
    {question:"What is 11/12 − 2/9?",options:["25/36","29/36","31/36","33/36"],answer:1},
    {question:"Arrange 3/5, 7/10 and 2/3 from greatest to smallest.",options:["7/10, 2/3, 3/5","2/3, 7/10, 3/5","3/5, 2/3, 7/10","7/10, 3/5, 2/3"],answer:0},
    {question:"A tank is 3/4 full. After 1/6 of the tank is used, what fraction remains?",options:["5/12","7/12","2/3","1/2"],answer:1},
    {question:"Which fraction equals 2 3/5?",options:["10/5","12/5","13/5","15/5"],answer:2},
    {question:"What is 5/7 of 49?",options:["28","30","35","42"],answer:2},
    {question:"A class has 32 students. 3/8 are in a group. How many students are in the group?",options:["8","10","12","14"],answer:2},
    {question:"What is the difference between 5/6 and 3/8?",options:["7/24","9/24","11/24","13/24"],answer:2},
    {question:"Which common denominator is useful for 2/9 and 5/12?",options:["18","24","36","48"],answer:2}
  ],
  extreme: [
    {question:"What is 7/8 + 11/12?",options:["37/24","39/24","41/24","43/24"],answer:2},
    {question:"What is 13/15 − 7/18?",options:["19/90","29/90","31/90","41/90"],answer:2},
    {question:"Which fraction is exactly halfway between 1/3 and 2/3?",options:["1/2","2/5","3/5","5/9"],answer:0},
    {question:"A number is such that 4/7 of it is 32. What is the number?",options:["48","52","56","64"],answer:2},
    {question:"A 12 m rope has 5/8 of its length used. How much remains?",options:["4 m","4 1/2 m","4 1/4 m","5 m"],answer:0},
    {question:"Which is the greatest?",options:["11/15","7/10","5/6","13/18"],answer:2},
    {question:"Simplify 84/126.",options:["2/3","3/4","4/5","5/7"],answer:0},
    {question:"What is 2 5/6 + 3 3/4?",options:["5 7/12","6 1/12","6 7/12","5 11/12"],answer:2},
    {question:"What is 6 1/5 − 2 7/10?",options:["3 1/2","3 2/5","3 1/10","4 1/2"],answer:0},
    {question:"If 5/8 of a quantity is 45, the quantity is:",options:["56","64","72","80"],answer:2},
    {question:"A student reads 2/5 of a book on Monday and 1/4 on Tuesday. What fraction is left?",options:["7/20","9/20","11/20","13/20"],answer:1},
    {question:"Which is the smallest?",options:["7/12","5/8","2/3","3/5"],answer:0},
    {question:"A recipe needs 3/4 cup flour. It is multiplied by 2 1/2. How much flour is needed?",options:["1 1/2 cups","1 7/8 cups","2 cups","2 1/4 cups"],answer:1},
    {question:"What is 5/6 of 3/4?",options:["5/8","3/5","7/10","15/24"],answer:0},
    {question:"A journey is 48 km. 5/12 is completed. How many kilometres remain?",options:["20 km","24 km","28 km","32 km"],answer:2},
    {question:"What fraction of 60 is 45?",options:["1/2","2/3","3/4","4/5"],answer:2},
    {question:"If a fraction is multiplied by 1, its value:",options:["Doubles","Halves","Stays the same","Becomes zero"],answer:2},
    {question:"Which mixed number equals 29/8?",options:["3 1/8","3 5/8","3 7/8","4 1/8"],answer:1},
    {question:"A class spends 3/10 of its time on Maths and 1/4 on Science. What fraction is spent on both?",options:["7/20","11/20","13/20","17/20"],answer:0},
    {question:"Which fraction is equal to 1?",options:["7/8","9/10","11/11","12/13"],answer:2},
    {question:"A cake has 12 equal pieces. 5 are eaten in the morning and 3 in the evening. What fraction remains?",options:["1/3","1/4","1/2","4/12"],answer:2},
    {question:"Which fraction is greater than 3/4 but less than 1?",options:["2/3","7/8","1/2","3/5"],answer:1},
    {question:"What is 1 − 7/18?",options:["9/18","10/18","11/18","12/18"],answer:2},
    {question:"Which is equal to 4 3/5?",options:["20/5","21/5","23/5","25/5"],answer:2},
    {question:"A 60 km trip has 3/5 completed. How many km remain?",options:["18","20","24","36"],answer:1}
  ]
}

};
