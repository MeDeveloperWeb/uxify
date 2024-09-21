export function Bubble(width, height) {
  this.x = Math.random() * width;
  this.y = height + 100;
  this.radius = Math.random() * 30 + 10;
  this.speed = Math.random() * 2 + 0.5;
  this.distance;
  this.color = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`; // Semi-transparent white
  this.vx = 0;
  this.vy = 0;

  const update = (mouse) => {
    this.y -= this.speed;
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);

    // Displacement effect
    if (this.distance < mouse.radius + this.radius) {
      if (this.radius < 50) this.radius *= 1.01;
      if (mouse.x < this.x && this.x < width - this.radius * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.radius * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < height - this.radius * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.radius * 10) {
        this.y -= 10;
      }
    }

    if (this.distance < this.radius + mouse.radius) {
      if (!this.counted) {
        this.counted = true;
        bubblesArray.splice(this, 1);
      }
    }

    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Dampen velocity
    this.vx *= 0.95;
    this.vy *= 0.95;
  };
  const draw = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.stroke();
  };

  return {
    update,
    draw
  };
}
