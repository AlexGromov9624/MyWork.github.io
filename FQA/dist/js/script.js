window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header_item'),
    hamburger = document.querySelector('.burger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('header__list_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('header__list_active');
        })
    })
  });
const accardion = document.getElementsByClassName('accardion__box');

for (i = 0; i<accardion.length; i++){
    accardion[i].addEventListener('click', function(){
        this.classList.toggle('accardion__box_active')
    });
} 

