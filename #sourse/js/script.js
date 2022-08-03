//mobil====================================================
$('.header-menu__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if ($(this).hasClass('active')) {
      $('body').data('scroll', $(window).scrollTop());
   }
   $('body').toggleClass('lock');
   if (!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
   }
});
//mobil====================================================
//ibg======================================================
function ibg() {
   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}
ibg();
//ibg======================================================













