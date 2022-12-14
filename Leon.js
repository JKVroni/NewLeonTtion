class Leon {
  // leonHP,
  // leonBullet

  // leonnT, leonwT, onon,
  constructor(_x, _y, _w, _h, imgs_lt, imgs_l, img_bullet, bW, bH, imgs_onon) {
    this.hp = 100;
    this.bulletNum = 5;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.ononCount = 0;
    this.bottomY = _y;
    this.imgs = {
      WITH_TTION: imgs_lt,
      WO_TTION: imgs_l,
      ONON: imgs_onon,
    };
    this.img_bullet = img_bullet;
    this.bW = bW;
    this.bH = bH;
    this.vX = 3;
    this.vY = 0;
    this.jumped = false;
    this.jumpSpeed = -20;
    this.gravity = 1;
    this.lrMoveLocked = true;
    this.moves = [false, false, false];
    this.bullets = [];
    this.walkAnimationDelay = 200;
    // this.walkAnimationFrame = 0;

    //FLICKER
    this.flicker = false;
    this.flickerEffect = false;
    this.flickerTime = 0;
    this.flickerDelay = 3000;
    // this.flicker = false;
    // this.flickerTime = 0;
    // this.flickerDelay = 3000;
    this.mode = "WITH_TTION"; // "WO_TTION"
  }

  setTtion(ttion) {
    this.ttion = ttion;
  }

  setEnemyController(enemyController) {
    this.enemyController = enemyController;
  }

  moveAndJump() {
    if (this.moves[1]) {
      this.jump();
    }
    // if (!this.lrMoveLocked) {
    //   let direction = 0;
    //   if (this.moves[0]) {
    //     direction -= 1;
    //   }
    //   if (this.moves[2]) {
    //     direction += 1;
    //   }

    //   this.move(direction);
    // }

    if (this.jumped) {
      this.y += this.vY;
      this.vY += this.gravity;
      if (this.y >= this.bottomY) {
        this.vY = 0;
        this.y = this.bottomY;
        this.jumped = false;
      }
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
    this.x -= this.vX;
  }

  moveRight() {
    this.x += this.vX;
  }

  jump() {
    if (!this.jumped) {
      this.vY = this.jumpSpeed;
      this.jumped = true;
    }
  }

  draw() {
    pop();
    image(leonBulletImg, 18, 45, 15, 20);
    textSize(15);
    textAlign(LEFT);
    fill(255);
    text("X " + this.bulletNum, 40, 60);
    push();

    let currFlikerEffect = true;
    if (this.flicker) {
      let td = millis() - this.flickerTime;
      if (td >= this.flickerDelay) {
        this.flicker = false;
      }
      this.flickerEffect = !this.flickerEffect;
      currFlikerEffect = this.flickerEffect;
    }

    let frame = int(millis() / this.walkAnimationDelay) % 2;
    if (this.mode == "ONON") {
      frame = int(millis() / (this.walkAnimationDelay / feverXSpeed)) % 2;
    }
    let leonImgs = this.imgs[this.mode];
    if (currFlikerEffect) {
      image(leonImgs[frame], this.x, this.y, this.w, this.h);
    }

    // draw Bullets
    for (let bullet of this.bullets) {
      bullet.move();
      for (let enemy of this.enemyController.blocks) {
        bullet.shot(enemy);
      }
      bullet.shotStan();
      bullet.draw();
    }
    this.updateBullets();
    if (this.mode == "ONON") {
      this.hp = 100;
      this.bulletNum = 5;
    }
    push();
    image(leonHPImg, 10, 10, 25, 30);
    textSize(15);
    textAlign(LEFT);
    fill(255);
    text("X " + this.hp, 40, 30);
    pop();
    // noFill();
    // stroke(255, 0, 0);
    // rect(this.x, this.y, this.w, this.h);
  }

  updateBullets() {
    if (this.bullets.length > 0) {
      let firstBullet = this.bullets;
      if (firstBullet.x > width) {
        this.bullets.shift();
      }
    }
  }

  fire() {
    if (this.bulletNum > 0) {
      let bullet = new BulletLeon(
        this.x + 75,
        this.y + 24,
        this.bW,
        this.bH,
        this.img_bullet
      );
      this.bullets.push(bullet);
      this.bulletNum -= 1;
      leonFireSound.play();
    }
  }
  getSmallTTIONPos() {
    //return x, y of small ttion.
    let smallTTionPos = {
      x: this.x + 20,
      y: this.y + 40,
      w: this.w * 0.2,
      h: this.h * 0.15,
    };
    return smallTTionPos;
  }

  keyPressed() {
    // if (keyCode == LEFT_ARROW) {
    //   this.moves[0] = true;
    // }
    // if (keyCode == RIGHT_ARROW) {
    //   this.moves[2] = true;
    // }
    if (keyCode == UP_ARROW) {
      this.moves[1] = true;
    }
    if (keyCode == RIGHT_ARROW) {
      this.fire();
    }
    if (keyCode == DOWN_ARROW && this.mode == "WITH_TTION") {
      this.modeChange();
    }

    //DOWN_ARROW 레옹 슬라이드 추가해야함

    // if (keyCode == SHIFT && this.mode == "WO_TTION") {
    //   this.modeChange();
    // }
  }
  keyReleased() {
    if (keyCode == LEFT_ARROW) {
      this.moves[0] = false;
    }
    if (keyCode == UP_ARROW) {
      this.moves[1] = false;
    }
    if (keyCode == RIGHT_ARROW) {
      this.moves[2] = false;
    }
  }

  modeChange() {
    if (this.mode == "WITH_TTION") {
      this.mode = "WO_TTION";
      return;
    }
    if (this.mode == "WO_TTION") {
      this.mode = "WITH_TTION";
      yesSound.play();
      return;
    }
  }

  getDamaged(damage) {
    // this.flicker = false;
    // this.flickerTime = 0;
    // this.flickerDelay = 3000;
    if (!this.flicker) {
      this.hp -= damage; // Damage From Block
      // console.log(this.hp);
      this.flicker = true;
      this.flickerTime = millis();
      if (leonDamagedSound.isPlaying() == false) {
        leonDamagedSound.play();
      }
    }
  }

  toONON() {
    this.mode = "ONON";
    // if (this.mode == "WITH_TTION") {

    // }
  }
  toOFFOFF() {
    this.mode = "WITH_TTION";
  }
  //   gunpush() {
  //     this.bulletXs.push(leonX);
  //     this.bulletYs.push(leonY);
  //     this.numBullets += 1;
  //   }

  //   gun() {
  //     for (let i = 0; i < this.numBullets; i++) {
  //       image(bullet, this.bulletXs[i] + 75, this.bulletYs[i] + 27, 8.16, 4.54);
  //       this.bulletXs[i] += 5;
  //     }
  //   }

  //   flicker() {
  //     if (frameCount % 8 == 0) this.normalshow();
  //   }

  //   returnTimer() {
  //     return this.timer;
  //   }

  //   startTimer() {
  //     if (this.flickerButton) this.timer = millis();
  //   }

  //   walk() {
  //     image(leonnTImg[this.whichFrame], leonX, leonY, 82.29, 125.45);
  //     if (millis() > this.nextTimer) {
  //       this.whichFrame++;
  //       if (this.whichFrame >= leonnTImg.length) {
  //         this.whichFrame = 0;
  //       }
  //       this.nextTimer = millis() + this.delay;
  //     }
  //   }

  //   jump() {
  //     this.jumpSpeed += this.gravity;
  //     leonY += this.jumpSpeed;

  //     if (leonY > 110) {
  //       this.jumpSpeed = 0;
  //       leonY = 110;
  //       if (keyIsDown(UP_ARROW)) {
  //         this.jumpSpeed += this.jumpheight;
  //       }
  //     }
  //   }

  //   damage() {
  //     // 합칠 때 작성해야 할 것 같습니다.
  //   }

  //   send() {
  //     // bottlenect...
  //   }
}
