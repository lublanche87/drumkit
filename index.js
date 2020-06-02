//Detecting buttons clicked

var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
  })
}

//Detecting keyboard pressed

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});



//Checking and making sounds

function makeSound(key) {

  switch (key) {
    case "ㅁ":
    case "a":
    case "A":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "ㄴ":
    case "s":
    case "S":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "ㅇ":
    case "d":
    case "D":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "ㄹ":
    case "f":
    case "F":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "ㅓ":
    case "j":
    case "J":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;


    case "ㅏ":
    case "k":
    case "K":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "ㅣ":
    case "l":
    case "L":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
      console.log(buttonInnerHtml);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100); //remove Pressed effect after 0.1 second
}
