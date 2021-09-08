var girlanimation,girl;

var bg;


function preload(){

girlanimation=loadAnimation("img2.png","girl.png")
bg=loadImage("bg1.jpg")
}
function setup (){
createCanvas(windowWidth,windowHeight)


girl=createSprite(500,850)
girl.addAnimation("running",girlanimation)

}
function draw(){

background(bg)


drawSprites()
}