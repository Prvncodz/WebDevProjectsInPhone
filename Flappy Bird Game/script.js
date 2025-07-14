let boardWidth=360;
let boardHeight=640;
inputLocked=false;

let backgroundImg=new Image();
backgroundImg.src="assets/flappybirdbg.png";

let PlayButtonImg=new Image();
PlayButtonImg.src="assets/PlayButton.png";

let flappyBirdTextImg=new Image();
flappyBirdTextImg.src="assets/flappyBirdLogo.png";

let gameOverImg=new Image();
gameOverImg.src="assets/flappy-gameover.png";

let topPipeImg=new Image();
  topPipeImg.src="assets/toppipe.png";
  
let bottomPipeImg=new Image();
  bottomPipeImg.src="assets/bottompipe.png";

let birdImg=new Image();
  birdImg.src="assets/flappybird.png";

let board=document.getElementById('board');
  board.width=boardWidth;
  board.height=boardHeight;
  let context=board.getContext("2d");



let gameState={
  MENU:"menu",
  PLAYING:"playing",
  GAMEOVER:"gameover"
}
let currentState=gameState.MENU;
let playButton={
  x:boardWidth/2 - 30,
  y:boardHeight/2 + 40,
  height:55,
  width:70 
}
let logo={
  x:boardWidth/2-115,
  y:boardHeight/2-100,
  height:100,
  width:240
}

let bird={
  x:boardWidth/2,
  y:boardHeight/2,
  height:40,
  width:30
}
let velocityX = -2;
let velocityY=0;
let gravity=0.4;
let pipeGap=200;
let pipeWidth=60;
let pipes=[];
let score=0;

function showPipes() {
   createPipes();
}
function createPipes() {
   
let  topPipeHeight= Math.floor(Math.random() * (boardHeight-pipeGap-50));
  let bottomPipeY=topPipeHeight + pipeGap;
  let  bottomPipeHeight=boardHeight-bottomPipeY;
  
  let topPipe={
    x:boardWidth,
    y:0,
    width:pipeWidth,
    height:topPipeHeight,
    passed:false
  }
  let bottomPipe={
    x:boardWidth,
    y:bottomPipeY,
    width:pipeWidth,
    height:bottomPipeHeight,
    passed:false
  }
  pipes.push(topPipe);
  pipes.push(bottomPipe);
}
   
    


function update() {
   requestAnimationFrame(update);
   context.clearRect(0,0,boardWidth,boardHeight);
  if(currentState===gameState.MENU){
    rendermenu();
  }
  if(currentState===gameState.PLAYING){
      renderplaying();
    }
  if(currentState===gameState.GAMEOVER){
      rendergameover();
  }
  
}
function rendermenu() {
  if (backgroundImg.complete) {
     context.drawImage(backgroundImg,0,0,boardWidth,boardHeight);
  }
  
  if (PlayButtonImg.complete) {
     context.drawImage(PlayButtonImg,playButton.x,playButton.y,playButton.width,playButton.height);
  }
  if (flappyBirdTextImg.complete) {
    let scaledWidth=logo.width;
    let scaledHeight=(logo.height/logo.width)*logo.width;
     context.drawImage(flappyBirdTextImg,logo.x,logo.y,scaledWidth,scaledHeight);
  }
  

}


function renderplaying(){
  
  velocityY+=gravity;
  bird.y += velocityY
  if(bird.y + bird.height >= boardHeight || bird.y<=0){
    currentState=gameState.GAMEOVER;
  }
  
  if (backgroundImg.complete) {
     context.drawImage(backgroundImg,0,0,boardWidth,boardHeight);
  }
  
 if(birdImg.complete) { context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
}
  
  
  
  for (let i = 0; i < pipes.length; i++) {
     let pipe=pipes[i];
     pipe.x += velocityX;
     if (i%2===0) {
       
      if(topPipeImg.complete){context.drawImage(topPipeImg,pipe.x,pipe.y,pipe.width,pipe.height);  }
       
     } 
     else {
       
    if(bottomPipeImg.complete){  context.drawImage(bottomPipeImg,pipe.x,pipe.y,pipe.width,pipe.height);    
     }
       
     }
     
     
     if(!pipe.passed && bird.x > pipe.width + pipe.x){
       score += 0.5;
       pipe.passed = true;
     }
     if(collisionDetected(bird,pipe)){
       currentState=gameState.GAMEOVER;
     }
  }
  
  while (pipes.length>0 && pipes[0].x< -pipeWidth) {
     pipes.shift();
  }
  context.fillStyle="white";
  context.font="45px sans-serif";
  context.textAlign="left";
  context.fillText(score,5,45);
}


function rendergameover() {
  
  if (backgroundImg.complete) {
     context.drawImage(backgroundImg,0,0,boardWidth,boardHeight);
  }
  
   if (gameOverImg.complete) {
    
    let y=boardHeight/3 -30;
    let Imgwidth=280;
    let Imgheight=100;
    let x=(boardWidth-Imgwidth)/2 +20;
     context.drawImage(gameOverImg,x,y,Imgwidth,Imgheight);
     let scoreText=`Your score is: ${score}`;
  
  context.fillText(scoreText,boardWidth/2,boardHeight/2 );
   }
   
  
  
  context.fillStyle="white";
  context.font="45px sans-serif";
  context.textAlign="center";
  velocityY=0;
  inputLocked=true;
  setTimeout(()=>{
    inputLocked=false;
  },4000);
}


document.addEventListener("touchstart",(e)=>{
  e.preventDefault();
   let rect=board.getBoundingClientRect();
  let touch= e.touches[0];
  let clickX= touch.clientX-rect.left;
  let clickY=touch.clientY-rect.top;
   if (!inputLocked && currentState===gameState.MENU &&
      clickX >playButton.x &&
      clickX <playButton.x + playButton.width &&
     clickY > playButton.y &&
      clickY <playButton.y + playButton.height  ) {
     score=0;
      bird.y=boardHeight/2;
      velocityY=-5;
      pipes=[];
      currentState=gameState.PLAYING;
   }
   else if(currentState===gameState.PLAYING) {
     velocityY =-8;
   }
   else if(!inputLocked && currentState===gameState.GAMEOVER){
     currentState=gameState.MENU;
     bird.y=boardHeight/2;
     velocityY=0;
   }
  
});

setInterval(()=>{
  if(currentState===gameState.PLAYING) {
       showPipes();
  }
     },1500);

function collisionDetected(a,b) {
   return (
     a.x < b.x + b.width &&
     a.x + a.width > b.x &&
     a.y < b.y + b.height &&
     a.y + a.height > b.y 
   
   );
}
update();
console.log(`hello`);

  


