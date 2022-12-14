class EnemyBlockController {
  constructor() {
    // 적군 등장 및 이동
    this.blocks = [];
    this.blockSpeed = 2;
    this.blockW = 100;
    this.blockY = 120;
    this.genCount = 0;
    this.pEnemy = false;

    // 적군 사격
    this.enemyBullets = [];
    // this.img_bullet = img_bullet;
    // this.enemyBulletXs = [];
    // this.enemyBulletYs = [];
    // this.enemyBulletnum = 0;
  }
  setLeon(leon) {
    this.leon = leon;
  }

  moveBlocks() {
    if (this.genCount <= 0) {
      this.genCount = this.blockW;
      this.createBlocks();
      this.updateBlocks();
    }
    if (this.leon.mode == "ONON") {
      this.genCount -= this.blockSpeed * feverXSpeed;
    } else {
      this.genCount -= this.blockSpeed;
    }

    for (let block of this.blocks) {
      // ENEMY
      if (this.leon.mode == "ONON") {
        block.moveFever(feverXSpeed);
      } else {
        block.move();
      }
      // block.move();
      if (block.x < width * random(0.3, 0.7)) {
        if (!block.bulletFired && !block.disapper) {
          block.fire();
          // console.log(block.x, block.y, this.img_bullet);
          let newEB = new EnemyBulletV2(block.x, block.y, enemyBullet);
          // console.log(block.x, block.y, enemyBullet);
          // console.log(newEB);
          this.enemyBullets.push(newEB);
        }
      }
    }
    for (let b of this.enemyBullets) {
      if (this.leon.mode == "ONON") {
        b.moveFever(feverXSpeed);
      } else {
        b.move();
      }
      // b.move();
      b.shot(this.leon);
    }
  }

  drawBlocks() {
    for (let block of this.blocks) {
      block.draw();
    }
    for (let b of this.enemyBullets) {
      b.draw();
    }
  }

  createBlocks() {
    if (this.pEnemy) {
      this.pEnemy = false;
      return;
    }
    this.randomCreateBlock();
  }

  randomCreateBlock() {
    let r = parseInt(random(5));
    this.pEnemy = false;
    if (r <= 1) {
      return;
    }
    if (r == 2) {
      this.createDownEnemy();
      // this.createDownEnemyBullet();
      this.pEnemy = true;
      return;
    }
    if (r == 3) {
      this.createUpEnemy();
      // this.createUpEnemyBullet();
      this.pEnemy = true;
      return;
    }
    if (r == 4) {
      this.createUpEnemy();
      this.createDownEnemy();
      // this.createUpEnemyBullet();
      // this.createDownEnemyBullet();
      this.pEnemy = true;
      return;
    }
  }

  createUpEnemy() {
    this.blocks.push(new Enemy(this.blockW, this.blockY, "UP"));
  }

  createDownEnemy() {
    this.blocks.push(new Enemy(this.blockW, this.blockY, "DOWN"));
    // this.blocks.push(new DownEnemy(this.blockW, this.blockY + 20));
  }

  updateBlocks() {
    if (this.blocks.length > 0) {
      let newBlock = this.blocks[0];
      if (newBlock.x < -this.blockW) {
        this.blocks.shift();
      }
    }

    if (this.enemyBullets.length > 0) {
      let firstBullet = this.enemyBullets[0];
      if (firstBullet.x < -this.blockW) {
        this.enemyBullets.shift();
      }
    }
  }

  resetPBlockInfo() {
    this.pEnemy = false;
    this.pCount = 0;
  }

  // createUpEnemyBullet() {
  //   this.blocks.push(
  //     new EnemyBullet(this.blockW, this.blockY, this.img_bullet)
  //   );
  // }

  // createDownEnemyBullet() {
  //   this.blocks.push(
  //     new EnemyBullet(this.blockW, this.blockY, this.img_bullet)
  //   );
  // }
  // gunPush() {
  //   for (let i = 0; i < this.blocks.length; i++) {
  //     if (frameCount % 100 == 0) {
  //       this.enemyBulletXs.push(this.blocks[i]);
  //       this.enemyBulletnum++;
  //     }
  //   }
  // }

  // gunShot() {
  //    for (let i = 0; i < this.enemyBulletNum; i++) {
  //     image(bullet, this.enemyBulletXs[i], 100, 100, 100);
  //     this.enemyBulletXs[i] -= 5;
  //   }
  // }
}
