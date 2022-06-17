for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var whichButton = this.innerHTML;
    makesound(whichButton);
    buttonAnimation(whichButton);


  });
}


document.addEventListener("keydown", function(event) {
makesound(event.key);
buttonAnimation(event.key);
});


function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;





    default:

  }
}

function buttonAnimation(currentKey)
{
  var grabbedKey = document.querySelector("."+currentKey);
  grabbedKey.classList.add("pressed");   //classList is having all classes of that Element, So we added pressed class for give some shadow to active buttonAnimation
setTimeout(function(){
  grabbedKey.classList.remove("pressed");
}, 100);
}








// function Bclick()
// {
//   alert("i got clicked!");
// }
//
// var i = document.querySelectorAll("button");
// i[0].addEventListener("click",Bclick);
// i[1].addEventListener("click",Bclick);
// i[2].addEventListener("click",Bclick);
// i[3].addEventListener("click",Bclick);
// i[4].addEventListener("click",Bclick);
// i[5].addEventListener("click",Bclick);
// i[6].addEventListener("click",Bclick);
