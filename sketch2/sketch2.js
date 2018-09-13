var mouseclicks = [];

function setup(){
	createCanvas(720,480);
}

function draw(){
	for(var i=0; i<mouseclicks.length; i++){
		ellipse(mouseclicks[i].x,mouseclicks[i].y,10);
		mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].speed;
		mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].speed;
	}
}

function mouseClicked(){
	var clickposition = {
		x: mouseX,
		y: mouseY,
		speed: random(-2,2)
	}
	mouseclicks.push(clickposition);
}