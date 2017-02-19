var canvas = document.getElementById('alternateDiminsionStar');
var ctx = canvas.getContext('2d');

//Canvas dimensions
var W = window.innerWidth; var H = window.innerHeight;

//Lets create an array of particles
var particles = [];
for(var i = 0; i < 50; i++)
{
	//This will add 50 particles to the array with random positions
	particles.push(new create_particle());
}

//Lets create a function which will help us to create multiple particles
function create_particle()
{
	//Random position on the canvas
	this.x = Math.random()*W;
	this.y = Math.random()*H;

    //random radius
    this.radius = Math.random()*20+20;
}

function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,W,H);
    for(var t = 0; t < particles.length; t++){
        var p = particles[t];
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(p.x,p.y,p.radius,Math.PI * 2, false);
        ctx.fill();
        p.x++;

        if(p.x > W + 5){
            console.log(p.x);
            particles.pop(p);
        }

    }
}

setInterval(draw, 100);
