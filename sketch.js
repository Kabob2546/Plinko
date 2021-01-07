const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;
var particles = [], plinkos = [], divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(400,655);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

for (var k = 0; k <= 655; k += 80){
  divisions.push(new Divisions(k,655 - divisionHeight/2,10,divisionHeight))
}

for (var j = 40; j <= 400; j += 50){
  plinkos.push(new Plinko(j,75))
}
for (var j = 15; j <= 390; j += 50){
  plinkos.push(new Plinko(j,150))
}
for (var j = 40; j <= 400; j += 50){
  plinkos.push(new Plinko(j,225))
}
for (var j = 15; j <= 390; j += 50){
  plinkos.push(new Plinko(j,300))
}
  ground = new Ground();
}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  
  for (var k = 0; k < divisions.length; k ++){
    divisions[k].display();
  }

  for (var k = 0; k < plinkos.length; k ++){
    plinkos[k].display();
  }
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
  createParticle();
  ground.display();
}

function createParticle(){
  if (frameCount % 60 === 0){
    particles.push(new Particle());
  }
}