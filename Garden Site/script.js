$(document).ready(function(){
 // nav menu box shadow, fixed on scroll
 $(window).scroll(function(){
   if ($(window).scrollTop() >= 180) {
     $('nav').css({'box-shadow':'0px 0px 10px #555'});
     $('nav').css({'z-index':'100'});
     $('nav').css({'position': 'fixed',
                    'top':'0px',
                    'left':'0px',
                    'right':'0px'});
   }
   else {
     $('nav').css('box-shadow', '0 0 0 #fff');
     $('nav').css({'position': 'inherit'});
   }
 }); // end window scroll

 // Nav toggle
$('.material-icons').click(function(){
  $('.tab-content').toggle().css('display');
});

$(window).resize(function(){
  if ($(window).width() >= 600){
    $('.tab-content').css('display', 'block');
  } else {
    $('.tab-content').css('display', 'none');
  }
}); // end Nav toggle

}); // end document ready
