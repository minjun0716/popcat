const cat = document.getElementById("cat");
const score = document.getElementById("score");
const isMoblie = /Android|iPhone/i.test(navigator.userAgent);
let sc= 0;

function onMouseUp() {
    cat.src="./assets/img/normal.png";

}

function onMouseDown() {
    cat.src= "./assets/img/waaaaa.png";

    const audio =new Audio("./assets/pop.mp3");
    audio.play();

    sc+=1;
    score.innerText = sc;
}

cat.addEventListener("mouseup", onMouseUp);
cat.addEventListener("mousedown", onMouseDown);
cat.addEventListener("mouseout", onMouseUp);