var mouseclicks = [];

function setup(){
	createCanvas(720,480);
}

function draw(){
	for(var i=0; i<mouseclicks.length; i++){
		ellipse(mouseclicks[i].x,mouseclicks[i].y,10)
	}
}

function mouseClicked(){
	var clickposition = {
		x: mouseX,
		y: mouseY
	}
	mouseclicks.push(clickposition);
}