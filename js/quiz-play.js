document.addEventListener("DOMContentLoaded", function () {

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");
const timerBox = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");

const rawChapterKey =
    localStorage.getItem("cq-current-chapter") ||
    "patterns-in-mathematics";

const chapterKey = rawChapterKey;

const rawLevel =
    localStorage.getItem("cq-selected-level") ||
    "easy";

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

/* Level progression */
const LEVEL_CONFIG = {
    easy: {
        time: 300,
        pass: 70,
        next: "medium"
    },
    medium: {
        time: 480,
        pass: 75,
        next: "hard"
    },
    hard: {
        time: 720,
        pass: 80,
        next: "tooHard"
    },
    tooHard: {
        time: 1080,
        pass: 85,
        next: "extreme"
    },
    extreme: {
        time: 1500,
        pass: 90,
        next: null
    }
};

const levelInfo = LEVEL_CONFIG[level] || LEVEL_CONFIG.easy;

let questions = [];

let questions = [];

function normalizeChapterKey(key) {
    return String(key || "")
        .toLowerCase()
        .replace(/_/g, "-")
        .replace(/^class\d+-mathematics-/, "")
        .replace(/^class\d+-math-/, "")
        .replace(/^class\d+-/, "");
}

function findChapterData(database, wantedKey) {

    const wanted =
        normalizeChapterKey(wantedKey);

    const visited = new WeakSet();

    function search(obj) {

        if (!obj || typeof obj !== "object") {
            return null;
        }

        if (visited.has(obj)) {
            return null;
        }

        visited.add(obj);

        /* First: search exact chapter key */
        for (const key of Object.keys(obj)) {

            const value = obj[key];

            if (
                value &&
                typeof value === "object" &&
                !Array.isArray(value)
            ) {

                const normalized =
                    normalizeChapterKey(key);

                const hasQuizLevels =
                    Array.isArray(value.easy) ||
                    Array.isArray(value.medium) ||
                    Array.isArray(value.hard) ||
                    Array.isArray(value.tooHard) ||
                    Array.isArray(value.extreme);

                if (
                    normalized === wanted &&
                    hasQuizLevels
                ) {
                    return value;
                }
            }
        }

        /* Second: search nested objects */
        for (const key of Object.keys(obj)) {

            const value = obj[key];

            if (
                value &&
                typeof value === "object"
            ) {

                const result =
                    search(value);

                if (result) {
                    return result;
                }
            }
        }

        return null;
    }

    return search(database);
}


/* Find the chapter anywhere inside quizDatabase */
const chapter =
    findChapterData(
        quizDatabase,
        chapterKey
    );


/* Load selected difficulty */
if (chapter) {

    questions =
        Array.isArray(chapter[level])
            ? chapter[level]
            : [];

}


if (questions.length === 0) {
    questionBox.textContent =
        "⚠️ Questions could not be loaded.";

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
let timeLeft = levelInfo.time;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0");
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

            const all =
                optionsBox.querySelectorAll("button");

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

/* Unlock the next level only when the current level is passed. */
function unlockNextLevel(percentage) {

    const passed = percentage >= levelInfo.pass;

    if (passed && levelInfo.next) {
        localStorage.setItem(
            "cq-unlocked-" + levelInfo.next,
            "true"
        );
        /* Compatibility key for older/newer quiz pages. */
        localStorage.setItem(
            "cq-level-unlocked-" + levelInfo.next,
            "true"
        );
    }

    return passed;
}


/* =========================================
   DASHBOARD PROGRESS
   ========================================= */

function updateDashboardProgress(percentage, passed) {

    /* Total quiz score: accumulate raw points from each completed quiz. */
    const oldScore =
        Number(localStorage.getItem("cq-total-quiz-score") || 0);

    localStorage.setItem(
        "cq-total-quiz-score",
        String(oldScore + score)
    );

    /* Keep XP compatible with the existing dashboard. */
    const oldXP =
        Number(localStorage.getItem("cq-xp") || 0);

    const earnedXP =
        Math.max(0, Math.round(score * 10));

    localStorage.setItem(
        "cq-xp",
        String(oldXP + earnedXP)
    );

    /* Study streak: one increment per calendar day. */
    const today =
        new Date().toISOString().slice(0, 10);

    const lastStudyDate =
        localStorage.getItem("cq-last-study-date");

    let streak =
        Number(localStorage.getItem("cq-study-streak") || 0);

    if (lastStudyDate !== today) {

        if (lastStudyDate) {

            const last =
                new Date(lastStudyDate + "T00:00:00");

            const current =
                new Date(today + "T00:00:00");

            const days =
                Math.round(
                    (current - last) / 86400000
                );

            if (days === 1) {
                streak++;
            } else {
                streak = 1;
            }

        } else {
            streak = 1;
        }

        localStorage.setItem(
            "cq-study-streak",
            String(streak)
        );

        localStorage.setItem(
            "cq-last-study-date",
            today
        );
    }

    /*
       A chapter is considered completed when the student
       passes the highest (Extreme) level for that chapter.
    */
    if (
        level === "extreme" &&
        passed
    ) {

        const completedKey =
            "cq-completed-chapter-" + chapterKey;

        if (
            localStorage.getItem(completedKey) !== "true"
        ) {

            localStorage.setItem(
                completedKey,
                "true"
            );

            const completed =
                Number(
                    localStorage.getItem(
                        "cq-chapters-completed"
                    ) || 0
                );

            localStorage.setItem(
                "cq-chapters-completed",
                String(completed + 1)
            );
        }
    }
}


function finishQuiz(timeOver) {

    if (quizFinished) return;

    quizFinished = true;
    stopTimer();

    const percentage =
        Math.round((score / questions.length) * 100);

    const passed =
        unlockNextLevel(percentage);

    updateDashboardProgress(
        percentage,
        passed
    );

    questionNumber.textContent =
        `Question ${questions.length} / ${questions.length}`;

    questionBox.textContent =
        timeOver
            ? "⏰ Time Over!"
            : "🎉 Quiz Complete!";

    optionsBox.innerHTML = `
        <div style="
            text-align:center;
            color:white;
            padding:20px;
        ">

            <div style="
                font-size:24px;
                font-weight:bold;
                margin-bottom:15px;
            ">
                ${passed ? "🏆 Level Passed!" : "📚 Keep Practising!"}
            </div>

            <div style="
                font-size:26px;
                font-weight:bold;
                margin-bottom:10px;
            ">
                Score: ${score}/${questions.length}
            </div>

            <div style="font-size:20px;margin-bottom:10px;">
                Percentage: ${percentage}%
            </div>

            <div style="font-size:17px;">
                ${passed
                    ? (
                        levelInfo.next
                            ? `🔓 ${levelInfo.next === "tooHard"
                                ? "Too Hard"
                                : levelInfo.next.charAt(0).toUpperCase() + levelInfo.next.slice(1)
                              } level unlocked!`
                            : "⭐ You completed the highest level!"
                      )
                    : `You need ${levelInfo.pass}% to unlock the next level.`
                }
            </div>

        </div>
    `;

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
