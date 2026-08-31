window.ChapterData = {
  "title": "Natural Language Processing",
  "description": "Class 9 Artificial Intelligence — detailed continuous-flow study notes for Natural Language Processing.",
  "sections": [
    {
      "type": "heading",
      "title": "Natural Language Processing",
      "text": "Natural Language Processing enables computers to work with human language in text and speech."
    },
    {
      "type": "paragraph",
      "text": "People communicate using languages such as Hindi, English and many other languages. Human language is rich, flexible and dependent on context. The same word can have different meanings, spelling can vary, sentences can be incomplete, and people can express the same idea in many ways. Natural Language Processing, or NLP, is the area of computing concerned with processing and analysing human language."
    },
    {
      "type": "figure",
      "title": "Speech recognition in practice",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/US%20Navy%20111103-N-YX169-043%20Ensign%20Jared%20Hickey%2C%20assigned%20to%20the%20amphibious%20transport%20dock%20ship%20USS%20Ponce%20%28LPD%2015%29%2C%20uses%20a%20voice-recognition%20system.jpg",
      "caption": "A real-world image showing a person using a voice-recognition system.",
      "alt": "A real-world image showing a person using a voice-recognition system.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "concept",
      "title": "Why human language is difficult for computers",
      "text": "A computer needs language represented as digital information, but meaning is not always directly visible from individual words. Context, word order, punctuation, spelling, tone and shared knowledge can affect interpretation. A sentence can also be ambiguous. NLP systems therefore use computational methods to identify useful patterns in text or speech rather than simply searching for one exact word."
    },
    {
      "type": "comparison",
      "title": "Human language and computer language",
      "rows": [
        [
          "Aspect",
          "Human language",
          "Programming language"
        ],
        [
          "Purpose",
          "Communication between people",
          "Precise instructions for a computer"
        ],
        [
          "Ambiguity",
          "Often contains ambiguity and context dependence",
          "Designed to reduce ambiguity in syntax"
        ],
        [
          "Vocabulary",
          "Changes naturally and includes slang",
          "Uses defined keywords and grammar"
        ],
        [
          "Meaning",
          "Depends heavily on context and shared knowledge",
          "Interpreted according to language rules and execution semantics"
        ],
        [
          "Error tolerance",
          "Humans can often understand imperfect sentences",
          "Programs generally require valid syntax"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Speech recognition",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Subvocal%20speech%20recognition.jpg",
      "caption": "A historical source illustrating the study of artificial intelligence and voice-recognition systems.",
      "alt": "A historical source illustrating the study of artificial intelligence and voice-recognition systems.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "NLP applications"
    },
    {
      "type": "paragraph",
      "text": "NLP appears in many systems. Search engines process words to return relevant results. Voice assistants convert speech into text and interpret commands. Translation systems map content from one language to another. Chatbots process user messages and generate responses. Text classification can identify categories such as spam, sentiment or topic. Optical character recognition can turn text in images into machine-readable text, after which NLP can analyse it."
    },
    {
      "type": "comparison",
      "title": "NLP applications and outputs",
      "rows": [
        [
          "Application",
          "Input",
          "Typical output"
        ],
        [
          "Speech recognition",
          "Audio",
          "Text transcript"
        ],
        [
          "Machine translation",
          "Text in one language",
          "Text in another language"
        ],
        [
          "Chatbot",
          "User message",
          "Generated or retrieved response"
        ],
        [
          "Sentiment analysis",
          "Review or message",
          "Sentiment category or score"
        ],
        [
          "Text classification",
          "Document or message",
          "Topic, spam label or other class"
        ],
        [
          "Text summarisation",
          "Long text",
          "Shorter representation of main information"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Text as data",
      "text": "Before many language tasks can be performed, text must be represented in a form that computational methods can process. A simple pipeline may involve converting text to a consistent form, splitting it into units, removing or handling punctuation where appropriate, and representing words or tokens numerically. The correct preprocessing depends on the task."
    },
    {
      "type": "process",
      "title": "A basic text-processing pipeline",
      "steps": [
        "Receive text from a document, message or other source.",
        "Normalise suitable parts of the text, such as case or spacing.",
        "Tokenise the text into useful units.",
        "Remove or handle punctuation and other elements according to the task.",
        "Represent the text numerically.",
        "Apply a rule, statistical method or trained model.",
        "Interpret and evaluate the output in context."
      ]
    },
    {
      "type": "heading",
      "title": "Tokenisation"
    },
    {
      "type": "paragraph",
      "text": "Tokenisation means breaking text into smaller units called tokens. In a simple example, a sentence can be divided into words. More advanced systems can use subword units or other representations. Tokenisation helps a computer operate on manageable pieces of language, but it does not by itself solve the problem of understanding meaning."
    },
    {
      "type": "comparison",
      "title": "Different text units",
      "rows": [
        [
          "Unit",
          "Example from 'AI is useful.'",
          "Possible use"
        ],
        [
          "Character",
          "A, I, space, i...",
          "Character-level patterns"
        ],
        [
          "Word",
          "AI, is, useful",
          "Simple word-based analysis"
        ],
        [
          "Subword",
          "Parts of longer or unfamiliar words",
          "Handling vocabulary efficiently"
        ],
        [
          "Sentence",
          "AI is useful.",
          "Sentence-level processing"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Natural language processing concept",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Chatbot%20texnalogiyasi.jpg",
      "caption": "A real technology image used to connect AI systems with language-processing applications.",
      "alt": "A real technology image used to connect AI systems with language-processing applications.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "Bag of Words"
    },
    {
      "type": "paragraph",
      "text": "A simple way to represent text is the Bag of Words model. It builds a vocabulary and records how often each vocabulary word occurs in each document. The model ignores much of the original word order. That makes it easy to implement, but it also means that sentences with different word arrangements can receive similar representations."
    },
    {
      "type": "code",
      "title": "Tiny Bag of Words example",
      "code": "Document 1: 'AI helps students'\\nDocument 2: 'students learn AI'\\n\\nVocabulary: [AI, helps, students, learn]\\nDocument 1: [1, 1, 1, 0]\\nDocument 2: [1, 0, 1, 1]",
      "explanation": "Each document is represented by counts or presence values for words in a shared vocabulary. The representation can then be used by a classification method."
    },
    {
      "type": "comparison",
      "title": "Bag of Words strengths and limits",
      "rows": [
        [
          "Aspect",
          "Strength",
          "Limitation"
        ],
        [
          "Simplicity",
          "Easy to understand and implement",
          "Does not represent rich language structure"
        ],
        [
          "Word frequency",
          "Captures repeated vocabulary",
          "Common words can dominate"
        ],
        [
          "Order",
          "Simple representation",
          "Largely ignores word order"
        ],
        [
          "Vocabulary",
          "Easy to construct for small tasks",
          "New or unseen words can be difficult"
        ],
        [
          "Meaning",
          "Useful for some classification tasks",
          "Does not fully capture context or semantics"
        ]
      ]
    },
    {
      "type": "heading",
      "title": "Chatbots and conversational systems"
    },
    {
      "type": "paragraph",
      "text": "A chatbot is a software system that interacts with users through text or speech. A simple chatbot can be rule-based, matching patterns to predefined responses. More advanced systems can use machine-learning or generative techniques. Regardless of the technology, a useful chatbot needs a defined purpose, appropriate information, suitable safety measures and a way to handle unknown conditions or unsupported requests."
    },
    {
      "type": "comparison",
      "title": "Rule-based and learning-based chatbots",
      "rows": [
        [
          "Feature",
          "Rule-based chatbot",
          "Learning/generative chatbot"
        ],
        [
          "Response source",
          "Predefined rules or responses",
          "Learned patterns, retrieved information or generated text"
        ],
        [
          "Predictability",
          "Usually high for covered patterns",
          "Can be more variable"
        ],
        [
          "Coverage",
          "Limited by written rules",
          "Can cover broader language patterns"
        ],
        [
          "Failure mode",
          "May say it does not understand",
          "May produce a fluent but incorrect answer"
        ],
        [
          "Testing",
          "Focus on expected patterns",
          "Requires broader testing for accuracy and safety"
        ]
      ]
    },
    {
      "type": "warning",
      "title": "Fluent language is not proof of truth",
      "text": "A language system can produce grammatically convincing text while still misunderstanding a question or generating an incorrect statement. Users should verify important information and avoid sharing sensitive information with systems unless the service and its data practices are appropriate."
    },
    {
      "type": "heading",
      "title": "Speech recognition and language understanding"
    },
    {
      "type": "paragraph",
      "text": "Speech recognition converts an audio signal into a textual representation. Language understanding then deals with what the words mean for the application. These are related but distinct tasks. A system can transcribe a sentence accurately and still misunderstand the user's intention. Background noise, accents, speaking speed and recording quality can also influence speech recognition performance."
    },
    {
      "type": "comparison",
      "title": "Speech recognition and language understanding",
      "rows": [
        [
          "Stage",
          "Main question",
          "Example output"
        ],
        [
          "Speech recognition",
          "What words were spoken?",
          "'Set an alarm for seven'"
        ],
        [
          "Language understanding",
          "What does the user intend?",
          "Intent = set_alarm; time = 7:00"
        ],
        [
          "Action selection",
          "What should the application do?",
          "Create the requested alarm"
        ],
        [
          "Response generation",
          "How should the system reply?",
          "Confirmation message"
        ]
      ]
    },
    {
      "type": "heading",
      "title": "Language diversity and ambiguity"
    },
    {
      "type": "paragraph",
      "text": "Language technologies must handle variation in vocabulary, spelling, grammar, accents and expressions. Indian users may switch between languages in a single conversation, use transliteration or mix English words with an Indian language. A system designed for one narrow language style may not perform equally well on all users. Ambiguity also matters: the word 'bank' can refer to a financial institution or the side of a river depending on context."
    },
    {
      "type": "comparison",
      "title": "Sources of language variation",
      "rows": [
        [
          "Variation",
          "Example",
          "Challenge"
        ],
        [
          "Spelling",
          "colour / color",
          "Different forms may refer to the same concept"
        ],
        [
          "Slang",
          "Informal expressions",
          "Literal interpretation may fail"
        ],
        [
          "Code-mixing",
          "Hindi + English in one message",
          "System must handle multiple language patterns"
        ],
        [
          "Accent",
          "Different pronunciation patterns",
          "Speech recognition may vary"
        ],
        [
          "Context",
          "'bank' in different situations",
          "Meaning depends on surrounding words"
        ],
        [
          "Typos",
          "'recieve' instead of 'receive'",
          "System must tolerate errors"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Natural language processing",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Natural%20Language%20Processing%20with%20Python%20-%20Flickr%20-%20brewbooks.jpg",
      "caption": "A historical technical resource connected with voice recognition and natural language processing.",
      "alt": "A historical technical resource connected with voice recognition and natural language processing.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "Text classification"
    },
    {
      "type": "paragraph",
      "text": "Text classification assigns a document or message to one or more categories. For example, a school feedback system might classify comments into facilities, teaching, transport and other topics. A spam filter classifies messages into spam or non-spam. A supervised learning approach requires labelled examples so that a model can learn relationships between language features and target categories."
    },
    {
      "type": "process",
      "title": "Simple text-classification workflow",
      "steps": [
        "Define the categories and what each category means.",
        "Collect representative text examples with reliable labels.",
        "Clean and prepare the text consistently.",
        "Convert the text into numerical features.",
        "Train a suitable classification model.",
        "Test it on examples not used for training.",
        "Inspect errors and improve the data or approach."
      ]
    },
    {
      "type": "concept",
      "title": "Evaluation of NLP systems",
      "text": "NLP evaluation depends on the task. For classification, accuracy can be useful when classes are balanced, while precision and recall provide more detail about different types of errors. For translation or generation, evaluation can require task-specific measures and human review. For a chatbot, helpfulness, correctness, safety and ability to handle unknown conditions are important."
    },
    {
      "type": "comparison",
      "title": "NLP error examples",
      "rows": [
        [
          "Error",
          "Example",
          "Why it matters"
        ],
        [
          "Wrong transcription",
          "'school' becomes another word",
          "Changes the user's message"
        ],
        [
          "Wrong intent",
          "A request for a timetable is treated as a greeting",
          "System takes the wrong action"
        ],
        [
          "Wrong category",
          "A complaint is labelled as praise",
          "Analysis becomes misleading"
        ],
        [
          "Ambiguous interpretation",
          "'bank' is assigned the wrong meaning",
          "Context is lost"
        ],
        [
          "Unsafe generation",
          "System confidently gives harmful or false information",
          "Users may rely on the output"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Design a classroom chatbot",
      "text": "Design a rule-based chatbot for a school library. Keep the scope small and transparent.",
      "steps": [
        "List five user intents.",
        "Write two example messages for each intent.",
        "Create a safe response for each intent.",
        "Add a fallback response for unsupported questions.",
        "Identify one privacy rule.",
        "Test the chatbot with two unexpected messages."
      ]
    },
    {
      "type": "question",
      "title": "Think and analyse",
      "question": "A speech-recognition system works well in a quiet room but often makes errors in a crowded classroom. What could be changed or tested?",
      "answer": "The team can test different microphone positions, noise conditions and preprocessing methods, and collect representative speech examples from realistic environments. The evaluation should include noisy conditions rather than only quiet recordings."
    },
    {
      "type": "warning",
      "title": "Privacy in language systems",
      "text": "Text and speech can contain names, addresses, opinions, passwords, health information and other sensitive details. Do not put confidential information into an AI experiment merely because it is convenient. Use synthetic, anonymised or openly reusable examples when appropriate."
    },
    {
      "type": "heading",
      "title": "NLP and responsible use"
    },
    {
      "type": "paragraph",
      "text": "Language technology can improve accessibility and communication, but errors can have social consequences. A translation error can change meaning. A classification system can incorrectly label a person's message. A chatbot can sound confident while being wrong. Responsible use therefore includes testing, transparency about limitations, protection of personal data and human review when the stakes are high."
    },
    {
      "type": "comparison",
      "title": "Good practice for NLP applications",
      "rows": [
        [
          "Area",
          "Good practice",
          "Avoid"
        ],
        [
          "Data",
          "Use relevant and appropriately obtained language data",
          "Collect private conversations without a clear purpose"
        ],
        [
          "Testing",
          "Test different writing styles, accents and contexts",
          "Test only ideal examples"
        ],
        [
          "Output",
          "Show unknown conditions or limitations when appropriate",
          "Present guesses as guaranteed facts"
        ],
        [
          "Safety",
          "Provide boundaries and fallback behaviour",
          "Allow unsupported high-stakes answers without review"
        ],
        [
          "Privacy",
          "Minimise and protect sensitive information",
          "Store unnecessary personal data"
        ]
      ]
    },
    {
      "type": "practice",
      "title": "Practice questions",
      "questions": [
        {
          "question": "What is Natural Language Processing?",
          "answer": "A field of computing concerned with processing and analysing human language in text or speech."
        },
        {
          "question": "Why is human language difficult for computers?",
          "answer": "Language is context-dependent, ambiguous, variable and often incomplete or informal."
        },
        {
          "question": "What is tokenisation?",
          "answer": "Breaking text into smaller units such as words or other tokens."
        },
        {
          "question": "What is the Bag of Words model?",
          "answer": "A simple text representation that records vocabulary word occurrence or frequency while largely ignoring word order."
        },
        {
          "question": "What is a chatbot?",
          "answer": "A software system that interacts with users through text or speech."
        },
        {
          "question": "Differentiate speech recognition and language understanding.",
          "answer": "Speech recognition converts audio to words, while language understanding interprets the intended meaning or task."
        },
        {
          "question": "Give two applications of NLP.",
          "answer": "Speech recognition and machine translation; other valid examples include chatbots and text classification."
        },
        {
          "question": "Why can accents affect speech recognition?",
          "answer": "Pronunciation patterns can differ from those represented in the system's training or test data."
        },
        {
          "question": "Why does Bag of Words lose some meaning?",
          "answer": "It largely ignores word order and richer context."
        },
        {
          "question": "Why should NLP systems be evaluated on varied language?",
          "answer": "Performance can change with spelling, slang, accents, code-mixing and different contexts."
        },
        {
          "question": "Why is privacy important for language applications?",
          "answer": "Messages and speech can contain sensitive personal information."
        },
        {
          "question": "Why should a chatbot have a fallback response?",
          "answer": "It provides a safe behaviour when the system cannot confidently handle a request."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "NLP quick check",
      "questions": [
        {
          "question": "What does NLP primarily work with?",
          "options": [
            "Human language",
            "Keyboard hardware",
            "Electric circuits",
            "File compression"
          ],
          "answer": "A",
          "explanation": "NLP deals with text and speech or other forms of human language."
        },
        {
          "question": "What is tokenisation?",
          "options": [
            "Deleting a document",
            "Splitting text into useful units",
            "Changing a password",
            "Drawing a chart"
          ],
          "answer": "B",
          "explanation": "Tokenisation breaks text into tokens for further processing."
        },
        {
          "question": "What does Bag of Words mainly represent?",
          "options": [
            "Word occurrence or frequency",
            "Exact pronunciation",
            "Pixel colours",
            "Keyboard keys"
          ],
          "answer": "A",
          "explanation": "Bag of Words represents vocabulary occurrence or frequency."
        },
        {
          "question": "What is speech recognition?",
          "options": [
            "Turning speech into a textual representation",
            "Recognising computer hardware",
            "Sorting images",
            "Drawing a graph"
          ],
          "answer": "A",
          "explanation": "Speech recognition converts an audio signal into text."
        },
        {
          "question": "Which is a major risk of a language model?",
          "options": [
            "It may produce fluent but incorrect information",
            "It always refuses to answer",
            "It cannot process text",
            "It never uses data"
          ],
          "answer": "A",
          "explanation": "Fluent output can still be inaccurate, so verification and appropriate safeguards are important."
        }
      ]
    },
    {
      "type": "heading",
      "title": "Chapter summary",
      "text": "Natural Language Processing enables computers to work with human language in text and speech. Language is challenging because it is variable, ambiguous and context-dependent. NLP applications include speech recognition, translation, chatbots and text classification. Tokenisation and representations such as Bag of Words provide simple ways to prepare text for computation. Reliable NLP requires representative data, careful evaluation, privacy protection and responsible handling of unknown conditions."
    },
    {
      "type": "heading",
      "title": "Extended study notes",
      "text": "The following connected notes reinforce the chapter through examples, practical reasoning and exam-oriented applications without repeating earlier explanations."
    },
    {
      "type": "concept",
      "title": "Natural Language Processing: deeper understanding",
      "text": "In natural language processing, the idea of natural language processing becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Natural Language Processing: choosing the right approach",
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
      "title": "Applied activity: Natural Language Processing",
      "text": "Create a small classroom example related to natural language processing. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Tokenisation: deeper understanding",
      "text": "In natural language processing, the idea of tokenisation becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Tokenisation: choosing the right approach",
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
      "title": "Applied activity: Tokenisation",
      "text": "Create a small classroom example related to tokenisation. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Bag of Words: deeper understanding",
      "text": "In natural language processing, the idea of bag of words becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Bag of Words: choosing the right approach",
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
      "title": "Applied activity: Bag of Words",
      "text": "Create a small classroom example related to bag of words. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Speech Recognition: deeper understanding",
      "text": "In natural language processing, the idea of speech recognition becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Speech Recognition: choosing the right approach",
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
      "title": "Applied activity: Speech Recognition",
      "text": "Create a small classroom example related to speech recognition. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Chatbot: deeper understanding",
      "text": "In natural language processing, the idea of chatbot becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Chatbot: choosing the right approach",
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
      "title": "Applied activity: Chatbot",
      "text": "Create a small classroom example related to chatbot. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Text Classification: deeper understanding",
      "text": "In natural language processing, the idea of text classification becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Text Classification: choosing the right approach",
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
      "title": "Applied activity: Text Classification",
      "text": "Create a small classroom example related to text classification. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
          "question": "Why can the same sentence have different meanings?",
          "answer": "Context, word relationships and situation can change interpretation."
        },
        {
          "question": "What is an NLP token?",
          "answer": "A unit of text used by a processing system, such as a word or subword."
        },
        {
          "question": "Why can punctuation matter in language processing?",
          "answer": "It can separate sentences or change how a phrase is interpreted."
        },
        {
          "question": "What is sentiment analysis?",
          "answer": "A task that estimates a sentiment category or score from text."
        },
        {
          "question": "Why can translation be difficult?",
          "answer": "Languages differ in grammar, word order, cultural expressions and context."
        },
        {
          "question": "Why can speech recognition fail in noisy environments?",
          "answer": "Background sound can obscure the speech signal used for transcription."
        },
        {
          "question": "Why is a fallback response useful in a chatbot?",
          "answer": "It prevents the system from pretending to understand unsupported requests."
        },
        {
          "question": "What is text classification?",
          "answer": "Assigning text to defined categories based on its content or learned patterns."
        },
        {
          "question": "Why can Bag of Words lose context?",
          "answer": "It largely ignores word order and relationships between words."
        },
        {
          "question": "Why should chatbot answers be verified for important decisions?",
          "answer": "A fluent response can still be incorrect, incomplete or inappropriate."
        },
        {
          "question": "Why can code-mixing challenge an NLP system?",
          "answer": "The system may need to handle vocabulary and grammar patterns from multiple languages."
        },
        {
          "question": "Why should speech and text data be protected?",
          "answer": "They can contain personal, confidential or identifying information."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Scenario challenge",
      "questions": [
        {
          "question": "Why can the same sentence have different meanings?",
          "options": [
            "Context, word relationships and situation can change interpretation.",
            "It is always caused by the computer",
            "It cannot be investigated",
            "It has no connection with data"
          ],
          "answer": "A",
          "explanation": "Context, word relationships and situation can change interpretation."
        },
        {
          "question": "What is an NLP token?",
          "options": [
            "A unit of text used by a processing system, such as a word or subword.",
            "It guarantees perfection",
            "It removes the need for testing",
            "It only makes the file longer"
          ],
          "answer": "A",
          "explanation": "A unit of text used by a processing system, such as a word or subword."
        },
        {
          "question": "Why can punctuation matter in language processing?",
          "options": [
            "It can separate sentences or change how a phrase is interpreted.",
            "It is never useful",
            "It only applies to hardware",
            "It is unrelated to computation"
          ],
          "answer": "A",
          "explanation": "It can separate sentences or change how a phrase is interpreted."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Words do not carry meaning alone",
      "text": "The meaning of a word often depends on surrounding words. 'Light' can describe brightness, weight or a device. A language system therefore needs more than a dictionary lookup when context matters. Context can be represented through neighbouring words, sentence structure or learned patterns."
    },
    {
      "type": "comparison",
      "title": "Words do not carry meaning alone: study check",
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
      "title": "Normalisation choices",
      "text": "Text can be normalised by converting case, standardising spaces or handling punctuation. But every preprocessing choice has a cost. Removing punctuation may simplify a task while also removing useful information. The correct choice depends on the purpose of the system."
    },
    {
      "type": "comparison",
      "title": "Normalisation choices: study check",
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
      "title": "Text features",
      "text": "A simple classifier may use word counts, character patterns or other numerical features. More advanced approaches can represent relationships between words and context. At school level, the key idea is that a computer needs a numerical representation before many statistical operations can be performed."
    },
    {
      "type": "comparison",
      "title": "Text features: study check",
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
      "title": "Evaluation depends on the task",
      "text": "There is no single score that describes every NLP system. A spam classifier, a speech recogniser and a translation system have different goals. Evaluation should therefore be designed around the actual output and the consequences of an error."
    },
    {
      "type": "comparison",
      "title": "Evaluation depends on the task: study check",
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
      "title": "Multilingual communication",
      "text": "A multilingual user may switch languages, use transliteration or borrow words from another language. This is common in real communication and can challenge a system trained on only one language style. Testing with realistic language patterns is important for inclusive design."
    },
    {
      "type": "comparison",
      "title": "Multilingual communication: study check",
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
      "title": "Safe conversational behaviour",
      "text": "A chatbot should know how to respond when it cannot confidently answer. A short clarification request or a transparent fallback can be safer than inventing a response. In important situations, the system should direct the user toward an appropriate human or authoritative source."
    },
    {
      "type": "comparison",
      "title": "Safe conversational behaviour: study check",
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
      "title": "Sentence boundaries",
      "text": "Splitting a long document into sentences can be more difficult than simply looking for full stops. Abbreviations, decimal numbers and informal writing can create cases where punctuation does not cleanly indicate a sentence boundary."
    },
    {
      "type": "comparison",
      "title": "Sentence boundaries: exam comparison",
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
      "title": "Stop words",
      "text": "Some simple NLP workflows remove very common words to reduce the size of a representation. This is not always appropriate. Common words can carry grammatical or contextual information, so the decision should depend on the task."
    },
    {
      "type": "comparison",
      "title": "Stop words: exam comparison",
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
      "title": "Stemming and lemmatisation",
      "text": "These are approaches for connecting related word forms. Stemming may reduce a word to a rough root-like form, while lemmatisation aims to produce a meaningful base form using language information. They illustrate the broader idea that preprocessing changes how language is represented."
    },
    {
      "type": "comparison",
      "title": "Stemming and lemmatisation: exam comparison",
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
      "title": "Intent and entity",
      "text": "A conversational application may need to identify both the user's intent and important pieces of information. In 'Book a train ticket to Delhi tomorrow', the intent is related to booking, while 'Delhi' and 'tomorrow' provide useful entities or slots for the task."
    },
    {
      "type": "comparison",
      "title": "Intent and entity: exam comparison",
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
      "title": "Context windows",
      "text": "A language system often uses surrounding words to interpret a token. The amount and form of context available can affect the result. A short message may be ambiguous when viewed alone but clear when the previous sentence is included."
    },
    {
      "type": "comparison",
      "title": "Context windows: exam comparison",
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
      "title": "Human evaluation",
      "text": "Some language outputs cannot be judged well by a single automatic score. A translation can be grammatically correct but change an important meaning. A chatbot response can be fluent but unhelpful. Human review can therefore complement numerical evaluation when the task requires it."
    },
    {
      "type": "comparison",
      "title": "Human evaluation: exam comparison",
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
      "title": "A complete NLP example",
      "text": "Imagine a school feedback system that sorts comments into transport, facilities, teaching and other categories. The team defines categories, collects representative labelled examples, prepares the text, creates numerical features, trains a classifier and tests it on unseen comments. Errors are reviewed because a single score may not reveal which category is being misunderstood."
    },
    {
      "type": "comparison",
      "title": "A complete NLP example: final review table",
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
      "title": "Language and accessibility",
      "text": "Speech recognition and text-to-speech can help people interact with devices without relying on a keyboard or screen in the usual way. Accessibility quality depends on language support, pronunciation, speed, background noise and the design of the interface. A system should be tested with the people and conditions it is intended to support."
    },
    {
      "type": "comparison",
      "title": "Language and accessibility: final review table",
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
      "title": "Responsible chatbot design",
      "text": "A responsible chatbot has a defined purpose, a clear way to handle unsupported requests, protection for sensitive data and a route to human assistance when needed. It should not pretend to have performed an action when it has not, and it should not present generated guesses as verified facts."
    },
    {
      "type": "comparison",
      "title": "Responsible chatbot design: final review table",
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
    }
  ],
  "importantPoints": [
    "NLP deals with human language in text, speech and related forms.",
    "Human language is difficult because meaning depends on context and language varies across users.",
    "Tokenisation divides text into useful units for computational processing.",
    "Bag of Words is a simple representation based on vocabulary occurrence or frequency.",
    "Speech recognition and language understanding are related but distinct stages.",
    "NLP systems should be tested on varied language, accents, spelling and contexts.",
    "Privacy, accuracy, safety and unknown conditions are essential considerations."
  ],
  "keyTerms": [
    {
      "term": "Natural Language Processing",
      "definition": "Computational methods for processing and analysing human language."
    },
    {
      "term": "Tokenisation",
      "definition": "Breaking text into smaller units called tokens."
    },
    {
      "term": "Bag of Words",
      "definition": "A simple text representation based on word occurrence or frequency."
    },
    {
      "term": "Speech Recognition",
      "definition": "Converting spoken audio into a textual representation."
    },
    {
      "term": "Chatbot",
      "definition": "Software that interacts with users through text or speech."
    },
    {
      "term": "Text Classification",
      "definition": "Assigning text to one or more defined categories."
    }
  ]
};
