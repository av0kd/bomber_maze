
var hadCollision = false;
var hadWon = false;

function winning(){
  hadWon = collideRectRect(meter*13,meter*13,35,35,xHero,yHero,35,35);
  
  if(hadWon == true){
    exploded.stop();
    tela = 5;
  }}

function lifeSystem(){
  if(bombMap[posY][posX] == 3 && hp>0 && hadCollision == false){
    hited.play();
    posX = 1;
    posY = 1;
    hadCollision = true;
    hp--;
  }
  if(hp<1){tela=4;}
}

function heroMovement(){
  if(keyIsPressed == true && hadCollision == false){
    switch (key){
      case "a":
        if(positions[posY][posX-1]!=0){posX--;}
        keyIsPressed = false;
        break;
      case "d":
        if(positions[posY][posX+1]!=0){posX++;}
        keyIsPressed = false;
        break;
      case "w":
        if(positions[posY-1][posX]!=0){posY--;}
        keyIsPressed = false;
        break;
      case "s":
        if(positions[posY+1][posX]!=0){posY++;}
        keyIsPressed = false;
        break;
    }}}
