var speed = 50;
var canvasWidth = $('#alternateDimension').outerWidth(true);
var canvasHeight = $('#alternateDimension').outerHeight(true);
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
    for(var i = 0; i < 250; i++)
        particles[i] = new randomParticle();
}

function drawParticles(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for(var i = 0; i < particles.length; i++){
        drawOneStroke(i);
    }
}

function drawOneStroke(i){
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2, true);
        // ctx.fillStyle = 'white';
        ctx.fillStyle = "rgba(255, 255, 255, " + particles[i].opacity + ")";

        ctx.fill();
        particles[i].x = particles[i].x + 0.75;
        particles[i].y = particles[i].y - 0.25;

        if(particles[i].shootingStar){
            particles[i].x = particles[i].x + 60;
            particles[i].y = particles[i].y - 20;
        }
            
        //if off the screen, create a new particle and add it to that spot
        if(particles[i].x > canvasWidth || particles[i].y < 0 )
            particles[i] = new randomParticleAtStart();
}

function randomParticle(){
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.floor(Math.random() * radius + 1);
    this.shootingStar = false;
    this.opacity = Math.random().toFixed(2);    
}

function randomParticleAtStart(){
    this.x = 0;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.floor(Math.random() * radius + 1);
    this.shootingStar = shootingStar(0.95);
    if(this.shootingStar)
        this.opacity = 1
    else
        this.opacity = Math.random().toFixed(2);
}

function shootingStar(seed){
    if(Math.random() > seed)
        return true;
    else
        return false;
}




