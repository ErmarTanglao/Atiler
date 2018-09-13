var mysound;

function setup(){
	createCanvas(720,480);
	mysound = createAudio("TT.mp3"); //to make it work upload to webspace

}

function draw(){
	ellipse(width/2,height/2,30)
}

function mouseClicked(){
	//if(mouseX < width/2 + 15 && mouseX > width/2 - 15){
	//	if(mouseY < height/2 +15 && mouseY > height/2 - 15)
	//	fill(100)
	//}
	var clickeddistance = dist(width/2, height/2, mouseX, mouseY);
	if(clickeddistance < 15){
		fill(100)
		mysound.play();
	}
}