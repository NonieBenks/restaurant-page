import { Menu } from "../menu-tab.js";

const API_KEY = "699e3da2106845ea9a811f6f6e740de0";
const apiUrl = "https://api.spoonacular.com/recipes/complexSearch?";
const priceApiUrl = `https://api.spoonacular.com/recipes/`;

export class ApiModule {
  constructor() {}

  fetchFoodData() {
    fetch(`${apiUrl}apiKey=${API_KEY}&cuisine=French&sort=random`)
      .then((response) => {
        return response.json();
      })
      .then((menuItems) => {
        const fetchPromises = menuItems.results.map((item) => {
          return fetch(
            `${priceApiUrl}${item.id}/priceBreakdownWidget.json?apiKey=${API_KEY}`
          )
            .then((response) => response.json())
            .then((data) => data.totalCost);
        });
        // TODO: finish fetching prices
        // Promise.all(fetchPromises).then((prices) => {
        //   console.log(prices);
        // });
        // menuItems.results.forEach(item => {
        //     fetch(
        //         `${priceApiUrl}${item.id}/priceBreakdownWidget.json?apiKey=${API_KEY}`
        //     ).then((response) => {
        //         menuPrice.textContent = `${response["totalCost"]} €`;
        //     });
        // })
        let menuTab = new Menu();
        menuTab.receiveMenuItems(menuItems.results);
      });
  }
}
