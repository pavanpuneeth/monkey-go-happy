var obstacle, obstacleImage, obstacleGroup;
var banana, bananaImage, bananaGroup;
var monkey, monkey_running;
var backgroundy, backgroundImage;
var score= 0;
var ground;


function preload(){
   backgroundImage= loadImage("jungle.jpg");
  
  
  monkey_running= loadAnimation ("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
    bananaImage= loadImage("banana.png");
    obstacleImage= loadImage("stone.png");
}

function setup() {
    
createCanvas(600,400);
  
 backgroundy= createSprite (200,200);
backgroundy.addImage ("backgroundimage",backgroundImage);
backgroundy.velocityX= -2;
    
  
monkey= createSprite (50,340,10,10);
monkey.addAnimation ("monkeyrunning",monkey_running);
monkey.scale= 0.1;
  

ground= createSprite (0,390,800,10);
ground.visible= false;
  
 wall=createSprite(300,50,600,5); 
  wall.visible=false;
  
bananaGroup= new Group ();
obstacleGroup= new Group ();
}

function draw() {
  
background("white");
  
  
console.log(monkey.x);
  
if (backgroundy.x<150) {
 backgroundy.x= 200
}   
  
 
if (keyDown ("space")&& monkey.y> 320) {
monkey.velocityY= -25;  
}    
    

monkey.velocityY= monkey.velocityY + 2;
monkey.collide (ground);
  

if (bananaGroup.isTouching(monkey)) {
score= score+2;
 monkey.scale=0.2;
bananaGroup.destroyEach();
}
  
 
  
  
 switch (score) {
      case 10: monkey.scale= 0.15;
      break;
      case 20: monkey.scale= 0.20;
      break;
      case 30: monkey.scale= 0.25;
      break;
      case 40: monkey.scale= 0.30;
      break;
      case 50: monkey.scale= 0.35;
      break;
      default: break;
    }
  
if (obstacleGroup.isTouching(monkey)) {
score= 0;
obstacleGroup.destroyEach();
monkey.scale= 0.1;
 }
  
   
  
spawnBananas();
spawnObstacles();
drawSprites();

stroke ("white");
textSize (15);
text ("Score: "+score,190,70);  
}

function spawnBananas () {
if (frameCount%70===0) {
banana= createSprite (600,230,10,10);  
banana.addImage ("bananaimage", bananaImage);
banana.scale= 0.06;
banana.velocityX= -10;
banana.lifetime= 134;
bananaGroup.add(banana);
  }
}

function spawnObstacles () {
if (frameCount%100===0) {
obstacle= createSprite (600,357,800,10);
obstacle.addImage ("obstacleimage", obstacleImage);
obstacle.scale= 0.1;
obstacle.velocityX= -10;
obstacle.lifetime= 120;
obstacleGroup.add(obstacle);
}
}





