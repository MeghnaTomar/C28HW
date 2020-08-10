class Elastic{
    constructor(pointA,bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.004
        }
     this.pointA = pointA
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }

    fly(){
        this.elastic.bodyB = null;
    }

   


  display(){
    push();
    strokeWeight(3);
    pop();
  }   
}