let ground;
let lander;
var lander_img;
var bg_img;
var enemy
var vy = 0;
var g = 0.05;
var enemyImg
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
enemyImg = loadImage("enemy.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,250,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //descida
  //vy +=g;
  lander.position.y+=vy;
  spawnEnemies();
  drawSprites();
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    
  
    //lander.changeAnimation('thrusting');
    vy = vy-1
    //thrust.nextFrame();
    
  }
}

 function spawnEnemies(){
  if(frameCount%80==0){
    var enemy=  createSprite(600,800,80,80)
    enemy.y= Math.round(random(120,800))
    enemy.addImage(enemyImg)
    enemy.scale = 0.1
    enemy.velocityX = -5
    enemy.lifetime = 700

  }
 }

