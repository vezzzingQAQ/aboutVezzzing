var sList=[
    "vezzzing love u",
    "vezzzing love u",
    "vezzzing love u",
    "wait",
    "3.1415926535",
    "loveeee!",
    "u",
    "we find you!!",
    "everything flows",
    "well....",
    "3x err..",
    "v1 rotate!!!",
    "that's all thank you",
    "vezzzingQAQ yyds!!!",
    "yyds"
]
var textList=[];
class Sts{
    constructor(sList,x,y){
        this.sList=sList;
        this.life=200;
        this.position=createVector(x,y);
        this.speed=createVector(random()*2-1,-random()*5-2);
        this.word=this.sList[int(random()*this.sList.length)]
    }
    run(){
        this.life--;
        this.position.add(this.speed);
        //fill(255,50);
        fill(0,20);
        textSize(20);
        text(this.word,this.position.x,this.position.y);
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    //background(24);
    background(254);
    textList.forEach(textObject => {
        textObject.run();
    });
}
function mouseMoved(){
    textList.push(new Sts(sList,mouseX,mouseY));
}
