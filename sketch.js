const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var scene,snowImg,snowFall
var fall=[]

function preload(){
  scene=loadImage("snow3.jpg")
  snowImg=loadImage("snow4.webp")
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
}

function draw() {
  background(scene);  
  Engine.update(engine)
  if(frameCount%5===0){
    fall.push(snowFall= new SnowFall())

  }
  for(var i=0;i<fall.length;i++) {
    fall[i].display()
  }
  drawSprites();
}