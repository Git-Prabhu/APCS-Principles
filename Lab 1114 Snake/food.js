/*
** food Constructor
** Dean Davis
** Nov 14, 2018
*/
//Create a function that makes food in a random locations
// cant be placed on the snake\
//has to splice when the very front of the snake is on top of it.
// make it an interesting shape or something
function Food() {
  this.vec = randomVector().mult(scl);

  this.x = function() {
    return this.vec.x;
  }

  this.y = function() {
    return this.vec.y;
  }

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x(), this.y(), scl, scl);
  }

  this.eaten = function() {
    this.vec = randomVector().mult(scl);
  }
}
