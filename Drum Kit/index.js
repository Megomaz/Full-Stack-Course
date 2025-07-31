const drums = document.querySelectorAll('button'); // Adding event listener to the button so it responds to clicks

drums.forEach(element => { // Loop through each button and add an event listener
    element.addEventListener('click', function(){
        makeSound(element.innerHTML);
        buttonAnimation(element.innerHTML); // Call the buttonAnimation function to animate the button
    })  // When the button is clicked, call the makeSound function
});



function makeSound(key){
    switch (key) { // Check the innerHTML of the button to determine which sound to play
        case 'w':
            // When the button is clicked, play the corresponding sound
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default: 
            console.log('Invalid key');
    }
}

document.addEventListener('keydown', function(event) { // Adding event listener for keydown events
    makeSound(event.key); // Call the makeSound function with the key that was pressed
    buttonAnimation(event.key); // Call the buttonAnimation function to animate the button
    console.log(event); // Log the event to the console for debugging
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); // Select the button that corresponds to the key pressed e.g. 'w', 'a', 's', etc.
    activeButton.classList.add("pressed"); // Add the 'pressed' class to the button

    setTimeout(function() { // Remove the 'pressed' class after a short delay
        activeButton.classList.remove("pressed");
    }, 100); // 100 milliseconds delay before removing the css class style
}