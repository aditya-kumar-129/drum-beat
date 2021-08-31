//detecting button press using mouse
for(var i=0;i<document.getElementsByClassName("drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click" , handleClick);
    function handleClick() 
    {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }
}


document.addEventListener("keydown" , function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key)
{
    switch(key)
    {
        case "w" :
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
        case "a" :
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
        case "s" :
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
        case "d" :
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
        case "j" :
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
        case "k" :
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
        case "l" :
                    var kickbass = new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
                    break;
        default: console.log(key);
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100)
}
// the following way is called as anonymous way which works in the same way as the above code:-
// step 1:- Remove the name of the function 
// step 2:- copy the body of the function
// step 3:- paste the body in place of name of the function (the second argument) in the addEventListener
// document.querySelector("button").addEventListener("click" , function () {
//     alert("Hello");
// });