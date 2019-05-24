class Bullet {
  constructor(i) {
    this.x = c.width/6-10;
    this.y = i*c.height/4+c.height/8;
    this.splice = false;
  }

  show() {
    P.foreground("fill")
    draw.beginPath();
    draw.arc(this.x, this.y, 10, 0, Math.PI*2);
    draw.fill();
    this.x+=10;
    if (this.x >= c.width+10 || this.splice) {
      return "spliceMe"
    }
  }
}

class Enemy {
  constructor(i) {
    ammo++;
    this.x = c.width;
    this.y = i*c.height/4+c.height/8;
  }
  show() {
    P.foreground("fill");
    draw.beginPath();
    draw.arc(this.x, this.y, 20, 0, Math.PI*2);
    draw.fill();
    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].y == this.y) {
        if (this.x-bullets[i].x < 15) {
          bullets[i].splice = true;
          return "spliceMe"
        }
      }
    }
    if (this.x < c.width/3) {
      running = false;
    }
    this.x-=c.width*(1/683);
  }
}
