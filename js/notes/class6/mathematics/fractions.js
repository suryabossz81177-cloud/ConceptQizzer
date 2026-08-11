/*==================================================
  CONCEPT QUIZZER
  CLASS 6 • MATHEMATICS • CHAPTER 7
  Package 13.1.7 — Fractions
==================================================*/
"use strict";

const ChapterData = {
  id: "class6-mathematics-fractions",
  class: 6,
  subject: "Mathematics",
  chapterNumber: 7,
  title: "Fractions",

  description:
    "Class 6 Mathematics Chapter 7 — Fractions: understand parts of a whole, equivalent fractions, comparing and ordering fractions, mixed numbers, addition and subtraction, and fractions in everyday situations.",

  estimatedReadingTime: "45–55 minutes",
  difficulty: "Intermediate",

  summary:
    "A fraction represents equal parts of a whole or a collection. This chapter develops the meaning of numerator and denominator, proper and improper fractions, mixed numbers, equivalent fractions, simplest form, comparison and ordering, and addition and subtraction of fractions with suitable denominators.",

  sections: [
    {
      id: "meaning",
      title: "Understanding Fractions",
      blocks: [
        { type: "paragraph", text: "A fraction is used when a whole is divided into equal parts and we want to describe one or more of those parts. The parts must be equal in size." },
        { type: "definition", title: "Fraction", text: "A fraction is a number that represents one or more equal parts of a whole or a collection." },
        { type: "example", title: "Reading 3/5", text: "In 3/5, the denominator 5 tells us that the whole is divided into 5 equal parts, and the numerator 3 tells us that 3 of those parts are being considered." },
        { type: "warning", title: "Equal Parts Matter", text: "If a shape is divided into unequal parts, simply selecting one part does not automatically represent a unit fraction." }
      ]
    },
    {
      id: "numerator-denominator",
      title: "Numerator and Denominator",
      blocks: [
        { type: "definition", title: "Numerator", text: "The numerator is the number written above the fraction bar. It tells how many equal parts are being considered." },
        { type: "definition", title: "Denominator", text: "The denominator is the number written below the fraction bar. It tells how many equal parts make one whole." },
        { type: "example", title: "Example: 7/9", text: "For 7/9, 7 is the numerator and 9 is the denominator." },
        { type: "tip", title: "Memory Tip", text: "Think 'number on top = number of parts taken' and 'number below = total equal parts in one whole'." }
      ]
    },
    {
      id: "types",
      title: "Types of Fractions",
      blocks: [
        { type: "definition", title: "Proper Fraction", text: "A proper fraction has a numerator smaller than its denominator. Its value is less than 1." },
        { type: "example", title: "Proper Fractions", text: "2/7, 5/9 and 11/15 are proper fractions." },
        { type: "definition", title: "Improper Fraction", text: "An improper fraction has a numerator greater than or equal to its denominator. Its value is at least 1." },
        { type: "example", title: "Improper Fractions", text: "7/5 and 9/9 are improper fractions." },
        { type: "definition", title: "Mixed Number", text: "A mixed number has a whole-number part and a proper fraction part, such as 2 1/3." },
        { type: "important", title: "Whole Number as a Fraction", text: "A whole number can be written as a fraction with denominator 1. For example, 4 = 4/1." }
      ]
    },
    {
      id: "unit-fractions",
      title: "Unit Fractions",
      blocks: [
        { type: "definition", title: "Unit Fraction", text: "A unit fraction has numerator 1, such as 1/2, 1/5 or 1/10." },
        { type: "paragraph", text: "Unit fractions are the basic equal pieces of a whole. Adding the required number of equal unit fractions can build a larger fraction." },
        { type: "example", title: "Building 3/8", text: "3/8 can be viewed as 1/8 + 1/8 + 1/8." }
      ]
    },
    {
      id: "equivalent",
      title: "Equivalent Fractions",
      blocks: [
        { type: "paragraph", text: "Different-looking fractions can have the same value. Such fractions are called equivalent fractions." },
        { type: "definition", title: "Equivalent Fractions", text: "Equivalent fractions are fractions that represent the same value or the same part of a whole." },
        { type: "example", title: "Example", text: "1/2, 2/4 and 4/8 are equivalent because each represents one-half." },
        { type: "method", title: "Making an Equivalent Fraction", text: "Multiply or divide the numerator and denominator by the same non-zero number. For example, 3/5 × 2/2 = 6/10." },
        { type: "warning", title: "Common Mistake", text: "Multiplying only the numerator or only the denominator changes the value. Both must be changed by the same non-zero factor." }
      ]
    },
    {
      id: "simplest-form",
      title: "Fractions in Simplest Form",
      blocks: [
        { type: "definition", title: "Simplest Form", text: "A fraction is in simplest form when the numerator and denominator have no common factor greater than 1." },
        { type: "example", title: "Simplifying 12/18", text: "12 and 18 have common factor 6. Dividing both by 6 gives 12/18 = 2/3." },
        { type: "tip", title: "Check Your Answer", text: "After simplifying, check whether the numerator and denominator still have a common factor greater than 1." }
      ]
    },
    {
      id: "compare-same-denominator",
      title: "Comparing Fractions with the Same Denominator",
      blocks: [
        { type: "paragraph", text: "When two positive fractions have the same denominator, compare their numerators. The fraction with the larger numerator has the larger value." },
        { type: "example", title: "Example", text: "5/9 is greater than 2/9 because both have denominator 9 and 5 is greater than 2." },
        { type: "important", title: "Same Denominator", text: "With equal positive denominators, the numerator directly tells which fraction is larger." }
      ]
    },
    {
      id: "compare-same-numerator",
      title: "Comparing Fractions with the Same Numerator",
      blocks: [
        { type: "paragraph", text: "For positive fractions with the same numerator, the fraction with the smaller denominator is larger because the whole has been divided into fewer, larger equal parts." },
        { type: "example", title: "Example", text: "3/5 is greater than 3/8 because fifths are larger pieces than eighths." },
        { type: "tip", title: "Think About the Pieces", text: "If the same number of pieces is taken, larger pieces give the greater fraction." }
      ]
    },
    {
      id: "compare-different",
      title: "Comparing Fractions with Different Denominators",
      blocks: [
        { type: "paragraph", text: "When both numerator and denominator are different, it can help to rewrite the fractions with a common denominator or use equivalent fractions." },
        { type: "example", title: "Example: 2/3 and 3/5", text: "A common denominator is 15. Since 2/3 = 10/15 and 3/5 = 9/15, 2/3 is greater than 3/5." },
        { type: "method", title: "Cross-Multiplication as a Comparison Tool", text: "For positive fractions a/b and c/d, comparing a × d with c × b gives the same ordering. This is a comparison method; it does not mean the fractions should be changed permanently." }
      ]
    },
    {
      id: "ordering",
      title: "Ordering Fractions",
      blocks: [
        { type: "paragraph", text: "To arrange fractions from smallest to largest or largest to smallest, compare their values using equivalent fractions, common denominators or a number-line picture." },
        { type: "example", title: "Example", text: "To order 1/2, 3/4 and 2/3, use denominator 12: 6/12, 9/12 and 8/12. Therefore 1/2 < 2/3 < 3/4." },
        { type: "tip", title: "Stay Consistent", text: "After converting to a common denominator, compare numerators carefully and keep the requested order." }
      ]
    },
    {
      id: "number-line",
      title: "Fractions on a Number Line",
      blocks: [
        { type: "paragraph", text: "A number line can show the position and relative size of fractions. To locate a fraction such as 3/5 between 0 and 1, divide the interval from 0 to 1 into five equal parts and count three parts from 0." },
        { type: "example", title: "Improper Fractions", text: "A fraction greater than 1 lies to the right of 1 on the number line. For example, 5/4 is one whole and one-fourth." }
      ]
    },
    {
      id: "mixed-improper",
      title: "Converting Mixed Numbers and Improper Fractions",
      blocks: [
        { type: "method", title: "Mixed to Improper", text: "For a mixed number a b/c, multiply the whole number a by c, add b, and place the result over c. Thus 2 1/3 = (2×3+1)/3 = 7/3." },
        { type: "method", title: "Improper to Mixed", text: "Divide the numerator by the denominator. The quotient is the whole part and the remainder becomes the numerator of the proper fraction, with the same denominator." },
        { type: "example", title: "Example", text: "11/4 = 2 3/4 because 11 ÷ 4 gives quotient 2 and remainder 3." }
      ]
    },
    {
      id: "addition-same",
      title: "Adding Fractions with the Same Denominator",
      blocks: [
        { type: "paragraph", text: "When fractions have the same denominator, add their numerators and keep the common denominator." },
        { type: "example", title: "Example", text: "2/7 + 3/7 = 5/7." },
        { type: "warning", title: "Do Not Add Denominators", text: "The denominator describes the size of each equal part, so 2/7 + 3/7 is not 5/14." }
      ]
    },
    {
      id: "subtract-same",
      title: "Subtracting Fractions with the Same Denominator",
      blocks: [
        { type: "paragraph", text: "For fractions with the same denominator, subtract the numerators and keep the denominator." },
        { type: "example", title: "Example", text: "6/11 − 2/11 = 4/11." },
        { type: "tip", title: "Check the Result", text: "For positive fractions where the first fraction is larger, the answer should not be negative." }
      ]
    },
    {
      id: "addition-different",
      title: "Adding and Subtracting with Different Denominators",
      blocks: [
        { type: "paragraph", text: "Fractions with different denominators represent pieces of different sizes. Before adding or subtracting, rewrite them as equivalent fractions with a common denominator." },
        { type: "example", title: "Example", text: "1/2 + 1/3 = 3/6 + 2/6 = 5/6." },
        { type: "example", title: "Subtraction", text: "3/4 − 1/6 = 9/12 − 2/12 = 7/12." },
        { type: "method", title: "Reliable Steps", text: "Find a common denominator, convert each fraction, perform the addition or subtraction on numerators, and simplify if possible." }
      ]
    },
    {
      id: "fraction-of-quantity",
      title: "Fraction of a Quantity",
      blocks: [
        { type: "paragraph", text: "A fraction can describe part of a collection. To find a simple fraction of a quantity, divide the quantity by the denominator and multiply by the numerator." },
        { type: "example", title: "Example", text: "To find 3/5 of 20, first find 1/5 of 20 = 4, then take 3 parts: 3 × 4 = 12." },
        { type: "application", title: "Everyday Use", text: "Fractions of quantities occur in sharing, recipes, distances, money and groups of objects." }
      ]
    },
    {
      id: "real-life",
      title: "Fractions in Real Life",
      blocks: [
        { type: "paragraph", text: "Fractions are used when sharing food, measuring ingredients, describing portions of a journey, reading time and comparing quantities." },
        { type: "example", title: "Recipe", text: "A recipe may require 3/4 cup of an ingredient. The fraction tells how much of one whole cup is needed." },
        { type: "example", title: "Distance", text: "If a journey is 5 km long and 2/5 has been completed, the fraction describes the part of the total journey already covered." }
      ]
    },
    {
      id: "summary",
      title: "Chapter Summary",
      blocks: [
        { type: "summary", text: "Fractions represent equal parts of a whole or collection. The numerator counts selected parts and the denominator tells the total equal parts in one whole. Fractions can be proper, improper or mixed. Equivalent fractions have the same value. Fractions can be compared, ordered, located on number lines, converted between mixed and improper forms, and added or subtracted by using common denominators when needed." },
        { type: "important", title: "Key Takeaway", text: "Always think about the size of the equal parts before comparing or operating with fractions, and keep the meaning of the denominator clear." }
      ]
    }
  ],

  importantPoints: [
    "A fraction describes equal parts of a whole or collection.",
    "The numerator is above the fraction bar.",
    "The denominator is below the fraction bar.",
    "A proper fraction has numerator smaller than denominator.",
    "An improper fraction has numerator greater than or equal to denominator.",
    "A mixed number contains a whole number and a proper fraction.",
    "Equivalent fractions have the same value.",
    "Multiply or divide numerator and denominator by the same non-zero number to create an equivalent fraction.",
    "A fraction in simplest form has no common factor greater than 1 between numerator and denominator.",
    "With the same positive denominator, the larger numerator gives the larger fraction.",
    "With the same positive numerator, the smaller denominator gives the larger fraction.",
    "Fractions with different denominators can be compared using equivalent fractions or a common denominator.",
    "For addition or subtraction, use a common denominator when denominators differ.",
    "Do not add or subtract denominators directly.",
    "Perimeter and area are different measurements; fractions can be used with both."
  ],

  keyTerms: [
    "Fraction",
    "Numerator",
    "Denominator",
    "Proper Fraction",
    "Improper Fraction",
    "Mixed Number",
    "Unit Fraction",
    "Equivalent Fractions",
    "Simplest Form",
    "Common Denominator",
    "Numerator",
    "Fraction of a Quantity"
  ],

  revisionQuestions: [
    { question: "What do the numerator and denominator tell us?" },
    { question: "What is a proper fraction?" },
    { question: "What is an improper fraction?" },
    { question: "What is a mixed number?" },
    { question: "What are equivalent fractions?" },
    { question: "How can a fraction be simplified?" },
    { question: "How do you compare fractions with the same denominator?" },
    { question: "How do you add fractions with the same denominator?" },
    { question: "Why do we need a common denominator for fractions with different denominators?" },
    { question: "How can you find a fraction of a quantity?" }
  ],

  flashcards: [
    { front: "What is a numerator?", back: "The top number; it tells how many equal parts are being considered." },
    { front: "What is a denominator?", back: "The bottom number; it tells how many equal parts make one whole." },
    { front: "What is a proper fraction?", back: "A fraction whose numerator is smaller than its denominator." },
    { front: "What is an improper fraction?", back: "A fraction whose numerator is greater than or equal to its denominator." },
    { front: "What is a mixed number?", back: "A whole number together with a proper fraction." },
    { front: "What are equivalent fractions?", back: "Fractions with the same value." },
    { front: "What is simplest form?", back: "A form where numerator and denominator have no common factor greater than 1." },
    { front: "How do you add same-denominator fractions?", back: "Add the numerators and keep the denominator." },
    { front: "Why use a common denominator?", back: "It makes the fractional parts the same size before adding, subtracting or comparing." },
    { front: "How do you find 3/5 of 20?", back: "Find 1/5 of 20 = 4, then multiply by 3 to get 12." }
  ]
};
