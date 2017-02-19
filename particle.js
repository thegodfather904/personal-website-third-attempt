var speed = 80;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var radius = 2;

var canvas, ctx;

var particles = [];

$(function(){
    canvas = $('#alternateDiminsionStar').get(0);
    ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //get the particles for the screen
    setUpParticles();

    draw = setInterval(update, speed);
});


function update(){
   drawParticles();
}

function setUpParticles(){
    for(var i = 0; i < 50; i++)
        particles[i] = new randomParticle();
}

function drawParticles(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for(var i = 0; i < particles.length; i++){
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2, true);
        ctx.fillStyle = 'red';
        ctx.fill();
        particles[i].x++;

        console.log(particles[i].radius);

        //if off the screen, create a new particle and add it to that spot
        if(particles[i].x > canvasWidth)
            particles[i] = new randomParticleAtStart();
    }
}

function randomParticle(){
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.floor(Math.random() * radius);
}

function randomParticleAtStart(){
    this.x = 0;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.floor(Math.random() * radius);
}




