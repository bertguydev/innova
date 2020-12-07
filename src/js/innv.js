function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', function() {

    $('.embla__container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        centerMode: true
      });
      $('.small-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.embla__container',
        centerMode: true,
        focusOnSelect: true,
        swipe: false,
        slidesToScroll: 3
      });

    $('.small-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".big-videos video").each(function(){
            $(this).get(0).pause();
        });
        if( $('.video-item.slick-current').find('video').length !== 0) {
            $(".embla__container .slick-current video")[0].play();
        }
    });

    $('.graphic-arts').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        edgeFriction: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

    // Footer Copyright Year
    var today = new Date;
    var theYear = today.getFullYear();
    document.getElementById('thisYear').innerHTML = theYear;

    // Autoplay videos when visible in viewport
    document.addEventListener('scroll', function(scrollEvent){
        var mainReel = document.getElementById('mainReel');
        var droneReel = document.getElementById('droneReel');
        var absReel = document.getElementById('absReel');

        if(isInViewport(mainReel)){
            mainReel.play();
        }else {
            mainReel.pause();
        }
        if(isInViewport(droneReel)){
            droneReel.play();
        }else {
            droneReel.pause();
        }
        if(isInViewport(absReel)){
            absReel.play();
        }else {
            absReel.pause();
        }
    });

    // Sliders
    // var bigSlider = document.getElementById('bigVideoSlider');
    // var embla1 = EmblaCarousel(bigSlider);
});