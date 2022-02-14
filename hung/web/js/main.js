require([
    'jquery',
    'slick',
    'domReady!'
 ], function ($) {
    $('.homepage-banner').slick({
      arrows: false,
    });
    $('.reason-to-buy').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },        
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });   
 });