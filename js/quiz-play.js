const selectedLevel =
localStorage.getItem("cq-selected-level") || "easy";

const chapterKey =
localStorage.getItem("cq-current-chapter") || "";

let questions = [];

if (
    quizDatabase.class6 &&
    quizDatabase.class6.mathematics &&
    quizDatabase.class6.mathematics["patterns-in-mathematics"]
) {

    questions =
    quizDatabase.class6
    .mathematics
    ["patterns-in-mathematics"]
    [selectedLevel] || [];

}

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

loadQuestion();
