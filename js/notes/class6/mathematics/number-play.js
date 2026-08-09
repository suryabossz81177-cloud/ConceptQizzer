/*==================================================
  CONCEPT QUIZZER
  CLASS 6 • MATHEMATICS • CHAPTER 3
  Package 13.1.3 — Step 1
  File: number-play.js
==================================================*/

"use strict";

const ChapterData = {
  id: "class6-mathematics-number-play",
  class: "6",
  subject: "Mathematics",
  chapterNumber: 3,
  title: "Number Play",

  description:
    "NCERT Class 6 Mathematics Chapter 3 – Number Play: detailed concept notes, examples, problem-solving ideas and revision support.",

  estimatedReadingTime: "30–40 minutes",
  difficulty: "Intermediate",

  summary:
    "Number Play explores how numbers can convey information, reveal patterns, support estimation, and create interesting puzzles and games. The chapter develops computational thinking through ideas such as supercells, digit arrangements, palindromic patterns, Kaprekar's routine, clock and calendar numbers, number patterns, the Collatz conjecture, and estimation.",

  sections: [

    {
      id: "numbers-tell-us-things",
      title: "Numbers Tell Us Things",
      blocks: [
        {
          type: "paragraph",
          text:
            "Numbers are not used only for counting. We use them to describe information, compare quantities, measure things, organise data and recognise patterns. A number can tell us about time, distance, money, age, temperature, scores, population or many other quantities."
        },
        {
          type: "definition",
          title: "Using Numbers as Information",
          text:
            "A number can represent a quantity, position, measurement, code or other information. Its meaning depends on the situation in which it is used."
        },
        {
          type: "example",
          title: "Everyday Examples",
          text:
            "A clock uses numbers to tell time. A price tells the amount of money needed for an item. A distance tells how far apart two places are. A score tells how many points a player has."
        },
        {
          type: "application",
          title: "Think Carefully",
          text:
            "Before calculating, ask what the numbers represent. Understanding the meaning of the numbers often gives an important clue about how a problem should be solved."
        },
        {
          type: "tip",
          title: "Quick Tip",
          text:
            "Do not look at numbers in isolation. Read the surrounding information and identify what each number represents."
        }
      ]
    },

    {
      id: "supercells",
      title: "Supercells",
      blocks: [
        {
          type: "paragraph",
          text:
            "A number grid can contain special cells called supercells. To identify one, compare a cell with all of its neighbouring cells according to the rule given in the activity. In the standard chapter idea, a supercell is a number that is greater than all of its neighbours."
        },
        {
          type: "definition",
          title: "Supercell",
          text:
            "A supercell is a cell whose number is greater than the numbers in all the cells considered its neighbours."
        },
        {
          type: "example",
          title: "Simple Example",
          text:
            "Suppose a cell contains 18 and every neighbouring cell contains a number smaller than 18. That cell satisfies the supercell condition."
        },
        {
          type: "application",
          title: "Why It Matters",
          text:
            "Supercell activities train careful comparison, visual scanning and logical reasoning. They also show how changing digits can change which cells satisfy a condition."
        },
        {
          type: "warning",
          title: "Common Mistake",
          text:
            "Do not compare a cell with only one neighbour. Check every neighbour required by the rule before calling a cell a supercell."
        }
      ]
    },

    {
      id: "playing-with-digits",
      title: "Playing with Digits",
      blocks: [
        {
          type: "paragraph",
          text:
            "Digits can be rearranged to create different numbers. When the same digits are used in different orders, the resulting numbers can have very different values. This makes digit puzzles useful for developing place-value understanding and number sense."
        },
        {
          type: "definition",
          title: "Smallest and Largest Number",
          text:
            "For a fixed collection of non-zero digits, arranging the digits in ascending order gives the smallest possible number, while arranging them in descending order gives the largest possible number."
        },
        {
          type: "example",
          title: "Using Four Digits",
          text:
            "Using the digits 2, 3, 4 and 7 once each, the smallest 4-digit number is 2347 and the largest is 7432. Their difference is 5085 and their sum is 9779."
        },
        {
          type: "application",
          title: "Problem-Solving",
          text:
            "Digit rearrangement can be used to create numbers with a required sum or difference, compare magnitudes and investigate how place value affects a number."
        },
        {
          type: "examTip",
          title: "Exam Tip",
          text:
            "When arranging digits, check the place values from left to right. The first digit has the greatest effect on the size of the number."
        }
      ]
    },

    {
      id: "palindromic-patterns",
      title: "Palindromic Patterns",
      blocks: [
        {
          type: "paragraph",
          text:
            "Some numbers look the same when read from left to right and from right to left. These numbers create interesting patterns and puzzles."
        },
        {
          type: "definition",
          title: "Palindromic Number",
          text:
            "A palindromic number reads the same forwards and backwards."
        },
        {
          type: "example",
          title: "Examples",
          text:
            "121, 1331 and 2442 are palindromic numbers because reversing their digits gives the same number."
        },
        {
          type: "application",
          title: "Making Palindromes",
          text:
            "Palindromic-number activities encourage students to observe digit symmetry and construct numbers satisfying additional conditions, such as a given number of digits or a required digit sum."
        },
        {
          type: "tip",
          title: "Quick Check",
          text:
            "Write the digits in reverse order. If the reversed number is identical to the original number, it is palindromic."
        }
      ]
    },

    {
      id: "kaprekar",
      title: "The Magic Number of Kaprekar",
      blocks: [
        {
          type: "paragraph",
          text:
            "Kaprekar's routine is a repeated digit operation that produces a surprising result for many 4-digit starting numbers with suitable digits. The process repeatedly forms the largest and smallest numbers from the same four digits and subtracts the smaller from the larger."
        },
        {
          type: "definition",
          title: "Kaprekar Routine",
          text:
            "For a suitable 4-digit number, arrange its digits in descending order and ascending order, subtract the smaller number from the larger, and repeat the process with the result."
        },
        {
          type: "example",
          title: "A Famous Result",
          text:
            "For suitable 4-digit numbers, repeated application of the routine reaches 6174, known as Kaprekar's constant. Once 6174 is reached, applying the routine again gives 6174."
        },
        {
          type: "application",
          title: "What It Teaches",
          text:
            "The activity combines place value, digit arrangement, subtraction and repeated procedures. It is a useful example of how a simple rule can produce an unexpected pattern."
        },
        {
          type: "warning",
          title: "Important",
          text:
            "The routine has conditions on the starting number and digit arrangement. Do not treat every arbitrary number as if it must reach 6174."
        }
      ]
    },

    {
      id: "clock-and-calendar",
      title: "Clock and Calendar Numbers",
      blocks: [
        {
          type: "paragraph",
          text:
            "Clocks and calendars provide familiar settings in which numbers form special patterns. Digital times can contain repeated or symmetrical-looking digits, while dates can be studied for numerical relationships."
        },
        {
          type: "example",
          title: "Clock Patterns",
          text:
            "Times such as 11:11 show repeated digits. Some apparent time patterns are impossible because clock notation follows fixed limits for hours and minutes."
        },
        {
          type: "application",
          title: "Calendar Patterns",
          text:
            "Calendar dates can be examined for repeated digits, numerical relationships and regular changes from one day or month to another."
        },
        {
          type: "fact",
          title: "Think Like a Mathematician",
          text:
            "A pattern is meaningful only when the rules of the system are respected. A number string may look interesting but still be impossible as a valid clock time or date."
        }
      ]
    },

    {
      id: "number-patterns",
      title: "Playing with Number Patterns",
      blocks: [
        {
          type: "paragraph",
          text:
            "Number patterns can be created by following a rule. Some patterns use addition or subtraction, while others use multiplication, division or a combination of operations. The important skill is to discover the rule and verify that it works."
        },
        {
          type: "definition",
          title: "Number Pattern",
          text:
            "A number pattern is a sequence in which the terms are connected by a definite rule."
        },
        {
          type: "example",
          title: "Simple Patterns",
          text:
            "2, 4, 6, 8, 10 follows an add-2 rule. 3, 6, 12, 24 follows a multiply-by-2 rule. A good solution explains the rule rather than only writing the next number."
        },
        {
          type: "application",
          title: "Creating Your Own Pattern",
          text:
            "Choose a starting number and a rule, generate several terms, and ask another person to discover the rule. This turns pattern solving into a mathematical game."
        },
        {
          type: "examTip",
          title: "Exam Tip",
          text:
            "Check several consecutive terms before deciding on a rule. A rule that fits only one step may not be the intended rule."
        }
      ]
    },

    {
      id: "collatz-conjecture",
      title: "An Unsolved Mystery — The Collatz Conjecture",
      blocks: [
        {
          type: "paragraph",
          text:
            "The Collatz process is a famous number experiment. Starting with a positive integer, if the number is even, divide it by 2. If it is odd, multiply it by 3 and add 1. Repeat the rule on the new number."
        },
        {
          type: "definition",
          title: "Collatz Process",
          text:
            "For a positive integer n: if n is even, replace it by n ÷ 2; if n is odd, replace it by 3n + 1. Continue applying the rule."
        },
        {
          type: "example",
          title: "Starting with 6",
          text:
            "6 is even, so 6 ÷ 2 = 3. Then 3 is odd, so 3 × 3 + 1 = 10. Continuing gives 5, 16, 8, 4, 2, 1."
        },
        {
          type: "fact",
          title: "Why Is It Famous?",
          text:
            "The Collatz conjecture asks whether every positive integer eventually reaches 1 when the process is repeated. It is an example of a simple question that leads to a difficult mathematical problem."
        },
        {
          type: "warning",
          title: "Do Not Call It a Proven Theorem",
          text:
            "The statement that every positive integer eventually reaches 1 is a conjecture, not a result that has been proved for all positive integers."
        }
      ]
    },

    {
      id: "simple-estimation",
      title: "Simple Estimation",
      blocks: [
        {
          type: "paragraph",
          text:
            "Estimation means finding a reasonable approximate value instead of an exact value. It is useful when an exact calculation is unnecessary, difficult to obtain quickly, or when we first want to check whether an answer is sensible."
        },
        {
          type: "definition",
          title: "Estimation",
          text:
            "Estimation is the process of finding a close, sensible value using available information and reasonable assumptions."
        },
        {
          type: "example",
          title: "Everyday Estimation",
          text:
            "You may estimate the number of steps needed to walk from your seat to a door, the amount of water in a container, the number of students travelling by bus, or the approximate cost of several items."
        },
        {
          type: "application",
          title: "Estimate First, Check Later",
          text:
            "A useful strategy is to make a quick estimate, record the assumption used, and then compare it with a measured or calculated value. The difference tells you how close your estimate was."
        },
        {
          type: "tip",
          title: "Quick Tip",
          text:
            "A good estimate does not need to be exact. It should be sensible, explainable and close enough for the purpose of the problem."
        }
      ]
    },

    {
      id: "computational-thinking",
      title: "Computational Thinking and Number Problems",
      blocks: [
        {
          type: "paragraph",
          text:
            "Number puzzles in this chapter encourage computational thinking: understanding a problem, identifying a procedure, following steps carefully, checking results and improving a strategy. This way of thinking is useful beyond mathematics."
        },
        {
          type: "definition",
          title: "Computational Thinking",
          text:
            "Computational thinking is a way of approaching problems by breaking them into logical steps, identifying rules and procedures, testing ideas and using systematic reasoning."
        },
        {
          type: "example",
          title: "A Number-Game Strategy",
          text:
            "If a game allows players to add a limited number of units on each turn and one player wins by reaching a target, a useful strategy is to look for number patterns that control the final move."
        },
        {
          type: "application",
          title: "Beyond Mathematics",
          text:
            "Systematic problem-solving is useful in programming, science, engineering, planning, games and everyday decision-making."
        },
        {
          type: "examTip",
          title: "Best Habit",
          text:
            "When solving a puzzle, write down the rule, test it on small cases, and only then generalise your strategy."
        }
      ]
    },

    {
      id: "chapter-summary",
      title: "Chapter Summary",
      blocks: [
        {
          type: "summary",
          text:
            "Number Play shows that numbers can be used to communicate information, discover patterns, estimate quantities, solve puzzles and design games. The chapter develops number sense and computational thinking through supercells, digit rearrangements, palindromes, Kaprekar's routine, clock and calendar patterns, number patterns, the Collatz process and estimation."
        },
        {
          type: "important",
          title: "Key Takeaway",
          text:
            "Do not treat numbers as isolated symbols. Understand what they represent, look for structure, test your rule carefully and explain the reasoning behind your answer."
        }
      ]
    }

  ],

  importantPoints: [
    "Numbers can convey information as well as represent quantities.",
    "A supercell is identified by comparing a cell with all neighbours required by the rule.",
    "Rearranging digits changes a number because place value changes.",
    "Palindromic numbers read the same forwards and backwards.",
    "Kaprekar's routine repeatedly subtracts the ascending arrangement from the descending arrangement of the same digits.",
    "6174 is Kaprekar's constant for the suitable 4-digit routine.",
    "Clock and calendar patterns must obey the valid rules of time and date notation.",
    "Number patterns should be continued only after the underlying rule has been checked.",
    "The Collatz process uses one rule for even numbers and another for odd numbers.",
    "The statement that every positive integer reaches 1 in the Collatz process is an unsolved conjecture.",
    "Estimation gives a reasonable approximate value and should be sensible for the purpose.",
    "Number puzzles develop computational thinking, logical reasoning and problem-solving skills."
  ],

  keyTerms: [
    "Number Play",
    "Supercell",
    "Digit",
    "Place Value",
    "Palindromic Number",
    "Kaprekar Routine",
    "Kaprekar's Constant",
    "6174",
    "Number Pattern",
    "Clock Pattern",
    "Calendar Pattern",
    "Collatz Process",
    "Collatz Conjecture",
    "Estimation",
    "Computational Thinking",
    "Problem Solving"
  ],

  revisionQuestions: [
    { question: "How can numbers convey information in everyday life?" },
    { question: "What is a supercell?" },
    { question: "Why does rearranging the same digits produce numbers of different values?" },
    { question: "What is a palindromic number? Give two examples." },
    { question: "Describe the basic steps of Kaprekar's routine." },
    { question: "Why is 6174 called Kaprekar's constant?" },
    { question: "Give one example of an interesting clock or calendar number pattern." },
    { question: "What rule is followed in the Collatz process for even and odd numbers?" },
    { question: "Why is the Collatz conjecture called an unsolved problem?" },
    { question: "What is estimation and when is it useful?" }
  ],

  flashcards: [
    {
      front: "What is a supercell?",
      back: "A cell whose number is greater than all the neighbouring cells considered by the given rule."
    },
    {
      front: "What is a palindromic number?",
      back: "A number that reads the same forwards and backwards."
    },
    {
      front: "What is Kaprekar's routine?",
      back: "Arrange the digits in descending and ascending order, subtract the smaller number from the larger, and repeat."
    },
    {
      front: "What is Kaprekar's constant?",
      back: "6174, which is reached by the suitable 4-digit Kaprekar routine."
    },
    {
      front: "What happens to an even number in the Collatz process?",
      back: "It is divided by 2."
    },
    {
      front: "What happens to an odd number in the Collatz process?",
      back: "It is multiplied by 3 and then 1 is added."
    },
    {
      front: "What is estimation?",
      back: "Finding a reasonable approximate value instead of an exact value."
    },
    {
      front: "Why do number puzzles matter?",
      back: "They develop number sense, logical reasoning, systematic thinking and problem-solving skills."
    }
  ],

  mcqs: [
    {
      question: "Which statement best describes a supercell?",
      options: [
        "A cell that is smaller than every neighbour",
        "A cell whose number is greater than all required neighbouring cells",
        "A cell containing only an even number",
        "A cell at the centre of every grid"
      ],
      answer: 1
    },
    {
      question: "Which number is palindromic?",
      options: [
        "1234",
        "2451",
        "1331",
        "1203"
      ],
      answer: 2
    },
    {
      question: "What is Kaprekar's constant?",
      options: [
        "6174",
        "6047",
        "6741",
        "6417"
      ],
      answer: 0
    },
    {
      question: "In the Collatz process, what do we do when the current number is even?",
      options: [
        "Multiply it by 3",
        "Add 1",
        "Divide it by 2",
        "Square it"
      ],
      answer: 2
    },
    {
      question: "Which is the best description of estimation?",
      options: [
        "Finding an exact value every time",
        "Finding a sensible approximate value",
        "Ignoring the information in a problem",
        "Randomly choosing a number"
      ],
      answer: 1
    }
  ]
};
