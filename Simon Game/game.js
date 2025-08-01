let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).keydown(function() {
    if (!started) {
        started = true;
        $("h1").text("Level " + level);
        nextSequence();
    }
});


function nextSequence(){
    userClickedPattern = []; // Reset user pattern for new level
    level++;
    $("h1").text("Level " + level);
    var randomNumber =  Math.floor(Math.random() * 4);
    
    let randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    
    animatePress(randomChosenColor);
    playSound(randomChosenColor);

}

$(".btn").on('click',function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour); 
    animatePress(userChosenColour);
    if (checkAnswer(userClickedPattern.length - 1)){
        playSound(userChosenColour);
    }else{
        gameOver();
        $('body').addClass("game-over");
        setTimeout(function() {
            $('body').removeClass("game-over");
        }, 200);
        playSound("wrong");
    }
   
});

function playSound(name){
    var colourSound = new Audio('sounds/' + name + '.mp3');
    colourSound.play();
}

function checkAnswer(currentLevel){
    
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        // If user finished full sequence
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
        return true;
    }else{
        $('h1').text("Game Over, Press Any Key to Restart");
        return false;
    }
}

function gameOver(){
    level = 0;
    started = false;
    gamePattern = [];
    userClickedPattern = [];
}

function animatePress(currentColour){
    $("#" + currentColour).addClass('pressed');

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
}