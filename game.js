class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.controls = null;
    this.intervalId = null;
    this.frames = 0;
    this.enemies = [];
  }

  start() {
    //this.player = new Component(0, 200, 75, 75, this.ctx);
    this.controls = new Controls(this.player);
    this.intervalId = setInterval(this.update, 10);
  }
  update = () => {
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    //this.updateEnemies();
    this.checkGameOver();
  };
  stop() {
    clearInterval(this.intervalId);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  checkGameOver() {
    const crashed = this.enemies.some((enemy) => {
      return this.player.crashWith(enemy);
    });
    if (crashed) {
      this.stop();
      this.fillStyle = "red";
      this.ctx.font = "72px Arial";
      this.ctx.fillText("Game Over", 0, this.height / 2);
    }

  }

  //    clearCanvas() {
  //         ctx.clearRect(0, 0, 600, 600); // 700 and 450 are canvas width and height
  //       }

  //    drawCanvas(x, y, w, h, color) {
  //         ctx.fillStyle = color;
  //         ctx.fillRect(x, y, w, h);
  //       }

  /* updateEnemies() {
      for (let i = 0; i < this.enemies.length; i++) {
          this.enemies[i].x -= 1; //enemy goes more to the right
          this.enemies[i].draw(); //continues to draw enemy
      }
  
      if(this.frames % 200 === 0) {
          let x = 1200;
          let minHeight = 20; //at least 20px of min height
          let maxHeight = 400; //max height of 400px
  
          let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
          
          let minGap = 95;
          let maxGap = 200;
  
          let gap = Math.floor(Math.random() * (maxGap - minGap +1) + minGap);
  
          //Top obstacle
          this.enemies.push(new Component(x, 0, 50, height, 'green', this.ctx));
  
          //Bottom obstacle
          this.enemies.push(new Component(x, height + gap, 50, x-height-gap, 'blue', this.ctx));
      }
  
  } */

}


