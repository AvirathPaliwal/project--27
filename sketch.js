
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   roof=new Roof(450,50,600,50);
   bob = new Bob (300,500,40);
   bob2 = new Bob (350,500,40);
   bob3 = new Bob (400,500,40);
   bob4 = new Bob (450,500,40);
   bob5 = new Bob (500,500,40);
   rope = new Rope (bob.body,roof.body,-80,0);
   rope2 = new Rope (bob2.body,roof.body,0,0);
   rope3 = new Rope (bob3.body,roof.body,30,0);
   rope4 = new Rope (bob4.body,roof.body,40,0);
   rope5 = new Rope (bob5.body,roof.body,80,0);
   
}



function draw() {
  rectMode(CENTER);
  background(155);
  roof.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  drawSprites();
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob.body, bob.body.position , { x : -50 , y : -50 } ) ;
   
   }
   }


