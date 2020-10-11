var hr, mn, sc;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
hr = hour();
mn = minute();
sc = second();
}
angleMode(Degreess);
function draw() {
  background(255,255,255);
  scAAngle = map(sc, 0, 60, 0, 360)
    stroke(255,0,0);
    strokeweight(7);
    line(0,0,100,0);
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
    
  drawSprites();
}