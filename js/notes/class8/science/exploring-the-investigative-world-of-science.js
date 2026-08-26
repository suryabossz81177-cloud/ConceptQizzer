/*========================================================
  CONCEPT QUIZZER
  CLASS 8 SCIENCE — CHAPTER 1
  EXPLORING THE INVESTIGATIVE WORLD OF SCIENCE
  FULL DETAILED + COLOURFUL + VISUAL EDITION
========================================================*/

window.ChapterData = {
  id: "class8-science-exploring-the-investigative-world-of-science",
  class: 8,
  subject: "Science",
  chapterNumber: 1,
  title: "Exploring the Investigative World of Science",

  description:
    "A detailed introduction to scientific thinking: curiosity, observation, questions, investigation, fair testing, evidence, data, explanation, communication, critical thinking, scientific instruments, technology and the changing nature of scientific knowledge.",

  summary:
    "Science is a systematic way of trying to understand the natural world. Scientific thinking begins with curiosity and observation, develops through questions and investigations, and uses evidence and reasoning to build and improve explanations.",

  sections: [

    {
      id: "section-1",
      title: "🌍 1. Entering the Investigative World of Science",
      scienceBlocks: [
        {type:"paragraph", title:"🔬 What Is Science?", text:"Science is a systematic way of studying the natural world. It involves observing carefully, asking meaningful questions, collecting evidence, testing ideas, analysing results and developing explanations. Science is therefore not simply a collection of facts to memorise; it is also a way of thinking and investigating."},
        {type:"realLife", title:"🏠 Science Is Around You", text:"Cooking, growing plants, using electricity, travelling, predicting weather, treating illness, designing buildings and communicating over long distances all involve scientific ideas or knowledge."},
        {type:"fact", title:"🌟 The Big Idea", text:"Whenever you notice something, become curious about it, ask what might explain it and look for evidence, you are beginning to think scientifically."},
        {type:"visual", title:"🧭 The Scientific Thinking Journey", html:`
          <svg viewBox="0 0 900 420" style="width:100%;max-width:900px;background:#f8fbff;border-radius:24px">
            <defs><marker id="a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#334155"/></marker></defs>
            <circle cx="450" cy="210" r="72" fill="#4f46e5"/>
            <text x="450" y="205" text-anchor="middle" fill="white" font-size="25" font-weight="800">SCIENCE</text>
            <text x="450" y="232" text-anchor="middle" fill="white" font-size="16">thinking &amp; evidence</text>
            <g font-size="18" font-weight="800" text-anchor="middle">
              <rect x="40" y="60" width="150" height="90" rx="20" fill="#dbeafe"/><text x="115" y="95" fill="#1d4ed8">1. OBSERVE</text><text x="115" y="123" font-size="14">Notice</text>
              <rect x="260" y="35" width="150" height="90" rx="20" fill="#ede9fe"/><text x="335" y="70" fill="#6d28d9">2. ASK</text><text x="335" y="98" font-size="14">Question</text>
              <rect x="490" y="35" width="150" height="90" rx="20" fill="#dcfce7"/><text x="565" y="70" fill="#15803d">3. TEST</text><text x="565" y="98" font-size="14">Investigate</text>
              <rect x="710" y="60" width="150" height="90" rx="20" fill="#fef3c7"/><text x="785" y="95" fill="#b45309">4. EXPLAIN</text><text x="785" y="123" font-size="14">Use evidence</text>
              <rect x="600" y="290" width="180" height="90" rx="20" fill="#ffe4e6"/><text x="690" y="325" fill="#be123c">5. COMMUNICATE</text><text x="690" y="353" font-size="14">Share results</text>
              <rect x="120" y="290" width="180" height="90" rx="20" fill="#cffafe"/><text x="210" y="325" fill="#0e7490">6. REFLECT</text><text x="210" y="353" font-size="14">Ask again</text>
            </g>
            <path d="M190 105 H250" stroke="#334155" stroke-width="4" marker-end="url(#a)"/>
            <path d="M410 80 H480" stroke="#334155" stroke-width="4" marker-end="url(#a)"/>
            <path d="M640 105 H700" stroke="#334155" stroke-width="4" marker-end="url(#a)"/>
            <path d="M785 155 C820 230 780 275 720 290" fill="none" stroke="#334155" stroke-width="4" marker-end="url(#a)"/>
            <path d="M600 335 H320" stroke="#334155" stroke-width="4" marker-end="url(#a)"/>
            <path d="M120 290 C55 230 65 165 95 150" fill="none" stroke="#334155" stroke-width="4" marker-end="url(#a)"/>
          </svg>`},
        {type:"think", title:"🧠 Think About It", text:"Why might a scientist record an observation instead of simply remembering it? Because written measurements and notes can be compared later and reduce dependence on memory."}
      ]
    },

    {
      id: "section-2",
      title: "👀 2. Observation: The Starting Point",
      scienceBlocks: [
        {type:"paragraph", title:"Careful Observation", text:"Observation means carefully noticing and describing what happens. We can use our senses when it is safe to do so, but scientific instruments often make observations more precise."},
        {type:"definition", title:"Observation", text:"Information obtained by noticing, measuring or detecting something using senses or suitable instruments."},
        {type:"fact", title:"Qualitative Observation", text:"A qualitative observation describes a quality without using a numerical measurement. Example: 'The solution is blue.'"},
        {type:"fact", title:"Quantitative Observation", text:"A quantitative observation includes a number or measurement. Example: 'The temperature is 35°C.'"},
        {type:"visual", title:"🔍 Casual Looking vs Scientific Observation", html:`
          <svg viewBox="0 0 900 430" style="width:100%;max-width:900px;background:#f8fafc;border-radius:24px">
            <rect x="45" y="65" width="360" height="290" rx="28" fill="#f3e8ff"/>
            <text x="225" y="115" text-anchor="middle" font-size="25" font-weight="800" fill="#6d28d9">CASUAL LOOKING</text>
            <text x="225" y="180" text-anchor="middle" font-size="62">👀</text>
            <text x="225" y="245" text-anchor="middle" font-size="20">“The plant looks fine.”</text>
            <text x="225" y="285" text-anchor="middle" font-size="16">Few details recorded</text>
            <text x="225" y="315" text-anchor="middle" font-size="16">Mostly a quick impression</text>
            <rect x="495" y="65" width="360" height="290" rx="28" fill="#dbeafe"/>
            <text x="675" y="115" text-anchor="middle" font-size="25" font-weight="800" fill="#1d4ed8">SCIENTIFIC OBSERVATION</text>
            <text x="675" y="180" text-anchor="middle" font-size="62">🔬</text>
            <text x="675" y="245" text-anchor="middle" font-size="20">“The plant has 8 new leaves.”</text>
            <text x="675" y="285" text-anchor="middle" font-size="16">Details can be recorded</text>
            <text x="675" y="315" text-anchor="middle" font-size="16">Can be compared later</text>
          </svg>`},
        {type:"example", title:"🌱 Solved Example — Better Observation", text:"'The plant is growing well' is less precise than 'The plant increased in height from 12 cm to 15 cm in one week.' The second observation can be measured, recorded and compared."},
        {type:"experiment", title:"🧪 Mini Investigation — Which Surface Feels Warmer?", steps:["Keep a metal object and a wooden object in the same room for sufficient time.","Observe them safely and describe how they feel.","Do not treat touch alone as an exact temperature measurement.","If a suitable thermometer is available, measure both objects.","Record the readings and compare them.","Think about why the objects may feel different even when kept in the same room." ]},
        {type:"warning", title:"⚠️ Important", text:"An observation tells us what we notice or measure. It does not automatically tell us why it happened."}
      ]
    },

    {
      id: "section-3",
      title: "❓ 3. From Curiosity to Scientific Questions",
      scienceBlocks: [
        {type:"paragraph", title:"Questions Move Science Forward", text:"Curiosity encourages us to ask questions. A scientific question should be clear enough that observations or evidence can be gathered to investigate it."},
        {type:"definition", title:"Investigable Question", text:"A question that can be explored by collecting observations, measurements or other relevant evidence."},
        {type:"visual", title:"🔎 Observation → Question → Investigation", html:`
          <svg viewBox="0 0 900 330" style="width:100%;max-width:900px;background:#fff7ed;border-radius:24px">
            <rect x="35" y="75" width="245" height="165" rx="25" fill="#fed7aa"/>
            <text x="157" y="115" text-anchor="middle" font-size="23" font-weight="800" fill="#c2410c">OBSERVATION</text>
            <text x="157" y="160" text-anchor="middle" font-size="18">Plant bends</text>
            <text x="157" y="188" text-anchor="middle" font-size="18">towards a window 🌱</text>
            <text x="300" y="175" font-size="42">→</text>
            <rect x="330" y="75" width="245" height="165" rx="25" fill="#ede9fe"/>
            <text x="452" y="115" text-anchor="middle" font-size="23" font-weight="800" fill="#6d28d9">QUESTION</text>
            <text x="452" y="160" text-anchor="middle" font-size="17">Does light affect</text>
            <text x="452" y="188" text-anchor="middle" font-size="17">plant growth?</text>
            <text x="595" y="175" font-size="42">→</text>
            <rect x="625" y="75" width="240" height="165" rx="25" fill="#dcfce7"/>
            <text x="745" y="115" text-anchor="middle" font-size="23" font-weight="800" fill="#15803d">INVESTIGATION</text>
            <text x="745" y="160" text-anchor="middle" font-size="17">Compare plants</text>
            <text x="745" y="188" text-anchor="middle" font-size="17">under controlled conditions</text>
          </svg>`},
        {type:"table", title:"Weak Question vs Investigable Question", rows:[["Less specific","More investigable"],["Why is the plant healthy?","How does the amount of water affect plant growth?"],["Why is ice melting?","How does temperature affect the melting time of ice?"],["Why do objects move?","How does the slope affect how far a toy car travels?"]]},
        {type:"example", title:"Solved Example", text:"Observation: an ice cube melts faster on a warm surface. Question: 'How does surface temperature affect the time taken by an ice cube to melt?' The second statement is more suitable for investigation because a temperature can be varied or measured and melting time can be recorded."},
        {type:"think", title:"🧠 Question Challenge", text:"Turn this vague question into an investigable one: 'Why does a plant grow?' A stronger question could specify one factor, such as water amount, light exposure or temperature."}
      ]
    },

    {
      id: "section-4",
      title: "🧪 4. Planning an Investigation",
      scienceBlocks: [
        {type:"paragraph", title:"From Question to Test", text:"Once a question has been chosen, the investigation needs a plan. A good plan identifies what will be changed, what will be measured or observed, what will be kept the same and how the results will be recorded."},
        {type:"definition", title:"Investigation", text:"A planned process of collecting observations or evidence to answer a scientific question."},
        {type:"fact", title:"Fair Test", text:"A fair test changes one important factor while keeping other relevant conditions as constant as reasonably possible, so that the effect of the changed factor can be examined."},
        {type:"table", title:"Three Important Parts of a Fair Test", rows:[["Part","Meaning","Example: Plant Growth"],["Independent variable","Factor deliberately changed","Amount of water"],["Dependent variable","Factor measured or observed","Plant height"],["Controlled variables","Relevant conditions kept the same","Plant type, soil, pot size, light conditions"]]},
        {type:"visual", title:"⚙️ Planning a Fair Test", html:`
          <svg viewBox="0 0 900 430" style="width:100%;max-width:900px;background:#eff6ff;border-radius:24px">
            <rect x="45" y="80" width="240" height="250" rx="25" fill="#dbeafe"/>
            <text x="165" y="125" text-anchor="middle" font-size="23" font-weight="800" fill="#1d4ed8">CHANGE</text>
            <text x="165" y="180" text-anchor="middle" font-size="20">Independent</text>
            <text x="165" y="212" text-anchor="middle" font-size="20">variable</text>
            <text x="165" y="255" text-anchor="middle" font-size="18">Example:</text>
            <text x="165" y="285" text-anchor="middle" font-size="18">water amount</text>
            <text x="300" y="215" font-size="44">→</text>
            <rect x="330" y="80" width="240" height="250" rx="25" fill="#dcfce7"/>
            <text x="450" y="125" text-anchor="middle" font-size="23" font-weight="800" fill="#15803d">MEASURE</text>
            <text x="450" y="180" text-anchor="middle" font-size="20">Dependent</text>
            <text x="450" y="212" text-anchor="middle" font-size="20">variable</text>
            <text x="450" y="255" text-anchor="middle" font-size="18">Example:</text>
            <text x="450" y="285" text-anchor="middle" font-size="18">plant height</text>
            <text x="585" y="215" font-size="44">→</text>
            <rect x="615" y="80" width="240" height="250" rx="25" fill="#fef3c7"/>
            <text x="735" y="125" text-anchor="middle" font-size="23" font-weight="800" fill="#b45309">CONTROL</text>
            <text x="735" y="180" text-anchor="middle" font-size="20">Keep relevant</text>
            <text x="735" y="212" text-anchor="middle" font-size="20">conditions same</text>
            <text x="735" y="255" text-anchor="middle" font-size="18">soil, pot, plant</text>
            <text x="735" y="285" text-anchor="middle" font-size="18">light conditions</text>
          </svg>`},
        {type:"experiment", title:"🧪 Activity — Paper Helicopter Investigation", steps:["Make a simple paper helicopter using the same basic design.","Drop it from the same height several times.","Record the time taken to reach the ground.","Change one feature, such as wing length.","Repeat the drops from the same height.","Compare the recorded times."], text:"Investigable question: Does changing wing length affect the time taken by the paper helicopter to fall?"},
        {type:"safety", title:"🛡️ Safety First", text:"Science activities should be planned with safety in mind. Do not taste unknown substances, do not touch hazardous materials, and follow teacher or laboratory instructions for equipment and chemicals."}
      ]
    },

    {
      id: "section-5",
      title: "📊 5. Evidence, Data and Measurements",
      scienceBlocks: [
        {type:"paragraph", title:"Evidence Is More Than a Guess", text:"Evidence is information that can support, evaluate or challenge an explanation. Evidence may come from observations, measurements, repeated trials, records or other reliable sources."},
        {type:"definition", title:"Evidence", text:"Information that can be used to support, evaluate or challenge a scientific explanation or claim."},
        {type:"definition", title:"Data", text:"Recorded observations or measurements collected during an investigation."},
        {type:"fact", title:"📏 Why Measurements Matter", text:"Measurements can make observations more precise and easier to compare. A thermometer, ruler, balance, stopwatch or measuring cylinder can extend our ability to observe quantitatively."},
        {type:"visual", title:"📋 Turning Observations Into Data", html:`
          <svg viewBox="0 0 900 420" style="width:100%;max-width:900px;background:#ecfeff;border-radius:24px">
            <text x="450" y="45" text-anchor="middle" font-size="25" font-weight="800" fill="#0e7490">Example: Plant Height</text>
            <rect x="115" y="85" width="670" height="245" rx="18" fill="white" stroke="#0891b2" stroke-width="3"/>
            <line x1="115" y1="140" x2="785" y2="140" stroke="#0891b2" stroke-width="3"/>
            <line x1="335" y1="85" x2="335" y2="330" stroke="#0891b2" stroke-width="3"/>
            <text x="225" y="120" text-anchor="middle" font-size="20" font-weight="800">Day</text>
            <text x="560" y="120" text-anchor="middle" font-size="20" font-weight="800">Height</text>
            <text x="225" y="180" text-anchor="middle" font-size="18">1</text><text x="560" y="180" text-anchor="middle" font-size="18">10 cm</text>
            <line x1="115" y1="205" x2="785" y2="205" stroke="#bae6fd" stroke-width="2"/>
            <text x="225" y="245" text-anchor="middle" font-size="18">5</text><text x="560" y="245" text-anchor="middle" font-size="18">13 cm</text>
            <line x1="115" y1="270" x2="785" y2="270" stroke="#bae6fd" stroke-width="2"/>
            <text x="225" y="310" text-anchor="middle" font-size="18">10</text><text x="560" y="310" text-anchor="middle" font-size="18">17 cm</text>
          </svg>`},
        {type:"table", title:"Example Data Table", rows:[["Day","1","5","10"],["Plant height","10 cm","13 cm","17 cm"]]},
        {type:"example", title:"Solved Example — Interpreting Data", text:"The plant increased from 10 cm on Day 1 to 17 cm on Day 10. The measured increase is 7 cm. The data shows a change, but by itself it does not prove why the plant grew."},
        {type:"warning", title:"⚠️ Observation ≠ Explanation", text:"'The plant grew 7 cm' is an observation. 'The plant grew because it received more sunlight' is an explanation that needs evidence."}
      ]
    },

    {
      id: "section-6",
      title: "📈 6. Tables, Graphs and Patterns",
      scienceBlocks: [
        {type:"paragraph", title:"Making Data Easier to See", text:"Tables organise data. Graphs can make comparisons, changes and patterns easier to see. Choosing a suitable graph depends on the type of data and the question being investigated."},
        {type:"visual", title:"📈 Example: Plant Growth Graph", html:`
          <svg viewBox="0 0 900 500" style="width:100%;max-width:900px;background:#f8fafc;border-radius:24px">
            <line x1="110" y1="420" x2="820" y2="420" stroke="#111827" stroke-width="4"/>
            <line x1="110" y1="70" x2="110" y2="420" stroke="#111827" stroke-width="4"/>
            ${[0,5,10,15,20].map((v,i)=>`<text x="70" y="${425-i*70}" font-size="17">${v}</text><line x1="110" y1="${420-i*70}" x2="820" y2="${420-i*70}" stroke="#e5e7eb"/>`).join("")}
            ${[1,5,10].map((v,i)=>`<text x="${170+i*280}" y="455" text-anchor="middle" font-size="17">Day ${v}</text>`).join("")}
            <polyline points="170,350 450,280 730,182" fill="none" stroke="#16a34a" stroke-width="7"/>
            <circle cx="170" cy="350" r="9" fill="#dc2626"/><circle cx="450" cy="280" r="9" fill="#dc2626"/><circle cx="730" cy="182" r="9" fill="#dc2626"/>
            <text x="450" y="45" text-anchor="middle" font-size="24" font-weight="800">Plant height over time</text>
            <text x="450" y="490" text-anchor="middle" font-size="19">Time</text>
            <text x="25" y="250" transform="rotate(-90 25 250)" text-anchor="middle" font-size="19">Height (cm)</text>
          </svg>`},
        {type:"example", title:"Solved Example — Pattern vs Cause", text:"If plant height increases as days pass, the graph shows a pattern. It does not automatically prove that the passing of time itself caused the growth. Other factors such as water, light, temperature and soil may be involved."},
        {type:"fact", title:"🧠 Pattern Does Not Automatically Mean Causation", text:"Two quantities may change together without one causing the other. A scientific investigation must consider alternative explanations and appropriate evidence."},
        {type:"think", title:"Think About It", text:"If students who sleep more hours tend to score higher, does that alone prove that sleeping more causes higher scores? What other factors might need to be considered?"}
      ]
    },

    {
      id: "section-7",
      title: "🔎 7. Explanations, Predictions and Scientific Reasoning",
      scienceBlocks: [
        {type:"definition", title:"Explanation", text:"An explanation attempts to describe why or how an observed phenomenon happens."},
        {type:"definition", title:"Prediction", text:"A prediction is an expectation about what may happen, based on observations, patterns or existing knowledge."},
        {type:"visual", title:"🧠 Observation, Explanation and Prediction", html:`
          <svg viewBox="0 0 900 360" style="width:100%;max-width:900px;background:#faf5ff;border-radius:24px">
            <rect x="40" y="90" width="250" height="180" rx="25" fill="#dbeafe"/>
            <text x="165" y="130" text-anchor="middle" font-size="23" font-weight="800" fill="#1d4ed8">OBSERVATION</text>
            <text x="165" y="175" text-anchor="middle" font-size="17">What happened?</text>
            <text x="165" y="210" text-anchor="middle" font-size="17">“Ice became smaller.”</text>
            <rect x="325" y="90" width="250" height="180" rx="25" fill="#ede9fe"/>
            <text x="450" y="130" text-anchor="middle" font-size="23" font-weight="800" fill="#6d28d9">EXPLANATION</text>
            <text x="450" y="175" text-anchor="middle" font-size="17">Why/how might it happen?</text>
            <text x="450" y="210" text-anchor="middle" font-size="17">“Heat transfers to the ice.”</text>
            <rect x="610" y="90" width="250" height="180" rx="25" fill="#dcfce7"/>
            <text x="735" y="130" text-anchor="middle" font-size="23" font-weight="800" fill="#15803d">PREDICTION</text>
            <text x="735" y="175" text-anchor="middle" font-size="17">What may happen next?</text>
            <text x="735" y="210" text-anchor="middle" font-size="17">“Warmer conditions may melt it faster.”</text>
          </svg>`},
        {type:"example", title:"Solved Example — Music and Plant Growth", text:"Claim: 'My plant grew faster because I played music near it.' The observation may be true, but it does not by itself establish the cause. Light, water, soil, temperature and other factors could also affect growth. A fair comparison and repeated measurements would provide stronger evidence."},
        {type:"think", title:"🧠 Reasoning Question", text:"Why is 'I don't know yet' sometimes a scientific answer? Because recognising uncertainty can prevent unsupported conclusions and encourage better questions and further investigation."}
      ]
    },

    {
      id: "section-8",
      title: "🔁 8. Repetition, Reliability and Improving Investigations",
      scienceBlocks: [
        {type:"paragraph", title:"Why Repeat an Investigation?", text:"Repeating measurements or trials helps us see whether a result is consistent. A single unusual result may arise from measurement error, an uncontrolled condition or natural variation."},
        {type:"fact", title:"Repeatability", text:"If an investigation produces similar results when repeated under comparable conditions, confidence in the consistency of the result can increase."},
        {type:"warning", title:"⚠️ Repetition Is Not a Guarantee", text:"Repeating an investigation does not automatically prove that an explanation is correct. It strengthens the evidence when the investigation is well designed and the results are consistent."},
        {type:"example", title:"Solved Example — Three Trials", text:"A paper helicopter takes 2.1 s, 2.0 s and 2.2 s to fall. These results are close to one another. A fourth trial can help check consistency further. If one trial suddenly gives 5.8 s, that result should be examined rather than silently ignored."},
        {type:"table", title:"Improving an Investigation", rows:[["Problem","Possible improvement"],["Inconsistent drop height","Use the same measured height"],["Timing by hand only once","Repeat trials and use a consistent timing method"],["Changing several factors","Change one main factor at a time where appropriate"],["No written record","Use a data table immediately"]]}
      ]
    },

    {
      id: "section-9",
      title: "🔬 9. Scientific Instruments Extend Our Senses",
      scienceBlocks: [
        {type:"paragraph", title:"Seeing Beyond Ordinary Observation", text:"Our senses are useful but have limits. Scientific instruments allow scientists to measure or detect things that are too small, distant, faint, fast, slow or otherwise difficult to observe directly."},
        {type:"table", title:"Instrument and Purpose", rows:[["Instrument","Useful for"],["Ruler / metre scale","Measuring length"],["Thermometer","Measuring temperature"],["Balance","Measuring mass"],["Stopwatch","Measuring time intervals"],["Microscope","Observing very small structures"],["Telescope","Observing distant objects"],["Sensor","Detecting or measuring a physical quantity"]]},
        {type:"visual", title:"🔬 Instruments Extend Observation", html:`
          <svg viewBox="0 0 900 390" style="width:100%;max-width:900px;background:#eef2ff;border-radius:24px">
            <g font-size="17" font-weight="800" text-anchor="middle">
              <rect x="35" y="80" width="185" height="220" rx="24" fill="#dbeafe"/><text x="127" y="125" fill="#1d4ed8">EYES 👀</text><text x="127" y="175">Ordinary</text><text x="127" y="205">observation</text><text x="127" y="245" font-size="14">Useful but limited</text>
              <text x="245" y="195" font-size="40">→</text>
              <rect x="290" y="80" width="185" height="220" rx="24" fill="#dcfce7"/><text x="382" y="125" fill="#15803d">INSTRUMENTS 🔬</text><text x="382" y="175">Measure</text><text x="382" y="205">more precisely</text><text x="382" y="245" font-size="14">Extend our senses</text>
              <text x="500" y="195" font-size="40">→</text>
              <rect x="545" y="80" width="320" height="220" rx="24" fill="#fef3c7"/><text x="705" y="125" fill="#b45309">BETTER EVIDENCE</text><text x="705" y="175">Record</text><text x="705" y="205">compare</text><text x="705" y="235">analyse</text><text x="705" y="270" font-size="14">build stronger explanations</text>
            </g>
          </svg>`},
        {type:"realLife", title:"🌍 Real-Life Connection", text:"Weather stations use sensors to measure temperature, pressure, humidity and wind. Doctors use instruments to measure body-related quantities. Astronomers use telescopes to study distant objects in space."}
      ]
    },

    {
      id: "section-10",
      title: "⚙️ 10. Science and Technology",
      scienceBlocks: [
        {type:"paragraph", title:"Science and Technology Are Connected", text:"Science mainly seeks to understand the natural world, while technology applies knowledge, materials, designs and processes to practical purposes. The two can support each other."},
        {type:"table", title:"Science and Technology", rows:[["Science","Technology"],["Seeks to understand natural phenomena","Applies knowledge to practical purposes"],["Develops explanations and evidence","Develops tools, systems and solutions"],["Can benefit from new instruments","Can use scientific discoveries and principles"]]},
        {type:"example", title:"Example", text:"Improved scientific understanding can lead to new instruments. At the same time, better instruments can allow scientists to make observations that were previously impossible."},
        {type:"fact", title:"🚀 Technology and the Future", text:"Future technologies may help in energy, health, robotics, communication, environmental monitoring and space exploration. New technologies should be considered for usefulness, safety and wider effects."},
        {type:"think", title:"Think Critically", text:"A new technology may solve one problem while creating another. Scientific and technological decisions therefore need evidence, testing, safety checks and consideration of wider consequences."}
      ]
    },

    {
      id: "section-11",
      title: "🧠 11. Critical Thinking About Scientific Claims",
      scienceBlocks: [
        {type:"paragraph", title:"Do Not Accept Every Claim Automatically", text:"Scientific thinking means examining claims carefully. When you hear that something is 'scientifically proven', ask what evidence supports the statement and how that evidence was obtained."},
        {type:"table", title:"Questions to Ask About a Scientific Claim", rows:[["Question","Why ask it?"],["What is the evidence?","A claim needs supporting information."],["How was it measured?","Measurement method affects reliability."],["Was the test fair?","Uncontrolled factors may influence results."],["Was it repeated?","Repeated results can strengthen confidence."],["Could another explanation fit?","A pattern may have more than one possible explanation."],["Is more evidence needed?","Science remains open to further testing."]]},
        {type:"example", title:"Solved Example — A Scientific-Sounding Advertisement", text:"An advertisement says, 'Students using our special pen score twice as well.' Before accepting it, ask: How many students? Compared with what? Were the groups similar? How were scores measured? Was the test repeated? A scientific claim should be evaluated using evidence rather than impressive wording."},
        {type:"warning", title:"⚠️ Common Misconception", text:"A statement does not become scientific merely because the word 'science' appears in an advertisement, video or social-media post."}
      ]
    },

    {
      id: "section-12",
      title: "🔄 12. How Scientific Ideas Change",
      scienceBlocks: [
        {type:"paragraph", title:"Science Is Always Growing", text:"Scientific knowledge is not a finished collection of facts. Scientists continue to observe, investigate, test ideas and collect evidence. When new reliable evidence appears, an explanation may be strengthened, refined, modified or replaced by a better explanation."},
        {type:"visual", title:"🌱 Growth of Scientific Understanding", html:`
          <svg viewBox="0 0 900 400" style="width:100%;max-width:900px;background:#faf5ff;border-radius:24px">
            <path d="M100 300 C200 275 170 220 290 205 C390 190 350 135 480 150 C580 165 570 95 700 90 C760 88 800 65 835 55" fill="none" stroke="#7c3aed" stroke-width="9"/>
            <g font-size="17" font-weight="800" text-anchor="middle">
              <circle cx="100" cy="300" r="28" fill="#ddd6fe"/><text x="100" y="350">Early idea</text>
              <circle cx="290" cy="205" r="28" fill="#c4b5fd"/><text x="290" y="255">Observation</text>
              <circle cx="480" cy="150" r="28" fill="#a78bfa"/><text x="480" y="110">Testing</text>
              <circle cx="700" cy="90" r="28" fill="#8b5cf6"/><text x="700" y="140">New evidence</text>
              <circle cx="835" cy="55" r="28" fill="#7c3aed"/><text x="835" y="105">Improved idea</text>
            </g>
            <text x="450" y="385" text-anchor="middle" font-size="21" font-weight="800">Scientific understanding can grow through evidence and revision.</text>
          </svg>`},
        {type:"fact", title:"💡 'I Don't Know Yet' Is Scientific", text:"Recognising uncertainty can lead to better questions and further investigations. Changing an explanation when reliable evidence requires it is a strength of scientific thinking, not a weakness."},
        {type:"example", title:"Solved Example — Revising an Explanation", text:"Suppose an initial explanation fits a set of observations. Later, a carefully measured observation does not fit it. A scientist should examine the new evidence, check the investigation and consider whether the explanation needs modification."},
        {type:"think", title:"🧠 Think", text:"Why should a scientific explanation remain open to testing? Because future evidence may reveal limitations, additional factors or a better explanation."}
      ]
    },

    {
      id: "section-13",
      title: "🧪 13. Complete Investigation Example",
      scienceBlocks: [
        {type:"paragraph", title:"Case Study — What Affects Ice-Cube Melting?", text:"Imagine that you want to investigate whether the surrounding temperature affects how quickly an ice cube melts. The goal is not to guess the answer but to design a fair investigation and collect evidence."},
        {type:"experiment", title:"Step 1 — Question", text:"How does surrounding temperature affect the time taken for an ice cube of similar size to melt?"},
        {type:"experiment", title:"Step 2 — Prediction", text:"A prediction could be that an ice cube in a warmer surrounding environment will melt faster."},
        {type:"experiment", title:"Step 3 — Plan", steps:["Use ice cubes of as similar a size as reasonably possible.","Place them in environments with different measured temperatures.","Keep the container type and other relevant conditions as similar as possible.","Use a stopwatch to measure melting time.","Repeat the investigation to check consistency.","Record every result in a table."]},
        {type:"observation", title:"Step 4 — Record Evidence", text:"Record temperature, melting time and any unusual observation. Do not replace a measured value with a guess."},
        {type:"example", title:"Step 5 — Analyse", text:"Compare the melting times at the different temperatures. A pattern may appear. Then ask whether the evidence supports the prediction and whether other factors could have affected the results."},
        {type:"fact", title:"Step 6 — Conclusion", text:"A conclusion should answer the original question using the evidence collected. It should not claim more than the investigation supports."},
        {type:"examTip", title:"Step 7 — Communicate", text:"A clear scientific report can include the question, prediction, materials, method, observations/data, analysis, conclusion and possible improvements."}
      ]
    },

    {
      id: "section-14",
      title: "🧩 14. Common Misconceptions",
      scienceBlocks: [
        {type:"warning", title:"❌ Misconception 1", text:"Science means memorising textbook facts. Correct idea: science includes observing, questioning, investigating, analysing evidence and developing explanations."},
        {type:"warning", title:"❌ Misconception 2", text:"One observation proves the cause. Correct idea: an observation may suggest a question or explanation, but further evidence may be needed."},
        {type:"warning", title:"❌ Misconception 3", text:"A pattern automatically proves cause and effect. Correct idea: association does not automatically establish causation."},
        {type:"warning", title:"❌ Misconception 4", text:"A scientific explanation can never change. Correct idea: reliable new evidence can strengthen, modify or challenge an explanation."},
        {type:"warning", title:"❌ Misconception 5", text:"Our senses always give exact measurements. Correct idea: senses are useful for observation, but instruments can provide more consistent and precise measurements."}
      ]
    },

    {
      id: "section-15",
      title: "🎯 15. Exam Zone",
      scienceBlocks: [
        {type:"fact", title:"⭐ Must Remember", text:"Science is based on observation, questioning, investigation, evidence and reasoning."},
        {type:"fact", title:"👀 Observation", text:"Observation describes what is noticed or measured."},
        {type:"fact", title:"🔎 Evidence", text:"Evidence supports, evaluates or challenges an explanation."},
        {type:"fact", title:"❓ Prediction", text:"A prediction is an expectation about what may happen based on observations, patterns or knowledge."},
        {type:"fact", title:"📊 Data", text:"Data consists of recorded observations or measurements that can be organised and analysed."},
        {type:"examTip", title:"🎯 Exam Tip", text:"When answering 'why' questions, distinguish between what was observed and the explanation for it. When describing an investigation, mention the question, variables/conditions, measurements, observations, results and conclusion."},
        {type:"table", title:"High-Value Differences", rows:[["Observation","Explanation"],["What is noticed or measured","Why or how something may happen"],["Can be recorded directly","Needs supporting reasoning/evidence"],["Example: temperature is 40°C","Example: the object warmed because it received heat"]]}
      ]
    },

    {
      id: "section-16",
      title: "📝 16. Practice Questions",
      scienceBlocks: [
        {type:"paragraph", title:"Level 1 — Basic", text:"1. What is science? 2. Define observation. 3. What is evidence? 4. What is a prediction? 5. Name two scientific instruments and what they measure."},
        {type:"paragraph", title:"Level 2 — Understanding", text:"6. Distinguish between qualitative and quantitative observations. 7. Why should observations be recorded? 8. Why is an investigable question better than a vague question?"},
        {type:"paragraph", title:"Level 3 — Application", text:"9. A wet cloth dries faster in one place than another. Write one observation, one investigable question and one measurement you could take. 10. Design a simple investigation to compare two surfaces for toy-car movement."},
        {type:"paragraph", title:"Level 4 — Reasoning", text:"11. A student says, 'My plant grew after I played music, so music caused the growth.' What evidence is missing? 12. Why can a pattern fail to prove cause and effect?"},
        {type:"paragraph", title:"Level 5 — HOTS", text:"13. A result is very different from all other trials. Should it automatically be deleted? Explain what a careful scientist should do. 14. Explain how better instruments can change scientific understanding."},
        {type:"paragraph", title:"Level 6 — Investigation", text:"15. Write a complete investigation plan for: 'Does water temperature affect how quickly sugar dissolves?' Include question, prediction, changed factor, measured factor, controls, observations and conclusion."}
      ]
    },

    {
      id: "section-17",
      title: "🏆 17. Science Detective Challenge",
      scienceBlocks: [
        {type:"example", title:"Challenge 1 — The Plant Mystery", text:"Two identical-looking plants are kept in different locations. One grows faster. Create three possible explanations, then decide what evidence would help distinguish among them."},
        {type:"example", title:"Challenge 2 — The Spoon Mystery", text:"A metal spoon and a wooden spoon kept in the same room feel different to touch. Write three observations, one investigable question, one possible explanation and one measurement that could improve the investigation."},
        {type:"example", title:"Challenge 3 — The Advertisement", text:"A product claims to improve concentration by 50%. Design five questions you would ask before accepting the claim as reliable scientific evidence."},
        {type:"example", title:"Challenge 4 — Build Your Own Investigation", text:"Choose an everyday mystery. Write: observation → question → prediction → changed factor → measured factor → two controlled conditions → procedure → data table plan → possible conclusion → one improvement."},
        {type:"think", title:"🧠 Scientist Mindset", text:"A strong scientist is not the person who always guesses correctly. A strong scientist is willing to test ideas, examine evidence, recognise uncertainty and improve explanations."}
      ]
    },

    {
      id: "section-18",
      title: "🔄 18. Chapter Revision",
      scienceBlocks: [
        {type:"process", title:"Quick Scientific Thinking Cycle", text:"Observe → Ask → Predict when appropriate → Plan → Test/Investigate → Record data → Analyse → Explain → Communicate → Reflect → Ask a new question."},
        {type:"fact", title:"🔬 Core Concepts", text:"Observation tells what happened. An explanation attempts to tell why/how. Evidence supports or challenges explanations. Predictions can be tested. Tables and graphs organise data. Repetition can check consistency. Scientific ideas can change with reliable new evidence."},
        {type:"table", title:"One-Minute Revision Table", rows:[["Term","Remember"],["Observation","What is noticed or measured"],["Question","What we want to investigate"],["Prediction","What may happen"],["Evidence","Information supporting/evaluating an explanation"],["Data","Recorded observations/measurements"],["Conclusion","Evidence-based response to the question"]]}
      ]
    },

    {
      id: "section-19",
      title: "⭐ 19. Important Points",
      scienceBlocks: [
        {type:"important", title:"1. Science Is Investigative", text:"Science is a continuing process of observing, questioning, testing, reasoning and learning."},
        {type:"important", title:"2. Observation Comes Before Explanation", text:"Describe what is actually noticed or measured before deciding why it happened."},
        {type:"important", title:"3. Evidence Matters", text:"Scientific claims should be evaluated using reliable evidence rather than guesses or opinions."},
        {type:"important", title:"4. Patterns Need Careful Interpretation", text:"A pattern can suggest a relationship, but it does not automatically prove causation."},
        {type:"important", title:"5. Scientific Knowledge Can Change", text:"Reliable new evidence can strengthen, refine, modify or challenge an existing explanation."},
        {type:"important", title:"6. Science Is Everywhere", text:"Everyday life, nature, health, technology, agriculture, transport and space all provide opportunities for scientific thinking."}
      ]
    },

    {
      id: "section-20",
      title: "🔑 20. Key Terms",
      scienceBlocks: [
        {type:"definition", title:"Science", text:"A systematic way of studying and understanding the natural world using observation, evidence, reasoning and investigation."},
        {type:"definition", title:"Observation", text:"Information obtained by noticing, measuring or detecting something."},
        {type:"definition", title:"Evidence", text:"Information used to support, evaluate or challenge an explanation."},
        {type:"definition", title:"Investigation", text:"A planned process of collecting observations or evidence to answer a scientific question."},
        {type:"definition", title:"Fair Test", text:"An investigation in which relevant conditions are controlled while the factor being studied is changed appropriately."},
        {type:"definition", title:"Data", text:"Recorded observations or measurements collected during an investigation."},
        {type:"definition", title:"Explanation", text:"An attempt to describe why or how a phenomenon occurs."},
        {type:"definition", title:"Prediction", text:"An expectation about what may happen based on observations, patterns or knowledge."},
        {type:"definition", title:"Variable", text:"A factor or quantity that can change in an investigation."},
        {type:"definition", title:"Scientific Instrument", text:"A tool used to observe, detect or measure phenomena more precisely or in situations where ordinary senses are limited."}
      ]
    },

    {
      id: "section-21",
      title: "📖 21. Chapter Summary",
      scienceBlocks: [
        {type:"summary", title:"Complete Chapter Summary", text:"Science is a systematic and continuing way of understanding the natural world. It begins with curiosity and careful observation. Observations can lead to clear, investigable questions. Investigations are planned to collect useful evidence, often by changing one factor, measuring another and controlling relevant conditions. Data can be recorded in tables and represented using graphs so that patterns and comparisons become easier to see. Scientists distinguish observations from explanations and predictions, and they do not treat a single observation or pattern as automatic proof of cause. Repeated investigations can strengthen confidence in consistent results. Instruments extend our senses and allow more precise measurements. Science and technology support each other, while scientific claims should always be examined critically. Most importantly, scientific knowledge can improve when reliable new evidence appears. Scientific thinking is therefore a continuing cycle of curiosity, observation, questioning, investigation, evidence, reasoning, communication and new questions."}
      ]
    }
  ],

  importantPoints: [
    "Science is a systematic way of studying the natural world.",
    "Curiosity and observation can lead to scientific questions.",
    "Observation describes what is noticed or measured.",
    "Evidence is used to support, evaluate or challenge explanations.",
    "Predictions can be tested through investigations.",
    "Tables and graphs help organise and analyse data.",
    "A pattern does not automatically prove cause and effect.",
    "Repeated investigations can help check consistency.",
    "Scientific instruments extend our ability to observe and measure.",
    "Scientific explanations can change when reliable new evidence becomes available.",
    "Science and technology are connected but have different primary purposes.",
    "Scientific claims should be evaluated critically."
  ],

  keyTerms: [
    "Science",
    "Observation",
    "Evidence",
    "Investigation",
    "Fair Test",
    "Data",
    "Variable",
    "Explanation",
    "Prediction",
    "Scientific Instrument",
    "Measurement",
    "Conclusion",
    "Scientific Reasoning"
  ]
};
