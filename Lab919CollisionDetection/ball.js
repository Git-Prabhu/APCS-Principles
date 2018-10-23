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
  //this.acc = createVector(0, 0)
  //this.acc = createVector(0,.1);
  // THis function calls other fucntions
  this.run = function(){
    this.update();
    this.render();
}
//This function changes the location of the Ball
// by adding speed to x and y
this.update = function(){
  var mouseLoc = createVector(mouseX, mouseY);
  this.loc=p5.Vector.lerp(mouseLoc,.09);

}

// render() draws the ball at the new locatoin
this.render = function(){
  fill(this.col);
  ellipse(this.loc.x, this.loc.y, rad, rad);
}
}
