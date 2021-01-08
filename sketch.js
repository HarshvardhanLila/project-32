const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine,world;
var box1;
var polygon,polygon_img;
var backgroundImg;
var score = 0;
function preload()
{
    polygon_img = loadImage("polygon.png")
    
    getTime();

}
function setup()
{   
    createCanvas(3000,500);
    
    engine = Engine.create();
    world = engine.world;
    
    polygon = Bodies.circle(50,300,20);
World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:300})
    // HOLD UP MAM before u see this REMEMBER worldtimeapi.org is The SLowest WEBSITE and the WORST :)
    ground = new Ground(400,450,300,20);
    ground2 = new Ground(860,350,200,20)
    box1 = new Box(300,430,30,40);
    box2 = new Box(330,430,30,40);
    box3 = new Box(360,430,30,40);
    box4 = new Box(390,430,30,40);
    box5 = new Box(420,430,30,40);
    box6 = new Box(450,430,30,40);
    box7 = new Box(480,430,30,40);

    box8 = new Box(330,390,30,40);
    box9 = new Box(360,390,30,40);
    box10 = new Box(390,390,30,40);
    box11 = new Box(420,390,30,40);
    box12 = new Box(450,390,30,40);

    box13 = new Box(360,350,30,40);
    box14 = new Box(390,350,30,40);
    box15 = new Box(420,350,30,40);

    box16 = new Box(390,310,30,40);

    box17 =  new Box(800,330,30,40);
    box18 =  new Box(830,330,30,40);
    box19 =  new Box(860,330,30,40);
    box20 =  new Box(890,330,30,40);
    box21 =  new Box(920,330,30,40);

    box22 =  new Box(830,290,30,40);
    box23 =  new Box(860,290,30,40);
    box24 =  new Box(890,290,30,40);

    box25 = new Box(860,250,30,40)

}

function draw()
{
    if(backgroundImg)
    background(backgroundImg); 
Engine.update(engine);

text("SCORE : "+score,750,40);

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40)

fill(135,206,234)
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();


fill("pink")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box25.display();

fill(63,224,208)
box13.display();
box14.display();
box15.display();
box22.display();
box23.display();
box24.display();

fill("grey")
box16.display();

ground.display();
ground2.display();
slingShot.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();


}



function mouseReleased(){
    slingShot.fly();
   
}


function mouseDragged(){
    
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function keyPressed(){
    if(keyCode === 32){
       
       
        Matter.Body.setPosition(this.polygon,{x: 100, y: 300});
        slingShot.attach(this.polygon);
    }
}
async function getTime()
{
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour >=6 && hour<=19)
    {
        bg="bg.png";

    }
    else
    {
        bg="bg2.jpg"

    }
    backgroundImg = loadImage(bg);

}


