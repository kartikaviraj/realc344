class Game{
    constructor(){

    }
    getState(){
       database.ref('gameState').on("value", function(data){
         gamestate=data.val()
       }) 
    }
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
    start(){
      if(gamestate===0){
          player=new Player()
          player.getCount()
          form= new Form()
          form.display()

      } 
      car1=createSprite(100,200)
      car1.addImage("c11", c1)
      car2=createSprite(300,200)
      car2.addImage("c12",c2)
      car3=createSprite(500,200)
      car3.addImage("c33",c3)
      car4=createSprite(700,200)
      car4.addImage("c44",c4)
      car=[car1,car2,car3,car4] 
    }
    play(){
      form.hide()
      textSize(30)
      text("gamestart",120,120)
      Player.getAllPlayer()
     player.getCarsatend()
      if(allplayer!==undefined){
        image(track,0,-displayHeight*1004,displayWidth,displayHeight*1005)
        var posy=130
        var index=0,x=200,y
        for(var plr in allplayer){
          index=index+1
          x=x+200
          //important displayHeight and displayWidth
          y=displayHeight-allplayer[plr].distance
          car[index-1].x=x
          car[index-1].y=y
          if (plr==="player"+player.index)
          {
            fill ("red")
            ellipse(x,y,60,60)
            car[index-1].shapeColor="red"
            //important camera position y
            camera.position.y=car[index-1].y
          }
          //fill ("red")
          //else
          //fill("black")
          //posy+=20
          //textSize(15)
          //text(allplayer[plr].name+" :"+allplayer[plr].distance,120,posy)
          
        }
      }
      if(player.distance===4000){
        gamestate=2
        player.rank+=1
      //  P is capital as it is also the name of the class
        Player.updateCarsatend(player.rank)
      }
      if(keyIsDown(UP_ARROW)&&player.index!==null)
      {
        player.distance+=50
        player.update()
      }
      drawSprites();
    }
    end(){
      console.log(player.rank)
    }
}