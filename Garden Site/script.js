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
 });

}); // end document ready
