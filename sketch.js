var PLAY
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500);
play = 1;
GameState = PLAY;
  END = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,405,1000,10);
  ground.x = ground.width /2;
  //ground.debug = true;
  
  invisible = createSprite(250,407,1000,10);
  invisible.x = ground.width/2;
}


function draw() {
  background("white");
  
  if (GameState === PLAY){
    
 if(ground.x<0);{
  ground.x = ground.width/2;
 }
    
  if (invisible.x<0){
    invisible.x = invisible.width/2;
  }
    invisible.velocityX = -5;
    
   if (keyDown("space") && monkey.isTouching(ground)) {
   monkey.velocityY = -20;  
   }
    score - Math.round(frameCount/3);
    survivalTime = Math.ceil(frameCount/ frameRate());
    ground.velocityX = -(5 + 2 *score / 100);
    
    if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    }
    
    if(monkey.isTouching(obstacleGroup)){
      GameState = END;
    }
    
  }
  else if (gamestate === END){
    ground.velocityX = 0;
    invisible.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
    FoodGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
  }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  
  monkey.collide(invisible);
  
  stroke("black");
  textSize(20);
  fill("red");
  text("score:" + score, 400, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("survival Time:" + survivalTime, 100,50);
  
  
  drawSprites();
}   