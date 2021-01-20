var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load sprites
var bub = new Image();
bub.src = "/flappyBub/images/bub.png";

var bg = new Image();
bg.src = "/flappyBub/images/bg.png";

var fg = new Image();
fg.src = "/flappyBub/images/fg.png";

var pipeNorth = new Image();
pipeNorth.src = "/flappyBub/images/pipeNorth.png";

var pipeSouth = new Image();
pipeSouth.src = "/flappyBub/images/pipeSouth.png";

var flap = new Audio();
flap.src = "/flappyBub/sounds/flap.mp3";

var ding = new Audio();
ding.src = "/flappyBub/sounds/ding.mp3";

var gap = 95;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.4;

var gameOver = false;
var score = 0;

// on key down
document.addEventListener("keydown", moveUp);

function moveUp(){
    bY -= 28;
    flap.play();
}

// pipe coordinates
var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images
function draw(){
    
    ctx.drawImage(bg, 0, 0);
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeNorth.height + gap;
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        // detect collision      
        if( bX + bub.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bub.height >= pipe[i].y+constant) || bY + bub.height >=  cvs.height - fg.height){
            ctx.font = "30px Arial";
                ctx.fillText("Game Over", 10, 50);
                ctx.fillText("Press F5 to Reload", 10, 90);

                gameOver = true;
        }
        
        if(pipe[i].x == 5){
            score++;
            ding.play();
        }    
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    
    ctx.drawImage(bub, bX, bY);
    
    bY += gravity;
    
    ctx.fillStyle = "#000";
    ctx.font = "20px Maroon";
    ctx.fillText("Score : " + score, 10, cvs.height - 20);
    
    if(!gameOver) {
        requestAnimationFrame(draw);    
    }
}

draw();