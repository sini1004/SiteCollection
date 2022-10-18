// const toogleBtn = document.querySelector('.navbar_toogleBtn');
// const menu = document.querySelector('.navbar_menu');
// const links = document.querySelector('.navbar_links');

// toogleBtn.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   links.classList.toggle('active');
// })


$(function(){
  // 스크롤 시 header fade-in
  $(document).on('scroll', function(){
      if($(window).scrollTop()>120){
          $("#header").removeClass("deactive");
          $("#header").addClass("active");
          $("#logo").removeClass("logo");
          $("#logo").addClass("logoc");
          $("#header").css("height", "80px");
          $("nav ul li").children("a").css("color", "#222");
          $(".hamburger-button span").css("background", "#222");
      }else{
          $("#header").removeClass("active");
          $("#header").addClass("deactive");
          $("#logo").removeClass("logoc");
          $("#logo").addClass("logo");
          $("#header").css("height", "100px");
          $("nav ul li").children("a").css("color", "white");
          $(".hamburger-button span").css("background", "white");
      }
  });
  $('.hamburger-button').click(function(){
      // event.preventDefault();
      $(this).toggleClass('ham-active');
      $('.overlay').toggleClass('visible');
      $('span').css("color", "#222");

      return false;
  });
});
