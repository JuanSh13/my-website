let show = document.getElementById('show-text');

function animateText(text) {
  let index = 0;
  let animationIntervale = setInterval(() => {
    if(index >= text.length) {
      clearInterval(animationIntervale);
    }
    else {
      show.innerHTML = text.substring(0, index + 1);
      index++;
    }
  }, 100);
}

animateText("Full Stack Web Developer");

let buttonShowList = document.getElementById('button-show-list');
let buttonHiddenList = document.getElementById('button-hidden-list');
let navigationMenu = document.getElementById('navigation-bar-menu');

buttonShowList.addEventListener('click', () => {
  navigationMenu.classList.add("navigation-bar--show");
  navigationMenu.classList.remove("navigation-bar--hidden");
});
buttonHiddenList.addEventListener('click', () => {
  navigationMenu.classList.add("navigation-bar--hidden");
  navigationMenu.classList.remove("navigation-bar--show");
});


let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 10,
      spaceBetween: 50,
    },
  },
});


// // Initialize Swiper 
// var swiper = new Swiper('.swiper-container', {
// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev'
// 	},
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	// init: false,
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
// 	},

  
// 	breakpoints: {
// 	  620: {
// 		slidesPerView: 1,
// 		spaceBetween: 20,
// 	  },
// 	  680: {
// 		slidesPerView: 2,
// 		spaceBetween: 40,
// 	  },
// 	  920: {
// 		slidesPerView: 3,
// 		spaceBetween: 40,
// 	  },
// 	  1240: {
// 		slidesPerView: 4,
// 		spaceBetween: 50,
// 	  },
// 	} 
//     });


cardsInfo = [
  {
    image: "assets/img/website-rumbo.png",
    creationDate: "2020",
    title: "Rumbo",
    description: "No Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt"
    ],
    link: "https://juansh13.github.io/Rumbo-Landign-Page/"
  },
  {
    image: "assets/img/website-construction-company-responsive.png",
    creationDate: "2020",
    title: "Construction Company",
    description: "Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt"
    ],
    link: "https://juansh13.github.io/Construction-Company-Responsive-Website/"
  },
  {
    image: "assets/img/website-beraw.png",
    creationDate: "2022",
    title: "Beraw",
    description: "Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt",
      "fa-brands fa-js"
    ],
    link: "https://juansh13.github.io/Beraw/"
  },
  {
    image: "assets/img/website-kfc-responsive.png",
    creationDate: "2023",
    title: "Kentucky Fried Chicken",
    description: "Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt", 
      "fa-brands fa-js"
    ],
    link: "https://juansh13.github.io/Beraw-Website/"
  },
  {
    image: "assets/img/website-google.png",
    creationDate: "2023",
    title: "Google",
    description: "No Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt"
    ],
    link: "https://juansh13.github.io/Google/"
  },
  {
    image: "assets/img/website-wikipedia.png",
    creationDate: "2023",
    title: "Wikipedia",
    description: "No Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt"
    ],
    link: "https://juansh13.github.io/Wikipedia/"
  },
  {
    image: "assets/img/website-yardsale.png",
    creationDate: "2023",
    title: "Yard Sale",
    description: "Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt",
      "fa-brands fa-js"
    ],
    link: "https://juansh13.github.io/YardSale-JS/"
  },
  {
    image: "assets/img/website-coffe-shop.png",
    creationDate: "2023",
    title: "Coffe Shop",
    description: "Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt",
      "fa-brands fa-js"
    ],
    link: "https://juansh13.github.io/Coffe-Shop-Responsive/"
  },
  {
    image: "assets/img/website-batatabit.png",
    creationDate: "2024",
    title: "Batatabit",
    description: "Responsive",
    technologies: [
      "fa-brands fa-html5", 
      "fa-brands fa-css3-alt",
      "fa-brands fa-js"
    ],
    link: "https://juansh13.github.io/Batatabit/"
  },
]


const cardsContainer = document.querySelector(".portafolios__cards-container");

for(let i = 0; cardsInfo.length > i; i++) {
  // Card Template
  const col = document.createElement("div");
  const cardTemplate = document.createElement("section");
  cardTemplate.classList.add('card-template', 'card-template--between', 'what-can-i-do__card', 'shadow');
  col.appendChild(cardTemplate);
  cardsContainer.appendChild(col);

  // Card Image
  const cardTemplateFigure = document.createElement("figure");
  cardTemplateFigure.classList.add('card-template__figure');
  const cardImage = document.createElement("img");
  cardImage.classList.add('card-template__img');
  cardImage.src = cardsInfo[i].image;
  cardTemplateFigure.appendChild(cardImage);
  cardTemplate.appendChild(cardTemplateFigure);

  // Card Title
  const cardTitle = document.createElement("h4");
  cardTitle.innerHTML = `${cardsInfo[i].title} (${cardsInfo[i].creationDate})`;
  cardTemplate.appendChild(cardTitle);

  // Card Technologies
  const cardTemplateTechnologies = document.createElement("div");
  cardTemplateTechnologies.classList.add('card-template__technologies');

  for(let x = 0; cardsInfo[i].technologies.length > x; x++) {
    const icon = document.createElement("i");
    let iconClass = cardsInfo[i].technologies[x];
    iconClass = iconClass.split(' ');
    for(let y = 0; iconClass.length > y; y++) {
      // console.log(iconClass[y]);
      icon.classList.add(`${iconClass[y]}`);
    }
    cardTemplateTechnologies.appendChild(icon);
  }

  cardTemplate.appendChild( cardTemplateTechnologies);

  // Card Description
  const cardDescription = document.createElement("p");
  cardDescription.innerHTML = `${cardsInfo[i].description}`;
  cardTemplate.appendChild(cardDescription);

  // Card Buttons
  const cardTemplateButtons = document.createElement("div");
  const cardButton = document.createElement("a");
  const icon = document.createElement("i");
  icon.classList.add('fa-solid', 'fa-eye');
  cardButton.innerHTML = "Vizualizar";
  cardButton.href = `${cardsInfo[i].link}`;
  cardButton.target = "_blank";
  cardButton.classList.add('button-template', 'mb-0');
  cardButton.appendChild(icon);
  cardTemplateButtons.appendChild(cardButton);
  cardTemplate.appendChild(cardTemplateButtons);
}
