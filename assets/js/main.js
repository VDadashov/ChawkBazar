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

//#region tabList-js
let tabLi = document.querySelectorAll('.tab-li');
let tabLiContent = document.querySelectorAll('.tab-list-content')

tabLi.forEach((item,index) => {
  item.addEventListener('click',()=>{
    tabLi.forEach(item=>{
      item.classList.remove('active-selected')
    })
    item.classList.add('active-selected');

    tabLiContent.forEach(item=>{
      item.classList.remove("active-content");
    })
    tabLiContent[index].classList.add('active-content');
    
  })
});
//#endregion

let swiper2 = new Swiper(".fifth-section-content-carousel-container", {
  slidesPerView: 7,
  spaceBetween: 28,
  sliderPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 7,
    }
  },
});