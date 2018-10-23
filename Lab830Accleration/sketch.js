//  Global variables
var balls = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
LoadBalls(69);
// method call ^^
}

function draw() {
  background(20,20,20);
for(i=0; i<balls.length; i++){
  balls[i].run();
}
}

function LoadBalls(numballs){
  for(var i = 0; i < numballs; i = i + 1){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var radius = random(20,40);
    var col = color(random(255), random(255), random(255));

    balls.push(new Ball(loc, vel, radius, col));
  }
}
