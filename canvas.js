const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

const random = (number) => {
    return Math.floor(Math.random() * number);
};

const draw = (n = 100) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
};

addEventListener("load", () => {
    setInterval(() => {
        draw();
    }, 500);
});

document.addEventListener("resize", (e) => {
    canvas.width=document.documentElement.clientWidth
    canvas.height=document.documentElement.clientHeight
})
