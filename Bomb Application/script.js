let inputEl = document.getElementById("inputtag");
let countdownEl = document.getElementById("countdown");
let bombEl = document.getElementById("bomb");
let msgEl = document.getElementById("msg");

let counter = 10;
let timevalue = setInterval(intervalfun,1000);

function submitfun(event){
    console.log(event.key);
    if(inputEl.value === "DEFUSE" && event.key === "Enter"){
        clearInterval(timevalue);
        if(counter > 0){
            bombEl.src = "./defuse.png";
            msgEl.textContent = "Bomb Defused";
        }
    }
}



function intervalfun(){
    countdownEl.textContent = counter;
    if(counter === 0){
        clearInterval(timevalue);
        bombEl.src = "./boom.png";
        msgEl.textContent = "Boom";
    }
    counter= counter - 1;
}

inputEl.addEventListener("keyup",submitfun);