class Background {
  constructor() {
    this.bgArray = [0, 600];
    this.speed = 2;
  }

  move() {
    if (leon.mode == "ONON") {
      this.bgArray[0] -= this.speed * feverXSpeed;
      this.bgArray[1] -= this.speed * feverXSpeed;
    } else {
      this.bgArray[0] -= this.speed;
      this.bgArray[1] -= this.speed;
    }
    // this.bgArray[0] -= this.speed;
    // this.bgArray[1] -= this.speed;
    if (this.bgArray[0] <= -width) {
      this.bgArray[0] = width;
    }
    if (this.bgArray[1] <= -width) {
      this.bgArray[1] = width;
    }
    image(bg, this.bgArray[0], 0, width, height / 2);
    image(bg, this.bgArray[1], 0, width, height / 2);
  }

  show() {
    image(bg, 0, 0, width, height / 2);
  }
}
