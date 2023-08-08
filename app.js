let gameSeq=[];
let userSeq=[];
 
let btns=["yellow","red","purple","green"]

let started = false;
let level=0;
let highScore=0;



let h2 = document.querySelector("h2");
let bton=document.querySelector(".bton");
bton.addEventListener("click",function(){
    if(started == false) { 
    started = true; 
    levelUp();
           }
    });
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 100);
};

//user flash
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 100);
};

//game level up function
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`; 

    let randIX=Math.floor(Math.random()*4);
    let randColor=btns[randIX];
    let randBtn =document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
};

// uder press function
function btnPress() {
    let btn =this;
    userColor = btn.getAttribute("id");
    userflash(btn);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};

//check ans 
function checkAns(idx) {

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(
            levelUp,1000
           )
        }
        console.log("same value");
    } else {
        const gameOverSound = document.getElementById("gameOverSound");
        gameOverSound.play();
        highScore = checkHighScore(level);
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br><br>Click start button  to restart`; 
        let h =document.querySelector("h3");
        h.innerText =`Highest Score is : ${highScore}`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor="#161B33";
        },500);
        reset();
      
    }
}
//heighest 
function checkHighScore(score) {
    if (score > highScore) {
      highScore = score;
    }
    return highScore;
   
  }
//reset function 
function reset() {
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
