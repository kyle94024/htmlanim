//recieve an apple loc x and y through a function that another script calls, and create a black square at that location

function title() {
    // Create a div element for the falling text
    const fallingText = document.createElement("div");

    // Set the text content and style
    fallingText.id = "title";
    fallingText.textContent = "Empyrean";
    fallingText.style.fontSize = "250px";
    fallingText.style.color = "black";
    fallingText.style.fontFamily = "'Gill Sans', 'Gill Sans MT','Trebuchet MS'"; // Replace with your chosen font
    fallingText.style.position = "absolute";
    fallingText.style.top = "-400px"; // Initial position off-screen
    fallingText.style.left = "50%";
    fallingText.style.transform = "translateX(-50%)";
    fallingText.style.transition = "top 2s ease, opacity 2s"; // Add ease to the transition
    fallingText.style.opacity = "0"; // Initial opacity set to 0

    // Append the falling text to the body
    document.body.appendChild(fallingText);

    // Triggering the drop-down animation using a timeout
    
    setTimeout(() => {
        fallingText.style.top = "200px"; // Set the final position
        fallingText.style.opacity = "1"; // Set opacity to 1 for fade in effect
    }, 100); // Adjust the delay as needed
    // setTimeout(() => {
    //     fallingText.style.left = "700px"; // Set the final position
    moveLoopingVideo();
    
    setTimeout(() => {
        fallingText.style.transition = "top 8s linear";
        fallingText.style.top = "500px"; // Set the final position
    }, 1500); // Adjust the delay as needed

    setTimeout(() => {
        fallingText.style.transition = "top 2s ease, opacity 2s";
        // fallingText.style.top = "1000px"; // Set the final position
        fallingText.style.opacity = "0"; // Set opacity to 1 for fade out effect
    } , 3500); // Adjust the delay as needed
    
    setTimeout(() => {
        //add selectChar.js as script
        var selectChar = document.createElement('script');
        selectChar.src = "selectChar.js";
        document.head.appendChild(selectChar);
        createCharacters();
    }, 5000); // Adjust the delay as needed

}

