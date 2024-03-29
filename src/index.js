import { Home } from "./modules/home-tab";
import "./styles.css";

let homePage = new Home("../assets/img/noodles.jpeg");

homePage.buildHeader();
homePage.buildContent();

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelectorAll(".menu-button");
const aboutButton = document.querySelector(".about-button");

homeButton.addEventListener("click", () => {
  import("./modules/home-tab.js").then((Module) => {
    clearContent();
    const homeTab = new Module.Home();
    homeTab.buildContent();
  });
});

menuButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    import("./modules/menu-tab.js").then((Module) => {
      clearContent();
      const menuTab = new Module.Menu();
      menuTab.buildMenuContent();
    });
  });
});

aboutButton.addEventListener("click", () => {
  import("./modules/about-tab.js").then((Module) => {
    clearContent();
    const aboutTab = new Module.About("../assets/img/restaurant.jpeg");
    aboutTab.buildAboutContent();
  });
});

function clearContent() {
  let contentBlock = document.querySelector(`.content-block`);

  if (contentBlock !== null) {
    contentBlock.remove();
  }
}
