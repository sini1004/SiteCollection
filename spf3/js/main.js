
/* 모바일에서 햄버거 버튼을 누르면 메뉴 보임 */
$('.m_menuBtn').click(function(a){
  //a.preventDefault();
  $('.m_menuBtn').toggleClass('on');

  if($(this).hasClass('on')){
    $('.menu_container').fadeIn();
    $('body').css({'overflow':'hidden'})
  } else {
    $('.menu_container').fadeOut();
    $('body').css({'overflow':'auto'})
  }

});

$(window).resize(function(){
  let winW =  $(window).width();  
  console.log('브라우저의 가로길이는? ', winW);

  if( winW > 1023 &&  $('.menu_container').is(':hidden')){
    console.log('.menu_container가 안보여요!!!');
    $('.menu_container').removeAttr('style');
  }
});


// pc고정, mobile 슬라이드
var ww = $(window).width();
var mySwiper = undefined;

function initSwiper() {

  if (ww < 1280 && mySwiper == undefined) {
    mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 5,
      spaceBetween: 10,
      simulateTouch: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  } else if (ww >= 1280 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

initSwiper();

$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
});