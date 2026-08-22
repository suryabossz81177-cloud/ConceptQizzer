window.ChapterData = {
  id: "7-mathematics-parallel-and-intersecting-lines",
  class: 7,
  subject: "Mathematics",
  chapterNumber: 5,
  title: "Parallel and Intersecting Lines",

  description:
    "Understand parallel and intersecting lines using diagrams, properties, angle relationships and step-by-step mathematical examples.",

  sections: [

  {
  title: "Introduction to Lines and Intersecting Lines",

  blocks: [

    {
      type: "concept",
      title: "What is a Line?",
      text: "A line is a straight path that extends endlessly in both directions. It has no fixed end points. A line is usually represented by naming any two points lying on it."
    },

    {
      type: "diagram",
      title: "A Line",
      content: `
        <svg viewBox="0 0 500 120" class="math-diagram">
          <line x1="50" y1="60" x2="450" y2="60"
                stroke="currentColor" stroke-width="4"/>
          <polygon points="35,60 55,50 55,70" fill="currentColor"/>
          <polygon points="465,60 445,50 445,70" fill="currentColor"/>
          <circle cx="180" cy="60" r="6" fill="currentColor"/>
          <circle cx="320" cy="60" r="6" fill="currentColor"/>
          <text x="170" y="95" font-size="22">A</text>
          <text x="310" y="95" font-size="22">B</text>
        </svg>
      `,
      caption: "Line AB extends endlessly in both directions."
    },

    {
      type: "definition",
      title: "Line Segment",
      text: "A line segment is a part of a line having two fixed end points. It has a definite length. A line segment with end points A and B is written as AB."
    },

    {
      type: "diagram",
      title: "A Line Segment",
      content: `
        <svg viewBox="0 0 500 120" class="math-diagram">
          <line x1="100" y1="60" x2="400" y2="60"
                stroke="currentColor" stroke-width="4"/>
          <circle cx="100" cy="60" r="7" fill="currentColor"/>
          <circle cx="400" cy="60" r="7" fill="currentColor"/>
          <text x="90" y="100" font-size="22">A</text>
          <text x="390" y="100" font-size="22">B</text>
        </svg>
      `,
      caption: "Segment AB has two end points and a fixed length."
    },

    {
      type: "definition",
      title: "Ray",
      text: "A ray has one fixed end point and extends endlessly in one direction. A ray starting at A and passing through B is written as ray AB."
    },

    {
      type: "diagram",
      title: "A Ray",
      content: `
        <svg viewBox="0 0 500 120" class="math-diagram">
          <circle cx="100" cy="60" r="7" fill="currentColor"/>
          <line x1="100" y1="60" x2="440" y2="60"
                stroke="currentColor" stroke-width="4"/>
          <polygon points="460,60 435,48 435,72" fill="currentColor"/>
          <circle cx="270" cy="60" r="6" fill="currentColor"/>
          <text x="90" y="100" font-size="22">A</text>
          <text x="260" y="100" font-size="22">B</text>
        </svg>
      `,
      caption: "Ray AB starts at A and extends endlessly through B."
    },

    {
      type: "comparison",
      title: "Line, Line Segment and Ray",
      rows: [
        ["Figure", "End Points", "Length"],
        ["Line", "No fixed end points", "Extends endlessly"],
        ["Line Segment", "Two end points", "Fixed length"],
        ["Ray", "One end point", "Extends endlessly in one direction"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Identify the Figure",
      question: "Identify each figure as a line, line segment or ray.",
      diagram: `
        <div class="diagram-row">

          <svg viewBox="0 0 220 80" class="math-diagram">
            <line x1="35" y1="40" x2="185" y2="40"
                  stroke="currentColor" stroke-width="3"/>
            <polygon points="20,40 40,31 40,49" fill="currentColor"/>
            <polygon points="200,40 180,31 180,49" fill="currentColor"/>
            <text x="80" y="70" font-size="18">PQ</text>
          </svg>

          <svg viewBox="0 0 220 80" class="math-diagram">
            <line x1="40" y1="40" x2="180" y2="40"
                  stroke="currentColor" stroke-width="3"/>
            <circle cx="40" cy="40" r="6" fill="currentColor"/>
            <circle cx="180" cy="40" r="6" fill="currentColor"/>
            <text x="85" y="70" font-size="18">MN</text>
          </svg>

          <svg viewBox="0 0 220 80" class="math-diagram">
            <circle cx="40" cy="40" r="6" fill="currentColor"/>
            <line x1="40" y1="40" x2="185" y2="40"
                  stroke="currentColor" stroke-width="3"/>
            <polygon points="200,40 180,31 180,49" fill="currentColor"/>
            <text x="85" y="70" font-size="18">XY</text>
          </svg>

        </div>
      `,
      steps: [
        "(i) Arrows at both ends show that the figure extends endlessly in both directions.",
        "Therefore, PQ represents a line.",
        "(ii) The figure has two fixed end points.",
        "Therefore, MN represents a line segment.",
        "(iii) The figure has one fixed end point and extends endlessly in one direction.",
        "Therefore, XY represents a ray."
      ],
      answer: "PQ = Line, MN = Line Segment, XY = Ray."
    },

    {
      type: "concept",
      title: "What Are Intersecting Lines?",
      text: "Two lines are called intersecting lines if they meet or cross each other at exactly one point. The point where the two lines meet is called their point of intersection."
    },

    {
      type: "diagram",
      title: "Intersecting Lines",
      content: `
        <svg viewBox="0 0 500 260" class="math-diagram">

          <line x1="80" y1="50" x2="420" y2="210"
                stroke="currentColor" stroke-width="4"/>

          <line x1="80" y1="210" x2="420" y2="50"
                stroke="currentColor" stroke-width="4"/>

          <circle cx="250" cy="130" r="7" fill="currentColor"/>

          <text x="60" y="45" font-size="22">A</text>
          <text x="425" y="225" font-size="22">D</text>
          <text x="60" y="225" font-size="22">C</text>
          <text x="425" y="45" font-size="22">B</text>
          <text x="260" y="125" font-size="22">O</text>

        </svg>
      `,
      caption: "Lines AB and CD intersect at point O."
    },

    {
      type: "concept",
      title: "Point of Intersection",
      text: "In the diagram, line AB and line CD meet at O. Therefore, O is the point of intersection. Points A, O and B lie on the same line, while C, O and D lie on another line."
    },

    {
      type: "definition",
      title: "Collinear Points",
      text: "Points that lie on the same straight line are called collinear points."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Identify Intersecting Lines",
      question: "In the diagram, name the two intersecting lines and their point of intersection.",
      diagram: `
        <svg viewBox="0 0 500 260" class="math-diagram">

          <line x1="90" y1="50" x2="410" y2="210"
                stroke="currentColor" stroke-width="4"/>

          <line x1="90" y1="210" x2="410" y2="50"
                stroke="currentColor" stroke-width="4"/>

          <circle cx="250" cy="130" r="7" fill="currentColor"/>

          <text x="65" y="45" font-size="22">A</text>
          <text x="420" y="225" font-size="22">D</text>
          <text x="65" y="225" font-size="22">C</text>
          <text x="420" y="45" font-size="22">B</text>
          <text x="260" y="125" font-size="22">O</text>

        </svg>
      `,
      steps: [
        "The first line passes through A, O and B.",
        "Therefore, it is line AB.",
        "The second line passes through C, O and D.",
        "Therefore, it is line CD.",
        "Both lines meet at O.",
        "Therefore, O is their point of intersection."
      ],
      answer: "Intersecting lines = AB and CD; point of intersection = O."
    },

    {
      type: "concept",
      title: "Angles Formed by Intersecting Lines",
      text: "When two lines intersect, they form four angles around the point of intersection. These angles are related to one another in important ways."
    },

    {
      type: "diagram",
      title: "Four Angles at an Intersection",
      content: `
        <svg viewBox="0 0 500 300" class="math-diagram">

          <line x1="80" y1="230" x2="420" y2="70"
                stroke="currentColor" stroke-width="4"/>

          <line x1="80" y1="70" x2="420" y2="230"
                stroke="currentColor" stroke-width="4"/>

          <circle cx="250" cy="150" r="6" fill="currentColor"/>

          <text x="245" y="100" font-size="24">1</text>
          <text x="315" y="155" font-size="24">2</text>
          <text x="245" y="215" font-size="24">3</text>
          <text x="175" y="155" font-size="24">4</text>

        </svg>
      `,
      caption: "Four angles are formed when two lines intersect."
    },

    {
      type: "concept",
      title: "Vertically Opposite Angles",
      text: "The angles opposite each other when two lines intersect are called vertically opposite angles. Vertically opposite angles are equal."
    },

    {
      type: "formula",
      title: "Important Property",
      text: "Vertically opposite angles are equal.\n∠1 = ∠3\n∠2 = ∠4"
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Vertically Opposite Angles",
      question: "Two lines intersect and one angle is 65°. Find its vertically opposite angle.",
      steps: [
        "When two lines intersect, vertically opposite angles are equal.",
        "The given angle = 65°.",
        "Its vertically opposite angle has the same measure.",
        "Therefore, the required angle = 65°."
      ],
      answer: "65°"
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Finding the Other Angles",
      question: "Two lines intersect. One angle is 70°. Find the vertically opposite angle and the two adjacent angles.",
      steps: [
        "The vertically opposite angle is equal to the given angle.",
        "Therefore, vertically opposite angle = 70°.",
        "Adjacent angles on a straight line add up to 180°.",
        "Each adjacent angle = 180° − 70°.",
        "180° − 70° = 110°.",
        "Therefore, the four angles are 70°, 110°, 70° and 110°."
      ],
      answer: "Vertically opposite angle = 70°; adjacent angles = 110° each."
    },

    {
      type: "formula",
      title: "Key Angle Rule",
      text: "Angles on a straight line add up to 180°.\nVertically opposite angles are equal."
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. What is a line segment?",
        "2. What is a ray?",
        "3. What are intersecting lines?",
        "4. In two intersecting lines, one angle is 45°. Find its vertically opposite angle.",
        "5. Two lines intersect and one angle is 120°. Find each adjacent angle.",
        "6. If ∠1 = 85° in an intersecting-lines diagram, find ∠3.",
        "7. How many angles are formed when two straight lines intersect?"
      ]
    },

    {
      type: "warning",
      title: "Common Mistakes",
      text: "Do not confuse a line, line segment and ray. A line extends endlessly in both directions, a ray has one fixed end point, and a line segment has two fixed end points. Also remember that vertically opposite angles are equal, while adjacent angles on a straight line add up to 180°."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Whenever two lines intersect, immediately mark the four angles. Look for vertically opposite pairs and straight-line pairs. This makes angle questions much easier to solve."
    }

  ]
},

{
  title: "Parallel Lines and Transversals",

  blocks: [

    {
      type: "concept",
      title: "What Are Parallel Lines?",
      text: "Two lines in the same plane are called parallel lines if they never meet, even when extended indefinitely in both directions. The distance between two parallel lines remains the same throughout."
    },

    {
      type: "diagram",
      title: "Parallel Lines",
      content: `
        <svg viewBox="0 0 600 220" class="math-diagram">

          <line x1="80" y1="70" x2="520" y2="70"
                stroke="currentColor" stroke-width="5"/>

          <line x1="80" y1="150" x2="520" y2="150"
                stroke="currentColor" stroke-width="5"/>

          <polygon points="60,70 85,58 85,82" fill="currentColor"/>
          <polygon points="540,70 515,58 515,82" fill="currentColor"/>

          <polygon points="60,150 85,138 85,162" fill="currentColor"/>
          <polygon points="540,150 515,138 515,162" fill="currentColor"/>

          <text x="90" y="55" font-size="24">l</text>
          <text x="90" y="185" font-size="24">m</text>

          <text x="260" y="115" font-size="22">l ∥ m</text>

        </svg>
      `,
      caption: "Lines l and m are parallel because they never meet."
    },

    {
      type: "definition",
      title: "Parallel Lines",
      text: "Parallel lines are lines that lie in the same plane and do not intersect, however far they are extended."
    },

    {
      type: "concept",
      title: "Examples of Parallel Lines Around Us",
      text: "Parallel lines can be seen in many everyday objects and structures, such as railway tracks, opposite edges of a ruler, lines in a notebook, opposite sides of a rectangular window and some road markings."
    },

    {
      type: "concept",
      title: "What Is a Transversal?",
      text: "A line that intersects two or more lines at different points is called a transversal. A transversal can intersect parallel lines or non-parallel lines."
    },

    {
      type: "diagram",
      title: "A Transversal Cutting Two Parallel Lines",
      content: `
        <svg viewBox="0 0 600 330" class="math-diagram">

          <line x1="70" y1="80" x2="530" y2="80"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="240" x2="530" y2="240"
                stroke="currentColor" stroke-width="5"/>

          <line x1="180" y1="20" x2="410" y2="300"
                stroke="currentColor" stroke-width="5"/>

          <circle cx="229" cy="80" r="6" fill="currentColor"/>
          <circle cx="361" cy="240" r="6" fill="currentColor"/>

          <text x="95" y="65" font-size="22">l</text>
          <text x="95" y="225" font-size="22">m</text>
          <text x="420" y="285" font-size="22">t</text>

          <text x="245" y="72" font-size="22">P</text>
          <text x="375" y="232" font-size="22">Q</text>

        </svg>
      `,
      caption: "Line t is a transversal intersecting parallel lines l and m at P and Q."
    },

    {
      type: "definition",
      title: "Transversal",
      text: "A transversal is a line that intersects two or more lines at distinct points."
    },

    {
      type: "concept",
      title: "Angles Formed by a Transversal",
      text: "When a transversal intersects two lines, several angles are formed. If the two lines are parallel, these angles have special relationships that allow us to find unknown angles quickly."
    },

    {
      type: "diagram",
      title: "Eight Angles",
      content: `
        <svg viewBox="0 0 650 380" class="math-diagram">

          <line x1="70" y1="90" x2="580" y2="90"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="290" x2="580" y2="290"
                stroke="currentColor" stroke-width="5"/>

          <line x1="190" y1="20" x2="460" y2="360"
                stroke="currentColor" stroke-width="5"/>

          <text x="175" y="75" font-size="24">1</text>
          <text x="250" y="75" font-size="24">2</text>
          <text x="205" y="125" font-size="24">3</text>
          <text x="150" y="125" font-size="24">4</text>

          <text x="345" y="275" font-size="24">5</text>
          <text x="420" y="275" font-size="24">6</text>
          <text x="375" y="325" font-size="24">7</text>
          <text x="330" y="325" font-size="24">8</text>

        </svg>
      `,
      caption: "A transversal creates four angles at each intersection."
    },

    {
      type: "concept",
      title: "Corresponding Angles",
      text: "When a transversal crosses two lines, angles occupying the same relative position at the two intersections are called corresponding angles. When the two lines are parallel, corresponding angles are equal."
    },

    {
      type: "formula",
      title: "Corresponding Angles",
      text: "If l ∥ m, then corresponding angles are equal.\nFor example: ∠1 = ∠5, ∠2 = ∠6, ∠3 = ∠7 and ∠4 = ∠8."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Corresponding Angles",
      question: "Two parallel lines are cut by a transversal. If ∠1 = 65°, find ∠5.",
      steps: [
        "The two lines are parallel.",
        "∠1 and ∠5 are corresponding angles.",
        "Corresponding angles formed by a transversal with parallel lines are equal.",
        "Therefore, ∠5 = ∠1.",
        "∠5 = 65°."
      ],
      answer: "∠5 = 65°"
    },

    {
      type: "concept",
      title: "Alternate Interior Angles",
      text: "The angles lying between the two parallel lines and on opposite sides of the transversal are called alternate interior angles. When the two lines are parallel, alternate interior angles are equal."
    },

    {
      type: "diagram",
      title: "Alternate Interior Angles",
      content: `
        <svg viewBox="0 0 600 320" class="math-diagram">

          <line x1="70" y1="80" x2="530" y2="80"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="240" x2="530" y2="240"
                stroke="currentColor" stroke-width="5"/>

          <line x1="180" y1="20" x2="420" y2="300"
                stroke="currentColor" stroke-width="5"/>

          <text x="255" y="125" font-size="25">3</text>
          <text x="375" y="205" font-size="25">5</text>

          <text x="285" y="155" font-size="20">alternate</text>
          <text x="285" y="180" font-size="20">interior</text>

        </svg>
      `,
      caption: "The marked angles lie between the parallel lines and on opposite sides of the transversal."
    },

    {
      type: "formula",
      title: "Alternate Interior Angle Rule",
      text: "If two parallel lines are cut by a transversal, alternate interior angles are equal."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Alternate Interior Angles",
      question: "If ∠3 = 72° and the two lines are parallel, find ∠5.",
      steps: [
        "∠3 and ∠5 are alternate interior angles.",
        "The lines are parallel.",
        "Therefore, alternate interior angles are equal.",
        "∠5 = ∠3.",
        "∠5 = 72°."
      ],
      answer: "∠5 = 72°"
    },

    {
      type: "concept",
      title: "Co-interior Angles",
      text: "The angles lying between two parallel lines and on the same side of a transversal are called co-interior angles. Their sum is always 180°."
    },

    {
      type: "formula",
      title: "Co-interior Angle Rule",
      text: "If l ∥ m, then co-interior angles are supplementary.\nTheir sum = 180°."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Co-interior Angles",
      question: "Two parallel lines are cut by a transversal. If one co-interior angle is 115°, find the other.",
      steps: [
        "Co-interior angles add up to 180°.",
        "Let the unknown angle be x.",
        "x + 115° = 180°.",
        "Subtract 115° from both sides.",
        "x = 180° − 115°.",
        "x = 65°.",
        "Therefore, the other co-interior angle is 65°."
      ],
      answer: "65°"
    },

    {
      type: "concept",
      title: "Exterior Angles",
      text: "Angles outside the region between the two parallel lines are called exterior angles. They also form useful relationships with angles created by the transversal."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Using Multiple Angle Rules",
      question: "Two parallel lines are cut by a transversal. If one angle is 110°, find the adjacent angle and the corresponding angle.",
      steps: [
        "The angle adjacent to 110° lies on a straight line with it.",
        "Angles on a straight line add up to 180°.",
        "Adjacent angle = 180° − 110°.",
        "Adjacent angle = 70°.",
        "The corresponding angle to the original 110° angle is equal to it.",
        "Therefore, corresponding angle = 110°."
      ],
      answer: "Adjacent angle = 70°; corresponding angle = 110°."
    },

    {
      type: "concept",
      title: "How to Identify Angle Relationships",
      text: "To identify a pair of related angles, first locate the two intersection points. Then check whether the angles are in the same relative position, between the parallel lines on opposite sides of the transversal, or between the parallel lines on the same side of the transversal."
    },

    {
      type: "numberTable",
      title: "Important Angle Relationships",
      rows: [
        ["Angle Pair", "Relationship"],
        ["Corresponding angles", "Equal"],
        ["Alternate interior angles", "Equal"],
        ["Co-interior angles", "Sum = 180°"],
        ["Vertically opposite angles", "Equal"],
        ["Linear pair", "Sum = 180°"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Find an Unknown Angle",
      question: "Two parallel lines are cut by a transversal. One angle is 58°. Find all angles in the figure.",
      steps: [
        "Vertically opposite angles are equal, so one opposite angle is 58°.",
        "Adjacent angles form a straight line.",
        "Therefore, each adjacent angle = 180° − 58° = 122°.",
        "Because the lines are parallel, corresponding angles repeat these values.",
        "Therefore, the eight angles consist of four angles of 58° and four angles of 122°."
      ],
      answer: "Four angles are 58° each and four angles are 122° each."
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. What are parallel lines?",
        "2. What is a transversal?",
        "3. If corresponding angles are formed by parallel lines and one is 75°, what is the other?",
        "4. If an alternate interior angle is 48°, find its pair.",
        "5. Two co-interior angles are x° and 110°. Find x.",
        "6. If one angle formed by two parallel lines and a transversal is 125°, what are the possible measures of the other angles?",
        "7. Name the angle relationship when two angles lie between parallel lines on the same side of a transversal."
      ]
    },

    {
      type: "warning",
      title: "Common Mistakes",
      text: "Do not assume that every pair of angles is equal. The parallel-line relationships depend on the positions of the angles. Corresponding and alternate interior angles are equal for parallel lines, while co-interior angles add up to 180°."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "In a diagram, first mark the parallel lines and the transversal. Then identify the angle pair before calculating. Remember: Corresponding = Equal, Alternate Interior = Equal, Co-interior = 180°."
    }

  ]
},

{
  title: "Perpendicular Lines and Angles",

  blocks: [

    {
      type: "concept",
      title: "What Are Perpendicular Lines?",
      text: "Two lines are called perpendicular lines if they intersect each other at a right angle. A right angle measures exactly 90°. The symbol ⟂ is used to show that two lines are perpendicular."
    },

    {
      type: "diagram",
      title: "Perpendicular Lines",
      content: `
        <svg viewBox="0 0 560 320" class="math-diagram">

          <line x1="280" y1="35" x2="280" y2="285"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="160" x2="490" y2="160"
                stroke="currentColor" stroke-width="5"/>

          <polyline points="280,160 315,160 315,125 280,125"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"/>

          <circle cx="280" cy="160" r="6" fill="currentColor"/>

          <text x="295" y="110" font-size="24">90°</text>
          <text x="295" y="55" font-size="22">l</text>
          <text x="450" y="150" font-size="22">m</text>

        </svg>
      `,
      caption: "Lines l and m intersect at a right angle, so l ⟂ m."
    },

    {
      type: "definition",
      title: "Perpendicular Lines",
      text: "Two intersecting lines are perpendicular if any one of the four angles formed at their intersection is 90°. In fact, all four angles formed are then right angles."
    },

    {
      type: "concept",
      title: "Four Right Angles",
      text: "When two lines are perpendicular, they divide the plane around their intersection into four equal angles. Each angle measures 90°."
    },

    {
      type: "diagram",
      title: "Four Right Angles",
      content: `
        <svg viewBox="0 0 560 320" class="math-diagram">

          <line x1="280" y1="35" x2="280" y2="285"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="160" x2="490" y2="160"
                stroke="currentColor" stroke-width="5"/>

          <text x="205" y="125" font-size="24">90°</text>
          <text x="315" y="125" font-size="24">90°</text>
          <text x="205" y="215" font-size="24">90°</text>
          <text x="315" y="215" font-size="24">90°</text>

        </svg>
      `,
      caption: "All four angles are right angles."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Identifying Perpendicular Lines",
      question: "Two lines intersect and one of the angles formed is 90°. Are the lines perpendicular?",
      steps: [
        "Perpendicular lines intersect at a right angle.",
        "A right angle measures 90°.",
        "The given angle is 90°.",
        "Therefore, the two lines are perpendicular.",
        "Answer: Yes, the lines are perpendicular."
      ]
    },

    {
      type: "concept",
      title: "Perpendicular Line Segments",
      text: "Perpendicularity can also occur between line segments. If two line segments meet at a right angle, they are perpendicular line segments."
    },

    {
      type: "diagram",
      title: "Perpendicular Line Segments",
      content: `
        <svg viewBox="0 0 560 300" class="math-diagram">

          <line x1="280" y1="50" x2="280" y2="250"
                stroke="currentColor" stroke-width="6"/>

          <line x1="100" y1="150" x2="460" y2="150"
                stroke="currentColor" stroke-width="6"/>

          <circle cx="280" cy="150" r="7" fill="currentColor"/>

          <text x="265" y="40" font-size="22">A</text>
          <text x="265" y="280" font-size="22">B</text>
          <text x="75" y="145" font-size="22">C</text>
          <text x="470" y="145" font-size="22">D</text>

        </svg>
      `,
      caption: "AB ⟂ CD because they meet at 90°."
    },

    {
      type: "concept",
      title: "Finding Unknown Angles with Perpendicular Lines",
      text: "Since perpendicular lines form right angles, any angle directly formed by the two perpendicular lines is 90°. Perpendicularity can also help us find unknown angles when another line divides a right angle into smaller angles."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Part of a Right Angle",
      question: "Two perpendicular lines form a right angle. One part of the right angle is 35°. Find the other part.",
      diagram: `
        <svg viewBox="0 0 500 300" class="math-diagram">

          <line x1="100" y1="220" x2="400" y2="220"
                stroke="currentColor" stroke-width="5"/>

          <line x1="250" y1="220" x2="250" y2="60"
                stroke="currentColor" stroke-width="5"/>

          <line x1="250" y1="220" x2="350" y2="120"
                stroke="currentColor" stroke-width="4"/>

          <text x="290" y="195" font-size="22">35°</text>
          <text x="205" y="125" font-size="22">x°</text>

        </svg>
      `,
      steps: [
        "The horizontal and vertical lines are perpendicular.",
        "Therefore, the complete angle is 90°.",
        "The angle is divided into two parts: 35° and x°.",
        "So, x + 35° = 90°.",
        "Subtract 35° from both sides.",
        "x = 90° − 35°.",
        "x = 55°.",
        "Answer: x = 55°."
      ]
    },

    {
      type: "concept",
      title: "Complementary Angles",
      text: "Two angles whose sum is 90° are called complementary angles. When a right angle is divided into two smaller angles, those two angles are complementary."
    },

    {
      type: "formula",
      title: "Complementary Angle Rule",
      text: "If two angles are complementary:\na + b = 90°\nTherefore, unknown angle = 90° − known angle."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Complementary Angles",
      question: "Two complementary angles are 28° and x°. Find x.",
      steps: [
        "Complementary angles add up to 90°.",
        "Therefore, x + 28° = 90°.",
        "Subtract 28° from 90°.",
        "x = 90° − 28°.",
        "x = 62°.",
        "Answer: x = 62°."
      ]
    },

    {
      type: "concept",
      title: "Perpendicular Bisector",
      text: "A perpendicular bisector of a line segment is a line that passes through the midpoint of the segment and is perpendicular to it. It divides the segment into two equal parts while making a 90° angle with it."
    },

    {
      type: "diagram",
      title: "Perpendicular Bisector",
      content: `
        <svg viewBox="0 0 600 330" class="math-diagram">

          <line x1="100" y1="180" x2="500" y2="180"
                stroke="currentColor" stroke-width="5"/>

          <line x1="300" y1="50" x2="300" y2="290"
                stroke="currentColor" stroke-width="5"/>

          <circle cx="300" cy="180" r="7" fill="currentColor"/>

          <text x="90" y="170" font-size="22">A</text>
          <text x="505" y="170" font-size="22">B</text>
          <text x="310" y="175" font-size="22">M</text>

          <text x="185" y="215" font-size="20">AM = MB</text>
          <text x="310" y="85" font-size="20">90°</text>

        </svg>
      `,
      caption: "Line through M is perpendicular to AB and M is its midpoint."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Perpendicular Bisector",
      question: "A line segment AB is 14 cm long. Its perpendicular bisector passes through its midpoint M. Find AM and MB.",
      steps: [
        "A perpendicular bisector divides a line segment into two equal parts.",
        "AB = 14 cm.",
        "Therefore, AM = MB = 14 ÷ 2.",
        "14 ÷ 2 = 7.",
        "Answer: AM = 7 cm and MB = 7 cm."
      ]
    },

    {
      type: "concept",
      title: "Parallel and Perpendicular Lines Are Different",
      text: "Parallel lines never meet, whereas perpendicular lines meet at a right angle. Therefore, parallelism and perpendicularity describe two different relationships between lines."
    },

    {
      type: "comparison",
      title: "Parallel vs Perpendicular",
      rows: [
        ["Parallel Lines", "Perpendicular Lines"],
        ["Never intersect", "Intersect at 90°"],
        ["Distance between them remains constant", "Form four right angles"],
        ["Symbol: ∥", "Symbol: ⟂"],
        ["Example: railway tracks", "Example: two edges meeting at a square corner"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Parallel or Perpendicular?",
      question: "Classify the following pairs: (a) two railway tracks, (b) the adjacent sides of a square.",
      steps: [
        "(a) Railway tracks run side by side and do not meet. Therefore, they represent parallel lines.",
        "(b) Adjacent sides of a square meet at a right angle.",
        "Therefore, adjacent sides of a square are perpendicular.",
        "Answer: (a) Parallel, (b) Perpendicular."
      ]
    },

    {
      type: "concept",
      title: "Perpendicular Lines in Shapes",
      text: "Perpendicular lines and segments occur naturally in many geometric shapes. Adjacent sides of a rectangle and square are perpendicular. The horizontal and vertical sides of coordinate grids also meet at right angles."
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Rectangle",
      question: "A rectangle has length 12 cm and breadth 7 cm. Are its adjacent sides perpendicular?",
      steps: [
        "A rectangle has four right angles.",
        "Each right angle measures 90°.",
        "Therefore, its adjacent sides meet at 90°.",
        "Hence, adjacent sides are perpendicular.",
        "The given lengths do not change this property.",
        "Answer: Yes, adjacent sides are perpendicular."
      ]
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. What are perpendicular lines?",
        "2. What is the measure of a right angle?",
        "3. Two perpendicular lines form four angles. What is the measure of each angle?",
        "4. One part of a right angle is 27°. Find the other part.",
        "5. Two complementary angles are 46° and x°. Find x.",
        "6. A line segment is 18 cm long. Its perpendicular bisector divides it into two equal parts. Find the length of each part.",
        "7. State whether the following are parallel or perpendicular: (a) railway tracks, (b) adjacent sides of a square."
      ]
    },

    {
      type: "warning",
      title: "Common Mistakes",
      text: "Do not say that every pair of intersecting lines is perpendicular. Intersecting lines may form angles other than 90°. Lines are perpendicular only when they meet at a right angle."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Whenever you see the symbol ⟂, immediately remember 90°. If a right angle is divided into smaller angles, use their sum as 90°. For a perpendicular bisector, remember both properties: it passes through the midpoint and makes a 90° angle."
    }

  ]
},

   {
  title: "Distance Between Parallel Lines and Angle Relationships",

  blocks: [

    {
      type: "concept",
      title: "Distance Between Parallel Lines",
      text: "Parallel lines remain the same distance apart at every point. The shortest distance between two parallel lines is measured along a line perpendicular to both of them. This perpendicular distance remains constant."
    },

    {
      type: "diagram",
      title: "Constant Distance Between Parallel Lines",
      content: `
        <svg viewBox="0 0 620 320" class="math-diagram">

          <line x1="70" y1="80" x2="550" y2="80"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="240" x2="550" y2="240"
                stroke="currentColor" stroke-width="5"/>

          <line x1="310" y1="80" x2="310" y2="240"
                stroke="currentColor" stroke-width="4"/>

          <polyline points="310,80 335,80 335,105 310,105"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"/>

          <text x="80" y="65" font-size="24">l</text>
          <text x="80" y="225" font-size="24">m</text>
          <text x="325" y="165" font-size="22">d</text>

          <text x="360" y="145" font-size="20">
            perpendicular distance
          </text>

        </svg>
      `,
      caption: "The perpendicular distance d between parallel lines l and m is constant."
    },

    {
      type: "definition",
      title: "Distance Between Parallel Lines",
      text: "The perpendicular distance between two parallel lines is the shortest distance between them and remains the same everywhere."
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Constant Distance",
      question: "Two parallel lines are 6 cm apart at one point. What is their perpendicular distance at another point?",
      steps: [
        "The given lines are parallel.",
        "The perpendicular distance between parallel lines remains constant.",
        "The distance at the first point is 6 cm.",
        "Therefore, the perpendicular distance at every other point is also 6 cm.",
        "Answer: 6 cm."
      ]
    },

    {
      type: "concept",
      title: "A Transversal Creates Related Angles",
      text: "When a transversal crosses two parallel lines, the angles formed at the two intersections are connected by specific rules. These rules allow us to calculate unknown angles without measuring them directly."
    },

    {
      type: "diagram",
      title: "Angle Relationships",
      content: `
        <svg viewBox="0 0 650 380" class="math-diagram">

          <line x1="70" y1="90" x2="580" y2="90"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="290" x2="580" y2="290"
                stroke="currentColor" stroke-width="5"/>

          <line x1="180" y1="20" x2="460" y2="360"
                stroke="currentColor" stroke-width="5"/>

          <text x="165" y="75" font-size="24">1</text>
          <text x="250" y="75" font-size="24">2</text>
          <text x="210" y="130" font-size="24">3</text>
          <text x="145" y="130" font-size="24">4</text>

          <text x="345" y="275" font-size="24">5</text>
          <text x="430" y="275" font-size="24">6</text>
          <text x="375" y="330" font-size="24">7</text>
          <text x="315" y="330" font-size="24">8</text>

        </svg>
      `,
      caption: "The eight angles formed by a transversal cutting two parallel lines."
    },

    {
      type: "concept",
      title: "Angles on a Straight Line",
      text: "When two adjacent angles form a straight line, their measures add up to 180°. This rule is useful for finding unknown angles in diagrams involving parallel, intersecting and perpendicular lines."
    },

    {
      type: "formula",
      title: "Straight-Line Rule",
      text: "If two adjacent angles form a straight line:\na + b = 180°\nTherefore, b = 180° − a."
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Straight-Line Angles",
      question: "Two adjacent angles on a straight line are 118° and x°. Find x.",
      steps: [
        "Angles on a straight line add up to 180°.",
        "Therefore, 118° + x = 180°.",
        "Subtract 118° from both sides.",
        "x = 180° − 118°.",
        "x = 62°.",
        "Answer: x = 62°."
      ]
    },

    {
      type: "concept",
      title: "Vertically Opposite Angles",
      text: "When two lines intersect, opposite angles are vertically opposite angles. They always have equal measures."
    },

    {
      type: "diagram",
      title: "Vertically Opposite Angles",
      content: `
        <svg viewBox="0 0 520 300" class="math-diagram">

          <line x1="80" y1="240" x2="440" y2="60"
                stroke="currentColor" stroke-width="5"/>

          <line x1="80" y1="60" x2="440" y2="240"
                stroke="currentColor" stroke-width="5"/>

          <circle cx="260" cy="150" r="6" fill="currentColor"/>

          <text x="245" y="105" font-size="24">A</text>
          <text x="320" y="155" font-size="24">B</text>
          <text x="245" y="220" font-size="24">C</text>
          <text x="175" y="155" font-size="24">D</text>

          <text x="365" y="105" font-size="20">A = C</text>
          <text x="365" y="140" font-size="20">B = D</text>

        </svg>
      `,
      caption: "Opposite angles are equal."
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Vertically Opposite Angles",
      question: "Two lines intersect. If one angle is 82°, find its vertically opposite angle.",
      steps: [
        "Vertically opposite angles are equal.",
        "The given angle is 82°.",
        "Therefore, its vertically opposite angle is also 82°.",
        "Answer: 82°."
      ]
    },

    {
      type: "concept",
      title: "Finding All Four Angles",
      text: "Once one angle formed by two intersecting lines is known, the other three angles can be found using two rules: vertically opposite angles are equal, and adjacent angles on a straight line add up to 180°."
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Find All Four Angles",
      question: "Two lines intersect and one of the angles is 48°. Find all four angles.",
      steps: [
        "The vertically opposite angle is equal to 48°.",
        "Therefore, the opposite angle is 48°.",
        "Each adjacent angle forms a straight line with 48°.",
        "Adjacent angle = 180° − 48°.",
        "Adjacent angle = 132°.",
        "Therefore, the four angles are 48°, 132°, 48° and 132°.",
        "Answer: Two angles are 48° each and two angles are 132° each."
      ]
    },

    {
      type: "concept",
      title: "Complementary and Supplementary Angles",
      text: "Two angles are complementary if their sum is 90°. Two angles are supplementary if their sum is 180°. These relationships frequently appear when working with perpendicular and intersecting lines."
    },

    {
      type: "numberTable",
      title: "Important Angle Sums",
      rows: [
        ["Type", "Sum"],
        ["Complementary angles", "90°"],
        ["Supplementary angles", "180°"],
        ["Angles on a straight line", "180°"],
        ["Angles around a point", "360°"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Complementary Angles",
      question: "One angle is 37°. Find its complementary angle.",
      steps: [
        "Complementary angles add up to 90°.",
        "Let the unknown angle be x.",
        "x + 37° = 90°.",
        "x = 90° − 37°.",
        "x = 53°.",
        "Answer: 53°."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Supplementary Angles",
      question: "One angle is 124°. Find its supplementary angle.",
      steps: [
        "Supplementary angles add up to 180°.",
        "Let the unknown angle be x.",
        "x + 124° = 180°.",
        "x = 180° − 124°.",
        "x = 56°.",
        "Answer: 56°."
      ]
    },

    {
      type: "concept",
      title: "Angles Around a Point",
      text: "All the angles formed around a single point make one complete turn. The sum of angles around a point is 360°."
    },

    {
      type: "diagram",
      title: "Angles Around a Point",
      content: `
        <svg viewBox="0 0 520 330" class="math-diagram">

          <line x1="260" y1="165" x2="260" y2="45"
                stroke="currentColor" stroke-width="4"/>

          <line x1="260" y1="165" x2="390" y2="95"
                stroke="currentColor" stroke-width="4"/>

          <line x1="260" y1="165" x2="410" y2="250"
                stroke="currentColor" stroke-width="4"/>

          <line x1="260" y1="165" x2="120" y2="250"
                stroke="currentColor" stroke-width="4"/>

          <line x1="260" y1="165" x2="120" y2="80"
                stroke="currentColor" stroke-width="4"/>

          <circle cx="260" cy="165" r="6" fill="currentColor"/>

          <text x="275" y="100" font-size="22">a</text>
          <text x="335" y="125" font-size="22">b</text>
          <text x="340" y="220" font-size="22">c</text>
          <text x="190" y="220" font-size="22">d</text>
          <text x="175" y="125" font-size="22">e</text>

        </svg>
      `,
      caption: "The sum of all angles around the point is 360°."
    },

    {
      type: "formula",
      title: "Angle Around a Point",
      text: "a + b + c + d + e = 360°"
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Angles Around a Point",
      question: "Four angles around a point are 80°, 90°, 70° and 60°. Find the fifth angle.",
      steps: [
        "Angles around a point add up to 360°.",
        "Add the known angles: 80° + 90° + 70° + 60° = 300°.",
        "Let the fifth angle be x.",
        "x + 300° = 360°.",
        "x = 360° − 300°.",
        "x = 60°.",
        "Answer: 60°."
      ]
    },

    {
      type: "concept",
      title: "A Useful Strategy for Geometry Problems",
      text: "When solving a geometry problem, do not guess the angle. First identify the relationship shown in the diagram. Decide whether you need the straight-line rule, vertically opposite angles, complementary angles, supplementary angles, angles around a point, or a parallel-line property."
    },

    {
      type: "list",
      title: "Step-by-Step Strategy",
      items: [
        "Look carefully at the diagram.",
        "Identify the lines and intersection points.",
        "Mark any given angles.",
        "Look for parallel or perpendicular lines.",
        "Identify the relevant angle relationship.",
        "Write the mathematical equation.",
        "Solve for the unknown angle.",
        "Check that the answer fits the diagram."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Mixed Angle Reasoning",
      question: "Two lines intersect. One angle is 65°. A third ray divides the vertically opposite angle into two parts of 25° and x°. Find x.",
      steps: [
        "The vertically opposite angle to 65° is also 65°.",
        "That 65° angle is divided into 25° and x°.",
        "Therefore, 25° + x = 65°.",
        "Subtract 25° from both sides.",
        "x = 65° − 25°.",
        "x = 40°.",
        "Answer: x = 40°."
      ]
    },

    {
      type: "practice",
      title: "Practice Yourself",
      questions: [
        "1. Two angles on a straight line are 73° and x°. Find x.",
        "2. Two lines intersect and one angle is 96°. Find its vertically opposite angle.",
        "3. Find the adjacent angle to 125°.",
        "4. Find the complement of 34°.",
        "5. Find the supplement of 147°.",
        "6. Three angles around a point are 80°, 120° and 95°. Find the fourth angle.",
        "7. Two intersecting lines form one angle of 42°. Find all four angles."
      ]
    },

    {
      type: "warning",
      title: "Common Mistakes",
      text: "Do not use the 90° rule unless the lines are perpendicular or the angles are explicitly complementary. Similarly, do not assume that adjacent angles are always equal. First identify the correct geometric relationship."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "Remember these four key facts: straight line = 180°, around a point = 360°, vertically opposite angles are equal, and perpendicular lines form 90°. These rules solve a large number of basic angle problems."
    }

  ]
},

{
  title: "Applying Parallel and Intersecting Lines in Geometry",
  blocks: [

    {
      type: "concept",
      title: "Using Line Properties to Solve Problems",
      text: "The properties of parallel, intersecting and perpendicular lines help us find unknown angles and lengths without directly measuring them. A geometry problem is solved by identifying the relationship shown in the diagram and then applying the appropriate rule."
    },

    {
      type: "diagram",
      title: "A Complete Angle-Relationship Diagram",
      content: `
        <svg viewBox="0 0 650 400" class="math-diagram">

          <line x1="70" y1="100" x2="580" y2="100"
                stroke="currentColor" stroke-width="5"/>

          <line x1="70" y1="300" x2="580" y2="300"
                stroke="currentColor" stroke-width="5"/>

          <line x1="180" y1="25" x2="450" y2="375"
                stroke="currentColor" stroke-width="5"/>

          <text x="85" y="80" font-size="22">l</text>
          <text x="85" y="280" font-size="22">m</text>
          <text x="455" y="370" font-size="22">t</text>

          <text x="170" y="85" font-size="23">1</text>
          <text x="250" y="85" font-size="23">2</text>
          <text x="205" y="135" font-size="23">3</text>
          <text x="145" y="135" font-size="23">4</text>

          <text x="330" y="285" font-size="23">5</text>
          <text x="410" y="285" font-size="23">6</text>
          <text x="365" y="335" font-size="23">7</text>
          <text x="305" y="335" font-size="23">8</text>

        </svg>
      `,
      caption: "When l ∥ m, the transversal t creates useful angle relationships."
    },

    {
      type: "concept",
      title: "A Quick Angle-Relationship Map",
      text: "For two parallel lines cut by a transversal: corresponding angles are equal, alternate interior angles are equal, and co-interior angles add up to 180°. At each intersection, vertically opposite angles are equal and adjacent angles on a straight line add up to 180°."
    },

    {
      type: "numberTable",
      title: "Rules to Remember",
      rows: [
        ["Relationship", "Rule"],
        ["Corresponding angles", "Equal"],
        ["Alternate interior angles", "Equal"],
        ["Co-interior angles", "Sum = 180°"],
        ["Vertically opposite angles", "Equal"],
        ["Linear pair", "Sum = 180°"],
        ["Angles around a point", "Sum = 360°"],
        ["Perpendicular lines", "Angle = 90°"]
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 1 — Corresponding Angles",
      question: "Two parallel lines are cut by a transversal. If ∠2 = 68°, find the corresponding angle ∠6.",
      steps: [
        "The two lines are parallel.",
        "∠2 and ∠6 occupy corresponding positions.",
        "Corresponding angles between parallel lines are equal.",
        "Therefore, ∠6 = ∠2.",
        "∠6 = 68°.",
        "Answer: 68°."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 2 — Alternate Interior Angles",
      question: "If ∠3 = 74° and the two lines are parallel, find ∠5.",
      steps: [
        "∠3 and ∠5 lie between the parallel lines.",
        "They are on opposite sides of the transversal.",
        "Therefore, they are alternate interior angles.",
        "Alternate interior angles are equal.",
        "∠5 = 74°.",
        "Answer: 74°."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 3 — Co-interior Angles",
      question: "If one co-interior angle is 112°, find the other co-interior angle.",
      steps: [
        "Co-interior angles between parallel lines add up to 180°.",
        "Let the unknown angle be x.",
        "x + 112° = 180°.",
        "Subtract 112° from both sides.",
        "x = 180° − 112°.",
        "x = 68°.",
        "Answer: 68°."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 4 — Find Multiple Angles",
      question: "Two parallel lines are cut by a transversal. One angle is 64°. Find the measures of all eight angles.",
      steps: [
        "The given angle is 64°.",
        "Its vertically opposite angle is also 64°.",
        "Each adjacent angle forms a straight line with 64°.",
        "Adjacent angle = 180° − 64° = 116°.",
        "Thus, at the first intersection there are two 64° angles and two 116° angles.",
        "Because the lines are parallel, corresponding angles at the second intersection have the same measures.",
        "Therefore, four angles are 64° and four angles are 116°.",
        "Answer: 64°, 116°, 64°, 116°, 64°, 116°, 64°, 116°."
      ]
    },

    {
      type: "concept",
      title: "Using Algebra with Angles",
      text: "Sometimes an unknown angle is represented by an algebraic expression such as x + 20 or 2x. The geometric relationship gives an equation, which can then be solved using algebra."
    },

    {
      type: "workedExample",
      title: "Solved Example 5 — Algebra and Parallel Lines",
      question: "Two corresponding angles are (2x + 10)° and 70°. Find x.",
      steps: [
        "Corresponding angles between parallel lines are equal.",
        "Therefore, 2x + 10 = 70.",
        "Subtract 10 from both sides.",
        "2x = 60.",
        "Divide both sides by 2.",
        "x = 30.",
        "Check: 2(30) + 10 = 70.",
        "Answer: x = 30."
      ]
    },

    {
      type: "workedExample",
      title: "Solved Example 6 — Co-interior Angles with Algebra",
      question: "Two co-interior angles are (3x + 5)° and (2x + 25)°. Find x.",
      steps: [
        "Co-interior angles are supplementary.",
        "Therefore, their sum is 180°.",
        "(3x + 5) + (2x + 25) = 180.",
        "Combine like terms: 5x + 30 = 180.",
        "Subtract 30 from both sides: 5x = 150.",
        "Divide by 5: x = 30.",
        "Check the angles: 3(30) + 5 = 95°.",
        "Second angle: 2(30) + 25 = 85°.",
        "95° + 85° = 180°, so the answer is correct.",
        "Answer: x = 30."
      ]
    },

    {
      type: "concept",
      title: "Recognising Parallel Lines from Angles",
      text: "Angle relationships can also help us decide whether two lines are parallel. If a transversal creates equal corresponding angles or equal alternate interior angles, the two lines can be identified as parallel. If co-interior angles add up to 180°, that also provides a test for parallelism."
    },

    {
      type: "workedExample",
      title: "Solved Example 7 — Testing for Parallel Lines",
      question: "A transversal cuts two lines and forms corresponding angles of 72° and 72°. What can we conclude?",
      steps: [
        "The corresponding angles are equal.",
        "Equal corresponding angles formed by a transversal indicate that the two lines are parallel.",
        "Therefore, the two lines are parallel.",
        "Answer: The lines are parallel."
      ]
    },

    {
      type: "concept",
      title: "Geometry in Everyday Objects",
      text: "Parallel and perpendicular lines appear frequently in real life. Railway tracks are approximately parallel, the edges of a rectangular book form pairs of parallel and perpendicular lines, and road markings often use parallel lines."
    },

    {
      type: "workedExample",
      title: "Solved Example 8 — Real-Life Geometry",
      question: "The opposite edges of a rectangular sheet are parallel. If one edge is 30 cm long, what can we say about the opposite edge?",
      steps: [
        "Opposite sides of a rectangle are equal in length.",
        "Therefore, the opposite edge has the same length.",
        "Given edge = 30 cm.",
        "Opposite edge = 30 cm.",
        "Answer: 30 cm."
      ]
    },

    {
      type: "concept",
      title: "Drawing Parallel and Perpendicular Lines",
      text: "Geometry constructions often require drawing a line parallel or perpendicular to a given line. A ruler and set square can be used to construct these lines accurately. The important idea is to maintain the required angle or direction."
    },

    {
      type: "diagram",
      title: "Parallel and Perpendicular Construction Idea",
      content: `
        <svg viewBox="0 0 620 320" class="math-diagram">

          <line x1="80" y1="90" x2="540" y2="90"
                stroke="currentColor" stroke-width="5"/>

          <line x1="80" y1="230" x2="540" y2="230"
                stroke="currentColor" stroke-width="5"/>

          <line x1="250" y1="90" x2="250" y2="230"
                stroke="currentColor" stroke-width="4"/>

          <polyline points="250,90 275,90 275,115 250,115"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"/>

          <text x="90" y="70" font-size="22">Parallel line</text>
          <text x="285" y="165" font-size="22">90°</text>
          <text x="90" y="215" font-size="22">Parallel line</text>

        </svg>
      `,
      caption: "A perpendicular line makes a 90° angle with both parallel lines."
    },

    {
      type: "practice",
      title: "Challenge Practice",
      questions: [
        "1. Two parallel lines are cut by a transversal. One corresponding angle is 83°. Find the other.",
        "2. One alternate interior angle is 57°. Find its pair.",
        "3. Two co-interior angles are (x + 20)° and 100°. Find x.",
        "4. Two corresponding angles are (3x − 5)° and 70°. Find x.",
        "5. Two intersecting lines form an angle of 118°. Find all four angles.",
        "6. Three angles around a point are 85°, 125° and 90°. Find the fourth angle.",
        "7. Explain how equal corresponding angles can help identify parallel lines."
      ]
    },

    {
      type: "warning",
      title: "Common Mistakes",
      text: "Do not identify an angle pair only by looking at the diagram. Trace the transversal and check the exact positions of the two angles. Also, when an angle is represented by an algebraic expression, first write the correct geometric equation before solving for the variable."
    },

    {
      type: "examTip",
      title: "Exam Tip",
      text: "For difficult angle problems, mark every known angle on the diagram. Then move from one intersection to the other using vertically opposite, straight-line, corresponding, alternate-interior or co-interior relationships. If variables are present, convert the angle relationship into an equation and solve it."
    }

  ]
}
],

importantPoints: [
  "A line extends endlessly in both directions and has no fixed end points.",
  "A line segment has two fixed end points and a definite length.",
  "A ray has one fixed end point and extends endlessly in one direction.",
  "Points lying on the same straight line are called collinear points.",
  "Two lines that meet at exactly one point are called intersecting lines.",
  "The point where two intersecting lines meet is called the point of intersection.",
  "Two intersecting lines form four angles.",
  "Vertically opposite angles are equal.",
  "Adjacent angles forming a straight line have a sum of 180°.",
  "Two lines are perpendicular when they intersect at a right angle.",
  "A right angle measures 90°.",
  "The symbol ⟂ is used to represent perpendicular lines.",
  "When two lines are perpendicular, all four angles formed at their intersection are 90°.",
  "Two angles whose sum is 90° are called complementary angles.",
  "Two angles whose sum is 180° are called supplementary angles.",
  "A perpendicular bisector passes through the midpoint of a line segment and is perpendicular to it.",
  "Two lines in the same plane that never meet, however far they are extended, are called parallel lines.",
  "The symbol ∥ is used to represent parallel lines.",
  "The distance between two parallel lines remains constant.",
  "The shortest distance between parallel lines is measured along a perpendicular.",
  "A line that intersects two or more lines at distinct points is called a transversal.",
  "A transversal creates four angles at each of its intersections with two lines.",
  "When a transversal cuts two parallel lines, corresponding angles are equal.",
  "When a transversal cuts two parallel lines, alternate interior angles are equal.",
  "When a transversal cuts two parallel lines, co-interior angles add up to 180°.",
  "Vertically opposite angles remain equal at each intersection.",
  "Angles around a point add up to 360°.",
  "A straight angle measures 180°.",
  "If one angle formed by two intersecting lines is known, the other three can usually be found using vertically opposite and straight-line angle properties.",
  "If one angle formed by perpendicular lines is known, the relevant right-angle relationship can be used to find the unknown angle.",
  "Parallel and perpendicular lines are different: parallel lines do not meet, while perpendicular lines meet at 90°.",
  "Algebraic expressions can be used to represent unknown angles.",
  "If corresponding or alternate interior angles are represented by algebraic expressions, their equality can be used to form an equation.",
  "If co-interior angles contain variables, their sum can be set equal to 180°.",
  "Equal corresponding angles can be used as an indication that two lines are parallel.",
  "Equal alternate interior angles can also indicate that two lines are parallel.",
  "Geometry diagrams should be interpreted using properties rather than by guessing the visual size of an angle.",
  "A correct solution should identify the angle relationship before performing the calculation.",
  "Units such as degrees (°) should be included when stating angle measures."
],

keyTerms: [
  "Line",
  "Line Segment",
  "Ray",
  "Collinear Points",
  "Intersecting Lines",
  "Point of Intersection",
  "Parallel Lines",
  "Perpendicular Lines",
  "Transversal",
  "Right Angle",
  "Straight Angle",
  "Complementary Angles",
  "Supplementary Angles",
  "Vertically Opposite Angles",
  "Adjacent Angles",
  "Linear Pair",
  "Corresponding Angles",
  "Alternate Interior Angles",
  "Co-interior Angles",
  "Perpendicular Bisector",
  "Angle",
  "Point",
  "Plane",
  "Parallelism",
  "Perpendicularity",
  "Angle Relationship",
  "Geometric Construction"
],

summary: "Parallel and Intersecting Lines develops the understanding of different types of lines and the angle relationships they create. A line extends endlessly in both directions, a ray has one fixed end point, and a line segment has two fixed end points. Intersecting lines meet at a point and form four angles, with vertically opposite angles equal and angles on a straight line adding to 180°. Perpendicular lines intersect at 90°, while parallel lines never meet and remain at a constant distance from each other. A transversal crossing parallel lines creates important relationships: corresponding angles are equal, alternate interior angles are equal, and co-interior angles have a sum of 180°. The chapter also connects these geometric properties with algebra by using expressions and equations to find unknown angles. Careful observation of diagrams, identification of the correct angle relationship and step-by-step calculation are essential for solving geometry problems accurately."
};
