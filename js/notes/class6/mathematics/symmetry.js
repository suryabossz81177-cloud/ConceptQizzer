/*==================================================
  CONCEPT QUIZZER
  CLASS 6 • MATHEMATICS • CHAPTER 9
  Package 13.1.9 — Symmetry
==================================================*/
"use strict";

const ChapterData = {
  id: "class6-mathematics-symmetry",
  class: 6,
  subject: "Mathematics",
  chapterNumber: 9,
  title: "Symmetry",
  description: "Class 6 Mathematics Chapter 9 — Symmetry: explore reflection symmetry, lines of symmetry, rotational symmetry and symmetry in familiar shapes and designs.",
  estimatedReadingTime: "40–50 minutes",
  difficulty: "Intermediate",
  summary: "Symmetry describes a balanced arrangement in which parts of a figure correspond in a regular way. This chapter develops the ideas of line symmetry, reflection symmetry and rotational symmetry through folding, matching, turning and geometric examples.",
  sections: [
    {
      id: "meaning-of-symmetry",
      title: "What Is Symmetry?",
      blocks: [
        {type:"paragraph", text:"A figure has symmetry when its parts have a balanced correspondence. Symmetry can be observed in natural objects, designs, letters, shapes and many patterns."},
        {type:"definition", title:"Symmetry", text:"Symmetry is a regular correspondence between parts of a figure. In a symmetric figure, one part can match another part according to a particular rule."},
        {type:"example", title:"Everyday Examples", text:"Butterfly wings, many flowers, rangoli designs and some buildings show symmetry. The exact type of symmetry may differ from one object to another."},
        {type:"tip", title:"Look for a Rule", text:"Do not decide that a figure is symmetric only because it looks balanced. Check whether its parts actually match under the required reflection or rotation."}
      ]
    },
    {
      id: "line-symmetry",
      title: "Line of Symmetry",
      blocks: [
        {type:"definition", title:"Line of Symmetry", text:"A line of symmetry divides a figure into two matching parts so that one part is the mirror image of the other across the line."},
        {type:"example", title:"Folding Test", text:"Imagine folding a figure along a proposed line. If the two halves coincide exactly, the line is a line of symmetry."},
        {type:"important", title:"A Figure Can Have More Than One", text:"A figure may have one, several, or no lines of symmetry. A square has four lines of symmetry."},
        {type:"warning", title:"Do Not Count Every Line", text:"A line drawn through a figure is not automatically a line of symmetry. The two sides must correspond as mirror images."}
      ]
    },
    {
      id: "common-shapes",
      title: "Symmetry of Common Shapes",
      blocks: [
        {type:"example", title:"Square", text:"A square has four lines of symmetry: two through opposite side midpoints and two along its diagonals."},
        {type:"example", title:"Rectangle", text:"A rectangle that is not a square has two lines of symmetry, each passing through the midpoints of a pair of opposite sides."},
        {type:"example", title:"Equilateral Triangle", text:"An equilateral triangle has three lines of symmetry, one through each vertex and the midpoint of the opposite side."},
        {type:"example", title:"Circle", text:"A circle has infinitely many lines of symmetry because every diameter is a line of symmetry."},
        {type:"tip", title:"Compare Carefully", text:"A square is also a rectangle, but its extra equal-side property gives it more lines of symmetry than a non-square rectangle."}
      ]
    },
    {
      id: "reflection",
      title: "Reflection Symmetry",
      blocks: [
        {type:"definition", title:"Reflection Symmetry", text:"A figure has reflection symmetry when reflection across a line produces a matching image. The reflecting line is called the line or axis of symmetry."},
        {type:"important", title:"Equal Distance from the Axis", text:"A point and its reflected image lie at equal perpendicular distances from the line of symmetry on opposite sides."},
        {type:"example", title:"Completing a Figure", text:"To complete a half-drawn symmetric figure, copy each point or part to the other side at the same perpendicular distance from the symmetry line."},
        {type:"tip", title:"Use Squared Paper", text:"On a grid, count the number of squares from the symmetry line and reproduce the same distance on the other side."}
      ]
    },
    {
      id: "generating-symmetry",
      title: "Creating Symmetric Figures",
      blocks: [
        {type:"paragraph", text:"Symmetric figures can be created by folding paper, drawing one half and reflecting it, or using repeated constructions on a grid."},
        {type:"example", title:"Paper Folding", text:"Fold a sheet along a line, mark a point or cut a shape, and unfold it. The resulting marks can form mirror-symmetric patterns."},
        {type:"important", title:"Mirror Image Is Not Just a Copy", text:"A reflected shape changes sides relative to the symmetry line. Its distance and orientation must satisfy the reflection rule."},
        {type:"tip", title:"Check Corresponding Points", text:"Pick several corresponding points and verify that the symmetry line is the perpendicular bisector of the segment joining each pair."}
      ]
    },
    {
      id: "rotational-symmetry",
      title: "Rotational Symmetry",
      blocks: [
        {type:"definition", title:"Rotational Symmetry", text:"A figure has rotational symmetry if it matches its original appearance after being turned about a fixed centre through an angle greater than 0° and less than 360°."},
        {type:"definition", title:"Angle of Rotation", text:"The angle through which a figure is turned to match itself is called an angle of rotation. A smaller positive angle that produces a match is often used as the smallest angle of rotation."},
        {type:"example", title:"Square", text:"A square matches itself after turns of 90°, 180° and 270°. Its order of rotational symmetry is 4."},
        {type:"example", title:"Equilateral Triangle", text:"An equilateral triangle matches itself after rotations of 120° and 240°. Its order of rotational symmetry is 3."},
        {type:"important", title:"Order of Rotational Symmetry", text:"The order tells how many times a figure matches itself during one complete 360° turn, including the starting position when counting the full set of matches."}
      ]
    },
    {
      id: "rotational-check",
      title: "How to Test Rotational Symmetry",
      blocks: [
        {type:"paragraph", text:"To test rotational symmetry, keep the centre fixed and imagine turning the figure through equal or chosen angles. If it matches its original position before a full 360° turn, it has rotational symmetry."},
        {type:"steps", title:"A Simple Test", items:["Mark or identify the centre of rotation.","Turn the figure through a candidate angle.","Compare the new position with the original figure.","Repeat with other angles if needed."]},
        {type:"warning", title:"Do Not Use Any Turn", text:"Every figure returns to its original position after 360°. That full turn alone is not enough to establish non-trivial rotational symmetry."}
      ]
    },
    {
      id: "circle-symmetry",
      title: "Symmetry of a Circle",
      blocks: [
        {type:"important", title:"Lines of Symmetry", text:"Every diameter of a circle is a line of symmetry. Since a circle has infinitely many diameters, it has infinitely many lines of symmetry."},
        {type:"important", title:"Rotational Symmetry", text:"A circle matches itself after rotation through every angle about its centre, so it has rotational symmetry of every possible order in the continuous sense."},
        {type:"example", title:"Centre Matters", text:"For rotational symmetry of a circle, the natural centre is the centre of the circle. Moving the centre changes the situation."}
      ]
    },
    {
      id: "symmetry-in-design",
      title: "Symmetry in Patterns and Designs",
      blocks: [
        {type:"paragraph", text:"Artists and designers use reflection and rotational symmetry to make repeating patterns, borders, rangoli designs, tiles and decorations."},
        {type:"example", title:"Rotating a Motif", text:"A small motif can be copied around a central point at equal angular intervals to create a rotationally symmetric design."},
        {type:"tip", title:"Find the Smallest Repeating Unit", text:"When studying a pattern, first identify the smallest part that repeats. Then look for the line or centre that explains the repetition."}
      ]
    },
    {
      id: "problem-solving",
      title: "Reasoning with Symmetry",
      blocks: [
        {type:"example", title:"Predicting Lines of Symmetry", text:"Use the properties of a shape to predict possible symmetry lines, then verify them using folding, reflection or equal-distance reasoning."},
        {type:"example", title:"Combining Symmetries", text:"A figure may have both reflection symmetry and rotational symmetry. The two types should be tested separately."},
        {type:"important", title:"Symmetry Is a Property", text:"Changing a side length, angle or position can destroy a symmetry. Always consider the exact shape, not just its general category."}
      ]
    }
  ],
  importantPoints: [
    "A line of symmetry divides a figure into mirror-matching halves.",
    "A figure can have zero, one, or several lines of symmetry.",
    "A square has 4 lines of symmetry; a non-square rectangle has 2.",
    "An equilateral triangle has 3 lines of symmetry.",
    "Every diameter of a circle is a line of symmetry.",
    "Reflection preserves distance from the symmetry line.",
    "Rotational symmetry means a figure matches itself after a turn less than 360°.",
    "The order of rotational symmetry counts the number of matching positions in one full turn.",
    "A square has rotational symmetry of order 4.",
    "An equilateral triangle has rotational symmetry of order 3."
  ],
  keyTerms: [
    {term:"Symmetry", definition:"A regular correspondence between parts of a figure."},
    {term:"Line of symmetry", definition:"A line across which the two sides of a figure are mirror images."},
    {term:"Reflection symmetry", definition:"Symmetry produced by reflection across a line."},
    {term:"Axis of symmetry", definition:"Another name for a line of symmetry."},
    {term:"Rotational symmetry", definition:"Symmetry in which a figure matches itself after a turn about a centre."},
    {term:"Angle of rotation", definition:"The angle through which a figure is turned."},
    {term:"Order of rotational symmetry", definition:"The number of matching positions during one complete turn."},
    {term:"Centre of rotation", definition:"The fixed point about which a figure is rotated."},
    {term:"Mirror image", definition:"The image obtained by reflecting a figure across a line."}
  ],
  quickRevision: [
    "What is a line of symmetry?",
    "How can paper folding test line symmetry?",
    "How many lines of symmetry does a square have?",
    "How many lines of symmetry does a non-square rectangle have?",
    "Why does a circle have infinitely many lines of symmetry?",
    "What is reflection symmetry?",
    "What is rotational symmetry?",
    "What is the order of rotational symmetry of a square?",
    "What is the smallest non-zero angle of rotation for a square?",
    "Can a figure have both reflection and rotational symmetry?"
  ],
  flashcards: [
    {front:"What is symmetry?", back:"A regular correspondence between parts of a figure."},
    {front:"What is a line of symmetry?", back:"A line that divides a figure into mirror-matching parts."},
    {front:"How can you test line symmetry?", back:"Use folding or check whether corresponding points are equally distant from the proposed line."},
    {front:"How many lines of symmetry does a square have?", back:"Four."},
    {front:"How many lines of symmetry does a non-square rectangle have?", back:"Two."},
    {front:"How many lines of symmetry does an equilateral triangle have?", back:"Three."},
    {front:"How many lines of symmetry does a circle have?", back:"Infinitely many; every diameter is one."},
    {front:"What is reflection symmetry?", back:"Symmetry in which reflection across a line produces a matching image."},
    {front:"What is rotational symmetry?", back:"A figure matches itself after a turn about a fixed centre."},
    {front:"What is the order of rotational symmetry of a square?", back:"Four."},
    {front:"What is the smallest angle of rotation of a square?", back:"90°."},
    {front:"What is the order of rotational symmetry of an equilateral triangle?", back:"Three."}
  ]
};

window.ChapterData = window.ChapterData || {};
window.ChapterData[ChapterData.id] = ChapterData;
