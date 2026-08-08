const levels = [
    "easy",
    "medium",
    "hard",
    "tooHard",
    "extreme"
];

const unlocked =
parseInt(localStorage.getItem("cq-unlocked-level") || "0");

levels.forEach((level,index)=>{

    const btn =
    document.querySelector("." + level);

    if(!btn) return;

    if(index>unlocked){

        btn.disabled = true;

        btn.innerHTML =
        "🔒 " + btn.textContent;

        btn.style.opacity = ".55";

        btn.style.cursor = "not-allowed";

    }

});
