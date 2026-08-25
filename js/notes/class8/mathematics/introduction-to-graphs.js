/*========================================================
  CONCEPT QUIZZER
  CLASS 8 MATHEMATICS — CHAPTER 15
  INTRODUCTION TO GRAPHS
  UPDATED: EXTRA GRAPH VISUALS + GRAPH-BASED EXAMPLES
========================================================*/

"use strict";

const graphAxis = (title, xLabel="x", yLabel="y") => `
<svg viewBox="0 0 900 500" class="cqMathFigure" role="img" aria-label="${title}">
  <rect x="0" y="0" width="900" height="500" rx="24" fill="#fbfcff"/>
  <g stroke="#e5e7eb" stroke-width="1">
    ${Array.from({length:17},(_,i)=>`<line x1="${90+i*45}" y1="55" x2="${90+i*45}" y2="440"/>`).join("")}
    ${Array.from({length:9},(_,i)=>`<line x1="90" y1="${55+i*48}" x2="810" y2="${55+i*48}"/>`).join("")}
  </g>
  <line x1="90" y1="248" x2="820" y2="248" stroke="#1f2937" stroke-width="4"/>
  <polygon points="820,248 804,240 804,256" fill="#1f2937"/>
  <line x1="450" y1="440" x2="450" y2="45" stroke="#1f2937" stroke-width="4"/>
  <polygon points="450,45 442,61 458,61" fill="#1f2937"/>
  <text x="830" y="270" font-size="24" font-weight="700">${xLabel}</text>
  <text x="468" y="35" font-size="24" font-weight="700">${yLabel}</text>
  <text x="450" y="485" text-anchor="middle" font-size="22" font-weight="700">${title}</text>
</svg>`;

const coordinateExample = `
<svg viewBox="0 0 900 500" class="cqMathFigure" role="img" aria-label="Coordinate plane showing plotted points">
  <rect width="900" height="500" rx="24" fill="#fbfcff"/>
  <g stroke="#e5e7eb" stroke-width="1">
    ${Array.from({length:17},(_,i)=>`<line x1="${90+i*45}" y1="55" x2="${90+i*45}" y2="440"/>`).join("")}
    ${Array.from({length:9},(_,i)=>`<line x1="90" y1="${55+i*48}" x2="810" y2="${55+i*48}"/>`).join("")}
  </g>
  <line x1="90" y1="248" x2="820" y2="248" stroke="#111827" stroke-width="4"/>
  <polygon points="820,248 804,240 804,256" fill="#111827"/>
  <line x1="450" y1="440" x2="450" y2="45" stroke="#111827" stroke-width="4"/>
  <polygon points="450,45 442,61 458,61" fill="#111827"/>
  <g font-size="18" fill="#374151">
    <text x="495" y="275">1</text><text x="540" y="275">2</text><text x="585" y="275">3</text>
    <text x="405" y="275">−1</text><text x="360" y="275">−2</text><text x="315" y="275">−3</text>
    <text x="430" y="205">1</text><text x="430" y="157">2</text><text x="430" y="109">3</text>
    <text x="422" y="295">0</text>
  </g>
  <g>
    <circle cx="585" cy="157" r="10" fill="#4f46e5"/><text x="605" y="150" font-size="22" font-weight="700">P(3,2)</text>
    <circle cx="360" cy="344" r="10" fill="#16a34a"/><text x="380" y="365" font-size="22" font-weight="700">Q(−2,−2)</text>
    <circle cx="540" cy="248" r="10" fill="#ea580c"/><text x="555" y="235" font-size="22" font-weight="700">R(2,0)</text>
  </g>
  <text x="830" y="270" font-size="24" font-weight="700">x</text>
  <text x="468" y="35" font-size="24" font-weight="700">y</text>
  <text x="450" y="485" text-anchor="middle" font-size="22" font-weight="700">Reading ordered pairs on the Cartesian plane</text>
</svg>`;

const barGraph = `
<svg viewBox="0 0 900 520" class="cqMathFigure" role="img" aria-label="Bar graph of books read by students">
  <rect width="900" height="520" rx="24" fill="#fbfcff"/>
  <line x1="110" y1="430" x2="820" y2="430" stroke="#111827" stroke-width="4"/>
  <line x1="110" y1="70" x2="110" y2="430" stroke="#111827" stroke-width="4"/>
  ${[0,2,4,6,8,10].map((v,i)=>`<text x="72" y="${435-i*72}" font-size="18">${v}</text><line x1="110" y1="${430-i*72}" x2="820" y2="${430-i*72}" stroke="#e5e7eb"/>`).join("")}
  ${[["A",4],["B",7],["C",5],["D",9],["E",6]].map((d,i)=>{
    const h=d[1]*36; const x=165+i*125;
    return `<rect x="${x}" y="${430-h}" width="70" height="${h}" rx="8" fill="#6366f1"/>
            <text x="${x+35}" y="${455}" text-anchor="middle" font-size="20" font-weight="700">${d[0]}</text>
            <text x="${x+35}" y="${420-h}" text-anchor="middle" font-size="18" font-weight="700">${d[1]}</text>`;
  }).join("")}
  <text x="450" y="45" text-anchor="middle" font-size="24" font-weight="800">Books read by five students</text>
  <text x="25" y="250" transform="rotate(-90 25 250)" text-anchor="middle" font-size="20">Number of books</text>
</svg>`;

const lineGraph = `
<svg viewBox="0 0 900 520" class="cqMathFigure" role="img" aria-label="Line graph of distance travelled over time">
  <rect width="900" height="520" rx="24" fill="#fbfcff"/>
  <line x1="110" y1="430" x2="830" y2="430" stroke="#111827" stroke-width="4"/>
  <line x1="110" y1="70" x2="110" y2="430" stroke="#111827" stroke-width="4"/>
  ${[0,10,20,30,40,50].map((v,i)=>`<text x="68" y="${435-i*72}" font-size="18">${v}</text><line x1="110" y1="${430-i*72}" x2="830" y2="${430-i*72}" stroke="#e5e7eb"/>`).join("")}
  ${[0,1,2,3,4,5].map((v,i)=>`<text x="${110+i*130}" y="460" text-anchor="middle" font-size="18">${v}</text>`).join("")}
  <polyline points="110,430 240,358 370,286 500,214 630,142 760,70" fill="none" stroke="#4f46e5" stroke-width="6"/>
  ${[[110,430],[240,358],[370,286],[500,214],[630,142],[760,70]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="8" fill="#ef4444"/>`).join("")}
  <text x="450" y="45" text-anchor="middle" font-size="24" font-weight="800">Distance travelled with time</text>
  <text x="450" y="500" text-anchor="middle" font-size="20">Time (hours)</text>
  <text x="25" y="250" transform="rotate(-90 25 250)" text-anchor="middle" font-size="20">Distance (km)</text>
</svg>`;

const linearGraph = `
<svg viewBox="0 0 900 520" class="cqMathFigure" role="img" aria-label="Graph of y equals x plus 2">
  <rect width="900" height="520" rx="24" fill="#fbfcff"/>
  <g stroke="#e5e7eb" stroke-width="1">
    ${Array.from({length:15},(_,i)=>`<line x1="${100+i*50}" y1="60" x2="${100+i*50}" y2="450"/>`).join("")}
    ${Array.from({length:9},(_,i)=>`<line x1="100" y1="${60+i*48.75}" x2="800" y2="${60+i*48.75}"/>`).join("")}
  </g>
  <line x1="100" y1="255" x2="815" y2="255" stroke="#111827" stroke-width="4"/>
  <line x1="450" y1="450" x2="450" y2="45" stroke="#111827" stroke-width="4"/>
  <polyline points="250,450 350,355 450,255 550,158 650,60" fill="none" stroke="#4f46e5" stroke-width="7"/>
  <circle cx="450" cy="158" r="9" fill="#dc2626"/>
  <text x="470" y="145" font-size="20" font-weight="700">(0,2)</text>
  <text x="450" y="490" text-anchor="middle" font-size="24" font-weight="800">A straight-line graph: y = x + 2</text>
  <text x="825" y="275" font-size="22" font-weight="700">x</text>
  <text x="465" y="42" font-size="22" font-weight="700">y</text>
</svg>`;

window.ChapterData = {
  id: "class8-mathematics-introduction-to-graphs",
  title: "Introduction to Graphs",
  class: 8,
  subject: "Mathematics",
  chapterNumber: 15,

  description:
    "A very detailed visual chapter on graphs, coordinates, axes, plotting points, tables, bar graphs, line graphs and graph-based interpretation.",

  summary:
    "Graphs convert information into a visual form. In this chapter we learn to read and construct coordinate graphs, locate ordered pairs, prepare tables, draw and interpret bar graphs and line graphs, and use graphs to understand relationships between quantities.",

  sections: [
    {
      title: "1. Chapter Introduction",
      blocks: [
        {type:"paragraph", title:"What is a graph?", text:"A graph is a visual way of representing information or showing a relationship between quantities. Instead of reading a long list of numbers, we can often understand the same information quickly from a graph."},
        {type:"paragraph", title:"Why this topic matters", text:"Graphs are used in mathematics, science, business, weather reports, sports statistics, travel data and everyday decision-making. A graph can reveal a trend, comparison or relationship that may be difficult to notice in a table."},
        {type:"graph", title:"A coordinate plane at a glance", html:graphAxis("Coordinate plane: two number lines meeting at the origin")},
        {type:"tip", title:"Visual idea", text:"The horizontal axis is normally called the x-axis and the vertical axis is normally called the y-axis. Their intersection is the origin."}
      ]
    },

    {
      title: "2. Cartesian Plane and Coordinates",
      blocks: [
        {type:"definition", title:"Cartesian plane", text:"A Cartesian plane is formed by two perpendicular number lines: the horizontal x-axis and the vertical y-axis."},
        {type:"definition", title:"Origin", text:"The point where the x-axis and y-axis meet is called the origin. Its coordinates are (0, 0)."},
        {type:"paragraph", title:"Ordered pair", text:"The position of a point is written as an ordered pair (x, y). The first coordinate tells the horizontal movement and the second coordinate tells the vertical movement."},
        {type:"graph", title:"Reading three plotted points", rows:[["Point","Coordinates"],["P","(3, 2)"],["Q","(−2, −2)"],["R","(2, 0)"]], html:coordinateExample},
        {type:"example", title:"Solved Example 1 — Locate a point", text:"To plot (4, 3), start at the origin, move 4 units along the positive x-direction, then move 3 units upward parallel to the y-axis. Mark the resulting point."},
        {type:"example", title:"Solved Example 2 — Read a point", text:"If a point lies 5 units to the left of the origin and 2 units above the x-axis, its coordinates are (−5, 2)."},
        {type:"warning", title:"Common mistake", text:"Do not reverse the coordinates. (2, 5) and (5, 2) generally represent different points."}
      ]
    },

    {
      title: "3. Quadrants",
      blocks: [
        {type:"paragraph", title:"Four regions", text:"The two axes divide the plane into four regions called quadrants. The signs of x and y help us identify the quadrant."},
        {type:"table", title:"Signs in the four quadrants", rows:[
          ["Quadrant","Sign of x","Sign of y"],
          ["I","+","+"],
          ["II","−","+"],
          ["III","−","−"],
          ["IV","+","−"]
        ]},
        {type:"example", title:"Solved Example 3 — Identify the quadrant", text:"The point (−4, 3) has a negative x-coordinate and positive y-coordinate, so it lies in Quadrant II."},
        {type:"example", title:"Solved Example 4 — Another point", text:"The point (5, −2) has positive x and negative y, so it lies in Quadrant IV."},
        {type:"think", title:"Think & Understand", text:"A point on an axis is not inside any quadrant. For example, (0, 5) lies on the y-axis and (−3, 0) lies on the x-axis."}
      ]
    },

    {
      title: "4. Plotting Points from a Table",
      blocks: [
        {type:"paragraph", text:"A table can provide several ordered pairs. We can plot each pair on the coordinate plane and look for a pattern."},
        {type:"graph", title:"Table-to-graph visual", rows:[
          ["x","−2","−1","0","1","2"],
          ["y","4","2","0","2","4"]
        ], html:`
<svg viewBox="0 0 900 500" class="cqMathFigure" role="img" aria-label="Symmetric plotted points">
<rect width="900" height="500" rx="24" fill="#fbfcff"/>
<line x1="100" y1="250" x2="820" y2="250" stroke="#111827" stroke-width="4"/>
<line x1="450" y1="440" x2="450" y2="50" stroke="#111827" stroke-width="4"/>
<polyline points="250,154 350,202 450,250 550,202 650,154" fill="none" stroke="#4f46e5" stroke-width="6"/>
<g fill="#ef4444">${[[250,154],[350,202],[450,250],[550,202],[650,154]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="9"/>`).join("")}</g>
<text x="450" y="480" text-anchor="middle" font-size="23" font-weight="800">Plot the ordered pairs from the table and observe the pattern</text>
<text x="830" y="275" font-size="22" font-weight="700">x</text><text x="465" y="45" font-size="22" font-weight="700">y</text>
</svg>`},
        {type:"example", title:"Solved Example 5 — Plotting a table", text:"For x = −2, −1, 0, 1, 2 and y = 4, 2, 0, 2, 4, plot (−2,4), (−1,2), (0,0), (1,2) and (2,4). The points form a symmetric V-shaped pattern."},
        {type:"tip", title:"Plotting routine", text:"Read one row at a time, form the ordered pair, locate the x-coordinate first, then the y-coordinate, and finally mark the point."}
      ]
    },

    {
      title: "5. Bar Graphs",
      blocks: [
        {type:"definition", title:"Bar graph", text:"A bar graph represents data using rectangular bars. The height or length of each bar represents the corresponding value."},
        {type:"paragraph", text:"Bars normally have equal width and equal gaps between them. The scale on the numerical axis must be clear."},
        {type:"graph", title:"Bar graph — Books read", rows:[
          ["Student","A","B","C","D","E"],
          ["Books","4","7","5","9","6"]
        ], html:barGraph},
        {type:"example", title:"Solved Example 6 — Read a bar graph", text:"From the graph, Student D has read 9 books, which is the greatest value. Student A has read 4 books, the least among the five students."},
        {type:"example", title:"Solved Example 7 — Compare values", text:"Student D read 9 books and Student B read 7 books. Therefore D read 2 more books than B."},
        {type:"think", title:"What if the scale changes?", text:"A graph can use a scale such as 1 unit = 2 students or 1 unit = 5 items. Always read the scale before comparing bar heights."}
      ]
    },

    {
      title: "6. Double Bar Graphs",
      blocks: [
        {type:"paragraph", title:"Comparing two sets of data", text:"A double bar graph uses two bars for each category. It is useful when two related quantities need to be compared."},
        {type:"graph", title:"Double bar graph concept", html:`
<svg viewBox="0 0 900 520" class="cqMathFigure" role="img" aria-label="Double bar graph comparing boys and girls">
<rect width="900" height="520" rx="24" fill="#fbfcff"/>
<line x1="100" y1="430" x2="830" y2="430" stroke="#111827" stroke-width="4"/>
<line x1="100" y1="70" x2="100" y2="430" stroke="#111827" stroke-width="4"/>
${[0,5,10,15,20].map((v,i)=>`<text x="62" y="${435-i*72}" font-size="18">${v}</text><line x1="100" y1="${430-i*72}" x2="830" y2="${430-i*72}" stroke="#e5e7eb"/>`).join("")}
${[["Math",12,9],["Science",15,13],["English",10,14]].map((d,i)=>{const x=190+i*210;return `<rect x="${x}" y="${430-d[1]*18}" width="55" height="${d[1]*18}" fill="#4f46e5"/><rect x="${x+65}" y="${430-d[2]*18}" width="55" height="${d[2]*18}" fill="#16a34a"/><text x="${x+60}" y="465" text-anchor="middle" font-size="18" font-weight="700">${d[0]}</text>`}).join("")}
<text x="450" y="45" text-anchor="middle" font-size="24" font-weight="800">Marks comparison</text>
<text x="190" y="95" font-size="18" fill="#4f46e5">■ Boys</text><text x="300" y="95" font-size="18" fill="#16a34a">■ Girls</text>
</svg>`},
        {type:"example", title:"Solved Example 8", text:"In the displayed comparison, boys scored 12 and girls 9 in Mathematics. Therefore boys scored 3 marks more in Mathematics."}
      ]
    },

    {
      title: "7. Line Graphs",
      blocks: [
        {type:"definition", title:"Line graph", text:"A line graph represents values by plotting points and joining consecutive points with line segments. It is especially useful for quantities that change continuously or over time."},
        {type:"graph", title:"Line graph — Distance and time", rows:[
          ["Time (h)","0","1","2","3","4","5"],
          ["Distance (km)","0","10","20","30","40","50"]
        ], html:lineGraph},
        {type:"example", title:"Solved Example 9 — Reading a line graph", text:"At 3 hours, the graph shows a distance of 30 km. At 5 hours, it shows 50 km."},
        {type:"example", title:"Solved Example 10 — Find change", text:"From 2 hours to 5 hours, the distance changes from 20 km to 50 km. The increase is 30 km."},
        {type:"think", title:"Why join the points?", text:"Joining consecutive observations helps us see the trend between recorded values. The shape of the line can show increase, decrease or a constant value."}
      ]
    },

    {
      title: "8. Interpreting Trends",
      blocks: [
        {type:"paragraph", text:"Graph interpretation is not only about reading one point. We can examine the overall trend."},
        {type:"fact", title:"Increasing trend", text:"If the graph rises from left to right, the dependent quantity is generally increasing."},
        {type:"fact", title:"Decreasing trend", text:"If the graph falls from left to right, the dependent quantity is generally decreasing."},
        {type:"fact", title:"Constant value", text:"A horizontal section means the value of the dependent quantity remains unchanged over that interval."},
        {type:"example", title:"Solved Example 11", text:"If a temperature graph rises from 20°C to 30°C, the temperature has increased by 10°C. The vertical difference gives the change in temperature."}
      ]
    },

    {
      title: "9. Graphs of Simple Relationships",
      blocks: [
        {type:"paragraph", text:"A relationship between two variables can often be represented by a table and then by a graph. If the plotted points lie on one straight line, the relationship has a linear pattern."},
        {type:"graph", title:"Straight-line relationship", html:linearGraph},
        {type:"example", title:"Solved Example 12 — Reading a straight-line graph", text:"For the displayed graph y = x + 2, the point where x = 0 has y = 2. The graph crosses the y-axis at 2."},
        {type:"example", title:"Solved Example 13 — Table first", text:"For y = x + 2, choose values of x, calculate the corresponding y values, form ordered pairs and plot them. Joining the plotted points gives a straight line."},
        {type:"warning", title:"Important", text:"Do not join unrelated categories in a line graph merely because they can be plotted. The choice of graph must match the type of data."}
      ]
    },

    {
      title: "10. Solved Graph-Based Problems",
      blocks: [
        {type:"example", title:"Solved Example 14 — Find a missing value from a table", text:"Suppose a line graph represents time and distance. If the table gives 0 h → 0 km, 1 h → 10 km, 2 h → 20 km and 4 h → 40 km, the pattern indicates 3 h → 30 km."},
        {type:"example", title:"Solved Example 15 — Compare two categories", text:"If a bar graph gives Class A = 28 students and Class B = 35 students, then Class B has 7 more students."},
        {type:"example", title:"Solved Example 16 — Coordinates", text:"A point is 3 units right and 4 units down from the origin. Its coordinates are (3, −4), so it lies in Quadrant IV."},
        {type:"example", title:"Solved Example 17 — Axis point", text:"A point with coordinates (0, 6) lies on the y-axis because its x-coordinate is zero."}
      ]
    },

    {
      title: "11. Think & Understand",
      blocks: [
        {type:"paragraph", text:"Why must the x-coordinate be read before the y-coordinate? Because ordered pairs have a fixed order and each coordinate refers to a different axis."},
        {type:"paragraph", text:"What happens if the scale on a graph is not uniform? The visual comparison may become misleading, so equal intervals must represent equal numerical differences."},
        {type:"paragraph", text:"Why are tables useful before drawing graphs? A table organises the data and reduces plotting mistakes."},
        {type:"paragraph", text:"What if two points have the same x-coordinate? They lie on a vertical line parallel to the y-axis."},
        {type:"paragraph", text:"What if two points have the same y-coordinate? They lie on a horizontal line parallel to the x-axis."}
      ]
    },

    {
      title: "12. Common Mistakes",
      blocks: [
        {type:"warning", title:"Mistake 1 — Reversing coordinates", text:"(2, 5) is not the same location as (5, 2)."},
        {type:"warning", title:"Mistake 2 — Ignoring negative signs", text:"A negative coordinate changes the direction from the origin."},
        {type:"warning", title:"Mistake 3 — Wrong scale", text:"Always check what one division represents."},
        {type:"warning", title:"Mistake 4 — Missing labels", text:"A graph should clearly identify axes, units, categories and scale."},
        {type:"warning", title:"Mistake 5 — Plotting inaccurately", text:"Use the grid and axis markings carefully instead of estimating positions by eye."}
      ]
    },

    {
      title: "13. Exam Zone",
      blocks: [
        {type:"fact", title:"Must know", text:"Origin = (0,0). x-coordinate comes first. y-coordinate comes second. Points with x = 0 lie on the y-axis. Points with y = 0 lie on the x-axis."},
        {type:"fact", title:"Graph checklist", text:"Title → axes → labels → units → scale → accurate plotting → correct joining or bars → interpretation."},
        {type:"examTip", title:"Exam tip", text:"For graph questions, show the table when useful, mark points clearly, use a ruler for line segments, and write the scale explicitly."}
      ]
    },

    {
      title: "14. Practice Questions",
      blocks: [
        {type:"paragraph", title:"Basic", text:"1. What are the coordinates of the origin? 2. Name the horizontal axis. 3. In which quadrant is (−3, 5)? 4. In which quadrant is (4, −2)?"},
        {type:"paragraph", title:"Standard", text:"5. Plot (2,3), (−2,3), (−2,−3) and (2,−3). What shape do the four points suggest? 6. Make a table for y = x + 1 for five integer values of x and plot the points."},
        {type:"paragraph", title:"Graph application", text:"7. A bar graph shows 18, 24, 15 and 30 students in four houses. Which house has the maximum number and what is the difference between maximum and minimum?"},
        {type:"paragraph", title:"Line graph", text:"8. A cyclist travels 0, 8, 16, 24 and 32 km in 0, 1, 2, 3 and 4 hours. Draw a line graph and answer: how far has the cyclist travelled after 3 hours?"},
        {type:"paragraph", title:"HOTS", text:"9. A point moves from (−2, 3) to (4, 3). What remains unchanged and what changes? 10. Explain why points with the same y-coordinate form a horizontal line."}
      ]
    },

    {
      title: "15. Challenge Zone",
      blocks: [
        {type:"example", title:"Challenge 1", text:"Draw a coordinate plane and plot the four points (−4,2), (4,2), (4,−2) and (−4,−2). Join them in order. Name the shape and explain how the coordinates reveal its symmetry."},
        {type:"example", title:"Challenge 2", text:"Create a line graph from a realistic situation such as distance travelled during a journey. Include at least six observations, a suitable scale and three questions based on your graph."},
        {type:"example", title:"Challenge 3", text:"A graph has equal vertical intervals but unequal numerical labels. Identify why this can cause incorrect interpretation and redraw it with a consistent scale."}
      ]
    },

    {
      title: "16. Chapter Revision",
      blocks: [
        {type:"fact", title:"Quick revision", text:"Graphs display information visually. The Cartesian plane uses perpendicular x- and y-axes. Coordinates are written as (x,y). Tables help organise points. Bar graphs compare categories. Line graphs show change or trends over an ordered variable."},
        {type:"fact", title:"Quadrant signs", text:"I: (+,+), II: (−,+), III: (−,−), IV: (+,−)."},
        {type:"fact", title:"Axis rules", text:"x = 0 → y-axis. y = 0 → x-axis."}
      ]
    },

    {
      title: "17. Important Points",
      blocks: [
        {type:"paragraph", text:"Always read the scale before interpreting a graph. Always write the ordered pair in the correct order. A good graph must be accurate, labelled and easy to read. Graphs are tools for both calculation and visual reasoning."}
      ]
    },

    {
      title: "18. Key Terms",
      blocks: [
        {type:"definition", title:"Graph", text:"A visual representation of information or a relationship."},
        {type:"definition", title:"Coordinate", text:"A number used to specify the position of a point."},
        {type:"definition", title:"Ordered pair", text:"A pair (x,y) used to locate a point."},
        {type:"definition", title:"Origin", text:"The point (0,0) where the axes intersect."},
        {type:"definition", title:"x-axis", text:"The horizontal axis of the Cartesian plane."},
        {type:"definition", title:"y-axis", text:"The vertical axis of the Cartesian plane."},
        {type:"definition", title:"Bar graph", text:"A graph using rectangular bars to compare data."},
        {type:"definition", title:"Line graph", text:"A graph in which plotted points are joined to show change or a relationship."},
        {type:"definition", title:"Scale", text:"The numerical interval represented by each division on a graph."}
      ]
    },

    {
      title: "19. Chapter Summary",
      blocks: [
        {type:"summary", text:"Introduction to Graphs teaches us how to turn numerical information into clear visual representations. We learned the Cartesian plane, x-axis, y-axis, origin, ordered pairs and quadrants. We practised plotting points from tables, reading coordinate positions, constructing and interpreting bar graphs, double bar graphs and line graphs, and studying simple relationships between variables. The most important habit is to read the scale and labels carefully before interpreting any graph."}
      ]
    }
  ],

  importantPoints: [
    "The horizontal axis is the x-axis and the vertical axis is the y-axis.",
    "The origin is (0,0).",
    "Coordinates are written as an ordered pair (x,y).",
    "The x-coordinate is read first and the y-coordinate second.",
    "x = 0 places a point on the y-axis.",
    "y = 0 places a point on the x-axis.",
    "Quadrant I has (+,+), II has (−,+), III has (−,−), and IV has (+,−).",
    "A bar graph is useful for comparing categories.",
    "A line graph is useful for showing change and trends.",
    "A graph must have a clear scale, labels and accurate plotting."
  ],

  keyTerms: [
    "Graph",
    "Coordinate",
    "Ordered Pair",
    "Cartesian Plane",
    "Origin",
    "x-axis",
    "y-axis",
    "Quadrant",
    "Scale",
    "Bar Graph",
    "Double Bar Graph",
    "Line Graph"
  ]
};
