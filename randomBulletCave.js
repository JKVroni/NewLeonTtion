class randomBulletCave {
  constructor(){
      this.x = [];
      this.y = [];
      this.numBullets = 0;
      // this.ttionBulletNum = 0;
      this.ttionInt = false;
  }
  spawn(){
    if (frameCount % int(random(100,150)) == 0) {
        this.x.push(random(30,570));
        this.y.push(random(280,330));
        this.numBullets++;
      }
}
eaten(x, y) {
  for (let i = 0; i < this.numBullets; i++) {
    if (dist(this.x[i], this.y[i], x, y+20) < 20) {
      this.x[i] = -999;
      ttion.getBullet();
      // return this.ttionInt != this.ttionInt;
      // ttion.bulletNum++; 
      // if(stage == 5) {
      //   ttion.getBullet();
      // }
      // return this.ttionIn = true;
    }
  }
  // if(this.x == -999) ttion.getBullet();
  // ttion.bulletNum += this.numBullets;
}
 
  show() {
      for (let i = 0; i < this.numBullets; i++) {
        image(bullet, this.x[i], this.y[i], 10, 20);
      }
    }
}