

 $(document).ready(function(){
  // nav menu box shadow
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
      $('header nav').css({'box-shadow': '0px 0px 10px #555'});
    }
    else {
      $('header nav').css('box-shadow', '0 0 0 #fff');
    }
  });

  // active nav menu tabs
   $('li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    });

  }); // end document ready
