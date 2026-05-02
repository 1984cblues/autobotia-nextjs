
(function ($) {

  "use strict";

  // Wait for CleanEngine
  window.addEventListener('clean-engine-rendered', function () {
    // NAVBAR
    $('.navbar-nav .nav-link').click(function () {
      $(".navbar-collapse").collapse('hide');
    });

    // PROJECTS IMAGE RESIZE
    function NewsImageResize() {
      // Short delay to ensure images are laid out
      setTimeout(() => {
        var LargeImage = $('.projects-thumb-small .projects-image').height();
        $('.projects-thumb-large').css('height', LargeImage + 'px');
      }, 100);
    }

    $(window).on("resize", NewsImageResize);
    NewsImageResize(); // Run immediately after render

    $('.custom-link').click(function () {
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 10;

      scrollToDiv(elWrapped, header_height);
      return false;

      function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;

        $('body,html').animate({
          scrollTop: totalScroll
        }, 300);
      }
    });
  });

})(window.jQuery);


