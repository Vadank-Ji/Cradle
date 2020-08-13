const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World=  Matter.World;
const Constraint = Matter.Constraint;



var engine, world, ground;
var c1, c2, c3;
var ball, ball1;
var roof;
var a = []
var balls = []
function setup()
{

   var background1 = createCanvas(1200, 800)
    engine = Engine.create();
    world = engine.world
    engine.world.gravity.y = 32;

    roof = Bodies.rectangle(200,190,200, 20, {isStatic:true})
    World.add(world, roof);

   var d = {mass: 20}

    ball = Bodies.circle(206, 300, 20, d)
    ball1 = Bodies.circle(164, 300, 20, {isStatic:true})
    ball2 = Bodies.circle(122, 300, 20, {isStatic:true})
    ball3 = Bodies.circle(80, 300, 20, d)
    
    World.add(world, ball);
    World.add(world, ball3);
    World.add(world, ball2);
    World.add(world, ball1);

    balls.push(ball);
    balls.push(ball1);
    balls.push(ball2);
    balls.push(ball3);

    x = 80
    for(var i = 0; i<=3; i++)
    {

      var cradles = new Cradle(balls[i], roof, x, 10)
      a.push(cradles)
      x = x - 39 ;

    }



}
function draw()
{

    background("black")

    Engine.update(engine);
    for(var Threadripper = 0; Threadripper <= 3; Threadripper++ )
    {
      a[Threadripper].display();
    }
    
    ellipseMode(RADIUS);
    for(var Epyc64Cores = 0; Epyc64Cores <= 3; Epyc64Cores++) 
    ellipse(balls[Epyc64Cores].position.x, balls[Epyc64Cores].position.y, 20, 20)
    //console.log(ball.position.x)
    
    rectMode(CENTER);
    rect(roof.position.x, roof.position.y, 200, 20)

}
function mouseDragged()
{

    Matter.Body.setPosition(ball, {x:mouseX, y: mouseY})

}

