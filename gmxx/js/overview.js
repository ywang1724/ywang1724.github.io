require('../less/overview.less');

$(function() {
    setTimeout(function(){
        $('.loading').hide();
        $('.my-item-title').addClass('move');
    }, 3000);
    $('.my-item-title').on('click', function() {
        var that = this;
        $(this).addClass('module-tap-active');
        setTimeout(function() {
            $(that).removeClass('module-tap-active');
            location.href = 'http://ywang1724.github.io/gmxx/html/scenery.html';
        }, 1400);
    });
});