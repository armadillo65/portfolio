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

 // Nav toggle menu open/close
$('.menu').click(function(){
  $('.tab-content').slideToggle().css('display');
});

$(window).resize(function(){
  if ($(window).width() >= 600){
    $('.tab-content').css('display', 'block');
  } else {
    $('.tab-content').css('display', 'none');
  }
}); // end Nav toggle


// ---- Custom Slider
const slider = document.querySelector('.slider');

img = [
  {image: 'img/plant-4.jpg'},
  {image: 'img/plant-6.jpg'},
  {image: 'img/succulents-lg.jpg'},
  {image: 'img/tall-cactus.jpg'},
  {image: 'img/barrel-cactus.jpg'}
];

img.forEach(function(i, x){
  const pic1 = document.createElement('img');
  pic1.src =i.image;
  slider.appendChild(pic1);
});

// Next/Previous Arrows
var x=1;
var y = img.length;
$('.slider img:first-of-type').addClass('go');

// Next Arrow click func.
$('#slide-forward').click(function(){

        if(x<y){
        $('.slider img:nth-of-type('+x+')').removeClass('go');
        $('.slider img:nth-of-type('+(x+1)+')').addClass('go');
        x++;
        console.log("Image: ", x);
        }
        else {
          $('.slider img:last-of-type').removeClass('go');
          $('.slider img:first-of-type').addClass('go');
          x=1;
          console.log("Image: ", x);
          }
});

// Previous Arrow click func.
$('#slide-back').click(function(){

        if(x>1){
        $('.slider img:nth-of-type('+x+')').removeClass('go');
        $('.slider img:nth-of-type('+(x-1)+')').addClass('go');
        x--;
        console.log("Image If: ", x);
        }
        else if(x=1){
          $('.slider img:first-of-type').removeClass('go');
          $('.slider img:last-of-type').addClass('go');
          x=y;
          console.log("Image Else If: ", x);
          }
 });
}); // end document ready
