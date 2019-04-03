var radius = 2;

$(function(){
    var diminsionInterval = generateParticelForId('alternateDiminsionStar');
    generateParticelForId('dividerCanvas');
});

function generateParticelForId(id) {
    let canvas = $('#' + id).get(0);
    let ctx = canvas.getContext('2d');
    let canvasWidth = $('#' + id).outerWidth(true);
    let canvasHeight = $('#' + id).outerHeight(true);
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //get the particles for the screen
    let particles = setUpParticles(canvasWidth, canvasHeight);

    let speed = 50;
    draw = setInterval(function(){
        update(particles, ctx, canvasWidth, canvasHeight);
    }, speed);

    return draw;
}

function update(particles, ctx, canvasWidth, canvasHeight){
    drawParticles(particles, ctx, canvasWidth, canvasHeight);
}

function setUpParticles(canvasWidth, canvasHeight){
    let particleArray = [];
    for(var i = 0; i < 250; i++)
        particleArray[i] = new randomParticle(canvasWidth, canvasHeight);
    return particleArray;
}

function drawParticles(particles, ctx, canvasWidth, canvasHeight){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for(var i = 0; i < particles.length; i++){
        if(!particles[i].shootingStar)
            drawOneStroke(ctx, particles, i);
        else
            drawShootingStar(ctx, particles, i);

        //if off the screen, create a new particle and add it to that spot
        if(particles[i].x > canvasWidth || particles[i].y < 0 )
            particles[i] = new randomParticleAtStart(canvasHeight);
    }
}

function drawOneStroke(ctx, particles, i){
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2, true);
        ctx.fillStyle = "rgba(255, 255, 255, " + particles[i].opacity + ")";

        ctx.fill();
        particles[i].x = particles[i].x + 0.75;
        particles[i].y = particles[i].y - 0.25;
}

function drawShootingStar(ctx, particles, i){
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';
    ctx.moveTo(particles[i].x, particles[i].y);
    particles[i].x = particles[i].x + 45;
    particles[i].y = particles[i].y - 10;
    ctx.lineTo(particles[i].x , particles[i].y);
    ctx.stroke();
}

function randomParticle(canvasWidth, canvasHeight){
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.floor(Math.random() * radius + 1);
    this.shootingStar = false;
    this.opacity = Math.random().toFixed(2);    
}

function randomParticleAtStart(canvasHeight){
    this.x = 0;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.floor(Math.random() * radius + 1);
    this.shootingStar = shootingStar(0.95);
    this.opacity = Math.random().toFixed(2);
}

function shootingStar(seed){
    if(Math.random() > seed)
        return true;
    else
        return false;
}




