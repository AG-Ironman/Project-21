
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 
var canRight, canLeft
var groundObj

function preload()
{
	
}

function setup() {
	createCanvas(400, 350);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballOptions={
		isStatic : false,
		restitution : 0.28,
		friction : 0,
		density : 1.2
	}
	
	ball = Matter.Bodies.circle(200,50,10, ballOptions);
	World.add(world,ball);

	groundObj = new ground(width/2, 670, width, 20);
	canLeft = new ground(1100, 600, 20, 120);
	canRight = new ground(1400, 600, 20, 120);


	groundObj.display();
	canLeft.display();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.04});
    }
}

