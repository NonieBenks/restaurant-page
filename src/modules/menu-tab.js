import { ApiModule } from "./api/api-module";

class Menu {
  constructor() {}

  displayMenuItems(items) {
    const menuContentBlock = document.createElement("div");
    const menuContainer = document.createElement("div");

    menuContentBlock.classList.add("content-block", "menu-content-block");
    menuContainer.className = "menu-container";

    items.forEach((item) => {
      const menuItem = document.createElement("div");
      const menuTitle = document.createElement("h4");
      const menuImage = document.createElement("img");
      const menuPrice = document.createElement("p");

      menuItem.className = "menu-item";

      menuTitle.textContent = `${item.title}`;
      menuImage.src = `${item.image}`;
      menuPrice.textContent = `${
        Math.floor(Math.random() * (20 - 10 + 1)) + 10
      } €`;

      menuItem.appendChild(menuTitle);
      menuItem.appendChild(menuImage);
      menuItem.appendChild(menuPrice);
      menuContainer.appendChild(menuItem);
    });
    document.body.appendChild(menuContentBlock);
    menuContentBlock.appendChild(menuContainer);
  }
  requestMenuItems() {
    let apiModule = new ApiModule();
    apiModule.fetchMenuItems();
  }
}

export { Menu };
