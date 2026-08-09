document.addEventListener("DOMContentLoaded", function () {
    const levels = ["easy", "medium", "hard", "tooHard", "extreme"];

    // Every chapter gets its own progress namespace.
    // This prevents one chapter from unlocking levels in another chapter.
    function getChapterScope() {
        const chapter = localStorage.getItem("cq-current-chapter") || "unknown-chapter";
        const classKey =
            localStorage.getItem("cq-current-class") ||
            localStorage.getItem("cq-class") || "";
        const subjectKey =
            localStorage.getItem("cq-current-subject") ||
            localStorage.getItem("cq-subject") || "";

        return [classKey, subjectKey, chapter]
            .filter(Boolean)
            .join("|")
            .toLowerCase();
    }

    const STORAGE_KEY = "cq-quiz-progress-v2";
    const scope = getChapterScope();

    function readAllProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const data = raw ? JSON.parse(raw) : {};
            return data && typeof data === "object" ? data : {};
        } catch (error) {
            return {};
        }
    }

    function getProgress() {
        const all = readAllProgress();
        const progress = all[scope];
        return progress && typeof progress === "object" ? progress : {};
    }

    function saveProgress(progress) {
        const all = readAllProgress();
        all[scope] = progress;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    }

    function isUnlocked(level) {
        const index = levels.indexOf(level);
        if (index <= 0) return true; // Easy is always available.

        const progress = getProgress();
        const previousLevel = levels[index - 1];
        return progress[previousLevel] === true;
    }

    function refreshLocks() {
        levels.forEach(function (level) {
            const btn = document.querySelector(".level." + level);
            if (!btn) return;

            const unlocked = isUnlocked(level);

            btn.classList.toggle("locked", !unlocked);
            btn.setAttribute("aria-disabled", String(!unlocked));
            btn.disabled = false;

            if (unlocked) {
                btn.style.opacity = "1";
                btn.style.pointerEvents = "auto";
                btn.style.cursor = "pointer";
                btn.style.filter = "none";
            } else {
                btn.style.opacity = ".55";
                btn.style.pointerEvents = "auto";
                btn.style.cursor = "not-allowed";
            }

            let badge = btn.querySelector(".lockBadge");

            if (!unlocked) {
                if (!badge) {
                    badge = document.createElement("div");
                    badge.className = "lockBadge";
                    btn.prepend(badge);
                }
                badge.textContent = "🔒 Locked";
                badge.style.display = "block";
            } else if (badge) {
                badge.remove();
            }
        });
    }

    // Capture-phase handler replaces any older quiz.js navigation logic.
    document.querySelectorAll(".level").forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            const level = btn.dataset.level;

            if (!isUnlocked(level)) {
                const index = levels.indexOf(level);
                const previous = index > 0 ? levels[index - 1] : "previous";
                alert(
                    "🔒 Level Locked\n\n" +
                    "Complete the " + previous +
                    " level of THIS chapter with the required score first."
                );
                return;
            }

            localStorage.setItem("cq-selected-level", level);
            window.location.href = "quiz-play.html";
        }, true);
    });

    refreshLocks();

    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) refreshLocks();
    });
});
