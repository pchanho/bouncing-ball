import {
    Ball
} from './ball.js';

import {
    Block
} from './block.js';

import {
    Button
} from './button.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 40, 8);
        this.ball2 = new Ball(this.stageWidth, this.stageHeight, 40, 8);
        this.ball3 = new Ball(this.stageWidth, this.stageHeight, 40, 10);
        this.ball4 = new Ball(this.stageWidth, this.stageHeight, 40, 10);
        this.ball5 = new Ball(this.stageWidth, this.stageHeight, 40, 10);
        this.ball6 = new Ball(this.stageWidth, this.stageHeight, 40, 10);



        this.block = new Block(this.stageWidth/4, 100, this.stageWidth/2 - this.stageWidth/8, (this.stageHeight / 2) - 50  );

        // this.button = new Button(this.stageWidth/2, this.stageHeight/2, 150);


        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    //애니메이션을 실제로 구동시키는 함수
    animate() {

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, '#4285F4', this.block);
        this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight, '#DB4437', this.block);
        this.ball3.draw(this.ctx, this.stageWidth, this.stageHeight, '#F4B400', this.block);
        this.ball4.draw(this.ctx, this.stageWidth, this.stageHeight, '#0F9D58', this.block);
        this.ball5.draw(this.ctx, this.stageWidth, this.stageHeight, '#4b45ab', this.block);
        this.ball6.draw(this.ctx, this.stageWidth, this.stageHeight, '#81b144', this.block);


        // this.button.draw(this.ctx, '#161e38');

        window.requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
};
