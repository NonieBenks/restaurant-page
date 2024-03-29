import { ApiModule } from "./api/api-module";

const API_KEY = "699e3da2106845ea9a811f6f6e740de0";

class Menu {
  constructor() {}

  receiveMenuItems(items) {
    console.log(items.results);
    const menuContainer = document.createElement("div");
    items.results.forEach((item) => {
      fetch(
        `${priceApiUrl}${item.id}/priceBreakdownWidget.json?apiKey=${API_KEY}`
      ).then((response) => {
        menuPrice.textContent = `${response["totalCost"]} €`;
      });
      const menuItem = document.createElement("div");
      const menuTitle = document.createElement("h4");
      const menuImage = document.createElement("img");
      const menuPrice = document.createElement("p");

      menuItem.className = "menu-item";

      menuTitle.textContent = `${item.title}`;
      menuImage.src = `${item.image}`;

      menuItem.appendChild(menuTitle);
      menuItem.appendChild(menuImage);
      menuItem.appendChild(menuPrice);
      menuContainer.appendChild(menuItem);
    });
    document.body.appendChild(menuContainer);
  }
  buildMenuContent() {
    let apiModule = new ApiModule();
    apiModule.fetchFoodData();
  }
}

export { Menu };
