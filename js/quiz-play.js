/* =========================================
   CONCEPTQUIZZER - QUIZ PLAY ENGINE
   ========================================= */

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

const chapterKey =
    localStorage.getItem("cq-current-chapter") ||
    "patterns-in-mathematics";

let questions = [];

/* =========================================
   LOAD QUESTIONS
   ========================================= */

try {

    if (
        typeof quizDatabase !== "undefined" &&
        quizDatabase.class6 &&
        quizDatabase.class6.mathematics &&
        quizDatabase.class6.mathematics[chapterKey]
    ) {

        questions =
            quizDatabase.class6
                .mathematics[chapterKey][selectedLevel] || [];

    }

} catch (error) {

    console.error("Quiz database error:", error);

}

/* =========================================
   LEVEL CONFIG
   ========================================= */

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

const levelInfo =
    LEVEL_CONFIG[selectedLevel] ||
    LEVEL_CONFIG.easy;


/* =========================================
   ELEMENTS
   ========================================= */

const question =
    document.getElementById("question");

const options =
    document.getElementById("options");

const questionNumber =
    document.getElementById("questionNumber");

const timerBox =
    document.getElementById("timer");

const nextBtn =
    document.getElementById("nextBtn");

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


/* =========================================
   QUIZ VARIABLES
   ========================================= */

let currentQuestion = 0;
let score = 0;
let answered = false;
let timer = null;
let timeLeft = levelInfo.time;


/* =========================================
   FORMAT TIME
   ========================================= */

function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );

}


/* =========================================
   TIMER
   ========================================= */

function startTimer() {

    clearInterval(timer);

    timeLeft = levelInfo.time;

    if (timerBox) {

        timerBox.textContent =
            formatTime(timeLeft);

    }

    timer = setInterval(function () {

        timeLeft--;

        if (timerBox) {

            timerBox.textContent =
                formatTime(timeLeft);

            if (timeLeft <= 60) {

                timerBox.style.background =
                    "#ef4444";

            } else if (timeLeft <= 180) {

                timerBox.style.background =
                    "#f59e0b";

            } else {

                timerBox.style.background =
                    "#22c55e";

            }

        }


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeLeft = 0;

            if (timerBox) {
                timerBox.textContent = "00:00";
            }

            alert(
                "⏰ Time Over!\n\nYour quiz has ended."
            );

            finishQuiz();

        }

    }, 1000);

}


/* =========================================
   LOAD QUESTION
   ========================================= */

function loadQuestion() {

    answered = false;

    const q =
        questions[currentQuestion];

    if (!q) {

        finishQuiz();

        return;

    }


    if (question) {

        question.textContent =
            q.question;

    }


    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestion + 1} / ${questions.length}`;

    }


    if (options) {

        options.innerHTML = "";

        q.options.forEach(function (option, index) {

            const btn =
                document.createElement("button");

            btn.className = "option";

            btn.textContent = option;

            btn.type = "button";


            btn.onclick = function () {

                if (answered) return;

                answered = true;


                const allButtons =
                    options.querySelectorAll("button");

                allButtons.forEach(function (b) {

                    b.disabled = true;

                });


                if (q.answer === index) {

                    score++;

                    btn.style.background =
                        "#22c55e";

                    btn.style.color =
                        "#ffffff";

                } else {

                    btn.style.background =
                        "#ef4444";

                    btn.style.color =
                        "#ffffff";


                    /* Show correct answer */

                    if (allButtons[q.answer]) {

                        allButtons[q.answer]
                            .style.background =
                            "#22c55e";

                        allButtons[q.answer]
                            .style.color =
                            "#ffffff";

                    }

                }

            };


            options.appendChild(btn);

        });

    }


    if (nextBtn) {

        nextBtn.disabled = false;

    }

}


/* =========================================
   NEXT BUTTON
   ========================================= */

if (nextBtn) {

    nextBtn.onclick = function () {

        if (!answered) {

            alert(
                "Please select an answer first."
            );

            return;

        }


        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        } else {

            finishQuiz();

        }

    };

}


/* =========================================
   FINISH QUIZ
   ========================================= */

function finishQuiz() {

    clearInterval(timer);


    const total =
        questions.length;

    const percentage =
        total > 0
            ? Math.round((score / total) * 100)
            : 0;


    const passed =
        percentage >= levelInfo.pass;


    const earnedXP =
        passed
            ? levelInfo.xp
            : Math.round(
                levelInfo.xp * percentage / 100
              );


    /* -------------------------------------
       UPDATE RESULT SCREEN
       ------------------------------------- */

    if (resultScore) {

        resultScore.textContent =
            `${score}/${total}`;

    }


    if (resultPercentage) {

        resultPercentage.textContent =
            `${percentage}%`;

    }


    if (resultXP) {

        resultXP.textContent =
            `+${earnedXP} XP`;

    }


    if (resultTitle) {

        resultTitle.textContent =
            passed
                ? "🎉 Level Passed!"
                : "💪 Keep Practicing!";

    }


    if (resultMessage) {

        if (passed) {

            resultMessage.textContent =
                `Excellent! You passed the ${selectedLevel} level.`;

        } else {

            resultMessage.textContent =
                `You need ${levelInfo.pass}% to pass. Try again!`;

        }

    }


    /* -------------------------------------
       UNLOCK NEXT LEVEL
       ------------------------------------- */

    if (
        passed &&
        levelInfo.next
    ) {

        localStorage.setItem(
            "cq-unlocked-" + levelInfo.next,
            "true"
        );

    }


    /* -------------------------------------
       SAVE XP
       ------------------------------------- */

    const oldXP =
        Number(
            localStorage.getItem("cq-xp") || 0
        );

    localStorage.setItem(
        "cq-xp",
        String(oldXP + earnedXP)
    );


    /* -------------------------------------
       SAVE SCORE
       ------------------------------------- */

    localStorage.setItem(
        "cq-last-score",
        String(score)
    );

    localStorage.setItem(
        "cq-last-percentage",
        String(percentage)
    );


    /* -------------------------------------
       SHOW RESULT
       ------------------------------------- */

    if (resultScreen) {

        resultScreen.style.display =
            "flex";

    }

}


/* =========================================
   RESULT CONTINUE
   ========================================= */

if (resultButton) {

    resultButton.onclick = function () {

        window.location.href =
            "quiz.html";

    };

}


/* =========================================
   START QUIZ
   ========================================= */

if (questions.length === 0) {

    if (question) {

        question.textContent =
            "Questions not found.";

    }

    if (options) {

        options.innerHTML =
            "<p>⚠️ Quiz data is not available for this chapter and level.</p>";

    }

    if (timerBox) {

        timerBox.textContent =
            "00:00";

    }

} else {

    console.log(
        "ConceptQuizzer loaded:",
        selectedLevel,
        chapterKey,
        questions.length,
        "questions"
    );

    loadQuestion();

    startTimer();

}
