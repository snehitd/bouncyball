const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,bodies;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
    var ground_options={
        isStatic: true
    }
    ground=Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball=Bodies.circle(200,100,20);
    World.add(world,ball);
    
}

function draw(){
    background(0);
    rectMode(CENTER);
    Engine.update(engine);
    rect(ground.position.x,ground.position.y,200,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
   // rect(200,200,50,50);
}
