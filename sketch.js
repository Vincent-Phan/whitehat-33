var snow1

function preload(){
  snow1 = loadImage("snow1.jpg");

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  snow1 = new Snow()
}

function draw(){
  background(snow1);

  if(frameCount%60 === 0){
    snow.push(new snow(random(0,800),0))
  }
  for(var k = 0; k < particles.length; k++){
    snow.display();
  }


  drawSprites()
}
