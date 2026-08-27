/* ConceptQizzer — Class 8 Science — Chapter 10 */
const ChapterData = {
  "id": "8-science-light-mirrors-and-lenses",
  "title": "Light: Mirrors and Lenses",
  "class": 8,
  "subject": "Science",
  "chapterNumber": 10,
  "description": "Highly detailed Class 8 Science notes on light, reflection, mirrors, refraction, lenses, image formation, human eye and optical instruments.",
  "sections": [
    {
      "title": "Chapter Introduction",
      "blocks": [
        {
          "type": "paragraph",
          "title": "Light: Mirrors and Lenses",
          "text": "Light is essential for vision and for a huge range of technologies. Mirrors control light mainly by reflection, while lenses control light mainly by refraction. Together they allow us to form, magnify, reduce, redirect and focus images. This chapter builds a detailed understanding of reflection, image formation, spherical mirrors, refraction, lenses, the human eye and optical instruments.",
          "color": "purple"
        },
        {
          "type": "application",
          "title": "Why this topic matters",
          "text": "Mirrors and lenses are used in vehicles, cameras, spectacles, microscopes, telescopes, projectors, medical instruments, periscopes and many optical systems.",
          "color": "green"
        },
        {
          "type": "figure",
          "title": "Law of reflection",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Law of reflection</text><line x1=\"500\" y1=\"80\" x2=\"500\" y2=\"450\" stroke=\"#334155\" stroke-width=\"8\"/><line x1=\"140\" y1=\"390\" x2=\"500\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"6\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"230\" x2=\"860\" y2=\"390\" stroke=\"#2563eb\" stroke-width=\"6\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"230\" x2=\"500\" y2=\"440\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"9 8\"/><text x=\"180\" y=\"370\" font-family=\"Arial\" font-size=\"18\">incident ray</text><text x=\"680\" y=\"370\" font-family=\"Arial\" font-size=\"18\">reflected ray</text><text x=\"515\" y=\"430\" font-family=\"Arial\" font-size=\"18\">normal</text></svg>",
          "caption": "Original self-created scientific vector figure; embedded locally with no external image dependency."
        }
      ]
    },
    {
      "title": "Light, Rays and Beams",
      "blocks": [
        {
          "type": "definition",
          "title": "Light",
          "text": "Light is electromagnetic radiation that can be detected by the human eye. In geometrical optics, its propagation is represented using rays.",
          "color": "cyan"
        },
        {
          "type": "concept",
          "title": "Ray of light",
          "text": "A ray is an idealised line showing the direction of propagation of light. It is a model rather than a physical pencil-thin object.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Beam of light",
          "text": "A beam is a group of rays. It may be parallel, convergent or divergent.",
          "color": "green"
        },
        {
          "type": "table",
          "title": "Types of beam",
          "color": "cyan",
          "rows": [
            [
              "Beam",
              "Meaning",
              "Typical situation"
            ],
            [
              "Parallel",
              "Rays remain approximately parallel",
              "Distant source light"
            ],
            [
              "Convergent",
              "Rays move toward a common region",
              "After suitable convex-lens focusing"
            ],
            [
              "Divergent",
              "Rays spread apart",
              "Light from a point source / after concave lens"
            ]
          ]
        }
      ]
    },
    {
      "title": "Reflection of Light",
      "blocks": [
        {
          "type": "definition",
          "title": "Reflection",
          "text": "Reflection is the return of light into the original medium after it strikes a surface.",
          "color": "cyan"
        },
        {
          "type": "definition",
          "title": "Normal",
          "text": "The normal is an imaginary line perpendicular to the reflecting surface at the point of incidence.",
          "color": "green"
        },
        {
          "type": "definition",
          "title": "Angle of incidence",
          "text": "The angle between the incident ray and the normal.",
          "color": "blue"
        },
        {
          "type": "definition",
          "title": "Angle of reflection",
          "text": "The angle between the reflected ray and the normal.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Laws of reflection",
          "text": "The incident ray, reflected ray and normal lie in the same plane. The angle of reflection equals the angle of incidence.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Solved Example: angle of reflection",
          "text": "A ray has an angle of incidence of 42°. Find the angle of reflection.",
          "steps": [
            "Law: i = r.",
            "Given i = 42°.",
            "Therefore r = 42°."
          ],
          "answer": "42°",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Solved Example: angle with the mirror",
          "text": "An incident ray makes 30° with the mirror surface. Find its angle of incidence.",
          "steps": [
            "The normal is 90° to the surface.",
            "Angle with normal = 90° − 30°.",
            "Therefore i = 60°."
          ],
          "answer": "60°",
          "color": "green"
        }
      ]
    },
    {
      "title": "Regular and Diffuse Reflection",
      "blocks": [
        {
          "type": "concept",
          "title": "Regular reflection",
          "text": "A smooth surface can reflect parallel incident rays in an orderly manner, making a clear image possible.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Diffuse reflection",
          "text": "A rough surface has microscopic irregularities that send reflected light in many directions. Each local reflection still follows the law of reflection.",
          "color": "purple"
        },
        {
          "type": "table",
          "title": "Comparison",
          "color": "cyan",
          "rows": [
            [
              "Feature",
              "Regular",
              "Diffuse"
            ],
            [
              "Surface",
              "Smooth",
              "Microscopically rough"
            ],
            [
              "Image",
              "Sharp image possible",
              "Sharp image generally absent"
            ],
            [
              "Reflection law",
              "Obeyed",
              "Obeyed locally"
            ]
          ]
        },
        {
          "type": "concept",
          "title": "Why a wall is visible",
          "text": "Diffuse reflection sends light toward many observers, so the wall can be seen from different positions even though it does not behave like a plane mirror.",
          "color": "green"
        }
      ]
    },
    {
      "title": "Plane Mirrors",
      "blocks": [
        {
          "type": "definition",
          "title": "Plane mirror",
          "text": "A mirror with a flat reflecting surface.",
          "color": "cyan"
        },
        {
          "type": "figure",
          "title": "Plane mirror image formation",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Plane mirror image</text><line x1=\"500\" y1=\"80\" x2=\"500\" y2=\"450\" stroke=\"#334155\" stroke-width=\"9\"/><line x1=\"280\" y1=\"400\" x2=\"280\" y2=\"220\" stroke=\"#dc2626\" stroke-width=\"12\"/><path d=\"M280 220l-18 28h36z\" fill=\"#dc2626\"/><line x1=\"720\" y1=\"400\" x2=\"720\" y2=\"220\" stroke=\"#7c3aed\" stroke-width=\"10\" stroke-dasharray=\"8 7\"/><path d=\"M720 220l-18 28h36z\" fill=\"#7c3aed\"/><line x1=\"280\" y1=\"410\" x2=\"720\" y2=\"410\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"9 8\"/><text x=\"230\" y=\"445\" font-family=\"Arial\" font-size=\"18\">object</text><text x=\"650\" y=\"445\" font-family=\"Arial\" font-size=\"18\">virtual image</text></svg>",
          "caption": "Original self-created ray-based figure."
        },
        {
          "type": "concept",
          "title": "Image characteristics",
          "text": "A plane-mirror image is virtual, upright, the same size as the object and laterally inverted. Its distance behind the mirror equals the object's distance in front.",
          "color": "blue"
        },
        {
          "type": "example",
          "title": "Solved Example: image distance",
          "text": "An object is 1.8 m in front of a plane mirror. Where is the image?",
          "steps": [
            "For a plane mirror, image distance equals object distance.",
            "So the image is 1.8 m behind the mirror."
          ],
          "answer": "1.8 m behind the mirror",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Solved Example: object-image separation",
          "text": "An object is 75 cm from a plane mirror. Find the object-image separation.",
          "steps": [
            "Image is 75 cm behind the mirror.",
            "Object and image are on opposite sides.",
            "Separation = 75 + 75 = 150 cm."
          ],
          "answer": "150 cm",
          "color": "green"
        }
      ]
    },
    {
      "title": "Lateral Inversion and Multiple Reflection",
      "blocks": [
        {
          "type": "definition",
          "title": "Lateral inversion",
          "text": "The apparent left-right reversal in a plane-mirror image.",
          "color": "cyan"
        },
        {
          "type": "concept",
          "title": "Ambulance lettering",
          "text": "AMBULANCE is commonly printed laterally reversed on the front so drivers can recognise it correctly in their rear-view mirrors.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "Multiple reflection",
          "text": "Light can undergo successive reflections from more than one mirror. The resulting change in direction is used in devices such as periscopes and some optical instruments.",
          "color": "blue"
        },
        {
          "type": "activity",
          "title": "Activity: simple periscope",
          "color": "purple",
          "steps": [
            "Use two small plane mirrors and a cardboard tube/box arrangement.",
            "Mount the mirrors approximately at 45° to the tube, facing one another.",
            "Leave openings for incoming light and viewing.",
            "Align the mirrors until an object outside the direct line of sight becomes visible.",
            "Never point the device toward the Sun."
          ],
          "conclusion": "Two reflections can redirect light from above or around an obstacle into the observer's eye."
        }
      ]
    },
    {
      "title": "Spherical Mirrors",
      "blocks": [
        {
          "type": "definition",
          "title": "Spherical mirror",
          "text": "A reflecting surface forming part of a sphere.",
          "color": "cyan"
        },
        {
          "type": "concept",
          "title": "Concave mirror",
          "text": "Its reflecting surface is on the inner side of the spherical surface. It generally converges rays close to the principal axis.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Convex mirror",
          "text": "Its reflecting surface is on the outer side. It generally diverges rays and provides a wide field of view.",
          "color": "green"
        },
        {
          "type": "figure",
          "title": "Concave mirror principal rays",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Concave mirror principal rays</text><path d=\"M650 100Q500 260 650 420\" fill=\"none\" stroke=\"#334155\" stroke-width=\"12\"/><line x1=\"100\" y1=\"260\" x2=\"870\" y2=\"260\" stroke=\"#64748b\" stroke-width=\"3\" marker-end=\"url(#a)\"/><circle cx=\"410\" cy=\"260\" r=\"8\" fill=\"#dc2626\"/><circle cx=\"300\" cy=\"260\" r=\"8\" fill=\"#dc2626\"/><text x=\"395\" y=\"300\" font-family=\"Arial\" font-size=\"18\">F</text><text x=\"290\" y=\"300\" font-family=\"Arial\" font-size=\"18\">C</text><line x1=\"200\" y1=\"260\" x2=\"200\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"10\"/><path d=\"M200 170l-15 22h30z\" fill=\"#dc2626\"/><line x1=\"200\" y1=\"170\" x2=\"650\" y2=\"170\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"650\" y1=\"170\" x2=\"410\" y2=\"260\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/></svg>",
          "caption": "Original self-created scientific vector figure."
        },
        {
          "type": "figure",
          "title": "Convex mirror",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Convex mirror</text><path d=\"M430 100Q570 260 430 420\" fill=\"none\" stroke=\"#334155\" stroke-width=\"12\"/><line x1=\"100\" y1=\"260\" x2=\"880\" y2=\"260\" stroke=\"#64748b\" stroke-width=\"3\"/><line x1=\"160\" y1=\"180\" x2=\"430\" y2=\"180\" stroke=\"#dc2626\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"430\" y1=\"180\" x2=\"790\" y2=\"90\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"430\" y1=\"180\" x2=\"260\" y2=\"260\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"8 8\"/><circle cx=\"260\" cy=\"260\" r=\"8\" fill=\"#7c3aed\"/><text x=\"245\" y=\"300\" font-family=\"Arial\" font-size=\"18\">F</text></svg>",
          "caption": "Original self-created scientific vector figure."
        },
        {
          "type": "table",
          "title": "Concave vs convex",
          "color": "cyan",
          "rows": [
            [
              "Property",
              "Concave mirror",
              "Convex mirror"
            ],
            [
              "Effect on parallel rays",
              "Converges",
              "Diverges"
            ],
            [
              "Focus",
              "Real for ideal principal rays",
              "Virtual/apparent"
            ],
            [
              "Typical image for real object",
              "Varies with position",
              "Virtual, upright, diminished"
            ],
            [
              "Use",
              "Headlights, close-up viewing",
              "Vehicle rear-view/security"
            ]
          ]
        }
      ]
    },
    {
      "title": "Parts of a Spherical Mirror",
      "blocks": [
        {
          "type": "concept",
          "title": "Pole (P)",
          "text": "The geometric centre of the reflecting surface.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Centre of curvature (C)",
          "text": "The centre of the sphere of which the mirror is a part.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "Radius of curvature (R)",
          "text": "Distance from P to C.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Principal axis",
          "text": "The straight line passing through P and C.",
          "color": "orange"
        },
        {
          "type": "concept",
          "title": "Principal focus (F)",
          "text": "The point where rays parallel and close to the principal axis meet after reflection from a concave mirror, or appear to originate from behind a convex mirror.",
          "color": "cyan"
        },
        {
          "type": "concept",
          "title": "Focal length (f)",
          "text": "Distance between the pole and principal focus. For a spherical mirror under the paraxial approximation, f ≈ R/2.",
          "color": "blue"
        },
        {
          "type": "example",
          "title": "Solved Example: focal length",
          "text": "A spherical mirror has R = 50 cm. Estimate f.",
          "steps": [
            "Use f ≈ R/2.",
            "f ≈ 50/2 = 25 cm."
          ],
          "answer": "25 cm",
          "color": "orange"
        }
      ]
    },
    {
      "title": "Image Formation by Concave Mirror",
      "blocks": [
        {
          "type": "table",
          "title": "Object-position cases",
          "color": "cyan",
          "rows": [
            [
              "Object position",
              "Image position",
              "Nature",
              "Size"
            ],
            [
              "Beyond C",
              "Between C and F",
              "Real, inverted",
              "Diminished"
            ],
            [
              "At C",
              "At C",
              "Real, inverted",
              "Same"
            ],
            [
              "Between C and F",
              "Beyond C",
              "Real, inverted",
              "Enlarged"
            ],
            [
              "At F",
              "Very far away",
              "Real/in ideal model",
              "Very large"
            ],
            [
              "Between F and P",
              "Behind mirror",
              "Virtual, upright",
              "Enlarged"
            ]
          ]
        },
        {
          "type": "concept",
          "title": "Ray rules",
          "text": "A ray parallel to the principal axis reflects through F for a concave mirror. A ray directed through F reflects approximately parallel to the axis. A ray through C retraces its path in the ideal spherical approximation.",
          "color": "blue"
        },
        {
          "type": "example",
          "title": "Solved reasoning",
          "text": "An object is between F and C of a concave mirror. Describe its image.",
          "steps": [
            "The object is outside F but inside C.",
            "The reflected rays can meet in front of the mirror.",
            "The image is real and inverted.",
            "For this position it is enlarged and lies beyond C."
          ],
          "answer": "Real, inverted, enlarged; formed beyond C.",
          "color": "purple"
        }
      ]
    },
    {
      "title": "Uses of Mirrors",
      "blocks": [
        {
          "type": "application",
          "title": "Concave mirror",
          "text": "Useful when convergence or magnification is required: some shaving/makeup mirrors, dental examination mirrors, headlights and searchlights, and solar-concentrating arrangements.",
          "color": "green"
        },
        {
          "type": "application",
          "title": "Convex mirror",
          "text": "Useful where a wide field of view is more important than image size, especially vehicle rear-view mirrors and security observation.",
          "color": "blue"
        },
        {
          "type": "application",
          "title": "Plane mirror",
          "text": "Useful for ordinary viewing, alignment, optical experiments and multiple-reflection devices.",
          "color": "purple"
        }
      ]
    },
    {
      "title": "Refraction of Light",
      "blocks": [
        {
          "type": "definition",
          "title": "Refraction",
          "text": "The change in direction of light as it passes obliquely from one transparent medium to another because its speed changes.",
          "color": "cyan"
        },
        {
          "type": "concept",
          "title": "Bending toward the normal",
          "text": "When light enters a medium in which it travels more slowly, an obliquely incident ray generally bends toward the normal.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Bending away from the normal",
          "text": "When light enters a medium in which it travels faster, an obliquely incident ray generally bends away from the normal.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "Normal incidence",
          "text": "If the ray enters along the normal, its direction does not bend at the boundary, although its speed changes.",
          "color": "purple"
        },
        {
          "type": "example",
          "title": "Solved reasoning: coin in water",
          "text": "A coin at the bottom of a container can appear raised when viewed through water. Why?",
          "steps": [
            "Light from the coin travels from water to air.",
            "Refraction changes the direction of the rays.",
            "The eye traces them backward in straight lines.",
            "The coin therefore appears at a different, apparently shallower position."
          ],
          "answer": "Refraction causes the apparent upward displacement.",
          "color": "orange"
        }
      ]
    },
    {
      "title": "Lenses",
      "blocks": [
        {
          "type": "definition",
          "title": "Lens",
          "text": "A transparent optical element with curved surfaces that refracts light.",
          "color": "cyan"
        },
        {
          "type": "figure",
          "title": "Convex and concave lenses",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Convex and concave lenses</text><path d=\"M260 100Q350 260 260 420Q170 260 260 100Z\" fill=\"#bfe8ff\" stroke=\"#2563eb\" stroke-width=\"6\"/><path d=\"M740 100Q650 260 740 420Q830 260 740 100Z\" fill=\"#dbeafe\" stroke=\"#7c3aed\" stroke-width=\"6\"/><text x=\"260\" y=\"470\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"20\" font-weight=\"700\">Convex — converging</text><text x=\"740\" y=\"470\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"20\" font-weight=\"700\">Concave — diverging</text></svg>",
          "caption": "Original self-created scientific vector figure."
        },
        {
          "type": "concept",
          "title": "Convex lens",
          "text": "Thicker at the centre than at the edges. In air it generally converges parallel rays.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Concave lens",
          "text": "Thinner at the centre than at the edges. In air it generally diverges parallel rays.",
          "color": "purple"
        },
        {
          "type": "table",
          "title": "Lens comparison",
          "color": "cyan",
          "rows": [
            [
              "Property",
              "Convex",
              "Concave"
            ],
            [
              "Centre",
              "Thicker",
              "Thinner"
            ],
            [
              "Parallel rays",
              "Converge",
              "Diverge"
            ],
            [
              "Focus",
              "Real principal focus",
              "Virtual/apparent focus"
            ],
            [
              "Example use",
              "Magnifier, camera, projector",
              "Myopia correction"
            ]
          ]
        }
      ]
    },
    {
      "title": "Principal Focus and Optical Centre",
      "blocks": [
        {
          "type": "concept",
          "title": "Optical centre",
          "text": "In the thin-lens model, a ray through the optical centre travels approximately undeviated.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Principal focus",
          "text": "Parallel rays to the principal axis converge at F for a convex lens, while a concave lens makes them diverge as though they came from a focus on the incident side.",
          "color": "green"
        },
        {
          "type": "figure",
          "title": "Convex lens focusing parallel rays",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Convex lens focusing</text><path d=\"M500 90Q590 260 500 430Q410 260 500 90Z\" fill=\"#bfe8ff\" stroke=\"#2563eb\" stroke-width=\"6\"/><line x1=\"80\" y1=\"160\" x2=\"500\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"80\" y1=\"260\" x2=\"500\" y2=\"260\" stroke=\"#dc2626\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"80\" y1=\"360\" x2=\"500\" y2=\"360\" stroke=\"#dc2626\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"160\" x2=\"760\" y2=\"260\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"260\" x2=\"760\" y2=\"260\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"360\" x2=\"760\" y2=\"260\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/><circle cx=\"760\" cy=\"260\" r=\"9\" fill=\"#dc2626\"/><text x=\"775\" y=\"295\" font-family=\"Arial\" font-size=\"18\">F</text></svg>",
          "caption": "Original self-created scientific vector figure."
        },
        {
          "type": "figure",
          "title": "Concave lens diverging rays",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Concave lens diverging</text><path d=\"M500 90Q410 260 500 430Q590 260 500 90Z\" fill=\"#dbeafe\" stroke=\"#7c3aed\" stroke-width=\"6\"/><line x1=\"80\" y1=\"160\" x2=\"500\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"80\" y1=\"260\" x2=\"500\" y2=\"260\" stroke=\"#dc2626\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"80\" y1=\"360\" x2=\"500\" y2=\"360\" stroke=\"#dc2626\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"160\" x2=\"850\" y2=\"80\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"260\" x2=\"850\" y2=\"260\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/><line x1=\"500\" y1=\"360\" x2=\"850\" y2=\"440\" stroke=\"#2563eb\" stroke-width=\"5\" marker-end=\"url(#a)\"/></svg>",
          "caption": "Original self-created scientific vector figure."
        }
      ]
    },
    {
      "title": "Image Formation by Convex Lens",
      "blocks": [
        {
          "type": "table",
          "title": "Convex lens cases",
          "color": "cyan",
          "rows": [
            [
              "Object position",
              "Image position",
              "Nature",
              "Size"
            ],
            [
              "Beyond 2F",
              "Between F and 2F",
              "Real, inverted",
              "Diminished"
            ],
            [
              "At 2F",
              "At 2F",
              "Real, inverted",
              "Same"
            ],
            [
              "Between F and 2F",
              "Beyond 2F",
              "Real, inverted",
              "Enlarged"
            ],
            [
              "At F",
              "Very far away",
              "Idealised distant image",
              "Very large"
            ],
            [
              "Inside F",
              "Same side as object",
              "Virtual, upright",
              "Enlarged"
            ]
          ]
        },
        {
          "type": "concept",
          "title": "Three useful rays",
          "text": "A ray parallel to the principal axis refracts through the far focus. A ray through the optical centre is approximately undeviated. A ray through the near focus emerges approximately parallel to the principal axis.",
          "color": "blue"
        },
        {
          "type": "example",
          "title": "Solved Example",
          "text": "A convex lens has focal length 12 cm. An object is at 30 cm, beyond 2F. What are the general image characteristics?",
          "steps": [
            "2F = 24 cm.",
            "Object distance 30 cm is beyond 2F.",
            "For an object beyond 2F, the image forms between F and 2F.",
            "It is real, inverted and diminished."
          ],
          "answer": "Real, inverted and diminished, between F and 2F.",
          "color": "orange"
        }
      ]
    },
    {
      "title": "Concave Lens",
      "blocks": [
        {
          "type": "concept",
          "title": "General image formation",
          "text": "For a real object, a concave lens normally forms a virtual, upright and diminished image between the optical centre and its virtual focus on the object side.",
          "color": "blue"
        },
        {
          "type": "example",
          "title": "Solved reasoning: myopia",
          "text": "Why is a concave lens used to correct myopia?",
          "steps": [
            "In myopia, distant-object rays tend to focus in front of the retina.",
            "A concave lens diverges the rays before they enter the eye.",
            "The combined optical system then shifts the focus toward the retina."
          ],
          "answer": "A concave lens provides the required divergence.",
          "color": "green"
        }
      ]
    },
    {
      "title": "Human Eye",
      "blocks": [
        {
          "type": "figure",
          "title": "Human eye optical path",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 520\"><defs><marker id=\"a\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"6\" orient=\"auto\"><path d=\"M0 0L12 6L0 12Z\" fill=\"#334155\"/></marker></defs><rect width=\"1000\" height=\"520\" rx=\"25\" fill=\"#f3f8ff\"/><text x=\"500\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\">Human eye optical path</text><path d=\"M160 260Q280 100 500 100Q720 100 840 260Q720 420 500 420Q280 420 160 260Z\" fill=\"white\" stroke=\"#334155\" stroke-width=\"6\"/><circle cx=\"295\" cy=\"260\" r=\"60\" fill=\"#dff3ff\" stroke=\"#2563eb\" stroke-width=\"5\"/><circle cx=\"295\" cy=\"260\" r=\"20\" fill=\"#334155\"/><path d=\"M360 190Q430 260 360 330\" fill=\"#bfe8ff\" stroke=\"#2563eb\" stroke-width=\"5\"/><path d=\"M700 150Q620 260 700 370\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"8\"/><line x1=\"30\" y1=\"260\" x2=\"240\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"5\" marker-end=\"url(#a)\"/><text x=\"205\" y=\"155\" font-family=\"Arial\" font-size=\"18\">cornea / pupil</text><text x=\"365\" y=\"175\" font-family=\"Arial\" font-size=\"18\">lens</text><text x=\"710\" y=\"140\" font-family=\"Arial\" font-size=\"18\">retina</text></svg>",
          "caption": "Original self-created simplified scientific illustration."
        },
        {
          "type": "concept",
          "title": "Cornea and pupil",
          "text": "The cornea provides much of the eye's initial focusing power. The pupil is the opening through which light enters; the iris controls its size.",
          "color": "blue"
        },
        {
          "type": "concept",
          "title": "Eye lens and accommodation",
          "text": "The eye lens changes its curvature under the action of ciliary muscles, allowing the eye to focus objects at different distances.",
          "color": "purple"
        },
        {
          "type": "concept",
          "title": "Retina",
          "text": "The retina contains light-sensitive cells. The focused optical image is formed on the retina, where signals are generated and transmitted through the visual pathway.",
          "color": "green"
        },
        {
          "type": "concept",
          "title": "Near point",
          "text": "For a typical normal young eye, the near point is conventionally taken as about 25 cm, though it varies among individuals and with age.",
          "color": "orange"
        }
      ]
    },
    {
      "title": "Optical Instruments",
      "blocks": [
        {
          "type": "application",
          "title": "Magnifying glass",
          "text": "A convex lens used with an object inside its focal length gives a virtual, upright and enlarged image.",
          "color": "green"
        },
        {
          "type": "application",
          "title": "Camera",
          "text": "A camera lens system forms a real image on a photosensitive sensor. Focusing adjusts the optical geometry so the image is sharp on the sensor.",
          "color": "blue"
        },
        {
          "type": "application",
          "title": "Projector",
          "text": "A lens system forms a magnified real image on a screen when the object is positioned appropriately.",
          "color": "purple"
        },
        {
          "type": "application",
          "title": "Microscope and telescope",
          "text": "Combinations of lenses can magnify tiny nearby objects or provide enlarged views of distant objects. Their full operation involves multiple stages of image formation.",
          "color": "orange"
        }
      ]
    },
    {
      "title": "Many Solved Examples",
      "blocks": [
        {
          "type": "example",
          "title": "Example 1: plane mirror",
          "text": "An object is 2.4 m from a plane mirror. Find image distance and object-image separation.",
          "steps": [
            "Image distance = 2.4 m.",
            "Separation = 2.4 + 2.4 = 4.8 m."
          ],
          "answer": "Image: 2.4 m behind mirror; separation: 4.8 m.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Example 2: reflection angle",
          "text": "A ray makes 70° with the normal. Find r.",
          "steps": [
            "i = 70°.",
            "By the law of reflection, r = i."
          ],
          "answer": "70°",
          "color": "green"
        },
        {
          "type": "example",
          "title": "Example 3: ray at mirror surface",
          "text": "A ray makes 18° with the mirror. Find its angle of incidence.",
          "steps": [
            "Normal is 90° to mirror.",
            "i = 90° − 18° = 72°."
          ],
          "answer": "72°",
          "color": "purple"
        },
        {
          "type": "example",
          "title": "Example 4: spherical mirror",
          "text": "R = 80 cm. Estimate focal length.",
          "steps": [
            "f ≈ R/2.",
            "f ≈ 80/2 = 40 cm."
          ],
          "answer": "40 cm",
          "color": "blue"
        },
        {
          "type": "example",
          "title": "Example 5: concave mirror position",
          "text": "Object lies beyond C. What image forms?",
          "steps": [
            "Use the standard concave-mirror case.",
            "Image forms between C and F.",
            "It is real, inverted and diminished."
          ],
          "answer": "Real, inverted, diminished; between C and F.",
          "color": "orange"
        },
        {
          "type": "example",
          "title": "Example 6: convex lens",
          "text": "Object is inside F of a convex lens. State image characteristics.",
          "steps": [
            "Object is closer to lens than focal length.",
            "Emergent rays diverge.",
            "Backward extensions meet on the object side.",
            "Image is virtual, upright and enlarged."
          ],
          "answer": "Virtual, upright and enlarged.",
          "color": "green"
        },
        {
          "type": "example",
          "title": "Example 7: identify lens",
          "text": "A lens is thin at the centre and thick at the edges. Identify it.",
          "steps": [
            "This shape is concave.",
            "A concave lens diverges parallel rays."
          ],
          "answer": "Concave lens; diverging lens.",
          "color": "purple"
        },
        {
          "type": "example",
          "title": "Example 8: refraction",
          "text": "Why does a straw partly immersed in water look displaced?",
          "steps": [
            "Light from the underwater part refracts at the water-air boundary.",
            "The eye traces the refracted rays backward.",
            "The underwater part appears shifted."
          ],
          "answer": "Because of refraction.",
          "color": "blue"
        }
      ]
    },
    {
      "title": "Think & Understand",
      "blocks": [
        {
          "type": "questions",
          "title": "Conceptual Questions",
          "color": "purple",
          "questions": [
            {
              "question": "Why are angles of incidence and reflection measured from the normal?",
              "answer": "The normal provides a consistent perpendicular reference at the point of incidence and is the reference used by the law of reflection."
            },
            {
              "question": "Why does a convex mirror show more area than a plane mirror of similar size?",
              "answer": "It produces diverging reflected rays and diminished images, giving a wider field of view."
            },
            {
              "question": "Why can a convex lens form both real and virtual images?",
              "answer": "The object position relative to the focal point determines whether refracted rays actually converge or only appear to diverge from a virtual image."
            },
            {
              "question": "Why does a concave lens usually produce a diminished image for a real object?",
              "answer": "Its refracted rays diverge and their backward extensions meet closer to the lens, producing a virtual diminished image."
            },
            {
              "question": "Why is diffuse reflection useful for seeing ordinary objects?",
              "answer": "It distributes reflected light in many directions, allowing light from an object to reach observers at different positions."
            }
          ]
        }
      ]
    },
    {
      "title": "Common Mistakes",
      "blocks": [
        {
          "type": "warning",
          "title": "Mistake: angles measured from mirror",
          "text": "Always measure i and r from the normal, not from the mirror surface.",
          "color": "red"
        },
        {
          "type": "warning",
          "title": "Mistake: convex mirror gives enlarged image",
          "text": "For an ordinary real object, a convex mirror forms an upright, virtual and diminished image.",
          "color": "red"
        },
        {
          "type": "warning",
          "title": "Mistake: plane-mirror image is real",
          "text": "A plane-mirror image is virtual and cannot normally be caught on a screen behind the mirror.",
          "color": "red"
        },
        {
          "type": "warning",
          "title": "Mistake: concave lens converges",
          "text": "A concave lens generally diverges parallel rays in air.",
          "color": "red"
        },
        {
          "type": "warning",
          "title": "Mistake: every convex-lens image is inverted",
          "text": "A convex lens forms a virtual upright enlarged image when the object is inside F.",
          "color": "red"
        }
      ]
    },
    {
      "title": "Exam Zone",
      "blocks": [
        {
          "type": "exam",
          "title": "Very Short Answer",
          "color": "cyan",
          "questions": [
            {
              "question": "State the law relating angles i and r.",
              "answer": "Angle of reflection equals angle of incidence."
            },
            {
              "question": "Which mirror is used for a wide field of view?",
              "answer": "Convex mirror."
            },
            {
              "question": "Which lens is a converging lens?",
              "answer": "Convex lens."
            },
            {
              "question": "What is lateral inversion?",
              "answer": "The apparent left-right reversal in a plane-mirror image."
            }
          ]
        },
        {
          "type": "exam",
          "title": "Short Answer",
          "color": "green",
          "questions": [
            {
              "question": "Differentiate between regular and diffuse reflection.",
              "answer": "Regular reflection from a smooth surface is orderly and can form a clear image; diffuse reflection from a microscopically rough surface spreads light in many directions, so a sharp image is generally not formed."
            },
            {
              "question": "Give four characteristics of a plane-mirror image.",
              "answer": "Virtual, upright, same size and laterally inverted; it is also as far behind the mirror as the object is in front."
            },
            {
              "question": "What is refraction?",
              "answer": "Change in direction of light as it passes between transparent media because its speed changes."
            }
          ]
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "color": "purple",
          "questions": [
            {
              "question": "Explain the image formation cases of a convex lens.",
              "answer": "Beyond 2F: real, inverted, diminished between F and 2F. At 2F: real, inverted and same size at 2F. Between F and 2F: real, inverted and enlarged beyond 2F. At F: rays emerge approximately parallel. Inside F: virtual, upright and enlarged image on the object side."
            },
            {
              "question": "Explain the working principle of a simple periscope.",
              "answer": "Light from the object strikes the upper plane mirror and is reflected down the tube. It then strikes the lower plane mirror and is reflected toward the observer's eye. Two reflections redirect light so an object outside the direct line of sight can be observed."
            }
          ]
        }
      ]
    },
    {
      "title": "Challenge Zone",
      "blocks": [
        {
          "type": "challenge",
          "title": "HOTS",
          "color": "red",
          "questions": [
            {
              "question": "An incident ray makes 35° with the mirror surface. What angle is between the incident and reflected rays?",
              "answer": "Angle of incidence = 90° − 35° = 55°. The angle between incident and reflected rays is 2i = 110°."
            },
            {
              "question": "Why can a camera not use a simple plane mirror as its main focusing element?",
              "answer": "A plane mirror only redirects light and does not provide the converging power required to focus rays onto a sensor."
            },
            {
              "question": "Why does moving an object inside the focal length of a convex lens change a real-image setup into a virtual magnifier?",
              "answer": "Inside F, the refracted rays no longer converge on the far side; their backward extensions appear to meet on the object side, producing a virtual enlarged image."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter Revision",
      "blocks": [
        {
          "type": "summary",
          "title": "Complete Chapter Summary",
          "text": "Reflection sends light back into its original medium and obeys the laws of reflection. Plane mirrors form virtual, upright, same-size and laterally inverted images. Concave and convex spherical mirrors have different effects on rays and different image-formation patterns. Refraction occurs when light crosses between transparent media and its speed changes, producing a directional change for oblique incidence. Convex lenses generally converge light and concave lenses diverge it. Object position determines whether a lens produces a real or virtual, enlarged or diminished image. The human eye uses a lens system to focus light on the retina. Cameras, projectors, magnifiers, spectacles, periscopes, microscopes and telescopes apply these optical principles.",
          "color": "purple"
        },
        {
          "type": "table",
          "title": "One-glance revision",
          "color": "cyan",
          "rows": [
            [
              "Concept",
              "Key fact"
            ],
            [
              "Reflection",
              "i = r"
            ],
            [
              "Plane mirror",
              "Virtual, upright, same size, laterally inverted"
            ],
            [
              "Concave mirror",
              "Converging"
            ],
            [
              "Convex mirror",
              "Diverging; wide field"
            ],
            [
              "Refraction",
              "Direction changes because speed changes between media"
            ],
            [
              "Convex lens",
              "Converging"
            ],
            [
              "Concave lens",
              "Diverging"
            ],
            [
              "Magnifier",
              "Convex lens; object inside F"
            ],
            [
              "Camera",
              "Real image on sensor"
            ],
            [
              "Eye",
              "Focuses light on retina"
            ]
          ]
        },
        {
          "type": "keyTerms",
          "title": "Key Terms",
          "color": "yellow",
          "terms": [
            [
              "Reflection",
              "Return of light into original medium."
            ],
            [
              "Normal",
              "Perpendicular reference at incidence point."
            ],
            [
              "Lateral inversion",
              "Sideways reversal in plane mirror."
            ],
            [
              "Concave mirror",
              "Spherical converging mirror."
            ],
            [
              "Convex mirror",
              "Spherical diverging mirror."
            ],
            [
              "Focus",
              "Point associated with convergence or apparent origin of principal rays."
            ],
            [
              "Refraction",
              "Change in direction due to change in speed across media."
            ],
            [
              "Convex lens",
              "Converging lens in air."
            ],
            [
              "Concave lens",
              "Diverging lens in air."
            ],
            [
              "Focal length",
              "Distance from pole/optical centre to principal focus in the relevant model."
            ],
            [
              "Virtual image",
              "Image formed by apparent intersection of rays or extensions."
            ]
          ]
        }
      ]
    }
  ],
  "importantPoints": [
    "i = r for reflection.",
    "Angles are measured from the normal.",
    "Plane mirrors form virtual, upright, same-size, laterally inverted images.",
    "Concave mirrors generally converge parallel rays.",
    "Convex mirrors generally diverge parallel rays and provide a wide field of view.",
    "Refraction involves a change in light speed and direction across media.",
    "Convex lenses generally converge parallel rays.",
    "Concave lenses generally diverge parallel rays.",
    "Object position determines image characteristics.",
    "A magnifying glass uses a convex lens with the object inside F."
  ],
  "keyTerms": [
    [
      "Reflection",
      "Return of light into original medium."
    ],
    [
      "Refraction",
      "Change in direction on crossing optical media."
    ],
    [
      "Plane mirror",
      "Flat reflecting surface."
    ],
    [
      "Concave mirror",
      "Converging spherical mirror."
    ],
    [
      "Convex mirror",
      "Diverging spherical mirror."
    ],
    [
      "Convex lens",
      "Converging lens."
    ],
    [
      "Concave lens",
      "Diverging lens."
    ],
    [
      "Focal length",
      "Distance from pole/optical centre to focus."
    ],
    [
      "Virtual image",
      "Image not formed by actual meeting of rays on a screen."
    ]
  ]
};
