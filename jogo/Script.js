let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerchoice(){
    const choices = ['r','p','s'];
    const randowNumber = Math.floor(Math.random() * 3);
    return choices[randowNumber];
}
function convertToWord(letter){
    if(letter === "r") return "Pedra";
    if(letter === "p") return "Papel";
    return "Tesoura";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Ganhou de  " + convertToWord(computerChoice) + " VocÊ Ganhou!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300)

}   
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Perde para " + convertToWord(computerChoice) + " Você perdeu";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300)
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Empatou com " + convertToWord(computerChoice) + " Ninguem Leveu";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300)
}


function game(userchoice){
    const computerchoice = getComputerchoice();
    switch(userchoice + computerchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computerchoice);
            break;
    }
}    
game("c");                              
            
function main(){
rock_div.addEventListener('click',function(){
    game("r");
})

paper_div.addEventListener('click',function(){
    game("p");
})

scissors_div.addEventListener('click',function(){
    game("s");
})

}
main();