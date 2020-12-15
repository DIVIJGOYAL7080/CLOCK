var hr;
var mn;
var sc;

function setup() {
  createCanvas(600,600);

  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  

  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);
  push();
  rotate(scAngle)

  stroke("red");
  strokeWeight(7);
  line(0,0,100,0)

  pop();

  push();
  rotate(mnAngle)

  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0)
  
  pop();

  push();
  rotate(hrAngle)

  stroke("green");
  strokeWeight(7);
  line(0,0,50,0)
  
  pop();

  strokeWeight(5);
  noFill();
  stroke("green")
  arc(0,0,305,305,0,hrAngle)

  stroke("blue")
  arc(0,0,280,280,0,mnAngle)

  stroke("red")
  arc(0,0,255,255,0,scAngle)
}