//#region password-input

const password = document.querySelector('#sign-in-password-input');
const modalPassword = document.querySelector('#sign-in-modal-password-input');
const passwordOpenEye = document.querySelector('.password-open-eye');
const passwordCloseEye = document.querySelector('.password-close-eye');
const passwordModalOpenEye = document.querySelector('.password-modal-open-eye');
const passwordModalCloseEye = document.querySelector('.password-modal-close-eye');
const newTogglePassword = document.querySelectorAll('.fa-regular');
const modalNewTogglePassword = document.querySelectorAll('.modal-custom');

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

modalNewTogglePassword.forEach(item => {
  item.addEventListener('click',function(e){
    const newType = modalPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    modalPassword.setAttribute('type',newType);
    
    if(modalPassword.getAttribute('type') === 'password'){
      passwordModalOpenEye.classList.remove('input--modal-active');
      passwordModalCloseEye.classList.add('input--modal-active');
    }else if(modalPassword.getAttribute('type') === 'text'){
      passwordModalOpenEye.classList.add('input--modal-active');
      passwordModalCloseEye.classList.remove('input--modal-active');
    }
  })
});

//#endregion

function openModal() {
  document.querySelector("#login-modal").style.display = "block";
}
function closeModal() {
  document.querySelector("#login-modal").style.display = "none";
}
document.querySelector(".sign-in-content--register-btn").addEventListener("click", openModal);


function loginOpenModal() {
  document.querySelector("#register-modal").style.display = "block";
  document.querySelector("#forgot-modal").style.display = "none";
  document.querySelector("#login-modal").style.display = "none";
}

function loginCloseModal() {
  document.querySelector("#register-modal").style.display = "none";
}
document.querySelector(".sign-in-content--login-modal-btn").addEventListener("click", loginOpenModal);




function forgotOpenModal() {
  document.querySelector("#forgot-modal").style.display = "block";
}
function forgotCloseModal() {
  document.querySelector("#forgot-modal").style.display = "none";
}
document.querySelector(".forgot-password__btn").addEventListener("click", forgotOpenModal);
document.querySelector(".sign-in-content--forgot-login-modal-btn").addEventListener("click",loginOpenModal)

