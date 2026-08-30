/* ConceptQizzer — Class 9 Physics — ULTRA DETAILED REAL-FIGURE EDITION */
"use strict";

window.ChapterData = {
  "id": "class9-physics-motion",
  "title": "Motion",
  "class": 9,
  "subject": "Physics",
  "chapter": 1,
  "file": "js/notes/class9/physics/motion.js",
  "enabled": true,
  "version": "ULTRA DETAILED • REAL WIKIMEDIA FIGURES • 2026",
  "description": "Expanded Class 9 Physics chapter with substantially more explanatory text, worked examples, practice, exam guidance, and real non-AI Wikimedia Commons figures. Figure licenses and authors are recorded in each figure and in the package README.",
  "learningObjectives": [
    "Understand concepts from first principles",
    "Use laws and formulas with conditions",
    "Solve numericals step by step",
    "Interpret figures and graphs",
    "Explain real-life applications",
    "Detect common errors",
    "Write complete exam-ready answers",
    "Connect definitions, equations, graphs and observations",
    "Explain why a formula works rather than memorising it alone",
    "Use ideal models and state their assumptions",
    "Interpret real-world demonstrations and measurements",
    "Build exam-ready explanations with correct units and directions"
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
    "Numerical problem strategy",
    "Relative motion and reference frames",
    "Distance, displacement and path geometry",
    "Average speed versus average velocity",
    "Acceleration as a rate of change of velocity",
    "Reading and interpreting graphs",
    "Equations of motion from definitions",
    "Uniform circular motion in detail",
    "Numerical reasoning and unit discipline",
    "Real-life applications of kinematics",
    "Exam mastery: common traps in Motion"
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
    "Numerical problem strategy",
    "Relative motion and reference frames",
    "Distance, displacement and path geometry",
    "Average speed versus average velocity",
    "Acceleration as a rate of change of velocity",
    "Reading and interpreting graphs",
    "Equations of motion from definitions",
    "Uniform circular motion in detail",
    "Numerical reasoning and unit discipline",
    "Real-life applications of kinematics",
    "Exam mastery: common traps in Motion"
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
          "text": "Motion is a change in position with time relative to a chosen reference point or reference frame. Rest means no change in position relative to that frame. Therefore motion and rest are relative descriptions. A passenger sitting in a moving bus is at rest relative to another passenger but moves relative to a person on the road. A scientific description begins by identifying the object, reference frame, origin and time interval. Position tells where the object is relative to the chosen origin.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Motion and reference frame should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Motion and reference frame, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "title": "Distance–time graph example — real source figure",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 700\" role=\"img\" aria-label=\"Distance–time graph example\"><rect x=\"8\" y=\"8\" width=\"984\" height=\"684\" rx=\"22\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"35\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">Distance–time graph example</text><rect x=\"35\" y=\"65\" width=\"930\" height=\"560\" rx=\"12\" fill=\"#f8fafc\"/><image href=\"https://commons.wikimedia.org/wiki/Special:FilePath/Distance-time_graph_example.svg\" x=\"55\" y=\"80\" width=\"890\" height=\"530\" preserveAspectRatio=\"xMidYMid meet\"/><text x=\"35\" y=\"657\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#475569\">Real Wikimedia Commons media • Author: Sjlegg • Public domain</text></svg>",
          "source": "https://commons.wikimedia.org/wiki/File:Distance-time_graph_example.svg",
          "license": "Public domain",
          "author": "Sjlegg"
        },
        {
          "type": "figure",
          "title": "Velocity–time graph examples — real source figure",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 700\" role=\"img\" aria-label=\"Velocity–time graph examples\"><rect x=\"8\" y=\"8\" width=\"984\" height=\"684\" rx=\"22\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"35\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">Velocity–time graph examples</text><rect x=\"35\" y=\"65\" width=\"930\" height=\"560\" rx=\"12\" fill=\"#f8fafc\"/><image href=\"https://commons.wikimedia.org/wiki/Special:FilePath/Example-velocity-time-diagramm.svg\" x=\"55\" y=\"80\" width=\"890\" height=\"530\" preserveAspectRatio=\"xMidYMid meet\"/><text x=\"35\" y=\"657\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#475569\">Real Wikimedia Commons media • Author: MikeRun • CC BY-SA 4.0</text></svg>",
          "source": "https://commons.wikimedia.org/wiki/File:Example-velocity-time-diagramm.svg",
          "license": "CC BY-SA 4.0",
          "author": "MikeRun"
        },
        {
          "type": "figure",
          "title": "Uniform circular motion — real source figure",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 700\" role=\"img\" aria-label=\"Uniform circular motion\"><rect x=\"8\" y=\"8\" width=\"984\" height=\"684\" rx=\"22\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"35\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">Uniform circular motion</text><rect x=\"35\" y=\"65\" width=\"930\" height=\"560\" rx=\"12\" fill=\"#f8fafc\"/><image href=\"https://commons.wikimedia.org/wiki/Special:FilePath/Uniform_circular_motion.svg\" x=\"55\" y=\"80\" width=\"890\" height=\"530\" preserveAspectRatio=\"xMidYMid meet\"/><text x=\"35\" y=\"657\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#475569\">Real Wikimedia Commons media • Author: Brews ohare / Sjlegg • CC BY-SA 3.0</text></svg>",
          "source": "https://commons.wikimedia.org/wiki/File:Uniform_circular_motion.svg",
          "license": "CC BY-SA 3.0",
          "author": "Brews ohare / Sjlegg"
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
          "text": "Distance is the total length of the actual path travelled and is scalar. Displacement is the directed change from initial to final position and is vector. Distance is always non-negative and its value is at least the magnitude of displacement. A round trip can have large distance but zero displacement. In one dimension, choose a positive direction and use signs for displacement.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Distance and displacement should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Distance and displacement, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "title": "Circular-motion velocity and acceleration — real source figure",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 700\" role=\"img\" aria-label=\"Circular-motion velocity and acceleration\"><rect x=\"8\" y=\"8\" width=\"984\" height=\"684\" rx=\"22\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"35\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">Circular-motion velocity and acceleration</text><rect x=\"35\" y=\"65\" width=\"930\" height=\"560\" rx=\"12\" fill=\"#f8fafc\"/><image href=\"https://commons.wikimedia.org/wiki/Special:FilePath/Circular_motion_velocity_and_acceleration.svg\" x=\"55\" y=\"80\" width=\"890\" height=\"530\" preserveAspectRatio=\"xMidYMid meet\"/><text x=\"35\" y=\"657\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#475569\">Real Wikimedia Commons media • Author: Feeb denroc • Public domain</text></svg>",
          "source": "https://commons.wikimedia.org/wiki/File:Circular_motion_velocity_and_acceleration.svg",
          "license": "Public domain",
          "author": "Feeb denroc"
        },
        {
          "type": "figure",
          "title": "Uniform acceleration graphs — real source figure",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 700\" role=\"img\" aria-label=\"Uniform acceleration graphs\"><rect x=\"8\" y=\"8\" width=\"984\" height=\"684\" rx=\"22\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"35\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">Uniform acceleration graphs</text><rect x=\"35\" y=\"65\" width=\"930\" height=\"560\" rx=\"12\" fill=\"#f8fafc\"/><image href=\"https://commons.wikimedia.org/wiki/Special:FilePath/Uniform-acceleration.svg\" x=\"55\" y=\"80\" width=\"890\" height=\"530\" preserveAspectRatio=\"xMidYMid meet\"/><text x=\"35\" y=\"657\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#475569\">Real Wikimedia Commons media • Author: MikeRun • CC BY-SA 4.0</text></svg>",
          "source": "https://commons.wikimedia.org/wiki/File:Uniform-acceleration.svg",
          "license": "CC BY-SA 4.0",
          "author": "MikeRun"
        },
        {
          "type": "figure",
          "title": "Free-fall animation — real source figure",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 700\" role=\"img\" aria-label=\"Free-fall animation\"><rect x=\"8\" y=\"8\" width=\"984\" height=\"684\" rx=\"22\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"4\"/><text x=\"35\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">Free-fall animation</text><rect x=\"35\" y=\"65\" width=\"930\" height=\"560\" rx=\"12\" fill=\"#f8fafc\"/><image href=\"https://commons.wikimedia.org/wiki/Special:FilePath/Free-fall.gif\" x=\"55\" y=\"80\" width=\"890\" height=\"530\" preserveAspectRatio=\"xMidYMid meet\"/><text x=\"35\" y=\"657\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#475569\">Real Wikimedia Commons media • Author: Yuta Aoki • CC BY-SA 3.0</text></svg>",
          "source": "https://commons.wikimedia.org/wiki/File:Free-fall.gif",
          "license": "CC BY-SA 3.0",
          "author": "Yuta Aoki"
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
          "text": "Speed measures the rate of covering distance; average speed equals total distance divided by total time. Velocity measures the rate of displacement and includes direction. Average velocity equals total displacement divided by total time. Speed can remain constant while velocity changes when direction changes.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Speed and velocity should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Speed and velocity, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
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
          "text": "Acceleration is the rate of change of velocity. For one-dimensional motion, a=(v-u)/t. Its sign depends on the chosen positive direction. Negative acceleration does not automatically mean slowing down: if velocity is also negative, speed may increase. Acceleration can be zero while velocity is non-zero.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Acceleration should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Acceleration, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
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
          "text": "Uniform straight-line motion has constant velocity: equal displacements occur in equal time intervals. Non-uniform motion involves a change in speed, direction, or both. A vehicle in traffic is usually non-uniform. Uniform circular motion has constant speed but changing velocity because direction changes continuously.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Uniform and non-uniform motion should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Uniform and non-uniform motion, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
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
          "text": "A distance-time graph displays distance against time. Its slope gives speed. A straight line with constant slope represents uniform speed; a horizontal line means no increase in distance from the chosen start. Always read axis labels and numerical scales before comparing slopes.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Distance-time graph should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Distance-time graph, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
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
          "text": "A velocity-time graph has velocity on the vertical axis and time on the horizontal axis. Slope gives acceleration. The signed area under the graph gives displacement. A horizontal line means constant velocity; a sloping line means changing velocity. Areas below the time axis represent negative displacement.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Velocity-time graph should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Velocity-time graph, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
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
          "text": "For straight-line motion with constant acceleration, v=u+at, s=ut+1/2at² and v²-u²=2as. u is initial velocity, v final velocity, a acceleration, t time and s displacement. These relations are derived from uniform acceleration and must not be applied blindly to arbitrary changing acceleration. Signs must follow one consistent direction convention.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Equations of motion should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Equations of motion, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
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
          "text": "In circular motion, the direction of velocity changes continuously. Hence velocity changes even when speed remains constant. The instantaneous velocity is tangent to the circle, while the acceleration in uniform circular motion points toward the centre. The key Class 9 insight is that changing direction alone means changing velocity.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Uniform circular motion should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Uniform circular motion, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
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
          "text": "Motion numericals become easier when the physical situation is translated into symbols. Identify the reference direction, list known values, convert units, select the relation whose conditions are satisfied, calculate and then test the answer. In multi-stage problems, keep separate intervals and connect them using final velocity of one stage as initial velocity of the next.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "text": "Numerical problem strategy should be understood from the physical definition first. The equation or diagram is a compact representation of that idea, not a replacement for the definition.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
        },
        {
          "type": "concept",
          "title": "Physical meaning",
          "text": "For Numerical problem strategy, identify what changes, what causes the change, what is measured, and which direction or reference is relevant. This prevents memorising symbols without understanding the physics.  A complete understanding also requires attention to the reference system, the units of every quantity, the direction convention where relevant, and the conditions under which the simplified school model is valid. The physical meaning should be stated in words before or after the equation so that the calculation remains connected to the phenomenon."
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
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        },
        {
          "type": "important",
          "title": "Figure interpretation note",
          "color": "purple",
          "text": "Interpret the real source figure above by identifying its axes, labels, direction arrows, scale, apparatus or physical components. The image is evidence or a diagram; it does not replace the written definition or calculation."
        }
      ]
    },
    {
      "id": "extended-11-relative-motion-and-reference-frames",
      "title": "Relative motion and reference frames",
      "blocks": [
        {
          "type": "h3",
          "title": "11. Relative motion and reference frames",
          "color": "blue",
          "text": "Relative motion and reference frames — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "Motion is not an absolute label attached permanently to an object. It is a statement about how the object’s position changes with time relative to a selected reference point or reference frame. A student sitting inside a moving bus is approximately at rest relative to another passenger, but the same student is moving relative to a person standing on the road. A correct solution therefore identifies the observer or reference frame whenever the situation can be interpreted in more than one way."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "For school-level problems, the ground is often silently taken as the reference frame, but this is a convention rather than a law of nature. Once a reference origin and positive direction are selected, positions can be assigned signs and changes in position can be calculated consistently. Changing the reference frame changes the numerical description of position and velocity, but it does not create or destroy the physical event itself."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "An important exam habit is to separate the object, the observer, and the reference frame. “The bus is moving” is incomplete unless the implied reference is understood. “The bus moves 20 m east in 5 s relative to the road” is much more precise. Relative motion becomes especially important when two vehicles move in opposite directions or when a person walks inside a moving train."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of relative motion and reference frames, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in relative motion and reference frames were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to relative motion and reference frames. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define relative motion and reference frames without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-12-distance-displacement-and-path-geometry",
      "title": "Distance, displacement and path geometry",
      "blocks": [
        {
          "type": "h3",
          "title": "12. Distance, displacement and path geometry",
          "color": "blue",
          "text": "Distance, displacement and path geometry — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "Distance is the total length of the actual path travelled by an object. It is a scalar quantity and is never negative. Displacement is the directed change in position from the initial point to the final point. It is a vector quantity, so its magnitude and direction both matter. For a trip that ends where it began, distance can be non-zero while displacement is exactly zero."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "When motion is one-dimensional, a sign convention makes displacement calculations straightforward. Choose one direction as positive, assign signs to positions, and calculate final position minus initial position. In two dimensions, displacement is represented by the straight-line vector from the starting point to the finishing point; the travelled route can be much longer than the displacement magnitude."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "The inequality magnitude of displacement ≤ distance follows directly from geometry: the straight-line separation between two points cannot exceed the length of any path connecting those points. Equality occurs only when the object travels along a straight path without reversing direction."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of distance, displacement and path geometry, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in distance, displacement and path geometry were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to distance, displacement and path geometry. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define distance, displacement and path geometry without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-13-average-speed-versus-average-velocity",
      "title": "Average speed versus average velocity",
      "blocks": [
        {
          "type": "h3",
          "title": "13. Average speed versus average velocity",
          "color": "blue",
          "text": "Average speed versus average velocity — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "Average speed is total distance divided by total time. Average velocity is total displacement divided by total time. These definitions remain valid even when speed changes during the trip. A common mistake is to average the numerical values of two or more speeds without considering how long the object travelled at each speed. The correct method starts from the definitions."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "If a cyclist travels equal distances at 10 m/s and 20 m/s, the average speed is not 15 m/s. Equal-distance travel gives a larger time contribution to the slower segment, so the average is closer to 10 m/s. In contrast, for equal time intervals, the arithmetic mean of the speeds can be used for average speed if the motion is along the same path and the speeds are the values for those equal intervals."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "Average velocity can be zero even when average speed is not zero. For example, a runner completing one full lap and returning to the starting point has non-zero distance but zero displacement. This distinction is one of the most frequently tested conceptual differences in kinematics."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of average speed versus average velocity, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in average speed versus average velocity were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to average speed versus average velocity. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define average speed versus average velocity without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-14-acceleration-as-a-rate-of-change-of-velocity",
      "title": "Acceleration as a rate of change of velocity",
      "blocks": [
        {
          "type": "h3",
          "title": "14. Acceleration as a rate of change of velocity",
          "color": "blue",
          "text": "Acceleration as a rate of change of velocity — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "Acceleration measures how quickly velocity changes with time. Because velocity includes direction, acceleration can occur when an object speeds up, slows down, or changes direction while keeping the same speed. The formula a = (v-u)/t applies directly when u and v are the initial and final velocities over the chosen time interval. Acceleration is a vector quantity and its SI unit is m/s²."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "Negative acceleration is not automatically the same thing as “slowing down.” If the chosen positive direction is east, an acceleration of −2 m/s² points west. Whether the object slows down depends on the relative directions of velocity and acceleration. Velocity and acceleration in the same direction increase speed; opposite directions decrease speed, at least during that interval."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "For uniformly accelerated motion, acceleration is constant. This condition is important before applying the three standard equations of motion. If acceleration changes significantly with time, those equations cannot simply be inserted without further analysis."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of acceleration as a rate of change of velocity, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in acceleration as a rate of change of velocity were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to acceleration as a rate of change of velocity. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define acceleration as a rate of change of velocity without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-15-reading-and-interpreting-graphs",
      "title": "Reading and interpreting graphs",
      "blocks": [
        {
          "type": "h3",
          "title": "15. Reading and interpreting graphs",
          "color": "blue",
          "text": "Reading and interpreting graphs — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "A distance–time graph shows how distance changes with time. The slope of a straight segment gives speed when the graph represents distance travelled along a single direction. A horizontal segment means distance is not increasing during that interval, so the object is at rest. A steeper straight line corresponds to a greater constant speed when the axes use the same units and scale."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "A velocity–time graph contains more information. Its slope represents acceleration, while the signed area between the graph and the time axis represents displacement. A graph below the time axis represents negative velocity relative to the selected positive direction. Therefore a student must inspect both slope and area rather than treating every graph as a picture of “speed.”"
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "Graphs are measurements represented visually, not decorative figures. Always read the axis labels, units, scale divisions, and the starting point. A graph can look steep simply because of the chosen axis scales, so numerical slope calculations are safer than visual guesses."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of reading and interpreting graphs, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in reading and interpreting graphs were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to reading and interpreting graphs. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define reading and interpreting graphs without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-16-equations-of-motion-from-definitions",
      "title": "Equations of motion from definitions",
      "blocks": [
        {
          "type": "h3",
          "title": "16. Equations of motion from definitions",
          "color": "blue",
          "text": "Equations of motion from definitions — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "For constant acceleration, the first equation v = u + at follows directly from the definition of acceleration. The second equation s = ut + 1/2 at² describes displacement during the same interval, and the third equation v² − u² = 2as eliminates time. These equations are connected, not three unrelated formulas."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "A reliable numerical method is: write the known quantities, select a positive direction, check units, identify the unknown, choose the equation that contains the required quantities, substitute with signs, and finally check the magnitude and unit. If an answer gives an impossible negative distance in a problem where distance is requested, revisit the quantity and sign convention."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "Conversions are essential. For example, 72 km/h = 72 × 5/18 = 20 m/s. Mixing km/h with seconds and metres in the same equation produces a wrong result even if the algebra is perfect."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of equations of motion from definitions, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in equations of motion from definitions were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to equations of motion from definitions. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define equations of motion from definitions without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-17-uniform-circular-motion-in-detail",
      "title": "Uniform circular motion in detail",
      "blocks": [
        {
          "type": "h3",
          "title": "17. Uniform circular motion in detail",
          "color": "blue",
          "text": "Uniform circular motion in detail — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "In uniform circular motion, an object moves along a circular path with constant speed. Its velocity is not constant because the direction of motion changes continuously. Consequently the object has acceleration even though its speedometer reading may remain unchanged. The acceleration is directed toward the centre of the circle and is called centripetal acceleration."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "The magnitude of centripetal acceleration is a_c = v²/r, where v is speed and r is radius. Thus doubling the speed at the same radius makes centripetal acceleration four times as large, while doubling the radius at the same speed halves the acceleration. The direction changes continuously as the object moves around the circle."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "Examples include a stone tied to a string, a point on a rotating fan blade, and a satellite in orbit. In each case, some inward interaction supplies the required centripetal force. “Centripetal force” is not a new fundamental force; it is the name for the net inward force responsible for circular motion."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of uniform circular motion in detail, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in uniform circular motion in detail were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to uniform circular motion in detail. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define uniform circular motion in detail without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-18-numerical-reasoning-and-unit-discipline",
      "title": "Numerical reasoning and unit discipline",
      "blocks": [
        {
          "type": "h3",
          "title": "18. Numerical reasoning and unit discipline",
          "color": "blue",
          "text": "Numerical reasoning and unit discipline — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "Physics numericals test interpretation before calculation. The same symbol can represent different physical quantities in different contexts, and a formula is useful only when its conditions are satisfied. For every problem, identify the physical story first: what moves, what is measured, what changes, and which direction is positive."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "Use dimensional checking as a quick error detector. Speed must have dimensions of length/time, acceleration length/time², and displacement length. If an expression for speed ends with seconds or square metres, something is wrong. Dimensional analysis cannot prove that a formula is physically correct in every situation, but it can expose many algebraic and unit mistakes."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "Keep significant numerical steps visible in school answers. A final line such as “v = 20 m/s” is much easier to award marks for when the preceding substitution shows where the number came from."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of numerical reasoning and unit discipline, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in numerical reasoning and unit discipline were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to numerical reasoning and unit discipline. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define numerical reasoning and unit discipline without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-19-real-life-applications-of-kinematics",
      "title": "Real-life applications of kinematics",
      "blocks": [
        {
          "type": "h3",
          "title": "19. Real-life applications of kinematics",
          "color": "blue",
          "text": "Real-life applications of kinematics — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "Vehicle motion, athletics, elevators, railway trains, amusement rides and planetary motion all involve the ideas of displacement, velocity and acceleration. A car’s speedometer measures instantaneous speed, while a trip computer can estimate average speed over a journey. GPS systems track position changes and time to infer motion, although their internal calculations are much more sophisticated than the school equations."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "Road safety illustrates the importance of stopping distance. A moving vehicle needs time for the driver to react and additional distance for braking. During emergency braking, acceleration is opposite to velocity, so the speed decreases. Longer reaction time, higher initial speed and road conditions can all affect the total stopping distance."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "Sports scientists use motion analysis to measure sprint acceleration, jump trajectories and running speed. Video frames can provide position data at successive times; from these data, displacement, average velocity and approximate acceleration can be calculated."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of real-life applications of kinematics, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in real-life applications of kinematics were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to real-life applications of kinematics. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define real-life applications of kinematics without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    },
    {
      "id": "extended-20-exam-mastery-common-traps-in-motion",
      "title": "Exam mastery: common traps in Motion",
      "blocks": [
        {
          "type": "h3",
          "title": "20. Exam mastery: common traps in Motion",
          "color": "blue",
          "text": "Exam mastery: common traps in Motion — deep study"
        },
        {
          "type": "concept",
          "title": "Core concept",
          "color": "blue",
          "text": "Do not write “distance = displacement” simply because both are measured in metres. Units do not determine whether quantities are the same. Do not say that an object has zero acceleration whenever its speed is constant; circular motion is the standard counterexample. Do not use the three equations of motion unless acceleration is constant over the interval being studied."
        },
        {
          "type": "concept",
          "title": "Detailed explanation",
          "color": "blue",
          "text": "Do not confuse instantaneous speed with average speed. Instantaneous speed describes the value at a particular instant, while average speed uses total distance over total time. Similarly, instantaneous velocity can change direction even when its magnitude remains constant."
        },
        {
          "type": "concept",
          "title": "Exam-level interpretation",
          "color": "blue",
          "text": "For graph questions, label slopes and areas explicitly. “Slope of v–t = acceleration” and “area under v–t = displacement” are different facts. Writing both beside a graph prevents the common error of interchanging them."
        },
        {
          "type": "important",
          "title": "Important Points",
          "color": "green",
          "text": "Remember the definition of exam mastery: common traps in motion, identify the physical quantity involved, state the conditions under which the formula or model applies, and keep units and directions consistent."
        },
        {
          "type": "formula",
          "title": "Formula / reasoning box",
          "color": "orange",
          "text": "Use only the equation whose assumptions match the motion. Common relations: v = u + at; s = ut + 1/2 at²; v² − u² = 2as; average speed = total distance/total time; average velocity = displacement/time."
        },
        {
          "type": "example",
          "title": "Worked Example A",
          "color": "orange",
          "text": "A car starts at 5 m/s and accelerates uniformly at 2 m/s² for 6 s. Using v = u + at, v = 5 + 2×6 = 17 m/s. The result is positive in the chosen direction and has the correct unit."
        },
        {
          "type": "example",
          "title": "Worked Example B",
          "color": "orange",
          "text": "A runner completes a 400 m lap and returns to the start in 80 s. Average speed = 400/80 = 5 m/s, while average velocity = 0/80 = 0 m/s because the displacement is zero."
        },
        {
          "type": "method",
          "title": "Step-by-step method",
          "color": "purple",
          "text": "1. Read the situation carefully. 2. Identify the object or system. 3. Write the known quantities with SI units. 4. Choose a sign convention if direction matters. 5. Select the physical law that matches the conditions. 6. Substitute carefully. 7. Check the unit and whether the result is physically reasonable. 8. State the answer in a complete sentence."
        },
        {
          "type": "error",
          "title": "Error Detective",
          "color": "red",
          "text": "Watch for unit mixing, incorrect signs, confusing scalar and vector quantities, applying a formula outside its conditions, or treating a net quantity as one individual force. If a result looks impossible, return to the definitions before changing the arithmetic."
        },
        {
          "type": "thinking",
          "title": "Scientific Thinking",
          "color": "teal",
          "text": "Ask: what observation would change if one variable in exam mastery: common traps in motion were doubled? Which quantities are vectors? Which assumptions are idealisations? What measurement could verify the prediction? These questions turn formula practice into physical reasoning."
        },
        {
          "type": "practice",
          "title": "Practice",
          "color": "blue",
          "text": "1) Distinguish distance and displacement for a round trip. 2) Convert 54 km/h into m/s. 3) A body changes velocity from 4 to 16 m/s in 6 s; find acceleration. 4) Explain the slope of a distance–time graph. 5) Explain why uniform circular motion has acceleration."
        },
        {
          "type": "challenge",
          "title": "Challenge",
          "color": "pink",
          "text": "A vehicle covers half its total distance at 30 km/h and the remaining half at 60 km/h. Derive its average speed from the definition rather than averaging 30 and 60 directly. Then explain why the two answers differ."
        },
        {
          "type": "exam",
          "title": "Exam-ready answer frame",
          "color": "green",
          "text": "Begin with the definition or law relevant to exam mastery: common traps in motion. State the condition/model used, write the equation with symbols, substitute SI values, show the calculation, and finish with a unit-bearing conclusion. For a conceptual question, include the cause → physical process → result chain."
        },
        {
          "type": "check",
          "title": "Self-check",
          "color": "teal",
          "text": "Can you define exam mastery: common traps in motion without looking at the notes? Can you explain why the formula works? Can you identify one real-life example and one common misconception? If yes, the section is ready for revision."
        }
      ]
    }
  ],
  "importantPoints": [
    "Ask: moving relative to which observer? Never describe motion without a reference when the situation has more than one frame.",
    "Add every path segment for distance; connect initial and final positions for displacement.",
    "Do not use the arithmetic mean of two speeds unless the conditions justify it. Use total distance/total time.",
    "Interpret acceleration by comparing velocity and acceleration directions, not by the word “negative” alone.",
    "Uniform speed is weaker than uniform velocity because direction may still change.",
    "Slope = change in vertical quantity/change in horizontal quantity. Do not judge speed only by visual steepness.",
    "Do not confuse the slope and area meanings: slope of v-t is acceleration; area of v-t is displacement.",
    "Write Given → Formula → Substitution → Answer. Check that acceleration is constant before using these equations.",
    "Never conclude “zero acceleration” merely because the speedometer reading is constant.",
    "A correct formula with an inconsistent sign convention can still produce a wrong answer; signs are part of the physics, not decoration."
  ],
  "keyTerms": [
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
  "figureSources": [
    {
      "title": "Distance–time graph example",
      "file": "Distance-time_graph_example.svg",
      "license": "Public domain",
      "author": "Sjlegg",
      "source": "https://commons.wikimedia.org/wiki/File:Distance-time_graph_example.svg",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Distance-time_graph_example.svg"
    },
    {
      "title": "Velocity–time graph examples",
      "file": "Example-velocity-time-diagramm.svg",
      "license": "CC BY-SA 4.0",
      "author": "MikeRun",
      "source": "https://commons.wikimedia.org/wiki/File:Example-velocity-time-diagramm.svg",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Example-velocity-time-diagramm.svg"
    },
    {
      "title": "Uniform circular motion",
      "file": "Uniform_circular_motion.svg",
      "license": "CC BY-SA 3.0",
      "author": "Brews ohare / Sjlegg",
      "source": "https://commons.wikimedia.org/wiki/File:Uniform_circular_motion.svg",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Uniform_circular_motion.svg"
    },
    {
      "title": "Circular-motion velocity and acceleration",
      "file": "Circular_motion_velocity_and_acceleration.svg",
      "license": "Public domain",
      "author": "Feeb denroc",
      "source": "https://commons.wikimedia.org/wiki/File:Circular_motion_velocity_and_acceleration.svg",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Circular_motion_velocity_and_acceleration.svg"
    },
    {
      "title": "Uniform acceleration graphs",
      "file": "Uniform-acceleration.svg",
      "license": "CC BY-SA 4.0",
      "author": "MikeRun",
      "source": "https://commons.wikimedia.org/wiki/File:Uniform-acceleration.svg",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Uniform-acceleration.svg"
    },
    {
      "title": "Free-fall animation",
      "file": "Free-fall.gif",
      "license": "CC BY-SA 3.0",
      "author": "Yuta Aoki",
      "source": "https://commons.wikimedia.org/wiki/File:Free-fall.gif",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Free-fall.gif"
    }
  ]
};
