//Adaptive functions
$(window).resize(function (event) {
   adaptive_function();
});
function adaptive_header(w, h) {
   var headerMenu = $('.header-menu');
   var headerLang = $('.menu__links');
   var headerimg = $('.menu__logo');

   if (w < 560) {
      if (!headerLang.hasClass('done')) {
         headerimg.addClass('done').appendTo(headerMenu);
         headerLang.addClass('done').appendTo(headerMenu);


      }
   } else {
      if (headerLang.hasClass('done')) {
         headerimg.removeClass('done').prependTo($('.logo_img'));
         headerLang.removeClass('done').prependTo($('.menu__link'));
      }
   }
}
function adaptive_function() {
   var w = $(window).outerWidth();
   var h = $(window).outerHeight();
   adaptive_header(w, h);
}
adaptive_function();


