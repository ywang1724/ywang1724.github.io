var $ = require("zepto");

var loadingEl = $('<div style="\
					display:none;\
					width:100%;\
					height:100%;\
					position:fixed;\
					left:0px;\
					top:0px;\
					z-index:9999;\
				    background: #fff url(../img/loading.gif) center center   no-repeat;\
				    background-size: 35% auto;"></div>').appendTo($(document.body));

module.exports = {
    show: function() {
        loadingEl.css({
            "display": "block",
            "backgroundSize": "40rem auto"
        });
    },
    hide: function() {
        loadingEl.css("display", "none");
    }
}
