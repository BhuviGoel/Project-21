var bullet,wall, thickness;
var speed, weight;
var damage;
function setup() {
  createCanvas(1200,400);
  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83);

  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  wall=createSprite(1000, 200, thickness, height/2);
  wall.shapeColor= color(80,80,80);

  // damage=(0.5*weight*speed*speed)/(wall.width*wall.width*wall.width)
}

function draw() {
  background("black");  
  if (bullet.collide(wall)){
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(wall.width*wall.width*wall.width)
  }
  if (damage<10){
    bullet.shapeColor=color(0,255,0);
  }
  if (damage>10){
    bullet.shapeColor=color(255,0,0);
  }
  drawSprites();
}