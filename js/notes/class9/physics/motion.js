/* ConceptQizzer — Class 9 Physics — 3X+ FIXED Figure-Rich Large Edition */
"use strict";

window.ChapterData = {
  "id": "class9-physics-motion",
  "title": "Motion",
  "class": 9,
  "subject": "Physics",
  "chapter": 1,
  "file": "js/notes/class9/physics/motion.js",
  "enabled": true,
  "version": "3X+ FIXED • Figure-Rich Large Edition",
  "description": "Large Class 9 Physics chapter notes with loader-safe global export, extensive explanations, worked examples, practice, exam guidance and many inline labelled SVG figures. No external image links required.",
  "learningObjectives": [
    "Understand concepts from first principles",
    "Use laws and formulas with conditions",
    "Solve numericals step by step",
    "Interpret figures and graphs",
    "Explain real-life applications",
    "Detect common errors",
    "Write complete exam-ready answers"
  ],
  "prerequisiteCheck": [
    "Basic arithmetic and algebra",
    "SI units and conversion",
    "Basic scientific reasoning"
  ],
  "conceptRoadmap": [
    "Motion and reference frame",
    "Distance and displacement",
    "Speed and velocity",
    "Acceleration",
    "Uniform and non-uniform motion",
    "Distance-time graph",
    "Velocity-time graph",
    "Equations of motion",
    "Uniform circular motion",
    "Numerical problem strategy"
  ],
  "mainConcepts": [
    "Motion and reference frame",
    "Distance and displacement",
    "Speed and velocity",
    "Acceleration",
    "Uniform and non-uniform motion",
    "Distance-time graph",
    "Velocity-time graph",
    "Equations of motion",
    "Uniform circular motion",
    "Numerical problem strategy"
  ],
  "formulaPropertyBank": [
    "Average speed = total distance / total time",
    "Average velocity = total displacement / total time",
    "a = (v-u)/t",
    "v = u + at",
    "s = ut + 1/2 at²",
    "v²-u² = 2as",
    "1 km/h = 5/18 m/s"
  ],
  "comparisonTables": [
    {
      "title": "Core revision table",
      "columns": [
        "Idea",
        "What to remember",
        "How to use"
      ],
      "rows": [
        [
          "Motion and reference frame",
          "Ask: moving relative to which observer? Never describe motion without a reference when the situation has more than one frame.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Distance and displacement",
          "Add every path segment for distance; connect initial and final positions for displacement.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Speed and velocity",
          "Do not use the arithmetic mean of two speeds unless the conditions justify it. Use total distance/total time.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Acceleration",
          "Interpret acceleration by comparing velocity and acceleration directions, not by the word “negative” alone.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Uniform and non-uniform motion",
          "Uniform speed is weaker than uniform velocity because direction may still change.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Distance-time graph",
          "Slope = change in vertical quantity/change in horizontal quantity. Do not judge speed only by visual steepness.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Velocity-time graph",
          "Do not confuse the slope and area meanings: slope of v-t is acceleration; area of v-t is displacement.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Equations of motion",
          "Write Given → Formula → Substitution → Answer. Check that acceleration is constant before using these equations.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Uniform circular motion",
          "Never conclude “zero acceleration” merely because the speedometer reading is constant.",
          "Apply the definition/law after checking conditions."
        ],
        [
          "Numerical problem strategy",
          "A correct formula with an inconsistent sign convention can still produce a wrong answer; signs are part of the physics, not decoration.",
          "Apply the definition/law after checking conditions."
        ]
      ]
    }
  ],
  "sections": [
    {
      "id": "motion-and-reference-frame",
      "title": "Motion and reference frame",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Motion is a change in position with time relative to a chosen reference point or reference frame. Rest means no change in position relative to that frame. Therefore motion and rest are relative descriptions. A passenger sitting in a moving bus is at rest relative to another passenger but moves relative to a person on the road. A scientific description begins by identifying the object, reference frame, origin and time interval. Position tells where the object is relative to the chosen origin."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "A book is at rest relative to a train but moving relative to a roadside tree."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of motion and reference frame, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Ask: moving relative to which observer? Never describe motion without a reference when the situation has more than one frame. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on motion and reference frame. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Motion and reference frame",
          "text": "Motion and reference frame should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Motion and reference frame, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Motion and reference frame, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Motion and reference frame using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "Choose a reference frame before describing position or motion.",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Motion and reference frame?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Motion and reference frame without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Motion and reference frame is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Motion and reference frame precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Motion and reference frame.",
              "answer": "Choose a reference frame before describing position or motion."
            },
            {
              "question": "Name one situation where Motion and reference frame is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Motion and reference frame?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Motion and reference frame, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Motion and reference frame — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Motion and reference frame — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Motion and reference frame — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Motion and reference frame — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Motion and reference frame — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Motion and reference frame — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Motion and reference frame — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Motion and reference frame — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Motion and reference frame — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "distance-and-displacement",
      "title": "Distance and displacement",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Distance is the total length of the actual path travelled and is scalar. Displacement is the directed change from initial to final position and is vector. Distance is always non-negative and its value is at least the magnitude of displacement. A round trip can have large distance but zero displacement. In one dimension, choose a positive direction and use signs for displacement."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "A runner completes one 400 m lap: distance 400 m, displacement 0 m."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of distance and displacement, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Add every path segment for distance; connect initial and final positions for displacement. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on distance and displacement. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Distance and displacement",
          "text": "Distance and displacement should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Distance and displacement, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Distance and displacement, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Distance and displacement using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "distance = total path length; displacement = final position − initial position",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Distance and displacement?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Distance and displacement without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Distance and displacement is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Distance and displacement precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Distance and displacement.",
              "answer": "distance = total path length; displacement = final position − initial position"
            },
            {
              "question": "Name one situation where Distance and displacement is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Distance and displacement?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Distance and displacement, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Distance and displacement — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance and displacement — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance and displacement — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Distance and displacement — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance and displacement — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance and displacement — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Distance and displacement — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance and displacement — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance and displacement — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "speed-and-velocity",
      "title": "Speed and velocity",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Speed measures the rate of covering distance; average speed equals total distance divided by total time. Velocity measures the rate of displacement and includes direction. Average velocity equals total displacement divided by total time. Speed can remain constant while velocity changes when direction changes."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "A cyclist covers 60 m east in 20 s: average velocity 3 m/s east."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of speed and velocity, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Do not use the arithmetic mean of two speeds unless the conditions justify it. Use total distance/total time. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on speed and velocity. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Speed and velocity",
          "text": "Speed and velocity should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Speed and velocity, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Speed and velocity, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Speed and velocity using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "average speed = total distance/total time; average velocity = displacement/total time",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Speed and velocity?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Speed and velocity without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Speed and velocity is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Speed and velocity precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Speed and velocity.",
              "answer": "average speed = total distance/total time; average velocity = displacement/total time"
            },
            {
              "question": "Name one situation where Speed and velocity is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Speed and velocity?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Speed and velocity, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Speed and velocity — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Speed and velocity — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Speed and velocity — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Speed and velocity — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Speed and velocity — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Speed and velocity — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Speed and velocity — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Speed and velocity — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Speed and velocity — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "acceleration",
      "title": "Acceleration",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Acceleration is the rate of change of velocity. For one-dimensional motion, a=(v-u)/t. Its sign depends on the chosen positive direction. Negative acceleration does not automatically mean slowing down: if velocity is also negative, speed may increase. Acceleration can be zero while velocity is non-zero."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Velocity changes from 20 to 8 m/s in 3 s: a=-4 m/s²."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of acceleration, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Interpret acceleration by comparing velocity and acceleration directions, not by the word “negative” alone. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on acceleration. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Acceleration",
          "text": "Acceleration should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Acceleration, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Acceleration, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Acceleration using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "a = (v − u)/t",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Acceleration?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Acceleration without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Acceleration is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Acceleration precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Acceleration.",
              "answer": "a = (v − u)/t"
            },
            {
              "question": "Name one situation where Acceleration is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Acceleration?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Acceleration, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Acceleration — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Acceleration — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Acceleration — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Acceleration — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Acceleration — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Acceleration — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Acceleration — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Acceleration — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Acceleration — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "uniform-and-non-uniform-motion",
      "title": "Uniform and non-uniform motion",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Uniform straight-line motion has constant velocity: equal displacements occur in equal time intervals. Non-uniform motion involves a change in speed, direction, or both. A vehicle in traffic is usually non-uniform. Uniform circular motion has constant speed but changing velocity because direction changes continuously."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "A car around a circular track can have constant speed and non-zero acceleration."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of uniform and non-uniform motion, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Uniform speed is weaker than uniform velocity because direction may still change. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on uniform and non-uniform motion. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Uniform and non-uniform motion",
          "text": "Uniform and non-uniform motion should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Uniform and non-uniform motion, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Uniform and non-uniform motion, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Uniform and non-uniform motion using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "uniform motion: equal changes in position in equal time intervals under the stated conditions",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Uniform and non-uniform motion?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Uniform and non-uniform motion without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Uniform and non-uniform motion is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Uniform and non-uniform motion precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Uniform and non-uniform motion.",
              "answer": "uniform motion: equal changes in position in equal time intervals under the stated conditions"
            },
            {
              "question": "Name one situation where Uniform and non-uniform motion is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Uniform and non-uniform motion?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Uniform and non-uniform motion, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Uniform and non-uniform motion — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform and non-uniform motion — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform and non-uniform motion — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Uniform and non-uniform motion — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform and non-uniform motion — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform and non-uniform motion — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Uniform and non-uniform motion — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform and non-uniform motion — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform and non-uniform motion — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "distance-time-graph",
      "title": "Distance-time graph",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A distance-time graph displays distance against time. Its slope gives speed. A straight line with constant slope represents uniform speed; a horizontal line means no increase in distance from the chosen start. Always read axis labels and numerical scales before comparing slopes."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "20 m in 5 s gives a slope of 4 m/s."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of distance-time graph, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Slope = change in vertical quantity/change in horizontal quantity. Do not judge speed only by visual steepness. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on distance-time graph. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Distance-time graph",
          "text": "Distance-time graph should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Distance-time graph, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Distance-time graph, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Distance-time graph using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "slope of distance–time graph = speed",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Distance-time graph?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Distance-time graph without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Distance-time graph is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Distance-time graph precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Distance-time graph.",
              "answer": "slope of distance–time graph = speed"
            },
            {
              "question": "Name one situation where Distance-time graph is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Distance-time graph?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Distance-time graph, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Distance-time graph — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance-time graph — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance-time graph — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Distance-time graph — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance-time graph — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance-time graph — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Distance-time graph — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance-time graph — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance-time graph — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "velocity-time-graph",
      "title": "Velocity-time graph",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A velocity-time graph has velocity on the vertical axis and time on the horizontal axis. Slope gives acceleration. The signed area under the graph gives displacement. A horizontal line means constant velocity; a sloping line means changing velocity. Areas below the time axis represent negative displacement."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Velocity rises from 0 to 20 m/s in 5 s: acceleration 4 m/s². A constant 10 m/s for 6 s gives displacement 60 m."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of velocity-time graph, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Do not confuse the slope and area meanings: slope of v-t is acceleration; area of v-t is displacement. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on velocity-time graph. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Velocity-time graph",
          "text": "Velocity-time graph should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Velocity-time graph, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Velocity-time graph, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Velocity-time graph using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "slope of velocity–time graph = acceleration; area = displacement",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Velocity-time graph?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Velocity-time graph without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Velocity-time graph is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Velocity-time graph precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Velocity-time graph.",
              "answer": "slope of velocity–time graph = acceleration; area = displacement"
            },
            {
              "question": "Name one situation where Velocity-time graph is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Velocity-time graph?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Velocity-time graph, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Velocity-time graph — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Velocity-time graph — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Velocity-time graph — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Velocity-time graph — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Velocity-time graph — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Velocity-time graph — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Velocity-time graph — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Velocity-time graph — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Velocity-time graph — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "equations-of-motion",
      "title": "Equations of motion",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "For straight-line motion with constant acceleration, v=u+at, s=ut+1/2at² and v²-u²=2as. u is initial velocity, v final velocity, a acceleration, t time and s displacement. These relations are derived from uniform acceleration and must not be applied blindly to arbitrary changing acceleration. Signs must follow one consistent direction convention."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "Starting from rest with a=2 m/s² for 5 s: v=10 m/s and s=25 m."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of equations of motion, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Write Given → Formula → Substitution → Answer. Check that acceleration is constant before using these equations. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on equations of motion. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Equations of motion",
          "text": "Equations of motion should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Equations of motion, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Equations of motion, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Equations of motion using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "v = u + at; s = ut + ½at²; v² − u² = 2as",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Equations of motion?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Equations of motion without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Equations of motion is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Equations of motion precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Equations of motion.",
              "answer": "v = u + at; s = ut + ½at²; v² − u² = 2as"
            },
            {
              "question": "Name one situation where Equations of motion is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Equations of motion?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Equations of motion, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Equations of motion — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Equations of motion — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Equations of motion — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Equations of motion — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Equations of motion — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Equations of motion — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Equations of motion — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Equations of motion — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Equations of motion — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "uniform-circular-motion",
      "title": "Uniform circular motion",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "In circular motion, the direction of velocity changes continuously. Hence velocity changes even when speed remains constant. The instantaneous velocity is tangent to the circle, while the acceleration in uniform circular motion points toward the centre. The key Class 9 insight is that changing direction alone means changing velocity."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "A stone tied to a string and moved in a circle at constant speed has changing velocity."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of uniform circular motion, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Never conclude “zero acceleration” merely because the speedometer reading is constant. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on uniform circular motion. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Uniform circular motion",
          "text": "Uniform circular motion should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Uniform circular motion, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Uniform circular motion, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Uniform circular motion using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "f = 1/T; speed = circumference/period for one complete revolution",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Uniform circular motion?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Uniform circular motion without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Uniform circular motion is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Uniform circular motion precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Uniform circular motion.",
              "answer": "f = 1/T; speed = circumference/period for one complete revolution"
            },
            {
              "question": "Name one situation where Uniform circular motion is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Uniform circular motion?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Uniform circular motion, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Uniform circular motion — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform circular motion — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform circular motion — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Uniform circular motion — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform circular motion — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform circular motion — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Uniform circular motion — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform circular motion — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform circular motion — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    },
    {
      "id": "numerical-problem-strategy",
      "title": "Numerical problem strategy",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Motion numericals become easier when the physical situation is translated into symbols. Identify the reference direction, list known values, convert units, select the relation whose conditions are satisfied, calculate and then test the answer. In multi-stage problems, keep separate intervals and connect them using final velocity of one stage as initial velocity of the next."
        },
        {
          "type": "example",
          "title": "Worked Example 1",
          "color": "orange",
          "text": "For a body slowing from 20 m/s at 5 m/s², take a=-5 m/s² if forward is positive; stopping time is obtained from v=u+at."
        },
        {
          "type": "example",
          "title": "Worked Example 2",
          "color": "orange",
          "text": "Worked reasoning: Start from the definition of numerical problem strategy, identify the given quantities, choose a suitable relation, substitute values with units and interpret the result physically."
        },
        {
          "type": "example",
          "title": "Worked Example 3",
          "color": "orange",
          "text": "Exam variation: If one condition in the situation changes, first predict qualitatively what should happen, then use the relevant equation to confirm the prediction."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "A correct formula with an inconsistent sign convention can still produce a wrong answer; signs are part of the physics, not decoration. Always define symbols, keep units consistent and check the physical meaning of the answer."
        },
        {
          "type": "h3",
          "title": "HOTS",
          "color": "purple",
          "text": "How would the result change if the relevant input quantity were doubled, halved, reversed in direction, or measured over a longer interval? Explain first using proportional reasoning and then using the equation where appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "Create your own unfamiliar problem based on numerical problem strategy. Give at least three pieces of information, solve it step by step, and include one independent check."
        },
        {
          "type": "method",
          "title": "Step-by-step solving routine",
          "color": "indigo",
          "text": "1. Read the complete question. 2. Identify the object/system. 3. Write the known quantities with units and directions. 4. State the definition or law. 5. Check its conditions. 6. Choose the simplest valid relation. 7. Substitute carefully. 8. State the answer with unit/direction. 9. Verify by estimation, another relation, graph, limiting case or dimensional reasoning."
        },
        {
          "type": "error",
          "title": "Error detective — the tempting wrong approach",
          "color": "red",
          "text": "Common errors include selecting a familiar formula without checking conditions, mixing units, ignoring direction, confusing related quantities, reading diagrams by appearance, and giving a numerical answer without interpretation. Correct the physical model before doing arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific thinking",
          "color": "gold",
          "text": "Ask: What is changing? What is conserved? Which object/system is being considered? Which direction is positive? What assumptions are being made? Does the answer behave sensibly in an extreme case? Can I verify it independently?"
        },
        {
          "type": "exam",
          "title": "Exam-writing standard",
          "color": "orange",
          "text": "For definitions, give the exact physical meaning and SI unit where relevant. For numericals use Given → Formula/Law → Substitution → Calculation → Final answer. For reasoning questions, connect the conclusion explicitly to the law or principle."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "cyan",
          "text": "Did I answer exactly what was asked? Did I use the correct quantity? Are units and signs consistent? Did I include all relevant forces/paths/stages? Is the final value physically reasonable?"
        },
        {
          "type": "concept",
          "title": "Core idea — Numerical problem strategy",
          "text": "Numerical problem strategy should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Numerical problem strategy, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics."
        },
        {
          "type": "important",
          "title": "Condition and assumption check",
          "text": "Before applying a relation to Numerical problem strategy, check its conditions. In school-level problems these may include constant acceleration, a chosen sign convention, a fixed reference level, negligible air resistance, or an isolated system."
        },
        {
          "type": "definition",
          "title": "Precise definition",
          "text": "Write a definition of Numerical problem strategy using the standard physical quantity or law, its measurable meaning, and any essential direction or condition. Avoid circular definitions such as “it is the thing used in the formula.”"
        },
        {
          "type": "formula",
          "title": "Relationship / Formula",
          "formula": "Given → required → formula → substitution → calculation → unit/check",
          "explanation": "State the meaning and SI unit of every symbol before substitution. Keep signs and units consistent."
        },
        {
          "type": "example",
          "title": "Worked Example — concept application",
          "question": "How should a Class 9 student approach a problem based on Numerical problem strategy?",
          "steps": [
            "Write the given quantities and units.",
            "State the required quantity.",
            "Choose the relation whose assumptions match the situation.",
            "Substitute with a consistent sign convention.",
            "Calculate, attach the SI unit, and check whether the result is physically reasonable."
          ],
          "answer": "A complete solution includes the physical reasoning, not only the final number."
        },
        {
          "type": "example",
          "title": "Worked Example — error check",
          "question": "A student uses a formula for Numerical problem strategy without checking its conditions. What should be checked first?",
          "steps": [
            "Identify the physical situation.",
            "List the assumptions behind the formula.",
            "Check units and directions.",
            "Only then substitute values."
          ],
          "answer": "The formula must match the physical situation and its assumptions."
        },
        {
          "type": "important",
          "title": "Common mistake",
          "text": "A common mistake in Numerical problem strategy is treating a scalar quantity as if it had direction, ignoring a sign convention, or using a relation outside its conditions. Always identify the quantity before calculating."
        },
        {
          "type": "practice",
          "title": "Deep self-check",
          "questions": [
            {
              "question": "Define Numerical problem strategy precisely.",
              "answer": "Use the standard definition and include the essential physical condition."
            },
            {
              "question": "Write the main relationship for Numerical problem strategy.",
              "answer": "Given → required → formula → substitution → calculation → unit/check"
            },
            {
              "question": "Name one situation where Numerical problem strategy is useful.",
              "answer": "Give a real physical example and explain the connection."
            },
            {
              "question": "What unit or direction check should be made for Numerical problem strategy?",
              "answer": "Use compatible SI units and state direction where the quantity is vectorial."
            }
          ]
        },
        {
          "type": "examtip",
          "title": "Exam-writing standard",
          "text": "For a long-answer question on Numerical problem strategy, use this order: definition → explanation → labelled figure/equation → example/application → conclusion. This makes the answer complete and easy to evaluate."
        },
        {
          "type": "figure",
          "title": "Numerical problem strategy — Concept flow",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Numerical problem strategy — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Numerical problem strategy — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Numerical problem strategy — Relationship map",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Numerical problem strategy — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Numerical problem strategy — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>"
        },
        {
          "type": "figure",
          "title": "Numerical problem strategy — Revision ladder",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Numerical problem strategy — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Numerical problem strategy — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>"
        }
      ]
    }
  ],
  "importantPoints": [
    {
      "title": "Understand before memorising",
      "text": "Start with the physical definition, then connect it to equations, graphs and real-life situations."
    },
    {
      "title": "Use SI units",
      "text": "Convert quantities to compatible SI units before using standard equations unless a question explicitly provides another unit system."
    },
    {
      "title": "Respect direction",
      "text": "Velocity, acceleration, force, momentum and displacement are vector quantities; use a clear sign convention when solving one-dimensional problems."
    },
    {
      "title": "Check assumptions",
      "text": "Use equations only when their conditions are satisfied, such as constant acceleration or an isolated system for momentum conservation."
    },
    {
      "title": "Read figures carefully",
      "text": "Axes, arrows, labels, units and reference levels carry physical meaning. A figure is part of the explanation, not decoration."
    },
    {
      "title": "Verify the answer",
      "text": "Check units, sign, order of magnitude and whether the result makes physical sense."
    }
  ],
  "keyTerms": [
    {
      "term": "Reference frame",
      "definition": "Chosen viewpoint or coordinate system relative to which position and motion are described."
    },
    {
      "term": "Displacement",
      "definition": "Directed change in position from initial to final position."
    },
    {
      "term": "Velocity",
      "definition": "Rate of change of displacement."
    },
    {
      "term": "Acceleration",
      "definition": "Rate of change of velocity."
    },
    {
      "term": "Force",
      "definition": "An interaction that can change the motion of an object."
    },
    {
      "term": "Momentum",
      "definition": "Product of mass and velocity."
    },
    {
      "term": "Gravitational force",
      "definition": "Attractive force between masses."
    },
    {
      "term": "Pressure",
      "definition": "Normal force per unit area."
    },
    {
      "term": "Density",
      "definition": "Mass per unit volume."
    },
    {
      "term": "Work",
      "definition": "Energy transferred by a force through displacement, with sign determined by the angle between force and displacement."
    },
    {
      "term": "Kinetic energy",
      "definition": "Energy associated with motion."
    },
    {
      "term": "Potential energy",
      "definition": "Energy associated with position or configuration."
    },
    {
      "term": "Power",
      "definition": "Rate of doing work or transferring energy."
    },
    {
      "term": "Frequency",
      "definition": "Number of complete cycles per second."
    },
    {
      "term": "Wavelength",
      "definition": "Distance between successive points in the same phase of a wave."
    },
    {
      "term": "Amplitude",
      "definition": "Maximum displacement from the equilibrium position in an ideal sinusoidal description."
    }
  ],
  "detailedSummary": [
    "Chapter 1 builds Motion from definitions to applications.",
    "Every formula should be understood together with its assumptions, symbols, units and physical meaning.",
    "Figures are embedded as SVG so the notes do not depend on external image links.",
    "Worked examples, HOTS and challenges are included throughout."
  ],
  "chapterSummary": "This ultra-detailed Chapter 1 set is designed for deep Class 9 study: concept → figure → worked examples → important points → HOTS → challenge → error detection → scientific thinking → exam writing → self-check.",
  "finalChapterTest": [
    {
      "question": "Explain the central idea of Chapter 1: Motion and give two applications.",
      "answer": "A complete answer should define the idea, explain the mechanism and connect it to applications.",
      "solution": "Start with the definition, identify the relevant physical law, explain the variables and then connect the idea to two scientifically correct examples."
    },
    {
      "question": "Solve one numerical from this chapter and show every step.",
      "answer": "Use Given, Formula/Law, Substitution, Calculation and Answer.",
      "solution": "A complete solution must include units and direction wherever relevant, followed by an independent reasonableness check."
    }
  ],
  "figures": [
    {
      "title": "Motion and reference frame — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Motion and reference frame — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Motion and reference frame — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Motion and reference frame — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Motion and reference frame — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Motion and reference frame — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Motion and reference frame — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Motion and reference frame — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Motion and reference frame — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Distance and displacement — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance and displacement — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance and displacement — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Distance and displacement — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance and displacement — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance and displacement — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Distance and displacement — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance and displacement — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance and displacement — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Speed and velocity — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Speed and velocity — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Speed and velocity — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Speed and velocity — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Speed and velocity — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Speed and velocity — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Speed and velocity — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Speed and velocity — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Speed and velocity — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Acceleration — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Acceleration — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Acceleration — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Acceleration — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Acceleration — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Acceleration — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Acceleration — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Acceleration — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Acceleration — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Uniform and non-uniform motion — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform and non-uniform motion — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform and non-uniform motion — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Uniform and non-uniform motion — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform and non-uniform motion — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform and non-uniform motion — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Uniform and non-uniform motion — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform and non-uniform motion — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform and non-uniform motion — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Distance-time graph — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance-time graph — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance-time graph — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Distance-time graph — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance-time graph — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance-time graph — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Distance-time graph — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Distance-time graph — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Distance-time graph — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Velocity-time graph — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Velocity-time graph — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Velocity-time graph — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Velocity-time graph — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Velocity-time graph — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Velocity-time graph — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Velocity-time graph — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Velocity-time graph — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Velocity-time graph — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Equations of motion — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Equations of motion — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Equations of motion — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Equations of motion — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Equations of motion — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Equations of motion — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Equations of motion — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Equations of motion — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Equations of motion — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Uniform circular motion — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform circular motion — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform circular motion — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Uniform circular motion — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform circular motion — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform circular motion — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Uniform circular motion — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Uniform circular motion — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Uniform circular motion — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    },
    {
      "title": "Numerical problem strategy — Concept flow",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Numerical problem strategy — Concept flow\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Numerical problem strategy — Concept flow</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Physical situation</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Definition / quantity</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Cause and effect</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Formula or graphical relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Real-life interpretation</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic learning figure; not to scale.</text></svg>",
      "caption": ""
    },
    {
      "title": "Numerical problem strategy — Relationship map",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Numerical problem strategy — Relationship map\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Numerical problem strategy — Relationship map</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Known quantities</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Relevant physical law</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Substitute with SI units</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Calculate</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">Interpret direction / magnitude</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Schematic problem-solving figure; symbols and values must come from the question.</text></svg>",
      "caption": ""
    },
    {
      "title": "Numerical problem strategy — Revision ladder",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\" role=\"img\" aria-label=\"Numerical problem strategy — Revision ladder\"><rect x=\"10\" y=\"10\" width=\"980\" height=\"500\" rx=\"26\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"42\" y=\"58\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#111827\">Numerical problem strategy — Revision ladder</text><rect x=\"100\" y=\"115\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"154\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">1. Identify the concept</text><text x=\"482\" y=\"198\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"197\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"236\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">2. Recall definition</text><text x=\"482\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"279\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"318\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">3. Check assumptions</text><text x=\"482\" y=\"362\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"361\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"400\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">4. Apply relation</text><text x=\"482\" y=\"444\" font-family=\"Arial,sans-serif\" font-size=\"26\" fill=\"#2563eb\">↓</text><rect x=\"100\" y=\"443\" width=\"800\" height=\"62\" rx=\"14\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"125\" y=\"482\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#111827\">5. Verify result</text><text x=\"42\" y=\"485\" font-family=\"Arial,sans-serif\" font-size=\"18\" fill=\"#475569\">Use this ladder for revision and numerical questions.</text></svg>",
      "caption": ""
    }
  ],
  "workedExamples": [
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Motion and reference frame?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Motion and reference frame without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    },
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Distance and displacement?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Distance and displacement without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    },
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Speed and velocity?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Speed and velocity without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    },
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Acceleration?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Acceleration without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    },
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Uniform and non-uniform motion?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Uniform and non-uniform motion without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    },
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Distance-time graph?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Distance-time graph without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    },
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Velocity-time graph?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Velocity-time graph without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    },
    {
      "title": "Worked Example 1",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 2",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example 3",
      "question": "",
      "steps": [],
      "answer": ""
    },
    {
      "title": "Worked Example — concept application",
      "question": "How should a Class 9 student approach a problem based on Equations of motion?",
      "steps": [
        "Write the given quantities and units.",
        "State the required quantity.",
        "Choose the relation whose assumptions match the situation.",
        "Substitute with a consistent sign convention.",
        "Calculate, attach the SI unit, and check whether the result is physically reasonable."
      ],
      "answer": "A complete solution includes the physical reasoning, not only the final number."
    },
    {
      "title": "Worked Example — error check",
      "question": "A student uses a formula for Equations of motion without checking its conditions. What should be checked first?",
      "steps": [
        "Identify the physical situation.",
        "List the assumptions behind the formula.",
        "Check units and directions.",
        "Only then substitute values."
      ],
      "answer": "The formula must match the physical situation and its assumptions."
    }
  ],
  "practice": [
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Motion and reference frame precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Motion and reference frame.",
          "answer": "Choose a reference frame before describing position or motion."
        },
        {
          "question": "Name one situation where Motion and reference frame is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Motion and reference frame?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Distance and displacement precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Distance and displacement.",
          "answer": "distance = total path length; displacement = final position − initial position"
        },
        {
          "question": "Name one situation where Distance and displacement is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Distance and displacement?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Speed and velocity precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Speed and velocity.",
          "answer": "average speed = total distance/total time; average velocity = displacement/total time"
        },
        {
          "question": "Name one situation where Speed and velocity is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Speed and velocity?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Acceleration precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Acceleration.",
          "answer": "a = (v − u)/t"
        },
        {
          "question": "Name one situation where Acceleration is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Acceleration?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Uniform and non-uniform motion precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Uniform and non-uniform motion.",
          "answer": "uniform motion: equal changes in position in equal time intervals under the stated conditions"
        },
        {
          "question": "Name one situation where Uniform and non-uniform motion is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Uniform and non-uniform motion?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Distance-time graph precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Distance-time graph.",
          "answer": "slope of distance–time graph = speed"
        },
        {
          "question": "Name one situation where Distance-time graph is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Distance-time graph?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Velocity-time graph precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Velocity-time graph.",
          "answer": "slope of velocity–time graph = acceleration; area = displacement"
        },
        {
          "question": "Name one situation where Velocity-time graph is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Velocity-time graph?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Equations of motion precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Equations of motion.",
          "answer": "v = u + at; s = ut + ½at²; v² − u² = 2as"
        },
        {
          "question": "Name one situation where Equations of motion is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Equations of motion?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Uniform circular motion precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Uniform circular motion.",
          "answer": "f = 1/T; speed = circumference/period for one complete revolution"
        },
        {
          "question": "Name one situation where Uniform circular motion is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Uniform circular motion?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    },
    {
      "type": "practice",
      "title": "Deep self-check",
      "questions": [
        {
          "question": "Define Numerical problem strategy precisely.",
          "answer": "Use the standard definition and include the essential physical condition."
        },
        {
          "question": "Write the main relationship for Numerical problem strategy.",
          "answer": "Given → required → formula → substitution → calculation → unit/check"
        },
        {
          "question": "Name one situation where Numerical problem strategy is useful.",
          "answer": "Give a real physical example and explain the connection."
        },
        {
          "question": "What unit or direction check should be made for Numerical problem strategy?",
          "answer": "Use compatible SI units and state direction where the quantity is vectorial."
        }
      ]
    }
  ],
  "summary": "This ultra-detailed Chapter 1 set is designed for deep Class 9 study: concept → figure → worked examples → important points → HOTS → challenge → error detection → scientific thinking → exam writing → self-check."
};
window.chapter = window.ChapterData;
