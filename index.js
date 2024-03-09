let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let your_score_div = document.querySelector("#your-score-div");
let computer_score_div = document.querySelector("#computer-score-div"); 


function generateComputerNumber(){
    var computerNumber = Math.floor(Math.random() * 3) + 1;
    return computerNumber;
}

let userNumber ;

var winPlayer ; 

    
let user_win = 0;
let computer_win = 0;


rock.addEventListener('click', () => {
    computerNumber = generateComputerNumber();
    console.log("rock clicked")
    userNumber = 1;
    comparison();
});

paper.addEventListener('click', () => {
    computerNumber = generateComputerNumber();
    userNumber = 2;
    comparison();
    
   
});

scissors.addEventListener('click', () => {
    computerNumber = generateComputerNumber();
    userNumber= 3;
    comparison();
});

function comparison(){

    


    if(userNumber == 1 && computerNumber == 1) winPlayer = 0;
    else if(userNumber == 1 && computerNumber == 2) winPlayer = 2;
    else if(userNumber == 1 && computerNumber == 3) winPlayer = 1;

    else if(userNumber == 2 && computerNumber == 1) winPlayer = 1;
    else if(userNumber == 2 && computerNumber == 2) winPlayer = 0;
    else if(userNumber == 2 && computerNumber == 3) winPlayer = 2;

    else if(userNumber == 3 && computerNumber == 1) winPlayer = 2;
    else if(userNumber == 3 && computerNumber == 2) winPlayer = 1;
    else if(userNumber == 3 && computerNumber == 3) winPlayer = 0;



    var result = document.querySelector(".result");
    var user_score = document.querySelector("#You-win");
    var computer_score = document.querySelector("#Computer-win");

    if(winPlayer == 0){
        console.log("draw");
        result.innerHTML = "<h1>Draw !!! Play again.</h1>";
        
        result.style.backgroundColor = 'yellow';
        return;
    }

    if(winPlayer == 1){
        user_win++;
        if(computer_win === user_win){
            computer_score_div.style.backgroundColor = '#E9B361'; 
            your_score_div.style.backgroundColor = '#E9B361'; 
        }
        user_score.innerHTML = `<h2>${user_win}</h2>`;
        if(computer_win < user_win){
            computer_score_div.style.backgroundColor= '#DE3163';
            your_score_div.style.backgroundColor= '#17B169';
        }
        result.innerHTML = "<h1>You win !!!</h1>";
        result.style.backgroundColor = 'green';
        return;
    }

    if(winPlayer == 2){
        computer_win++;
        if(computer_win === user_win){
            computer_score_div.style.backgroundColor = '#E9B361'; 
            your_score_div.style.backgroundColor = '#E9B361'; 
        }
        computer_score.innerHTML = `<h2>${computer_win}</h2>`;
        if(computer_win > user_win){
            your_score_div.style.backgroundColor= '#DE3163';
            computer_score_div.style.backgroundColor= '#17B169';

        }
        result.innerHTML = "<h1>Computer Win !!!</h1>";
        result.style.backgroundColor = 'red';
        return;
    }
}

