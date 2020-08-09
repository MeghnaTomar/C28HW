class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.tree1=loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      image(this.tree1,pos.x,pos.y,this.width,this.height);
      rectMode(CENTER);
      pop();
    }
  }