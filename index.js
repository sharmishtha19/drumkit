var j = document.querySelectorAll(".drum").length;

for (var i = 0; i < j; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var innerHtml = this.innerHTML;
    makeSound(innerHtml);

  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key)
});


function makeSound(key) {


  switch (key) {
    case "w":
      var tom1 = new Audio("C:/Users/Sharmishtha kumar/Desktop/web dev course/drum kit/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("C:/Users/Sharmishtha kumar/Desktop/web dev course/drum kit/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("C:/Users/Sharmishtha kumar/Desktop/web dev course/drum kit/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("C:/Users/Sharmishtha kumar/Desktop/web dev course/drum kit/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("C:/Users/Sharmishtha kumar/Desktop/web dev course/drum kit/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("C:/Users/Sharmishtha kumar/Desktop/web dev course/drum kit/sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("C:/Users/Sharmishtha kumar/Desktop/web dev course/drum kit/sounds/kick-bass.mp3");
      kick.play();
      break;


    default: console.log(innerHtml);

  }

}
