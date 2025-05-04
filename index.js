var numberOfanimalbuttons = document.querySelectorAll(".animal").length;

for (var i = 0; i < numberOfanimalbuttons; i++) {

  document.querySelectorAll(".animal")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/alligator.mp3");
      tom1.play();
      break;

    case "e":
      var tom2 = new Audio("sounds/Elefant.mp3");
      tom2.play();
      break;

    case "g":
      var tom3 = new Audio('sounds/Gorilla.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/Leopard.mp3');
      tom4.play();
      break;

    case "s":
      var snare = new Audio('sounds/rattlesnake.mp3');
      snare.play();
      break;

    case "r":
      var crash = new Audio('sounds/Rhinozerus.mp3');
      crash.play();
      break;

    case "v":
      var kick = new Audio('sounds/geier.mp3');
      kick.play();
      break;

      case "w":
      var kick = new Audio('sounds/wolf.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
