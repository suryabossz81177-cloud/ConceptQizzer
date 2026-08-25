window.ChapterData = {
  "id": "class8-mathematics-practical-geometry",
  "class": 8,
  "subject": "Mathematics",
  "chapterNumber": 4,
  "title": "Practical Geometry",
  "description": "Detailed Class 8 mathematics notes on geometric construction, quadrilateral construction methods, instruments, accuracy, verification, examples, practice and challenges.",
  "summary": "Practical Geometry uses ruler, compass and protractor to construct accurate figures from given mathematical conditions. Diagonals, sides and angles provide the constraints needed to construct quadrilaterals.",
  "sections": [
    {
      "title": "📘 Chapter Introduction",
      "blocks": [
        {
          "type": "paragraph",
          "title": "What is Practical Geometry?",
          "text": "Practical Geometry is the part of geometry in which we use instruments such as a ruler, compass and protractor to construct figures accurately. Instead of only drawing a shape by eye, we follow mathematical conditions and construction steps so that the required lengths and angles are correct."
        },
        {
          "type": "paragraph",
          "title": "Why This Topic Matters",
          "text": "Construction skills are useful in geometry, design, engineering, architecture, maps, technical drawings and everyday measurement. The important skill is not artistic drawing; it is converting given mathematical information into an accurate figure."
        },
        {
          "type": "application",
          "title": "Real-Life Connection",
          "text": "A designer may need a four-sided frame with exact side lengths and a specified diagonal. A construction method gives a reliable way to create it instead of guessing the shape."
        },
        {
          "type": "fact",
          "title": "Core Idea",
          "text": "Every construction begins by identifying exactly what is given, what must be constructed, and which geometric fact will guarantee the required condition."
        }
      ]
    },
    {
      "title": "🧰 1. Construction Instruments and Their Uses",
      "blocks": [
        {
          "type": "definition",
          "title": "Ruler",
          "text": "A ruler is used mainly to draw straight line segments and to measure lengths when required."
        },
        {
          "type": "definition",
          "title": "Compass",
          "text": "A compass is used to draw arcs or circles and, importantly, to transfer a given length from one place to another without changing it."
        },
        {
          "type": "definition",
          "title": "Protractor",
          "text": "A protractor is used to measure or construct a given angle."
        },
        {
          "type": "rule",
          "title": "Construction Principle",
          "text": "A compass is not just a circle-drawing tool. It allows us to copy a length exactly. This is essential when constructing sides of a quadrilateral."
        },
        {
          "type": "figure",
          "title": "A Basic Segment",
          "svg": "<svg viewBox=\"0 0 520 150\" role=\"img\" aria-label=\"Constructing a line segment\"><line x1=\"70\" y1=\"85\" x2=\"450\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"70\" cy=\"85\" r=\"6\" fill=\"currentColor\"/><circle cx=\"450\" cy=\"85\" r=\"6\" fill=\"currentColor\"/><text x=\"58\" y=\"120\" font-size=\"24\">A</text><text x=\"438\" y=\"120\" font-size=\"24\">B</text><text x=\"220\" y=\"55\" font-size=\"22\">given length</text></svg>"
        },
        {
          "type": "commonMistake",
          "title": "Instrument Mistake",
          "mistake": "Changing the compass opening while transferring a length.",
          "correction": "Keep the compass opening fixed until the required arc or transferred length has been marked."
        }
      ]
    },
    {
      "title": "📐 2. Basic Constructions You Need",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Before Constructing Quadrilaterals",
          "text": "You should be comfortable constructing a line segment of a given length, copying a segment, constructing an angle, and drawing a perpendicular. These basic skills are repeatedly used in quadrilateral constructions."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 1 — Draw a Segment",
          "question": "Construct a line segment AB of 6 cm.",
          "steps": [
            "Draw a straight line with a ruler.",
            "Mark a point A.",
            "Set the compass opening to 6 cm using the ruler.",
            "With centre A, mark point B on the line.",
            "The segment AB is 6 cm."
          ],
          "answer": "AB = 6 cm."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 2 — Copy a Segment",
          "question": "Copy a given segment AB at a new point P.",
          "steps": [
            "Open the compass to exactly the length AB.",
            "Draw a ray from P.",
            "With centre P, draw an arc cutting the ray at Q.",
            "Then PQ = AB because the compass opening was unchanged."
          ],
          "answer": "PQ is an exact copy of AB."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 3 — Construct a Perpendicular",
          "question": "Draw a perpendicular to a line at a point on the line.",
          "steps": [
            "Mark equal points on the line on both sides of the given point.",
            "Using the same compass opening, draw arcs from those two points so that the arcs intersect.",
            "Join the intersection point to the given point.",
            "The resulting line is perpendicular to the original line."
          ],
          "answer": "The two lines meet at 90°."
        },
        {
          "type": "figure",
          "title": "Perpendicular Construction",
          "svg": "<svg viewBox=\"0 0 520 280\" role=\"img\" aria-label=\"Perpendicular construction\"><line x1=\"70\" y1=\"190\" x2=\"450\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"4\"/><line x1=\"260\" y1=\"190\" x2=\"260\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"4\"/><path d=\"M260 190 L260 155 L295 155 L295 190\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"260\" cy=\"190\" r=\"6\" fill=\"currentColor\"/><text x=\"48\" y=\"225\" font-size=\"22\">A</text><text x=\"250\" y=\"45\" font-size=\"22\">B</text><text x=\"292\" y=\"225\" font-size=\"22\">90°</text></svg>"
        }
      ]
    },
    {
      "title": "🔷 3. Understanding Quadrilateral Construction",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Why Construction Is Possible",
          "text": "A quadrilateral has many possible shapes if only a few measurements are known. To determine one specific quadrilateral, enough independent information must be given. A diagonal is often useful because it divides a quadrilateral into two triangles."
        },
        {
          "type": "figure",
          "title": "A Diagonal Splits a Quadrilateral",
          "svg": "<svg viewBox=\"0 0 520 280\" role=\"img\" aria-label=\"Quadrilateral with a diagonal\"><polygon points=\"110,210 170,55 430,85 380,230\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"/><line x1=\"110\" y1=\"210\" x2=\"430\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"10 7\"/><text x=\"90\" y=\"238\" font-size=\"22\">A</text><text x=\"155\" y=\"40\" font-size=\"22\">B</text><text x=\"438\" y=\"88\" font-size=\"22\">C</text><text x=\"386\" y=\"254\" font-size=\"22\">D</text><text x=\"250\" y=\"132\" font-size=\"20\">diagonal AC</text></svg>"
        },
        {
          "type": "rule",
          "title": "Construction Strategy",
          "text": "A very useful strategy is: construct a known diagonal or side first, then construct the remaining vertices using the given lengths or angles."
        },
        {
          "type": "think",
          "title": "Think & Understand",
          "text": "Why can a diagonal make a quadrilateral easier to construct? Because it divides the quadrilateral into two triangles, and triangles can be constructed from standard sets of measurements."
        }
      ]
    },
    {
      "title": "✏️ 4. Constructing a Quadrilateral When Four Sides and One Diagonal Are Given",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Given Information",
          "text": "Suppose the four sides AB, BC, CD and DA are given and diagonal AC is also given. The diagonal AC divides ABCD into triangles ABC and ADC."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 4",
          "question": "Construct quadrilateral ABCD when AB = 4 cm, BC = 5 cm, CD = 6 cm, DA = 5 cm and diagonal AC = 7 cm.",
          "steps": [
            "Draw AC = 7 cm.",
            "With A as centre and radius AB = 4 cm, draw an arc.",
            "With C as centre and radius BC = 5 cm, draw another arc cutting the first at B.",
            "With A as centre and radius AD = 5 cm, draw an arc on the opposite side of AC.",
            "With C as centre and radius CD = 6 cm, draw another arc cutting it at D.",
            "Join AB, BC, CD and DA.",
            "The required quadrilateral ABCD is obtained."
          ],
          "answer": "ABCD is the required quadrilateral with the five given measurements."
        },
        {
          "type": "why",
          "title": "Why This Works",
          "text": "Point B is forced by its distances from A and C. Point D is similarly forced by its distances from A and C. Thus the two triangles are constructed on the two sides of AC."
        },
        {
          "type": "commonMistake",
          "title": "Wrong Side of Diagonal",
          "mistake": "Putting B and D on the same side of AC.",
          "correction": "For the intended quadrilateral, construct the two triangles on opposite sides of the diagonal."
        }
      ]
    },
    {
      "title": "📏 5. Constructing a Quadrilateral When Two Diagonals and Three Sides Are Given",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Given Information",
          "text": "One common construction gives the two diagonals and three sides. The diagonals help locate the intersection structure, while the side lengths locate the vertices."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 5",
          "question": "Construct quadrilateral ABCD when AB = 4 cm, BC = 5 cm, CD = 4.5 cm, diagonal AC = 6 cm and diagonal BD = 7 cm.",
          "steps": [
            "Draw AC = 6 cm.",
            "Construct B using AB = 4 cm and BC = 5 cm, so B lies at the required distances from A and C.",
            "Construct D using CD = 4.5 cm together with the given diagonal condition BD = 7 cm.",
            "Use the intersection of the appropriate arcs to locate D.",
            "Join AB, BC, CD and DA.",
            "Check that BD measures 7 cm."
          ],
          "answer": "The required quadrilateral is obtained after checking all five given conditions."
        },
        {
          "type": "important",
          "title": "Construction Check",
          "text": "After completing a construction, measure the required lengths and diagonals. The measurements should agree with the data, allowing for small drawing/instrument errors."
        },
        {
          "type": "think",
          "title": "Think & Understand",
          "text": "Why are diagonals useful as construction data? They create fixed distances between non-adjacent vertices and can reduce the problem to triangle constructions."
        }
      ]
    },
    {
      "title": "📐 6. Constructing a Quadrilateral When Two Adjacent Sides and Three Angles Are Given",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Idea",
          "text": "When two adjacent sides and three angles are known, start with one of the given sides. Construct the required angles at its endpoints, mark the second given side, and use the remaining angle information to locate the final vertex."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 6",
          "question": "Construct quadrilateral ABCD when AB = 5 cm, AD = 4 cm, ∠A = 80°, ∠B = 100°, and ∠C = 70°.",
          "steps": [
            "Draw AB = 5 cm.",
            "At A, construct ∠DAB = 80°.",
            "On the new ray, mark AD = 4 cm.",
            "At B, construct ∠ABC = 100° on the appropriate side.",
            "The ray from B and the ray from D determined by the remaining angle condition meet at C.",
            "Join the required sides and verify ∠C = 70°.",
            "The fourth angle should then satisfy the 360° angle-sum property."
          ],
          "answer": "ABCD is the required quadrilateral after all three angle conditions are verified."
        },
        {
          "type": "rule",
          "title": "Verification",
          "text": "If three angles and two adjacent sides are given, the fourth angle is not independent; it must satisfy the quadrilateral angle sum of 360°."
        },
        {
          "type": "commonMistake",
          "title": "Angle Orientation",
          "mistake": "Constructing an angle on the wrong side of a segment.",
          "correction": "Decide which side of the starting segment contains the quadrilateral before constructing the angle."
        }
      ]
    },
    {
      "title": "📐 7. Constructing a Quadrilateral When Three Sides and Two Included Angles Are Given",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Idea",
          "text": "Start with one given side. Construct one included angle at each endpoint, mark the given adjacent sides on the resulting rays, and then join the final two vertices."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 7",
          "question": "Construct quadrilateral ABCD when AB = 6 cm, BC = 4 cm, CD = 5 cm, ∠ABC = 75° and ∠BCD = 110°.",
          "steps": [
            "Draw AB = 6 cm.",
            "At B, construct ∠ABC = 75°.",
            "On the new ray, mark BC = 4 cm.",
            "At C, construct ∠BCD = 110°.",
            "On the corresponding ray from C, mark CD = 5 cm.",
            "Join D to A.",
            "Check the constructed angles and side lengths."
          ],
          "answer": "ABCD is the required quadrilateral."
        },
        {
          "type": "why",
          "title": "Why Start With a Given Side?",
          "text": "A fixed side gives a definite starting position. The two included angles then determine directions for the next sides, while the given lengths locate the vertices."
        },
        {
          "type": "think",
          "title": "What If?",
          "text": "What happens if one of the given angles is changed? The direction of the corresponding side changes, so the final quadrilateral generally changes as well."
        }
      ]
    },
    {
      "title": "🧭 8. Constructing Special Quadrilaterals",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Using Properties",
          "text": "Special quadrilaterals can often be constructed more efficiently because their defining properties provide extra information. For example, a rectangle requires right angles, while a rhombus requires equal sides."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 8 — Rectangle",
          "question": "Construct a rectangle ABCD of length 7 cm and breadth 4 cm.",
          "steps": [
            "Draw AB = 7 cm.",
            "Construct perpendiculars at A and B.",
            "On the perpendicular at A, mark AD = 4 cm.",
            "On the perpendicular at B, mark BC = 4 cm.",
            "Join C and D.",
            "Verify that opposite sides are parallel and all angles are 90°."
          ],
          "answer": "ABCD is the required rectangle."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 9 — Square",
          "question": "Construct a square of side 5 cm.",
          "steps": [
            "Draw AB = 5 cm.",
            "Construct a 90° angle at A and mark AD = 5 cm.",
            "Construct a 90° angle at B on the same side and mark BC = 5 cm.",
            "Join C and D.",
            "Verify all four sides are equal and all angles are right angles."
          ],
          "answer": "ABCD is the required square."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 10 — Rhombus",
          "question": "Construct a rhombus with side 6 cm and one angle 60°.",
          "steps": [
            "Draw AB = 6 cm.",
            "At A construct 60°.",
            "On the new ray mark AD = 6 cm.",
            "With B and D as centres and radius 6 cm, draw arcs to locate C.",
            "Join BC and CD."
          ],
          "answer": "ABCD is the required rhombus."
        },
        {
          "type": "think",
          "title": "Compare",
          "text": "Which properties make square construction easier than construction of an arbitrary quadrilateral? A square supplies four equal sides and four right angles, giving strong constraints."
        }
      ]
    },
    {
      "title": "🔍 9. Accuracy and Verification",
      "blocks": [
        {
          "type": "rule",
          "title": "Check Every Given Condition",
          "text": "A correct-looking drawing is not enough. Verify the specified side lengths, angles and diagonals using the appropriate instrument."
        },
        {
          "type": "paragraph",
          "title": "Verification Checklist",
          "text": "1. Check every given side length. 2. Check every given angle. 3. Check every given diagonal. 4. Check parallel/perpendicular conditions when required. 5. Check that the final figure is closed."
        },
        {
          "type": "solvedExample",
          "title": "Solved Construction 11 — Verification",
          "question": "A student constructs a quadrilateral with the correct four side lengths but the required diagonal is wrong. Is the construction complete?",
          "steps": [
            "The diagonal is part of the given data.",
            "A correct construction must satisfy all independent conditions.",
            "Therefore the student must reconstruct or correct the figure."
          ],
          "answer": "No. Every required condition must be satisfied."
        },
        {
          "type": "commonMistake",
          "title": "Measuring by Eye",
          "mistake": "Accepting a figure because it looks correct.",
          "correction": "Use a ruler, compass and protractor to verify the actual construction."
        }
      ]
    },
    {
      "title": "🧠 10. Think & Understand",
      "blocks": [
        {
          "type": "think",
          "title": "Why Does a Diagonal Help?",
          "text": "A quadrilateral can have many possible shapes. A known diagonal fixes the distance between two opposite vertices and lets us construct two triangles."
        },
        {
          "type": "think",
          "title": "What If?",
          "text": "What if the given side lengths and diagonal cannot form a triangle? Then the proposed quadrilateral construction is impossible with those measurements."
        },
        {
          "type": "think",
          "title": "Reasoning",
          "text": "Why must a compass opening remain unchanged when transferring a length? Because changing the opening changes the radius and therefore no longer copies the original length exactly."
        },
        {
          "type": "think",
          "title": "HOTS",
          "text": "Suppose four side lengths are given but no diagonal, angle or other condition is given. Is one unique quadrilateral necessarily determined? Explain why extra information may be needed."
        },
        {
          "type": "think",
          "title": "Challenge Thinking",
          "text": "Can two different-looking quadrilaterals satisfy the same limited data? Yes, if the data do not constrain the shape sufficiently. Construction problems are designed to provide enough independent information."
        }
      ]
    },
    {
      "title": "⚠️ 11. Common Mistakes",
      "blocks": [
        {
          "type": "commonMistake",
          "title": "Compass Opening",
          "mistake": "Changing the compass opening while transferring a length.",
          "correction": "Keep it fixed for that transfer."
        },
        {
          "type": "commonMistake",
          "title": "Wrong Arc Intersection",
          "mistake": "Using the wrong intersection of two arcs.",
          "correction": "Choose the intersection that satisfies the intended side of the construction and all given conditions."
        },
        {
          "type": "commonMistake",
          "title": "Wrong Angle Side",
          "mistake": "Constructing an angle on the opposite side of the base.",
          "correction": "Follow the diagram orientation and keep the whole quadrilateral on the intended side."
        },
        {
          "type": "commonMistake",
          "title": "Skipping Verification",
          "mistake": "Not checking the final lengths and angles.",
          "correction": "Measure the final figure before declaring the construction complete."
        },
        {
          "type": "commonMistake",
          "title": "Joining Wrong Vertices",
          "mistake": "Connecting points in the wrong order.",
          "correction": "Name the quadrilateral in order, such as A-B-C-D, and join consecutive vertices."
        },
        {
          "type": "commonMistake",
          "title": "Using Appearance",
          "mistake": "Assuming lines are parallel or perpendicular because they look so.",
          "correction": "Construct them using the required geometric method and verify them."
        }
      ]
    },
    {
      "title": "🎯 12. Exam Zone",
      "blocks": [
        {
          "type": "formula",
          "title": "Important Results",
          "formula": "Interior angle sum of quadrilateral = 360°\nRectangle: all angles = 90°\nSquare: all sides equal and all angles = 90°\nA diagonal divides a quadrilateral into two triangles\nTriangle construction data are often used to construct quadrilaterals"
        },
        {
          "type": "examTip",
          "title": "Construction Question Pattern",
          "text": "In exams, write the construction steps in correct order. Mention the instrument/action clearly: draw, construct, mark, draw an arc, join, and verify."
        },
        {
          "type": "examTip",
          "title": "Exam Tips",
          "text": "Use a sharp pencil, keep arcs visible, label every important point, do not erase construction arcs too early, and show enough construction lines for the examiner to see how the figure was obtained."
        }
      ]
    },
    {
      "title": "📝 13. Practice Questions",
      "blocks": [
        {
          "type": "practice",
          "title": "Basic",
          "questions": [
            "Name the three main instruments used in practical geometry.",
            "What is the purpose of a compass in construction?",
            "How many diagonals does a quadrilateral have?",
            "Why can a diagonal be useful when constructing a quadrilateral?",
            "State the angle sum of a quadrilateral."
          ]
        },
        {
          "type": "practice",
          "title": "Construction Practice",
          "questions": [
            "Construct a quadrilateral when four sides and one diagonal are given.",
            "Construct a rectangle of length 8 cm and breadth 5 cm.",
            "Construct a square of side 6 cm.",
            "Construct a rhombus with side 5 cm and one angle 60°.",
            "Construct a quadrilateral using three sides and two included angles."
          ]
        },
        {
          "type": "practice",
          "title": "Reasoning",
          "questions": [
            "Why must all given conditions be checked after construction?",
            "Why is a compass useful for copying a length?",
            "Can four side lengths alone always determine a unique quadrilateral? Explain.",
            "Why does a diagonal reduce a quadrilateral construction to triangle constructions?"
          ]
        },
        {
          "type": "practice",
          "title": "HOTS",
          "questions": [
            "Design a construction plan for a quadrilateral with four given sides and one diagonal. Explain why each arc is needed.",
            "A student's construction has correct sides but the wrong angle. Identify what must be checked.",
            "Explain how you would decide which of two arc intersections should be selected.",
            "Compare constructing a square and an arbitrary quadrilateral. Which gives more constraints and why?"
          ]
        }
      ]
    },
    {
      "title": "🏆 14. Challenge Zone",
      "blocks": [
        {
          "type": "challenge",
          "title": "Challenge 1",
          "question": "Construct a quadrilateral ABCD with AB = 5 cm, BC = 6 cm, CD = 4 cm, DA = 7 cm and AC = 8 cm. Write every construction step."
        },
        {
          "type": "challenge",
          "title": "Challenge 2",
          "question": "Design a quadrilateral construction using two diagonals and three sides. State which point should be constructed first and why."
        },
        {
          "type": "challenge",
          "title": "Challenge 3",
          "question": "A quadrilateral is to be constructed using two adjacent sides and three angles. Explain how the final vertex is located."
        },
        {
          "type": "challenge",
          "title": "Challenge 4",
          "question": "Give an example of data that may be insufficient to determine one unique quadrilateral, and explain what additional measurement could help."
        },
        {
          "type": "challenge",
          "title": "Challenge 5 — Concept Mixing",
          "question": "Explain how the properties of a square can be used to create a construction with only a side length and right-angle constructions."
        }
      ]
    },
    {
      "title": "🔄 15. Chapter Revision",
      "blocks": [
        {
          "type": "mindmap",
          "title": "Quick Revision Map",
          "items": [
            "Practical Geometry → accurate geometric constructions",
            "Ruler → straight segments/measurement",
            "Compass → arcs and transfer of lengths",
            "Protractor → angles",
            "Diagonal → divides quadrilateral into two triangles",
            "Four sides + one diagonal → construct two triangles",
            "Two diagonals + three sides → use distance conditions",
            "Two adjacent sides + three angles → use rays and angles",
            "Three sides + two included angles → start from a given side",
            "Special quadrilaterals → use their defining properties",
            "Verification → check every given condition"
          ]
        },
        {
          "type": "formula",
          "title": "Quick Results",
          "formula": "Quadrilateral angle sum = 360°\nRectangle → 4 right angles\nSquare → 4 equal sides + 4 right angles\nDiagonal → joins non-adjacent vertices"
        },
        {
          "type": "examTip",
          "title": "One-Minute Revision",
          "text": "Read the data first. Decide the starting segment. Use compass to transfer lengths, protractor or angle construction for directions, arcs for locating points, join vertices in order, then verify."
        }
      ]
    },
    {
      "title": "⭐ 16. Important Points",
      "blocks": [
        {
          "type": "keypoint",
          "title": "Construction is Exact",
          "text": "Practical geometry is based on mathematical conditions, not freehand appearance."
        },
        {
          "type": "keypoint",
          "title": "Compass",
          "text": "It transfers a length accurately and draws arcs used to locate points."
        },
        {
          "type": "keypoint",
          "title": "Diagonal Strategy",
          "text": "A diagonal can split a quadrilateral into two triangles, making construction easier."
        },
        {
          "type": "keypoint",
          "title": "Enough Information",
          "text": "A unique construction requires sufficient independent measurements or properties."
        },
        {
          "type": "keypoint",
          "title": "Verification",
          "text": "Every given length, angle, diagonal and special property should be checked."
        }
      ]
    },
    {
      "title": "🔑 17. Key Terms",
      "blocks": [
        {
          "type": "definition",
          "title": "Construction",
          "text": "A precise geometric drawing made using specified instruments and mathematical conditions."
        },
        {
          "type": "definition",
          "title": "Compass",
          "text": "An instrument used to draw arcs/circles and transfer lengths."
        },
        {
          "type": "definition",
          "title": "Diagonal",
          "text": "A line segment joining two non-adjacent vertices of a polygon."
        },
        {
          "type": "definition",
          "title": "Arc",
          "text": "A part of the circumference of a circle used frequently to locate points in constructions."
        },
        {
          "type": "definition",
          "title": "Perpendicular",
          "text": "Lines or segments meeting at 90°."
        },
        {
          "type": "definition",
          "title": "Bisect",
          "text": "To divide into two equal parts."
        },
        {
          "type": "definition",
          "title": "Vertex",
          "text": "A point where two or more sides or rays meet."
        },
        {
          "type": "definition",
          "title": "Included Angle",
          "text": "An angle formed by two specified sides, usually at their common endpoint."
        },
        {
          "type": "definition",
          "title": "Verification",
          "text": "Checking whether the completed construction satisfies the given conditions."
        }
      ]
    },
    {
      "title": "📖 18. Chapter Summary",
      "blocks": [
        {
          "type": "summary",
          "title": "Complete Chapter Summary",
          "text": "Practical Geometry teaches accurate geometric construction using a ruler, compass and protractor. The main skill is to translate given lengths, angles, diagonals and properties into a sequence of construction steps. A diagonal is especially useful because it divides a quadrilateral into two triangles. Important quadrilateral constructions include cases where four sides and one diagonal are given, where diagonals and sides are given, and where combinations of sides and angles are specified. Special quadrilaterals such as rectangles, squares and rhombi can be constructed efficiently by using their defining properties. A construction is complete only when all given conditions have been satisfied and verified. Accuracy, correct instrument use, clear labelling and visible construction lines are essential."
        }
      ]
    }
  ],
  "importantPoints": [
    "Practical geometry is based on exact conditions, not appearance.",
    "A compass transfers lengths accurately.",
    "A diagonal can divide a quadrilateral into two triangles.",
    "Construction data must be sufficient to determine the required figure.",
    "Always verify the final side lengths, angles and diagonals.",
    "Keep construction arcs and labels clear in an examination."
  ],
  "keyTerms": [
    {
      "term": "Construction",
      "definition": "A precise geometric drawing made from specified conditions."
    },
    {
      "term": "Compass",
      "definition": "An instrument for arcs/circles and transferring lengths."
    },
    {
      "term": "Diagonal",
      "definition": "A segment joining two non-adjacent vertices."
    },
    {
      "term": "Arc",
      "definition": "A part of a circle used to locate points."
    },
    {
      "term": "Perpendicular",
      "definition": "Lines meeting at 90°."
    },
    {
      "term": "Verification",
      "definition": "Checking that the construction satisfies all given conditions."
    }
  ]
};
