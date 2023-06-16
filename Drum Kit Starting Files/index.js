var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "e":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "r":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "t":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "y":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "u":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "i":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "z":
      var crash = new Audio("sounds/piano/1.mp3");
        crash.play();
        break;
    case "s":
      var crash = new Audio("sounds/piano/2.mp3");
        crash.play();
        break;
    case "x":
      var crash = new Audio("sounds/piano/3.mp3");
      crash.play();
      break;
    case "d":
      var crash = new Audio("sounds/piano/4.mp3");
      crash.play();
      break;
    case "c":
      var crash = new Audio("sounds/piano/5.mp3");
      crash.play();
      break;
    case "v":
      var crash = new Audio("sounds/piano/6.mp3");
      crash.play();
      break;
    case "b":
      var crash = new Audio("sounds/piano/8.mp3");
      crash.play();
      break;
    case "g":
      var crash = new Audio("sounds/piano/7.mp3");
      crash.play();
      break;
    case "n":
      var crash = new Audio("sounds/piano/10.mp3");
      crash.play();
      break;
    case "h":
      var crash = new Audio("sounds/piano/9.mp3");
      crash.play();
      break;
    case "m":
      var crash = new Audio("sounds/piano/12.mp3");
      crash.play();
      break;
    case "j":
      var crash = new Audio("sounds/piano/11.mp3");
      crash.play();
      break;
    case ",":
      var crash = new Audio("sounds/piano/13.mp3");
      crash.play();
      break;
            
    default:
      console.log(buttonInnerHtml);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 150);
}


