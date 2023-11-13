if (window.performance.navigation.type === 1) {
  rollDice();
}
 
function rollDice() {
  var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
  var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
 
  document.querySelector(".img1").setAttribute("src", randomNumber1);
  document.querySelector(".img2").setAttribute("src", randomNumber2);
 
  changeTitle(randomNumber1, randomNumber2);
}
 
function changeTitle(num1, num2) {
  if (num1 === num2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
}


// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "dice"+ randomNumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;


// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
