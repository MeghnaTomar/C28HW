class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.stone1=loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      image(this.stone1,pos.x,pos.y,this.width,this.height);
      imageMode(CENTER);
      pop();
    }
  }