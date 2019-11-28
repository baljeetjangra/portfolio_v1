let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoices(){
    const choices =['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter=='r') return 'Rock';
    if(letter == 'p') return 'Paper';
    return 'Scissor';
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} Beats ${convertToWord(computer)} You Win ! 😊`;
    document.getElementById(convertToWord(user).toLowerCase()).classList.add('green-glow');

    setTimeout(function(){document.getElementById(convertToWord(user).toLowerCase()).classList.remove('green-glow')},500);

}

function lose(user,computer){
    computerScore++;;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computer)} Beats ${convertToWord(user)} You Lose ! 😱`;
    document.getElementById(convertToWord(user).toLowerCase()).classList.add('red-glow');
    setTimeout(function(){document.getElementById(convertToWord(user).toLowerCase()).classList.remove('red-glow')},500);

}

function draw(user, computer){

    result_p.innerHTML = `${convertToWord(computer)} Equals ${convertToWord(user)} It's a Draw ! 🤭 `;
    document.getElementById(convertToWord(user).toLowerCase()).classList.add('grey-glow');

    setTimeout(function(){document.getElementById(convertToWord(user).toLowerCase()).classList.remove('grey-glow')},500);

}

function game(userChoice){
    const computerChoice =getComputerChoices();
    switch(userChoice + computerChoice){
        case "pr":
        case "sp":
        case "rs":
          win(userChoice,computerChoice);  
        break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
        break;
    }
}

function main(){
rock_div.addEventListener('click',  function() {
    game("r");
})

paper_div.addEventListener('click',function() {
    game("p");
})

scissor_div.addEventListener('click',function(){
    game("s");
})
}

main();