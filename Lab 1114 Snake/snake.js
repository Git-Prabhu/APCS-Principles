function Snake(loc, vel){
//what the snake needs to know
  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.status = "false";

//other functions of the snake
  this.run = function(){
    this.update();
    this.render();
    this.dead();
  }
//snakes movement
  this.update = function(){
    for(var i = this.segments.length - 1; i >= 0; i--){
      if(i > 0){
        this.segments[i].x = this.segments[i-1].x;
        this.segments[i].y = this.segments[i-1].y;
      }else{
        this.segments[0].x = this.loc.x;
        this.segments[0].y = this.loc.y;
      }
    }
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }
//render function of the snake
  this.render = function(){
    for(var i = 0; i < this.segments.length; i++){
      fill(69, 68, 89);
      stroke(121, 139, 19);
      rect(this.segments[i].x, this.segments[i].y, 20, 20)
    }
    fill(219, 69, 69);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

//the snakes death function
  this.dead = function(){
    for(var i = 0; i < this.segments.length; i++){
      var distX = this.loc.x - this.segments[i].x;
      var distY = this.loc.y - this.segments[i].y;
      if((distX == 0) && (distY == 0)){
        this.status = "true";
        console.log(this.status);
      }
    }
  }
}
