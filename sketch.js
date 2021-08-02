const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;
var computerplayer;
var Player;
var Playerbase
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   Playerbase=new playerBase(300,random(400,height-300),180,150);
Player=new player(285,Playerbase.body.position.y-153,50,180);

computerbase = new ComputerBase( width - 300, random(370, height - 300),180, 150);
computerplayer = new computerPlayer(width - 280,computerbase.body.position.y - 153,50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

Playerbase.display();
computerbase.display();
   //display Player and computerplayer
Player.display();
computerplayer.display();
}
