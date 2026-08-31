window.ChapterData = {
  "title": "Computer Vision",
  "description": "Class 9 Artificial Intelligence — detailed continuous-flow study notes for Computer Vision.",
  "sections": [
    {
      "type": "heading",
      "title": "Computer Vision",
      "text": "Computer Vision enables computers to work with images and video by extracting information that can support a defined task."
    },
    {
      "type": "paragraph",
      "text": "Humans can look at a photograph and quickly notice objects, colours, shapes, people, text and movement. A computer does not see an image in the biological sense. It receives numerical representations of pixels and uses algorithms or trained models to extract useful information. Computer Vision is the field concerned with enabling computers to analyse and interpret visual information."
    },
    {
      "type": "figure",
      "title": "Computer vision",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Face%20detection.jpg",
      "caption": "A real image illustrating a computer-vision task involving face detection.",
      "alt": "A real image illustrating a computer-vision task involving face detection.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "concept",
      "title": "What is an image to a computer?",
      "text": "A digital image is represented as numerical data. A simple grayscale image can represent each pixel with an intensity value. A colour image commonly stores multiple channels, such as red, green and blue. The values and arrangement of pixels provide the raw visual information from which a computer-vision system can extract features."
    },
    {
      "type": "comparison",
      "title": "Human vision and computer vision",
      "rows": [
        [
          "Aspect",
          "Human vision",
          "Computer vision"
        ],
        [
          "Input",
          "Light received by eyes",
          "Digital images or video frames"
        ],
        [
          "Processing",
          "Biological visual system and brain",
          "Algorithms, image processing and models"
        ],
        [
          "Experience",
          "Strongly influenced by context and prior experience",
          "Depends on data, design and learned representations"
        ],
        [
          "Adaptability",
          "Can often handle unfamiliar scenes flexibly",
          "Performance depends on training and operating conditions"
        ],
        [
          "Output",
          "Perception and understanding",
          "Labels, locations, measurements or other computational outputs"
        ]
      ]
    },
    {
      "type": "process",
      "title": "From camera to computer-vision output",
      "steps": [
        "A camera or other source captures a visual scene.",
        "The image is represented digitally as pixels.",
        "Preprocessing may resize, crop, denoise or otherwise prepare the image.",
        "A vision method extracts useful information or patterns.",
        "A model or algorithm produces an output such as a class, location or detected feature.",
        "The output is evaluated against the actual task requirement."
      ]
    },
    {
      "type": "figure",
      "title": "Facial recognition software",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Facial%20Recognition%20Software%20%2814258398597%29.jpg",
      "caption": "A real-world example related to facial-recognition technology.",
      "alt": "A real-world example related to facial-recognition technology.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "Images, pixels and colour"
    },
    {
      "type": "paragraph",
      "text": "A pixel is a small picture element in a digital image. In a grayscale image, a pixel can be represented by an intensity value. In a colour image using an RGB representation, each pixel can have red, green and blue components. Different combinations of these values produce different colours. Understanding pixels helps explain why image processing can be performed using mathematical operations on arrays of numbers."
    },
    {
      "type": "comparison",
      "title": "Grayscale and RGB images",
      "rows": [
        [
          "Feature",
          "Grayscale",
          "RGB colour"
        ],
        [
          "Channels",
          "One intensity channel",
          "Three common colour channels"
        ],
        [
          "Representation",
          "Brightness information",
          "Red, green and blue components"
        ],
        [
          "Storage",
          "Usually simpler",
          "Usually more data for the same dimensions"
        ],
        [
          "Example use",
          "Simple document scans",
          "Photographs and colour object recognition"
        ]
      ]
    },
    {
      "type": "concept",
      "title": "Image size and resolution",
      "text": "An image with more pixels can contain more spatial detail, but higher resolution also requires more storage and processing. A vision system does not always need the maximum possible resolution. The appropriate size depends on the task, the smallest object that must be recognised, available computing resources and the desired speed."
    },
    {
      "type": "figure",
      "title": "Facial recognition system",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Face%20Recognition%20System.jpg",
      "caption": "A public-domain image showing a facial-recognition system.",
      "alt": "A public-domain image showing a facial-recognition system.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "heading",
      "title": "Common computer-vision tasks"
    },
    {
      "type": "paragraph",
      "text": "Different vision tasks produce different kinds of outputs. Image classification assigns a label to an image or scene. Object detection identifies objects and their locations. Image segmentation assigns labels to regions or pixels. Face detection locates faces, while face recognition attempts to match or identify a face using a reference set. These tasks should not be treated as interchangeable."
    },
    {
      "type": "comparison",
      "title": "Computer-vision tasks",
      "rows": [
        [
          "Task",
          "Main output",
          "Example"
        ],
        [
          "Image classification",
          "One or more class labels",
          "Classify a photograph as beach, forest or city"
        ],
        [
          "Object detection",
          "Object classes plus locations",
          "Find cars and people in a street image"
        ],
        [
          "Segmentation",
          "Pixel or region labels",
          "Separate road, sky and vehicles"
        ],
        [
          "Face detection",
          "Locations of faces",
          "Draw boxes around faces"
        ],
        [
          "Face recognition",
          "Identity match or similarity",
          "Compare a face with enrolled identities"
        ],
        [
          "OCR",
          "Text extracted from an image",
          "Read printed words from a document"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Face recognition process",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Figure%201-%20Face%20Recognition%20Enrollment%20and%20Matching%20Process%20%2827366280373%29.jpg",
      "caption": "A real diagram showing enrollment and matching in a face-recognition process.",
      "alt": "A real diagram showing enrollment and matching in a face-recognition process.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "concept",
      "title": "Training examples and labels",
      "text": "A learning-based vision system needs examples that represent the task. If the goal is to classify images of healthy and unhealthy leaves, the training set needs images with reliable labels and sufficient variation in lighting, leaf position, background and plant type. A model trained on one narrow visual condition may fail when the camera angle, lighting or background changes."
    },
    {
      "type": "comparison",
      "title": "Good and weak image datasets",
      "rows": [
        [
          "Dataset characteristic",
          "Stronger dataset",
          "Weaker dataset"
        ],
        [
          "Variety",
          "Includes realistic changes in viewpoint and lighting",
          "Almost identical images"
        ],
        [
          "Labels",
          "Labels are checked and consistent",
          "Labels contain many errors"
        ],
        [
          "Classes",
          "Important classes are adequately represented",
          "One class dominates"
        ],
        [
          "Backgrounds",
          "Includes realistic environments",
          "All examples share one easy background"
        ],
        [
          "Privacy",
          "Uses images appropriately and protects personal information",
          "Uses personal images without suitable permission"
        ]
      ]
    },
    {
      "type": "warning",
      "title": "Bias in computer vision",
      "text": "A vision model can behave differently across groups or environments when its training data does not represent the intended population. Lighting, skin tones, camera quality, age, pose and background can all affect performance. Testing should therefore use realistic and diverse conditions, and the system should not be used for high-stakes purposes without appropriate validation and oversight."
    },
    {
      "type": "heading",
      "title": "Image preprocessing"
    },
    {
      "type": "paragraph",
      "text": "Preprocessing changes an image into a form that is easier or more consistent for the next stage. Common operations include resizing, cropping, normalising pixel values, adjusting contrast or reducing noise. Preprocessing should preserve information needed for the task. Excessive processing can remove useful features."
    },
    {
      "type": "comparison",
      "title": "Common preprocessing operations",
      "rows": [
        [
          "Operation",
          "Purpose",
          "Possible caution"
        ],
        [
          "Resize",
          "Standardise dimensions",
          "Small objects may lose detail"
        ],
        [
          "Crop",
          "Focus on a region",
          "Important context may be removed"
        ],
        [
          "Normalise",
          "Put values into a consistent range",
          "Must match the model's expected format"
        ],
        [
          "Denoise",
          "Reduce unwanted variation",
          "Fine details can be lost"
        ],
        [
          "Contrast adjustment",
          "Improve visibility",
          "Can change visual relationships"
        ]
      ]
    },
    {
      "type": "activity",
      "title": "Build a simple vision problem",
      "text": "Design a classroom image-classification task with three categories such as board, desk and bag. Do not collect real student faces. Instead, use objects without personal information or publicly reusable images.",
      "steps": [
        "Define the three classes.",
        "Decide how many varied examples are needed.",
        "List changes in lighting and viewpoint to include.",
        "Explain how labels will be checked.",
        "Describe one test image that was not used during training."
      ]
    },
    {
      "type": "heading",
      "title": "Evaluating a vision system"
    },
    {
      "type": "paragraph",
      "text": "A vision system should be tested using examples that reflect the intended environment. Accuracy can be useful for a balanced classification problem, but a single number may hide important errors. A model might perform well overall while failing on a particular class or condition. A confusion matrix can show which classes are being confused with one another."
    },
    {
      "type": "comparison",
      "title": "Vision evaluation questions",
      "rows": [
        [
          "Question",
          "Why it matters"
        ],
        [
          "Which classes are confused?",
          "Shows where the model needs improvement"
        ],
        [
          "Does lighting affect performance?",
          "Reveals sensitivity to environment"
        ],
        [
          "Does performance change with distance?",
          "Checks whether the system works at expected scales"
        ],
        [
          "Are some groups or conditions underrepresented?",
          "Helps identify possible bias"
        ],
        [
          "Does the model work on new images?",
          "Checks generalisation rather than memorisation"
        ]
      ]
    },
    {
      "type": "figure",
      "title": "Facial recognition at a gate",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Face%20Recognition%20Gate%20at%20Osaka%20Kitahama%20Station.jpg",
      "caption": "A real-world deployment example involving facial recognition at an access gate.",
      "alt": "A real-world deployment example involving facial recognition at an access gate.",
      "source": "Wikimedia Commons"
    },
    {
      "type": "warning",
      "title": "Privacy and consent",
      "text": "Images of identifiable people can be personal information. A student project should avoid collecting or publishing people's faces without appropriate permission. For learning activities, object photographs, synthetic examples or openly licensed images can often demonstrate the same concept with less privacy risk."
    },
    {
      "type": "question",
      "title": "Think and analyse",
      "question": "A model recognises red apples very accurately during testing, but it fails when apples are photographed under different lighting. What does this suggest?",
      "answer": "The model may have learned patterns that depend too strongly on the lighting conditions in its training data. The project should add realistic variation, review preprocessing and retest on representative images."
    },
    {
      "type": "heading",
      "title": "Real-world uses of Computer Vision"
    },
    {
      "type": "application",
      "title": "Healthcare",
      "text": "Computer vision can assist with image-based analysis such as examining scans or identifying visual patterns. Such systems need rigorous validation because medical decisions can have serious consequences."
    },
    {
      "type": "application",
      "title": "Agriculture",
      "text": "Images from cameras or mobile devices can help inspect crops, detect visible signs of disease, count objects or monitor fields. Lighting, plant variety and environmental conditions must be considered."
    },
    {
      "type": "application",
      "title": "Transport",
      "text": "Vision systems can help analyse traffic scenes, detect lanes or recognise objects around vehicles. Safety-critical applications require extensive testing and fail-safe design."
    },
    {
      "type": "application",
      "title": "Accessibility",
      "text": "Vision-based tools can describe visual information, read text from images or assist users with visual impairments. Accessibility depends on the accuracy and clarity of the output."
    },
    {
      "type": "application",
      "title": "Retail and manufacturing",
      "text": "Vision can support quality inspection, object counting and inventory-related tasks. A model must be tested against the actual variation in products and production conditions."
    },
    {
      "type": "comparison",
      "title": "Computer vision versus ordinary image processing",
      "rows": [
        [
          "Aspect",
          "Traditional image processing",
          "Learning-based computer vision"
        ],
        [
          "Rules",
          "Often explicitly designed filters or operations",
          "Patterns can be learned from examples"
        ],
        [
          "Example",
          "Detect edges with a defined filter",
          "Classify an object using a trained model"
        ],
        [
          "Data dependence",
          "May be relatively low",
          "Training data is often important"
        ],
        [
          "Adaptation",
          "Requires manual adjustment of rules",
          "Can improve through suitable retraining"
        ],
        [
          "Failure source",
          "Poor thresholds or assumptions",
          "Data bias, model limitations and distribution changes"
        ]
      ]
    },
    {
      "type": "practice",
      "title": "Practice questions",
      "questions": [
        {
          "question": "What is Computer Vision?",
          "answer": "A field concerned with enabling computers to extract and interpret useful information from images or video."
        },
        {
          "question": "What is a pixel?",
          "answer": "A small picture element represented digitally by numerical values."
        },
        {
          "question": "What does RGB represent?",
          "answer": "Red, Green and Blue colour channels."
        },
        {
          "question": "Differentiate classification and object detection.",
          "answer": "Classification assigns class labels, while object detection also identifies the locations of objects."
        },
        {
          "question": "What is image segmentation?",
          "answer": "Assigning labels to image regions or pixels so that different areas can be distinguished."
        },
        {
          "question": "Why is image preprocessing used?",
          "answer": "To prepare images consistently for analysis or modelling, such as by resizing or reducing noise."
        },
        {
          "question": "Why is dataset variety important?",
          "answer": "The model needs examples that represent realistic changes in the environment."
        },
        {
          "question": "What is face detection?",
          "answer": "Locating faces in an image or video frame."
        },
        {
          "question": "What is face recognition?",
          "answer": "Matching or identifying a detected face against reference information."
        },
        {
          "question": "Why can lighting affect vision models?",
          "answer": "Changes in lighting can alter pixel patterns and visual features used by the model."
        },
        {
          "question": "Why should student face images be handled carefully?",
          "answer": "They can contain personal information and raise privacy and consent concerns."
        },
        {
          "question": "Why is evaluation on new images important?",
          "answer": "It helps determine whether the model generalises beyond its training examples."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Computer vision quick check",
      "questions": [
        {
          "question": "Which task returns object locations as well as classes?",
          "options": [
            "Classification",
            "Object detection",
            "Text formatting",
            "Sorting"
          ],
          "answer": "B",
          "explanation": "Object detection identifies objects and their locations."
        },
        {
          "question": "Which colour model commonly uses three channels?",
          "options": [
            "RGB",
            "Binary",
            "Unary",
            "ASCII"
          ],
          "answer": "A",
          "explanation": "RGB uses red, green and blue channels."
        },
        {
          "question": "What can a pixel contain?",
          "options": [
            "Only a word",
            "Numerical image information",
            "A complete program",
            "A database"
          ],
          "answer": "B",
          "explanation": "Pixels are represented using numerical values."
        },
        {
          "question": "Why can a vision model fail in new lighting?",
          "options": [
            "Lighting never changes",
            "Training data may not represent that variation",
            "Pixels disappear",
            "The camera becomes a keyboard"
          ],
          "answer": "B",
          "explanation": "Unrepresented environmental variation can reduce generalisation."
        },
        {
          "question": "Which is an important ethical issue in facial recognition?",
          "options": [
            "Font size",
            "Privacy",
            "Keyboard layout",
            "File extension"
          ],
          "answer": "B",
          "explanation": "Facial images and identity matching can involve personal information and privacy."
        }
      ]
    },
    {
      "type": "heading",
      "title": "Chapter summary",
      "text": "Computer Vision allows computers to work with visual information represented as digital data. Images are made of pixels and can use representations such as grayscale or RGB. Vision tasks include classification, object detection, segmentation, face detection, face recognition and OCR. Reliable vision systems depend on representative data, suitable preprocessing, careful evaluation and attention to bias, privacy and consent."
    },
    {
      "type": "heading",
      "title": "Extended study notes",
      "text": "The following connected notes reinforce the chapter through examples, practical reasoning and exam-oriented applications without repeating earlier explanations."
    },
    {
      "type": "concept",
      "title": "Computer Vision: deeper understanding",
      "text": "In computer vision, the idea of computer vision becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Computer Vision: choosing the right approach",
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
      "title": "Applied activity: Computer Vision",
      "text": "Create a small classroom example related to computer vision. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Pixel: deeper understanding",
      "text": "In computer vision, the idea of pixel becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Pixel: choosing the right approach",
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
      "title": "Applied activity: Pixel",
      "text": "Create a small classroom example related to pixel. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "RGB: deeper understanding",
      "text": "In computer vision, the idea of rgb becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "RGB: choosing the right approach",
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
      "title": "Applied activity: RGB",
      "text": "Create a small classroom example related to rgb. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Classification: deeper understanding",
      "text": "In computer vision, the idea of classification becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Classification: choosing the right approach",
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
      "title": "Applied activity: Classification",
      "text": "Create a small classroom example related to classification. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Object Detection: deeper understanding",
      "text": "In computer vision, the idea of object detection becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Object Detection: choosing the right approach",
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
      "title": "Applied activity: Object Detection",
      "text": "Create a small classroom example related to object detection. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
      "title": "Segmentation: deeper understanding",
      "text": "In computer vision, the idea of segmentation becomes useful when a learner connects the definition with an actual computational situation. Consider what the input looks like, what transformation or reasoning is performed, what output is expected and how the result can be checked. A good explanation should also state one limitation. For example, a system may work well under the conditions represented by its examples but become less reliable when the input changes. This is why students should describe not only what a technique does, but also when it should and should not be trusted."
    },
    {
      "type": "comparison",
      "title": "Segmentation: choosing the right approach",
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
      "title": "Applied activity: Segmentation",
      "text": "Create a small classroom example related to segmentation. Explain the problem, the information available, the expected output, one possible computational method, one evaluation method and one responsible-use consideration.",
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
          "question": "Why can a model trained on indoor images fail outdoors?",
          "answer": "The lighting, background, object appearance and other visual conditions may differ from training data."
        },
        {
          "question": "What is object detection used for?",
          "answer": "It identifies objects and their locations in an image or video."
        },
        {
          "question": "Why can resizing an image reduce useful information?",
          "answer": "Downsampling can remove fine details needed to recognise small objects."
        },
        {
          "question": "What is OCR?",
          "answer": "Optical Character Recognition, which extracts machine-readable text from images."
        },
        {
          "question": "Why are labels important in supervised vision tasks?",
          "answer": "They provide the target information from which the model can learn."
        },
        {
          "question": "What is segmentation?",
          "answer": "Dividing an image into labelled regions or pixels."
        },
        {
          "question": "Why can background bias be dangerous?",
          "answer": "A model may learn to associate a background with a class instead of learning the object itself."
        },
        {
          "question": "Why should a vision dataset contain variation?",
          "answer": "Variation helps the model learn features that remain useful across realistic conditions."
        },
        {
          "question": "What is face detection?",
          "answer": "Finding the locations of faces in visual input."
        },
        {
          "question": "What is face recognition?",
          "answer": "Comparing a face with reference information to estimate an identity match or similarity."
        },
        {
          "question": "Why is privacy especially important for face systems?",
          "answer": "Faces can be used to identify people and therefore involve sensitive personal information."
        },
        {
          "question": "Why should accuracy be examined by class rather than only overall?",
          "answer": "Overall accuracy can hide poor performance on an important minority class."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Scenario challenge",
      "questions": [
        {
          "question": "Why can a model trained on indoor images fail outdoors?",
          "options": [
            "The lighting, background, object appearance and other visual conditions may differ from training data.",
            "It is always caused by the computer",
            "It cannot be investigated",
            "It has no connection with data"
          ],
          "answer": "A",
          "explanation": "The lighting, background, object appearance and other visual conditions may differ from training data."
        },
        {
          "question": "What is object detection used for?",
          "options": [
            "It identifies objects and their locations in an image or video.",
            "It guarantees perfection",
            "It removes the need for testing",
            "It only makes the file longer"
          ],
          "answer": "A",
          "explanation": "It identifies objects and their locations in an image or video."
        },
        {
          "question": "Why can resizing an image reduce useful information?",
          "options": [
            "Downsampling can remove fine details needed to recognise small objects.",
            "It is never useful",
            "It only applies to hardware",
            "It is unrelated to computation"
          ],
          "answer": "A",
          "explanation": "Downsampling can remove fine details needed to recognise small objects."
        }
      ]
    },
    {
      "type": "concept",
      "title": "What a vision model actually receives",
      "text": "A model does not receive the everyday concept 'tree' or 'car' directly. It receives a numerical representation of an image and transforms that information through computational operations. Features can be simple visual properties or learned representations. The important student idea is that the model works with data derived from pixels."
    },
    {
      "type": "comparison",
      "title": "What a vision model actually receives: study check",
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
      "title": "Object location matters",
      "text": "Classification answers a question such as 'what is in this image?' Detection adds 'where is it?' A traffic-monitoring system may need both the object category and its position. This difference determines the type of training examples and the form of the expected output."
    },
    {
      "type": "comparison",
      "title": "Object location matters: study check",
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
      "title": "OCR as a bridge between vision and language",
      "text": "Optical Character Recognition first deals with visual shapes that represent letters and numbers. After characters or words are extracted, language-processing methods can analyse the resulting text. This is a useful example of two AI domains working together."
    },
    {
      "type": "comparison",
      "title": "OCR as a bridge between vision and language: study check",
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
      "title": "Changing the camera changes the task",
      "text": "A model trained with clear photographs from one camera may not behave the same way on a low-light mobile camera. Resolution, lens, focus, compression and colour balance can change the visual input. A realistic test set should include the conditions in which the system is expected to operate."
    },
    {
      "type": "comparison",
      "title": "Changing the camera changes the task: study check",
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
      "title": "False positives and false negatives",
      "text": "A false positive occurs when a system reports an object or condition that is not actually present. A false negative occurs when the system misses something that is present. The importance of each error depends on the application. In a safety-related setting, missing a dangerous object may have a different cost from raising a false alarm."
    },
    {
      "type": "comparison",
      "title": "False positives and false negatives: study check",
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
      "title": "Vision systems need boundaries",
      "text": "A student project should clearly state what the model can recognise and what it cannot. A model trained to classify three kinds of waste should not be described as a general waste-management system. Clear boundaries make testing and responsible use easier."
    },
    {
      "type": "comparison",
      "title": "Vision systems need boundaries: study check",
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
      "title": "Colour and lighting",
      "text": "The same object can produce different pixel values under different lighting. A white object under warm indoor light may appear numerically different from the same object outdoors. A vision system should therefore be tested across expected lighting conditions instead of relying on one visual environment."
    },
    {
      "type": "comparison",
      "title": "Colour and lighting: exam comparison",
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
      "title": "Scale and viewpoint",
      "text": "Objects can look different when they are near or far from the camera, tilted, partly hidden or viewed from another angle. Training examples should reflect the variation expected in the real application."
    },
    {
      "type": "comparison",
      "title": "Scale and viewpoint: exam comparison",
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
      "title": "Occlusion",
      "text": "An object is occluded when part of it is blocked by another object. Detection can become harder because the visible region may not contain all the usual features. This is one reason realistic test images are important."
    },
    {
      "type": "comparison",
      "title": "Occlusion: exam comparison",
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
      "title": "Image augmentation idea",
      "text": "Training systems can sometimes use controlled transformations such as small rotations, crops or brightness changes to create additional variation. The transformation should remain realistic for the task. Changing an image in a way that destroys its label would create bad training data."
    },
    {
      "type": "comparison",
      "title": "Image augmentation idea: exam comparison",
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
      "title": "Edge and shape information",
      "text": "Traditional image-processing methods can detect edges, lines or shapes using mathematical filters. Such features can be useful in controlled tasks. Learning-based methods can discover more complex visual representations from examples."
    },
    {
      "type": "comparison",
      "title": "Edge and shape information: exam comparison",
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
      "title": "Computer vision as measurement",
      "text": "Vision does not always need to identify a named object. It can measure a count, distance, size, colour or motion. For example, a camera system might count vehicles or estimate the number of objects crossing a region. The desired measurement should be defined before selecting the technique."
    },
    {
      "type": "comparison",
      "title": "Computer vision as measurement: exam comparison",
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
      "title": "A complete vision example",
      "text": "Consider an application that sorts recyclable objects into paper, plastic and metal. Images are collected under realistic lighting and viewpoints. Labels are checked. The images are prepared consistently. A classifier is trained and tested on images it has not seen. Errors are inspected by category. The team then decides whether performance is sufficient for the intended environment or whether the data and model need improvement."
    },
    {
      "type": "comparison",
      "title": "A complete vision example: final review table",
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
      "title": "Vision and accessibility",
      "text": "Computer vision can support accessibility by reading printed text, describing visual scenes or identifying objects. However, the system's description should be treated as assistance rather than an infallible account of the world. Testing should consider different environments, users and levels of visual complexity."
    },
    {
      "type": "comparison",
      "title": "Vision and accessibility: final review table",
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
      "title": "Visual evidence and privacy",
      "text": "A photograph can reveal more than the object being studied. Backgrounds may contain faces, addresses, screens or documents. A responsible vision dataset therefore considers what information is visible in the entire frame, not only the label assigned to the main object."
    },
    {
      "type": "comparison",
      "title": "Visual evidence and privacy: final review table",
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
      "title": "Vision project safety check",
      "text": "Before collecting visual data, check whether people, identity documents, screens or other sensitive information could appear in the frame. Prefer object-only images for school activities. After collection, remove unnecessary personal information and restrict access to the dataset."
    },
    {
      "type": "comparison",
      "title": "Vision project safety check: practical check",
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
      "title": "Testing visual robustness",
      "text": "A useful robustness test changes one realistic condition at a time: lighting, distance, viewpoint, background or image quality. Record the model's performance under each condition. This creates evidence about where the system is reliable and where it needs improvement."
    },
    {
      "type": "comparison",
      "title": "Testing visual robustness: practical check",
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
      "title": "Vision system in practice",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Intel%20Perceptual%20Computing%20Group%20piloting%20facial%20recognition%20app.jpg",
      "caption": "A real photograph showing a facial-recognition application being tested.",
      "alt": "A real photograph showing a facial-recognition application being tested.",
      "source": "Wikimedia Commons"
    }
  ],
  "importantPoints": [
    "Computer Vision extracts useful information from images or video.",
    "Digital images are numerical representations of pixels.",
    "RGB images commonly use red, green and blue channels.",
    "Classification, detection and segmentation produce different kinds of outputs.",
    "Training data should represent realistic variation in the intended environment.",
    "Lighting, viewpoint, background and camera conditions can affect performance.",
    "Privacy and consent are important when images contain identifiable people."
  ],
  "keyTerms": [
    {
      "term": "Computer Vision",
      "definition": "AI-related methods for extracting and interpreting information from images or video."
    },
    {
      "term": "Pixel",
      "definition": "A small digital picture element represented by numerical values."
    },
    {
      "term": "RGB",
      "definition": "A common colour representation using red, green and blue channels."
    },
    {
      "term": "Classification",
      "definition": "Assigning one or more class labels to an image or visual input."
    },
    {
      "term": "Object Detection",
      "definition": "Identifying object classes and their locations in an image or video frame."
    },
    {
      "term": "Segmentation",
      "definition": "Assigning labels to regions or pixels in an image."
    }
  ]
};
