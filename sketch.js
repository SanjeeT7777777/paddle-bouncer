var ball,img,paddle;
var rand;

var linei;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

function preload() {
  /* preload your images here of the ball and the paddle */
  balli = loadImage("ball.png");
  paddlei = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(100,200,20,20)
  paddle = createSprite(380,200,5,50)
  linei= createSprite(398,200,2,400)
  linei.visible=false;
  
  /* assign the images to the sprites */
  ball.addImage("ball",balli);
  paddle.addImage("paddle",paddlei);
  /* give the ball an initial velocity of 9 in the X direction */
    ball.velocityX=2;
  ball.velocityY=-2;

}

function draw() {
  background(100,100,100);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  

if(gameState===PLAY){  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.bounceOff(edges[0]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle)
  
     if(ball.bounceOff(paddle)){
       randomvelocity();
     }
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=4;
  }
}
  if(ball.isTouching(linei)&&gameState===PLAY){
    gameState=END;
  }
  if(gameState===END){
    ball.velocityY=0;
    ball.velocityX=0;
    
    paddle.velocityY=0;
    
    ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.bounceOff(edges[0]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);

    fill("red");
    text("GAMEOVER",180,200)

  }
  if(keyDown("R") && gameState===END ){
    gameState=PLAY;
  }
  drawSprites();
  
}
function randomvelocity(){
  var rand=random(-10,10);
  ball.velovityY=rand;
  ball.velocityX=rand;
}


