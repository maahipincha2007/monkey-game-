//creating the variables
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivaltime

function preload(){
  
//loading the animation of the monekeey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //loading the images of the banana and the obstacle
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  //creating the food and obstacle group 
  FoodGroup=new Group ();
  obstacleGroup=new Group();
 
}



function setup() {
  //creating a canvas 
  createCanvas(400,400);
  //creating a initial score
  score =0
  //creating a initial survival time 
  survivaltime=0
  //creating the monkey sprite
  monkey = createSprite(50,350,20,10)
  //adding the animation of the monkey
  monkey.addAnimation("moving",monkey_running)
  //reducing the size of the monkey 
  monkey.scale=0.1
  //creating the ground variable
  ground = createSprite(0,400,1500,10)
  //adding velocity to the ground
  ground.velocityX=2;
 
    
}


function draw() {
  //adding background
 background("green")
  //making a continuous ground
  if (ground.x> 0) {
  ground.x = ground.width/2
}
  //making the monkey move when spacebar is pressed
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10
  }
  //giving gravity 
  monkey.velocityY = monkey.velocityY + 0.3
  //colliding the monkey with ground
  monkey.collide(ground);
  //creating fruits 
  if(World.frameCount%200===0){
    fruits()
 }
  //creating obstacles 
  if(World.frameCount%300===0){
    stones()
  }
  //vanishing the food when monkey eats it 
    if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
      //increasing the monkeys's score
    score=score+1
      }
  drawSprites();
     fill("white") 
  text("Score: "+ score, 100,50);
  
  fill("black")
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,200,50)

}
function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  banana.lifetime=300
  FoodGroup.add(banana)
}
function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
  obstacle.lifetime=200
}




