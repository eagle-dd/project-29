
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

var ground, tree,treeImg,ground2;
var   mango1,tree1;
var engine, world;

function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	createCanvas(1200, 600);
	rectMode(CENTER);
  
  box1=new Box(500,475,50,50);
  box2=new Box(550,475,50,50);
  box3=new Box(600,475,50,50);
  box4=new Box(650,475,50,50);
  box5=new Box(700,475,50,50);
  box6=new Box(550,425,50,50);
  box7=new Box(600,425,50,50);
  box8=new Box(650,425,50,50);
  box9=new Box(600,375,50,50);

  box10=new Box(800,275,50,50);
  box11=new Box(850,275,50,50);
  box12=new Box(900,275,50,50);
  box13=new Box(950,275,50,50);
  box14=new Box(1000,275,50,50);
  box15=new Box(850,225,50,50);
  box16=new Box(900,225,50,50);
  box17=new Box(950,225,50,50);
  box18=new Box(900,175,50,50);

  stone1=new Stone(100,400,35,35);
  throw1 = new Throw(stone1.body,{x:100,y:400});

  ground2=createSprite(900, 300, 300,10);
  ground2.shapeColor=color("green")

  ground2 = Bodies.rectangle(900, 300, 300,10 , {isStatic:true} );
   World.add(world, ground2);

	groundSprite=createSprite(600, 500, 300,10);
	groundSprite.shapeColor=color("green")

	ground = Bodies.rectangle(600, 500, 300,10 , {isStatic:true} );
 	World.add(world, ground);

	
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(255);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  stone1.display();
  throw1.display();
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased() {
	throw1.fly()
	}



