window.ChapterData = {
  "title": "Advance Python / Data Science",
  "description": "Class 9 Artificial Intelligence — detailed continuous-flow study notes for Advance Python / Data Science.",
  "sections": [
    {
      "type": "heading",
      "title": "Advance Python and Data Science",
      "text": "Programming gives an AI learner a practical way to express logic, manipulate data and experiment with computational ideas."
    },
    {
      "type": "paragraph",
      "text": "Python is widely used in education, data analysis and AI because its syntax is relatively readable and its ecosystem contains tools for working with data. At this level, the goal is not to memorise a huge library of commands. The goal is to understand how a program receives input, stores information, processes it, makes decisions and produces an output."
    },
    {
      "type": "figure",
      "title": "Python programming language",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Python%20logo%20and%20wordmark.svg",
      "caption": "The Python programming language logo used to introduce programming tools.",
      "alt": "The Python programming language logo used to introduce programming tools.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "concept",
      "title": "From instructions to programs",
      "text": "A program is a set of instructions that a computer executes according to the rules of a programming language. A useful program has a clear input, a defined process and an expected output. Variables provide names for values, operators perform calculations or comparisons, conditions choose between alternatives, and loops repeat operations. Functions help organise reusable logic."
    },
    {
      "type": "comparison",
      "title": "Core Python building blocks",
      "rows": [
        [
          "Construct",
          "Purpose",
          "Example idea"
        ],
        [
          "Variable",
          "Stores a value under a name",
          "score = 85"
        ],
        [
          "Expression",
          "Combines values and operators",
          "total + tax"
        ],
        [
          "Condition",
          "Chooses a path based on a test",
          "if score >= 50"
        ],
        [
          "Loop",
          "Repeats a block",
          "for item in items"
        ],
        [
          "Function",
          "Packages reusable behaviour",
          "def average(values):"
        ],
        [
          "List",
          "Stores an ordered collection",
          "marks = [72, 81, 65]"
        ],
        [
          "Dictionary",
          "Stores key-value pairs",
          "student = {'name':'Asha'}"
        ]
      ]
    },
    {
      "type": "code",
      "title": "Variables and expressions",
      "code": "marks = [72, 81, 65, 90]\\ntotal = sum(marks)\\ncount = len(marks)\\naverage = total / count\\nprint(average)",
      "explanation": "The list stores several values. sum() adds them, len() counts them, division calculates the average, and print() displays the result."
    },
    {
      "type": "paragraph",
      "text": "Lists are especially useful when a program needs to process many related values. A list can contain numbers, text or other objects. Indexing starts at zero, so the first element is at index 0. Slicing can select a range. A loop can process each item without writing the same statement repeatedly."
    },
    {
      "type": "code",
      "title": "Processing a list",
      "code": "temperatures = [31, 33, 30, 29, 35]\\nfor t in temperatures:\\n    if t >= 33:\\n        print('High:', t)\\n    else:\\n        print('Normal:', t)",
      "explanation": "The loop visits each temperature and the condition produces a different message depending on the value."
    },
    {
      "type": "comparison",
      "title": "for loop and while loop",
      "rows": [
        [
          "Feature",
          "for loop",
          "while loop"
        ],
        [
          "Best suited for",
          "Known sequence or collection",
          "Repeating while a condition remains true"
        ],
        [
          "Common example",
          "Visit every item in a list",
          "Repeat until a value reaches a limit"
        ],
        [
          "Main risk",
          "Usually easy to bound by a collection",
          "Can become infinite if the condition never changes"
        ],
        [
          "Typical pattern",
          "for item in items",
          "while condition:"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Python logo",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Python%20logo%20%28icon%20only%29.svg",
      "caption": "A Python logo used as a visual reference for the programming environment.",
      "alt": "A Python logo used as a visual reference for the programming environment.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "Functions and reusable logic"
    },
    {
      "type": "paragraph",
      "text": "A function is a named block of code that can receive inputs and return an output. Functions make a program easier to read, test and reuse. In AI and data work, small functions are useful for tasks such as cleaning a value, converting a unit, calculating a score or preparing a row of data."
    },
    {
      "type": "code",
      "title": "A simple function",
      "code": "def percentage(part, whole):\\n    if whole == 0:\\n        return 0\\n    return (part / whole) * 100\\n\\nprint(percentage(45, 60))",
      "explanation": "The function accepts two values, checks for division by zero and returns a percentage. Returning a value lets other parts of a program reuse the calculation."
    },
    {
      "type": "warning",
      "title": "Readability matters",
      "text": "A program can be technically correct and still be difficult to maintain. Use meaningful variable names, consistent indentation and small functions. Comments should explain useful reasoning rather than repeat obvious syntax."
    },
    {
      "type": "heading",
      "title": "Data Science: turning data into evidence"
    },
    {
      "type": "paragraph",
      "text": "Data Science combines data collection, organisation, analysis, visualisation and interpretation to answer questions using evidence. It is closely connected with AI because AI projects often depend on data. However, data analysis and AI modelling are not identical. A data scientist may discover a trend without building a predictive AI model."
    },
    {
      "type": "figure",
      "title": "Data visualisation",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Scatterplot%20with%20199%20images%20of%20data%20visualization.svg",
      "caption": "A real visualisation related to the use of graphs and patterns in data.",
      "alt": "A real visualisation related to the use of graphs and patterns in data.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "concept",
      "title": "A data-science workflow",
      "text": "A practical workflow begins with a question. The analyst identifies relevant data, obtains it, checks its quality, cleans or transforms it, explores it with summaries and graphs, interprets patterns, communicates findings and decides whether a predictive model is actually needed."
    },
    {
      "type": "process",
      "title": "Data science workflow",
      "steps": [
        "Ask a clear question.",
        "Identify what data can answer the question.",
        "Acquire and organise the data.",
        "Inspect and clean the data.",
        "Explore patterns with summaries and visualisations.",
        "Interpret the results in context.",
        "Communicate evidence, unknown conditions and limitations.",
        "Build a model only when prediction or classification is actually required."
      ]
    },
    {
      "type": "comparison",
      "title": "Data analysis and AI modelling",
      "rows": [
        [
          "Aspect",
          "Data analysis",
          "AI modelling"
        ],
        [
          "Main goal",
          "Understand, summarise or explain data",
          "Generate predictions, classifications or decisions"
        ],
        [
          "Output",
          "Tables, charts, findings or explanations",
          "Model outputs such as labels or predictions"
        ],
        [
          "Human interpretation",
          "Central to drawing conclusions",
          "Still essential for validation and responsible use"
        ],
        [
          "Need for training data",
          "Not always",
          "Common for learning-based approaches"
        ],
        [
          "Example",
          "Find average rainfall by month",
          "Predict whether tomorrow will be unusually wet"
        ]
      ]
    },
    {
      "type": "heading",
      "title": "Working with tabular data"
    },
    {
      "type": "paragraph",
      "text": "A table contains rows and columns. A row usually represents one observation or record, while a column represents a variable or feature. For example, a school dataset could have one row per student and columns for attendance, practice time and score. Before analysis, each column must have a clear meaning and an appropriate data type."
    },
    {
      "type": "comparison",
      "title": "Common data types",
      "rows": [
        [
          "Type",
          "Example",
          "Typical operation"
        ],
        [
          "Integer",
          "42",
          "Counting and arithmetic"
        ],
        [
          "Float",
          "72.5",
          "Measurements and averages"
        ],
        [
          "String",
          "'Science'",
          "Text processing and categories"
        ],
        [
          "Boolean",
          "True or False",
          "Conditions and flags"
        ],
        [
          "List",
          "[12, 18, 20]",
          "Ordered collection"
        ],
        [
          "Dictionary",
          "{'city':'Mau','temp':31}",
          "Key-value representation"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Pandas logo",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pandas%20logo.svg",
      "caption": "The pandas library logo, associated with tabular data handling in Python.",
      "alt": "The pandas library logo, associated with tabular data handling in Python.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "paragraph",
      "text": "Libraries extend Python with specialised functionality. For data work, a common tool is pandas, which provides structures and operations for tabular data. A DataFrame can be thought of as a programmable table with named columns and rows. Other tools can help with numerical computation and visualisation. Students should understand the purpose of a library before memorising its syntax."
    },
    {
      "type": "code",
      "title": "Reading and inspecting a CSV file",
      "code": "import pandas as pd\\n\\ndata = pd.read_csv('students.csv')\\nprint(data.head())\\nprint(data.columns)\\nprint(data.isna().sum())",
      "explanation": "read_csv loads a comma-separated file into a DataFrame. head() shows the first records, columns lists the column names, and isna().sum() counts missing values in each column."
    },
    {
      "type": "comparison",
      "title": "Useful DataFrame operations",
      "rows": [
        [
          "Operation",
          "Purpose",
          "Example"
        ],
        [
          "head()",
          "View first records",
          "data.head()"
        ],
        [
          "tail()",
          "View last records",
          "data.tail()"
        ],
        [
          "shape",
          "Get rows and columns",
          "data.shape"
        ],
        [
          "columns",
          "Inspect column names",
          "data.columns"
        ],
        [
          "describe()",
          "Numerical summary",
          "data.describe()"
        ],
        [
          "isna()",
          "Identify missing values",
          "data.isna()"
        ],
        [
          "dropna()",
          "Remove selected missing rows",
          "data.dropna()"
        ]
      ]
    },
    {
      "type": "heading",
      "title": "Cleaning and preparing data"
    },
    {
      "type": "paragraph",
      "text": "Real data rarely arrives perfectly prepared. A dataset can contain missing entries, duplicated rows, inconsistent spellings, impossible values or mixed formats. Cleaning means identifying and handling these issues in a way that is appropriate for the problem. Removing every incomplete row is not always correct; sometimes a missing value should be filled using a justified method, and sometimes the record should be excluded."
    },
    {
      "type": "comparison",
      "title": "Common data-quality problems",
      "rows": [
        [
          "Problem",
          "Example",
          "Possible response"
        ],
        [
          "Missing value",
          "Age is blank",
          "Investigate why it is missing and choose an appropriate treatment"
        ],
        [
          "Duplicate",
          "Same transaction appears twice",
          "Check identifiers and remove true duplicates"
        ],
        [
          "Inconsistent category",
          "'Delhi' and 'delhi'",
          "Standardise representation"
        ],
        [
          "Impossible value",
          "Age = -5",
          "Investigate source and correct or exclude if justified"
        ],
        [
          "Outlier",
          "One value far outside the normal range",
          "Inspect context before deciding whether it is an error"
        ],
        [
          "Wrong type",
          "Numbers stored as text",
          "Convert after checking the contents"
        ]
      ]
    },
    {
      "type": "heading",
      "title": "Visualisation and interpretation"
    },
    {
      "type": "paragraph",
      "text": "Charts are not decorations. A good chart answers a visual question. A bar chart is useful for comparing categories, a line chart for ordered change such as time, a histogram for distribution and a scatter plot for relationships between numerical variables. The chart must have a clear title, meaningful labels and an appropriate scale."
    },
    {
      "type": "comparison",
      "title": "Choosing a chart",
      "rows": [
        [
          "Question",
          "Useful chart",
          "Reason"
        ],
        [
          "Which category is largest?",
          "Bar chart",
          "Makes category lengths easy to compare"
        ],
        [
          "How did a value change each day?",
          "Line chart",
          "Shows direction and change across an ordered sequence"
        ],
        [
          "How are values distributed?",
          "Histogram",
          "Shows how observations fall into ranges"
        ],
        [
          "Are two numerical variables related?",
          "Scatter plot",
          "Shows paired values and possible relationships"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Mini data-science investigation",
      "text": "Create a small dataset containing daily study time and test score for at least ten observations. Use a spreadsheet or Python to calculate an average, create a suitable visualisation and write three observations. Remember that correlation in a small dataset does not prove that one variable causes the other.",
      "steps": [
        "Define the question.",
        "Create the data table.",
        "Check for missing or impossible values.",
        "Calculate a summary statistic.",
        "Create a graph.",
        "Write observations and one limitation."
      ]
    },
    {
      "type": "question",
      "title": "Think and analyse",
      "question": "A dataset shows that students who carry umbrellas often have lower outdoor activity scores. Does carrying an umbrella cause lower activity?",
      "answer": "Not necessarily. Both may be influenced by rainy weather. The observed relationship is not enough to establish causation. Data interpretation requires context and consideration of other variables."
    },
    {
      "type": "warning",
      "title": "Do not confuse correlation with causation",
      "text": "Two variables can change together because one influences the other, because a third factor influences both, or simply because of chance. A chart can reveal a relationship worth investigating, but it does not automatically prove cause and effect."
    },
    {
      "type": "heading",
      "title": "Python for AI experimentation"
    },
    {
      "type": "paragraph",
      "text": "Python becomes particularly useful in AI when programming, data handling and experimentation are combined. A small experiment can load data, select features, calculate statistics, visualise a pattern and compare a simple rule with a learned model. The student should be able to explain what each step does rather than treating the code as a magic recipe."
    },
    {
      "type": "code",
      "title": "Simple classification rule",
      "code": "temperature = 35\\n\\nif temperature >= 34:\\n    label = 'hot'\\nelse:\\n    label = 'moderate'\\n\\nprint(label)",
      "explanation": "This is a rule-based classifier. It does not learn from data; the threshold is explicitly chosen by the programmer."
    },
    {
      "type": "comparison",
      "title": "Rule-based classification and learned classification",
      "rows": [
        [
          "Aspect",
          "Rule-based",
          "Learned model"
        ],
        [
          "Decision source",
          "Written condition",
          "Patterns learned from examples"
        ],
        [
          "Change in behaviour",
          "Developer changes the rule",
          "Training process can produce a new model"
        ],
        [
          "Interpretability",
          "Usually easy to explain",
          "Depends on model and representation"
        ],
        [
          "Data requirement",
          "May need little or no training data",
          "Needs suitable training examples"
        ],
        [
          "Risk",
          "Rules may be too rigid",
          "Model can learn unwanted patterns from poor data"
        ]
      ]
    },
    {
      "type": "practice",
      "title": "Practice questions",
      "questions": [
        {
          "question": "What is a variable in Python?",
          "answer": "A named reference used to store a value."
        },
        {
          "question": "What is a list?",
          "answer": "An ordered collection that can contain multiple values."
        },
        {
          "question": "Why are loops useful?",
          "answer": "They allow a block of instructions to be repeated efficiently."
        },
        {
          "question": "What is a function?",
          "answer": "A reusable block of code that can accept inputs and produce an output."
        },
        {
          "question": "Why is data cleaning needed?",
          "answer": "Real datasets can contain missing, duplicated, inconsistent or invalid values."
        },
        {
          "question": "What is a DataFrame?",
          "answer": "A tabular data structure commonly used by pandas, with rows and named columns."
        },
        {
          "question": "Why use a bar chart?",
          "answer": "It is useful for comparing values across categories."
        },
        {
          "question": "What does correlation mean?",
          "answer": "It describes a statistical relationship or association between variables; it does not by itself prove causation."
        },
        {
          "question": "Why should a model not be chosen before understanding the problem?",
          "answer": "The model should match the objective, data type and constraints of the task."
        },
        {
          "question": "Give one reason to use a function in an AI program.",
          "answer": "Functions make repeated logic reusable and easier to test or maintain."
        },
        {
          "question": "What does isna().sum() help identify?",
          "answer": "It counts missing values in each column of a pandas DataFrame."
        },
        {
          "question": "Why should outliers be investigated before removal?",
          "answer": "An unusual value may be a real observation rather than an error."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Python and data quick check",
      "questions": [
        {
          "question": "Which construct repeats over a collection?",
          "options": [
            "if",
            "for",
            "def",
            "return"
          ],
          "answer": "B",
          "explanation": "A for loop can iterate through the items of a collection."
        },
        {
          "question": "Which structure stores an ordered group of values?",
          "options": [
            "list",
            "boolean",
            "float",
            "string"
          ],
          "answer": "A",
          "explanation": "A list stores an ordered collection."
        },
        {
          "question": "Which library is commonly used for tabular data?",
          "options": [
            "pandas",
            "random",
            "turtle",
            "math"
          ],
          "answer": "A",
          "explanation": "pandas provides DataFrame and related data operations."
        },
        {
          "question": "Which chart is usually suitable for change over time?",
          "options": [
            "Line chart",
            "Pie chart",
            "Single icon",
            "Flowchart"
          ],
          "answer": "A",
          "explanation": "Line charts show ordered change well."
        },
        {
          "question": "Which statement about correlation is correct?",
          "options": [
            "It always proves causation",
            "It can indicate association but does not prove causation",
            "It means data is correct",
            "It removes missing values"
          ],
          "answer": "B",
          "explanation": "Association alone does not establish cause and effect."
        }
      ]
    },
    {
      "type": "heading",
      "title": "Chapter summary",
      "text": "Python provides a practical way to express computational logic through variables, conditions, loops, functions and data structures. Data Science uses a broader workflow of asking questions, obtaining and cleaning data, exploring patterns, visualising evidence and communicating findings. Libraries such as pandas support tabular data work. Good analysis depends on data quality and careful interpretation, especially when distinguishing association from causation."
    },
    {
      "type": "heading",
      "title": "Extended study notes",
      "text": "The following connected notes reinforce the chapter through examples, practical reasoning and exam-oriented applications without repeating earlier explanations."
    },
    {
      "type": "concept",
      "title": "Variable: deeper understanding",
      "text": "In advance python / data science, the idea of variable becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Variable: choosing the right approach",
      "rows": [
        [
          "Question",
          "Good reasoning",
          "Weak reasoning"
        ],
        [
          "What is the input?",
          "Identify the actual information available",
          "Assume every problem has the same input"
        ],
        [
          "What is the output?",
          "Define a measurable result",
          "Use vague words such as 'smart'"
        ],
        [
          "How is it tested?",
          "Use examples appropriate to the intended use",
          "Test only the easiest cases"
        ],
        [
          "What can go wrong?",
          "Identify realistic errors and limitations",
          "Assume technology is perfect"
        ],
        [
          "What is the human role?",
          "State where judgement or review is needed",
          "Treat the system as an unquestionable authority"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Applied activity: Variable",
      "text": "Create a small classroom example related to variable. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
      "steps": [
        "Write the problem in one precise sentence.",
        "List the input information.",
        "Describe the expected output.",
        "Choose a simple method.",
        "Define one success criterion.",
        "Record one limitation or risk."
      ]
    },
    {
      "type": "concept",
      "title": "Function: deeper understanding",
      "text": "In advance python / data science, the idea of function becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Function: choosing the right approach",
      "rows": [
        [
          "Question",
          "Good reasoning",
          "Weak reasoning"
        ],
        [
          "What is the input?",
          "Identify the actual information available",
          "Assume every problem has the same input"
        ],
        [
          "What is the output?",
          "Define a measurable result",
          "Use vague words such as 'smart'"
        ],
        [
          "How is it tested?",
          "Use examples appropriate to the intended use",
          "Test only the easiest cases"
        ],
        [
          "What can go wrong?",
          "Identify realistic errors and limitations",
          "Assume technology is perfect"
        ],
        [
          "What is the human role?",
          "State where judgement or review is needed",
          "Treat the system as an unquestionable authority"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Applied activity: Function",
      "text": "Create a small classroom example related to function. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
      "steps": [
        "Write the problem in one precise sentence.",
        "List the input information.",
        "Describe the expected output.",
        "Choose a simple method.",
        "Define one success criterion.",
        "Record one limitation or risk."
      ]
    },
    {
      "type": "concept",
      "title": "List: deeper understanding",
      "text": "In advance python / data science, the idea of list becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "List: choosing the right approach",
      "rows": [
        [
          "Question",
          "Good reasoning",
          "Weak reasoning"
        ],
        [
          "What is the input?",
          "Identify the actual information available",
          "Assume every problem has the same input"
        ],
        [
          "What is the output?",
          "Define a measurable result",
          "Use vague words such as 'smart'"
        ],
        [
          "How is it tested?",
          "Use examples appropriate to the intended use",
          "Test only the easiest cases"
        ],
        [
          "What can go wrong?",
          "Identify realistic errors and limitations",
          "Assume technology is perfect"
        ],
        [
          "What is the human role?",
          "State where judgement or review is needed",
          "Treat the system as an unquestionable authority"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Applied activity: List",
      "text": "Create a small classroom example related to list. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
      "steps": [
        "Write the problem in one precise sentence.",
        "List the input information.",
        "Describe the expected output.",
        "Choose a simple method.",
        "Define one success criterion.",
        "Record one limitation or risk."
      ]
    },
    {
      "type": "concept",
      "title": "DataFrame: deeper understanding",
      "text": "In advance python / data science, the idea of dataframe becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "DataFrame: choosing the right approach",
      "rows": [
        [
          "Question",
          "Good reasoning",
          "Weak reasoning"
        ],
        [
          "What is the input?",
          "Identify the actual information available",
          "Assume every problem has the same input"
        ],
        [
          "What is the output?",
          "Define a measurable result",
          "Use vague words such as 'smart'"
        ],
        [
          "How is it tested?",
          "Use examples appropriate to the intended use",
          "Test only the easiest cases"
        ],
        [
          "What can go wrong?",
          "Identify realistic errors and limitations",
          "Assume technology is perfect"
        ],
        [
          "What is the human role?",
          "State where judgement or review is needed",
          "Treat the system as an unquestionable authority"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Applied activity: DataFrame",
      "text": "Create a small classroom example related to dataframe. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
      "steps": [
        "Write the problem in one precise sentence.",
        "List the input information.",
        "Describe the expected output.",
        "Choose a simple method.",
        "Define one success criterion.",
        "Record one limitation or risk."
      ]
    },
    {
      "type": "concept",
      "title": "Data Science: deeper understanding",
      "text": "In advance python / data science, the idea of data science becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Data Science: choosing the right approach",
      "rows": [
        [
          "Question",
          "Good reasoning",
          "Weak reasoning"
        ],
        [
          "What is the input?",
          "Identify the actual information available",
          "Assume every problem has the same input"
        ],
        [
          "What is the output?",
          "Define a measurable result",
          "Use vague words such as 'smart'"
        ],
        [
          "How is it tested?",
          "Use examples appropriate to the intended use",
          "Test only the easiest cases"
        ],
        [
          "What can go wrong?",
          "Identify realistic errors and limitations",
          "Assume technology is perfect"
        ],
        [
          "What is the human role?",
          "State where judgement or review is needed",
          "Treat the system as an unquestionable authority"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Applied activity: Data Science",
      "text": "Create a small classroom example related to data science. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
      "steps": [
        "Write the problem in one precise sentence.",
        "List the input information.",
        "Describe the expected output.",
        "Choose a simple method.",
        "Define one success criterion.",
        "Record one limitation or risk."
      ]
    },
    {
      "type": "concept",
      "title": "Correlation: deeper understanding",
      "text": "In advance python / data science, the idea of correlation becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Correlation: choosing the right approach",
      "rows": [
        [
          "Question",
          "Good reasoning",
          "Weak reasoning"
        ],
        [
          "What is the input?",
          "Identify the actual information available",
          "Assume every problem has the same input"
        ],
        [
          "What is the output?",
          "Define a measurable result",
          "Use vague words such as 'smart'"
        ],
        [
          "How is it tested?",
          "Use examples appropriate to the intended use",
          "Test only the easiest cases"
        ],
        [
          "What can go wrong?",
          "Identify realistic errors and limitations",
          "Assume technology is perfect"
        ],
        [
          "What is the human role?",
          "State where judgement or review is needed",
          "Treat the system as an unquestionable authority"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Applied activity: Correlation",
      "text": "Create a small classroom example related to correlation. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
      "steps": [
        "Write the problem in one precise sentence.",
        "List the input information.",
        "Describe the expected output.",
        "Choose a simple method.",
        "Define one success criterion.",
        "Record one limitation or risk."
      ]
    },
    {
      "type": "practice",
      "title": "Additional application practice",
      "questions": [
        {
          "question": "Why are meaningful variable names useful?",
          "answer": "They make code easier to understand, debug and maintain."
        },
        {
          "question": "What is an expression?",
          "answer": "A combination of values, variables and operators that produces a value."
        },
        {
          "question": "Why can an infinite loop occur?",
          "answer": "The loop condition may never become false or the loop variable may never change appropriately."
        },
        {
          "question": "What is a parameter in a function?",
          "answer": "A named input that allows a function to work with different values."
        },
        {
          "question": "Why should data types be checked before calculations?",
          "answer": "A value stored as text may behave differently from a numerical value."
        },
        {
          "question": "What is a missing value?",
          "answer": "A record in which the expected information is absent or unavailable."
        },
        {
          "question": "Why should duplicates be checked?",
          "answer": "Repeated records can distort counts, averages and other analyses."
        },
        {
          "question": "What does a scatter plot help investigate?",
          "answer": "It helps visualise the relationship between two numerical variables."
        },
        {
          "question": "Why should a chart have labels?",
          "answer": "Labels tell the reader what the axes, units and categories represent."
        },
        {
          "question": "What is an outlier in data analysis?",
          "answer": "A value that differs substantially from the general pattern of observations."
        },
        {
          "question": "Why is documentation important in data work?",
          "answer": "It records assumptions, transformations and meanings so the analysis can be reproduced and understood."
        },
        {
          "question": "Why is a small sample sometimes risky?",
          "answer": "A small number of observations may not represent the wider population and can produce unstable conclusions."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Scenario challenge",
      "questions": [
        {
          "question": "Why are meaningful variable names useful?",
          "options": [
            "They make code easier to understand, debug and maintain.",
            "It is always caused by the computer",
            "It cannot be investigated",
            "It has no connection with data"
          ],
          "answer": "A",
          "explanation": "They make code easier to understand, debug and maintain."
        },
        {
          "question": "What is an expression?",
          "options": [
            "A combination of values, variables and operators that produces a value.",
            "It guarantees perfection",
            "It removes the need for testing",
            "It only makes the file longer"
          ],
          "answer": "A",
          "explanation": "A combination of values, variables and operators that produces a value."
        },
        {
          "question": "Why can an infinite loop occur?",
          "options": [
            "The loop condition may never become false or the loop variable may never change appropriately.",
            "It is never useful",
            "It only applies to hardware",
            "It is unrelated to computation"
          ],
          "answer": "A",
          "explanation": "The loop condition may never become false or the loop variable may never change appropriately."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Debugging as a learning skill",
      "text": "When a Python program gives the wrong result, debugging begins by reproducing the problem and checking assumptions. Read the error message, inspect values, test a small part of the program and compare the actual output with the expected output. Changing many lines at once makes it harder to identify the cause."
    },
    {
      "type": "comparison",
      "title": "Debugging as a learning skill: study check",
      "rows": [
        [
          "Check",
          "Strong answer",
          "Weak answer"
        ],
        [
          "Purpose",
          "Connect the idea to a defined computational task",
          "Give only a one-word definition"
        ],
        [
          "Evidence",
          "Mention what input or observation supports the claim",
          "Assume the result is true because software produced it"
        ],
        [
          "Limitation",
          "State a realistic condition where the approach may fail",
          "Claim the method works everywhere"
        ],
        [
          "Evaluation",
          "Describe how the result could be tested",
          "Use no test or evidence"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Lists and indexing",
      "text": "Lists are indexed from zero. For example, in values = [12, 18, 25], values[0] is 12 and values[2] is 25. Negative indexing can access items from the end. Understanding indexing prevents common mistakes when selecting features or observations from a collection."
    },
    {
      "type": "comparison",
      "title": "Lists and indexing: study check",
      "rows": [
        [
          "Check",
          "Strong answer",
          "Weak answer"
        ],
        [
          "Purpose",
          "Connect the idea to a defined computational task",
          "Give only a one-word definition"
        ],
        [
          "Evidence",
          "Mention what input or observation supports the claim",
          "Assume the result is true because software produced it"
        ],
        [
          "Limitation",
          "State a realistic condition where the approach may fail",
          "Claim the method works everywhere"
        ],
        [
          "Evaluation",
          "Describe how the result could be tested",
          "Use no test or evidence"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Dictionaries for structured records",
      "text": "A dictionary stores key-value pairs and can represent a small record such as a student's name, attendance and score. A list of dictionaries can represent multiple records. This structure is useful for understanding how tabular data can be represented before moving to a DataFrame."
    },
    {
      "type": "comparison",
      "title": "Dictionaries for structured records: study check",
      "rows": [
        [
          "Check",
          "Strong answer",
          "Weak answer"
        ],
        [
          "Purpose",
          "Connect the idea to a defined computational task",
          "Give only a one-word definition"
        ],
        [
          "Evidence",
          "Mention what input or observation supports the claim",
          "Assume the result is true because software produced it"
        ],
        [
          "Limitation",
          "State a realistic condition where the approach may fail",
          "Claim the method works everywhere"
        ],
        [
          "Evaluation",
          "Describe how the result could be tested",
          "Use no test or evidence"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Functions improve experiments",
      "text": "A data experiment often repeats the same operation on different inputs. A function can package the operation so that the experiment is easier to compare. For example, a function can calculate an average, classify a temperature or check whether a value is within an acceptable range."
    },
    {
      "type": "comparison",
      "title": "Functions improve experiments: study check",
      "rows": [
        [
          "Check",
          "Strong answer",
          "Weak answer"
        ],
        [
          "Purpose",
          "Connect the idea to a defined computational task",
          "Give only a one-word definition"
        ],
        [
          "Evidence",
          "Mention what input or observation supports the claim",
          "Assume the result is true because software produced it"
        ],
        [
          "Limitation",
          "State a realistic condition where the approach may fail",
          "Claim the method works everywhere"
        ],
        [
          "Evaluation",
          "Describe how the result could be tested",
          "Use no test or evidence"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Data provenance",
      "text": "Data provenance means keeping track of where data came from and what transformations were applied. If a column was renamed, a unit was converted or missing values were handled, the change should be recorded. Provenance improves reproducibility and makes the final analysis easier to explain."
    },
    {
      "type": "comparison",
      "title": "Data provenance: study check",
      "rows": [
        [
          "Check",
          "Strong answer",
          "Weak answer"
        ],
        [
          "Purpose",
          "Connect the idea to a defined computational task",
          "Give only a one-word definition"
        ],
        [
          "Evidence",
          "Mention what input or observation supports the claim",
          "Assume the result is true because software produced it"
        ],
        [
          "Limitation",
          "State a realistic condition where the approach may fail",
          "Claim the method works everywhere"
        ],
        [
          "Evaluation",
          "Describe how the result could be tested",
          "Use no test or evidence"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Communicating a finding",
      "text": "A good data-science result is more than a chart. Explain what the chart shows, what it does not show, how the data was collected and what limitation could change the conclusion. Avoid statements that are stronger than the evidence."
    },
    {
      "type": "comparison",
      "title": "Communicating a finding: study check",
      "rows": [
        [
          "Check",
          "Strong answer",
          "Weak answer"
        ],
        [
          "Purpose",
          "Connect the idea to a defined computational task",
          "Give only a one-word definition"
        ],
        [
          "Evidence",
          "Mention what input or observation supports the claim",
          "Assume the result is true because software produced it"
        ],
        [
          "Limitation",
          "State a realistic condition where the approach may fail",
          "Claim the method works everywhere"
        ],
        [
          "Evaluation",
          "Describe how the result could be tested",
          "Use no test or evidence"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Input validation",
      "text": "Programs should not assume that every input is valid. A number may be missing, a user may type text instead of a number, or a value may be outside the expected range. Validation checks these cases before the main calculation and provides a useful response rather than silently producing an incorrect result."
    },
    {
      "type": "comparison",
      "title": "Input validation: exam comparison",
      "rows": [
        [
          "Point",
          "Correct approach",
          "Common mistake"
        ],
        [
          "Definition",
          "Explain the idea with its purpose",
          "Memorise a phrase without meaning"
        ],
        [
          "Application",
          "Connect it to a realistic task",
          "Give an unrelated example"
        ],
        [
          "Data/Input",
          "Identify what the system receives",
          "Assume the input is always perfect"
        ],
        [
          "Output",
          "State what the system produces",
          "Confuse an intermediate step with the final output"
        ],
        [
          "Limitation",
          "Mention a realistic failure condition",
          "Claim the method works in every situation"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Conditional logic",
      "text": "if, elif and else allow a program to select actions based on conditions. Conditions can combine comparisons with logical operators. Clear conditions make rule-based experiments easy to inspect and explain, which is useful when creating simple baselines for AI projects."
    },
    {
      "type": "comparison",
      "title": "Conditional logic: exam comparison",
      "rows": [
        [
          "Point",
          "Correct approach",
          "Common mistake"
        ],
        [
          "Definition",
          "Explain the idea with its purpose",
          "Memorise a phrase without meaning"
        ],
        [
          "Application",
          "Connect it to a realistic task",
          "Give an unrelated example"
        ],
        [
          "Data/Input",
          "Identify what the system receives",
          "Assume the input is always perfect"
        ],
        [
          "Output",
          "State what the system produces",
          "Confuse an intermediate step with the final output"
        ],
        [
          "Limitation",
          "Mention a realistic failure condition",
          "Claim the method works in every situation"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Nested data",
      "text": "Real datasets can contain more than one level of structure. A list can contain dictionaries, and dictionaries can contain lists. Before analysing nested data, identify what one record represents and which fields contain the information required for the question."
    },
    {
      "type": "comparison",
      "title": "Nested data: exam comparison",
      "rows": [
        [
          "Point",
          "Correct approach",
          "Common mistake"
        ],
        [
          "Definition",
          "Explain the idea with its purpose",
          "Memorise a phrase without meaning"
        ],
        [
          "Application",
          "Connect it to a realistic task",
          "Give an unrelated example"
        ],
        [
          "Data/Input",
          "Identify what the system receives",
          "Assume the input is always perfect"
        ],
        [
          "Output",
          "State what the system produces",
          "Confuse an intermediate step with the final output"
        ],
        [
          "Limitation",
          "Mention a realistic failure condition",
          "Claim the method works in every situation"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Aggregation",
      "text": "Aggregation turns many records into summaries such as count, sum, average, minimum or maximum. Summaries are useful for exploration, but they can hide variation. For example, two groups can have the same average while having very different distributions."
    },
    {
      "type": "comparison",
      "title": "Aggregation: exam comparison",
      "rows": [
        [
          "Point",
          "Correct approach",
          "Common mistake"
        ],
        [
          "Definition",
          "Explain the idea with its purpose",
          "Memorise a phrase without meaning"
        ],
        [
          "Application",
          "Connect it to a realistic task",
          "Give an unrelated example"
        ],
        [
          "Data/Input",
          "Identify what the system receives",
          "Assume the input is always perfect"
        ],
        [
          "Output",
          "State what the system produces",
          "Confuse an intermediate step with the final output"
        ],
        [
          "Limitation",
          "Mention a realistic failure condition",
          "Claim the method works in every situation"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Feature selection",
      "text": "A feature is an input variable used for analysis or modelling. Not every available column is useful. Some may be irrelevant, duplicated, leaked from the future or strongly connected with a protected attribute. Feature selection should be based on the task and evidence."
    },
    {
      "type": "comparison",
      "title": "Feature selection: exam comparison",
      "rows": [
        [
          "Point",
          "Correct approach",
          "Common mistake"
        ],
        [
          "Definition",
          "Explain the idea with its purpose",
          "Memorise a phrase without meaning"
        ],
        [
          "Application",
          "Connect it to a realistic task",
          "Give an unrelated example"
        ],
        [
          "Data/Input",
          "Identify what the system receives",
          "Assume the input is always perfect"
        ],
        [
          "Output",
          "State what the system produces",
          "Confuse an intermediate step with the final output"
        ],
        [
          "Limitation",
          "Mention a realistic failure condition",
          "Claim the method works in every situation"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Reproducible analysis",
      "text": "A reproducible analysis records the data source, processing steps, code, assumptions and software environment where relevant. Reproducibility is valuable because another learner should be able to understand how the result was obtained and identify where a different result might come from."
    },
    {
      "type": "comparison",
      "title": "Reproducible analysis: exam comparison",
      "rows": [
        [
          "Point",
          "Correct approach",
          "Common mistake"
        ],
        [
          "Definition",
          "Explain the idea with its purpose",
          "Memorise a phrase without meaning"
        ],
        [
          "Application",
          "Connect it to a realistic task",
          "Give an unrelated example"
        ],
        [
          "Data/Input",
          "Identify what the system receives",
          "Assume the input is always perfect"
        ],
        [
          "Output",
          "State what the system produces",
          "Confuse an intermediate step with the final output"
        ],
        [
          "Limitation",
          "Mention a realistic failure condition",
          "Claim the method works in every situation"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "A small end-to-end Python experiment",
      "text": "A useful beginner experiment can load a list of values, validate them, calculate a summary, classify each value using a rule and print a report. The important learning is the sequence: input, validation, processing, output and checking. This pattern appears again in data science and AI systems."
    },
    {
      "type": "comparison",
      "title": "A small end-to-end Python experiment: final review table",
      "rows": [
        [
          "Element",
          "Strong project",
          "Weak project"
        ],
        [
          "Goal",
          "Specific and measurable",
          "Broad and undefined"
        ],
        [
          "Evidence",
          "Relevant and documented",
          "Unverified or unrelated"
        ],
        [
          "Method",
          "Chosen because it fits the task",
          "Chosen only because it is advanced"
        ],
        [
          "Testing",
          "Uses representative new examples",
          "Tests only familiar examples"
        ],
        [
          "Limitations",
          "Clearly reported",
          "Hidden or ignored"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Data dictionary",
      "text": "A data dictionary describes each column, its meaning, type, unit, allowed values and known limitations. For example, a column called temperature should state whether the unit is Celsius or Fahrenheit. Clear names and definitions prevent incorrect analysis and make collaboration easier."
    },
    {
      "type": "comparison",
      "title": "Data dictionary: final review table",
      "rows": [
        [
          "Element",
          "Strong project",
          "Weak project"
        ],
        [
          "Goal",
          "Specific and measurable",
          "Broad and undefined"
        ],
        [
          "Evidence",
          "Relevant and documented",
          "Unverified or unrelated"
        ],
        [
          "Method",
          "Chosen because it fits the task",
          "Chosen only because it is advanced"
        ],
        [
          "Testing",
          "Uses representative new examples",
          "Tests only familiar examples"
        ],
        [
          "Limitations",
          "Clearly reported",
          "Hidden or ignored"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "From chart to conclusion",
      "text": "After making a graph, write the conclusion in three parts: what the data shows, what evidence supports the observation, and what the data cannot establish. This habit prevents overclaiming. For example, a graph may show that study time and score move together in a sample, but it cannot by itself prove that increasing study time caused every score increase."
    },
    {
      "type": "comparison",
      "title": "From chart to conclusion: final review table",
      "rows": [
        [
          "Element",
          "Strong project",
          "Weak project"
        ],
        [
          "Goal",
          "Specific and measurable",
          "Broad and undefined"
        ],
        [
          "Evidence",
          "Relevant and documented",
          "Unverified or unrelated"
        ],
        [
          "Method",
          "Chosen because it fits the task",
          "Chosen only because it is advanced"
        ],
        [
          "Testing",
          "Uses representative new examples",
          "Tests only familiar examples"
        ],
        [
          "Limitations",
          "Clearly reported",
          "Hidden or ignored"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Python and AI habits",
      "text": "Good programming habits become more important as projects grow. Keep inputs separate from calculations, give variables meaningful names, test functions with small examples and check edge cases such as empty lists or zero denominators. These habits reduce silent errors in AI experiments."
    },
    {
      "type": "comparison",
      "title": "Python and AI habits: practical check",
      "rows": [
        [
          "Check",
          "Do this",
          "Avoid this"
        ],
        [
          "Input",
          "Use relevant, representative examples",
          "Use only convenient examples"
        ],
        [
          "Processing",
          "Record important transformations",
          "Change data without documenting it"
        ],
        [
          "Testing",
          "Try realistic new cases",
          "Test only familiar cases"
        ],
        [
          "Safety",
          "Protect people and information",
          "Publish sensitive data unnecessarily"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Data science communication",
      "text": "A data report should identify the question, source, time period, important transformations, main finding and limitation. A reader should be able to distinguish the observed data from the interpretation. This is as important as writing correct code because a technically correct calculation can still be communicated misleadingly."
    },
    {
      "type": "comparison",
      "title": "Data science communication: practical check",
      "rows": [
        [
          "Check",
          "Do this",
          "Avoid this"
        ],
        [
          "Input",
          "Use relevant, representative examples",
          "Use only convenient examples"
        ],
        [
          "Processing",
          "Record important transformations",
          "Change data without documenting it"
        ],
        [
          "Testing",
          "Try realistic new cases",
          "Test only familiar cases"
        ],
        [
          "Safety",
          "Protect people and information",
          "Publish sensitive data unnecessarily"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Python in practice",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Python%20%289686764667%29.jpg",
      "caption": "A real photograph associated with the Python programming language.",
      "alt": "A real photograph associated with the Python programming language.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "figure",
      "title": "Data analysis in practice",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Data%20Analysis%20%2802010672%29%20%2849837099907%29.jpg",
      "caption": "A real photograph associated with data analysis and measurement.",
      "alt": "A real photograph associated with data analysis and measurement.",
      "source": "Wikimedia Commons"
    }
  ],
  "importantPoints": [
    "Python programs use variables, expressions, conditions, loops, functions and data structures.",
    "Lists are useful for collections of related values.",
    "Functions make repeated logic reusable and easier to test.",
    "Data Science combines questions, data, cleaning, exploration, visualisation and interpretation.",
    "Pandas provides practical tools for tabular data.",
    "Charts should be selected according to the question they need to answer.",
    "Correlation does not automatically prove causation."
  ],
  "keyTerms": [
    {
      "term": "Variable",
      "definition": "A named reference used to store a value in a program."
    },
    {
      "term": "Function",
      "definition": "A reusable block of program logic that can accept inputs and return an output."
    },
    {
      "term": "List",
      "definition": "An ordered collection of values in Python."
    },
    {
      "term": "DataFrame",
      "definition": "A tabular data structure commonly provided by pandas."
    },
    {
      "term": "Data Science",
      "definition": "A field and workflow concerned with obtaining, analysing, interpreting and communicating information from data."
    },
    {
      "term": "Correlation",
      "definition": "A statistical association between variables that does not by itself prove causation."
    }
  ]
};
