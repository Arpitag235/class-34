const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var boggie4,boggie5;
var chain1;
var chain2;
var chain3;
var chain4;
var rock1;
var trainSound;
var crashSound;
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1 = new boggie(100,200,60,60);
  boggie2 = new boggie(200,200,60,60);
  boggie3 = new boggie(300,200,60,60);
  boggie4 = new boggie(400,200,60,60);
  boggie5 = new boggie(500,200,60,60);

  chain1 = new chain(boggie1.body,boggie2.body);
  chain2 = new chain(boggie2.body,boggie3.body);
  chain3 = new chain(boggie3.body,boggie4.body);
  chain4 = new chain(boggie4.body,boggie5.body);

  rock1 = new rock(1100,270,100,100)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.show();
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  rock1.show();
  var collision = Matter.SAT.collides(boggie5.body,rock1.body);
  if(collision.collided){
    flag = 1;
  }
  if(flag === 1){
    textSize(40);
    fill ("blue");
    text("crash",500,100);
    crashSound.play();
  }
  }

  
function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(boggie5.body,{x:boggie5.body.position.x,y:boggie5.body.position.y},{x:0.5,y:0})
    trainSound.play();
  }
}


