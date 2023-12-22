let gameseq = [];
let userseq = [];

let colors = ["green","red","purple","orange"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;
    }
    
    levelup();
})


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randomcolor = colors[randidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnflash(randombtn);
}

function checkans(idx){
    // // let idx = level-1;
    // let score = 0;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br> Press any key to start again.`
        score = level;
        highestscore();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        
    }
    reset();

}


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);
    console.log(userseq);

    checkans(userseq.length-1);
}

let buttons = document.querySelectorAll(".box");
for(btn of buttons){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

// function highestscore(sc){
//     let h3 = document.querySelector("h3");
//     h3.innerText = `Your Highest score is : ${sc}`;
// }