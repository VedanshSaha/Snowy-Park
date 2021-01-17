const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var boy,boy_img;
var ground1;
var tree1,tree_img;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var thread;
var r = 20;

function preload()
{
  boy_img=loadImage("canadda.png");
  tree_img=loadImage("Trre.png");
  bg_img = loadImage("bg.png");
  Sound = loadSound("Sound.mp3")
  snowimg = loadImage("snow.png")
}

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;

  

  ground1=new ground(400,350,800,10);

  Sound.loop();

  stone1=new stone(150,300,20,20);

  mango1=new mango(550,200-20,15);
  mango2=new mango(570,120-20,15);
  mango3=new mango(610,150-20,15);
  mango4=new mango(640,90-20,15);
  mango5=new mango(660,180-20,15);
  mango6=new mango(690,110-20,15);
  mango7=new mango(735,155-20,15);
  mango8=new mango(765,200-20,15);
  

  thread=new constraint(stone1.body,{x:230,y:315-33});
  
}

function draw() {
  background(bg_img);  

  Engine.update(engine);
 
  snowFall();
  imageMode(CENTER);
  image(boy_img,260+10,350-50,80+r,100+r);

  

  //ground1.display();

  imageMode(CENTER);
  image(tree_img,650,235-40,300,350);
  
  stone1.display();

  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  thread.display();

  

 //collision by @lib.js
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);

  //detectCollision(mango1,mango1);
  detectCollision(mango1,mango2);
  detectCollision(mango1,mango3);
  detectCollision(mango1,mango4);
  detectCollision(mango1,mango5);
  detectCollision(mango1,mango6);
  detectCollision(mango1,mango7);
  detectCollision(mango1,mango8);

  detectCollision(mango2,mango1);
  //detectCollision(mango2,mango2);
  detectCollision(mango2,mango3);
  detectCollision(mango2,mango4);
  detectCollision(mango2,mango5);
  detectCollision(mango2,mango6);
  detectCollision(mango2,mango7);
  detectCollision(mango2,mango8);

  detectCollision(mango3,mango1);
  detectCollision(mango3,mango2);
  //detectCollision(mango3,mango3);
  detectCollision(mango3,mango4);
  detectCollision(mango3,mango5);
  detectCollision(mango3,mango6);
  detectCollision(mango3,mango7);
  detectCollision(mango3,mango8);


  detectCollision(mango4,mango1)
  detectCollision(mango4,mango2);
  detectCollision(mango4,mango3);
  //detectCollision(mango,mango4);
  detectCollision(mango4,mango5);
  detectCollision(mango4,mango6);
  detectCollision(mango4,mango7);
  detectCollision(mango4,mango8);

  detectCollision(mango5,mango1)
  detectCollision(mango5,mango2);
  detectCollision(mango5,mango3);
  detectCollision(mango5,mango4);
  //detectCollision(mango5,mango5);
  detectCollision(mango5,mango6);
  detectCollision(mango5,mango7);
  detectCollision(mango5,mango8);

  detectCollision(mango6,mango1)
  detectCollision(mango6,mango2);
  detectCollision(mango6,mango3);
  detectCollision(mango6,mango4);
  detectCollision(mango6,mango5);
 // detectCollision(mango6,mango6);
  detectCollision(mango6,mango7);
  detectCollision(mango6,mango8);

  detectCollision(mango7,mango1)
  detectCollision(mango7,mango2);
  detectCollision(mango7,mango3);
  detectCollision(mango7,mango4);
  detectCollision(mango7,mango5);
  detectCollision(mango7,mango6);
  //detectCollision(mango7,mango7);
  detectCollision(mango7,mango8);

  detectCollision(mango8,mango1)
  detectCollision(mango8,mango2);
  detectCollision(mango8,mango3);
  detectCollision(mango8,mango4);
  detectCollision(mango8,mango5);
  detectCollision(mango8,mango6);
  detectCollision(mango8,mango7);
  //detectCollision(mango,mango8);

  thread.dotrick();
  

  fill("black")
  textSize(25);
  stroke("Red")
  text("Press Space to get a second chance to play",40,40);

 drawSprites();
}

function mouseDragged()
{
  if(trick === 0){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased()
{
  thread.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone1.body,{x:140,y:315});
    thread.attacher(stone1.body);
    
  }
}

function snowFall(){

    if(frameCount%5===0){
    A = createSprite(random(0,800),0)
    A.addImage("snowy",snowimg)
    A.scale = 0.04;
    A.velocityY = 10/3;
    A.velocityX = random(-5/3,5/3);
    }
}