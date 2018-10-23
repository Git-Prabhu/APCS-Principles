/*
** Ball Constructor Function
** Dean Davis
** Aug 21, 2018
*/

function Boid(location, velocity, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.col = col;
  //this.acc = createVector(0,.1);
  // THis function calls other fucntions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
}
//This function changes the location of the Ball
// by adding speed to x and y
this.update = function(){
  this.loc.add(this.vel);
  for (var i = 0; i < boids.length; i++){
  var dist = boids[i].loc.dist(redBall.loc);
    if (dist < 20){
      boids.splice(i, 1)
      if(dist<200){
      var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
      steeringForce.normalize(1);  //  changes the magnitud to 1
      steeringForce.mult(.5);    //  scales the magnitude to 0.5
      this.vel.add(steeringForce);
     }
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
  push();
  translate(this.loc.x, this.loc.y);
  triangle(-5,0,5,0,0,-15);
  pop() // pop or restpre the coordinate system
}
}
