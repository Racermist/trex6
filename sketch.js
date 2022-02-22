var edges;
var trex ,trex_running;
var ground,ground_image;
var ig;
var test;
var cloud,cloud_image;
var cactus,cactus1,cactus2,cactus3,cactus4,cactus5,cactus6;

function preload(){
    trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png");
  cloud_image=loadImage("cloud.png");
  cactus1=loadImage("obstacle1.png");
  cactus2=loadImage("obstacle2.png");
  cactus3=loadImage("obstacle3.png");
  cactus4=loadImage("obstacle4.png");
  cactus5=loadImage("obstacle5.png");
  cactus6=loadImage("obstacle6.png");
}

function setup(){
    createCanvas(600,200)
    edges=createEdgeSprites();
    //create a trex sprite
  trex=createSprite(40,185,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
//create ground sprite
  ground=createSprite(200,185,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.addImage(ground_image);
  //creating ig
  ig=createSprite(200,195,400,10);
  ig.visible=false;
  
}

function draw(){
  test=Math.round(random(1,100));
  console.log(test);
  //add background
    background(0);
    //making trex jump.
    if(keyDown("space")&&trex.y>=100){
      trex.velocityY=-10;
    }
    //add gravity
    trex.velocityY=trex.velocityY+0.8;
    //making ground move.
    if(ground.x<40){
      ground.x=ground.width/2;
    }
    //making trex collide.
  trex.collide(ig);
 spawnCloud();
 spawnObstacles();
  drawSprites();
}
function spawnCloud(){
  if(frameCount%60===0){
  cloud=createSprite(600,30,35,10);
  cloud.velocityX=-4;
  cloud.y=Math.round(random(20,50))
  cloud.addImage(cloud_image);
 cloud.scale=0.8;
  trex.depth=cloud.depth;
  trex.depth=trex.depth+1
  }
}
function spawnObstacles(){
  if(frameCount%60==0){
    cactus=createSprite(600,180,10,30);
    cactus.velocityX=-6;
    var num=Math.round(random(1,6))
    switch(num){
case 1:cactus.addImage(cactus1);
break;
case 2:cactus.addImage(cactus2);
break;
case 3:cactus.addImage(cactus3);
break;
case 4:cactus.addImage(cactus4);
break;
case 5:cactus.addImage(cactus5);
break;
case 6:cactus.addImage(cactus6);
break;
default:break
    }
    cactus.scale=0.6;
  }
}
