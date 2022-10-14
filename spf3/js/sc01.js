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