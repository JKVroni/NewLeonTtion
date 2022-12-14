class Ttion {
  constructor(x, y, w, h, imgs_walk, img_slide) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.bottomY = y;

    this.sX = this.x;
    this.sY = this.y;
    this.sW = this.w;
    this.sH = this.h;

    this.hp = 100;
    this.mode = "WITH_LEON"; // "WO_LEON", "GO_UP", "GO_DOWN"
    this.onon = false;
    this.imgs_walk = imgs_walk;
    this.img_slide = img_slide;
    this.bulletNum = 0;
    this.nextTimer = 0;
    this.vX = 3;
    this.vY = 0;
    this.jumped = false;
    this.jumpSpeed = -4;
    this.gravity = 0.3;
    this.lrMoveLocked = true;
    this.moves = [false, false, false, false]; // LEFT, UP, RIGHT, DOWN
    this.sliding = false;
    this.walkAnimationDelay = 200;

    //FLICKER
    this.flicker = false;
    this.flickerEffect = false;
    this.flickerTime = 0;
    this.flickerDelay = 3000;

    //SHADOW
    this.shadowCounter = 0;
    this.shadowCounterEnd = 1000;
    this.shadowSpeed = 200;
    this.shadowDim = 50;
  }

  setLeon(leon) {
    this.leon = leon;
  }

  moveAndJump() {
    if (this.mode == "WO_LEON") {
      //UP
      if (this.moves[1]) {
        this.jump();
      }
      //LEFT & RIGHT
      if (!this.lrMoveLocked) {
        let direction = 0;
        if (this.moves[0]) {
          direction -= 1;
        }
        if (this.moves[2]) {
          direction += 1;
        }
        this.move(direction);
      }
      //DOWN
      if (!this.jumped && this.moves[3]) {
        this.sliding = true;
      } else {
        this.sliding = false;
      }

      if (this.jumped) {
        this.y += this.vY;
        this.vY += this.gravity;
        if (this.y >= this.bottomY) {
          this.endJump();
        }
      }
      return;
    }
    if (this.mode == "GO_DOWN") {
      this.move_go_down();
    }
    if (this.mode == "GO_UP") {
      this.move_go_up();
    }
    if (this.mode == "GO_UP_ONON") {
      this.move_go_up(true);
    }
  }

  move(direction) {
    if (direction == -1) {
      this.moveLeft();
    }
    if (direction == 1) {
      this.moveRight();
    }
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= this.vX;
    } else if (this.x <= 0) {
      this.x = 0;
    }
  }

  moveRight() {
    if (this.x < width - 30) {
      this.x += this.vX;
    } else if (this.x >= width - 30) {
      this.x = width - 30;
    }
  }

  jump() {
    if (!this.jumped) {
      this.vY = this.jumpSpeed;
      this.jumped = true;
    }
    // if (!this.jumped) {
    //   this.vY = this.jumpSpeed;
    //   this.jumped = true;
    // }
    // if (this.jumped) {
    //   this.y += this.jumpSpeed;
    //   this.jumpSpeed += this.gravity;
    //   if (this.y >= this.bottomY) {
    //     this.y = this.bottomY;
    //     this.jumped = false;
    //   }
    // }
  }

  endJump() {
    this.vY = 0;
    this.y = this.bottomY;
    this.jumped = false;
  }

  move_go_down() {
    this.shadowCounter += this.shadowSpeed;
    if (ttionGoDownSound.isPlaying() == false) {
      ttionGoDownSound.play();
    }
    if (this.shadowCounter >= this.shadowCounterEnd) {
      this.shadowCounter = 0;
      this.getDamaged(0);
      this.mode = "WO_LEON";
    }
    let startPos = this.leon.getSmallTTIONPos();
    this.sX = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      startPos.x,
      this.x
    );
    this.sY = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      startPos.y,
      this.y
    );
    this.sW = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      startPos.w,
      this.w
    );
    this.sH = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      startPos.h,
      this.h
    );
  }

  move_go_up() {
    this.flicker = false;
    this.shadowCounter += this.shadowSpeed;
    if (ttionGoUpSound.isPlaying() == false) {
      ttionGoUpSound.play();
    }
    if (this.shadowCounter >= this.shadowCounterEnd) {
      this.shadowCounter = 0;
      this.mode = "WITH_LEON";
      this.leon.modeChange();
      if (this.onon) {
        this.mode = "ONON";
        this.leon.mode = "ONON";
      }

      this.leon.bulletNum += this.bulletNum;
      this.bulletNum = 0;
    }
    let endPos = this.leon.getSmallTTIONPos();
    this.sX = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      this.x,
      endPos.x
    );
    this.sY = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      this.y,
      endPos.y
    );
    this.sW = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      this.w,
      endPos.w
    );
    this.sH = map(
      this.shadowCounter,
      0,
      this.shadowCounterEnd,
      this.h,
      endPos.h
    );
  }

  // right() {
  //   if (keyIsPressed && keyCode == 68) {
  //     if (this.ttionX + 30 >= width) this.ttionX = width - 30;
  //     else this.ttionX += 2;
  //   }
  // }
  // left() {
  //   if (keyIsPressed && keyCode == 65) {
  //     if (this.ttionX <= 0) this.ttionX = 0;
  //     else this.ttionX -= 2;
  //   }
  // }

  draw() {
    console.log(this.y);
    // hp 인터페이스
    image(ttionHPImg, 10, 290, 30, 30);
    textSize(15);
    pop();
    textAlign(LEFT);
    fill(255);
    text("X " + this.hp, 40, 310);

    // bulletNum 인터페이스
    image(ttionBulletImg, 10, 320, 30, 30);
    textSize(15);
    textAlign(LEFT);
    fill(255);
    text("X " + this.bulletNum, 40, 340);
    push();

    let frame = int(millis() / this.walkAnimationDelay) % 2;
    let ttionImg = this.imgs_walk[frame];
    if (this.mode == "WITH_LEON") {
      if (this.hp <= 100) {
        if (frameCount % 60 == 0) this.hp += 10;
      } else this.hp = 100;
      return;
    }
    if (this.mode == "WO_LEON") {
      if (frameCount % 60 == 0) this.hp -= 5;
      if (this.flicker) {
        let td = millis() - this.flickerTime;
        if (td >= this.flickerDelay) {
          this.flicker = false;
        }
        this.flickerEffect = !this.flickerEffect;
        if (this.sliding && this.flickerEffect) {
          image(this.img_slide, this.x, this.y + 30, 50, 30);
          return;
        }
        if (this.flickerEffect) {
          image(ttionImg, this.x, this.y, this.w, this.h);
        }
        return;
      }

      if (this.sliding) {
        image(this.img_slide, this.x, this.y + 30, 50, 30);
        return;
      }
      image(ttionImg, this.x, this.y, this.w, this.h);
    }
    if (this.mode == "GO_UP") {
      image(ttionImg, this.sX, this.sY, this.sW, this.sH);
      return;
    }
    if (this.mode == "GO_UP_ONON") {
      image(ttionImg, this.sX, this.sY, this.sW, this.sH);
      return;
    }
    if (this.mode == "GO_DOWN") {
      image(ttionImg, this.sX, this.sY, this.sW, this.sH);
      return;
    }
    if (this.mode == "ONON") {
      this.hp = 100;
      return;
    }
  }

  keyPressed() {
    if (keyCode == 65) {
      this.moves[0] = true;
    }
    if (keyCode == 87) {
      this.moves[1] = true;
    }
    if (keyCode == 68) {
      this.moves[2] = true;
    }
    if (keyCode == 83) {
      this.moves[3] = true;
    }
    if (keyCode == DOWN_ARROW && this.mode == "WITH_LEON") {
      this.modeChange();
    }
    if (keyCode == 82 && this.mode == "WO_LEON") {
      this.modeChange();
    }
  }
  keyReleased() {
    if (keyCode == 65) {
      this.moves[0] = false;
    }
    if (keyCode == 87) {
      this.moves[1] = false;
    }
    if (keyCode == 68) {
      this.moves[2] = false;
    }
    if (keyCode == 83) {
      this.moves[3] = false;
    }
  }

  modeChange() {
    console.log(this.mode);

    this.endJump();
    if (this.mode == "WITH_LEON") {
      // this.mode = "WO_LEON";
      this.mode = "GO_DOWN";
      return;
    }
    if (this.mode == "WO_LEON") {
      this.mode = "GO_UP";
      // this.mode = "WITH_LEON";
      return;
    }
  }

  getBullet() {
    this.bulletNum += 1;
    if (ttionBulletEatSound.isPlaying() == false) {
      ttionBulletEatSound.play();
    }
  }

  getDamaged(damage) {
    // this.flicker = false;
    // this.flickerTime = 0;
    // this.flickerDelay = 3000;
    if (!this.flicker) {
      this.hp -= damage; // Damage From Block
      this.flicker = true;
      this.flickerTime = millis();
      if (ttionDamagedSound.isPlaying() == false) {
        ttionDamagedSound.play();
      }
    }
  }
  toONON() {
    this.endJump();
    if (this.mode == "WO_LEON") {
      this.mode = "GO_UP";
      this.onon = true;
      return;
    }
    this.mode = "ONON";
  }
  toOFFOFF() {
    this.onon = false;
    this.mode = "WITH_LEON";
  }
}
