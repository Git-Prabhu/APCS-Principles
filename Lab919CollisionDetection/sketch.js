//  Global variables
var boids = [];
var redBall;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBoids(50);
  loadBall();
// method call ^^
}

function draw() {
  background(20,20,20,90)
  redBall.run();
  for(var i = 0 ; i < boids.length; i++){
  boids[i].run();
}
}

function loadBoids(numboids){
  for(var i = 0; i < numboids; i++){
    var location = createVector(random(width), random(height));
    var velocity = createVector(random(-3,3), random(-3,3));
    var col = color(100, 100, 100);

    boids.push(new Boid(location, velocity, col));
  }
  console.log(boids.length);
}
  function loadBall(){
    var location = createVector(width/2, height/2);
    var velocity = createVector(0,0);
    var col = color(255, 0, 0);
    var rad = 40;
    redBall = new Ball(location, velocity, col, rad);
  }
///  var loc = createVector(random(width), random(height));
