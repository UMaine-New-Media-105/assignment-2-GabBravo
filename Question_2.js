function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill("rgb(20,140,100)");
  //stroke("rgb(40,140,120)")

  beginShape();
  vertex(50, 50); //1
  vertex(50, 330); //2
  vertex(300, 330); //3
  vertex(300, 180); //4
  vertex(150, 180); //5
  vertex(150, 230); //6
  vertex(250, 230); //7
  vertex(250, 280); //8
  vertex(100, 280); //9
  vertex(100, 100); //10
  vertex(300, 100); //11
  vertex(300, 50); //12
  endShape(CLOSE);
}
