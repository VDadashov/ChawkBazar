const sizeList = document.querySelectorAll('.product-details-content--custom-size');

sizeList.forEach(item => {
    item.addEventListener('click',()=>{
        sizeList.forEach(item => {
            item.classList.remove('product-details-content--active-size');
        });
        item.classList.add('product-details-content--active-size');
    })
});