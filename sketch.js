
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
var options={
  isStatic:true
}
var ball_options={
  restitution:1.0
}
  ball = Bodies.circle(200,200,50,ball_options);
  ground = Bodies.rectangle(width/2,height,width,50,options);
 World.add(world,ground);
 World.add(world,ball);
 console.log(ground);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,50);





}