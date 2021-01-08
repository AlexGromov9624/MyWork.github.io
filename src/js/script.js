var swiper = new Swiper('.swiper-container', {
      loop: true, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
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