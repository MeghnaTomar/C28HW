class Launcher{
    constructor(bodyA){
        var options = {
            
            bodyA: bodyA,
            stiffness: 0.004
        }
     this.pointA = pointA
    }

   
    attach(body){
      this.Launcher.bodyB = body;
  }


  display(){
    push();
    strokeWeight(3);
    pop();
  }   
}