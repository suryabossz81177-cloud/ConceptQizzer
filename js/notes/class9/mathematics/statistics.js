/* ConceptQizzer — Class 9 Mathematics — ULTRA DETAILED + DEEP MASTERY EDITION */
/* Same ChapterData contract used by the existing Class 9 Mathematics files. */
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
  ]
};


ChapterData.sections.push([
  {
    "id": "deep-1",
    "title": "Population, data and variable",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Statistics begins with data: observations collected for a purpose. A variable is a characteristic that can take different values, such as height, number of books or test score. Qualitative data describe categories; quantitative data are numerical. Class 9 work mainly uses numerical observations and their organisation."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "Scores 12,15,15,18,20 are quantitative data. “Favourite colour” is categorical rather than numerical. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Population, data and variable",
        "color": "purple",
        "questions": [
          {
            "topic": "Population, data and variable",
            "difficulty": "Basic",
            "question": "State the main idea of population, data and variable in one sentence.",
            "answer": "Statistics begins with data: observations collected for a purpose.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Population, data and variable",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in population, data and variable matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Population, data and variable",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: Scores 12,15,15,18,20 are quantitative data. “Favourite colour” is categorical rather than numerical. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Population, data and variable",
            "difficulty": "HOTS",
            "question": "A student applies a formula from population, data and variable without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Population, data and variable",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires population, data and variable, then describe the solution strategy.",
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
    "title": "Raw data versus arranged data",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Raw data are recorded in the order collected. Arranging them in ascending or descending order makes patterns easier to see and helps find the median. Sorting does not change the observations; it only changes their order."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "Raw: 8,3,5,3,9. Ordered: 3,3,5,8,9. The mean is unchanged by rearrangement. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Raw data versus arranged data",
        "color": "purple",
        "questions": [
          {
            "topic": "Raw data versus arranged data",
            "difficulty": "Basic",
            "question": "State the main idea of raw data versus arranged data in one sentence.",
            "answer": "Raw data are recorded in the order collected.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Raw data versus arranged data",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in raw data versus arranged data matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Raw data versus arranged data",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: Raw: 8,3,5,3,9. Ordered: 3,3,5,8,9. The mean is unchanged by rearrangement. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Raw data versus arranged data",
            "difficulty": "HOTS",
            "question": "A student applies a formula from raw data versus arranged data without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Raw data versus arranged data",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires raw data versus arranged data, then describe the solution strategy.",
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
    "title": "Mean — concept and calculation",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "The arithmetic mean is the sum of all observations divided by the number of observations. If observations are x₁,x₂,…,xₙ, then x̄=(x₁+x₂+…+xₙ)/n. The mean uses every observation, so an unusually large or small value can affect it strongly."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For 4,7,9,10, mean=(4+7+9+10)/4=30/4=7.5. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Mean — concept and calculation",
        "color": "purple",
        "questions": [
          {
            "topic": "Mean — concept and calculation",
            "difficulty": "Basic",
            "question": "State the main idea of mean — concept and calculation in one sentence.",
            "answer": "The arithmetic mean is the sum of all observations divided by the number of observations.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Mean — concept and calculation",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in mean — concept and calculation matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Mean — concept and calculation",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For 4,7,9,10, mean=(4+7+9+10)/4=30/4=7.5. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Mean — concept and calculation",
            "difficulty": "HOTS",
            "question": "A student applies a formula from mean — concept and calculation without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Mean — concept and calculation",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires mean — concept and calculation, then describe the solution strategy.",
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
    "title": "Median — odd and even number of observations",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Arrange observations first. If n is odd, median is the value at position (n+1)/2. If n is even, median is the average of the values at positions n/2 and n/2+1. Median is positional, so ordering is essential."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For 3,5,7,8,12, median=7. For 3,5,7,8, median=(5+7)/2=6. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Median — odd and even number of observations",
        "color": "purple",
        "questions": [
          {
            "topic": "Median — odd and even number of observations",
            "difficulty": "Basic",
            "question": "State the main idea of median — odd and even number of observations in one sentence.",
            "answer": "Arrange observations first.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Median — odd and even number of observations",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in median — odd and even number of observations matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Median — odd and even number of observations",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For 3,5,7,8,12, median=7. For 3,5,7,8, median=(5+7)/2=6. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Median — odd and even number of observations",
            "difficulty": "HOTS",
            "question": "A student applies a formula from median — odd and even number of observations without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Median — odd and even number of observations",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires median — odd and even number of observations, then describe the solution strategy.",
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
    "title": "Mode — most frequent observation",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "The mode is the observation occurring most frequently. A data set may have one mode, more than one mode, or no mode if no value occurs more frequently than the others. Do not call the largest observation the mode unless it is also the most frequent."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "In 2,4,4,5,6,6,6, mode=6 because it occurs three times. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Mode — most frequent observation",
        "color": "purple",
        "questions": [
          {
            "topic": "Mode — most frequent observation",
            "difficulty": "Basic",
            "question": "State the main idea of mode — most frequent observation in one sentence.",
            "answer": "The mode is the observation occurring most frequently.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Mode — most frequent observation",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in mode — most frequent observation matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Mode — most frequent observation",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: In 2,4,4,5,6,6,6, mode=6 because it occurs three times. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Mode — most frequent observation",
            "difficulty": "HOTS",
            "question": "A student applies a formula from mode — most frequent observation without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Mode — most frequent observation",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires mode — most frequent observation, then describe the solution strategy.",
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
    "title": "Mean, median and mode comparison",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "Mean is calculation-based and sensitive to extreme values. Median is position-based and more resistant to extremes. Mode is frequency-based and is useful for identifying the most common value. They need not be equal."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For 2,3,3,4,20, mean=6.4, median=3 and mode=3; the extreme value 20 pulls the mean upward. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Mean, median and mode comparison",
        "color": "purple",
        "questions": [
          {
            "topic": "Mean, median and mode comparison",
            "difficulty": "Basic",
            "question": "State the main idea of mean, median and mode comparison in one sentence.",
            "answer": "Mean is calculation-based and sensitive to extreme values.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Mean, median and mode comparison",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in mean, median and mode comparison matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Mean, median and mode comparison",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For 2,3,3,4,20, mean=6.4, median=3 and mode=3; the extreme value 20 pulls the mean upward. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Mean, median and mode comparison",
            "difficulty": "HOTS",
            "question": "A student applies a formula from mean, median and mode comparison without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Mean, median and mode comparison",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires mean, median and mode comparison, then describe the solution strategy.",
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
    "title": "Frequency distribution and grouped thinking",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "A frequency table records each value and how often it occurs. If x occurs with frequency f, then the total number of observations is Σf and the mean is Σfx/Σf. Always multiply each value by its frequency before adding."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "Values 2,3,4 with frequencies 1,2,3 give Σf=6 and Σfx=2+6+12=20, so mean=20/6=10/3. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Frequency distribution and grouped thinking",
        "color": "purple",
        "questions": [
          {
            "topic": "Frequency distribution and grouped thinking",
            "difficulty": "Basic",
            "question": "State the main idea of frequency distribution and grouped thinking in one sentence.",
            "answer": "A frequency table records each value and how often it occurs.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Frequency distribution and grouped thinking",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in frequency distribution and grouped thinking matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Frequency distribution and grouped thinking",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: Values 2,3,4 with frequencies 1,2,3 give Σf=6 and Σfx=2+6+12=20, so mean=20/6=10/3. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Frequency distribution and grouped thinking",
            "difficulty": "HOTS",
            "question": "A student applies a formula from frequency distribution and grouped thinking without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Frequency distribution and grouped thinking",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires frequency distribution and grouped thinking, then describe the solution strategy.",
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
    "title": "Histograms, bar graphs and frequency polygons",
    "blocks": [
      {
        "type": "concept",
        "title": "Deep Concept Explanation",
        "color": "blue",
        "text": "A bar graph is generally used for discrete/categorical categories and has separated bars. A histogram represents continuous class intervals and bars touch because the intervals are continuous. A frequency polygon joins plotted class-related points to show the distribution shape."
      },
      {
        "type": "example",
        "title": "Worked Example Insight",
        "color": "orange",
        "text": "For intervals 0–10,10–20,20–30, the histogram bars are adjacent; a bar gap would incorrectly suggest separated categories. The important exam habit is to write the governing formula/theorem first, then substitute."
      },
      {
        "type": "tip",
        "title": "Exam Strategy",
        "color": "green",
        "text": "Underline the givens, identify the target, check conditions, write the formula/theorem, substitute carefully, simplify, and include the correct unit."
      },
      {
        "type": "practice",
        "title": "Practice — Histograms, bar graphs and frequency polygons",
        "color": "purple",
        "questions": [
          {
            "topic": "Histograms, bar graphs and frequency polygons",
            "difficulty": "Basic",
            "question": "State the main idea of histograms, bar graphs and frequency polygons in one sentence.",
            "answer": "A bar graph is generally used for discrete/categorical categories and has separated bars.",
            "solution": "Read the definition/concept carefully and identify the key condition or relationship."
          },
          {
            "topic": "Histograms, bar graphs and frequency polygons",
            "difficulty": "Understanding",
            "question": "Explain why the key condition in histograms, bar graphs and frequency polygons matters.",
            "answer": "The condition determines when the stated rule or formula is valid.",
            "solution": "First identify the condition, then connect it to the theorem/formula before substituting any values."
          },
          {
            "topic": "Histograms, bar graphs and frequency polygons",
            "difficulty": "Application",
            "question": "Use the following worked idea as a model: For intervals 0–10,10–20,20–30, the histogram bars are adjacent; a bar gap would incorrectly suggest separated categories. What is the first calculation you should write?",
            "answer": "Write the relevant formula/theorem and identify all known quantities before calculating.",
            "solution": "Step 1: list the given quantities. Step 2: choose the matching formula/theorem. Step 3: substitute with units."
          },
          {
            "topic": "Histograms, bar graphs and frequency polygons",
            "difficulty": "HOTS",
            "question": "A student applies a formula from histograms, bar graphs and frequency polygons without checking its conditions. Is that valid? Explain.",
            "answer": "Not necessarily. A formula/theorem can only be applied when its hypotheses are satisfied.",
            "solution": "Check every required condition, reject the method if a condition fails, and select a valid alternative."
          },
          {
            "topic": "Histograms, bar graphs and frequency polygons",
            "difficulty": "Challenge",
            "question": "Create a short problem that requires histograms, bar graphs and frequency polygons, then describe the solution strategy.",
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
ChapterData.theoremPropertyLab=[{"title": "Mean formula", "statement": "Mean=Σx/n or Σfx/Σf.", "conditions": "Positive non-zero count."}];
ChapterData.realLifeMathematics=["Surveys", "Sports statistics", "School results", "Scientific measurement"];
ChapterData.mathematicalActivityLab=[{"title": "Outlier lab", "steps": ["Compute original mean/median.", "Add an extreme value.", "Recompute.", "Compare effects."]}];
ChapterData.visualLearning=["Make frequency table.", "Draw bar graph/histogram.", "Mark median position."];
ChapterData.renderCompatibility={rendererStyle:"ConceptQizzer ChapterData",answerReveal:"show-answer",tables:"native-renderer-tables",rawJSONForStudents:false};
window.ChapterData=ChapterData;
window.chapter=ChapterData;
