// making the bars
var b = 50 // number of bars
var w = windowWidth/b //making the width of the bars
function bar (loc, width, col, height){
  this.loc = loc;
  this.width = width;
  this.col = col;
  this.height = height;

  this.run = function(){
    this.render();

    //render draws the bars at different locs
    this.render = function(){
      //draws bars
      fill(random(255,255,255))
      rect(this.loc.x, this.loc.y, this.w, this.h)
    }
  }
}
