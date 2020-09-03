var redballoon,greenballoon,blueballoon,pinkballoon
var redballoonim,greenballoonim,blueballoonim,pinkballoonim

var bow

var backgroundim

function preload(){
 //load your images here 
 redballoonim = loadImage("pink_balloon0.png")
 greenballoonim = loadImage("green_balloon0.png") 
 blueballoonim = loadImage ("blue_balloon0.png")
 pinkballoonim = loadImage("pink_balloon0.png") 
  
 bow = loadImage ("bow0.png") 

 backgroundim = loadAnimation("background0.png","background20.png") 
  
  
  
}

function setup() {
  createCanvas(600, 600);
  
  redballoon = createSprite (300,300,20,20);
   redballoon.addImage("colour",redballoonim );
  
  greenballoon = createSprite(300,300,20,20);
  greenballoon.addImage("colour",greenballoonim)
  
  blueballoon = createSprite(300,300,20,20);
  blueballoon.addImage("colour",blueballoonim) 
  
  pinkballoon = createSprite(300,300,20,20);
  pinkballoon.addImage("colour",pinkballoonim) 

  
}

function draw() {
background(40)
 
 drawSprites();
  
  
}

