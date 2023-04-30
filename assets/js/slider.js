//#region first-slide
let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let currentSlide = 1;

let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

let repeat = function (activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;

  let repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  }
  repeater();
}
repeat();
//#endregion

//#region second-slide
let swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
  //#endregion

//   let swiperfFour = new Swiper(".eleventh-section-content-container", {
//   slidesPerView: 5,
//   spaceBetween: 10,
//   sliderPerGroup: 5,
//   loop: true,
//     autoHeight : true,
//     pagination: {
//       el: ".swiper-pagination-fraction",
//       clickable: true,
//       dynamicBullets: true,
//       type : 'fraction'
//     },
//     centerSlide: "true",
//     fade: "true",
//     grabCursor: "true",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     520: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1000: {
//       slidesPerView: 3,
//     },
//   },
// });

let swiperfour = new Swiper(".testimonial-content-container", {
    slidesPerView: 3,
    spaceBetween: 25,
    sliderPerGroup: 3,
    loop: true,
    autoHeight : true,
    pagination: {
      el: ".swiper-pagination-fraction",
      clickable: true,
      dynamicBullets: true,
      type : 'fraction'
    },
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });