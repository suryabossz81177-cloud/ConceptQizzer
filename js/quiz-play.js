document.addEventListener("DOMContentLoaded", function () {

    console.log("QUIZ PLAY JS LOADED");

    const questionBox = document.getElementById("question");
    const optionsBox = document.getElementById("options");
    const questionNumber = document.getElementById("questionNumber");
    const timerBox = document.getElementById("timer");
    const nextBtn = document.getElementById("nextBtn");

    console.log("Question box:", questionBox);
    console.log("Options box:", optionsBox);
    console.log("Database:", typeof quizDatabase);

    /* -----------------------------
       GET CHAPTER
    ----------------------------- */

    const chapterKey =
        localStorage.getItem("cq-current-chapter") ||
        "patterns-in-mathematics";

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

    const level =
        levelMap[rawLevel] || "easy";

    console.log("Chapter:", chapterKey);
    console.log("Level:", level);


    /* -----------------------------
       GET QUESTIONS
    ----------------------------- */

    let questions = [];

    if (
        typeof quizDatabase !== "undefined" &&
        quizDatabase.class6 &&
        quizDatabase.class6.mathematics
    ) {

        const chapter =
            quizDatabase.class6
                .mathematics[chapterKey];

        if (chapter) {

            questions =
                chapter[level] || [];

        }

    }


    console.log(
        "Questions found:",
        questions.length
    );


    /* -----------------------------
       IF NO QUESTIONS
    ----------------------------- */

    if (questions.length === 0) {

        questionBox.textContent =
            "⚠️ Questions could not be loaded.";

        optionsBox.innerHTML = `
            <p style="
                color:white;
                font-size:18px;
                line-height:1.5;
            ">
            Chapter: ${chapterKey}<br>
            Level: ${level}<br><br>
            Quiz database was found, but questions were not found.
            </p>
        `;

        return;

    }


    /* -----------------------------
       QUIZ VARIABLES
    ----------------------------- */

    let currentQuestion = 0;
    let score = 0;


    /* -----------------------------
       SHOW QUESTION
    ----------------------------- */

    function showQuestion() {

        const q =
            questions[currentQuestion];

        if (!q) return;


        questionBox.textContent =
            q.question;


        questionNumber.textContent =
            `Question ${currentQuestion + 1} / ${questions.length}`;


        optionsBox.innerHTML = "";


        q.options.forEach(function (option, index) {

            const button =
                document.createElement("button");

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

                const all =
                    optionsBox.querySelectorAll("button");

                all.forEach(function (b) {

                    b.disabled = true;

                });


                if (index === q.answer) {

                    score++;

                    button.style.background =
                        "#22c55e";

                    button.style.color =
                        "white";

                } else {

                    button.style.background =
                        "#ef4444";

                    button.style.color =
                        "white";


                    if (all[q.answer]) {

                        all[q.answer]
                            .style.background =
                            "#22c55e";

                        all[q.answer]
                            .style.color =
                            "white";

                    }

                }

            };


            optionsBox.appendChild(button);

        });

    }


    /* -----------------------------
       NEXT BUTTON
    ----------------------------- */

    nextBtn.onclick = function () {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        } else {

            questionBox.textContent =
                "🎉 Quiz Complete!";

            optionsBox.innerHTML = `
                <div style="
                    text-align:center;
                    font-size:24px;
                    color:white;
                    padding:20px;
                ">
                    Score: ${score}/${questions.length}
                </div>
            `;

            nextBtn.textContent =
                "Finish ✓";

            nextBtn.disabled = true;

        }

    };


    /* -----------------------------
       TEMP TIMER DISPLAY
    ----------------------------- */

    timerBox.textContent = "05:00";


    /* -----------------------------
       START
    ----------------------------- */

    showQuestion();

});
