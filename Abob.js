class Bob {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 35, 35, options);
      this.width = 25;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = pos.x
      pos.y = pos.y
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }