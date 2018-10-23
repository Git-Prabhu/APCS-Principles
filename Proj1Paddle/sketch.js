//  Global variables
var balls = [];
var paddle;
var a = 0;
var c = 0;
var w = 150;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  b=20*(1+a);
loadBalls(b);
loadPaddle();

// method call ^^
}

function draw() {
  fill (255,255,255)
  background(20,20,20);
  paddle.run();
  textSize(25);
  fill(255,255,255);
  text("score:",50,50);
  text(c,140,50);
for(var i = 0; i < balls.length; i++){
  balls[i].run();
}

for(var i = balls.length - 1; i >= 0; i--){
  if(balls[i].isColliding()){

  };
}

if(balls.length === 0){
  if (c > 1000){
    w = 0;
    a = 0;
    textSize(40);
    fill(255,255,255);
    text("You Won!",300,400);

  }
  else{
    a = a+1;
    setup();
  }
}
}

function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i = i + 1){
    var location = createVector(random(width), random(0,200));
    var velocity = createVector(random(-3,3), random(-3,3));
    var rad = 20;
    var col = color(255,255,255);

    balls.push(new Ball(location, velocity, col, rad));
  }

}

function loadPaddle(){
  var loc = createVector(0,0);
  var col = color(255,255,0);
  paddle = new Paddle(loc,col);

}
