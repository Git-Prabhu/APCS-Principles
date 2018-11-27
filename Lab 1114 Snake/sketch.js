/*
** Snake Function
** Dean Davis
** Aug 21, 2018
*/

var scl = 20;
var snake;
var food;

function setup() {
  createCanvas(800, 800);
  snake = new Snake();
  food  = new Food();
  frameRate(10);
}

function draw() {
  background(0,0,0);

  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
}

function keyPressed() {
  if (keyCode === 87) {
    snake.dir(0, -1);
  } else if (keyCode === 83) {
    snake.dir(0, 1);s
  } else if (keyCode === 68) {
    snake.dir(1, 0);
  } else if (keyCode === 65) {
    snake.dir(-1, 0);
  }
}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}
