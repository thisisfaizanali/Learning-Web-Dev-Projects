//short approach :
var n = document.querySelectorAll(".drum").length; // number of drum buttons
//event listener for button clicks and finding out the key
for (let i = 0; i < n; ++i) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    makeSound(buttonInnerHTML);
  });
}
//event listener for keyboard clicks
document.addEventListener("keydown", function (event) {
  // this.style.color = "white";
  buttonAnimation(event.key);
  makeSound(event.key);
});
//using one function to play all the sounds
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("assets/sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("assets/sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("assets/sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("assets/sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("assets/sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("assets/sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("assets/sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
//function to add animation for clicks/presses
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
