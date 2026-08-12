"use strict";

/*
  Concept Quizzer — Class 6 Science — Chapter 1
  The Wonderful World of Science

  This is the universal chapter-data format used by notes.js.
  The chapter also contains five original virtual investigations.
  They are designed around the chapter's inquiry/scientific-thinking
  approach and include both chapter-linked and outside-chapter extensions.
*/

window.ChapterData = {
  id: "class6-science-the-wonderful-world-of-science",
  class: "6",
  subject: "Science",
  chapterNumber: 1,
  title: "The Wonderful World of Science",
  description: "Learn to think like a scientist: observe, ask, predict, test, record evidence and improve your explanation.",
  estimatedReadingTime: "30–40 minutes",
  difficulty: "Beginner",
  summary: "Science begins with curiosity. We observe the world, ask clear questions, propose testable explanations, investigate using fair tests, record evidence and use that evidence to reach or revise a conclusion. The same way of thinking can be used for everyday problems as well as classroom investigations.",

  sections: [
    {
      id: "wonder-and-curiosity",
      title: "1. Science Begins with Wonder",
      blocks: [
        {type:"paragraph", text:"Science is a way of understanding the world through observation, questions, investigation and evidence. It is not only a collection of facts to memorise."},
        {type:"example", title:"Everyday Science", text:"If a pen suddenly stops writing, a scientist does not simply guess. They look for possible causes, test them and use the evidence to decide what to try next."},
        {type:"application", title:"Think Like a Scientist", text:"Whenever something surprises you, ask: What did I observe? What could explain it? What can I change or test? What evidence would help me decide?"},
        {type:"fact", title:"Science Is for Everyone", text:"Scientific thinking can be used in the classroom, at home, in games, in sports, in cooking and while solving everyday problems."}
      ]
    },
    {
      id: "observe-and-question",
      title: "2. Observe and Ask a Good Question",
      blocks: [
        {type:"paragraph", text:"An observation is information noticed using our senses or obtained with a measuring instrument. A useful scientific question is clear enough that we can investigate it and collect evidence."},
        {type:"definition", title:"Observation", text:"A statement about what we notice or measure. For example: 'The ice cube on the metal tray became smaller faster than the one on the cloth.'"},
        {type:"definition", title:"Testable Question", text:"A question that can be investigated by changing a factor and observing or measuring the result."},
        {type:"example", title:"Better Question", text:"Instead of asking 'Which plant is better?', ask 'How does the amount of light affect the growth of this plant over seven days?'"},
        {type:"tip", title:"Question Check", text:"If you cannot imagine what you would change and what you would measure, improve the question before starting the test."}
      ]
    },
    {
      id: "hypothesis",
      title: "3. Make a Prediction or Hypothesis",
      blocks: [
        {type:"paragraph", text:"Before testing, a scientist can make a prediction. A hypothesis is a possible explanation that can be tested with evidence. A prediction does not have to be correct to be useful."},
        {type:"definition", title:"Hypothesis", text:"A testable possible explanation for an observation or question."},
        {type:"example", title:"Example", text:"If a plant receives more suitable light, then its healthy-leaf index may increase, because light is one of the conditions plants need for healthy growth."},
        {type:"warning", title:"Do Not Force the Answer", text:"If the evidence disagrees with your prediction, do not change the data. Reconsider the explanation and test again."}
      ]
    },
    {
      id: "fair-test",
      title: "4. Make the Test Fair",
      blocks: [
        {type:"paragraph", text:"A fair test changes one main factor while keeping other important conditions as constant as possible. This makes it easier to decide which factor may have caused the observed difference."},
        {type:"definition", title:"Variable", text:"A factor that can change in an investigation. The factor deliberately changed is the independent variable; the outcome observed or measured is the dependent variable."},
        {type:"example", title:"Plant Investigation", text:"If you are testing light, change the light condition while keeping the type of plant, container, soil and watering routine as similar as possible."},
        {type:"examTip", title:"Fair-Test Rule", text:"Change one main factor at a time when your aim is to find out which factor caused a difference."}
      ]
    },
    {
      id: "evidence-and-recording",
      title: "5. Record Evidence",
      blocks: [
        {type:"paragraph", text:"Evidence can include measurements, counts, times, drawings, photographs, descriptions and other observations. Recording evidence helps us compare trials instead of relying only on memory."},
        {type:"example", title:"Simple Data Table", text:"For an experiment with repeated trials, record the condition you changed, the measured result and any important observation for each trial."},
        {type:"application", title:"Repeat and Compare", text:"When practical, repeat a test. Similar results across repeated trials make the evidence more useful; a surprising result is a reason to investigate further."},
        {type:"tip", title:"Honest Data", text:"Record what actually happened, even when it is different from what you predicted."}
      ]
    },
    {
      id: "conclusion",
      title: "6. Explain, Conclude and Test Again",
      blocks: [
        {type:"paragraph", text:"A conclusion should be based on the evidence collected. If the evidence supports the prediction, explain how. If it does not, revise the hypothesis or the investigation and test again."},
        {type:"application", title:"Scientist's Cycle", text:"Observe → Ask → Predict → Test → Record → Explain → Ask a better question. Science is an ongoing process rather than a one-time guess."},
        {type:"summary", title:"Chapter Idea", text:"The most important skill in this chapter is not memorising a list of steps. It is learning to use evidence to make better explanations."}
      ]
    }
  ],

  importantPoints: [
    "Science uses observation, questions, investigation and evidence.",
    "A scientific question should be clear and testable.",
    "A hypothesis is a possible explanation that can be tested.",
    "A fair test changes one main factor while controlling important conditions.",
    "Record observations and measurements honestly.",
    "Repeat trials when practical to make evidence more useful.",
    "A conclusion must be based on evidence, not on what we hoped would happen.",
    "A surprising result is a reason to investigate further, not to hide the result."
  ],

  keyTerms: [
    "Science", "Observation", "Question", "Hypothesis", "Prediction", "Variable", "Fair Test", "Evidence", "Measurement", "Conclusion"
  ],

  /* =========================================================
     VIRTUAL LABS
     Each experiment is safe, simulated and intentionally
     adjustable. The calculate() functions return observable
     results from the student's chosen settings.
  ========================================================= */
  experiments: [
    {
      id: "pen-detective",
      title: "Pen Detective",
      badge: "Chapter-linked investigation",
      icon: "🖊️",
      goal: "A pen has stopped writing. Investigate possible causes instead of guessing.",
      question: "How do ink level and tip condition affect the pen's writing ability?",
      variables: ["Ink level", "Tip condition"],
      controls: [
        {id:"ink", label:"Ink level", type:"range", min:0, max:100, step:5, value:40, unit:"%"},
        {id:"tip", label:"Tip condition", type:"select", options:["Clear","Dry","Blocked"], values:["clear","dry","blocked"]}
      ],
      calculate: function(v){
        var penalty = v.tip === "clear" ? 0 : (v.tip === "dry" ? 45 : 75);
        var flow = Math.max(0, Math.round(v.ink - penalty));
        var verdict = flow >= 70 ? "Strong writing flow" : flow >= 30 ? "Weak or uneven writing" : "The pen is unlikely to write";
        return {headline: verdict, value: flow, unit:"/100 ink-flow index", explanation:"The simulation suggests that both available ink and tip condition can affect writing. Change one control at a time to identify which factor matters more."};
      }
    },
    {
      id: "plant-mystery",
      title: "Plant Mystery",
      badge: "Chapter-linked investigation",
      icon: "🌱",
      goal: "A virtual plant has weak, yellowing leaves. Change conditions and observe a simulated seven-day response.",
      question: "How do light, watering and soil nutrients affect the plant's health index?",
      variables: ["Light", "Watering", "Soil nutrients"],
      controls: [
        {id:"light", label:"Light per day", type:"range", min:2, max:12, step:1, value:6, unit:" h"},
        {id:"water", label:"Watering", type:"select", options:["Balanced","Too little","Too much"], values:["balanced","low","high"]},
        {id:"nutrient", label:"Soil nutrients", type:"select", options:["Adequate","Low"], values:["good","low"]}
      ],
      calculate: function(v){
        var score = 100 - Math.abs(v.light - 8) * 7 - (v.water === "balanced" ? 0 : 28) - (v.nutrient === "good" ? 0 : 24);
        score = Math.max(5, Math.min(100, Math.round(score)));
        var healthy = Math.round(score * 0.72);
        var yellow = 100 - healthy;
        return {headline:"7-day health index: "+healthy+"/100", value:healthy, unit:"health index", explanation:"In this simplified model, balanced watering, adequate nutrients and a suitable amount of light give the strongest result. Test one factor at a time to make a fair comparison."};
      }
    },
    {
      id: "ice-melt",
      title: "Ice Melt Race",
      badge: "Outside-chapter extension",
      icon: "🧊",
      goal: "Compare how changing the surroundings changes the simulated melting time of an ice cube.",
      question: "Which conditions make the ice melt faster?",
      variables: ["Temperature", "Surface"],
      controls: [
        {id:"temp", label:"Surrounding temperature", type:"range", min:5, max:40, step:1, value:25, unit:" °C"},
        {id:"surface", label:"Surface", type:"select", options:["Metal","Wood","Cloth"], values:["metal","wood","cloth"]},
        {id:"cube", label:"Ice cube size", type:"range", min:1, max:5, step:1, value:3, unit:" cm"}
      ],
      calculate: function(v){
        var surfaceFactor = v.surface === "metal" ? 0.75 : (v.surface === "wood" ? 1 : 1.25);
        var sizeFactor = v.cube * v.cube;
        var minutes = Math.max(3, Math.round((55 * sizeFactor * surfaceFactor) / Math.max(1, v.temp - 2)));
        return {headline:"Estimated melt time: "+minutes+" minutes", value:minutes, unit:"simulated minutes", explanation:"The simulation predicts faster melting with warmer surroundings and, in this simplified model, a heat-conducting metal surface. A larger cube takes longer."};
      }
    },
    {
      id: "ramp-cart",
      title: "Ramp Investigation",
      badge: "Outside-chapter extension",
      icon: "🛒",
      goal: "Release a virtual cart and investigate how slope, surface and cart mass change its travel.",
      question: "How does changing one factor affect the cart's motion?",
      variables: ["Slope", "Surface", "Mass"],
      controls: [
        {id:"slope", label:"Ramp slope", type:"range", min:5, max:35, step:1, value:15, unit:"°"},
        {id:"surface", label:"Surface", type:"select", options:["Smooth","Rough","Carpet"], values:["smooth","rough","carpet"]},
        {id:"mass", label:"Cart mass", type:"range", min:1, max:5, step:1, value:2, unit:" kg"}
      ],
      calculate: function(v){
        var friction = v.surface === "smooth" ? 1 : (v.surface === "rough" ? 0.68 : 0.42);
        var accelerationIndex = Math.max(1, Math.round((v.slope * friction * 4) / v.mass));
        var distance = Math.max(5, Math.round(accelerationIndex * 4));
        return {headline:"Travel distance index: "+distance+" cm", value:distance, unit:"simulated cm", explanation:"A steeper ramp tends to increase the motion in this simplified model, while rougher surfaces and greater mass reduce the travel distance."};
      }
    },
    {
      id: "paper-helicopter",
      title: "Paper Helicopter Lab",
      badge: "Outside-chapter extension",
      icon: "🚁",
      goal: "Change blade length, body mass and release height, then compare simulated falling time.",
      question: "Which design changes make the helicopter stay in the air longer?",
      variables: ["Blade length", "Mass", "Release height"],
      controls: [
        {id:"blade", label:"Blade length", type:"range", min:4, max:16, step:1, value:10, unit:" cm"},
        {id:"mass", label:"Paper mass", type:"range", min:1, max:5, step:1, value:2, unit:" g"},
        {id:"height", label:"Release height", type:"range", min:1, max:5, step:1, value:3, unit:" m"}
      ],
      calculate: function(v){
        var time = (0.7 + v.height * 0.32 + v.blade * 0.075 - v.mass * 0.08);
        time = Math.max(0.5, Number(time.toFixed(2)));
        return {headline:"Estimated fall time: "+time+" s", value:time, unit:"simulated seconds", explanation:"Longer blades and greater release height increase the simulated falling time, while extra mass reduces it in this simplified model. Repeat trials and change only one factor for a fair comparison."};
      }
    }
  ]
};
