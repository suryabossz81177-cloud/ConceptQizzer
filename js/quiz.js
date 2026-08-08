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

    btn.style.opacity = ".55";

    btn.style.cursor = "not-allowed";

    const badge = btn.querySelector(".lockBadge");

    if(badge){
        badge.style.display = "block";
    }

}else{

    const badge = btn.querySelector(".lockBadge");

    if(badge){
        badge.style.display = "none";
    }

}

});

function unlockNextLevel(currentLevel){

    const nextLevel = currentLevel + 1;

    const unlocked =
    parseInt(localStorage.getItem("cq-unlocked-level") || "0");

    if(nextLevel > unlocked){

        localStorage.setItem(
            "cq-unlocked-level",
            nextLevel
        );

    }

}
