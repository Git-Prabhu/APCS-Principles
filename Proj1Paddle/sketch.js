//  Global variables
var balls = [];
var score = 0;
var mouseLoc;
var paddle;
var a=0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 0, 50);
  text("your score" + score, 60, 60)
  paddle = new Paddle (createVector (width/2,height/2), createVector (-.1,.1), 200,15, color(255,0,255)); //creates paddle

   loadBalls(50);
}


function loadBalls (numBalls){ // loads all the balls in the array and creates new balls for the array
  for (var i = 0; i < numBalls; i++){
    var loc = createVector(random(0,800), 20);
    var vel = createVector(random(-2,2), random(-2,2));
    var rad = 25;
    var col = color(random(0,255), random(0,255), random(0,255));
	var ball = new Ball (loc, vel,rad, col);
	balls.push(ball);
  }

}



//  The draw function is called
function draw() {
background(20,20,20);
text(score, 50, 50);
noStroke ();
paddle.run ();
for (var i = 0; i < balls.length; i++){
  balls[i].run();
  //balls bounce
  var ballA = balls[i];
  var y = ballA.loc.y;
  var x = ballA.loc.x;
  //distance of the paddle and ball
  var distY = abs (paddle.loc.y- y);
  //distance of paddle ends
//  if ((distY <2) && (x>paddle.loc.x) && (x<paddle.loc.x+250)){ // allows ball to bounce off of paddle but we dont want this
  //  ballA.vel.y = -ballA.vel.y;
    var lowerEdge = paddle.loc.y + paddle.l ;//lower left paddle y coord value
    var upperEdge = paddle.loc.y //upper paddle value
    var lEdge = paddle.loc.x ; // paddle left edge x value
    var rEdge = paddle.loc.x + paddle.w ; //right edge x value

    if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y > 0)){
      //fix to find if ball a is between avalue and a value and if y is between something and something.
      balls.splice(i,1);
      score = score + 1;
      if(balls.length === 0){
      text("You Win", 400, 400)
      }

    } // boundaries
    if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y < 0)){
      balls = [];
      loadBalls(20);
      for (var i = 0; i < balls.length; i++){
        balls.run

      }
    }
//  }
}
}
