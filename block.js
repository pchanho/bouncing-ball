export class Block {
    constructor(width, height, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx){
        const XGap = 80;
        const YGap = 60;

        ctx.fillStyle = '#161e38';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.shadowOffsetX = 12;
        ctx.shadowOffsetY = 12;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.fill();

        // ctx.fillStyle = '#190f3a';
        // ctx.beginPath();
        // ctx.moveTo(this.maxX, this.maxY);
        // ctx.lineTo(this.maxX - XGap, this.maxY + YGap);
        // ctx.lineTo(this.x - XGap, this.maxY + YGap);
        // ctx.lineTo(this.x, this.maxY);
        // ctx.fill();
        //
        // ctx.fillStyle = '#9d0919';
        // ctx.beginPath();
        // ctx.moveTo(this.x, this.y);
        // ctx.lineTo(this.x, this.maxY);
        // ctx.lineTo(this.x - XGap, this.maxY + YGap);
        // ctx.lineTo(this.x - XGap,  this.maxY + YGap - this.height);
        // ctx.fill();
    }
}
