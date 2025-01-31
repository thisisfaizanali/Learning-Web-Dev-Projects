let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  return randomChosenColour;
}
let randomChosenColour = nextSequence();

gamePattern.push(randomChosenColour);
