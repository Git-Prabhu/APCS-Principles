//food funtions

function Food(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }
//rendering the food with random locations in the grid
  this.render = function(){
    fill(0, 0, 0);
    stroke(255);
    rect(this.loc.x, this.loc.y, 20, 20);
    stroke(121, 139, 19);
  }

}
