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

// Function to load and process JSON data
function loadCoffeeMenu() {
  // Fetch the JSON file
  fetch("coffee-menu.json")
    .then((response) => response.json())
    .then((data) => {
      // Get the coffee menu container
      const coffeeMenuContainer = document.getElementById("coffee");

      // Loop through the menu items and create the HTML elements dynamically
      data.menuItems.forEach((menuItem) => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");

        const menuItemImage = document.createElement("div");
        menuItemImage.classList.add("menu-item-image");
        const img = document.createElement("img");
        img.src = menuItem.image;
        img.alt = menuItem.title;
        menuItemImage.appendChild(img);
        menuItemElement.appendChild(menuItemImage);

        const menuItemDetails = document.createElement("div");
        menuItemDetails.classList.add("menu-item-details");
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        const titleElement = document.createElement("h2");
        titleElement.classList.add("menu-item-title");
        titleElement.textContent = menuItem.title;
        const priceElement = document.createElement("span");
        priceElement.classList.add("menu-item-price");
        priceElement.textContent = menuItem.price;
        menuContainer.appendChild(titleElement);
        menuContainer.appendChild(priceElement);
        menuItemDetails.appendChild(menuContainer);

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("menu-item-description");
        descriptionElement.textContent = menuItem.description;
        menuItemDetails.appendChild(descriptionElement);

        menuItemElement.appendChild(menuItemDetails);

        coffeeMenuContainer.appendChild(menuItemElement);
      });
    })
    .catch((error) => {
      console.log("Error loading coffee menu:", error);
    });
}

// Call the function to load the coffee menu
loadCoffeeMenu();