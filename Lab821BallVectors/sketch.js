//  Global variables
var b1,b2,b3;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  b1 = new Ball(random(width), random(height),random(15, 35), color(250, 23, 23));
  b2 = new Ball(random(width), random(height),random(15, 35), color(250, 23, 23));
  b3 = new Ball(random(width), random(height),random(15, 35), color(250, 23, 23));

}

function draw() {
  background(20,20,20)
  b1.run();
  b2.run();
  b3.run();
}
