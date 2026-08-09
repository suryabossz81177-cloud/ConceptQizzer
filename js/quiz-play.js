const rawLevel =
localStorage.getItem("cq-selected-level") || "easy";

const LEVEL_ALIASES = {
    "easy": "easy",
    "medium": "medium",
    "hard": "hard",
    "too-hard": "tooHard",
    "tooHard": "tooHard",
    "extreme-hard": "extreme",
    "extreme": "extreme"
};

const selectedLevel =
    LEVEL_ALIASES[rawLevel] || "easy";

console.log("Selected level:", selectedLevel);

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

if(!q){
    question.innerText = "Questions not loaded!";
    options.innerHTML = "<p>Quiz data is empty for this level.</p>";
    return;
}

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

if(levelInfo.next){

    localStorage.setItem(
        "cq-unlocked-" + levelInfo.next,
        "true"
    );

}

    const resultScreen =
document.getElementById("resultScreen");

const resultTitle =
document.getElementById("resultTitle");

const resultMessage =
document.getElementById("resultMessage");

const resultScore =
document.getElementById("resultScore");

const resultPercentage =
document.getElementById("resultPercentage");

const resultXP =
document.getElementById("resultXP");

const resultButton =
document.getElementById("resultButton");

const percentage =
Math.round((score / questions.length) * 100);

        const earnedXP =
    score >= passMarks ? levelInfo.xp : 0;

resultTitle.textContent = "🎉 Level Passed!";

resultMessage.textContent =
"Excellent work! You have unlocked the next challenge.";

resultScore.textContent =
`${score}/${questions.length}`;

resultPercentage.textContent =
`${percentage}%`;

resultXP.textContent =
`+${earnedXP} XP`;

resultScreen.style.display = "flex";

resultButton.textContent = "Continue →";

resultButton.onclick = function(){

    unlockNextLevel(0);

    window.location.href = "quiz.html";
};

    unlockNextLevel(0);

}else{

    const resultScreen =
document.getElementById("resultScreen");

const resultTitle =
document.getElementById("resultTitle");

const resultMessage =
document.getElementById("resultMessage");

const resultScore =
document.getElementById("resultScore");

const resultPercentage =
document.getElementById("resultPercentage");

const resultXP =
document.getElementById("resultXP");

const resultButton =
document.getElementById("resultButton");

const percentage =
Math.round((score / questions.length) * 100);

resultTitle.textContent = "❌ Quiz Failed";

resultMessage.textContent =
"Keep practicing! You can try this level again.";

resultScore.textContent =
`${score}/${questions.length}`;

resultPercentage.textContent =
`${percentage}%`;

const earnedXP = Math.round(
    score >= passMarks ? levelInfo.xp : 0
);

resultXP.textContent =
`+${earnedXP} XP`;

        localStorage.setItem(
    "cq-xp",
    String(
        Number(localStorage.getItem("cq-xp") || 0) + earnedXP
    )
);

resultScreen.style.display = "flex";

resultButton.textContent = "Try Again ↻";

resultButton.onclick = function(){
    location.reload();
};

}

    }

};

loadQuestion();

startTimer();
