/* =========================================================
   ConceptQizzer — Class 8 Science — Chapter 2
   The Invisible Living World: Beyond Our Naked Eye
   Full chapter data. Uses the existing universal renderer.
   ========================================================= */

window.ChapterData = {
  id: "class8-science-the-invisible-living-world-beyond-our-naked-eye",
  class: 8,
  subject: "Science",
  chapterNumber: 2,
  title: "The Invisible Living World: Beyond Our Naked Eye",
  description: "A detailed journey into microorganisms, microscopy, their diversity, useful roles, harmful effects, and the scientific habits needed to study the microscopic world safely and thoughtfully.",
  summary: "Microorganisms are living forms so small that many cannot be seen with the naked eye. Microscopes make their structures observable. Bacteria, fungi, protozoa and microscopic algae show enormous diversity and affect food, health, ecosystems, agriculture and industry. Some are useful, some can cause disease or spoilage, and many are essential decomposers. Scientific investigation requires careful observation, suitable magnification, measurement, comparison, hygiene and evidence-based conclusions.",

  sections: [
    {
      title: "🔬 Entering the Invisible Living World",
      blocks: [
        { type:"concept", colour:"purple", title:"What makes a world invisible?", text:"Our eyes can directly resolve only objects that are sufficiently large and separated. Many living organisms and cell structures are far smaller than the limit of unaided human vision. They are not absent; they are simply below the scale that our eyes can resolve clearly. Microscopes overcome this limitation by producing a magnified image." },
        { type:"fact", colour:"yellow", title:"Tiny does not mean unimportant", text:"Microorganisms may be microscopic, yet they influence decomposition, soil fertility, food production, fermentation, disease, water quality and many industrial processes." },
        { type:"figure", colour:"blue", title:"From the visible world to the microscopic world", svg:`<svg viewBox="0 0 900 430" role="img" aria-label="Scale from human eye to microscopic organisms" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x1="0" x2="1"><stop offset="0" stop-color="#eef2ff"/><stop offset="1" stop-color="#ecfeff"/></linearGradient></defs><rect x="20" y="20" width="860" height="390" rx="28" fill="url(#bg)"/><line x1="100" y1="215" x2="800" y2="215" stroke="#475569" stroke-width="6"/><g font-family="Poppins,Arial,sans-serif" font-weight="700" text-anchor="middle" fill="#0f172a"><circle cx="120" cy="215" r="55" fill="#fde68a" stroke="#92400e" stroke-width="5"/><text x="120" y="300" font-size="20">Human eye</text><text x="120" y="330" font-size="16" fill="#475569">visible directly</text><circle cx="330" cy="215" r="36" fill="#86efac" stroke="#166534" stroke-width="5"/><text x="330" y="300" font-size="20">Amoeba</text><text x="330" y="330" font-size="16" fill="#475569">microscopic</text><circle cx="540" cy="215" r="23" fill="#60a5fa" stroke="#1e40af" stroke-width="5"/><text x="540" y="300" font-size="20">Bacterium</text><text x="540" y="330" font-size="16" fill="#475569">microscopic</text><circle cx="735" cy="215" r="12" fill="#c4b5fd" stroke="#6d28d9" stroke-width="4"/><text x="735" y="300" font-size="20">Virus</text><text x="735" y="330" font-size="16" fill="#475569">much smaller</text><text x="450" y="80" font-size="28">The smaller the object, the greater the magnification needed</text></g></svg>`, caption:"A conceptual scale comparison showing why different levels of magnification are useful." },
        { type:"definition", title:"Microorganism", text:"An organism that is so small that it generally requires magnification, such as a microscope, to be observed clearly." },
        { type:"important", colour:"green", title:"Key idea", text:"Microscopic organisms are not a single biological group. The word microorganism describes size and visibility, not one particular kind of organism." }
      ]
    },

    {
      title: "👁️ From Observation to Microscopy",
      blocks: [
        { type:"paragraph", text:"Scientific study often begins with a question: What is present in a drop of pond water? Why does bread develop fuzzy growth? Why does curd form from milk under suitable conditions? To answer such questions, scientists need appropriate tools and careful methods." },
        { type:"figure", colour:"cyan", title:"A compound microscope", svg:`<svg viewBox="0 0 900 620" role="img" aria-label="Realistic scientific microscope diagram" xmlns="http://www.w3.org/2000/svg">
<defs>
 <linearGradient id="metal" x1="0" x2="1"><stop offset="0" stop-color="#64748b"/><stop offset=".45" stop-color="#e2e8f0"/><stop offset="1" stop-color="#475569"/></linearGradient>
 <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e0f2fe" stop-opacity=".95"/><stop offset="1" stop-color="#38bdf8" stop-opacity=".28"/></linearGradient>
 <filter id="shadow"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-opacity=".18"/></filter>
</defs>
<rect x="20" y="20" width="860" height="580" rx="30" fill="#f8fafc"/>
<g filter="url(#shadow)">
 <path d="M275 490 C300 430 320 330 350 235 C372 165 430 120 510 130 C600 142 640 210 615 285 C590 360 548 418 515 490 Z" fill="url(#metal)" stroke="#334155" stroke-width="8"/>
 <path d="M485 138 L545 105 L615 112 L630 142 L570 165 Z" fill="#334155"/>
 <rect x="510" y="72" width="115" height="45" rx="18" fill="#475569" stroke="#1e293b" stroke-width="7"/>
 <path d="M350 225 L255 178 L275 140 L390 190 Z" fill="#475569" stroke="#1e293b" stroke-width="7"/>
 <path d="M272 140 L220 105 L238 75 L302 120 Z" fill="#64748b" stroke="#334155" stroke-width="7"/>
 <rect x="300" y="300" width="255" height="25" rx="12" fill="#1e293b"/>
 <rect x="305" y="325" width="245" height="35" rx="16" fill="#cbd5e1" stroke="#64748b" stroke-width="5"/>
 <rect x="395" y="358" width="95" height="15" rx="7" fill="#334155"/>
 <rect x="368" y="382" width="150" height="18" rx="8" fill="#334155"/>
 <path d="M445 395 L420 495 L505 495 L485 395 Z" fill="#94a3b8" stroke="#475569" stroke-width="6"/>
 <rect x="250" y="495" width="315" height="38" rx="19" fill="#334155"/>
 <rect x="215" y="532" width="385" height="35" rx="17" fill="#1e293b"/>
 <rect x="330" y="340" width="105" height="12" rx="6" fill="url(#glass)" stroke="#0284c7" stroke-width="3"/>
</g>
<g font-family="Poppins,Arial,sans-serif" font-weight="700" fill="#0f172a">
 <text x="75" y="110" font-size="25">Eyepiece</text><path d="M185 103 L225 100" stroke="#0f172a" stroke-width="3"/>
 <text x="650" y="155" font-size="25">Objective lenses</text><path d="M645 160 L590 185" stroke="#0f172a" stroke-width="3"/>
 <text x="650" y="275" font-size="25">Stage</text><path d="M645 270 L545 305" stroke="#0f172a" stroke-width="3"/>
 <text x="650" y="385" font-size="25">Glass slide</text><path d="M645 380 L505 348" stroke="#0f172a" stroke-width="3"/>
 <text x="70" y="510" font-size="25">Light source</text><path d="M205 505 L330 445" stroke="#0f172a" stroke-width="3"/>
 <text x="70" y="555" font-size="20" fill="#475569">A compound microscope lets us observe structures too small for the naked eye.</text>
</g></svg>`, caption:"Scientific-style labelled diagram of a compound microscope used for observing microscopic specimens." },
        { type:"definition", title:"Magnification", text:"Magnification is the factor by which the apparent size of an object is increased in an image. Total magnification in a compound microscope is commonly obtained by multiplying eyepiece magnification by objective magnification." },
        { type:"workedExample", colour:"orange", title:"Solved Example — Total magnification", question:"A microscope has a 10× eyepiece and a 40× objective. What is the total magnification?", steps:["Write the eyepiece magnification: 10×.","Write the objective magnification: 40×.","Multiply: 10 × 40 = 400.","Therefore, the specimen appears about 400 times larger in angular size than without that magnification system."], answer:"Total magnification = 400×." },
        { type:"warning", colour:"red", title:"Do not confuse magnification with detail", text:"Making an image larger does not automatically reveal new detail. Resolution is the ability to distinguish two very close points as separate. A good microscope needs both useful magnification and adequate resolution." },
        { type:"activityCard", colour:"green", title:"🧪 Safe observation activity — Prepared slide", materials:["A prepared microscope slide supplied for school use","Compound microscope","Clean lens paper"], procedure:["Place the microscope on a stable surface.","Begin with the lowest-power objective.","Place the prepared slide carefully on the stage.","Bring the specimen into focus using the appropriate focusing control.","Move to higher power only when the image is centred and clear.","Record what you observe rather than what you expected to see."], conclusion:"Starting with low power makes locating and centring a specimen easier and reduces the risk of damaging the slide or objective." }
      ]
    },

    {
      title: "🦠 Bacteria — Tiny, Diverse and Everywhere",
      blocks: [
        { type:"paragraph", text:"Bacteria are microscopic, usually single-celled organisms. They occur in soil, water, air, food, on surfaces and in or on living organisms. Their shapes and lifestyles are diverse. Some obtain energy from organic matter, some use light or inorganic substances, and many participate in decomposition and nutrient cycling." },
        { type:"figure", colour:"blue", title:"Enlarged bacterial cell", svg:`<svg viewBox="0 0 900 500" role="img" aria-label="Realistic bacterial cell diagram" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="cell" cx="35%" cy="30%"><stop offset="0" stop-color="#fef3c7"/><stop offset=".55" stop-color="#f59e0b"/><stop offset="1" stop-color="#b45309"/></radialGradient><filter id="s"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-opacity=".2"/></filter></defs>
<rect x="20" y="20" width="860" height="460" rx="28" fill="#fff7ed"/>
<g filter="url(#s)"><path d="M190 245 C190 145 300 92 430 112 C560 132 650 210 610 300 C570 390 430 414 315 375 C235 348 190 305 190 245Z" fill="url(#cell)" stroke="#92400e" stroke-width="9"/>
<path d="M195 220 C250 120 370 105 470 130" fill="none" stroke="#fde68a" stroke-width="8" opacity=".8"/>
<path d="M610 230 C705 200 760 145 825 95" fill="none" stroke="#92400e" stroke-width="7"/><path d="M600 275 C720 275 760 330 835 365" fill="none" stroke="#92400e" stroke-width="7"/>
<path d="M295 235 C335 185 420 180 475 220 C515 250 500 300 450 318 C380 343 310 315 295 270Z" fill="none" stroke="#78350f" stroke-width="9"/>
<circle cx="365" cy="245" r="14" fill="#7c2d12"/><circle cx="430" cy="270" r="11" fill="#7c2d12"/><circle cx="400" cy="210" r="8" fill="#7c2d12"/></g>
<g font-family="Poppins,Arial,sans-serif" font-weight="700" fill="#0f172a"><text x="60" y="95" font-size="26">Bacterium</text><text x="60" y="130" font-size="19" fill="#475569">Simplified enlarged scientific view</text><text x="625" y="115" font-size="22">Flagella</text><text x="625" y="410" font-size="22">Cell wall / membrane</text><path d="M625 410 L540 340" stroke="#0f172a" stroke-width="3"/><text x="70" y="420" font-size="20" fill="#475569">Bacteria are microscopic single-celled organisms with diverse shapes and roles.</text></g></svg>`, caption:"A realistic-looking enlarged scientific illustration. The structures are schematic rather than a literal photograph." },
        { type:"definition", title:"Single-celled organism", text:"An organism whose body consists of one cell. A single cell carries out the essential life processes needed for that organism." },
        { type:"list", colour:"cyan", items:["Cocci — roughly spherical bacteria.","Bacilli — rod-shaped bacteria.","Spirilla or spiral forms — curved or helical shapes.","Some bacteria possess flagella that help in movement.","Many bacteria reproduce by cell division under favourable conditions."] },
        { type:"fact", title:"Useful bacteria", text:"Certain bacteria help decompose organic matter, recycle nutrients, contribute to food fermentation, and live symbiotically with plants or animals." },
        { type:"warning", title:"Not all bacteria are harmful", text:"It is scientifically incorrect to treat all bacteria as disease-causing. Many bacteria are harmless or beneficial, while a smaller subset can cause disease or spoilage." },
        { type:"workedExample", colour:"orange", title:"Think through the evidence", question:"A student sees tiny cells in a prepared slide. Can the student immediately conclude that every cell is a harmful bacterium?", steps:["Observe the cell shape and arrangement.","Check whether the preparation and microscope are suitable.","Compare the observed structure with reliable reference information.","Do not infer harmfulness from size alone.","A conclusion about identity or disease-causing ability requires evidence beyond simply seeing tiny cells."], answer:"No. Microscopic appearance alone is not enough to conclude that an organism is harmful." }
      ]
    },

    {
      title: "🟢 Protozoa — Single-Celled Animal-Like Forms",
      blocks: [
        { type:"paragraph", text:"Protozoa is a traditional school-level term for many single-celled eukaryotic organisms that obtain food in animal-like ways. They include forms with very different structures and movements. Amoeba and Paramecium are familiar examples used to understand microscopic life." },
        { type:"figure", colour:"green", title:"Amoeba — changing shape", svg:`<svg viewBox="0 0 900 520" role="img" aria-label="Realistic amoeba diagram" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="amo" cx="35%" cy="30%"><stop offset="0" stop-color="#dcfce7"/><stop offset=".65" stop-color="#4ade80"/><stop offset="1" stop-color="#15803d"/></radialGradient><filter id="a"><feDropShadow dx="0" dy="8" stdDeviation="9" flood-opacity=".18"/></filter></defs><rect x="20" y="20" width="860" height="480" rx="28" fill="#f0fdf4"/><g filter="url(#a)"><path d="M190 280 C125 230 175 150 255 165 C260 90 350 100 390 145 C470 80 560 135 535 205 C640 185 675 280 590 325 C625 405 520 445 455 390 C375 455 300 390 300 345 C230 370 160 340 190 280Z" fill="url(#amo)" stroke="#166534" stroke-width="9"/><circle cx="385" cy="270" r="58" fill="#bbf7d0" stroke="#166534" stroke-width="7"/><circle cx="385" cy="270" r="20" fill="#166534"/><circle cx="275" cy="255" r="18" fill="#86efac" stroke="#166534" stroke-width="5"/><circle cx="500" cy="315" r="15" fill="#86efac" stroke="#166534" stroke-width="5"/></g><g font-family="Poppins,Arial,sans-serif" font-weight="700" fill="#0f172a"><text x="70" y="100" font-size="28">Amoeba</text><text x="70" y="135" font-size="19" fill="#475569">An irregular, single-celled organism</text><text x="650" y="220" font-size="22">Pseudopodium</text><path d="M645 225 L575 205" stroke="#0f172a" stroke-width="3"/><text x="650" y="285" font-size="22">Nucleus</text><path d="M645 290 L445 270" stroke="#0f172a" stroke-width="3"/><text x="70" y="445" font-size="20" fill="#475569">Its changing cell shape helps it move and surround food particles.</text></g></svg>`, caption:"Enlarged scientific-style illustration showing pseudopodia and nucleus." },
        { type:"definition", title:"Pseudopodium", text:"A temporary extension of the cell body used by amoeba-like organisms for movement and for surrounding or engulfing food particles." },
        { type:"figure", colour:"blue", title:"Paramecium — cilia-assisted movement", svg:`<svg viewBox="0 0 900 520" role="img" aria-label="Realistic paramecium diagram" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="p" cx="35%" cy="30%"><stop offset="0" stop-color="#e0f2fe"/><stop offset=".65" stop-color="#60a5fa"/><stop offset="1" stop-color="#1d4ed8"/></radialGradient><filter id="pS"><feDropShadow dx="0" dy="8" stdDeviation="9" flood-opacity=".18"/></filter></defs><rect x="20" y="20" width="860" height="480" rx="28" fill="#eff6ff"/><g filter="url(#pS)"><path d="M230 265 C220 170 300 110 420 120 C545 130 625 210 600 295 C570 395 450 420 340 375 C270 347 235 310 230 265Z" fill="url(#p)" stroke="#1e40af" stroke-width="9"/><path d="M265 225 C340 200 470 195 570 240" fill="none" stroke="#bfdbfe" stroke-width="9"/><path d="M270 300 C360 275 460 280 560 330" fill="none" stroke="#bfdbfe" stroke-width="9"/><ellipse cx="415" cy="260" rx="68" ry="35" fill="#dbeafe" stroke="#1e40af" stroke-width="7"/><circle cx="415" cy="260" r="18" fill="#1e3a8a"/><g stroke="#2563eb" stroke-width="4"><line x1="245" y1="190" x2="220" y2="170"/><line x1="270" y1="260" x2="245" y2="240"/><line x1="295" y1="330" x2="270" y2="310"/><line x1="320" y1="190" x2="295" y2="170"/><line x1="345" y1="260" x2="320" y2="240"/><line x1="370" y1="330" x2="345" y2="310"/><line x1="395" y1="190" x2="370" y2="170"/><line x1="420" y1="260" x2="395" y2="240"/><line x1="445" y1="330" x2="420" y2="310"/><line x1="470" y1="190" x2="445" y2="170"/><line x1="495" y1="260" x2="470" y2="240"/><line x1="520" y1="330" x2="495" y2="310"/><line x1="545" y1="190" x2="520" y2="170"/><line x1="570" y1="260" x2="545" y2="240"/><line x1="595" y1="330" x2="570" y2="310"/></g></g><g font-family="Poppins,Arial,sans-serif" font-weight="700" fill="#0f172a"><text x="70" y="100" font-size="28">Paramecium</text><text x="70" y="135" font-size="19" fill="#475569">A slipper-shaped unicellular organism</text><text x="650" y="220" font-size="22">Cilia</text><path d="M645 225 L570 210" stroke="#0f172a" stroke-width="3"/><text x="650" y="285" font-size="22">Nucleus</text><path d="M645 290 L480 260" stroke="#0f172a" stroke-width="3"/><text x="70" y="445" font-size="20" fill="#475569">Numerous cilia beat rhythmically and help the organism move and obtain food.</text></g></svg>`, caption:"Enlarged scientific-style illustration showing the slipper-like body and cilia." },
        { type:"definition", title:"Cilia", text:"Short, numerous hair-like structures that beat rhythmically and can help a microscopic organism move or move material across its surface." },
        { type:"compareTable", colour:"cyan", title:"Amoeba and Paramecium — quick comparison", rows:[["Feature","Amoeba","Paramecium"],["Body shape","Irregular and constantly changing","Relatively definite, slipper-shaped"],["Movement","Pseudopodia","Cilia"],["Food capture","Can surround food particles","Uses specialised surface structures and currents"],["Cell type","Eukaryotic","Eukaryotic"]] },
        { type:"think", colour:"purple", title:"🧠 Think & Understand", question:"Why can an organism made of only one cell still be considered a living organism?", answer:"Because a single cell can perform essential life processes such as obtaining energy, responding to surroundings, maintaining internal conditions, growing and reproducing." }
      ]
    },

    {
      title: "🍞 Fungi — From Yeast to Bread Mould",
      blocks: [
        { type:"paragraph", text:"Fungi include microscopic and macroscopic forms. Some fungi are single-celled, such as yeast, while others form networks of microscopic filaments. Fungi generally obtain nutrients by absorbing dissolved substances from their surroundings." },
        { type:"figure", colour:"orange", title:"Yeast and budding", svg:`<svg viewBox="0 0 900 500" role="img" aria-label="Realistic yeast cells with budding" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="y" cx="35%" cy="30%"><stop offset="0" stop-color="#fff7ed"/><stop offset=".65" stop-color="#fdba74"/><stop offset="1" stop-color="#c2410c"/></radialGradient><filter id="yS"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-opacity=".18"/></filter></defs><rect x="20" y="20" width="860" height="460" rx="28" fill="#fff7ed"/><g filter="url(#yS)" fill="url(#y)" stroke="#9a3412" stroke-width="7"><circle cx="270" cy="250" r="105"/><circle cx="365" cy="170" r="48"/><circle cx="520" cy="275" r="115"/><circle cx="600" cy="180" r="52"/><circle cx="720" cy="340" r="75"/></g><g fill="#fed7aa" stroke="#9a3412" stroke-width="5"><circle cx="270" cy="250" r="35"/><circle cx="520" cy="275" r="38"/><circle cx="720" cy="340" r="25"/></g><g font-family="Poppins,Arial,sans-serif" font-weight="700" fill="#0f172a"><text x="65" y="95" font-size="28">Yeast cells</text><text x="65" y="130" font-size="19" fill="#475569">Single-celled fungi; budding is a common mode of reproduction.</text><text x="620" y="100" font-size="22">Bud</text><path d="M620 105 L600 155" stroke="#0f172a" stroke-width="3"/><text x="70" y="430" font-size="20" fill="#475569">Yeast is useful in bread-making and fermentation.</text></g></svg>`, caption:"Enlarged scientific-style illustration of yeast cells and budding." },
        { type:"definition", title:"Budding", text:"A form of asexual reproduction in which a small outgrowth develops on the parent cell and may eventually separate as a new individual." },
        { type:"figure", colour:"green", title:"Bread mould", svg:`<svg viewBox="0 0 900 520" role="img" aria-label="Realistic bread mould diagram" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d1fae5"/><stop offset="1" stop-color="#166534"/></linearGradient><filter id="mS"><feDropShadow dx="0" dy="8" stdDeviation="9" flood-opacity=".18"/></filter></defs><rect x="20" y="20" width="860" height="480" rx="28" fill="#f0fdf4"/><g filter="url(#mS)"><path d="M130 390 C220 340 285 350 360 390 C440 335 520 350 600 395 C675 350 750 360 810 395 L810 450 L130 450Z" fill="#d6a15d" stroke="#92400e" stroke-width="7"/><g stroke="#166534" stroke-width="7" fill="none"><path d="M230 380 Q220 290 230 205"/><path d="M350 390 Q350 285 380 170"/><path d="M505 385 Q500 270 540 180"/><path d="M655 390 Q650 300 700 215"/></g><g fill="url(#m)" stroke="#14532d" stroke-width="6"><circle cx="230" cy="190" r="34"/><circle cx="380" cy="155" r="38"/><circle cx="540" cy="165" r="36"/><circle cx="700" cy="200" r="35"/></g><g fill="#bbf7d0"><circle cx="205" cy="175" r="5"/><circle cx="355" cy="193" r="5"/><circle cx="505" cy="211" r="5"/><circle cx="655" cy="175" r="5"/><circle cx="205" cy="193" r="5"/><circle cx="355" cy="211" r="5"/><circle cx="505" cy="175" r="5"/><circle cx="655" cy="193" r="5"/><circle cx="205" cy="211" r="5"/><circle cx="355" cy="175" r="5"/><circle cx="505" cy="193" r="5"/><circle cx="655" cy="211" r="5"/><circle cx="205" cy="175" r="5"/><circle cx="355" cy="193" r="5"/><circle cx="505" cy="211" r="5"/><circle cx="655" cy="175" r="5"/><circle cx="205" cy="193" r="5"/><circle cx="355" cy="211" r="5"/><circle cx="505" cy="175" r="5"/><circle cx="655" cy="193" r="5"/></g></g><g font-family="Poppins,Arial,sans-serif" font-weight="700" fill="#0f172a"><text x="65" y="95" font-size="28">Bread mould</text><text x="65" y="130" font-size="19" fill="#475569">A filamentous fungus visible as fuzzy growth on suitable food.</text><text x="630" y="160" font-size="22">Spore-bearing structure</text><path d="M625 165 L555 175" stroke="#0f172a" stroke-width="3"/><text x="70" y="445" font-size="20" fill="#475569">Fungal spores can spread and germinate when conditions are favourable.</text></g></svg>`, caption:"Enlarged scientific-style illustration of filamentous fungal growth with spore-bearing structures." },
        { type:"fact", colour:"yellow", title:"Fungi in everyday life", text:"Yeast is used in bread-making and fermentation. Other fungi are important decomposers, while some fungi cause food spoilage or disease." },
        { type:"workedExample", colour:"orange", title:"Why does bread dough rise?", question:"What role does yeast play in bread-making?", steps:["Yeast uses available sugars as a source of energy.","During suitable fermentation conditions, carbon dioxide is produced.","Carbon dioxide forms bubbles in the dough.","The trapped gas expands and makes the dough rise.","Baking then changes the structure of the dough and inactivates the yeast."], answer:"Yeast fermentation produces carbon dioxide, which contributes to the rising of bread dough." },
        { type:"figure", colour:"yellow", title:"Fermentation idea map", svg:`<svg viewBox="0 0 900 520" role="img" aria-label="Yeast fermentation process diagram" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fef3c7"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><rect x="20" y="20" width="860" height="480" rx="28" fill="#fffbeb"/><g font-family="Poppins,Arial,sans-serif" font-weight="700" fill="#0f172a" text-anchor="middle"><rect x="100" y="170" width="180" height="230" rx="20" fill="url(#liq)" stroke="#92400e" stroke-width="7"/><circle cx="150" cy="260" r="14" fill="#c2410c"/><circle cx="210" cy="300" r="12" fill="#c2410c"/><text x="190" y="135" font-size="25">Sugar + yeast</text><path d="M300 285 L410 285" stroke="#475569" stroke-width="8" marker-end="url(#none)"/><text x="355" y="255" font-size="20">fermentation</text><rect x="460" y="170" width="180" height="230" rx="20" fill="#fde68a" stroke="#92400e" stroke-width="7"/><circle cx="515" cy="250" r="7" fill="#92400e"/><circle cx="565" cy="320" r="7" fill="#92400e"/><text x="550" y="135" font-size="25">Alcohol + CO₂</text><path d="M680 280 L760 210" stroke="#475569" stroke-width="7"/><circle cx="775" cy="195" r="18" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="5"/><circle cx="815" cy="165" r="14" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="5"/><text x="780" y="360" font-size="20">CO₂ bubbles</text><text x="450" y="455" font-size="18" fill="#475569">Yeast uses sugars and releases carbon dioxide; this helps bread dough rise.</text></g></svg>`, caption:"A simplified visual representation of yeast using sugars and releasing carbon dioxide during fermentation." }
      ]
    },

    {
      title: "🌿 Microscopic Algae and Photosynthetic Microorganisms",
      blocks: [
        { type:"paragraph", text:"Some algae are microscopic. They may occur in freshwater, marine environments and moist surfaces. Photosynthetic microscopic organisms can capture light energy and contribute to aquatic food webs and oxygen production." },
        { type:"definition", title:"Photosynthesis", text:"The process by which photosynthetic organisms use light energy to make organic food from carbon dioxide and water, with oxygen commonly released as a by-product in oxygenic photosynthesis." },
        { type:"concept", colour:"green", title:"Why microscopic producers matter", text:"A tiny organism can have a large ecological effect when it is numerous. Microscopic photosynthetic organisms can form the base of aquatic food chains, supporting organisms that feed on them." },
        { type:"compareTable", colour:"cyan", title:"Microscopic groups at a glance", rows:[["Group","Typical school-level example","Major feature / role"],["Bacteria","Lactobacillus-type bacteria","Decomposition, fermentation, nutrient cycling; some cause disease"],["Protozoa","Amoeba, Paramecium","Single-celled eukaryotic organisms with varied movement and nutrition"],["Fungi","Yeast, mould","Absorption of nutrients; decomposition; fermentation"],["Microscopic algae","Chlorella-like algae","Photosynthesis and aquatic food webs"]] },
        { type:"warning", colour:"red", title:"Classification needs care", text:"The word 'microorganism' groups organisms mainly by microscopic size. It does not mean that all microorganisms share the same cell structure, nutrition or evolutionary history." }
      ]
    },

    {
      title: "🧬 Cells, Cell Types and the Microscopic Scale",
      blocks: [
        { type:"concept", colour:"purple", title:"Prokaryotic and eukaryotic organisation", text:"At a school level, bacteria are described as prokaryotic cells, while amoeba, paramecium, yeast and many algae are eukaryotic. Eukaryotic cells contain a nucleus enclosed by a membrane; prokaryotic cells do not have a membrane-bound nucleus." },
        { type:"compareTable", colour:"cyan", title:"Prokaryotic vs eukaryotic cells", rows:[["Feature","Prokaryotic","Eukaryotic"],["Membrane-bound nucleus","Absent","Present"],["Typical school example","Bacterium","Amoeba / yeast"],["Internal membrane-bound organelles","Absent in the basic school-level description","Present"],["Cell size","Usually smaller","Usually larger, though there are exceptions"]] },
        { type:"important", colour:"yellow", title:"Do not use size alone to identify a cell type", text:"Cell organisation, especially the presence or absence of a membrane-bound nucleus, is a more meaningful criterion than simply asking which organism looks smaller." },
        { type:"think", colour:"blue", title:"What if a microscope image looks blurry?", question:"Should a student immediately draw a detailed conclusion from a blurry image?", answer:"No. The student should improve focus, lighting and preparation, check the objective and slide, and repeat the observation before making a strong claim." }
      ]
    },

    {
      title: "🌎 Microorganisms in Nature — The Invisible Workforce",
      blocks: [
        { type:"paragraph", text:"Microorganisms are major participants in ecosystems. They break down dead material, transform nutrients and interact with plants, animals and other microorganisms. Without decomposers and nutrient-cycling organisms, matter would not move through ecosystems in the same way." },
        { type:"list", colour:"green", items:["Decomposition of dead organic matter.","Release and recycling of nutrients into ecosystems.","Participation in soil processes.","Support of food webs in aquatic environments.","Symbiotic relationships with plants and animals.","Transformation of organic materials during fermentation and other processes."] },
        { type:"caseStudy", colour:"orange", title:"Case Study — What happens to a fallen leaf?", situation:"A leaf falls to the ground and is gradually broken down.", reasoning:["Larger organisms may fragment the material.","Fungi and bacteria colonise the remaining organic matter.","Microorganisms release enzymes and break complex substances into simpler materials.","Nutrients become available for reuse in the ecosystem.","The process contributes to nutrient cycling."], conclusion:"The microscopic world is deeply connected to visible life. Decomposition is one of the clearest examples." },
        { type:"fact", colour:"yellow", title:"Soil is a living environment", text:"A small amount of healthy soil can contain an enormous diversity of microscopic life. These organisms interact with minerals, roots, organic matter and one another." }
      ]
    },

    {
      title: "🥣 Microorganisms and Food — Useful Partners",
      blocks: [
        { type:"paragraph", text:"Humans have used microorganisms for food production for thousands of years, often without knowing the microscopic mechanisms involved. Modern science explains many of these processes in terms of microbial growth and biochemical reactions." },
        { type:"list", colour:"orange", items:["Yeast helps bread dough rise through fermentation.","Microorganisms are used in producing fermented foods and beverages.","Certain bacteria are involved in converting milk into curd or yoghurt under suitable conditions.","Microbial processes are also important in producing enzymes and other useful substances."] },
        { type:"workedExample", colour:"orange", title:"Reasoning — Why can warmth speed up some microbial processes?", question:"A food fermentation process becomes more active under suitable warm conditions. Why might temperature matter?", steps:["Microbial cells contain enzymes and other biochemical systems.","Their rates of chemical reactions depend on temperature.","Within a suitable range, warming can increase reaction rates and microbial activity.","Too much heat can damage cells or enzymes, so 'warmer' does not mean 'always better'."], answer:"Temperature affects biochemical reaction rates and microbial activity; there is usually a suitable range rather than an unlimited increase." },
        { type:"warning", colour:"red", title:"Food safety matters", text:"Not every microbial change in food is desirable. Spoilage organisms and some disease-causing microorganisms can make food unsafe. Food should therefore be handled, stored and cooked according to appropriate safety guidance." }
      ]
    },

    {
      title: "🩺 Helpful and Harmful Microorganisms",
      blocks: [
        { type:"compareTable", colour:"cyan", title:"Helpful and harmful effects", rows:[["Helpful roles","Possible harmful effects"],["Decomposition and nutrient cycling","Food spoilage"],["Fermentation and food production","Some infectious diseases"],["Production of useful biological substances","Some plant and animal diseases"],["Symbiotic relationships","Contamination of water or food"],["Biotechnology and industrial processes","Toxin production by some microorganisms"]] },
        { type:"misconception", colour:"red", title:"Common Misconception", wrong:"All microorganisms are germs and all germs are dangerous.", correct:"Microorganisms are diverse. Some can cause disease, but many are harmless or beneficial. The word 'germ' is an informal term often used for disease-causing microorganisms and should not be treated as a scientific classification." },
        { type:"concept", colour:"purple", title:"Disease is a biological interaction", text:"Whether a microorganism causes disease depends on the organism, the host, the route of exposure, dose, immune response and other conditions. Simply detecting a microorganism does not always mean that a person will become ill." },
        { type:"examTip", title:"Exam tip", text:"If a question asks whether microorganisms are useful or harmful, do not choose an absolute answer. Give examples of both useful and harmful roles." }
      ]
    },

    {
      title: "🧼 Hygiene, Prevention and Responsible Use",
      blocks: [
        { type:"paragraph", text:"Understanding microorganisms also explains why hygiene practices matter. Handwashing, safe drinking water, appropriate food handling, clean surfaces and responsible healthcare practices can reduce the spread of many infections. Prevention strategies should be based on the specific route by which an infection spreads." },
        { type:"list", colour:"green", items:["Wash hands properly at appropriate times.","Use safe drinking water.","Handle and store food hygienically.","Avoid sharing personal items when infection risk is relevant.","Follow healthcare advice for vaccination, treatment and infection control.","Keep laboratory specimens contained and follow school laboratory safety rules."] },
        { type:"activityCard", colour:"blue", title:"🧪 Investigation — Handwashing and evidence", materials:["Soap and water","Clean paper towel","Teacher-approved safe observation method"], procedure:["Discuss what contamination means.","Plan a safe demonstration with the teacher rather than intentionally growing unknown microorganisms.","Compare the planned conditions using an approved classroom method.","Record observations without touching or opening unknown cultures.","Discuss why controlled procedures are important."], conclusion:"Microbiology experiments must be designed with safety in mind. Unknown environmental microbes should not be deliberately cultured at home or handled casually." },
        { type:"warning", colour:"red", title:"Safety rule", text:"Do not culture unknown microorganisms from skin, food, toilets, soil or other environmental samples at home. Some microbes can be harmful, and opening or growing cultures can increase exposure." }
      ]
    },

    {
      title: "🔍 Scientific Investigation of the Microscopic World",
      blocks: [
        { type:"paragraph", text:"A microscopic investigation still follows the scientific habits studied in Chapter 1: observe, ask, predict, plan, test, measure, record, compare and explain. A microscope changes what we can observe, but it does not remove the need for careful reasoning." },
        { type:"process", colour:"purple", title:"A strong microscopy investigation", steps:["Choose a clear question.","Select a suitable specimen or prepared slide.","Begin with low magnification.","Focus and centre the specimen.","Increase magnification when appropriate.","Record observations using labelled sketches or measurements.","Compare repeated observations.","Separate observation from interpretation.","Use evidence to form a conclusion."] },
        { type:"workedExample", colour:"orange", title:"HOTS — Observation vs inference", question:"A student observes round structures in a microscope field. The student writes: 'These are harmful bacteria.' What is wrong with the conclusion?", steps:["The first part — round structures — is an observation if the image supports it.","The word 'bacteria' is an identification that needs evidence.","The word 'harmful' is an even stronger claim and requires biological evidence about the organism and context.","A better record would describe the visible structures first and then seek evidence for identification."], answer:"The student has turned a limited observation into an unsupported identification and health claim." },
        { type:"keyTakeaway", colour:"green", title:"Investigator's habit", points:["Describe what you actually see.","Use suitable tools and magnification.","Record observations honestly.","Repeat or compare observations where possible.","Do not confuse an image with a complete explanation."] }
      ]
    },

    {
      title: "🧪 Mini Investigations and Activities",
      blocks: [
        { type:"activityCard", colour:"green", title:"Activity 1 — Pond-water observation", materials:["Teacher-provided prepared pond-water slide or sealed sample","Microscope","Notebook"], procedure:["Observe at low power first.","Locate moving or stationary microscopic forms.","Increase magnification carefully.","Make a labelled sketch of one form.","Record movement, shape and approximate relative size.","Do not claim an exact identity unless the evidence supports it."], conclusion:"A mixed sample can contain many forms of microscopic life, demonstrating diversity within a tiny volume." },
        { type:"activityCard", colour:"blue", title:"Activity 2 — Yeast investigation", materials:["Teacher-approved yeast suspension","Suitable sugar solution","Two safe temperature conditions","Prepared observation setup"], procedure:["Keep all conditions except the chosen variable as similar as practical.","Observe gas production or another teacher-approved indicator.","Record observations at equal time intervals.","Compare the conditions.","State whether the evidence supports the prediction."], conclusion:"A controlled comparison helps reveal how environmental conditions influence microbial activity." },
        { type:"activityCard", colour:"orange", title:"Activity 3 — Microscope drawing challenge", materials:["Prepared slide","Microscope","Pencil and notebook"], procedure:["Draw only structures you can actually see.","Use clear lines rather than artistic shading.","Add a title and labels.","Write the magnification if provided.","Compare your drawing with a reference image after the observation."], conclusion:"Scientific diagrams are records of observations, not decorative drawings." },
        { type:"challengeBox", colour:"purple", title:"🧩 Science Detective Challenge", question:"You see two microscopic samples. Sample A contains many similar rod-shaped cells. Sample B contains irregular green cells with changing outlines. What additional evidence would you seek before naming them?", thinking:"Look for cell organisation, movement, structures, preparation method and reliable reference information. Shape alone is useful evidence but is not always sufficient for identification." }
      ]
    },

    {
      title: "🧠 Think, Reason and Apply",
      blocks: [
        { type:"think", colour:"blue", title:"Why can a microorganism affect a whole ecosystem?", question:"If one organism is microscopic, how can it have a large effect?", answer:"Large populations can carry out enormous numbers of biochemical reactions. Microorganisms also occupy key positions in decomposition, nutrient cycling and food webs." },
        { type:"think", colour:"green", title:"What if the microscope image changes when magnification increases?", question:"Why might the field of view become smaller at higher magnification?", answer:"Higher magnification gives a more enlarged view of a smaller portion of the specimen. The field of view generally decreases as magnification increases." },
        { type:"think", colour:"orange", title:"What if two students see different results?", question:"Does disagreement automatically mean that one student is wrong?", answer:"Not necessarily. They should check specimen preparation, focus, magnification, lighting, measurement method and repeat observations before deciding." },
        { type:"reasoning", colour:"purple", title:"Reasoning question", question:"A student says, 'I cannot see microorganisms in this water, so there are no microorganisms.' Is the reasoning valid?", answer:"No. Absence from unaided visual observation is not proof of absence. A suitable sample and appropriate observation method are required." }
      ]
    },

    {
      title: "⚠️ Common Mistakes to Avoid",
      blocks: [
        { type:"warning", title:"Mistake 1 — Calling every microorganism harmful", text:"Microorganisms have diverse roles. Always provide evidence and examples." },
        { type:"warning", colour:"orange", title:"Mistake 2 — Starting every microscope observation at high power", text:"Low power is usually useful for locating and centring the specimen first." },
        { type:"warning", colour:"blue", title:"Mistake 3 — Confusing magnification and resolution", text:"A larger image is not necessarily a more detailed image." },
        { type:"warning", colour:"green", title:"Mistake 4 — Treating a scientific sketch like an art drawing", text:"A scientific sketch should be clear, proportional to the observation as far as practical, labelled and based on what was actually seen." },
        { type:"warning", colour:"red", title:"Mistake 5 — Growing unknown microbes at home", text:"This is unsafe. Unknown cultures can contain harmful organisms. Use teacher-approved prepared materials and controlled activities." },
        { type:"warning", colour:"purple", title:"Mistake 6 — Making an identity claim from one visual feature", text:"A single shape or colour is rarely enough for reliable identification." }
      ]
    },

    {
      title: "🎯 Exam Zone",
      blocks: [
        { type:"formula", colour:"purple", title:"Microscope relationship", formula:"Total magnification = Eyepiece magnification × Objective magnification" },
        { type:"important", colour:"yellow", title:"Must-remember results", text:"Microorganisms are diverse. Bacteria are generally prokaryotic and single-celled. Amoeba and Paramecium are unicellular eukaryotic examples. Yeast is a fungus. Some algae are microscopic and photosynthetic. Microorganisms can be useful, harmful or ecologically essential depending on the organism and context." },
        { type:"examTip", colour:"orange", title:"Common question patterns", text:"Be ready to define microorganism, magnification, resolution, pseudopodium, cilia and budding; compare bacteria with eukaryotic microorganisms; explain useful and harmful roles; interpret simple microscopy situations; and distinguish observation from inference." },
        { type:"workedExample", colour:"orange", title:"Exam-style numerical question", question:"An eyepiece is 15× and the objective is 20×. Find the total magnification.", steps:["Total magnification = eyepiece × objective.","= 15 × 20.","= 300."], answer:"300×." },
        { type:"workedExample", colour:"orange", title:"Exam-style reasoning", question:"Why should a student begin with low magnification?", steps:["Low power generally gives a wider field of view.","A wider field makes locating the specimen easier.","The specimen can then be centred before moving to higher power."], answer:"It makes locating and centring the specimen easier and supports safer, clearer observation." }
      ]
    },

    {
      title: "📝 Practice Questions",
      blocks: [
        { type:"questions", colour:"cyan", title:"Basic", questions:["What is a microorganism?","Name two microorganisms that are fungi.","What is magnification?","What is a pseudopodium?","What are cilia used for in Paramecium?"] },
        { type:"questions", colour:"blue", title:"Standard", questions:["Differentiate between bacteria and eukaryotic microorganisms at the level of cell organisation.","Explain why all microorganisms cannot be called harmful.","Describe how yeast helps bread dough rise.","Why is low magnification useful at the beginning of microscopy?","Explain the difference between magnification and resolution."] },
        { type:"questions", colour:"orange", title:"Application", questions:["A student cannot find the specimen after changing to high power. What should the student do?","How can microorganisms contribute to nutrient cycling?","A food item develops fungal growth. What does this tell you about microorganisms and food?","How would you design a safe classroom investigation of yeast activity?","Why is a microscopic observation not automatically an identification?"] },
        { type:"questions", colour:"purple", title:"HOTS and reasoning", questions:["A student says, 'If a sample looks clear, it must contain no microorganisms.' Evaluate the statement.","Two groups obtain different microscope observations from similar slides. Give four possible reasons.","Why can microscopic producers be important even if individual organisms are invisible?","Design a fair comparison to study the effect of one condition on yeast activity.","Explain why scientific conclusions should be proportional to the evidence collected."] }
      ]
    },

    {
      title: "🏆 Challenge Zone",
      blocks: [
        { type:"challengeBox", colour:"purple", title:"Challenge 1 — The mystery slide", question:"A prepared slide shows oval cells, some with small attached buds. What organism would you investigate as a possible identification, and what further evidence would you want?", thinking:"Yeast is a reasonable hypothesis because budding is characteristic of many yeast cells, but a scientific identification should be supported by the preparation, context and reliable reference information." },
        { type:"challengeBox", colour:"blue", title:"Challenge 2 — Design a controlled test", question:"You want to test whether temperature affects yeast activity. Identify the independent variable, a measurable dependent variable and at least three conditions that should be controlled.", thinking:"Independent variable: temperature. Dependent variable: a measurable indicator such as gas production over a fixed time. Controls can include yeast amount, sugar concentration, liquid volume and observation time." },
        { type:"challengeBox", colour:"green", title:"Challenge 3 — Evidence ladder", question:"Put these statements in increasing strength of claim: 'I see round cells'; 'The cells may be bacteria'; 'The cells are harmful bacteria causing disease.'", thinking:"The first is a direct observation. The second is a tentative identification. The third is a strong causal and health claim requiring much more evidence." }
      ]
    },

    {
      title: "🔄 Chapter Revision",
      blocks: [
        { type:"keyTakeaway", colour:"green", title:"Quick revision — core concepts", points:["Microorganisms are generally too small to be observed clearly without magnification.","A microscope enlarges images and can reveal structures that the naked eye cannot resolve.","Magnification and resolution are different concepts.","Bacteria are generally prokaryotic and commonly single-celled.","Amoeba and Paramecium are unicellular eukaryotic examples used to study microscopic life.","Yeast is a fungus and can reproduce by budding.","Fungi include microscopic forms such as yeast and mould.","Some algae are microscopic and photosynthetic.","Microorganisms can be useful, harmful or essential to ecosystems.","Scientific microscopy requires safe procedures, careful observation and evidence-based conclusions."] },
        { type:"list", colour:"yellow", items:["Observe → focus → record → compare → explain.","Start with low power when appropriate.","Never infer harmfulness from microscopic size alone.","Do not culture unknown environmental microorganisms outside controlled laboratory settings."] }
      ]
    },

    {
      title: "⭐ Important Points",
      blocks: [
        { type:"important", colour:"yellow", title:"Most important facts", text:"1. The microscopic world contains enormous biological diversity. 2. Microscopes allow us to observe specimens beyond the resolving ability of our unaided eyes. 3. Microorganism is a size-based descriptive term, not one taxonomic group. 4. Bacteria, fungi, protozoa and microscopic algae differ greatly in cell organisation and lifestyle. 5. Microorganisms are central to decomposition and nutrient cycling. 6. Some microorganisms are useful in food production and biotechnology. 7. Some can cause disease or spoil food. 8. Safe microbiology requires controlled materials and hygienic practice. 9. Observation, identification and explanation are different levels of scientific reasoning. 10. Strong conclusions require evidence." }
      ]
    },

    {
      title: "🔑 Key Terms",
      blocks: [
        { type:"definition", colour:"cyan", title:"Microorganism", text:"A microscopic organism that generally requires magnification for clear observation." },
        { type:"definition", title:"Microscope", text:"An instrument that produces a magnified view of very small objects or structures." },
        { type:"definition", title:"Magnification", text:"The factor by which the apparent size of an object is increased in an image." },
        { type:"definition", title:"Resolution", text:"The ability to distinguish two close points as separate details." },
        { type:"definition", title:"Bacterium", text:"A single-celled prokaryotic organism belonging to the domain Bacteria." },
        { type:"definition", title:"Protozoa", text:"A traditional school-level term for many single-celled eukaryotic organisms with animal-like modes of nutrition or movement." },
        { type:"definition", title:"Pseudopodium", text:"A temporary cell extension used by amoeba-like organisms for movement and feeding." },
        { type:"definition", title:"Cilia", text:"Numerous short hair-like structures that can produce movement or move material across a cell surface." },
        { type:"definition", title:"Yeast", text:"A group of unicellular fungi; many reproduce asexually by budding." },
        { type:"definition", title:"Budding", text:"A form of asexual reproduction in which a new individual develops as an outgrowth of the parent cell." },
        { type:"definition", title:"Fungus", text:"An organism belonging to the kingdom Fungi; many fungi obtain nutrients by absorption." },
        { type:"definition", title:"Fermentation", text:"A set of metabolic processes in which microorganisms transform organic substances, often producing useful products such as gases or alcohols." },
        { type:"definition", title:"Decomposer", text:"An organism that breaks down dead organic material and helps recycle nutrients." }
      ]
    },

    {
      title: "📖 Chapter Summary",
      blocks: [
        { type:"summary", colour:"purple", title:"Complete chapter summary", text:"The world around us contains an enormous variety of living forms that cannot be seen clearly with the naked eye. Microorganisms are studied using tools such as microscopes, which provide magnification and useful resolution. Bacteria are usually single-celled prokaryotes, while examples such as amoeba, Paramecium and yeast are eukaryotic. Amoeba uses pseudopodia, Paramecium uses cilia, and yeast commonly reproduces by budding. Microscopic fungi and algae add further diversity. Microorganisms are not simply 'germs': many are beneficial in decomposition, nutrient cycling, food production, fermentation, biotechnology and symbiotic relationships, while some can cause disease or spoilage. The microscopic world therefore affects almost every part of life on Earth. To investigate it responsibly, students must use safe materials, suitable magnification, careful observations, accurate records and conclusions that match the evidence." },
        { type:"examTip", colour:"orange", title:"One-line takeaway", text:"Tiny organisms can have enormous effects — and science lets us investigate them safely, systematically and with evidence." }
      ]
    }
  ],

  importantPoints: [
    "Microorganisms are generally too small to be seen clearly with the naked eye.",
    "A microscope provides magnification; resolution determines how clearly close details can be distinguished.",
    "Microorganism is a descriptive term based mainly on microscopic size, not a single taxonomic group.",
    "Bacteria are generally single-celled prokaryotic organisms.",
    "Amoeba and Paramecium are unicellular eukaryotic examples.",
    "Yeast is a fungus and commonly reproduces by budding.",
    "Some algae are microscopic and photosynthetic.",
    "Microorganisms play important roles in decomposition, nutrient cycling and food webs.",
    "Some microorganisms are useful while others can cause disease or spoilage.",
    "Microscopy requires careful observation, safe procedures and evidence-based conclusions."
  ],

  keyTerms: [
    {term:"Microorganism", definition:"A microscopic organism that generally requires magnification for clear observation."},
    {term:"Microscope", definition:"An instrument used to produce a magnified view of very small objects or structures."},
    {term:"Magnification", definition:"The factor by which the apparent size of an object is increased in an image."},
    {term:"Resolution", definition:"The ability to distinguish two close points as separate details."},
    {term:"Bacterium", definition:"A single-celled prokaryotic organism belonging to the domain Bacteria."},
    {term:"Pseudopodium", definition:"A temporary extension used by amoeba-like organisms for movement and feeding."},
    {term:"Cilia", definition:"Short hair-like structures that beat rhythmically and assist movement or transport."},
    {term:"Yeast", definition:"A group of unicellular fungi; many reproduce by budding."},
    {term:"Budding", definition:"Asexual reproduction in which a new individual develops as an outgrowth of the parent."},
    {term:"Fermentation", definition:"Microbial transformation of organic substances producing characteristic products."},
    {term:"Decomposer", definition:"An organism that breaks down dead organic matter and helps recycle nutrients."}
  ]
};
