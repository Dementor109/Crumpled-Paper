
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, trash;	
var world;
var top;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	trash = new Trash(200,200,50,50);
	top = createSprite(1250,650,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
    
	text("Click the up key to throw the trash and any other key to drop it", 200,200)
	
	trash.display();
  groundObject.display();
  dustbinObj.display();
	
	
  keyPressed();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(trash.body, trash.body.position, {x:2.8, y:-4.5})
	}
}


