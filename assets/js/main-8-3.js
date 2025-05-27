// main.js
console.log("Hello, World!");

// global
let viz = document.querySelector("svg");

// generate
function generate() { 
//console.log(Math.random());
let output = '';
let count = randomInt(6, 12);
let size = window.innerWidth * .12;
for (let i = 0; i < count; i++) {
    
    // parameters
let w = randomInt(size * .8, size * 1.2);
let h = randomInt(size * .8, size * 1.2);

    //Viewport center and offset
let centerX = (window.innerWidth * .5);
let centerY = (window.innerHeight * .5);
let offsetX = (window.innerWidth * .25);
let offsetY = (window.innerHeight * .25);
let x = randomInt(centerX - offsetX,centerX + offsetX)-(w *.5);
let y = randomInt(centerY - offsetY,centerY + offsetY)-(h *.5);

let style = `
position: absolute;
transform: translate(${x}px,${y}px) rotate(${randomInt(-1,1)}deg);
width: ${w}px;
height: ${h}px;
background-color: ${randomHex()};
`;
//output += `<div style="${style}"></div>`;
let points = `0,0 100,0 100,100 0,100`;
output += `<polygon stroke="none" points="${points}" style="${style}" fill="#${randomHex()}" />`;
style="${style}" fill="#${randomHex()}" />`;

viz.innerHTML = output;

}

// listeners
window.addEventListener("load", generate);
document.addEventListener("click", generate);

// helpers
function randomInt(min=1, max=100) { 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomHex() {
    //copilot returned the following code
     return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}