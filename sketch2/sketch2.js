var mouseclicks = [];

function setup(){
	createCanvas(720,480);
	var button = createButton("add particle");
}

function draw(){
	for(var i=0; i<mouseclicks.length; i++){
		ellipse(mouseclicks[i].x,mouseclicks[i].y,10);
		mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].xspeed;
		mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].yspeed;
	}
}

function addparticle(){
	var clickposition = {
		x: mouseX,
		y: mouseY,
		xspeed: random(-2,2),
		yspeed: random(-2,2)
	}
	mouseclicks.push(clickposition);
}