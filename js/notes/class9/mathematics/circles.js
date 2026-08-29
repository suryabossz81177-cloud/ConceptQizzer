/* ConceptQizzer — Class 9 Mathematics — ULTRA DETAILED + DEEP MASTERY EDITION */
/* Same ChapterData contract used by the existing Class 9 Mathematics files. */
"use strict";

const ChapterData = {
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
  ]
};


ChapterData.sections.push([
  {
    "id": "deep-1",
    "title": "Visualising a circle correctly",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Start every problem by identifying the centre O, radius, diameter, chord, arc and any angle shown. A circle is not merely its boundary: the disk is the region enclosed by the circle, while the circumference is the curved boundary. A radius has one endpoint at O and the other on the circumference. A diameter has both endpoints on the circumference and passes through O. Therefore every diameter is a chord, but not every chord is a diameter. The diameter is the longest chord because the perpendicular distance from the centre to a diameter is zero."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If r=7 cm, then d=14 cm. If a chord is 10 cm long, it is not automatically a diameter; check whether it passes through O. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Visualising a circle correctly",
        "color": "purple",
        "questions": [
          {
            "topic": "Visualising a circle correctly",
            "difficulty": "Basic",
            "question": "State the main idea of visualising a circle correctly in one sentence.",
            "answer": "Start every problem by identifying the centre O, radius, diameter, chord, arc and any angle shown.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Visualising a circle correctly",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in visualising a circle correctly matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Visualising a circle correctly",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If r=7 cm, then d=14 cm. If a chord is 10 cm long, it is not automatically a diameter; check whether it passes through O. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Visualising a circle correctly",
            "difficulty": "HOTS",
            "question": "A student applies a formula from visualising a circle correctly without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Visualising a circle correctly",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires visualising a circle correctly, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-2",
    "title": "Perpendicular from centre to chord — proof strategy",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Let AB be a chord of a circle with centre O. If OM⊥AB, then OM bisects AB. Join OA and OB. OA=OB because both are radii; OM is common; ∠OMA=∠OMB=90°. Thus ΔOMA≅ΔOMB by RHS, so AM=MB. The key condition is perpendicularity from the centre. Without both conditions, the conclusion cannot be used blindly."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For radius 13 cm and chord 10 cm, half-chord is 5 cm. In right triangle, OM=√(13²−5²)=12 cm. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Perpendicular from centre to chord — proof strategy",
        "color": "purple",
        "questions": [
          {
            "topic": "Perpendicular from centre to chord — proof strategy",
            "difficulty": "Basic",
            "question": "State the main idea of perpendicular from centre to chord — proof strategy in one sentence.",
            "answer": "Let AB be a chord of a circle with centre O.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Perpendicular from centre to chord — proof strategy",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in perpendicular from centre to chord — proof strategy matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Perpendicular from centre to chord — proof strategy",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For radius 13 cm and chord 10 cm, half-chord is 5 cm. In right triangle, OM=√(13²−5²)=12 cm. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Perpendicular from centre to chord — proof strategy",
            "difficulty": "HOTS",
            "question": "A student applies a formula from perpendicular from centre to chord — proof strategy without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Perpendicular from centre to chord — proof strategy",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires perpendicular from centre to chord — proof strategy, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-3",
    "title": "Equal chords and distance from centre",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "In the same circle, equal chords are equidistant from the centre, and chords equidistant from the centre are equal. To prove the first result, draw perpendiculars from O to both chords; each perpendicular bisects its chord. Congruent right triangles then give equal perpendicular distances. This theorem is restricted to chords of the same circle."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If chords AB and CD are equal and OM⊥AB, ON⊥CD, then OM=ON. Conversely, OM=ON implies AB=CD. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Equal chords and distance from centre",
        "color": "purple",
        "questions": [
          {
            "topic": "Equal chords and distance from centre",
            "difficulty": "Basic",
            "question": "State the main idea of equal chords and distance from centre in one sentence.",
            "answer": "In the same circle, equal chords are equidistant from the centre, and chords equidistant from the centre are equal.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Equal chords and distance from centre",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in equal chords and distance from centre matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Equal chords and distance from centre",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If chords AB and CD are equal and OM⊥AB, ON⊥CD, then OM=ON. Conversely, OM=ON implies AB=CD. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Equal chords and distance from centre",
            "difficulty": "HOTS",
            "question": "A student applies a formula from equal chords and distance from centre without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Equal chords and distance from centre",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires equal chords and distance from centre, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-4",
    "title": "Angle subtended by an arc",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "An angle at the centre and an angle at the circumference may stand on the same chord/arc. The angle at the centre is twice the angle at the circumference standing on the same arc. When using this theorem, first identify the common arc and ensure that the vertex of the first angle is the centre and the vertex of the second lies on the circle."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If ∠AOB=124°, then ∠ACB standing on arc AB is 62°. If ∠ACB=38°, then ∠AOB=76°. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Angle subtended by an arc",
        "color": "purple",
        "questions": [
          {
            "topic": "Angle subtended by an arc",
            "difficulty": "Basic",
            "question": "State the main idea of angle subtended by an arc in one sentence.",
            "answer": "An angle at the centre and an angle at the circumference may stand on the same chord/arc.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Angle subtended by an arc",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in angle subtended by an arc matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Angle subtended by an arc",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If ∠AOB=124°, then ∠ACB standing on arc AB is 62°. If ∠ACB=38°, then ∠AOB=76°. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Angle subtended by an arc",
            "difficulty": "HOTS",
            "question": "A student applies a formula from angle subtended by an arc without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Angle subtended by an arc",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires angle subtended by an arc, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-5",
    "title": "Angles in the same segment",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Angles subtended by the same chord in the same segment of a circle are equal. This is especially useful when two apparently unrelated angles share the same endpoints on the circle. The phrase “same segment” matters: locate the two vertices relative to the chord."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If ∠APB=47° and ∠AQB stands on the same chord AB in the same segment, then ∠AQB=47°. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Angles in the same segment",
        "color": "purple",
        "questions": [
          {
            "topic": "Angles in the same segment",
            "difficulty": "Basic",
            "question": "State the main idea of angles in the same segment in one sentence.",
            "answer": "Angles subtended by the same chord in the same segment of a circle are equal.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Angles in the same segment",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in angles in the same segment matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Angles in the same segment",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If ∠APB=47° and ∠AQB stands on the same chord AB in the same segment, then ∠AQB=47°. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Angles in the same segment",
            "difficulty": "HOTS",
            "question": "A student applies a formula from angles in the same segment without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Angles in the same segment",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires angles in the same segment, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-6",
    "title": "Angle in a semicircle",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "A diameter subtends a right angle at every point on the remaining circumference. If AB is a diameter and C lies on the circle, then ∠ACB=90°. This is a direct consequence of the central-angle theorem because the angle at the centre over a semicircle is 180°, half of which is 90°."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If AB is a diameter and AC=BC=10 cm, then triangle ACB is right-angled at C; by Pythagoras AB=10√2 cm. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Angle in a semicircle",
        "color": "purple",
        "questions": [
          {
            "topic": "Angle in a semicircle",
            "difficulty": "Basic",
            "question": "State the main idea of angle in a semicircle in one sentence.",
            "answer": "A diameter subtends a right angle at every point on the remaining circumference.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Angle in a semicircle",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in angle in a semicircle matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Angle in a semicircle",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If AB is a diameter and AC=BC=10 cm, then triangle ACB is right-angled at C; by Pythagoras AB=10√2 cm. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Angle in a semicircle",
            "difficulty": "HOTS",
            "question": "A student applies a formula from angle in a semicircle without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Angle in a semicircle",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires angle in a semicircle, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-7",
    "title": "Cyclic quadrilateral and converse reasoning",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "If all four vertices of a quadrilateral lie on one circle, it is cyclic. Opposite angles of a cyclic quadrilateral are supplementary. Conversely, if a pair of opposite angles of a quadrilateral sums to 180°, the quadrilateral is cyclic under the standard non-degenerate configuration. Always state which opposite angles are being used."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If ∠A=83° in cyclic ABCD, then ∠C=97°. If ∠B=112°, then ∠D=68°. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Cyclic quadrilateral and converse reasoning",
        "color": "purple",
        "questions": [
          {
            "topic": "Cyclic quadrilateral and converse reasoning",
            "difficulty": "Basic",
            "question": "State the main idea of cyclic quadrilateral and converse reasoning in one sentence.",
            "answer": "If all four vertices of a quadrilateral lie on one circle, it is cyclic.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Cyclic quadrilateral and converse reasoning",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in cyclic quadrilateral and converse reasoning matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Cyclic quadrilateral and converse reasoning",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If ∠A=83° in cyclic ABCD, then ∠C=97°. If ∠B=112°, then ∠D=68°. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Cyclic quadrilateral and converse reasoning",
            "difficulty": "HOTS",
            "question": "A student applies a formula from cyclic quadrilateral and converse reasoning without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Cyclic quadrilateral and converse reasoning",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires cyclic quadrilateral and converse reasoning, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  },
  {
    "id": "deep-8",
    "title": "Mixed theorem selection",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Many difficult circle questions contain several constructions. Do not search for a formula first. Mark radii as equal, look for right angles, identify equal chords, locate a diameter, and then identify angles standing on the same chord. A clean sequence is: list givens → add useful joins/perpendiculars → apply one theorem at a time → conclude."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "If a radius is perpendicular to a chord, first bisect the chord; then use Pythagoras if a length is required; only then move to angle relations. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Mixed theorem selection",
        "color": "purple",
        "questions": [
          {
            "topic": "Mixed theorem selection",
            "difficulty": "Basic",
            "question": "State the main idea of mixed theorem selection in one sentence.",
            "answer": "Many difficult circle questions contain several constructions.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Mixed theorem selection",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in mixed theorem selection matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Mixed theorem selection",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: If a radius is perpendicular to a chord, first bisect the chord; then use Pythagoras if a length is required; only then move to angle relations. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Mixed theorem selection",
            "difficulty": "HOTS",
            "question": "A student applies a formula from mixed theorem selection without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Mixed theorem selection",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires mixed theorem selection, then describe the solution strategy.",
            "answer": "A valid problem must provide sufficient information and require the identified concept.",
            "solution": "Choose realistic givens, state the target quantity, select the theorem/formula, calculate step-by-step, and verify units or logical conditions."
          }
        ]
      },
      {
        "type": "mistake",
        "title": "Misconception Check",
        "color": "red",
        "text": "Do not apply a result merely because the diagram or numbers look suitable. A mathematical conclusion needs the required conditions and a clear chain of reasoning."
      }
    ]
  }
]);
ChapterData.theoremPropertyLab=[{"title": "Perpendicular from centre to chord", "statement": "A perpendicular from centre to a chord bisects the chord.", "conditions": "The point must be the centre and the line must be perpendicular."}, {"title": "Equal chords", "statement": "Equal chords of the same circle are equidistant from centre.", "conditions": "Same circle."}, {"title": "Central-angle theorem", "statement": "Central angle is twice the inscribed angle standing on the same arc.", "conditions": "Same arc/chord."}, {"title": "Cyclic quadrilateral", "statement": "Opposite angles are supplementary.", "conditions": "Four vertices concyclic."}];
ChapterData.realLifeMathematics=["Wheels", "Surveying", "Architecture", "Clock faces"];
ChapterData.mathematicalActivityLab=[{"title": "Chord investigation", "steps": ["Draw several chords.", "Drop perpendiculars from centre.", "Measure and compare.", "State the theorem observed."]}];
ChapterData.visualLearning=["Label centre/radii/chords.", "Draw central and inscribed angles.", "Draw a cyclic quadrilateral."];
ChapterData.renderCompatibility={rendererStyle:"ConceptQizzer ChapterData",answerReveal:"show-answer",tables:"native-renderer-tables",rawJSONForStudents:false};
window.ChapterData=ChapterData;
window.chapter=ChapterData;
