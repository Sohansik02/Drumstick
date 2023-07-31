function helpclick(){
    var buttonclick=this.innerHTML;
    makesound(buttonclick);
    anim(buttonclick);
}
function makesound(char){
    switch(char){
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
        case "k":
            var cras=new Audio("sounds/crash.mp3");
            cras.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}
for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",helpclick); 
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    anim(event.key);
});

function anim(key){
    var buttonanim=document.querySelector("."+key);
    buttonanim.classList.add("pressed");

    setTimeout(function(){
        buttonanim.classList.remove("pressed");
    },100);
}
