var player , target , obstacle1, obstacle2, obstacle3, obstacle4 , edges;
var score = 0;

function setup() {
  createCanvas(600, 600);
  player = createSprite(550, 550, 50, 50)
  target = createSprite(50, 50, 50, 50)
  obstacle1 = createSprite(200, 200, 150, 10)
  obstacle2 = createSprite(300, 300, 150, 10)
  obstacle3 = createSprite(400, 400, 150, 10)
  obstacle4 = createSprite(500, 500, 150, 10)
  edges = createEdgeSprites()
  obstacle1.velocityX = 10
  obstacle2.velocityX = 10
  obstacle1.shapeColor = "red"
  obstacle2.shapeColor = "red"
  obstacle3.velocityX = 10
  obstacle4.velocityX = 10
  obstacle3.shapeColor = "red"
  obstacle4.shapeColor = "red"
  player.shapeColor = "white"
  target.shapeColor = "pink"
}

function draw() {
  background("green");
  obstacle1.bounceOff(edges[0])
  obstacle2.bounceOff(edges[0])
  obstacle3.bounceOff(edges[0])
  obstacle4.bounceOff(edges[0])
  obstacle1.bounceOff(edges[1])
  obstacle2.bounceOff(edges[1])
  obstacle3.bounceOff(edges[1])
  obstacle4.bounceOff(edges[1])
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])
 

  if (keyDown("down")) { player.y = player.y + 3 }
  if (keyDown("up")) { player.y = player.y - 3 }
  if (keyDown("left")) { player.x = player.x - 3 }
  if (keyDown("right")) { player.x = player.x + 3 } 
  if (player.isTouching(target)) {
    textSize(50);
    fill("blue");
    text ( "You Win", 300, 300);
  }
  if (player.isTouching(obstacle1)) {
    textSize(50);
    fill("black");
    text ( "You Lose" , 300 , 300);
    player.x=40;
    player.y=550;

  }
  
  if (player.isTouching(obstacle2)) {
    textSize(50);
 fill("black");
 text ("You Lose" , 300, 300);
 player.x=40;
 player.y=550; }

 if (player.isTouching(obstacle3)) {
  textSize(50);
fill("black");
text ("You Lose" , 300, 300);
player.x=40;
player.y=550; }

if (player.isTouching(obstacle4)) {
  textSize(50);
fill("black");
text ("You Lose" , 300, 300);
player.x=40;
player.y=550;
  }  
  drawSprites() 
  
}
