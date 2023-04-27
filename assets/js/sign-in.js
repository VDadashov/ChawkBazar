//#region password-input

const password = document.querySelector('#sign-in-password-input');
const passwordOpenEye = document.querySelector('.password-open-eye');
const passwordCloseEye = document.querySelector('.password-close-eye')
const newTogglePassword = document.querySelectorAll('.fa-regular')

newTogglePassword.forEach(item => {
  item.addEventListener('click',function(e){
    const newType = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',newType);
    
    if(password.getAttribute('type') === 'password'){
      passwordOpenEye.classList.remove('input--active');
      passwordCloseEye.classList.add('input--active');
    }else if(password.getAttribute('type') === 'text'){
      passwordOpenEye.classList.add('input--active');
      passwordCloseEye.classList.remove('input--active');
    }
  })
});

//#endregion

const rememberSwitch = document.querySelector('#remember-switch')
const toogleSwitch = document.querySelector('.toggle-switch-handle')

rememberSwitch.addEventListener('click',()=>{
    
})
