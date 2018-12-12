//  Global variables
var snake;
var food = [];
var numSeg = 1;
var start = "true"
var font;
var score = 0;
var timer = 0;


function setup(){
  textAlign(CENTER, CENTER);
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(70, 200, 30);
  loadSnake();
  loadFood(100);
}

function draw(){
  background(69, 3, 169);
  snake.run();
  textSize(50);
  text("score: " + score, 120, 50)
  noStroke();
  Score();
  for(var i = 0; i < food.length; i++){
    food[i].run();
    textAlign(700, 100);
      textSize(50);
      text(timer, 730, 70);
      if (frameCount % 60 == 0 && timer < 120) {
    timer ++;
  }
  if (timer == 120) {
    text("GAME OVER", width/2, height*0.7);
    gameover();
  }

  }

  checkLoc();
  deadGame();
  gameStart();
  Score();
}

function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(0);
      snake.segments.push(createVector(0, 0));
      console.log(snake.segments.length)
      score++;
    }
  }
}

function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}

function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}

function keyPressed(){
  start = "false"
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}

function deadGame(){
  if(snake.status == "true"){
    snake = 0
    score = 0;
    text("You Took an L", 400, 400);
    loadSnake();
    gameStart();
    gameover();

  }
}

function gameStart(){
  if(start == "true"){
    textFont()
    fill(250, 250, 60);
    rect(225, 300, 350, 200);
    fill(200, 100, 50);
    rect(240, 315, 320, 170)
    fill(150, 200, 70);
    textAlign(CENTER);
    textSize(100);
    text("Snake", 400, 425)
  }
}

function Score(){
  if (score > 99){
  fill(255, 0, 5);
  textAlign(CENTER);
  text("YOU WON!!!!!!", 400, 400);
  }
}
