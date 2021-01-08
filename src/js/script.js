
$(function () {

  $('.tabs__link-gav').click(function() {
    $('.tabs__link-gav').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs__pane').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');
  
  
  

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    pagination: {
      el: '.top-pagination',
      type: 'fraction',
    },
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next-top',
      prevEl: '.swiper-button-prev-top',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  $('.header__burger').on('click', function () {
    $(this).find('.burger-span').toggleClass('active')
    $('.header__menu-list').toggleClass('active')
  })



  var loc = window.location.hash;
  if (loc != "") {
          var href = loc;
     
  }

  $('.header__burger').hover(function () {

    $(this).toggleClass('active')
    $(this).find('.burger').toggleClass('active')

  });

  $('.icon-fon').hover(function () {

    $(this).toggleClass('active')
    $(this).find('#phone-icon').toggleClass('active')
    $(this).find('#mail-icon').toggleClass('active')

  });
  $('.slider-top__mouse').hover(function () {

    $(this).toggleClass('active')
    $(this).find('.slider-top__text').toggleClass('active')
    $(this).find('#mouse-arrow').toggleClass('active')
    $(this).find('#mouse-icon').toggleClass('active')

  });
  $('.swiper-down').hover(function () {
    $('.swiper-down').toggleClass('hover')
    $(this).toggleClass('active')
    $(this).find('.slide-top__wer').toggleClass('active')

 


  });
  $('.thanks__item').hover(function () {
   $(this).find('.thanks__item-loop').toggleClass('hover')
   $(this).find('.tanks__img').toggleClass('hover')
    $(this).toggleClass('hover')
   

 


  });
  $('.slider-weap').hover(function () {
    $(this).find('.thanks__item-loop').toggleClass('hover')
    $(this).find('.gall-imgs').toggleClass('hover')
     $(this).toggleClass('hover')
    
 
  
 
 
   });


  $('.page-block__item').hover(function () {

    $(this).find('.page-block__text').toggleClass('active')

 


  });
  $('.page-block__dots').hover(function () {
    $(this).toggleClass('active')
    $(this).find('.page-block__dots-elips').toggleClass('active')
    $(this).find('.page-block__dots-text').toggleClass('active')
   

  });



  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
   
  });
  
  $('.tabs-item').hover(function () {
    $(this).toggleClass('active-ter')
    $(this).find('.tabs-item__num').toggleClass('active')
  
    

  });
  $('.page-design__item').hover(function () {
    $(this).find('.page-design__text.des').toggleClass('active')
  
    

  });

  $('.tabs__content-btn-hover').hover(function(){
    $('.tabs__content-home').toggleClass('active-hov')
  })
  const slider = document.querySelector('.slider');
  let mySwiper = new Swiper(slider, {
    
	slidesPerView: 1,
	spaceBetween: 0,
	loop: false,
	slideClass: 'slide',
	wrapperClass: 'slides-wrap',
	pagination: {
		el: '.people-pagination',
    type: 'fraction'
    ,
	},
	navigation: {
		nextEl: '.swiper-button-next-people',
		prevEl: '.swiper-button-prev-people'
  },
  breakpoints: {
    1500: {
      slidesPerView: 2,
      spaceBetween: 0,
      loop:true
    }
  }
  

  
  })



  const sliderthanks = document.querySelector('.slider-thanks');

  let mySwiper2 = new Swiper(sliderthanks, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    slideClass: 'slide-thanks',
    wrapperClass: 'slides-wrap-thanks',
    pagination: {
      el: '.thanks-pag',
      type: 'fraction'
      ,
    },
    navigation: {
      nextEl: '.swiper-button-next-thank',
      prevEl: '.swiper-button-prev-thank',
    },
    
    breakpoints: {
      2000: {
        slidesPerView: 3,
        spaceBetween: 30
      }, 1500: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30
      }
     
    }
  })


  const slidergall = document.querySelector('.slider-gall');

  let mySwiper4 = new Swiper(slidergall, {
 
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    slideClass: 'slide-gall',
    wrapperClass: 'slides-wrap-gall',
    pagination: {
      el: '.gallin-pag',
      type: 'fraction'
      ,
    },
    navigation: {
      nextEl: '.button-next-gall',
      prevEl: '.button-prev-gall',
    },
  })



  const sliderdes = document.querySelector('.slider-des');

  let mySwiper7 = new Swiper(sliderdes, {
 
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    slideClass: 'slide-des',
    wrapperClass: 'slides-wrap-des',
    pagination: {
      el: '.des-pag',
      type: 'fraction'
      ,
    },
    navigation: {
      nextEl: '.button-next-des',
      prevEl: '.button-prev-des',
    },
  })


  $(function() {

    $('input, select').styler();
  
  });
  jQuery(function($){
    $(".phone-mask").mask("7 (999) 999-9999");
 });



  $('.click-r').magnificPopup({
  type: 'inline',
  focus: '#name'
  });

  $('.poupap-c').magnificPopup({
    type: 'inline',
    focus: '#name'
    });
  
    $(".menu-popin__tab").click(function() {
      $(".menu-popin__tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".menu-popin__tab-text").removeClass("active").eq($(this).index()).addClass("active");
      $(".menu-popin__tab-img").removeClass("active").eq($(this).index()).addClass("active");
      $(".menu-popin__tabs-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


  $(".transform-map").click(function() {
    $(".transform-map").removeClass("active").eq($(this).index()).addClass("active");
    $(".contacts__map-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  $('.link-active').on('click',function(){
    $(".link-active").removeClass("active-v").eq($(this).index()).addClass("active-v");
  })

  });


  
  $(document).ready(function() {
    $('.thanks__item-loop').magnificPopup({type:'image'});
  });

  function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
  }
  
  $(document).ready(function() {
      if($_GET['opendiv'] == 'web') {
          $('#web').toggleClass('active');
      }
  });



  