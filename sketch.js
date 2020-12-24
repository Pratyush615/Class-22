const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld, ground;
var ball
function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();  //myEngine.world
  myWorld = myEngine.world;
  
  var groundOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20, groundOptions);
  World.add(myWorld, ground);
  var ballOptions = {
    restitution: 1
  }
  ball = Bodies.circle(210,100,20, ballOptions);
  World.add(myWorld, ball);
  ball1 = Bodies.circle(200,200,20, ballOptions);
  World.add(myWorld, ball1);
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  ellipse(ball1.position.x, ball1.position.y, 20, 20);
  drawSprites();
}