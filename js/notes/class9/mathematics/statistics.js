/* ConceptQizzer — Class 9 Mathematics — corrected render-safe chapter file */
/* Loader fix: all chapter extensions are inside the object; no post-declaration ChapterData.* statements remain. */
"use strict";

const ChapterData = {
  "id": "9-mathematics-statistics",
  "title": "Statistics",
  "class": 9,
  "subject": "Mathematics",
  "chapter": 12,
  "file": "js/notes/class9/mathematics/statistics.js",
  "enabled": true,
  "description": "A highly detailed Class 9 Statistics chapter covering data language, frequency tables, mean, median, mode, range, comparison of measures, graphs, reverse reasoning, transformations, outliers, HOTS and exam strategy.",
  "learningObjectives": [
    "Understand statistical vocabulary.",
    "Build and check frequency tables.",
    "Calculate mean for raw and frequency data.",
    "Find median correctly for odd and even counts.",
    "Find mode and range.",
    "Compare measures and outlier effects.",
    "Interpret bar graphs and histograms.",
    "Solve reverse and transformation problems."
  ],
  "prerequisiteCheck": [
    "Arithmetic",
    "Fractions",
    "Ordering numbers",
    "Reading tables and scales"
  ],
  "conceptRoadmap": [
    "Using original order for median.",
    "Using Σx/n on frequency data without accounting for f.",
    "Forgetting to add frequencies.",
    "Confusing mode with median.",
    "Reading graph scale incorrectly.",
    "Leaving out units/context.",
    "Calling every graph a histogram."
  ],
  "comparisonTables": [],
  "theoremPropertyLab": [],
  "formulaPropertyBank": [
    "Mean=Σx/n",
    "Frequency mean=Σfx/Σf",
    "Odd median position=(n+1)/2",
    "Even median=average of n/2th and (n/2+1)th",
    "Range=max−min",
    "Class mark=(lower+upper)/2"
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
      "problem": "Order before median.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Σf is the count.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Mean lies between min and max.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Histogram bars touch for continuous adjacent intervals.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Adding k to every value adds k to mean and median.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    },
    {
      "problem": "Multiplying by k scales mean, median and range by k for positive k.",
      "answer": "The statement should be checked against the definition, condition or formula before accepting it."
    }
  ],
  "mathsChallenge": [
    {
      "question": "Why is statistical interpretation not only arithmetic?",
      "answer": "The context and method of data collection affect meaning."
    },
    {
      "question": "How can you detect an incorrect frequency table?",
      "answer": "Check Σf against the known number of observations and recount selected values."
    },
    {
      "question": "Every value is multiplied by 4 then increased by 3. Old mean=7. New mean?",
      "answer": "31."
    },
    {
      "question": "A student says the median of 8,1,6,3,9 is 6 because 6 is visually central. Is the reasoning valid?",
      "answer": "No; the data must be ordered first, though the final median happens to be 6."
    },
    {
      "question": "If every observation is multiplied by 3, what happens to range?",
      "answer": "It becomes three times."
    }
  ],
  "realLifeMathematics": [],
  "mathematicalActivityLab": [],
  "figureBank": [
  {
    "title": "Ordered data",
    "diagram": "Raw:     8,3,5,3,9,5,3\nOrdered: 3,3,3,5,5,8,9\nMedian = middle value = 3",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Frequency table",
    "diagram": "x: 2   3   4   5\nf: 1   4   2   3\nΣf=10, Σfx=37, mean=3.7",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Median position",
    "diagram": "1  2  3  [4]  5  6  7\n          ↑\n       median\nFor n=7, position=(n+1)/2=4.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Bar graph",
    "diagram": "frequency\n4 |   █\n3 |   █       █\n2 |   █   █   █\n1 | █ █   █   █\n  +----------------\n     A   B   C\nBars are separated.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Histogram",
    "diagram": "frequency\n4 |   █████\n3 |   █████ █████\n2 |   █████ █████ █████\n1 |   █████ █████ █████\n  +-----------------------\n    0–10 10–20 20–30\nClass intervals touch.",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  },
  {
    "title": "Mean / median / mode",
    "diagram": "MEAN   → uses every observation\nMEDIAN → middle position after ordering\nMODE   → highest frequency",
    "accuracy": "Correct labelled mathematical relationship; schematic, not to scale."
  }
],
  "visualLearning": [],
  "masterDefinitions": [
    {
      "term": "Data",
      "definition": "Recorded observations or measurements."
    },
    {
      "term": "Frequency",
      "definition": "Number of times a value occurs."
    },
    {
      "term": "Mean",
      "definition": "Sum of observations divided by their number; for frequency data, Σfx/Σf."
    },
    {
      "term": "Median",
      "definition": "Middle ordered value, or average of the two central values when the count is even."
    },
    {
      "term": "Mode",
      "definition": "Observation with highest frequency."
    },
    {
      "term": "Range",
      "definition": "Maximum value minus minimum value."
    },
    {
      "term": "Class interval",
      "definition": "An interval used to group continuous observations."
    },
    {
      "term": "Class mark",
      "definition": "Midpoint of a class interval."
    }
  ],
  "formulaRevisionSheet": [
    "Mean=Σx/n",
    "Frequency mean=Σfx/Σf",
    "Odd median position=(n+1)/2",
    "Even median=average of n/2th and (n/2+1)th",
    "Range=max−min",
    "Class mark=(lower+upper)/2"
  ],
  "questionBank": [
    {
      "topic": "Data",
      "difficulty": "Basic",
      "question": "Number of siblings is discrete or continuous?",
      "answer": "Discrete.",
      "solution": "It is counted in whole numbers."
    },
    {
      "topic": "Data",
      "difficulty": "Understanding",
      "question": "Height is usually discrete or continuous?",
      "answer": "Continuous.",
      "solution": "Height is measured and can take decimal values."
    },
    {
      "topic": "Data",
      "difficulty": "Application",
      "question": "Why should units be recorded with measurements?",
      "answer": "To give the data meaning and allow correct comparisons.",
      "solution": "A number without its unit may be ambiguous."
    },
    {
      "topic": "Data",
      "difficulty": "HOTS",
      "question": "Can two data sets have the same mean but very different spread?",
      "answer": "Yes.",
      "solution": "Mean describes central tendency, not the entire distribution."
    },
    {
      "topic": "Data",
      "difficulty": "Challenge",
      "question": "Why is statistical interpretation not only arithmetic?",
      "answer": "The context and method of data collection affect meaning.",
      "solution": "A calculation can be correct while an interpretation is inappropriate."
    },
    {
      "topic": "Frequency",
      "difficulty": "Basic",
      "question": "If frequencies are 3,5,2, find N.",
      "answer": "10.",
      "solution": "3+5+2=10."
    },
    {
      "topic": "Frequency",
      "difficulty": "Understanding",
      "question": "What does fx represent?",
      "answer": "The total contribution of value x occurring f times.",
      "solution": "It is x added f times."
    },
    {
      "topic": "Frequency",
      "difficulty": "Application",
      "question": "For x=2,4,6 and f=1,2,3, find Σfx.",
      "answer": "28.",
      "solution": "2+8+18=28."
    },
    {
      "topic": "Frequency",
      "difficulty": "HOTS",
      "question": "Why is Σf needed in a frequency-table mean?",
      "answer": "It is the actual number of observations.",
      "solution": "Mean is total of all observations divided by count."
    },
    {
      "topic": "Frequency",
      "difficulty": "Challenge",
      "question": "How can you detect an incorrect frequency table?",
      "answer": "Check Σf against the known number of observations and recount selected values.",
      "solution": "The total frequency must match the data count."
    },
    {
      "topic": "Mean",
      "difficulty": "Basic",
      "question": "Find mean of 5,7,9,11.",
      "answer": "8.",
      "solution": "32/4=8."
    },
    {
      "topic": "Mean",
      "difficulty": "Understanding",
      "question": "Find mean for x=3,5,7 and f=2,4,1.",
      "answer": "33/7≈4.714.",
      "solution": "Σf=7; Σfx=33; mean=33/7."
    },
    {
      "topic": "Mean",
      "difficulty": "Application",
      "question": "Six observations have mean 15. Find their total.",
      "answer": "90.",
      "solution": "Total=15×6=90."
    },
    {
      "topic": "Mean",
      "difficulty": "HOTS",
      "question": "A mean of 12 for 8 observations changes when 20 is replaced by 14. Find new mean.",
      "answer": "11.25.",
      "solution": "Old total=96; new total=96−20+14=90; mean=90/8=11.25."
    },
    {
      "topic": "Mean",
      "difficulty": "Challenge",
      "question": "Every value is multiplied by 4 then increased by 3. Old mean=7. New mean?",
      "answer": "31.",
      "solution": "Mean transforms the same way: 4×7+3=31."
    },
    {
      "topic": "Median",
      "difficulty": "Basic",
      "question": "Find median of 7,2,9,4,5.",
      "answer": "5.",
      "solution": "Arrange 2,4,5,7,9; middle=5."
    },
    {
      "topic": "Median",
      "difficulty": "Understanding",
      "question": "Find median of 2,4,6,8,10,12.",
      "answer": "7.",
      "solution": "n=6; median=(3rd+4th)/2=(6+8)/2=7."
    },
    {
      "topic": "Median",
      "difficulty": "Application",
      "question": "Find the 9th ordered position for n=17.",
      "answer": "9th.",
      "solution": "(17+1)/2=9."
    },
    {
      "topic": "Median",
      "difficulty": "HOTS",
      "question": "Why can median be more stable than mean with an extreme outlier?",
      "answer": "Median depends on position, while mean uses the outlier’s magnitude.",
      "solution": "A single extreme value can shift the total greatly without moving the central position much."
    },
    {
      "topic": "Median",
      "difficulty": "Challenge",
      "question": "A student says the median of 8,1,6,3,9 is 6 because 6 is visually central. Is the reasoning valid?",
      "answer": "No; the data must be ordered first, though the final median happens to be 6.",
      "solution": "Correct order is 1,3,6,8,9."
    },
    {
      "topic": "Mode-range",
      "difficulty": "Basic",
      "question": "Find range of 8,11,3,15,10.",
      "answer": "12.",
      "solution": "15−3=12."
    },
    {
      "topic": "Mode-range",
      "difficulty": "Understanding",
      "question": "Can a data set have two modes?",
      "answer": "Yes.",
      "solution": "If two values share the highest frequency, it is bimodal."
    },
    {
      "topic": "Mode-range",
      "difficulty": "Application",
      "question": "Find mode of 2,2,3,4,4,4,5.",
      "answer": "4.",
      "solution": "4 occurs most frequently."
    },
    {
      "topic": "Mode-range",
      "difficulty": "HOTS",
      "question": "If every observation increases by 10, what happens to range?",
      "answer": "It remains unchanged.",
      "solution": "Maximum and minimum both increase by 10, so their difference is unchanged."
    },
    {
      "topic": "Mode-range",
      "difficulty": "Challenge",
      "question": "If every observation is multiplied by 3, what happens to range?",
      "answer": "It becomes three times.",
      "solution": "New range=3(max−min)."
    },
    {
      "topic": "Comparison",
      "difficulty": "Basic",
      "question": "Which measure identifies the most common value?",
      "answer": "Mode.",
      "solution": "Mode is defined by highest frequency."
    },
    {
      "topic": "Comparison",
      "difficulty": "Understanding",
      "question": "Which is more resistant to a single extreme value: mean or median?",
      "answer": "Median.",
      "solution": "Median is based on position."
    },
    {
      "topic": "Comparison",
      "difficulty": "Application",
      "question": "For 4,5,5,6,50 find mean.",
      "answer": "14.",
      "solution": "Sum=70; n=5; mean=14."
    },
    {
      "topic": "Comparison",
      "difficulty": "HOTS",
      "question": "Why might median be preferred for a highly skewed income data set?",
      "answer": "It is less pulled by extreme values.",
      "solution": "A few very large incomes can greatly raise the mean."
    },
    {
      "topic": "Comparison",
      "difficulty": "Challenge",
      "question": "Can mode exist for non-numerical categories?",
      "answer": "Yes.",
      "solution": "Mode is based on frequency, so categories can have a most common value."
    },
    {
      "topic": "Graphs",
      "difficulty": "Basic",
      "question": "Why do histogram bars touch?",
      "answer": "Because the intervals represent continuous adjacent data.",
      "solution": "There is no categorical gap between consecutive intervals."
    },
    {
      "topic": "Graphs",
      "difficulty": "Understanding",
      "question": "Find class mark of 20–30.",
      "answer": "25.",
      "solution": "(20+30)/2=25."
    },
    {
      "topic": "Graphs",
      "difficulty": "Application",
      "question": "A bar reaches 6 scale divisions and each is 5 units. Find frequency.",
      "answer": "30.",
      "solution": "6×5=30."
    },
    {
      "topic": "Graphs",
      "difficulty": "HOTS",
      "question": "Why is a bar graph generally not the same as a histogram?",
      "answer": "Bar graphs compare separate categories; histograms group continuous intervals.",
      "solution": "Their visual conventions encode different data structures."
    },
    {
      "topic": "Graphs",
      "difficulty": "Challenge",
      "question": "What can a misleading vertical scale do?",
      "answer": "It can exaggerate or hide differences.",
      "solution": "The visual height depends on the scale, so the scale must be read explicitly."
    },
    {
      "topic": "Advanced",
      "difficulty": "Basic",
      "question": "Mean of five numbers is 18. Find their total.",
      "answer": "90.",
      "solution": "18×5=90."
    },
    {
      "topic": "Advanced",
      "difficulty": "Understanding",
      "question": "Every value increases by 7. What happens to median?",
      "answer": "It increases by 7.",
      "solution": "Ordering shifts every value by the same constant."
    },
    {
      "topic": "Advanced",
      "difficulty": "Application",
      "question": "Mean 10 for 6 observations; replace 8 with 14. New mean?",
      "answer": "11.",
      "solution": "Old total=60; new total=66; mean=11."
    },
    {
      "topic": "Advanced",
      "difficulty": "HOTS",
      "question": "Every value is transformed x→2x+5. Old mean=9. New mean?",
      "answer": "23.",
      "solution": "Mean transforms linearly: 2×9+5=23."
    },
    {
      "topic": "Advanced",
      "difficulty": "Challenge",
      "question": "Prove that the mean lies between minimum m and maximum M.",
      "answer": "m≤mean≤M.",
      "solution": "For every xi, m≤xi≤M. Add n inequalities: nm≤Σxi≤nM. Divide by n>0."
    },
    {
      "topic": "Revision",
      "difficulty": "Basic",
      "question": "Mean of 2,4,6,8?",
      "answer": "5.",
      "solution": "20/4=5."
    },
    {
      "topic": "Revision",
      "difficulty": "Understanding",
      "question": "Median of 1,9,4,7,3?",
      "answer": "4.",
      "solution": "Order 1,3,4,7,9."
    },
    {
      "topic": "Revision",
      "difficulty": "Application",
      "question": "Data 4,5,5,6,7,30: find median.",
      "answer": "5.5.",
      "solution": "Ordered data already; central values 5 and 6, so median=5.5."
    },
    {
      "topic": "Revision",
      "difficulty": "HOTS",
      "question": "Can a mean be 35 if min=12 and max=30?",
      "answer": "No.",
      "solution": "The mean is a weighted average and lies between min and max."
    },
    {
      "topic": "Revision",
      "difficulty": "Challenge",
      "question": "Explain why a correct answer can still earn fewer marks if the method is missing in a multi-step question.",
      "answer": "Because mathematical communication and reasoning are part of the assessed solution.",
      "solution": "Writing the formula, substitution and reasoning shows how the result was obtained and allows errors to be diagnosed."
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
        "Number of siblings is discrete or continuous?",
        "If frequencies are 3,5,2, find N.",
        "Find mean of 5,7,9,11.",
        "Find median of 7,2,9,4,5.",
        "Find range of 8,11,3,15,10.",
        "Which measure identifies the most common value?",
        "Why do histogram bars touch?",
        "Mean of five numbers is 18. Find their total.",
        "Mean of 2,4,6,8?"
      ]
    },
    {
      "title": "Understanding Practice",
      "questions": [
        "Height is usually discrete or continuous?",
        "What does fx represent?",
        "Find mean for x=3,5,7 and f=2,4,1.",
        "Find median of 2,4,6,8,10,12.",
        "Can a data set have two modes?",
        "Which is more resistant to a single extreme value: mean or median?",
        "Find class mark of 20–30.",
        "Every value increases by 7. What happens to median?",
        "Median of 1,9,4,7,3?"
      ]
    },
    {
      "title": "Application Practice",
      "questions": [
        "Why should units be recorded with measurements?",
        "For x=2,4,6 and f=1,2,3, find Σfx.",
        "Six observations have mean 15. Find their total.",
        "Find the 9th ordered position for n=17.",
        "Find mode of 2,2,3,4,4,4,5.",
        "For 4,5,5,6,50 find mean.",
        "A bar reaches 6 scale divisions and each is 5 units. Find frequency.",
        "Mean 10 for 6 observations; replace 8 with 14. New mean?",
        "Data 4,5,5,6,7,30: find median."
      ]
    },
    {
      "title": "HOTS Practice",
      "questions": [
        "Can two data sets have the same mean but very different spread?",
        "Why is Σf needed in a frequency-table mean?",
        "A mean of 12 for 8 observations changes when 20 is replaced by 14. Find new mean.",
        "Why can median be more stable than mean with an extreme outlier?",
        "If every observation increases by 10, what happens to range?",
        "Why might median be preferred for a highly skewed income data set?",
        "Why is a bar graph generally not the same as a histogram?",
        "Every value is transformed x→2x+5. Old mean=9. New mean?",
        "Can a mean be 35 if min=12 and max=30?"
      ]
    },
    {
      "title": "Challenge Practice",
      "questions": [
        "Why is statistical interpretation not only arithmetic?",
        "How can you detect an incorrect frequency table?",
        "Every value is multiplied by 4 then increased by 3. Old mean=7. New mean?",
        "A student says the median of 8,1,6,3,9 is 6 because 6 is visually central. Is the reasoning valid?",
        "If every observation is multiplied by 3, what happens to range?",
        "Can mode exist for non-numerical categories?",
        "What can a misleading vertical scale do?",
        "Prove that the mean lies between minimum m and maximum M.",
        "Explain why a correct answer can still earn fewer marks if the method is missing in a multi-step question."
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
      "question": "Which measure needs ordered data?",
      "options": [
        "Median.",
        "Mean",
        "Mode",
        "Range"
      ],
      "answer": "Median."
    },
    {
      "question": "Range equals?",
      "options": [
        "Maximum−minimum.",
        "Mean",
        "Mode",
        "Range"
      ],
      "answer": "Maximum−minimum."
    },
    {
      "question": "Frequency mean formula?",
      "options": [
        "Σfx/Σf.",
        "Mean",
        "Mode",
        "Range"
      ],
      "answer": "Σfx/Σf."
    },
    {
      "question": "If every value increases by 5, mean?",
      "options": [
        "Increases by 5.",
        "Mean",
        "Mode",
        "Range"
      ],
      "answer": "Increases by 5."
    },
    {
      "question": "If every value triples, volume-like scaling is irrelevant; what happens to range?",
      "options": [
        "Triples.",
        "Mean",
        "Mode",
        "Range"
      ],
      "answer": "Triples."
    }
  ],
  "examZone": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "commonMistakes": [
    "Order before median.",
    "Σf is the count.",
    "Mean lies between min and max.",
    "Histogram bars touch for continuous adjacent intervals.",
    "Adding k to every value adds k to mean and median.",
    "Multiplying by k scales mean, median and range by k for positive k."
  ],
  "masterRevision": [
    "Statistics: definitions → conditions → concepts → worked examples → guided practice → mixed HOTS → revision → final test."
  ],
  "detailedSummary": [
    "A highly detailed Class 9 Statistics chapter covering data language, frequency tables, mean, median, mode, range, comparison of measures, graphs, reverse reasoning, transformations, outliers, HOTS and exam strategy.",
    "The chapter should be revised by explaining each definition aloud, deriving or justifying each major formula, solving examples without looking at the solution, and checking the final result."
  ],
  "finalChapterTest": [
    {
      "topic": "Revision",
      "difficulty": "Understanding",
      "question": "Median of 1,9,4,7,3?",
      "answer": "4.",
      "solution": "Order 1,3,4,7,9."
    },
    {
      "topic": "Revision",
      "difficulty": "Application",
      "question": "Data 4,5,5,6,7,30: find median.",
      "answer": "5.5.",
      "solution": "Ordered data already; central values 5 and 6, so median=5.5."
    },
    {
      "topic": "Revision",
      "difficulty": "HOTS",
      "question": "Can a mean be 35 if min=12 and max=30?",
      "answer": "No.",
      "solution": "The mean is a weighted average and lies between min and max."
    },
    {
      "topic": "Revision",
      "difficulty": "Challenge",
      "question": "Explain why a correct answer can still earn fewer marks if the method is missing in a multi-step question.",
      "answer": "Because mathematical communication and reasoning are part of the assessed solution.",
      "solution": "Writing the formula, substitution and reasoning shows how the result was obtained and allows errors to be diagnosed."
    }
  ],
  "importantPoints": [
    "Use definitions and conditions.",
    "Show all working.",
    "Check the final answer."
  ],
  "keyTerms": [
    "Data",
    "Frequency",
    "Mean",
    "Median",
    "Mode",
    "Range",
    "Class interval",
    "Class mark"
  ],
  "chapterSummary": "A highly detailed Class 9 Statistics chapter covering data language, frequency tables, mean, median, mode, range, comparison of measures, graphs, reverse reasoning, transformations, outliers, HOTS and exam strategy.",
  "sections": [
    {
      "id": "data-language",
      "title": "Data, Variables and the Purpose of Statistics",
      "blocks": [

  {
    "type": "concept",
    "title": "📐 Figure 1 — Ordered data",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nRaw:     8,3,5,3,9,5,3\nOrdered: 3,3,3,5,5,8,9\nMedian = middle value = 3\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 2 — Frequency table",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nx: 2   3   4   5\nf: 1   4   2   3\nΣf=10, Σfx=37, mean=3.7\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 3 — Median position",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\n1  2  3  [4]  5  6  7\n          ↑\n       median\nFor n=7, position=(n+1)/2=4.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 4 — Bar graph",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nfrequency\n4 |   █\n3 |   █       █\n2 |   █   █   █\n1 | █ █   █   █\n  +----------------\n     A   B   C\nBars are separated.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 5 — Histogram",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nfrequency\n4 |   █████\n3 |   █████ █████\n2 |   █████ █████ █████\n1 |   █████ █████ █████\n  +-----------------------\n    0–10 10–20 20–30\nClass intervals touch.\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  },
  {
    "type": "concept",
    "title": "📐 Figure 6 — Mean / median / mode",
    "color": "blue",
    "text": "MATHEMATICAL FIGURE (schematic; not to scale)\n\nMEAN   → uses every observation\nMEDIAN → middle position after ordering\nMODE   → highest frequency\n\nAccuracy note: every equality, perpendicularity, parallelism and label shown is intentional. Do not infer any additional property from the shape."
  }
,

        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Statistics organises data so that patterns can be described and compared. Data are observations or measurements. Quantitative data are numerical; discrete data are counted and continuous data are measured. A statistical solution should begin by understanding what each observation represents and what the frequency means."
        },
        {
          "type": "example",
          "title": "Discrete",
          "color": "orange",
          "text": "Number of students, goals scored and books owned are counts."
        },
        {
          "type": "example",
          "title": "Continuous",
          "color": "orange",
          "text": "Height, mass, time and temperature can take decimal values."
        },
        {
          "type": "example",
          "title": "Context",
          "color": "orange",
          "text": "A mean without context may be misleading; always know what the numbers measure."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Data, Variables and the Purpose of Statistics",
          "color": "purple",
          "questions": [
            {
              "topic": "Data",
              "difficulty": "Basic",
              "question": "Number of siblings is discrete or continuous?",
              "answer": "Discrete.",
              "solution": "It is counted in whole numbers."
            },
            {
              "topic": "Data",
              "difficulty": "Understanding",
              "question": "Height is usually discrete or continuous?",
              "answer": "Continuous.",
              "solution": "Height is measured and can take decimal values."
            },
            {
              "topic": "Data",
              "difficulty": "Application",
              "question": "Why should units be recorded with measurements?",
              "answer": "To give the data meaning and allow correct comparisons.",
              "solution": "A number without its unit may be ambiguous."
            },
            {
              "topic": "Data",
              "difficulty": "HOTS",
              "question": "Can two data sets have the same mean but very different spread?",
              "answer": "Yes.",
              "solution": "Mean describes central tendency, not the entire distribution."
            },
            {
              "topic": "Data",
              "difficulty": "Challenge",
              "question": "Why is statistical interpretation not only arithmetic?",
              "answer": "The context and method of data collection affect meaning.",
              "solution": "A calculation can be correct while an interpretation is inappropriate."
            }
          ]
        }
      ]
    },
    {
      "id": "frequency",
      "title": "Frequency and Frequency Tables",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Frequency is the number of times a value occurs. A frequency table lists each distinct observation with its frequency. The total frequency N=Σf equals the number of observations. For frequency data, Σfx represents the total of all observations when each value x is repeated f times. This is the bridge between a table and the mean formula."
        },
        {
          "type": "example",
          "title": "Simple table",
          "color": "orange",
          "text": "Data 2,2,3,3,3,5 gives frequencies 2→2, 3→3, 5→1 and N=6."
        },
        {
          "type": "example",
          "title": "Weighted total",
          "color": "orange",
          "text": "For x=2,4,6 with f=3,2,1, Σfx=2×3+4×2+6×1=20."
        },
        {
          "type": "example",
          "title": "Frequency check",
          "color": "orange",
          "text": "If raw data has 20 observations, the sum of frequencies must be 20."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Frequency and Frequency Tables",
          "color": "purple",
          "questions": [
            {
              "topic": "Frequency",
              "difficulty": "Basic",
              "question": "If frequencies are 3,5,2, find N.",
              "answer": "10.",
              "solution": "3+5+2=10."
            },
            {
              "topic": "Frequency",
              "difficulty": "Understanding",
              "question": "What does fx represent?",
              "answer": "The total contribution of value x occurring f times.",
              "solution": "It is x added f times."
            },
            {
              "topic": "Frequency",
              "difficulty": "Application",
              "question": "For x=2,4,6 and f=1,2,3, find Σfx.",
              "answer": "28.",
              "solution": "2+8+18=28."
            },
            {
              "topic": "Frequency",
              "difficulty": "HOTS",
              "question": "Why is Σf needed in a frequency-table mean?",
              "answer": "It is the actual number of observations.",
              "solution": "Mean is total of all observations divided by count."
            },
            {
              "topic": "Frequency",
              "difficulty": "Challenge",
              "question": "How can you detect an incorrect frequency table?",
              "answer": "Check Σf against the known number of observations and recount selected values.",
              "solution": "The total frequency must match the data count."
            }
          ]
        }
      ]
    },
    {
      "id": "mean",
      "title": "Mean: Raw Data, Frequency Data and Missing Values",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "For n raw observations x₁,x₂,…,xₙ, mean=Σx/n. For a frequency distribution, mean=Σfx/Σf. Here x is an observation and f is its frequency. A useful reverse formula is total=sum=mean×number of observations. This allows missing values to be recovered without reconstructing the entire list."
        },
        {
          "type": "example",
          "title": "Raw mean",
          "color": "orange",
          "text": "For 4,6,8,10, sum=28 and n=4, so mean=7."
        },
        {
          "type": "example",
          "title": "Frequency mean",
          "color": "orange",
          "text": "x=2,4,6 with f=3,2,1 gives Σf=6, Σfx=20, mean=20/6=10/3."
        },
        {
          "type": "example",
          "title": "Missing value",
          "color": "orange",
          "text": "Five numbers have mean 12, so total=60. If four sum to 48, the fifth is 12."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Mean: Raw Data, Frequency Data and Missing Values",
          "color": "purple",
          "questions": [
            {
              "topic": "Mean",
              "difficulty": "Basic",
              "question": "Find mean of 5,7,9,11.",
              "answer": "8.",
              "solution": "32/4=8."
            },
            {
              "topic": "Mean",
              "difficulty": "Understanding",
              "question": "Find mean for x=3,5,7 and f=2,4,1.",
              "answer": "33/7≈4.714.",
              "solution": "Σf=7; Σfx=33; mean=33/7."
            },
            {
              "topic": "Mean",
              "difficulty": "Application",
              "question": "Six observations have mean 15. Find their total.",
              "answer": "90.",
              "solution": "Total=15×6=90."
            },
            {
              "topic": "Mean",
              "difficulty": "HOTS",
              "question": "A mean of 12 for 8 observations changes when 20 is replaced by 14. Find new mean.",
              "answer": "11.25.",
              "solution": "Old total=96; new total=96−20+14=90; mean=90/8=11.25."
            },
            {
              "topic": "Mean",
              "difficulty": "Challenge",
              "question": "Every value is multiplied by 4 then increased by 3. Old mean=7. New mean?",
              "answer": "31.",
              "solution": "Mean transforms the same way: 4×7+3=31."
            }
          ]
        }
      ]
    },
    {
      "id": "median",
      "title": "Median: Ordering, Odd and Even Cases",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Median is the middle observation after the data are arranged. For odd n, position=(n+1)/2. For even n, median is the average of the n/2th and (n/2+1)th ordered observations. The crucial step is ordering. The original sequence is irrelevant to the position calculation unless it is already sorted."
        },
        {
          "type": "example",
          "title": "Odd",
          "color": "orange",
          "text": "3,5,7,9,11 has n=5, so median is 3rd value=7."
        },
        {
          "type": "example",
          "title": "Even",
          "color": "orange",
          "text": "2,4,6,8 has n=4, so median=(4+6)/2=5."
        },
        {
          "type": "example",
          "title": "Outlier",
          "color": "orange",
          "text": "For 2,3,4,5,100, the median is 4 while the mean is 22.8, showing the outlier effect."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Median: Ordering, Odd and Even Cases",
          "color": "purple",
          "questions": [
            {
              "topic": "Median",
              "difficulty": "Basic",
              "question": "Find median of 7,2,9,4,5.",
              "answer": "5.",
              "solution": "Arrange 2,4,5,7,9; middle=5."
            },
            {
              "topic": "Median",
              "difficulty": "Understanding",
              "question": "Find median of 2,4,6,8,10,12.",
              "answer": "7.",
              "solution": "n=6; median=(3rd+4th)/2=(6+8)/2=7."
            },
            {
              "topic": "Median",
              "difficulty": "Application",
              "question": "Find the 9th ordered position for n=17.",
              "answer": "9th.",
              "solution": "(17+1)/2=9."
            },
            {
              "topic": "Median",
              "difficulty": "HOTS",
              "question": "Why can median be more stable than mean with an extreme outlier?",
              "answer": "Median depends on position, while mean uses the outlier’s magnitude.",
              "solution": "A single extreme value can shift the total greatly without moving the central position much."
            },
            {
              "topic": "Median",
              "difficulty": "Challenge",
              "question": "A student says the median of 8,1,6,3,9 is 6 because 6 is visually central. Is the reasoning valid?",
              "answer": "No; the data must be ordered first, though the final median happens to be 6.",
              "solution": "Correct order is 1,3,6,8,9."
            }
          ]
        }
      ]
    },
    {
      "id": "mode-range",
      "title": "Mode and Range",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Mode is the observation with the highest frequency. A data set can have one mode, multiple modes or no mode if all observations occur equally often. Range=maximum−minimum and gives a simple measure of spread. Range depends only on two extreme observations, unlike mean which uses every observation."
        },
        {
          "type": "example",
          "title": "Mode",
          "color": "orange",
          "text": "2,3,3,4,4,4,5 has mode 4."
        },
        {
          "type": "example",
          "title": "Multiple modes",
          "color": "orange",
          "text": "1,1,2,2,3 has two modes: 1 and 2."
        },
        {
          "type": "example",
          "title": "Range",
          "color": "orange",
          "text": "12,18,20,25 gives range 13."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Mode and Range",
          "color": "purple",
          "questions": [
            {
              "topic": "Mode-range",
              "difficulty": "Basic",
              "question": "Find range of 8,11,3,15,10.",
              "answer": "12.",
              "solution": "15−3=12."
            },
            {
              "topic": "Mode-range",
              "difficulty": "Understanding",
              "question": "Can a data set have two modes?",
              "answer": "Yes.",
              "solution": "If two values share the highest frequency, it is bimodal."
            },
            {
              "topic": "Mode-range",
              "difficulty": "Application",
              "question": "Find mode of 2,2,3,4,4,4,5.",
              "answer": "4.",
              "solution": "4 occurs most frequently."
            },
            {
              "topic": "Mode-range",
              "difficulty": "HOTS",
              "question": "If every observation increases by 10, what happens to range?",
              "answer": "It remains unchanged.",
              "solution": "Maximum and minimum both increase by 10, so their difference is unchanged."
            },
            {
              "topic": "Mode-range",
              "difficulty": "Challenge",
              "question": "If every observation is multiplied by 3, what happens to range?",
              "answer": "It becomes three times.",
              "solution": "New range=3(max−min)."
            }
          ]
        }
      ]
    },
    {
      "id": "comparison",
      "title": "Mean vs Median vs Mode: Choosing the Right Measure",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Mean uses every observation and is sensitive to extreme values. Median uses ordered position and is comparatively resistant to outliers. Mode identifies the most common value and can be used for categorical or numerical data. Range describes spread rather than central tendency. A good interpretation chooses the measure that answers the question rather than assuming mean is always best."
        },
        {
          "type": "example",
          "title": "Outlier comparison",
          "color": "orange",
          "text": "For 4,5,5,6,50, mean=14, median=5, mode=5. The outlier affects mean strongly."
        },
        {
          "type": "example",
          "title": "Context",
          "color": "orange",
          "text": "Most common shoe size → mode. Typical value in a skewed distribution → median can be useful. Balanced numerical data → mean often uses all information effectively."
        },
        {
          "type": "example",
          "title": "Spread",
          "color": "orange",
          "text": "Two data sets can have equal means but different ranges."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Mean vs Median vs Mode: Choosing the Right Measure",
          "color": "purple",
          "questions": [
            {
              "topic": "Comparison",
              "difficulty": "Basic",
              "question": "Which measure identifies the most common value?",
              "answer": "Mode.",
              "solution": "Mode is defined by highest frequency."
            },
            {
              "topic": "Comparison",
              "difficulty": "Understanding",
              "question": "Which is more resistant to a single extreme value: mean or median?",
              "answer": "Median.",
              "solution": "Median is based on position."
            },
            {
              "topic": "Comparison",
              "difficulty": "Application",
              "question": "For 4,5,5,6,50 find mean.",
              "answer": "14.",
              "solution": "Sum=70; n=5; mean=14."
            },
            {
              "topic": "Comparison",
              "difficulty": "HOTS",
              "question": "Why might median be preferred for a highly skewed income data set?",
              "answer": "It is less pulled by extreme values.",
              "solution": "A few very large incomes can greatly raise the mean."
            },
            {
              "topic": "Comparison",
              "difficulty": "Challenge",
              "question": "Can mode exist for non-numerical categories?",
              "answer": "Yes.",
              "solution": "Mode is based on frequency, so categories can have a most common value."
            }
          ]
        }
      ]
    },
    {
      "id": "graphs",
      "title": "Bar Graphs, Histograms and Frequency Polygons",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Graphs communicate frequency visually. A bar graph is suited to separate categories and has gaps between bars. A histogram represents continuous grouped intervals, so adjacent bars touch. A frequency polygon plots class marks against frequencies and joins the points. Always inspect axis labels, units, scale and class intervals before reading a graph."
        },
        {
          "type": "example",
          "title": "Bar graph",
          "color": "orange",
          "text": "Category bars have gaps because categories are distinct."
        },
        {
          "type": "example",
          "title": "Histogram",
          "color": "orange",
          "text": "Intervals such as 0–10,10–20,20–30 are adjacent continuous intervals, so bars touch."
        },
        {
          "type": "example",
          "title": "Class mark",
          "color": "orange",
          "text": "For interval 10–20, class mark=(10+20)/2=15."
        },
        {
          "type": "example",
          "title": "Scale trap",
          "color": "orange",
          "text": "If one grid step represents 5 students, a bar reaching four steps means 20, not 4."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Bar Graphs, Histograms and Frequency Polygons",
          "color": "purple",
          "questions": [
            {
              "topic": "Graphs",
              "difficulty": "Basic",
              "question": "Why do histogram bars touch?",
              "answer": "Because the intervals represent continuous adjacent data.",
              "solution": "There is no categorical gap between consecutive intervals."
            },
            {
              "topic": "Graphs",
              "difficulty": "Understanding",
              "question": "Find class mark of 20–30.",
              "answer": "25.",
              "solution": "(20+30)/2=25."
            },
            {
              "topic": "Graphs",
              "difficulty": "Application",
              "question": "A bar reaches 6 scale divisions and each is 5 units. Find frequency.",
              "answer": "30.",
              "solution": "6×5=30."
            },
            {
              "topic": "Graphs",
              "difficulty": "HOTS",
              "question": "Why is a bar graph generally not the same as a histogram?",
              "answer": "Bar graphs compare separate categories; histograms group continuous intervals.",
              "solution": "Their visual conventions encode different data structures."
            },
            {
              "topic": "Graphs",
              "difficulty": "Challenge",
              "question": "What can a misleading vertical scale do?",
              "answer": "It can exaggerate or hide differences.",
              "solution": "The visual height depends on the scale, so the scale must be read explicitly."
            }
          ]
        }
      ]
    },
    {
      "id": "advanced",
      "title": "Reverse Problems, Transformations and HOTS",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Statistical formulas can be rearranged for reverse reasoning. If mean is known, total=mean×n. If one value changes from a to b, new total=old total−a+b. If every observation becomes x+k, the mean becomes old mean+k. If every observation is multiplied by k, the mean, median and range are multiplied by k for positive k; mode is also transformed correspondingly when the mapping remains one-to-one."
        },
        {
          "type": "example",
          "title": "Changed value",
          "color": "orange",
          "text": "Old mean 10 for 6 observations gives total 60. Replace 8 by 14: new total 66, new mean 11."
        },
        {
          "type": "example",
          "title": "Add constant",
          "color": "orange",
          "text": "Every score +7 makes mean +7."
        },
        {
          "type": "example",
          "title": "Scale",
          "color": "orange",
          "text": "Every score ×4 makes mean, median and range ×4."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Reverse Problems, Transformations and HOTS",
          "color": "purple",
          "questions": [
            {
              "topic": "Advanced",
              "difficulty": "Basic",
              "question": "Mean of five numbers is 18. Find their total.",
              "answer": "90.",
              "solution": "18×5=90."
            },
            {
              "topic": "Advanced",
              "difficulty": "Understanding",
              "question": "Every value increases by 7. What happens to median?",
              "answer": "It increases by 7.",
              "solution": "Ordering shifts every value by the same constant."
            },
            {
              "topic": "Advanced",
              "difficulty": "Application",
              "question": "Mean 10 for 6 observations; replace 8 with 14. New mean?",
              "answer": "11.",
              "solution": "Old total=60; new total=66; mean=11."
            },
            {
              "topic": "Advanced",
              "difficulty": "HOTS",
              "question": "Every value is transformed x→2x+5. Old mean=9. New mean?",
              "answer": "23.",
              "solution": "Mean transforms linearly: 2×9+5=23."
            },
            {
              "topic": "Advanced",
              "difficulty": "Challenge",
              "question": "Prove that the mean lies between minimum m and maximum M.",
              "answer": "m≤mean≤M.",
              "solution": "For every xi, m≤xi≤M. Add n inequalities: nm≤Σxi≤nM. Divide by n>0."
            }
          ]
        }
      ]
    },
    {
      "id": "revision",
      "title": "Final Revision, Mistakes and Exam Checklist",
      "blocks": [
        {
          "type": "concept",
          "title": "Concept Explained",
          "color": "blue",
          "text": "Common mistakes include forgetting to order data for median, using Σx/n for a frequency table, misreading a graph scale, confusing range with mean, treating histogram bars as categorical bars, and forgetting that the total frequency equals the number of observations.\n\nA final check should ask: Did I use the correct formula? Did I count n correctly? Did I order data for median? Did I check Σf? Does the mean lie within the minimum and maximum? Are the graph labels and scales read correctly?"
        },
        {
          "type": "example",
          "title": "One-page formula recall",
          "color": "orange",
          "text": "Mean=Σx/n; frequency mean=Σfx/Σf; median odd=(n+1)/2th; median even=average of central two; range=max−min."
        },
        {
          "type": "example",
          "title": "Mean sanity check",
          "color": "orange",
          "text": "Mean cannot be below minimum or above maximum."
        },
        {
          "type": "example",
          "title": "Frequency sanity check",
          "color": "orange",
          "text": "Σf must equal total observations."
        },
        {
          "type": "tip",
          "title": "Important Points",
          "color": "green",
          "text": "Read the conditions carefully. Write the theorem/formula before substitution when it improves clarity. Keep units and labels consistent."
        },
        {
          "type": "practice",
          "title": "Practice — Final Revision, Mistakes and Exam Checklist",
          "color": "purple",
          "questions": [
            {
              "topic": "Revision",
              "difficulty": "Basic",
              "question": "Mean of 2,4,6,8?",
              "answer": "5.",
              "solution": "20/4=5."
            },
            {
              "topic": "Revision",
              "difficulty": "Understanding",
              "question": "Median of 1,9,4,7,3?",
              "answer": "4.",
              "solution": "Order 1,3,4,7,9."
            },
            {
              "topic": "Revision",
              "difficulty": "Application",
              "question": "Data 4,5,5,6,7,30: find median.",
              "answer": "5.5.",
              "solution": "Ordered data already; central values 5 and 6, so median=5.5."
            },
            {
              "topic": "Revision",
              "difficulty": "HOTS",
              "question": "Can a mean be 35 if min=12 and max=30?",
              "answer": "No.",
              "solution": "The mean is a weighted average and lies between min and max."
            },
            {
              "topic": "Revision",
              "difficulty": "Challenge",
              "question": "Explain why a correct answer can still earn fewer marks if the method is missing in a multi-step question.",
              "answer": "Because mathematical communication and reasoning are part of the assessed solution.",
              "solution": "Writing the formula, substitution and reasoning shows how the result was obtained and allows errors to be diagnosed."
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
    "id": "chapter-12-deep-expansion-5x",
    "title": "5× Minimum Detailed Expansion — Same Format as Chapters 5–8",
    "blocks": [
      {
        "type": "concept",
        "title": "1. Data and statistics — Deep Concept",
        "color": "blue",
        "text": "Statistics is the systematic collection, organisation, presentation, analysis and interpretation of numerical data. Data may be collected for a purpose and then summarised to make patterns easier to understand. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "1. Data and statistics — Solved Method",
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
        "title": "Practice — Data and statistics",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Data and statistics.",
            "answer": "State the standard Class 9 result for Data and statistics.",
            "solution": "Statistics is the systematic collection, organisation, presentation, analysis and interpretation of numerical data. Data may be collected for a purpose and then summarised to make patterns easier to understand."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Data and statistics important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Data and statistics.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Data and statistics.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Data and statistics.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "2. Raw data — Deep Concept",
        "color": "blue",
        "text": "Raw data are observations in the form in which they were initially collected. Raw lists can be difficult to interpret, so they are often arranged in ascending order or grouped. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "2. Raw data — Solved Method",
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
        "title": "Practice — Raw data",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Raw data.",
            "answer": "State the standard Class 9 result for Raw data.",
            "solution": "Raw data are observations in the form in which they were initially collected. Raw lists can be difficult to interpret, so they are often arranged in ascending order or grouped."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Raw data important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Raw data.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Raw data.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Raw data.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "3. Range — Deep Concept",
        "color": "blue",
        "text": "The range of a data set is maximum value minus minimum value. It gives a simple measure of spread but does not describe the full distribution. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "3. Range — Solved Method",
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
        "title": "Practice — Range",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Range.",
            "answer": "State the standard Class 9 result for Range.",
            "solution": "The range of a data set is maximum value minus minimum value. It gives a simple measure of spread but does not describe the full distribution."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Range important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Range.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Range.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Range.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "4. Frequency — Deep Concept",
        "color": "blue",
        "text": "Frequency tells how many times a value or observation occurs. A frequency table pairs each observation/value with its frequency. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "4. Frequency — Solved Method",
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
        "title": "Practice — Frequency",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Frequency.",
            "answer": "State the standard Class 9 result for Frequency.",
            "solution": "Frequency tells how many times a value or observation occurs. A frequency table pairs each observation/value with its frequency."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Frequency important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Frequency.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Frequency.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Frequency.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "5. Ungrouped frequency distribution — Deep Concept",
        "color": "blue",
        "text": "For discrete observations, a frequency table lists values x_i and corresponding frequencies f_i. The total frequency is Σf_i. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "5. Ungrouped frequency distribution — Solved Method",
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
        "title": "Practice — Ungrouped frequency distribution",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Ungrouped frequency distribution.",
            "answer": "State the standard Class 9 result for Ungrouped frequency distribution.",
            "solution": "For discrete observations, a frequency table lists values x_i and corresponding frequencies f_i. The total frequency is Σf_i."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Ungrouped frequency distribution important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Ungrouped frequency distribution.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Ungrouped frequency distribution.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Ungrouped frequency distribution.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "6. Mean of ungrouped data — Deep Concept",
        "color": "blue",
        "text": "The arithmetic mean is obtained by adding all observations and dividing by their number. For a frequency distribution, mean = Σf_i x_i / Σf_i. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "6. Mean of ungrouped data — Solved Method",
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
        "title": "Practice — Mean of ungrouped data",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Mean of ungrouped data.",
            "answer": "State the standard Class 9 result for Mean of ungrouped data.",
            "solution": "The arithmetic mean is obtained by adding all observations and dividing by their number. For a frequency distribution, mean = Σf_i x_i / Σf_i."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Mean of ungrouped data important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Mean of ungrouped data.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Mean of ungrouped data.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Mean of ungrouped data.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "7. Assumed mean method — Deep Concept",
        "color": "blue",
        "text": "When values are large or awkward, an assumed mean A can simplify arithmetic. Let d_i=x_i−A. Then mean=A+(Σf_i d_i)/(Σf_i). Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "7. Assumed mean method — Solved Method",
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
        "title": "Practice — Assumed mean method",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Assumed mean method.",
            "answer": "State the standard Class 9 result for Assumed mean method.",
            "solution": "When values are large or awkward, an assumed mean A can simplify arithmetic. Let d_i=x_i−A. Then mean=A+(Σf_i d_i)/(Σf_i)."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Assumed mean method important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Assumed mean method.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Assumed mean method.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Assumed mean method.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "8. Step-deviation idea — Deep Concept",
        "color": "blue",
        "text": "If deviations share a common scale, let u_i=(x_i−A)/h. Then mean=A+h(Σf_i u_i)/(Σf_i), where h is a convenient common factor. This is a computational shortcut, not a different mean. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "8. Step-deviation idea — Solved Method",
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
        "title": "Practice — Step-deviation idea",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Step-deviation idea.",
            "answer": "State the standard Class 9 result for Step-deviation idea.",
            "solution": "If deviations share a common scale, let u_i=(x_i−A)/h. Then mean=A+h(Σf_i u_i)/(Σf_i), where h is a convenient common factor. This is a computational shortcut, not a different mean."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Step-deviation idea important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Step-deviation idea.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Step-deviation idea.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Step-deviation idea.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "9. Median — Deep Concept",
        "color": "blue",
        "text": "The median is the middle value after arranging data. For an odd number of observations, it is the central observation. For an even number, it is the average of the two central observations. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "9. Median — Solved Method",
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
        "title": "Practice — Median",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Median.",
            "answer": "State the standard Class 9 result for Median.",
            "solution": "The median is the middle value after arranging data. For an odd number of observations, it is the central observation. For an even number, it is the average of the two central observations."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Median important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Median.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Median.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Median.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "10. Mode — Deep Concept",
        "color": "blue",
        "text": "The mode is the observation with the highest frequency. A data set may have one mode, more than one mode, or no unique mode. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "10. Mode — Solved Method",
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
        "title": "Practice — Mode",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Mode.",
            "answer": "State the standard Class 9 result for Mode.",
            "solution": "The mode is the observation with the highest frequency. A data set may have one mode, more than one mode, or no unique mode."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Mode important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Mode.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Mode.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Mode.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "11. Mean versus median versus mode — Deep Concept",
        "color": "blue",
        "text": "Mean uses every observation and is sensitive to extreme values. Median depends on position after ordering and is more resistant to extremes. Mode identifies the most frequent value. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "11. Mean versus median versus mode — Solved Method",
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
        "title": "Practice — Mean versus median versus mode",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Mean versus median versus mode.",
            "answer": "State the standard Class 9 result for Mean versus median versus mode.",
            "solution": "Mean uses every observation and is sensitive to extreme values. Median depends on position after ordering and is more resistant to extremes. Mode identifies the most frequent value."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Mean versus median versus mode important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Mean versus median versus mode.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Mean versus median versus mode.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Mean versus median versus mode.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "12. Bar graph — Deep Concept",
        "color": "blue",
        "text": "A bar graph represents discrete or categorical data using separated rectangular bars. Equal widths and clear labels are essential. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "12. Bar graph — Solved Method",
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
        "title": "Practice — Bar graph",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Bar graph.",
            "answer": "State the standard Class 9 result for Bar graph.",
            "solution": "A bar graph represents discrete or categorical data using separated rectangular bars. Equal widths and clear labels are essential."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Bar graph important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Bar graph.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Bar graph.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Bar graph.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "13. Histogram — Deep Concept",
        "color": "blue",
        "text": "A histogram is used for continuous grouped data with adjoining class intervals, so its bars touch. This distinguishes it visually from a bar graph. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "13. Histogram — Solved Method",
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
        "title": "Practice — Histogram",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Histogram.",
            "answer": "State the standard Class 9 result for Histogram.",
            "solution": "A histogram is used for continuous grouped data with adjoining class intervals, so its bars touch. This distinguishes it visually from a bar graph."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Histogram important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Histogram.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Histogram.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Histogram.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "14. Frequency polygon — Deep Concept",
        "color": "blue",
        "text": "A frequency polygon is formed by plotting class marks against frequencies and joining the points with straight segments. It is useful for comparing distributions. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "14. Frequency polygon — Solved Method",
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
        "title": "Practice — Frequency polygon",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Frequency polygon.",
            "answer": "State the standard Class 9 result for Frequency polygon.",
            "solution": "A frequency polygon is formed by plotting class marks against frequencies and joining the points with straight segments. It is useful for comparing distributions."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Frequency polygon important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Frequency polygon.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Frequency polygon.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Frequency polygon.",
            "answer": "Use an alternate formula, estimate, substitution check, dimensional check, or a second valid method.",
            "solution": "The check should test the result independently rather than repeat the same arithmetic."
          }
        ]
      },
      {
        "type": "concept",
        "title": "15. Interpretation and mistakes — Deep Concept",
        "color": "blue",
        "text": "Always check scale, labels, class intervals, frequencies and units. Common mistakes include misreading axes, using a bar graph rule for a histogram, and calculating a mean without dividing by total frequency. Learn the meaning first, then identify the conditions under which the result is valid. Connect the idea to earlier Class 9 concepts and distinguish it from closely related ideas."
      },
      {
        "type": "example",
        "title": "15. Interpretation and mistakes — Solved Method",
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
        "title": "Practice — Interpretation and mistakes",
        "color": "purple",
        "questions": [
          {
            "difficulty": "Basic",
            "question": "State the key definition/formula related to Interpretation and mistakes.",
            "answer": "State the standard Class 9 result for Interpretation and mistakes.",
            "solution": "Always check scale, labels, class intervals, frequencies and units. Common mistakes include misreading axes, using a bar graph rule for a histogram, and calculating a mean without dividing by total frequency."
          },
          {
            "difficulty": "Understanding",
            "question": "Why is the condition or distinction in Interpretation and mistakes important?",
            "answer": "Because applying a theorem or formula outside its conditions can give an invalid result.",
            "solution": "Identify the hypothesis and compare it with the information in the problem."
          },
          {
            "difficulty": "Application",
            "question": "Write the correct step-by-step method for a numerical question on Interpretation and mistakes.",
            "answer": "Givens → required → formula/rule → substitution → simplification → units → verification.",
            "solution": "Show the formula first and keep the working traceable."
          },
          {
            "difficulty": "HOTS",
            "question": "Give one common misconception about Interpretation and mistakes.",
            "answer": "Confusing a related quantity, ignoring a condition, or relying on visual appearance.",
            "solution": "Use definitions and the exact wording of the question to avoid the misconception."
          },
          {
            "difficulty": "Challenge",
            "question": "Give an independent way to verify a result involving Interpretation and mistakes.",
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
    "text": "Revision Lab 1 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 2 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 3 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 4 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 5 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 6 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 7 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 8 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 9 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 10 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 11 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 12 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 13 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 14 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 15 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 16 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 17 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 18 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 19 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 20 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 21 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 22 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 23 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 24 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 25 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 26 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 27 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 28 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 29 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 30 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 31 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 32 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 33 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 34 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 35 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 36 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 37 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 38 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 39 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 40 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 41 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 42 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 43 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 44 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
    "text": "Revision Lab 45 for Chapter 12: first identify the mathematical object or data, then write the relevant definition/formula/theorem, explain each symbol, verify the conditions, perform the calculation in visible steps, and finish with a reasonableness and unit check. For geometry, never assume a visual property. For mensuration, separate surface area from volume and keep dimensions consistent. For statistics, distinguish observation, frequency, total frequency and the required measure."
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
  },
  {
    "type": "exam",
    "title": "Examiner Drill 69",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 70",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 71",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 72",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 73",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 74",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 75",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 76",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 77",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 78",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 79",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 80",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 81",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 82",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 83",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 84",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 85",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 86",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 87",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 88",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 89",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 90",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 91",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 92",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 93",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 94",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 95",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 96",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 97",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 98",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 99",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 100",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 101",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 102",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 103",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 104",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 105",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 106",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 107",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 108",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 109",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 110",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 111",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 112",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 113",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 114",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 115",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 116",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 117",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 118",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 119",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 120",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 121",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 122",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 123",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 124",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 125",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 126",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 127",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 128",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 129",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 130",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 131",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 132",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 133",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 134",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 135",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 136",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 137",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 138",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 139",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 140",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 141",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 142",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 143",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 144",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 145",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 146",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 147",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 148",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 149",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 150",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 151",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 152",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 153",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 154",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 155",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 156",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 157",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 158",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 159",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 160",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 161",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 162",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 163",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 164",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 165",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  },
  {
    "type": "exam",
    "title": "Examiner Drill 166",
    "color": "orange",
    "content": "Solve using the full exam method: write givens, identify the target, state the exact formula/theorem, define symbols, check conditions, show substitution and intermediate working, simplify accurately, attach correct units, and independently verify the answer."
  }
]
};

