window.ChapterData = {
  id: "7-mathematics-arithmetic-expressions",
  class: 7,
  subject: "Mathematics",
  chapterNumber: 2,
  title: "Arithmetic Expressions",

  description:
    "Explore arithmetic expressions, operations, brackets, order of operations and step-by-step evaluation.",

  sections: [

 {
  title: "Understanding Arithmetic Expressions",
  blocks: [

    {
      type: "concept",
      title: "What is an Arithmetic Expression?",
      text: "An arithmetic expression is a mathematical phrase made up of numbers, arithmetic operations and sometimes brackets. It represents a calculation that can be evaluated to obtain a numerical value. For example, 8 + 5, 24 ÷ 6 and 7 × (3 + 2) are arithmetic expressions."
    },

    {
      type: "definition",
      title: "Arithmetic Expression",
      text: "An arithmetic expression is a combination of numbers and mathematical operations that represents a calculation."
    },

    {
      type: "concept",
      title: "Numbers and Operators",
      text: "Arithmetic expressions are formed using numbers and operators. The numbers are the values on which calculations are performed, while operators tell us which operation to perform."
    },

    {
      type: "numberTable",
      title: "Basic Arithmetic Operators",
      rows: [
        ["Operator", "Name", "Example"],
        ["+", "Addition", "8 + 5 = 13"],
        ["−", "Subtraction", "12 − 7 = 5"],
        ["×", "Multiplication", "6 × 4 = 24"],
        ["÷", "Division", "20 ÷ 5 = 4"]
      ]
    },

    {
      type: "concept",
      title: "Parts of an Expression",
      text: "The numbers in an arithmetic expression are called terms or values, and the symbols such as +, −, × and ÷ are called operators. Understanding the role of each part helps us read and simplify expressions correctly."
    },

    {
      type: "workedExample",
      title: "Solved Example 1",
      question: "Identify the numbers and operators in 18 + 6 × 4.",
      steps: [
        "The numbers are 18, 6 and 4.",
        "The operators are + and ×.",
        "Therefore, the expression contains three numerical values and two arithmetic operators."
      ]
    },

    {
      type: "concept",
      title: "Simple Expressions",
      text: "An expression containing only one arithmetic operation is a simple arithmetic expression. Examples include 25 + 15, 40 − 18, 7 × 9 and 72 ÷ 8."
    },

    {
      type: "workedExample",
      title: "Solved Example 2",
      question: "Evaluate 36 + 24.",
      steps: [
        "Identify the operation: addition.",
        "Add the two numbers.",
        "36 + 24 = 60.",
        "Therefore, the value of the expression is 60."
      ]
    },

    {
      type: "concept",
      title: "Expressions with More Than One Operation",
      text: "Some arithmetic expressions contain two or more operations. In such expressions, we cannot simply calculate from left to right without considering the correct order of operations. For example, in 8 + 4 × 3, multiplication must be considered before addition."
    },

    {
      type: "formula",
      title: "Important Rule",
      text: "When an expression contains different arithmetic operations, follow the correct order of operations instead of performing the operations randomly."
    },

    {
      type: "workedExample",
      title: "Solved Example 3",
      question: "Evaluate 8 + 4 × 3.",
      steps: [
        "There are two operations: addition and multiplication.",
        "Perform multiplication first.",
        "4 × 3 = 12.",
        "Now add 8.",
        "8 + 12 = 20.",
        "Answer: 20."
      ]
    },

    {
      type: "concept",
      title: "Using Brackets",
      text: "Brackets are used to group numbers and operations together. They tell us that the expression inside the brackets should be considered first. Brackets can therefore change the value of an arithmetic expression."
    },

    {
      type: "workedExample",
      title: "Solved Example 4",
      question: "Evaluate 5 × (6 + 2).",
      steps: [
        "First solve the expression inside the brackets.",
        "6 + 2 = 8.",
        "Now multiply 5 by 8.",
        "5 × 8 = 40.",
        "Answer: 40."
      ]
    },

    {
      type: "comparison",
      title: "Why Brackets Matter",
      rows: [
        ["Expression", "Value"],
        ["5 × (6 + 2)", "40"],
        ["5 × 6 + 2", "32"]
      ]
    },

    {
      type: "concept",
      title: "Arithmetic Expressions in Daily Life",
      text: "Arithmetic expressions are used whenever we calculate prices, quantities, distances, time, marks or measurements. Writing a situation as an expression can make a problem easier to understand and solve."
    },

    {
      type: "example",
      title: "Real-Life Example",
      text: "If one notebook costs ₹25 and a student buys 4 notebooks, the total cost can be represented by the expression 4 × 25 = 100. Therefore, the student spends ₹100."
    },

    {
      type: "practice",
      title: "Quick Practice",
      questions: [
        "1. Identify the operators in 15 + 8 × 2.",
        "2. Evaluate 45 − 18.",
        "3. Evaluate 7 × (5 + 3).",
        "4. Evaluate 30 ÷ 5 + 4.",
        "5. Write an arithmetic expression for: 6 packets containing 12 pencils each."
      ]
    },

    {
      type: "warning",
      title: "Common Mistake",
      text: "Do not perform operations in a random order when an expression contains more than one operation. Always follow the correct order of operations and pay special attention to brackets."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "First identify all numbers, operators and brackets in an expression. Then follow the correct order of operations step by step and write every important intermediate result."
    }

  ]
},

{
  title: "Order of Operations",
  blocks: [

    {
      type: "concept",
      title: "Why Do We Need an Order?",
      text: "An arithmetic expression may contain several operations. If different people perform those operations in different orders, they may get different answers. To avoid confusion, mathematics follows a fixed order of operations. This gives one definite value to an expression."
    },

    {
      type: "concept",
      title: "The Order of Operations",
      text: "When an expression contains brackets and different arithmetic operations, follow this order: first solve the expressions inside brackets, then perform multiplication and division, and finally perform addition and subtraction. When operations have the same priority, work from left to right."
    },

    {
      type: "formula",
      title: "Order of Operations",
      text: "Brackets → Multiplication and Division → Addition and Subtraction"
    },

    {
      type: "numberTable",
      title: "Priority of Operations",
      rows: [
        ["Step", "Operation", "What to Do"],
        ["1", "Brackets", "Solve the operations inside brackets first."],
        ["2", "Multiplication / Division", "Perform these from left to right."],
        ["3", "Addition / Subtraction", "Perform these from left to right."]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 1",
      question: "Evaluate 12 + 6 × 4.",
      steps: [
        "There are addition and multiplication operations.",
        "Multiplication has higher priority than addition.",
        "First calculate 6 × 4 = 24.",
        "Now calculate 12 + 24 = 36.",
        "Answer: 36."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 2",
      question: "Evaluate 30 − 18 ÷ 3.",
      steps: [
        "There are subtraction and division operations.",
        "Division has higher priority than subtraction.",
        "First calculate 18 ÷ 3 = 6.",
        "Now calculate 30 − 6 = 24.",
        "Answer: 24."
      ]
    },

    {
      type: "concept",
      title: "Multiplication and Division Have Equal Priority",
      text: "Multiplication and division have the same priority. When both occur in an expression without brackets, perform them from left to right."
    },

    {
      type: "workedExample",
      title: "Solved Example 3",
      question: "Evaluate 48 ÷ 6 × 2.",
      steps: [
        "Division and multiplication have equal priority.",
        "Start from the left.",
        "48 ÷ 6 = 8.",
        "Now multiply: 8 × 2 = 16.",
        "Answer: 16."
      ]
    },

    {
      type: "concept",
      title: "Addition and Subtraction Have Equal Priority",
      text: "Addition and subtraction also have the same priority. When both occur in an expression, perform them from left to right."
    },

    {
      type: "workedExample",
      title: "Solved Example 4",
      question: "Evaluate 50 − 20 + 5.",
      steps: [
        "Addition and subtraction have equal priority.",
        "Start from the left.",
        "50 − 20 = 30.",
        "Now add 5.",
        "30 + 5 = 35.",
        "Answer: 35."
      ]
    },

    {
      type: "concept",
      title: "Brackets Change the Order",
      text: "Brackets have the highest priority in the basic order of operations. The expression inside brackets must be evaluated before the operations outside them."
    },

    {
      type: "workedExample",
      title: "Solved Example 5",
      question: "Evaluate 7 × (8 − 3) + 4.",
      steps: [
        "First solve the brackets.",
        "8 − 3 = 5.",
        "The expression becomes 7 × 5 + 4.",
        "Perform multiplication: 7 × 5 = 35.",
        "Now add 4.",
        "35 + 4 = 39.",
        "Answer: 39."
      ]
    },

    {
      type: "comparison",
      title: "Correct and Incorrect Approach",
      rows: [
        ["Expression", "Correct Value"],
        ["12 + 6 × 4", "36"],
        ["(12 + 6) × 4", "72"],
        ["30 − 18 ÷ 3", "24"],
        ["(30 − 18) ÷ 3", "4"]
      ]
    },

    {
      type: "concept",
      title: "Step-by-Step Evaluation",
      text: "Writing each step separately is useful when evaluating a complicated expression. It reduces calculation mistakes and makes it clear which operation was performed first."
    },

    {
      type: "practice",
      title: "Quick Practice",
      questions: [
        "1. Evaluate 15 + 5 × 3.",
        "2. Evaluate 40 − 24 ÷ 6.",
        "3. Evaluate 36 ÷ 6 × 4.",
        "4. Evaluate 20 + 15 − 8.",
        "5. Evaluate 6 × (7 + 3).",
        "6. Evaluate 50 − (12 + 8) ÷ 4."
      ]
    },

    {
      type: "fact",
      title: "Math Fact",
      text: "The order of operations ensures that the same arithmetic expression has the same value regardless of who solves it."
    },

    {
      type: "warning",
      title: "Common Mistake",
      text: "Do not automatically calculate an expression from left to right when it contains operations with different priorities. Multiplication and division must be handled before addition and subtraction, unless brackets change the order."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Remember the basic sequence: Brackets first, then multiplication and division from left to right, and finally addition and subtraction from left to right."
    }

  ]
},

{
  title: "Using Brackets and Grouping Symbols",
  blocks: [

    {
      type: "concept",
      title: "Why Do We Use Brackets?",
      text: "Brackets are used in arithmetic expressions to group numbers and operations together. They tell us which part of an expression must be evaluated first. Brackets are especially useful when an expression contains several operations and we want to make the intended order clear."
    },

    {
      type: "definition",
      title: "Grouping Symbols",
      text: "Grouping symbols are symbols used to show which numbers and operations should be considered together. Brackets are the most common grouping symbols used in arithmetic expressions."
    },

    {
      type: "numberTable",
      title: "Common Brackets",
      rows: [
        ["Symbol", "Name", "Example"],
        ["( )", "Round brackets / Parentheses", "(8 + 4)"],
        ["[ ]", "Square brackets", "[12 − 5]"],
        ["{ }", "Curly brackets / Braces", "{15 ÷ 3}"]
      ]
    },

    {
      type: "concept",
      title: "Brackets Have Priority",
      text: "When brackets occur in an arithmetic expression, the operations inside the brackets are performed before the operations outside them. This can change the value of an expression significantly."
    },

    {
      type: "workedExample",
      title: "Solved Example 1",
      question: "Evaluate 6 × (4 + 5).",
      steps: [
        "First solve the expression inside the brackets.",
        "4 + 5 = 9.",
        "The expression becomes 6 × 9.",
        "Now multiply.",
        "6 × 9 = 54.",
        "Answer: 54."
      ]
    },

    {
      type: "comparison",
      title: "Effect of Brackets",
      rows: [
        ["Expression", "Value"],
        ["6 × (4 + 5)", "54"],
        ["6 × 4 + 5", "29"]
      ]
    },

    {
      type: "concept",
      title: "More Than One Grouping Symbol",
      text: "Some expressions contain more than one type of grouping symbol. In such cases, solve the innermost grouping first and then move outward. This allows a complicated expression to be simplified step by step."
    },

    {
      type: "workedExample",
      title: "Solved Example 2",
      question: "Evaluate 5 × [8 + (6 − 2)].",
      steps: [
        "Start with the innermost brackets.",
        "6 − 2 = 4.",
        "The expression becomes 5 × [8 + 4].",
        "Now solve the square brackets.",
        "8 + 4 = 12.",
        "The expression becomes 5 × 12.",
        "5 × 12 = 60.",
        "Answer: 60."
      ]
    },

    {
      type: "concept",
      title: "Nested Brackets",
      text: "When one set of brackets is placed inside another set, they are called nested brackets. We always begin with the innermost brackets and then simplify the outer brackets."
    },

    {
      type: "workedExample",
      title: "Solved Example 3",
      question: "Evaluate 20 − [3 × (4 + 2)].",
      steps: [
        "First solve the round brackets.",
        "4 + 2 = 6.",
        "The expression becomes 20 − [3 × 6].",
        "Now solve the square brackets.",
        "3 × 6 = 18.",
        "Finally calculate 20 − 18.",
        "Answer: 2."
      ]
    },

    {
      type: "concept",
      title: "Brackets in Word Problems",
      text: "Brackets can also be used to represent real-life situations clearly. They help show that a group of quantities must be calculated together before another operation is performed."
    },

    {
      type: "workedExample",
      title: "Solved Example 4",
      question: "A shop sells a notebook for ₹30 and a pen for ₹10. If a student buys 4 sets, where each set contains one notebook and one pen, find the total cost.",
      steps: [
        "Cost of one set = 30 + 10.",
        "Cost of one set = ₹40.",
        "There are 4 sets.",
        "Total cost = 4 × (30 + 10).",
        "4 × 40 = 160.",
        "Answer: ₹160."
      ]
    },

    {
      type: "concept",
      title: "Removing Brackets Carefully",
      text: "At this level, the main purpose of brackets is to show grouping and order. Before performing any operation outside the brackets, simplify the expression inside them. This prevents mistakes and keeps the calculation organized."
    },

    {
      type: "practice",
      title: "Quick Practice",
      questions: [
        "1. Evaluate 8 × (5 + 3).",
        "2. Evaluate 25 − (6 + 4).",
        "3. Evaluate 7 × [10 − (6 − 2)].",
        "4. Evaluate 40 ÷ (5 + 3).",
        "5. Evaluate 12 + [4 × (7 − 2)].",
        "6. A box contains 8 pencils and 4 erasers. If there are 5 such boxes, write an expression and find the total number of items."
      ]
    },

    {
      type: "warning",
      title: "Common Mistake",
      text: "Do not ignore brackets or solve the outside operation first. Always simplify the innermost brackets before moving to the outer part of the expression."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "When brackets are present, mark the innermost bracket first, solve it completely, substitute the result and then continue with the remaining operations."
    }

  ]
},

{
  title: "Simplifying and Evaluating Arithmetic Expressions",
  blocks: [

    {
      type: "concept",
      title: "What Does It Mean to Simplify?",
      text: "To simplify an arithmetic expression means to perform the required operations in the correct order and write the expression in its simplest numerical form. A complicated expression can usually be reduced to a single number by following the rules of arithmetic."
    },

    {
      type: "concept",
      title: "Step-by-Step Evaluation",
      text: "When an expression contains several operations, it is helpful to solve it one step at a time. First identify any brackets, then perform multiplication or division as required, and finally perform addition or subtraction. Writing each step clearly reduces the chance of calculation errors."
    },

    {
      type: "formula",
      title: "Basic Order of Operations",
      text: "Brackets → Multiplication and Division → Addition and Subtraction"
    },

    {
      type: "workedExample",
      title: "Solved Example 1",
      question: "Evaluate 18 + 6 × 5 − 8.",
      steps: [
        "There are multiplication, addition and subtraction operations.",
        "Perform multiplication first: 6 × 5 = 30.",
        "The expression becomes 18 + 30 − 8.",
        "Work from left to right for addition and subtraction.",
        "18 + 30 = 48.",
        "48 − 8 = 40.",
        "Answer: 40."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 2",
      question: "Evaluate 72 ÷ 8 + 6 × 3.",
      steps: [
        "There are division, addition and multiplication operations.",
        "Perform division: 72 ÷ 8 = 9.",
        "Perform multiplication: 6 × 3 = 18.",
        "The expression becomes 9 + 18.",
        "9 + 18 = 27.",
        "Answer: 27."
      ]
    },

    {
      type: "concept",
      title: "Expressions Containing Brackets",
      text: "When brackets are present, the expression inside the brackets must be simplified first. After removing the brackets by evaluating them, continue with multiplication, division, addition and subtraction according to their priority."
    },

    {
      type: "workedExample",
      title: "Solved Example 3",
      question: "Evaluate 4 × (12 − 7) + 9.",
      steps: [
        "First solve the brackets.",
        "12 − 7 = 5.",
        "The expression becomes 4 × 5 + 9.",
        "Perform multiplication: 4 × 5 = 20.",
        "Now add 9.",
        "20 + 9 = 29.",
        "Answer: 29."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 4",
      question: "Evaluate 60 − [18 ÷ (3 + 3)].",
      steps: [
        "First solve the round brackets.",
        "3 + 3 = 6.",
        "The expression becomes 60 − [18 ÷ 6].",
        "Now perform the division.",
        "18 ÷ 6 = 3.",
        "Finally, calculate 60 − 3.",
        "Answer: 57."
      ]
    },

    {
      type: "concept",
      title: "Expressions with the Same Priority",
      text: "When multiplication and division occur together, perform them from left to right. Similarly, when addition and subtraction occur together, perform them from left to right. This rule is important because changing the order can change the answer."
    },

    {
      type: "workedExample",
      title: "Solved Example 5",
      question: "Evaluate 96 ÷ 8 × 3.",
      steps: [
        "Division and multiplication have the same priority.",
        "Start from the left.",
        "96 ÷ 8 = 12.",
        "Now multiply: 12 × 3 = 36.",
        "Answer: 36."
      ]
    },

    {
      type: "concept",
      title: "Using Expressions to Solve Problems",
      text: "Arithmetic expressions are useful for representing real-life situations. Instead of solving a problem through many separate calculations, we can sometimes write one expression that represents the entire situation."
    },

    {
      type: "workedExample",
      title: "Solved Example 6",
      question: "A shopkeeper has 5 boxes. Each box contains 24 pencils. He sells 18 pencils. How many pencils remain?",
      steps: [
        "First find the total number of pencils: 5 × 24.",
        "5 × 24 = 120.",
        "Then subtract the pencils sold.",
        "120 − 18 = 102.",
        "The complete expression is (5 × 24) − 18.",
        "Answer: 102 pencils."
      ]
    },

    {
      type: "concept",
      title: "Checking an Answer",
      text: "After evaluating an expression, it is useful to check whether the answer is reasonable. We can estimate the values or perform the calculation again using another method. If the result seems unexpectedly large or small, check the order of operations and arithmetic calculations."
    },

    {
      type: "practice",
      title: "Quick Practice",
      questions: [
        "1. Evaluate 25 + 8 × 4.",
        "2. Evaluate 90 ÷ 9 + 7.",
        "3. Evaluate 15 × (8 − 3).",
        "4. Evaluate 50 − [6 × (4 + 2)].",
        "5. Evaluate 84 ÷ 7 × 5.",
        "6. A shop has 8 boxes containing 15 notebooks each. It sells 25 notebooks. Write an expression and find the number of notebooks left."
      ]
    },

    {
      type: "warning",
      title: "Common Mistake",
      text: "Do not combine operations randomly. In particular, avoid solving addition before multiplication or division unless brackets specifically require it. Also remember that multiplication and division, as well as addition and subtraction, are handled from left to right when they have equal priority."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Write one operation per step. Solve brackets first, then multiplication and division from left to right, and finally addition and subtraction from left to right. This method makes your working easy to check."
    }

  ]
},

{
  title: "Using Arithmetic Expressions in Real-Life Problems",
  blocks: [

    {
      type: "concept",
      title: "Expressions as Mathematical Models",
      text: "Arithmetic expressions can be used to represent situations from everyday life. Instead of performing many separate calculations, we can describe a situation using numbers, operations and brackets. Once the expression is written correctly, it can be evaluated step by step to find the required answer."
    },

    {
      type: "concept",
      title: "Identifying the Operations",
      text: "Before writing an expression for a word problem, identify what is happening. Words such as 'total', 'altogether' and 'in all' usually indicate addition. Words such as 'left', 'difference' and 'remaining' usually indicate subtraction. Words such as 'each', 'every' and 'groups of' often indicate multiplication, while 'equally', 'per group' and 'shared' often indicate division."
    },

    {
      type: "numberTable",
      title: "Common Words and Operations",
      rows: [
        ["Words or Phrases", "Possible Operation"],
        ["Total, altogether, in all", "Addition (+)"],
        ["Difference, left, remaining", "Subtraction (−)"],
        ["Each, every, groups of", "Multiplication (×)"],
        ["Equally, shared, per group", "Division (÷)"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 1",
      question: "A school buys 8 boxes of pencils. Each box contains 24 pencils. The school gives away 35 pencils. How many pencils are left?",
      steps: [
        "First find the total number of pencils.",
        "There are 8 boxes with 24 pencils each.",
        "Total pencils = 8 × 24 = 192.",
        "Now subtract the 35 pencils given away.",
        "Expression = (8 × 24) − 35.",
        "192 − 35 = 157.",
        "Answer: 157 pencils are left."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 2",
      question: "A family buys 3 notebooks for ₹45 each and 2 pens for ₹20 each. Find the total amount spent.",
      steps: [
        "Cost of notebooks = 3 × 45 = ₹135.",
        "Cost of pens = 2 × 20 = ₹40.",
        "Total cost = 135 + 40.",
        "The complete expression is (3 × 45) + (2 × 20).",
        "135 + 40 = 175.",
        "Answer: ₹175."
      ]
    },

    {
      type: "concept",
      title: "Using Brackets to Show Groups",
      text: "Brackets are especially useful when a word problem contains a group of quantities that must be calculated together. They make the structure of the expression clear and prevent the wrong operation from being performed first."
    },

    {
      type: "workedExample",
      title: "Solved Example 3",
      question: "A teacher buys 5 packs. Each pack contains 12 pencils and 8 erasers. How many items are there altogether?",
      steps: [
        "Items in one pack = 12 + 8.",
        "Items in one pack = 20.",
        "There are 5 packs.",
        "Expression = 5 × (12 + 8).",
        "5 × 20 = 100.",
        "Answer: 100 items."
      ]
    },

    {
      type: "concept",
      title: "Expressions with Division",
      text: "Division is useful when a quantity is shared equally or divided into equal groups. The expression should represent the complete situation clearly before it is evaluated."
    },

    {
      type: "workedExample",
      title: "Solved Example 4",
      question: "A teacher has 144 chocolates and distributes them equally among 12 students. Each student then receives 3 extra chocolates. How many chocolates does each student receive?",
      steps: [
        "First divide the chocolates equally among the students.",
        "144 ÷ 12 = 12.",
        "Each student receives 12 chocolates initially.",
        "Then 3 chocolates are added.",
        "Expression = (144 ÷ 12) + 3.",
        "12 + 3 = 15.",
        "Answer: Each student receives 15 chocolates."
      ]
    },

    {
      type: "concept",
      title: "Choosing the Correct Expression",
      text: "The same numbers can form different expressions with different meanings. Therefore, we must understand the situation before selecting the operations. A correct expression should represent the relationships described in the question."
    },

    {
      type: "comparison",
      title: "Different Expressions, Different Meanings",
      rows: [
        ["Expression", "Meaning"],
        ["4 × (10 + 5)", "Four groups, each containing 10 and 5 together"],
        ["4 × 10 + 5", "Four groups of 10, followed by 5 more"],
        ["(40 + 20) ÷ 5", "The total 60 shared equally among 5 groups"],
        ["40 + 20 ÷ 5", "20 is divided by 5 before adding 40"]
      ]
    },

    {
      type: "concept",
      title: "A General Problem-Solving Method",
      text: "To solve a word problem using an arithmetic expression, first understand the situation, identify the quantities, decide which operations are needed, use brackets when necessary, write the expression and then evaluate it according to the correct order of operations."
    },

    {
      type: "list",
      title: "Steps to Solve Word Problems",
      items: [
        "Read the problem carefully.",
        "Identify the known quantities.",
        "Understand what is being asked.",
        "Choose the required operations.",
        "Write a suitable arithmetic expression.",
        "Use brackets where necessary.",
        "Evaluate the expression step by step.",
        "Write the answer with the correct unit."
      ]
    },

    {
      type: "practice",
      title: "Final Practice",
      questions: [
        "1. A shop has 6 boxes with 25 toys in each box. It sells 40 toys. Write an expression and find the number of toys left.",
        "2. A student buys 4 books for ₹75 each and one bag for ₹500. Find the total cost using an expression.",
        "3. 240 students are divided equally into 8 groups. Each group receives 5 additional worksheets. Write and evaluate an expression for the number of worksheets received by each group.",
        "4. A farmer packs 15 apples in each of 8 boxes and then sells 20 apples. How many apples remain?",
        "5. Explain why brackets are useful when writing arithmetic expressions for word problems."
      ]
    },

    {
      type: "fact",
      title: "Math Fact",
      text: "A well-written arithmetic expression can summarize a real-life situation in a compact mathematical form. This is one reason expressions are useful in mathematics."
    },

    {
      type: "warning",
      title: "Common Mistake",
      text: "Do not choose an operation only because a particular word appears in the question. Always understand the complete situation first. Also remember to include the correct unit in the final answer."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For word problems, first translate the situation into an expression and then calculate. If a group of quantities must be handled together, use brackets to make the intended order clear."
    }

  ]
}    
    ],

 importantPoints: [
  "An arithmetic expression is a mathematical combination of numbers, operators and grouping symbols used to represent a calculation.",
  "The four basic arithmetic operations are addition, subtraction, multiplication and division.",
  "The symbols +, −, × and ÷ are called arithmetic operators.",
  "An expression may contain one operation or several operations together.",
  "The value of an arithmetic expression is obtained by performing the indicated operations correctly.",
  "Brackets are used to group numbers and operations and can change the value of an expression.",
  "The expression inside brackets must be evaluated before the operations outside the brackets.",
  "When brackets are nested, begin with the innermost brackets and then move outward.",
  "Multiplication and division have priority over addition and subtraction.",
  "Multiplication and division have equal priority and are performed from left to right.",
  "Addition and subtraction have equal priority and are performed from left to right.",
  "The basic order of operations is: Brackets → Multiplication/Division → Addition/Subtraction.",
  "An expression should always be evaluated according to the correct order of operations.",
  "Changing the order of operations can produce a completely different answer.",
  "Arithmetic expressions can be used to represent real-life situations in a short mathematical form.",
  "Addition is useful for finding totals, combined quantities and amounts.",
  "Subtraction is useful for finding differences, remaining quantities and amounts left.",
  "Multiplication is useful when the same quantity is repeated or when equal groups are involved.",
  "Division is useful for equal sharing and finding the number or size of equal groups.",
  "Brackets are especially useful in word problems when a particular group of quantities must be calculated first.",
  "A word problem should be understood carefully before choosing the required arithmetic operations.",
  "The complete mathematical expression should represent the actual situation described in the question.",
  "Step-by-step calculation makes complicated expressions easier to understand and reduces calculation errors.",
  "Estimation can be used to check whether the final answer is reasonable.",
  "The final answer to a word problem should be written with the appropriate unit.",
  "Arithmetic expressions are useful in calculations involving money, quantities, objects, distance, time and measurements.",
  "Correct interpretation of an expression is as important as performing the calculation.",
  "A mathematical expression can make a long verbal calculation shorter, clearer and easier to solve.",
  "Careful use of brackets and operators is essential when constructing an arithmetic expression.",
  "Understanding arithmetic expressions builds a foundation for more advanced algebraic expressions."
],

keyTerms: [
  "Arithmetic Expression",
  "Arithmetic Operation",
  "Operator",
  "Term",
  "Addition",
  "Subtraction",
  "Multiplication",
  "Division",
  "Bracket",
  "Parentheses",
  "Grouping Symbol",
  "Order of Operations",
  "Evaluate",
  "Simplify",
  "Numerical Value",
  "Expression",
  "Word Problem",
  "Estimation",
  "Equal Priority",
  "Left to Right",
  "Calculation",
  "Quantity",
  "Grouping",
  "Mathematical Statement",
  "Operation Priority",
  "Real-Life Application",
  "Problem Solving",
  "Numerical Expression"
],

summary: "Arithmetic Expressions are combinations of numbers, arithmetic operations and grouping symbols used to represent mathematical calculations. Expressions may contain addition, subtraction, multiplication, division and brackets. To evaluate a complicated expression correctly, we follow a definite order of operations: first solve brackets, then perform multiplication and division from left to right, and finally perform addition and subtraction from left to right. Brackets help group quantities and can change the meaning and value of an expression. Arithmetic expressions are also useful for representing real-life situations such as shopping, equal sharing, repeated groups and finding remaining quantities. A good method for solving word problems is to understand the situation, identify the required operations, write a suitable expression, evaluate it step by step and include the correct unit in the final answer. Estimation can also be used to check whether the answer is reasonable. Understanding arithmetic expressions develops accuracy, logical thinking and problem-solving skills and provides an important foundation for more advanced mathematics."

}; 
