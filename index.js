var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "ㅁ":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "ㄴ":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "ㅇ":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "ㄹ":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "ㅓ":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;


      case "ㅏ":
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;

      case "ㅣ":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      default:
        console.log(buttonInnerHtml);

    }

  });

}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
