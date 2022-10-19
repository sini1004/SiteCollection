var swiper = new Swiper(".mySwiper", {
  autoplay: {
    speed : 3000,
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction'
  },

  
  breakpoints: {
    // 화면의 넓이가 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // 화면의 넓이가 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // 화면의 넓이가 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  },
});


var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween : 80,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


$(window).scroll(function(){
  let scrollY = $(window).scrollTop(); //현재스크롤값
  console.log(scrollY);
  if(scrollY >30){
    $('.brand_img').addClass('roll');
  }else {
    $('.brand_img').removeClass('roll');
  }
  

});


// https://velog.io/@ysrz99/%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9C%84%EC%B9%98%EC%97%90-%EB%94%B0%EB%9D%BC-%EB%B3%80%ED%95%98%EB%8A%94-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98