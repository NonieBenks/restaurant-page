import Img from '../assets/img/restaurant.jpeg';

const restarantPic = new Image();

class About {
    constructor() {}
    buildAboutContent() {
        restarantPic.src = Img;
        const aboutContainer = document.createElement("div");
        const aboutContentBlock = document.createElement("div");
        const aboutTextFirst = document.createElement("div"); 
        const aboutTextSecond= document.createElement("div"); 
        
        aboutContentBlock.classList.add("content-block", "about-content-block");
        aboutTextFirst.className = "about-block";
        aboutTextSecond.className = "about-block2";
        aboutContainer.className = "about-content-container";


        aboutTextFirst.innerText = `It all started with the grandma Adeline in the distant year 1975 with les meilleures croissants dans la ville.`
        aboutTextSecond.innerText = `A family passionate about cooking, providing authentic french cuisine experience to the middle of Barcelona through centuries. 
         \n We were able to stay in the restaurant business through flexibility and perseverance. \nNow Chez Adeline is so much more than just delicious croissants. 
         \nYou are welcome to see for yourself!`;
        document.body.appendChild(aboutContentBlock);
        aboutContentBlock.appendChild(aboutContainer);
        aboutContainer.appendChild(aboutTextFirst);
        aboutContainer.appendChild(restarantPic);
        aboutContainer.appendChild(aboutTextSecond);

        this.buildContactsInfo(aboutContentBlock);
    }

    buildContactsInfo(aboutContentBlock) {
        const contactsContainer = document.createElement("div");
        const contactsBlock = document.createElement("div");
        const contactsText = document.createElement("div");
        const orderInfo = document.createElement("div");
        const orderButton = document.createElement("button");

        contactsBlock.className = "contacts-block";
        contactsText.className = "contacts-text";
        contactsContainer.className = "contacts-container";
        orderInfo.className = "order-info";
        orderButton.className = "order-button";

        contactsText.innerText = `We are open Monday to Friday 8:00am to 5:00pm. \n\n You can visit us at: \nde Còrsega, 235, L'Eixample, 08036 Barcelona, Spain`;
        orderInfo.innerText = `\nOr make a reservation online:\n`;
        orderButton.innerText = "Reserve a table";
        
        aboutContentBlock.appendChild(contactsBlock);
        contactsBlock.appendChild(contactsContainer);
        contactsContainer.appendChild(contactsText);
        contactsContainer.appendChild(orderInfo);
        orderInfo.appendChild(orderButton);
    }
}

export { About };
