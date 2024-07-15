const login = document.querySelector('.js-header__navbar-item-login')
const modalLogin = document.querySelector('.modal-login')
const backLogin= document.querySelector('.btn-back-login')
const modalRegister = document.querySelector('.modal-register')
const register = document.querySelector('.js-header__navbar-item-register')
const backRegister= document.querySelector('.btn-back-register')


function openModalLogin() {
    modalLogin.classList.add('open')
}

function closeModalLogin() {
    modalLogin.classList.remove('open')
}

function openModalRegister() {
    modalRegister.classList.add('open')
}

function closeModalRegister() {
    modalRegister.classList.remove('open')
}
  
login.addEventListener('click',openModalLogin);

backLogin.addEventListener('click',closeModalLogin);

register.addEventListener('click',openModalRegister);

backRegister.addEventListener('click',closeModalRegister);

const switchBtnLogin = document.querySelector('.auth-form__switch-btn-login')
const switchBtnRegister = document.querySelector('.auth-form__switch-btn-register')


switchBtnLogin.addEventListener('click', function(){
    modalRegister.classList.remove('open')
    modalLogin.classList.add('open')
});

switchBtnRegister.addEventListener('click', function(){
    modalLogin.classList.remove('open')
    modalRegister.classList.add('open')
});

// like tym

const itemsLike = document.querySelectorAll('.home-product-item__like');
    itemsLike.forEach(itemLike => {
        const likeIcon = itemLike.querySelector('.home-product-item__like-icon-emty');
        const likedIcon = itemLike.querySelector('.home-product-item__like-icon-fill');

        likeIcon.addEventListener('click', function() {
            itemLike.classList.add('home-product-item__like--liked');
        });

        likedIcon.addEventListener('click', function() {
            itemLike.classList.remove('home-product-item__like--liked');
        });
});