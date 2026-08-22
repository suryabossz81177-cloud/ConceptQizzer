window.ChapterData = {
  id: "7-mathematics-working-with-fractions",
  class: 7,
  subject: "Mathematics",
  chapterNumber: 8,

  title: "Working with Fractions",

  description:
    "Explore fractions through equivalent fractions, comparison, addition, subtraction, multiplication, division and step-by-step mathematical reasoning.",

  sections: [

  {
  title: "Understanding Fractions",

  blocks: [

    {
      type: "concept",
      title: "What Is a Fraction?",
      text: "A fraction represents a part of a whole or a part of a collection. It is written in the form a/b, where a is the numerator and b is the denominator. The denominator tells us into how many equal parts the whole is divided, while the numerator tells us how many of those equal parts are being considered."
    },

    {
      type: "diagram",
      title: "Parts of a Fraction",
      content: `
        <svg viewBox="0 0 560 300"
             width="100%"
             style="max-width:560px;height:auto;">

          <text x="245" y="55"
                font-size="34"
                font-weight="700">3</text>

          <line x1="220" y1="75"
                x2="340" y2="75"
                stroke="currentColor"
                stroke-width="4"/>

          <text x="245" y="125"
                font-size="34"
                font-weight="700">5</text>

          <line x1="205" y1="150"
                x2="355" y2="150"
                stroke="none"/>

          <text x="55" y="65"
                font-size="21"
                font-weight="700">Numerator</text>

          <line x1="155" y1="60"
                x2="220" y2="60"
                stroke="currentColor"
                stroke-width="2"/>

          <text x="55" y="125"
                font-size="18">
            Number of parts
          </text>

          <text x="365" y="125"
                font-size="21"
                font-weight="700">Denominator</text>

          <line x1="355" y1="120"
                x2="430" y2="120"
                stroke="currentColor"
                stroke-width="2"/>

          <text x="365" y="155"
                font-size="18">
            Total equal parts
          </text>

        </svg>
      `,
      caption: "In 3/5, 3 is the numerator and 5 is the denominator."
    },

    {
      type: "concept",
      title: "Equal Parts Are Important",
      text: "A fraction makes sense when the whole is divided into equal parts. For example, 3/4 means three out of four equal parts. If the parts are unequal, simply counting three pieces does not represent 3/4 of the whole."
    },

    {
      type: "diagram",
      title: "3/4 of a Whole",
      content: `
        <svg viewBox="0 0 600 230"
             width="100%"
             style="max-width:600px;height:auto;">

          <rect x="100" y="70"
                width="400"
                height="90"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="200" y1="70"
                x2="200" y2="160"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="300" y1="70"
                x2="300" y2="160"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="400" y1="70"
                x2="400" y2="160"
                stroke="currentColor"
                stroke-width="3"/>

          <text x="155" y="200"
                font-size="19">1/4</text>

          <text x="255" y="200"
                font-size="19">1/4</text>

          <text x="355" y="200"
                font-size="19">1/4</text>

          <text x="455" y="200"
                font-size="19">1/4</text>

        </svg>
      `,
      caption: "Four equal parts make one whole. Three of them represent 3/4."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Identifying Numerator and Denominator",
      question: "In the fraction 7/9, identify the numerator and denominator.",

      steps: [
        "The number above the fraction bar is the numerator.",
        "The number below the fraction bar is the denominator.",
        "In 7/9, 7 is above the fraction bar.",
        "Therefore, 7 is the numerator.",
        "9 is below the fraction bar.",
        "Therefore, 9 is the denominator."
      ],

      answer: "Numerator = 7; Denominator = 9."
    },

    {
      type: "concept",
      title: "Proper Fractions",
      text: "A proper fraction has a numerator smaller than its denominator. Its value is less than 1. Examples include 2/5, 3/8 and 7/10."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Proper Fraction",
      question: "Is 5/8 a proper fraction?",

      steps: [
        "Compare the numerator and denominator.",
        "The numerator is 5.",
        "The denominator is 8.",
        "Since 5 < 8, the numerator is smaller than the denominator.",
        "Therefore, 5/8 is a proper fraction."
      ],

      answer: "Yes, 5/8 is a proper fraction."
    },

    {
      type: "concept",
      title: "Improper Fractions",
      text: "An improper fraction has a numerator greater than or equal to its denominator. Its value is 1 or greater. Examples include 9/5, 7/7 and 13/4."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Improper Fraction",
      question: "Classify 11/6 as proper or improper.",

      steps: [
        "The numerator is 11.",
        "The denominator is 6.",
        "Since 11 > 6, the numerator is greater than the denominator.",
        "Therefore, the fraction is improper."
      ],

      answer: "11/6 is an improper fraction."
    },

    {
      type: "concept",
      title: "Mixed Numbers",
      text: "A mixed number consists of a whole number together with a proper fraction. For example, 2 3/5 means 2 wholes and 3/5 of another whole."
    },

    {
      type: "diagram",
      title: "Mixed Number 2 1/3",
      content: `
        <svg viewBox="0 0 650 230"
             width="100%"
             style="max-width:650px;height:auto;">

          <rect x="55" y="70"
                width="150"
                height="90"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <rect x="245" y="70"
                width="150"
                height="90"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <rect x="435" y="70"
                width="50"
                height="90"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="485" y1="70"
                x2="485" y2="160"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="435" y1="115"
                x2="485" y2="115"
                stroke="currentColor"
                stroke-width="3"/>

          <text x="110" y="195"
                font-size="20">1 whole</text>

          <text x="300" y="195"
                font-size="20">1 whole</text>

          <text x="505" y="120"
                font-size="20">1/3</text>

          <text x="260" y="40"
                font-size="24"
                font-weight="700">2 1/3</text>

        </svg>
      `,
      caption: "2 1/3 means two complete wholes and one-third of another whole."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Mixed Number to Improper Fraction",
      question: "Convert 2 3/5 into an improper fraction.",

      steps: [
        "Multiply the whole number by the denominator: 2 × 5 = 10.",
        "Add the numerator: 10 + 3 = 13.",
        "Keep the denominator unchanged: 5.",
        "Therefore, 2 3/5 = 13/5."
      ],

      answer: "13/5"
    },

    {
      type: "concept",
      title: "Converting an Improper Fraction to a Mixed Number",
      text: "To convert an improper fraction into a mixed number, divide the numerator by the denominator. The quotient becomes the whole-number part, the remainder becomes the numerator, and the denominator stays the same."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Improper Fraction to Mixed Number",
      question: "Convert 17/4 into a mixed number.",

      steps: [
        "Divide 17 by 4.",
        "4 goes into 17 four times.",
        "The remainder is 1.",
        "The quotient 4 becomes the whole-number part.",
        "The remainder 1 becomes the numerator.",
        "The denominator remains 4."
      ],

      answer: "17/4 = 4 1/4"
    },

    {
      type: "concept",
      title: "Equivalent Fractions",
      text: "Fractions that have the same value are called equivalent fractions. We can obtain an equivalent fraction by multiplying or dividing both the numerator and denominator by the same non-zero number."
    },

    {
      type: "formula",
      title: "Equivalent Fraction Rule",
      text: `
        a/b = (a × n)/(b × n), where n ≠ 0
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Finding an Equivalent Fraction",
      question: "Find an equivalent fraction for 3/4 with denominator 20.",

      steps: [
        "The denominator 4 must become 20.",
        "4 × 5 = 20.",
        "Multiply the numerator by the same number.",
        "3 × 5 = 15.",
        "Therefore, 3/4 = 15/20."
      ],

      answer: "15/20"
    },

    {
      type: "diagram",
      title: "Equivalent Fractions",
      content: `
        <svg viewBox="0 0 650 300"
             width="100%"
             style="max-width:650px;height:auto;">

          <text x="90" y="40"
                font-size="22"
                font-weight="700">1/2</text>

          <rect x="60" y="65"
                width="220"
                height="70"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="170" y1="65"
                x2="170" y2="135"
                stroke="currentColor"
                stroke-width="3"/>

          <text x="350" y="40"
                font-size="22"
                font-weight="700">2/4</text>

          <rect x="320" y="65"
                width="220"
                height="70"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="375" y1="65"
                x2="375" y2="135"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="430" y1="65"
                x2="430" y2="135"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="485" y1="65"
                x2="485" y2="135"
                stroke="currentColor"
                stroke-width="3"/>

          <text x="225" y="220"
                font-size="24"
                font-weight="700">1/2 = 2/4</text>

          <text x="145" y="260"
                font-size="18">
            Same value
          </text>

        </svg>
      `,
      caption: "Different-looking fractions can represent the same quantity."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Simplifying a Fraction",
      question: "Simplify 18/24 to its lowest form.",

      steps: [
        "Find a common factor of 18 and 24.",
        "Both numbers are divisible by 6.",
        "18 ÷ 6 = 3.",
        "24 ÷ 6 = 4.",
        "Therefore, 18/24 = 3/4.",
        "3 and 4 have no common factor greater than 1, so the fraction is in lowest form."
      ],

      answer: "3/4"
    },

    {
      type: "concept",
      title: "Comparing Fractions With the Same Denominator",
      text: "When two fractions have the same positive denominator, the fraction with the larger numerator is larger. This is because both fractions divide the whole into the same number of equal parts."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Same Denominator",
      question: "Which is greater: 5/9 or 7/9?",

      steps: [
        "Both fractions have denominator 9.",
        "Compare the numerators 5 and 7.",
        "Since 7 > 5, the fraction with numerator 7 is larger.",
        "Therefore, 7/9 > 5/9."
      ],

      answer: "7/9"
    },

    {
      type: "concept",
      title: "Comparing Fractions With the Same Numerator",
      text: "When two positive fractions have the same numerator, the fraction with the smaller denominator is larger. A smaller denominator means that the same numerator represents larger-sized parts."
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Same Numerator",
      question: "Which is greater: 3/5 or 3/8?",

      steps: [
        "Both fractions have numerator 3.",
        "Compare the denominators 5 and 8.",
        "A whole divided into 5 equal parts gives larger parts than a whole divided into 8 equal parts.",
        "Therefore, 3/5 is greater than 3/8."
      ],

      answer: "3/5"
    },

    {
      type: "concept",
      title: "Fractions Between 0 and 1",
      text: "A proper fraction is greater than 0 and less than 1. The closer the numerator is to the denominator, the closer the fraction is to 1."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Ordering Fractions",
      question: "Arrange 1/4, 3/4 and 2/4 in ascending order.",

      steps: [
        "All three fractions have the same denominator, 4.",
        "Compare their numerators: 1, 2 and 3.",
        "1 < 2 < 3.",
        "Therefore, 1/4 < 2/4 < 3/4."
      ],

      answer: "1/4, 2/4, 3/4"
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Identify the numerator and denominator of 11/15.",
        "2. Classify 7/12 as proper or improper.",
        "3. Convert 3 2/7 into an improper fraction.",
        "4. Convert 19/5 into a mixed number.",
        "5. Find an equivalent fraction for 2/3 with denominator 15.",
        "6. Simplify 20/30.",
        "7. Which is greater: 5/8 or 7/8?",
        "8. Which is greater: 4/7 or 4/9?",
        "9. Arrange 1/6, 5/6 and 3/6 in ascending order.",
        "10. Explain why multiplying both numerator and denominator by the same non-zero number does not change the value of a fraction."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Before operating on fractions, first identify whether the fractions have the same denominator. For comparison, look for common denominators or use equivalent fractions. Always simplify the final answer whenever possible."
    }

  ]
},

{
  title: "Adding and Subtracting Fractions",

  blocks: [

    {
      type: "concept",
      title: "Adding Fractions",
      text: "To add fractions, we need to consider their denominators. If the denominators are the same, add the numerators and keep the denominator unchanged. If the denominators are different, first convert the fractions into equivalent fractions with a common denominator."
    },

    {
      type: "formula",
      title: "Addition With the Same Denominator",
      text: `
        a/c + b/c = (a + b)/c
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Same Denominator",
      question: "Add 3/8 + 2/8.",

      steps: [
        "Both fractions have the same denominator, 8.",
        "Add the numerators: 3 + 2 = 5.",
        "Keep the denominator 8 unchanged.",
        "Therefore, 3/8 + 2/8 = 5/8."
      ],

      answer: "5/8"
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Adding Three Fractions",
      question: "Find 2/9 + 4/9 + 1/9.",

      steps: [
        "All three fractions have denominator 9.",
        "Add the numerators: 2 + 4 + 1 = 7.",
        "Keep the denominator 9.",
        "Therefore, the sum is 7/9."
      ],

      answer: "7/9"
    },

    {
      type: "concept",
      title: "Why Don't We Add Denominators?",
      text: "The denominator tells us the size of each equal part. When the parts are already the same size, we only count how many parts we have. Therefore, when adding fractions with the same denominator, the denominator remains unchanged."
    },

    {
      type: "diagram",
      title: "Understanding 1/5 + 2/5",
      content: `
        <svg viewBox="0 0 650 270"
             width="100%"
             style="max-width:650px;height:auto;">

          <text x="55" y="35"
                font-size="21"
                font-weight="700">1/5</text>

          <rect x="45" y="65"
                width="220"
                height="65"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="89" y1="65" x2="89" y2="130"
                stroke="currentColor" stroke-width="2"/>
          <line x1="133" y1="65" x2="133" y2="130"
                stroke="currentColor" stroke-width="2"/>
          <line x1="177" y1="65" x2="177" y2="130"
                stroke="currentColor" stroke-width="2"/>
          <line x1="221" y1="65" x2="221" y2="130"
                stroke="currentColor" stroke-width="2"/>

          <text x="300" y="105"
                font-size="28"
                font-weight="700">+</text>

          <text x="365" y="35"
                font-size="21"
                font-weight="700">2/5</text>

          <rect x="355" y="65"
                width="220"
                height="65"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="399" y1="65" x2="399" y2="130"
                stroke="currentColor" stroke-width="2"/>
          <line x1="443" y1="65" x2="443" y2="130"
                stroke="currentColor" stroke-width="2"/>
          <line x1="487" y1="65" x2="487" y2="130"
                stroke="currentColor" stroke-width="2"/>
          <line x1="531" y1="65" x2="531" y2="130"
                stroke="currentColor" stroke-width="2"/>

          <text x="245" y="205"
                font-size="26"
                font-weight="700">= 3/5</text>

        </svg>
      `,
      caption: "One fifth plus two fifths gives three fifths."
    },

    {
      type: "concept",
      title: "Adding Fractions With Different Denominators",
      text: "When denominators are different, the parts have different sizes. We cannot directly add the numerators. First find a common denominator and rewrite both fractions as equivalent fractions."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Different Denominators",
      question: "Add 1/2 + 1/3.",

      steps: [
        "The denominators are 2 and 3, so they are different.",
        "Find a common denominator. The least common multiple of 2 and 3 is 6.",
        "Convert 1/2 into sixths: 1/2 = 3/6.",
        "Convert 1/3 into sixths: 1/3 = 2/6.",
        "Now add: 3/6 + 2/6 = 5/6.",
        "Therefore, 1/2 + 1/3 = 5/6."
      ],

      answer: "5/6"
    },

    {
      type: "formula",
      title: "Common Denominator Method",
      text: `
        1/2 + 1/3<br>
        = 3/6 + 2/6<br>
        = 5/6
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Another Different Denominator",
      question: "Add 2/3 + 1/4.",

      steps: [
        "The denominators are 3 and 4.",
        "Their least common multiple is 12.",
        "Convert 2/3 to denominator 12: 2/3 = 8/12.",
        "Convert 1/4 to denominator 12: 1/4 = 3/12.",
        "Add the numerators: 8 + 3 = 11.",
        "Therefore, 2/3 + 1/4 = 11/12."
      ],

      answer: "11/12"
    },

    {
      type: "concept",
      title: "Subtracting Fractions",
      text: "Subtraction follows the same basic idea as addition. If the denominators are the same, subtract the numerators and keep the denominator. If the denominators are different, first convert the fractions to equivalent fractions with a common denominator."
    },

    {
      type: "formula",
      title: "Subtraction With the Same Denominator",
      text: `
        a/c − b/c = (a − b)/c
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Same Denominator Subtraction",
      question: "Subtract 3/7 − 1/7.",

      steps: [
        "Both fractions have denominator 7.",
        "Subtract the numerators: 3 − 1 = 2.",
        "Keep the denominator 7.",
        "Therefore, 3/7 − 1/7 = 2/7."
      ],

      answer: "2/7"
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Different Denominators",
      question: "Subtract 5/6 − 1/4.",

      steps: [
        "The denominators are 6 and 4.",
        "The least common multiple of 6 and 4 is 12.",
        "Convert 5/6 to twelfths: 5/6 = 10/12.",
        "Convert 1/4 to twelfths: 1/4 = 3/12.",
        "Subtract: 10/12 − 3/12 = 7/12."
      ],

      answer: "7/12"
    },

    {
      type: "concept",
      title: "Subtracting a Fraction From a Whole Number",
      text: "A whole number can be written as a fraction with denominator 1. To subtract a fraction from a whole number, it is often useful to rewrite the whole number using the denominator of the fraction."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Whole Number Minus Fraction",
      question: "Find 3 − 2/5.",

      steps: [
        "Write 3 as a fraction with denominator 5.",
        "3 = 15/5.",
        "Now subtract: 15/5 − 2/5.",
        "Subtract the numerators: 15 − 2 = 13.",
        "Keep denominator 5.",
        "Therefore, 3 − 2/5 = 13/5.",
        "As a mixed number, 13/5 = 2 3/5."
      ],

      answer: "13/5 = 2 3/5"
    },

    {
      type: "concept",
      title: "Adding Mixed Numbers",
      text: "When adding mixed numbers, add the whole-number parts and fractional parts separately. If the fractional part becomes an improper fraction, convert it into a mixed number and combine the whole-number part."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Mixed Number Addition",
      question: "Add 2 1/4 + 1 2/4.",

      steps: [
        "Add the whole parts: 2 + 1 = 3.",
        "Add the fractional parts: 1/4 + 2/4 = 3/4.",
        "Combine the results.",
        "Therefore, the answer is 3 3/4."
      ],

      answer: "3 3/4"
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Mixed Number Addition With Carry",
      question: "Add 2 3/4 + 1 3/4.",

      steps: [
        "Add the whole parts: 2 + 1 = 3.",
        "Add the fractional parts: 3/4 + 3/4 = 6/4.",
        "Convert 6/4 into a mixed number: 6/4 = 1 2/4 = 1 1/2.",
        "Add the extra whole 1 to 3.",
        "3 + 1 = 4.",
        "Therefore, the answer is 4 1/2."
      ],

      answer: "4 1/2"
    },

    {
      type: "concept",
      title: "Subtracting Mixed Numbers",
      text: "For mixed-number subtraction, subtract the fractional parts and whole-number parts carefully. If the fractional part of the first number is smaller, regroup one whole as a fraction before subtracting."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Mixed Number Subtraction",
      question: "Subtract 1 1/4 from 3 3/4.",

      steps: [
        "Write the subtraction: 3 3/4 − 1 1/4.",
        "Subtract the whole parts: 3 − 1 = 2.",
        "Subtract the fractional parts: 3/4 − 1/4 = 2/4.",
        "Simplify 2/4 to 1/2.",
        "Therefore, the answer is 2 1/2."
      ],

      answer: "2 1/2"
    },

    {
      type: "workedExample",
      title: "Solved Example 11 — Regrouping a Mixed Number",
      question: "Find 4 1/5 − 2 3/5.",

      steps: [
        "The fractional part 1/5 is smaller than 3/5.",
        "Regroup one whole from 4.",
        "4 1/5 = 3 + 5/5 + 1/5 = 3 6/5.",
        "Now subtract: 3 6/5 − 2 3/5.",
        "Subtract whole parts: 3 − 2 = 1.",
        "Subtract fractions: 6/5 − 3/5 = 3/5.",
        "Therefore, the result is 1 3/5."
      ],

      answer: "1 3/5"
    },

    {
      type: "concept",
      title: "Checking Your Answer",
      text: "After adding or subtracting fractions, check whether the answer is reasonable. For addition, the result should usually be larger than either positive fraction. For subtraction of a smaller positive fraction from a larger one, the result should be smaller than the starting fraction."
    },

    {
      type: "workedExample",
      title: "Solved Example 12 — Estimate and Check",
      question: "Is 3/4 + 1/8 = 7/8 reasonable?",

      steps: [
        "3/4 is equal to 6/8.",
        "So 3/4 + 1/8 = 6/8 + 1/8.",
        "The result is 7/8.",
        "7/8 is greater than 3/4 but less than 1.",
        "Therefore, the answer is reasonable."
      ],

      answer: "Yes, 7/8 is correct."
    },

    {
      type: "table",
      title: "Quick Rules for Addition and Subtraction",
      rows: [
        ["Situation", "What to Do"],
        ["Same denominator", "Add/subtract numerators; keep denominator"],
        ["Different denominators", "Find a common denominator first"],
        ["Mixed numbers", "Work with whole and fractional parts"],
        ["Improper result", "Convert to a mixed number if required"],
        ["Final answer", "Simplify whenever possible"]
      ]
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Add 4/9 + 2/9.",
        "2. Add 1/2 + 1/4.",
        "3. Add 2/3 + 1/6.",
        "4. Subtract 7/8 − 3/8.",
        "5. Subtract 5/6 − 1/3.",
        "6. Find 4 − 3/5.",
        "7. Add 2 1/3 + 1 1/3.",
        "8. Add 3 2/5 + 2 4/5.",
        "9. Subtract 5 1/4 − 2 3/4.",
        "10. Explain why fractions with different denominators cannot be added by simply adding their numerators and denominators."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Never add or subtract denominators. First check whether the denominators are the same. If they are different, find a common denominator, convert the fractions into equivalent fractions, and then perform the operation. Finally simplify the answer."
    }

  ]
},

{
  title: "Multiplying Fractions",

  blocks: [

    {
      type: "concept",
      title: "Multiplication of a Fraction by a Whole Number",
      text: "When a fraction is multiplied by a whole number, we can think of it as repeated addition. For example, 3 × 2/5 means 2/5 + 2/5 + 2/5. The numerator is multiplied by the whole number while the denominator remains unchanged."
    },

    {
      type: "formula",
      title: "Fraction × Whole Number",
      text: `
        n × a/b = (n × a)/b
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Fraction × Whole Number",
      question: "Find 4 × 3/7.",

      steps: [
        "Multiply the whole number by the numerator.",
        "4 × 3 = 12.",
        "Keep the denominator 7 unchanged.",
        "Therefore, 4 × 3/7 = 12/7.",
        "Convert to a mixed number if required: 12/7 = 1 5/7."
      ],

      answer: "12/7 = 1 5/7"
    },

    {
      type: "concept",
      title: "Multiplying Two Fractions",
      text: "To multiply two fractions, multiply the numerators together and multiply the denominators together. The result can then be simplified."
    },

    {
      type: "formula",
      title: "Fraction × Fraction",
      text: `
        a/b × c/d = (a × c)/(b × d)
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Multiplying Two Fractions",
      question: "Find 2/3 × 4/5.",

      steps: [
        "Multiply the numerators: 2 × 4 = 8.",
        "Multiply the denominators: 3 × 5 = 15.",
        "Therefore, 2/3 × 4/5 = 8/15.",
        "8 and 15 have no common factor greater than 1, so the answer is already simplified."
      ],

      answer: "8/15"
    },

    {
      type: "diagram",
      title: "Visual Idea of Fraction Multiplication",
      content: `
        <svg viewBox="0 0 650 310"
             width="100%"
             style="max-width:650px;height:auto;">

          <text x="60" y="40"
                font-size="23"
                font-weight="700">1/2 of 3/4</text>

          <rect x="70" y="75"
                width="240"
                height="160"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="150" y1="75"
                x2="150" y2="235"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="230" y1="75"
                x2="230" y2="235"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="70" y1="128"
                x2="310" y2="128"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="70" y1="181"
                x2="310" y2="181"
                stroke="currentColor"
                stroke-width="3"/>

          <text x="360" y="125"
                font-size="25"
                font-weight="700">
            1/2 × 3/4
          </text>

          <text x="360" y="175"
                font-size="25"
                font-weight="700">
            = 3/8
          </text>

          <text x="360" y="225"
                font-size="19">
            One half of three-fourths
          </text>

        </svg>
      `,
      caption: "Multiplying fractions can be understood as finding a fraction of another fraction."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Fraction of a Fraction",
      question: "Find 1/2 of 3/4.",

      steps: [
        "The word 'of' means multiplication.",
        "So we calculate 1/2 × 3/4.",
        "Multiply the numerators: 1 × 3 = 3.",
        "Multiply the denominators: 2 × 4 = 8.",
        "Therefore, 1/2 of 3/4 = 3/8."
      ],

      answer: "3/8"
    },

    {
      type: "concept",
      title: "Cancelling Common Factors Before Multiplication",
      text: "Sometimes the numbers become easier to work with if we cancel common factors between a numerator and a denominator before multiplying. This is called cross-cancellation or simplification before multiplication."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Simplifying Before Multiplying",
      question: "Find 6/7 × 14/15.",

      steps: [
        "Write the multiplication: 6/7 × 14/15.",
        "6 and 15 have a common factor 3. Divide them by 3: 6 → 2 and 15 → 5.",
        "14 and 7 have a common factor 7. Divide them by 7: 14 → 2 and 7 → 1.",
        "Now multiply: 2/1 × 2/5.",
        "Multiply the numerators: 2 × 2 = 4.",
        "Multiply the denominators: 1 × 5 = 5."
      ],

      answer: "4/5"
    },

    {
      type: "concept",
      title: "Multiplying Mixed Numbers",
      text: "To multiply mixed numbers, first convert each mixed number into an improper fraction. Then multiply the fractions and simplify the result."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Mixed Number × Fraction",
      question: "Find 2 1/3 × 3/5.",

      steps: [
        "Convert 2 1/3 into an improper fraction.",
        "2 × 3 + 1 = 7, so 2 1/3 = 7/3.",
        "Now multiply: 7/3 × 3/5.",
        "Cancel the common factor 3.",
        "The result becomes 7/5.",
        "Convert to a mixed number: 7/5 = 1 2/5."
      ],

      answer: "1 2/5"
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Two Mixed Numbers",
      question: "Find 1 1/2 × 2 2/3.",

      steps: [
        "Convert 1 1/2 to an improper fraction: (1 × 2 + 1)/2 = 3/2.",
        "Convert 2 2/3 to an improper fraction: (2 × 3 + 2)/3 = 8/3.",
        "Multiply: 3/2 × 8/3.",
        "Cancel 3 with 3.",
        "Cancel 8 with 2: 8 ÷ 2 = 4.",
        "The result is 4."
      ],

      answer: "4"
    },

    {
      type: "concept",
      title: "Multiplying by 1",
      text: "Multiplying a fraction by 1 does not change its value. Since 1 can be written as n/n for any non-zero n, multiplying the numerator and denominator by the same number produces an equivalent fraction."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Multiplication by 1",
      question: "Show that 5/8 × 1 = 5/8.",

      steps: [
        "Write 1 as 1/1.",
        "Multiply: 5/8 × 1/1.",
        "Multiply numerators: 5 × 1 = 5.",
        "Multiply denominators: 8 × 1 = 8.",
        "Therefore, the fraction remains 5/8."
      ],

      answer: "5/8"
    },

    {
      type: "concept",
      title: "Multiplying by a Fraction Less Than 1",
      text: "When a positive number is multiplied by a positive fraction less than 1, the result is smaller than the original number. For example, 1/2 × 10 = 5."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Checking the Size",
      question: "Without calculating exactly, should 3/4 × 20 be greater or less than 20?",

      steps: [
        "3/4 is less than 1.",
        "Multiplying a positive number by a fraction less than 1 makes it smaller.",
        "Therefore, 3/4 × 20 must be less than 20.",
        "In fact, 3/4 × 20 = 15."
      ],

      answer: "Less than 20; the exact answer is 15."
    },

    {
      type: "concept",
      title: "Multiplying by a Fraction Greater Than 1",
      text: "When a positive number is multiplied by a fraction greater than 1, the result becomes greater than the original number. This is useful for checking whether a calculated answer is reasonable."
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Size Check",
      question: "Is 5/4 × 12 greater or smaller than 12?",

      steps: [
        "5/4 is greater than 1.",
        "Therefore, multiplying 12 by 5/4 makes the result greater than 12.",
        "Calculate: 5/4 × 12 = 60/4.",
        "60/4 = 15."
      ],

      answer: "Greater than 12; the answer is 15."
    },

    {
      type: "concept",
      title: "Multiplication With Zero",
      text: "Any fraction multiplied by zero gives zero. This follows the basic multiplication property that any number multiplied by zero is zero."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Multiplying by Zero",
      question: "Find 7/9 × 0.",

      steps: [
        "Any number multiplied by zero is zero.",
        "Therefore, 7/9 × 0 = 0."
      ],

      answer: "0"
    },

    {
      type: "concept",
      title: "Multiplication in a Word Problem",
      text: "Multiplication of fractions is often used when finding a fraction of a quantity. Words such as 'of', 'part of' or 'fraction of' can indicate multiplication."
    },

    {
      type: "workedExample",
      title: "Solved Example 11 — Word Problem",
      question: "Riya has 24 pencils. She gives 3/8 of them to her friend. How many pencils does she give?",

      steps: [
        "We need to find 3/8 of 24.",
        "The word 'of' means multiplication.",
        "Calculate 3/8 × 24.",
        "Write 24 as 24/1.",
        "3/8 × 24/1 = 72/8.",
        "72 ÷ 8 = 9."
      ],

      answer: "She gives 9 pencils."
    },

    {
      type: "workedExample",
      title: "Solved Example 12 — Another Word Problem",
      question: "A 15 km route has 2/5 of its distance covered in the morning. How far was covered in the morning?",

      steps: [
        "Find 2/5 of 15 km.",
        "Calculate 2/5 × 15.",
        "15 ÷ 5 = 3.",
        "3 × 2 = 6.",
        "Therefore, 6 km was covered in the morning."
      ],

      answer: "6 km"
    },

    {
      type: "table",
      title: "Multiplication Rules",
      rows: [
        ["Situation", "Method"],
        ["Fraction × whole number", "Multiply the numerator by the whole number"],
        ["Fraction × fraction", "Multiply numerators and denominators"],
        ["Mixed number × fraction", "Convert mixed number to improper fraction first"],
        ["Mixed number × mixed number", "Convert both to improper fractions"],
        ["Final result", "Simplify the fraction"]
      ]
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Find 5 × 2/7.",
        "2. Find 3/4 × 2/5.",
        "3. Find 7/8 × 4/21.",
        "4. Find 2/3 of 18.",
        "5. Find 3/5 of 25.",
        "6. Find 1 1/2 × 2/3.",
        "7. Find 2 1/4 × 4/9.",
        "8. Simplify 8/15 × 5/12 before multiplying.",
        "9. A ribbon is 20 m long. What is 3/4 of its length?",
        "10. Explain why multiplying a positive number by a fraction less than 1 gives a smaller result."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For fraction multiplication, you do not need a common denominator. Multiply numerator by numerator and denominator by denominator. Before multiplying, look for common factors that can be cancelled to make the calculation easier. Always simplify the final answer."
    }

  ]
},

{
  title: "Dividing Fractions",

  blocks: [

    {
      type: "concept",
      title: "What Does Division Mean?",
      text: "Division tells us how many groups of a given size can be made or how much each group contains. With fractions, division can be understood using sharing and measurement. For example, 3/4 ÷ 1/4 asks how many one-fourths fit into three-fourths."
    },

    {
      type: "diagram",
      title: "Understanding 3/4 ÷ 1/4",
      content: `
        <svg viewBox="0 0 650 300"
             width="100%"
             style="max-width:650px;height:auto;">

          <text x="45" y="35"
                font-size="22"
                font-weight="700">
            3/4
          </text>

          <rect x="45" y="70"
                width="300"
                height="70"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="145" y1="70"
                x2="145" y2="140"
                stroke="currentColor"
                stroke-width="3"/>

          <line x1="245" y1="70"
                x2="245" y2="140"
                stroke="currentColor"
                stroke-width="3"/>

          <text x="85" y="185"
                font-size="18">1/4</text>

          <text x="185" y="185"
                font-size="18">1/4</text>

          <text x="285" y="185"
                font-size="18">1/4</text>

          <text x="385" y="110"
                font-size="28"
                font-weight="700">
            ÷ 1/4
          </text>

          <text x="385" y="160"
                font-size="25"
                font-weight="700">
            = 3
          </text>

          <text x="385" y="210"
                font-size="18">
            Three 1/4 parts
          </text>

        </svg>
      `,
      caption: "There are three one-fourth parts in three-fourths, so 3/4 ÷ 1/4 = 3."
    },

    {
      type: "concept",
      title: "Dividing a Fraction by a Whole Number",
      text: "To divide a fraction by a whole number, divide the fraction into that many equal groups. Algebraically, dividing by a whole number n is the same as multiplying by 1/n."
    },

    {
      type: "formula",
      title: "Fraction ÷ Whole Number",
      text: `
        a/b ÷ n = a/b × 1/n = a/(b × n)
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Fraction ÷ Whole Number",
      question: "Find 3/5 ÷ 2.",

      steps: [
        "Write 2 as 2/1.",
        "Dividing by 2 is the same as multiplying by 1/2.",
        "So 3/5 ÷ 2 = 3/5 × 1/2.",
        "Multiply the numerators: 3 × 1 = 3.",
        "Multiply the denominators: 5 × 2 = 10."
      ],

      answer: "3/10"
    },

    {
      type: "concept",
      title: "Dividing a Whole Number by a Fraction",
      text: "When a whole number is divided by a fraction, we are asking how many groups of that fractional size fit into the whole number. For example, 6 ÷ 1/2 asks how many halves are contained in 6."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Whole Number ÷ Fraction",
      question: "Find 6 ÷ 1/2.",

      steps: [
        "Write 6 as 6/1.",
        "To divide by a fraction, we will use the reciprocal of the divisor.",
        "The reciprocal of 1/2 is 2/1.",
        "Therefore, 6/1 ÷ 1/2 = 6/1 × 2/1.",
        "6 × 2 = 12."
      ],

      answer: "12"
    },

    {
      type: "concept",
      title: "Why Does 6 ÷ 1/2 Equal 12?",
      text: "Imagine six whole objects divided into halves. Each whole contains two halves. Therefore, six wholes contain 6 × 2 = 12 halves. This explains why 6 ÷ 1/2 = 12."
    },

    {
      type: "diagram",
      title: "Six Wholes Contain Twelve Halves",
      content: `
        <svg viewBox="0 0 680 300"
             width="100%"
             style="max-width:680px;height:auto;">

          <text x="40" y="35"
                font-size="21"
                font-weight="700">
            6 ÷ 1/2
          </text>

          <rect x="40" y="70"
                width="90"
                height="60"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="85" y1="70" x2="85" y2="130"
                stroke="currentColor" stroke-width="3"/>

          <rect x="145" y="70"
                width="90"
                height="60"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="190" y1="70" x2="190" y2="130"
                stroke="currentColor" stroke-width="3"/>

          <rect x="250" y="70"
                width="90"
                height="60"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="295" y1="70" x2="295" y2="130"
                stroke="currentColor" stroke-width="3"/>

          <rect x="355" y="70"
                width="90"
                height="60"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="400" y1="70" x2="400" y2="130"
                stroke="currentColor" stroke-width="3"/>

          <rect x="460" y="70"
                width="90"
                height="60"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="505" y1="70" x2="505" y2="130"
                stroke="currentColor" stroke-width="3"/>

          <rect x="565" y="70"
                width="90"
                height="60"
                fill="none"
                stroke="currentColor"
                stroke-width="4"/>

          <line x1="610" y1="70" x2="610" y2="130"
                stroke="currentColor" stroke-width="3"/>

          <text x="240" y="190"
                font-size="25"
                font-weight="700">
            12 halves
          </text>

        </svg>
      `,
      caption: "Each whole contains two halves, so six wholes contain twelve halves."
    },

    {
      type: "concept",
      title: "Reciprocal of a Fraction",
      text: "The reciprocal of a non-zero fraction is obtained by interchanging its numerator and denominator. The reciprocal of a/b is b/a. For example, the reciprocal of 3/7 is 7/3."
    },

    {
      type: "formula",
      title: "Reciprocal",
      text: `
        Reciprocal of a/b = b/a
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Finding a Reciprocal",
      question: "Find the reciprocal of 5/8.",

      steps: [
        "The fraction is 5/8.",
        "Interchange the numerator and denominator.",
        "5 becomes the denominator.",
        "8 becomes the numerator.",
        "Therefore, the reciprocal is 8/5."
      ],

      answer: "8/5"
    },

    {
      type: "concept",
      title: "Division by a Fraction",
      text: "To divide one fraction by another non-zero fraction, multiply the first fraction by the reciprocal of the second fraction. This is commonly remembered as 'keep, change, flip': keep the first fraction, change division to multiplication, and flip the second fraction."
    },

    {
      type: "formula",
      title: "Fraction Division Rule",
      text: `
        a/b ÷ c/d = a/b × d/c
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Fraction ÷ Fraction",
      question: "Find 2/3 ÷ 4/5.",

      steps: [
        "Keep the first fraction: 2/3.",
        "Change division into multiplication.",
        "Take the reciprocal of 4/5, which is 5/4.",
        "So 2/3 ÷ 4/5 = 2/3 × 5/4.",
        "Multiply the numerators: 2 × 5 = 10.",
        "Multiply the denominators: 3 × 4 = 12.",
        "Simplify 10/12 by dividing numerator and denominator by 2."
      ],

      answer: "5/6"
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Another Fraction Division",
      question: "Find 3/4 ÷ 2/3.",

      steps: [
        "Keep 3/4.",
        "Change ÷ to ×.",
        "Flip 2/3 to get its reciprocal 3/2.",
        "So 3/4 × 3/2.",
        "Multiply: 3 × 3 = 9.",
        "Multiply the denominators: 4 × 2 = 8.",
        "The result is 9/8.",
        "Convert to a mixed number: 9/8 = 1 1/8."
      ],

      answer: "9/8 = 1 1/8"
    },

    {
      type: "concept",
      title: "Simplifying Before Division",
      text: "As with multiplication, common factors can sometimes be cancelled before multiplying after changing division into multiplication. This makes the calculation shorter and reduces the chance of arithmetic mistakes."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Simplify Before Calculating",
      question: "Find 8/15 ÷ 4/5.",

      steps: [
        "Change division into multiplication by the reciprocal.",
        "8/15 ÷ 4/5 = 8/15 × 5/4.",
        "Cancel 8 with 4: 8 ÷ 4 = 2.",
        "Cancel 5 with 15: 5 ÷ 5 = 1 and 15 ÷ 5 = 3.",
        "Now multiply 2/3 × 1/1."
      ],

      answer: "2/3"
    },

    {
      type: "concept",
      title: "Dividing Mixed Numbers",
      text: "To divide mixed numbers, first convert each mixed number into an improper fraction. Then use the fraction-division rule: multiply the first fraction by the reciprocal of the second."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Mixed Number Division",
      question: "Find 1 1/2 ÷ 3/4.",

      steps: [
        "Convert 1 1/2 into an improper fraction: 3/2.",
        "Now calculate 3/2 ÷ 3/4.",
        "Change division to multiplication and take the reciprocal of 3/4.",
        "3/2 × 4/3.",
        "Cancel 3 with 3.",
        "4 ÷ 2 = 2."
      ],

      answer: "2"
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Two Mixed Numbers",
      question: "Find 2 1/4 ÷ 1 1/2.",

      steps: [
        "Convert 2 1/4 to an improper fraction: (2 × 4 + 1)/4 = 9/4.",
        "Convert 1 1/2 to an improper fraction: (1 × 2 + 1)/2 = 3/2.",
        "Now calculate 9/4 ÷ 3/2.",
        "Change division to multiplication and flip 3/2.",
        "9/4 × 2/3.",
        "Cancel 9 and 3: 9 ÷ 3 = 3.",
        "Cancel 2 and 4: 2 ÷ 2 = 1 and 4 ÷ 2 = 2.",
        "The result is 3/2."
      ],

      answer: "3/2 = 1 1/2"
    },

    {
      type: "concept",
      title: "Division Can Make a Number Larger",
      text: "Dividing by a fraction less than 1 can make the result larger. For example, 6 ÷ 1/2 = 12. This is because we are asking how many small fractional groups fit into the number."
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Predicting the Size",
      question: "Will 8 ÷ 1/4 be greater or smaller than 8?",

      steps: [
        "1/4 is less than 1.",
        "Dividing by a fraction less than 1 gives a result greater than the original number.",
        "Calculate: 8 ÷ 1/4 = 8 × 4.",
        "8 × 4 = 32."
      ],

      answer: "Greater than 8; the answer is 32."
    },

    {
      type: "concept",
      title: "Division by 1",
      text: "Dividing any number by 1 leaves the number unchanged. Therefore, a fraction divided by 1 is the same fraction."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Division by 1",
      question: "Find 7/9 ÷ 1.",

      steps: [
        "Dividing by 1 does not change a number.",
        "Therefore, 7/9 ÷ 1 = 7/9."
      ],

      answer: "7/9"
    },

    {
      type: "concept",
      title: "Division by the Same Fraction",
      text: "Any non-zero number divided by itself is 1. Therefore, a non-zero fraction divided by the same fraction gives 1."
    },

    {
      type: "workedExample",
      title: "Solved Example 11 — Same Fraction",
      question: "Find 5/7 ÷ 5/7.",

      steps: [
        "The dividend and divisor are the same non-zero fraction.",
        "A non-zero number divided by itself equals 1.",
        "Therefore, 5/7 ÷ 5/7 = 1."
      ],

      answer: "1"
    },

    {
      type: "concept",
      title: "Division in Word Problems",
      text: "Fraction division appears in situations where we need to find how many fractional-sized groups fit into a quantity, or how many equal groups can be made from a given amount."
    },

    {
      type: "workedExample",
      title: "Solved Example 12 — Word Problem",
      question: "A ribbon is 3/4 metre long. Each piece required is 1/8 metre long. How many pieces can be cut?",

      steps: [
        "We need to find how many 1/8 m pieces fit into 3/4 m.",
        "So calculate 3/4 ÷ 1/8.",
        "Change division to multiplication by the reciprocal.",
        "3/4 × 8/1.",
        "Cancel 8 with 4: 8 ÷ 4 = 2.",
        "3 × 2 = 6."
      ],

      answer: "6 pieces"
    },

    {
      type: "workedExample",
      title: "Solved Example 13 — Sharing a Fractional Quantity",
      question: "A cake is 3/5 of a whole cake. It is shared equally among 3 children. What fraction of a whole cake does each child receive?",

      steps: [
        "The total amount is 3/5.",
        "It is divided equally among 3 children.",
        "Calculate 3/5 ÷ 3.",
        "Write 3 as 3/1.",
        "3/5 × 1/3.",
        "Cancel 3 with 3.",
        "The result is 1/5."
      ],

      answer: "Each child receives 1/5 of a whole cake."
    },

    {
      type: "table",
      title: "Division Rules",
      rows: [
        ["Situation", "Method"],
        ["Fraction ÷ whole number", "Multiply by the reciprocal of the whole number"],
        ["Whole number ÷ fraction", "Write the whole number as a fraction, then multiply by reciprocal"],
        ["Fraction ÷ fraction", "Multiply by the reciprocal of the divisor"],
        ["Mixed-number division", "Convert mixed numbers to improper fractions first"],
        ["Final answer", "Simplify and convert to a mixed number if needed"]
      ]
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Find 3/5 ÷ 2.",
        "2. Find 7 ÷ 1/2.",
        "3. Find 2/3 ÷ 5/6.",
        "4. Find 3/4 ÷ 2/5.",
        "5. Find the reciprocal of 7/11.",
        "6. Find 1 1/2 ÷ 3/4.",
        "7. Find 2 1/3 ÷ 7/9.",
        "8. A 2/3 m ribbon is cut into pieces of 1/6 m each. How many pieces are obtained?",
        "9. A quantity of 4/5 kg is shared equally among 4 people. How much does each person receive?",
        "10. Explain why dividing by 1/2 is the same as multiplying by 2."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For fraction division, keep the first fraction, change division into multiplication, and take the reciprocal of the second fraction. Do not flip both fractions. Convert mixed numbers to improper fractions before dividing and simplify the final answer."
    }

  ]
},

{
  title: "Mixed Problems and Real-Life Applications of Fractions",

  blocks: [

    {
      type: "concept",
      title: "Using Fractions in Real Life",
      text: "Fractions are used whenever we deal with parts of quantities. They appear in measurements, money, time, distance, recipes, sharing, portions and many other situations. The most important step in a word problem is to identify what operation is required."
    },

    {
      type: "concept",
      title: "Choosing the Correct Operation",
      text: "Use addition when separate quantities are being combined. Use subtraction when one quantity is removed or a difference is required. Use multiplication when finding a fraction of a quantity. Use division when a quantity is shared equally or when we need to know how many fractional groups fit into a quantity."
    },

    {
      type: "table",
      title: "Fraction Word-Problem Clues",
      rows: [
        ["Situation", "Usually Use"],
        ["Combine two quantities", "Addition"],
        ["Find the difference", "Subtraction"],
        ["Find a fraction of a quantity", "Multiplication"],
        ["Share equally", "Division"],
        ["How many groups fit?", "Division"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Combining Fractions",
      question: "Ravi walked 2/5 km in the morning and 3/10 km in the evening. How far did he walk altogether?",

      steps: [
        "The distances are being combined, so use addition.",
        "Calculate 2/5 + 3/10.",
        "The common denominator of 5 and 10 is 10.",
        "2/5 = 4/10.",
        "Therefore, 4/10 + 3/10 = 7/10."
      ],

      answer: "Ravi walked 7/10 km altogether."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Finding a Difference",
      question: "A tank contains 7/8 litre of water. If 1/4 litre is used, how much water remains?",

      steps: [
        "Water is being removed, so use subtraction.",
        "Calculate 7/8 − 1/4.",
        "Convert 1/4 to eighths: 1/4 = 2/8.",
        "Now subtract: 7/8 − 2/8 = 5/8."
      ],

      answer: "5/8 litre remains."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Fraction of a Quantity",
      question: "A school has 40 students in a group. 3/5 of them participate in a competition. How many students participate?",

      steps: [
        "We need to find 3/5 of 40.",
        "The word 'of' indicates multiplication.",
        "Calculate 3/5 × 40.",
        "40 ÷ 5 = 8.",
        "8 × 3 = 24."
      ],

      answer: "24 students participate."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Equal Sharing",
      question: "A 3/4 kg packet of sweets is divided equally among 3 children. How much does each child receive?",

      steps: [
        "The quantity is being shared equally, so use division.",
        "Calculate 3/4 ÷ 3.",
        "Write 3 as 3/1.",
        "3/4 ÷ 3/1 = 3/4 × 1/3.",
        "Cancel the common factor 3.",
        "The result is 1/4."
      ],

      answer: "Each child receives 1/4 kg."
    },

    {
      type: "concept",
      title: "Fractions on a Number Line",
      text: "A number line can help us understand the size and position of fractions. To represent a fraction such as 3/5, divide the interval from 0 to 1 into five equal parts and move three parts from 0."
    },

    {
      type: "diagram",
      title: "Locating 3/5 on a Number Line",
      content: `
        <svg viewBox="0 0 650 240"
             width="100%"
             style="max-width:650px;height:auto;">

          <line x1="70" y1="120"
                x2="570" y2="120"
                stroke="currentColor"
                stroke-width="5"/>

          <line x1="70" y1="100" x2="70" y2="140"
                stroke="currentColor" stroke-width="4"/>
          <line x1="170" y1="100" x2="170" y2="140"
                stroke="currentColor" stroke-width="4"/>
          <line x1="270" y1="100" x2="270" y2="140"
                stroke="currentColor" stroke-width="4"/>
          <line x1="370" y1="100" x2="370" y2="140"
                stroke="currentColor" stroke-width="4"/>
          <line x1="470" y1="100" x2="470" y2="140"
                stroke="currentColor" stroke-width="4"/>
          <line x1="570" y1="100" x2="570" y2="140"
                stroke="currentColor" stroke-width="4"/>

          <circle cx="370" cy="120"
                  r="9"
                  fill="currentColor"/>

          <text x="60" y="175"
                font-size="20">0</text>

          <text x="160" y="175"
                font-size="20">1/5</text>

          <text x="260" y="175"
                font-size="20">2/5</text>

          <text x="360" y="175"
                font-size="20"
                font-weight="700">3/5</text>

          <text x="460" y="175"
                font-size="20">4/5</text>

          <text x="560" y="175"
                font-size="20">1</text>

        </svg>
      `,
      caption: "The interval from 0 to 1 is divided into five equal parts."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Comparing Two Fractions",
      question: "Which is greater: 5/6 or 7/9?",

      steps: [
        "The denominators are different, so use a common denominator.",
        "The LCM of 6 and 9 is 18.",
        "5/6 = 15/18.",
        "7/9 = 14/18.",
        "Since 15/18 > 14/18, 5/6 is greater."
      ],

      answer: "5/6 > 7/9"
    },

    {
      type: "concept",
      title: "Using Cross Multiplication to Compare",
      text: "For positive fractions a/b and c/d, we can compare ad and bc. If ad > bc, then a/b > c/d. This method is useful when the denominators are different and a common denominator is inconvenient."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Cross Multiplication",
      question: "Compare 3/7 and 4/9.",

      steps: [
        "Cross multiply: 3 × 9 = 27.",
        "Other cross product: 4 × 7 = 28.",
        "Since 27 < 28, 3/7 < 4/9."
      ],

      answer: "3/7 < 4/9"
    },

    {
      type: "concept",
      title: "Fraction of a Fraction",
      text: "When we need to find one fraction of another fraction, we multiply the two fractions. The word 'of' is an important clue."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Fraction of a Fraction",
      question: "Find 2/3 of 3/5.",

      steps: [
        "The word 'of' means multiplication.",
        "Calculate 2/3 × 3/5.",
        "Multiply the numerators: 2 × 3 = 6.",
        "Multiply the denominators: 3 × 5 = 15.",
        "Simplify 6/15 by dividing by 3.",
        "The answer is 2/5."
      ],

      answer: "2/5"
    },

    {
      type: "concept",
      title: "Finding the Whole When a Fraction Is Known",
      text: "Sometimes a fraction of a quantity is given and we need to find the original whole. In such cases, division can be used. If 3/5 of a number is known, we can divide the known quantity by 3/5 to find the whole."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Finding the Whole",
      question: "3/4 of a number is 18. Find the number.",

      steps: [
        "Let the number be x.",
        "3/4 of x = 18.",
        "Therefore, x = 18 ÷ 3/4.",
        "Change division into multiplication by the reciprocal.",
        "18 × 4/3.",
        "18 ÷ 3 = 6.",
        "6 × 4 = 24."
      ],

      answer: "The number is 24."
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Measurement Problem",
      question: "A rope is 5 1/2 m long. Another rope is 2 3/4 m long. Find the difference in their lengths.",

      steps: [
        "Subtract the shorter length from the longer length.",
        "Calculate 5 1/2 − 2 3/4.",
        "Convert 5 1/2 into fourths: 5 1/2 = 5 2/4.",
        "Since 2/4 is smaller than 3/4, regroup one whole.",
        "5 2/4 = 4 6/4.",
        "Now subtract: 4 6/4 − 2 3/4.",
        "Whole parts: 4 − 2 = 2.",
        "Fraction parts: 6/4 − 3/4 = 3/4."
      ],

      answer: "2 3/4 m"
    },

    {
      type: "concept",
      title: "Order of Operations With Fractions",
      text: "When an expression contains more than one operation, follow the usual order of operations. Work inside brackets first, then multiplication or division, and finally addition or subtraction."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Fraction Expression",
      question: "Simplify 1/2 + 2 × 1/4.",

      steps: [
        "Multiplication comes before addition.",
        "First calculate 2 × 1/4 = 2/4 = 1/2.",
        "Now calculate 1/2 + 1/2.",
        "1/2 + 1/2 = 1."
      ],

      answer: "1"
    },

    {
      type: "workedExample",
      title: "Solved Example 11 — Brackets With Fractions",
      question: "Simplify (1/2 + 1/3) × 3/5.",

      steps: [
        "Solve the brackets first.",
        "1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
        "Now multiply 5/6 × 3/5.",
        "Cancel 5 with 5.",
        "Cancel 3 with 6, giving 1/2.",
        "Therefore, the result is 1/2."
      ],

      answer: "1/2"
    },

    {
      type: "concept",
      title: "Estimating a Fraction Answer",
      text: "Estimation helps us detect mistakes. For example, 7/8 is close to 1, so 7/8 × 20 should be close to 20 but slightly smaller. A result such as 100 would clearly indicate an error."
    },

    {
      type: "workedExample",
      title: "Solved Example 12 — Estimate Before Calculating",
      question: "Estimate 5/6 × 24 and then calculate it.",

      steps: [
        "5/6 is slightly less than 1.",
        "So the answer should be slightly less than 24.",
        "Calculate 5/6 × 24.",
        "24 ÷ 6 = 4.",
        "4 × 5 = 20.",
        "20 is indeed slightly less than 24."
      ],

      answer: "20"
    },

    {
      type: "concept",
      title: "A Final Problem-Solving Checklist",
      text: "Read the problem carefully. Identify the quantities and what is being asked. Decide whether the operation is addition, subtraction, multiplication or division. Convert mixed numbers when necessary. Perform the calculation carefully, simplify the result and check whether the answer makes sense."
    },

    {
      type: "table",
      title: "Fraction Problem Checklist",
      rows: [
        ["Step 1", "Read and understand the question"],
        ["Step 2", "Identify the required operation"],
        ["Step 3", "Convert mixed numbers if necessary"],
        ["Step 4", "Find common denominators for addition/subtraction"],
        ["Step 5", "Use reciprocal for fraction division"],
        ["Step 6", "Simplify the final answer"],
        ["Step 7", "Check whether the answer is reasonable"]
      ]
    },

    {
      type: "practice",
      title: "Final Practice — Section 5",
      questions: [
        "1. Add 3/4 + 5/8.",
        "2. Subtract 7/9 − 2/3.",
        "3. Find 4/5 of 25.",
        "4. Find 3/4 ÷ 1/8.",
        "5. Compare 7/12 and 5/8.",
        "6. Find 2/3 of 3/7.",
        "7. 4/5 of a number is 28. Find the number.",
        "8. A 6 m rope is cut into pieces of 3/4 m each. How many pieces can be made?",
        "9. Simplify 1/2 + 3/4 × 2/3.",
        "10. A student studies for 2 1/2 hours on Monday and 1 3/4 hours on Tuesday. How much time does the student study altogether?"
      ]
    },

    {
      type: "examTip",
      title: "Final Exam Tip",
      text: "The hardest part of a fraction word problem is often choosing the correct operation. Look carefully at the wording: combine means addition, difference means subtraction, 'of' usually means multiplication, and equal sharing or 'how many groups' usually means division. Show every important step and simplify your final answer."
    }

  ]
}
],

importantPoints: [
  "A fraction represents a part of a whole or a part of a collection.",
  "The numerator is the number above the fraction bar and the denominator is the number below it.",
  "The denominator tells how many equal parts make the whole.",
  "The numerator tells how many of those equal parts are being considered.",
  "The parts of a whole must be equal when representing a fraction.",
  "A proper fraction has numerator < denominator and its value is less than 1.",
  "An improper fraction has numerator ≥ denominator and its value is 1 or greater.",
  "A mixed number contains a whole number and a proper fraction.",
  "To convert a mixed number into an improper fraction: multiply the whole number by the denominator, add the numerator, and keep the denominator.",
  "To convert an improper fraction into a mixed number, divide the numerator by the denominator.",
  "Equivalent fractions have the same value.",
  "To create an equivalent fraction, multiply or divide both numerator and denominator by the same non-zero number.",
  "Always simplify a fraction whenever possible.",
  "For fractions with the same denominator, compare their numerators.",
  "For positive fractions with the same numerator, the fraction with the smaller denominator is greater.",
  "For addition and subtraction, fractions with different denominators must first be converted to a common denominator.",
  "Never add or subtract the denominators directly.",
  "For multiplication, multiply numerator by numerator and denominator by denominator.",
  "A fraction of a quantity is found using multiplication.",
  "The word 'of' in a fraction problem often indicates multiplication.",
  "Common factors can be cancelled before multiplying to make calculations easier.",
  "To divide by a fraction, multiply by its reciprocal.",
  "The reciprocal of a/b is b/a, provided the fraction is non-zero.",
  "When dividing fractions, keep the first fraction, change ÷ to ×, and flip the second fraction.",
  "Mixed numbers should generally be converted into improper fractions before multiplication or division.",
  "Dividing by a fraction less than 1 can produce a result greater than the original number.",
  "For equal sharing, division is usually the required operation.",
  "On a number line, the denominator determines how many equal intervals are made and the numerator tells how many intervals to move from zero.",
  "For expressions containing several operations, follow the correct order of operations.",
  "In word problems, first identify whether addition, subtraction, multiplication or division is required.",
  "After solving, simplify the answer and check whether its size is reasonable."
],

keyTerms: [
  "Fraction",
  "Numerator",
  "Denominator",
  "Proper Fraction",
  "Improper Fraction",
  "Mixed Number",
  "Equivalent Fractions",
  "Simplest Form",
  "Common Denominator",
  "Reciprocal",
  "Addition",
  "Subtraction",
  "Multiplication",
  "Division",
  "Fraction of a Quantity",
  "Number Line"
],

summary:
  "Working with Fractions develops the skills needed to understand, compare and operate with fractions. We learn equivalent, proper, improper and mixed fractions, addition and subtraction, multiplication and division, reciprocals, fraction word problems, number-line representation and mixed expressions. The key is to choose the correct operation, show the calculation step by step, simplify the result and check whether the answer is reasonable.",

};  
