var time = 5;
var peopleCount = 20;
var peoples = [];

// for (i = 0; i < peopleCount; i++) {
//     peoples.push({
//         distance : Math.floor((Math.random() * 140) + 1),
//         angle    : Math.floor((Math.random() * 360) + 1)
//     });
// }

function test(_x, _y) {
    peoples = []
    peoples.push({
        distance : _x, //Math.floor((Math.random() * 140) + 1),
        angle    : _y, //Math.floor((Math.random() * 360) + 1)
    });
}

function radar() {

    var radius = 150;
    for (i = 0; i < peoples.length; i++) {
        debugger;
        var disX = (90 < peoples[i].angle + 90 < 270) ? radius - peoples[i].distance : radius,
            disY = (180 < peoples[i].angle + 90 < 360) ? radius - peoples[i].distance : radius,
            angleNew = (peoples[i].angle + 90) * Math.PI / 180,
            getDegX = disX + peoples[i].distance - Math.round(peoples[i].distance * Math.cos(angleNew)),
            getDegY = disY + peoples[i].distance - Math.round(peoples[i].distance * Math.sin(angleNew)),
            delay = time / 360 * peoples[i].angle;

        $('#guides').append($('<span>')
            .addClass('dot')
            .css({
                left: getDegX,
                top: getDegY,
                '-webkit-animation-delay': delay + 's',
                'animation-delay': delay + 's'
            })
            .attr({
                'data-atDeg': peoples[i].angle
            }));
        $("#radar").addClass('animated');
    }
}

radar()
