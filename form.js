class Form{
    constructor(){
         this.title=createElement('h1')
          this.input=createInput("Enter name ")
           this.button=createButton('play now')
            this.greeting=createElement('h2')
            this.reset=createButton("reset")
            // this is the reset button^
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()

        

    }
    display(){
        
        this.title.html("Racing car")
        this.title.position(displayWidth/2-165,0)
        
        this.input.position(displayWidth/2-160,displayHeight/2-400)
        
        this.button.position(displayWidth/2-160,displayHeight/2-350)
        this.reset.position(displayWidth-250,displayHeight/2-450)
        this.button.mousePressed(()=> {
          this.input.hide()
          this.button.hide()
           player.name=this.input.value()
          playercount=playercount+1
          player.index=playercount
          player.update()
          player.updateCount(player.index)
           this.greeting.html("Hello there, "+player.name)
           this.greeting.position(displayWidth/2-200,displayHeight/2-400)
           
        })
        this.reset.mousePressed(()=> {
           // database.ref('/').update({
                //playerCount:0,
                //gameState:0
            //})
            // this is for the reset button updating gamestate and playercount in DATABASE
            player.updateCount(0)
            game.update(0)
           database.ref('players').remove()
        })
    }
}