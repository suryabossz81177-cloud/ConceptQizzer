document.addEventListener("DOMContentLoaded", function () {
    const levels = ["easy", "medium", "hard", "tooHard", "extreme"];
    const STORAGE_KEY = "cq-quiz-progress-v3";

    function clean(value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .replace(/_/g, "-")
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
    }

    function chapterKey() {
        return clean(
            localStorage.getItem("cq-current-chapter") ||
            "unknown-chapter"
        );
    }

    // Progress belongs ONLY to this chapter.
    function scope() {
        const ch = chapterKey();
        const cls = clean(
            localStorage.getItem("cq-current-class") ||
            localStorage.getItem("cq-class") ||
            ""
        );
        const sub = clean(
            localStorage.getItem("cq-current-subject") ||
            localStorage.getItem("cq-subject") ||
            ""
        );
        return [cls, sub, ch].filter(Boolean).join("|");
    }

    function read() {
        try {
            const data = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "{}"
            );
            return data && typeof data === "object" ? data : {};
        } catch (_) {
            return {};
        }
    }

    function progress() {
        const all = read();
        return all[scope()] || {};
    }

    /*
     * The quiz player already saves unlock flags using:
     * cq-unlocked-{chapter}-{level}
     * and
     * cq-level-unlocked-{chapter}-{level}
     *
     * Older quiz.js was checking only cq-quiz-progress-v3,
     * so the next level could actually start while still showing
     * "Locked". This function accepts BOTH systems.
     */
    function legacyUnlocked(level) {
        if (level === "easy") return true;

        const ch = chapterKey();

        const key1 = "cq-unlocked-" + ch + "-" + level;
        const key2 = "cq-level-unlocked-" + ch + "-" + level;

        return (
            localStorage.getItem(key1) === "true" ||
            localStorage.getItem(key2) === "true"
        );
    }

    function unlocked(level) {
        const i = levels.indexOf(level);

        if (i <= 0) return true;

        const previous = levels[i - 1];

        // New progress system
        if (progress()[previous] === true) return true;

        // Existing quiz-play.js unlock system
        if (legacyUnlocked(level)) return true;

        return false;
    }

    function refresh() {
        levels.forEach(level => {
            const btn = document.querySelector(`.level.${level}`);
            if (!btn) return;

            const ok = unlocked(level);

            btn.classList.toggle("locked", !ok);
            btn.classList.toggle("unlocked", ok);
            btn.setAttribute("aria-disabled", String(!ok));

            btn.style.opacity = ok ? "1" : ".55";
            btn.style.pointerEvents = "auto";
            btn.style.cursor = ok ? "pointer" : "not-allowed";
            btn.style.filter = "none";

            let badge = btn.querySelector(".lockBadge");

            if (!ok) {
                if (!badge) {
                    badge = document.createElement("div");
                    badge.className = "lockBadge";
                    btn.prepend(badge);
                }

                badge.textContent = "🔒 Locked";
            } else if (badge) {
                badge.remove();
            }
        });
    }

    document.querySelectorAll(".level").forEach(btn => {
        btn.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                const level = btn.dataset.level;

                if (!unlocked(level)) {
                    const i = levels.indexOf(level);

                    alert(
                        `🔒 Level Locked\n\nComplete ${levels[i - 1]} of THIS chapter first.`
                    );

                    return;
                }

                localStorage.setItem("cq-selected-level", level);

                // Prevent browser from reusing an old quiz page.
                window.location.href =
                    "quiz-play.html?quiz=" + Date.now();
            },
            true
        );
    });

    refresh();
});
