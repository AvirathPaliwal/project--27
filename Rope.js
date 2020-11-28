class Rope {
    constructor(b1,b2,offsetX,offsetY){
       this.offsetX=offsetX
       this.offsetY=offsetY
        var opsition ={
            bodyA: b1,
            bodyB: b2,
            pointB: {x:this.offsetX, y:this.offsetY},
            
            
                             
       }

               this.rope=Matter.Constraint.create(opsition); 
              World.add(world,this.rope)
    }
    display(){
      var pointA=this.rope.bodyA.position; 
      var pointB=this.rope.bodyB.position;
      
      strokeWeight(3)
      line(pointA.x, pointA.y, pointB.x+this.offsetX , pointB.y+this.offsetY   );
    
    }


}