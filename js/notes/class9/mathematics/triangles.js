/* ConceptQizzer — corrected chapter with topic-placed accurate SVG figures */
"use strict";
window.ChapterData = {
  "id": "9-mathematics-triangles",
  "title": "Triangles",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 7,
  "file": "js/notes/class9/mathematics/triangles.js",
  "enabled": true,
  "description": "Five-times-expanded, exam-standard Class 9 Mathematics notes for Triangles. Every major topic is explained from first principles with definitions, intuition, conditions, recognition cues, why-the-rule-works reasoning, step-by-step methods, multiple worked examples, error detection, proof-writing guidance, verification and practice. The original notes are preserved and expanded rather than replaced.",
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
    "Triangle: Structure and Classification",
    "Angle Sum and Exterior Angle",
    "Isosceles Triangle Theorem",
    "Congruence and Correspondence",
    "SSS Congruence",
    "SAS Congruence",
    "ASA and RHS",
    "CPCT: Corresponding Parts",
    "Triangle Inequality"
  ],
  "mainConcepts": [
    "Triangle: Structure and Classification",
    "Angle Sum and Exterior Angle",
    "Isosceles Triangle Theorem",
    "Congruence and Correspondence",
    "SSS Congruence",
    "SAS Congruence",
    "ASA and RHS",
    "CPCT: Corresponding Parts",
    "Triangle Inequality"
  ],
  "comparisonTables": [
    {
      "title": "Triangle congruence criteria",
      "columns": [
        "Criterion",
        "Information",
        "Condition"
      ],
      "rows": [
        [
          "SSS",
          "Three corresponding sides",
          "All equal respectively"
        ],
        [
          "SAS",
          "Two sides + angle",
          "Angle included"
        ],
        [
          "ASA",
          "Two angles + side",
          "Side included"
        ],
        [
          "RHS",
          "Right angle + hypotenuse + side",
          "Both triangles right-angled"
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
      "title": "Isosceles triangle theorem",
      "statement": "Angles opposite equal sides are equal.",
      "proof": "If two sides are equal, the corresponding opposite angles are equal; the converse also holds."
    },
    {
      "title": "CPCT",
      "statement": "Corresponding parts of congruent triangles are equal.",
      "proof": "First establish congruence using a valid criterion, then transfer corresponding side and angle equalities."
    }
  ],
  "formulaPropertyBank": [
    "Triangle angle sum = 180°",
    "Exterior angle = sum of two remote interior angles",
    "Sum of any two sides > third side",
    "SSS",
    "SAS",
    "ASA",
    "RHS"
  ],
  "conceptConnections": [
    "Triangle congruence is used to prove quadrilateral properties.",
    "Angle theorems provide data for congruence.",
    "Triangle inequality checks whether side lengths can form a triangle."
  ],
  "mathematicalThinking": [
    "Write correspondence first.",
    "Check the included angle for SAS.",
    "Do not use SSA as a general congruence criterion.",
    "Use CPCT only after congruence is established.",
    "Never use the visual appearance of a diagram as an unstated fact.",
    "Write the condition of a theorem before using its conclusion.",
    "Distinguish a statement from its converse.",
    "For a long problem, break the solution into named mini-goals.",
    "After solving, verify the result independently."
  ],
  "errorDetective": [
    {
      "problem": "SSA is a general congruence criterion.",
      "answer": "False."
    },
    {
      "problem": "CPCT can be used before proving congruence.",
      "answer": "False."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Can 4 cm, 7 cm and 12 cm form a triangle?",
      "answer": "No, because 4+7=11<12."
    }
  ],
  "realLifeMathematics": [
    "Triangulation",
    "Surveying",
    "Roof trusses",
    "Navigation",
    "Structural engineering"
  ],
  "mathematicalActivityLab": [
    {
      "title": "Congruence investigation",
      "steps": [
        "Draw two triangles.",
        "Mark equal sides/angles.",
        "Identify the available criterion.",
        "Write correspondence.",
        "Prove congruence.",
        "Use CPCT for one additional result."
      ]
    }
  ],
  "figureBank": [
    {
      "title": "Triangle angle sum",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Triangle angle sum\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Triangle angle sum</text><polygon points=\"180,250 350,80 520,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"350\" y=\"65\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"535\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"230\" y=\"235\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"350\" y=\"225\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"470\" y=\"235\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"350\" y=\"310\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">∠A + ∠B + ∠C = 180°</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Exterior angle",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Exterior angle\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Exterior angle theorem</text><polygon points=\"180,250 350,90 500,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><line x1=\"500\" y1=\"250\" x2=\"630\" y2=\"250\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"70\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"515\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"615\" y=\"235\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"560\" y=\"225\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">exterior angle</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">∠ACD = ∠A + ∠B</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "SSS",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"SSS\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SSS congruence</text><polygon points=\"120,250 200,100 300,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"400,250 480,100 580,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"210\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"260\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"160\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">c</text><text x=\"490\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"540\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"440\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">c</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Three corresponding sides equal</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "SAS",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"SAS\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SAS congruence</text><polygon points=\"120,250 200,100 300,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"400,250 480,100 580,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"210\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"260\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"440\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"490\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"200\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">θ</text><text x=\"480\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">θ</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Two sides and the included angle equal</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "RHS",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"RHS\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">RHS congruence</text><polygon points=\"120,250 120,100 300,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"400,250 400,100 580,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"132\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">90°</text><text x=\"412\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">90°</text><text x=\"210\" y=\"190\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">hyp.</text><text x=\"490\" y=\"190\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">hyp.</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Right angle + equal hypotenuse + one corresponding side</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    }
  ],
  "visualLearning": [
    "Create a triangle classification tree.",
    "Draw labelled SSS, SAS, ASA and RHS configurations."
  ],
  "masterDefinitions": [
    {
      "term": "Congruent",
      "definition": "Same shape and same size."
    },
    {
      "term": "Hypotenuse",
      "definition": "The side opposite the right angle."
    },
    {
      "term": "CPCT",
      "definition": "Corresponding Parts of Congruent Triangles."
    }
  ],
  "formulaRevisionSheet": [
    "Angle sum=180°",
    "Exterior angle=sum of remote interior angles",
    "a+b>c",
    "SSS",
    "SAS",
    "ASA",
    "RHS"
  ],
  "questionBank": [
    {
      "question": "Find the third angle if two angles are 48° and 67°.",
      "answer": "65°."
    },
    {
      "question": "Which criterion uses three corresponding sides?",
      "answer": "SSS."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Show Answer reveals the final answer and then the complete step-by-step solution."
  },
  "practiceSets": [
    {
      "title": "Practice A",
      "questions": [
        "Classify triangles.",
        "Find missing angles.",
        "Apply the isosceles theorem.",
        "Solve SSS/SAS/ASA/RHS problems.",
        "Use CPCT.",
        "Test side triples using triangle inequality."
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
      "question": "Which is a valid congruence criterion?",
      "options": [
        "SSA",
        "SSS",
        "AAA",
        "One side"
      ],
      "answer": "SSS"
    }
  ],
  "examZone": [
    "Know all congruence criteria and conditions.",
    "Maintain exact correspondence.",
    "Show every proof step.",
    "Use CPCT only after congruence.",
    "Read the question twice before writing equations or proof steps.",
    "Use exact mathematical vocabulary.",
    "Keep all labels consistent with the diagram.",
    "Show intermediate steps in multi-mark questions.",
    "End every proof with the exact statement that was required."
  ],
  "commonMistakes": [
    "Using SSA as a general criterion.",
    "Wrong correspondence order.",
    "Using CPCT too early.",
    "Ignoring the included angle in SAS.",
    "Skipping the condition check before applying a theorem.",
    "Writing a correct result without showing the reasoning in a proof.",
    "Confusing a definition with a property.",
    "Assuming a converse is automatically true.",
    "Using an unlabelled or misleading diagram as evidence."
  ],
  "masterRevision": [
    "Classify → angle properties → congruence → criterion → proof → CPCT → inequality.",
    "Read → identify givens → identify target → select theorem/property → derive → calculate → justify → verify → conclude."
  ],
  "detailedSummary": [
    "Triangles are fundamental rigid figures. Class 9 focuses on exact comparison of triangles through congruence. Selecting the correct criterion and maintaining correspondence are the central skills."
  ],
  "finalChapterTest": [
    {
      "question": "Explain how SAS proves two triangles congruent.",
      "answer": "Two corresponding sides and the included angle are equal, so the triangles are congruent by SAS.",
      "solution": "Identify the two equal corresponding sides. Confirm that the given equal angle lies between those sides in both triangles. Since the information exactly matches Side-Angle-Side, conclude congruence by SAS. Then CPCT may be used for corresponding parts."
    }
  ],
  "importantPoints": [
    "Triangle angle sum = 180°.",
    "Exterior angle equals the sum of two remote interior angles.",
    "SSS, SAS, ASA and RHS are key congruence criteria.",
    "SAS requires the included angle.",
    "RHS requires right triangles.",
    "CPCT follows congruence.",
    "Sum of any two sides is greater than the third.",
    "Definitions tell you what an object is.",
    "Theorems require their hypotheses.",
    "A converse needs separate justification.",
    "A diagram supports reasoning only through stated or proved facts.",
    "Verification is part of a strong mathematical solution."
  ],
  "keyTerms": [
    "Triangle",
    "Vertex",
    "Side",
    "Congruence",
    "Correspondence",
    "SSS",
    "SAS",
    "ASA",
    "RHS",
    "CPCT",
    "Hypotenuse",
    "Triangle inequality"
  ],
  "chapterSummary": [],
  "sections": [
    {
      "id": "triangle-intro",
      "title": "Triangle: Structure and Classification",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A triangle is a closed polygon formed by three non-collinear line segments. It has exactly three sides, three vertices and three interior angles. A triangle is named by its vertices, for example ΔABC.\n\nTriangles can be classified in two independent ways. By sides: scalene (all sides different), isosceles (two sides equal) and equilateral (all three sides equal). By angles: acute-angled (all angles less than 90°), right-angled (one angle 90°) and obtuse-angled (one angle greater than 90°).\n\nThese classifications can combine. For example, an isosceles triangle can be acute-angled, right-angled or obtuse-angled. An equilateral triangle is always acute-angled because each angle is 60°."
        },
        {
          "type": "example",
          "title": "Example — Classify by Sides",
          "color": "orange",
          "text": "Sides are 7 cm, 7 cm and 10 cm.\nTwo sides are equal, so the triangle is isosceles.\nIt is not equilateral because the third side is different.\nIt is not scalene because not all sides are different."
        },
        {
          "type": "example",
          "title": "Example — Classify by Angles",
          "color": "orange",
          "text": "Angles are 45°, 45° and 90°.\nOne angle is exactly 90°, so it is right-angled.\nTwo angles are equal, so it is also isosceles."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Triangle: Structure and Classification is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Triangle: Structure and Classification, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Triangle: Structure and Classification, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Triangle: Structure and Classification: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Triangle: Structure and Classification questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Triangle: Structure and Classification is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Triangle: Structure and Classification results are reliable.",
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
          "content": "After completing a Triangle: Structure and Classification problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "angle-sum",
      "title": "Angle Sum and Exterior Angle",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 Exterior angle",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Exterior angle\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Exterior angle theorem</text><polygon points=\"180,250 350,90 500,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><line x1=\"500\" y1=\"250\" x2=\"630\" y2=\"250\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"70\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"515\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"615\" y=\"235\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"560\" y=\"225\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">exterior angle</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">∠ACD = ∠A + ∠B</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "figure",
          "title": "📐 Triangle angle sum",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Triangle angle sum\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Triangle angle sum</text><polygon points=\"180,250 350,80 520,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"350\" y=\"65\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"535\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"230\" y=\"235\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"350\" y=\"225\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"470\" y=\"235\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"350\" y=\"310\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">∠A + ∠B + ∠C = 180°</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The three interior angles of a triangle always add to 180°.\n\nIf an exterior angle is formed by extending one side of a triangle, the exterior angle equals the sum of the two interior opposite angles. This is the exterior-angle theorem.\n\nThe key reasoning pattern is:\nexterior angle + adjacent interior angle = 180°;\ninterior angles of triangle = 180°;\ntherefore exterior angle = sum of the two remote interior angles."
        },
        {
          "type": "example",
          "title": "Find a Missing Interior Angle",
          "color": "orange",
          "text": "If ∠A=52° and ∠B=68°, then:\n∠C=180°−(52°+68°)\n=180°−120°\n=60°."
        },
        {
          "type": "example",
          "title": "Exterior Angle",
          "color": "orange",
          "text": "If the two remote interior angles are 55° and 72°, the exterior angle is:\n55°+72°=127°.\nIts adjacent interior angle is 180°−127°=53°."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Angle Sum and Exterior Angle is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Angle Sum and Exterior Angle, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Angle Sum and Exterior Angle, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Angle Sum and Exterior Angle: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Angle Sum and Exterior Angle questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Angle Sum and Exterior Angle is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Angle Sum and Exterior Angle results are reliable.",
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
          "content": "After completing a Angle Sum and Exterior Angle problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "isosceles",
      "title": "Isosceles Triangle Theorem",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "In an isosceles triangle, angles opposite equal sides are equal. Conversely, sides opposite equal angles are equal.\n\nIf AB=AC in ΔABC, then the angles opposite these sides are equal:\n∠B=∠C.\n\nThis is extremely useful because one equality of sides immediately creates an equality of angles, and the converse lets equal angles establish equal sides."
        },
        {
          "type": "example",
          "title": "Worked Example",
          "color": "orange",
          "text": "AB=AC and ∠B=48°.\nSince AB=AC, ∠B=∠C=48°.\nTherefore ∠A=180°−96°=84°."
        },
        {
          "type": "example",
          "title": "Converse Example",
          "color": "orange",
          "text": "If ∠B=∠C, then the sides opposite them are equal. Hence AB=AC and ΔABC is isosceles."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Isosceles Triangle Theorem is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Isosceles Triangle Theorem, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Isosceles Triangle Theorem, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Isosceles Triangle Theorem: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Isosceles Triangle Theorem questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Isosceles Triangle Theorem is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Isosceles Triangle Theorem results are reliable.",
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
          "content": "After completing a Isosceles Triangle Theorem problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "congruence",
      "title": "Congruence and Correspondence",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Two figures are congruent when they have exactly the same shape and size. For triangles, congruence means that corresponding sides and corresponding angles are equal.\n\nThe order in a statement such as ΔABC ≅ ΔPQR tells correspondence:\nA↔P, B↔Q, C↔R.\nTherefore AB↔PQ, BC↔QR, CA↔RP.\n\nCorrect correspondence is essential. A wrong order can produce a mathematically incorrect statement even if the two triangles are actually congruent."
        },
        {
          "type": "example",
          "title": "Correspondence",
          "color": "orange",
          "text": "If ΔABC≅ΔXYZ, then:\nA↔X, B↔Y, C↔Z.\nThus ∠B=∠Y and AC=XZ."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Congruence and Correspondence is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Congruence and Correspondence, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Congruence and Correspondence, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Congruence and Correspondence: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Congruence and Correspondence questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Congruence and Correspondence is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Congruence and Correspondence results are reliable.",
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
          "content": "After completing a Congruence and Correspondence problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "sss",
      "title": "SSS Congruence",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 SSS",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"SSS\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SSS congruence</text><polygon points=\"120,250 200,100 300,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"400,250 480,100 580,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"210\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"260\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"160\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">c</text><text x=\"490\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"540\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"440\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">c</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Three corresponding sides equal</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "SSS states that if three sides of one triangle are respectively equal to three sides of another triangle, the triangles are congruent.\n\nWhen using SSS, write all three side equalities and then state the exact correspondence. Do not simply say “three sides are equal” without identifying which sides correspond."
        },
        {
          "type": "example",
          "title": "Complete SSS Proof",
          "color": "orange",
          "text": "Given AB=PQ, BC=QR and CA=RP.\nThe three corresponding sides are equal.\nTherefore ΔABC≅ΔPQR by SSS.\nHence, by CPCT, ∠A=∠P, ∠B=∠Q and ∠C=∠R."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "SSS Congruence is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on SSS Congruence, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For SSS Congruence, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with SSS Congruence: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step SSS Congruence questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in SSS Congruence is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why SSS Congruence results are reliable.",
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
          "content": "After completing a SSS Congruence problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "sas",
      "title": "SAS Congruence",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 SAS",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"SAS\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SAS congruence</text><polygon points=\"120,250 200,100 300,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"400,250 480,100 580,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"210\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"260\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"440\" y=\"185\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text><text x=\"490\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">a</text><text x=\"200\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">θ</text><text x=\"480\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">θ</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Two sides and the included angle equal</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "SAS requires two corresponding sides and the included angle between those two sides to be equal. The word included is the trap: the equal angle must lie between the two equal sides.\n\nIf AB=PQ, AC=PR and ∠A=∠P, then ∠A lies between AB and AC, so SAS applies."
        },
        {
          "type": "example",
          "title": "SAS Proof",
          "color": "orange",
          "text": "AB=5 cm, AC=7 cm, PQ=5 cm, PR=7 cm and ∠A=∠P.\nThe equal angle is included between the two equal sides.\nTherefore ΔABC≅ΔPQR by SAS."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "SAS Congruence is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on SAS Congruence, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For SAS Congruence, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with SAS Congruence: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step SAS Congruence questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in SAS Congruence is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why SAS Congruence results are reliable.",
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
          "content": "After completing a SAS Congruence problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "asa",
      "title": "ASA and RHS",
      "blocks": [
        {
          "type": "figure",
          "title": "📐 RHS",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"RHS\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">RHS congruence</text><polygon points=\"120,250 120,100 300,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"400,250 400,100 580,250\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"132\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">90°</text><text x=\"412\" y=\"120\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">90°</text><text x=\"210\" y=\"190\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">hyp.</text><text x=\"490\" y=\"190\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">hyp.</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Right angle + equal hypotenuse + one corresponding side</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "concept",
          "title": "ASA",
          "color": "blue",
          "text": "ASA means two corresponding angles and the included side are equal. Once two angles are known, the third angles are also determined because each triangle has angle sum 180°."
        },
        {
          "type": "example",
          "title": "ASA Example",
          "color": "orange",
          "text": "∠A=∠P, AB=PQ and ∠B=∠Q.\nThe equal side is between the two equal angles.\nTherefore ΔABC≅ΔPQR by ASA."
        },
        {
          "type": "concept",
          "title": "RHS",
          "color": "blue",
          "text": "RHS applies only to right-angled triangles. If the hypotenuse and one corresponding side are equal and both triangles contain a right angle, the triangles are congruent by RHS."
        },
        {
          "type": "example",
          "title": "RHS Example",
          "color": "orange",
          "text": "Both triangles are right-angled. Their hypotenuses are 13 cm and their corresponding legs are 5 cm.\nTherefore the triangles are congruent by RHS."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "ASA and RHS is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on ASA and RHS, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For ASA and RHS, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with ASA and RHS: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step ASA and RHS questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in ASA and RHS is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why ASA and RHS results are reliable.",
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
          "content": "After completing a ASA and RHS problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "cpct",
      "title": "CPCT: Corresponding Parts",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "CPCT means Corresponding Parts of Congruent Triangles. It is a consequence of congruence, not a criterion used to establish congruence.\n\nCorrect order:\n1. Prove triangles congruent.\n2. Write the correspondence.\n3. Use CPCT to obtain required equal sides or angles.\n\nUsing CPCT before proving congruence is circular reasoning."
        },
        {
          "type": "example",
          "title": "CPCT Example",
          "color": "orange",
          "text": "If ΔABC≅ΔPQR, then by CPCT:\nAB=PQ,\nBC=QR,\nCA=RP,\n∠A=∠P,\n∠B=∠Q,\n∠C=∠R."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "CPCT: Corresponding Parts is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on CPCT: Corresponding Parts, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For CPCT: Corresponding Parts, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with CPCT: Corresponding Parts: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step CPCT: Corresponding Parts questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in CPCT: Corresponding Parts is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why CPCT: Corresponding Parts results are reliable.",
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
          "content": "After completing a CPCT: Corresponding Parts problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "inequality",
      "title": "Triangle Inequality",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "For three positive lengths to form a triangle, the sum of any two sides must be greater than the third:\na+b>c, b+c>a, c+a>b.\n\nIf equality occurs, the three lengths lie on a straight line rather than forming a proper triangle. If the sum is less than the third side, a triangle is impossible."
        },
        {
          "type": "example",
          "title": "Possible",
          "color": "orange",
          "text": "4, 6 and 7:\n4+6=10>7,\n6+7>4,\n7+4>6.\nAll conditions hold, so a triangle is possible."
        },
        {
          "type": "example",
          "title": "Impossible",
          "color": "orange",
          "text": "3, 4 and 8:\n3+4=7<8.\nTherefore a triangle cannot be formed."
        },
        {
          "type": "concept",
          "title": "Core idea — in simple language",
          "content": "Triangle Inequality is not a topic to memorise as a list of rules. The central goal is to understand what the objects mean, what conditions are given, and why a mathematical conclusion follows. In Class 9, you should be able to move in both directions: from a definition to a property, and from a property back to a justified conclusion when a converse is valid. Read the diagram carefully, name the quantities, identify the known information, and only then choose a theorem or property. This habit prevents most careless errors and makes longer proof questions much easier.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "What to notice first",
          "content": "Before solving a question on Triangle Inequality, ask four questions: (1) What is given? (2) What exactly has to be found or proved? (3) Which definition or theorem connects the given information to the target? (4) What check can confirm the result? Writing these four points mentally turns an unfamiliar problem into a sequence of small decisions. A diagram is evidence of the stated relationships, not permission to assume extra relationships that have not been given.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Why the rule works",
          "content": "The important Class 9 skill is justification. A correct answer is stronger when you can explain why each transformation is allowed. For Triangle Inequality, the usual chain is definition → known property → substitution or angle/side relationship → calculation → verification. When a theorem is used, name it. When an equation is rearranged, show the operation. When a geometric equality is claimed, identify the reason. This makes the solution readable, checkable, and suitable for a proof-based examination.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "How to recognise the situation",
          "content": "Look for trigger words and diagram features associated with Triangle Inequality: equal measures, parallel lines, right angles, common endpoints, intersecting lines, corresponding positions, equal sides, bisected segments, or a stated construction. Do not choose a theorem merely because its name looks familiar. Match every condition of the theorem with the information actually present in the question.",
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
          "content": "Step 1: Read the entire question.\nStep 2: Copy the essential data into symbols.\nStep 3: Draw or inspect a clean labelled figure.\nStep 4: Identify the relevant definition/theorem.\nStep 5: Write the relation before substituting numbers.\nStep 6: Simplify carefully, keeping units/degrees where relevant.\nStep 7: State the final answer clearly.\nStep 8: Verify it using an independent property. This routine is especially useful for multi-step Triangle Inequality questions.",
          "color": "indigo"
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "content": "A common mistake in Triangle Inequality is jumping from the appearance of the diagram directly to the answer. Another is applying a theorem without checking its hypotheses. A third is doing the numerical calculation first and trying to invent a reason afterward. The safer method is the reverse: identify the mathematical relationship first, write it, and then calculate. If the relationship cannot be justified, stop and re-examine the conditions.",
          "color": "red"
        },
        {
          "type": "thinking",
          "title": "Mathematical thinking",
          "content": "Ask: If one condition were removed, would the conclusion still follow? If the order of the objects changed, would the statement remain true? Is the converse true? Can the result be obtained in a second way? These questions move you beyond routine substitution and help you understand why Triangle Inequality results are reliable.",
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
          "content": "After completing a Triangle Inequality problem, check: Are all given conditions used appropriately? Did I accidentally assume something from the drawing? Did I apply the correct direction of a theorem? Does the answer satisfy the original relation? Is the final statement exactly what was asked?",
          "color": "cyan"
        }
      ]
    },
    {
      "id": "triangles-deep-10",
      "title": "Structure and classification",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "A triangle is a three-sided polygon. It can be classified by sides as scalene, isosceles or equilateral, and by angles as acute, right or obtuse.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For structure and classification, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
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
          "content": "Structure and classification is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
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
      "id": "triangles-deep-11",
      "title": "Angle sum",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "The three interior angles of a triangle add to 180°. This is one of the most frequently used facts in numerical and proof questions.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For angle sum, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
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
          "content": "Angle sum is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
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
      "id": "triangles-deep-12",
      "title": "Exterior angle",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "An exterior angle formed by extending a side equals the sum of the two remote interior angles. This connects the local exterior angle to the whole triangle.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For exterior angle, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
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
          "content": "Exterior angle is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
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
      "id": "triangles-deep-13",
      "title": "Isosceles triangles",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "Equal sides in an isosceles triangle have equal opposite angles, and the converse also holds. This theorem is a major proof tool.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For isosceles triangles, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
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
          "content": "Isosceles triangles is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
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
      "id": "triangles-deep-14",
      "title": "Congruence",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "Congruent figures have the same shape and size. For triangles, SSS, SAS, ASA and RHS provide reliable criteria under their stated conditions.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For congruence, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
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
          "content": "Congruence is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
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
      "id": "triangles-deep-15",
      "title": "CPCT",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "Once congruence has been established, corresponding parts are equal. CPCT is a consequence of congruence, not a replacement for proving congruence.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For cpct, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
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
          "content": "CPCT is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
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
      "id": "triangles-deep-16",
      "title": "Triangle inequality",
      "blocks": [
        {
          "type": "concept",
          "title": "Deep concept explanation",
          "content": "The sum of any two sides of a triangle is greater than the third side. It can be used to test whether a proposed set of three lengths can form a triangle.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Meaning in mathematical language",
          "content": "Translate the idea into precise mathematical language. For triangle inequality, do not rely on the picture alone. Identify the objects involved, the conditions that are explicitly stated, and the conclusion that is allowed by the relevant definition or theorem.",
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
          "content": "Triangle inequality is important because it supplies a reusable reasoning pattern. Once the pattern is understood, unfamiliar questions become variations of the same structure rather than completely new problems.",
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
      "id": "chapter-7-deep-expansion-2-5x",
      "title": "2.5× Minimum Detailed Expansion",
      "blocks": [
        {
          "type": "concept",
          "title": "1. Triangle fundamentals — Deep Concept",
          "color": "blue",
          "text": "Triangle fundamentals is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "1. Triangle fundamentals — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Triangle fundamentals. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "1. Exam Point",
          "color": "green",
          "text": "For Triangle fundamentals, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Triangle fundamentals",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Triangle fundamentals.",
              "answer": "Give the standard Class 9 definition/property of Triangle fundamentals.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Triangle fundamentals?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Triangle fundamentals.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Triangle fundamentals?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Triangle fundamentals be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "2. Classification by sides — Deep Concept",
          "color": "blue",
          "text": "Classification by sides is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "2. Classification by sides — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Classification by sides. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "2. Exam Point",
          "color": "green",
          "text": "For Classification by sides, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Classification by sides",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Classification by sides.",
              "answer": "Give the standard Class 9 definition/property of Classification by sides.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Classification by sides?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Classification by sides.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Classification by sides?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Classification by sides be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "3. Classification by angles — Deep Concept",
          "color": "blue",
          "text": "Classification by angles is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "3. Classification by angles — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Classification by angles. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "3. Exam Point",
          "color": "green",
          "text": "For Classification by angles, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Classification by angles",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Classification by angles.",
              "answer": "Give the standard Class 9 definition/property of Classification by angles.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Classification by angles?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Classification by angles.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Classification by angles?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Classification by angles be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "4. Angle-sum theorem — Deep Concept",
          "color": "blue",
          "text": "Angle-sum theorem is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "4. Angle-sum theorem — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Angle-sum theorem. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "4. Exam Point",
          "color": "green",
          "text": "For Angle-sum theorem, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Angle-sum theorem",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Angle-sum theorem.",
              "answer": "Give the standard Class 9 definition/property of Angle-sum theorem.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Angle-sum theorem?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Angle-sum theorem.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Angle-sum theorem?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Angle-sum theorem be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "5. Exterior angle theorem — Deep Concept",
          "color": "blue",
          "text": "Exterior angle theorem is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "5. Exterior angle theorem — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Exterior angle theorem. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "5. Exam Point",
          "color": "green",
          "text": "For Exterior angle theorem, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Exterior angle theorem",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Exterior angle theorem.",
              "answer": "Give the standard Class 9 definition/property of Exterior angle theorem.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Exterior angle theorem?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Exterior angle theorem.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Exterior angle theorem?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Exterior angle theorem be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "6. Congruence meaning — Deep Concept",
          "color": "blue",
          "text": "Congruence meaning is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "6. Congruence meaning — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Congruence meaning. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "6. Exam Point",
          "color": "green",
          "text": "For Congruence meaning, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Congruence meaning",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Congruence meaning.",
              "answer": "Give the standard Class 9 definition/property of Congruence meaning.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Congruence meaning?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Congruence meaning.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Congruence meaning?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Congruence meaning be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "7. SSS criterion — Deep Concept",
          "color": "blue",
          "text": "SSS criterion is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "7. SSS criterion — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving SSS criterion. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "7. Exam Point",
          "color": "green",
          "text": "For SSS criterion, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — SSS criterion",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of SSS criterion.",
              "answer": "Give the standard Class 9 definition/property of SSS criterion.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in SSS criterion?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on SSS criterion.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving SSS criterion?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving SSS criterion be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "8. SAS criterion — Deep Concept",
          "color": "blue",
          "text": "SAS criterion is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "8. SAS criterion — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving SAS criterion. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "8. Exam Point",
          "color": "green",
          "text": "For SAS criterion, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — SAS criterion",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of SAS criterion.",
              "answer": "Give the standard Class 9 definition/property of SAS criterion.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in SAS criterion?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on SAS criterion.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving SAS criterion?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving SAS criterion be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "9. ASA criterion — Deep Concept",
          "color": "blue",
          "text": "ASA criterion is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "9. ASA criterion — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving ASA criterion. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "9. Exam Point",
          "color": "green",
          "text": "For ASA criterion, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — ASA criterion",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of ASA criterion.",
              "answer": "Give the standard Class 9 definition/property of ASA criterion.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in ASA criterion?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on ASA criterion.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving ASA criterion?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving ASA criterion be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "10. RHS criterion — Deep Concept",
          "color": "blue",
          "text": "RHS criterion is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "10. RHS criterion — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving RHS criterion. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "10. Exam Point",
          "color": "green",
          "text": "For RHS criterion, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — RHS criterion",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of RHS criterion.",
              "answer": "Give the standard Class 9 definition/property of RHS criterion.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in RHS criterion?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on RHS criterion.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving RHS criterion?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving RHS criterion be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "11. CPCT — Deep Concept",
          "color": "blue",
          "text": "CPCT is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "11. CPCT — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving CPCT. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "11. Exam Point",
          "color": "green",
          "text": "For CPCT, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — CPCT",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of CPCT.",
              "answer": "Give the standard Class 9 definition/property of CPCT.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in CPCT?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on CPCT.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving CPCT?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving CPCT be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "12. Isosceles triangle property — Deep Concept",
          "color": "blue",
          "text": "Isosceles triangle property is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "12. Isosceles triangle property — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Isosceles triangle property. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "12. Exam Point",
          "color": "green",
          "text": "For Isosceles triangle property, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Isosceles triangle property",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Isosceles triangle property.",
              "answer": "Give the standard Class 9 definition/property of Isosceles triangle property.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Isosceles triangle property?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Isosceles triangle property.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Isosceles triangle property?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Isosceles triangle property be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "13. Triangle inequality — Deep Concept",
          "color": "blue",
          "text": "Triangle inequality is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "13. Triangle inequality — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Triangle inequality. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "13. Exam Point",
          "color": "green",
          "text": "For Triangle inequality, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Triangle inequality",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Triangle inequality.",
              "answer": "Give the standard Class 9 definition/property of Triangle inequality.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Triangle inequality?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Triangle inequality.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Triangle inequality?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Triangle inequality be independently verified?",
              "answer": "Use another valid theorem, congruence argument, angle sum, construction or algebraic check.",
              "solution": "Choose an independent check that tests the conclusion rather than repeating the same step."
            }
          ]
        },
        {
          "type": "concept",
          "title": "14. Congruence proof strategy — Deep Concept",
          "color": "blue",
          "text": "Congruence proof strategy is explained from first principles. Start with the exact definition, identify every condition under which the result is valid, connect it to earlier geometry, and then apply it. Do not rely on the appearance of a diagram. A correct solution distinguishes what is given from what must be proved and uses only justified relationships. The explanation should answer: What is it? Why is it true? When can it be used? What changes if a condition is removed? How can the final result be checked?"
        },
        {
          "type": "example",
          "title": "14. Congruence proof strategy — Solved Method",
          "color": "orange",
          "text": "Step 1: list the givens involving Congruence proof strategy. Step 2: write exactly what is required. Step 3: select the relevant definition, theorem, property or construction. Step 4: explicitly check its hypotheses. Step 5: calculate or prove one step at a time and write the reason for each major step. Step 6: verify using angle sums, congruence correspondence, parallel-line relationships, a construction or another independent theorem as appropriate. Step 7: write the final conclusion clearly."
        },
        {
          "type": "tip",
          "title": "14. Exam Point",
          "color": "green",
          "text": "For Congruence proof strategy, remember the condition as well as the result. Never infer equality, perpendicularity or parallelism only because a printed diagram looks that way. In proof questions, write a reason after every important inference."
        },
        {
          "type": "practice",
          "title": "Practice — Congruence proof strategy",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition or property of Congruence proof strategy.",
              "answer": "Give the standard Class 9 definition/property of Congruence proof strategy.",
              "solution": "State the definition/property and its essential condition."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition important in Congruence proof strategy?",
              "answer": "A theorem or property is valid only when its hypotheses are satisfied.",
              "solution": "Compare the given information with the hypotheses before applying the result."
            },
            {
              "difficulty": "Application",
              "question": "Give the correct solution sequence for a problem on Congruence proof strategy.",
              "answer": "Givens → required → theorem/property → working → verification.",
              "solution": "Show the rule, justify its use, work logically, and check the conclusion."
            },
            {
              "difficulty": "HOTS",
              "question": "What is a common mistake involving Congruence proof strategy?",
              "answer": "Assuming an unproved visual property from the diagram.",
              "solution": "Use only given markings, definitions, constructions and valid theorems."
            },
            {
              "difficulty": "Challenge",
              "question": "How can a result involving Congruence proof strategy be independently verified?",
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
      "text": "Revision Lab 1: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 2: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 3: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 4: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 5: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 6: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 7: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 8: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 9: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 10: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 11: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 12: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 13: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 14: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 15: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 16: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 17: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 18: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 19: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 20: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 21: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 22: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 23: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 24: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 25: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 26: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 27: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 28: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 29: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
      "text": "Revision Lab 30: read a fresh Chapter 7 problem, separate the givens from the required result, draw or label the figure accurately when needed, identify the exact theorem/property, and check every hypothesis before using it. Then work from the given information toward the conclusion. For geometry, a visual appearance is never a proof. Use definitions, angle relationships, congruence, parallel-line criteria, constructions and converse results only when justified. Finish with an explicit verification."
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
    },
    {
      "type": "exam",
      "title": "Examiner Drill 205",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 206",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 207",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 208",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 209",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 210",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 211",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 212",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 213",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 214",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 215",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 216",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 217",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 218",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 219",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 220",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 221",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 222",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 223",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 224",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 225",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 226",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 227",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 228",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 229",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 230",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    },
    {
      "type": "exam",
      "title": "Examiner Drill 231",
      "color": "orange",
      "content": "Write the givens, required result, exact theorem/property, hypothesis check, logical working and verification. Do not assume a visual property from the diagram."
    }
  ]
};
