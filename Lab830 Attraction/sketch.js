// Dean Davis



//  Global variables
var b1;
var balls = [];

// put setup code here
function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(100);  //  !!!!!!!!!!  this is a function call
  b1 = new Ball(createVector(width/2, height/2), createVector(2,5),
  25,
  color(255,0,0));
  loadBalls(100);
}

function draw() {
  background(20,20,20,22);
  b1.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(10,20);
        var col = color(random(255), random(255), random(255));
        balls.push(new Ball(loc, vel, radius, col));

    }
console.log(balls);
}
