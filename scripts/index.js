//JS Initialization
console.log("JS is loaded");

//Canvas Initialization
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Start Button
const startButton = document.getElementById("start");

//Create the Player
const player = new Component(0, 200, 75, 75, ctx, "./images/daco.png");

//Create hit sound
const hitSound = document.getElementById("hitSound");


//Start Button on Click
startButton.onclick = function () {
  console.log("starting");
  const game = new Game(ctx, canvas.width, canvas.height, player);
  /* backgroundMusic.play(); */
  game.start();

};
