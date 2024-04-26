    //this section of code detects button press
    for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleclick);
function handleclick(){
    
   var buttonInnerHTML= this.innerHTML;
   makesound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);

   
}
}//document.querySelectorAll(".drum").length <- this gives the length of all the elements with tha class name drum

//This section of code detects keyboard press
document.addEventListener( "keydown",function(event) {
    
    makesound(event.key);
    buttonAnimation(event.key);

})
function makesound(key){
switch(key){
    case "w":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "a":
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
    case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
    case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
                    
            
    case "k":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "l":
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
        break;
    default:
        console.log(buttonInnerHTML);
      
   }
}
//adding animation to the buttons
function buttonAnimation(currentkey){
   var active= document.querySelector("." +currentkey);
    active.classList.add("pressed");
    setTimeout(function()  {
        active.classList.remove("pressed");
        
    },200 );

}
