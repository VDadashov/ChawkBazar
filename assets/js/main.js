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

//#region tabListOne-js
let tabLiOne = document.querySelectorAll('.tab-li-one');
let tabLiContentOne = document.querySelectorAll('.tab-list-content-one')

tabLiOne.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabLiOne.forEach(item => {
      item.classList.remove('active-selected')
    })
    item.classList.add('active-selected');

    tabLiContentOne.forEach(item => {
      item.classList.remove("active-content");
    })
    tabLiContentOne[index].classList.add('active-content');

  })
});


let firstTabListproducts = [
  {
    imgUrl: `assets/img/p-1 (1).webp`,
    favoritePoint: 4,
    title: 'Armani Veni Vidi Vici',
    description: 'Fendi began life in 1925 as a fur and leathe...',
    totalPrice: {
      price: '$20.00',
      disCountPercent: '$17.99',
    },
  },
  {
    imgUrl: `assets/img/p-2.webp`,
    favoritePoint: 4.5,
    title: 'H&M Global Desi',
    description: 'Blue solid woven regular top, curved...',
    totalPrice: {
      price: '$40.00',
      disCountPercent: '$30.00',
    },
  },
  {
    imgUrl: `assets/img/p-3.webp`,
    favoritePoint: 4.5,
    title: 'Zara Solly White Shirt',
    description: "For a chic and smart look, don this wh...",
    totalPrice: {
      price: '$32.00',
      disCountPercent: '$25.00',
    },
  },
  {
    imgUrl: `assets/img/p-4.webp`,
    favoritePoint: 3,
    title: 'Hernes Carlton London',
    description: 'Off-White self-striped knitted midi A-li...',
    totalPrice: {
      price: '$20.00',
      disCountPercent: null,
    },
  },
  {
    imgUrl: `assets/img/p-5.webp`,
    favoritePoint: 4.2,
    title: 'Scuba Stand Collor Topper Jacket',
    description: 'Zara provides only the highest-quality sele...',
    totalPrice: {
      price: '$16.00',
      disCountPercent: '$12.00',
    },
  },
  {
    imgUrl: `assets/img/p-6.webp`,
    favoritePoint: 3.8,
    title: 'Armani Wide-Leg Trousers',
    description: 'Monochrome elegance. Made with a relaxe...',
    totalPrice: {
      price: '$80.00',
      disCountPercent: '$60.00',
    },
  },
  {
    imgUrl: `assets/img/p-7.webp`,
    favoritePoint: 4.1,
    title: 'Short Sleeve Shirts For Men',
    description: 'From casual days out to parties, dinners a...',
    totalPrice: {
      price: '$18.99',
      disCountPercent: '$12.99',
    },
  },
  {
    imgUrl: `assets/img/p-8.webp`,
    favoritePoint: 4.8,
    title: 'Blazer And A Neck Scarf',
    description: 'blue short sleeve basic midi dress featurin...',
    totalPrice: {
      price: '$23.00',
      disCountPercent: '$13.00',
    },
  },
]


let allCollectionOne = document.querySelector('.all-collection-one');
let mensCollection = document.querySelector('.mens-collection');
let womansCollection = document.querySelector('.womans-collection');
let kidsCollection = document.querySelector('.kids-collection');


getTabListData(firstTabListproducts, allCollectionOne);
getTabListData(firstTabListproducts, mensCollection);
getTabListData(firstTabListproducts, womansCollection);
getTabListData(firstTabListproducts, kidsCollection);

function getTabListData(products, productContent) {
  try {
    for (let i = 0; i < products.length; i++) {
      if (products[i].totalPrice.disCountPercent != null) {
        productContent.innerHTML += `<div class='product-card'><div class="hover-card-info">
      <div class="product-card-view">
        <img src="assets/img/image.png" alt="">
      </div>
      <div class="product-card-wishlist">
        <img src="assets/img/heart.png" alt="">
      </div>
      <div class="product-card-modal">
        <img src="assets/img/left-and-right-arrows.png" alt="">
      </div>
    </div>
    <div class="product-card-img">
      <img src="${products[i].imgUrl}" alt="${products[i].title}" title="${products[i].title}">
    </div>
    <div class="product-card-text">
      <div class="favorite-point">
        <img src="assets/img/star.png" alt="">
          <span>${products[i].favoritePoint}</span>
      </div>
      <h2 class="title">${products[i].title}</h2>
      <p class="content">${products[i].description}</p>
      <div class="total-price">
        <del class="price">${products[i].totalPrice.price}</del>
        <span class="discount-price">${products[i].totalPrice.disCountPercent}</span>
        </div></div>`
      } else {
        productContent.innerHTML += `<div class='product-card'><div class="hover-card-info">
      <div class="product-card-view">
        <img src="assets/img/image.png" alt="">
      </div>
      <div class="product-card-wishlist">
        <img src="assets/img/heart.png" alt="">
      </div>
      <div class="product-card-modal">
        <img src="assets/img/left-and-right-arrows.png" alt="">
      </div>
    </div>
    <div class="product-card-img">
      <img src="${products[i].imgUrl}" alt="">
    </div>
    <div class="product-card-text">
      <div class="favorite-point">
        <img src="assets/img/star.png" alt="">
          <span>${products[i].favoritePoint}</span>
      </div>
      <h2 class="title">${products[i].title}</h2>
      <p class="content">${products[i].description}</p>
      <div class="total-price">
        <span class="discount-price">${products[i].totalPrice.price}</span>
        </div></div>`
      }
    }
  } catch (error) {
    console.log('kidsCollection data si gelmedi');
  }
}

//#endregion

//#region third-slide

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

//#endregion


let tabLiTwo = document.querySelectorAll('.tab-li-two');
let tabLiContentTwo = document.querySelectorAll('.tab-list-content-two')

tabLiTwo.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabLiTwo.forEach(item => {
      item.classList.remove('active-selected')
    })
    item.classList.add('active-selected');

    tabLiContentTwo.forEach(item => {
      item.classList.remove("active-content");
    })
    tabLiContentTwo[index].classList.add('active-content');

  })
});


let secondTabListproducts = [
  {
    imgUrl: `assets/img/p-1 (1).webp`,
    favoritePoint: 4,
    title: 'Armani Veni Vidi Vici',
    description: 'Fendi began life in 1925 as a fur...',
    totalPrice: {
      price: '$20.00',
      disCountPercent: '$17.99',
    },
    newArrival : true,
  },
  {
    imgUrl: `assets/img/p-2.webp`,
    favoritePoint: 4.5,
    title: 'H&M Global Desi',
    description: 'Blue solid woven regular top, cu...',
    totalPrice: {
      price: '$40.00',
      disCountPercent: '$30.00',
    },
    newArrival : false,
  },
  {
    imgUrl: `assets/img/p-3.webp`,
    favoritePoint: 4.5,
    title: 'Zara Solly White Shirt',
    description: "For a chic and smart look, don t...",
    totalPrice: {
      price: '$32.00',
      disCountPercent: '$25.00',
    },
    newArrival : true,
  },
  {
    imgUrl: `assets/img/p-4.webp`,
    favoritePoint: 3,
    title: 'Hernes Carlton London',
    description: 'Off-White self-striped knitted mi...',
    totalPrice: {
      price: '$20.00',
      disCountPercent: null,
    },
    newArrival : false,
  },
  {
    imgUrl: `assets/img/p-5.webp`,
    favoritePoint: 4.2,
    title: 'Scuba Stand Collor Topper...',
    description: 'Zara provides only the highest-q...',
    totalPrice: {
      price: '$16.00',
      disCountPercent: '$12.00',
    },
    newArrival : false,
  },
  {
    imgUrl: `assets/img/p-6.webp`,
    favoritePoint: 3.8,
    title: 'Armani Wide-Leg Trousers',
    description: 'Monochrome elegance. Made wi...',
    totalPrice: {
      price: '$80.00',
      disCountPercent: '$60.00',
    },
    newArrival : true,
  },
  {
    imgUrl: `assets/img/p-7.webp`,
    favoritePoint: 4.1,
    title: 'Short Sleeve Shirts For Men',
    description: 'From casual days out to parties,...',
    totalPrice: {
      price: '$18.99',
      disCountPercent: '$12.99',
    },
    newArrival : false,
  },
  {
    imgUrl: `assets/img/p-8.webp`,
    favoritePoint: 4.8,
    title: 'Blazer And A Neck Scarf',
    description: 'blue short sleeve basic midi dres...',
    totalPrice: {
      price: '$23.00',
      disCountPercent: '$13.00',
    },
    newArrival : true,
  },
  {
    imgUrl: `assets/img/p-9.webp`,
    favoritePoint: 3.4,
    title: 'Armani Veni Vidi Vici',
    description: 'Fendi began life in 1925 as a fur...',
    totalPrice: {
      price: '$23.00',
      disCountPercent: '$13.00',
    },
    newArrival : true,
  },
  {
    imgUrl: `assets/img/p-10.webp`,
    favoritePoint: 2.8,
    title: 'Blazer And A Neck Scarf',
    description: 'blue short sleeve basic midi dres...',
    totalPrice: {
      price: '$23.00',
      disCountPercent: '$13.00',
    },
    newArrival : false,
  },
]


let allCollectionTwo = document.querySelector('.all-collection-two');
let flashSale = document.querySelector('.flash-sale');
let bestSellers = document.querySelector('.best-sellers');
let featured = document.querySelector('.featured');


getTabListData(secondTabListproducts, allCollectionTwo);
getTabListData(secondTabListproducts, flashSale);
getTabListData(secondTabListproducts, bestSellers);
getTabListData(secondTabListproducts, featured);

function getTabListData(products, productContent) {
  try {
    for (let i = 0; i < products.length; i++) {
      if (products[i].totalPrice.disCountPercent != null) {
        let x = products[i].totalPrice.disCountPercent;
        let y = products[i].totalPrice.price;
        let result = 100 - Math.round(Number(x.slice(1, x.length)) / Number(y.slice(1, y.length)) * 100);

        if (products[i].newArrival == true) {
          productContent.innerHTML += `<div class='product-card'>
        <div class="product-card-in-addition">
          <p class="dis-count-percent-box">
            ${result}% OFF
          </p>
          <p class="new-arriwal-exist">
            New Arrival
          </p>
        </div>
        <div class="hover-card-info">
      <div class="product-card-wishlist">
        <img src="assets/img/heart.png" alt="">
      </div>
      <div class="product-card-modal">
        <img src="assets/img/left-and-right-arrows.png" alt="">
      </div>
    </div>
    <div class="product-card-img">
      <img src="${products[i].imgUrl}" alt="${products[i].title}" title="${products[i].title}">
    </div>
    <div class="product-card-text">
      <div class="favorite-point">
        <img src="assets/img/star.png" alt="">
          <span>${products[i].favoritePoint}</span>
      </div>
      <h2 class="title">${products[i].title}</h2>
      <p class="content">${products[i].description}</p>
      <div class="total-price">
        <del class="price">${products[i].totalPrice.price}</del>
        <span class="discount-price">${products[i].totalPrice.disCountPercent}</span>
        </div></div>`
        }else{
          productContent.innerHTML += `<div class='product-card'>
        <div class="product-card-in-addition">
          <p class="dis-count-percent-box">
            ${result}% OFF
          </p>
        </div>
        <div class="hover-card-info">
      <div class="product-card-wishlist">
        <img src="assets/img/heart.png" alt="">
      </div>
      <div class="product-card-modal">
        <img src="assets/img/left-and-right-arrows.png" alt="">
      </div>
    </div>
    <div class="product-card-img">
      <img src="${products[i].imgUrl}" alt="${products[i].title}" title="${products[i].title}">
    </div>
    <div class="product-card-text">
      <div class="favorite-point">
        <img src="assets/img/star.png" alt="">
          <span>${products[i].favoritePoint}</span>
      </div>
      <h2 class="title">${products[i].title}</h2>
      <p class="content">${products[i].description}</p>
      <div class="total-price">
        <del class="price">${products[i].totalPrice.price}</del>
        <span class="discount-price">${products[i].totalPrice.disCountPercent}</span>
        </div></div>`
        }
      }else {
        productContent.innerHTML += `<div class='product-card'><div class="hover-card-info">
      <div class="product-card-wishlist">
        <img src="assets/img/heart.png" alt="">
      </div>
      <div class="product-card-modal">
        <img src="assets/img/left-and-right-arrows.png" alt="">
      </div>
    </div>
    <div class="product-card-img">
      <img src="${products[i].imgUrl}" alt="">
    </div>
    <div class="product-card-text">
      <div class="favorite-point">
        <img src="assets/img/star.png" alt="">
          <span>${products[i].favoritePoint}</span>
      </div>
      <h2 class="title">${products[i].title}</h2>
      <p class="content">${products[i].description}</p>
      <div class="total-price">
        <span class="discount-price">${products[i].totalPrice.price}</span>
        </div></div>`
      }
    
    }
  } catch (error) {
    console.log('kidsCollection data si gelmedi');
  }  
}


