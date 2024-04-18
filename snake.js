document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    var applesEaten = 0;
    var applesRequired = document.getElementById("applesReq");

    let snake = [
        { x: 8, y: 7 },
        { x: 7, y: 7 },
        { x: 6, y: 7 }
    ];

    let apples = []; // Array to store apple positions

    let direction = "right"; // Change the starting direction to "right"


    const segmentColors = [  
        [250, 190, 40],   
        [250, 200, 60],
        [250, 206, 85],   
        [250, 216, 122],   
        [250, 227, 162],
        [250, 237, 199],
        [250, 246, 237],
        [250, 250, 250],
        [250, 250, 250],
        [250, 250, 250],
        // Add more RGB values as needed
    ];

    function drawSnake() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        
        snake.forEach((segment, index) => {
            // Use modulo to cycle through the array of colors
            const color = segmentColors[index % segmentColors.length];
        
            // Set the fill style and draw the snake segment
            ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            ctx.fillRect(segment.x * 50 - 1, segment.y * 50 - 1, 47, 47);
        });
    }

    function drawApples() {
        apples.forEach(apple => {
            ctx.fillStyle = "rgb(81, 212, 252)"; // Red color for apples
            ctx.fillRect(apple.x * 50+3, apple.y * 50+3, 40, 40);
        });
    }

    function moveSnake() {
        const head = Object.assign({}, snake[0]);
        switch (direction) {
            case "up":
                head.y -= 1;
                break;
            case "down":
                head.y += 1;
                break;
            case "left":
                head.x -= 1;
                break;
            case "right":
                head.x += 1;
                break;
        }

        if (head.x < 0 || head.x >= 30 || head.y < 0 || head.y >= 15) {
            // Snake hit the wall, stop the snake from moving
            return;
        }

        snake.unshift(head);

        apples.forEach((apple, index) => {
            if (head.x === apple.x && head.y === apple.y) {
                // Snake ate the apple, so remove it and add a new one
                apples.splice(index, 1);
                addApple();
                applesEaten++;
        
                // Extend snake length by adding a new segment to the end
                const tail = { x: snake[snake.length - 1].x, y: snake[snake.length - 1].y };
                snake.push(tail);
        
                flashText();
                applesRequired.textContent = applesEaten + "/3";
            }
        });

        // Remove the tail of the snake
        snake.pop();
    }

    function flashText() {
        // Flash the text to a different color
        applesRequired.style.transition = 'none'; // Disable transition for instant change
        if (applesEaten < 3) {
            applesRequired.style.color = 'rgb(250, 211, 212)';
        } else {
            applesRequired.style.color = 'rgb(220, 255, 214)';
        }
    
        // Force a reflow before enabling the transition again
        void applesRequired.offsetWidth;
    
        // After a short delay, enable the transition for a smooth fade
        setTimeout(() => {
            applesRequired.style.transition = 'color 1s';
            if (applesEaten < 3) {
                applesRequired.style.color = 'rgb(255, 95, 74)';
            } else {
                applesRequired.style.color = 'rgb(116, 214, 101)';
            }
        }, 50); // Adjust the delay as needed
    }

    function addApple() {
        // Generate a random position for the new apple, avoiding the edges
        const newApple = {
            x: Math.floor(Math.random() * (canvas.width / 50 - 6)) + 3, // Avoiding the left and right 4 blocks
            y: Math.floor(Math.random() * (canvas.height / 50 - 4)) + 2  // Avoiding the top and bottom 4 blocks
        };
    
        // Add the new apple to the array
        apples.push(newApple);
    }

    function gameLoop() {
        if (getAudioPlaying()) {
            moveSnake();
            drawSnake();
            drawApples();
        }
    }
    var audio = document.getElementById("myAudio");

    //return whether the audio is playing or not
    function getAudioPlaying() {
        return !audio.paused;
    }

    // if audio time is over 7 seconds, stop the game
    audio.addEventListener("timeupdate", handleTimeUpdate);
    var video = document.createElement('script');
    video.src = "video.js";
    document.head.appendChild(video);

    function handleTimeUpdate() {
        if (audio.currentTime > 6.5) {
            if (!document.getElementById("transitionVideo")) {
                addTransitionVideo();
            }
        }
        if (audio.currentTime > 7.1) {
            if (applesEaten >= 3) {

                // var transition = document.createElement('script');
                // transition.src = "transition.js";
                // document.head.appendChild(transition);
                //createSquare(apples[0].x * 50+3, apples[0].y * 50+3);
                snakeCanvas = document.getElementById("snakeCanvas");
                //fade the canvas out
                snakeCanvas.style.transition = 'opacity 0.5s';
                snakeCanvas.style.opacity = 0;
                snakeCanvas.style.display = 'none';
                applesRequired.style.display = 'none';
                //stop this event listener
                
                if (!document.getElementById("loopingVideo")) {
                    addLoopingVideo();
                }
                var transition = document.createElement('script');
                
                if (!document.getElementById("title")) {
                    transition.src = "transition.js";
                    document.head.appendChild(transition);
                    //call the title from transition.js
                    title();
                }
                
                audio.removeEventListener("timeupdate", handleTimeUpdate);


                //add transition.js to the dom
                
                //send the single apple location to the appleloc function in transition.js in pixels, converting the grid location to pixels
                

            } else {
                applesRequired.textContent = "Dead";
                audio.removeEventListener("timeupdate", handleTimeUpdate);
            }
        }
    }


    // Add initial apples
    for (let i = 0; i < 1; i++) {
        addApple();
    }
    moveSnake();
    drawSnake();
    drawApples();
    setInterval(gameLoop, 130);

    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowUp":
            case "w":
                direction = "up";
                break;
            case "ArrowDown":
            case "s":
                direction = "down";
                break;
            case "ArrowLeft":
            case "a":
                direction = "left";
                break;
            case "ArrowRight":
            case "d":
                direction = "right";
                break;
        }
    });


    
});
