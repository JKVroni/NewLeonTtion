//게임용 변수
//배경
let bg;
let bgClass;
let underground;
let ugClass;
let hurdle;
let hurdleBelow;
let magma;
let bug;
let bullet;
let ugBlockController;
//인터랙션
let leonHPImg;
let leonHPClass;
let leonBulletImg;
let leonBulletClass;
let ttionBulletImg;
let ttionBulletClass;
let ttionHPImg;
let ttionHPClass;
let fever;
//레옹
let leonnT;
let leonwT;
let leonnTImg = [];
let leonwTImg = [];
let leonX = 100;
let leonY = 110;
let ononCount = 0;
//적군
let enemyImg0;
let enemyImg1;
let enemyClass;
let enemyBlockController;
let enemyBullet;
//띠옹
let ttionImg = [];
let ononImgs = [];
// let ttion;
let onon;
let TtionHeart;
let ttionBullet;
let bulletEaten;
let bulletClass;
let TBulletNum;
let but = false;
let ttionBullets;

const moves = [false, false, false];

//

let leon;
let ttion;
let bulletFired;

let killCount;
let ononMode;
let ononMillis;
let ononTime = 7000;

//스탠
let stanImg = [];
let bulletTurned;
let stan;
let stanButton = false; //스탠 스테이지용 인터랙션 버튼
let bulletFiredStan;
let bulletCave;
let stanBullet;

//Sound
let normalPlayBGM;
let ononBGM;
let stanStageBGM;
let introBGM;
let endingBGM;

let ttionGoDownSound;
let ttionGoUpSound;
let ttionDamagedSound;
let ttionBulletEatSound;
let leonFireSound;
let enemyShotSound;
let leonDamagedSound;
let bombSound;
let stanLaughingSound;
let gameOverSound;
let stanAppearSound;
let yesSound;

//stage용 변수
let stage = 0;
let x = -50;
let y = 5;
let s = 50;

let feverXSpeed = 4;

function preload() {
  //게임용 프리로드
  //인터랙션
  bg = loadImage("assets/bg.png");
  underground = loadImage("assets/ug.png");
  hurdle = loadImage("assets/hurdleAbove.png");
  hurdleBelow = loadImage("assets/hurdleBelow.png");
  magma = loadImage("assets/magma.png");
  bug = loadImage("assets/bug.png");
  leonHPImg = loadImage("assets/leonHeart.png");
  leonBulletImg = loadImage("assets/bullet.png");
  bullet = loadImage("assets/bullet.png");
  enemyBullet = loadImage("assets/bullet.png");
  ttionBulletImg = loadImage("assets/ttionBullet.png");
  ttionHPImg = loadImage("assets/ttionHeart.png");
  fever = loadImage("assets/fever.png");
  //레옹
  for (i = 0; i < 2; i++) {
    leonnTImg[i] = loadImage("assets/leonnT" + i + ".png");
  }
  for (i = 0; i < 2; i++) {
    leonwTImg[i] = loadImage("assets/leonwT" + i + ".png");
  }
  leonDie = loadImage("assets/leonDie.png");
  //적군
  enemyImg = loadImage("assets/enemy.png");
  //띠옹
  for (i = 0; i < 2; i++) {
    ttionImg[i] = loadImage("assets/ttion" + i + ".png");
  }
  ttionSlide = loadImage("assets/ttionSlide.png");
  for (i = 0; i < 2; i++) {
    ononImgs[i] = loadImage("assets/onon" + i + ".png");
  }
  ttionDie = loadImage("assets/ttionDie.png");
  bulletFired = loadImage("assets/bulletTurned.png");

  //스탠
  for (i = 0; i < 2; i++) {
    stanImg[i] = loadImage("assets/stan" + i + ".png");
  }
  HPImg = loadImage("assets/hPImg.png");
  bulletFiredStan = loadImage("assets/bulletFiredStan.png");
  caveug = loadImage("assets/caveug.png");
  // stanImg = loadImage('assets/stan'+0+'.png');

  //Sound
  normalPlayBGM = loadSound("assets/normalPlayBGM.mp3");
  ononBGM = loadSound("assets/ononBGM.mp3");
  stanStageBGM = loadSound("assets/stanStageBGM.mp3");
  introBGM = loadSound("assets/introBGM.mp3");
  endingBGM = loadSound("assets/endingBGM.mp3");

  ttionGoDownSound = loadSound("assets/ttionGoDownSound.wav");
  ttionGoUpSound = loadSound("assets/ttionGoUpSound.mp3");
  ttionDamagedSound = loadSound("assets/ttionDamagedSound.wav");
  ttionBulletEatSound = loadSound("assets/ttionBulletEatSound.mp3");
  leonFireSound = loadSound("assets/leonFireSound.mp3");
  enemyShotSound = loadSound("assets/enemyShotSound.wav");
  leonDamagedSound = loadSound("assets/leonDamagedSound.mp3");
  bombSound = loadSound("assets/bombSound.WAV");
  stanLaughingSound = loadSound("assets/stanLaughingSound.mp3");
  gameOverSound = loadSound("assets/gameOverSound.mp3");
  stanAppearSound = loadSound("assets/stanAppearSound.mp3");
  yesSound = loadSound("assets/yes.mp3"); 

  //스테이지용 프리로드
  //인터랙션
  start = loadImage("assets/start page.png");
  m1_C1 = loadImage("assets/m1_C1.png");
  m1_C2 = loadImage("assets/m1_C2.png");
  m1_C3_1 = loadImage("assets/m1_C3_1.png");
  m1_C3_2 = loadImage("assets/m1_C3_2.png");
  m1_C4_1 = loadImage("assets/m1_C4_1.png");
  m1_C4_2 = loadImage("assets/m1_C4_2.png");
  m1_C5 = loadImage("assets/m1_C5.png");
  m2_C1_1 = loadImage("assets/m2_C1_1.png");
  m2_C1_2 = loadImage("assets/m2_C1_2.png");
  m2_C2 = loadImage("assets/m2_C2.png");
  m3_C1 = loadImage("assets/m3_C1.png");
  m3_C2 = loadImage("assets/m3_C2.png");
  die = loadImage("assets/you died.png");
  end = loadImage("assets/the end.png");
  restart = loadImage("assets/restart.png");
  cartoon1 = loadImage("assets/cartoon1.png");
  cartoon2 = loadImage("assets/cartoon2.png");

  //폰트
  font = loadFont('assets/BMJUA_ttf.ttf');
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);

  // let containerWidth = 940;
  // let zoomRatio = (windowWidth / containerWidth) * 100;

  // document.body.style.zoom = `${zoomRatio}%`;
  // document.body.style.zoom = "125%";

  //적군용 셋업
  bgClass = new Background();
  ugClass = new Underground();

  enemyBlockController = new EnemyBlockController();
  leon = new Leon(
    leonX,
    leonY,
    82.29,
    125.45,
    leonwTImg,
    leonnTImg,
    bulletFired,
    8.16,
    4.54,
    ononImgs
  );
  ttion = new Ttion(100, 300, 30, 50, ttionImg, ttionSlide);
  ugBlockController = new UgBlockController(ttion);

  leon.setTtion(ttion);
  leon.setEnemyController(enemyBlockController);
  ttion.setLeon(leon);
  enemyBlockController.setLeon(leon);

  resetGame();

  //stan
  stan = new Stan_(
    410,
    110,
    82.29,
    125.45,
    stanImg,
    8.16,
    4.54,
    bulletFiredStan
  );
  RandomBullet = new randomBulletCave();
}

function draw() {
  switch (stage) {
    /////오픈 stage
    case 0:
      image(start, -25, 0, 650, 400);
      fill(255);
      textSize(20);
      text("Press ENTER to Start", 300, 300);
      break;

    /////만화1
    case 1:
      //frameRate(15);
      background(255);
      image(cartoon1, 0,0,600,400);

      push();
      x = x + 10;
      if (x > 10) {
        x = 10;
      }
      translate(x, 20);
      image(m1_C1, x, 20, 200, 130);
      pop();

      let offset = random(-2, 2);
      image(m1_C2, 250 + offset, 20 + offset, 180, 170);

      image(m1_C3_1, 460, 30, 100, 50);

      push();
      y = y + 10;
      if (y > 40) {
        y = 40;
      }
      translate(20, y);
      image(m1_C3_2, 450, y, 100, 100);
      pop();

      image(m1_C4_1, 50, 230, 100, 150);

      push();
      s = s + 5;
      if (s > 110) {
        s = 100;
      }
      //translate(100,250,s,s);
      image(m1_C4_2, 170, 240, s, s + 10);
      pop();

      push();
      s = s + 10;
      if (s > 150) {
        s = 150;
      }
      //translate(100,250,s,s);
      image(m1_C5, 300, 220, s + 170, s + 50);
      pop();

      fill(5);
      textSize(15);
      text("Press ENTER", 530, 340);
      text("to Start", 530, 360);

      ///img(처음만화1);
      //시간이 흐를때마다 한칸씩 만화 애니메이션
      break;

    /////적군 stage
    case 2:
      introBGM.stop();
      //적군 스테이지
      //배경
      bgClass.move();
      ugClass.move();
      ugBlockController.moveBlocks();
      ugBlockController.drawBlocks();
      ugBlockController.bulletEaten(ttion.ttionX, ttion.ttionY);

      //적군
      enemyBlockController.moveBlocks();
      enemyBlockController.drawBlocks();

      //Leon
      leon.moveAndJump();
      leon.draw();

      // Ttion
      ttion.moveAndJump();
      ttion.draw();

      //BGM
      if (normalPlayBGM.isPlaying() == false) {
        normalPlayBGM.play();
      }

      if (killCount >=15) {
        leon.toONON();
        ttion.toONON();
        ononMode = true;
        ononMillis = millis();
        killCount = 0;
        normalPlayBGM.stop();
        if (ononBGM.isPlaying() == false) {
          ononBGM.play();
        }
      }

      if (ononMode) {
        let offset = random(-5, 5);
        push();
        imageMode(CENTER);
        image(fever, 300 + offset, 80 + offset, 168, 74);
        pop();
        // bgClass.speed = 4;
        // ugClass.speed = 4;
        // enemyBlockController.blockSpeed = 4;
        // ugBlockController.blockSpeed = 4;
        // console.log("a");
        if (millis() - ononMillis >= ononTime) {
          // console.log("b");
          ononMode = false;
          leon.toOFFOFF();
          ttion.toOFFOFF();
          ononBGM.stop();
          ononCount = ononCount + 1;
          // bgClass.speed = 2;
          // ugClass.speed = 2;
          // enemyBlockController.blockSpeed = 2;
          // ugBlockController.blockSpeed = 2;
        }
      }
      image(restart, 540,10,55,40);
      break;

    case 3:
      ///// you died
      //case 3:
      background(0);
      fill(255, 0, 0);
      textSize(40);
      textAlign(CENTER);
      text("YOU DIED", 300, 150);
      fill(255);
      textSize(20);
      text('Press ENTER to RETRY at the Same Point', 300, 190);
      if(leon.hp <= 0){
        push();
        imageMode(CENTER);
        image(leonDie, 300, 280, 150, 100);
        pop();
      }
      if(ttion.hp <= 0){
        push();
        imageMode(CENTER);
        image(ttionDie, 300, 280, 150, 100);
        pop();
      }

      //BGM
      normalPlayBGM.stop();
      ononBGM.stop();
      if (gameOverSound.isPlaying() == false) {
        gameOverSound.play();
      }
      //you died 이미지
      //break;
      //redeaw();

      image(restart, 540,10,50,40);

      break;

    /////만화 2
    case 4:
      background(255);
      image(cartoon2, 0,0,600,400);
      image(m2_C1_1, 10, 30, 230, 270);

      let offsetM2 = random(-2, 2);
      image(m2_C1_2, 220 + offsetM2, 50 + offsetM2, 110, 110);

      push();
      s = s + 15;
      if (s > 150) {
        s = 150;
      }
      //translate(100,250,s,s);
      image(m2_C2, 270, 100, s + 180, s + 110);
      pop();

      fill(255,0,0);
      textSize(20);
      text('Press ENTER to', 450, 45);
      text('ATTACK', 500,70);

      normalPlayBGM.stop();
      if (stanAppearSound.isPlaying() == false) {
        stanAppearSound.play();
      }

      ///img(중간만화2);
      //시간이 흐를때마다 한칸씩 만화 애니메이션
      break;

    /////스탠 stage
    case 5:
      image(bg, 0, 0, width, height / 2);
      image(caveug, 0, height / 2, width, height / 2);
      RandomBullet.spawn();
      RandomBullet.show();
      RandomBullet.eaten(ttion.x, ttion.y);

      //Leon
      leon.moveAndJump();
      leon.draw();

      // Ttion
      ttion.moveAndJump();
      ttion.draw();
      if (keyIsDown(65)) ttion.move(-1);
      if (keyIsDown(68)) ttion.move(1);

      //Stan
      if (frameCount % int(random(120, 240)) == 0) {
        stan.fire();
      }

      image(restart, 540,10,55,40);

      stan.draw();
      stan.jump();
      stan.jumpTime();
      stan.stanHPshow();

      //BGM
      stanAppearSound.stop();
      if (stanStageBGM.isPlaying() == false) {
        stanStageBGM.play();
      }

      break;

    /////만화3 엔딩 stage
    case 6:
      background(255);
      image(end, 10, 30, 320, 160);
      image(m3_C1, 200, 130, 250, 250);

      push();
      s = s + 5;
      if (s > 200) {
        s = 200;
      }
      //translate(100,250,s,s);
      image(m3_C2, 370, 30, s + 10, s);
      pop();

      // fill(5);
      // textSize(30);
      // text("Press ENTER", 100, 250);
      // text("to REPLAY", 100, 290);
      ///img(엔딩만화3);
      //시간이 흐를때마다 한칸씩 만화 애니메이션
      //retry

      //BGM
      stanStageBGM.stop();
      if (endingBGM.isPlaying() == false) {
        endingBGM.play();
      }
      image(restart, 540,10,55,40);
      break;

    default:
  }

  if (stage == 2 && ononCount >= 3) {
    stage = 4;
    return;
  }
  if (stage == 2 && (leon.hp <= 0 || ttion.hp <= 0)) {
    stage = 3;
    return;
  }
  if (stage == 5) {
    if (stan.stanhp <= 0) {
      stage = 6;
    } else if (leon.hp <= 0 || ttion.hp <= 0) {
      stage = 3;
      //leon.hp = 100;
      //leon.bulletNum = 5;
      //ttion.hp = 100;
      //ttion.bulletNum = 0;
      
      return;
    }
  }
}

function keyPressed() {
  if (keyCode == ENTER) {
    if (stage == 0) {
      stage = 1;
      if (introBGM.isPlaying() == false) {
        introBGM.play();
      }
      return;
    }
    if (stage == 1) {
      stage = 2;
      return;
    }

    if (stage == 3) {
      leon.hp = 100;
      leon.bulletNum = 5;
      ttion.hp = 100;
      ttion.bulletNum = 0;
      stage = 2;
      return;
    }
    if (stage == 4) {
      stage = 5;
    }
    if (Stage == 6){
      stage = 0;
      setup();
      normalPlayBGM.stop();
      stanStageBGM.stop();
      return;
    }
  }

  // if (keyCode == ENTER) {

  //   if (stage == 0) {
  //     stage = 1;
  //   }
  //   else if (stage == 1) {
  //     stage = 2;
  //   }
  //   else if (stage == 2 && leon.hp <= 0) {
  //     stage = 3;
  //   }
  //   else if (stage == 2 && ononCount == 4) {
  //     stage = 4;
  //   } else if (stage = 4) {
  //     stage = 5;
  //   } else if (stage == 5 && leon.hp <= 0) {
  //     stage = 3;
  //   } else if (stage == 5 && stan.stanhp <= 0) {
  //     stage = 6;
  //   } else if (stage == 6) {
  //     stage = 0;
  //   }
  // }

  if (stage == 2 || stage == 5) {
    leon.keyPressed();
    ttion.keyPressed();
  }
}

function keyReleased() {
  if (stage == 2 || stage == 5) {
    leon.keyReleased();
    ttion.keyReleased();
  }
}

function resetGame() {
  killCount = 0;
  // ononCount = 0;
}


function mousePressed(){
  if (540<mouseX && mouseX < 590 && 10 < mouseY && mouseY < 50){
    stage =0;
    normalPlayBGM.stop();
    stanStageBGM.stop();
    endingBGM.stop();
    ononCount = 0;
    setup();
  }

}