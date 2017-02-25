// Settings
var speed = 35,
canvas_width = window.innerWidth,
	canvas_height = window.innerHeight;

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})();

var canvas,
    ctx,
    times = 0,
    limit = 100,
    draw,
    particles = [],
    colors = ['#f0fd36', '#f49ff1', '#f53eac', '#76fbfa'];

var getRand = function(type) {
    if (type === 'size')
	return (Math.floor(Math.random() * 8) * 10)

    if (type === 'color')
	return Math.floor(Math.random() * colors.length)

    if (type === 'pos')
	return [(Math.floor(Math.random() * 200) * 10), (Math.floor(Math.random() * 80) * 10)]

    return false
};

var drawParticle = function(x, y, size, opacity) {
     ctx.beginPath();
     ctx.globalAlpha = opacity;
     ctx.arc(x, y, size, 0, 2 * Math.PI);
     ctx.fillStyle = 'red';
     ctx.fill();
     ctx.strokeStyle = 'red';
     ctx.stroke();

     



}

function clean() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    particles.forEach(function(p) {
        p[3] = p[3] - 0.06;

        drawParticle(p[0], p[1], p[4], p[3])

        if (p[p.length - 1] && p[3] <= 0.0) {
            ctx.clearRect(0, 0, canvas_width, canvas_height);
            clearInterval(draw);
            times = 0;
            particles = []
            draw = setInterval(update, speed);
        }
    });
}

function update(args) {

    var pos = getRand('pos'),
        size = getRand('size'),
        opacity = 1;

    drawParticle(pos[0], pos[1], size, opacity)
    times++;

    particles.push([pos[0], pos[1], opacity, size]);

    if (times >= limit) {
        clearInterval(draw);
        draw = setInterval(clean, speed);
    }
}

window.onload = function() {
    canvas = document.getElementById('alternateDiminsionStar'),
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    draw = setInterval(update, speed);
}