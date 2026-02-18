$(document).ready(function () {
   $('.modal-item').not('.slick-list .modal-item').remove();

   $('.follow-me-btn').click(function () {
      $('.card-follow').toggleClass('active');
   });

   $('.branch').click(function () {
      $('.branch-name').toggleClass('active');
   });

   const removeClass = () => {
      $('body').removeClass('overflow-hidden active');
      $('.modals').removeClass('active');
      $('.model-image').empty().removeClass('slick-initialized slick-slider');
      $('.model-video').empty().removeClass('slick-initialized slick-slider');
      $('#aboutMeId').empty();
      $('.about-wrapper').removeClass('active');
      var url = window.location.href;
      var urlWithoutQuery = url.split('?')[0];
      window.history.replaceState('', '', urlWithoutQuery);
   };

   /*
    $('.gallery').click(function (){
        $('body').addClass('overflow-hidden active');
        $('#gallery').addClass('active');
    });
*/
   // $('.about').click(function () {
   //    $('.about-wrapper').addClass('active');
   // });

   $('.about-wrapper .btn-close').click(function () {
      $('.about-wrapper').removeClass('active');
   });

   $('.btn-close').click(function () {
      removeClass();
   });

   window.addEventListener('popstate', removeClass);

   // $('.modal-slider').slick({
   //    arrows: false,
   //    autoplay: true
   // });

   $('.banner-slider').slick({
      arrows: true,
      autoplay: true
   });

   var cardFloow = $('.card-follow').height();
   $('.card-contact').css('padding-bottom', cardFloow);
});
