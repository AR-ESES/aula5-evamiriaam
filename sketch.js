let laranjas;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {

	background(0)

	if(mouseY>=height/2 && mouseX<=width/2)  
    fill(0,206,209);

    else if(mouseY<height/2 && mouseX<=width/2) 
    fill(165,42,42);

    else if(mouseY<height/2 && mouseX>width/2) 
    fill(50,205,50); 

	else{
		 noFill();
	}

	stroke(230);
	strokeWeight(2);
	circle(width / 2, height / 2, height / 4);
}