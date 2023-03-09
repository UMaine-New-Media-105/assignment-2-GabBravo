function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  rectangles();
  slimTriangles();
  bigTriangle();
  addCross(250, 175);
  addCross(305, 175);
  addCross(360, 175);
  addCross(415, 175);
  addCross(470, 175);
  addCross(525, 175);
}

//all the function shapes that make the flag:

//background- bahamas
function rectangles() {
  push();
  fill("rgb(131, 216, 236)");
  rect(0, 0, 600, 130);
  fill("rgb(254, 233, 105)");
  rect(0, 130, 600, 140);
  fill("rgb(131, 216, 236)");
  rect(0, 270, 600, 130);
  pop();
}

//bahamas, different color
function bigTriangle() {
  fill("rgb(222, 45, 45)");
  triangle(0, 0, 250, 200, 0, 400);
}

//eritrea, moms last name
function slimTriangles(x, y) {
  fill("rgb(74, 195, 103)");
  triangle(600, 0, 0, 0, 600, 130);
  //fill("rgb(69,148,220)")
  triangle(600, 270, 0, 400, 600, 400);
}

//georgia, down the middle
function addCross(x, y) {
  push();
  translate(x, y);

  fill("rgb(222, 45, 45)");

  beginShape();
  vertex(20, 20);
  vertex(30, 20);
  vertex(30, 10);
  vertex(40, 10);
  vertex(40, 20);
  vertex(50, 20);
  vertex(50, 30);
  vertex(40, 30);
  vertex(40, 40);
  vertex(30, 40);
  vertex(30, 30);
  vertex(20, 30);
  endShape(CLOSE);
  pop();
}
