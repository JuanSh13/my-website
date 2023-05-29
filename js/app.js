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