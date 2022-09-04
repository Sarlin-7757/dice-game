// javascript file 
var images  = new Array("images/dice1.png", "images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");




var size = images.length;


// changing images for dice 1 
var randomNumber1 =  Math.floor(Math.random()*size)+1;


document.querySelectorAll("img")[0].src = images[randomNumber1];

// changing images for dice 2

var randomNumber2 = Math.floor(Math.random()*size)+1;


document.querySelectorAll('img')[1].src = images[randomNumber2];


// declaration of the winner 

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}

else if ( randomNumber2 > randomNumber1 ){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} 

else{
    document.querySelector("h1").innerHTML  = "Draw"; 
}

