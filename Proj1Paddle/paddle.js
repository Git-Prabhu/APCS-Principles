/*
** Paddle Game
** Dean Davis
** Oct 15, 2018
*/

function Paddle(loc,col){
  // Instance variables
  this.loc = loc;
  this.col = col;
  this.ht = 20;
  // THis function calls other fucntions
  this.run = function(){
    this.update();
    this.render();
}
//This function changes the location of the Ball
// by adding speed to x and y
this.update = function(){
this.loc.x = lerp(this.loc.x, mouseX, .09);
this.loc.y = 700;
}

//checkEdges() reverses speed when the ball touches an edge
// render() draws the ball at the new locatoin
this.render = function(){
  fill(this.col);
  rect(this.loc.x-((w=(100*a))/2), this.loc.y, w+10,this.ht);
}
}
