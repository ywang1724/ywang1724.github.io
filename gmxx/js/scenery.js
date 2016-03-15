require('../bower_components/Swiper/dist/css/swiper.min.css');
require('../less/scenery.less');

var $ = require('./lib/zepto');
var Swiper = require('swiper');

$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'cube',
        pagination: '.swiper-pagination',
        paginationHide: false,
        parallax: true
    });
    mySwiper.on('tap', function() {
        $('.swiper-slide .content').toggleClass('hide');
    });
});
