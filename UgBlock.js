class HurdleBlock {
  constructor(_w) {
    this.x = width + _w;
    this.y = 280;
    this.w = _w;
    this.speed = 2;
    this.blockType = "HURDLE";
  }

  isCollided(ttion) {
    let tp = ttion.x + ttion.w / 2;
    let underHurdle = tp > this.x + 3 && tp < this.x + this.w - 3;
    return underHurdle && !ttion.sliding;
  }

  move() {
    this.x -= this.speed;
  }
  moveFever(feverSpeed) {
    this.x -= this.speed * feverSpeed;
  }
  draw() {
    image(hurdle, this.x, this.y, this.w, 50);
  }
}

class BulletBlock {
  constructor(_w) {
    this.x = width + _w + 2;
    this.y = 290;
    this.w = _w / 3;
    this.speed = 2;
    this.taken = false;
    this.blockType = "BULLET";
  }

  isCollided(ttion) {
    // circle(this.x + this.w / 2, this.y + this.h / 2, this.w);
    // circle(this.x + this.w / 2, this.y, this.w * 2);
    let d = dist(
      ttion.x + ttion.w / 2,
      ttion.y + ttion.h / 2,
      this.x + this.w / 2,
      this.y
    );
    return d <= ttion.w / 2 + this.w;
  }

  move() {
    this.x -= this.speed;
  }
  moveFever(feverSpeed) {
    this.x -= this.speed * feverSpeed;
  }
  draw() {
    if (!this.taken) {
      image(bullet, this.x, this.y, this.w, 20);
    }
  }
}

class MagmaBlock {
  constructor(_w) {
    this.x = width + _w;
    this.y = height / 2 + 150;
    this.w = _w / 2;
    this.speed = 2;
    this.blockType = "MAGMA";
  }

  isCollided(ttion) {
    let tp = ttion.x + ttion.w / 2;
    let onMagma = tp > this.x + 3 && tp < this.x + this.w - 3;
    return onMagma && !ttion.jumped;
  }

  move() {
    this.x -= this.speed;
  }
  moveFever(feverSpeed) {
    this.x -= this.speed * feverSpeed;
  }
  draw() {
    image(magma, this.x, height / 2 + 150, this.w, 60);
  }
}
