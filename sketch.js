
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var car1Image
var car2Image
var trackImage 
var cupImage
 
function preload(){
car1Image=loadImage("car1.jpg")
car2Image=loadImage("car 2.jpg")
trackImage=loadImage("track.jpg")
cupImage=loadImage("cup.jpg") 
} 

function setup(){
createCanvas(900,900) 
  
  track =createSprite(400,579,100,100)
  track.addImage(trackImage)
  track.velocityX =3;
  track.scale=3
  
  cup =createSprite(400,739,100,100)
  cup.addImage(cupImage)
  cup.velocityX = 1;
  cup.scale=0.3
  
  car1=createSprite(110,802,60,60)
  car1.addImage(car1Image)
  car1.scale=0.4

  car2 =createSprite(110,650,10,10)
  car2.addImage(car2Image)
  car2.scale=0.2
} 

function draw(){
  background("lightblue");
  
  if (gameState===PLAY){
   if(track.x > 400 ){
    track.x = width/3;   
   }
  }
    
  
    if(car1.isTouching(cup)){
      gameState = END;
    }
  
  
  
  if (keyDown("UP")){
   car1.y=car1.y-2
  }
   
  if (keyDown("DOWN")){
   car1.y=car1.y+2
  } 
  
    
  if (keyDown("RIGHT")){
car1.x=car1.x+2
  }
    
  if (keyDown("LEFT")){
 car1.x=car1.x-2
  }
 
  
  if (keyDown("W")){
   car2.y=car2.y-2
  }
   
  if (keyDown("S")){
   car2.y=car2.y+2
  } 
  
    
  if (keyDown("D")){
  car2.x=car2.x+2
  }
    
  if (keyDown("A")){
  car2.x=car2.x-2
  }
   drawSprites()
}
 

 
