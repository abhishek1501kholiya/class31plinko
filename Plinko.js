class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
    
    ellipseMode(CENTER);
    fill("white");
    ellipse(pos.x,pos.y,10,10);
        
    
    }

}