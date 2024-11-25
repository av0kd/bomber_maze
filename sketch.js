
var meter, hp, posX, posY, xHero, yHero, frameCont, seconds, num = [], tela;

function preload(){
  // imagens
  hero = loadImage('./assets/perola.png');
  hPnt = loadImage('./assets/hp.png');
  wall = loadImage('./assets/wall.png');
  hall = loadImage('./assets/hall.png');
  bomb = loadImage('./assets/bomb.png');
  explosion = loadImage('./assets/explosion.png');
  logo = loadImage('./assets/logo.png');
  stEn = loadImage('./assets/end_start.png');
  btn_tuto = loadImage('./assets/btn_tutorial.png');
  btn_play = loadImage('./assets/btn_play.png');
  btn_credits = loadImage('./assets/btn_credits.png');
  btn_a = loadImage('./assets/btn_a.png');
  btn_d = loadImage('./assets/btn_d.png');
  btn_w = loadImage('./assets/btn_w.png');
  btn_s = loadImage('./assets/btn_s.png');
  btn_home = loadImage('./assets/btn_home.png');
  btn_restart = loadImage('./assets/btn_restart.png');
  btn_return = loadImage('./assets/btn_return.png');
  fundo = loadImage('./assets/fundo.png');
  rmnge = loadImage('./assets/rmnge.png');
  fundo_2 = loadImage('./assets/win_bg.png');
  bomb_art = loadImage('./assets/bomb_died.png');
  win_art = loadImage('./assets/bomb_win.png');
  eu = loadImage('./assets/eu.png');
  for(var frame = 1; frame <=3; frame++){
    num[frame-1] = loadImage('./assets/num'+frame+'.png');}
  // sons 
  exploded = loadSound('./assets/explosion.mp3');
  clicked = loadSound('./assets/click.mp3');
  beat = loadSound('./assets/heart.mp3');
  hited = loadSound('./assets/hitHurt.mp3');}

function setup() {
  createCanvas(600, 600);
  meter = 40;
  hp = 3;
  tela = 0;
  frameCont = 0;
  posX = 1;
  posY = 1;
  restartBombs();
  frameRate(meter);
  hadWon = false;
  hadCollision = false;
}

function draw() {
  
  if(tela == 0){
    imageMode(CENTER);
    menu();}
  
  if(tela == 1){
    imageMode(CORNER);
    gameOn();}
  
  if(tela == 2){
    imageMode(CENTER);
    tutorial();}
  
  if(tela == 3){
    imageMode(CENTER);
    credits();}
  
  if(tela == 4){
    imageMode(CENTER);
    died();}
  
  if(tela == 5){
    imageMode(CENTER);
    won();}
}
