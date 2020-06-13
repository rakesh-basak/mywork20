 
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
        document.querySelectorAll(".drum")[i].addEventListener("click",drum1);
}
    

function drum1()
    {
         var abc=this.innerHTML;
         check(abc);
         buttonAnimation(abc);
     }
document.addEventListener("keypress",drum2);
function drum2(event){
   check(event.key);
   buttonAnimation(event.key);
}

function check(key)
{
    switch(key)
    {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "i":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("nothing happend")
            break;
    }
}
  function buttonAnimation(recieve)
  {
      var currentButton=document.querySelector("."+recieve);
      currentButton.classList.add("pressed")
      function out()
      {
          currentButton.classList.remove("pressed");
      }
      setTimeout(out,100);
  }
