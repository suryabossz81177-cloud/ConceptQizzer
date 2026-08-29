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
  "renderVersion": "windows.chapter.v3"
};
