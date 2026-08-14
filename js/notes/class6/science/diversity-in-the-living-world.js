
"use strict";

window.ChapterData = {
  id: "class6-science-diversity-in-the-living-world",
  class: "6",
  subject: "Science",
  chapterNumber: 2,
  title: "Diversity in the Living World",
  description: "Explore the amazing variety of plants, animals and microorganisms around us and understand how scientists group living organisms.",
  estimatedReadingTime: "40–50 minutes",
  difficulty: "Beginner",

  summary: "Earth is home to millions of living organisms. They differ in size, shape, habitat, food habits and behaviour. Scientists study similarities and differences among organisms and classify them into groups. Biodiversity helps maintain balance in nature and supports life on Earth.",

  sections: [
    {
      id: "meaning-of-diversity",
      title: "1. What is Diversity?",
      blocks: [
        {type:"paragraph", text:"Diversity means variety. The living world contains many different kinds of organisms. Some are large like elephants, while others are microscopic."},
        {type:"definition", title:"Biodiversity", text:"The variety of living organisms found in a region or on Earth."},
        {type:"example", title:"Examples", text:"Trees, grasses, insects, birds, fish, fungi and bacteria are all part of biodiversity."},
        {type:"fact", title:"Amazing Fact", text:"Scientists have identified millions of species, and many more may still be undiscovered."}
      ]
    },

    {
      id: "living-things-around-us",
      title: "2. Variety of Living Organisms",
      blocks: [
        {type:"paragraph", text:"Living organisms are found in forests, deserts, mountains, rivers, oceans, farms and even inside our homes."},
        {type:"example", title:"Different Sizes", text:"A banyan tree can grow huge, while bacteria can only be seen with a microscope."},
        {type:"application", title:"Observe Around You", text:"Make a list of living organisms you see daily and compare their similarities and differences."}
      ]
    },

    {
      id: "classification",
      title: "3. Why Do We Classify Organisms?",
      blocks: [
        {type:"paragraph", text:"Because there are so many organisms, scientists group them based on common characteristics. This process is called classification."},
        {type:"definition", title:"Classification", text:"The process of arranging organisms into groups according to similarities and differences."},
        {type:"example", title:"Simple Example", text:"Cats and tigers share many features, so they belong to related groups."},
        {type:"examTip", title:"Remember", text:"Classification helps scientists study and identify organisms more easily."}
      ]
    },

    {
      id: "plants",
      title: "4. Diversity in Plants",
      blocks: [
        {type:"paragraph", text:"Plants differ in size, shape, habitat and life span. Some are herbs, some are shrubs and some are large trees."},
        {type:"definition", title:"Herb", text:"A small plant with a soft stem."},
        {type:"definition", title:"Shrub", text:"A medium-sized woody plant."},
        {type:"definition", title:"Tree", text:"A large plant with a strong woody trunk."},
        {type:"example", title:"Examples", text:"Mint is a herb, rose is a shrub and mango is a tree."}
      ]
    },

    {
      id: "animals",
      title: "5. Diversity in Animals",
      blocks: [
        {type:"paragraph", text:"Animals differ in body structure, movement, food habits and habitats."},
        {type:"example", title:"Food Habits", text:"Herbivores eat plants, carnivores eat animals and omnivores eat both."},
        {type:"application", title:"Animal Groups", text:"Birds fly, fish swim, reptiles crawl and mammals usually give birth to young ones."}
      ]
    },

    {
      id: "habitats",
      title: "6. Habitats and Adaptations",
      blocks: [
        {type:"paragraph", text:"A habitat is the natural home of an organism. Organisms have adaptations that help them survive in their habitats."},
        {type:"definition", title:"Habitat", text:"The place where an organism lives naturally."},
        {type:"definition", title:"Adaptation", text:"A feature that helps an organism survive in its environment."},
        {type:"example", title:"Examples", text:"Fish have gills for breathing in water, while camels are adapted to desert conditions."}
      ]
    },

    {
      id: "importance",
      title: "7. Importance of Biodiversity",
      blocks: [
        {type:"paragraph", text:"Biodiversity supports food chains, ecosystems and human life. It provides food, medicines, fuel and many useful resources."},
        {type:"fact", title:"Nature's Balance", text:"The loss of biodiversity can disturb ecological balance."},
        {type:"application", title:"Conservation", text:"Protecting forests, rivers and wildlife helps conserve biodiversity."}
      ]
    }
  ],

  importantPoints: [
    "Diversity means variety among living organisms.",
    "Biodiversity refers to the variety of life on Earth.",
    "Classification helps scientists study organisms systematically.",
    "Plants can be grouped into herbs, shrubs and trees.",
    "Animals differ in food habits, movement and habitats.",
    "Habitats provide suitable conditions for survival.",
    "Adaptations help organisms survive in their environment.",
    "Biodiversity is essential for ecological balance."
  ],

  keyTerms: [
    "Diversity",
    "Biodiversity",
    "Classification",
    "Habitat",
    "Adaptation",
    "Herb",
    "Shrub",
    "Tree",
    "Herbivore",
    "Carnivore",
    "Omnivore"
  ],

  experiments: [
    {
      id:"leaf-diversity-lab",
      title:"Leaf Diversity Explorer",
      badge:"Chapter-linked",
      icon:"🍃",
      goal:"Compare different leaf types.",
      question:"How do leaf size and shape vary among plants?",
      variables:["Leaf Type"],
      controls:[
        {id:"leaf",label:"Leaf Type",type:"select",options:["Mango","Neem","Banana"],values:["mango","neem","banana"]}
      ],
      calculate:function(v){
        return {
          headline:"Leaf observation complete",
          value:1,
          unit:"observation",
          explanation:"Different plants show different leaf sizes, shapes and vein patterns."
        };
      }
    },

    {
      id:"animal-habitat",
      title:"Animal Habitat Match",
      badge:"Chapter-linked",
      icon:"🦊",
      goal:"Study habitat suitability.",
      question:"Which habitat suits the selected animal?",
      variables:["Animal"],
      controls:[
        {id:"animal",label:"Animal",type:"select",options:["Camel","Fish","Polar Bear"],values:["camel","fish","polar"]}
      ],
      calculate:function(v){
        var habitat = v.animal==="camel"?"Desert":(v.animal==="fish"?"Water":"Polar Region");
        return {
          headline:"Suitable habitat: "+habitat,
          value:1,
          unit:"match",
          explanation:"Animals have adaptations suited to particular habitats."
        };
      }
    }
  ]
};
