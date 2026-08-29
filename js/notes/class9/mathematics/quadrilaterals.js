/* ConceptQizzer — Class 9 Mathematics — 5X Ultra Detailed */
/* Loader-safe Windows Chapter format. */
"use strict";

const ChapterData = {
  "id": "9-mathematics-quadrilaterals",
  "title": "Quadrilaterals",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 8,
  "file": "js/notes/class9/mathematics/quadrilaterals.js",
  "enabled": true,
  "description": "Five-times-expanded, exam-standard Class 9 Mathematics notes for Quadrilaterals. Every major topic is explained from first principles with definitions, intuition, conditions, recognition cues, why-the-rule-works reasoning, step-by-step methods, multiple worked examples, error detection, proof-writing guidance, verification and practice. The original notes are preserved and expanded rather than replaced.",
  "learningObjectives": [
    "Understand every major concept from first principles.",
    "Use definitions, properties and theorems correctly.",
    "Solve problems step by step with complete mathematical reasoning.",
    "Recognise incorrect methods and verify answers.",
    "Write Class 9 exam-ready solutions with proper reasons."
  ],
  "prerequisiteCheck": [
    "Basic arithmetic",
    "Basic geometry vocabulary",
    "Angles and line segments",
    "Simple logical reasoning"
  ],
  "conceptRoadmap": [
    "Quadrilateral and Angle Sum",
    "Quadrilateral Family",
    "Parallelogram Properties",
    "Tests for a Parallelogram",
    "Rectangle",
    "Rhombus",
    "Square",
    "Base and Perpendicular Height"
  ],
  "mainConcepts": [
    "Quadrilateral and Angle Sum",
    "Quadrilateral Family",
    "Parallelogram Properties",
    "Tests for a Parallelogram",
    "Rectangle",
    "Rhombus",
    "Square",
    "Base and Perpendicular Height"
  ],
  "comparisonTables": [
    {
      "title": "Special quadrilaterals",
      "columns": [
        "Figure",
        "Defining property",
        "Important properties"
      ],
      "rows": [
        [
          "Parallelogram",
          "Both opposite side pairs parallel",
          "Opposite sides/angles equal; diagonals bisect"
        ],
        [
          "Rectangle",
          "Four right angles",
          "Diagonals equal and bisect"
        ],
        [
          "Rhombus",
          "Four equal sides",
          "Diagonals perpendicular and bisect"
        ],
        [
          "Square",
          "Four equal sides + four right angles",
          "Rectangle + rhombus properties"
        ]
      ]
    },
    {
      "title": "Definition vs Property vs Theorem vs Converse",
      "columns": [
        "Item",
        "Purpose",
        "How it is used"
      ],
      "rows": [
        [
          "Definition",
          "Gives exact meaning",
          "Recognise or classify an object"
        ],
        [
          "Property",
          "Describes a consequence already established",
          "Apply directly when conditions hold"
        ],
        [
          "Theorem",
          "A proved mathematical statement",
          "Justify a conclusion"
        ],
        [
          "Converse",
          "Reverses a conditional statement when valid",
          "Prove a condition from a known consequence"
        ]
      ]
    }
  ],
  "theoremPropertyLab": [
    {
      "title": "Parallelogram diagonals",
      "statement": "The diagonals of a parallelogram bisect each other.",
      "proof": "Use parallel-line angle equalities and triangle congruence; CPCT gives equality of the two halves of each diagonal."
    },
    {
      "title": "Parallelogram converse",
      "statement": "If diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram.",
      "proof": "The bisection condition gives congruent triangle pairs, which leads to parallel opposite sides."
    }
  ],
  "formulaPropertyBank": [
    "Quadrilateral angle sum = 360°",
    "Area of parallelogram = base × perpendicular height",
    "Opposite sides of parallelogram equal",
    "Opposite angles equal",
    "Consecutive angles supplementary",
    "Diagonals bisect each other"
  ],
  "conceptConnections": [
    "Quadrilateral proofs use lines-and-angles results.",
    "Parallelogram properties use triangle congruence.",
    "Special quadrilaterals form a hierarchy."
  ],
  "mathematicalThinking": [
    "Identify the defining property before using a specialised theorem.",
    "Never assume a shape from appearance.",
    "Use perpendicular height for area.",
    "Keep direct and converse statements separate.",
    "Never use the visual appearance of a diagram as an unstated fact.",
    "Write the condition of a theorem before using its conclusion.",
    "Distinguish a statement from its converse.",
    "For a long problem, break the solution into named mini-goals.",
    "After solving, verify the result independently."
  ],
  "errorDetective": [
    {
      "problem": "Every rectangle is a square.",
      "answer": "False."
    },
    {
      "problem": "Every square is a rectangle.",
      "answer": "True."
    },
    {
      "problem": "A slant side is always the height.",
      "answer": "False."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Consecutive angles of a parallelogram are in the ratio 2:3. Find them.",
      "answer": "72° and 108°."
    }
  ],
  "realLifeMathematics": [
    "Architecture",
    "Floor plans",
    "Tiling",
    "Engineering frames",
    "Land measurement"
  ],
  "mathematicalActivityLab": [
    {
      "title": "Quadrilateral property lab",
      "steps": [
        "Draw a parallelogram.",
        "Draw both diagonals.",
        "Measure diagonal halves.",
        "Measure opposite angles.",
        "Repeat with a rectangle, rhombus and square.",
        "Record shared and special properties."
      ]
    }
  ],
  "figureBank": [
  {
    "title": "Quadrilateral angle sum",
    "diagram": "A────────B\n \\        /\n  \\      /\n   D────C\nOne diagonal → two triangles → 180°+180°=360°",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Parallelogram",
    "diagram": "A────────B\n \\        \\\n  \\        \\\n   D────────C\nAB∥DC, AD∥BC",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Parallelogram diagonals",
    "diagram": "A────────B\n \\      /\n  \\    /\n   \\  /\n    O\n   /  \\\n  /    \\\n D──────C\nAO=OC, BO=OD",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Rectangle",
    "diagram": "A────────B\n│        │\n│        │\nD────────C\nAll angles 90°; diagonals equal and bisect each other.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Rhombus / square",
    "diagram": "Rhombus: all four sides equal.\nSquare: all four sides equal AND all four angles 90°.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  }
],
  "visualLearning": [
    "Draw the quadrilateral family tree.",
    "Draw diagonal patterns for parallelogram, rectangle, rhombus and square."
  ],
  "masterDefinitions": [
    {
      "term": "Quadrilateral",
      "definition": "A polygon with four sides."
    },
    {
      "term": "Diagonal",
      "definition": "A segment joining two non-adjacent vertices."
    },
    {
      "term": "Parallelogram",
      "definition": "A quadrilateral with both pairs of opposite sides parallel."
    },
    {
      "term": "Rectangle",
      "definition": "A parallelogram with four right angles."
    },
    {
      "term": "Rhombus",
      "definition": "A parallelogram with four equal sides."
    },
    {
      "term": "Square",
      "definition": "A quadrilateral with four equal sides and four right angles."
    }
  ],
  "formulaRevisionSheet": [
    "Angle sum=360°",
    "Area parallelogram=base×perpendicular height",
    "Opposite sides/angles of parallelogram equal",
    "Consecutive angles supplementary",
    "Diagonals bisect each other"
  ],
  "questionBank": [
    {
      "question": "Find the fourth angle if the other three are 80°,95°,110°.",
      "answer": "75°."
    },
    {
      "question": "If one parallelogram angle is 65°, find all four.",
      "answer": "65°,115°,65°,115°."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Show Answer reveals the final answer and then the complete step-by-step solution."
  },
  "practiceSets": [
    {
      "title": "Practice A",
      "questions": [
        "Find missing quadrilateral angles.",
        "Classify quadrilaterals.",
        "Solve parallelogram angle problems.",
        "Use diagonal bisection.",
        "Compare rectangle/rhombus/square.",
        "Solve base-height area problems."
      ]
    }
  ],
  "timedPractice": [
    {
      "duration": "35 minutes",
      "instruction": "Solve 14 mixed questions including three proof questions."
    }
  ],
  "chapterQuiz": [
    {
      "question": "Diagonals of a parallelogram:",
      "options": [
        "are always perpendicular",
        "bisect each other",
        "never meet",
        "are always unequal"
      ],
      "answer": "bisect each other"
    }
  ],
  "examZone": [
    "Know the quadrilateral hierarchy.",
    "Know direct and converse parallelogram tests.",
    "Use 360° angle sum.",
    "Use perpendicular height.",
    "Give reasons in proof questions.",
    "Read the question twice before writing equations or proof steps.",
    "Use exact mathematical vocabulary.",
    "Keep all labels consistent with the diagram.",
    "Show intermediate steps in multi-mark questions.",
    "End every proof with the exact statement that was required."
  ],
  "commonMistakes": [
    "Assuming a figure is a parallelogram from appearance.",
    "Confusing equal and perpendicular diagonals.",
    "Using a slant side as height.",
    "Applying rectangle properties to every parallelogram.",
    "Skipping the condition check before applying a theorem.",
    "Writing a correct result without showing the reasoning in a proof.",
    "Confusing a definition with a property.",
    "Assuming a converse is automatically true.",
    "Using an unlabelled or misleading diagram as evidence."
  ],
  "masterRevision": [
    "Quadrilateral → classification → parallelogram → properties → tests → rectangle/rhombus/square → diagonals → area → proof.",
    "Read → identify givens → identify target → select theorem/property → derive → calculate → justify → verify → conclude."
  ],
  "detailedSummary": [
    "Quadrilaterals are four-sided polygons with angle sum 360°. The parallelogram is central: parallel opposite sides lead to equal opposite sides and angles, supplementary consecutive angles and bisecting diagonals. Rectangle, rhombus and square add specialised conditions."
  ],
  "finalChapterTest": [
    {
      "question": "Prove that the diagonals of a parallelogram bisect each other.",
      "answer": "If diagonals AC and BD meet at O, then AO=OC and BO=OD.",
      "solution": "Use the parallel opposite sides to obtain equal alternate interior angles. The vertically opposite angles at O are equal. The resulting triangles are congruent by ASA. CPCT then gives AO=OC and BO=OD. Therefore the diagonals bisect each other."
    }
  ],
  "importantPoints": [
    "Quadrilateral angle sum = 360°.",
    "Opposite sides of a parallelogram are equal and parallel.",
    "Opposite angles are equal.",
    "Consecutive angles are supplementary.",
    "Diagonals bisect each other.",
    "Rectangle diagonals are equal.",
    "Rhombus diagonals are perpendicular.",
    "Square has rectangle and rhombus properties.",
    "Parallelogram area uses perpendicular height.",
    "Definitions tell you what an object is.",
    "Theorems require their hypotheses.",
    "A converse needs separate justification.",
    "A diagram supports reasoning only through stated or proved facts.",
    "Verification is part of a strong mathematical solution."
  ],
  "keyTerms": [
    "Quadrilateral",
    "Diagonal",
    "Parallelogram",
    "Rectangle",
    "Rhombus",
    "Square",
    "Trapezium",
    "Opposite sides",
    "Consecutive angles",
    "Perpendicular height"
  ],
  "chapterSummary": [],
  "sections": [
    {
      "id": "quad-basics",
      "title": "Quadrilateral and Angle Sum",
      "blocks": [

  {
    "type": "concept",
    "title": "📐 Figure 1 — Quadrilateral angle sum",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nA────────B\n \\        /\n  \\      /\n   D────C\nOne diagonal → two triangles → 180°+180°=360°\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 2 — Parallelogram",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nA────────B\n \\        \\\n  \\        \\\n   D────────C\nAB∥DC, AD∥BC\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 3 — Parallelogram diagonals",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nA────────B\n \\      /\n  \\    /\n   \\  /\n    O\n   /  \\\n  /    \\\n D──────C\nAO=OC, BO=OD\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 4 — Rectangle",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nA────────B\n│        │\n│        │\nD────────C\nAll angles 90°; diagonals equal and bisect each other.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 5 — Rhombus / square",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nRhombus: all four sides equal.\nSquare: all four sides equal AND all four angles 90°.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  }
,

        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A quadrilateral is a closed polygon with four sides, four vertices and four interior angles. Its diagonals join pairs of opposite vertices.\n\nEvery quadrilateral has interior-angle sum 360°. Draw one diagonal: the quadrilateral splits into two triangles. Each triangle contributes 180°, so total = 180°+180°=360°."
        },
        {
          "type": "example",
          "title": "Missing Angle",
          "color": "orange",
          "text": "Three angles are 82°, 97° and 111°.\nFourth angle =360°−(82°+97°+111°)\n=360°−290°\n=70°."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Quadrilateral and Angle Sum is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Quadrilateral and Angle Sum, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Quadrilateral and Angle Sum, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Quadrilateral and Angle Sum: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Quadrilateral and Angle Sum questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Quadrilateral and Angle Sum is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Quadrilateral and Angle Sum results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Quadrilateral and Angle Sum problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "families",
      "title": "Quadrilateral Family",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A parallelogram has both pairs of opposite sides parallel.\nA rectangle is a parallelogram with four right angles.\nA rhombus is a parallelogram with four equal sides.\nA square has four equal sides and four right angles, so it is both a rectangle and a rhombus.\nA trapezium has one pair of opposite sides parallel in the standard NCERT-style definition used here.\nA kite has two distinct pairs of adjacent equal sides.\n\nThe hierarchy matters: every square is a rectangle and rhombus, every rectangle is a parallelogram, and every rhombus is a parallelogram. The converses are not generally true."
        },
        {
          "type": "example",
          "title": "Hierarchy Check",
          "color": "orange",
          "text": "A rectangle with sides 8 cm and 5 cm is a parallelogram and rectangle, but not a square because all four sides are not equal."
        },
        {
          "type": "example",
          "title": "Square Check",
          "color": "orange",
          "text": "A square is simultaneously a rectangle, rhombus and parallelogram because it satisfies all their defining conditions."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Quadrilateral Family is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Quadrilateral Family, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Quadrilateral Family, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Quadrilateral Family: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Quadrilateral Family questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Quadrilateral Family is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Quadrilateral Family results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Quadrilateral Family problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "parallelogram",
      "title": "Parallelogram Properties",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A parallelogram has two pairs of opposite sides parallel. Its major properties are:\n• opposite sides are equal;\n• opposite angles are equal;\n• consecutive angles are supplementary;\n• diagonals bisect each other.\n\nThese are consequences of parallel-line relationships and triangle congruence. Do not assume them merely because a drawing looks like a parallelogram."
        },
        {
          "type": "example",
          "title": "Angles",
          "color": "orange",
          "text": "If ∠A=70° in parallelogram ABCD:\n∠C=70° (opposite angles equal).\n∠B=180°−70°=110°.\n∠D=110°."
        },
        {
          "type": "example",
          "title": "Sides",
          "color": "orange",
          "text": "If AB=9 cm and BC=6 cm:\nCD=9 cm and AD=6 cm."
        },
        {
          "type": "example",
          "title": "Diagonals",
          "color": "orange",
          "text": "If diagonals AC and BD meet at O and AC=24 cm, then AO=OC=12 cm."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Parallelogram Properties is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Parallelogram Properties, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Parallelogram Properties, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Parallelogram Properties: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Parallelogram Properties questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Parallelogram Properties is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Parallelogram Properties results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Parallelogram Properties problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "tests",
      "title": "Tests for a Parallelogram",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A quadrilateral can be established as a parallelogram if sufficient conditions are proved. Important tests include:\n1. Both pairs of opposite sides are parallel.\n2. Both pairs of opposite sides are equal.\n3. One pair of opposite sides is both equal and parallel.\n4. Diagonals bisect each other.\n5. Both pairs of opposite angles are equal.\n\nThese are converse-style tools: instead of starting with “ABCD is a parallelogram,” they allow us to conclude that it is one from given information."
        },
        {
          "type": "example",
          "title": "One Pair Equal and Parallel",
          "color": "orange",
          "text": "If AB∥CD and AB=CD in quadrilateral ABCD, then ABCD is a parallelogram by the relevant converse theorem."
        },
        {
          "type": "example",
          "title": "Diagonal Test",
          "color": "orange",
          "text": "If diagonals AC and BD intersect at O with AO=OC and BO=OD, then the diagonals bisect each other; therefore ABCD is a parallelogram."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Tests for a Parallelogram is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Tests for a Parallelogram, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Tests for a Parallelogram, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Tests for a Parallelogram: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Tests for a Parallelogram questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Tests for a Parallelogram is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Tests for a Parallelogram results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Tests for a Parallelogram problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "rectangle",
      "title": "Rectangle",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A rectangle is a parallelogram with four right angles. Therefore opposite sides are equal and parallel, consecutive angles are supplementary, and its diagonals bisect each other.\n\nAn additional property: the diagonals of a rectangle are equal."
        },
        {
          "type": "example",
          "title": "Rectangle Reasoning",
          "color": "orange",
          "text": "If ABCD is a rectangle and AC=15 cm, then BD=15 cm because rectangle diagonals are equal."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Rectangle is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Rectangle, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Rectangle, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Rectangle: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Rectangle questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Rectangle is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Rectangle results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Rectangle problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "rhombus",
      "title": "Rhombus",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A rhombus is a parallelogram with all four sides equal. Its diagonals bisect each other at right angles, and each diagonal bisects a pair of opposite angles."
        },
        {
          "type": "example",
          "title": "Rhombus Reasoning",
          "color": "orange",
          "text": "If one side of a rhombus is 7 cm, all four sides are 7 cm. If its diagonals intersect at O, then each diagonal is bisected at O."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Rhombus is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Rhombus, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Rhombus, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Rhombus: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Rhombus questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Rhombus is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Rhombus results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Rhombus problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "square",
      "title": "Square",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A square has four equal sides and four right angles. It therefore inherits every property of a rectangle and a rhombus.\n\nIts diagonals are equal, bisect each other, are perpendicular, and bisect opposite angles."
        },
        {
          "type": "example",
          "title": "Square Property",
          "color": "orange",
          "text": "A square of side 10 cm has perimeter 40 cm. Its four interior angles are 90°. Its diagonals are equal and perpendicular."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Square is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Square, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Square, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Square: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Square questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Square is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Square results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Square problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "area-height",
      "title": "Base and Perpendicular Height",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "For a parallelogram, area = base × corresponding perpendicular height. Height is the shortest perpendicular distance between the pair of parallel sides.\n\nA slanting side is not automatically the height. This is a frequent exam error. If the chosen base is horizontal, the height must be measured vertically/perpendicularly to that base."
        },
        {
          "type": "example",
          "title": "Area",
          "color": "orange",
          "text": "Base = 15 cm, perpendicular height = 8 cm.\nArea =15×8=120 cm².\nIf a slant side is 10 cm, it is not used as height unless it is perpendicular to the chosen base."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Base and Perpendicular Height is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Base and Perpendicular Height, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Base and Perpendicular Height, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Base and Perpendicular Height: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "content": "Problem: A geometry question gives several labelled relationships. How should you begin?\n\nComplete solution:\nFirst rewrite the information in mathematical language. Mark every given equality or parallel/perpendicular condition. State the target. Then select the smallest theorem whose hypotheses are completely satisfied. Perform the calculation or proof one step at a time. Finally, substitute the result back into the original relationship or check the relevant total (such as an angle sum) to verify it.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "content": "Problem: Why should a diagram not be used to assume an unmarked equality?\n\nComplete solution:\nA drawing can be distorted for convenience. A segment that looks equal may not be equal; an angle that looks like 90° may not be 90°. Therefore use only information explicitly given or information established by a theorem. If the problem states AB = AC, you may use that equality. If it merely looks so in the picture, you may not.",
          "color": "orange"
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Base and Perpendicular Height questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Base and Perpendicular Height is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Base and Perpendicular Height results are reliable.",
          "color": "gold"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "content": "For a short answer, give the required relation and calculation. For a proof, write a logical chain with a reason beside each important step. Avoid unexplained jumps such as 'obvious' or 'therefore' when a theorem is actually doing the work. Keep notation consistent with the diagram. End with a sentence that directly answers the question.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Self-check",
          "content": "After completing a Base and Perpendicular Height problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-9",
      "title": "Quadrilateral basics",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "A quadrilateral has four sides, four vertices and two diagonals. The interior angles have total 360°.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For quadrilateral basics, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Quadrilateral basics is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-10",
      "title": "Classification",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "Quadrilaterals are classified according to parallel sides, equal sides, right angles and diagonal properties. A correct classification uses definitions, not visual appearance.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For classification, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Classification is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-11",
      "title": "Parallelogram",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "A parallelogram has both pairs of opposite sides parallel. From this defining condition follow several important results about opposite sides, opposite angles, consecutive angles and diagonals.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For parallelogram, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Parallelogram is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-12",
      "title": "Tests for parallelogram",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "A quadrilateral can be proved to be a parallelogram if appropriate converse conditions hold, such as both pairs of opposite sides being equal or the diagonals bisecting each other.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For tests for parallelogram, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Tests for parallelogram is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-13",
      "title": "Rectangle",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "A rectangle is a parallelogram with four right angles. Its diagonals are equal and bisect each other.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For rectangle, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Rectangle is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-14",
      "title": "Rhombus",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "A rhombus is a parallelogram with four equal sides. Its diagonals bisect each other at right angles.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For rhombus, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Rhombus is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-15",
      "title": "Square",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "A square combines the defining features of a rectangle and a rhombus: four equal sides and four right angles.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For square, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Square is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "quadrilaterals-deep-16",
      "title": "Area and height",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "The area of a parallelogram is base multiplied by perpendicular height. The height is the perpendicular distance between the parallel sides, not necessarily a slant side.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For area and height, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Conditions you must check",
          "content": "Before applying a result, list its hypotheses. A theorem is not a free-standing formula: it works only when its required conditions are satisfied. This is particularly important in geometry, where parallelism, equality, right angles, adjacency, correspondence and intersection positions can change which result is valid.",
          "color": "green"
        },
        {
          "type": "method",
          "title": "How to solve questions step by step",
          "content": "1. Read and mark the given information.\n2. Name the target quantity or statement.\n3. Select the exact definition/property/theorem.\n4. Write the mathematical relation before calculating.\n5. Carry out each algebraic or geometric step clearly.\n6. Add reasons to proof steps.\n7. Verify using an independent relationship.\n8. State the final conclusion in the language of the question.",
          "color": "teal"
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "content": "Problem: A direct application of the topic is required. What is the safest strategy?\n\nComplete solution:\nStart with the defining condition, not with a remembered answer. Write the known relationship symbolically, substitute only after the relationship is established, simplify carefully, and check the result against the relevant geometric total or property.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "content": "Problem: A question combines two different facts from the chapter. How should the solution be organised?\n\nComplete solution:\nSeparate the work into stages. First establish the first required relationship. Use its result as a new known fact. Then apply the second theorem. Numbering the reasoning is useful for long proofs because each conclusion then has a visible source.",
          "color": "orange"
        },
        {
          "type": "why",
          "title": "Why this concept matters",
          "content": "Area and height is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
          "color": "gold"
        },
        {
          "type": "error",
          "title": "Common trap",
          "content": "Do not infer an unstated equality, parallelism, perpendicularity or congruence from a drawing. Also avoid using the converse of a theorem unless the converse is actually valid. A correct-looking numerical answer obtained from an invalid assumption is still mathematically incorrect.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Higher-order question",
          "content": "What is the minimum information needed to reach the conclusion? Which condition is essential? Can you construct a counterexample if one condition is removed? Can the same result be reached by a different theorem? Answering these questions deepens understanding and improves proof skills.",
          "color": "indigo"
        },
        {
          "type": "exam",
          "title": "Board-style presentation",
          "content": "Use a clean diagram when useful. State the given information, then the required result. In a proof, write one logical step per line and attach a reason. In numerical questions, show the governing relation before substitution. Box or clearly state the final result.",
          "color": "orange"
        },
        {
          "type": "check",
          "title": "Verification",
          "content": "Substitute the final value back into the original equation or relation. In geometry, also check angle sums, equality conditions, parallel-line conditions, side inequalities, or correspondence as appropriate. Verification is especially valuable in multi-step questions because one early error can otherwise propagate.",
          "color": "cyan"
        }
      ]
    }
  ],
  "renderVersion": "windows.chapter.v3",
  "deepExpansion25X": [
  {
    "id": "chapter-8-deep-expansion-2-5x",
    "title": "2.5× Minimum Detailed Expansion",
    "blocks": [
      {
        "type": "concept",
        "title": "1. Quadrilateral fundamentals — Deep Concept",
        "color": "blue",
        "text": "Quadrilateral fundamentals is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "1. Quadrilateral fundamentals — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Quadrilateral fundamentals. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "1. Exam Point",
        "color": "green",
        "text": "For Quadrilateral fundamentals, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Quadrilateral fundamentals",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Quadrilateral fundamentals.",
            "answer": "Give the standard Class 9 definition/property of Quadrilateral fundamentals.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Quadrilateral fundamentals?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Quadrilateral fundamentals.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Quadrilateral fundamentals?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Quadrilateral fundamentals be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "2. Angle sum — Deep Concept",
        "color": "blue",
        "text": "Angle sum is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "2. Angle sum — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Angle sum. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "2. Exam Point",
        "color": "green",
        "text": "For Angle sum, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Angle sum",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Angle sum.",
            "answer": "Give the standard Class 9 definition/property of Angle sum.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Angle sum?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Angle sum.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Angle sum?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Angle sum be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "3. Parallelogram definition — Deep Concept",
        "color": "blue",
        "text": "Parallelogram definition is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "3. Parallelogram definition — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Parallelogram definition. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "3. Exam Point",
        "color": "green",
        "text": "For Parallelogram definition, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Parallelogram definition",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Parallelogram definition.",
            "answer": "Give the standard Class 9 definition/property of Parallelogram definition.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Parallelogram definition?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Parallelogram definition.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Parallelogram definition?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Parallelogram definition be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "4. Opposite sides — Deep Concept",
        "color": "blue",
        "text": "Opposite sides is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "4. Opposite sides — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Opposite sides. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "4. Exam Point",
        "color": "green",
        "text": "For Opposite sides, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Opposite sides",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Opposite sides.",
            "answer": "Give the standard Class 9 definition/property of Opposite sides.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Opposite sides?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Opposite sides.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Opposite sides?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Opposite sides be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "5. Opposite angles — Deep Concept",
        "color": "blue",
        "text": "Opposite angles is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "5. Opposite angles — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Opposite angles. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "5. Exam Point",
        "color": "green",
        "text": "For Opposite angles, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Opposite angles",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Opposite angles.",
            "answer": "Give the standard Class 9 definition/property of Opposite angles.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Opposite angles?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Opposite angles.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Opposite angles?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Opposite angles be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "6. Diagonals — Deep Concept",
        "color": "blue",
        "text": "Diagonals is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "6. Diagonals — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Diagonals. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "6. Exam Point",
        "color": "green",
        "text": "For Diagonals, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Diagonals",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Diagonals.",
            "answer": "Give the standard Class 9 definition/property of Diagonals.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Diagonals?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Diagonals.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Diagonals?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Diagonals be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "7. Tests for parallelogram — Deep Concept",
        "color": "blue",
        "text": "Tests for parallelogram is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "7. Tests for parallelogram — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Tests for parallelogram. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "7. Exam Point",
        "color": "green",
        "text": "For Tests for parallelogram, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Tests for parallelogram",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Tests for parallelogram.",
            "answer": "Give the standard Class 9 definition/property of Tests for parallelogram.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Tests for parallelogram?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Tests for parallelogram.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Tests for parallelogram?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Tests for parallelogram be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "8. Rectangle — Deep Concept",
        "color": "blue",
        "text": "Rectangle is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "8. Rectangle — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Rectangle. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "8. Exam Point",
        "color": "green",
        "text": "For Rectangle, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Rectangle",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Rectangle.",
            "answer": "Give the standard Class 9 definition/property of Rectangle.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Rectangle?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Rectangle.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Rectangle?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Rectangle be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "9. Rhombus — Deep Concept",
        "color": "blue",
        "text": "Rhombus is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "9. Rhombus — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Rhombus. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "9. Exam Point",
        "color": "green",
        "text": "For Rhombus, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Rhombus",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Rhombus.",
            "answer": "Give the standard Class 9 definition/property of Rhombus.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Rhombus?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Rhombus.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Rhombus?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Rhombus be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "10. Square — Deep Concept",
        "color": "blue",
        "text": "Square is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "10. Square — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Square. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "10. Exam Point",
        "color": "green",
        "text": "For Square, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Square",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Square.",
            "answer": "Give the standard Class 9 definition/property of Square.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Square?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Square.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Square?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Square be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "11. Trapezium — Deep Concept",
        "color": "blue",
        "text": "Trapezium is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "11. Trapezium — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Trapezium. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "11. Exam Point",
        "color": "green",
        "text": "For Trapezium, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Trapezium",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Trapezium.",
            "answer": "Give the standard Class 9 definition/property of Trapezium.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Trapezium?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Trapezium.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Trapezium?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Trapezium be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "12. Kite — Deep Concept",
        "color": "blue",
        "text": "Kite is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "12. Kite — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Kite. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "12. Exam Point",
        "color": "green",
        "text": "For Kite, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Kite",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Kite.",
            "answer": "Give the standard Class 9 definition/property of Kite.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Kite?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Kite.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Kite?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Kite be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "13. Diagonal strategy — Deep Concept",
        "color": "blue",
        "text": "Diagonal strategy is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "13. Diagonal strategy — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Diagonal strategy. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "13. Exam Point",
        "color": "green",
        "text": "For Diagonal strategy, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Diagonal strategy",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Diagonal strategy.",
            "answer": "Give the standard Class 9 definition/property of Diagonal strategy.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Diagonal strategy?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Diagonal strategy.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Diagonal strategy?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Diagonal strategy be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "14. Family of quadrilaterals — Deep Concept",
        "color": "blue",
        "text": "Family of quadrilaterals is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "14. Family of quadrilaterals — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Family of quadrilaterals. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "14. Exam Point",
        "color": "green",
        "text": "For Family of quadrilaterals, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Family of quadrilaterals",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Family of quadrilaterals.",
            "answer": "Give the standard Class 9 definition/property of Family of quadrilaterals.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Family of quadrilaterals?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Family of quadrilaterals.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Family of quadrilaterals?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Family of quadrilaterals be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      },
      {
        "type": "concept",
        "title": "15. Classification traps — Deep Concept",
        "color": "blue",
        "text": "Classification traps is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
      },
      {
        "type": "example",
        "title": "15. Classification traps — Solved Method",
        "color": "orange",
        "text": "Step 1: list the givens involving Classification traps. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
      },
      {
        "type": "tip",
        "title": "15. Exam Point",
        "color": "green",
        "text": "For Classification traps, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
      },
      {
        "type": "practice",
        "title": "Practice — Classification traps",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition or property of Classification traps.",
            "answer": "Give the standard Class 9 definition/property of Classification traps.",
            "solution": "State the definition/property and its essential condition."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition important in Classification traps?",
            "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
            "solution": "Compare the given information with the hypotheses before applying the result."
          },
          {
            "difficulty": "Application",
            "question": "Give the correct solution sequence for a problem on Classification traps.",
            "answer": "Givens → required → theorem/property → working → verification.",
            "solution": "Show the rule, justify its use, work logically, and check the conclusion."
          },
          {
            "difficulty": "HOTS",
            "question": "What is a common mistake involving Classification traps?",
            "answer": "Assuming an unproved visual property from the diagram.",
            "solution": "Use only given markings, definitions, constructions and valid theorems."
          },
          {
            "difficulty": "Challenge",
            "question": "How can a result involving Classification traps be independently verified?",
            "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
            "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
          }
        ]
      }
    ]
  }
],
  "revisionLabs": [
  {
    "type": "concept",
    "title": "Revision Lab 1 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 1: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 1 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 2 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 2: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 2 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 3 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 3: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 3 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 4 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 4: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 4 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 5 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 5: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 5 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 6 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 6: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 6 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 7 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 7: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 7 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 8 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 8: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 8 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 9 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 9: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 9 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 10 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 10: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 10 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 11 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 11: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 11 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 12 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 12: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 12 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 13 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 13: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 13 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 14 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 14: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 14 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 15 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 15: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 15 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 16 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 16: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 16 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 17 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 17: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 17 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 18 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 18: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 18 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 19 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 19: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 19 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 20 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 20: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 20 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 21 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 21: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 21 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 22 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 22: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 22 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 23 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 23: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 23 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 24 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 24: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 24 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 25 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 25: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 25 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 26 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 26: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 26 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 27 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 27: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 27 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 28 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 28: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 28 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 29 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 29: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 29 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 30 — Proof and Reasoning",
    "color": "blue",
    "text": "Revision Lab 30: read a fresh Chapter 8 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
  },
  {
    "type": "practice",
    "title": "Revision Lab 30 — Basic to Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "Name one central definition from this chapter.",
        "answer": "A correct Class 9 definition.",
        "solution": "Include the defining condition."
      },
      {
        "difficulty": "Understanding",
        "question": "Name one theorem and state its condition.",
        "answer": "A correct theorem together with its hypotheses.",
        "solution": "The condition is essential to the theorem."
      },
      {
        "difficulty": "Application",
        "question": "Write the first three steps of a proof.",
        "answer": "Givens → required → theorem/property.",
        "solution": "Only then begin the detailed proof."
      },
      {
        "difficulty": "HOTS",
        "question": "Why should you not measure a printed diagram to prove equality?",
        "answer": "The diagram may not be drawn to scale.",
        "solution": "Use mathematical data and theorems, not visual measurement."
      },
      {
        "difficulty": "Challenge",
        "question": "Give an alternate verification method.",
        "answer": "Use a different valid theorem, congruence route, angle sum or construction.",
        "solution": "The second route should independently support the conclusion."
      }
    ]
  }
],
  "examinerDrills": [
  {
    "type": "exam",
    "title": "Examiner Drill 1",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 2",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 3",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 4",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 5",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 6",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 7",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 8",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 9",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 10",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 11",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 12",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 13",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 14",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 15",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 16",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 17",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 18",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 19",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 20",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 21",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 22",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 23",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 24",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 25",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 26",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 27",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 28",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 29",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 30",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 31",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 32",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 33",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 34",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 35",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 36",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 37",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 38",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 39",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 40",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 41",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 42",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 43",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 44",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 45",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 46",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 47",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 48",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 49",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 50",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 51",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 52",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 53",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 54",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 55",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 56",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 57",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 58",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 59",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 60",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 61",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 62",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 63",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 64",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 65",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 66",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 67",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 68",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 69",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 70",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 71",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 72",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 73",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 74",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 75",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 76",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 77",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 78",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 79",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 80",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 81",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 82",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 83",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 84",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 85",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 86",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 87",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 88",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 89",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 90",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 91",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 92",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 93",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 94",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 95",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 96",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 97",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 98",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 99",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 100",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 101",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 102",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 103",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 104",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 105",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 106",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 107",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 108",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 109",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 110",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 111",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 112",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 113",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 114",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 115",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 116",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 117",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 118",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 119",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 120",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 121",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 122",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 123",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 124",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 125",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 126",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 127",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 128",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 129",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 130",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 131",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 132",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 133",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 134",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 135",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 136",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 137",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 138",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 139",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 140",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 141",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 142",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 143",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 144",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 145",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 146",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 147",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 148",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 149",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 150",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 151",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 152",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 153",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 154",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 155",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 156",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 157",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 158",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 159",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 160",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 161",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 162",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 163",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 164",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 165",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 166",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 167",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 168",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 169",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 170",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 171",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 172",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 173",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 174",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 175",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 176",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 177",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 178",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 179",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 180",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 181",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 182",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 183",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 184",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 185",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 186",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 187",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 188",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 189",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 190",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 191",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 192",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 193",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 194",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 195",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 196",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 197",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 198",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 199",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 200",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 201",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 202",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 203",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 204",
    "color": "orange",
    "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
  }
]
};
