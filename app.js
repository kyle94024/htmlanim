const headerElement = document.getElementById('HeaderBar');
headerElement.style.transform = 'translateY(-100px)';


window.addEventListener('mousemove', (event) => {
    const mouseY = (event.clientY-10)/2;
    const threshold = 0;

    if (mouseY < 60) {
        // headerElement.style.transform = `translateY(${Math.min(-15,0-mouseY*2)}px)`;
        headerElement.style.transform = `translateY(-15px)`;
        headerElement.style.opacity = Math.min(1, (180-mouseY)/100);
    } else {
        headerElement.style.transform = `translateY(-100px)`;
        headerElement.style.opacity = 0;
    }
    
});

var audio = document.getElementById("myAudio");
function changeAudioTime(newTime) {
    audio.currentTime = newTime + audio.currentTime;
    console.log(audio.currentTime)
}

function getAudioTime() {
    return audio.currentTime;
}

var currentTimeDisplay = document.getElementById("currentTime");

audio.addEventListener("timeupdate", function() {
    // Update the displayed time during audio playback
    currentTimeDisplay.style.fontSize = '100px';
    currentTimeDisplay = document.getElementById("currentTime");
    currentTimeDisplay.textContent = audio.currentTime.toFixed(2) + "s";
    currentTimeDisplay.style.color = 'rgb(246, 168, 247, 1)';
    currentTimeDisplay.style.fontFamily = 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS';
    currentTimeDisplay.style.fontSize = '100px';
});

// update mousePos on mouse move using event listener
var mousePos = {x:0, y:0};
var currentX = document.getElementById("currentX");
var currentY = document.getElementById("currentY");
window.addEventListener('mousemove', function(e) {
    currentX.textContent = e.clientX;
    currentY.textContent = e.clientY;
});

function disableScrolling() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Add a fixed position to the body to prevent scrolling
    // document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
}

function enableScrolling() {
    // Remove the fixed position and restore the scroll position
    const scrollY = parseInt(document.body.style.top || '0');
    document.body.style.position = '';
    document.body.style.top = '';
    
    // Scroll to the original position
    window.scrollTo(0, scrollY);
}

// Call disableScrolling when you want to disable scrolling
disableScrolling();
