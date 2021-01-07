
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(100,100);

	dustbin1= new Dustbin(300,610,100,PI);
	dustbin2= new Dustbin(520,610,100,PI);
	dustbin3= new Dustbin(410,650,20,PI/2);

	ground= new Ground(400,550,1600,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject, body.position,{x:85,y:-85});
	}
}



