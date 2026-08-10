/*==================================================
  CONCEPT QUIZZER
  CLASS 6 • MATHEMATICS • CHAPTER 4
  Package 13.1.4 — Data Handling and Presentation
  File: data-handling-and-presentation.js
==================================================*/

"use strict";

const ChapterData = {
  id: "class6-mathematics-data-handling-and-presentation",
  class: "6",
  subject: "Mathematics",
  chapterNumber: 4,
  title: "Data Handling and Presentation",

  description:
    "Class 6 Mathematics Chapter 4 – Data Handling and Presentation: collect, organise, represent, read and interpret data using tables, tally marks, pictographs and bar graphs.",

  estimatedReadingTime: "35–45 minutes",
  difficulty: "Intermediate",

  summary:
    "Data handling is the process of collecting, organising, representing and interpreting information. In this chapter, students learn how to collect simple data, record observations using tally marks, organise information in tables, represent data with pictographs and bar graphs, choose suitable scales, and answer questions by reading a data display.",

  sections: [
    {
      id: "what-is-data",
      title: "What Is Data?",
      blocks: [
        {
          type: "paragraph",
          text:
            "Data means information collected for a purpose. It may consist of numbers, categories, measurements or observations. For example, the favourite fruits of students, the number of books read in a month, or the heights of plants can all be recorded as data."
        },
        {
          type: "definition",
          title: "Data",
          text:
            "Data is a collection of facts, observations or information gathered about people, objects, events or measurements."
        },
        {
          type: "example",
          title: "Everyday Example",
          text:
            "Suppose a teacher asks 10 students which sport they like most. Their responses—such as cricket, football or badminton—form a data set that can be organised and represented."
        },
        {
          type: "application",
          title: "Why Do We Handle Data?",
          text:
            "Raw information can be difficult to read when there are many observations. Organising it into tables or graphs helps us compare values, find totals and notice patterns quickly."
        }
      ]
    },

    {
      id: "collecting-data",
      title: "Collecting Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "Before representing data, we first need to collect it carefully. A good question should have a clear purpose, and observations should be recorded accurately without accidentally changing the information."
        },
        {
          type: "definition",
          title: "Observation",
          text:
            "An observation is a piece of information noticed, measured or recorded during data collection."
        },
        {
          type: "example",
          title: "Classroom Survey",
          text:
            "To find the most common mode of transport used by students, ask each student the same question and record one response for each student."
        },
        {
          type: "warning",
          title: "Common Mistake",
          text:
            "Do not count an observation twice and do not leave an observation out. The final table is only useful when the original data has been recorded correctly."
        }
      ]
    },

    {
      id: "tally-marks",
      title: "Tally Marks",
      blocks: [
        {
          type: "paragraph",
          text:
            "Tally marks provide a quick way to count repeated observations. Four marks are written separately and the fifth mark crosses the first four, forming a group of five."
        },
        {
          type: "definition",
          title: "Tally Group",
          text:
            "A complete group of five tally marks represents 5 observations. Additional marks represent the remaining observations."
        },
        {
          type: "example",
          title: "Counting 13",
          text:
            "Thirteen observations can be recorded as two groups of five and three extra marks. Numerically, that is 5 + 5 + 3 = 13."
        },
        {
          type: "application",
          title: "Why Tally Marks Help",
          text:
            "Tally marks make repeated counting faster and reduce the chance of losing track while recording many observations."
        },
        {
          type: "examTip",
          title: "Exam Tip",
          text:
            "When reading a tally table, count complete groups of five first and then add the remaining marks."
        }
      ]
    },

    {
      id: "frequency-and-tables",
      title: "Frequency Tables",
      blocks: [
        {
          type: "paragraph",
          text:
            "Once observations are grouped into categories, we can make a frequency table. The frequency tells us how many times a category or value occurs."
        },
        {
          type: "definition",
          title: "Frequency",
          text:
            "Frequency is the number of times a particular value or category occurs in a data set."
        },
        {
          type: "example",
          title: "Simple Frequency Table",
          text:
            "If the recorded favourite colours are red, blue, red, green, blue, red, then red has frequency 3, blue has frequency 2 and green has frequency 1."
        },
        {
          type: "application",
          title: "Checking a Table",
          text:
            "For a complete frequency table, the sum of all frequencies should equal the total number of observations collected."
        }
      ]
    },

    {
      id: "pictographs",
      title: "Pictographs",
      blocks: [
        {
          type: "paragraph",
          text:
            "A pictograph represents data using pictures or symbols. A key tells us how many observations each picture represents."
        },
        {
          type: "definition",
          title: "Key",
          text:
            "The key or scale of a pictograph tells us the value represented by one picture or symbol."
        },
        {
          type: "example",
          title: "Reading a Key",
          text:
            "If one book symbol represents 4 books and a category has 5 symbols, the category represents 5 × 4 = 20 books."
        },
        {
          type: "warning",
          title: "Never Ignore the Key",
          text:
            "A symbol does not automatically mean one observation. Always read the key before calculating a value from a pictograph."
        },
        {
          type: "tip",
          title: "Quick Tip",
          text:
            "First find the number of symbols, then multiply by the value of one symbol."
        }
      ]
    },

    {
      id: "bar-graphs",
      title: "Bar Graphs",
      blocks: [
        {
          type: "paragraph",
          text:
            "A bar graph represents data using rectangular bars. The height or length of each bar shows the frequency or value of a category. Categories are usually written along one axis and numerical values along the other."
        },
        {
          type: "definition",
          title: "Bar Graph",
          text:
            "A bar graph is a data display in which separate categories are represented by rectangular bars whose lengths or heights correspond to their values."
        },
        {
          type: "example",
          title: "Comparing Categories",
          text:
            "If a graph shows 12 students choosing cricket and 8 choosing football, the cricket bar is higher than the football bar, so cricket is the more popular choice in that data set."
        },
        {
          type: "application",
          title: "Reading a Bar Graph",
          text:
            "Read the category first, then read the scale carefully and match the top of the bar with the numerical value."
        }
      ]
    },

    {
      id: "scale",
      title: "Choosing and Reading a Scale",
      blocks: [
        {
          type: "paragraph",
          text:
            "A graph may use a scale in which one division represents 1, 2, 5, 10 or another suitable amount. The scale should be clear and consistent."
        },
        {
          type: "definition",
          title: "Scale",
          text:
            "A scale tells us how numerical values are represented by equal divisions on a graph."
        },
        {
          type: "example",
          title: "Scale of 5",
          text:
            "If every equal division on the vertical axis represents 5 students, then a bar reaching the fourth division represents 20 students."
        },
        {
          type: "warning",
          title: "Common Mistake",
          text:
            "Do not assume that every grid line represents 1. Check the labelled scale and calculate the value of each division before reading the bars."
        }
      ]
    },

    {
      id: "interpreting-data",
      title: "Interpreting Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "Data representation is useful because it allows us to answer questions. We can identify the greatest and least values, compare categories, find totals, calculate differences and make simple conclusions."
        },
        {
          type: "example",
          title: "Difference",
          text:
            "If one category has 24 observations and another has 17, the difference is 24 − 17 = 7."
        },
        {
          type: "application",
          title: "Ask Before You Answer",
          text:
            "Identify exactly what the question asks: greatest, least, total, difference or a particular category. Then read the correct values from the table or graph."
        },
        {
          type: "examTip",
          title: "Exam Tip",
          text:
            "Do not answer from the visual height of a bar alone. Use the numerical scale to obtain the actual value."
        }
      ]
    },

    {
      id: "data-in-real-life",
      title: "Data in Real Life",
      blocks: [
        {
          type: "paragraph",
          text:
            "Data is used in schools, hospitals, sports, weather reports, transport planning, businesses and scientific studies. Tables and graphs help people communicate information clearly."
        },
        {
          type: "example",
          title: "Sports",
          text:
            "A team can record runs scored by players and use a graph to compare performances."
        },
        {
          type: "example",
          title: "Weather",
          text:
            "Temperatures recorded over several days can be organised in a table and represented graphically to make changes easier to see."
        },
        {
          type: "application",
          title: "Responsible Use of Data",
          text:
            "A graph should represent the collected information honestly. A misleading scale or missing category can give a false impression."
        }
      ]
    },

    {
      id: "chapter-summary",
      title: "Chapter Summary",
      blocks: [
        {
          type: "summary",
          text:
            "Data handling involves collecting, organising, representing and interpreting information. Tally marks help count observations, frequency tables organise repeated values, pictographs use symbols with a key, and bar graphs use bars with a clear scale. Careful reading of the scale allows us to compare values, find totals and differences, and draw sensible conclusions."
        },
        {
          type: "important",
          title: "Key Takeaway",
          text:
            "Good data handling means recording information accurately, choosing a suitable representation, reading the key or scale correctly, and explaining conclusions from the data."
        }
      ]
    }
  ],

  importantPoints: [
    "Data is collected information or observations.",
    "Accurate data collection is the first step in data handling.",
    "A complete group of five tally marks represents 5 observations.",
    "Frequency tells how many times a value or category occurs.",
    "The total of all frequencies should match the number of observations.",
    "A pictograph must be read using its key or scale.",
    "A bar graph uses separate bars to represent different categories.",
    "The scale of a graph tells the value represented by each division.",
    "Always read the numerical scale before interpreting a bar.",
    "Graphs and tables help compare values and answer questions efficiently.",
    "A difference is found by subtracting the smaller value from the larger value.",
    "Data should be represented honestly and clearly."
  ],

  keyTerms: [
    "Data",
    "Observation",
    "Tally Marks",
    "Frequency",
    "Frequency Table",
    "Pictograph",
    "Key",
    "Bar Graph",
    "Scale",
    "Category",
    "Interpretation",
    "Data Set"
  ],

  revisionQuestions: [
    { question: "What is data? Give one everyday example." },
    { question: "Why should data be collected carefully?" },
    { question: "How do tally marks help in counting observations?" },
    { question: "What is frequency?" },
    { question: "Why should the sum of frequencies equal the total observations?" },
    { question: "What is the purpose of the key in a pictograph?" },
    { question: "What is a bar graph?" },
    { question: "What does the scale of a graph tell us?" },
    { question: "How can a bar graph help us compare categories?" },
    { question: "What should you check before drawing a conclusion from a graph?" }
  ],

  flashcards: [
    {
      front: "What is data?",
      back: "A collection of facts, observations or information gathered for a purpose."
    },
    {
      front: "What is frequency?",
      back: "The number of times a value or category occurs."
    },
    {
      front: "What does one complete tally group represent?",
      back: "Five observations."
    },
    {
      front: "What is a pictograph?",
      back: "A representation of data using pictures or symbols with a key."
    },
    {
      front: "Why is a key important in a pictograph?",
      back: "It tells the value represented by one symbol."
    },
    {
      front: "What is a bar graph?",
      back: "A graph using separate rectangular bars whose lengths or heights show values."
    },
    {
      front: "What is a scale?",
      back: "A rule showing how numerical values correspond to equal divisions on a graph."
    },
    {
      front: "What is frequency interpretation?",
      back: "Reading how often each category or value occurs and using it to compare data."
    }
  ],

  mcqs: [
    {
      question: "What is data?",
      options: [
        "A random drawing",
        "Collected information or observations",
        "Only a bar graph",
        "Only numbers greater than 10"
      ],
      answer: 1
    },
    {
      question: "One complete group of tally marks represents:",
      options: ["2", "3", "4", "5"],
      answer: 3
    },
    {
      question: "What does frequency tell us?",
      options: [
        "The colour of a graph",
        "How many times a value or category occurs",
        "The name of a student",
        "The size of a page"
      ],
      answer: 1
    },
    {
      question: "What must you check before reading a pictograph?",
      options: ["The key", "The page number", "The title font", "The border colour"],
      answer: 0
    },
    {
      question: "Which display uses rectangular bars for separate categories?",
      options: ["Pictograph", "Bar graph", "Sentence", "Map"],
      answer: 1
    },
    {
      question: "If one symbol represents 4 books, 6 symbols represent:",
      options: ["10", "20", "24", "28"],
      answer: 2
    },
    {
      question: "If the frequencies are 4, 7 and 9, the total number of observations is:",
      options: ["16", "18", "20", "21"],
      answer: 2
    },
    {
      question: "If each division of a graph represents 5 students, the fourth division represents:",
      options: ["9", "15", "20", "25"],
      answer: 2
    }
  ]
};
