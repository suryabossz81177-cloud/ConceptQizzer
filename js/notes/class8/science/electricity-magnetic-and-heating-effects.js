/* =========================================================
   ConceptQizzer • Class 8 Science • Chapter 4
   Electricity: Magnetic and Heating Effects
   =========================================================
   IMPORTANT:
   - This is CHAPTER DATA only. No visible IDs, section IDs,
     generic metadata cards, or renderer instructions are included.
   - Visuals use real photographs hosted on Wikimedia Commons.
   - The selected photographs are public-domain / openly licensed;
     source + licence notes are kept in imageCredits below.
   - Works with the universal ConceptQizzer notes renderer.
   ========================================================= */

const ChapterData = {
  title: "Electricity: Magnetic and Heating Effects",
  class: 8,
  subject: "Science",
  chapterNumber: 4,

  description:
    "A detailed journey through electric current, circuits, the heating effect, electrical safety, the magnetic effect of current, electromagnets, electric bells and motors.",

  imageCredits: [
    {
      title: "Electric iron",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Electric%20iron.jpg",
      licence: "CC BY-SA 3.0",
      source: "Wikimedia Commons • Arnoldius"
    },
    {
      title: "Electric kettle",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Electric_kettle.jpg",
      licence: "Public domain",
      source: "Wikimedia Commons • Petr.adamek"
    },
    {
      title: "Electric bell",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Electric%20Bell.jpg",
      licence: "Public domain",
      source: "Wikimedia Commons • Milton Wend"
    },
    {
      title: "Electric motor",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Electric_motor.jpg",
      licence: "Open licence; see source page",
      source: "Wikimedia Commons"
    },
    {
      title: "Electromagnet core",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Electromagnet%20Core.JPG",
      licence: "CC BY-SA 3.0",
      source: "Wikimedia Commons • MikeBertrand6"
    },
    {
      title: "Simple electromagnet",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Simple%20electromagnet2.gif",
      licence: "Public domain",
      source: "Wikimedia Commons"
    }
  ],

  sections: [
    {
      title: "Chapter Introduction",
      blocks: [
        {
          type: "paragraph",
          text:
            "Electricity is one of the most useful forms of energy in modern life. It powers lights, fans, refrigerators, computers, pumps, communication systems, medical equipment and machines used in homes and industries."
        },
        {
          type: "paragraph",
          text:
            "When electric current flows through a conductor, it can produce important effects. Two major effects studied in this chapter are the heating effect and the magnetic effect. The heating effect allows electrical energy to produce useful heat, while the magnetic effect allows current to produce magnetism and operate devices such as electric bells, relays and motors."
        },
        {
          type: "fact",
          title: "Big idea",
          text:
            "The same electric current can be useful in very different ways. In one device it may produce heat; in another it may produce a magnetic effect; in a motor, electrical energy is ultimately converted into mechanical motion."
        },
        {
          type: "application",
          title: "Why this topic matters",
          text:
            "Understanding these effects helps us explain everyday appliances, choose safe electrical practices, understand fuses and circuit protection, and see how simple scientific principles are used in machines."
        }
      ]
    },

    {
      title: "1. Electric Current",
      blocks: [
        {
          type: "definition",
          title: "Electric current",
          text:
            "Electric current is the rate at which electric charge flows through a conductor. In a simple circuit, a cell or battery provides the electrical energy that drives charge through the conducting path."
        },
        {
          type: "paragraph",
          text:
            "A conductor must provide a continuous conducting path for a sustained current in an ordinary closed circuit. If the path is broken, the circuit is open and the current stops."
        },
        {
          type: "formula",
          title: "Current",
          formula: "I = Q / t",
          explanation:
            "I is current, Q is the charge transferred and t is the time taken. The SI unit of current is the ampere (A)."
        },
        {
          type: "example",
          title: "Solved example",
          text:
            "If 10 coulombs of charge pass through a conductor in 5 seconds, then I = 10 ÷ 5 = 2 A. Therefore, the current is 2 amperes."
        },
        {
          type: "tip",
          title: "Remember",
          text:
            "Current describes the rate of flow of charge. A larger current means more charge is passing a point each second."
        }
      ]
    },

    {
      title: "2. Electric Circuit and Its Components",
      blocks: [
        {
          type: "definition",
          title: "Electric circuit",
          text:
            "An electric circuit is a complete conducting path through which electric current can flow."
        },
        {
          type: "table",
          title: "Common circuit components",
          rows: [
            ["Component", "Main role", "Typical function"],
            ["Cell / battery", "Source of electrical energy", "Provides potential difference that drives current"],
            ["Connecting wires", "Conducting path", "Carry current between components"],
            ["Switch / key", "Control", "Opens or closes the circuit"],
            ["Bulb / load", "Uses electrical energy", "Produces light and heat"],
            ["Resistor", "Controls current", "Offers electrical resistance"]
          ]
        },
        {
          type: "diagram",
          title: "A simple closed circuit",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Simple%20electromagnet2.gif",
          caption:
            "A real/public-domain simple electromagnet image is used here as a visual bridge between the circuit and magnetic-effect concepts."
        },
        {
          type: "paragraph",
          text:
            "In circuit diagrams, standard symbols are preferred because they make circuits easy to read and reproduce. A closed switch represents a conducting path; an open switch represents a break in the path."
        },
        {
          type: "example",
          title: "Think through a circuit",
          text:
            "A bulb is connected to a cell and a switch. When the switch is closed, the conducting path is complete and the bulb can glow. When the switch is opened, the path is broken and the bulb goes off."
        }
      ]
    },

    {
      title: "3. Heating Effect of Electric Current",
      blocks: [
        {
          type: "definition",
          title: "Heating effect",
          text:
            "When electric current passes through a conductor that has electrical resistance, electrical energy is transformed partly into thermal energy. The conductor becomes hot. This is called the heating effect of electric current."
        },
        {
          type: "paragraph",
          text:
            "The heating effect is not an accidental phenomenon. It is deliberately used in appliances designed to produce heat, such as electric irons, heaters, kettles, toasters and some types of lamps."
        },
        {
          type: "figure",
          title: "Real example: electric iron",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Electric%20iron.jpg",
          caption:
            "A real electric iron. The heating element inside the appliance converts electrical energy into heat."
        },
        {
          type: "figure",
          title: "Real example: electric kettle",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Electric_kettle.jpg",
          caption:
            "A real electric kettle. Its heating element transfers thermal energy to the water."
        },
        {
          type: "table",
          title: "Heating-effect appliances",
          rows: [
            ["Appliance", "Useful effect", "Example of use"],
            ["Electric iron", "Produces heat", "Ironing clothes"],
            ["Electric kettle", "Produces heat", "Heating / boiling water"],
            ["Room heater", "Produces heat", "Warming a room"],
            ["Toaster", "Produces heat", "Toasting bread"],
            ["Electric oven", "Produces heat", "Cooking / baking"],
            ["Incandescent lamp", "Filament becomes very hot", "Produces visible light along with heat"]
          ]
        },
        {
          type: "fact",
          title: "Why does a wire heat up?",
          text:
            "Moving charge carriers interact with the material of the conductor. Electrical energy is transferred to the material and appears as thermal energy. The amount of heating depends on the current, resistance and time for which current flows."
        }
      ]
    },

    {
      title: "4. Factors Affecting the Heating Effect",
      blocks: [
        {
          type: "paragraph",
          text:
            "For a given conductor under suitable conditions, the heating produced increases when the current is larger, the resistance is larger, or the current flows for a longer time."
        },
        {
          type: "table",
          title: "Three important factors",
          rows: [
            ["Factor", "What happens when it increases?", "Reason"],
            ["Current (I)", "Heating increases strongly", "Heating depends on the square of current"],
            ["Resistance (R)", "Heating increases", "More electrical energy is converted into thermal energy"],
            ["Time (t)", "Heating increases", "Energy is supplied for a longer duration"]
          ]
        },
        {
          type: "formula",
          title: "Joule's law of heating",
          formula: "H = I²Rt",
          explanation:
            "H is heat energy produced, I is current, R is resistance and t is time. In SI units, H is measured in joules when current is in amperes, resistance in ohms and time in seconds."
        },
        {
          type: "example",
          title: "Solved numerical",
          text:
            "A current of 2 A flows through a resistance of 5 Ω for 10 s. H = I²Rt = (2)² × 5 × 10 = 4 × 50 = 200 J. Therefore, 200 joules of heat are produced."
        },
        {
          type: "example",
          title: "Compare two currents",
          text:
            "If the resistance and time remain unchanged, increasing current from 2 A to 4 A multiplies the heating by 4, because heating is proportional to I². Thus, doubling current does not merely double the heating."
        },
        {
          type: "think",
          title: "Why?",
          text:
            "Why does a 4 A current produce four times the heating of a 2 A current when resistance and time are unchanged? Because (4)² ÷ (2)² = 4."
        }
      ]
    },

    {
      title: "5. Resistance and Heating Elements",
      blocks: [
        {
          type: "paragraph",
          text:
            "Resistance is the opposition offered by a material to the flow of electric charge. Materials and components with greater resistance can produce greater heating for the same current and time."
        },
        {
          type: "definition",
          title: "Heating element",
          text:
            "A heating element is a part of an electrical appliance designed to become hot when current passes through it."
        },
        {
          type: "paragraph",
          text:
            "Heating elements are often made from materials that can withstand high temperatures and have suitable electrical resistance. The element must be arranged so that it can transfer heat effectively without failing under normal operating conditions."
        },
        {
          type: "application",
          title: "Why not use an ordinary connecting wire as a heater?",
          text:
            "Connecting wires are generally designed to carry current with relatively low resistance and little unwanted heating. A heating appliance instead uses a specially selected element so that useful heat is produced safely."
        },
        {
          type: "warning",
          title: "Safety warning",
          text:
            "Never experiment with household mains electricity. School-level investigations should use teacher-approved low-voltage cells, batteries and safe apparatus."
        }
      ]
    },

    {
      title: "6. Fuse, MCB and Electrical Safety",
      blocks: [
        {
          type: "definition",
          title: "Fuse",
          text:
            "A fuse is a safety device containing a material designed to melt when the current becomes dangerously large. When the fuse melts, the circuit is broken and the excessive current is stopped."
        },
        {
          type: "paragraph",
          text:
            "A fuse is connected in series with the circuit it protects. Its rating is chosen according to the expected safe current of the circuit."
        },
        {
          type: "definition",
          title: "MCB",
          text:
            "An MCB (Miniature Circuit Breaker) is a protective device that automatically opens a circuit when an excessive current is detected. Unlike a traditional fuse, an MCB can normally be reset after the fault is removed."
        },
        {
          type: "table",
          title: "Fuse and MCB",
          rows: [
            ["Feature", "Fuse", "MCB"],
            ["Response to excessive current", "Fuse element melts", "Breaker trips"],
            ["After operation", "Fuse usually needs replacement", "MCB can normally be reset"],
            ["Purpose", "Protect circuit and appliances", "Protect circuit and appliances"],
            ["Important principle", "Interrupt dangerous current", "Interrupt dangerous current"]
          ]
        },
        {
          type: "fact",
          title: "Why safety devices matter",
          text:
            "Excessive current can overheat wires, damage insulation and create a fire risk. Protective devices interrupt the circuit before the heating becomes dangerously large."
        },
        {
          type: "warning",
          title: "Electrical safety rules",
          text:
            "Do not touch electrical appliances with wet hands. Do not overload sockets. Do not use damaged cords. Do not insert objects into sockets. Switch off the supply before attempting any approved maintenance, and leave mains work to qualified adults."
        }
      ]
    },

    {
      title: "7. Magnetic Effect of Electric Current",
      blocks: [
        {
          type: "definition",
          title: "Magnetic effect",
          text:
            "A current-carrying conductor produces a magnetic effect in the space around it. This means that electric current can create a magnetic field."
        },
        {
          type: "paragraph",
          text:
            "The magnetic effect of current was famously demonstrated by Hans Christian Ørsted when a compass needle was observed to deflect near a current-carrying wire."
        },
        {
          type: "activity",
          title: "Compass-and-wire investigation",
          aim:
            "To observe the magnetic effect of electric current.",
          materials:
            "A low-voltage cell or battery, insulated connecting wire, a switch and a compass.",
          procedure: [
            "Place the compass near a straight section of wire.",
            "Connect the wire to a low-voltage cell and a switch.",
            "Close the switch briefly and observe the compass needle.",
            "Open the switch and observe the change.",
            "Repeat safely with the teacher's guidance if required."
          ],
          observation:
            "When current flows, the compass needle can deflect from its usual direction.",
          conclusion:
            "The deflection provides evidence that a current-carrying conductor produces a magnetic effect."
        },
        {
          type: "think",
          title: "What if the current is reversed?",
          text:
            "Reversing the direction of current reverses the direction of the magnetic field around the conductor. In a simple compass experiment, the needle deflection therefore changes direction."
        }
      ]
    },

    {
      title: "8. Magnetic Field Around a Current-Carrying Conductor",
      blocks: [
        {
          type: "paragraph",
          text:
            "The magnetic field around a straight current-carrying conductor forms circular patterns around the wire. The field becomes stronger when the current is increased, and its direction depends on the direction of current."
        },
        {
          type: "diagram",
          title: "Magnetic field around a straight conductor",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Magnetic%20field%20of%20a%20straight%20current-carrying%20wire.svg",
          caption:
            "A standard representation of circular magnetic-field lines around a current-carrying straight conductor."
        },
        {
          type: "tip",
          title: "Right-hand thumb rule",
          text:
            "Imagine holding the straight conductor in your right hand with the thumb pointing in the direction of conventional current. The curled fingers indicate the direction of the magnetic field around the conductor."
        },
        {
          type: "comparison",
          title: "No current vs current",
          rows: [
            ["Condition", "Magnetic effect"],
            ["No current", "No magnetic field is produced by the conductor due to current"],
            ["Current flowing", "A magnetic field exists around the conductor"],
            ["Larger current", "Magnetic effect becomes stronger, under comparable conditions"]
          ]
        }
      ]
    },

    {
      title: "9. Electromagnet",
      blocks: [
        {
          type: "definition",
          title: "Electromagnet",
          text:
            "An electromagnet is a magnet whose magnetic effect is produced by electric current. A common electromagnet consists of a coil of insulated wire wound around a soft iron core."
        },
        {
          type: "paragraph",
          text:
            "When current flows through the coil, the magnetic effects of the individual turns combine. A soft iron core placed inside the coil can greatly strengthen the magnetic effect."
        },
        {
          type: "figure",
          title: "Real electric-motor / magnetic-device context",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Electromagnet%20Core.JPG",
          caption:
            "A real photograph showing an electromagnet core being prepared for winding. The image is openly licensed on Wikimedia Commons."
        },
        {
          type: "table",
          title: "Electromagnet vs permanent magnet",
          rows: [
            ["Feature", "Electromagnet", "Permanent magnet"],
            ["Magnetism", "Produced using current", "Normally remains magnetised"],
            ["Control", "Can be switched on/off", "Cannot simply be switched off"],
            ["Strength", "Can be changed by changing current, turns or core", "Usually fixed for a given magnet"],
            ["Typical uses", "Relays, bells, cranes, motors", "Compass needles, magnetic holders, some tools"]
          ]
        },
        {
          type: "fact",
          title: "Why soft iron?",
          text:
            "Soft iron is easily magnetised when current flows and loses most of its magnetism when the current is removed. This makes it useful when a magnet needs to be switched on and off."
        }
      ]
    },

    {
      title: "10. How to Strengthen an Electromagnet",
      blocks: [
        {
          type: "paragraph",
          text:
            "The magnetic strength of an electromagnet can be increased in several practical ways, provided the electrical conditions remain within safe limits."
        },
        {
          type: "table",
          title: "Ways to increase magnetic strength",
          rows: [
            ["Change", "Expected effect", "Why"],
            ["Increase current within safe limits", "Stronger electromagnet", "Greater current produces a stronger magnetic effect"],
            ["Increase number of turns", "Stronger electromagnet", "Magnetic effects of more turns add together"],
            ["Use a suitable soft iron core", "Much stronger magnetic effect", "The core concentrates and strengthens the magnetic field"]
          ]
        },
        {
          type: "example",
          title: "Reasoning example",
          text:
            "Two coils are wound around identical soft-iron cores. Coil A has 50 turns and Coil B has 100 turns, with comparable current. Coil B is expected to produce the stronger magnetic effect because it has more turns."
        },
        {
          type: "warning",
          title: "Do not increase current carelessly",
          text:
            "Increasing current also increases heating. A stronger electromagnet is useful only when the coil, battery and wires can safely handle the current."
        }
      ]
    },

    {
      title: "11. Electric Bell — An Application of an Electromagnet",
      blocks: [
        {
          type: "definition",
          title: "Electric bell",
          text:
            "An electric bell is a device that uses an electromagnet to produce repeated mechanical motion, causing a striker to hit a gong and produce sound."
        },
        {
          type: "figure",
          title: "Real electric bell",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Electric%20Bell.jpg",
          caption:
            "A real electric bell photograph from Wikimedia Commons."
        },
        {
          type: "table",
          title: "How an electric bell works",
          rows: [
            ["Step", "What happens"],
            ["1", "The switch is pressed and current flows through the coil."],
            ["2", "The coil becomes an electromagnet and attracts the armature."],
            ["3", "The attached striker moves and hits the gong."],
            ["4", "The movement breaks the contact, stopping the current."],
            ["5", "The electromagnet loses its magnetic effect and the spring pulls the armature back."],
            ["6", "Contact is restored and the cycle repeats rapidly while the switch remains pressed."]
          ]
        },
        {
          type: "think",
          title: "Why does the bell keep ringing?",
          text:
            "The bell contains a make-and-break contact arrangement. The circuit repeatedly opens and closes, so the electromagnet repeatedly attracts and releases the armature."
        }
      ]
    },

    {
      title: "12. Electric Motor",
      blocks: [
        {
          type: "definition",
          title: "Electric motor",
          text:
            "An electric motor is a device that converts electrical energy into mechanical energy, usually in the form of rotational motion."
        },
        {
          type: "figure",
          title: "Real electric motor",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Electric_motor.jpg",
          caption:
            "A real electric motor photograph. Motors use magnetic effects to produce motion."
        },
        {
          type: "paragraph",
          text:
            "A current-carrying conductor placed in a magnetic field experiences a force. In a motor, carefully arranged magnetic forces act on a current-carrying coil so that it turns. The rotating part is connected to a shaft, which can transfer mechanical motion to a machine."
        },
        {
          type: "table",
          title: "Main ideas in a simple motor",
          rows: [
            ["Part / idea", "Role"],
            ["Magnetic field", "Provides the field in which the current-carrying coil experiences force"],
            ["Coil / armature", "Carries current and experiences magnetic forces"],
            ["Split-ring commutator", "Reverses current direction in the coil at the appropriate time in a simple DC motor"],
            ["Brushes", "Provide electrical contact with the rotating commutator"],
            ["Axle / shaft", "Carries rotational motion to the external load"]
          ]
        },
        {
          type: "application",
          title: "Where motors are used",
          text:
            "Fans, mixers, water pumps, toys, washing machines, computer cooling systems and many industrial machines use electric motors."
        }
      ]
    },

    {
      title: "13. Heating Effect and Magnetic Effect — A Clear Comparison",
      blocks: [
        {
          type: "table",
          title: "Compare the two effects",
          rows: [
            ["Point", "Heating effect", "Magnetic effect"],
            ["Basic idea", "Current causes electrical energy to appear as heat", "Current produces a magnetic field"],
            ["Typical devices", "Iron, heater, kettle, toaster", "Bell, relay, electromagnet, motor"],
            ["Useful output", "Thermal energy", "Magnetic action / mechanical motion"],
            ["Important control", "Current, resistance and time affect heating", "Current, coil turns and core influence magnetic strength"],
            ["Major safety concern", "Overheating and fire risk", "Incorrect connections can still cause heating and electrical hazards"]
          ]
        },
        {
          type: "fact",
          title: "One current, different effects",
          text:
            "Heating and magnetic effects are not competing explanations. Both can occur when current flows. Which effect is useful depends on the design of the device."
        }
      ]
    },

    {
      title: "14. Think & Understand",
      blocks: [
        {
          type: "think",
          title: "Why does an open circuit not operate a bulb?",
          text:
            "An open circuit has a break in the conducting path, so a continuous current cannot flow through the bulb."
        },
        {
          type: "think",
          title: "Why is a fuse connected in series?",
          text:
            "A series connection ensures that the current entering the protected circuit passes through the fuse. If the current becomes excessive, the fuse can interrupt that current."
        },
        {
          type: "think",
          title: "What happens if current through an electromagnet is removed?",
          text:
            "The electromagnet loses the magnetic effect produced by the current, although a small residual magnetism can depend on the core material and conditions."
        },
        {
          type: "think",
          title: "What if the number of turns is doubled?",
          text:
            "For comparable conditions, increasing the number of turns strengthens the magnetic effect of a coil. The exact strength also depends on current, core and coil geometry."
        },
        {
          type: "think",
          title: "Why does an electric iron become hot?",
          text:
            "Its heating element has electrical resistance. When current flows through it, electrical energy is converted into thermal energy."
        }
      ]
    },

    {
      title: "15. Solved Problems — Step by Step",
      blocks: [
        {
          type: "example",
          title: "Problem 1 — Heat produced",
          text:
            "A 3 A current flows through a 4 Ω resistor for 5 s. Using H = I²Rt: Step 1: I² = 9. Step 2: Multiply by R: 9 × 4 = 36. Step 3: Multiply by t: 36 × 5 = 180. Answer: H = 180 J."
        },
        {
          type: "example",
          title: "Problem 2 — Finding current",
          text:
            "If 24 C of charge passes through a conductor in 6 s, I = Q ÷ t = 24 ÷ 6 = 4 A. Answer: 4 A."
        },
        {
          type: "example",
          title: "Problem 3 — Finding time",
          text:
            "If 50 C of charge passes at a current of 5 A, t = Q ÷ I = 50 ÷ 5 = 10 s. Answer: 10 s."
        },
        {
          type: "example",
          title: "Problem 4 — Current comparison",
          text:
            "Two identical resistors operate for the same time. One carries 2 A and the other 6 A. The ratio of heating is 2² : 6² = 4 : 36 = 1 : 9. Therefore, the 6 A case produces nine times the heating."
        },
        {
          type: "example",
          title: "Problem 5 — Multi-step reasoning",
          text:
            "A device is designed to produce heat. Its resistance is kept constant. If the current is increased by 50%, the new current is 1.5I. Heating becomes proportional to (1.5I)² = 2.25I². Therefore the heating becomes 2.25 times the original value, assuming the same resistance and time."
        },
        {
          type: "example",
          title: "HOTS — Why current is dangerous",
          text:
            "Suppose a wire's resistance is constant. If current doubles, Joule heating becomes four times as large. This explains why excessive current can rapidly increase heating and create a serious safety hazard."
        }
      ]
    },

    {
      title: "16. Common Mistakes",
      blocks: [
        {
          type: "warning",
          title: "Mistake 1 — Confusing current with charge",
          text:
            "Charge is the quantity of electric charge; current is the rate of flow of charge. They are not the same physical quantity."
        },
        {
          type: "warning",
          title: "Mistake 2 — Forgetting the square",
          text:
            "In Joule's law, H = I²Rt. The current is squared. Doubling current therefore makes the heating four times as large, when R and t are unchanged."
        },
        {
          type: "warning",
          title: "Mistake 3 — Treating a fuse as a normal switch",
          text:
            "A fuse is a protective device designed to interrupt excessive current. It is not intended for routine switching."
        },
        {
          type: "warning",
          title: "Mistake 4 — Saying every magnet is an electromagnet",
          text:
            "A permanent magnet can remain magnetised without a continuously supplied current. An electromagnet depends on current for its main magnetic action."
        },
        {
          type: "warning",
          title: "Mistake 5 — Using household mains for experiments",
          text:
            "Never use domestic mains electricity for school experiments. Use only teacher-approved low-voltage equipment."
        }
      ]
    },

    {
      title: "17. Exam Zone",
      blocks: [
        {
          type: "examTip",
          title: "Must-know results",
          text:
            "Electric current is the rate of flow of charge. A closed circuit provides a conducting path. Current can produce heating and magnetic effects. Joule's law: H = I²Rt. A fuse protects against excessive current. An electromagnet uses current to produce magnetic action. An electric motor converts electrical energy into mechanical energy."
        },
        {
          type: "examTip",
          title: "High-frequency question patterns",
          text:
            "Be prepared to define electric current, explain the heating effect, state Joule's law, identify factors affecting heating, explain the function of a fuse, describe Ørsted's observation, explain an electromagnet, list ways to strengthen it, explain an electric bell and explain the basic principle of an electric motor."
        },
        {
          type: "examTip",
          title: "Answer-writing tip",
          text:
            "For mechanism questions, write the steps in the correct order. For numerical questions, write the formula first, substitute values with units, calculate carefully and state the final unit."
        }
      ]
    },

    {
      title: "18. Practice Questions",
      blocks: [
        {
          type: "practice",
          title: "Basic",
          questions: [
            "Define electric current.",
            "What is an electric circuit?",
            "Name two appliances that use the heating effect.",
            "What is a fuse?",
            "What is an electromagnet?"
          ]
        },
        {
          type: "practice",
          title: "Standard",
          questions: [
            "Explain why a bulb goes off when a switch is opened.",
            "State Joule's law of heating and explain each symbol.",
            "Why is a fuse connected in series?",
            "Give three ways to strengthen an electromagnet.",
            "Describe the basic principle of an electric motor."
          ]
        },
        {
          type: "practice",
          title: "Application",
          questions: [
            "Why should sockets not be overloaded?",
            "Why is a soft iron core useful in an electromagnet?",
            "Why does an electric bell need a make-and-break contact?",
            "A heater has constant resistance. What happens to its heating if current is doubled?",
            "Why are heating elements made differently from ordinary connecting wires?"
          ]
        },
        {
          type: "practice",
          title: "HOTS and Reasoning",
          questions: [
            "Two coils have the same current and core, but one has more turns. Predict which is stronger and explain why.",
            "If current is tripled while resistance and time remain constant, by what factor does Joule heating change?",
            "A circuit has a protective fuse but still contains a damaged wire. Explain why the fuse cannot be treated as a substitute for safe wiring.",
            "Why can the magnetic effect of current be used to produce mechanical motion in a motor?"
          ]
        }
      ]
    },

    {
      title: "19. Challenge Zone",
      blocks: [
        {
          type: "challenge",
          title: "Challenge 1",
          text:
            "A resistor carries 4 A for 15 s and produces a certain amount of heat. What would happen to the heat if the current became 8 A while resistance and time remained unchanged? Explain without calculating first, then verify using the formula."
        },
        {
          type: "challenge",
          title: "Challenge 2",
          text:
            "Design a conceptual electromagnet for lifting small iron objects. List the core material, coil arrangement, current control and two safety considerations. Explain why each choice is appropriate."
        },
        {
          type: "challenge",
          title: "Challenge 3",
          text:
            "Explain the complete energy pathway in an electric motor from the electrical source to the rotating shaft. Identify where magnetic forces are involved."
        }
      ]
    },

    {
      title: "20. Chapter Revision",
      blocks: [
        {
          type: "table",
          title: "Quick revision table",
          rows: [
            ["Concept", "One-line revision"],
            ["Electric current", "Rate of flow of electric charge"],
            ["Circuit", "Complete conducting path for current"],
            ["Heating effect", "Electrical energy converted into thermal energy"],
            ["Joule's law", "H = I²Rt"],
            ["Fuse", "Protective device that melts and breaks the circuit when current is excessive"],
            ["MCB", "Protective breaker that trips when excessive current is detected"],
            ["Magnetic effect", "Current produces a magnetic field around a conductor"],
            ["Electromagnet", "Magnet whose main magnetic action is produced by current"],
            ["Electric bell", "Uses an electromagnet and repeated make-break action to produce sound"],
            ["Electric motor", "Converts electrical energy into mechanical energy"]
          ]
        },
        {
          type: "summary",
          title: "60-second revision",
          text:
            "Current is the rate of flow of charge. A closed circuit is needed for continuous current. Current can produce heat and magnetism. Heating depends on current, resistance and time, with H = I²Rt. Fuses and MCBs protect circuits. A current-carrying conductor produces a magnetic field. A coil with a soft iron core can form an electromagnet. Electromagnets operate devices such as bells and relays, and magnetic forces are used in electric motors."
        }
      ]
    },

    {
      title: "⭐ Important Points",
      blocks: [
        {
          type: "important",
          items: [
            "Electric current is the rate of flow of electric charge.",
            "A closed circuit provides a continuous conducting path.",
            "Current through a resistance can produce heat.",
            "Joule's law of heating is H = I²Rt.",
            "Heating increases with current, resistance and time under the stated conditions.",
            "A fuse protects a circuit by breaking the circuit when excessive current causes the fuse element to melt.",
            "An MCB trips automatically when excessive current is detected.",
            "A current-carrying conductor produces a magnetic effect.",
            "A coil carrying current can act as an electromagnet.",
            "Increasing current or coil turns and using a suitable soft iron core can strengthen an electromagnet.",
            "An electric bell uses an electromagnet and a make-and-break contact.",
            "An electric motor converts electrical energy into mechanical energy.",
            "Electrical safety is essential because excessive current can cause dangerous heating."
          ]
        }
      ]
    },

    {
      title: "🔑 Key Terms",
      blocks: [
        {
          type: "table",
          title: "Key terms and definitions",
          rows: [
            ["Term", "Meaning"],
            ["Electric current", "Rate of flow of electric charge"],
            ["Circuit", "Complete conducting path for current"],
            ["Conductor", "Material that allows electric charge to move relatively easily"],
            ["Resistance", "Opposition offered to electric current"],
            ["Heating effect", "Production of heat when current flows through a resistance"],
            ["Joule's law", "Relation H = I²Rt for heat produced in a resistor"],
            ["Fuse", "Safety device that melts and breaks a circuit when current is excessive"],
            ["MCB", "Automatic protective circuit breaker"],
            ["Magnetic effect", "Magnetic field produced by electric current"],
            ["Electromagnet", "Temporary magnet produced mainly by electric current"],
            ["Armature", "Moving part used in electromagnetic devices such as a bell or motor"],
            ["Commutator", "Part of a simple DC motor that reverses coil current at the required time"],
            ["Electric motor", "Device that converts electrical energy into mechanical energy"]
          ]
        }
      ]
    },

    {
      title: "📖 Chapter Summary",
      blocks: [
        {
          type: "summary",
          title: "Complete chapter summary",
          text:
            "Electricity becomes useful when electric charge flows through suitable circuits. Electric current is the rate of flow of charge, and a complete circuit is required for continuous current. When current passes through a conductor with resistance, electrical energy can be converted into heat. This heating effect is deliberately used in appliances such as irons, heaters and kettles. The heat produced is described by Joule's law, H = I²Rt, showing the dependence on current, resistance and time. Because excessive current can cause dangerous heating, devices such as fuses and MCBs provide protection. Current also produces a magnetic effect. A current-carrying wire creates a magnetic field, and a coil can produce a stronger magnetic effect, especially when combined with a suitable soft iron core. Such an arrangement is called an electromagnet. Electromagnets are used in electric bells and many other devices. Magnetic forces acting on current-carrying conductors form the basic principle behind electric motors, which convert electrical energy into mechanical motion. Thus, the heating and magnetic effects of current connect a simple electrical circuit with many practical technologies around us."
        }
      ]
    }
  ],

  importantPoints: [
    "Electric current is the rate of flow of electric charge.",
    "A closed circuit is needed for continuous current in an ordinary circuit.",
    "Current can produce both heating and magnetic effects.",
    "Joule's law: H = I²Rt.",
    "Excess current can cause dangerous heating, so circuits need suitable protection.",
    "A fuse melts and breaks the circuit when excessive current flows.",
    "An MCB trips automatically when excessive current is detected.",
    "A current-carrying conductor produces a magnetic field.",
    "An electromagnet is produced by current and can be switched and controlled.",
    "More current, more turns and a suitable soft iron core can strengthen an electromagnet.",
    "An electric bell uses an electromagnet and repeated make-and-break action.",
    "An electric motor converts electrical energy into mechanical energy."
  ],

  keyTerms: [
    { term: "Electric current", definition: "Rate of flow of electric charge." },
    { term: "Electric circuit", definition: "Complete conducting path through which current can flow." },
    { term: "Resistance", definition: "Opposition offered to the flow of electric charge." },
    { term: "Heating effect", definition: "Conversion of electrical energy into thermal energy when current flows through resistance." },
    { term: "Joule's law", definition: "H = I²Rt, the relation for heat produced in a resistor." },
    { term: "Fuse", definition: "Safety device that melts and opens the circuit when excessive current flows." },
    { term: "MCB", definition: "Automatic circuit breaker used for electrical protection." },
    { term: "Magnetic effect", definition: "Magnetic field produced by electric current." },
    { term: "Electromagnet", definition: "Magnet whose main magnetic action is produced by electric current." },
    { term: "Electric motor", definition: "Device that converts electrical energy into mechanical energy." }
  ],

  summary:
    "Electric current flows through complete circuits and can produce two major effects: heating and magnetism. The heating effect is used in appliances such as irons and kettles and is described by H = I²Rt. Excessive current can be dangerous, so fuses and MCBs protect circuits. Current also creates a magnetic field; coils with suitable cores can form electromagnets. Electromagnets are used in electric bells and many other devices, while magnetic forces on current-carrying conductors form the basis of electric motors."
};

/* Optional global export used by some older ConceptQizzer loaders. */
window.CQChapterData = ChapterData;
