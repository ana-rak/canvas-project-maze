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
    this.gold = [];
    this.score = 0;
    this.hitSound = 0;
    this.backgroundMusic = new Audio("./sound/Indiana_Jones.mp3");
    this.backgroundMusic.loop = false;
  }

  start() {
    this.controls = new Controls(this.player);
    this.intervalId = setInterval(this.update, 10);
    this.controls.keyboardEvents();
    this.backgroundMusic.play();
  }
  drawScore() {
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${score}`, 8, 20);
  }
  update = () => {
    this.frames++;
    this.sound = 0;
    this.clear();
    this.player.newPos();
    this.player.draw();
    this.updateEnemies();
    this.updateGold();
    this.ctx.font = "20px arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Score: ${this.score}`, 10, 590);
    this.checkGameOver();
    this.hitSound.play();
  };
  stop() {
    clearInterval(this.intervalId);
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
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
      this.ctx.fillStyle = "red";
      this.ctx.font = "72px Arial";
      this.ctx.fillText("Game Over", 30, 60);
      setTimeout(() => {
        hitSound.play();
      }, 500);
      this.backgroundMusic.stop();
    }
    this.gold.map((gold, i) => {
      if (this.player.crashWith(gold)) {
        this.score += 10;
        this.gold.splice(i, 1);
      }
      if (this.score === 100) {
        this.stop();
        this.ctx.fillStyle = "gold";
        this.ctx.font = "72px Arial";
        this.ctx.fillText("You won!", 30, 60);
      }
    });
  }

  updateEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].x -= 1; //enemy goes more to the right
      this.enemies[i].draw(); //continues to draw enemy
    }

    if (this.frames % 200 === 0) {
      let x = 200;
      let minHeight = 20; //at least 20px of min height
      let maxHeight = 400; //max height of 400px

      let height = Math.floor(
        Math.random() * (maxHeight - minHeight + 1) + minHeight
      );

      let minGap = 95;
      let maxGap = 200;

      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      //Top obstacle
      this.enemies.push(
        new Component(
          this.ctx.canvas.width,
          height / 2,
          75,
          75,
          this.ctx,
          "./images/snake5.png"
        )
      );

      //Bottom obstacle
      this.enemies.push(
        new Component(
          this.ctx.canvas.width,
          height + gap,
          75,
          75,
          this.ctx,
          "./images/snake5.png"
        )
      );
    }
  }

  updateGold() {
    for (let i = 0; i < this.gold.length; i++) {
      this.gold[i].x -= 1; //enemy goes more to the right
      this.gold[i].draw(); //continues to draw enemy
    }

    if (this.frames % 200 === 0) {
      let x = 200;
      let minHeight = 20;
      let maxHeight = 400;

      let height = Math.floor(
        Math.random() * (maxHeight - minHeight + 1) + minHeight
      );

      let minGap = 2;
      let maxGap = 400;

      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      this.gold.push(
        new Component(
          this.ctx.canvas.width,
          height + gap,
          75,
          75,
          this.ctx,
          "./images/gold.png"
        )
      );
    }
  }
}
