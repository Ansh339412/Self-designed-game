const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var mangoImage,appleImage
function preload(){
mangoImage=loadImage("Orange.jpg")
appleImage=loadImage("Apple.jpg")

}



function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;
   game=new Game()
  
}

function draw() {
  background("green");
  Engine.update(engine);
   game.play()
}


  
