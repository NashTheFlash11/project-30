const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;

var object;
var stand;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

var slingshot;

var gameState = "launched";
var polygon_img;

var ball;
function preload(){

  //polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  object = new Ground(130, 210, 10, 10);
  stand = new Ground(360, 270, 250, 20);

  box1 = new Box(315, 255, 30, 40);
  box2 = new Box(330, 255, 30, 40);
  box3 = new Box(345, 255, 30, 40);
  box4 = new Box(360, 255, 30, 40);
  box5 = new Box(375, 255, 30, 40);
  box6 = new Box(390 ,255, 30, 40);
  box7 = new Box(405, 255, 30, 40);

  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(345, 235, 30, 40);
  box10 = new Box(360, 235, 30, 40);
  box11 = new Box(375, 235, 30, 40);
  box12 = new Box(390, 235, 30, 40);

  box13 = new Box(345, 215, 30, 40);
  box14 = new Box(360, 215, 30, 40);
  box15 = new Box(375, 215, 30, 40);

  box16 = new Box(360, 195, 30, 40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new Slingshot(this.ball, {x:130, y:210});
}

function draw() {
  background("white"); 

  Engine.update(engine);
  
  object.display();
  stand.display();
  slingshot.display();

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

  ellipse(ball.position.x,ball.position.y,40);
  // imageMode(CENTER);
  // image(polygon_img,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode === 32){
      //Attach the bird to the slingshot
      slingshot.attach(this.ball);
  }
}