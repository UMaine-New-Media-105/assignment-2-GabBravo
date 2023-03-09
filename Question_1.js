function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rowOne();
  rowTwo();
  rowThree();
  rowFour();
  rowFive();
}

function rowOne() {
  fill("lavender");
  rect(0, 0, 80, 80); //blue
  fill("lightblue");
  rect(80, 0, 80, 80);
  rect(160, 0, 80, 80);
  rect(240, 0, 80, 80);
  fill("lavender");
  rect(320, 0, 80, 80);
}

function rowTwo() {
  fill("lightblue");
  rect(0, 80, 80, 80); //blue
  fill("lavender");
  rect(80, 80, 80, 80);
  rect(160, 80, 80, 80);
  rect(240, 80, 80, 80);
  rect(320, 80, 80, 80);
}

function rowThree() {
  fill("lightblue");
  rect(0, 160, 80, 80); //blue
  fill("lavender");
  rect(80, 160, 80, 80);
  fill("lightblue");
  rect(160, 160, 80, 80); //blue
  rect(240, 160, 80, 80); //blue
  rect(320, 160, 80, 80); //blue
  fill("lavender");
}

function rowFour() {
  fill("lightblue");
  rect(0, 240, 80, 80); //blue
  fill("lavender");
  rect(80, 240, 80, 80);
  rect(160, 240, 80, 80);
  rect(240, 240, 80, 80);
  fill("lightblue");
  rect(320, 240, 80, 80); //blue
  fill("lavender");
}

function rowFive() {
  rect(0, 320, 80, 80);
  fill("lightblue");
  rect(80, 320, 80, 80); //blue
  rect(160, 320, 80, 80); //blue
  rect(240, 320, 80, 80); //blue
  fill("lavender");
  rect(320, 320, 80, 80);
}
