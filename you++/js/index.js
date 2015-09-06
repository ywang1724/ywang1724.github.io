$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'myIntroduce', 'myFunction', '4thpage', '5thpage', 'myTeam', 'myDownload', 'myLink'],
        menu: '#menu',
        scrollingSpeed: 1000
    });

    $('.my-iframe').height($(window).height() - 85);

    $('#myJoin').mouseover(function() {
        $('#myJoin').attr('src', 'img/joinusselect.png');
    }).mouseout(function() {
        $('#myJoin').attr('src', 'img/joinus.png');
    });
    $('#myIphone').mouseover(function() {
        $('#myIphone').attr('src', 'img/iphone-download-select.png');
    }).mouseout(function() {
        $('#myIphone').attr('src', 'img/iphone-download.png');
    });
    $('#myAndroid').mouseover(function() {
        $('#myAndroid').attr('src', 'img/android-download-select.png');
    }).mouseout(function() {
        $('#myAndroid').attr('src', 'img/android-download.png');
    });
});
