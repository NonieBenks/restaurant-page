import Img from './assets/img/restaurant.jpeg';
import './styles.css';

const restarantPic = new Image();
restarantPic.src = Img;
function buildHeader() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const buttonContainer = document.createElement("div");

  buttonContainer.className = "button-container";
 
  header.appendChild(nav);
  nav.appendChild(buttonContainer);

  const buttonsArray = ["Home", "About", "Contact"];

  buttonsArray.forEach(btn => {
    const button = document.createElement("button");
    buttonContainer.appendChild(button);
    button.innerText = btn;
  })
  document.body.appendChild(nav);}

function buildContent() {
  const contentContainer = document.createElement("div");
  const contentBlock = document.createElement("div");
  const logoBlock = document.createElement("div");
  const descriptionBlock = document.createElement("div");
  const menuButton = document.createElement("button");

  logoBlock.className = "logo-block";
  contentBlock.className = "content-block";
  contentContainer.className = "content-container";
  descriptionBlock.className = "description-block";

  logoBlock.innerText = "Chez \n Adeline";
  menuButton.innerText = "Menu";
  descriptionBlock.innerText = "Welcome to Chez Adeline! \n Bringing you the most delicate french culinary experience since 1965."

  contentBlock.appendChild(contentContainer);
  contentContainer.appendChild(logoBlock);
  contentContainer.appendChild(descriptionBlock);
  contentContainer.appendChild(menuButton);
  contentBlock.appendChild(restarantPic);

  document.body.appendChild(contentBlock);
}
console.log('restart again');
buildHeader();
buildContent();