class Stan_ {
  constructor(_x, _y, _w, _h, _img, bW, bH, bImg) {
    this.stanX = _x;
    this.stanY = _y;
    this.current = 0;
    this.w = _w;
    this.h = _h;
    this.img = _img;
    this.bW = bW;
    this.bH = bH;
    this.bImg = bImg;

    this.bullets = [];
    this.bulletNum = 1000;

    this.nextTimer = 0;
    this.delay = 200;
    this.whichFrame = 0;
    this.jumpSpeed = 0;
    this.gravity = 0.3;
    this.jumpheight = -8;

    this.damageButton = false;
    this.sendButton = false;
    this.moveDirection = true;
    this.jumpOrNot = false;

    this.stanHP = 300;

    //FLICKER
    this.flicker = false;
    this.flickerEffect = false;
    this.flickerTime = 0;
    this.flickerDelay = 3000;

    //walk animation
    this.walkAnimationDelay = 200;

    //bullet
    this.bulletFired = false;
  }

  draw() {
    let frame = int(millis() / this.walkAnimationDelay) % 2;
    image(stanImg[frame], this.stanX, this.stanY, this.w, this.h);

    // draw Bullets
    for (let bullet of this.bullets) {
      bullet.move();
      bullet.shot(leon);
      bullet.draw();
    }
  }

  fire() {
    if (this.bulletNum > 0) {
      let bullet = new StanBullet(
        this.stanX - 75,
        this.stanY + 24,
        this.bW,
        this.bH,
        this.bImg
      );
      this.bullets.push(bullet);
      this.bulletNum -= 1;
      if (enemyShotSound.isPlaying() == false) {
        enemyShotSound.play();
      }
    }
  }

  jump() {
    this.jumpSpeed += this.gravity;
    this.stanY += this.jumpSpeed;

    if (this.stanY > 110) {
      this.jumpSpeed = 0;
      this.stanY = 110;
      if (this.jumpTime()) {
        this.jumpSpeed += this.jumpheight;
      }
    }
  }

  jumpTime() {
    if (frameCount % int(random(30, 100)) == 0)
      this.jumpOrNot = !this.jumpOrNot;
    return this.jumpOrNot;
  }

  stanHPshow() {
    image(HPImg, this.stanX+5, this.stanY+2 - 30, 20, 20);
    textSize(15);
    textAlign(CENTER);
    fill(255);
    text("X " + this.stanHP, this.stanX + 50, this.stanY - 15);
  }

  stanXLocation() {
    return this.stanX;
  }

  stanYLocation() {
    return this.stanY;
  }

  getDamaged(damage) {
    if (this.stanHP >= 10 && stage == 5) {
      this.stanHP -= damage;
    }
    if (this.stanHP == 0) {
      stage = 6;
    }
  }
}

class StanBullet {
  constructor(_x, _y, _w, _h, img) {
    this.x = _x;
    this.y = _y + 10;
    this.speed = 5;
    this.w = _w;
    this.h = _h;
    this.img = img;
  }

  move() {
    this.x -= this.speed;
  }

  draw() {
    image(this.img, this.x, this.y, 8.16, 4.54);
  }

  shot(leon) {
    let xIn = this.x > leon.x && this.x < leon.x + leon.w;
    let yIn = this.y > leon.y && this.y < leon.y + leon.h;
    if (xIn && yIn) {
      console.log("leon shot");
      leon.getDamaged(10);
    }
  }
}
