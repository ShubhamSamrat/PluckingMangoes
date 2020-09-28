
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	Ground1 = new Ground(700,660,1400,20);
	stone = new Stone(200,400);

	mango1 = new Mango(990,290);
	mango2 = new Mango(1090,310);
	mango3 = new Mango(1090,170);
	mango4 = new Mango(1280,250);
	mango5 = new Mango(1170,220);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(mango1,mango1.body.position,stone.body.position);
  
  
  drawSprites();
 
}



function detectCollision(mango,obj1,obj2) {


	if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2  
		&& obj2.x - obj1.x < obj2.width/2 + obj1.width/2
		&& obj1.y - obj2.y < obj2.height/2 + obj1.height/2
		&& obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
		
			Matter.Body.setStatic(mango.body, false)
	  }
}
