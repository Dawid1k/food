$(function(){
  var btn = $('.btn');

  btn.on('click', function() {
     $(this).toggleClass('active');
     $(this).toggleClass('not-active');
  });

  $('.box').on('click', function(){
	  $('.menu__list').toggleClass('menu__list--active');
  }); 
	
  
});