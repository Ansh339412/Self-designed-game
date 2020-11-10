class Game{
	constructor(){

	}

	play(){
if(frameCount%30==0){
	var fruit =createSprite(300,random(100,1000),10,10)
     fruit.velocityY=6
     var rand=Math.round(random(1,2))
     if(rand==1){
     	fruit.addImage(appleImage)

     }
     else{
     	fruit.addImage(mangoImage)
     }
	}

}
}