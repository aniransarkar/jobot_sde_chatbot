// Function to handle button click events
function selectOption(option) {
  var audio = document.getElementById("background-music");

  if (option === "yes") {
    // Unmute and play the audio
    audio.muted = false; // Unmute the audio
    audio.volume = 1.0; // Set volume to max
    audio
      .play()
      .then(() => console.log("Audio playing"))
      .catch((error) => console.log("Autoplay blocked:", error));

    // Flash rainbow colors and display cat-heart image
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none"; // Hide the question
      displayCatHeart();
    });
  } else if (option === "no") {
    // Change "No" button text and increase "Yes" button font size
    document.getElementById("no-button").innerText = "You sure?";
    var yesButton = document.getElementById("yes-button");
    var currentFontSize = window
      .getComputedStyle(yesButton)
      .getPropertyValue("font-size");
    var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2
    yesButton.style.fontSize = newSize + "px";
  } else {
    alert("Invalid option!");
  }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
  var colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];
  var i = 0;
  var interval = setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200); // Change color every 200 milliseconds
  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = ""; // Reset background color
    if (callback) {
      callback();
    }
  }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat-heart.gif
function displayCatHeart() {
  // Clear existing content in the image container
  document.getElementById("image-container").innerHTML = "";
  // Get the container where the image will be displayed
  var imageContainer = document.getElementById("image-container");
  // Create a new Image element for the cat-heart
  var catHeartImage = new Image();
  // Set the source (file path) for the cat-heart image
  catHeartImage.src = "cat-heart.gif"; // Assuming the cat-heart image is named "cat-heart.gif"
  // Set alternative text for the image (for accessibility)
  catHeartImage.alt = "Cat Heart";
  // When the cat-heart image is fully loaded, add it to the image container
  catHeartImage.onload = function () {
    imageContainer.appendChild(catHeartImage);
    // Hide the options container
    document.getElementById("options").style.display = "none";
  };
}

// Function to display the initial cat.gif when the page loads
function displayCat() {
  var imageContainer = document.getElementById("image-container");
  var catImage = new Image();
  catImage.src = "cat.gif"; // Assuming the cat image is named "cat.gif"
  catImage.alt = "Cat";

  catImage.onload = function () {
    imageContainer.appendChild(catImage);
  };
}

// Call function to display the cat.gif initially
displayCat();
