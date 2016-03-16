Loading.show();

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
    $('.my-content').css('visibility', 'visible');
    Loading.hide();
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        parallax: true,
        autoplay: 2000
    });
    var myPlayer = videojs('really-cool-video');
    $('.my-slider').on('click', function() {
        if ($('.slide-video').hasClass('swiper-slide-active')) {
            mySwiper.stopAutoplay();
            myPlayer.play();
        }
    });
});
