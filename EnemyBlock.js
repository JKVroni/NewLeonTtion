class Enemy {
  constructor(_w, _y, _type) {
    if (_type == "UP") {
      this.x = width + _w + 30;
      this.y = _y;
    }
    if (_type == "DOWN") {
      this.x = width + _w;
      this.y = _y + 20;
    }
    this.w = _w;
    this.h = 100;
    this.speed = 2;
    this.type = _type;
    this.bulletFired = false;
    this.disapper = false;
  }
  move() {
    this.x -= this.speed;
  }
  moveFever(feverSpeed) {
    this.x -= this.speed * feverSpeed;
  }
  draw() {
    if (!this.disapper) {
      image(enemyImg, this.x, this.y, this.w, this.h);
    }
  }
  fire() {
    if (!this.disapper) {
      this.bulletFired = true;
    }
  }
  getShot() {
    this.disapper = true;
  }
}

// class DownEnemy {
//   constructor(_w, _y) {
//     this.x = width + _w;
//     this.y = _y;
//     this.w = _w;
//     this.speed = 1;
//   }
//   move() {
//     this.x -= this.speed;
//   }
//   draw() {
//     image(enemyImg, this.x, this.y, this.w, 100);
//   }
// }

class EnemyBulletV2 {
  constructor(_x, _y, img) {
    this.x = _x;
    this.y = _y + 10;
    this.speed = 5;
    this.img = img;
    this.disapper = false;
  }
  move() {
    this.x -= this.speed;
  }
  moveFever(feverSpeed) {
    this.x -= this.speed * feverSpeed;
  }
  draw() {
    if (!this.disapper) {
      image(this.img, this.x, this.y, 8.16, 4.54);
      if (enemyShotSound.isPlaying() == false) {
        enemyShotSound.play();
      }
    }
  }
  shot(leon) {
    if (!this.disapper) {
      let xIn = this.x > leon.x && this.x < leon.x + leon.w;
      let yIn = this.y > leon.y && this.y < leon.y + leon.h;
      if (xIn && yIn) {
        this.disapper = true;
        leon.getDamaged(10);
      }
    }
  }
}

// constructor() {
//   this.enemyArrX = [];
//   this.enemyArrY = [];
//   this.enemyNum = 0;
//   this.enemyBulletXs = [];
//   this.enemyBulletYs = [];
//   this.enemyBulletNum = 0;
// }
// addEnemy() {
//   if (frameCount % int(random(100,500)) == 0) {
//     this.enemyArrX.push(random(600,1600));
//     this.enemyArrY.push(140 + random(-5, 5));
//     this.enemyNum++;
//   }
// }
// showEnemy() {
//   for (let i = 0; i < this.enemyNum; i++) {
//     this.enemyArrX[i]--;
//     image(enemyImg, this.enemyArrX[i], this.enemyArrY[i], 75, 75);
//   }
// }

// shotEnemyNT() {
//   for (let i = 0; i < this.enemyNum; i++) {
//     for (let i = 0; i < leonnT.numBullets; i++) {
//       if (this.enemyArrX[i] < leonnT.bulletXs[i]) {
//         this.enemyArrY[i] = -650;
//       }
//     }
//   }
// }
// shotEnemyWT() {
//   for (let i = 0; i < this.enemyNum; i++) {
//     for (let i = 0; i < leonwT.numBullets; i++) {
//       if (this.enemyArrX[i] < leonwT.bulletXs[i]) {
//         this.enemyArrY[i] = -650;
//       }
//     }
//   }
// }

// enemyGunPush() {
//   for (let i = 0; i < this.enemyNum; i++) {
//     if (this.enemyArrX[i] <= 550) {
//      if (frameCount % 100 == 0) {
//        this.enemyBulletXs.push(this.enemyArrX[i]);
//        this.enemyBulletYs.push(this.enemyArrY[i]);
//        this.enemyBulletNum += 1;
//      }
//     }
//   }
// }

// enemyGun() {
//   for (let i = 0; i < this.enemyBulletNum; i++) {
//     image(bullet, this.enemyBulletXs[i], this.enemyBulletYs[i]+30, 8.16, 4.54);
//     this.enemyBulletXs[i] -= 5;
//   }
// }
