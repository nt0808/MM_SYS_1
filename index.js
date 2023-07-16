// Array von den Bildern, die für die Funktion changeBackgroundImage angewendet werden
var images = [
  "img/café.png",
  "img/caféclosedeyes.png",
  "img/café.png",
  "img/cafésmiling.png",
  "img/café.png",
  "img/café.png",
];

var backgroundContainer = document.querySelector(".background-container");

// Funktion, um das Hintergrundbild zufällig mit Delay und Pause zu ändern
function changeBackgroundImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  backgroundContainer.style.backgroundImage = "url(" + randomImage + ")";
}

// Funktion aufgerufen, damit das erste Hintergrundbild sofort aufgerufen wird
changeBackgroundImage();

// Intervall, in dem sich das Hintergrundbild ändert (2000 ms)
setInterval(changeBackgroundImage, 2000);

// Funktion, um das Pop-Up Menü zu öffnen
function openMenuPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

// Funktion, um das Pop-Up Menü zu schließen
function closeMenuPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}
