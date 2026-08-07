/*==========================================================
  Concept Quizzer
  Package 3
  File : js/data.js
==========================================================*/

"use strict";

const ConceptQuizzerData={

classes:[

{

id:6,

name:"Class 6",

description:"Foundation Level",

subjects:[

{

id:"mathematics",

name:"Mathematics",

icon:"🧮",

color:"#5b5cf0",

chapters:[

"Knowing Our Numbers",

"Whole Numbers",

"Playing with Numbers",

"Basic Geometrical Ideas",

"Understanding Elementary Shapes",

"Integers",

"Fractions",

"Decimals",

"Data Handling",

"Mensuration",

"Algebra",

"Ratio and Proportion",

"Symmetry",

"Practical Geometry"

]

},

{

id:"science",

name:"Science",

icon:"🧪",

color:"#22c55e",

chapters:[

"Food: Where Does It Come From?",

"Components of Food",

"Fibre to Fabric",

"Sorting Materials into Groups",

"Separation of Substances",

"Changes Around Us",

"Getting to Know Plants",

"Body Movements",

"The Living Organisms",

"Motion and Measurement",

"Light, Shadows and Reflections",

"Electricity and Circuits",

"Fun with Magnets",

"Water",

"Air Around Us",

"Garbage In, Garbage Out"

]

},

{

id:"social",

name:"Social Science",

icon:"🌍",

color:"#06b6d4",

chapters:[

"History",

"Geography",

"Civics"

]

}

]

},

{

id:7,

name:"Class 7",

description:"Middle School",

subjects:[

{

id:"mathematics",

name:"Mathematics",

icon:"🧮",

color:"#5b5cf0",

chapters:[

"Integers",

"Fractions and Decimals",

"Data Handling",

"Simple Equations",

"Lines and Angles",

"The Triangle and its Properties",

"Congruence of Triangles",

"Comparing Quantities",

"Rational Numbers",

"Practical Geometry",

"Perimeter and Area",

"Algebraic Expressions",

"Exponents and Powers",

"Symmetry",

"Visualising Solid Shapes"

]

},

{

id:"science",

name:"Science",

icon:"🧪",

color:"#22c55e",

chapters:[

"Nutrition in Plants",

"Nutrition in Animals",

"Heat",

"Acids, Bases and Salts",

"Physical and Chemical Changes",

"Respiration in Organisms",

"Transportation in Animals and Plants",

"Reproduction in Plants",

"Motion and Time",

"Electric Current and its Effects",

"Light",

"Forests",

"Wastewater Story"

]

},

{

id:"social",

name:"Social Science",

icon:"🌍",

color:"#06b6d4",

chapters:[

"History",

"Geography",

"Civics"

]

}

]

},

  {

id:8,

name:"Class 8",

description:"Concept Building",

subjects:[

{

id:"mathematics",

name:"Mathematics",

icon:"🧮",

color:"#5b5cf0",

chapters:[

"Rational Numbers",

"Linear Equations in One Variable",

"Understanding Quadrilaterals",

"Practical Geometry",

"Data Handling",

"Squares and Square Roots",

"Cubes and Cube Roots",

"Comparing Quantities",

"Algebraic Expressions and Identities",

"Visualising Solid Shapes",

"Mensuration",

"Exponents and Powers",

"Direct and Inverse Proportions",

"Factorisation",

"Introduction to Graphs",

"Playing with Numbers"

]

},

{

id:"science",

name:"Science",

icon:"🧪",

color:"#22c55e",

chapters:[

"Crop Production and Management",

"Microorganisms: Friend and Foe",

"Synthetic Fibres and Plastics",

"Materials: Metals and Non-metals",

"Coal and Petroleum",

"Combustion and Flame",

"Conservation of Plants and Animals",

"Cell Structure and Functions",

"Reproduction in Animals",

"Reaching the Age of Adolescence",

"Force and Pressure",

"Friction",

"Sound",

"Chemical Effects of Electric Current",

"Some Natural Phenomena",

"Light",

"Stars and the Solar System",

"Pollution of Air and Water"

]

},

{

id:"social",

name:"Social Science",

icon:"🌍",

color:"#06b6d4",

chapters:[

"History",

"Geography",

"Civics"

]

}

]

},

{

id:9,

name:"Class 9",

description:"Secondary Level",

subjects:[

{

id:"mathematics",

name:"Mathematics",

icon:"🧮",

color:"#5b5cf0",

chapters:[

"Number Systems",

"Polynomials",

"Coordinate Geometry",

"Linear Equations in Two Variables",

"Introduction to Euclid's Geometry",

"Lines and Angles",

"Triangles",

"Quadrilaterals",

"Circles",

"Heron's Formula",

"Surface Areas and Volumes",

"Statistics"

]

},

  {

id:"science",

name:"Science",

icon:"🧪",

color:"#22c55e",

chapters:[

"Matter in Our Surroundings",

"Is Matter Around Us Pure?",

"Atoms and Molecules",

"Structure of the Atom",

"The Fundamental Unit of Life",

"Tissues",

"Motion",

"Force and Laws of Motion",

"Gravitation",

"Work and Energy",

"Sound",

"Why Do We Fall Ill?",

"Natural Resources",

"Improvement in Food Resources"

]

},

{

id:"social",

name:"Social Science",

icon:"🌍",

color:"#06b6d4",

chapters:[

"History",

"Geography",

"Political Science",

"Economics"

]

}

]

},

{

id:10,

name:"Class 10",

description:"Board Preparation",

subjects:[

{

id:"mathematics",

name:"Mathematics",

icon:"🧮",

color:"#5b5cf0",

chapters:[

"Real Numbers",

"Polynomials",

"Pair of Linear Equations in Two Variables",

"Quadratic Equations",

"Arithmetic Progressions",

"Triangles",

"Coordinate Geometry",

"Introduction to Trigonometry",

"Applications of Trigonometry",

"Circles",

"Areas Related to Circles",

"Surface Areas and Volumes",

"Statistics",

"Probability"

]

},

{

id:"science",

name:"Science",

icon:"🧪",

color:"#22c55e",

chapters:[

"Chemical Reactions and Equations",

"Acids, Bases and Salts",

"Metals and Non-metals",

"Carbon and its Compounds",

"Life Processes",

"Control and Coordination",

"How do Organisms Reproduce?",

"Heredity",

"Light – Reflection and Refraction",

"The Human Eye and the Colourful World",

"Electricity",

"Magnetic Effects of Electric Current",

"Our Environment"

]

},

{

id:"social",

name:"Social Science",

icon:"🌍",

color:"#06b6d4",

chapters:[

"History",

"Geography",

"Political Science",

"Economics"

]

}

]

}

]

};

const AppState={

selectedClass:null,

selectedSubject:null,

selectedChapter:null,

bookmarks:[],

recentChapter:null,

darkMode:false

};

console.log(

"Concept Quizzer Data Loaded"

);
