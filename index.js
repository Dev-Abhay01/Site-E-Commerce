let searchBar = document.querySelector('.search-bar');

document.querySelector('#search-btn').onclick = () => {
    searchBar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBAr.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    navBAr.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBAr.classList.remove('active');
}

//Experimental not required---------------------
// let BTN = document.querySelector('.login-form');

// document.querySelector('#lbtn').onclick = () => {
//     BTN.classList.toggle('active');
//     searchBar.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     navBAr.classList.remove('active');
// }
// let ABTN = document.querySelector('.login-form');
//----------------------------------------------

let navBAr = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navBAr.classList.toggle('active');
    searchBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

// for on mouse scroll remove 
window.onscroll = () => {
    searchBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBAr.classList.remove('active');
}

//slider code for product 
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

//slider code for  review
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

