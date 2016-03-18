require('../less/overview.less');

$(function() {
    var winWidth = $(window).width();
    var itemHeight = ($('.my-menu').height() - 50) / 4;
    setTimeout(function() {
        $('.my-item').height(itemHeight);
        $('.my-item-title').css('top', '-' + itemHeight + 'px');
        $('.loading').hide();
        var leftEnd = winWidth - 170 + 'px';
        $('.my-item-title').animate({
            left: leftEnd,
            opacity: 1
        }, 2000, 'ease-in-out', function() {
            $('.my-item-title').css('left', leftEnd);
            $('.my-item-title').css('opacity', 1);
        });
    }, 3000);
    $('.my-item-title').on('click', function() {
        var that = this;
        $(this).addClass('module-tap-active');
        setTimeout(function() {
            $(that).removeClass('module-tap-active');
            location.href = 'http://ywang1724.github.io/gmxx/html/scenery.html';
        }, 1500);
    });
});
