// script.js

function addLoopingVideo() {
    // Create video element
    const videoElement = document.createElement("video");

    // Set video attributes
    videoElement.autoplay = true; // Add autoplay attribute
    videoElement.loop = true;
    videoElement.innerHTML = "Your browser does not support the video tag.";
    
    // Create source element and set its attributes
    const sourceElement = document.createElement("source");
    sourceElement.src = "JLLONG.mp4"; // Adjust the video source path
    sourceElement.type = "video/mp4";

    // Append source element to video element
    videoElement.appendChild(sourceElement);

    // Set initial video styling
    videoElement.id = "loopingVideo";
    videoElement.style.position = "absolute";
    videoElement.style.top = "0";
    videoElement.style.left = "-300px";
    // videoElement.style.width = "100%";
    videoElement.style.height = "100%";
    // videoElement.style.objectFit = "cover";
    videoElement.style.opacity = "0"; // Initial opacity set to 0
    videoElement.style.zIndex = "-8"; // Set z-index to -1 to ensure it's behind other elements

    // Append video element to body
    videoContainer = document.createElement("div");
    videoContainer.style.position = "absolute";
    videoContainer.style.top = "0";
    videoContainer.style.left = "0";
    videoContainer.style.width = "100%";
    videoContainer.style.height = "100%";
    videoContainer.style.overflow = "hidden";
    videoContainer.style.zIndex = "-9";
    videoContainer.appendChild(videoElement);

    document.body.appendChild(videoContainer);

    // Add transition to fade in effect
    videoElement.style.transition = "opacity 1s"; // Adjust the duration as needed

    // Use a setTimeout to ensure the transition takes effect after appending
    setTimeout(() => {
        videoElement.style.opacity = "0.5"; // Set opacity to 1 for fade in effect
    }, 0);
}

function moveLoopingVideo() {
    const moveThis = document.getElementById("loopingVideo");
    moveThis.style.transition = "left 10s linear";
    setTimeout(() => {
        moveThis.style.left = "-600px";
    }, 0);
}

// add a one time auto play video called SnowTransitionEdited.mp4
// script.js

// Function to add QuickTime video
// script.js

// script.js

// Function to add WebM video with alpha
// script.js

function addTransitionVideo() {
    // Create video element
    const transitionVid = document.createElement("video");

    // Set attributes for the video
    transitionVid.id = "transitionVideo";
    transitionVid.style.width = "150%";
    transitionVid.style.height = "150%";
    transitionVid.style.position = "absolute";
    transitionVid.style.opacity = "0"; // Initially set opacity to 0
    transitionVid.style.top = "-50px";
    transitionVid.style.left = "-220px";
    transitionVid.style.zIndex = "-7";
    transitionVid.style.filter = `brightness(90%)`;
    transitionVid.autoplay = true;
    transitionVid.muted = true;

    // Create source element for WebM video
    const sourceWebM = document.createElement("source");
    sourceWebM.src = "STConverted.webm";
    sourceWebM.type = "video/webm";

    // Append source element to video element
    transitionVid.appendChild(sourceWebM);

    // Append video element to the container
    document.body.appendChild(transitionVid);

    // Triggering the fade-in using a timeout
    setTimeout(() => {
        transitionVid.style.opacity = "1"; // Set opacity to the desired value
        transitionVid.style.transition = "opacity 0.5s"; // Set the transition property
    }, 100); // Adjust the delay as needed
    setTimeout(() => {
        document.body.removeChild(transitionVid);
    }, 2000); // 2000 milliseconds = 2 seconds
}


// // Call the function to add the WebM video when the DOM is ready
// document.addEventListener("DOMContentLoaded", addTransitionVideo);










