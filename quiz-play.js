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
        localStorage.getItem("cq-selected-level") || "easy";

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

    const LEVELS = ["easy", "medium", "hard", "tooHard", "extreme"];

    const LEVEL_CONFIG = {
        easy: { time: 300, pass: 70, next: "medium" },
        medium: { time: 480, pass: 75, next: "hard" },
        hard: { time: 720, pass: 80, next: "tooHard" },
        tooHard: { time: 1080, pass: 85, next: "extreme" },
        extreme: { time: 1500, pass: 90, next: null }
    };

    const levelInfo = LEVEL_CONFIG[level] || LEVEL_CONFIG.easy;

    // One progress object for every chapter. Old global unlock keys are ignored.
    function getChapterScope() {
        const classKey =
            localStorage.getItem("cq-current-class") ||
            localStorage.getItem("cq-class") || "";
        const subjectKey =
            localStorage.getItem("cq-current-subject") ||
            localStorage.getItem("cq-subject") || "";

        return [classKey, subjectKey, chapterKey]
            .filter(Boolean)
            .join("|")
            .toLowerCase();
    }

    const PROGRESS_STORAGE_KEY = "cq-quiz-progress-v2";
    const chapterScope = getChapterScope();

    function readAllQuizProgress() {
        try {
            const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
            const data = raw ? JSON.parse(raw) : {};
            return data && typeof data === "object" ? data : {};
        } catch (error) {
            return {};
        }
    }

    function getChapterProgress() {
        const all = readAllQuizProgress();
        const progress = all[chapterScope];
        return progress && typeof progress === "object" ? progress : {};
    }

    function saveChapterProgress(progress) {
        const all = readAllQuizProgress();
        all[chapterScope] = progress;
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(all));
    }

    function isLevelUnlocked(levelName) {
        const index = LEVELS.indexOf(levelName);
        if (index <= 0) return true;

        const progress = getChapterProgress();
        return progress[LEVELS[index - 1]] === true;
    }

    // Prevent direct URL access to a locked level.
    if (!isLevelUnlocked(level)) {
        alert("🔒 This level is locked for this chapter. Complete the previous level first.");
        window.location.replace("quiz.html");
        return;
    }

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
        const wanted = normalizeChapterKey(wantedKey);
        const visited = new WeakSet();

        function search(obj) {
            if (!obj || typeof obj !== "object") return null;
            if (visited.has(obj)) return null;
            visited.add(obj);

            for (const key of Object.keys(obj)) {
                const value = obj[key];

                if (
                    value &&
                    typeof value === "object" &&
                    !Array.isArray(value)
                ) {
                    const normalized = normalizeChapterKey(key);
                    const hasQuizLevels =
                        Array.isArray(value.easy) ||
                        Array.isArray(value.medium) ||
                        Array.isArray(value.hard) ||
                        Array.isArray(value.tooHard) ||
                        Array.isArray(value.extreme);

                    if (normalized === wanted && hasQuizLevels) {
                        return value;
                    }
                }
            }

            for (const key of Object.keys(obj)) {
                const value = obj[key];
                if (value && typeof value === "object") {
                    const result = search(value);
                    if (result) return result;
                }
            }

            return null;
        }

        return search(database);
    }

    const chapter = findChapterData(quizDatabase, chapterKey);

    if (chapter) {
        questions = Array.isArray(chapter[level]) ? chapter[level] : [];
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
    let timeLeft = levelInfo.time;

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
        questionNumber.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
        optionsBox.innerHTML = "";

        nextBtn.textContent =
            currentQuestion === questions.length - 1 ? "Finish ✓" : "Next →";
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

    function unlockNextLevel(percentage) {
        const passed = percentage >= levelInfo.pass;

        if (passed) {
            const progress = getChapterProgress();
            progress[level] = true;
            saveChapterProgress(progress);
        }

        return passed;
    }

    function updateDashboardProgress(percentage, passed) {
        const oldScore = Number(localStorage.getItem("cq-total-quiz-score") || 0);
        localStorage.setItem("cq-total-quiz-score", String(oldScore + score));

        const oldXP = Number(localStorage.getItem("cq-xp") || 0);
        const earnedXP = Math.max(0, Math.round(score * 10));
        localStorage.setItem("cq-xp", String(oldXP + earnedXP));

        const today = new Date().toISOString().slice(0, 10);
        const lastStudyDate = localStorage.getItem("cq-last-study-date");
        let streak = Number(localStorage.getItem("cq-study-streak") || 0);

        if (lastStudyDate !== today) {
            if (lastStudyDate) {
                const last = new Date(lastStudyDate + "T00:00:00");
                const current = new Date(today + "T00:00:00");
                const days = Math.round((current - last) / 86400000);
                streak = days === 1 ? streak + 1 : 1;
            } else {
                streak = 1;
            }

            localStorage.setItem("cq-study-streak", String(streak));
            localStorage.setItem("cq-last-study-date", today);
        }

        // A chapter is completed only after passing Extreme.
        if (level === "extreme" && passed) {
            const completedKey = "cq-completed-chapter-" + chapterKey;

            if (localStorage.getItem(completedKey) !== "true") {
                localStorage.setItem(completedKey, "true");

                const completed = Number(
                    localStorage.getItem("cq-chapters-completed") || 0
                );
                localStorage.setItem("cq-chapters-completed", String(completed + 1));
            }
        }
    }

    function finishQuiz(timeOver) {
        if (quizFinished) return;

        quizFinished = true;
        stopTimer();

        const percentage = Math.round((score / questions.length) * 100);
        const passed = unlockNextLevel(percentage);
        updateDashboardProgress(percentage, passed);

        questionNumber.textContent = `Question ${questions.length} / ${questions.length}`;
        questionBox.textContent = timeOver ? "⏰ Time Over!" : "🎉 Quiz Complete!";

        const next = levelInfo.next;
        const nextLabel = next === "tooHard"
            ? "Too Hard"
            : next
                ? next.charAt(0).toUpperCase() + next.slice(1)
                : "";

        optionsBox.innerHTML = `
            <div style="text-align:center;color:white;padding:20px;">
                <div style="font-size:24px;font-weight:bold;margin-bottom:15px;">
                    ${passed ? "🏆 Level Passed!" : "📚 Keep Practising!"}
                </div>
                <div style="font-size:26px;font-weight:bold;margin-bottom:10px;">
                    Score: ${score}/${questions.length}
                </div>
                <div style="font-size:20px;margin-bottom:10px;">
                    Percentage: ${percentage}%
                </div>
                <div style="font-size:17px;">
                    ${passed
                        ? (next ? `🔓 ${nextLabel} level unlocked for this chapter!` : "⭐ You completed the highest level!")
                        : `You need ${levelInfo.pass}% to unlock the next level.`}
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
