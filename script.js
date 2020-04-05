let brokenHand;
let mic, level;
let font;
let start = false;

function preload() {
    //preload 3d model and font
    brokenHand = loadModel('broken10k.obj', true);
    font = loadFont('Roboto-Regular.ttf');
}

function setup() {
    //create p5 canvas with webgl
    createCanvas(windowWidth, windowHeight, WEBGL);
    textFont(font);
    //create audio input 
    mic = new p5.AudioIn();
    mic.start();
}

function draw(){
    background(220);

    //get mic level (audio level)
    level = mic.getLevel();

    //if start is false, run this code
    if(!start){
        textSize(64);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("click anywhere on the canvas to see the dancing hand", 0, 0);
    }

    //if start is true, run this code
    if(start){
        console.log("start - true");
        scale(400 * level);
        rotateZ(280);
        normalMaterial();
        model(brokenHand);
    }
}

//if mouse is clicked, change start to true; start audio
function mousePressed() {
    userStartAudio();
    start = true;
}