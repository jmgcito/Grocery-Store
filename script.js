function setup() {
  createCanvas(1920, 1080, WEBGL);
  sprinkles = loadImage('pinksprinkles.jpg');
  bubblegum = loadImage('icecream.jpg');
  wafflecone = loadImage('wafflecone.jpg');
  grocerystore = loadImage('grocerystore.png');
  chickendog = loadImage('chickendog.jpg');
}

function draw() {
  background('black');
  let radius = width * 1;

  orbitControl();

  normalMaterial();
  translate(-100, 100, -400);

  fill('tan');
  stroke('black');
  texture(wafflecone);
  cone(90,175, 30,30);

  translate(0,-120,0);
  push();
  fill(0,255,276);
  texture(bubblegum);
  ellipsoid(90, 75, 50, 30,30);
  pop();

  translate(-200,0,600);
  push();
  fill('pink');
  texture(sprinkles);
  rotateY(frameCount * 0.01);
  torus(90, 50, 32);
  pop();

  translate(0,0,0);
  push();
  texture(grocerystore);
  rotateY(frameCount * .5);
  sphere(2000, 30);
  pop();

  translate(900,0,500);
  push();
  texture(chickendog);
  rotateY(frameCount * .005);
  box(1000, 300, 300);
  pop();

}
