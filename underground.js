class Underground {
  constructor() {
    this.ugArray = [0, 600];
    this.hurdleArray = [];
    this.hurdleNum = 0;
    this.hurdleBelowArr = [];
    this.hurdleBelowNum = 0;
    this.magmaArr = [];
    this.magmaNum = 0;
    this.bugArr = [];
    this.bugNum = 0;
    this.speed = 2;
  }
  move() {
    if (leon.mode == "ONON") {
      this.ugArray[0] -= this.speed * feverXSpeed;
      this.ugArray[1] -= this.speed * feverXSpeed;
    } else {
      this.ugArray[0] -= this.speed;
      this.ugArray[1] -= this.speed;
    }

    if (this.ugArray[0] <= -width) {
      this.ugArray[0] = width;
    }
    if (this.ugArray[1] <= -width) {
      this.ugArray[1] = width;
    }
    image(underground, this.ugArray[0], height / 2, width, height / 2);
    image(underground, this.ugArray[1], height / 2, width, height / 2);
  }
  //     addAboveHurdle() {
  //       if (int(random(0, 150)) == 0) {
  //         this.hurdleArray.push(width);
  //         this.hurdleNum++;
  //       }
  //       for (let i = 0; i < this.hurdleNum; i++) {
  //         image(hurdle, this.hurdleArray[i], 280, 30, 35);
  //         this.hurdleArray[i]--;
  //       }
  //     }
  //     addMagma() {
  //       if (int(random(0,150)) == 10) {
  //         this.magmaArr.push(width);
  //         this.magmaNum++;
  //       }
  //       for (let i = 0; i < this.magmaNum; i++) {
  //         image(magma, this.magmaArr[i], height / 2 + 150, 15, 60);
  //         this.magmaArr[i]--;
  //       }
  //     }
}
