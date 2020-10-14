var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  thickness = random(23,58)
  speed = random(223,321);
  weight = random(30,52);
  wall = createSprite(1500,200,thickness,height/2);
  bullet = createSprite(50, 200, 60, 40);
  bullet.velocityX = speed
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(checkLeftEdge(bullet,wall)){
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    if(damage >= 10){
      bullet.shapeColor = color(255,0,0);
      bullet.velocityX = 0;
      bullet.x = 600;
    }
    if(damage < 10){
      bullet.shapeColor = color(0,255,0);
      bullet.velocityX = 0;
      bullet.x = 600;
    }
  }
  drawSprites();
}
function checkLeftEdge(Andy,Swati){
  if(Andy.x-Andy.width/2<Swati.x+Swati.width/2){
    return true;
}else{
    return false;
}
}