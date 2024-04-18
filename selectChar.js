function createCharacters() {
    // Container for characters
    const characterContainer = document.createElement("div");
    characterContainer.id = "character-container";
    document.body.appendChild(characterContainer);

    // Array to store character elements
    const characters = [];

    // Custom positions for the characters
    const customPositions = [
        { top: 50, left: 50 },
        { top: 100, left: 150 },
        { top: 150, left: 250 },
    ];

    // Create three black boxes (50px by 50px) with customizable positions
    for (let i = 0; i < 3; i++) {
        const character = document.createElement("div");
        character.className = "character";
        character.style.width = "50px";
        character.style.height = "50px";
        character.style.backgroundColor = "black";

        // Set the position based on the array
        if (customPositions && customPositions[i]) {
            const { top, left } = customPositions[i];
            character.style.position = "absolute";
            character.style.top = top + "px";
            character.style.left = left + "px";
        }

        characterContainer.appendChild(character);

        // Add click event listener to each character
        character.addEventListener("click", () => {
            // Set the selected index when a character is clicked
            setSelectedIndex(i);
        });

        // Add character element to the array
        characters.push(character);
    }

    // Apply glow effect on hover
    const glowStyle = document.createElement("style");
    glowStyle.innerHTML = `
        .character:hover {
            box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5); /* Adjust the values for the desired glow effect */
        }
    `;
    document.head.appendChild(glowStyle);

    // Function to get the selected index
    function getSelectedIndex() {
        return selectedIndex;
    }

    // Function to set the selected index
    function setSelectedIndex(index) {
        selectedIndex = index;
        // Log or perform any other actions when the index is set
        console.log("Selected Index:", index);
    }

    // Expose functions to the outside
    return {
        getSelectedIndex,
        setSelectedIndex,
    };
}
