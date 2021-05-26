var bow , arrow,  background,score=0,arrows=0,balloons=0,pbs,rbs,bbs,gbs,argrp;
var bowImage, arrowImage, gballoonImage, rballoonImage, pballoonImage ,bballoonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  rballoonImage = loadImage("red_balloon0.png");
  gballoonImage = loadImage("green_balloon0.png");
  bballoonImage = loadImage("blue_balloon0.png");
  pballoonImage = loadImage("pink_balloon0.png");
  
}
function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  pbs=new Group();
  gbs=new Group();
  bbs=new Group();
  rbs=new Group(); 
  argrp=new Group();
  
}

function draw() {
 background(0);
  scene.velocityX = -3 
  if (scene.x < 0){
      scene.x = scene.width/2;
    }
  bow.y = World.mouseY
  if (keyDown("space")) {
    createArrow();
    arrows=arrows+1;
  }
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 === 0) {
    if (select_balloon === 1) {
      redBalloon();
      balloons=balloons+11
    }
    if (select_balloon === 2) {
      blueBalloon();
      balloons=balloons+11
    }
    if (select_balloon === 3) {
      greenBalloon();
      balloons=balloons+11
    }
    if (select_balloon === 4) {
      pinkBalloon();
      balloons=balloons+11
    }
  }
  if (argrp.isTouching(rbs)||
      argrp.isTouching(gbs)||
      argrp.isTouching(bbs)||
      argrp.isTouching(pbs)){
    score=score+Math.round(20+(balloons/arrows))       
    argrp.destroyEach();
    pbs.destroyEach();
    gbs.destroyEach();
    bbs.destroyEach();
    rbs.destroyEach();
    
    
  }
  
  drawSprites();
  textSize(20)
  fill("black")
  text("SCORE = "+score ,20,50 );
  text("Arrows = "+arrows+"/50",20,80);
  text("Balloons = "+balloons,20,110);
  if(score>600&&arrows<50){
  textSize(50);
  text("Y O U  W I N",50,200);
  }
  if(arrows>50&&score<600){
    fill("red");
    textSize(50);
    text("YOU LOSE",50,200);
  }
}

function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  argrp.add(arrow);
}
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(rballoonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  rbs.add(red);
}
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(bballoonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bbs.add(blue);
}
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(gballoonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  gbs.add(green);
}
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pballoonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pbs.add(pink);
}
