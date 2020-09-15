var scores, activePlayer, roundScore, gamePlaying, input;

// var previousRoll, previousRoll2


init();

document.querySelector('.btn-roll').addEventListener("click", function (){
    if (gamePlaying) {
        
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceTwo = Math.floor(Math.random() * 6) + 1;
        
        // var dice = 6;
     
        var diceImage = document.querySelector(".dice");
        var diceImage2 = document.querySelector(".dice2");
        
        // pointing the image path by using var dice with the random numbers.
        diceImage.style.display = "block";
        diceImage2.style.display = "block";
        
        diceImage.src =  "game-images/dice-" + dice + ".png"; 
        diceImage2.src =  "game-images/dice-" + diceTwo + ".png";
       
        // if dice is equal to previous roll from the last click and equal to 6(valur assigned in the rules) user looses points.
        if (dice === 6 && diceTwo === 6) {
            scores[activePlayer] = 0;
        
            document.querySelector('#score-' + activePlayer).textContent = "0";
            document.querySelector(".boo-" + activePlayer ).innerHTML = "<h3 style='text-align:center; color: #00dcff; font-size: 20px; font-weight:900;'>You found double number 6</h3>";
  
            setTimeout(function () {
                    moveNext();
            }, 500);
      } 
        
        else if (dice === 1 && diceTwo === 1) {
       document.querySelector(".boo-" + activePlayer ).innerHTML = "<h3 style='text-align:center; color: #00dcff; font-size: 20px; font-weight:900;'>You found double number 1</h3>";
            moveNext();  
        } else {
         roundScore += dice + diceTwo; // sum dice values and store dice results to roundScore.
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        // Display total sum into id #current box using activePlayer as an indicator of current player. 
        }
        // previousRoll = dice; // store dice value at the end of the whole operation. 
        // previousRoll2 = dice2;
    }
});

//set score

//hold btn
document.querySelector(".btn-hold").addEventListener("click", function(){
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var winningScore;

        input = document.getElementById("inputScore").value;


        if (input > 0) {
            
            winningScore = input;            
        } else {
            document.getElementById("alert").textContent = "Please, choose a number greater than 0, otherwise score default is 100";
            winningScore = 100;
        }

    if (scores[activePlayer] >= winningScore) {
        document.querySelector("#name-" + activePlayer).textContent = "WINNER";
        document.querySelector(".dice").display = "none";
        document.querySelector(".player-" + activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer+"-panel").classList.remove("active");
       
        if (activePlayer == 0 ){
            document.querySelector(".player-1-panel").classList.add("looser");
        } else {
            document.querySelector(".player-0-panel").classList.add("looser");
        }
        
         gamePlaying = false;
         
      } else {
        document.querySelector(".secured-" + activePlayer ).innerHTML = "<h3 style='text-align:center; color: yellow; font-size: 18px; font-weight:900;'>You have secured your points.</h3>";
        moveNext();
}
} 
});

function moveNext(){    

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // If active player === 0, ? = then move to player 1, else move to player 0.
    roundScore = 0; // reset sum of points to the next player
    // previousRoll = 0;
    document.querySelector('#current-1').textContent = "0";
    document.querySelector('#current-0').textContent = "0";
    document.querySelector(".boo-" + activePlayer ).innerHTML = " "; // reset msgs
    document.querySelector(".secured-" + activePlayer ).innerHTML = " "; // reset msgs
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".player-0-panel").classList.toggle("non-active");
    document.querySelector(".player-1-panel").classList.toggle("non-active");
    // document.querySelector('.dice').style.display = "none";
}

// document.querySelector("#current-" + activePlayer).textContent = dice; // setting div to display the random numbers

//functions init with all default values
document.querySelector(".btn-new").addEventListener("click", init);


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    // document.getElementById("scoreInput").textContent = "choose a score winning" ;

    document.querySelector('.dice').style.display = "none";
    document.querySelector('.dice2').style.display = "none";

    document.querySelector(".player-0-panel").classList.remove("winner"); 
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("looser");
    document.querySelector(".player-1-panel").classList.remove("looser");

    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("non-active");

    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.add("non-active");


    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    
    document.getElementById("name-0").textContent = "Player 1";   
    document.getElementById("name-1").textContent = "Player 2";   
    
    document.querySelector(".boo-0").innerHTML = " ";
    document.querySelector(".boo-1").innerHTML = " ";
    
    document.querySelector(".secured-0").innerHTML = " ";
    document.querySelector(".secured-1").innerHTML = " ";
    // document.querySelector('player-0-panel').classList.remove("winner");
    // document.querySelector('player-1-panel').classList.remove("winner");
    // document.querySelector('.player-0-panel').classList.remove("active");
    // document.querySelector('player-1-panel').classList.remove("active");
    // document.querySelector('player-0-panel').classList.add("active");

}