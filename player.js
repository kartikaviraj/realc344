class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
        this.rank=0

    }
 getCount(){ 
    database.ref('playerCount').on("value",(data)=> {
        playercount=data.val()
    })
 }
 updateCount(count){
     database.ref('/').update({
         playerCount:count
     })
 }
        update(){
            var pindex="players/player"+this.index
            database.ref(pindex).set({
                name:this.name,
                distance:this.distance
            })
        }
        static getAllPlayer(){
            database.ref("players").on("value",(data)=>{
                allplayer=data.val()
            })
            

            }
            getCarsatend(){
            database.ref('carsatend').on("value",(data)=>{
                this.rank=data.val()
            })
            }
        static updateCarsatend(rank){
            database.ref('/').update({
              carsatend:rank                  
            })
        }
        }
    
