var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var flag = 0
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var edgeL
var edgeB
var edgeR
var ground

ground = new BoxLanding(200, 400, 20, 400)

edgeL = new BoxLanding(300, 375, 20, 50)
edgeB = new BoxLanding(350, 390, 100, 20)
edgeR = new BoxLanding(390, 375, 20, 50)



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.3

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	helicopterSprite.velocityX=7.5



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

helicopterSprite.velocityX=7.5
packageSprite.velocityX=7.5

if(helicopterSprite.x>(800+helicopterSprite.width/2))
{
helicopterSprite.x=0-helicopterSprite.width/2

}

  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y 

if(flag===0)
  {
  packageSprite.x=helicopterSprite.x
  }

  drawSprites();
 
}

function keyPressed() {



 //if (keyCode === DOWN_ARROW&&flag===0) {

	
	
	//flag=1


 // }
}



display()



