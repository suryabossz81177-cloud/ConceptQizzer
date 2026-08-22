window.ChapterData = {
  id: "7-mathematics-number-play",
  class: 7,
  subject: "Mathematics",
  chapterNumber: 6,
  title: "Number Play",

  description:
    "Explore number patterns, properties, calculations and mathematical puzzles through concepts and step-by-step solved examples.",

  sections: [

  {
  title: "Numbers Tell Us Things",

  blocks: [

    {
      type: "concept",
      title: "Numbers Can Convey Information",
      text: "Numbers do not always represent quantities that we simply count or calculate. Sometimes a number gives us information about an arrangement or a situation. In this section, we learn how a sequence of numbers can describe the positions and relationships between people."
    },

    {
      type: "concept",
      title: "The Height-Line Rule",
      text: "Imagine several children standing in a line. Each child looks only at the children standing in front of them and counts how many of those children are taller than themselves. The number they call out tells us something about their position and height relative to the children in front."
    },

    {
      type: "example",
      title: "Understand the Rule",

      html: `
        <div style="
          background:#f8fafc;
          border-radius:18px;
          padding:20px;
          margin:12px 0;
          text-align:center;
          border:1px solid #e2e8f0;
        ">

          <div style="
            display:flex;
            justify-content:center;
            align-items:flex-end;
            gap:14px;
            height:180px;
          ">

            <div style="text-align:center;">
              <div style="
                width:42px;
                height:75px;
                background:#6366f1;
                border-radius:20px 20px 8px 8px;
                margin:auto;
              "></div>
              <b>A</b>
            </div>

            <div style="text-align:center;">
              <div style="
                width:42px;
                height:125px;
                background:#6366f1;
                border-radius:20px 20px 8px 8px;
                margin:auto;
              "></div>
              <b>B</b>
            </div>

            <div style="text-align:center;">
              <div style="
                width:42px;
                height:100px;
                background:#6366f1;
                border-radius:20px 20px 8px 8px;
                margin:auto;
              "></div>
              <b>C</b>
            </div>

            <div style="text-align:center;">
              <div style="
                width:42px;
                height:150px;
                background:#6366f1;
                border-radius:20px 20px 8px 8px;
                margin:auto;
              "></div>
              <b>D</b>
            </div>

          </div>

          <p style="margin-top:18px;">
            <b>Standing order:</b> A → B → C → D
          </p>

        </div>
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Finding the Numbers",
      question: "Four children stand in a line. Their heights from shortest to tallest are represented by A = 1, B = 4, C = 2 and D = 3 in the arrangement A → B → C → D. Using the rule, find the number each child should call out.",

      steps: [
        "A is the first child, so there is nobody in front of A.",
        "Therefore, A calls out 0.",
        "B has A in front of them. A is shorter than B, so there are 0 taller children in front of B.",
        "Therefore, B calls out 0.",
        "C has A and B in front of them. B is taller than C, while A is shorter.",
        "Therefore, C calls out 1.",
        "D has A, B and C in front of them. B and C are taller than D, while A is shorter.",
        "Therefore, D calls out 2.",
        "The resulting sequence is 0, 0, 1, 2."
      ],

      answer: "0, 0, 1, 2"
    },

    {
      type: "concept",
      title: "Reading a Sequence as Information",
      text: "The important idea is that a sequence such as 0, 1, 1, 2, 4, 1, 5 is not just a collection of numbers. Each number has a meaning according to the rule. By studying the sequence, we can reason about the possible arrangement of the children."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — What Does 0 Mean?",
      question: "Under the height-line rule, what does it mean if a child calls out 0?",

      steps: [
        "The child is saying that there are no taller children standing in front of them.",
        "This means every child standing in front is shorter than that child.",
        "However, this does not automatically mean that the child is the tallest in the entire group.",
        "There may be a taller child standing behind them.",
        "Therefore, saying 0 means there is no taller person in front, not necessarily that the child is the tallest overall."
      ],

      answer: "0 means there is no taller child in front of that child."
    },

    {
      type: "concept",
      title: "The First Person",
      text: "The first person in a line has nobody in front of them. Therefore, according to this rule, the first person's number must always be 0."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — First Person",
      question: "Can the first person's number ever be 2?",

      steps: [
        "The first person has no one standing in front.",
        "Therefore, the number of taller people in front is 0.",
        "It is impossible for the first person to have 2 taller people in front.",
        "Therefore, the first person's number must always be 0."
      ],

      answer: "No. The first person's number is always 0."
    },

    {
      type: "concept",
      title: "The Largest Possible Number",
      text: "For a group of people standing in a line, the largest number a person can call out depends on how many people are standing in front of them. If there are n people in the group, the last person has n − 1 people in front, so the number cannot be larger than n − 1."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Maximum Number",
      question: "What is the largest possible number that can be called out in a group of 8 people?",

      steps: [
        "The largest possible number would occur for the last person.",
        "The last person has 7 people in front.",
        "At most, all 7 of those people can be taller.",
        "Therefore, the largest possible number is 7."
      ],

      answer: "7"
    },

    {
      type: "concept",
      title: "Always, Sometimes or Never?",
      text: "The number sequence can be used to test statements logically. A statement may be always true, true only in some arrangements, or impossible. We should use the rule rather than guess from a particular arrangement."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Reasoning",
      question: "Statement: 'If a person says 0, then they are the tallest in the group.' Is this always true?",

      steps: [
        "A person says 0 when there is no taller person in front of them.",
        "A taller person could still be standing behind them.",
        "Therefore, saying 0 does not guarantee that the person is tallest in the whole group.",
        "The statement can be true in some arrangements but not in all arrangements."
      ],

      answer: "Only Sometimes True."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Another Reasoning Question",
      question: "Statement: 'If a person is the tallest in the group, then their number is 0.' Is this always true?",

      steps: [
        "If a person is the tallest, nobody in the entire group is taller than them.",
        "Therefore, nobody standing in front of them can be taller.",
        "So the number of taller people in front must be 0.",
        "This is true regardless of where the tallest person stands."
      ],

      answer: "Always True."
    },

    {
      type: "concept",
      title: "The Main Mathematical Idea",
      text: "This activity shows how numbers can encode information. Instead of being told the complete arrangement directly, we can use the numbers and the rule to reason backwards and understand the arrangement."
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. According to the rule, what number must the first person always call out?",
        "2. What does a person calling out 0 tell us?",
        "3. Can a person who calls out 0 have a taller person behind them?",
        "4. What is the largest possible number in a group of 6 people?",
        "5. In a group of 10 people, what is the maximum number that can be called out?",
        "6. Is the statement 'The tallest person always says 0' Always True, Sometimes True or Never True?",
        "7. Explain why the largest possible number in a group of 8 people is 7."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Do not look at the numbers as ordinary counting numbers only. First identify the rule that gives meaning to each number. Then use that rule to reason about the arrangement."
    }

  ]
},

{
  title: "Picking Parity",

  blocks: [

    {
      type: "concept",
      title: "What Is Parity?",
      text: "Parity tells us whether a number is even or odd. Every whole number is either even or odd. Instead of finding the exact value of a complicated calculation, we can sometimes determine whether its result will be even or odd by studying the parity of the numbers involved."
    },

    {
      type: "concept",
      title: "Even Numbers",
      text: "An even number can be arranged completely into pairs with nothing left over. Examples are 2, 4, 6, 8, 10 and 12. Every even number is divisible by 2."
    },

    {
      type: "html",
      title: "Visualising an Even Number",
      content: `
        <div style="
          padding:20px;
          border-radius:18px;
          background:#f8fafc;
          text-align:center;
          border:1px solid #e2e8f0;
          overflow-x:auto;
        ">
          <div style="
            display:grid;
            grid-template-columns:repeat(5,28px);
            gap:10px;
            justify-content:center;
            margin:15px auto;
          ">
            <span>●</span><span>●</span>
            <span>●</span><span>●</span>
            <span>●</span><span>●</span>
            <span>●</span><span>●</span>
            <span>●</span><span>●</span>
          </div>

          <b>10 objects = 5 complete pairs</b>

          <p>
            10 is even because nothing is left after making pairs.
          </p>
        </div>
      `
    },

    {
      type: "definition",
      title: "Even Number",
      text: "A whole number is even if it can be divided into pairs with no object left over. Equivalently, an even number is divisible by 2."
    },

    {
      type: "concept",
      title: "Odd Numbers",
      text: "An odd number cannot be completely arranged into pairs. After making as many pairs as possible, exactly one object is left over. Examples are 1, 3, 5, 7, 9 and 11."
    },

    {
      type: "html",
      title: "Visualising an Odd Number",
      content: `
        <div style="
          padding:20px;
          border-radius:18px;
          background:#f8fafc;
          text-align:center;
          border:1px solid #e2e8f0;
          overflow-x:auto;
        ">
          <div style="
            display:grid;
            grid-template-columns:repeat(5,28px);
            gap:10px;
            justify-content:center;
            margin:15px auto;
          ">
            <span>●</span><span>●</span>
            <span>●</span><span>●</span>
            <span>●</span><span>●</span>
            <span>●</span><span>●</span>
            <span>●</span>
          </div>

          <b>9 objects = 4 pairs + 1 left over</b>

          <p>
            9 is odd because one object remains unpaired.
          </p>
        </div>
      `
    },

    {
      type: "definition",
      title: "Odd Number",
      text: "A whole number is odd if, after making pairs, exactly one object remains. An odd number is not divisible by 2."
    },

    {
      type: "concept",
      title: "The Last Digit Test",
      text: "For whole numbers written in the decimal system, the last digit tells us whether the number is even or odd. If the last digit is 0, 2, 4, 6 or 8, the number is even. If the last digit is 1, 3, 5, 7 or 9, the number is odd."
    },

    {
      type: "numberTable",
      title: "Recognising Parity",
      rows: [
        ["Last Digit", "Parity", "Examples"],
        ["0", "Even", "10, 20, 100"],
        ["2", "Even", "12, 42, 102"],
        ["4", "Even", "14, 54, 204"],
        ["6", "Even", "16, 76, 306"],
        ["8", "Even", "18, 98, 408"],
        ["1, 3, 5, 7, 9", "Odd", "21, 35, 47, 59"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Identify Parity",
      question: "Determine whether 7, 24, 135 and 408 are odd or even.",

      steps: [
        "7 ends in 7, so it is odd.",
        "24 ends in 4, so it is even.",
        "135 ends in 5, so it is odd.",
        "408 ends in 8, so it is even."
      ],

      answer: "7 = odd, 24 = even, 135 = odd, 408 = even."
    },

    {
      type: "concept",
      title: "Pairing Helps Us Understand Sums",
      text: "We can understand the parity of a sum by thinking about pairs. Two even numbers together give an even result, two odd numbers together also give an even result, while an even number and an odd number give an odd result."
    },

    {
      type: "numberTable",
      title: "Parity of Addition",
      rows: [
        ["First Number", "Second Number", "Result"],
        ["Even", "Even", "Even"],
        ["Odd", "Odd", "Even"],
        ["Even", "Odd", "Odd"],
        ["Odd", "Even", "Odd"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Even + Even",
      question: "What is the parity of the sum of two even numbers?",

      steps: [
        "Take two even numbers, for example 6 and 8.",
        "Add them: 6 + 8 = 14.",
        "14 is even.",
        "This behaviour is always true for two even numbers.",
        "Therefore, even + even = even."
      ],

      answer: "Even"
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Odd + Odd",
      question: "What is the parity of the sum of two odd numbers?",

      steps: [
        "Take two odd numbers, for example 5 and 7.",
        "Add them: 5 + 7 = 12.",
        "12 is even.",
        "Therefore, odd + odd = even."
      ],

      answer: "Even"
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Even + Odd",
      question: "What is the parity of the sum of an even number and an odd number?",

      steps: [
        "Take an even number 8 and an odd number 5.",
        "Add them: 8 + 5 = 13.",
        "13 is odd.",
        "Therefore, even + odd = odd."
      ],

      answer: "Odd"
    },

    {
      type: "concept",
      title: "Why Odd + Odd Becomes Even",
      text: "Think of each odd number as pairs plus one extra object. When two odd numbers are added, their two leftover objects form one additional pair. Therefore, no object is left over and the result is even."
    },

    {
      type: "html",
      title: "Odd + Odd — Pairing Idea",
      content: `
        <div style="
          padding:20px;
          border-radius:18px;
          background:#f8fafc;
          border:1px solid #e2e8f0;
          text-align:center;
        ">
          <div style="font-size:20px;font-weight:700;">
            5 = 2 pairs + 1
          </div>

          <div style="
            margin:12px;
            font-size:26px;
            letter-spacing:7px;
          ">
            ●● ●● ●
          </div>

          <div style="font-size:20px;font-weight:700;">
            3 = 1 pair + 1
          </div>

          <div style="
            margin:12px;
            font-size:26px;
            letter-spacing:7px;
          ">
            ●● ●
          </div>

          <div style="
            margin-top:15px;
            font-size:20px;
            font-weight:700;
          ">
            5 + 3 = 8
          </div>

          <p>
            The two leftover objects make one pair.
            Therefore the final result is even.
          </p>
        </div>
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Several Odd Numbers",
      question: "What is the parity of the sum of five odd numbers?",

      steps: [
        "Pair the five odd numbers into two pairs and one remaining odd number.",
        "Odd + odd = even.",
        "So the first two odd numbers give an even number.",
        "The next two odd numbers also give an even number.",
        "Even + even = even.",
        "Now add the remaining odd number.",
        "Even + odd = odd.",
        "Therefore, the sum of five odd numbers is odd."
      ],

      answer: "Odd"
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — A Quick Reasoning Problem",
      question: "Can five odd numbers add up to 30?",

      steps: [
        "Five odd numbers have an odd sum.",
        "30 is an even number.",
        "An odd number cannot equal an even number.",
        "Therefore, five odd numbers cannot add up to 30."
      ],

      answer: "No, it is impossible."
    },

    {
      type: "concept",
      title: "Consecutive Numbers",
      text: "Consecutive whole numbers follow one another, such as 6 and 7, or 20 and 21. Since parity alternates between even and odd, any two consecutive whole numbers consist of one even number and one odd number."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Consecutive Numbers",
      question: "What can you say about the sum of two consecutive whole numbers?",

      steps: [
        "Two consecutive numbers contain one even number and one odd number.",
        "For example, 12 and 13.",
        "12 + 13 = 25.",
        "Even + odd = odd.",
        "Therefore, the sum of any two consecutive whole numbers is odd."
      ],

      answer: "Always odd."
    },

    {
      type: "concept",
      title: "Parity of Products",
      text: "Parity also helps us predict whether a product will be even or odd. If at least one factor is even, the product is even. A product is odd only when every factor is odd."
    },

    {
      type: "numberTable",
      title: "Parity of Multiplication",
      rows: [
        ["First Factor", "Second Factor", "Product"],
        ["Even", "Even", "Even"],
        ["Odd", "Odd", "Odd"],
        ["Even", "Odd", "Even"],
        ["Odd", "Even", "Even"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Product Parity",
      question: "Find the parity of 7 × 9.",

      steps: [
        "7 is odd.",
        "9 is odd.",
        "Odd × odd = odd.",
        "Indeed, 7 × 9 = 63.",
        "63 is odd."
      ],

      answer: "Odd"
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — One Even Factor",
      question: "Find the parity of 12 × 35 × 17.",

      steps: [
        "12 is even.",
        "35 and 17 are odd.",
        "A product containing an even factor is even.",
        "Therefore, 12 × 35 × 17 is even.",
        "There is no need to calculate the full product."
      ],

      answer: "Even"
    },

    {
      type: "concept",
      title: "The Power of Parity",
      text: "Parity allows us to answer many questions without calculating the exact value. We only need to track whether each number is odd or even. This makes large-number reasoning much faster."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Large Numbers Without Calculating",
      question: "Is 2486 × 1357 × 9013 even or odd?",

      steps: [
        "2486 ends in 6, so it is even.",
        "1357 ends in 7, so it is odd.",
        "9013 ends in 3, so it is odd.",
        "The product contains an even factor.",
        "Therefore, the entire product must be even.",
        "We do not need to calculate the huge product."
      ],

      answer: "Even"
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Is 672 even or odd?",
        "2. Is 935 odd or even?",
        "3. What is the parity of even + even?",
        "4. What is the parity of odd + odd?",
        "5. What is the parity of even + odd?",
        "6. What is the parity of 5 odd numbers added together?",
        "7. Can four odd numbers have an odd sum?",
        "8. What is the parity of 24 × 35 × 17?",
        "9. Without calculating, determine whether 1002 × 3457 is even or odd.",
        "10. Explain why the sum of two consecutive whole numbers is always odd."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "When a question asks only whether an answer is odd or even, do not calculate unnecessarily. Check the parity of the numbers first and use the addition or multiplication rules."
    }

  ]
},

{
  title: "Parity in Addition and Multiplication",

  blocks: [

    {
      type: "concept",
      title: "Using Parity Without Finding the Exact Number",
      text: "Parity gives us a quick way to decide whether a result is even or odd. In many problems, calculating the complete answer is unnecessary. We can simply follow whether each number is even or odd."
    },

    {
      type: "concept",
      title: "Addition of Several Numbers",
      text: "When several numbers are added, we can determine the parity of the total by counting how many odd numbers are present. Every pair of odd numbers contributes an even amount. Therefore, the final sum is odd exactly when the number of odd addends is odd."
    },

    {
      type: "numberTable",
      title: "Parity of a Sum",
      rows: [
        ["Number of Odd Addends", "Parity of the Sum"],
        ["0", "Even"],
        ["1", "Odd"],
        ["2", "Even"],
        ["3", "Odd"],
        ["4", "Even"],
        ["5", "Odd"],
        ["6", "Even"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Counting Odd Numbers",
      question: "Without adding, determine whether 18 + 25 + 42 + 17 + 30 is even or odd.",

      steps: [
        "18 is even.",
        "25 is odd.",
        "42 is even.",
        "17 is odd.",
        "30 is even.",
        "There are 2 odd numbers: 25 and 17.",
        "An even number of odd addends gives an even sum.",
        "Therefore, the sum is even."
      ],

      answer: "Even"
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Three Odd Numbers",
      question: "Without calculating the exact value, determine the parity of 15 + 27 + 41.",

      steps: [
        "15 is odd.",
        "27 is odd.",
        "41 is odd.",
        "There are 3 odd numbers.",
        "Three is odd.",
        "Therefore, their sum is odd."
      ],

      answer: "Odd"
    },

    {
      type: "concept",
      title: "Pairing Odd Numbers",
      text: "A useful way to understand the rule is to pair odd numbers. Every pair of odd numbers has an even sum. If one odd number remains unpaired, the final sum is odd."
    },

    {
      type: "html",
      title: "Pairing Idea",
      content: `
        <div style="
          padding:20px;
          border-radius:18px;
          background:#f8fafc;
          border:1px solid #e2e8f0;
          text-align:center;
        ">

          <div style="font-size:18px;font-weight:700;">
            5 odd numbers
          </div>

          <div style="
            margin:15px 0;
            font-size:25px;
            letter-spacing:5px;
          ">
            🟣🟣 &nbsp; 🟣🟣 &nbsp; 🟣
          </div>

          <p>
            Two pairs are formed and one odd number remains.
          </p>

          <div style="
            font-size:20px;
            font-weight:700;
            margin-top:12px;
          ">
            2 pairs + 1 odd → Odd
          </div>

        </div>
      `
    },

    {
      type: "concept",
      title: "Subtraction and Parity",
      text: "The same parity reasoning can be applied to subtraction. Even − even is even, odd − odd is even, while even − odd and odd − even are odd."
    },

    {
      type: "numberTable",
      title: "Parity of Subtraction",
      rows: [
        ["First Number", "Second Number", "Result"],
        ["Even", "Even", "Even"],
        ["Odd", "Odd", "Even"],
        ["Even", "Odd", "Odd"],
        ["Odd", "Even", "Odd"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Subtraction",
      question: "Determine the parity of 84 − 37.",

      steps: [
        "84 is even.",
        "37 is odd.",
        "Even − odd gives an odd result.",
        "Indeed, 84 − 37 = 47.",
        "47 is odd."
      ],

      answer: "Odd"
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Odd Minus Odd",
      question: "Determine the parity of 95 − 27.",

      steps: [
        "95 is odd.",
        "27 is odd.",
        "Odd − odd gives an even result.",
        "95 − 27 = 68.",
        "68 is even."
      ],

      answer: "Even"
    },

    {
      type: "concept",
      title: "Multiplication of Several Numbers",
      text: "For multiplication, one simple rule is especially powerful: if even one factor is even, the whole product is even. The product is odd only when every factor is odd."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — A Large Product",
      question: "Is 12345 × 67891 × 24680 odd or even?",

      steps: [
        "12345 is odd.",
        "67891 is odd.",
        "24680 is even.",
        "The product contains an even factor.",
        "Therefore, the entire product is even.",
        "There is no need to calculate the product."
      ],

      answer: "Even"
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Product of Odd Numbers",
      question: "Determine the parity of 13 × 25 × 31.",

      steps: [
        "13 is odd.",
        "25 is odd.",
        "31 is odd.",
        "All the factors are odd.",
        "Odd × odd × odd is odd.",
        "Therefore, the product is odd."
      ],

      answer: "Odd"
    },

    {
      type: "concept",
      title: "Powers and Parity",
      text: "If an even number is multiplied by itself any positive number of times, the result is even. Similarly, an odd number multiplied by itself any number of times remains odd."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Powers",
      question: "Is 17⁵ even or odd?",

      steps: [
        "17 is odd.",
        "17⁵ means 17 is multiplied by itself five times.",
        "Every factor is odd.",
        "A product of odd numbers is odd.",
        "Therefore, 17⁵ is odd."
      ],

      answer: "Odd"
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Even Power",
      question: "Is 24¹⁰ even or odd?",

      steps: [
        "24 is even.",
        "24¹⁰ contains 24 as a factor.",
        "Since 24 is even, the entire product is even.",
        "Therefore, 24¹⁰ is even."
      ],

      answer: "Even"
    },

    {
      type: "concept",
      title: "Parity and Algebraic Expressions",
      text: "Parity can also be studied using algebraic forms. Every even integer can be represented as 2n, while every odd integer can be represented as 2n + 1, where n is an integer."
    },

    {
      type: "formula",
      title: "Algebraic Forms of Even and Odd Numbers",
      text: "Even number = 2n\nOdd number = 2n + 1"
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Why 2n Is Even",
      question: "Explain why 2n represents an even number.",

      steps: [
        "2n means 2 × n.",
        "Therefore, 2n is divisible by 2.",
        "Every integer divisible by 2 is even.",
        "Hence, 2n represents an even number."
      ],

      answer: "2n is always even."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Why 2n + 1 Is Odd",
      question: "Explain why 2n + 1 represents an odd number.",

      steps: [
        "2n is even.",
        "Adding 1 to an even number gives an odd number.",
        "Therefore, 2n + 1 is always odd."
      ],

      answer: "2n + 1 is always odd."
    },

    {
      type: "concept",
      title: "Consecutive Even and Odd Numbers",
      text: "Consecutive whole numbers alternate between even and odd. Therefore, consecutive even numbers differ by 2, and consecutive odd numbers also differ by 2."
    },

    {
      type: "workedExample",
      title: "Solved Example 11 — Consecutive Even Numbers",
      question: "Write the next three even numbers after 18.",

      steps: [
        "Even numbers increase by 2.",
        "18 + 2 = 20.",
        "20 + 2 = 22.",
        "22 + 2 = 24.",
        "Therefore, the next three even numbers are 20, 22 and 24."
      ],

      answer: "20, 22, 24"
    },

    {
      type: "workedExample",
      title: "Solved Example 12 — Consecutive Odd Numbers",
      question: "Write the next three odd numbers after 21.",

      steps: [
        "Odd numbers also increase by 2.",
        "21 + 2 = 23.",
        "23 + 2 = 25.",
        "25 + 2 = 27.",
        "Therefore, the next three odd numbers are 23, 25 and 27."
      ],

      answer: "23, 25, 27"
    },

    {
      type: "concept",
      title: "A Useful Shortcut",
      text: "If a problem asks only for even or odd, focus on parity instead of the complete calculation. This shortcut is especially useful when the numbers are very large."
    },

    {
      type: "workedExample",
      title: "Solved Example 13 — No Large Calculation Needed",
      question: "Is 987654321 + 246813579 + 1000000002 even or odd?",

      steps: [
        "987654321 is odd.",
        "246813579 is odd.",
        "1000000002 is even.",
        "There are two odd addends.",
        "An even number of odd addends gives an even sum.",
        "Therefore, the total is even."
      ],

      answer: "Even"
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Without adding, determine the parity of 21 + 34 + 47.",
        "2. Determine the parity of 72 − 19.",
        "3. Is 15 × 27 × 39 odd or even?",
        "4. Is 18 × 25 × 31 even or odd?",
        "5. Is 31⁷ odd or even?",
        "6. Is 40⁶ even or odd?",
        "7. Write the algebraic form of an even number.",
        "8. Write the algebraic form of an odd number.",
        "9. Write the next four even numbers after 26.",
        "10. Explain why an even factor makes the entire product even."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For parity questions, look for the fastest route. Count odd addends for sums, compare parity for subtraction, and check whether any factor is even for products. Avoid unnecessary large calculations."
    }

  ]
},

{
  title: "Parity Puzzles and Mathematical Reasoning",

  blocks: [

    {
      type: "concept",
      title: "Using Parity to Solve Puzzles",
      text: "Parity is useful not only for classifying numbers as even or odd, but also for solving mathematical puzzles. Instead of calculating every number, we can track how the parity changes after each operation."
    },

    {
      type: "concept",
      title: "Parity Does Not Depend on Size",
      text: "A very large number and a very small number can have the same parity. For example, 8 and 1,000,008 are both even, while 7 and 9,999,999 are both odd. In parity problems, the exact size of a number is often less important than whether it is even or odd."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — A Large Sum",
      question: "Without calculating the sum, decide whether 123456789 + 987654321 + 24681012 is even or odd.",

      steps: [
        "123456789 is odd.",
        "987654321 is odd.",
        "24681012 is even.",
        "There are two odd numbers in the sum.",
        "Two odd numbers together give an even result.",
        "Adding another even number keeps the result even."
      ],

      answer: "Even"
    },

    {
      type: "concept",
      title: "Adding 1 Changes Parity",
      text: "Adding 1 to an even number produces an odd number. Adding 1 to an odd number produces an even number. Therefore, repeatedly adding 1 makes the parity alternate."
    },

    {
      type: "html",
      title: "Parity Alternates",
      content: `
        <div style="
          padding:20px;
          border-radius:18px;
          background:#f8fafc;
          border:1px solid #e2e8f0;
          text-align:center;
          overflow-x:auto;
        ">
          <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            gap:10px;
            min-width:400px;
            font-size:18px;
            font-weight:700;
          ">
            <span>8</span>
            <span>→</span>
            <span>9</span>
            <span>→</span>
            <span>10</span>
            <span>→</span>
            <span>11</span>
            <span>→</span>
            <span>12</span>
          </div>

          <div style="
            margin-top:15px;
            font-size:16px;
          ">
            Even → Odd → Even → Odd → Even
          </div>
        </div>
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Repeated Addition",
      question: "Start with an even number. If 1 is added five times, will the final number be even or odd?",

      steps: [
        "Adding 1 once changes even to odd.",
        "Adding 1 twice changes odd back to even.",
        "Therefore, every addition of 1 changes the parity.",
        "Five is an odd number of changes.",
        "So the final parity is opposite to the starting parity.",
        "The starting number was even.",
        "Therefore, the final number is odd."
      ],

      answer: "Odd"
    },

    {
      type: "concept",
      title: "Subtracting 1 Also Changes Parity",
      text: "Just like addition, subtracting 1 changes the parity of a whole number. Even − 1 is odd, while odd − 1 is even."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Repeated Subtraction",
      question: "Start with an odd number. Subtract 1 four times. What will be the final parity?",

      steps: [
        "Subtracting 1 changes parity each time.",
        "After the first subtraction: odd becomes even.",
        "After the second: even becomes odd.",
        "After the third: odd becomes even.",
        "After the fourth: even becomes odd.",
        "Therefore, the final number is odd."
      ],

      answer: "Odd"
    },

    {
      type: "concept",
      title: "Parity of a Difference",
      text: "For subtraction, the same four parity combinations apply as for addition. Even minus even is even, odd minus odd is even, even minus odd is odd, and odd minus even is odd."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Difference of Two Numbers",
      question: "Two numbers have the same parity. What can you say about their difference?",

      steps: [
        "There are two possibilities.",
        "Even − even = even.",
        "Odd − odd = even.",
        "In both cases, the difference is even.",
        "Therefore, the difference of two numbers having the same parity is always even."
      ],

      answer: "Always even."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Different Parity",
      question: "What can you say about the difference of an even number and an odd number?",

      steps: [
        "There are two possibilities.",
        "Even − odd = odd.",
        "Odd − even = odd.",
        "Therefore, numbers of different parity always have an odd difference."
      ],

      answer: "Always odd."
    },

    {
      type: "concept",
      title: "Parity and Consecutive Numbers",
      text: "Consecutive whole numbers always have opposite parity. If one is even, the next is odd. If one is odd, the next is even."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Consecutive Numbers",
      question: "Can two consecutive whole numbers both be even?",

      steps: [
        "Consecutive numbers differ by 1.",
        "Adding or subtracting 1 changes parity.",
        "Therefore, consecutive numbers must have opposite parity.",
        "So two consecutive whole numbers cannot both be even."
      ],

      answer: "No."
    },

    {
      type: "concept",
      title: "Product Reasoning",
      text: "For a product, an even factor makes the entire product even. This allows us to solve questions involving very large products without actually multiplying the numbers."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Finding Parity of a Product",
      question: "Without calculating, determine the parity of 101 × 203 × 305 × 408.",

      steps: [
        "101 is odd.",
        "203 is odd.",
        "305 is odd.",
        "408 is even.",
        "There is an even factor in the product.",
        "Therefore, the complete product is even."
      ],

      answer: "Even"
    },

    {
      type: "concept",
      title: "When Is a Product Odd?",
      text: "A product is odd only when every factor is odd. If even one factor is even, the product becomes even."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Proving a Product Is Odd",
      question: "If a, b and c are all odd numbers, what is the parity of abc?",

      steps: [
        "a is odd.",
        "b is odd.",
        "c is odd.",
        "The product of two odd numbers is odd.",
        "Multiplying that odd result by another odd number gives an odd result.",
        "Therefore, abc is odd."
      ],

      answer: "abc is odd."
    },

    {
      type: "concept",
      title: "Even and Odd Algebraic Forms",
      text: "Algebra provides a general way to describe even and odd numbers. Every even integer can be written as 2n, while every odd integer can be written as 2n + 1, where n is an integer."
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Sum of Two Odd Numbers",
      question: "Use algebra to explain why the sum of two odd numbers is even.",

      steps: [
        "Let the first odd number be 2m + 1.",
        "Let the second odd number be 2n + 1.",
        "Add them: (2m + 1) + (2n + 1).",
        "Remove the brackets: 2m + 1 + 2n + 1.",
        "Combine: 2m + 2n + 2.",
        "Factor out 2: 2(m + n + 1).",
        "The result is a multiple of 2.",
        "Therefore, the sum is even."
      ],

      answer: "The sum of two odd numbers is always even."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Sum of Two Even Numbers",
      question: "Use algebra to explain why the sum of two even numbers is even.",

      steps: [
        "Let the first even number be 2m.",
        "Let the second even number be 2n.",
        "Add them: 2m + 2n.",
        "Factor out 2: 2(m + n).",
        "The result is divisible by 2.",
        "Therefore, the sum is even."
      ],

      answer: "The sum of two even numbers is always even."
    },

    {
      type: "concept",
      title: "A Useful Parity Test",
      text: "If a question asks whether an expression is even or odd, substitute the appropriate algebraic form or simply track parity. This is often much faster than calculating the expression itself."
    },

    {
      type: "workedExample",
      title: "Solved Example 11 — Algebraic Expression",
      question: "If n is an integer, determine the parity of 2n + 6.",

      steps: [
        "2n is even because it is divisible by 2.",
        "6 is also even.",
        "Even + even = even.",
        "Therefore, 2n + 6 is always even."
      ],

      answer: "Always even."
    },

    {
      type: "workedExample",
      title: "Solved Example 12 — Another Expression",
      question: "If n is an integer, determine the parity of 2n + 7.",

      steps: [
        "2n is even.",
        "7 is odd.",
        "Even + odd = odd.",
        "Therefore, 2n + 7 is always odd."
      ],

      answer: "Always odd."
    },

    {
      type: "concept",
      title: "Always, Sometimes or Never",
      text: "Parity allows us to classify statements logically. Some statements are always true, some are true only for particular numbers, and some are impossible."
    },

    {
      type: "workedExample",
      title: "Solved Example 13 — Logical Classification",
      question: "Is the statement 'The sum of two odd numbers is odd' Always True, Sometimes True or Never True?",

      steps: [
        "Odd + odd always gives even.",
        "Therefore, the sum cannot be odd.",
        "The statement is impossible."
      ],

      answer: "Never True"
    },

    {
      type: "workedExample",
      title: "Solved Example 14 — Another Classification",
      question: "Is the statement 'The product of two numbers is even' Always True, Sometimes True or Never True?",

      steps: [
        "If both numbers are odd, their product is odd.",
        "If at least one number is even, their product is even.",
        "Therefore, the product is even in some cases but not all cases."
      ],

      answer: "Sometimes True"
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. What happens to parity when 1 is added to a whole number?",
        "2. What is the parity of the difference between two numbers of the same parity?",
        "3. What is the parity of the difference between an odd and an even number?",
        "4. Can two consecutive numbers have the same parity?",
        "5. Without calculating, determine the parity of 17 × 25 × 31 × 44.",
        "6. If a, b and c are odd, determine the parity of abc.",
        "7. Determine the parity of 2n + 8.",
        "8. Determine the parity of 2n + 9.",
        "9. Is 'odd × even = odd' Always True, Sometimes True or Never True?",
        "10. Explain why two numbers with the same parity have an even difference."
      ]
    },

    {
      type: "warning",
      title: "Common Mistakes",
      text: "Do not confuse the rules for addition and multiplication. For addition, odd + odd is even. For multiplication, odd × odd is odd. Also remember that one even factor is enough to make a product even."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "When solving a parity puzzle, avoid full calculations whenever possible. First classify each number as even or odd, then apply the appropriate addition, subtraction or multiplication rule."
    }

  ]
},

{
  title: "Parity Puzzles and Number Games",

  blocks: [

    {
      type: "concept",
      title: "Thinking With Parity",
      text: "Parity can be used to solve puzzles where the exact numbers are difficult or unnecessary to calculate. The main strategy is to replace each number by its parity — even or odd — and then follow what happens after each operation."
    },

    {
      type: "concept",
      title: "Parity as a Mathematical Tool",
      text: "When a problem involves many additions, subtractions or multiplications, we can often ignore the actual values and concentrate only on whether each number is even or odd. This can prove that a result is possible or impossible."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Can the Sum Be Odd?",
      question: "Can four even numbers and three odd numbers have an odd sum?",

      steps: [
        "Each even number contributes even parity.",
        "Three odd numbers are present.",
        "An odd number of odd addends gives an odd sum.",
        "Adding any number of even terms does not change the parity.",
        "Therefore, the total sum is odd."
      ],

      answer: "Yes. The sum must be odd."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Can the Sum Be Even?",
      question: "Can five odd numbers have an even sum?",

      steps: [
        "There are five odd numbers.",
        "Five is an odd number of odd addends.",
        "An odd number of odd addends gives an odd sum.",
        "Therefore, their sum cannot be even."
      ],

      answer: "No. The sum must be odd."
    },

    {
      type: "concept",
      title: "Parity of a Number After Repeated Operations",
      text: "If we repeatedly add or subtract 1, the parity changes every time. If the number of such operations is even, the starting parity is restored. If the number of operations is odd, the final parity is opposite to the starting parity."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Repeated Changes",
      question: "A number is initially even. It is changed by adding 1 exactly 12 times. Is the final number even or odd?",

      steps: [
        "Every addition of 1 changes the parity.",
        "There are 12 changes.",
        "12 is even, so the parity changes an even number of times.",
        "After two changes, the original parity returns.",
        "Therefore, after 12 changes, the number is still even."
      ],

      answer: "Even"
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Odd Number of Changes",
      question: "A number is initially odd. It is changed by adding 1 exactly 15 times. What is its final parity?",

      steps: [
        "Every addition of 1 changes the parity.",
        "There are 15 changes.",
        "15 is odd.",
        "An odd number of changes reverses the starting parity.",
        "The starting number was odd.",
        "Therefore, the final number is even."
      ],

      answer: "Even"
    },

    {
      type: "concept",
      title: "Parity and Number Patterns",
      text: "The parity of consecutive numbers follows a repeating pattern: even, odd, even, odd, and so on. This pattern can help us answer questions about large positions in a sequence."
    },

    {
      type: "html",
      title: "Even-Odd Pattern",
      content: `
        <div style="
          padding:20px;
          border-radius:18px;
          background:#f8fafc;
          border:1px solid #e2e8f0;
          text-align:center;
          overflow-x:auto;
        ">

          <div style="
            display:flex;
            justify-content:center;
            gap:12px;
            min-width:420px;
            font-size:18px;
            font-weight:700;
          ">
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>

          <div style="
            display:flex;
            justify-content:center;
            gap:22px;
            min-width:420px;
            margin-top:12px;
            font-size:15px;
          ">
            <span>E</span>
            <span>O</span>
            <span>E</span>
            <span>O</span>
            <span>E</span>
            <span>O</span>
            <span>E</span>
            <span>O</span>
          </div>

        </div>
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Position in a Pattern",
      question: "The sequence starts 2, 3, 4, 5, 6, ... Is the 100th number even or odd?",

      steps: [
        "The sequence consists of consecutive whole numbers.",
        "The parity alternates between even and odd.",
        "The first number, 2, is even.",
        "Therefore, odd positions contain even numbers and even positions contain odd numbers.",
        "100 is an even position.",
        "Therefore, the 100th number is odd."
      ],

      answer: "Odd"
    },

    {
      type: "concept",
      title: "Finding the Parity of an Expression",
      text: "An expression can often be classified without calculating its exact value. Look at each part and use the parity rules to determine the final result."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Expression",
      question: "For any integer n, determine whether n + (n + 1) is even or odd.",

      steps: [
        "n and n + 1 are consecutive numbers.",
        "Consecutive numbers have opposite parity.",
        "Therefore, one is even and the other is odd.",
        "Even + odd = odd.",
        "Hence, n + (n + 1) is always odd."
      ],

      answer: "Always odd"
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Three Consecutive Numbers",
      question: "What is the parity of the sum of three consecutive whole numbers?",

      steps: [
        "Among three consecutive numbers, either two are odd and one is even, or two are even and one is odd.",
        "If there are two odd numbers, their sum is even, and adding the remaining even number keeps it even.",
        "If there is one odd number and two even numbers, the two even numbers give an even sum and adding the odd number makes the result odd.",
        "Therefore, the parity depends on which three consecutive numbers are chosen."
      ],

      answer: "It can be even or odd."
    },

    {
      type: "concept",
      title: "Always, Sometimes or Never",
      text: "A powerful way to solve parity puzzles is to classify a statement as Always True, Sometimes True or Never True. Test the statement using parity rather than relying only on examples."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Classification",
      question: "The product of two consecutive whole numbers is always even. Is this statement true?",

      steps: [
        "Two consecutive whole numbers have opposite parity.",
        "Therefore, one of them must be even.",
        "A product containing an even factor is even.",
        "Therefore, the product is always even."
      ],

      answer: "Always True"
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Another Classification",
      question: "The sum of two consecutive whole numbers is always even. Is this statement true?",

      steps: [
        "Two consecutive numbers have opposite parity.",
        "Therefore, one is even and the other is odd.",
        "Even + odd = odd.",
        "Therefore, their sum is always odd.",
        "So the given statement is false."
      ],

      answer: "Never True"
    },

    {
      type: "concept",
      title: "A Parity Contradiction",
      text: "Sometimes a problem asks us to prove that a particular situation is impossible. If the required result would have one parity but the mathematical rules force it to have the opposite parity, we have a contradiction and the situation is impossible."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Proving Impossibility",
      question: "Can three odd numbers have a sum of 20?",

      steps: [
        "Three odd numbers are being added.",
        "An odd number of odd addends gives an odd sum.",
        "Therefore, the sum must be odd.",
        "But 20 is even.",
        "An odd number cannot equal an even number.",
        "Therefore, such three odd numbers cannot have a sum of 20."
      ],

      answer: "No. It is impossible."
    },

    {
      type: "concept",
      title: "Parity in a Game",
      text: "Some mathematical games involve repeatedly changing a number. If every move changes the parity in a predictable way, we can sometimes determine the parity after many moves without listing every move."
    },

    {
      type: "workedExample",
      title: "Solved Example 11 — A Simple Game",
      question: "A game starts with the number 10. Each move adds 1. After 27 moves, will the number be even or odd?",

      steps: [
        "10 is even.",
        "Each move adds 1, so each move changes the parity.",
        "There are 27 moves.",
        "27 is odd.",
        "An odd number of parity changes reverses even to odd.",
        "Therefore, the final number is odd."
      ],

      answer: "Odd"
    },

    {
      type: "concept",
      title: "Parity Can Save Calculation",
      text: "The most important skill in parity problems is recognising when calculation is unnecessary. If the question asks only for odd or even, calculate only what is needed to determine parity."
    },

    {
      type: "workedExample",
      title: "Solved Example 12 — Huge Numbers",
      question: "Determine whether 987654321 × 123456789 × 2468024680 is even or odd without multiplying.",

      steps: [
        "987654321 is odd.",
        "123456789 is odd.",
        "2468024680 ends in 0, so it is even.",
        "The product contains an even factor.",
        "Therefore, the complete product is even."
      ],

      answer: "Even"
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Can five odd numbers have an even sum? Explain.",
        "2. An even number is increased by 21. What is the final parity?",
        "3. An odd number is decreased by 18. What is the final parity?",
        "4. Is the product of two consecutive whole numbers always even?",
        "5. Is the sum of two consecutive whole numbers always odd?",
        "6. Determine the parity of n + (n + 1).",
        "7. Determine the parity of 101 × 203 × 405 × 808.",
        "8. Can three odd numbers have a sum of 40?",
        "9. A number starts as odd and 20 is added to it. Is the result odd or even?",
        "10. A number starts as even and 17 is added to it. Is the result odd or even?"
      ]
    },

    {
      type: "warning",
      title: "Common Mistakes",
      text: "Do not assume that a few examples prove a statement for every number. Use the parity rules to reason generally. Also remember that the sum and product have different parity rules."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For a parity puzzle, write E for even and O for odd. Track how each operation changes E or O. This simple method can make complicated-looking questions much easier."
    }

  ]
}
],

 importantPoints: [
  "Parity tells us whether a whole number is even or odd.",
  "Every whole number is either even or odd.",
  "An even number is divisible by 2.",
  "A number ending in 0, 2, 4, 6 or 8 is even.",
  "A number ending in 1, 3, 5, 7 or 9 is odd.",

  "Even + even = even.",
  "Odd + odd = even.",
  "Even + odd = odd.",

  "Even − even = even.",
  "Odd − odd = even.",
  "Even − odd = odd.",
  "Odd − even = odd.",

  "Odd × odd = odd.",
  "Even × odd = even.",
  "Even × even = even.",
  "If at least one factor is even, the product is even.",

  "A sum containing an odd number of odd addends is odd.",
  "A sum containing an even number of odd addends is even.",

  "Adding 1 changes the parity of a whole number.",
  "Subtracting 1 also changes the parity.",
  "Two consecutive whole numbers always have opposite parity.",
  "The difference between two numbers of the same parity is even.",
  "The difference between two numbers of different parity is odd.",

  "Every even integer can be written as 2n.",
  "Every odd integer can be written as 2n + 1.",

  "The product of two consecutive whole numbers is always even.",
  "Parity can prove that some mathematical situations are impossible.",
  "For large calculations, parity can often be determined without finding the exact answer.",
  "In parity problems, first identify whether each number is even or odd."
],

keyTerms: [
  "Parity",
  "Even Number",
  "Odd Number",
  "Consecutive Numbers",
  "Even Addend",
  "Odd Addend",
  "Parity of Sum",
  "Parity of Difference",
  "Parity of Product",
  "Remainder",
  "Multiple of 2",
  "Algebraic Form",
  "Parity Puzzle",
  "Always True",
  "Sometimes True",
  "Never True"
],

summary:
  "Number Play explores parity and shows how even and odd numbers help us reason about sums, differences, products, patterns and mathematical puzzles. By tracking parity instead of calculating large numbers directly, many problems can be solved quickly and logically."

}; 
