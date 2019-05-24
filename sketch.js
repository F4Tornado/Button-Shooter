const c = document.getElementById("cnv");
const draw = c.getContext("2d");
const bullets = [];
const enemies = [];
let ammo = 0;
let running = true;

function setup() {
  loadColors(draw);
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  requestAnimationFrame(drawLoop);
}

function drawLoop() {
  P.background("fill")
  draw.fillRect(0, 0, c.width, c.height);
  P.foreground("fill")
  P.foreground("stroke")

  draw.lineWidth = 8
  draw.beginPath();
  draw.moveTo(c.width/3, 0);
  draw.lineTo(c.width/3, c.height);
  draw.stroke()

  for (let i = 0; i < 6; i++) {
    draw.fillRect(0, i*c.height/4+c.height/16, c.width/4, c.height/8)
  }
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].show()) {
      bullets.splice(i, 1);
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].show()) {
      enemies.splice(i, 1);
    }
  }
  if (running) {
    requestAnimationFrame(drawLoop);
  } else {
    draw.font = "20px sans-serif";
    draw.fillText("You died", c.width/2, c.height/2)
  }
}

window.onload = () => {
  setup()
};

window.onresize = () => {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (ammo > 0) {
    if (e.key == "`" || e.key == "~") {
      bullets.push(new Bullet(0));
      ammo--;
    } else if (e.key == "Tab") {
      bullets.push(new Bullet(1))
      e.preventDefault()
      ammo--;
    } else if (e.key == "CapsLock") {
      bullets.push(new Bullet(2))
      e.preventDefault()
      ammo--
    } else if (e.key == "Shift") {
      bullets.push(new Bullet(3));
      ammo--
    }
  }
})

function pushEnemy(t) {
  enemies.push(new Enemy(Math.floor(Math.random()*4)))
  setTimeout(pushEnemy, t-1, t-1)
}

setTimeout(pushEnemy, 1000, 1000)
