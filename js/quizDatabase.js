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

"class6-mathematics-lines-and-angles": {

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
