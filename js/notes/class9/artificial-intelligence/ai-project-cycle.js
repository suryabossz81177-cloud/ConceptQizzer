window.ChapterData = {
  "title": "AI Project Cycle",
  "description": "Class 9 Artificial Intelligence — detailed continuous-flow study notes for AI Project Cycle.",
  "sections": [
    {
      "type": "heading",
      "title": "AI Project Cycle",
      "text": "An AI project becomes easier to understand when a broad idea is converted into a clearly defined problem, suitable data and an evaluated solution."
    },
    {
      "type": "paragraph",
      "text": "The AI Project Cycle is a structured way to think about building an AI solution. It is not a rigid one-way staircase. Real projects often move back and forth between stages because new information can change the problem definition, the data requirements or the model. The main stages are Problem Scoping, Data Acquisition, Data Exploration, Modelling and Evaluation. In practical work, deployment or implementation follows successful evaluation."
    },
    {
      "type": "figure",
      "title": "Data visualisation",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Survey%20on%20data%20visualization%20for%20Wikipedia%208.svg",
      "caption": "A real data-visualisation graphic used to connect the project cycle with visual exploration of data.",
      "alt": "A real data-visualisation graphic used to connect the project cycle with visual exploration of data.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "concept",
      "title": "Why a project cycle is needed",
      "text": "A vague statement such as 'use AI to improve the school' is not yet a workable AI problem. A project needs a target, users or stakeholders, measurable outcomes and a realistic understanding of what information is available. The cycle helps students move from a broad social or practical issue to an evidence-based computational solution."
    },
    {
      "type": "process",
      "title": "The AI Project Cycle at a glance",
      "steps": [
        "Problem Scoping — understand the problem, stakeholders, goal and constraints.",
        "Data Acquisition — identify and obtain relevant data.",
        "Data Exploration — inspect, organise, visualise and understand the data.",
        "Modelling — choose an approach and build a model or rule-based solution.",
        "Evaluation — test performance against suitable measures and decide what needs improvement.",
        "Deployment — put a sufficiently tested solution into an appropriate real-world setting."
      ]
    },
    {
      "type": "heading",
      "title": "Problem scoping"
    },
    {
      "type": "paragraph",
      "text": "Problem scoping is the stage where the project team turns an issue into a precise problem that can be investigated. The team should understand who is affected, what difficulty exists, why it matters, what outcome is desired and what limitations must be respected. A good problem statement is specific enough to guide data collection but not so narrow that it becomes meaningless."
    },
    {
      "type": "concept",
      "title": "The 4Ws problem canvas",
      "text": "A useful school-level method is to ask Who, What, Where and Why. Who identifies stakeholders and people affected by the problem. What describes the exact difficulty or opportunity. Where identifies the environment or context in which the issue occurs. Why explains the importance of solving it. These questions help prevent a project from starting with a favourite technology instead of a real need."
    },
    {
      "type": "comparison",
      "title": "Weak and strong problem statements",
      "rows": [
        [
          "Weak statement",
          "Improved statement",
          "Why the improved version is better"
        ],
        [
          "Use AI for water",
          "Predict unusually high water use in a school building from weekly meter readings",
          "Defines a measurable target and possible data source"
        ],
        [
          "Help students",
          "Identify topics in which students frequently make errors in a practice dataset",
          "Defines the users, evidence and possible output"
        ],
        [
          "Stop pollution",
          "Classify photographs of litter into broad categories for a campus clean-up survey",
          "Creates a specific recognition task"
        ],
        [
          "Make farming smart",
          "Estimate irrigation need from soil moisture and recent weather readings",
          "Connects the goal with measurable inputs"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Build a problem canvas",
      "text": "Choose a real issue in your school or community and fill a problem canvas before thinking about algorithms.",
      "steps": [
        "Who is affected or involved?",
        "What exactly is the problem?",
        "Where does it occur?",
        "Why is it important?",
        "What would a successful outcome look like?",
        "What information would be needed?",
        "What constraints, privacy concerns or safety issues exist?"
      ]
    },
    {
      "type": "paragraph",
      "text": "Stakeholders are not limited to the person who will use the final application. They can include people who provide data, people affected by the output, teachers, administrators, technicians, families, service providers or community members. Different stakeholders can have different needs, so a good project should not assume that one person's definition of success represents everyone."
    },
    {
      "type": "figure",
      "title": "Data visualisation example",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Survey%20on%20data%20visualization%20for%20Wikipedia%201.svg",
      "caption": "A CC0 data-visualisation graphic that helps introduce the importance of seeing patterns in data.",
      "alt": "A CC0 data-visualisation graphic that helps introduce the importance of seeing patterns in data.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "Data acquisition"
    },
    {
      "type": "paragraph",
      "text": "After defining the problem, the team identifies what data is required. Data acquisition means obtaining relevant information from suitable sources. The source may be a sensor, a survey, an existing dataset, a school record, an image collection, an observation activity or another legitimate source. The project should consider permission, privacy, accuracy, completeness and the format of the collected data."
    },
    {
      "type": "comparison",
      "title": "Possible data sources",
      "rows": [
        [
          "Source",
          "Example",
          "Strength",
          "Possible issue"
        ],
        [
          "Survey",
          "Student responses about travel mode",
          "Can collect information directly from the target group",
          "Responses may be incomplete or subjective"
        ],
        [
          "Sensor",
          "Temperature or moisture readings",
          "Can provide repeated measurements",
          "Sensors may need calibration"
        ],
        [
          "Existing dataset",
          "Historical weather records",
          "Saves collection time",
          "May not match the exact problem"
        ],
        [
          "Images",
          "Photographs of waste categories",
          "Useful for vision tasks",
          "Labels and image conditions matter"
        ],
        [
          "Text",
          "Customer or student feedback",
          "Useful for language tasks",
          "Privacy and ambiguous language can be challenges"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Data quality",
      "text": "A useful dataset is not simply a large dataset. Relevance, accuracy, consistency, completeness, timeliness and appropriate representation all matter. Duplicate entries can distort counts. Missing values can create gaps. Incorrect labels can teach a model the wrong relationship. Data from one narrow group may not represent the population in which the system will be used."
    },
    {
      "type": "warning",
      "title": "Privacy while collecting data",
      "text": "Collect only information needed for the defined task. Avoid unnecessary personal identifiers, protect stored files, obtain appropriate permission and explain how data will be used. Images, names, contact information, location records and other personal information can require special care."
    },
    {
      "type": "heading",
      "title": "Data exploration"
    },
    {
      "type": "paragraph",
      "text": "Data exploration is the process of examining what the dataset actually contains before building a model. Students can inspect the number of records, columns or features, data types, ranges, categories, missing values, unusual observations and relationships. Tables and visualisations often reveal patterns that are difficult to notice by reading raw rows."
    },
    {
      "type": "comparison",
      "title": "Common ways to represent data",
      "rows": [
        [
          "Representation",
          "Useful for",
          "Example"
        ],
        [
          "Table",
          "Exact values and categories",
          "Daily rainfall records"
        ],
        [
          "Bar chart",
          "Comparing categories",
          "Number of students using different transport modes"
        ],
        [
          "Line chart",
          "Change over time",
          "Temperature across a week"
        ],
        [
          "Histogram",
          "Distribution of numerical values",
          "Distribution of test scores"
        ],
        [
          "Scatter plot",
          "Relationship between two numerical variables",
          "Study time and score"
        ],
        [
          "Pie chart",
          "Simple part-to-whole view when categories are few",
          "Share of transport modes"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Data visualisation",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Survey%20on%20data%20visualization%20for%20Wikipedia%202.svg",
      "caption": "A CC0 visual about the use of graphs and data visualisation.",
      "alt": "A CC0 visual about the use of graphs and data visualisation.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "process",
      "title": "A practical data-exploration routine",
      "steps": [
        "Read the column names and understand what each feature means.",
        "Check the number of records and identify missing values.",
        "Inspect categories for spelling or formatting inconsistencies.",
        "Calculate simple counts, totals, averages or other suitable summaries.",
        "Create an appropriate visual representation.",
        "Look for unusual values, patterns and possible relationships.",
        "Record observations before selecting a model."
      ]
    },
    {
      "type": "heading",
      "title": "Modelling"
    },
    {
      "type": "paragraph",
      "text": "Modelling is the stage in which the project uses an appropriate computational approach to generate the desired output. A model may classify items into categories, estimate a numerical value, identify patterns or support another defined task. At school level, it is important to understand the idea of a model and its inputs and outputs before focusing on advanced mathematics."
    },
    {
      "type": "comparison",
      "title": "Rule-based and learning-based approaches",
      "rows": [
        [
          "Feature",
          "Rule-based approach",
          "Learning-based approach"
        ],
        [
          "How behaviour is defined",
          "Explicit rules written by a designer",
          "Patterns are learned from examples"
        ],
        [
          "Example",
          "If temperature is below a threshold, suggest heating",
          "Learn a relationship between weather features and energy use"
        ],
        [
          "New cases",
          "Handled according to written rules",
          "Handled using learned patterns"
        ],
        [
          "Data requirement",
          "May need little training data",
          "Usually requires suitable training examples"
        ],
        [
          "Maintenance",
          "Rules may need manual changes",
          "Model may need retraining with new suitable data"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Training, testing and generalisation",
      "text": "A model should not simply memorise the examples it has seen. Training data is used to learn patterns, while separate testing data helps estimate how the model behaves on unseen examples. A model that performs very well on its training examples but poorly on new examples may have overfitted. Good project design therefore considers how well the learned pattern generalises to the intended use."
    },
    {
      "type": "comparison",
      "title": "Supervised, unsupervised and reinforcement learning",
      "rows": [
        [
          "Approach",
          "Basic idea",
          "Example"
        ],
        [
          "Supervised learning",
          "Learns from examples that include known target labels or values",
          "Classifying messages as spam or not spam"
        ],
        [
          "Unsupervised learning",
          "Looks for structure or groups without given target labels",
          "Grouping customers by similar behaviour"
        ],
        [
          "Reinforcement learning",
          "Learns actions through feedback or rewards over time",
          "Learning a strategy in a game environment"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Machine learning technique",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Data%20collection%20%2814624299509%29.jpg",
      "caption": "A real diagram illustrating a machine-learning technique.",
      "alt": "A real diagram illustrating a machine-learning technique.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "Evaluation"
    },
    {
      "type": "paragraph",
      "text": "Evaluation asks whether the solution actually works for the defined objective. The evaluation method must match the task. For a classification problem, we can count correct and incorrect predictions and examine measures such as accuracy, precision and recall when appropriate. For a numerical prediction, an error measure may be more suitable. The important habit is to define success before looking at the result."
    },
    {
      "type": "comparison",
      "title": "Why evaluation matters",
      "rows": [
        [
          "Situation",
          "What can happen without evaluation",
          "What evaluation provides"
        ],
        [
          "High training performance",
          "A model may have memorised examples",
          "Evidence from unseen test cases"
        ],
        [
          "Unequal errors",
          "One group may experience more mistakes",
          "A reason to inspect subgroup performance"
        ],
        [
          "Changing conditions",
          "A model may degrade over time",
          "Monitoring and re-testing"
        ],
        [
          "Wrong objective",
          "A technically accurate model may solve the wrong problem",
          "Connection between output and project goal"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Mini project: smart classroom energy",
      "text": "Design a small hypothetical project that predicts whether a classroom is likely to need extra cooling during the next period.",
      "steps": [
        "Write the problem statement.",
        "List stakeholders.",
        "Identify at least four possible data features.",
        "Describe how the data could be collected ethically.",
        "Choose a suitable output.",
        "Describe one way to evaluate the result.",
        "Identify one risk or limitation."
      ]
    },
    {
      "type": "question",
      "title": "Think and analyse",
      "question": "A project team collects 10,000 photographs but almost all photographs show the same type of object and background. Is a large dataset automatically a good dataset?",
      "answer": "No. Size alone does not guarantee useful coverage. The examples should represent the conditions in which the system will be used. A dataset with very little variety can make a model perform poorly on new situations."
    },
    {
      "type": "heading",
      "title": "The cycle is iterative"
    },
    {
      "type": "paragraph",
      "text": "Suppose evaluation shows that a model is inaccurate. The solution is not always to choose a more complicated algorithm. The team may discover that the original problem was unclear, the data was poorly labelled, important cases were missing, or the chosen target did not represent the real goal. The team can return to an earlier stage, improve the data or redefine the problem and then evaluate again."
    },
    {
      "type": "process",
      "title": "An iterative improvement loop",
      "steps": [
        "Review the evaluation result.",
        "Identify the most important source of error.",
        "Decide whether the problem, data, model or evaluation method needs revision.",
        "Make one meaningful change.",
        "Test again on appropriate data.",
        "Compare the new result with the earlier result and document the change."
      ]
    },
    {
      "type": "warning",
      "title": "Do not start with the model",
      "text": "Students often begin by asking which algorithm they should use. A better order is problem first, data second, model third. A sophisticated model cannot rescue a badly defined problem or irrelevant data."
    },
    {
      "type": "practice",
      "title": "Practice questions",
      "questions": [
        {
          "question": "Name the main stages of the AI Project Cycle.",
          "answer": "Problem Scoping, Data Acquisition, Data Exploration, Modelling and Evaluation, with deployment following successful evaluation."
        },
        {
          "question": "What is problem scoping?",
          "answer": "It is the process of clearly defining the problem, goal, stakeholders, context and constraints."
        },
        {
          "question": "What are the 4Ws?",
          "answer": "Who, What, Where and Why."
        },
        {
          "question": "Why are stakeholders important?",
          "answer": "They are affected by or involved in the problem and can provide different requirements and perspectives."
        },
        {
          "question": "What is data acquisition?",
          "answer": "Obtaining relevant information from appropriate and permitted sources."
        },
        {
          "question": "Why is data quality important?",
          "answer": "Poor, incomplete or biased data can lead to unreliable analysis and model outputs."
        },
        {
          "question": "What is data exploration?",
          "answer": "Inspecting, organising, summarising and visualising data to understand its structure and patterns."
        },
        {
          "question": "Why can a line chart be useful?",
          "answer": "It shows how a quantity changes across an ordered sequence such as time."
        },
        {
          "question": "What is modelling?",
          "answer": "Using a computational method, rules or learned patterns to produce the required output."
        },
        {
          "question": "Why should a model be tested on unseen examples?",
          "answer": "To estimate how well it generalises beyond its training examples."
        },
        {
          "question": "What does evaluation mean in an AI project?",
          "answer": "Measuring whether the solution meets its defined objective and identifying errors or limitations."
        },
        {
          "question": "Why is the cycle iterative?",
          "answer": "New findings can require changes to the problem, data, model or evaluation process."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Project cycle quick check",
      "questions": [
        {
          "question": "Which stage asks who is affected by the problem?",
          "options": [
            "Data Acquisition",
            "Problem Scoping",
            "Modelling",
            "Evaluation"
          ],
          "answer": "B",
          "explanation": "Stakeholders and the problem definition are considered during Problem Scoping."
        },
        {
          "question": "Which stage focuses on understanding the dataset before modelling?",
          "options": [
            "Data Exploration",
            "Deployment",
            "Problem Scoping",
            "Evaluation"
          ],
          "answer": "A",
          "explanation": "Data Exploration examines structure, quality and patterns in the data."
        },
        {
          "question": "Which is a data-quality issue?",
          "options": [
            "Clear labels",
            "Missing values",
            "Relevant features",
            "Protected storage"
          ],
          "answer": "B",
          "explanation": "Missing values can affect analysis and model performance."
        },
        {
          "question": "Why is evaluation necessary?",
          "options": [
            "To make the file larger",
            "To check whether the solution meets its objective",
            "To avoid collecting data",
            "To guarantee perfection"
          ],
          "answer": "B",
          "explanation": "Evaluation provides evidence about performance and limitations."
        },
        {
          "question": "What should normally come before choosing a model?",
          "options": [
            "Problem definition and data understanding",
            "Random algorithm selection",
            "Deployment",
            "Advertising"
          ],
          "answer": "A",
          "explanation": "The problem and data determine what kind of solution is appropriate."
        }
      ]
    },
    {
      "type": "heading",
      "title": "Chapter summary",
      "text": "The AI Project Cycle provides a disciplined way to move from a real problem to a tested computational solution. Problem Scoping clarifies the goal and stakeholders. Data Acquisition obtains suitable information. Data Exploration reveals the structure and quality of that information. Modelling creates a computational solution, and Evaluation checks whether it works. The cycle is iterative, so evidence can send the team back to an earlier stage for improvement."
    },
    {
      "type": "heading",
      "title": "Extended study notes",
      "text": "The following connected notes reinforce the chapter through examples, practical reasoning and exam-oriented applications without repeating earlier explanations."
    },
    {
      "type": "concept",
      "title": "Problem Scoping: deeper understanding",
      "text": "In ai project cycle, the idea of problem scoping becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Problem Scoping: choosing the right approach",
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
      "title": "Applied activity: Problem Scoping",
      "text": "Create a small classroom example related to problem scoping. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Stakeholder: deeper understanding",
      "text": "In ai project cycle, the idea of stakeholder becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Stakeholder: choosing the right approach",
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
      "title": "Applied activity: Stakeholder",
      "text": "Create a small classroom example related to stakeholder. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Data Acquisition: deeper understanding",
      "text": "In ai project cycle, the idea of data acquisition becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Data Acquisition: choosing the right approach",
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
      "title": "Applied activity: Data Acquisition",
      "text": "Create a small classroom example related to data acquisition. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Data Exploration: deeper understanding",
      "text": "In ai project cycle, the idea of data exploration becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Data Exploration: choosing the right approach",
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
      "title": "Applied activity: Data Exploration",
      "text": "Create a small classroom example related to data exploration. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Modelling: deeper understanding",
      "text": "In ai project cycle, the idea of modelling becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Modelling: choosing the right approach",
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
      "title": "Applied activity: Modelling",
      "text": "Create a small classroom example related to modelling. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Evaluation: deeper understanding",
      "text": "In ai project cycle, the idea of evaluation becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Evaluation: choosing the right approach",
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
      "title": "Applied activity: Evaluation",
      "text": "Create a small classroom example related to evaluation. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
          "question": "Why should stakeholders be identified during problem scoping?",
          "answer": "They reveal different needs, constraints and consequences that the project team might otherwise miss."
        },
        {
          "question": "What is a measurable goal?",
          "answer": "A goal that can be assessed using a defined observation or metric."
        },
        {
          "question": "Why should data sources be documented?",
          "answer": "Documentation helps explain where data came from, what it represents and what limitations it may have."
        },
        {
          "question": "What is data leakage in simple terms?",
          "answer": "Information that should not be available to a model during training or evaluation can accidentally enter the process and give an unrealistic result."
        },
        {
          "question": "Why should training and testing data be separated?",
          "answer": "Testing on unseen data provides a more honest estimate of generalisation."
        },
        {
          "question": "What is an outlier?",
          "answer": "An observation that is unusually far from the typical values in a dataset."
        },
        {
          "question": "Why can a bar chart be misleading?",
          "answer": "An unsuitable scale, unclear categories or distorted visual design can make differences appear larger or smaller than they are."
        },
        {
          "question": "What does model generalisation mean?",
          "answer": "The ability of a model to perform usefully on new examples beyond those used for training."
        },
        {
          "question": "Why is deployment not the end of an AI project?",
          "answer": "A deployed system can change in performance and needs monitoring, maintenance and responsible management."
        },
        {
          "question": "What should a team do if the evaluation metric is poor?",
          "answer": "Inspect the problem, data, model and evaluation method, then make a justified improvement and test again."
        },
        {
          "question": "Why should a problem statement mention the intended user or beneficiary?",
          "answer": "It connects the technical solution to a real need and helps define success."
        },
        {
          "question": "Why can a technically accurate model still be a poor project solution?",
          "answer": "It may optimise the wrong target or fail to address the real user's need."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Scenario challenge",
      "questions": [
        {
          "question": "Why should stakeholders be identified during problem scoping?",
          "options": [
            "They reveal different needs, constraints and consequences that the project team might otherwise miss.",
            "It is always caused by the computer",
            "It cannot be investigated",
            "It has no connection with data"
          ],
          "answer": "A",
          "explanation": "They reveal different needs, constraints and consequences that the project team might otherwise miss."
        },
        {
          "question": "What is a measurable goal?",
          "options": [
            "A goal that can be assessed using a defined observation or metric.",
            "It guarantees perfection",
            "It removes the need for testing",
            "It only makes the file longer"
          ],
          "answer": "A",
          "explanation": "A goal that can be assessed using a defined observation or metric."
        },
        {
          "question": "Why should data sources be documented?",
          "options": [
            "Documentation helps explain where data came from, what it represents and what limitations it may have.",
            "It is never useful",
            "It only applies to hardware",
            "It is unrelated to computation"
          ],
          "answer": "A",
          "explanation": "Documentation helps explain where data came from, what it represents and what limitations it may have."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Problem statements and measurable goals",
      "text": "A strong problem statement connects a real need with an output that can be observed. Instead of saying 'make the school greener', a team might aim to estimate weekly electricity demand or identify locations where lights are frequently left on. The second formulation gives the team something that can be measured, compared and evaluated."
    },
    {
      "type": "comparison",
      "title": "Problem statements and measurable goals: study check",
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
      "title": "Choosing a data source",
      "text": "The best data source is not automatically the largest one. A small, carefully collected dataset that directly represents the problem can be more useful than a large unrelated dataset. The team should document the source, collection period, units, labels, missing information and permissions so that later decisions can be traced back to evidence."
    },
    {
      "type": "comparison",
      "title": "Choosing a data source: study check",
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
      "title": "Exploration before modelling",
      "text": "Exploration can reveal a problem that would otherwise be hidden. A category may contain spelling variants, a sensor may have stopped recording for several hours, or one class may contain far fewer examples than another. Finding these issues before modelling saves time and prevents the model from learning accidental patterns."
    },
    {
      "type": "comparison",
      "title": "Exploration before modelling: study check",
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
      "title": "Selecting an evaluation measure",
      "text": "The evaluation measure should reflect what matters in the project. If every class is equally important and balanced, accuracy may be informative. If missing a particular category is costly, recall for that category may deserve attention. A project should explain why a chosen measure represents success instead of selecting a number only because it is familiar."
    },
    {
      "type": "comparison",
      "title": "Selecting an evaluation measure: study check",
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
      "title": "Documenting iterations",
      "text": "When a project changes its data or model, record what changed and why. A simple project log can contain the version, data change, model change, evaluation result and next action. This makes improvement visible and helps students distinguish a genuine improvement from a change that only looks better on one test set."
    },
    {
      "type": "comparison",
      "title": "Documenting iterations: study check",
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
      "title": "Deployment needs planning",
      "text": "Deployment means making a solution available in the setting for which it was designed. It includes more than uploading a model. The team should consider the input process, output presentation, user training, failure behaviour, privacy, maintenance and a way to report problems. A model that cannot be used correctly is not a successful project."
    },
    {
      "type": "comparison",
      "title": "Deployment needs planning: study check",
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
      "title": "Problem constraints",
      "text": "Every project has constraints such as time, budget, computing resources, data availability, privacy, permissions and expected response speed. Recording constraints early prevents the team from proposing a solution that cannot realistically be built or maintained."
    },
    {
      "type": "comparison",
      "title": "Problem constraints: exam comparison",
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
      "title": "Baseline solution",
      "text": "Before building an AI model, it can be useful to create a simple baseline. A baseline might be a fixed rule or a simple statistical method. If a complex model cannot improve meaningfully over the baseline, the team should investigate why. A baseline also gives a reference point for evaluation."
    },
    {
      "type": "comparison",
      "title": "Baseline solution: exam comparison",
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
      "title": "Data documentation",
      "text": "A dataset should have a description of what each column or feature means, the unit of measurement, the source, the collection period and known limitations. Labels should be defined clearly. Documentation prevents different team members from interpreting the same data in different ways."
    },
    {
      "type": "comparison",
      "title": "Data documentation: exam comparison",
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
      "title": "Sampling and representation",
      "text": "A sample is a subset of a larger population. If the sample is selected in a way that excludes important groups or conditions, conclusions may not transfer to the wider population. Students should ask who or what is missing from the dataset before trusting a result."
    },
    {
      "type": "comparison",
      "title": "Sampling and representation: exam comparison",
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
      "title": "Model choice follows the target",
      "text": "A classification problem needs a categorical output, while a regression-style prediction produces a numerical value. A clustering task searches for groups without predefined labels. The target therefore influences the type of model or method that is appropriate."
    },
    {
      "type": "comparison",
      "title": "Model choice follows the target: exam comparison",
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
      "title": "Evaluation is a decision tool",
      "text": "Evaluation does not merely produce a score. It helps the team decide whether the project should be improved, changed, limited to a narrower setting or not deployed. A good evaluation report explains both what worked and where the system failed."
    },
    {
      "type": "comparison",
      "title": "Evaluation is a decision tool: exam comparison",
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
      "title": "A complete school project example",
      "text": "Suppose a school wants to predict which days are likely to have unusually high electricity use. Problem scoping identifies the building and goal. Data acquisition collects historical meter readings and relevant weather or timetable information. Data exploration checks missing values and patterns. Modelling creates a prediction method. Evaluation compares predictions with actual observations. If performance is poor, the team revisits the data or problem definition."
    },
    {
      "type": "comparison",
      "title": "A complete school project example: final review table",
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
      "title": "Ethics inside the cycle",
      "text": "Ethical thinking should not be postponed until the final slide of a project. Privacy can affect data acquisition, fairness can affect sampling, safety can affect deployment and transparency can affect the way results are presented. Considering these issues at each stage can prevent problems that are expensive to fix later."
    },
    {
      "type": "comparison",
      "title": "Ethics inside the cycle: final review table",
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
      "title": "Project documentation template",
      "text": "A useful student project record can contain: problem statement, stakeholders, goal, assumptions, data sources, data dictionary, cleaning decisions, exploration findings, model description, evaluation results, limitations, responsible-use notes and next steps. This structure makes a project understandable to someone who did not build it."
    },
    {
      "type": "comparison",
      "title": "Project documentation template: final review table",
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
      "type": "figure",
      "title": "Project workflow visual",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Flowchart%20%287542187548%29.jpg",
      "caption": "A real flowchart image used to reinforce the idea of ordered project stages and decision points.",
      "alt": "A real flowchart image used to reinforce the idea of ordered project stages and decision points.",
      "source": "Wikimedia Commons"
    }
  ],
  "importantPoints": [
    "Problem Scoping converts a broad issue into a clear, measurable problem.",
    "The 4Ws help identify Who, What, Where and Why.",
    "Data acquisition should consider relevance, quality, permission and privacy.",
    "Data exploration uses tables, summaries and visualisations to understand data.",
    "A model should be selected after the problem and data are understood.",
    "Evaluation determines whether the solution meets its defined objective.",
    "AI projects are iterative and may revisit earlier stages."
  ],
  "keyTerms": [
    {
      "term": "Problem Scoping",
      "definition": "Clearly defining the problem, stakeholders, goal, context and constraints."
    },
    {
      "term": "Stakeholder",
      "definition": "A person or group affected by, involved in or interested in the project."
    },
    {
      "term": "Data Acquisition",
      "definition": "Obtaining relevant data from appropriate sources."
    },
    {
      "term": "Data Exploration",
      "definition": "Inspecting, summarising and visualising data to understand it."
    },
    {
      "term": "Modelling",
      "definition": "Using rules or learned patterns to produce the required computational output."
    },
    {
      "term": "Evaluation",
      "definition": "Measuring the performance and usefulness of a solution against defined criteria."
    }
  ]
};
