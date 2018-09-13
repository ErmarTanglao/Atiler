var mysound;
var bubble;

function setup(){
	createCanvas(720,480);
	mysound = createAudio("TT.mp3"); //to make it work upload to webspace
	bubble = {
		x: width/2,
		y: height/2,
		r: 15
	}
}

function draw(){
	ellipse(bubble.x,bubble.y,bubble.r * 2);
	bubble.x = bubble.x + random(-5,5);
	bubble.y = bubble.y + random(-5,5);
	if(bubble.x > width || bubble.x < 0){
		bubble.x = width/2;
		bubble.y = height/2;
	};
	if(bubble.y > height || bubble.y < 0){
		bubble.y = height/2;
		bubble.x = width/2;
	};
}

function mouseClicked(){
	//if(mouseX < width/2 + 15 && mouseX > width/2 - 15){
	//	if(mouseY < height/2 +15 && mouseY > height/2 - 15)
	//	fill(100)
	//}
	var clickeddistance = dist(bubble.x, bubble.y, mouseX, mouseY);
	if(clickeddistance < bubble.r){
		fill(100)
		mysound.play();
	}
}