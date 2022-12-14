class BulletLeon {
  constructor(_x, _y, _w, _h, _img) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.img = _img;
    this.vX = 10;
    this.disapper = false;
  }

  move() {
    this.x += this.vX;
  }

  draw() {
    if (this.x > width) {
      this.disapper = true;
    }
    if (!this.disapper) {
      image(this.img, this.x, this.y, this.w, this.h);
    }
  }

  shot(enemy) {
    if (!this.disapper && !enemy.disapper) {
      let xIn = this.x > enemy.x && this.x < enemy.x + enemy.w;
      let yIn = this.y > enemy.y - 10 && this.y < enemy.y + enemy.h;
      if (xIn&&yIn) {
        this.disapper = true;
        enemy.getShot();
        if (leon.mode != "ONON") {
          killCount += 1;
        }
      }
    }
  }

  shotStan() {
    let xIn2 =
      this.x > stan.stanXLocation() && this.x < stan.stanXLocation() + 6;
    let yIn2 =
      this.y > stan.stanYLocation() && this.y < stan.stanYLocation() + 126;
    if (xIn2 && yIn2 && stage == 5) {
      stan.getDamaged(10);
    }
  }
}
