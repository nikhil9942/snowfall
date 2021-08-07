class SnowFall{
    constructor(){
        var option={isStatic:false}
        this.snowFall=Bodies.rectangle(random(1,800),10,10,10,option)
        World.add(world,this.snowFall)
    }
    display(){
        imageMode(CENTER)
        image(snowImg,this.snowFall.position.x,this.snowFall.position.y,10,10)
    }
}