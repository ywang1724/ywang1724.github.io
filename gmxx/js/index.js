require('../bower_components/font-awesome/css/font-awesome.min.css');
require('../bower_components/pure/pure-min.css');
require('../bower_components/Swiper/dist/css/swiper.min.css');
require('../bower_components/video.js/dist/video-js.min.css');
require('../less/index.less');

$(function() {
    var lineHeight1 = $('.line-1').height(),
        lineHeight2 = $('.line-2').height();
    $('.xxgk, .xyxx, .xyly, .jycg').height(lineHeight1 - 15);
    $('.xygg, .msfc').height(lineHeight2 - 10);
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        parallax: true,
        autoplay: 2000
    });
    var myPlayer = videojs('really-cool-video');

    setTimeout(function(){
        $('.loading').hide();
    }, 3000);

    $('.module-tap').on('click', function() {
        var that = this;
        $(this).addClass('module-tap-active');
        setTimeout(function() {
            $(that).removeClass('module-tap-active');
        }, 1000);
    });

    $('.my-slider').on('click', function() {
        alert(mySwiper.activeIndex);
        // if ($('.slide-video').hasClass('swiper-slide-active')) {
        //     mySwiper.stopAutoplay();
        //     myPlayer.play();
        // }
    });
});
