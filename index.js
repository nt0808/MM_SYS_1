var images = [
  "café.png",
  "caféclosedeyes.png",
  "café.png",
  "cafésmiling.png",
  "café.png",
  "café.png",
];

var backgroundContainer = document.querySelector(".background-container");

// Function to change the background image with delay and pause
function changeBackgroundImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  backgroundContainer.style.backgroundImage = "url(" + randomImage + ")";
}

// Call the function initially to display the first background image immediately
changeBackgroundImage();

// Set interval to change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 2000);

function openMenuPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closeMenuPopup( popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}
