var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800)
  fixedRect = createSprite(900, 100, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
 

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(700, 100, 50, 50);
  gameObject4.shapeColor = "green";
gameObject4.velocityX = -5;
gameObject1.velocityX = 5;

 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0);  
  console.log(fixedRect.x-movingRect.x); 
  
  gameObject2.x = World.mouseX;
  gameObject2.y = World.mouseY;

  

  if(isTouching(gameObject2, gameObject3)){

    gameObject2.shapeColor = "yellow";
      gameObject3.shapeColor = "yellow";


  }
  else{

    gameObject2.shapeColor = "blue";
    gameObject3.shapeColor = "blue";


  } 

  bounce(gameObject1, gameObject4); 
  drawSprites();
    
}

