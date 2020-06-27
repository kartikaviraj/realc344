var ball;
var database, position
var playercount=0
var gamestate=0, player,form,game
var allplayer
var car,car1,car2,car3,car4,c1,c2,c3,c4,track
function preload(){
c1=loadImage("car1.png")
c2=loadImage("car2.png")
c3=loadImage("car3.png")
c4=loadImage("car4.png")
track=loadImage("track.jpg")
} 
    

function setup(){
    createCanvas(displayWidth-200,displayHeight-250);   
    database=firebase.database()
   game= new Game()
   game.getState()
   game.start() 
}

function draw(){
    background("white");
    if(playercount===4){
        game.update(1)
    }
    if(gamestate===1){
        clear()
        game.play()
    }
    if (gamestate===2){
        game.update(2)
        game.end()
    }
    drawSprites();
}