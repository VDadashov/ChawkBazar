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

tabLi.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabLi.forEach(item => {
      item.classList.remove('active-selected')
    })
    item.classList.add('active-selected');

    tabLiContent.forEach(item => {
      item.classList.remove("active-content");
    })
    tabLiContent[index].classList.add('active-content');

  })
});


let allCollectionProducts = [
  {
    imgUrl : `assets/img/p-1 (1).webp`,
    favoritePoint : 4,
    title : 'Armani Veni Vidi Vici',
    content : 'Fendi began life in 1925 as a fur and leathe...',
    totalPrice : {
      price : '$20.00',
      disCountPercent : '$17.99',
    },
  },
  {
    imgUrl : `assets/img/p-2.webp`,
    favoritePoint : 4.5,
    title : 'H&M Global Desi',
    content : 'Blue solid woven regular top, curved...',
    totalPrice : {
      price : '$40.00',
      disCountPercent : '$30.00',
    },
  },
  {
    imgUrl : `assets/img/p-3.webp`,
    favoritePoint : 4.5,
    title : 'Zara Solly White Shirt',
    content : "For a chic and smart look, don this wh...",
    totalPrice : {
      price : '$32.00',
      disCountPercent : '$25.00',
    },
  },
  {
    imgUrl : `assets/img/p-4.webp`,
    favoritePoint : 3,
    title : 'Hernes Carlton London',
    content : 'Off-White self-striped knitted midi A-li...',
    totalPrice : {
      price : '$20.00',
      disCountPercent : null,
    },
  },
  {
    imgUrl : `assets/img/p-5.webp`,
    favoritePoint : 4.2,
    title : 'Scuba Stand Collor Topper Jacket',
    content : 'Zara provides only the highest-quality sele...',
    totalPrice : {
      price : '$16.00',
      disCountPercent : '$12.00',
    },
  },
  {
    imgUrl : `assets/img/p-6.webp`,
    favoritePoint : 3.8,
    title : 'Armani Wide-Leg Trousers',
    content : 'Monochrome elegance. Made with a relaxe...',
    totalPrice : {
      price : '$80.00',
      disCountPercent : '$60.00',
    },
  },
  {
    imgUrl : `assets/img/p-7.webp`,
    favoritePoint : 4.1,
    title : 'Short Sleeve Shirts For Men',
    content : 'From casual days out to parties, dinners a...',
    totalPrice : {
      price : '$18.99',
      disCountPercent : '$12.99',
    },
  },
  {
    imgUrl : `assets/img/p-8.webp`,
    favoritePoint : 4.8,
    title : 'Blazer And A Neck Scarf',
    content : 'blue short sleeve basic midi dress featurin...',
    totalPrice : {
      price : '$23.00',
      disCountPercent : '$13.00',
    },
  },
]


let allCollection = document.querySelector('.all-collection');
let mensCollection = document.querySelector('.mens-collection');
let womansCollection = document.querySelector('.womans-collection');
let kidsCollection = document.querySelector('.kids-collection');

try {
  for(let i = 0;i < allCollectionProducts.length;i++){
    if(allCollectionProducts[i].totalPrice.disCountPercent != null){
      allCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <del class="price">${allCollectionProducts[i].totalPrice.price}</del>
      <span class="discount-price">${allCollectionProducts[i].totalPrice.disCountPercent}</span>
      </div></div>`
    }else{
      allCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <span class="discount-price">${allCollectionProducts[i].totalPrice.price}</span>
      </div></div>`
    }
  }
} catch (error) {
  console.log('allCollection data si gelmedi');
}

try {
  for(let i = 0;i < allCollectionProducts.length;i++){
    if(allCollectionProducts[i].totalPrice.disCountPercent != null){
      mensCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <del class="price">${allCollectionProducts[i].totalPrice.price}</del>
      <span class="discount-price">${allCollectionProducts[i].totalPrice.disCountPercent}</span>
      </div></div>`
    }else{
      mensCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <span class="discount-price">${allCollectionProducts[i].totalPrice.price}</span>
      </div></div>`
    }
  }
} catch (error) {
  console.log('mensCollection data si gelmedi');
}

try {
  for(let i = 0;i < allCollectionProducts.length;i++){
    if(allCollectionProducts[i].totalPrice.disCountPercent != null){
      womansCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <del class="price">${allCollectionProducts[i].totalPrice.price}</del>
      <span class="discount-price">${allCollectionProducts[i].totalPrice.disCountPercent}</span>
      </div></div>`
    }else{
      womansCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <span class="discount-price">${allCollectionProducts[i].totalPrice.price}</span>
      </div></div>`
    }
  }
} catch (error) {
  console.log('womansCollection data si gelmedi');
}

try {
  for(let i = 0;i < allCollectionProducts.length;i++){
    if(allCollectionProducts[i].totalPrice.disCountPercent != null){
      kidsCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <del class="price">${allCollectionProducts[i].totalPrice.price}</del>
      <span class="discount-price">${allCollectionProducts[i].totalPrice.disCountPercent}</span>
      </div></div>`
    }else{
      kidsCollection.innerHTML +=`<div class='product-card'><div class="hover-card-info">
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
    <img src="${allCollectionProducts[i].imgUrl}" alt="">
  </div>
  <div class="product-card-content">
    <div class="favorite-point">
      <img src="assets/img/star.png" alt="">
        <span>${allCollectionProducts[i].favoritePoint}</span>
    </div>
    <h2 class="title">${allCollectionProducts[i].title}</h2>
    <p class="content">${allCollectionProducts[i].content}</p>
    <div class="total-price">
      <span class="discount-price">${allCollectionProducts[i].totalPrice.price}</span>
      </div></div>`
    }
  }
} catch (error) {
  console.log('kidsCollection data si gelmedi');
}

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