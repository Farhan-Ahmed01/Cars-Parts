//Search Box 
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

//Menu (when resopnsiveness is apply)

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

//Hide Menu and Search Box on Scroll 

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

//header 
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});