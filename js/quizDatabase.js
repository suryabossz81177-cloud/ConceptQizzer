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
      }
    }
  }
};
