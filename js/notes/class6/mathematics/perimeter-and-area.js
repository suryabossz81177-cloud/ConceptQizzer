/*==================================================
  CONCEPT QUIZZER
  CLASS 6 • MATHEMATICS • CHAPTER 6
  Package 13.1.6 — Perimeter and Area
==================================================*/
"use strict";

const ChapterData = {
  id: "class6-mathematics-perimeter-and-area",
  class: 6,
  subject: "Mathematics",
  chapterNumber: 6,
  title: "Perimeter and Area",

  description:
    "Class 6 Mathematics Chapter 6 — Perimeter and Area: understand boundaries, perimeter, area, standard units, rectangles, squares and real-life measurement problems.",

  estimatedReadingTime: "40–50 minutes",
  difficulty: "Intermediate",

  summary:
    "Perimeter measures the distance around a closed figure, while area measures the surface covered by a figure. This chapter develops these ideas through unit lengths, unit squares, rectangles, squares, composite shapes and everyday measurement situations.",

  sections: [
    {
      id: "boundary-and-perimeter",
      title: "Boundary and Perimeter",
      blocks: [
        { type: "paragraph", text: "The boundary of a closed figure is the line or path that goes around it. The total length of this boundary is called its perimeter." },
        { type: "definition", title: "Perimeter", text: "Perimeter is the total distance around a closed plane figure." },
        { type: "example", title: "Walking Around a Field", text: "If you walk once around the boundary of a rectangular field, the distance you walk is the perimeter of the field." },
        { type: "important", title: "Unit", text: "Perimeter is measured in units of length such as centimetres, metres and kilometres." }
      ]
    },
    {
      id: "perimeter-rectangle",
      title: "Perimeter of a Rectangle",
      blocks: [
        { type: "paragraph", text: "A rectangle has two equal lengths and two equal breadths. Therefore its perimeter can be found by adding all four sides." },
        { type: "formula", title: "Rectangle Formula", text: "Perimeter = length + breadth + length + breadth = 2 × (length + breadth)." },
        { type: "example", title: "Example", text: "For a rectangle of length 8 cm and breadth 5 cm, perimeter = 2 × (8 + 5) = 26 cm." },
        { type: "tip", title: "Quick Check", text: "A perimeter answer must be a length, so write a linear unit such as cm or m, not square centimetres." }
      ]
    },
    {
      id: "perimeter-square",
      title: "Perimeter of a Square",
      blocks: [
        { type: "paragraph", text: "All four sides of a square are equal. So its perimeter is four times the length of one side." },
        { type: "formula", title: "Square Formula", text: "Perimeter = 4 × side." },
        { type: "example", title: "Example", text: "If each side of a square is 7 cm, its perimeter is 4 × 7 = 28 cm." },
        { type: "application", title: "Finding the Side", text: "If the perimeter of a square is known, divide the perimeter by 4 to find its side length." }
      ]
    },
    {
      id: "area",
      title: "Understanding Area",
      blocks: [
        { type: "paragraph", text: "Area tells us how much surface is covered inside a closed figure. It can be understood by counting equal-sized square units that cover a region without gaps or overlaps." },
        { type: "definition", title: "Area", text: "Area is the measure of the surface enclosed by a plane figure." },
        { type: "example", title: "Unit Squares", text: "If a rectangle is completely covered by 24 unit squares, its area is 24 square units." },
        { type: "important", title: "Unit", text: "Area is measured in square units such as cm², m² and km²." }
      ]
    },
    {
      id: "area-rectangle",
      title: "Area of a Rectangle",
      blocks: [
        { type: "paragraph", text: "For a rectangle made of equal rows of unit squares, the number of squares equals the number of rows multiplied by the number of squares in each row." },
        { type: "formula", title: "Rectangle Area", text: "Area = length × breadth." },
        { type: "example", title: "Example", text: "A rectangle 9 m long and 4 m wide has area 9 × 4 = 36 m²." },
        { type: "warning", title: "Common Mistake", text: "Do not confuse area with perimeter. Area uses square units; perimeter uses ordinary length units." }
      ]
    },
    {
      id: "area-square",
      title: "Area of a Square",
      blocks: [
        { type: "paragraph", text: "A square has equal length and breadth. Therefore its area is the side multiplied by itself." },
        { type: "formula", title: "Square Area", text: "Area = side × side = side²." },
        { type: "example", title: "Example", text: "A square with side 6 cm has area 6 × 6 = 36 cm²." },
        { type: "tip", title: "Remember", text: "For a square, perimeter uses 4 × side while area uses side × side." }
      ]
    },
    {
      id: "units-and-conversion",
      title: "Units of Length and Area",
      blocks: [
        { type: "paragraph", text: "Choose units that match the size of the object being measured. Small objects are commonly measured in centimetres or millimetres, while rooms and fields are commonly measured in metres." },
        { type: "important", title: "Length vs Area Units", text: "Length uses units such as cm and m. Area uses square units such as cm² and m²." },
        { type: "example", title: "A Useful Conversion", text: "Since 1 m = 100 cm, a square measuring 1 m by 1 m has area 1 m² = 10,000 cm²." },
        { type: "warning", title: "Do Not Square the Conversion Incorrectly", text: "When converting an area, both dimensions must be converted before calculating, or the square-unit conversion must be used correctly." }
      ]
    },
    {
      id: "missing-dimensions",
      title: "Finding a Missing Length",
      blocks: [
        { type: "paragraph", text: "Perimeter and area formulas can be rearranged to find an unknown side when enough information is given." },
        { type: "example", title: "Unknown Breadth from Perimeter", text: "If a rectangle has perimeter 30 cm and length 10 cm, then 30 = 2 × (10 + breadth). Thus 15 = 10 + breadth, so breadth = 5 cm." },
        { type: "example", title: "Unknown Side of a Square", text: "If a square has perimeter 36 m, its side is 36 ÷ 4 = 9 m." },
        { type: "tip", title: "Solve Step by Step", text: "Write the correct formula first, substitute the known values, then isolate the unknown quantity." }
      ]
    },
    {
      id: "composite-and-boundary",
      title: "Perimeter of Joined Shapes",
      blocks: [
        { type: "paragraph", text: "Some figures are made by joining two or more rectangles or squares. To find the perimeter, trace only the outside boundary. A side lying completely inside the joined shape is not part of its outer perimeter." },
        { type: "example", title: "Joined Rectangles", text: "When two rectangles share a full side, that shared side is internal and should not be counted in the perimeter of the combined figure." },
        { type: "application", title: "Boundary Tracing", text: "A reliable method is to start at one corner and move around the outside edge without entering the interior." }
      ]
    },
    {
      id: "area-composite",
      title: "Area of Combined Shapes",
      blocks: [
        { type: "paragraph", text: "A complicated figure can sometimes be divided into familiar rectangles or squares. Find the area of each part and add them." },
        { type: "example", title: "Split and Add", text: "If a figure is divided into two non-overlapping rectangles with areas 24 cm² and 18 cm², the total area is 42 cm²." },
        { type: "application", title: "Missing Corner", text: "For a shape with a rectangular corner removed, find the area of the large rectangle and subtract the area of the missing part." }
      ]
    },
    {
      id: "real-life",
      title: "Perimeter and Area in Real Life",
      blocks: [
        { type: "paragraph", text: "Perimeter is useful when we need to fence, border or walk around something. Area is useful when we need to cover, paint, tile or measure a surface." },
        { type: "example", title: "Fencing", text: "The amount of fencing needed around a rectangular garden depends on its perimeter." },
        { type: "example", title: "Flooring", text: "The number of tiles or the amount of flooring material depends on the area of the floor." },
        { type: "application", title: "Choose the Right Measure", text: "Ask whether the problem is about the boundary or the surface. Boundary questions usually need perimeter; covering questions usually need area." }
      ]
    },
    {
      id: "summary",
      title: "Chapter Summary",
      blocks: [
        { type: "summary", text: "Perimeter is the total distance around a closed figure. Area measures the surface enclosed by a figure. For a rectangle, perimeter = 2 × (length + breadth) and area = length × breadth. For a square, perimeter = 4 × side and area = side². Always use length units for perimeter and square units for area." },
        { type: "important", title: "Key Takeaway", text: "If the question asks about a boundary, think perimeter. If it asks how much surface is covered, think area." }
      ]
    }
  ],

  importantPoints: [
    "Perimeter measures the total distance around a closed figure.",
    "Area measures the surface enclosed by a figure.",
    "Perimeter is written in linear units such as cm and m.",
    "Area is written in square units such as cm² and m².",
    "Rectangle perimeter = 2 × (length + breadth).",
    "Rectangle area = length × breadth.",
    "Square perimeter = 4 × side.",
    "Square area = side × side.",
    "For joined shapes, count only the outside boundary for perimeter.",
    "For composite areas, split the figure into familiar shapes when useful.",
    "Use perimeter for fencing or borders.",
    "Use area for covering, painting or tiling surfaces."
  ],

  keyTerms: [
    "Perimeter",
    "Area",
    "Boundary",
    "Length",
    "Breadth",
    "Square Unit",
    "Linear Unit",
    "Rectangle",
    "Square",
    "Composite Shape"
  ],

  revisionQuestions: [
    { question: "What is perimeter?" },
    { question: "What is area?" },
    { question: "Write the perimeter formula for a rectangle." },
    { question: "Write the area formula for a rectangle." },
    { question: "Write the perimeter formula for a square." },
    { question: "Write the area formula for a square." },
    { question: "Why are square units used for area?" },
    { question: "When would you use perimeter in real life?" },
    { question: "When would you use area in real life?" },
    { question: "How can a composite shape be handled?" }
  ],

  flashcards: [
    { front: "What is perimeter?", back: "The total distance around a closed figure." },
    { front: "What is area?", back: "The measure of the surface enclosed by a figure." },
    { front: "Rectangle perimeter?", back: "2 × (length + breadth)." },
    { front: "Rectangle area?", back: "length × breadth." },
    { front: "Square perimeter?", back: "4 × side." },
    { front: "Square area?", back: "side × side." },
    { front: "Perimeter units?", back: "Linear units such as cm, m and km." },
    { front: "Area units?", back: "Square units such as cm², m² and km²." },
    { front: "Fencing a garden: area or perimeter?", back: "Perimeter." },
    { front: "Tiling a floor: area or perimeter?", back: "Area." }
  ]
};
