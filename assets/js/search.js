const casualWearProductContent = document.querySelector('.casual-wear__product-content');

let casualWearProducts = [
    {
        imgUrl: `assets/search/img/p-6.webp`,
        title: 'Oversized W Swe...',
        description: 'Constructed in cotto...',
        totalPrice: {
            price: '$70.00',
            disCountPercent: '55.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-19.webp`,
        title: 'Zara Shoes Gree...',
        description: 'Footwear refers to...',
        totalPrice: {
            price: '$250.00',
            disCountPercent: '$300.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-8.webp`,
        title: 'Gucci Carlton UK...',
        description: 'Knidded midi A-lin...',
        totalPrice: {
            price: '$14.99',
            disCountPercent: '$19.99',
        },
    },
    {
        imgUrl: `assets/search/img/p-16.webp`,
        title: 'Armani Wide-Leg...',
        description: "Monochrome elegan...",
        totalPrice: {
            price: '$80.00',
            disCountPercent: '$60.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-5.webp`,
        title: 'Zara Solly White...',
        description: 'For a chic and smart...',
        totalPrice: {
            price: '$32.00',
            disCountPercent: '$25.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-3.webp`,
        title: 'Zara Shoes Green',
        description: 'Footwear refers to g...',
        totalPrice: {
            price: '$16.00',
            disCountPercent: null,
        },
    },
    {
        imgUrl: `assets/search/img/p-19.webp`,
        title: 'Zara Shoes Gree...',
        description: 'Footwear refers to...',
        totalPrice: {
            price: '$250.00',
            disCountPercent: '$300.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-8.webp`,
        title: 'Gucci Carlton UK...',
        description: 'Knidded midi A-lin...',
        totalPrice: {
            price: '$14.99',
            disCountPercent: '$19.99',
        },
    },
    {
        imgUrl: `assets/search/img/p-16.webp`,
        title: 'Armani Wide-Leg...',
        description: "Monochrome elegan...",
        totalPrice: {
            price: '$80.00',
            disCountPercent: '$60.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-8.webp`,
        title: 'Gucci Carlton UK...',
        description: 'Knidded midi A-lin...',
        totalPrice: {
            price: '$14.99',
            disCountPercent: '$19.99',
        },
    },
    {
        imgUrl: `assets/search/img/p-16.webp`,
        title: 'Armani Wide-Leg...',
        description: "Monochrome elegan...",
        totalPrice: {
            price: '$80.00',
            disCountPercent: '$60.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-5.webp`,
        title: 'Zara Solly White...',
        description: 'For a chic and smart...',
        totalPrice: {
            price: '$32.00',
            disCountPercent: '$25.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-6.webp`,
        title: 'Oversized W Swe...',
        description: 'Constructed in cotto...',
        totalPrice: {
            price: '$70.00',
            disCountPercent: '55.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-19.webp`,
        title: 'Zara Shoes Gree...',
        description: 'Footwear refers to...',
        totalPrice: {
            price: '$250.00',
            disCountPercent: '$300.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-8.webp`,
        title: 'Gucci Carlton UK...',
        description: 'Knidded midi A-lin...',
        totalPrice: {
            price: '$14.99',
            disCountPercent: '$19.99',
        },
    },
    {
        imgUrl: `assets/search/img/p-8.webp`,
        title: 'Gucci Carlton UK...',
        description: 'Knidded midi A-lin...',
        totalPrice: {
            price: '$14.99',
            disCountPercent: '$19.99',
        },
    },
    {
        imgUrl: `assets/search/img/p-16.webp`,
        title: 'Armani Wide-Leg...',
        description: "Monochrome elegan...",
        totalPrice: {
            price: '$80.00',
            disCountPercent: '$60.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-8.webp`,
        title: 'Gucci Carlton UK...',
        description: 'Knidded midi A-lin...',
        totalPrice: {
            price: '$14.99',
            disCountPercent: '$19.99',
        },
    },
    {
        imgUrl: `assets/search/img/p-16.webp`,
        title: 'Armani Wide-Leg...',
        description: "Monochrome elegan...",
        totalPrice: {
            price: '$80.00',
            disCountPercent: '$60.00',
        },
    },
    {
        imgUrl: `assets/search/img/p-5.webp`,
        title: 'Zara Solly White...',
        description: 'For a chic and smart...',
        totalPrice: {
            price: '$32.00',
            disCountPercent: '$25.00',
        },
    },
]

function getAddcasualWearProduct() {
    for (let i = 0; i < casualWearProducts.length; i++) {
        // debugger
        casualWearProductContent.innerHTML += `<div class="casual-wear__product">
    <div class="casual-wear__product__img">
        <img src="${casualWearProducts[i].imgUrl}" alt="">
    </div>
    <div class="casual-wear__product__text">
        <h2 class="casual-wear__product__title">${casualWearProducts[i].title}</h2>
        <p class="casual-wear__product__description">${casualWearProducts[i].description}</p>
        <div class="casual-wear__product__price-content">
            <span class="casual-wear__product__dis-count-price">${casualWearProducts[i].totalPrice.disCountPercent}</span>
            <del class="casual-wear__product__price">${casualWearProducts[i].totalPrice.price}</del>
        </div>
    </div>
    </div>`
    }
}

getAddcasualWearProduct();