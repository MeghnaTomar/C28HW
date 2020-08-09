class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.boy1=loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){
     
      var pos =this.body.position;
      image(this.boy1,pos.x,pos.y,this.width,this.height);
      rectMode(CENTER);
      pop();
    }
  }