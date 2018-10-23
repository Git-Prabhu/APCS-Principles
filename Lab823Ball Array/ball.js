/*
** Ball Constructor Function
** Dean Davis
** Aug 21, 2018
*/

function Ball(locX, locY, rad, col){
  // Instance variables
  this.locX = locX;
  this.locY = locY;
  this.speedX = random(-3.0, 3.0);
  this.speedY = random(-3.0, 3.0);
  this.rad = rad;
  this.col = col;
  // THis function calls other fucntions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
}
//This function changes the location of the Ball
// by adding speed to x and y
this.update = function(){
  this.locX = this.locX + this.speedX;
  this.locY = this.locY + this.speedY;
}

//checkEdges() reverses speed when the ball touches an edge
this.checkEdges = function(){
  if(this.locX < 0) this.speedX = -this.speedX;
  if(this.locX > width) this.speedX = -this.speedX;
  if(this.locY < 0) this.speedY = -this.speedY;
  if(this.locY > height) this.speedY = -this.speedY;
}

// render() draws the ball at the new locatoin
this.render = function(){
  fill(this.col);
  ellipse(this.locX, this.locY, rad, rad);
}
}
