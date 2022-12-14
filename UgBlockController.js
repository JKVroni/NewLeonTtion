class UgBlockController {
  constructor(ttion) {
    this.blocks = [];
    this.blockSpeed = 2;
    this.blockW = 30;
    this.bullets = [];
    // this.bulletsNum = 0;
    //this.blockH = 50;
    this.genCount = 0;
    this.pSth = false;
    this.ttion = ttion;
    this.mode = "WO_TTION";
  }

  moveBlocks() {
    if (this.genCount <= 0) {
      this.genCount = this.blockW;
      this.createBlocks();
      this.updateBlocks();
    }
    this.genCount -= this.blockSpeed;
    for (let block of this.blocks) {
      if (block.isCollided(this.ttion)) {
        if (block.blockType == "HURDLE") {
          ttion.getDamaged(10);
          // console.log("ttion damage - hurdle");
        }
        if (block.blockType == "BULLET" && !block.taken) {
          ttion.getBullet();
          block.taken = true;
        }
        if (block.blockType == "MAGMA") {
          ttion.getDamaged(10);
          // console.log("ttion damage - magma");
        }
      }
      if (leon.mode == "ONON") {
        block.moveFever(feverXSpeed);
      } else {
        block.move();
      }
    }
  }

  drawBlocks() {
    for (let block of this.blocks) {
      block.draw();
    }
  }

  createBlocks() {
    if (this.pSth) {
      this.pSth = false;
      return;
    }
    this.randomCreateBlock();
  }

  randomCreateBlock() {
    let r = parseInt(random(5));
    this.pSth = false;
    if (r == 0) {
      return;
    }
    if (r == 1) {
      this.pSth = true;
      this.createHurdle();
      return;
    }
    if (r == 2) {
      // this.pSth = true;
      this.createBulletnew();
      return;
    }
    if (r == 3) {
      this.createHurdle();
      this.pSth = true;
      return;
    }
    if (r == 4) {
      this.pSth = true;
      this.createBulletnew();
      this.createMagma();
      // this.pMagma = true;
      return;
    }
  }

  createHurdle() {
    this.blocks.push(new HurdleBlock(this.blockW));
  }

  createBulletnew() {
    this.blocks.push(new BulletBlock(this.blockW));
    this.bullets.push(new BulletBlock(this.blockW));
    this.bulletsNum++;
    //for (i = 0; i < this.bullets.length; i++) console.log(this.bullets[i].x);
  }

  createMagma() {
    this.blocks.push(new MagmaBlock(this.blockW));
  }

  updateBlocks() {
    for (let i = 0; i < 2; i++) {
      if (this.blocks.length > 0) {
        let firstBlock = this.blocks[0];
        if (firstBlock.x < -this.blocks) {
          this.blocks.shift();
          this.bullets.shift();
        }
      }
    }
  }

  resetPBlockInfo() {
    this.pHurdle = false;
    this.pBulletnew = false;
    this.pMagma = false;
    this.pCount = 0;
  }

  bulletEaten(x, y) {
    for (let i = 0; i < this.bullets.length; i++) {
      if (dist(this.bullets[i].x, 310, x + 30, y) < 10) {
        this.bullets[i].x = -999;
      }
    }
  }
}
