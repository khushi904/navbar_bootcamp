function Music1(){
    var bMusic = new Audio('sounds/tom-1.mp3')
	bMusic.play()
}
function Music2(){
    var bMusic = new Audio('sounds/tom-2.mp3')
	bMusic.play()
}
function Music3(){
    var bMusic = new Audio('sounds/tom-3.mp3')
	bMusic.play()
}
function Music4(){
    var bMusic = new Audio('sounds/tom-4.mp3')
	bMusic.play()
}
function Music5(){
    var bMusic = new Audio('sounds/crash.mp3')
	bMusic.play()
}
function Music6(){
    var bMusic = new Audio('sounds/kick-bass.mp3')
	bMusic.play()
}
function Music7(){
    var bMusic = new Audio('sounds/snare.mp3')
	bMusic.play()
}
document.addEventListener("keypress",function(event){
    animate(event.key)
    switch (event.key) {
        case "w":
            Music1();
            break;
        case "a":
            Music2();
            break;
        case "s":
            Music3();
            break;
        case "d":
            Music4();
            break;
        case "j":
            Music5();
            break;
        case "k":
            Music6();
            break;
        case "l":
            Music7();
            break;  
        default:
            alert("No such key")
            break;
    }

})
function animate(key){

}