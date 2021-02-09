const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld,object;


function setup(){
  var canvas=createCanvas(400,400);

  myEngine=Engine.create();
  // myWorld is myEngines's World
  myWorld=myEngine.world;

  var options={
    isStatic : true
  }

  object=Bodies.rectangle(200,300,200,20,options);
  World.add(myWorld,object);
  console.log(object);

}
function draw()
{
  background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
   rect(object.position.x,object.position.y,200,20);
  
}