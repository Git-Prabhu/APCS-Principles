/*
** Ball Constructor Function
** Dean Davis
** Aug 21, 2018
*/

function Ball(location, velocity, col, rad){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = rad;
  this.col = col;
  this.acc = createVector(0,.1);
  // THis function calls other fucntions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.collision();
    this.render();
}
this.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}
//This function changes the location of the Ball
// by adding speed to x and y
this.isColliding = function(){
  if(this.vel.y <


     ){
    return true;
  }
  return false;
  // for(var i = 0; i < balls.length; i++){
  //   var m = 150+(100*a)
  //
  // if(balls[i].loc.y > 820){
  //   balls[i].loc.y = 0
  //   balls[i].vel.y = -2;
  // }
  // var p1 = createVector(paddle.loc.x-(m/2),paddle.loc.y);
  // var x1 = balls[i].loc.x-p1.x;
  // var dist1 = balls[i].loc.dist(p1);
  // var height = Math.sqrt((dist1*dist1)-(x1*x1));
  // var p2 = createVector(p1.x, p1.y+20);
  // var dist2 = balls[i].loc.dist(p2);
  // var x2 = balls[i].loc.x-p2.x;
  // var height2 = Math.sqrt((dist2*dist2)-(x2*x2));
  // if (balls[i].vel.y > 0 && x1 > 0 && x1 < m && height2 < 10) {
  //   balls.splice(i,1);
  //   c=c+1
  }


  if(balls[i].vel.y < 0 && x2 > 0 && x2 < m && height2 < 10) {
    balls.length = 0
  }
  }
}

//checkEdges() reverses speed when the ball touches an edge
this.checkEdges = function(){
  if(this.loc.x < 0) this.vel.x = -this.vel.x;
  if(this.loc.x > width) this.vel.x = -this.vel.x;
  if(this.loc.y < 0) this.vel.y = -this.vel.y;
  if(this.loc.y > height) this.vel.y = -this.vel.y;
}

// render() draws the ball at the new locatoin
this.render = function(){
  fill(this.col);
  ellipse(this.loc.x, this.loc.y, rad, rad);
}
}
