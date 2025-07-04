(async function setup() {
//canvas and bg
let canvas=document.getElementById('canvas');
let ctx=canvas.getContext("2d");
const BgImg=await loadAssets('sp.png');
ctx.drawImage(BgImg,0,0,canvas.width,canvas.height);
  
  //game logic
  let playerX=170;
  let playerY=550;
    //store location of enemies 
  let enemies=[];
for(let row=0; row<5;row++){
    for(let col=0; col<5 ;col++){
      enemies.push({
        x:col*44+100,
        y:row*44+5
    }); 
     }
}
  let playerLives=3;
  let score=0;
  updateHud()
 //lasers locations
    let lasers=[];
     setInterval(()=>{
      lasers.push({
        x:playerX + 25,
        y:playerY
      });
    },600);
  
  const playerImg=await loadAssets('player.png');
    const enemyImg=await loadAssets('enemyShip.png');
    const laserImg=await loadAssets('laserRed.png');
   const explosionImg=await loadAssets('explosion.png');
   const lifeImg=await loadAssets('life.png');

//load assets
function loadAssets(path) {
     return new Promise((resolve)=>{
       const img = new Image();
           img.src=path;
           img.onload=()=>{
             resolve(img);
           }
     });
  }
function wait(ms) {
     return new Promise((resolve)=>{
         setTimeout(()=>{
           resolve;
         },ms);

     });
  }
  //move enemies closer
function moveEnemiesCloser() {
         for (let enemy of enemies) {
            enemy.y+=7;
         }

      }
function updateHud() {
     document.getElementById('score').innerText=`Score:${score}`;
  const lives=document.getElementById('lives');
  lives.innerHTML="";
  for (let i = 0; i < playerLives; i++) {
    let Img = document.createElement("img");
    Img.src="life.png";
    lives.appendChild(Img);
  }
  
}

//start game
let stButton= document.getElementById('start');
  let controls=document.getElementById('controls');
  let hud=document.getElementById('hud');
  
  stButton.addEventListener("click",()=>{
    stButton.style.display="none";
    controls.style.display="flex";
    hud.style.display="flex";
    GameLoop();
  });
  
  async function GameLoop() {
    drawScene();
    requestAnimationFrame(GameLoop);
  }
  
    //draw scene
  async function drawScene(){
    
ctx.clearRect(0,0,canvas.width,canvas.height);
    //draw bg
ctx.drawImage(BgImg,0,0,canvas.width,canvas.height);
    
    //draw player
ctx.drawImage(playerImg,playerX,playerY,60,50);  
    
    //draw enemies
   for (let enemy of enemies) {
     ctx.drawImage(enemyImg,enemy.x,enemy.y,40,30); 
   }
      
    //draw lasers and check if laser hits
      for (let i =lasers.length-1 ; i >=0 ; i--) {   lasers[i].y-=5;
      ctx.drawImage(laserImg,lasers[i].x,lasers[i].y,10,20);  
     if(lasers[i].y<0){
     lasers.splice(i,1);   
     }            
    for (let j = enemies.length-1; j>=0;  j--) {
      let enemy=enemies[j] ;
      let laser=lasers[i];
      if(
        laser.x< enemy.x + 40 &&
        laser.y< enemy.y + 30 &&
        laser.x + 10 > enemy.x  &&
        laser.y+ 20 > enemy.y
      ){
        
      ctx.drawImage(explosionImg,laser.x-29,laser.y-42,70,80);
          enemies.splice(j,1);
         lasers.splice(i,1);
         i--;
        score+=100;
        updateHud();
        if (enemies.length<=0) {
           alert(`🌚 YOU WON 🌝`);
        }
        break;  
      }
      else if(
        playerX< enemy.x + 40 &&
        playerY< enemy.y + 30 &&
        playerX+ 60 > enemy.x  &&
        playerY+ 50 > enemy.y
      ){
        
      ctx.drawImage(explosionImg,playerX-23,playerY-35,100,120);
          enemies.splice(j,1);
          playerLives--;
          updateHud();
          i--;
          score+=100;
           
        if (playerLives<=0) {
           alert(`😑Game Over😑`);
        }
        
          break;
      
    }
    
      
    }
  }
  }
  
    let lButton=document.getElementById('left');
  let rButton=document.getElementById('right');
  let uButton=document.getElementById('up');
  let dButton=document.getElementById('down');

    lButton.onclick=()=>{
      playerX-=10;
      drawScene();
      moveEnemiesCloser();
    }
    rButton.onclick=()=>{
      playerX+=10;
      drawScene();
      moveEnemiesCloser();
    }
    uButton.onclick=()=>{
      playerY-=10;
      drawScene();
      moveEnemiesCloser();
    }
    dButton.onclick=()=>{
      playerY+=10;
      drawScene();
      moveEnemiesCloser();
    }
  
  
})();
  






