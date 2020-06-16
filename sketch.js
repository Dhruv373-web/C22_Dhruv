var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "green";
gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "green";
gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor = "green";
gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor = "green";
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
if (isTouching(movingRect, gameObject1)) {
  movingRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}
if (isTouching1(movingRect, gameObject2)) {
  movingRect.shapeColor = "orange";
  gameObject2.shapeColor = "orange";
}
else {
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";
}
if (isTouching(movingRect, gameObject3)) {
  movingRect.shapeColor = "yellow";
  gameObject3.shapeColor = "yellow";
}
else {
  movingRect.shapeColor = "green";
  gameObject3.shapeColor = "green";
}
if (isTouching(movingRect, gameObject4)) {
  movingRect.shapeColor = "gold";
  gameObject4.shapeColor = "gold";
}
else {
  movingRect.shapeColor = "green";
  gameObject4.shapeColor = "green";
}
  drawSprites();
}
function isTouching (object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2 && 
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2 ) {
    return true; 
  }
  else {
    return false;
  }
}
function isTouching1 (object3, object4){
  if (object3.x - object4.x < object4.width/2 + object3.width/2 && 
    object4.x - object3.x < object4.width/2 + object3.width/2 && 
    object3.y - object4.y < object4.height/2 + object3.height/2 &&
    object4.y - object3.y < object4.height/2 + object3.height/2 ) {
    return true; 
  }
  else {
    return false;
  }
}
function isTouching2 (object4, object5){
  if (object4.x - object5.x < object5.width/2 + object4.width/2 && 
    object5.x - object4.x < object5.width/2 + object4.width/2 && 
    object4.y - object5.y < object5.height/2 + object4.height/2 &&
    object5.y - object4.y < object5.height/2 + object4.height/2 ) {
    return true; 
  }
  else {
    return false;
  }
}
function isTouching3 (object5, object6){
  if (object5.x - object6.x < object6.width/2 + object5.width/2 && 
    object6.x - object5.x < object6.width/2 + object5.width/2 && 
    object5.y - object6.y < object6.height/2 + object5.height/2 &&
    object6.y - object5.y < object6.height/2 + object5.height/2 ) {
    return true; 
  }
  else {
    return false;
  }
}