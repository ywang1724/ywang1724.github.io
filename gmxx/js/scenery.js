Loading.show();

require('../bower_components/Swiper/dist/css/swiper.min.css');
require('../less/scenery.less');

$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'cube',
        pagination: '.swiper-pagination',
        paginationHide: false,
        parallax: true
    });
    $('.swiper-container').css('visibility', 'visible');
    Loading.hide();
    mySwiper.on('tap', function() {
        $('.swiper-slide .content').toggleClass('hide');
    });
});
