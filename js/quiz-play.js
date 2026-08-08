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

const LEVEL_CONFIG = {
  easy: {
    questions: 10,
    time: 300,
    xp: 100,
    pass: 70,
    next: "medium"
  },

  medium: {
    questions: 10,
    time: 480,
    xp: 200,
    pass: 75,
    next: "hard"
  },

  hard: {
    questions: 15,
    time: 720,
    xp: 350,
    pass: 80,
    next: "tooHard"
  },

  tooHard: {
    questions: 20,
    time: 1080,
    xp: 600,
    pass: 85,
    next: "extreme"
  },

  extreme: {
    questions: 25,
    time: 1500,
    xp: 1000,
    pass: 90,
    next: null
  }
};

const levelInfo = LEVEL_CONFIG[selectedLevel];

let currentQuestion = 0;
let score = 0;
let answered = false;
let timer;
let timeLeft = levelInfo.time;

const question =
document.getElementById("question");

const options =
document.getElementById("options");

const questionNumber =
document.getElementById("questionNumber");

function formatTime(seconds){

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;

}

function startTimer(){

    clearInterval(timer);

    timeLeft = levelInfo.time;

    const timerBox = document.getElementById("timer");

    timerBox.textContent = formatTime(timeLeft);

    timer = setInterval(()=>{

        timeLeft--;

        timerBox.textContent = formatTime(timeLeft);

        if(timeLeft<=60){

            timerBox.style.background="#ef4444";

        }else if(timeLeft<=180){

            timerBox.style.background="#f59e0b";

        }else{

            timerBox.style.background="#22c55e";

        }

        if(timeLeft <= 0){

    clearInterval(timer);

    timeLeft = 0;

    timerBox.textContent = "00:00";

    alert("⏰ Time Over!\n\nYour quiz will be submitted.");

    currentQuestion = questions.length;

    nextBtn.click();

        }

    },1000);

}

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
Math.ceil(questions.length * levelInfo.pass / 100);

if(score >= passMarks){
    earnedXP = levelInfo.xp;

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

startTimer();
