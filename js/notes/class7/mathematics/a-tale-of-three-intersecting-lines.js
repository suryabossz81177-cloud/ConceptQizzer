window.ChapterData = {
  id: "7-mathematics-a-tale-of-three-intersecting-lines",
  class: 7,
  subject: "Mathematics",
  chapterNumber: 7,

  title: "A Tale of Three Intersecting Lines",

  description:
    "Explore triangles through intersecting lines, constructions, angles, side relationships and step-by-step mathematical reasoning.",

  sections: [

  {
  title: "Triangles and Equilateral Triangles",

  blocks: [

    {
      type: "concept",
      title: "A Triangle — The Shape Made by Three Lines",
      text: "A triangle is the simplest closed shape made from three straight line segments. It has three corner points, three sides and three angles. The three sides join the three vertices to form a closed figure."
    },

    {
      type: "diagram",
      title: "Parts of a Triangle",
      content: `
        <svg viewBox="0 0 520 360"
             width="100%"
             style="max-width:520px;height:auto;">

          <!-- Triangle -->
          <polygon
            points="260,45 90,300 430,300"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
          />

          <!-- Vertices -->
          <circle cx="260" cy="45" r="7" fill="currentColor"/>
          <circle cx="90" cy="300" r="7" fill="currentColor"/>
          <circle cx="430" cy="300" r="7" fill="currentColor"/>

          <!-- Labels -->
          <text x="250" y="28"
                font-size="24"
                font-weight="700">A</text>

          <text x="65" y="325"
                font-size="24"
                font-weight="700">B</text>

          <text x="435" y="325"
                font-size="24"
                font-weight="700">C</text>

          <!-- Side labels -->
          <text x="155" y="180"
                font-size="20">AB</text>

          <text x="335" y="180"
                font-size="20">AC</text>

          <text x="245" y="325"
                font-size="20">BC</text>

          <!-- Angle labels -->
          <text x="250" y="75"
                font-size="18">∠A</text>

          <text x="115" y="275"
                font-size="18">∠B</text>

          <text x="385" y="275"
                font-size="18">∠C</text>

        </svg>
      `,
      caption: "Triangle ABC has three vertices A, B and C, three sides AB, BC and CA, and three angles."
    },

    {
      type: "concept",
      title: "Vertices, Sides and Angles",
      text: "The corner points of a triangle are called vertices. A triangle has exactly three vertices. The line segments joining pairs of vertices are its three sides. The three sides meeting at the vertices form the three interior angles."
    },

    {
      type: "table",
      title: "Parts of Triangle ABC",
      rows: [
        ["Part", "Names"],
        ["Vertices", "A, B, C"],
        ["Sides", "AB, BC, CA"],
        ["Angles", "∠A, ∠B, ∠C"]
      ]
    },

    {
      type: "concept",
      title: "Naming a Triangle",
      text: "A triangle is usually named using the letters of its three vertices. For example, a triangle with vertices A, B and C can be called △ABC. The vertices can be written in different orders, provided all three vertices are used."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Naming the Triangle",
      question: "A triangle has vertices P, Q and R. Write two different names for the same triangle.",

      steps: [
        "The three vertices are P, Q and R.",
        "Use all three vertex letters to name the triangle.",
        "One name is △PQR.",
        "Another valid name is △QRP.",
        "Both names refer to the same three vertices and therefore the same triangle."
      ],

      answer: "△PQR and △QRP"
    },

    {
      type: "concept",
      title: "Angles of a Triangle",
      text: "At each vertex, the two sides meeting there form an angle. In triangle ABC, the three angles can be written as ∠A, ∠B and ∠C. They may also be written more fully as ∠CAB, ∠ABC and ∠BCA."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Identifying an Angle",
      question: "In △ABC, which two sides form ∠B?",

      steps: [
        "Look at the vertex of the angle.",
        "The angle is ∠B, so its vertex is B.",
        "The two sides meeting at B are BA and BC.",
        "Therefore, ∠B is formed by BA and BC."
      ],

      answer: "BA and BC"
    },

    {
      type: "concept",
      title: "When Three Points Lie on a Straight Line",
      text: "Three points do not form a proper triangle if all three points lie on the same straight line. A triangle needs three non-collinear vertices so that its three sides enclose a region."
    },

    {
      type: "diagram",
      title: "Triangle vs Three Collinear Points",
      content: `
        <svg viewBox="0 0 620 300"
             width="100%"
             style="max-width:620px;height:auto;">

          <!-- Triangle -->
          <text x="105" y="35"
                font-size="21"
                font-weight="700">Triangle</text>

          <polygon
            points="160,65 75,220 245,220"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
          />

          <circle cx="160" cy="65" r="6" fill="currentColor"/>
          <circle cx="75" cy="220" r="6" fill="currentColor"/>
          <circle cx="245" cy="220" r="6" fill="currentColor"/>

          <!-- Collinear points -->
          <text x="380" y="35"
                font-size="21"
                font-weight="700">Collinear points</text>

          <line x1="330" y1="175"
                x2="560"
                y2="175"
                stroke="currentColor"
                stroke-width="5"/>

          <circle cx="350" cy="175" r="6" fill="currentColor"/>
          <circle cx="445" cy="175" r="6" fill="currentColor"/>
          <circle cx="540" cy="175" r="6" fill="currentColor"/>

          <text x="340" y="210"
                font-size="19">A</text>

          <text x="435" y="210"
                font-size="19">B</text>

          <text x="530" y="210"
                font-size="19">C</text>

        </svg>
      `,
      caption: "Three collinear points lie on one straight line and cannot enclose a triangular region."
    },

    {
      type: "concept",
      title: "7.1 Equilateral Triangles",
      text: "An equilateral triangle is a triangle in which all three sides have equal length. It is highly symmetric because each side has the same length."
    },

    {
      type: "diagram",
      title: "An Equilateral Triangle",
      content: `
        <svg viewBox="0 0 420 340"
             width="100%"
             style="max-width:420px;height:auto;">

          <polygon
            points="210,40 70,285 350,285"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
          />

          <circle cx="210" cy="40" r="6" fill="currentColor"/>
          <circle cx="70" cy="285" r="6" fill="currentColor"/>
          <circle cx="350" cy="285" r="6" fill="currentColor"/>

          <text x="202" y="28"
                font-size="23"
                font-weight="700">A</text>

          <text x="45" y="310"
                font-size="23"
                font-weight="700">B</text>

          <text x="355" y="310"
                font-size="23"
                font-weight="700">C</text>

          <text x="112" y="155"
                font-size="20">4 cm</text>

          <text x="280" y="155"
                font-size="20">4 cm</text>

          <text x="190" y="310"
                font-size="20">4 cm</text>

        </svg>
      `,
      caption: "Example: if AB = BC = CA = 4 cm, △ABC is equilateral."
    },

    {
      type: "table",
      title: "Equilateral Triangle",
      rows: [
        ["Property", "Equilateral Triangle"],
        ["Number of sides", "3"],
        ["Equal sides", "All three"],
        ["Vertices", "3"],
        ["Angles", "All equal"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Is It Equilateral?",
      question: "A triangle has side lengths 5 cm, 5 cm and 5 cm. What type of triangle is it based on its sides?",

      steps: [
        "Compare the three side lengths.",
        "The first side is 5 cm.",
        "The second side is 5 cm.",
        "The third side is also 5 cm.",
        "All three sides are equal.",
        "A triangle with all three sides equal is equilateral."
      ],

      answer: "It is an equilateral triangle."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Checking Side Equality",
      question: "Can a triangle with side lengths 4 cm, 4 cm and 5 cm be called equilateral?",

      steps: [
        "An equilateral triangle must have all three sides equal.",
        "Here two sides are 4 cm.",
        "The third side is 5 cm.",
        "Since all three sides are not equal, the triangle is not equilateral."
      ],

      answer: "No. It is not equilateral."
    },

    {
      type: "concept",
      title: "Constructing an Equilateral Triangle",
      text: "An equilateral triangle can be constructed using a ruler and compass. To construct a triangle whose three sides are 4 cm, first draw a line segment AB of length 4 cm. Then use a compass with radius 4 cm to draw an arc from A and another arc from B. Their intersection gives the third vertex C."
    },

    {
      type: "diagram",
      title: "Compass Construction Idea",
      content: `
        <svg viewBox="0 0 620 350"
             width="100%"
             style="max-width:620px;height:auto;">

          <!-- Base -->
          <line x1="120" y1="275"
                x2="500" y2="275"
                stroke="currentColor"
                stroke-width="5"/>

          <!-- Arcs -->
          <path
            d="M 120 275 A 190 190 0 0 1 310 85"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-dasharray="8 7"/>

          <path
            d="M 500 275 A 190 190 0 0 0 310 85"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-dasharray="8 7"/>

          <!-- Triangle -->
          <line x1="120" y1="275"
                x2="310" y2="85"
                stroke="currentColor"
                stroke-width="5"/>

          <line x1="310" y1="85"
                x2="500" y2="275"
                stroke="currentColor"
                stroke-width="5"/>

          <circle cx="120" cy="275" r="7" fill="currentColor"/>
          <circle cx="310" cy="85" r="7" fill="currentColor"/>
          <circle cx="500" cy="275" r="7" fill="currentColor"/>

          <text x="105" y="305"
                font-size="22"
                font-weight="700">A</text>

          <text x="300" y="65"
                font-size="22"
                font-weight="700">C</text>

          <text x="505" y="305"
                font-size="22"
                font-weight="700">B</text>

          <text x="285" y="315"
                font-size="20">4 cm</text>

          <text x="165" y="175"
                font-size="18">4 cm</text>

          <text x="405" y="175"
                font-size="18">4 cm</text>

        </svg>
      `,
      caption: "The two equal-radius arcs meet at C, giving AC = BC = AB."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Construct an Equilateral Triangle",
      question: "Construct △ABC with AB = BC = CA = 4 cm.",

      steps: [
        "Step 1: Draw the line segment AB = 4 cm using a ruler.",
        "Step 2: Set the compass opening to 4 cm.",
        "Step 3: With A as centre, draw an arc above AB.",
        "Step 4: Without changing the compass opening, use B as centre and draw another arc crossing the first arc.",
        "Step 5: Mark their intersection as C.",
        "Step 6: Join A to C and B to C.",
        "Now AB = AC = BC = 4 cm, so △ABC is equilateral."
      ],

      answer: "△ABC is the required equilateral triangle with each side 4 cm."
    },

    {
      type: "concept",
      title: "Why the Compass Opening Must Not Change",
      text: "The compass opening represents the required side length. If it is kept at 4 cm while drawing both arcs, then AC and BC are each 4 cm. Since AB was also drawn as 4 cm, all three sides become equal."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Construction Check",
      question: "During the construction of an equilateral triangle with side 6 cm, the compass is kept at 6 cm. What are the lengths of AC and BC?",

      steps: [
        "The compass radius is 6 cm.",
        "The arc centred at A gives AC = 6 cm.",
        "The arc centred at B gives BC = 6 cm.",
        "The base was already constructed as AB = 6 cm.",
        "Therefore all three sides are equal."
      ],

      answer: "AC = 6 cm and BC = 6 cm."
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. How many vertices does a triangle have?",
        "2. Name the three sides of △ABC.",
        "3. What is an equilateral triangle?",
        "4. Is a triangle with sides 7 cm, 7 cm and 7 cm equilateral?",
        "5. Is a triangle with sides 5 cm, 5 cm and 6 cm equilateral?",
        "6. Why must the compass opening remain unchanged while constructing an equilateral triangle?",
        "7. Construct an equilateral triangle of side 5 cm using ruler and compass.",
        "8. Can three collinear points form a proper triangle? Explain.",
        "9. In △PQR, which sides form ∠Q?",
        "10. If AB = BC = CA = 8 cm, identify the triangle."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For construction questions, write the steps in the correct order and keep the compass opening fixed whenever equal lengths are required. For identification questions, compare all three side lengths carefully."
    }

  ]
},

 {
  title: "Constructing a Triangle When Its Sides Are Given",

  blocks: [

    {
      type: "concept",
      title: "When Three Side Lengths Are Given",
      text: "Sometimes we know the lengths of all three sides of a triangle but do not know the positions of its vertices. We can construct the triangle using a ruler and compass. The key idea is to use arcs to locate the third vertex at the required distances from the two endpoints of the base."
    },

    {
      type: "concept",
      title: "The Basic Construction Idea",
      text: "Suppose the three required side lengths are 4 cm, 5 cm and 6 cm. We can choose one length as the base. Let AB = 4 cm, AC = 5 cm and BC = 6 cm. After drawing AB, the point C must be 5 cm from A and 6 cm from B."
    },

    {
      type: "diagram",
      title: "Step 1 — Draw the Base",
      content: `
        <svg viewBox="0 0 620 280"
             width="100%"
             style="max-width:620px;height:auto;">

          <line x1="110" y1="180"
                x2="510" y2="180"
                stroke="currentColor"
                stroke-width="6"/>

          <circle cx="110" cy="180"
                  r="7"
                  fill="currentColor"/>

          <circle cx="510" cy="180"
                  r="7"
                  fill="currentColor"/>

          <text x="92" y="220"
                font-size="24"
                font-weight="700">A</text>

          <text x="505" y="220"
                font-size="24"
                font-weight="700">B</text>

          <text x="275" y="155"
                font-size="23"
                font-weight="700">4 cm</text>

          <text x="185" y="75"
                font-size="20">Base AB</text>

        </svg>
      `,
      caption: "First construct the base AB = 4 cm."
    },

    {
      type: "concept",
      title: "Why Do We Draw an Arc From A?",
      text: "The third vertex C must be exactly 5 cm away from A. Therefore, C must lie somewhere on the circle centred at A with radius 5 cm. We do not need to draw the complete circle; a sufficiently long arc is enough."
    },

    {
      type: "diagram",
      title: "Step 2 — Arc of Radius 5 cm From A",
      content: `
        <svg viewBox="0 0 620 350"
             width="100%"
             style="max-width:620px;height:auto;">

          <line x1="100" y1="270"
                x2="500" y2="270"
                stroke="currentColor"
                stroke-width="5"/>

          <circle cx="100" cy="270"
                  r="7"
                  fill="currentColor"/>

          <circle cx="500" cy="270"
                  r="7"
                  fill="currentColor"/>

          <path
            d="M 100 270
               A 220 220 0 0 1 390 75"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-dasharray="10 7"/>

          <text x="82" y="310"
                font-size="23"
                font-weight="700">A</text>

          <text x="495" y="310"
                font-size="23"
                font-weight="700">B</text>

          <text x="315" y="105"
                font-size="21">5 cm</text>

          <text x="210" y="45"
                font-size="20"
                font-weight="700">
            Possible positions of C
          </text>

        </svg>
      `,
      caption: "Every point on this arc is 5 cm from A."
    },

    {
      type: "concept",
      title: "Why Do We Draw an Arc From B?",
      text: "We also need BC = 6 cm. Therefore, C must be 6 cm away from B. We draw another arc with B as centre and radius 6 cm. The intersection of the two arcs gives the required position of C."
    },

    {
      type: "diagram",
      title: "Step 3 — Two Arcs Meet at C",
      content: `
        <svg viewBox="0 0 620 390"
             width="100%"
             style="max-width:620px;height:auto;">

          <!-- Base -->
          <line x1="100" y1="300"
                x2="500" y2="300"
                stroke="currentColor"
                stroke-width="5"/>

          <!-- Triangle -->
          <line x1="100" y1="300"
                x2="300" y2="85"
                stroke="currentColor"
                stroke-width="5"/>

          <line x1="500" y1="300"
                x2="300" y2="85"
                stroke="currentColor"
                stroke-width="5"/>

          <!-- Arcs -->
          <path
            d="M 100 300
               A 255 255 0 0 1 300 85"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-dasharray="9 7"/>

          <path
            d="M 500 300
               A 285 285 0 0 0 300 85"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-dasharray="9 7"/>

          <circle cx="100" cy="300"
                  r="7"
                  fill="currentColor"/>

          <circle cx="300" cy="85"
                  r="8"
                  fill="currentColor"/>

          <circle cx="500" cy="300"
                  r="7"
                  fill="currentColor"/>

          <text x="80" y="335"
                font-size="23"
                font-weight="700">A</text>

          <text x="292" y="62"
                font-size="23"
                font-weight="700">C</text>

          <text x="505" y="335"
                font-size="23"
                font-weight="700">B</text>

          <text x="160" y="190"
                font-size="19">5 cm</text>

          <text x="390" y="190"
                font-size="19">6 cm</text>

          <text x="275" y="335"
                font-size="19">4 cm</text>

        </svg>
      `,
      caption: "The intersection C satisfies AC = 5 cm and BC = 6 cm."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Construct 4 cm, 5 cm, 6 cm Triangle",
      question: "Construct a triangle whose three sides are 4 cm, 5 cm and 6 cm.",

      steps: [
        "Choose 4 cm as the base.",
        "Draw AB = 4 cm using a ruler.",
        "With A as centre, set the compass to 5 cm and draw a sufficiently long arc.",
        "With B as centre, set the compass to 6 cm and draw another arc that intersects the first arc.",
        "Mark the point of intersection as C.",
        "Join AC and BC.",
        "Now AB = 4 cm, AC = 5 cm and BC = 6 cm."
      ],

      answer: "The required triangle is △ABC with AB = 4 cm, AC = 5 cm and BC = 6 cm."
    },

    {
      type: "concept",
      title: "Why Does the Construction Work?",
      text: "The point C lies on the arc centred at A with radius 5 cm. Therefore AC = 5 cm. It also lies on the arc centred at B with radius 6 cm. Therefore BC = 6 cm. Since AB was already constructed as 4 cm, all three required side lengths are obtained."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Understanding the Arcs",
      question: "In the construction of a triangle with AB = 4 cm, AC = 5 cm and BC = 6 cm, why is C chosen at the intersection of the two arcs?",

      steps: [
        "The first arc is centred at A with radius 5 cm.",
        "Every point on this arc is exactly 5 cm from A.",
        "The second arc is centred at B with radius 6 cm.",
        "Every point on this arc is exactly 6 cm from B.",
        "The intersection point C belongs to both arcs.",
        "Therefore C is simultaneously 5 cm from A and 6 cm from B.",
        "Hence AC = 5 cm and BC = 6 cm."
      ],

      answer: "Because C must satisfy both distance conditions at the same time."
    },

    {
      type: "concept",
      title: "The Compass Is Measuring Distance",
      text: "A compass is useful in construction because its opening can be transferred without changing the distance. If the compass is opened to 5 cm, every point marked using that opening is 5 cm from the chosen centre."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Choosing the Base",
      question: "For side lengths 3 cm, 4 cm and 5 cm, can we choose any one of the three lengths as the base?",

      steps: [
        "Any one of the given side lengths may be chosen as the base, provided the other two lengths are used as the required distances from the two endpoints.",
        "For example, choose AB = 3 cm.",
        "Then use an arc of radius 4 cm from A.",
        "Use an arc of radius 5 cm from B.",
        "Their intersection gives the third vertex."
      ],

      answer: "Yes. Any of the given side lengths can be chosen as the base."
    },

    {
      type: "concept",
      title: "Constructing a 3 cm, 4 cm, 5 cm Triangle",
      text: "For a triangle with side lengths 3 cm, 4 cm and 5 cm, choose one side as the base. For example, construct AB = 3 cm, draw an arc of radius 4 cm from A and an arc of radius 5 cm from B. Their intersection gives the third vertex."
    },

    {
      type: "diagram",
      title: "3–4–5 Triangle Construction",
      content: `
        <svg viewBox="0 0 600 360"
             width="100%"
             style="max-width:600px;height:auto;">

          <polygon
            points="110,285 470,285 350,80"
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>

          <circle cx="110" cy="285"
                  r="7"
                  fill="currentColor"/>

          <circle cx="350" cy="80"
                  r="7"
                  fill="currentColor"/>

          <circle cx="470" cy="285"
                  r="7"
                  fill="currentColor"/>

          <text x="90" y="320"
                font-size="23"
                font-weight="700">A</text>

          <text x="345" y="55"
                font-size="23"
                font-weight="700">C</text>

          <text x="475" y="320"
                font-size="23"
                font-weight="700">B</text>

          <text x="270" y="315"
                font-size="20">3 cm</text>

          <text x="190" y="180"
                font-size="20">4 cm</text>

          <text x="405" y="180"
                font-size="20">5 cm</text>

        </svg>
      `,
      caption: "One possible arrangement of a triangle with side lengths 3 cm, 4 cm and 5 cm."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Construction Steps",
      question: "Construct a triangle with side lengths 3 cm, 4 cm and 5 cm.",

      steps: [
        "Draw AB = 3 cm.",
        "With A as centre, draw an arc of radius 4 cm.",
        "With B as centre, draw an arc of radius 5 cm.",
        "Let the arcs meet at C.",
        "Join AC and BC.",
        "Then AB = 3 cm, AC = 4 cm and BC = 5 cm."
      ],

      answer: "△ABC with sides 3 cm, 4 cm and 5 cm."
    },

    {
      type: "concept",
      title: "What If the Arcs Do Not Meet?",
      text: "The construction depends on the two arcs intersecting. If the chosen three lengths cannot form a triangle, the arcs will not meet in the required way. This leads to an important question: can a triangle be made from any three lengths? We will investigate this in the next section."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Construction Check",
      question: "You construct AB = 4 cm. An arc of radius 2 cm is drawn from A and an arc of radius 3 cm from B. What should you check if the arcs do not meet?",

      steps: [
        "First check that the base length and the two compass openings were set correctly.",
        "Check that AB was constructed accurately.",
        "Check that the compass openings are exactly the required side lengths.",
        "If the measurements are correct and the arcs still do not intersect, the three given lengths may not be capable of forming a triangle."
      ],

      answer: "Check the construction measurements first; if they are correct, the side lengths may not form a triangle."
    },

    {
      type: "table",
      title: "Construction Plan",
      rows: [
        ["Given", "Construction"],
        ["Base length", "Draw the base segment"],
        ["Second side", "Arc from first endpoint"],
        ["Third side", "Arc from second endpoint"],
        ["Third vertex", "Intersection of the two arcs"],
        ["Final step", "Join the third vertex to both endpoints"]
      ]
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Construct a triangle with side lengths 4 cm, 5 cm and 6 cm.",
        "2. Construct a triangle with side lengths 3 cm, 4 cm and 5 cm.",
        "3. Why is a compass useful when constructing a triangle from given side lengths?",
        "4. If AB = 5 cm, which compass radius should be used to construct a point C such that AC = 4 cm?",
        "5. In a construction, an arc centred at A has radius 7 cm. What does every point on this arc have in common?",
        "6. Why is the intersection of two arcs used to locate the third vertex?",
        "7. Can any one of the three given side lengths be chosen as the base?",
        "8. What happens if the two required arcs do not intersect?"
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "In a construction question, clearly state the base first, then the centre and radius of each arc, then identify the intersection point as the third vertex. Finally join the two sides and check all three lengths."
    }

  ]
},

{
  title: "Can Three Given Lengths Form a Triangle?",

  blocks: [

    {
      type: "concept",
      title: "Is Every Set of Three Lengths Possible?",
      text: "Three positive lengths do not always make a triangle. For three line segments to form a closed triangle, the sum of the lengths of any two sides must be greater than the length of the third side."
    },

    {
      type: "formula",
      title: "Triangle Inequality",
      text: `
        a + b > c<br>
        b + c > a<br>
        c + a > b
      `
    },

    {
      type: "concept",
      title: "The Main Idea",
      text: "Think of two sides trying to reach each other around the third side. If the two shorter sides together are not long enough to connect the endpoints of the longest side, a closed triangle cannot be formed."
    },

    {
      type: "diagram",
      title: "Possible Triangle",
      content: `
        <svg viewBox="0 0 600 360"
             width="100%"
             style="max-width:600px;height:auto;">

          <polygon
            points="100,285 500,285 315,75"
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>

          <circle cx="100" cy="285" r="7" fill="currentColor"/>
          <circle cx="315" cy="75" r="7" fill="currentColor"/>
          <circle cx="500" cy="285" r="7" fill="currentColor"/>

          <text x="82" y="320"
                font-size="23"
                font-weight="700">A</text>

          <text x="308" y="52"
                font-size="23"
                font-weight="700">C</text>

          <text x="505" y="320"
                font-size="23"
                font-weight="700">B</text>

          <text x="275" y="315"
                font-size="20">6 cm</text>

          <text x="175" y="170"
                font-size="20">5 cm</text>

          <text x="400" y="170"
                font-size="20">7 cm</text>

        </svg>
      `,
      caption: "For sides 5 cm, 6 cm and 7 cm, the three lengths can form a closed triangle."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — 5 cm, 6 cm and 7 cm",
      question: "Can line segments of lengths 5 cm, 6 cm and 7 cm form a triangle?",

      steps: [
        "Check the sum of the two smaller sides: 5 + 6 = 11.",
        "Compare 11 with the largest side: 11 > 7.",
        "Check another pair: 5 + 7 = 12 > 6.",
        "Check the final pair: 6 + 7 = 13 > 5.",
        "All three triangle inequalities are satisfied.",
        "Therefore, the three lengths can form a triangle."
      ],

      answer: "Yes, a triangle can be formed."
    },

    {
      type: "concept",
      title: "Checking Only the Largest Side",
      text: "When all three lengths are positive and one side is the largest, it is enough to check whether the sum of the other two sides is greater than the largest side. If that condition is satisfied, the other two inequalities automatically hold."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — A Quick Check",
      question: "Can 8 cm, 10 cm and 13 cm form a triangle?",

      steps: [
        "The largest side is 13 cm.",
        "Add the other two sides: 8 + 10 = 18 cm.",
        "Since 18 > 13, the two shorter sides are long enough to reach around the longest side.",
        "Therefore, a triangle can be formed."
      ],

      answer: "Yes."
    },

    {
      type: "concept",
      title: "When the Sum Equals the Largest Side",
      text: "If the sum of the two smaller lengths is exactly equal to the largest length, the three segments cannot make a proper triangle. They would lie along a straight line instead of enclosing a region."
    },

    {
      type: "diagram",
      title: "When the Triangle Collapses",
      content: `
        <svg viewBox="0 0 620 280"
             width="100%"
             style="max-width:620px;height:auto;">

          <line x1="90" y1="150"
                x2="530" y2="150"
                stroke="currentColor"
                stroke-width="6"/>

          <circle cx="90" cy="150" r="7" fill="currentColor"/>
          <circle cx="300" cy="150" r="7" fill="currentColor"/>
          <circle cx="530" cy="150" r="7" fill="currentColor"/>

          <text x="70" y="190"
                font-size="22"
                font-weight="700">A</text>

          <text x="292" y="190"
                font-size="22"
                font-weight="700">C</text>

          <text x="535" y="190"
                font-size="22"
                font-weight="700">B</text>

          <text x="155" y="125"
                font-size="19">4 cm</text>

          <text x="395" y="125"
                font-size="19">6 cm</text>

          <text x="250" y="90"
                font-size="20"
                font-weight="700">
            4 + 6 = 10
          </text>

          <text x="215" y="235"
                font-size="19">
            No closed triangle
          </text>

        </svg>
      `,
      caption: "If two sides add exactly to the third, the figure becomes a straight line."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Equal to the Largest Side",
      question: "Can lengths 4 cm, 6 cm and 10 cm form a triangle?",

      steps: [
        "The largest length is 10 cm.",
        "Add the other two lengths: 4 + 6 = 10 cm.",
        "The sum is equal to the largest side, not greater than it.",
        "Therefore, the three segments cannot enclose a triangular region."
      ],

      answer: "No, they cannot form a proper triangle."
    },

    {
      type: "concept",
      title: "When the Two Smaller Sides Are Too Short",
      text: "If the sum of the two smaller sides is less than the largest side, the two shorter sides cannot reach each other to close the figure. Therefore, no triangle is possible."
    },

    {
      type: "diagram",
      title: "Triangle Is Impossible",
      content: `
        <svg viewBox="0 0 620 320"
             width="100%"
             style="max-width:620px;height:auto;">

          <line x1="80" y1="250"
                x2="540" y2="250"
                stroke="currentColor"
                stroke-width="6"/>

          <path
            d="M 80 250 A 120 120 0 0 1 190 165"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-dasharray="8 7"/>

          <path
            d="M 540 250 A 95 95 0 0 0 455 185"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-dasharray="8 7"/>

          <circle cx="80" cy="250" r="7" fill="currentColor"/>
          <circle cx="540" cy="250" r="7" fill="currentColor"/>

          <text x="62" y="285"
                font-size="22"
                font-weight="700">A</text>

          <text x="540" y="285"
                font-size="22"
                font-weight="700">B</text>

          <text x="220" y="65"
                font-size="20"
                font-weight="700">
            Arcs do not meet
          </text>

          <text x="215" y="115"
                font-size="19">
            3 + 4 &lt; 9
          </text>

          <text x="210" y="305"
                font-size="19">
            Triangle cannot be formed
          </text>

        </svg>
      `,
      caption: "If the two shorter sides together are shorter than the longest side, the arcs do not meet."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Impossible Triangle",
      question: "Can 3 cm, 4 cm and 9 cm form a triangle?",

      steps: [
        "The largest side is 9 cm.",
        "Add the other two sides: 3 + 4 = 7 cm.",
        "Since 7 < 9, the two shorter sides are not long enough.",
        "Therefore, the required arcs cannot meet to form the third vertex."
      ],

      answer: "No, a triangle cannot be formed."
    },

    {
      type: "table",
      title: "Triangle Possibility Test",
      rows: [
        ["Side Lengths", "Check", "Triangle?"],
        ["5, 6, 7", "5 + 6 > 7", "Yes"],
        ["8, 10, 13", "8 + 10 > 13", "Yes"],
        ["4, 6, 10", "4 + 6 = 10", "No"],
        ["3, 4, 9", "3 + 4 < 9", "No"]
      ]
    },

    {
      type: "concept",
      title: "The Shortest and Longest Sides",
      text: "In a triangle, the sum of any two sides must be greater than the third side. In particular, the two shortest sides together must be longer than the longest side. This is the quickest way to test whether three given lengths can form a triangle."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Quick Triangle Test",
      question: "Which of the following sets can form a triangle: (2, 5, 6), (3, 4, 8), or (6, 7, 12)?",

      steps: [
        "Set 1: 2 + 5 = 7 > 6, so it can form a triangle.",
        "Set 2: 3 + 4 = 7 < 8, so it cannot form a triangle.",
        "Set 3: 6 + 7 = 13 > 12, so it can form a triangle."
      ],

      answer: "(2, 5, 6) and (6, 7, 12) can form triangles."
    },

    {
      type: "concept",
      title: "A Useful Reasoning Pattern",
      text: "Whenever a triangle has three given side lengths, first identify the largest side. Then add the other two. If their sum is greater than the largest side, a triangle is possible. If their sum equals or falls below the largest side, a proper triangle is impossible."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Find a Missing Side Range",
      question: "Two sides of a triangle are 5 cm and 8 cm. What values can the third side x have if x is a whole number?",

      steps: [
        "The third side must satisfy 5 + 8 > x.",
        "Therefore, x < 13.",
        "It must also satisfy 5 + x > 8.",
        "Therefore, x > 3.",
        "So 3 < x < 13.",
        "For whole-number values, x can be 4, 5, 6, 7, 8, 9, 10, 11 or 12."
      ],

      answer: "x can be any whole number from 4 to 12."
    },

    {
      type: "concept",
      title: "Important Boundary Idea",
      text: "The inequalities must be strict. The sum of two sides must be greater than the third side, not merely equal to it. Equality gives a straight-line arrangement rather than a proper triangle."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Boundary Case",
      question: "Two sides of a triangle are 7 cm and 5 cm. Can the third side be 12 cm?",

      steps: [
        "Check the two smaller sides: 7 + 5 = 12.",
        "The sum is exactly equal to the proposed third side.",
        "A proper triangle requires the sum to be greater.",
        "Therefore, a side of 12 cm is not possible."
      ],

      answer: "No."
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Can 5 cm, 7 cm and 9 cm form a triangle?",
        "2. Can 3 cm, 4 cm and 8 cm form a triangle?",
        "3. Can 6 cm, 6 cm and 12 cm form a proper triangle?",
        "4. Why must the sum of two sides be greater than the third?",
        "5. Two sides are 7 cm and 10 cm. What whole-number values can the third side have?",
        "6. Can 2 cm, 3 cm and 4 cm form a triangle?",
        "7. Can 4 cm, 4 cm and 9 cm form a triangle?",
        "8. What happens when the sum of two sides is exactly equal to the third?",
        "9. Which is the quickest side to compare when testing whether three lengths form a triangle?",
        "10. Explain the triangle inequality in your own words."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For three given side lengths, identify the largest side first. Add the other two sides. If their sum is greater than the largest side, the triangle is possible. If it is equal to or less than the largest side, the triangle is not possible."
    }

  ]
},   

    {
  title: "Angles in a Triangle",

  blocks: [

    {
      type: "concept",
      title: "The Three Angles of a Triangle",
      text: "Every triangle has three interior angles, one at each vertex. Although the shape and side lengths of triangles can be different, the three interior angles together always make a straight angle when considered by the angle-sum property."
    },

    {
      type: "formula",
      title: "Angle-Sum Property of a Triangle",
      text: `
        ∠A + ∠B + ∠C = 180°
      `
    },

    {
      type: "diagram",
      title: "Angles of Triangle ABC",
      content: `
        <svg viewBox="0 0 600 360"
             width="100%"
             style="max-width:600px;height:auto;">

          <polygon
            points="300,55 90,290 510,290"
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>

          <circle cx="300" cy="55" r="7" fill="currentColor"/>
          <circle cx="90" cy="290" r="7" fill="currentColor"/>
          <circle cx="510" cy="290" r="7" fill="currentColor"/>

          <text x="292" y="35"
                font-size="24"
                font-weight="700">A</text>

          <text x="65" y="320"
                font-size="24"
                font-weight="700">B</text>

          <text x="515" y="320"
                font-size="24"
                font-weight="700">C</text>

          <text x="270" y="100"
                font-size="20">∠A</text>

          <text x="125" y="270"
                font-size="20">∠B</text>

          <text x="450" y="270"
                font-size="20">∠C</text>

        </svg>
      `,
      caption: "The three interior angles of △ABC add up to 180°."
    },

    {
      type: "concept",
      title: "Understanding the 180° Rule",
      text: "If two angles of a triangle are known, the third angle can always be found by subtracting their sum from 180°. This gives a very useful method for solving unknown-angle problems."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Finding the Third Angle",
      question: "In △ABC, ∠A = 50° and ∠B = 60°. Find ∠C.",

      steps: [
        "The three angles of a triangle add up to 180°.",
        "Write the angle-sum equation: ∠A + ∠B + ∠C = 180°.",
        "Substitute the known values: 50° + 60° + ∠C = 180°.",
        "Add the known angles: 110° + ∠C = 180°.",
        "Subtract 110° from both sides.",
        "∠C = 70°."
      ],

      answer: "∠C = 70°"
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Another Unknown Angle",
      question: "Two angles of a triangle are 35° and 85°. Find the third angle.",

      steps: [
        "Use the triangle angle-sum property.",
        "35° + 85° + x = 180°.",
        "35° + 85° = 120°.",
        "Therefore x = 180° − 120°.",
        "x = 60°."
      ],

      answer: "60°"
    },

    {
      type: "concept",
      title: "Equilateral Triangle and Its Angles",
      text: "In an equilateral triangle all three sides are equal. Its three angles are also equal. Since the three angles together measure 180°, each angle must be one-third of 180°."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Angle of an Equilateral Triangle",
      question: "Find each angle of an equilateral triangle.",

      steps: [
        "All three angles are equal.",
        "Let each angle be x°.",
        "Then x + x + x = 180°.",
        "So 3x = 180°.",
        "Divide both sides by 3.",
        "x = 60°."
      ],

      answer: "Each angle is 60°."
    },

    {
      type: "diagram",
      title: "Equilateral Triangle — Equal Angles",
      content: `
        <svg viewBox="0 0 520 360"
             width="100%"
             style="max-width:520px;height:auto;">

          <polygon
            points="260,45 85,300 435,300"
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>

          <circle cx="260" cy="45" r="7" fill="currentColor"/>
          <circle cx="85" cy="300" r="7" fill="currentColor"/>
          <circle cx="435" cy="300" r="7" fill="currentColor"/>

          <text x="250" y="27"
                font-size="23"
                font-weight="700">A</text>

          <text x="60" y="330"
                font-size="23"
                font-weight="700">B</text>

          <text x="440" y="330"
                font-size="23"
                font-weight="700">C</text>

          <text x="238" y="88"
                font-size="19">60°</text>

          <text x="115" y="278"
                font-size="19">60°</text>

          <text x="380" y="278"
                font-size="19">60°</text>

        </svg>
      `,
      caption: "An equilateral triangle has three equal angles of 60° each."
    },

    {
      type: "concept",
      title: "Isosceles Triangle",
      text: "An isosceles triangle has two equal sides. The angles opposite those equal sides are also equal. This property helps us find unknown angles quickly."
    },

    {
      type: "diagram",
      title: "Isosceles Triangle",
      content: `
        <svg viewBox="0 0 560 360"
             width="100%"
             style="max-width:560px;height:auto;">

          <polygon
            points="280,55 110,295 450,295"
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>

          <circle cx="280" cy="55" r="7" fill="currentColor"/>
          <circle cx="110" cy="295" r="7" fill="currentColor"/>
          <circle cx="450" cy="295" r="7" fill="currentColor"/>

          <text x="270" y="35"
                font-size="23"
                font-weight="700">A</text>

          <text x="85" y="325"
                font-size="23"
                font-weight="700">B</text>

          <text x="455" y="325"
                font-size="23"
                font-weight="700">C</text>

          <text x="175" y="165"
                font-size="20">AB = AC</text>

          <text x="135" y="275"
                font-size="19">∠B</text>

          <text x="410" y="275"
                font-size="19">∠C</text>

        </svg>
      `,
      caption: "If AB = AC, then the angles opposite them, ∠B and ∠C, are equal."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Isosceles Triangle",
      question: "In an isosceles triangle, the two equal angles are each 50°. Find the third angle.",

      steps: [
        "The two equal angles are 50° and 50°.",
        "Add them: 50° + 50° = 100°.",
        "The three angles of a triangle total 180°.",
        "Third angle = 180° − 100°.",
        "Third angle = 80°."
      ],

      answer: "80°"
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Finding Equal Angles",
      question: "In △ABC, AB = AC and ∠A = 40°. Find ∠B and ∠C.",

      steps: [
        "AB = AC, so the angles opposite these sides are equal.",
        "Therefore ∠B = ∠C.",
        "The angle sum gives ∠A + ∠B + ∠C = 180°.",
        "40° + ∠B + ∠C = 180°.",
        "Since ∠B = ∠C, write 40° + 2∠B = 180°.",
        "2∠B = 140°.",
        "∠B = 70°.",
        "Therefore ∠C = 70°."
      ],

      answer: "∠B = 70° and ∠C = 70°."
    },

    {
      type: "concept",
      title: "A Triangle Cannot Have Two Right Angles",
      text: "A right angle is 90°. If a triangle had two right angles, their sum would already be 180°, leaving 0° for the third angle. Therefore, a triangle cannot have two right angles."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Reasoning With Angles",
      question: "Can a triangle have angles 90°, 90° and 0°?",

      steps: [
        "The three numbers add up to 180°.",
        "However, an angle of 0° does not form a proper interior angle of a triangle.",
        "The three vertices would collapse into a straight-line arrangement.",
        "Therefore, these values do not form a proper triangle."
      ],

      answer: "No, they do not form a proper triangle."
    },

    {
      type: "concept",
      title: "Can a Triangle Have Two Obtuse Angles?",
      text: "An obtuse angle is greater than 90°. Two obtuse angles would already have a sum greater than 180°. Since the three angles of a triangle must total exactly 180°, a triangle cannot have two obtuse angles."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Obtuse Angles",
      question: "Can a triangle have two angles of 100° each?",

      steps: [
        "Add the two angles: 100° + 100° = 200°.",
        "But all three angles of a triangle together must equal 180°.",
        "The first two angles already exceed 180°.",
        "Therefore, such a triangle is impossible."
      ],

      answer: "No."
    },

    {
      type: "concept",
      title: "Exterior Angle Idea",
      text: "When one side of a triangle is extended, an exterior angle is formed. The exterior angle and the adjacent interior angle form a straight line, so their sum is 180°."
    },

    {
      type: "diagram",
      title: "Exterior Angle of a Triangle",
      content: `
        <svg viewBox="0 0 650 380"
             width="100%"
             style="max-width:650px;height:auto;">

          <polygon
            points="130,300 330,80 500,300"
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>

          <line x1="130" y1="300"
                x2="55" y2="300"
                stroke="currentColor"
                stroke-width="5"/>

          <circle cx="130" cy="300" r="7" fill="currentColor"/>
          <circle cx="330" cy="80" r="7" fill="currentColor"/>
          <circle cx="500" cy="300" r="7" fill="currentColor"/>

          <text x="105" y="335"
                font-size="23"
                font-weight="700">B</text>

          <text x="322" y="55"
                font-size="23"
                font-weight="700">A</text>

          <text x="505" y="335"
                font-size="23"
                font-weight="700">C</text>

          <text x="62" y="275"
                font-size="19">Exterior</text>

          <text x="145" y="280"
                font-size="19">Interior</text>

        </svg>
      `,
      caption: "Extending one side creates an exterior angle next to an interior angle."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Finding an Exterior Angle",
      question: "An interior angle and its adjacent exterior angle form a straight line. If the interior angle is 65°, find the exterior angle.",

      steps: [
        "Angles on a straight line add to 180°.",
        "Let the exterior angle be x°.",
        "Then 65° + x = 180°.",
        "Subtract 65° from 180°.",
        "x = 115°."
      ],

      answer: "115°"
    },

    {
      type: "concept",
      title: "Exterior Angle and the Two Opposite Interior Angles",
      text: "The exterior angle of a triangle is equal to the sum of the two interior angles that are not adjacent to it. This provides another useful method for finding unknown angles."
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Exterior Angle Property",
      question: "Two interior angles of a triangle are 45° and 65°. Find the exterior angle opposite to them.",

      steps: [
        "The exterior angle is equal to the sum of the two opposite interior angles.",
        "Add the angles: 45° + 65° = 110°.",
        "Therefore, the exterior angle is 110°."
      ],

      answer: "110°"
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Find the Unknown",
      question: "An exterior angle of a triangle is 125°. One of the two opposite interior angles is 55°. Find the other opposite interior angle.",

      steps: [
        "The exterior angle equals the sum of the two opposite interior angles.",
        "Let the unknown angle be x°.",
        "55° + x = 125°.",
        "Subtract 55° from both sides.",
        "x = 70°."
      ],

      answer: "70°"
    },

    {
      type: "table",
      title: "Important Angle Facts",
      rows: [
        ["Property", "Rule"],
        ["Triangle angle sum", "180°"],
        ["Equilateral triangle", "Each angle = 60°"],
        ["Isosceles triangle", "Angles opposite equal sides are equal"],
        ["Straight line", "Angles add to 180°"],
        ["Exterior angle", "Equals sum of two opposite interior angles"]
      ]
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Two angles of a triangle are 40° and 75°. Find the third angle.",
        "2. Find each angle of an equilateral triangle.",
        "3. An isosceles triangle has equal angles of 55°. Find the third angle.",
        "4. In an isosceles triangle, the unequal angle is 40°. Find each equal angle.",
        "5. Can a triangle have two angles of 95° each? Explain.",
        "6. An exterior angle is 120° and one opposite interior angle is 50°. Find the other.",
        "7. Why can a triangle not have two obtuse angles?",
        "8. If two angles of a triangle are equal and the third is 80°, find the equal angles.",
        "9. Find the missing angle if the other two are 72° and 38°.",
        "10. Explain the angle-sum property of a triangle."
      ]
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For an unknown interior angle, use 180° − (sum of the other two angles). For an isosceles triangle, first use the equal-side/equal-angle property. For an exterior angle, remember that it equals the sum of the two opposite interior angles."
    }

  ]
},

{
  title: "Triangle Reasoning and Mixed Problems",

  blocks: [

    {
      type: "concept",
      title: "Putting the Triangle Properties Together",
      text: "In this section we combine the ideas learned earlier: side lengths, triangle inequality, angle sums, equal sides, equal angles and exterior angles. The goal is to solve problems by identifying the correct property before doing any calculation."
    },

    {
      type: "concept",
      title: "Side–Angle Relationship",
      text: "In a triangle, the longer side lies opposite the larger angle, and the shorter side lies opposite the smaller angle. Equal sides are opposite equal angles."
    },

    {
      type: "diagram",
      title: "Longer Side and Larger Opposite Angle",
      content: `
        <svg viewBox="0 0 600 360"
             width="100%"
             style="max-width:600px;height:auto;">

          <polygon
            points="300,55 90,290 510,290"
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>

          <circle cx="300" cy="55" r="7" fill="currentColor"/>
          <circle cx="90" cy="290" r="7" fill="currentColor"/>
          <circle cx="510" cy="290" r="7" fill="currentColor"/>

          <text x="292" y="35"
                font-size="23"
                font-weight="700">A</text>

          <text x="65" y="320"
                font-size="23"
                font-weight="700">B</text>

          <text x="515" y="320"
                font-size="23"
                font-weight="700">C</text>

          <text x="275" y="315"
                font-size="19">8 cm</text>

          <text x="145" y="165"
                font-size="19">5 cm</text>

          <text x="405" y="165"
                font-size="19">7 cm</text>

          <text x="115" y="265"
                font-size="18">smaller ∠C</text>

          <text x="390" y="265"
                font-size="18">larger ∠B</text>

        </svg>
      `,
      caption: "The larger side is opposite the larger angle."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Comparing Angles",
      question: "In a triangle, the side lengths are 5 cm, 7 cm and 9 cm. Which angle is the largest?",

      steps: [
        "The largest side is 9 cm.",
        "The largest angle is opposite the largest side.",
        "Therefore, the angle opposite the 9 cm side is the largest angle."
      ],

      answer: "The angle opposite the 9 cm side."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Comparing Sides",
      question: "Two angles of a triangle are 40° and 70°. The third angle is 70°. Which sides are equal?",

      steps: [
        "The angles are 40°, 70° and 70°.",
        "Two angles are equal.",
        "Equal angles are opposite equal sides.",
        "The sides opposite the two 70° angles are equal."
      ],

      answer: "The two sides opposite the 70° angles are equal."
    },

    {
      type: "concept",
      title: "Recognising an Isosceles Triangle From Angles",
      text: "If two angles of a triangle are equal, the sides opposite those angles are also equal. Therefore, equal angles can be used to identify an isosceles triangle even when the side lengths are not given."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Identify the Triangle",
      question: "A triangle has angles 50°, 50° and 80°. What can you say about its sides?",

      steps: [
        "Two angles are equal: 50° and 50°.",
        "Equal angles have equal opposite sides.",
        "Therefore, two sides of the triangle are equal.",
        "A triangle with two equal sides is isosceles."
      ],

      answer: "It is an isosceles triangle."
    },

    {
      type: "concept",
      title: "Combining Side and Angle Information",
      text: "Some problems provide both side and angle information. We should look for matching relationships: equal sides give equal opposite angles, while unequal side lengths tell us which opposite angle is larger or smaller."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Mixed Information",
      question: "In △ABC, AB = AC and ∠A = 40°. Find ∠B and ∠C.",

      steps: [
        "AB = AC.",
        "Therefore, the angles opposite AB and AC are equal.",
        "So ∠B = ∠C.",
        "The angle sum of a triangle is 180°.",
        "40° + ∠B + ∠C = 180°.",
        "Since ∠B = ∠C, write 40° + 2∠B = 180°.",
        "2∠B = 140°.",
        "∠B = 70°.",
        "Therefore, ∠C = 70°."
      ],

      answer: "∠B = 70° and ∠C = 70°."
    },

    {
      type: "concept",
      title: "Finding a Missing Side Range",
      text: "The triangle inequality can also be used when one side is unknown. If two sides are a and b and the third side is x, then the third side must satisfy |a − b| < x < a + b."
    },

    {
      type: "formula",
      title: "Range of the Third Side",
      text: `
        |a − b| < x < a + b
      `
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Find Possible Whole-Number Sides",
      question: "Two sides of a triangle are 6 cm and 9 cm. What whole-number lengths can the third side have?",

      steps: [
        "Use the triangle inequality.",
        "The third side x must be greater than 9 − 6 = 3.",
        "It must also be less than 9 + 6 = 15.",
        "Therefore, 3 < x < 15.",
        "The possible whole-number values are 4 through 14."
      ],

      answer: "4 cm, 5 cm, 6 cm, 7 cm, 8 cm, 9 cm, 10 cm, 11 cm, 12 cm, 13 cm and 14 cm."
    },

    {
      type: "concept",
      title: "Exterior Angle Reasoning",
      text: "An exterior angle can be used to find an unknown interior angle. Remember that an exterior angle equals the sum of the two opposite interior angles."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Exterior Angle",
      question: "An exterior angle of a triangle is 140°. One of the opposite interior angles is 65°. Find the other.",

      steps: [
        "Exterior angle = sum of the two opposite interior angles.",
        "Let the unknown angle be x°.",
        "65° + x = 140°.",
        "Subtract 65° from both sides.",
        "x = 75°."
      ],

      answer: "75°"
    },

    {
      type: "concept",
      title: "Checking Whether a Construction Is Possible",
      text: "Before attempting a triangle construction with three given side lengths, check the triangle inequality. This can save time because impossible side lengths cannot produce a proper triangle."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Construction Decision",
      question: "A student wants to construct a triangle with sides 2 cm, 5 cm and 8 cm. Should the construction be attempted?",

      steps: [
        "The largest side is 8 cm.",
        "Add the other two sides: 2 + 5 = 7 cm.",
        "Since 7 < 8, the triangle inequality fails.",
        "Therefore, the three lengths cannot form a triangle.",
        "There is no need to proceed with the construction."
      ],

      answer: "No. A triangle cannot be formed."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Complete Triangle Problem",
      question: "A triangle has two equal sides. Its third angle is 40°. Find the other two angles.",

      steps: [
        "Two equal sides mean the two opposite angles are equal.",
        "Let each equal angle be x°.",
        "The three angles add to 180°.",
        "x + x + 40° = 180°.",
        "2x = 140°.",
        "x = 70°."
      ],

      answer: "The other two angles are 70° and 70°."
    },

    {
      type: "concept",
      title: "A Complete Problem-Solving Strategy",
      text: "For triangle problems, first identify what information is given. If three sides are given, check the triangle inequality. If two angles are given, use the 180° angle-sum property. If two sides or two angles are equal, use the isosceles property. If a side is extended, look for an exterior-angle relationship."
    },

    {
      type: "table",
      title: "Which Property Should I Use?",
      rows: [
        ["Given Information", "Useful Property"],
        ["Three side lengths", "Triangle inequality"],
        ["Two angles", "Angle sum = 180°"],
        ["Two equal sides", "Opposite angles are equal"],
        ["Two equal angles", "Opposite sides are equal"],
        ["One exterior angle", "Exterior-angle property"],
        ["Largest side", "Opposite angle is largest"],
        ["Smallest side", "Opposite angle is smallest"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 9 — Choose the Correct Property",
      question: "A triangle has angles 55°, 55° and 70°. Which property immediately tells us that two sides are equal?",

      steps: [
        "Two angles are equal: 55° and 55°.",
        "Equal angles in a triangle are opposite equal sides.",
        "Therefore, the two sides opposite the 55° angles are equal.",
        "The triangle is therefore isosceles."
      ],

      answer: "The equal-angles/equal-opposite-sides property."
    },

    {
      type: "workedExample",
      title: "Solved Example 10 — Final Mixed Challenge",
      question: "Two sides of an isosceles triangle are 8 cm each and the third side is 6 cm. Which angle is the largest?",

      steps: [
        "The side lengths are 8 cm, 8 cm and 6 cm.",
        "The two 8 cm sides are equal.",
        "Therefore, the angles opposite them are equal.",
        "The 6 cm side is the shortest side.",
        "The angle opposite the shortest side is the smallest.",
        "Therefore, the angle opposite the 6 cm side is the smallest.",
        "The two remaining angles are equal and therefore are the largest angles."
      ],

      answer: "The two equal angles opposite the 8 cm sides are the largest."
    },

    {
      type: "concept",
      title: "Chapter Connection",
      text: "The chapter brings together construction and reasoning. We can construct a triangle from suitable side lengths, test whether a triangle is possible, calculate unknown angles, recognise equal sides and angles, and use these properties to solve unfamiliar problems."
    },

    {
      type: "practice",
      title: "Final Practice — Section 5",
      questions: [
        "1. A triangle has sides 4 cm, 7 cm and 9 cm. Can it be constructed?",
        "2. A triangle has angles 45°, 65° and x°. Find x.",
        "3. Two sides of a triangle are equal. What can you say about the opposite angles?",
        "4. Two angles of a triangle are equal. What can you say about the opposite sides?",
        "5. An exterior angle is 135° and one opposite interior angle is 60°. Find the other.",
        "6. Two sides are 7 cm and 11 cm. Find the possible whole-number values of the third side.",
        "7. Can 4 cm, 5 cm and 10 cm form a triangle?",
        "8. The angles of a triangle are 30°, 75° and 75°. What type of triangle is it based on its angles and sides?",
        "9. Why should the triangle inequality be checked before construction?",
        "10. Explain one situation in which the angle-sum property and isosceles-triangle property are used together."
      ]
    },

    {
      type: "examTip",
      title: "Final Exam Tip",
      text: "Do not start calculating immediately. First identify the geometry property involved. Write the relevant rule, substitute the known values, solve step by step, and finally check whether the answer is reasonable for a triangle."
    }

  ]
}
  ],  

  importantPoints: [
  "A triangle has 3 sides, 3 vertices and 3 angles.",
  "A triangle is formed by three non-collinear points joined by line segments.",
  "An equilateral triangle has all three sides equal.",
  "Each angle of an equilateral triangle is 60°.",
  "To construct an equilateral triangle, keep the compass opening equal to the required side length.",
  "When three side lengths are given, the triangle can be constructed using a ruler and compass if the lengths satisfy the triangle inequality.",
  "For three positive lengths a, b and c, a + b > c, b + c > a and c + a > b.",
  "If the sum of two sides is equal to the third side, a proper triangle cannot be formed.",
  "If the sum of two sides is less than the third side, a triangle cannot be formed.",
  "The sum of the three interior angles of every triangle is 180°.",
  "If two angles of a triangle are known, the third angle is 180° minus their sum.",
  "An isosceles triangle has two equal sides.",
  "The angles opposite equal sides of an isosceles triangle are equal.",
  "If two angles of a triangle are equal, the sides opposite those angles are equal.",
  "The side opposite the largest angle is the longest side.",
  "The side opposite the smallest angle is the shortest side.",
  "An exterior angle and its adjacent interior angle form a straight angle and add up to 180°.",
  "An exterior angle of a triangle equals the sum of the two opposite interior angles.",
  "A triangle cannot have two obtuse angles.",
  "A triangle cannot have two right angles.",
  "Before constructing a triangle from three given side lengths, check the triangle inequality.",
  "For two sides a and b and third side x, the possible range is |a − b| < x < a + b.",
  "In construction problems, use the compass to transfer exact distances.",
  "The intersection of two suitable arcs determines the third vertex of a triangle.",
  "For unknown-angle problems, identify the relevant property before calculating.",
  "Always check the final answer to make sure the angles and side lengths are possible for a triangle."
],

keyTerms: [
  "Triangle",
  "Vertex",
  "Side",
  "Angle",
  "Equilateral Triangle",
  "Isosceles Triangle",
  "Triangle Inequality",
  "Interior Angle",
  "Exterior Angle",
  "Angle-Sum Property",
  "Construction",
  "Compass",
  "Ruler",
  "Collinear Points",
  "Opposite Side",
  "Opposite Angle"
],

summary:
  "A Tale of Three Intersecting Lines develops the geometry of triangles through construction and reasoning. We learn how to construct triangles from given side lengths, decide whether three lengths can form a triangle, use the 180° angle-sum property, recognise equilateral and isosceles triangles, compare sides and opposite angles, and solve problems involving exterior angles. The key strategy is to identify the correct triangle property before calculating.",

};  
