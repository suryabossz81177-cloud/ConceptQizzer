window.ChapterData = {

  id: "7-science-electricity-circuits-and-their-components",

  class: 7,

  subject: "Science",

  chapterNumber: 4,

  title: "Electricity: Circuits and Their Components",

  description:
    "A detailed, visual journey through electric circuits, cells and batteries, switches, loads, conductors and insulators, circuit diagrams, series and parallel arrangements, troubleshooting and electrical safety.",

  sections: [

{
  id: "section-1",
  title: "⚡ Enter the World of Electricity",
  blocks: [
    {
      type: "scienceHero",
      theme: "purple",
      title: "⚡ Enter the World of Electricity",
      subtitle: "What is electricity and why do circuits need a complete path?",
      text: "Electricity is closely connected with electric charges and the movement of charge. In everyday devices, a useful electric effect is obtained when a suitable source, conducting path and component are connected to form a circuit.",
      accent: "#7C3AED"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Electricity is closely connected with electric charges and the movement of charge. In everyday devices, a useful electric effect is obtained when a suitable source, conducting path and component are connected to form a circuit."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "yellow",
      title: "🔋 A Source of Electrical Energy",
      text: "A cell or battery provides electrical energy that can drive current through a circuit. A battery may contain one or more cells connected together."
    },

    {
      type: "colourCard",
      colour: "blue",
      title: "🔌 What Is an Electric Circuit?",
      text: "An electric circuit is a complete conducting path through which electric current can flow. A gap in the path can stop the intended current."
    },

    {
      type: "colourCard",
      colour: "green",
      title: "💡 From Source to Device",
      text: "A lamp, buzzer, motor or other component can convert electrical energy into light, sound, motion or heat."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 1",
      question: "Why does a bulb not glow when a circuit has a gap?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "Because the conducting path is incomplete, so the circuit does not provide a continuous path for current."
    },

    {
      type: "activity",
      title: "Build-a-Circuit Investigation",
      materials: [
        "Cell or battery holder",
        "Small bulb in a holder",
        "Insulated connecting wires",
        "Switch"
      ],
      procedure: [
        "Connect the source, wires, switch and bulb so they form one continuous loop.",
        "Close the switch and observe the bulb.",
        "Open the switch and observe again.",
        "Record what changes when the path is broken."
      ],
      observation: "The bulb glows when the circuit is complete and stops glowing when the circuit is opened.",
      conclusion: "A complete circuit is required for the intended current path."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "Define an electric circuit.",
          answer: "A complete conducting path through which electric current can flow."
        },
        {
          question: "What is the role of a cell in a simple circuit?",
          answer: "It supplies electrical energy that drives the circuit."
        },
        {
          question: "What happens when a switch is opened?",
          answer: "The conducting path is broken and the intended current stops."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 1 Key Takeaway",
      points: [
        "Electric circuits work when their conducting path is complete.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-2",
  title: "🔋 Cells, Batteries and Terminals",
  blocks: [
    {
      type: "scienceHero",
      theme: "cyan",
      title: "🔋 Cells, Batteries and Terminals",
      subtitle: "Understanding the source that powers a circuit",
      text: "Cells and batteries are common sources of electrical energy. Each cell has two terminals, usually marked positive (+) and negative (−). Correct connections matter when using cells in a circuit.",
      accent: "#0891B2"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Cells and batteries are common sources of electrical energy. Each cell has two terminals, usually marked positive (+) and negative (−). Correct connections matter when using cells in a circuit."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "orange",
      title: "➕ Positive and Negative Terminals",
      text: "A cell has two terminals with different electrical conditions. Circuit diagrams and practical connections use the terminal markings to show how components are connected."
    },

    {
      type: "colourCard",
      colour: "purple",
      title: "🔋 Cell vs Battery",
      text: "A cell is a single electrochemical unit. A battery can be made from two or more cells connected together to provide a desired voltage and capacity."
    },

    {
      type: "colourCard",
      colour: "cyan",
      title: "⚠️ Never Short-Circuit a Cell",
      text: "Connecting the terminals directly with a very low-resistance path can cause a large current and heating. Cells and batteries should be handled safely."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 2",
      question: "Why should a wire not be connected directly across a cell for an experiment?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "It can create a short circuit, allowing a large current and causing heating or damage."
    },

    {
      type: "activity",
      title: "Identify the Source",
      materials: [
        "A cell and a battery",
        "Cell holder",
        "Connecting wires",
        "Circuit diagram sheet"
      ],
      procedure: [
        "Find the positive and negative markings.",
        "Draw the cell symbol used in a circuit diagram.",
        "Connect the source to a simple load through wires rather than directly shorting its terminals.",
        "Compare the real cell with its circuit symbol."
      ],
      observation: "The terminal markings and circuit symbol show the source clearly.",
      conclusion: "A source must be connected through a suitable circuit path and load."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "How many terminals does a basic cell have?",
          answer: "Two: positive and negative."
        },
        {
          question: "What is a battery?",
          answer: "A combination of two or more cells connected together."
        },
        {
          question: "What is a short circuit?",
          answer: "An unintended low-resistance path that can allow a large current."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 2 Key Takeaway",
      points: [
        "Cells and batteries provide electrical energy and must be connected safely through a suitable circuit.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-3",
  title: "🔘 Switches and Control of a Circuit",
  blocks: [
    {
      type: "scienceHero",
      theme: "orange",
      title: "🔘 Switches and Control of a Circuit",
      subtitle: "How can we start and stop current?",
      text: "A switch controls whether the conducting path is complete. In a simple circuit, closing the switch completes the path and opening it introduces a gap.",
      accent: "#F97316"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "A switch controls whether the conducting path is complete. In a simple circuit, closing the switch completes the path and opening it introduces a gap."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "blue",
      title: "🟢 Closed Switch",
      text: "A closed switch provides a continuous conducting path between its contacts, allowing the circuit to operate when the rest of the circuit is correctly connected."
    },

    {
      type: "colourCard",
      colour: "red",
      title: "🔴 Open Switch",
      text: "An open switch separates the contacts and creates a gap. The intended current path is interrupted."
    },

    {
      type: "colourCard",
      colour: "green",
      title: "🏠 Everyday Control",
      text: "Wall switches, push buttons, keys and control systems use the same basic idea: controlling whether a conducting path is complete."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 3",
      question: "A lamp is connected correctly but does not glow. The switch is open. What should happen when it is closed?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "Closing the switch completes the circuit, so the lamp can glow if the source, lamp and connections are functioning."
    },

    {
      type: "activity",
      title: "Switch Test",
      materials: [
        "Cell",
        "Bulb",
        "Switch",
        "Wires"
      ],
      procedure: [
        "Make a complete circuit with the switch in the path.",
        "Open the switch and observe the bulb.",
        "Close the switch and observe again.",
        "Explain the observation using the words open circuit and closed circuit."
      ],
      observation: "Opening and closing the switch changes whether the circuit path is complete.",
      conclusion: "A switch is a control component that opens or closes a circuit."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "What is an open circuit?",
          answer: "A circuit with a break or gap in its conducting path."
        },
        {
          question: "What is a closed circuit?",
          answer: "A complete conducting path that allows the intended current to flow."
        },
        {
          question: "Why is a switch placed in a circuit?",
          answer: "To control whether the circuit is complete."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 3 Key Takeaway",
      points: [
        "A switch controls a circuit by opening or closing its conducting path.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-4",
  title: "💡 Electric Bulbs and Other Loads",
  blocks: [
    {
      type: "scienceHero",
      theme: "green",
      title: "💡 Electric Bulbs and Other Loads",
      subtitle: "Where does electrical energy go?",
      text: "Circuit components can transform electrical energy into other forms. A bulb produces light and heat, a buzzer produces sound, and a motor produces motion.",
      accent: "#16A34A"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Circuit components can transform electrical energy into other forms. A bulb produces light and heat, a buzzer produces sound, and a motor produces motion."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "yellow",
      title: "💡 Bulb",
      text: "In a conventional electric bulb, electrical energy is converted mainly into light and heat. The conducting filament or light-producing part must be connected appropriately."
    },

    {
      type: "colourCard",
      colour: "pink",
      title: "🔔 Buzzer",
      text: "A buzzer uses electrical energy to produce sound. It is another example of a load or output component in a circuit."
    },

    {
      type: "colourCard",
      colour: "purple",
      title: "⚙️ Motor",
      text: "An electric motor converts electrical energy into mechanical motion. Motors are found in fans, toys, pumps and many machines."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 4",
      question: "Why is a bulb called a load in a circuit?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "Because it uses electrical energy supplied by the source and converts it mainly into light and heat."
    },

    {
      type: "activity",
      title: "Compare Circuit Outputs",
      materials: [
        "Battery pack",
        "Bulb",
        "Buzzer or motor if available",
        "Switch",
        "Wires"
      ],
      procedure: [
        "Connect one output component at a time using safe classroom equipment.",
        "Operate the switch.",
        "Record whether the output is mainly light, sound or motion.",
        "Discuss how electrical energy is transformed."
      ],
      observation: "Different components produce different observable effects.",
      conclusion: "Circuit components can transform electrical energy into useful forms."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "Name one component that produces sound.",
          answer: "A buzzer."
        },
        {
          question: "What energy transformation occurs in a motor?",
          answer: "Electrical energy is converted mainly into mechanical motion."
        },
        {
          question: "What is the main visible effect of a bulb?",
          answer: "It produces light, along with heat."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 4 Key Takeaway",
      points: [
        "Loads use electrical energy and transform it into useful effects such as light, sound and motion.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-5",
  title: "🧵 Conductors and Insulators",
  blocks: [
    {
      type: "scienceHero",
      theme: "blue",
      title: "🧵 Conductors and Insulators",
      subtitle: "Why do some materials allow current to pass more easily?",
      text: "Materials differ in their ability to conduct electric current. Conductors allow current to pass relatively easily, while insulators strongly resist the movement of charge under ordinary conditions.",
      accent: "#2563EB"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Materials differ in their ability to conduct electric current. Conductors allow current to pass relatively easily, while insulators strongly resist the movement of charge under ordinary conditions."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "green",
      title: "🔩 Common Conductors",
      text: "Many metals, including copper and aluminium, are good electrical conductors. This makes them useful for the conducting parts of wires and connections."
    },

    {
      type: "colourCard",
      colour: "blue",
      title: "🛡️ Common Insulators",
      text: "Materials such as rubber, many plastics, glass and dry wood are commonly used as electrical insulators. They help reduce unwanted contact with conducting parts."
    },

    {
      type: "colourCard",
      colour: "orange",
      title: "🧪 Test Carefully",
      text: "A simple circuit with a safe low-voltage source can be used in a supervised investigation to compare materials. Never use mains electricity for a school material test."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 5",
      question: "Why is copper used inside an electrical wire while plastic is used outside?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "Copper provides a good conducting path, while plastic acts as an insulating protective covering."
    },

    {
      type: "activity",
      title: "Conductor or Insulator?",
      materials: [
        "Low-voltage battery circuit",
        "Small bulb or LED module",
        "Prepared material samples",
        "Connecting leads"
      ],
      procedure: [
        "Place one test material into a safe low-voltage test circuit.",
        "Observe whether the indicator operates.",
        "Repeat with the other prepared materials.",
        "Classify the materials based on the evidence."
      ],
      observation: "Conductors complete the useful electrical path more readily; insulators do not.",
      conclusion: "Different materials have different electrical conducting properties."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "What is a conductor?",
          answer: "A material that allows electric current to pass relatively easily."
        },
        {
          question: "Why are wires covered with insulating material?",
          answer: "To reduce unwanted contact and improve safety."
        },
        {
          question: "Name one common conductor.",
          answer: "Copper."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 5 Key Takeaway",
      points: [
        "Conductors provide useful current paths; insulators help separate and protect those paths.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-6",
  title: "🧩 Circuit Symbols and Circuit Diagrams",
  blocks: [
    {
      type: "scienceHero",
      theme: "purple",
      title: "🧩 Circuit Symbols and Circuit Diagrams",
      subtitle: "How scientists represent real circuits on paper",
      text: "Circuit diagrams use standard symbols to represent components. A clear diagram makes it easier to understand connections without drawing the physical appearance of every component.",
      accent: "#7C3AED"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Circuit diagrams use standard symbols to represent components. A clear diagram makes it easier to understand connections without drawing the physical appearance of every component."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "purple",
      title: "📝 Why Symbols Matter",
      text: "Symbols are simple and quick to draw. They provide a common visual language for describing circuits."
    },

    {
      type: "colourCard",
      colour: "blue",
      title: "🔋 Common Symbols",
      text: "A cell, battery, switch, lamp and connecting wire each have a conventional representation. Students should learn the symbols required by their curriculum."
    },

    {
      type: "colourCard",
      colour: "green",
      title: "🔗 Connections Matter",
      text: "The position of a component in a diagram and the connections between components show how the circuit is arranged."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 6",
      question: "What is the advantage of a circuit diagram?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "It gives a simple standard representation of the circuit and makes the connections easier to understand."
    },

    {
      type: "activity",
      title: "Draw the Circuit",
      materials: [
        "Paper",
        "Pencil",
        "Reference sheet of circuit symbols"
      ],
      procedure: [
        "Draw a cell symbol.",
        "Add a switch and lamp symbol.",
        "Connect them using straight lines representing wires.",
        "Mark where the circuit can be opened or closed."
      ],
      observation: "A correctly connected diagram can communicate the intended circuit arrangement clearly.",
      conclusion: "Circuit symbols allow circuits to be represented compactly and consistently."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "Why are standard symbols used?",
          answer: "They provide a common and simple way to represent components."
        },
        {
          question: "What does a line usually represent in a basic circuit diagram?",
          answer: "A conducting wire or connection."
        },
        {
          question: "Name two components that can appear in a circuit diagram.",
          answer: "For example, a cell and a switch."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 6 Key Takeaway",
      points: [
        "Circuit diagrams are simplified representations that focus on components and their connections.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-7",
  title: "🔀 Series and Parallel Connections",
  blocks: [
    {
      type: "scienceHero",
      theme: "cyan",
      title: "🔀 Series and Parallel Connections",
      subtitle: "What changes when components are arranged differently?",
      text: "Components can be connected in different ways. In a series arrangement, components are placed along one main path. In a parallel arrangement, branches provide separate paths.",
      accent: "#0891B2"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Components can be connected in different ways. In a series arrangement, components are placed along one main path. In a parallel arrangement, branches provide separate paths."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "red",
      title: "➖ Series Connection",
      text: "A series circuit has one main path. If a break occurs in that path, the complete path is interrupted."
    },

    {
      type: "colourCard",
      colour: "green",
      title: "🌿 Parallel Connection",
      text: "A parallel arrangement has branches. A break in one branch does not necessarily interrupt the other branch, depending on the circuit design."
    },

    {
      type: "colourCard",
      colour: "blue",
      title: "🏠 Everyday Wiring",
      text: "Many household electrical systems use parallel arrangements so appliances can operate independently. Household mains electricity is dangerous and must never be used for school experiments."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 7",
      question: "Why are household appliances generally connected so that one appliance can be switched off without switching off the others?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "Parallel branches allow separate appliances to have their own paths and controls."
    },

    {
      type: "activity",
      title: "Compare Two Arrangements",
      materials: [
        "Low-voltage battery pack",
        "Two small bulbs in holders",
        "Switches",
        "Wires"
      ],
      procedure: [
        "Build a supervised series arrangement.",
        "Observe the bulbs and what happens if one path is opened.",
        "Build a safe low-voltage parallel arrangement.",
        "Compare the behaviour of the two arrangements."
      ],
      observation: "The arrangements differ because their conducting paths are organised differently.",
      conclusion: "Circuit arrangement affects how components depend on each other."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "What is the main feature of a series circuit?",
          answer: "Components share one main conducting path."
        },
        {
          question: "What is a key feature of a parallel arrangement?",
          answer: "There are separate branches or paths."
        },
        {
          question: "Why is parallel wiring useful for independent loads?",
          answer: "A separate branch can allow one load to operate without depending on the same single path as another."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 7 Key Takeaway",
      points: [
        "Series and parallel arrangements create different current paths and different circuit behaviour.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-8",
  title: "🧭 Troubleshooting a Circuit",
  blocks: [
    {
      type: "scienceHero",
      theme: "orange",
      title: "🧭 Troubleshooting a Circuit",
      subtitle: "How can we find out why a circuit is not working?",
      text: "Troubleshooting means checking a system logically to identify the cause of a problem. A circuit that does not work may have a weak source, a loose connection, an open switch, a damaged component or an incorrect connection.",
      accent: "#F97316"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Troubleshooting means checking a system logically to identify the cause of a problem. A circuit that does not work may have a weak source, a loose connection, an open switch, a damaged component or an incorrect connection."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "orange",
      title: "1️⃣ Check the Source",
      text: "Make sure the cell or battery is suitable, correctly connected and not exhausted. Check polarity where the component requires it."
    },

    {
      type: "colourCard",
      colour: "yellow",
      title: "2️⃣ Check the Path",
      text: "Look for loose wires, broken wires, an open switch or missing connections. A single gap can interrupt the circuit."
    },

    {
      type: "colourCard",
      colour: "red",
      title: "3️⃣ Check the Component",
      text: "A bulb, holder, switch or other component may be damaged. Test components systematically rather than changing many things at once."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 8",
      question: "A bulb does not glow. Give a logical checking order.",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "Check the source, then the connections and switch, then the bulb and holder. Change one possible cause at a time."
    },

    {
      type: "activity",
      title: "Circuit Detective",
      materials: [
        "Prepared non-working low-voltage circuit",
        "Checklist",
        "Replacement wire or bulb supplied by teacher"
      ],
      procedure: [
        "Observe the circuit without changing anything.",
        "Check the source.",
        "Trace the conducting path from one terminal and back.",
        "Check the switch and component connections.",
        "Identify the most likely fault and test one change at a time."
      ],
      observation: "A systematic check can identify a fault without random changes.",
      conclusion: "Good troubleshooting uses observation, a logical sequence and controlled changes."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "What is troubleshooting?",
          answer: "A systematic process of finding and fixing the cause of a problem."
        },
        {
          question: "Why should one change be tested at a time?",
          answer: "It helps identify which change caused the result."
        },
        {
          question: "Name one possible reason a circuit may not work.",
          answer: "For example, an open switch, loose connection, weak cell or damaged bulb."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 8 Key Takeaway",
      points: [
        "A logical checklist is more reliable than guessing when a circuit fails.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-9",
  title: "🛡️ Electricity Safety and Responsible Use",
  blocks: [
    {
      type: "scienceHero",
      theme: "green",
      title: "🛡️ Electricity Safety and Responsible Use",
      subtitle: "Using electrical energy safely",
      text: "Electricity can be extremely useful but can also cause injury, fire or equipment damage. Safe practice means using appropriate equipment, avoiding dangerous sources and keeping electricity away from water and damaged wiring.",
      accent: "#16A34A"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Electricity can be extremely useful but can also cause injury, fire or equipment damage. Safe practice means using appropriate equipment, avoiding dangerous sources and keeping electricity away from water and damaged wiring."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "red",
      title: "⚠️ Never Experiment with Mains Electricity",
      text: "School circuit investigations should use approved low-voltage equipment. Household mains electricity can be fatal and is not a classroom power source."
    },

    {
      type: "colourCard",
      colour: "blue",
      title: "💧 Water and Electricity",
      text: "Water can increase the risk of electric shock, especially when electrical equipment or connections are not designed for wet conditions."
    },

    {
      type: "colourCard",
      colour: "green",
      title: "🔌 Damaged Wires Are Dangerous",
      text: "Frayed insulation, exposed conductors, damaged plugs and overheated equipment should not be handled. A responsible person should isolate the supply and arrange safe repair."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 9",
      question: "Why should a student never test a school circuit by connecting it to a wall socket?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "Mains electricity has dangerous voltage and can cause severe injury, electric shock or fire."
    },

    {
      type: "activity",
      title: "Safety Audit",
      materials: [
        "Printed pictures of electrical situations",
        "Notebook",
        "Safety checklist"
      ],
      procedure: [
        "Inspect each picture without touching any real electrical equipment.",
        "Identify safe and unsafe practices.",
        "Explain the hazard in each unsafe example.",
        "Write one safer alternative."
      ],
      observation: "Unsafe situations can often be identified by exposed conductors, damaged equipment, water or inappropriate power sources.",
      conclusion: "Electrical safety depends on correct equipment, insulation, supervision and responsible behaviour."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "Why are low-voltage cells preferred for school circuits?",
          answer: "They are designed for safe educational circuit activities when used correctly."
        },
        {
          question: "Give one electrical safety rule.",
          answer: "Never experiment with mains electricity or damaged electrical equipment."
        },
        {
          question: "Why should damaged wires not be used?",
          answer: "Exposed or damaged conductors can cause shock, short circuits or fire."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 9 Key Takeaway",
      points: [
        "Safety is a core part of learning and using electricity.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "section-10",
  title: "🌍 Electricity in Everyday Life — Bringing It All Together",
  blocks: [
    {
      type: "scienceHero",
      theme: "blue",
      title: "🌍 Electricity in Everyday Life — Bringing It All Together",
      subtitle: "Connecting sources, controls, paths, loads and safety",
      text: "Every working circuit can be understood as a system: an energy source, a conducting path, control components and one or more loads. Once this framework is clear, many everyday electrical devices become easier to understand.",
      accent: "#2563EB"
    },

    {
      type: "concept",
      title: "🧠 Core Concept",
      text: "Every working circuit can be understood as a system: an energy source, a conducting path, control components and one or more loads. Once this framework is clear, many everyday electrical devices become easier to understand."
    },

    {
      type: "scienceFigure",
      title: "Circuit Visual",
      content: `<svg viewBox="0 0 800 400" width="100%" style="max-width:800px;height:auto;background:linear-gradient(135deg,#eff6ff,#eef2ff);border-radius:28px;">
  <text x="400" y="48" text-anchor="middle" font-size="25" font-weight="800" fill="#1e293b">SOURCE → CONTROL → LOAD</text>
  <circle cx="130" cy="205" r="58" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
  <text x="130" y="220" text-anchor="middle" font-size="38">💡</text>
  <text x="130" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="#92400e">SOURCE</text>
  <line x1="190" y1="205" x2="315" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="315,205 292,192 292,218" fill="#475569"/>
  <rect x="320" y="145" width="155" height="120" rx="24" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <text x="397" y="205" text-anchor="middle" font-size="34">🔘</text>
  <text x="397" y="238" text-anchor="middle" font-size="17" font-weight="800" fill="#1d4ed8">CONTROL</text>
  <line x1="475" y1="205" x2="610" y2="205" stroke="#475569" stroke-width="8"/>
  <polygon points="610,205 587,192 587,218" fill="#475569"/>
  <rect x="615" y="145" width="125" height="120" rx="24" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
  <text x="677" y="205" text-anchor="middle" font-size="34">⚙️</text>
  <text x="677" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">LOAD</text>
  <path d="M740 265 C700 350 160 350 130 265" fill="none" stroke="#475569" stroke-width="8"/>
  <text x="400" y="380" text-anchor="middle" font-size="17" font-weight="700" fill="#64748b">A simplified circuit-system view: energy source, control and useful output connected by a conducting path.</text>
</svg>`,
      caption: "A simplified circuit-system view: energy source, control and useful output connected by a conducting path."
    },

    {
      type: "colourCard",
      colour: "purple",
      title: "🧠 Source → Path → Control → Load",
      text: "A cell or battery provides energy, conductors provide the path, a switch controls the path, and a load produces a useful effect."
    },

    {
      type: "colourCard",
      colour: "blue",
      title: "🔍 Observe → Explain → Predict",
      text: "When studying a circuit, first observe what happens, then explain it using circuit concepts, and finally predict what will happen after a controlled change."
    },

    {
      type: "colourCard",
      colour: "green",
      title: "🌱 Use Electricity Wisely",
      text: "Efficient use of electricity, switching off unnecessary devices and using suitable equipment can reduce wasted energy and support responsible resource use."
    },

    {
      type: "concept",
      title: "🔎 Scientific Connection",
      text: "A circuit is a system of connected components. The behaviour of the whole system depends on the source, conducting path, component arrangement and condition of each part."
    },

    {
      type: "workedExample",
      title: "🔬 Worked Example 10",
      question: "A simple circuit has a battery, closed switch, wires and a bulb. The bulb is replaced by a motor. What changes and what remains the same?",
      steps: [
        "Identify the circuit component or condition described.",
        "Recall the relevant circuit principle.",
        "Use the principle to explain the observation.",
        "State the conclusion clearly."
      ],
      answer: "The load changes from a bulb to a motor, so the output changes from mainly light and heat to motion. The source, switch and basic conducting path can remain part of the circuit."
    },

    {
      type: "activity",
      title: "Design Challenge",
      materials: [
        "Low-voltage source",
        "Switches",
        "Wires",
        "Bulb, buzzer or motor module",
        "Circuit symbol sheet"
      ],
      procedure: [
        "Choose a useful output such as light, sound or motion.",
        "Draw the circuit before building it.",
        "Build it using approved low-voltage equipment.",
        "Test the switch and connections.",
        "Explain the energy source, path, control and load."
      ],
      observation: "A well-planned circuit can be represented on paper and then assembled safely using appropriate components.",
      conclusion: "Circuit understanding combines components, connections, energy transformations, troubleshooting and safety."
    },

    {
      type: "practice",
      title: "✏️ Practice Questions",
      questions: [
        {
          question: "List four basic roles in a simple circuit system.",
          answer: "Source, conducting path, control and load/output."
        },
        {
          question: "Why is a circuit diagram useful before building?",
          answer: "It helps plan and check the intended connections."
        },
        {
          question: "What should you do before changing a classroom circuit?",
          answer: "Use the approved low-voltage setup and follow the teacher's safety instructions."
        },
        {
          question: "What is one safety principle to remember in every electricity activity?",
          answer: "Use only the approved equipment and never experiment with mains electricity."
        }
      ]
    },

    {
      type: "examTip",
      title: "🎯 Exam Tip",
      text: "In circuit answers, use precise terms such as complete circuit, open circuit, closed switch, conductor, insulator, source, load, series and parallel when they apply."
    },

    {
      type: "keyTakeaway",
      title: "⭐ Section 10 Key Takeaway",
      points: [
        "Understanding electricity means connecting circuit structure, component function, evidence, troubleshooting and safety.",
        "Use observations as evidence.",
        "Keep circuit connections clear and systematic.",
        "Remember that safe low-voltage classroom equipment is different from dangerous mains electricity."
      ]
    }
  ]
},

{
  id: "important",
  title: "⭐ Important Points",
  blocks: [
    {
      type: "important",
      title: "⚡ Electricity — Must Know",
      text: "An electric circuit is a complete conducting path. A source such as a cell or battery supplies electrical energy, conductors provide the path, switches control the path, and loads transform electrical energy into useful effects."
    },
    {
      type: "keyTakeaway",
      title: "🌟 Essential Facts",
      points: [
        "A complete circuit provides a continuous conducting path.",
        "An open circuit contains a break in the intended path.",
        "A closed switch completes the path through the switch.",
        "A cell has positive and negative terminals.",
        "A battery can contain two or more cells.",
        "Metals such as copper and aluminium are common conductors.",
        "Rubber and many plastics are common electrical insulators.",
        "A bulb, buzzer and motor are examples of output or load components.",
        "Circuit diagrams use standard symbols.",
        "Series circuits have one main path.",
        "Parallel arrangements have separate branches.",
        "Troubleshooting should be systematic.",
        "Low-voltage equipment should be used for school circuit activities.",
        "Mains electricity must never be used for student experiments.",
        "Electrical safety is part of scientific practice."
      ]
    },
    {
      type: "table",
      title: "📊 Quick Revision Table",
      rows: [
        ["Component / Idea","Main role"],
        ["Cell","Provides electrical energy"],
        ["Battery","Combination of cells"],
        ["Wire","Provides conducting connection"],
        ["Switch","Opens or closes a circuit path"],
        ["Bulb","Produces light and heat"],
        ["Buzzer","Produces sound"],
        ["Motor","Produces motion"],
        ["Conductor","Allows current to pass relatively easily"],
        ["Insulator","Strongly resists current under ordinary conditions"],
        ["Series","One main path"],
        ["Parallel","Separate branches"]
      ]
    },
    {
      type: "formula",
      title: "🧠 Circuit Logic",
      formula: "Source + Conducting Path + Load + Complete Path → Working Circuit",
      explanation: "A switch can control whether the path is complete. The exact behaviour depends on the components and their arrangement."
    },
    {
      type: "quickRevision",
      title: "⚡ One-Minute Revision",
      points: [
        "Complete path → intended current can flow",
        "Open switch → path broken",
        "Closed switch → path complete through the switch",
        "Cell → electrical energy source",
        "Copper → common conductor",
        "Plastic/rubber → common insulators",
        "Bulb → light and heat",
        "Buzzer → sound",
        "Motor → motion",
        "Series → one main path",
        "Parallel → branches",
        "Troubleshooting → check source, path, control and load systematically",
        "Mains electricity → dangerous; never use for school experiments"
      ]
    },
    {
      type: "examTip",
      title: "🎯 Exam Booster",
      text: "Practise circuit symbols, complete and incomplete circuits, conductors and insulators, switch operation, series and parallel arrangements, troubleshooting and safety rules."
    },
    {
      type: "warning",
      title: "⚠️ Safety Rules",
      text: "Never connect a school experiment to mains electricity. Do not touch exposed wires, damaged plugs or electrical equipment near water. Use only approved low-voltage sources and follow teacher instructions."
    },
    {
      type: "finalChallenge",
      title: "🏆 Final Challenge",
      question: "A bulb circuit has a cell, wires, a switch and a bulb. The bulb does not glow. Give a logical troubleshooting sequence and explain why a complete circuit is necessary.",
      answer: "Check the cell/source, then trace the wires and connections, check whether the switch is closed, and finally check the bulb and holder. A complete conducting path is needed for the intended current to flow through the bulb."
    }
  ]
},

{
  id: "closing",
  title: "🌟 Chapter Closing",
  blocks: [
    {
      type: "scienceHero",
      theme: "purple",
      title: "⚡ You Can Now Think in Circuits",
      subtitle: "From a cell to a complete working system",
      text: "You have explored sources, wires, switches, loads, conductors, insulators, circuit diagrams, series and parallel arrangements, troubleshooting and electrical safety.",
      accent: "#7C3AED"
    },
    {
      type: "keyTakeaway",
      title: "🎓 Learning Goals Completed",
      points: [
        "Explain what an electric circuit is.",
        "Identify common circuit components and their roles.",
        "Distinguish open and closed circuits.",
        "Compare conductors and insulators.",
        "Read and draw basic circuit diagrams.",
        "Understand series and parallel arrangements.",
        "Troubleshoot simple low-voltage circuits logically.",
        "Apply essential electricity safety rules."
      ]
    },
    {
      type: "realLife",
      title: "🌍 Final Thought",
      text: "Electricity is most useful when we understand both its possibilities and its risks. Good science combines curiosity, careful observation, correct circuit design and responsible safety."
    }
  ]
}

  ]

};
