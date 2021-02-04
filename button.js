export class Button {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw(ctx, color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.fill();
    }
}
