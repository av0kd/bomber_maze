
var amount = 10;
var onMap = 0;
var hpSpawned = false;
var lf = false;  
var bombMap = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
[0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0],
[0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
[0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
[0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
[0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function restoreMap(){
bombMap = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
[0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0],
[0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
[0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
[0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
[0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];}

function restartBombs(){  
  restoreMap();
  amount = 10;
  hpSpawned = false;
  lf = false;  
  onMap = 0;
  }    

function cycleOfTime(){
  if(seconds>0){bombSpawn();}
  if(frameCont>115 && frameCont<120 && exploded.isPlaying() == false){exploded.play();}
  if(seconds>4){
    frameCont=0;
    if(hpSpawned == false){hpSpawned = true;}
    restoreMap();
    onMap = 0;
    if(amount<30){amount+=4;}
    if(hadCollision == true){hadCollision = false;}
    }
}
  
function hpSpawn(){
  if(hpSpawned==true){while(lf == false){
    xRan = Math.floor(Math.random()*13+1);
    yRan = Math.floor(Math.random()*13+1);
    if(bombMap[yRan][xRan]==1){lf=true;}}}
    if(lf == true){image(hPnt, meter*xRan, meter*yRan, meter, meter);}
    if(hpSpawned==true && lf == true){
      if(bombMap[yRan][xRan] == 3){hpSpawned = false; lf = false;}
      if(yRan == posY && xRan == posX && hp<3){beat.play();hpSpawned = false; lf = false; hp++;}
    }
}


function bombSpawn(){

  while(onMap<amount){
    locX = Math.floor(Math.random()*13+1);
    locY = Math.floor(Math.random()*13+1);
    if(bombMap[locX][locY]==1){
      bombMap[locX][locY] = 2; onMap++;}}

  for(var y = 0; y < 15; y++){
    for(var x = 0; x < 15; x++){
      if(bombMap[y][x]==2){
        if(seconds<3){
          image(bomb, meter*x, meter*y, meter, meter);}
        else{
          bombMap[y][x]=3;
          if(bombMap[y-1][x]!=0){
            bombMap[y-1][x] = 3}
          if(bombMap[y+1][x]!=0){
            bombMap[y+1][x] = 3}
          if(bombMap[y][x-1]!=0){
            bombMap[y][x-1] = 3}
          if(bombMap[y][x+1]!=0){
            bombMap[y][x+1] = 3;}}}
      if (bombMap[y][x]==3){
        image(explosion, meter*x, meter*y, meter, meter);
}}}}
