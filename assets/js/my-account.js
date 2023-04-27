let dashboardTabLi = document.querySelectorAll('.dashboard__tab-li');
let dashboardContent = document.querySelectorAll('.dashboard__content')

dashboardTabLi.forEach((item, index) => {
  item.addEventListener('click', () => {
    dashboardTabLi.forEach(item => {
      item.classList.remove('dashboard__tab-li--active')
    })
    item.classList.add('dashboard__tab-li--active');

    dashboardContent.forEach(item => {
      item.classList.remove("dashboard__content--active");
    })
    dashboardContent[index].classList.add('dashboard__content--active');

  })
});

const oldPassword = document.querySelector('#old-password');
const oldOpenEye = document.querySelector('.old-open-eye');
const oldCloseEye = document.querySelector('.old-close-eye')
const oldTogglePassword = document.querySelectorAll('.old-eye')

oldTogglePassword.forEach(item => {
  item.addEventListener('click',function(e){
    const newType = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    oldPassword.setAttribute('type',newType);
    
    if(oldPassword.getAttribute('type') === 'password'){
      oldOpenEye.classList.remove('input--active');
      oldCloseEye.classList.add('input--active');
    }else if(oldPassword.getAttribute('type') === 'text'){
      oldOpenEye.classList.add('input--active');
      oldCloseEye.classList.remove('input--active');
    }
  })
});


const newPassword = document.querySelector('#new-password');
const newOpenEye = document.querySelector('.new-open-eye');
const newCloseEye = document.querySelector('.new-close-eye')
const newTogglePassword = document.querySelectorAll('.new-eye')

newTogglePassword.forEach(item => {
  item.addEventListener('click',function(e){
    const newType = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    newPassword.setAttribute('type',newType);
    
    if(newPassword.getAttribute('type') === 'password'){
      newOpenEye.classList.remove('input--active');
      newCloseEye.classList.add('input--active');
    }else if(newPassword.getAttribute('type') === 'text'){
      newOpenEye.classList.add('input--active');
      newCloseEye.classList.remove('input--active');
    }
  })
});