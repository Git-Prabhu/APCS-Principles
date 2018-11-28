var scl = 20;
var snake;
var food;

//basic setup
function setup() {
  createCanvas(800, 800);
  snake = new Snake();
  food  = new Food();
  frameRate(15);
snake = new Snake(createVector(width/2, height/2), createVector(1,0));
}
//snake and food functions
function draw() {
  background(0,0,0);

  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
}

//how the snake moves with the keys
function keyPressed() {
  if (keyCode === 38) {
    snake.dir(0, -1);
  } else if (keyCode === 40) {
    snake.dir(0, 1);
  } else if (keyCode === 39) {
    snake.dir(1, 0);
  } else if (keyCode === 37) {
    snake.dir(-1, 0);
  }
}
//making the rows and collums
function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}
