const questions = [

{

question:"What is a pattern?",

options:[
"Random arrangement",
"Repeated rule",
"Measurement",
"Fraction"
],

answer:1

},

{

question:"Which number comes next? 2,4,6,8,...",

options:[
"9",
"10",
"11",
"12"
],

answer:1

},

{

question:"Which is an alphabet pattern?",

options:[
"A B C D",
"1 3 5",
"10 20",
"None"
],

answer:0

}

];

let currentQuestion = 0;
let score = 0;
let answered = false;

const question =
document.getElementById("question");

const options =
document.getElementById("options");

const questionNumber =
document.getElementById("questionNumber");

function loadQuestion(){

  answered = false;

const q = questions[currentQuestion];

question.innerText = q.question;

questionNumber.innerText =
`Question ${currentQuestion+1} / ${questions.length}`;

options.innerHTML="";

  q.options.forEach((option,index)=>{

const btn=document.createElement("button");

btn.className="option";

btn.innerText=option;

    btn.onclick = function(){

      if(answered) return;

answered = true;

    if(q.answer === index){

      score++;

        btn.style.background = "#22c55e";
        btn.style.color = "#ffffff";

    }else{

        btn.style.background = "#ef4444";
        btn.style.color = "#ffffff";

    }

};

options.appendChild(btn);

});

}

loadQuestion();

const nextBtn = document.getElementById("nextBtn");

nextBtn.onclick = function(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }else{

      const passMarks =
Math.ceil(questions.length * 0.7);

if(score >= passMarks){

    alert(
        "🎉 Congratulations!\n\n" +
        "Score: " + score + "/" + questions.length +
        "\n\nLevel Passed!"
    );

    unlockNextLevel(0);

}else{

    alert(
        "❌ Quiz Failed\n\n" +
        "Score: " + score + "/" + questions.length +
        "\n\nTry Again!"
    );

}

    }

};
