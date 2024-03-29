import Img from "../assets/img/noodles.jpeg";

const pastaPic = new Image();

class Home {
  constructor() {}

  buildHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const logoBlock = document.createElement("div");
    const buttonContainer = document.createElement("div");

    logoBlock.className = "logo-block";
    buttonContainer.className = "button-container";

    logoBlock.innerText = "Chez \n Adeline";

    header.appendChild(nav);
    nav.appendChild(logoBlock);
    nav.appendChild(buttonContainer);

    const buttonsArray = ["Home", "Menu", "About"];

    buttonsArray.forEach((btn) => {
      const button = document.createElement("button");
      button.className = `${btn.toLowerCase()}-button`;
      buttonContainer.appendChild(button);
      button.innerText = btn;
    });
    document.body.appendChild(nav);
  }

  buildContent() {
    pastaPic.src = Img;

    const contentContainer = document.createElement("div");
    const contentBlock = document.createElement("div");
    const descriptionBlock = document.createElement("div");
    const menuButton = document.createElement("button");

    contentBlock.classList.add("content-block", "home-content-block");
    contentContainer.className = "content-container";
    descriptionBlock.className = "description-block";
    menuButton.className = "menu-button";

    menuButton.innerText = "Menu";
    descriptionBlock.innerText =
      "Welcome to Chez Adeline! \n Bringing you the most delicate french culinary experience since 1965.";

    contentBlock.appendChild(contentContainer);
    contentContainer.appendChild(descriptionBlock);
    contentContainer.appendChild(menuButton);
    contentBlock.appendChild(pastaPic);

    document.body.appendChild(contentBlock);
  }
}

export { Home };
