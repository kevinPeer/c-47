const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var MoneyBar;
var engine, world;
var object;
var greedyIMG;
var moneyImg;
var poorman, poormanImg;
var moneyGroup;
var GreedyGroup;
var barW;
var timer;
var gameState;

function preload() {
  poormanImg=loadImage("poor.png");
  moneyImg=loadImage("rupee.png");
  greedyIMG=loadImage("rich.png");

}

function setup() {
  createCanvas(displayWidth-30,displayHeight-90);
  poorman=createSprite(displayWidth/2, displayHeight-150, 40, 30);
  poorman.addImage(poormanImg);
  //MoneyBar=createSprite(30,30,40,20);
  //MoneyBar.shapeColor="red"
  poorman.scale=0.2;
  moneyGroup=new Group();
  GreedyGroup=new Group();
  barW=40
timer=100;
gameState="play";
}

function draw() {
  background("black");
  //poorman.x=mouseX;
fill("red");
rect(30,30,barW,20);

if(gameState==="play"){

  if(keyDown(UP_ARROW)) {
    poorman.y=poorman.y-9;
  }
  if(keyDown(LEFT_ARROW)) {
    poorman.x=poorman.x-9;
  }
  if(keyDown(RIGHT_ARROW)) {
    poorman.x=poorman.x+9;
  }
  if(keyDown(DOWN_ARROW)) {
    poorman.y=poorman.y+9;
  }
  for(var i=0; i< moneyGroup.length; i++) {
    if(poorman.isTouching(moneyGroup.get(i)) && moneyGroup.get(i)!=undefined) {
      moneyGroup.get(i).destroy();
  moneyBar(40);
    }
  }

  for(var i=0; i< GreedyGroup.length; i++) {
    if(poorman.isTouching(GreedyGroup.get(i)) && GreedyGroup.get(i)!=undefined) {
      GreedyGroup.get(i).destroy();
      moneyBar(80);


    }
  }

if(frameCount%30===0  &&   gameState==="play"){
  timer=timer-1;

}
textSize(25);
fill("white")
text("Time Left: "+timer,30,80);


//console.log(MoneyBar.width)
//console.log(displayWidth-30)





 spawnMoney();
 spawnGreedyPeople();
}
if(timer<1){
  gameState="end"
  textSize(70);
  fill("white")
  text("YOU LOSE",displayWidth/2-100, displayHeight/2)
}
if(barW>(displayWidth-30)){
  gameState="end"
  textSize(70);
  fill("white")
  text("YOU WIN!",displayWidth/2-100, displayHeight/2)
}
  drawSprites();
}
function spawnMoney() {
  if(frameCount%35===0) {
    var money = createSprite(50, 50, 20, 20);
    money.x = Math.round(random(50,displayWidth-50));
    money.velocityY=5;
    money.addImage(moneyImg);
    money.scale=0.1;
    moneyGroup.add(money);
  }
 }

 function spawnGreedyPeople() {
  if(frameCount%50===0) {
    var Greedy = createSprite(50, 50, 40, 40);
    Greedy.x = Math.round(random(50, displayWidth-50));
    Greedy.velocityY=10;
    Greedy.addImage(greedyIMG);
    Greedy.scale=0.3;
    GreedyGroup.add(Greedy);
  }
 }

 function moneyBar(width){
   if(width===40){
    barW=barW+40
   }
   else{
     barW=barW-80
   }
  
 }