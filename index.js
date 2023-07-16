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

// Funktion, um die saisonale Karte JSON Datei zu laden
function loadSeasonalMenu() {
  fetch("json/seasonal-menu.json")
    .then((response) => response.json())
    .then((data) => {
      const coffeeMenuContainer = document.getElementById("seasonal");

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
      console.log("Error loading seasonal menu:", error);
    });
}

loadSeasonalMenu();

// Funktion, um die Kaffesorten JSON Datei zu laden
function loadCoffeeMenu() {
  fetch("json/coffee-menu.json")
    .then((response) => response.json())
    .then((data) => {
      const coffeeMenuContainer = document.getElementById("coffee");

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

loadCoffeeMenu();

// Funktion, um die Teesorten JSON Datei zu laden
function loadTeaMenu() {
  fetch("json/tea-menu.json")
    .then((response) => response.json())
    .then((data) => {
      const coffeeMenuContainer = document.getElementById("tea");

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
      console.log("Error loading tea menu:", error);
    });
}

loadTeaMenu();

// Funktion, um die Getränkesorten JSON Datei zu laden
function loadBeverageMenu() {
  fetch("json/beverage-menu.json")
    .then((response) => response.json())
    .then((data) => {
      const coffeeMenuContainer = document.getElementById("beverage");

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
      console.log("Error loading beverage menu:", error);
    });
}

loadBeverageMenu();

// Funktion, um die Desssertsorten JSON Datei zu laden
function loadDessertMenu() {
  fetch("json/dessert-menu.json")
    .then((response) => response.json())
    .then((data) => {
      const coffeeMenuContainer = document.getElementById("dessert");

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
      console.log("Error loading dessert menu:", error);
    });
}

loadDessertMenu();