var EventUtil = {
    addHandler: function(elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
        } else if (elem.attachEvent) {
            elem.attachEvent("on"+type, handler);
        } else {
            elem["on"+type] = handler;
        }
    },

    removeHandler: function(elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.detachEvent("on"+type, handler);
        } else {
            elem["on"+type] = null;
        }
    },

    getEvent: function(event) {
        return event ? event : window.event;
    },

    getTarget: function(event) {
        return event.target || event.srcElement;
    },

    preventDefault: function(event) {
        if (event,preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

};

var initAudioControl = function() {
    var audioControl = document.getElementById('audioControl'), 
        audio = document.getElementById('audio');

    audioControl.onclick = function() {
        if (audio.paused) {
            audio.play();
            audioControl.innerHTML = 'Pause';
        } else {
            audio.pause();
            audioControl.innerHTML = 'Play';
        }
    };

    EventUtil.addHandler(document, "mousemove", function(event) {
        event = EventUtil.getEvent(event);
        audioControl.style.left = event.clientX - (audioControl.clientWidth / 2) + 'px';
        audioControl.style.top = event.clientY - (audioControl.clientHeight / 2) + 'px';
    });
};

var clockDraw = function(context) {
    var now = new Date();
    context.save();
    context.clearRect(0, 0, 300, 300);
    context.scale(1, 0.5);
    context.translate(150, 150);

    // init hours  
    context.save();
    for (var i = 0; i < 12; i++ ) {
        context.beginPath();
        context.rotate(Math.PI / 6);
        context.moveTo(0, -123);
        context.lineWidth = 5;
        context.lineTo(0, -110);
        context.stroke();
    }
    context.restore();

    // init minutes
    context.save();
    context.lineWidth = 5;
    for (i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            context.beginPath();
            context.moveTo(0, 118);
            context.lineWidth = 2;
            context.lineTo(0, 115);
            context.stroke();
        }
        context.rotate(Math.PI / 30);
    }
    context.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    context.fillStyle = "black";

    // draw hour  
    context.save();
    context.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    context.lineWidth = 7;
    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(0, -80);
    context.stroke();
    context.restore();

    // draw minute
    context.save();
    context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(0, 20);
    context.lineTo(0, -100);
    context.stroke();
    context.restore();

    // draw second
    context.save();
    context.rotate(sec * Math.PI / 30);
    context.strokeStyle = "#D40000";
    context.fillStyle = "#D40000";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 30);
    context.lineTo(0, -113);
    context.stroke();
    context.beginPath();
    context.arc(0, 0, 5, 0, Math.PI * 2, false);
    context.fill();
    context.restore();

    context.beginPath();
    context.arc(0, 0, 125, 0, Math.PI * 2, false);
    context.lineWidth = 5;
    context.strokeStyle = '#325FA2';
    context.stroke();

    context.restore();
};

var initClock = function() {
    var clock = document.getElementById("clock");
    if (clock.getContext) {
        var context = clock.getContext("2d");
        clockDraw(context);
        setInterval((function() {
            return function() {
                clockDraw(context);
            }
        })(context), 1000);
    };
};

window.onload = function() {
    //audio control
    initAudioControl();

    //canvas drawing
    initClock();
};