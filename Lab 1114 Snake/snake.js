/*
** Snake Function
** Dean Davis
** Aug 21, 2018
*/

function Snake(loc, vel){

  this.loc = loc;
  this.vel = vertical

  this.run = function(){
    this.update();
    this.render();

  }

  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);
  }

  this.render = function(){
    fill(0,255,0);
    rect(this.loc.x,this.loc.y,w,w);
  }
} //end constructor function


//need a function to add segments of the Snake
//need a function that makes the snake move how it should
//fucntion that makes the segments follow each other correctly
