class Component {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = "./daco.png";
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, 50, 50);

    // const enemyImg = new Image();
    // img.addEventListener("load", () => {
    //   this.img = img;
    // });
    // img.src = "./images/snake.png";
    // this.ctx.drawImage(img, 50, 50, 50, 50);
  }
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }

  crashWith(enemy) {
    return (
      this.bottom() > enemy.top() &&
      this.top() < enemy.bottom() &&
      this.right() > enemy.left() &&
      this.left() < enemy.right()
    );
  }
}
