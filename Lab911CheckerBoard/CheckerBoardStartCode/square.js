

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(loc, sidelength, color){
//  Add instance variables to your constructor Function
//What does a square need to know about itself??
this.loc = loc;
this.w = sidelength;
this.clr = color;
  this.render = function(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.w);

  }

}//  End of Square constructor function
