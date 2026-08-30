/* ConceptQizzer — topic-placed accurate SVG figures */
"use strict";
window.ChapterData = {
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
  "figureBank": [
    {
      "title": "Cuboid",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 350\" role=\"img\" aria-label=\"Cuboid\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cuboid</text><polygon points=\"180,100 480,100 570,155 270,155\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"180,100 180,240 270,295 270,155\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"270,155 570,155 570,295 270,295\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"375\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">length = l, breadth = b, height = h</text><text x=\"585\" y=\"225\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">h</text><text x=\"375\" y=\"145\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">l</text><text x=\"225\" y=\"125\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Cube",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 350\" role=\"img\" aria-label=\"Cube\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cube</text><polygon points=\"210,105 470,105 545,150 285,150\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"210,105 210,245 285,290 285,150\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"285,150 545,150 545,290 285,290\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"350\" y=\"325\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">All 12 edges = a   |   TSA = 6a²   |   V = a³</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Cylinder",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 340\" role=\"img\" aria-label=\"Cylinder\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cylinder</text><ellipse cx=\"350\" cy=\"90\" rx=\"105\" ry=\"28\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"245\" y1=\"90\" x2=\"245\" y2=\"245\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"455\" y1=\"90\" x2=\"455\" y2=\"245\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"350\" cy=\"245\" rx=\"105\" ry=\"28\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><text x=\"470\" y=\"170\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">h</text><text x=\"350\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">radius = r</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">CSA = 2πrh   |   TSA = 2πr(h+r)   |   V = πr²h</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Cone",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 350\" role=\"img\" aria-label=\"Cone\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cone</text><line x1=\"350\" y1=\"70\" x2=\"220\" y2=\"255\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"70\" x2=\"480\" y2=\"255\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"350\" cy=\"255\" rx=\"130\" ry=\"30\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"350\" y1=\"70\" x2=\"350\" y2=\"255\" stroke=\"#172033\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"8 6\"/><text x=\"360\" y=\"165\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"start\" fill=\"#172033\">h</text><text x=\"405\" y=\"155\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"start\" fill=\"#172033\">l</text><text x=\"350\" y=\"300\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">l² = r² + h²</text><text x=\"350\" y=\"325\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">V = (1/3)πr²h</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Sphere",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Sphere\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Sphere</text><circle cx=\"350\" cy=\"175\" r=\"110\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"240\" y1=\"175\" x2=\"460\" y2=\"175\" stroke=\"#172033\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"8 6\"/><circle cx=\"350\" cy=\"175\" r=\"5\" fill=\"#172033\"/><text x=\"350\" y=\"165\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">O</text><text x=\"400\" y=\"165\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">r</text><text x=\"350\" y=\"310\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">SA = 4πr²   |   V = (4/3)πr³</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    },
    {
      "title": "Hemisphere",
      "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 340\" role=\"img\" aria-label=\"Hemisphere\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hemisphere</text><path d=\"M220 180 Q350 90 480 180\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><path d=\"M220 180 A130 55 0 0 0 480 180\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"220\" y1=\"180\" x2=\"480\" y2=\"180\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"305\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">CSA = 2πr²   |   TSA = 3πr²   |   V = (2/3)πr³</text></svg>",
      "accuracy": "Accurate SVG mathematical figure; labels and stated relationships are intentional."
    }
  ],
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
          "type": "figure",
          "title": "📐 Cube",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 350\" role=\"img\" aria-label=\"Cube\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cube</text><polygon points=\"210,105 470,105 545,150 285,150\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"210,105 210,245 285,290 285,150\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"285,150 545,150 545,290 285,290\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"350\" y=\"325\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">All 12 edges = a   |   TSA = 6a²   |   V = a³</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "figure",
          "title": "📐 Cuboid",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 350\" role=\"img\" aria-label=\"Cuboid\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cuboid</text><polygon points=\"180,100 480,100 570,155 270,155\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"180,100 180,240 270,295 270,155\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><polygon points=\"270,155 570,155 570,295 270,295\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\" stroke-linejoin=\"round\"/><text x=\"375\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">length = l, breadth = b, height = h</text><text x=\"585\" y=\"225\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">h</text><text x=\"375\" y=\"145\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">l</text><text x=\"225\" y=\"125\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">b</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
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
          "type": "figure",
          "title": "📐 Cylinder",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 340\" role=\"img\" aria-label=\"Cylinder\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cylinder</text><ellipse cx=\"350\" cy=\"90\" rx=\"105\" ry=\"28\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"245\" y1=\"90\" x2=\"245\" y2=\"245\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"455\" y1=\"90\" x2=\"455\" y2=\"245\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"350\" cy=\"245\" rx=\"105\" ry=\"28\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><text x=\"470\" y=\"170\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">h</text><text x=\"350\" y=\"275\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">radius = r</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">CSA = 2πrh   |   TSA = 2πr(h+r)   |   V = πr²h</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "figure",
          "title": "📐 Cylinder net",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 340\" role=\"img\" aria-label=\"Cylinder net\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Net of a cylinder</text><rect x=\"180\" y=\"100\" width=\"340\" height=\"110\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><circle cx=\"180\" cy=\"155\" r=\"55\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><circle cx=\"520\" cy=\"155\" r=\"55\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><text x=\"350\" y=\"160\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">rectangle: 2πr × h</text><text x=\"350\" y=\"260\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">plus two circular bases: πr² each</text><text x=\"350\" y=\"305\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Total surface area = 2πrh + 2πr²</text></svg>",
          "caption": "Accurate mathematical figure with explicit labels; geometry is schematic for learning, not a scale measurement."
        },
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
          "type": "figure",
          "title": "📐 Cone",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 350\" role=\"img\" aria-label=\"Cone\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Cone</text><line x1=\"350\" y1=\"70\" x2=\"220\" y2=\"255\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"70\" x2=\"480\" y2=\"255\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"350\" cy=\"255\" rx=\"130\" ry=\"30\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"350\" y1=\"70\" x2=\"350\" y2=\"255\" stroke=\"#172033\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"8 6\"/><text x=\"360\" y=\"165\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"start\" fill=\"#172033\">h</text><text x=\"405\" y=\"155\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"start\" fill=\"#172033\">l</text><text x=\"350\" y=\"300\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">l² = r² + h²</text><text x=\"350\" y=\"325\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">V = (1/3)πr²h</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "figure",
          "title": "📐 Cone net",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 350\" role=\"img\" aria-label=\"Cone net\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Net of a cone</text><path d=\"M350 70 L210 250 A160 160 0 0 0 490 250 Z\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><circle cx=\"350\" cy=\"250\" r=\"70\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><text x=\"350\" y=\"285\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">sector of radius l + circular base of radius r</text><text x=\"350\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"19\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Curved surface area = πrl</text></svg>",
          "caption": "Accurate mathematical figure with explicit labels; geometry is schematic for learning, not a scale measurement."
        },
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
          "type": "figure",
          "title": "📐 Hemisphere",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 340\" role=\"img\" aria-label=\"Hemisphere\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hemisphere</text><path d=\"M220 180 Q350 90 480 180\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><path d=\"M220 180 A130 55 0 0 0 480 180\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"220\" y1=\"180\" x2=\"480\" y2=\"180\" stroke=\"#172033\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"350\" y=\"305\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">CSA = 2πr²   |   TSA = 3πr²   |   V = (2/3)πr³</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
        {
          "type": "figure",
          "title": "📐 Sphere",
          "color": "blue",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 330\" role=\"img\" aria-label=\"Sphere\" style=\"width:100%;height:auto;display:block;background:#fff;border-radius:16px\"><text x=\"350\" y=\"30\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Sphere</text><circle cx=\"350\" cy=\"175\" r=\"110\" fill=\"none\" stroke=\"#172033\" stroke-width=\"4\"/><line x1=\"240\" y1=\"175\" x2=\"460\" y2=\"175\" stroke=\"#172033\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"8 6\"/><circle cx=\"350\" cy=\"175\" r=\"5\" fill=\"#172033\"/><text x=\"350\" y=\"165\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">O</text><text x=\"400\" y=\"165\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"18\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">r</text><text x=\"350\" y=\"310\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"20\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">SA = 4πr²   |   V = (4/3)πr³</text></svg>",
          "caption": "Accurate mathematical figure. Labels and geometric relationships are intentional; use the stated labels and conditions rather than visual appearance alone."
        },
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
  },
  "deepExpansion5X": [
    {
      "id": "chapter-11-deep-expansion-5x",
      "title": "5× Minimum Detailed Expansion — Same Format as Chapters 5–8",
      "blocks": [
        {
          "type": "concept",
          "title": "1. 3D solids and dimensions — Deep Concept",
          "color": "blue",
          "text": "Surface area measures the total area of the exposed surfaces of a solid and is expressed in square units. Volume measures the space occupied and is expressed in cubic units. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "1. 3D solids and dimensions — Solved Method",
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
          "title": "Practice — 3D solids and dimensions",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to 3D solids and dimensions.",
              "answer": "State the standard Class 9 result for 3D solids and dimensions.",
              "solution": "Surface area measures the total area of the exposed surfaces of a solid and is expressed in square units. Volume measures the space occupied and is expressed in cubic units."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in 3D solids and dimensions important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on 3D solids and dimensions.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about 3D solids and dimensions.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving 3D solids and dimensions.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "2. Cuboid — Deep Concept",
          "color": "blue",
          "text": "A cuboid has length l, breadth b and height h. Its volume is lbh and its total surface area is 2(lb+bh+hl). Its lateral surface area is 2h(l+b) when the four vertical faces are considered. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "2. Cuboid — Solved Method",
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
          "title": "Practice — Cuboid",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Cuboid.",
              "answer": "State the standard Class 9 result for Cuboid.",
              "solution": "A cuboid has length l, breadth b and height h. Its volume is lbh and its total surface area is 2(lb+bh+hl). Its lateral surface area is 2h(l+b) when the four vertical faces are considered."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Cuboid important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Cuboid.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Cuboid.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Cuboid.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "3. Cube — Deep Concept",
          "color": "blue",
          "text": "A cube has six congruent square faces and all edges equal to a. Its total surface area is 6a², lateral surface area is 4a² and volume is a³. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "3. Cube — Solved Method",
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
          "title": "Practice — Cube",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Cube.",
              "answer": "State the standard Class 9 result for Cube.",
              "solution": "A cube has six congruent square faces and all edges equal to a. Its total surface area is 6a², lateral surface area is 4a² and volume is a³."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Cube important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Cube.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Cube.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Cube.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "4. Cylinder — Deep Concept",
          "color": "blue",
          "text": "A cylinder has two congruent circular bases of radius r and height h. Curved surface area is 2πrh, total surface area is 2πr(h+r), and volume is πr²h. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "4. Cylinder — Solved Method",
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
          "title": "Practice — Cylinder",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Cylinder.",
              "answer": "State the standard Class 9 result for Cylinder.",
              "solution": "A cylinder has two congruent circular bases of radius r and height h. Curved surface area is 2πrh, total surface area is 2πr(h+r), and volume is πr²h."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Cylinder important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Cylinder.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Cylinder.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Cylinder.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "5. Cone — Deep Concept",
          "color": "blue",
          "text": "A cone has a circular base of radius r, height h and slant height l. Curved surface area is πrl, total surface area is πr(l+r), and volume is (1/3)πr²h. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "5. Cone — Solved Method",
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
          "title": "Practice — Cone",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Cone.",
              "answer": "State the standard Class 9 result for Cone.",
              "solution": "A cone has a circular base of radius r, height h and slant height l. Curved surface area is πrl, total surface area is πr(l+r), and volume is (1/3)πr²h."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Cone important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Cone.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Cone.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Cone.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "6. Slant height of cone — Deep Concept",
          "color": "blue",
          "text": "For a right circular cone, r, h and l form a right triangle, so l²=r²+h². Never substitute h for l in the curved-surface-area formula. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "6. Slant height of cone — Solved Method",
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
          "title": "Practice — Slant height of cone",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Slant height of cone.",
              "answer": "State the standard Class 9 result for Slant height of cone.",
              "solution": "For a right circular cone, r, h and l form a right triangle, so l²=r²+h². Never substitute h for l in the curved-surface-area formula."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Slant height of cone important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Slant height of cone.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Slant height of cone.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Slant height of cone.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "7. Sphere — Deep Concept",
          "color": "blue",
          "text": "A sphere of radius r has surface area 4πr² and volume (4/3)πr³. A sphere has no separate curved and plane faces. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "7. Sphere — Solved Method",
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
          "title": "Practice — Sphere",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Sphere.",
              "answer": "State the standard Class 9 result for Sphere.",
              "solution": "A sphere of radius r has surface area 4πr² and volume (4/3)πr³. A sphere has no separate curved and plane faces."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Sphere important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Sphere.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Sphere.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Sphere.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "8. Hemisphere — Deep Concept",
          "color": "blue",
          "text": "A hemisphere is half a sphere. Its curved surface area is 2πr² and its total surface area including the circular base is 3πr². The correct formula depends on whether the base is exposed. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "8. Hemisphere — Solved Method",
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
          "title": "Practice — Hemisphere",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Hemisphere.",
              "answer": "State the standard Class 9 result for Hemisphere.",
              "solution": "A hemisphere is half a sphere. Its curved surface area is 2πr² and its total surface area including the circular base is 3πr². The correct formula depends on whether the base is exposed."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Hemisphere important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Hemisphere.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Hemisphere.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Hemisphere.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "9. Open and closed solids — Deep Concept",
          "color": "blue",
          "text": "A container may be open at one end, so the base or top should not automatically be included in total surface area. Read the wording and identify which surfaces are exposed. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "9. Open and closed solids — Solved Method",
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
          "title": "Practice — Open and closed solids",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Open and closed solids.",
              "answer": "State the standard Class 9 result for Open and closed solids.",
              "solution": "A container may be open at one end, so the base or top should not automatically be included in total surface area. Read the wording and identify which surfaces are exposed."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Open and closed solids important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Open and closed solids.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Open and closed solids.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Open and closed solids.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "10. Combination of solids — Deep Concept",
          "color": "blue",
          "text": "For a composite solid, calculate only the external surfaces unless the question explicitly asks for internal/contact surfaces. Shared surfaces between joined solids are usually not exposed. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "10. Combination of solids — Solved Method",
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
          "title": "Practice — Combination of solids",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Combination of solids.",
              "answer": "State the standard Class 9 result for Combination of solids.",
              "solution": "For a composite solid, calculate only the external surfaces unless the question explicitly asks for internal/contact surfaces. Shared surfaces between joined solids are usually not exposed."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Combination of solids important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Combination of solids.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Combination of solids.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Combination of solids.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "11. Volume conservation — Deep Concept",
          "color": "blue",
          "text": "When a solid is melted and recast without loss, volume remains constant. This principle links old and new dimensions and is a common application problem. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "11. Volume conservation — Solved Method",
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
          "title": "Practice — Volume conservation",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Volume conservation.",
              "answer": "State the standard Class 9 result for Volume conservation.",
              "solution": "When a solid is melted and recast without loss, volume remains constant. This principle links old and new dimensions and is a common application problem."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Volume conservation important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Volume conservation.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Volume conservation.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Volume conservation.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "12. Unit conversion — Deep Concept",
          "color": "blue",
          "text": "For length, 1 m=100 cm; for area, 1 m²=10,000 cm²; for volume, 1 m³=1,000,000 cm³. The power changes with the dimension. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "12. Unit conversion — Solved Method",
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
          "title": "Practice — Unit conversion",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Unit conversion.",
              "answer": "State the standard Class 9 result for Unit conversion.",
              "solution": "For length, 1 m=100 cm; for area, 1 m²=10,000 cm²; for volume, 1 m³=1,000,000 cm³. The power changes with the dimension."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Unit conversion important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Unit conversion.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Unit conversion.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Unit conversion.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "13. Choosing π — Deep Concept",
          "color": "blue",
          "text": "Use the value of π specified by the question, commonly 22/7 or 3.14 in school problems. If no value is specified, use the convention appropriate to the calculation. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "13. Choosing π — Solved Method",
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
          "title": "Practice — Choosing π",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Choosing π.",
              "answer": "State the standard Class 9 result for Choosing π.",
              "solution": "Use the value of π specified by the question, commonly 22/7 or 3.14 in school problems. If no value is specified, use the convention appropriate to the calculation."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Choosing π important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Choosing π.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Choosing π.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Choosing π.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "14. Surface area versus volume — Deep Concept",
          "color": "blue",
          "text": "Surface area answers how much material is needed to cover a solid; volume answers how much space it contains. Their dimensions and units are different. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "14. Surface area versus volume — Solved Method",
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
          "title": "Practice — Surface area versus volume",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Surface area versus volume.",
              "answer": "State the standard Class 9 result for Surface area versus volume.",
              "solution": "Surface area answers how much material is needed to cover a solid; volume answers how much space it contains. Their dimensions and units are different."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Surface area versus volume important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Surface area versus volume.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Surface area versus volume.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Surface area versus volume.",
              "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
              "solution": "The check should test the result independently rather than repeat the same arithmetic."
            }
          ]
        },
        {
          "type": "concept",
          "title": "15. Common mistakes — Deep Concept",
          "color": "blue",
          "text": "Frequent errors include using diameter as radius, confusing slant height with vertical height, adding hidden contact faces, using area units for volume, and forgetting an exposed base. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
        },
        {
          "type": "example",
          "title": "15. Common mistakes — Solved Method",
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
          "title": "Practice — Common mistakes",
          "color": "purple",
          "questions": [
            {
              "difficulty": "Basic",
              "question": "State the key definition/formula related to Common mistakes.",
              "answer": "State the standard Class 9 result for Common mistakes.",
              "solution": "Frequent errors include using diameter as radius, confusing slant height with vertical height, adding hidden contact faces, using area units for volume, and forgetting an exposed base."
            },
            {
              "difficulty": "Understanding",
              "question": "Why is the condition or distinction in Common mistakes important?",
              "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
              "solution": "Identify the hypothesis and compare it with the information in the problem."
            },
            {
              "difficulty": "Application",
              "question": "Write the correct step-by-step method for a numerical question on Common mistakes.",
              "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
              "solution": "Show the formula first and keep the working traceable."
            },
            {
              "difficulty": "HOTS",
              "question": "Give one common misconception about Common mistakes.",
              "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
              "solution": "Use definitions and the exact wording of the question to avoid the misconception."
            },
            {
              "difficulty": "Challenge",
              "question": "Give an independent way to verify a result involving Common mistakes.",
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
      "text": "Revision Lab 1 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 2 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 3 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 4 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 5 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 6 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 7 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 8 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 9 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 10 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 11 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 12 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 13 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 14 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 15 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 16 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 17 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 18 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 19 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 20 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 21 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 22 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 23 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 24 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 25 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 26 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 27 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 28 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 29 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 30 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 31 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 32 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 33 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 34 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 35 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 36 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 37 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 38 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 39 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 40 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 41 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 42 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 43 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 44 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
      "text": "Revision Lab 45 for Chapter 11: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    }
  ]
};
