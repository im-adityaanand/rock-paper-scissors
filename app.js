let uCheck = 0;  //1 for rock, 2 for paper, 3 for scissors
let cCheck = 0;
let uScore = 0;
let cScore = 0;
let trials = 7;
let clickCount = 0;

function clicked(uc){
    switch(uc){
        case 1:
            document.querySelector(".urock").classList.remove("na");
            document.querySelector(".upaper").classList.add("na");
            document.querySelector(".uscissors").classList.add("na");
            break;
        case 2:
            document.querySelector(".urock").classList.add("na");
            document.querySelector(".upaper").classList.remove("na");
            document.querySelector(".uscissors").classList.add("na");
            break;
        case 3:
            document.querySelector(".urock").classList.add("na");
            document.querySelector(".upaper").classList.add("na");
            document.querySelector(".uscissors").classList.remove("na");
            break;
    }

    let num = Math.floor(Math.random()*3) + 1;

    switch(num){
        case 1:
            document.querySelector(".crock").classList.remove("na");
            document.querySelector(".cpaper").classList.add("na");
            document.querySelector(".cscissors").classList.add("na");
            break;
        case 2:
            document.querySelector(".crock").classList.add("na");
            document.querySelector(".cpaper").classList.remove("na");
            document.querySelector(".cscissors").classList.add("na");
            break;
        case 3:
            document.querySelector(".crock").classList.add("na");
            document.querySelector(".cpaper").classList.add("na");
            document.querySelector(".cscissors").classList.remove("na");
            break;
    }

    if(uc==1 && num==2){
        cScore++;
        clickCount++;
    } else if(uc==2 && num == 1){
        uScore++;
        clickCount++;
    } else if(uc==2 && num==3){
        cScore++;
        clickCount++;
    } else if(uc==3 && num==2){
        uScore++;
        clickCount++;
    } else if(uc==3 && num==1){
        cScore++;
        clickCount++;
    } else if(uc==1 && num==3){
        uScore++;
        clickCount++;
    }

    document.querySelector(".uscore").innerHTML = uScore;
    document.querySelector(".cscore").innerHTML = cScore;
}

function checkResult(){
    let result = document.querySelector(".result");
    document.querySelector(".result").classList.remove("na");
    document.querySelector(".play-again-btn").classList.remove("na");

    if(uScore > cScore){
        result.innerHTML = "You won the game!"
    } else if(uScore < cScore) {
        result.innerHTML = "Computer won the game."
    } else {
        result.innerHTML = "Match draw!"
    }
}

document.querySelector(".rock-btn").addEventListener("click", function(){
    uCheck = 1;
    if(clickCount < trials){
        clicked(uCheck);
    } else {
        checkResult();
    }
});

document.querySelector(".paper-btn").addEventListener("click", function(){
    uCheck = 2;
    if(clickCount < trials){
        clicked(uCheck);
    } else {
        checkResult();
    }
});

document.querySelector(".scissors-btn").addEventListener("click", function(){
    uCheck = 3;
    if(clickCount < trials){
        clicked(uCheck);
    } else {
        checkResult();
    }
});