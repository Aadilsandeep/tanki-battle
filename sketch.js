let Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies;

function setup(){
  createCanvas(600,400);
  engine=Engine.create();
  world=engine.world;

  box=new Box(100,380,60,50);
  box1=new Box(100,335,40,40);
  box2=new Box(135,335,30,15);

  ball=new Circle(400,200,10);
  ball1=new Circle(500,100,15);





}
function draw(){
  background(57);
  box.show();
  box1.show();
  box2.show();
  ball.show();
  ball1.show();

  
}