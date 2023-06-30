let step

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(255);
	// stroke("rgb(190,187,187)")
	// for (i=0; i<width; i+=50) {
	// 	line(i,0,i,height)
	// 	for (j=0;j<height;j+=50) {
	// 		line(0,j,width,j)
	// 	}
	// }
	frameRate(5)
	
}

colors_sticks = ["red","yellow","green","blue","pink","purple","black","orange","turquoise"]

//[-370,-500,-75,-320],[-350,-470,-50,-330],[-180,-300,-400,-500],
//[100,-330,400,-470],[75,-320,325,-500],[100,-330,400,-470],
stick_coordinates_1 = [[-275,-550,-25,-350],[-350,-450,-25,-350],[-400,-470,-100,-330], 
											 [-545,-370,-240,-230], [-325,-470,0,-330], 
											 [-370,-500,-75,-320],[-545,-350,-240,-150],[-180,-300,-400,-500]
											 ]
stick_coordinates_2 = [ [50,-330,250,-550] ,[0,-330,300,-470],[25,-350,320,-480], 
											 [250,-150,425,-350],[180,-300,400,-500],
											 [100,-330,400,-470],[250,-250,425,-460],[100,-330,400,-470]
											] 
											 
function draw() {

	translate(windowWidth/2, windowHeight/2)
	
	scale(0.75)
	step = (frameCount)%stick_coordinates_1.length
	
	//hide previous sticks position
	for (let i=0; i <stick_coordinates_1.length;i++) {
		strokeWeight("20")
		stroke("transparent")
		line(stick_coordinates_1[i][0],stick_coordinates_1[i][1],stick_coordinates_1[i][2],stick_coordinates_1[i][3])
		line(stick_coordinates_2[i][0],stick_coordinates_2[i][1],stick_coordinates_2[i][2],stick_coordinates_2[i][3])
	}
	
	//dispaly the drum, flag and text
	push()
	stroke("black")
	drawDrum()
	translate(0,55)
	drawFlag()
	drawText()
	pop()
	
	// console.log("STEP1: "+ stick_coordinates_1[step])
	// console.log("STEP2: "+ stick_coordinates_2[step])
	// console.log("-------------------------------------------------")
	

	//display the new stick position
	strokeWeight("20")
	//stroke(colors_sticks[step])
	stroke("rgb(236,212,183)")
	line(stick_coordinates_1[step][0],stick_coordinates_1[step][1],stick_coordinates_1[step][2],stick_coordinates_1[step][3])
	line(stick_coordinates_2[step][0],stick_coordinates_2[step][1],stick_coordinates_2[step][2],stick_coordinates_2[step][3])
	
	
}

function drawText() {
	fill("black")
	textStyle(BOLD);
	textSize(40);
	textAlign(CENTER);
	text("Burundi",-10,185)
}

function drawDrum() {

	strokeWeight(1);
	noStroke()
	//bottom ellipses
	fill("rgb(220,181,135)")
	ellipse(0,325,480,100)
	ellipse(0,475,300,75)
	noFill();
	
	//drum shape
	fill("rgb(220,181,135)")
	beginShape();
		vertex(-250, -335)
		vertex(250, -335)
		vertex(240,325)
		vertex(120,325)
		vertex(150,475)
		vertex(-150,475)
		vertex(-120,325)
		vertex(-240,325)
		vertex(-250, -335)
	endShape();
	
	//top ellipse
	let counter=0
	for(h=-335;h<=-225;h+=0.25) {
		noStroke()
		fill("rgb(156,100,63)")
		ellipse(0,h,500-counter,50)
		counter+=0.01
	}
	fill("rgb(141,79,37)")
	ellipse(0,-335,500,50)
	
	push()
	strokeWeight("15")
	stroke("rgb(236,212,183)")
	line(-255,-266,-270,-265)
	line(-165,-250,-190,-235)
	line(-5,-240,0,-225)
	line(165,-250,190,-235)
	line(255,-266,270,-265)
	pop()
	
}


function drawFlag() {
	
	applyMatrix(1.1, 0, 0, 1.1, 0, 0);
	fill("white")
	rect(-200,-150,400,300)
	

	fill("red")
	triangle(-175,-150,175,-150,0,-22.5)
	triangle(-175,150,175,150,0,22.5)
	noStroke()
	fill("green")
	triangle(-200,-125,-200,125,-55/2,0)
	triangle(200,-125,200,125,55/2,0)
	
	fill("white")
	circle(0,0,100)

	drawStar(-15/2,-20)
	drawStar(-20, 42.5)
	drawStar(40,0)

}


function drawStar(X,Y) {
	translate(X,Y)
	let arrayStar=[[0,0],[6.25/2,-20*5/24],[0,-40*5/24],[5,-40*5/24],
								[7.5,-60*5/24],[10,-40*5/24],[15,-40*5/24],[47.5/4,-20*5/24],
								[15,0],[10,0],[7.5,20*5/24],[5,0],[0,0]]
	push()
	
	stroke("green")
	strokeWeight(3)
	fill("red")
	beginShape()
		for (i=0; i<arrayStar.length; i++) {
			vertex(arrayStar[i][0],arrayStar[i][1])
		}
	endShape()
	pop()
}

