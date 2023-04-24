class Controls {
  constructor(player) {
    this.player = player;
  }

  keyboardEvents() {
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          this.player.speedY -= 1;
          break;
        case "ArrowDown":
          this.player.speedY += 1;
          break;
        case "ArrowLeft":
          this.player.speedX -= 1;
          break;
        case "ArrowRight":
          this.player.speedX += 1;
          console.log("here");
          break;
      }
    });

    document.addEventListener("keyup", () => {
      this.player.speedX = 0;
      this.player.speedY = 0;
    });
  }
}
