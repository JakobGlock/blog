class ball {
  constructor(drawX, drawY){
    this.drawX = drawX;
    this.drawY = drawY;
    this.x = 0;
    this.y = 0;
    this.time = random(100) / 25;
    this.drawR = random(125) + 25;
    this.freqX = (random(100) / 125) + 0.5
    this.freqY = (random(100) / 125) + 0.5
  }

  update(){
    this.time += 0.04;
    this.x = sin(this.time * this.freqX) * this.drawR + this.drawX;
    this.y = cos(this.time * this.freqY) * this.drawR + this.drawY;
  }

  drawPoint(){
    fill(0);
    ellipse(this.x, this.y, 3, 3);
  }

  drawLine(x, y){
    stroke(0, 0, 0, 100);
    line(this.x, this.y, x, y)
  }
}

var myBall = new Array();

function setup(){
  var canvasDiv = document.getElementById('canvasDiv');
  var myCanvas = createCanvas(canvasDiv.offsetWidth,window.innerHeight * 0.7);
  myCanvas.parent("canvasDiv");

  for(var i=0; i<12; i++){
    myBall.push(new ball(width/2, height/2));
  }
}

function draw(){
  background(255);
  for(var i=0; i<12; i++){
    myBall[i].update();
    myBall[i].drawPoint();
    var j = (i+1) % 12;
    myBall[i].drawLine(myBall[j].x, myBall[j].y);
  }
}
