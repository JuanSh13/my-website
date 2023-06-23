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