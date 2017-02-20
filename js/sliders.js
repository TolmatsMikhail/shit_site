$(document).ready(function() {
    $("#slider").owlCarousel({
        singleItem: true,
        navigation: true,
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: true,
        autoplay: true,
        autoplayTimeout: 5000000000000000,
        autoplayHoverPause: true,
        loop: true,
        startPosition: 1
    });
});
$(document).ready(function() {
    $("#examples_carousel").owlCarousel({
          singleItem: true,
          items: 1,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          freeDrag: true,
           autoplay: true,
          autoplayTimeout: 50000000000000000,
         loop: true,
          startPosition: 0,
          navClass: ['navLeftEx navbutton', 'navRightEx navbutton']
     });
     $('.navLeftEx').text('');
     $('.navRightEx').text('');
});

$(document).ready(function() {
    $("#our_feedbacks_slider").owlCarousel({
        singleItem: true,
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: true,
        autoplay: true,
        autoplayTimeout: 50000000000000,
        loop: true,
        startPosition: 0,
        navClass: ['navLeft navbutton', 'navRight navbutton']
    });
    $('.navLeft').text('');
    $('.navRight').text('');
});