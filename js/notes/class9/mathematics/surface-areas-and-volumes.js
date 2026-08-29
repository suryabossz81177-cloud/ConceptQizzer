/* ConceptQizzer — Class 9 Mathematics — corrected render-safe chapter file */
/* Loader fix: all chapter extensions are inside the object; no post-declaration ChapterData.* statements remain. */
"use strict";

const ChapterData = {
  "id": "9-mathematics-surface-areas-and-volumes",
  "title": "Surface Areas and Volumes",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 11,
  "file": "js/notes/class9/mathematics/surface-areas-and-volumes.js",
  "enabled": true,
  "description": "A highly detailed Class 9 Surface Areas and Volumes chapter covering surface-area language, nets, cube, cuboid, cylinder, cone, sphere, hemisphere, unit conversion, composite solids, recasting, scaling, exposed surfaces, errors and HOTS.",
  "learningObjectives": [
    "Distinguish surface area and volume.",
    "Derive and use cube/cuboid formulas.",
    "Use cylinder formulas correctly.",
    "Use cone slant and vertical heights correctly.",
    "Use sphere and hemisphere formulas.",
    "Convert units before substitution.",
    "Solve composite and recasting problems.",
    "Apply scaling rules and verify exposed surfaces."
  ],
  "prerequisiteCheck": [
    "Plane areas and circumference",
    "Pythagoras theorem",
    "Unit conversion",
    "Basic algebra"
  ],
  "conceptRoadmap": [
    "Confusing CSA with TSA.",
    "Using h instead of l in cone CSA.",
    "Using l instead of h in cone volume.",
    "Forgetting hemisphere base in TSA.",
    "Mixing cm and m.",
    "Using square units for volume.",
    "Counting internal joined faces."
  ],
  "comparisonTables": [],
  "theoremPropertyLab": [],
  "formulaPropertyBank": [
    "Cube TSA=6a²",
    "Cube V=a³",
    "Cuboid TSA=2(lb+bh+hl)",
    "Cuboid LSA=2h(l+b)",
    "Cuboid V=lbh",
    "Cylinder CSA=2πrh",
    "Cylinder TSA=2πr(h+r)",
    "Cylinder V=πr²h",
    "Cone l²=r²+h²",
    "Cone CSA=πrl",
    "Cone TSA=πr(l+r)",
    "Cone V=(1/3)πr²h",
    "Sphere SA=4πr²",
    "Sphere V=(4/3)πr³",
    "Hemisphere CSA=2πr²",
    "Hemisphere TSA=3πr²",
    "Hemisphere V=(2/3)πr³"
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
      "problem": "Write the solid and target measure.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Convert units first.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "For cone keep l and h distinct.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "For composite TSA count exposed surfaces only.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Recasting preserves volume, not generally surface area.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Why does a net help with surface area but not directly with volume?",
      "answer": "A net represents exposed faces; volume needs three-dimensional filling/space."
    },
    {
      "question": "Two cuboids have the same volume. Must their TSA be equal?",
      "answer": "No."
    },
    {
      "question": "If radius doubles while height stays fixed, what happens to volume?",
      "answer": "It becomes four times."
    },
    {
      "question": "If r=3,h=4, compare CSA and volume numerically with π left symbolic.",
      "answer": "CSA=15π cm² and V=12π cm³."
    },
    {
      "question": "A hemisphere is attached to a cylinder along the circular face. Should that joined face be counted in exposed surface area?",
      "answer": "No."
    }
  ],
  "realLifeMathematics": [],
  "mathematicalActivityLab": [],
  "visualLearning": [],
  "masterDefinitions": [
    {
      "term": "Surface area",
      "definition": "Area of the exposed boundary of a solid."
    },
    {
      "term": "Volume",
      "definition": "Space occupied by a solid."
    },
    {
      "term": "Curved surface area",
      "definition": "Area of the curved portion excluding flat bases when specified."
    },
    {
      "term": "Total surface area",
      "definition": "Sum of all surfaces that the question says are exposed."
    },
    {
      "term": "Slant height",
      "definition": "Sloping length from cone vertex to circular rim."
    },
    {
      "term": "Composite solid",
      "definition": "Solid formed by combining standard solids."
    }
  ],
  "formulaRevisionSheet": [
    "Cube TSA=6a²",
    "Cube V=a³",
    "Cuboid TSA=2(lb+bh+hl)",
    "Cuboid LSA=2h(l+b)",
    "Cuboid V=lbh",
    "Cylinder CSA=2πrh",
    "Cylinder TSA=2πr(h+r)",
    "Cylinder V=πr²h",
    "Cone l²=r²+h²",
    "Cone CSA=πrl",
    "Cone TSA=πr(l+r)",
    "Cone V=(1/3)πr²h",
    "Sphere SA=4πr²",
    "Sphere V=(4/3)πr³",
    "Hemisphere CSA=2πr²",
    "Hemisphere TSA=3πr²",
    "Hemisphere V=(2/3)πr³"
  ],
  "questionBank": [
    {
      "topic": "Language",
      "difficulty": "Basic",
      "question": "What unit measures volume?",
      "answer": "Cubic units such as cm³.",
      "solution": "Volume has three dimensions."
    },
    {
      "topic": "Language",
      "difficulty": "Understanding",
      "question": "Why is surface area not measured in cm³?",
      "answer": "It is two-dimensional.",
      "solution": "Area of exposed surfaces uses two length dimensions."
    },
    {
      "topic": "Language",
      "difficulty": "Application",
      "question": "Find cube TSA for a=5 cm.",
      "answer": "150 cm².",
      "solution": "6×5²=150."
    },
    {
      "topic": "Language",
      "difficulty": "HOTS",
      "question": "If every length doubles, how do area and volume change?",
      "answer": "Area×4 and volume×8.",
      "solution": "Area scales as k² and volume as k³."
    },
    {
      "topic": "Language",
      "difficulty": "Challenge",
      "question": "Why does a net help with surface area but not directly with volume?",
      "answer": "A net represents exposed faces; volume needs three-dimensional filling/space.",
      "solution": "Unfolding preserves face areas but removes the solid’s 3-D arrangement."
    },
    {
      "topic": "Cuboid",
      "difficulty": "Basic",
      "question": "Find volume of 8×5×3 cm cuboid.",
      "answer": "120 cm³.",
      "solution": "8×5×3=120."
    },
    {
      "topic": "Cuboid",
      "difficulty": "Understanding",
      "question": "State cuboid TSA.",
      "answer": "2(lb+bh+hl).",
      "solution": "Add the areas of the three pairs of opposite faces."
    },
    {
      "topic": "Cuboid",
      "difficulty": "Application",
      "question": "A cuboid has V=360,l=10,b=6. Find h.",
      "answer": "6 cm.",
      "solution": "h=360/(10×6)=6."
    },
    {
      "topic": "Cuboid",
      "difficulty": "HOTS",
      "question": "If l,b,h are all doubled, what happens to TSA and volume?",
      "answer": "TSA×4, volume×8.",
      "solution": "Area scales with square and volume with cube."
    },
    {
      "topic": "Cuboid",
      "difficulty": "Challenge",
      "question": "Two cuboids have the same volume. Must their TSA be equal?",
      "answer": "No.",
      "solution": "Different shapes with equal volume can have different exposed surface areas."
    },
    {
      "topic": "Cylinder",
      "difficulty": "Basic",
      "question": "Find CSA for r=7,h=10 using π=22/7.",
      "answer": "440 cm².",
      "solution": "2πrh=440."
    },
    {
      "topic": "Cylinder",
      "difficulty": "Understanding",
      "question": "What surfaces are excluded from CSA?",
      "answer": "Both circular bases.",
      "solution": "CSA is only the curved side."
    },
    {
      "topic": "Cylinder",
      "difficulty": "Application",
      "question": "Find volume for r=3.5,h=8 using π=22/7.",
      "answer": "308 cm³.",
      "solution": "πr²h=22/7×12.25×8=308."
    },
    {
      "topic": "Cylinder",
      "difficulty": "HOTS",
      "question": "An open-top cylinder has what surface area?",
      "answer": "2πrh+πr².",
      "solution": "Curved surface plus one circular base."
    },
    {
      "topic": "Cylinder",
      "difficulty": "Challenge",
      "question": "If radius doubles while height stays fixed, what happens to volume?",
      "answer": "It becomes four times.",
      "solution": "V=πr²h, so V scales as r²."
    },
    {
      "topic": "Cone",
      "difficulty": "Basic",
      "question": "Find l for r=9,h=12.",
      "answer": "15 cm.",
      "solution": "l=√(81+144)=15."
    },
    {
      "topic": "Cone",
      "difficulty": "Understanding",
      "question": "Which height belongs in cone volume?",
      "answer": "Vertical/perpendicular height h.",
      "solution": "Volume uses base area×perpendicular height."
    },
    {
      "topic": "Cone",
      "difficulty": "Application",
      "question": "Find CSA for r=5,l=13.",
      "answer": "65π cm².",
      "solution": "πrl=π×5×13=65π."
    },
    {
      "topic": "Cone",
      "difficulty": "HOTS",
      "question": "Why is cone CSA not πrh?",
      "answer": "The curved surface follows slant length.",
      "solution": "The sloping edge is l, while h is perpendicular height."
    },
    {
      "topic": "Cone",
      "difficulty": "Challenge",
      "question": "If r=3,h=4, compare CSA and volume numerically with π left symbolic.",
      "answer": "CSA=15π cm² and V=12π cm³.",
      "solution": "l=5; CSA=π×3×5=15π; V=(1/3)π×9×4=12π."
    },
    {
      "topic": "Sphere",
      "difficulty": "Basic",
      "question": "Find sphere surface area for r=3.",
      "answer": "36π cm².",
      "solution": "4πr²=4π×9=36π."
    },
    {
      "topic": "Sphere",
      "difficulty": "Understanding",
      "question": "What is hemisphere TSA?",
      "answer": "3πr².",
      "solution": "2πr² curved plus πr² circular base."
    },
    {
      "topic": "Sphere",
      "difficulty": "Application",
      "question": "Find volume of sphere r=3.",
      "answer": "36π cm³.",
      "solution": "(4/3)π×27=36π."
    },
    {
      "topic": "Sphere",
      "difficulty": "HOTS",
      "question": "Why is hemisphere volume half the sphere volume?",
      "answer": "A hemisphere is exactly half the sphere by volume.",
      "solution": "(1/2)×(4/3)πr³=(2/3)πr³."
    },
    {
      "topic": "Sphere",
      "difficulty": "Challenge",
      "question": "A hemisphere is attached to a cylinder along the circular face. Should that joined face be counted in exposed surface area?",
      "answer": "No.",
      "solution": "The interface is internal, not exposed."
    },
    {
      "topic": "Composite",
      "difficulty": "Basic",
      "question": "Find volume of cylinder r=3,h=10.",
      "answer": "90π cm³.",
      "solution": "πr²h=π×9×10=90π."
    },
    {
      "topic": "Composite",
      "difficulty": "Understanding",
      "question": "What is conserved in lossless melting and recasting?",
      "answer": "Volume.",
      "solution": "The quantity of material is unchanged."
    },
    {
      "topic": "Composite",
      "difficulty": "Application",
      "question": "A cube of side 6 cm is recast into a cuboid l=12,b=6. Find h.",
      "answer": "3 cm.",
      "solution": "Cube volume=216; h=216/(12×6)=3."
    },
    {
      "topic": "Composite",
      "difficulty": "HOTS",
      "question": "Why is surface area not conserved in recasting?",
      "answer": "Surface area depends on shape.",
      "solution": "The same volume can have different exposed boundary areas."
    },
    {
      "topic": "Composite",
      "difficulty": "Challenge",
      "question": "A solid is a cylinder plus a sphere of the same radius. Write its volume symbolically.",
      "answer": "πr²h+(4/3)πr³.",
      "solution": "Add the component volumes."
    },
    {
      "topic": "Strategy",
      "difficulty": "Basic",
      "question": "If length scale is 3, area scale is?",
      "answer": "9.",
      "solution": "k²=9."
    },
    {
      "topic": "Strategy",
      "difficulty": "Understanding",
      "question": "If length scale is 3, volume scale is?",
      "answer": "27.",
      "solution": "k³=27."
    },
    {
      "topic": "Strategy",
      "difficulty": "Application",
      "question": "Compare cylinder and sphere volumes for same r when cylinder h=2r.",
      "answer": "Cylinder is 3/2 times sphere.",
      "solution": "Vc=2πr³; Vs=(4/3)πr³; ratio=3/2."
    },
    {
      "topic": "Strategy",
      "difficulty": "HOTS",
      "question": "Which formula should be used for an open-top cylinder?",
      "answer": "CSA plus one base.",
      "solution": "The top base is missing, so closed-cylinder TSA overcounts."
    },
    {
      "topic": "Strategy",
      "difficulty": "Challenge",
      "question": "A student counts an internal circular interface in composite TSA. Why is that wrong?",
      "answer": "It is not exposed.",
      "solution": "Surface area means boundary exposed to the outside unless the problem explicitly asks for internal contact area."
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
        "What unit measures volume?",
        "Find volume of 8×5×3 cm cuboid.",
        "Find CSA for r=7,h=10 using π=22/7.",
        "Find l for r=9,h=12.",
        "Find sphere surface area for r=3.",
        "Find volume of cylinder r=3,h=10.",
        "If length scale is 3, area scale is?"
      ]
    },
    {
      "title": "Understanding Practice",
      "questions": [
        "Why is surface area not measured in cm³?",
        "State cuboid TSA.",
        "What surfaces are excluded from CSA?",
        "Which height belongs in cone volume?",
        "What is hemisphere TSA?",
        "What is conserved in lossless melting and recasting?",
        "If length scale is 3, volume scale is?"
      ]
    },
    {
      "title": "Application Practice",
      "questions": [
        "Find cube TSA for a=5 cm.",
        "A cuboid has V=360,l=10,b=6. Find h.",
        "Find volume for r=3.5,h=8 using π=22/7.",
        "Find CSA for r=5,l=13.",
        "Find volume of sphere r=3.",
        "A cube of side 6 cm is recast into a cuboid l=12,b=6. Find h.",
        "Compare cylinder and sphere volumes for same r when cylinder h=2r."
      ]
    },
    {
      "title": "HOTS Practice",
      "questions": [
        "If every length doubles, how do area and volume change?",
        "If l,b,h are all doubled, what happens to TSA and volume?",
        "An open-top cylinder has what surface area?",
        "Why is cone CSA not πrh?",
        "Why is hemisphere volume half the sphere volume?",
        "Why is surface area not conserved in recasting?",
        "Which formula should be used for an open-top cylinder?"
      ]
    },
    {
      "title": "Challenge Practice",
      "questions": [
        "Why does a net help with surface area but not directly with volume?",
        "Two cuboids have the same volume. Must their TSA be equal?",
        "If radius doubles while height stays fixed, what happens to volume?",
        "If r=3,h=4, compare CSA and volume numerically with π left symbolic.",
        "A hemisphere is attached to a cylinder along the circular face. Should that joined face be counted in exposed surface area?",
        "A solid is a cylinder plus a sphere of the same radius. Write its volume symbolically.",
        "A student counts an internal circular interface in composite TSA. Why is that wrong?"
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
      "question": "Cube volume formula?",
      "options": [
        "a³.",
        "a²",
        "2πr",
        "Cannot be determined"
      ],
      "answer": "a³."
    },
    {
      "question": "Cone CSA?",
      "options": [
        "πrl.",
        "a²",
        "2πr",
        "Cannot be determined"
      ],
      "answer": "πrl."
    },
    {
      "question": "Sphere volume?",
      "options": [
        "(4/3)πr³.",
        "a²",
        "2πr",
        "Cannot be determined"
      ],
      "answer": "(4/3)πr³."
    },
    {
      "question": "Hemisphere TSA?",
      "options": [
        "3πr².",
        "a²",
        "2πr",
        "Cannot be determined"
      ],
      "answer": "3πr²."
    },
    {
      "question": "If all dimensions triple, volume changes by?",
      "options": [
        "27 times.",
        "a²",
        "2πr",
        "Cannot be determined"
      ],
      "answer": "27 times."
    }
  ],
  "examZone": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "commonMistakes": [
    "Write the solid and target measure.",
    "Convert units first.",
    "For cone keep l and h distinct.",
    "For composite TSA count exposed surfaces only.",
    "Recasting preserves volume, not generally surface area."
  ],
  "masterRevision": [
    "Surface Areas and Volumes: definitions → conditions → concepts → worked examples → guided practice → mixed HOTS → revision → final test."
  ],
  "detailedSummary": [
    "A highly detailed Class 9 Surface Areas and Volumes chapter covering surface-area language, nets, cube, cuboid, cylinder, cone, sphere, hemisphere, unit conversion, composite solids, recasting, scaling, exposed surfaces, errors and HOTS.",
    "The chapter should be revised by explaining each definition aloud, deriving or justifying each major formula, solving examples without looking at the solution, and checking the final result."
  ],
  "finalChapterTest": [
    {
      "topic": "Strategy",
      "difficulty": "Understanding",
      "question": "If length scale is 3, volume scale is?",
      "answer": "27.",
      "solution": "k³=27."
    },
    {
      "topic": "Strategy",
      "difficulty": "Application",
      "question": "Compare cylinder and sphere volumes for same r when cylinder h=2r.",
      "answer": "Cylinder is 3/2 times sphere.",
      "solution": "Vc=2πr³; Vs=(4/3)πr³; ratio=3/2."
    },
    {
      "topic": "Strategy",
      "difficulty": "HOTS",
      "question": "Which formula should be used for an open-top cylinder?",
      "answer": "CSA plus one base.",
      "solution": "The top base is missing, so closed-cylinder TSA overcounts."
    },
    {
      "topic": "Strategy",
      "difficulty": "Challenge",
      "question": "A student counts an internal circular interface in composite TSA. Why is that wrong?",
      "answer": "It is not exposed.",
      "solution": "Surface area means boundary exposed to the outside unless the problem explicitly asks for internal contact area."
    }
  ],
  "importantPoints": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "keyTerms": [
    "Surface area",
    "Volume",
    "Curved surface area",
    "Total surface area",
    "Slant height",
    "Composite solid"
  ],
  "chapterSummary": "A highly detailed Class 9 Surface Areas and Volumes chapter covering surface-area language, nets, cube, cuboid, cylinder, cone, sphere, hemisphere, unit conversion, composite solids, recasting, scaling, exposed surfaces, errors and HOTS.",
  "sections": [
    {
      "id": "surface-volume-language",
      "title": "Surface Area vs Volume and Unit Sense",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Surface area measures exposed two-dimensional boundary of a solid; volume measures the three-dimensional space occupied. Surface area uses square units and volume uses cubic units. A net unfolds a solid into plane figures and helps derive total surface area. Before calculating, identify exactly which surfaces are exposed."
        },
        {
          "type": "example",
          "title": "Cube",
          "color": "orange",
          "text": "Side a: six square faces give TSA=6a²; volume=a³."
        },
        {
          "type": "example",
          "title": "Cuboid",
          "color": "orange",
          "text": "Length l, breadth b, height h: TSA=2(lb+bh+hl), LSA=2h(l+b), V=lbh."
        },
        {
          "type": "example",
          "title": "Unit warning",
          "color": "orange",
          "text": "1 m=100 cm, but 1 m²=10,000 cm² and 1 m³=1,000,000 cm³."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Surface Area vs Volume and Unit Sense",
          "color": "purple",
          "questions": [
            {
              "topic": "Language",
              "difficulty": "Basic",
              "question": "What unit measures volume?",
              "answer": "Cubic units such as cm³.",
              "solution": "Volume has three dimensions."
            },
            {
              "topic": "Language",
              "difficulty": "Understanding",
              "question": "Why is surface area not measured in cm³?",
              "answer": "It is two-dimensional.",
              "solution": "Area of exposed surfaces uses two length dimensions."
            },
            {
              "topic": "Language",
              "difficulty": "Application",
              "question": "Find cube TSA for a=5 cm.",
              "answer": "150 cm².",
              "solution": "6×5²=150."
            },
            {
              "topic": "Language",
              "difficulty": "HOTS",
              "question": "If every length doubles, how do area and volume change?",
              "answer": "Area×4 and volume×8.",
              "solution": "Area scales as k² and volume as k³."
            },
            {
              "topic": "Language",
              "difficulty": "Challenge",
              "question": "Why does a net help with surface area but not directly with volume?",
              "answer": "A net represents exposed faces; volume needs three-dimensional filling/space.",
              "solution": "Unfolding preserves face areas but removes the solid’s 3-D arrangement."
            }
          ]
        }
      ]
    },
    {
      "id": "cube-cuboid",
      "title": "Cube and Cuboid Formulas and Applications",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A cuboid has three pairs of equal rectangular faces: lb, bh and hl. Therefore TSA=2lb+2bh+2hl=2(lb+bh+hl). The lateral surface area counts the four side faces, giving 2h(l+b). Volume is lbh. A cube is obtained by setting l=b=h=a."
        },
        {
          "type": "example",
          "title": "Missing dimension",
          "color": "orange",
          "text": "If V=360 cm³, l=10 cm and b=6 cm, h=360/(10×6)=6 cm."
        },
        {
          "type": "example",
          "title": "Paint question",
          "color": "orange",
          "text": "If all six faces are painted, use TSA. If only the four lateral faces are painted, use LSA."
        },
        {
          "type": "example",
          "title": "Edge scaling",
          "color": "orange",
          "text": "If cube edge changes from a to 3a, TSA becomes 9 times and volume 27 times."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Cube and Cuboid Formulas and Applications",
          "color": "purple",
          "questions": [
            {
              "topic": "Cuboid",
              "difficulty": "Basic",
              "question": "Find volume of 8×5×3 cm cuboid.",
              "answer": "120 cm³.",
              "solution": "8×5×3=120."
            },
            {
              "topic": "Cuboid",
              "difficulty": "Understanding",
              "question": "State cuboid TSA.",
              "answer": "2(lb+bh+hl).",
              "solution": "Add the areas of the three pairs of opposite faces."
            },
            {
              "topic": "Cuboid",
              "difficulty": "Application",
              "question": "A cuboid has V=360,l=10,b=6. Find h.",
              "answer": "6 cm.",
              "solution": "h=360/(10×6)=6."
            },
            {
              "topic": "Cuboid",
              "difficulty": "HOTS",
              "question": "If l,b,h are all doubled, what happens to TSA and volume?",
              "answer": "TSA×4, volume×8.",
              "solution": "Area scales with square and volume with cube."
            },
            {
              "topic": "Cuboid",
              "difficulty": "Challenge",
              "question": "Two cuboids have the same volume. Must their TSA be equal?",
              "answer": "No.",
              "solution": "Different shapes with equal volume can have different exposed surface areas."
            }
          ]
        }
      ]
    },
    {
      "id": "cylinder",
      "title": "Cylinder: Curved Surface, Total Surface and Volume",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A cylinder has two circular bases of radius r and height h. Its curved surface unwraps to a rectangle of length 2πr and width h, so CSA=2πrh. Adding two bases gives TSA=2πrh+2πr²=2πr(h+r). Volume is base area×height=πr²h."
        },
        {
          "type": "example",
          "title": "CSA",
          "color": "orange",
          "text": "For r=7,h=10 and π=22/7, CSA=440 cm²."
        },
        {
          "type": "example",
          "title": "TSA",
          "color": "orange",
          "text": "The same cylinder has TSA=440+2×22/7×49=748 cm²."
        },
        {
          "type": "example",
          "title": "Volume",
          "color": "orange",
          "text": "V=22/7×49×10=1540 cm³."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Cylinder: Curved Surface, Total Surface and Volume",
          "color": "purple",
          "questions": [
            {
              "topic": "Cylinder",
              "difficulty": "Basic",
              "question": "Find CSA for r=7,h=10 using π=22/7.",
              "answer": "440 cm².",
              "solution": "2πrh=440."
            },
            {
              "topic": "Cylinder",
              "difficulty": "Understanding",
              "question": "What surfaces are excluded from CSA?",
              "answer": "Both circular bases.",
              "solution": "CSA is only the curved side."
            },
            {
              "topic": "Cylinder",
              "difficulty": "Application",
              "question": "Find volume for r=3.5,h=8 using π=22/7.",
              "answer": "308 cm³.",
              "solution": "πr²h=22/7×12.25×8=308."
            },
            {
              "topic": "Cylinder",
              "difficulty": "HOTS",
              "question": "An open-top cylinder has what surface area?",
              "answer": "2πrh+πr².",
              "solution": "Curved surface plus one circular base."
            },
            {
              "topic": "Cylinder",
              "difficulty": "Challenge",
              "question": "If radius doubles while height stays fixed, what happens to volume?",
              "answer": "It becomes four times.",
              "solution": "V=πr²h, so V scales as r²."
            }
          ]
        }
      ]
    },
    {
      "id": "cone",
      "title": "Cone: Slant Height, Surface Area and Volume",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A right circular cone has radius r, vertical height h and slant height l. The radius, height and slant height form a right triangle, so l²=r²+h². Curved surface area is πrl because the sector that forms the curved surface has arc length equal to the base circumference. Total surface area is πrl+πr²=πr(l+r). Volume is one-third of the corresponding cylinder: V=(1/3)πr²h. The slant height is not interchangeable with vertical height."
        },
        {
          "type": "example",
          "title": "Slant height",
          "color": "orange",
          "text": "For r=6,h=8, l=√(36+64)=10 cm."
        },
        {
          "type": "example",
          "title": "Cone CSA",
          "color": "orange",
          "text": "With r=6,l=10, CSA=60π cm²."
        },
        {
          "type": "example",
          "title": "Cone volume",
          "color": "orange",
          "text": "Using h=8, V=(1/3)π×36×8=96π cm³."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Cone: Slant Height, Surface Area and Volume",
          "color": "purple",
          "questions": [
            {
              "topic": "Cone",
              "difficulty": "Basic",
              "question": "Find l for r=9,h=12.",
              "answer": "15 cm.",
              "solution": "l=√(81+144)=15."
            },
            {
              "topic": "Cone",
              "difficulty": "Understanding",
              "question": "Which height belongs in cone volume?",
              "answer": "Vertical/perpendicular height h.",
              "solution": "Volume uses base area×perpendicular height."
            },
            {
              "topic": "Cone",
              "difficulty": "Application",
              "question": "Find CSA for r=5,l=13.",
              "answer": "65π cm².",
              "solution": "πrl=π×5×13=65π."
            },
            {
              "topic": "Cone",
              "difficulty": "HOTS",
              "question": "Why is cone CSA not πrh?",
              "answer": "The curved surface follows slant length.",
              "solution": "The sloping edge is l, while h is perpendicular height."
            },
            {
              "topic": "Cone",
              "difficulty": "Challenge",
              "question": "If r=3,h=4, compare CSA and volume numerically with π left symbolic.",
              "answer": "CSA=15π cm² and V=12π cm³.",
              "solution": "l=5; CSA=π×3×5=15π; V=(1/3)π×9×4=12π."
            }
          ]
        }
      ]
    },
    {
      "id": "sphere-hemisphere",
      "title": "Sphere and Hemisphere",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "A sphere of radius r has surface area 4πr² and volume (4/3)πr³. A hemisphere is half a sphere. Its curved surface area is 2πr²; its total surface area includes the flat circular base and is 3πr²; its volume is (2/3)πr³. The distinction between CSA and TSA is especially important for a hemisphere."
        },
        {
          "type": "example",
          "title": "Sphere",
          "color": "orange",
          "text": "For r=3, surface area=36π cm² and volume=36π cm³."
        },
        {
          "type": "example",
          "title": "Hemisphere",
          "color": "orange",
          "text": "For r=7, CSA=98π cm² and TSA=147π cm²."
        },
        {
          "type": "example",
          "title": "Base warning",
          "color": "orange",
          "text": "If a hemisphere is joined to another solid along its circular face, that circular face may become internal and should not be counted as exposed surface."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Sphere and Hemisphere",
          "color": "purple",
          "questions": [
            {
              "topic": "Sphere",
              "difficulty": "Basic",
              "question": "Find sphere surface area for r=3.",
              "answer": "36π cm².",
              "solution": "4πr²=4π×9=36π."
            },
            {
              "topic": "Sphere",
              "difficulty": "Understanding",
              "question": "What is hemisphere TSA?",
              "answer": "3πr².",
              "solution": "2πr² curved plus πr² circular base."
            },
            {
              "topic": "Sphere",
              "difficulty": "Application",
              "question": "Find volume of sphere r=3.",
              "answer": "36π cm³.",
              "solution": "(4/3)π×27=36π."
            },
            {
              "topic": "Sphere",
              "difficulty": "HOTS",
              "question": "Why is hemisphere volume half the sphere volume?",
              "answer": "A hemisphere is exactly half the sphere by volume.",
              "solution": "(1/2)×(4/3)πr³=(2/3)πr³."
            },
            {
              "topic": "Sphere",
              "difficulty": "Challenge",
              "question": "A hemisphere is attached to a cylinder along the circular face. Should that joined face be counted in exposed surface area?",
              "answer": "No.",
              "solution": "The interface is internal, not exposed."
            }
          ]
        }
      ]
    },
    {
      "id": "composite-units",
      "title": "Composite Solids, Unit Conversion and Recasting",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "For composite solids, split the object into standard solids. Volume is usually added or subtracted directly. Surface area requires more care: count only exposed surfaces and do not count internal joined faces. In melting and recasting without material loss, volume is conserved even though surface area can change. Unit conversion must be performed before applying formulas."
        },
        {
          "type": "example",
          "title": "Composite volume",
          "color": "orange",
          "text": "Cylinder r=3,h=10 plus hemisphere r=3: 90π+18π=108π cm³."
        },
        {
          "type": "example",
          "title": "Recasting",
          "color": "orange",
          "text": "A cube of volume 1000 cm³ becomes a cuboid with l=20,b=10; h=1000/200=5 cm."
        },
        {
          "type": "example",
          "title": "Volume conversion",
          "color": "orange",
          "text": "2.5 m³=2.5×10⁶ cm³."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Composite Solids, Unit Conversion and Recasting",
          "color": "purple",
          "questions": [
            {
              "topic": "Composite",
              "difficulty": "Basic",
              "question": "Find volume of cylinder r=3,h=10.",
              "answer": "90π cm³.",
              "solution": "πr²h=π×9×10=90π."
            },
            {
              "topic": "Composite",
              "difficulty": "Understanding",
              "question": "What is conserved in lossless melting and recasting?",
              "answer": "Volume.",
              "solution": "The quantity of material is unchanged."
            },
            {
              "topic": "Composite",
              "difficulty": "Application",
              "question": "A cube of side 6 cm is recast into a cuboid l=12,b=6. Find h.",
              "answer": "3 cm.",
              "solution": "Cube volume=216; h=216/(12×6)=3."
            },
            {
              "topic": "Composite",
              "difficulty": "HOTS",
              "question": "Why is surface area not conserved in recasting?",
              "answer": "Surface area depends on shape.",
              "solution": "The same volume can have different exposed boundary areas."
            },
            {
              "topic": "Composite",
              "difficulty": "Challenge",
              "question": "A solid is a cylinder plus a sphere of the same radius. Write its volume symbolically.",
              "answer": "πr²h+(4/3)πr³.",
              "solution": "Add the component volumes."
            }
          ]
        }
      ]
    },
    {
      "id": "scaling-exam",
      "title": "Scaling, Comparison, Nets and Exam Strategy",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "If every length is multiplied by k, every surface area is multiplied by k² and every volume by k³. This is a powerful shortcut for comparison problems. A net can derive surface area, while composite-solid questions require careful boundary accounting. In exams, write the required measure first, identify the correct formula, substitute consistent units, simplify, and check the dimension of the answer."
        },
        {
          "type": "example",
          "title": "Scale example",
          "color": "orange",
          "text": "If a sphere radius changes from r to 2r, surface area becomes 4 times and volume 8 times."
        },
        {
          "type": "example",
          "title": "Open vs closed",
          "color": "orange",
          "text": "Closed cylinder TSA=2πr(h+r); open-top cylinder=2πrh+πr²."
        },
        {
          "type": "example",
          "title": "Error check",
          "color": "orange",
          "text": "If a calculated volume is negative or an area has cubic units, revisit the formula and units."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Scaling, Comparison, Nets and Exam Strategy",
          "color": "purple",
          "questions": [
            {
              "topic": "Strategy",
              "difficulty": "Basic",
              "question": "If length scale is 3, area scale is?",
              "answer": "9.",
              "solution": "k²=9."
            },
            {
              "topic": "Strategy",
              "difficulty": "Understanding",
              "question": "If length scale is 3, volume scale is?",
              "answer": "27.",
              "solution": "k³=27."
            },
            {
              "topic": "Strategy",
              "difficulty": "Application",
              "question": "Compare cylinder and sphere volumes for same r when cylinder h=2r.",
              "answer": "Cylinder is 3/2 times sphere.",
              "solution": "Vc=2πr³; Vs=(4/3)πr³; ratio=3/2."
            },
            {
              "topic": "Strategy",
              "difficulty": "HOTS",
              "question": "Which formula should be used for an open-top cylinder?",
              "answer": "CSA plus one base.",
              "solution": "The top base is missing, so closed-cylinder TSA overcounts."
            },
            {
              "topic": "Strategy",
              "difficulty": "Challenge",
              "question": "A student counts an internal circular interface in composite TSA. Why is that wrong?",
              "answer": "It is not exposed.",
              "solution": "Surface area means boundary exposed to the outside unless the problem explicitly asks for internal contact area."
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
  }
};

