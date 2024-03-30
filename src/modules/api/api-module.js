import { Menu } from "../menu-tab.js";

const API_KEY = "699e3da2106845ea9a811f6f6e740de0";
const apiUrl = "https://api.spoonacular.com/recipes/complexSearch?";

export class ApiModule {
  constructor() {}

  fetchMenuItems() {
    fetch(`${apiUrl}apiKey=${API_KEY}&cuisine=French&sort=time&number=9`)
      .then((response) => {
        return response.json();
      })
      .then((menuItems) => {
        let menuTab = new Menu();
        menuTab.displayMenuItems(menuItems.results);
      });
  }
}
