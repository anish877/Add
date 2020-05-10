const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = 0
var b;


function setup(){
    var canvas = createCanvas(1370,650);
    engine = Engine.create();
    world = engine.world;
    body = new Body(390,300,10,80)
    target2 = new Target(1200,300,20,100)
    target3 = new Target(1100,150,20,100)
    target4 = new Target(1100,450,20,100)

    arrow = new Arrow(300,300,100,5)
    slingShot = new SlingShot(arrow.body,{x:200,y:300});
}

function draw(){
    background(210);
    Engine.update(engine);

    slingShot.display();   
    body.display(); 
    target2.display();
    target3.display();
    target4.display();
    arrow.display();
    
}
function mouseDragged(){
    Matter.Body.setStatic(arrow.body,false)
    Matter.Body.setPosition(arrow.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()

}

