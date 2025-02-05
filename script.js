// Function to handle button click events
function selectOption(option) {
  var audio = document.getElementById("background-music");

  if (option === "yes") {
    // Unmute and play the audio
    audio.muted = false;
    audio.volume = 1.0;
    audio
      .play()
      .then(() => console.log("Audio playing"))
      .catch((error) => console.log("Autoplay blocked:", error));

    // Flash rainbow colors, then change background and display cat-heart image
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none"; // Hide the question

      // Set the background for the webpage
      document.body.style.backgroundImage = "url('background.jpg')";
      document.body.style.backgroundSize = "cover"; // Ensure full coverage on large screens
      document.body.style.backgroundPosition = "center"; // Center the background
      document.body.style.backgroundAttachment = "fixed"; // Keep it fixed during scrolling

      // Mobile-specific background adjustments
      if (window.innerWidth <= 768) {
        // For mobile screens
        document.body.style.backgroundSize = "contain"; // Make sure the entire background image is visible
      }

      displayCatHeart();
    });
  } else if (option === "no") {
    // Change "No" button text and increase "Yes" button font size
    document.getElementById("no-button").innerText = "You sure?";
    var yesButton = document.getElementById("yes-button");
    var currentFontSize = window
      .getComputedStyle(yesButton)
      .getPropertyValue("font-size");
    var newSize = parseFloat(currentFontSize) * 2;
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
  }, 200);

  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = "";
    if (callback) {
      callback();
    }
  }, 2000);
}

// Function to display the cat-heart.gif
function displayCatHeart() {
  document.getElementById("image-container").innerHTML = "";
  var imageContainer = document.getElementById("image-container");
  var catHeartImage = new Image();
  catHeartImage.src = "cat-heart.gif";
  catHeartImage.alt = "Cat Heart";

  catHeartImage.onload = function () {
    imageContainer.appendChild(catHeartImage);
    document.getElementById("options").style.display = "none";
  };
}

// Function to display the initial cat.gif when the page loads
function displayCat() {
  var imageContainer = document.getElementById("image-container");
  var catImage = new Image();
  catImage.src = "cat.gif";
  catImage.alt = "Cat";

  catImage.onload = function () {
    imageContainer.appendChild(catImage);
  };
}

// Call function to display the cat.gif initially
displayCat();
