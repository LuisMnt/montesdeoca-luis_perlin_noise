let noiseTime = 1000;
let noiseTam = 10;
let noiseCol = 0;
let anguloCua = 0;
let anguloTria = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(255);
  let posX1 = map(noise(noiseTime + 70), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);
  let posX2 = map(noise(noiseTime + 50), 0, 1, 0, windowWidth);
  let posY2 = map(noise(noiseTime + 300), 0, 1, 0, windowHeight);
  let posX3 = map(noise(noiseTime + 180), 0, 1, 0, windowWidth);
  let posY3 = map(noise(noiseTime + 200), 0, 1, 0, windowHeight);
  //////////////////////////////////////////////////////
  let R1 = map(noise(noiseCol + 100), 0, 2, 255, 0);
  let G1 = map(noise(noiseCol), 0, 1, 50, 0);
  let B1 = map(noise(noiseCol), 0, 1, 5, 0);

  let R2 = map(noise(noiseCol), 0, 1, 10, 0);
  let G2 = map(noise(noiseCol + 100), 0, 0, 100, 0);
  let B2 = map(noise(noiseCol + 50), 0, 1, 255, 0);

  let R3 = map(noise(noiseCol), 0, 1, 100, 0);
  let G3 = map(noise(noiseCol), 0, 1, 100, 0);
  let B3 = map(noise(noiseCol), 0, 1, 100, 0);
  //////////////////////////////////////////////////////
  let tam1 = map(noise(noiseTam), 0, 1, 200, 0);
  let tam2 = map(noise(noiseTam), 0, 1, 200, 0);
  let tam3 = map(noise(noiseTam), 0, 1, 200, 0);
  //////////////////////////////////////////////////////
  let colur1 = color(R1, G1, B1);
  let colur2 = color(R2, G2, B2);
  let colur3 = color(R3, G3, B3);

  noiseTime += 0.0009;
  noiseTam += 0.001;
  noiseCol += 0.01;

  push();
  translate(posX1, posY1);
  rotate(radians(anguloCua));
  fill(colur1);
  rect(0, 0, tam1);
  pop();

  fill(colur2);
  noStroke();
  circle(posX2, posY2, tam2);

  push();
  translate(posX3, posY3);
  rotate(radians(anguloTria));
  fill(colur3);
  triangle(0, -tam3, -tam3 / 2, tam3 / 2, tam3 / 2, tam3 / 2);
  pop();

  anguloCua += 0.9;
  anguloTria += 0.2;
}
