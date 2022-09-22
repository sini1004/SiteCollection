/*스크롤이 되면 헤더 배경색이 들어감*/
$(window).scroll(function(){
  $('#header_wrap').addClass('scroll');
  $('.menu_container').addClass('menu_height');

  if($(window).scrollTop() == 0){
    $('#header_wrap').removeClass('scroll');
  }
});
//scrollTop()  -스크롤바 위치를 알아오거나 정함
