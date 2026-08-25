window.ChapterData = {
  "id": "class8-mathematics-data-handling",
  "class": 8,
  "subject": "Mathematics",
  "chapterNumber": 5,
  "title": "Data Handling",
  "description": "Detailed Class 8 mathematics notes on data organisation, frequency tables, bar graphs, grouped data, histograms, pie charts and probability, with graph representations, figures, solved examples and practice.",
  "summary": "Data Handling teaches how to organise data, represent it through tables and graphs, interpret distributions and connect observed data with probability.",
  "sections": [
    {
      "title": "📘 Chapter Introduction",
      "blocks": [
        {
          "type": "paragraph",
          "title": "What Is Data Handling?",
          "text": "Data handling is the process of collecting, organising, representing, interpreting and using information. In mathematics, raw observations become useful only after they are arranged in a form that helps us see patterns and make comparisons."
        },
        {
          "type": "paragraph",
          "title": "Why This Topic Matters",
          "text": "We encounter data everywhere: marks, attendance, rainfall, temperatures, sports scores, survey results, prices and population information. Tables and graphs make large amounts of information easier to understand."
        },
        {
          "type": "application",
          "title": "Real-Life Connection",
          "text": "A school may survey students about their favourite sports. Instead of reading a long list of responses, a frequency table and graph can immediately show which sport is most popular."
        },
        {
          "type": "fact",
          "title": "Core Idea",
          "text": "Good data representation should make the important information easier to compare, interpret and communicate."
        }
      ]
    },
    {
      "title": "🧾 1. Data and Its Organisation",
      "blocks": [
        {
          "type": "definition",
          "title": "Data",
          "text": "Data is a collection of facts, numbers or observations gathered for a purpose."
        },
        {
          "type": "definition",
          "title": "Raw Data",
          "text": "Raw data is data in its original, unorganised form."
        },
        {
          "type": "definition",
          "title": "Observation",
          "text": "An individual item or value recorded in a data set is an observation."
        },
        {
          "type": "definition",
          "title": "Frequency",
          "text": "The frequency of a value is the number of times that value occurs."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 1 — Frequency",
          "question": "The numbers of books read by six students are 2, 4, 2, 3, 4, 2. Find the frequency of each value.",
          "steps": [
            "List the distinct values: 2, 3 and 4.",
            "Count how many times 2 occurs: 3 times.",
            "Count how many times 3 occurs: 1 time.",
            "Count how many times 4 occurs: 2 times.",
            "Check: 3 + 1 + 2 = 6 observations."
          ],
          "answer": "2 → 3, 3 → 1, 4 → 2."
        },
        {
          "type": "rule",
          "title": "Frequency Check",
          "text": "The sum of all frequencies must equal the total number of observations."
        }
      ]
    },
    {
      "title": "📋 2. Frequency Tables",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Why Use a Frequency Table?",
          "text": "A frequency table condenses repeated information into two useful columns: the value or category and its frequency."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 2 — Make a Frequency Table",
          "question": "Prepare a frequency table for 5, 3, 5, 2, 4, 5, 3, 2, 4, 5.",
          "steps": [
            "Identify distinct values: 2, 3, 4, 5.",
            "Count each value.",
            "Record the counts in a table.",
            "Check that the total frequency is 10."
          ],
          "table": [
            [
              "Value",
              "Frequency"
            ],
            [
              "2",
              "2"
            ],
            [
              "3",
              "2"
            ],
            [
              "4",
              "2"
            ],
            [
              "5",
              "4"
            ]
          ],
          "answer": "The frequencies total 10, matching the number of observations."
        },
        {
          "type": "think",
          "title": "Think & Understand",
          "text": "Why is a frequency table better than repeatedly scanning a long list? It reduces repetition and makes comparisons immediate."
        },
        {
          "type": "commonMistake",
          "title": "Frequency Error",
          "mistake": "Forgetting an occurrence while counting.",
          "correction": "Count systematically and verify that the total frequency equals the number of observations."
        }
      ]
    },
    {
      "title": "📊 3. Bar Graphs",
      "blocks": [
        {
          "type": "paragraph",
          "title": "What Is a Bar Graph?",
          "text": "A bar graph represents categorical or discrete data using separate bars. The height or length of each bar represents the frequency of the category."
        },
        {
          "type": "rule",
          "title": "Main Features",
          "text": "Bars are separated by gaps because the categories are distinct. The axes need clear labels, and the scale must be uniform."
        },
        {
          "type": "figure",
          "title": "Bar Graph Representation",
          "svg": "<svg viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Bar graph showing favourite fruits\">\n    <line x1=\"70\" y1=\"270\" x2=\"520\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"3\"/>\n    <line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"3\"/>\n    <g fill=\"currentColor\" font-size=\"18\">\n    <text x=\"45\" y=\"275\">0</text><text x=\"42\" y=\"218\">5</text><text x=\"34\" y=\"160\">10</text><text x=\"34\" y=\"103\">15</text><text x=\"34\" y=\"46\">20</text>\n    <text x=\"120\" y=\"300\">Apple</text><text x=\"225\" y=\"300\">Mango</text><text x=\"335\" y=\"300\">Orange</text><text x=\"450\" y=\"300\">Guava</text>\n    </g>\n    <rect x=\"105\" y=\"178\" width=\"70\" height=\"92\" fill=\"currentColor\" opacity=\".55\"/>\n    <rect x=\"215\" y=\"92\" width=\"70\" height=\"178\" fill=\"currentColor\" opacity=\".7\"/>\n    <rect x=\"325\" y=\"132\" width=\"70\" height=\"138\" fill=\"currentColor\" opacity=\".6\"/>\n    <rect x=\"435\" y=\"201\" width=\"70\" height=\"69\" fill=\"currentColor\" opacity=\".45\"/>\n    <text x=\"270\" y=\"25\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">Favourite Fruits</text>\n    </svg>"
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 3 — Read a Bar Graph",
          "question": "From the displayed graph, compare the fruit preferences.",
          "steps": [
            "Read the vertical scale.",
            "Compare the heights of the four bars.",
            "The tallest bar represents Mango.",
            "The shortest bar represents Guava.",
            "Therefore Mango is the most preferred and Guava the least preferred in this illustrative data set."
          ],
          "answer": "Mango has the highest frequency; Guava has the lowest."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 4 — Construct a Bar Graph",
          "question": "Draw a bar graph for: Cricket 12, Football 8, Badminton 6, Basketball 4.",
          "steps": [
            "Draw horizontal and vertical axes.",
            "Write the sports on the horizontal axis.",
            "Choose a uniform vertical scale such as 1 unit = 2 students.",
            "Draw separate bars with heights 12, 8, 6 and 4.",
            "Label both axes and give the graph a title."
          ],
          "answer": "A correctly labelled bar graph represents the four frequencies."
        },
        {
          "type": "commonMistake",
          "title": "Unequal Scale",
          "mistake": "Using unequal intervals on the vertical axis.",
          "correction": "Keep every scale interval equal."
        }
      ]
    },
    {
      "title": "📈 4. Grouping Data and Class Intervals",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Why Group Data?",
          "text": "When a numerical data set contains many different values, grouping observations into class intervals can make the distribution easier to study."
        },
        {
          "type": "definition",
          "title": "Class Interval",
          "text": "A class interval is a range used to group numerical observations, such as 10–20 or 20–30."
        },
        {
          "type": "definition",
          "title": "Grouped Frequency",
          "text": "The number of observations falling within a class interval is its frequency."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 5 — Grouped Data",
          "question": "Scores are grouped as 0–10, 10–20, 20–30, 30–40 and 40–50 with frequencies 2, 4, 6, 5 and 2. Find the total number of students.",
          "steps": [
            "Add the frequencies.",
            "2 + 4 + 6 + 5 + 2 = 19.",
            "Therefore 19 students are represented."
          ],
          "answer": "Total frequency = 19."
        },
        {
          "type": "important",
          "title": "Important Observation",
          "text": "Class intervals should be arranged in an orderly way and should not overlap when the convention of the problem requires exclusive intervals."
        }
      ]
    },
    {
      "title": "📉 5. Histograms",
      "blocks": [
        {
          "type": "paragraph",
          "title": "What Is a Histogram?",
          "text": "A histogram represents grouped numerical data using adjoining rectangular bars. Unlike an ordinary bar graph for categories, the bars of a histogram touch because the intervals represent continuous ranges."
        },
        {
          "type": "figure",
          "title": "Histogram Representation",
          "svg": "<svg viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Histogram showing grouped test scores\">\n    <line x1=\"70\" y1=\"270\" x2=\"520\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"3\"/>\n    <line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"3\"/>\n    <g fill=\"currentColor\" font-size=\"17\">\n    <text x=\"40\" y=\"275\">0</text><text x=\"40\" y=\"218\">5</text><text x=\"33\" y=\"160\">10</text><text x=\"33\" y=\"103\">15</text><text x=\"33\" y=\"46\">20</text>\n    <text x=\"83\" y=\"300\">0–10</text><text x=\"178\" y=\"300\">10–20</text><text x=\"278\" y=\"300\">20–30</text><text x=\"378\" y=\"300\">30–40</text><text x=\"478\" y=\"300\">40–50</text>\n    </g>\n    <rect x=\"75\" y=\"212\" width=\"90\" height=\"58\" fill=\"currentColor\" opacity=\".55\"/>\n    <rect x=\"165\" y=\"155\" width=\"90\" height=\"115\" fill=\"currentColor\" opacity=\".62\"/>\n    <rect x=\"255\" y=\"98\" width=\"90\" height=\"172\" fill=\"currentColor\" opacity=\".72\"/>\n    <rect x=\"345\" y=\"132\" width=\"90\" height=\"138\" fill=\"currentColor\" opacity=\".65\"/>\n    <rect x=\"435\" y=\"212\" width=\"90\" height=\"58\" fill=\"currentColor\" opacity=\".5\"/>\n    <text x=\"295\" y=\"25\" text-anchor=\"middle\" font-size=\"22\">Test Scores</text>\n    </svg>"
        },
        {
          "type": "rule",
          "title": "Bar Graph vs Histogram",
          "text": "Bar graph: separate categories and visible gaps. Histogram: grouped numerical intervals and adjoining bars."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 6 — Interpret a Histogram",
          "question": "Which score interval has the greatest frequency in the displayed histogram?",
          "steps": [
            "Read the heights of the adjoining bars.",
            "Compare the five intervals.",
            "The 20–30 interval has the tallest bar.",
            "Therefore it has the greatest frequency."
          ],
          "answer": "20–30."
        },
        {
          "type": "think",
          "title": "Why Do Histogram Bars Touch?",
          "text": "The intervals represent continuous numerical ranges, so there is no category gap between neighbouring intervals."
        }
      ]
    },
    {
      "title": "🥧 6. Pie Charts",
      "blocks": [
        {
          "type": "paragraph",
          "title": "What Is a Pie Chart?",
          "text": "A pie chart represents parts of a whole using sectors of a circle. The complete circle represents the entire data set, or 100%."
        },
        {
          "type": "rule",
          "title": "Sector Angle Formula",
          "formula": "Sector angle = (frequency ÷ total frequency) × 360°"
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 7 — Find a Sector Angle",
          "question": "In a survey of 40 students, 10 prefer music. Find the angle for the music sector.",
          "steps": [
            "Frequency = 10 and total = 40.",
            "Fraction of students = 10 ÷ 40 = 1/4.",
            "Multiply by 360°.",
            "Angle = 1/4 × 360° = 90°."
          ],
          "answer": "The music sector should have an angle of 90°."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 8 — Convert Percentage to Angle",
          "question": "What central angle represents 25% of a pie chart?",
          "steps": [
            "25% means 25 out of 100.",
            "Sector angle = 25/100 × 360°.",
            "= 90°."
          ],
          "answer": "90°."
        },
        {
          "type": "figure",
          "title": "Pie Chart Representation",
          "svg": "<svg viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Pie chart with school activity preferences\">\n    <circle cx=\"220\" cy=\"165\" r=\"105\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"95\" stroke-dasharray=\"165 495\" stroke-dashoffset=\"0\" opacity=\".78\"/>\n    <circle cx=\"220\" cy=\"165\" r=\"105\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"95\" stroke-dasharray=\"132 528\" stroke-dashoffset=\"-165\" opacity=\".55\"/>\n    <circle cx=\"220\" cy=\"165\" r=\"105\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"95\" stroke-dasharray=\"99 561\" stroke-dashoffset=\"-297\" opacity=\".35\"/>\n    <circle cx=\"220\" cy=\"165\" r=\"105\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"95\" stroke-dasharray=\"99 561\" stroke-dashoffset=\"-396\" opacity=\".22\"/>\n    <g font-size=\"19\" fill=\"currentColor\"><text x=\"365\" y=\"100\">Sports — 33⅓%</text><text x=\"365\" y=\"145\">Music — 26⅔%</text><text x=\"365\" y=\"190\">Reading — 20%</text><text x=\"365\" y=\"235\">Art — 20%</text></g>\n    <text x=\"220\" y=\"28\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">Activity Preferences</text>\n    </svg>"
        },
        {
          "type": "commonMistake",
          "title": "Pie Chart Mistake",
          "mistake": "Forgetting that all sector angles together must total 360°.",
          "correction": "After calculating each angle, add them. The total must be 360°."
        }
      ]
    },
    {
      "title": "🔢 7. Comparing Representations",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Choosing the Right Representation",
          "text": "Different graphs answer different questions. A table is useful for exact values, a bar graph is useful for category comparison, a histogram is useful for grouped numerical data, and a pie chart is useful for showing parts of a whole."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 9 — Choose a Graph",
          "question": "Which representation is suitable for showing how a family's monthly budget is divided among food, transport, education and savings?",
          "steps": [
            "The quantities are parts of one total budget.",
            "A part-to-whole representation is appropriate.",
            "A pie chart can show the relative share of each category."
          ],
          "answer": "Pie chart."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 10 — Choose Between Bar Graph and Histogram",
          "question": "You want to represent the number of students in different score intervals. Which is more suitable?",
          "steps": [
            "The data are numerical and grouped into intervals.",
            "The intervals form continuous ranges.",
            "A histogram is appropriate."
          ],
          "answer": "Histogram."
        },
        {
          "type": "think",
          "title": "Think & Understand",
          "text": "Why would a pie chart be less useful than a bar graph when you need to compare many separate categories precisely? Similar sector sizes can be harder to compare than bar lengths."
        }
      ]
    },
    {
      "title": "🎲 8. Probability and Chance",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Chance Events",
          "text": "Data handling is connected with probability because collected data can describe how often outcomes occur. Probability gives a numerical measure of how likely an event is."
        },
        {
          "type": "definition",
          "title": "Probability",
          "text": "For an experiment with equally likely outcomes, probability of an event is the ratio of favourable outcomes to total possible outcomes."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 11 — Coin",
          "question": "A fair coin is tossed once. What is the probability of getting heads?",
          "steps": [
            "Possible outcomes are Head and Tail.",
            "There is 1 favourable outcome for Head.",
            "There are 2 equally likely outcomes.",
            "Probability = 1/2."
          ],
          "answer": "Probability of Head = 1/2."
        },
        {
          "type": "solvedExample",
          "title": "Solved Example 12 — Die",
          "question": "A fair die is rolled once. What is the probability of getting an even number?",
          "steps": [
            "Possible outcomes: 1, 2, 3, 4, 5, 6.",
            "Even outcomes: 2, 4, 6.",
            "Favourable outcomes = 3; total outcomes = 6.",
            "Probability = 3/6 = 1/2."
          ],
          "answer": "1/2."
        },
        {
          "type": "important",
          "title": "Probability Range",
          "text": "For an event, probability lies from 0 to 1. Probability 0 means impossible and probability 1 means certain."
        }
      ]
    },
    {
      "title": "🧠 9. Think & Understand",
      "blocks": [
        {
          "type": "think",
          "title": "Why?",
          "text": "Why must the total of all pie-chart sector angles be 360°? Because the sectors together form one complete circle."
        },
        {
          "type": "think",
          "title": "How?",
          "text": "How can you check a frequency table? Add all frequencies and compare the result with the total number of observations."
        },
        {
          "type": "think",
          "title": "What If?",
          "text": "What if the scale on a bar graph starts at 5 instead of 0? The visual difference between bars may appear larger than it really is, so the scale must be stated clearly and used carefully."
        },
        {
          "type": "think",
          "title": "Reasoning",
          "text": "Why do histograms use touching bars while bar graphs normally use separated bars? The former represents continuous intervals; the latter represents separate categories."
        },
        {
          "type": "think",
          "title": "HOTS",
          "text": "A pie chart has a sector of 72°. What fraction of the whole does it represent? Explain using the full-circle angle."
        }
      ]
    },
    {
      "title": "⚠️ 10. Common Mistakes",
      "blocks": [
        {
          "type": "commonMistake",
          "title": "Counting Mistake",
          "mistake": "Frequency total does not match the number of observations.",
          "correction": "Recount and verify the total frequency."
        },
        {
          "type": "commonMistake",
          "title": "Graph Scale Mistake",
          "mistake": "Unequal or unclear scale intervals.",
          "correction": "Use equal intervals and label the scale."
        },
        {
          "type": "commonMistake",
          "title": "Bar Graph Mistake",
          "mistake": "Bars touch when the graph represents separate categories.",
          "correction": "Use gaps between distinct categories."
        },
        {
          "type": "commonMistake",
          "title": "Histogram Mistake",
          "mistake": "Adding gaps between continuous class intervals.",
          "correction": "Use adjoining bars for a standard histogram."
        },
        {
          "type": "commonMistake",
          "title": "Pie Chart Mistake",
          "mistake": "Sector angles do not total 360°.",
          "correction": "Check all calculated angles before drawing."
        },
        {
          "type": "commonMistake",
          "title": "Probability Mistake",
          "mistake": "Using the number of favourable outcomes as the probability without dividing by total outcomes.",
          "correction": "For equally likely outcomes, use favourable outcomes ÷ total outcomes."
        }
      ]
    },
    {
      "title": "🎯 11. Exam Zone",
      "blocks": [
        {
          "type": "formula",
          "title": "Important Formulas",
          "formula": "Frequency = number of occurrences\nSector angle = (frequency ÷ total frequency) × 360°\nProbability = favourable outcomes ÷ total equally likely outcomes\nTotal frequency = sum of all frequencies"
        },
        {
          "type": "examTip",
          "title": "Graph Questions",
          "text": "Always include a title, labelled axes, a clear scale and correct units/categories. For pie charts, calculate sector angles carefully and use a protractor accurately."
        },
        {
          "type": "examTip",
          "title": "Interpretation Questions",
          "text": "Do not only read the tallest bar. Check the scale first, then compare values. In grouped data, always identify the interval before stating the frequency."
        }
      ]
    },
    {
      "title": "📝 12. Practice Questions",
      "blocks": [
        {
          "type": "practice",
          "title": "Basic",
          "questions": [
            "Define data and frequency.",
            "What is raw data?",
            "State one difference between a bar graph and a histogram.",
            "What does a complete pie chart represent?",
            "State the probability of an impossible event and a certain event."
          ]
        },
        {
          "type": "practice",
          "title": "Standard",
          "questions": [
            "Prepare a frequency table for a small data set of your choice.",
            "Draw a bar graph for four categories with given frequencies.",
            "Convert 20% of a pie chart into a sector angle.",
            "Find the probability of getting a number greater than 4 on a fair die.",
            "Create grouped frequencies for score intervals 0–10, 10–20 and 20–30."
          ]
        },
        {
          "type": "practice",
          "title": "Application",
          "questions": [
            "A school collects data on students' favourite sports. Decide which graph is most suitable and explain why.",
            "A shop records the number of customers in different age intervals. Which graph should be used?",
            "A family's expenditure is divided into several categories. Which representation is suitable for showing shares?"
          ]
        },
        {
          "type": "practice",
          "title": "Reasoning & HOTS",
          "questions": [
            "Explain why the sum of pie-chart sector angles is 360°.",
            "Why can a misleading graph scale affect interpretation?",
            "Can a histogram be used to represent favourite colours? Explain.",
            "If one sector of a pie chart is 120°, what part of the whole does it represent?",
            "A data set has 30 observations. If four categories have frequencies 6, 8, 10 and 5, identify and correct the problem."
          ]
        }
      ]
    },
    {
      "title": "🏆 13. Challenge Zone",
      "blocks": [
        {
          "type": "challenge",
          "title": "Challenge 1",
          "question": "A survey of 60 students records preferences for four sports. Design a frequency table, choose a suitable graph, and explain why your choice is appropriate."
        },
        {
          "type": "challenge",
          "title": "Challenge 2",
          "question": "A pie chart has sector angles 90°, 120°, 60° and one unknown angle. Find the unknown angle and explain the reasoning."
        },
        {
          "type": "challenge",
          "title": "Challenge 3",
          "question": "A bar graph and a histogram are both drawn for different data sets. Give two clues that allow you to distinguish them."
        },
        {
          "type": "challenge",
          "title": "Challenge 4",
          "question": "Design a grouped frequency table for a realistic set of test scores and explain how it could be represented by a histogram."
        },
        {
          "type": "challenge",
          "title": "Challenge 5 — Concept Mixing",
          "question": "A fair die is rolled 120 times. Explain how experimental frequency data could be represented in a table and graph, and how it can be compared with theoretical probability."
        }
      ]
    },
    {
      "title": "🔄 14. Chapter Revision",
      "blocks": [
        {
          "type": "mindmap",
          "title": "Quick Revision Map",
          "items": [
            "Data → facts/observations",
            "Raw data → original form",
            "Frequency → number of occurrences",
            "Frequency table → organised counts",
            "Bar graph → separate categories",
            "Grouped data → class intervals",
            "Histogram → adjoining interval bars",
            "Pie chart → parts of a whole",
            "Sector angle → frequency ÷ total × 360°",
            "Probability → favourable ÷ total equally likely outcomes",
            "Verification → totals and scales must be checked"
          ]
        },
        {
          "type": "formula",
          "title": "Quick Formula Revision",
          "formula": "Sector angle = (frequency ÷ total) × 360°\nProbability = favourable outcomes ÷ total outcomes"
        },
        {
          "type": "examTip",
          "title": "Quick Revision Points",
          "text": "Check totals, check scales, choose the correct graph, label clearly, and interpret the data only after reading the scale or full-circle relationship."
        }
      ]
    },
    {
      "title": "⭐ 15. Important Points",
      "blocks": [
        {
          "type": "keypoint",
          "title": "Frequency",
          "text": "Frequency counts how many times an observation occurs."
        },
        {
          "type": "keypoint",
          "title": "Bar Graph",
          "text": "Use separate bars for separate categories."
        },
        {
          "type": "keypoint",
          "title": "Histogram",
          "text": "Use adjoining bars for grouped continuous numerical intervals."
        },
        {
          "type": "keypoint",
          "title": "Pie Chart",
          "text": "The complete circle represents the whole data set and totals 360°."
        },
        {
          "type": "keypoint",
          "title": "Probability",
          "text": "For equally likely outcomes, probability is favourable outcomes divided by total outcomes."
        },
        {
          "type": "keypoint",
          "title": "Graph Accuracy",
          "text": "A graph is meaningful only when its scale, labels and data are correct."
        }
      ]
    },
    {
      "title": "🔑 16. Key Terms",
      "blocks": [
        {
          "type": "definition",
          "title": "Data",
          "text": "Collected facts, numbers or observations."
        },
        {
          "type": "definition",
          "title": "Raw Data",
          "text": "Data in its original unorganised form."
        },
        {
          "type": "definition",
          "title": "Frequency",
          "text": "Number of times an observation occurs."
        },
        {
          "type": "definition",
          "title": "Class Interval",
          "text": "A range used to group numerical observations."
        },
        {
          "type": "definition",
          "title": "Bar Graph",
          "text": "A graph using separate bars to compare categories."
        },
        {
          "type": "definition",
          "title": "Histogram",
          "text": "A graph using adjoining bars for grouped numerical intervals."
        },
        {
          "type": "definition",
          "title": "Pie Chart",
          "text": "A circular representation in which sectors show parts of a whole."
        },
        {
          "type": "definition",
          "title": "Sector",
          "text": "The region of a circle bounded by two radii and an arc."
        },
        {
          "type": "definition",
          "title": "Probability",
          "text": "A measure of how likely an event is, from 0 to 1."
        }
      ]
    },
    {
      "title": "📖 17. Chapter Summary",
      "blocks": [
        {
          "type": "summary",
          "title": "Complete Chapter Summary",
          "text": "Data handling is about collecting, organising, representing and interpreting information. Raw data can be arranged into frequency tables so repeated observations become easy to compare. Bar graphs represent separate categories using separated bars, while histograms represent grouped numerical intervals using adjoining bars. Pie charts show parts of a whole, with the complete circle representing 360° and sector angles calculated from the fraction of the total. Data interpretation requires careful attention to scale, labels and totals. Probability connects data with chance and, for equally likely outcomes, is calculated as favourable outcomes divided by total outcomes. Accurate representation and careful interpretation are the central skills of the chapter."
        }
      ]
    }
  ],
  "importantPoints": [
    "Total frequency must equal total observations.",
    "Bar graphs compare separate categories with separated bars.",
    "Histograms represent grouped continuous intervals with adjoining bars.",
    "Pie-chart angles together make 360°.",
    "Sector angle = (frequency ÷ total frequency) × 360°.",
    "For equally likely outcomes, probability = favourable outcomes ÷ total outcomes.",
    "Always check graph scales and labels."
  ],
  "keyTerms": [
    {
      "term": "Data",
      "definition": "Collected facts or observations."
    },
    {
      "term": "Frequency",
      "definition": "Number of times an observation occurs."
    },
    {
      "term": "Class Interval",
      "definition": "A range used to group numerical observations."
    },
    {
      "term": "Bar Graph",
      "definition": "A graph using separate bars for categories."
    },
    {
      "term": "Histogram",
      "definition": "A graph using adjoining bars for grouped numerical intervals."
    },
    {
      "term": "Pie Chart",
      "definition": "A circular graph showing parts of a whole."
    },
    {
      "term": "Probability",
      "definition": "A measure of how likely an event is."
    }
  ]
};
