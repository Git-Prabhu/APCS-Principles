/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
var squares = []// Declare squares[] as a global variable
var numberOfSquares = 8;
var squareSize;
var count = 0;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  squareSize = width/numberOfSquares;
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
  //  traverse array and run each square
  for(var i = 0; i < squares.length; i++){
    squares[i].render();
  }

}



function loadSquares(){
  //  create a square object and push it into the squares array
  var color1 = color(random(255), random(255), random(255))
    var color2 = color(random(255), random(255), random(255))
for (row = 0; row<numberOfSquares; row++){
  for (col = 0; col <numberOfSquares; col++){
    if ((row+col) % 2 ==0){
      var loc = createVector((squareSize*row),(squareSize*col));
      squares.push(new Sqr (loc, 100, color1));
    }else{
      var loc = createVector((squareSize*row),(squareSize*col));
      squares.push(new Sqr (loc,100, color2));

    }
  }
}
  }

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable
