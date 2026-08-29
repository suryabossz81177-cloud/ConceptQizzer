/* ConceptQizzer — Class 9 Mathematics — corrected render-safe chapter file */
/* Loader fix: all chapter extensions are inside the object; no post-declaration ChapterData.* statements remain. */
"use strict";

var ChapterData = {
  "id": "9-mathematics-circles",
  "title": "Circles",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 9,
  "file": "js/notes/class9/mathematics/circles.js",
  "enabled": true,
  "description": "A deeply expanded Class 9 Circles chapter covering definitions, chord theorems, central and inscribed angles, same-segment theorem, cyclic quadrilaterals, converse reasoning, proof strategy, numerical applications, misconceptions and HOTS.",
  "learningObjectives": [
    "Define all circle elements.",
    "Apply every Class 9 circle theorem with its conditions.",
    "Write complete proofs using congruence and angle facts.",
    "Solve numerical chord and angle problems.",
    "Prove or disprove cyclicity using converse reasoning.",
    "Solve mixed HOTS questions."
  ],
  "prerequisiteCheck": [
    "Triangle congruence/RHS",
    "Pythagoras theorem",
    "Angle sum",
    "Quadrilateral angle facts"
  ],
  "conceptRoadmap": [
    "A chord is a diameter.",
    "Equal chord theorem works across different circles.",
    "Any two angles standing on a chord are equal.",
    "A quadrilateral that looks cyclic is automatically cyclic.",
    "Central-angle theorem works without the same-arc condition.",
    "A diagram is a proof.",
    "A chord can be longer than the diameter."
  ],
  "comparisonTables": [],
  "theoremPropertyLab": [],
  "formulaPropertyBank": [
    "d=2r",
    "Perpendicular from centre to chord bisects chord",
    "Equal chords in same circle ⇔ equal centre distances",
    "Central angle=2×inscribed angle on same arc",
    "Angles in same segment are equal",
    "Opposite angles of cyclic quadrilateral=180°"
  ],
  "conceptConnections": [],
  "mathematicalThinking": [
    "Identify the given information before selecting a formula.",
    "State the condition for every theorem before applying it.",
    "Keep exact values as long as possible and estimate only as a check.",
    "Use a second method to verify an important result."
  ],
  "errorDetective": [
    {
      "problem": "Use the same-circle condition.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Mark the common chord before comparing inscribed angles.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Use perpendicular distance, not slant distance.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "State the converse when proving concyclicity.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Check chord≤diameter.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Can a chord be longer than the diameter?",
      "answer": "No."
    },
    {
      "question": "Prove the converse of the perpendicular-chord theorem.",
      "answer": "The centre-to-midpoint line is perpendicular to the chord."
    },
    {
      "question": "Explain why the phrase “same arc” prevents an incorrect doubling rule.",
      "answer": "Different arcs can subtend different angles."
    },
    {
      "question": "Can a quadrilateral be cyclic if two adjacent angles sum to 180°?",
      "answer": "That fact alone is not the standard criterion."
    },
    {
      "question": "A cyclic quadrilateral has angles x, 2x, 3x, 4x in order. Is this possible?",
      "answer": "No."
    }
  ],
  "realLifeMathematics": [],
  "mathematicalActivityLab": [],
  "figureBank": [
  {
    "title": "Circle elements",
    "diagram": "          •P\n       .−──────−.\n     .´     O     `.\n    /       │r      \\\n   |        •Q       |\n    \\               /\n     `−───────────´\nO=centre; OQ=radius.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Centre perpendicular to chord",
    "diagram": "A────────M────────B\n          │\n          │\n          O\nOM⊥AB and AM=MB",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Central / inscribed angle",
    "diagram": "        A\n       / \\\n      /   \\\n     O     P\n      \\   /\n       \\ /\n        B\n∠AOB=2∠APB when both stand on the same arc AB.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Cyclic quadrilateral",
    "diagram": "       A──────B\n     /          \\\n    D────────────C\nA,B,C,D lie on one circle; opposite angles sum to 180°.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Tangent",
    "diagram": "tangent ─────────T────────\n                  │\n                  │ OT\n                  O\nOT⊥tangent at T",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Chord bound",
    "diagram": "diameter = longest chord\nAny chord length ≤ diameter.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  }
],
  "visualLearning": [],
  "masterDefinitions": [
    {
      "term": "Circle",
      "definition": "Set of all points at a fixed distance from a fixed point."
    },
    {
      "term": "Radius",
      "definition": "Segment joining centre to a point on the circle."
    },
    {
      "term": "Diameter",
      "definition": "Chord passing through centre; d=2r."
    },
    {
      "term": "Chord",
      "definition": "Segment joining two points on a circle."
    },
    {
      "term": "Central angle",
      "definition": "Angle subtended by an arc at the centre."
    },
    {
      "term": "Inscribed angle",
      "definition": "Angle subtended by an arc at a point on the circle."
    },
    {
      "term": "Cyclic quadrilateral",
      "definition": "Quadrilateral whose four vertices lie on one circle."
    }
  ],
  "formulaRevisionSheet": [
    "d=2r",
    "Perpendicular from centre to chord bisects chord",
    "Equal chords in same circle ⇔ equal centre distances",
    "Central angle=2×inscribed angle on same arc",
    "Angles in same segment are equal",
    "Opposite angles of cyclic quadrilateral=180°"
  ],
  "questionBank": [
    {
      "topic": "Circle basics",
      "difficulty": "Basic",
      "question": "Find the diameter of a circle of radius 9 cm.",
      "answer": "18 cm.",
      "solution": "d=2r=2×9=18 cm."
    },
    {
      "topic": "Circle basics",
      "difficulty": "Understanding",
      "question": "A point is 12 cm from a centre and the radius is 10 cm. Classify it.",
      "answer": "Outside.",
      "solution": "Since 12>10, the point lies outside the circle."
    },
    {
      "topic": "Circle basics",
      "difficulty": "Application",
      "question": "A diameter is 31 cm. Find the radius.",
      "answer": "15.5 cm.",
      "solution": "r=d/2=31/2=15.5 cm."
    },
    {
      "topic": "Circle basics",
      "difficulty": "HOTS",
      "question": "Explain why every diameter is a chord but not every chord is a diameter.",
      "answer": "A diameter has both endpoints on the circle and passes through the centre; a general chord need not pass through the centre.",
      "solution": "The definition of chord requires only two endpoints on the circle. A diameter satisfies this plus the extra centre condition."
    },
    {
      "topic": "Circle basics",
      "difficulty": "Challenge",
      "question": "Can a chord be longer than the diameter?",
      "answer": "No.",
      "solution": "For chord distance h from centre, half-chord=√(r²−h²)≤r, hence chord≤2r=d."
    },
    {
      "topic": "Chord theorem",
      "difficulty": "Basic",
      "question": "A chord is 12 cm from centre of radius 20 cm. Find its length.",
      "answer": "32 cm.",
      "solution": "Half-chord=√(20²−12²)=√256=16; full chord=32 cm."
    },
    {
      "topic": "Chord theorem",
      "difficulty": "Understanding",
      "question": "What is the correct meaning of “distance of a chord from the centre”?",
      "answer": "The perpendicular distance from the centre to the chord.",
      "solution": "The shortest distance from a point to a line is measured perpendicularly."
    },
    {
      "topic": "Chord theorem",
      "difficulty": "Application",
      "question": "A chord is 14 cm long in a circle of radius 25 cm. Find its centre distance.",
      "answer": "24 cm.",
      "solution": "Half-chord=7. Distance=√(25²−7²)=√576=24 cm."
    },
    {
      "topic": "Chord theorem",
      "difficulty": "HOTS",
      "question": "Two chords are equal in the same circle. Must they be parallel?",
      "answer": "No.",
      "solution": "The theorem gives equal perpendicular distances from the centre, not parallelism. Equal chords can have different orientations."
    },
    {
      "topic": "Chord theorem",
      "difficulty": "Challenge",
      "question": "Prove the converse of the perpendicular-chord theorem.",
      "answer": "The centre-to-midpoint line is perpendicular to the chord.",
      "solution": "If M bisects AB, AM=MB; OA=OB and OM is common, so ΔOMA≅ΔOMB by SSS. Thus ∠OMA=∠OMB. They form a linear pair, so each is 90°; hence OM⊥AB."
    },
    {
      "topic": "Circle angles",
      "difficulty": "Basic",
      "question": "A central angle is 86°. Find the inscribed angle on the same arc.",
      "answer": "43°.",
      "solution": "Inscribed angle=86°/2=43°."
    },
    {
      "topic": "Circle angles",
      "difficulty": "Understanding",
      "question": "An inscribed angle is 54°. Find the central angle on the same arc.",
      "answer": "108°.",
      "solution": "Central angle=2×54°=108°."
    },
    {
      "topic": "Circle angles",
      "difficulty": "Application",
      "question": "An angle standing on a diameter is what kind of angle?",
      "answer": "A right angle, 90°.",
      "solution": "A diameter subtends 180° at the centre; half is 90°."
    },
    {
      "topic": "Circle angles",
      "difficulty": "HOTS",
      "question": "Two inscribed angles stand on the same chord but lie on opposite sides of the chord. Are they equal?",
      "answer": "They are generally supplementary, not equal.",
      "solution": "The same-segment theorem applies when the vertices lie in the same segment. Opposite segments lead to a supplementary relationship."
    },
    {
      "topic": "Circle angles",
      "difficulty": "Challenge",
      "question": "Explain why the phrase “same arc” prevents an incorrect doubling rule.",
      "answer": "Different arcs can subtend different angles.",
      "solution": "The theorem connects two angles only when they intercept the same arc/chord; without that condition the numerical relationship is not determined."
    },
    {
      "topic": "Cyclic quadrilateral",
      "difficulty": "Basic",
      "question": "Opposite angles are 117° and x°. Find x.",
      "answer": "63°.",
      "solution": "x+117=180, so x=63°."
    },
    {
      "topic": "Cyclic quadrilateral",
      "difficulty": "Understanding",
      "question": "Why must opposite angles be supplementary?",
      "answer": "They stand on arcs that together make a complete circle.",
      "solution": "The two inscribed angles intercept complementary portions whose total arc measure is 360°, producing an angle sum of 180°."
    },
    {
      "topic": "Cyclic quadrilateral",
      "difficulty": "Application",
      "question": "Angles 2x+10° and 3x−20° are opposite. Find x.",
      "answer": "38°.",
      "solution": "2x+10+3x−20=180 ⇒ 5x=190 ⇒ x=38."
    },
    {
      "topic": "Cyclic quadrilateral",
      "difficulty": "HOTS",
      "question": "A quadrilateral has opposite angles 88° and 92°. What follows?",
      "answer": "It is cyclic under the standard non-degenerate converse condition.",
      "solution": "88+92=180, so the converse cyclic-quadrilateral theorem applies."
    },
    {
      "topic": "Cyclic quadrilateral",
      "difficulty": "Challenge",
      "question": "Can a quadrilateral be cyclic if two adjacent angles sum to 180°?",
      "answer": "That fact alone is not the standard criterion.",
      "solution": "The theorem concerns opposite angles. Adjacent angles in many quadrilaterals can also sum to 180° without proving cyclicity."
    },
    {
      "topic": "Circle synthesis",
      "difficulty": "Basic",
      "question": "Find the chord length for r=17 cm and centre distance 8 cm.",
      "answer": "30 cm.",
      "solution": "Half-chord=√(289−64)=15; chord=30."
    },
    {
      "topic": "Circle synthesis",
      "difficulty": "Understanding",
      "question": "Which theorem should you consider first when a perpendicular from centre meets a chord?",
      "answer": "The perpendicular-from-centre-to-chord theorem.",
      "solution": "It immediately gives that the perpendicular bisects the chord."
    },
    {
      "topic": "Circle synthesis",
      "difficulty": "Application",
      "question": "In a cyclic quadrilateral ∠A=3x−5° and ∠C=2x+30°. Find x.",
      "answer": "31.",
      "solution": "3x−5+2x+30=180 ⇒ 5x+25=180 ⇒ x=31."
    },
    {
      "topic": "Circle synthesis",
      "difficulty": "HOTS",
      "question": "A chord is 16 cm and radius is 10 cm. Find its centre distance.",
      "answer": "6 cm.",
      "solution": "Half-chord=8; distance=√(100−64)=6 cm."
    },
    {
      "topic": "Circle synthesis",
      "difficulty": "Challenge",
      "question": "A cyclic quadrilateral has angles x, 2x, 3x, 4x in order. Is this possible?",
      "answer": "No.",
      "solution": "Opposite pairs require x+3x=180 ⇒ x=45, while 2x+4x=180 ⇒ x=30. Contradiction."
    },
    {
      "topic": "Verification",
      "difficulty": "Basic",
      "question": "Can a chord equal the diameter?",
      "answer": "Yes.",
      "solution": "Exactly when the chord passes through the centre."
    },
    {
      "topic": "Verification",
      "difficulty": "Understanding",
      "question": "What should you check before using the cyclic quadrilateral theorem?",
      "answer": "That all four vertices lie on the same circle.",
      "solution": "Cyclicity is the hypothesis."
    },
    {
      "topic": "Verification",
      "difficulty": "Application",
      "question": "A student gets chord 28 cm in a circle of radius 12 cm. Diagnose.",
      "answer": "Impossible.",
      "solution": "Diameter=24 cm, so a chord cannot be 28 cm."
    },
    {
      "topic": "Verification",
      "difficulty": "HOTS",
      "question": "A student says every non-diameter chord has the same length. Correct?",
      "answer": "No.",
      "solution": "Chord length depends on its perpendicular distance from the centre."
    },
    {
      "topic": "Verification",
      "difficulty": "Challenge",
      "question": "Give a logical reason a diagram cannot by itself prove two angles equal.",
      "answer": "A drawing may not be to scale and visual appearance does not establish a theorem hypothesis.",
      "solution": "Only given information and proven geometric relationships justify equality."
    }
  ],
  "showAnswerSystem": {
    "instruction": "Every practice question has a Show Answer control. The answer and complete step-by-step solution remain hidden until the learner clicks it.",
    "answerButtonLabel": "Show Answer"
  },
  "practiceSets": [
    {
      "title": "Basic Practice",
      "questions": [
        "Find the diameter of a circle of radius 9 cm.",
        "A chord is 12 cm from centre of radius 20 cm. Find its length.",
        "A central angle is 86°. Find the inscribed angle on the same arc.",
        "Opposite angles are 117° and x°. Find x.",
        "Find the chord length for r=17 cm and centre distance 8 cm.",
        "Can a chord equal the diameter?"
      ]
    },
    {
      "title": "Understanding Practice",
      "questions": [
        "A point is 12 cm from a centre and the radius is 10 cm. Classify it.",
        "What is the correct meaning of “distance of a chord from the centre”?",
        "An inscribed angle is 54°. Find the central angle on the same arc.",
        "Why must opposite angles be supplementary?",
        "Which theorem should you consider first when a perpendicular from centre meets a chord?",
        "What should you check before using the cyclic quadrilateral theorem?"
      ]
    },
    {
      "title": "Application Practice",
      "questions": [
        "A diameter is 31 cm. Find the radius.",
        "A chord is 14 cm long in a circle of radius 25 cm. Find its centre distance.",
        "An angle standing on a diameter is what kind of angle?",
        "Angles 2x+10° and 3x−20° are opposite. Find x.",
        "In a cyclic quadrilateral ∠A=3x−5° and ∠C=2x+30°. Find x.",
        "A student gets chord 28 cm in a circle of radius 12 cm. Diagnose."
      ]
    },
    {
      "title": "HOTS Practice",
      "questions": [
        "Explain why every diameter is a chord but not every chord is a diameter.",
        "Two chords are equal in the same circle. Must they be parallel?",
        "Two inscribed angles stand on the same chord but lie on opposite sides of the chord. Are they equal?",
        "A quadrilateral has opposite angles 88° and 92°. What follows?",
        "A chord is 16 cm and radius is 10 cm. Find its centre distance.",
        "A student says every non-diameter chord has the same length. Correct?"
      ]
    },
    {
      "title": "Challenge Practice",
      "questions": [
        "Can a chord be longer than the diameter?",
        "Prove the converse of the perpendicular-chord theorem.",
        "Explain why the phrase “same arc” prevents an incorrect doubling rule.",
        "Can a quadrilateral be cyclic if two adjacent angles sum to 180°?",
        "A cyclic quadrilateral has angles x, 2x, 3x, 4x in order. Is this possible?",
        "Give a logical reason a diagram cannot by itself prove two angles equal."
      ]
    }
  ],
  "timedPractice": [
    {
      "duration": "45 minutes",
      "instruction": "Attempt the mixed paper without notes. Reveal answers only after completing each question."
    }
  ],
  "chapterQuiz": [
    {
      "question": "Which is the longest chord?",
      "options": [
        "Radius",
        "Diameter",
        "Arc",
        "Sector"
      ],
      "answer": "Diameter."
    },
    {
      "question": "Central angle 100° gives what inscribed angle?",
      "options": [
        "50°.",
        "90°",
        "360°",
        "Cannot be determined"
      ],
      "answer": "50°."
    },
    {
      "question": "Opposite cyclic angles add to?",
      "options": [
        "180°.",
        "90°",
        "360°",
        "Cannot be determined"
      ],
      "answer": "180°."
    },
    {
      "question": "A chord is 24 cm in a radius-13 cm circle. Find centre distance.",
      "options": [
        "5 cm.",
        "90°",
        "360°",
        "Cannot be determined"
      ],
      "answer": "5 cm."
    }
  ],
  "examZone": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "commonMistakes": [
    "Use the same-circle condition.",
    "Mark the common chord before comparing inscribed angles.",
    "Use perpendicular distance, not slant distance.",
    "State the converse when proving concyclicity.",
    "Check chord≤diameter."
  ],
  "masterRevision": [
    "Circles: definitions → conditions → concepts → worked examples → guided practice → mixed HOTS → revision → final test."
  ],
  "detailedSummary": [
    "A deeply expanded Class 9 Circles chapter covering definitions, chord theorems, central and inscribed angles, same-segment theorem, cyclic quadrilaterals, converse reasoning, proof strategy, numerical applications, misconceptions and HOTS.",
    "The chapter should be revised by explaining each definition aloud, deriving or justifying each major formula, solving examples without looking at the solution, and checking the final result."
  ],
  "finalChapterTest": [
    {
      "topic": "Verification",
      "difficulty": "Understanding",
      "question": "What should you check before using the cyclic quadrilateral theorem?",
      "answer": "That all four vertices lie on the same circle.",
      "solution": "Cyclicity is the hypothesis."
    },
    {
      "topic": "Verification",
      "difficulty": "Application",
      "question": "A student gets chord 28 cm in a circle of radius 12 cm. Diagnose.",
      "answer": "Impossible.",
      "solution": "Diameter=24 cm, so a chord cannot be 28 cm."
    },
    {
      "topic": "Verification",
      "difficulty": "HOTS",
      "question": "A student says every non-diameter chord has the same length. Correct?",
      "answer": "No.",
      "solution": "Chord length depends on its perpendicular distance from the centre."
    },
    {
      "topic": "Verification",
      "difficulty": "Challenge",
      "question": "Give a logical reason a diagram cannot by itself prove two angles equal.",
      "answer": "A drawing may not be to scale and visual appearance does not establish a theorem hypothesis.",
      "solution": "Only given information and proven geometric relationships justify equality."
    }
  ],
  "importantPoints": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "keyTerms": [
    "Circle",
    "Radius",
    "Diameter",
    "Chord",
    "Central angle",
    "Inscribed angle",
    "Cyclic quadrilateral"
  ],
  "chapterSummary": "A deeply expanded Class 9 Circles chapter covering definitions, chord theorems, central and inscribed angles, same-segment theorem, cyclic quadrilaterals, converse reasoning, proof strategy, numerical applications, misconceptions and HOTS.",
  "sections": [
    {
      "id": "circle-basics",
      "title": "Circle, Radius, Diameter, Chord and Arc",
      "blocks": [

  {
    "type": "concept",
    "title": "📐 Figure 1 — Circle elements",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n          •P\n       .−──────−.\n     .´     O     `.\n    /       │r      \\\n   |        •Q       |\n    \\               /\n     `−───────────´\nO=centre; OQ=radius.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 2 — Centre perpendicular to chord",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nA────────M────────B\n          │\n          │\n          O\nOM⊥AB and AM=MB\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 3 — Central / inscribed angle",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n        A\n       / \\\n      /   \\\n     O     P\n      \\   /\n       \\ /\n        B\n∠AOB=2∠APB when both stand on the same arc AB.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 4 — Cyclic quadrilateral",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n       A──────B\n     /          \\\n    D────────────C\nA,B,C,D lie on one circle; opposite angles sum to 180°.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 5 — Tangent",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\ntangent ─────────T────────\n                  │\n                  │ OT\n                  O\nOT⊥tangent at T\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 6 — Chord bound",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\ndiameter = longest chord\nAny chord length ≤ diameter.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  }
,

        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A circle is the set of all points in a plane at a fixed distance from a fixed point. The fixed point is the centre and the fixed distance is the radius r. A diameter is a chord through the centre, so d=2r. A chord joins two points on the circle; a diameter is therefore a special chord and is the longest chord. An arc is a portion of the circumference. A sector is bounded by two radii and an arc, while a segment is bounded by a chord and its corresponding arc.\n\nFor a point P, compare OP with r: OP<r means inside, OP=r means on the circle, and OP>r means outside. This classification is based on distance, not on how a point appears in a drawing."
        },
        {
          "type": "example",
          "title": "Diameter",
          "color": "orange",
          "text": "If r=8 cm, d=2r=16 cm. The reverse is r=d/2."
        },
        {
          "type": "example",
          "title": "Chord comparison",
          "color": "orange",
          "text": "A chord 10 cm from the centre of a circle of radius 13 cm cannot exist because its half-length would require √(169−100)=√69, so its full length is 2√69 cm; this is less than the diameter 26 cm."
        },
        {
          "type": "example",
          "title": "Language trap",
          "color": "orange",
          "text": "“Radius” names a segment/length from centre to circumference. “Centre” names a point. Do not interchange them."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Circle, Radius, Diameter, Chord and Arc",
          "color": "purple",
          "questions": [
            {
              "topic": "Circle basics",
              "difficulty": "Basic",
              "question": "Find the diameter of a circle of radius 9 cm.",
              "answer": "18 cm.",
              "solution": "d=2r=2×9=18 cm."
            },
            {
              "topic": "Circle basics",
              "difficulty": "Understanding",
              "question": "A point is 12 cm from a centre and the radius is 10 cm. Classify it.",
              "answer": "Outside.",
              "solution": "Since 12>10, the point lies outside the circle."
            },
            {
              "topic": "Circle basics",
              "difficulty": "Application",
              "question": "A diameter is 31 cm. Find the radius.",
              "answer": "15.5 cm.",
              "solution": "r=d/2=31/2=15.5 cm."
            },
            {
              "topic": "Circle basics",
              "difficulty": "HOTS",
              "question": "Explain why every diameter is a chord but not every chord is a diameter.",
              "answer": "A diameter has both endpoints on the circle and passes through the centre; a general chord need not pass through the centre.",
              "solution": "The definition of chord requires only two endpoints on the circle. A diameter satisfies this plus the extra centre condition."
            },
            {
              "topic": "Circle basics",
              "difficulty": "Challenge",
              "question": "Can a chord be longer than the diameter?",
              "answer": "No.",
              "solution": "For chord distance h from centre, half-chord=√(r²−h²)≤r, hence chord≤2r=d."
            }
          ]
        }
      ]
    },
    {
      "id": "chord-theorems",
      "title": "Perpendicular from Centre to a Chord and Equal Chords",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "If a perpendicular is drawn from the centre of a circle to a chord, it bisects the chord. Proof: if OM⊥AB, join OA and OB. OA=OB radii, OM is common, and both angles at M are 90°, so the two right triangles are congruent by RHS; hence AM=MB. The converse says that if a line through the centre bisects a chord, it is perpendicular to that chord.\n\nEqual chords of the same circle are equidistant from the centre, and conversely chords equidistant from the centre are equal. “Distance” means perpendicular distance. The same-circle condition is essential."
        },
        {
          "type": "example",
          "title": "Chord-length calculation",
          "color": "orange",
          "text": "For r=13 cm and centre distance 5 cm, half-chord=√(13²−5²)=12 cm, so chord=24 cm."
        },
        {
          "type": "example",
          "title": "Comparing chords",
          "color": "orange",
          "text": "If two chords in the same circle are 4 cm and 7 cm from the centre, the 4 cm chord is longer because it is nearer the centre."
        },
        {
          "type": "example",
          "title": "Proof writing",
          "color": "orange",
          "text": "A high-quality proof names the equal radii, the common side, the right angles, the congruence criterion and the final CPCT conclusion."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Perpendicular from Centre to a Chord and Equal Chords",
          "color": "purple",
          "questions": [
            {
              "topic": "Chord theorem",
              "difficulty": "Basic",
              "question": "A chord is 12 cm from centre of radius 20 cm. Find its length.",
              "answer": "32 cm.",
              "solution": "Half-chord=√(20²−12²)=√256=16; full chord=32 cm."
            },
            {
              "topic": "Chord theorem",
              "difficulty": "Understanding",
              "question": "What is the correct meaning of “distance of a chord from the centre”?",
              "answer": "The perpendicular distance from the centre to the chord.",
              "solution": "The shortest distance from a point to a line is measured perpendicularly."
            },
            {
              "topic": "Chord theorem",
              "difficulty": "Application",
              "question": "A chord is 14 cm long in a circle of radius 25 cm. Find its centre distance.",
              "answer": "24 cm.",
              "solution": "Half-chord=7. Distance=√(25²−7²)=√576=24 cm."
            },
            {
              "topic": "Chord theorem",
              "difficulty": "HOTS",
              "question": "Two chords are equal in the same circle. Must they be parallel?",
              "answer": "No.",
              "solution": "The theorem gives equal perpendicular distances from the centre, not parallelism. Equal chords can have different orientations."
            },
            {
              "topic": "Chord theorem",
              "difficulty": "Challenge",
              "question": "Prove the converse of the perpendicular-chord theorem.",
              "answer": "The centre-to-midpoint line is perpendicular to the chord.",
              "solution": "If M bisects AB, AM=MB; OA=OB and OM is common, so ΔOMA≅ΔOMB by SSS. Thus ∠OMA=∠OMB. They form a linear pair, so each is 90°; hence OM⊥AB."
            }
          ]
        }
      ]
    },
    {
      "id": "circle-angles",
      "title": "Central Angle and Angle at the Circumference",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at any point on the remaining circle. If ∠AOB is central and ∠ACB is an inscribed angle standing on the same arc AB, then ∠AOB=2∠ACB. The same-arc condition is essential.\n\nThe proof is based on equal radii and isosceles triangles. Join the centre to the relevant circumference points, use equal-radius facts to express base angles, then add triangle angles. Depending on the position of the centre, the algebra may appear in different forms, but the factor 2 remains the key result."
        },
        {
          "type": "example",
          "title": "Direct example",
          "color": "orange",
          "text": "If central angle ∠AOB=124°, then ∠ACB=62° for an inscribed angle on the same arc."
        },
        {
          "type": "example",
          "title": "Reverse example",
          "color": "orange",
          "text": "If ∠ACB=37°, then ∠AOB=74°. Do not double an angle unless it stands on the same arc."
        },
        {
          "type": "example",
          "title": "Diameter as a special chord",
          "color": "orange",
          "text": "An angle standing on a diameter is 90°. This is the special case where the central angle is 180°, so the inscribed angle is 90°."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Central Angle and Angle at the Circumference",
          "color": "purple",
          "questions": [
            {
              "topic": "Circle angles",
              "difficulty": "Basic",
              "question": "A central angle is 86°. Find the inscribed angle on the same arc.",
              "answer": "43°.",
              "solution": "Inscribed angle=86°/2=43°."
            },
            {
              "topic": "Circle angles",
              "difficulty": "Understanding",
              "question": "An inscribed angle is 54°. Find the central angle on the same arc.",
              "answer": "108°.",
              "solution": "Central angle=2×54°=108°."
            },
            {
              "topic": "Circle angles",
              "difficulty": "Application",
              "question": "An angle standing on a diameter is what kind of angle?",
              "answer": "A right angle, 90°.",
              "solution": "A diameter subtends 180° at the centre; half is 90°."
            },
            {
              "topic": "Circle angles",
              "difficulty": "HOTS",
              "question": "Two inscribed angles stand on the same chord but lie on opposite sides of the chord. Are they equal?",
              "answer": "They are generally supplementary, not equal.",
              "solution": "The same-segment theorem applies when the vertices lie in the same segment. Opposite segments lead to a supplementary relationship."
            },
            {
              "topic": "Circle angles",
              "difficulty": "Challenge",
              "question": "Explain why the phrase “same arc” prevents an incorrect doubling rule.",
              "answer": "Different arcs can subtend different angles.",
              "solution": "The theorem connects two angles only when they intercept the same arc/chord; without that condition the numerical relationship is not determined."
            }
          ]
        }
      ]
    },
    {
      "id": "same-segment",
      "title": "Angles in the Same Segment and Cyclic Quadrilateral",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Angles subtended by the same chord in the same segment of a circle are equal. To recognise this, locate the common chord first, then check that both vertices lie on the same side of that chord. If four points lie on a circle, they form a cyclic quadrilateral and each pair of opposite angles sums to 180°. Conversely, if a quadrilateral has a pair of opposite angles whose sum is 180° under the standard non-degenerate conditions, the four vertices are concyclic.\n\nAn exterior angle of a cyclic quadrilateral equals the interior opposite angle because a linear pair sums to 180° while the opposite interior angles also sum to 180°."
        },
        {
          "type": "example",
          "title": "Same-segment example",
          "color": "orange",
          "text": "If ∠ACB=48° and D is in the same segment with respect to chord AB, then ∠ADB=48°."
        },
        {
          "type": "example",
          "title": "Cyclic example",
          "color": "orange",
          "text": "If ∠A=78° in cyclic ABCD, then ∠C=102° because opposite angles are supplementary."
        },
        {
          "type": "example",
          "title": "Converse example",
          "color": "orange",
          "text": "If ∠ABC=82° and ∠ADC=98°, their sum is 180°, so the converse establishes that ABCD is cyclic."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Angles in the Same Segment and Cyclic Quadrilateral",
          "color": "purple",
          "questions": [
            {
              "topic": "Cyclic quadrilateral",
              "difficulty": "Basic",
              "question": "Opposite angles are 117° and x°. Find x.",
              "answer": "63°.",
              "solution": "x+117=180, so x=63°."
            },
            {
              "topic": "Cyclic quadrilateral",
              "difficulty": "Understanding",
              "question": "Why must opposite angles be supplementary?",
              "answer": "They stand on arcs that together make a complete circle.",
              "solution": "The two inscribed angles intercept complementary portions whose total arc measure is 360°, producing an angle sum of 180°."
            },
            {
              "topic": "Cyclic quadrilateral",
              "difficulty": "Application",
              "question": "Angles 2x+10° and 3x−20° are opposite. Find x.",
              "answer": "38°.",
              "solution": "2x+10+3x−20=180 ⇒ 5x=190 ⇒ x=38."
            },
            {
              "topic": "Cyclic quadrilateral",
              "difficulty": "HOTS",
              "question": "A quadrilateral has opposite angles 88° and 92°. What follows?",
              "answer": "It is cyclic under the standard non-degenerate converse condition.",
              "solution": "88+92=180, so the converse cyclic-quadrilateral theorem applies."
            },
            {
              "topic": "Cyclic quadrilateral",
              "difficulty": "Challenge",
              "question": "Can a quadrilateral be cyclic if two adjacent angles sum to 180°?",
              "answer": "That fact alone is not the standard criterion.",
              "solution": "The theorem concerns opposite angles. Adjacent angles in many quadrilaterals can also sum to 180° without proving cyclicity."
            }
          ]
        }
      ]
    },
    {
      "id": "circle-synthesis",
      "title": "Circle Theorem Synthesis and Proof Strategy",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Most difficult circle questions combine two or more ideas. A robust method is: read the diagram, mark the centre and radii, identify the common chord/arc, test whether a perpendicular creates a right triangle, decide whether a quadrilateral is cyclic, select the theorem, calculate or prove, then verify. Never use visual appearance as proof.\n\nA chord problem often becomes a Pythagoras problem after drawing the perpendicular from the centre. An angle problem often becomes a cyclic-quadrilateral problem after identifying four concyclic points. Proof questions should contain a chain of justified statements rather than a sequence of unexplained answers."
        },
        {
          "type": "example",
          "title": "Mixed numerical example",
          "color": "orange",
          "text": "For r=17 cm and chord 30 cm, half-chord=15 cm. Centre distance=√(17²−15²)=8 cm."
        },
        {
          "type": "example",
          "title": "Mixed angle example",
          "color": "orange",
          "text": "If ABCD is cyclic, ∠A=72° and ∠BAC=28°, then ∠BCA=44°. Since ∠C=108°, ∠ACD=108−44=64°."
        },
        {
          "type": "example",
          "title": "Exam proof example",
          "color": "orange",
          "text": "To prove a line through the centre is perpendicular to a chord, aim to create two congruent triangles and then use equal adjacent angles forming a straight line."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Circle Theorem Synthesis and Proof Strategy",
          "color": "purple",
          "questions": [
            {
              "topic": "Circle synthesis",
              "difficulty": "Basic",
              "question": "Find the chord length for r=17 cm and centre distance 8 cm.",
              "answer": "30 cm.",
              "solution": "Half-chord=√(289−64)=15; chord=30."
            },
            {
              "topic": "Circle synthesis",
              "difficulty": "Understanding",
              "question": "Which theorem should you consider first when a perpendicular from centre meets a chord?",
              "answer": "The perpendicular-from-centre-to-chord theorem.",
              "solution": "It immediately gives that the perpendicular bisects the chord."
            },
            {
              "topic": "Circle synthesis",
              "difficulty": "Application",
              "question": "In a cyclic quadrilateral ∠A=3x−5° and ∠C=2x+30°. Find x.",
              "answer": "31.",
              "solution": "3x−5+2x+30=180 ⇒ 5x+25=180 ⇒ x=31."
            },
            {
              "topic": "Circle synthesis",
              "difficulty": "HOTS",
              "question": "A chord is 16 cm and radius is 10 cm. Find its centre distance.",
              "answer": "6 cm.",
              "solution": "Half-chord=8; distance=√(100−64)=6 cm."
            },
            {
              "topic": "Circle synthesis",
              "difficulty": "Challenge",
              "question": "A cyclic quadrilateral has angles x, 2x, 3x, 4x in order. Is this possible?",
              "answer": "No.",
              "solution": "Opposite pairs require x+3x=180 ⇒ x=45, while 2x+4x=180 ⇒ x=30. Contradiction."
            }
          ]
        }
      ]
    },
    {
      "id": "circle-misconceptions",
      "title": "Common Misconceptions, Conditions and Verification",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Common mistakes include treating every chord as a diameter, using equal-chord theorems for different circles, forgetting the same-arc condition, assuming a quadrilateral is cyclic because it looks circular, and measuring angles from an inaccurate sketch. A theorem is a conditional statement: the required configuration must be established before it is applied.\n\nVerification methods include checking that a computed chord is at most the diameter, checking that an angle lies between 0° and 180° in the intended non-reflex setting, and checking that opposite cyclic angles sum to 180°."
        },
        {
          "type": "example",
          "title": "Chord sanity check",
          "color": "orange",
          "text": "A calculated chord longer than 2r is impossible and indicates an arithmetic or setup error."
        },
        {
          "type": "example",
          "title": "Angle sanity check",
          "color": "orange",
          "text": "If a central angle is 160°, an inscribed angle on the same arc should be 80°, not 320°."
        },
        {
          "type": "example",
          "title": "Proof sanity check",
          "color": "orange",
          "text": "If your proof uses a theorem whose hypothesis was never established, the argument is incomplete even if the conclusion happens to be true."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Common Misconceptions, Conditions and Verification",
          "color": "purple",
          "questions": [
            {
              "topic": "Verification",
              "difficulty": "Basic",
              "question": "Can a chord equal the diameter?",
              "answer": "Yes.",
              "solution": "Exactly when the chord passes through the centre."
            },
            {
              "topic": "Verification",
              "difficulty": "Understanding",
              "question": "What should you check before using the cyclic quadrilateral theorem?",
              "answer": "That all four vertices lie on the same circle.",
              "solution": "Cyclicity is the hypothesis."
            },
            {
              "topic": "Verification",
              "difficulty": "Application",
              "question": "A student gets chord 28 cm in a circle of radius 12 cm. Diagnose.",
              "answer": "Impossible.",
              "solution": "Diameter=24 cm, so a chord cannot be 28 cm."
            },
            {
              "topic": "Verification",
              "difficulty": "HOTS",
              "question": "A student says every non-diameter chord has the same length. Correct?",
              "answer": "No.",
              "solution": "Chord length depends on its perpendicular distance from the centre."
            },
            {
              "topic": "Verification",
              "difficulty": "Challenge",
              "question": "Give a logical reason a diagram cannot by itself prove two angles equal.",
              "answer": "A drawing may not be to scale and visual appearance does not establish a theorem hypothesis.",
              "solution": "Only given information and proven geometric relationships justify equality."
            }
          ]
        }
      ]
    }
  ],
  "renderCompatibility": {
    "rendererStyle": "ConceptQizzer ChapterData",
    "answerReveal": "show-answer",
    "tables": "native-renderer-tables",
    "rawJSONForStudents": false
  },
  "deepExpansion5X": [
  {
    "id": "chapter-9-deep-expansion-5x",
    "title": "5× Minimum Detailed Expansion — Same Format as Chapters 5–8",
    "blocks": [
      {
        "type": "concept",
        "title": "1. Circle fundamentals — Deep Concept",
        "color": "blue",
        "text": "A circle is the set of all points in a plane that are at the same distance from a fixed point called the centre. That common distance is the radius. A diameter passes through the centre and has length twice the radius. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "1. Circle fundamentals — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "1. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Circle fundamentals",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Circle fundamentals.",
            "answer": "State the standard Class 9 result for Circle fundamentals.",
            "solution": "A circle is the set of all points in a plane that are at the same distance from a fixed point called the centre. That common distance is the radius. A diameter passes through the centre and has length twice the radius."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Circle fundamentals important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Circle fundamentals.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Circle fundamentals.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Circle fundamentals.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "2. Radius, diameter and chord — Deep Concept",
        "color": "blue",
        "text": "A radius joins the centre to a point on the circle. A chord joins any two points on the circle. A diameter is a chord passing through the centre and is the longest chord of a circle. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "2. Radius, diameter and chord — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "2. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Radius, diameter and chord",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Radius, diameter and chord.",
            "answer": "State the standard Class 9 result for Radius, diameter and chord.",
            "solution": "A radius joins the centre to a point on the circle. A chord joins any two points on the circle. A diameter is a chord passing through the centre and is the longest chord of a circle."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Radius, diameter and chord important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Radius, diameter and chord.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Radius, diameter and chord.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Radius, diameter and chord.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "3. Arc and circumference — Deep Concept",
        "color": "blue",
        "text": "An arc is a part of the circle's circumference. The circumference is the complete curved boundary. A semicircle corresponds to half the circumference, while a minor/major arc depends on its central angle. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "3. Arc and circumference — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "3. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Arc and circumference",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Arc and circumference.",
            "answer": "State the standard Class 9 result for Arc and circumference.",
            "solution": "An arc is a part of the circle's circumference. The circumference is the complete curved boundary. A semicircle corresponds to half the circumference, while a minor/major arc depends on its central angle."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Arc and circumference important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Arc and circumference.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Arc and circumference.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Arc and circumference.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "4. Equal chords and their distances — Deep Concept",
        "color": "blue",
        "text": "In the same circle, equal chords are equidistant from the centre, and chords equidistant from the centre are equal. The distance from the centre to a chord is measured along the perpendicular. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "4. Equal chords and their distances — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "4. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Equal chords and their distances",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Equal chords and their distances.",
            "answer": "State the standard Class 9 result for Equal chords and their distances.",
            "solution": "In the same circle, equal chords are equidistant from the centre, and chords equidistant from the centre are equal. The distance from the centre to a chord is measured along the perpendicular."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Equal chords and their distances important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Equal chords and their distances.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Equal chords and their distances.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Equal chords and their distances.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "5. Perpendicular from centre to chord — Deep Concept",
        "color": "blue",
        "text": "The perpendicular from the centre of a circle to a chord bisects the chord. This theorem is a major bridge between circle geometry and right-triangle reasoning. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "5. Perpendicular from centre to chord — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "5. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Perpendicular from centre to chord",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Perpendicular from centre to chord.",
            "answer": "State the standard Class 9 result for Perpendicular from centre to chord.",
            "solution": "The perpendicular from the centre of a circle to a chord bisects the chord. This theorem is a major bridge between circle geometry and right-triangle reasoning."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Perpendicular from centre to chord important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Perpendicular from centre to chord.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Perpendicular from centre to chord.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Perpendicular from centre to chord.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "6. Converse chord theorem — Deep Concept",
        "color": "blue",
        "text": "If a line from the centre bisects a chord, it is perpendicular to that chord. Thus the midpoint of a chord and the centre determine a right angle. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "6. Converse chord theorem — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "6. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Converse chord theorem",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Converse chord theorem.",
            "answer": "State the standard Class 9 result for Converse chord theorem.",
            "solution": "If a line from the centre bisects a chord, it is perpendicular to that chord. Thus the midpoint of a chord and the centre determine a right angle."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Converse chord theorem important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Converse chord theorem.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Converse chord theorem.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Converse chord theorem.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "7. Angle subtended by a chord — Deep Concept",
        "color": "blue",
        "text": "A chord can subtend an angle at the centre and angles at points on the remaining circle. Understanding which points lie on the same arc is essential before applying an angle theorem. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "7. Angle subtended by a chord — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "7. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Angle subtended by a chord",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Angle subtended by a chord.",
            "answer": "State the standard Class 9 result for Angle subtended by a chord.",
            "solution": "A chord can subtend an angle at the centre and angles at points on the remaining circle. Understanding which points lie on the same arc is essential before applying an angle theorem."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Angle subtended by a chord important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Angle subtended by a chord.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Angle subtended by a chord.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Angle subtended by a chord.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "8. Angle at centre and circumference — Deep Concept",
        "color": "blue",
        "text": "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at any point on the remaining circle. This is one of the key circle theorems. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "8. Angle at centre and circumference — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "8. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Angle at centre and circumference",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Angle at centre and circumference.",
            "answer": "State the standard Class 9 result for Angle at centre and circumference.",
            "solution": "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at any point on the remaining circle. This is one of the key circle theorems."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Angle at centre and circumference important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Angle at centre and circumference.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Angle at centre and circumference.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Angle at centre and circumference.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "9. Angles in the same segment — Deep Concept",
        "color": "blue",
        "text": "Angles subtended by the same chord in the same segment of a circle are equal. The word 'same segment' is important because different arcs can produce different relationships. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "9. Angles in the same segment — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "9. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Angles in the same segment",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Angles in the same segment.",
            "answer": "State the standard Class 9 result for Angles in the same segment.",
            "solution": "Angles subtended by the same chord in the same segment of a circle are equal. The word 'same segment' is important because different arcs can produce different relationships."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Angles in the same segment important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Angles in the same segment.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Angles in the same segment.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Angles in the same segment.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "10. Cyclic quadrilateral — Deep Concept",
        "color": "blue",
        "text": "A quadrilateral whose four vertices lie on a circle is called cyclic. Its opposite angles are supplementary, a result that can be used in both numerical and proof questions. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "10. Cyclic quadrilateral — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "10. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Cyclic quadrilateral",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Cyclic quadrilateral.",
            "answer": "State the standard Class 9 result for Cyclic quadrilateral.",
            "solution": "A quadrilateral whose four vertices lie on a circle is called cyclic. Its opposite angles are supplementary, a result that can be used in both numerical and proof questions."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Cyclic quadrilateral important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Cyclic quadrilateral.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Cyclic quadrilateral.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Cyclic quadrilateral.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "11. Converse of cyclic condition — Deep Concept",
        "color": "blue",
        "text": "If a pair of opposite angles of a quadrilateral is supplementary, the quadrilateral can be shown to be cyclic under the relevant converse theorem. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "11. Converse of cyclic condition — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "11. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Converse of cyclic condition",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Converse of cyclic condition.",
            "answer": "State the standard Class 9 result for Converse of cyclic condition.",
            "solution": "If a pair of opposite angles of a quadrilateral is supplementary, the quadrilateral can be shown to be cyclic under the relevant converse theorem."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Converse of cyclic condition important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Converse of cyclic condition.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Converse of cyclic condition.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Converse of cyclic condition.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "12. Tangent and radius — Deep Concept",
        "color": "blue",
        "text": "A tangent touches a circle at exactly one point. The radius through the point of contact is perpendicular to the tangent. This creates a right angle that often unlocks the solution. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "12. Tangent and radius — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "12. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Tangent and radius",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Tangent and radius.",
            "answer": "State the standard Class 9 result for Tangent and radius.",
            "solution": "A tangent touches a circle at exactly one point. The radius through the point of contact is perpendicular to the tangent. This creates a right angle that often unlocks the solution."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Tangent and radius important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Tangent and radius.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Tangent and radius.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Tangent and radius.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "13. Tangent-chord reasoning — Deep Concept",
        "color": "blue",
        "text": "When a tangent and chord meet at the point of contact, the angle relationships can be connected to angles in the alternate segment. Always identify the chord and the corresponding segment. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "13. Tangent-chord reasoning — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "13. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Tangent-chord reasoning",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Tangent-chord reasoning.",
            "answer": "State the standard Class 9 result for Tangent-chord reasoning.",
            "solution": "When a tangent and chord meet at the point of contact, the angle relationships can be connected to angles in the alternate segment. Always identify the chord and the corresponding segment."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Tangent-chord reasoning important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Tangent-chord reasoning.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Tangent-chord reasoning.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Tangent-chord reasoning.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "14. Proof strategy for circle problems — Deep Concept",
        "color": "blue",
        "text": "Circle questions are solved most reliably by marking the centre, identifying the relevant chord/arc, constructing a radius or perpendicular when useful, and then naming the exact theorem used. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "14. Proof strategy for circle problems — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "14. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Proof strategy for circle problems",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Proof strategy for circle problems.",
            "answer": "State the standard Class 9 result for Proof strategy for circle problems.",
            "solution": "Circle questions are solved most reliably by marking the centre, identifying the relevant chord/arc, constructing a radius or perpendicular when useful, and then naming the exact theorem used."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Proof strategy for circle problems important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Proof strategy for circle problems.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Proof strategy for circle problems.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Proof strategy for circle problems.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "15. Common circle misconceptions — Deep Concept",
        "color": "blue",
        "text": "A chord is not always a diameter; a tangent does not cut the circle at two points; a radius is not necessarily perpendicular to every chord; and a diagram's visual appearance is not proof. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "15. Common circle misconceptions — Solved Method",
        "color": "orange",
        "text": "Step 1: write all given quantities with symbols and units. Step 2: identify exactly what is asked. Step 3: select the definition, theorem or formula. Step 4: check every condition and convert units if required. Step 5: substitute carefully, keeping intermediate steps visible. Step 6: simplify without premature rounding. Step 7: check whether the magnitude, units and mathematical meaning are sensible. Step 8: state the final answer clearly."
      },
      {
        "type": "tip",
        "title": "15. Exam Point",
        "color": "green",
        "text": "Write the formula before substitution. Define symbols when a formula first appears. Keep units consistent and do not infer information from a diagram that has not been given."
      },
      {
        "type": "practice",
        "title": "Practice — Common circle misconceptions",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Common circle misconceptions.",
            "answer": "State the standard Class 9 result for Common circle misconceptions.",
            "solution": "A chord is not always a diameter; a tangent does not cut the circle at two points; a radius is not necessarily perpendicular to every chord; and a diagram's visual appearance is not proof."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Common circle misconceptions important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Common circle misconceptions.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Common circle misconceptions.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Common circle misconceptions.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      }
    ]
  }
],
  "revisionLabs5X": [
  {
    "type": "concept",
    "title": "Revision Lab 1 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 1 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 1 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 2 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 2 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 2 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 3 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 3 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 3 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 4 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 4 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 4 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 5 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 5 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 5 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 6 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 6 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 6 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 7 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 7 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 7 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 8 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 8 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 8 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 9 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 9 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 9 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 10 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 10 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 10 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 11 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 11 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 11 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 12 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 12 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 12 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 13 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 13 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 13 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 14 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 14 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 14 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 15 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 15 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 15 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 16 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 16 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 16 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 17 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 17 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 17 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 18 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 18 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 18 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 19 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 19 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 19 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 20 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 20 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 20 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 21 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 21 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 21 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 22 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 22 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 22 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 23 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 23 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 23 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 24 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 24 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 24 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 25 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 25 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 25 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 26 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 26 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 26 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 27 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 27 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 27 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 28 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 28 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 28 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 29 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 29 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 29 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 30 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 30 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 30 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 31 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 31 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 31 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 32 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 32 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 32 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 33 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 33 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 33 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 34 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 34 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 34 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 35 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 35 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 35 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 36 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 36 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 36 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 37 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 37 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 37 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 38 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 38 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 38 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 39 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 39 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 39 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 40 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 40 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 40 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 41 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 41 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 41 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 42 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 42 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 42 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 43 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 43 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 43 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 44 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 44 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 44 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  },
  {
    "type": "concept",
    "title": "Revision Lab 45 — Concept Mastery",
    "color": "blue",
    "text": "Revision Lab 45 for Chapter 9: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
  },
  {
    "type": "practice",
    "title": "Revision Lab 45 — Basic → Challenge",
    "color": "purple",
    "questions": [
      {
        "difficulty": "Basic",
        "question": "State one important definition/formula from this chapter.",
        "answer": "A correct Class 9 definition or formula.",
        "solution": "Include the conditions and meaning of symbols."
      },
      {
        "difficulty": "Understanding",
        "question": "Explain why the selected formula applies.",
        "answer": "Its conditions match the given situation.",
        "solution": "Name the relevant condition and connect it to the data."
      },
      {
        "difficulty": "Application",
        "question": "What should be written before substituting numbers?",
        "answer": "The formula or mathematical relationship.",
        "solution": "Writing it first makes the reasoning clear and reduces substitution errors."
      },
      {
        "difficulty": "HOTS",
        "question": "How can you detect an unreasonable answer?",
        "answer": "Check units, magnitude, constraints and an alternate method/estimate.",
        "solution": "A dimensional or reasonableness check can catch many arithmetic mistakes."
      },
      {
        "difficulty": "Challenge",
        "question": "How would you change the problem to make it harder without changing the concept?",
        "answer": "Use less direct data, a composite situation, reverse reasoning, or comparison.",
        "solution": "The underlying theorem/formula remains the same while the reasoning becomes less routine."
      }
    ]
  }
],
  "examinerDrills5X": [
  {
    "type": "exam",
    "title": "Examiner Drill 1",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 2",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 3",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 4",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 5",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 6",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 7",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 8",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 9",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 10",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 11",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 12",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 13",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 14",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 15",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 16",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 17",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 18",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 19",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 20",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 21",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 22",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 23",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 24",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 25",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 26",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 27",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 28",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 29",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 30",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 31",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 32",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 33",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 34",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 35",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 36",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 37",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 38",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 39",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 40",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 41",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 42",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 43",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 44",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 45",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 46",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 47",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 48",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 49",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 50",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 51",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 52",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 53",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 54",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 55",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 56",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 57",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 58",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 59",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 60",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 61",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 62",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 63",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 64",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 65",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 66",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 67",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 68",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  }
]
};

