document.addEventListener("DOMContentLoaded", function () {
    const questionBox = document.getElementById("question");
    const optionsBox = document.getElementById("options");
    const questionNumber = document.getElementById("questionNumber");
    const timerBox = document.getElementById("timer");
    const nextBtn = document.getElementById("nextBtn");

    const rawChapter = localStorage.getItem("cq-current-chapter") || "patterns-in-mathematics";
    const rawLevel = localStorage.getItem("cq-selected-level") || "easy";
    const level = ({easy:"easy", medium:"medium", hard:"hard", "too-hard":"tooHard", tooHard:"tooHard", "extreme-hard":"extreme", extreme:"extreme"})[rawLevel] || "easy";
    const levels = ["easy", "medium", "hard", "tooHard", "extreme"];
    const config = {
        easy:{time:300, pass:70, next:"medium"},
        medium:{time:480, pass:75, next:"hard"},
        hard:{time:720, pass:80, next:"tooHard"},
        tooHard:{time:1080, pass:85, next:"extreme"},
        extreme:{time:1500, pass:90, next:null}
    };
    const levelInfo = config[level];

    function clean(s) {
        return String(s || "").trim().toLowerCase().replace(/_/g,"-").replace(/\s+/g,"-").replace(/[^a-z0-9-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");
    }
    function normalize(s) {
        let x = clean(s);
        x = x.replace(/^class\d+-/, "");
        x = x.replace(/^[0-9]+-/, "");
        x = x.replace(/^mathematics-/, "");
        x = x.replace(/^math-/, "");
        return x;
    }
    function findChapter(db, wanted) {
        const target = normalize(wanted);
        const seen = new WeakSet();
        function walk(obj) {
            if (!obj || typeof obj !== "object" || seen.has(obj)) return null;
            seen.add(obj);
            for (const key of Object.keys(obj)) {
                const value = obj[key];
                if (!value || typeof value !== "object") continue;
                const n = normalize(key);
                const hasLevels = levels.some(l => Array.isArray(value[l]));
                if (hasLevels && (n === target || n.endsWith("-" + target) || target.endsWith("-" + n))) return value;
            }
            for (const key of Object.keys(obj)) {
                const value = obj[key];
                if (value && typeof value === "object") {
                    const found = walk(value);
                    if (found) return found;
                }
            }
            return null;
        }
        return walk(db);
    }

    // If an old duplicate quiz script/database error exists, this gives a clear message instead of endless Loading.
    if (typeof quizDatabase === "undefined") {
        questionBox.textContent = "⚠️ Quiz database could not be loaded.";
        optionsBox.innerHTML = '<p style="color:white;font-size:18px;line-height:1.5">Database JavaScript has an error or the browser is using an old cached file.<br><br>Please refresh once after replacing the quiz files.</p>';
        nextBtn.disabled = true;
        return;
    }

    const chapter = findChapter(quizDatabase, rawChapter);
    const questions = chapter && Array.isArray(chapter[level]) ? chapter[level] : [];

    if (!questions.length) {
        questionBox.textContent = "⚠️ Questions could not be loaded.";
        optionsBox.innerHTML = `<p style="color:white;font-size:18px;line-height:1.5">Chapter: ${rawChapter}<br>Level: ${level}<br><br>This chapter has no questions for this level in quizDatabase.js.</p>`;
        nextBtn.disabled = true;
        return;
    }

    function scope() {
        const cls = clean(localStorage.getItem("cq-current-class") || localStorage.getItem("cq-class") || "");
        const sub = clean(localStorage.getItem("cq-current-subject") || localStorage.getItem("cq-subject") || "");
        return [cls, sub, normalize(rawChapter)].filter(Boolean).join("|");
    }
    const STORAGE_KEY = "cq-quiz-progress-v3";
    function allProgress(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}"); } catch(_){ return {}; } }
    function getProgress(){ const a=allProgress(); return a[scope()] || {}; }
    function savePassed(){ const a=allProgress(); const p=a[scope()]||{}; p[level]=true; a[scope()]=p; localStorage.setItem(STORAGE_KEY,JSON.stringify(a)); }
    function isUnlocked(){ const i=levels.indexOf(level); return i<=0 || getProgress()[levels[i-1]]===true; }
    if (!isUnlocked()) { window.location.replace("quiz.html?quiz="+Date.now()); return; }

    let current = 0, score = 0, answered = false, finished = false, timer = null, timeLeft = levelInfo.time;
    function format(sec){ return String(Math.floor(sec/60)).padStart(2,"0")+":"+String(sec%60).padStart(2,"0"); }
    function updateTimer(){ timerBox.textContent=format(timeLeft); timerBox.style.background=timeLeft<=60?"#ef4444":timeLeft<=180?"#f59e0b":"#22c55e"; timerBox.style.color="#fff"; }
    function stop(){ if(timer!==null){clearInterval(timer);timer=null;} }
    function start(){ stop(); updateTimer(); timer=setInterval(()=>{ if(finished){stop();return;} timeLeft--; if(timeLeft<=0){timeLeft=0;updateTimer();finish(true);return;} updateTimer(); },1000); }
    function show(){
        const q=questions[current]; if(!q||finished)return; answered=false;
        questionBox.textContent=q.question; questionNumber.textContent=`Question ${current+1} / ${questions.length}`; optionsBox.innerHTML="";
        nextBtn.textContent=current===questions.length-1?"Finish ✓":"Next →"; nextBtn.disabled=false;
        q.options.forEach((text,i)=>{ const b=document.createElement("button"); b.className="option"; b.textContent=text; b.onclick=()=>{ if(answered||finished)return; answered=true; optionsBox.querySelectorAll("button").forEach(x=>x.disabled=true); if(i===q.answer){score++;b.style.background="#22c55e";b.style.color="#fff";}else{b.style.background="#ef4444";b.style.color="#fff";const correct=optionsBox.querySelectorAll("button")[q.answer];if(correct){correct.style.background="#22c55e";correct.style.color="#fff";}}}; optionsBox.appendChild(b); });
    }
    function finish(timeOver){
        if(finished)return; finished=true; stop(); const pct=Math.round(score/questions.length*100); const passed=pct>=levelInfo.pass; if(passed)savePassed();
        questionNumber.textContent=`Question ${questions.length} / ${questions.length}`; questionBox.textContent=timeOver?"⏰ Time Over!":"🎉 Quiz Complete!";
        optionsBox.innerHTML=`<div style="text-align:center;color:white;padding:20px"><div style="font-size:24px;font-weight:bold">${passed?"🏆 Level Passed!":"📚 Keep Practising!"}</div><div style="font-size:26px;font-weight:bold;margin:12px">Score: ${score}/${questions.length}</div><div style="font-size:20px">Percentage: ${pct}%</div><div style="font-size:17px;margin-top:12px">${passed?(levelInfo.next?"🔓 Next level unlocked for THIS chapter!":"⭐ Chapter completed!"):"You need "+levelInfo.pass+"% to unlock the next level."}</div></div>`;
        nextBtn.textContent="Finish ✓"; nextBtn.onclick=()=>window.location.href="quiz.html?quiz="+Date.now();
    }
    nextBtn.onclick=()=>{if(finished)return; if(current===questions.length-1)finish(false);else{current++;show();}};
    show(); start();
});
