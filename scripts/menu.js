
var btnY = [400,400,400];
var btnX = [150,300,450];
var btnSize = [100,100,100];
var btSiz = 75;

function menu(){
  
  overBtnPlay = false;
  overBtnTuto = false;
  overBtnCredit = false;
  image(fundo, 300, 300, 600,600);
  image(logo, 300, 200, 360, 320);
  fill("rgb(63,18,28)");
  
  if(mouseY >= 350 && mouseY <= 450){
    if(mouseX >= btnX[0]-(btnSize[0]/2) && mouseX <= btnX[0]+(btnSize[0]/2)){
      overBtnPlay = true;}
    else{
      overBtnPlay = false;}
    if(mouseX >= btnX[1]-(btnSize[1]/2) && mouseX <= btnX[1]+(btnSize[1]/2)){
      overBtnTuto = true;}
    else{
      overBtnTuto = false;}
    if(mouseX >= btnX[2]-(btnSize[2]/2) && mouseX <= btnX[2]+(btnSize[2]/2)){
      overBtnCredit = true;}
    else{
      overBtnCredit = false;}}
  
  if(overBtnPlay == true){
    circle(btnX[0], btnY[0], 101);
    image(btn_play, btnX[0], btnY[0], btnSize[0], btnSize[0]);  
    if(btnSize[0]<130){
      btnSize[0] += 5;}}
  else{
    image(btn_play, btnX[0], btnY[0], btnSize[0], btnSize[0]);
    if(btnSize[0]>100){
      btnSize[0] -= 5;}}
  
  if(overBtnTuto == true){
    circle(btnX[1], btnY[1], 101);
    image(btn_tuto, btnX[1], btnY[1], btnSize[1], btnSize[1]);
    if(btnSize[1]<130){
      btnSize[1] += 5;}}
  else{
    image(btn_tuto, btnX[1], btnY[1], btnSize[1], btnSize[1]);
    if(btnSize[1]>100){
      btnSize[1] -= 5;}}
  
  if(overBtnCredit == true){
    circle(btnX[2], btnY[2], 101);
    image(btn_credits, btnX[2], btnY[2], btnSize[2], btnSize[2]);
    if(btnSize[2]<130){
      btnSize[2] += 5;}}
  else{
    image(btn_credits, btnX[2], btnY[2], btnSize[2], btnSize[2]);
    if(btnSize[2]>100){
      btnSize[2] -= 5;}}
  
  if (mouseIsPressed) {
    if(overBtnPlay == true){beat.play();setup();tela = 1;}
    if(overBtnTuto == true){clicked.play();tela = 2;}
    if(overBtnCredit == true){clicked.play();tela = 3;}
    mouseIsPressed = false;
  }}

function gameOn(){
  
    xHero = posX*meter;
    yHero = posY*meter;
    frameCont += 1;
    seconds = parseInt(frameCont/meter);
    heroMovement();
    mapImage();
    hpSpawn();
    cycleOfTime();
    lifeSystem();
    winning();
    image(hero,xHero, yHero, meter, meter);
    image(hPnt,meter*3, 0, meter, meter);
    if(hp>0){image(num[hp-1],meter*4, 0, meter, meter);}}

function tutorial(){
  overBtnReturn = false;
  image(fundo, 300, 300, 600,600);
  image(btn_return, 50, 50, 75,75);
  fill("rgb(124,86,93)");
  rect(5,100,290,400,10);
  rect(305,100,290,400,10);
  strokeWeight(3);
  stroke('black');
  line(300, 575, 300, 100);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(60);
  fill('rgb(77,49,112)');
  text('TUTORIAL', 300, 75);
  textSize(40);
  text('OBJETIVO', 450, 145);
  text('MOVIMENTO', 150, 145);
  textSize(20);
  noStroke();
  fill('black');
  textAlign(LEFT);
  text('Para se mover, pressione:', 20, 180);
  image(btn_w, 220, 225, 60, 60);
  image(btn_s, 220, 300, 60, 60);
  image(btn_a, 220, 375, 60, 60);
  image(btn_d, 220, 450, 60, 60);
  text('Para cima:\n\n\nPara baixo:\n\n\nPara esquerda:\n\n\nPara direita:', 30, 230); 
  text('Para vencer, basta atravessar\no labirinto desviando das \nbombas.\nHaverá dois ladrilhos em\ncores diferentes para lhe \norientar', 310, 180);
  image(stEn, 350, 360, 60, 60);
  text('Onde começa!\nOnde termina!', 410, 355);
  fill("rgb(63,18,28)");
  
  if(mouseY >= 12.5 && mouseY <= 87.5){
    if(mouseX >= 12.5 && mouseX <= 87.5){
      overBtnReturn = true;}
    else{
      overBtnReturn = false;}}
  
  if (mouseIsPressed){
    if(overBtnReturn == true){clicked.play();tela = 0;}
  mouseIsPressed = false;}
  
  if(overBtnReturn == true){
    circle(50, 50, 75);
    image(btn_return, 50, 50, btSiz,btSiz);
    if(btSiz<90){
      btSiz += 2.5;}}
  else{
    image(btn_return, 50, 50, btSiz,btSiz);
    if(btSiz>75){
      btSiz -= 2.5;}}
}

function credits(){
  overBtnReturn = false;
  image(fundo, 300, 300, 600,600);
  fill("rgb(124,86,93)");
  rect(5,100,290,400,10);
  rect(305,100,290,400,10);
  strokeWeight(3);
  stroke('black');
  line(300, 575, 300, 100);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(60);
  fill('rgb(77,49,112)');
  text('CRÉDITOS', 300, 75);
  textSize(40);
  text('DISCENTE', 450, 145);
  text('DOCENTE', 150, 145);
  image(rmnge, 150, 230, 90, 120);
  image(eu, 450, 230, 90, 120);
  textSize(20);
  noStroke();
  fill('black');
  text('Rummenigge Dantas\n\nDisciplina: ECT3104\nLógica de Programação', 150, 330);
  text('Darlan Soares\n20240007694\n\nProgramador\nArtista Visual', 450, 330);
  fill("rgb(63,18,28)");
  
  if(mouseY >= 12.5 && mouseY <= 87.5){
    if(mouseX >= 12.5 && mouseX <= 87.5){
      overBtnReturn = true;}
    else{
      overBtnReturn = false;}}
  
  if (mouseIsPressed){
    if(overBtnReturn == true){clicked.play();tela = 0;}
    mouseIsPressed = false;}
  
  if(overBtnReturn == true){
    circle(50, 50, 75);
    image(btn_return, 50, 50, btSiz,btSiz);
    if(btSiz<90){
      btSiz += 2.5;}}
  else{
    image(btn_return, 50, 50, btSiz,btSiz);
    if(btSiz>75){
      btSiz -= 2.5;}}
}

function won(){
  overBtnRestart = false;
  overBtnMenu = false;
  image(fundo_2, 300, 300, 600,600);
  textAlign(CENTER);
  textStyle(BOLD);
  strokeWeight(6);
  fill('rgb(118,51,155)');
  textSize(60);
  stroke('black');
  text('VOCÊ VENCEU!', 300, 75);
  textSize(20);
  text('O Bomberman está orgulhoso de você!\nVocê foi um herói que saiu vivo de um bombardeio!\nInfelizmente, muitos inocentes perdem suas vidas em\nconflitos que utilizam armas perigosas como bombas\nque prejudicam, além de nossas vidas, a fauna e a flora.\nObrigado por jogar! ^~^', 300, 310);
  noStroke();
  fill('rgb(60,16,86)');
  circle(151,501,104);
  circle(451,501,104);
  fill('rgb(142,92,171)');
  image(win_art, 300,190,400,200);
  
  
  if(mouseY >= 450 && mouseY <= 550){
    if(mouseX >= 100 && mouseX <= 200){
      overBtnRestart = true;}
    else{
      overBtnRestart = false;}  
    if(mouseX >= 400 && mouseX <= 500){
      overBtnMenu = true;}
    else{
      overBtnMenu = false;}}
  
  if (mouseIsPressed){
    if(overBtnRestart == true){
      beat.play();
      setup();
      tela=1;}
    if(overBtnMenu == true){clicked.play();tela = 0;}
  mouseIsPressed = false;}
  
  
  if(overBtnRestart == true){
    circle(150,500,101);
    image(btn_restart, 150,500, btnSize[1], btnSize[1]);
    if(btnSize[1]<130){
      btnSize[1] += 5;}}
  else{
    image(btn_restart, 150, 500, btnSize[1], btnSize[1]);
    if(btnSize[1]>100){
      btnSize[1] -= 5;}}
  
  if(overBtnMenu == true){
    circle(450,500,101);
    image(btn_home, 450,500, btnSize[2], btnSize[2]);
    if(btnSize[2]<130){
      btnSize[2] += 5;}}
  else{
    image(btn_home, 450,500, btnSize[2], btnSize[2]);
    if(btnSize[2]>100){
      btnSize[2] -= 5;}}
}

function died(){
  overBtnRestart = false;
  overBtnMenu = false;
  image(fundo_2, 300, 300, 600,600);
  textAlign(CENTER);
  textStyle(BOLD);
  strokeWeight(6);
  fill('rgb(118,51,155)');
  textSize(60);
  stroke('black');
  text('VOCÊ PERDEU!', 300, 75);
  textSize(20);
  text('Quando uma bomba é ativada, ocorre uma combustão\n que gera uma rápida expansão de gases quentes.\nVocê acabou de presenciar o perigo de estar próximo!\n Mais sorte na próxima! xD', 300, 340);
  noStroke();
  fill('rgb(60,16,86)');
  circle(151,501,104);
  circle(451,501,104);
  fill('rgb(142,92,171)');  
  image(bomb_art, 300,190,400,200);
  
  if(mouseY >= 450 && mouseY <= 550){
    if(mouseX >= 100 && mouseX <= 200){
      overBtnRestart = true;}
    else{
      overBtnRestart = false;}  
    if(mouseX >= 400 && mouseX <= 500){
      overBtnMenu = true;}
    else{
      overBtnMenu = false;}}
  
  if (mouseIsPressed){
    if(overBtnRestart == true){
      beat.play();
      setup();
      tela=1;}
    if(overBtnMenu == true){clicked.play();tela = 0;}
      exploded.stop();
  mouseIsPressed = false;}
  
  
  if(overBtnRestart == true){
    circle(150,500,101);
    image(btn_restart, 150,500, btnSize[1], btnSize[1]);
    if(btnSize[1]<130){
      btnSize[1] += 5;}}
  else{
    image(btn_restart, 150, 500, btnSize[1], btnSize[1]);
    if(btnSize[1]>100){
      btnSize[1] -= 5;}}
  
  if(overBtnMenu == true){
    circle(450,500,101);
    image(btn_home, 450,500, btnSize[2], btnSize[2]);
    if(btnSize[2]<130){
      btnSize[2] += 5;}}
  else{
    image(btn_home, 450,500, btnSize[2], btnSize[2]);
    if(btnSize[2]>100){
      btnSize[2] -= 5;}}
}
