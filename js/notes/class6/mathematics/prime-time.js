"use strict";

const ChapterData = {
  id: "class6-mathematics-prime-time",
  class: 6,
  subject: "Mathematics",
  chapterNumber: 5,
  title: "Prime Time",
  description: "Class 6 Mathematics Chapter 5 — Prime Time: factors, multiples, prime and composite numbers, divisibility, common factors and common multiples.",
  estimatedReadingTime: "40–50 minutes",
  difficulty: "Intermediate",
  summary: "Factors divide a number exactly, while multiples are produced by multiplying a number by whole numbers. Prime numbers have exactly two positive factors and composite numbers have more than two.",
  sections: [
    {id:"factors",title:"Factors of a Number",blocks:[
      {type:"paragraph",text:"A factor of a number divides that number exactly, leaving no remainder. Factors occur in pairs because multiplication can be used to build the original number."},
      {type:"definition",title:"Factor",text:"A factor of a number is a whole number that divides the number exactly."},
      {type:"example",title:"Example: Factors of 12",text:"The factor pairs of 12 are 1 × 12, 2 × 6 and 3 × 4. Therefore the factors are 1, 2, 3, 4, 6 and 12."},
      {type:"tip",title:"Quick Method",text:"Test whole numbers beginning with 1. Whenever division leaves remainder 0, both the divisor and quotient form a factor pair."}
    ]},
    {id:"multiples",title:"Multiples",blocks:[
      {type:"paragraph",text:"Multiples are obtained by multiplying a number by whole numbers such as 1, 2, 3, 4 and so on. A number has infinitely many positive multiples."},
      {type:"definition",title:"Multiple",text:"A multiple is the product obtained when a number is multiplied by a whole number."},
      {type:"example",title:"Multiples of 7",text:"The first few positive multiples of 7 are 7, 14, 21, 28, 35 and 42."},
      {type:"important",title:"Factor vs Multiple",text:"A non-zero number has only finitely many positive factors, but infinitely many positive multiples."}
    ]},
    {id:"relationship",title:"Factors and Multiples: The Connection",blocks:[
      {type:"paragraph",text:"If a × b = c, then a and b are factors of c, while c is a multiple of both a and b."},
      {type:"example",title:"Using 5 × 8 = 40",text:"5 and 8 are factors of 40. Also, 40 is a multiple of 5 and of 8."},
      {type:"application",title:"Remember the Direction",text:"It is correct to say '6 is a factor of 30' and '30 is a multiple of 6'."}
    ]},
    {id:"prime-composite",title:"Prime and Composite Numbers",blocks:[
      {type:"paragraph",text:"A number can have just two positive factors or more than two positive factors. This gives the classifications prime and composite."},
      {type:"definition",title:"Prime Number",text:"A prime number has exactly two positive factors: 1 and the number itself."},
      {type:"definition",title:"Composite Number",text:"A composite number has more than two positive factors."},
      {type:"example",title:"Examples",text:"2, 3, 5, 7 and 11 are prime. 4, 6, 8, 9, 10 and 12 are composite."},
      {type:"important",title:"Special Number 1",text:"1 is neither prime nor composite because it has only one positive factor."},
      {type:"tip",title:"Important Fact",text:"2 is the only even prime number. Every other even number greater than 2 is composite."}
    ]},
    {id:"prime-check",title:"Checking Whether a Number Is Prime",blocks:[
      {type:"paragraph",text:"To decide whether a number is prime, check whether it has any factor other than 1 and itself."},
      {type:"example",title:"Is 29 Prime?",text:"29 is not divisible by 2, 3, 4 or 5, so it is prime."},
      {type:"example",title:"Is 21 Prime?",text:"21 = 3 × 7, so it is composite."},
      {type:"warning",title:"Common Mistake",text:"Do not call a number prime just because it is odd. 9, 15 and 21 are odd but composite."}
    ]},
    {id:"divisibility",title:"Divisibility Rules",blocks:[
      {type:"paragraph",text:"Divisibility rules are quick tests for deciding whether a number is divisible by certain numbers."},
      {type:"example",title:"Divisibility by 2",text:"A whole number is divisible by 2 when its last digit is 0, 2, 4, 6 or 8."},
      {type:"example",title:"Divisibility by 5",text:"A whole number is divisible by 5 when its last digit is 0 or 5."},
      {type:"example",title:"Divisibility by 10",text:"A whole number is divisible by 10 when its last digit is 0."},
      {type:"example",title:"Divisibility by 3",text:"A number is divisible by 3 when the sum of its digits is divisible by 3. For 123, 1+2+3=6."},
      {type:"example",title:"Divisibility by 9",text:"A number is divisible by 9 when the sum of its digits is divisible by 9. For 729, the digit sum is 18."},
      {type:"example",title:"Divisibility by 4",text:"A number is divisible by 4 when the number formed by its last two digits is divisible by 4. For 316, check 16."}
    ]},
    {id:"common-factors",title:"Common Factors",blocks:[
      {type:"paragraph",text:"A factor that divides each of two or more numbers exactly is called a common factor."},
      {type:"definition",title:"Common Factor",text:"A common factor is a number that is a factor of every number in the given group."},
      {type:"example",title:"Common Factors of 12 and 18",text:"Their common factors are 1, 2, 3 and 6."},
      {type:"important",title:"Greatest Common Factor",text:"The greatest common factor is the largest factor shared by the given numbers. For 12 and 18 it is 6."}
    ]},
    {id:"common-multiples",title:"Common Multiples",blocks:[
      {type:"paragraph",text:"A number that is a multiple of two or more numbers is called a common multiple."},
      {type:"definition",title:"Common Multiple",text:"A common multiple is a number that is a multiple of every number in the given group."},
      {type:"example",title:"Common Multiples of 4 and 6",text:"12, 24, 36 and so on are common multiples of 4 and 6."},
      {type:"important",title:"Least Common Multiple",text:"The least common multiple is the smallest positive common multiple. For 4 and 6 it is 12."}
    ]},
    {id:"prime-factors",title:"Building Numbers from Prime Factors",blocks:[
      {type:"paragraph",text:"Composite numbers can be broken into products of smaller factors until only prime factors remain."},
      {type:"example",title:"Breaking 60",text:"60 = 2 × 2 × 3 × 5. Thus its prime factors are 2, 2, 3 and 5."},
      {type:"application",title:"Why Prime Factors Matter",text:"Prime factors help compare numbers and solve common-factor and common-multiple problems systematically."}
    ]},
    {id:"patterns",title:"Number Properties and Patterns",blocks:[
      {type:"paragraph",text:"Factors and multiples reveal patterns. Multiples of 2 are even, multiples of 5 end in 0 or 5, and multiples of 10 end in 0."},
      {type:"example",title:"A Pattern in Multiples",text:"6, 12, 18, 24 and 30 increase by 6 each time because consecutive multiples differ by the original number."}
    ]},
    {id:"real-life",title:"Prime Time in Real Life",blocks:[
      {type:"paragraph",text:"Factors and multiples appear in scheduling, grouping, packaging, games and repeated events."},
      {type:"example",title:"Repeated Events",text:"If one event happens every 4 days and another every 6 days, common multiples identify days when both happen together."},
      {type:"example",title:"Equal Groups",text:"Common factors can help determine possible equal group sizes without leftovers."}
    ]},
    {id:"summary",title:"Chapter Summary",blocks:[
      {type:"summary",text:"Factors divide a number exactly, while multiples are produced by multiplying a number by whole numbers. Prime numbers have exactly two positive factors and composite numbers have more than two. 1 is neither prime nor composite. Divisibility rules provide quick tests, while common factors and common multiples help solve grouping and scheduling problems."},
      {type:"important",title:"Key Takeaway",text:"Think of factors as numbers that build a number through multiplication, and multiples as numbers produced when a number is repeatedly multiplied."}
    ]}
  ],
  importantPoints:["A factor divides a number exactly.","Factors of a positive number are finite.","Multiples are produced by multiplying by whole numbers.","A non-zero number has infinitely many positive multiples.","If a × b = c, a and b are factors of c and c is a multiple of both.","A prime number has exactly two positive factors.","A composite number has more than two positive factors.","1 is neither prime nor composite.","2 is the only even prime number.","Divisibility by 2 depends on the last digit.","Divisibility by 5 depends on the last digit being 0 or 5.","Divisibility by 10 requires the last digit to be 0.","For divisibility by 3 and 9, use the sum of the digits.","For divisibility by 4, check the last two digits.","Common factors are shared factors.","Common multiples are shared multiples."],
  keyTerms:["Factor","Multiple","Prime Number","Composite Number","Divisible","Divisor","Quotient","Remainder","Common Factor","Common Multiple","Greatest Common Factor","Least Common Multiple","Prime Factor"],
  revisionQuestions:["What is a factor of a number?","What is a multiple?","How are factors and multiples related?","What is a prime number?","Why is 1 neither prime nor composite?","Why is 2 the only even prime number?","State divisibility tests for 2, 5 and 10.","How can digit sum help test divisibility by 3 and 9?","What is a common factor?","What is a common multiple?"].map(question=>({question})),
  flashcards:[
    {front:"What is a factor?",back:"A whole number that divides a given number exactly."},
    {front:"What is a multiple?",back:"A number obtained by multiplying a given number by a whole number."},
    {front:"What is a prime number?",back:"A number with exactly two positive factors: 1 and itself."},
    {front:"What is a composite number?",back:"A number with more than two positive factors."},
    {front:"Is 1 prime?",back:"No. It is neither prime nor composite."},
    {front:"Which is the only even prime?",back:"2."},
    {front:"When is a number divisible by 5?",back:"When its last digit is 0 or 5."},
    {front:"What is a common factor?",back:"A factor shared by every number in a given group."},
    {front:"What is a common multiple?",back:"A multiple shared by every number in a given group."},
    {front:"What is the least common multiple?",back:"The smallest positive common multiple."}
  ]
};
