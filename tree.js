class Tree {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("images/tree.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      //rectMode(CENTER);
      //rect(this.pos.x)
      //imageMode(CENTER);
      //image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  