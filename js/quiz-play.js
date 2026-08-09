document.addEventListener("DOMContentLoaded", function () {

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");
const timerBox = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");

const rawChapterKey = localStorage.getItem("cq-current-chapter") || "patterns-in-mathematics";
const chapterKey = rawChapterKey.replace(/^\d+-[^-]+-/, "");

const rawLevel = localStorage.getItem("cq-selected-level") || "easy";

const levelMap = {
    "easy": "easy",
    "medium": "medium",
    "hard": "hard",
    "too-hard": "tooHard",
    "tooHard": "tooHard",
    "extreme-hard": "extreme",
    "extreme": "extreme"
};

const level = levelMap[rawLevel] || "easy";

let questions = [];

if (
    typeof quizDatabase !== "undefined" &&
    quizDatabase.class6 &&
    quizDatabase.class6.mathematics
) {
    const chapter = quizDatabase.class6.mathematics[chapterKey];
    if (chapter) {
        questions = chapter[level] || [];
    }
}

if (questions.length === 0) {
    questionBox.textContent = "⚠️ Questions could not be loaded.";
    optionsBox.innerHTML = `
        <p style="color:white;font-size:18px;line-height:1.5;">
            Chapter: ${chapterKey}<br>
            Level: ${level}<br><br>
            Quiz database was found, but questions were not found.
        </p>`;
    nextBtn.disabled = true;
    return;
}

let currentQuestion = 0;
let score = 0;
let answered = false;
let quizFinished = false;
let timer = null;

const LEVEL_TIME = {
    easy: 300,
    medium: 480,
    hard: 720,
    tooHard: 1080,
    extreme: 1500
};

let timeLeft = LEVEL_TIME[level] || 300;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return String(minutes).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

function updateTimer() {
    timerBox.textContent = formatTime(timeLeft);

    if (timeLeft <= 60) {
        timerBox.style.background = "#ef4444";
        timerBox.style.color = "#ffffff";
    } else if (timeLeft <= 180) {
        timerBox.style.background = "#f59e0b";
        timerBox.style.color = "#ffffff";
    } else {
        timerBox.style.background = "#22c55e";
        timerBox.style.color = "#ffffff";
    }
}

function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function startTimer() {
    stopTimer();
    updateTimer();

    timer = setInterval(function () {
        if (quizFinished) {
            stopTimer();
            return;
        }

        timeLeft--;

        if (timeLeft <= 0) {
            timeLeft = 0;
            updateTimer();
            finishQuiz(true);
            return;
        }

        updateTimer();
    }, 1000);
}

function showQuestion() {
    const q = questions[currentQuestion];
    if (!q || quizFinished) return;

    answered = false;

    questionBox.textContent = q.question;
    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    optionsBox.innerHTML = "";

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Finish ✓"
            : "Next →";

    nextBtn.disabled = false;
    nextBtn.style.pointerEvents = "auto";
    nextBtn.style.cursor = "pointer";
    nextBtn.style.opacity = "1";

    q.options.forEach(function (option, index) {
        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";
        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "10px 0";
        button.style.padding = "15px";
        button.style.border = "none";
        button.style.borderRadius = "12px";
        button.style.cursor = "pointer";

        button.onclick = function () {
            if (answered || quizFinished) return;

            answered = true;

            const all = optionsBox.querySelectorAll("button");

            all.forEach(function (b) {
                b.disabled = true;
                b.style.cursor = "default";
            });

            if (index === q.answer) {
                score++;
                button.style.background = "#22c55e";
                button.style.color = "white";
            } else {
                button.style.background = "#ef4444";
                button.style.color = "white";

                if (all[q.answer]) {
                    all[q.answer].style.background = "#22c55e";
                    all[q.answer].style.color = "white";
                }
            }
        };

        optionsBox.appendChild(button);
    });
}

function finishQuiz(timeOver) {
    if (quizFinished) return;

    quizFinished = true;
    stopTimer();

    const percentage = Math.round((score / questions.length) * 100);

    questionBox.textContent =
        timeOver ? "⏰ Time Over!" : "🎉 Quiz Complete!";

    optionsBox.innerHTML = `
        <div style="text-align:center;color:white;padding:20px;">
            <div style="font-size:24px;font-weight:bold;margin-bottom:15px;">
                ${timeOver ? "Time is up!" : "Well done!"}
            </div>
            <div style="font-size:26px;font-weight:bold;margin-bottom:10px;">
                Score: ${score}/${questions.length}
            </div>
            <div style="font-size:20px;">
                Percentage: ${percentage}%
            </div>
        </div>`;

    nextBtn.textContent = "Finish ✓";
    nextBtn.disabled = false;
    nextBtn.style.pointerEvents = "auto";
    nextBtn.style.cursor = "pointer";
    nextBtn.style.opacity = "1";

    nextBtn.onclick = function () {
        window.location.href = "quiz.html";
    };
}

nextBtn.onclick = function () {
    if (quizFinished) {
        window.location.href = "quiz.html";
        return;
    }

    if (currentQuestion === questions.length - 1) {
        finishQuiz(false);
        return;
    }

    currentQuestion++;
    showQuestion();
};

updateTimer();
showQuestion();
startTimer();

});
