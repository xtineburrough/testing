// main.js

console.log("Hello, World!");
document.body.style.transform = `rotate(90deg)`;

// Rotate the body 90 degrees
let rotation = 0;
document.addEventListener("click", function () {
let min = 10;
let max = 40;
rotation += Math.random() * (max - min) + min;
document.body.style.transform = `rotate(${rotation}deg)`;
});
