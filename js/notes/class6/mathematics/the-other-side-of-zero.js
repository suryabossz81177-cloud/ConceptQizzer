/*==================================================
  CONCEPT QUIZZER
  CLASS 6 • MATHEMATICS • CHAPTER 10
  Package 13.1.10 — The Other Side of Zero
==================================================*/
"use strict";

const ChapterData = {
  id: "class6-mathematics-the-other-side-of-zero",
  class: 6,
  subject: "Mathematics",
  chapterNumber: 10,
  title: "The Other Side of Zero",
  description: "Class 6 Mathematics Chapter 10 — integers, negative numbers, number lines, opposites, addition and subtraction of integers, and real-life applications.",
  estimatedReadingTime: "45–55 minutes",
  difficulty: "Intermediate",
  summary: "This chapter extends the number system to the other side of zero. It develops negative numbers and integers through number lines, opposites, comparison, addition, subtraction and real-life contexts.",
  sections: [
    {id:"integers",title:"The Other Side of Zero",blocks:[
      {type:"paragraph",title:"Overview",text:"Earlier we worked with numbers such as 0, 1, 2, 3 and fractions. This chapter introduces numbers on the other side of zero: negative numbers."},
      {type:"definition",title:"Integer",text:"Integers are whole numbers including negative numbers, zero and positive numbers: ..., -3, -2, -1, 0, 1, 2, 3, ..."},
      {type:"example",title:"Real-life situations",text:"Temperatures below 0°C, floors below ground level, losses, and positions west or south of a reference point can be represented using negative numbers."},
    ]},
    {id:"number-line",title:"The Number Line",blocks:[
      {type:"definition",title:"Complete number line",text:"A number line extends in both directions from zero. Positive numbers lie to the right of zero and negative numbers lie to the left."},
      {type:"important",title:"Equal spacing",text:"The distance between consecutive integers is equal. Numbers farther right are greater than numbers farther left."},
      {type:"example",title:"Opposites",text:"3 and -3 are opposites. They are the same distance from zero on opposite sides."},
      {type:"tip",title:"Use zero as reference",text:"When a situation has a reference level, treat that level as 0 and place values above and below it accordingly."},
    ]},
    {id:"compare-integers",title:"Comparing Integers",blocks:[
      {type:"definition",title:"Greater and smaller",text:"On a number line, the integer farther to the right is greater. The integer farther to the left is smaller."},
      {type:"example",title:"Negative numbers",text:"-2 is greater than -5 because -2 lies to the right of -5."},
      {type:"important",title:"Zero",text:"Zero is greater than every negative integer and less than every positive integer."},
      {type:"tip",title:"Think about distance from zero carefully",text:"For negative numbers, the one with the smaller absolute value is greater: -3 > -7."},
    ]},
    {id:"addition",title:"Addition of Integers",blocks:[
      {type:"definition",title:"Same signs",text:"When adding integers with the same sign, add their absolute values and keep the common sign."},
      {type:"definition",title:"Different signs",text:"When adding integers with different signs, subtract the smaller absolute value from the larger absolute value and keep the sign of the number with the larger absolute value."},
      {type:"example",title:"Examples",text:"(+5)+(+3)=+8; (-5)+(-3)=-8; (+7)+(-4)=+3; (-7)+(+4)=-3."},
      {type:"tip",title:"Number-line movement",text:"Adding a positive moves right on the number line; adding a negative moves left."},
    ]},
    {id:"additive-inverse",title:"Opposites and Additive Inverse",blocks:[
      {type:"definition",title:"Opposite",text:"The opposite of an integer is the integer at the same distance from zero on the other side."},
      {type:"definition",title:"Additive inverse",text:"The additive inverse of a number is its opposite. A number and its additive inverse add to zero."},
      {type:"example",title:"Examples",text:"The additive inverse of 8 is -8; the additive inverse of -12 is 12; 0 is its own additive inverse."},
      {type:"important",title:"Zero pair",text:"a + (-a) = 0 for every integer a."},
    ]},
    {id:"subtraction",title:"Subtraction of Integers",blocks:[
      {type:"definition",title:"Rewrite subtraction",text:"Subtracting an integer is equivalent to adding its opposite: a - b = a + (-b)."},
      {type:"example",title:"Examples",text:"8 - 3 = 8 + (-3) = 5; 8 - (-3) = 8 + 3 = 11; -4 - 6 = -4 + (-6) = -10."},
      {type:"tip",title:"Change subtraction to addition",text:"Keep the first number, change minus to plus, and change the sign of the second number."},
      {type:"important",title:"Check on a number line",text:"Subtracting a positive moves left; subtracting a negative moves right."},
    ]},
    {id:"floor-model",title:"Integers in Real Life",blocks:[
      {type:"example",title:"Building floors",text:"If ground floor is 0, floors above ground can be positive and basement floors can be negative."},
      {type:"example",title:"Temperature",text:"A temperature of -5°C is 5 degrees below 0°C, while +5°C is 5 degrees above 0°C."},
      {type:"example",title:"Money",text:"A credit can be represented by a positive amount and a debt or loss by a negative amount when a reference balance is chosen."},
      {type:"tip",title:"State the reference",text:"The meaning of a positive or negative value depends on what has been chosen as the zero or reference point."},
    ]},
    {id:"brahmagupta",title:"Brahmagupta’s Rules",blocks:[
      {type:"paragraph",title:"Brahmagupta",text:"Brahmagupta was an Indian mathematician who gave important rules for arithmetic involving positive and negative numbers."},
      {type:"important",title:"Addition",text:"The rules for combining signs can be understood using movement on the number line and the idea of opposites."},
      {type:"important",title:"Subtraction",text:"Subtracting a number is adding its opposite, which provides a reliable way to calculate with negative numbers."},
      {type:"tip",title:"Focus on meaning",text:"Rather than memorising isolated sign rules, rewrite subtraction as addition and use the number-line idea."},
    ]},
    {id:"mixed-practice",title:"Mixed Practice and Problem Solving",blocks:[
      {type:"example",title:"Ordering",text:"To arrange integers from least to greatest, place them from left to right on the number line."},
      {type:"example",title:"Missing values",text:"Use equal spacing and known opposites to find missing integers on a number line."},
      {type:"example",title:"Word problems",text:"Translate changes such as rise, fall, gain, loss, above and below a reference level into signed integers before calculating."},
      {type:"warning",title:"Sign mistakes",text:"Do not treat -8 as smaller in magnitude but greater in value than -3. On the number line, -8 is to the left of -3."},
    ]},
  ],
  importantPoints: [
    "Integers include negative numbers, zero and positive whole numbers.",
    "On a number line, positive integers are to the right of zero and negative integers are to the left.",
    "Among integers, the number farther to the right is greater.",
    "Zero is neither positive nor negative.",
    "Opposite integers are equally far from zero on opposite sides.",
    "A number plus its opposite is zero.",
    "When adding integers with the same sign, add absolute values and keep the sign.",
    "When adding integers with different signs, subtract absolute values and keep the sign of the larger absolute value.",
    "Subtracting an integer is the same as adding its opposite.",
    "Negative numbers can represent temperatures, levels, losses and other values below a chosen reference.",
  ],
  keyTerms: [
    {term:"Integer",definition:"A whole number that may be positive, negative or zero."},
    {term:"Positive integer",definition:"An integer greater than zero."},
    {term:"Negative integer",definition:"An integer less than zero."},
    {term:"Number line",definition:"A line on which numbers are placed at equal intervals in order."},
    {term:"Opposite",definition:"An integer the same distance from zero on the other side."},
    {term:"Additive inverse",definition:"The opposite of a number; a number and its additive inverse sum to zero."},
    {term:"Absolute value",definition:"The distance of a number from zero on the number line."},
    {term:"Reference point",definition:"The chosen value from which positions or changes are measured."},
  ],
  quickRevision: [
    "What are integers?",
    "Where are negative integers placed on a number line?",
    "Which is greater: -2 or -7?",
    "What is the opposite of 9?",
    "What is the additive inverse of -6?",
    "What is (-4)+(-5)?",
    "What is 7+(-10)?",
    "How can subtraction of an integer be rewritten?",
    "Why is zero its own additive inverse?",
    "Give two real-life situations where negative numbers are useful.",
  ],
  flashcards: [
    {front:"What is an integer?",back:"A whole number that can be negative, zero or positive."},
    {front:"Where are negative integers?",back:"To the left of zero on the number line."},
    {front:"Which is greater, -3 or -8?",back:"-3, because it lies farther to the right."},
    {front:"Opposite of 12?",back:"-12."},
    {front:"Opposite of -15?",back:"15."},
    {front:"What is 9 + (-4)?",back:"5."},
    {front:"What is (-6) + (-2)?",back:"-8."},
    {front:"What is 7 - (-3)?",back:"10."},
    {front:"What is -5 - 4?",back:"-9."},
    {front:"What is an additive inverse?",back:"The opposite of a number; adding a number to its additive inverse gives zero."},
    {front:"What is the absolute value of -11?",back:"11."},
    {front:"What can negative temperature mean?",back:"A temperature below the chosen zero, usually 0°C."},
  ]
};
