class Component {
  constructor(x, y, w, h, ctx, src) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = src;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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

  crashWith(item) {
    return (
      this.bottom() > item.top() &&
      this.top() < item.bottom() &&
      this.right() > item.left() &&
      this.left() < item.right()
    );
  }
}
