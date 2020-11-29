
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper1;
var dustbin, dustbinImg;

function preload() {
   dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(900, 400);

	engine = Engine.create();
	world = engine.world;
  
  paper1 = new paper(50,370,70);

  ground = new Ground(width/2, 390, 900, 10);

  dustbin = createSprite(800,276,1,1);
  dustbin.scale = 0.7;

  Engine.run(engine);
}

function draw() {

  background(255);

  Engine.update(engine);

  dustbin.addImage("dust", dustbinImg);

  ground.display();
  paper1.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	 Body.applyForce(paper1.body,paper1.body.position,{x:125,y:125});
  }
}

