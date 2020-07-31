var database;
var form;
var game;
var points ;
var peopleCount=0;
var score = 0;
var boi;

function preload(){
  boi = loadImage('images/blah blah.jpg');
}



function setup() {
  createCanvas(1500,720);
  database = firebase.database();
  form = new Form();


}

function draw() {
  background(boi); 
  line(550, 80, 985, 80);
  textSize(50);
  textFont("Comic Sans MS")
   stroke("magenta")
    text("BIG BRAIN QUIZ", 550,75)
    
   
  
  form.display();

}