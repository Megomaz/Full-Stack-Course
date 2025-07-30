function randomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

dice1 = randomNumber();
dice2 = randomNumber();

const image1 = document.querySelector(".img1");
image1.setAttribute("src", "images/dice"+dice1 +".png");

const image2 = document.querySelector(".img2");
image2.setAttribute("src", "images/dice"+dice2 +".png");

if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}