/*==================================================
  CONCEPT QUIZZER
  CLASS 8 MATHEMATICS — CHAPTER 16
  PLAYING WITH NUMBERS
==================================================*/

window.ChapterData = {
  id: "8-mathematics-playing-with-numbers",
  title: "Playing with Numbers",
  class: 8,
  subject: "Mathematics",
  chapterNumber: 16,

  description:
    "A detailed exploration of numbers, digits, number patterns, divisibility, generalised number forms and mathematical reasoning.",

  summary:
    "Numbers have patterns and properties that can be studied systematically. In this chapter we learn how to represent numbers using digits, form generalised expressions, test divisibility, investigate number patterns and solve puzzles using algebraic reasoning.",

  sections: [
    {
      title: "1. Chapter Introduction",
      blocks: [
        {type:"paragraph", text:"Numbers are not just symbols used for counting. Their digits, place values and divisibility properties create many interesting patterns. By studying these patterns, we can solve number puzzles without checking every possibility."},
        {type:"application", title:"Why this topic matters", text:"Number patterns are useful in mental calculation, checking answers, solving puzzles, understanding divisibility and preparing the foundation for algebra."},
        {type:"example", title:"Real-life connection", text:"A cashier, programmer or accountant may need to check whether a number can be divided into equal groups, whether a calculation is reasonable, or whether a repeating pattern is present."}
      ]
    },

    {
      title: "2. Digits and Place Value",
      blocks: [
        {type:"definition", title:"Digit", text:"A digit is one of the ten symbols 0, 1, 2, 3, 4, 5, 6, 7, 8 or 9."},
        {type:"paragraph", text:"The value of a digit depends on its place. In a multi-digit number, each position represents a power of 10."},
        {type:"example", title:"Solved Example 1 — Expanded form", text:"The number 5,284 can be written as 5 × 1000 + 2 × 100 + 8 × 10 + 4."},
        {type:"example", title:"Solved Example 2 — Three-digit number", text:"If a three-digit number has hundreds digit a, tens digit b and units digit c, then the number is 100a + 10b + c."},
        {type:"tip", title:"Key idea", text:"A digit and its place value are different. The same digit can have different values depending on where it occurs."}
      ]
    },

    {
      title: "3. Generalised Form of a Number",
      blocks: [
        {type:"paragraph", text:"Writing a number using its digits and place values gives its generalised form. This is especially useful when the digits are unknown."},
        {type:"example", title:"Solved Example 3 — Two-digit number", text:"Let the tens digit be x and the units digit be y. The number is 10x + y."},
        {type:"example", title:"Solved Example 4 — Three-digit number", text:"If the hundreds, tens and units digits are a, b and c respectively, the number is 100a + 10b + c."},
        {type:"example", title:"Solved Example 5 — Four-digit number", text:"If the digits are a, b, c and d from thousands to units, the number is 1000a + 100b + 10c + d."},
        {type:"fact", title:"Important result", text:"Generalised forms turn a number problem into an algebraic expression, making unknown-digit problems easier to solve."}
      ]
    },

    {
      title: "4. Reversing the Digits",
      blocks: [
        {type:"paragraph", text:"Reversing the digits of a number creates another number. Algebra helps us compare the original and reversed numbers."},
        {type:"example", title:"Solved Example 6 — Two-digit reversal", text:"Let a two-digit number have tens digit x and units digit y. Original number = 10x + y. Reversed number = 10y + x."},
        {type:"example", title:"Solved Example 7 — Difference", text:"The difference between the original and reversed numbers is (10x + y) − (10y + x) = 9x − 9y = 9(x − y). Therefore the difference of a two-digit number and its reverse is always divisible by 9."},
        {type:"example", title:"Solved Example 8 — Sum", text:"The sum of the original and reversed two-digit numbers is (10x + y) + (10y + x) = 11x + 11y = 11(x + y). Therefore it is always divisible by 11."},
        {type:"warning", title:"Common mistake", text:"When reversing digits, do not change the place values incorrectly. The tens digit becomes the units digit and the units digit becomes the tens digit."}
      ]
    },

    {
      title: "5. Divisibility Tests",
      blocks: [
        {type:"paragraph", text:"Divisibility rules allow us to decide whether a number is divisible by another number without carrying out the complete division."},
        {type:"fact", title:"Divisibility by 2", text:"A number is divisible by 2 if its last digit is 0, 2, 4, 6 or 8."},
        {type:"fact", title:"Divisibility by 3", text:"A number is divisible by 3 if the sum of its digits is divisible by 3."},
        {type:"fact", title:"Divisibility by 4", text:"A number is divisible by 4 if the number formed by its last two digits is divisible by 4."},
        {type:"fact", title:"Divisibility by 5", text:"A number is divisible by 5 if its last digit is 0 or 5."},
        {type:"fact", title:"Divisibility by 6", text:"A number is divisible by 6 if it is divisible by both 2 and 3."},
        {type:"fact", title:"Divisibility by 8", text:"A number is divisible by 8 if the number formed by its last three digits is divisible by 8."},
        {type:"fact", title:"Divisibility by 9", text:"A number is divisible by 9 if the sum of its digits is divisible by 9."},
        {type:"fact", title:"Divisibility by 10", text:"A number is divisible by 10 if its last digit is 0."},
        {type:"fact", title:"Divisibility by 11", text:"For a whole number, find the difference between the sums of digits in alternate positions. If the difference is 0 or a multiple of 11, the number is divisible by 11."}
      ]
    },

    {
      title: "6. Solved Divisibility Examples",
      blocks: [
        {type:"example", title:"Solved Example 9 — Is 7,236 divisible by 3?", text:"Add the digits: 7 + 2 + 3 + 6 = 18. Since 18 is divisible by 3, 7,236 is divisible by 3."},
        {type:"example", title:"Solved Example 10 — Is 4,728 divisible by 4?", text:"Look at the last two digits: 28. Since 28 is divisible by 4, 4,728 is divisible by 4."},
        {type:"example", title:"Solved Example 11 — Is 8,640 divisible by 6?", text:"The last digit is 0, so it is divisible by 2. The digit sum is 8 + 6 + 4 + 0 = 18, which is divisible by 3. Therefore it is divisible by 6."},
        {type:"example", title:"Solved Example 12 — Is 12,375 divisible by 5 and 9?", text:"The last digit is 5, so it is divisible by 5. The digit sum is 1 + 2 + 3 + 7 + 5 = 18, so it is also divisible by 9."},
        {type:"example", title:"Solved Example 13 — Divisibility by 11", text:"For 4,356, alternate-position sums are 4 + 5 = 9 and 3 + 6 = 9. Their difference is 0, so 4,356 is divisible by 11."}
      ]
    },

    {
      title: "7. Finding Unknown Digits",
      blocks: [
        {type:"paragraph", text:"Sometimes one digit in a number is unknown. Divisibility rules can help us find possible values of that digit."},
        {type:"example", title:"Solved Example 14 — Divisible by 5", text:"Find the possible value of x in 47x if the number is divisible by 5. The last digit must be 0 or 5. Therefore x can be 0 or 5."},
        {type:"example", title:"Solved Example 15 — Divisible by 3", text:"Find x in 52x so that the number is divisible by 3. Digit sum = 5 + 2 + x = 7 + x. The possible digit values making this a multiple of 3 are x = 2, 5 or 8."},
        {type:"example", title:"Solved Example 16 — Divisible by 9", text:"For 63x to be divisible by 9, 6 + 3 + x = 9 + x must be a multiple of 9. Therefore x = 0 or 9."},
        {type:"examTip", title:"Exam approach", text:"First write the relevant divisibility condition. Then substitute the known digits and test only the possible digit values from 0 to 9."}
      ]
    },

    {
      title: "8. Number Patterns",
      blocks: [
        {type:"paragraph", text:"Number patterns are sequences in which numbers follow a rule. Finding the rule allows us to predict later terms."},
        {type:"example", title:"Solved Example 17 — Constant difference", text:"The sequence 5, 9, 13, 17, ... increases by 4 each time. Therefore the next term is 21."},
        {type:"example", title:"Solved Example 18 — Constant multiple", text:"The sequence 3, 6, 12, 24, ... is formed by multiplying each term by 2. The next term is 48."},
        {type:"example", title:"Solved Example 19 — Square pattern", text:"The sequence 1, 4, 9, 16, 25, ... consists of consecutive square numbers."},
        {type:"think", title:"What if?", text:"A pattern may involve more than one operation. Always check whether the differences, ratios or another structural property stays consistent."}
      ]
    },

    {
      title: "9. Special Number Patterns",
      blocks: [
        {type:"paragraph", text:"Some number patterns become interesting when we look at digit sums, reversals or divisibility."},
        {type:"example", title:"Solved Example 20 — Multiples of 9", text:"Multiples of 9 include 9, 18, 27, 36, 45 and 54. Notice that the digit sum of each is a multiple of 9."},
        {type:"example", title:"Solved Example 21 — Reversal pattern", text:"12 + 21 = 33 and 23 + 32 = 55. The sums are multiples of 11, illustrating the general reversal property for two-digit numbers."}
      ]
    },

    {
      title: "10. Playing with Number Puzzles",
      blocks: [
        {type:"paragraph", text:"Number puzzles can often be solved by translating the verbal information into algebraic expressions."},
        {type:"example", title:"Solved Example 22 — Consecutive numbers", text:"Let two consecutive integers be n and n + 1. Their sum is n + (n + 1) = 2n + 1, which is always odd."},
        {type:"example", title:"Solved Example 23 — Three consecutive integers", text:"Let them be n − 1, n and n + 1. Their sum is (n − 1) + n + (n + 1) = 3n."},
        {type:"example", title:"Solved Example 24 — Even numbers", text:"Two consecutive even numbers can be written as 2n and 2n + 2. Their sum is 4n + 2, which is even."},
        {type:"application", title:"Why algebra helps", text:"Instead of trying many individual numbers, a general expression represents every number of the required type at once."}
      ]
    },

    {
      title: "11. Think & Understand",
      blocks: [
        {type:"paragraph", text:"Why is the general form 10x + y useful for a two-digit number? Because it represents every possible two-digit number with tens digit x and units digit y."},
        {type:"paragraph", text:"Why does divisibility by 2 depend only on the last digit? In our decimal number system, all place values except the units place are multiples of 2."},
        {type:"paragraph", text:"Why does the digit-sum test work for 3 and 9? Powers of 10 leave remainder 1 when divided by 3 or 9, so the number and its digit sum have the same remainder."},
        {type:"paragraph", text:"What happens when a number is reversed twice? Its original order is restored."}
      ]
    },

    {
      title: "12. Common Mistakes",
      blocks: [
        {type:"warning", title:"Mistake 1 — Confusing digit and number", text:"A digit is one symbol from 0 to 9; a number can contain several digits."},
        {type:"warning", title:"Mistake 2 — Using the wrong divisibility rule", text:"For example, checking only the last digit for divisibility by 3 is incorrect."},
        {type:"warning", title:"Mistake 3 — Forgetting zero", text:"Zero is an important possible digit when a problem asks for an unknown digit."},
        {type:"warning", title:"Mistake 4 — Reversing incorrectly", text:"The place values must change when the digits are reversed."},
        {type:"warning", title:"Mistake 5 — Assuming every pattern has constant difference", text:"Some sequences are multiplicative or follow another rule."}
      ]
    },

    {
      title: "13. Exam Zone",
      blocks: [
        {type:"fact", title:"Essential forms", text:"Two-digit number = 10x + y. Three-digit number = 100x + 10y + z."},
        {type:"fact", title:"Essential divisibility rules", text:"2 → last digit even. 3 → digit sum divisible by 3. 4 → last two digits divisible by 4. 5 → last digit 0 or 5. 6 → divisible by 2 and 3. 8 → last three digits divisible by 8. 9 → digit sum divisible by 9. 10 → last digit 0. 11 → alternating digit-sum difference is 0 or a multiple of 11."},
        {type:"examTip", title:"Exam tip", text:"For unknown-digit questions, list all possible digits from 0 to 9 and apply the exact divisibility condition. Show the condition and reasoning, not only the final digit."}
      ]
    },

    {
      title: "14. Practice Questions",
      blocks: [
        {type:"paragraph", text:"Basic: 1. Write 4,725 in expanded form. 2. Write the general form of a two-digit number. 3. State the divisibility rule for 5. 4. Is 3,648 divisible by 2?"},
        {type:"paragraph", text:"Standard: 5. Test 7,425 for divisibility by 3, 5 and 9. 6. Find the possible values of x in 36x if the number is divisible by 3. 7. Find the next three terms of 7, 14, 21, 28, ..."},
        {type:"paragraph", text:"Application: 8. A two-digit number and its reverse have a difference of 27. What can you conclude about the difference of its digits?"},
        {type:"paragraph", text:"HOTS: 9. Find all possible digits x for which 4x8 is divisible by 3 and 2 simultaneously. Explain your reasoning."},
        {type:"paragraph", text:"Reasoning: 10. Explain why the sum of a two-digit number and its reverse is divisible by 11."}
      ]
    },

    {
      title: "15. Challenge Zone",
      blocks: [
        {type:"example", title:"Challenge 1", text:"Find all two-digit numbers whose digits differ by 4 and whose number is divisible by 6."},
        {type:"example", title:"Challenge 2", text:"Find the smallest three-digit number divisible by 2, 3, 5 and 9. Explain each condition."},
        {type:"example", title:"Challenge 3", text:"A three-digit number has hundreds digit a, tens digit b and units digit c. Write its reverse and find an algebraic expression for the difference between the original and reversed numbers."},
        {type:"example", title:"Challenge 4", text:"Create a four-term number pattern using a rule different from constant addition and explain the rule clearly."}
      ]
    },

    {
      title: "16. Chapter Revision",
      blocks: [
        {type:"fact", title:"Quick Revision", text:"Digits 0–9 form numbers through place value. Generalised forms convert digit problems into algebra. Reversal problems are handled by changing place values. Divisibility rules provide quick tests. Number patterns are studied by identifying their generating rule."},
        {type:"fact", title:"Must remember", text:"Two-digit number = 10x + y. Reversed two-digit number = 10y + x. Their sum is divisible by 11 and their difference is divisible by 9."}
      ]
    },

    {
      title: "17. Important Points",
      blocks: [
        {type:"paragraph", text:"Place value determines the contribution of each digit. Unknown-digit problems can often be solved using divisibility rules. Generalised forms are powerful tools for proving number properties. Patterns should be investigated systematically rather than guessed."}
      ]
    },

    {
      title: "18. Key Terms",
      blocks: [
        {type:"definition", title:"Digit", text:"One of the symbols 0 through 9."},
        {type:"definition", title:"Place value", text:"The value contributed by a digit because of its position in a number."},
        {type:"definition", title:"Divisibility", text:"The property of a number being exactly divisible by another number without a remainder."},
        {type:"definition", title:"Generalised form", text:"An algebraic expression representing a number in terms of its digits and place values."},
        {type:"definition", title:"Pattern", text:"A sequence or arrangement following a recognisable rule."}
      ]
    },

    {
      title: "19. Chapter Summary",
      blocks: [
        {type:"summary", text:"Playing with numbers develops number sense and algebraic reasoning. We studied digits and place value, wrote numbers in generalised form, investigated reversals, learned important divisibility tests, found unknown digits, identified number patterns and solved number puzzles. The central idea is to replace repeated trial-and-error with organised mathematical reasoning."}
      ]
    }
  ],

  importantPoints: [
    "A digit is one symbol from 0 to 9.",
    "Place value determines the value of a digit in a number.",
    "A two-digit number with digits x and y is 10x + y.",
    "A three-digit number with digits x, y and z is 100x + 10y + z.",
    "A two-digit number plus its reverse is divisible by 11.",
    "The difference between a two-digit number and its reverse is divisible by 9.",
    "Divisibility rules make checking numbers faster.",
    "Unknown digits can be found using divisibility conditions.",
    "Number patterns should be studied by identifying their rule."
  ],

  keyTerms: [
    "Digit",
    "Place Value",
    "Generalised Form",
    "Divisibility",
    "Divisibility Test",
    "Reversal",
    "Number Pattern",
    "Consecutive Numbers",
    "Factor",
    "Multiple"
  ]
};
