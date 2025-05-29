// main.js
console.log("Hello, World!");

// global
let viz = document.querySelector("svg");
let countEle = document.querySelector("#count");
countEle.addEventListener("input", generate);
let scaleEle = document.querySelector("#scale");
scaleEle.addEventListener("input", generate);



// generate
let colors = ["dad7cd", "a3b18a", "588157", "3a5a40", "344e41"]
function generate() {
    //console.log(Math.random());
    let output = '';
    //let count = randomInt(6, 12);
    let count = countEle.valueAsNumber ||randomInt(6,12);
    let size = window.innerWidth * .12;
    for (let i = 0; i < count; i++) {

        // parameters
        let w = randomInt(size * .8, size * 1.2)* scaleEle.valueAsNumber;
        let h = randomInt(size * .8, size * 1.2)* scaleEle.valueAsNumber;

        //Viewport center and offset
        let centerX = (window.innerWidth * .5);
        let centerY = (window.innerHeight * .5);
        let offsetX = (window.innerWidth * .25);
        let offsetY = (window.innerHeight * .25);
        let x = randomInt(centerX - offsetX, centerX + offsetX) - (w * .5);
        let y = randomInt(centerY - offsetY, centerY + offsetY) - (h * .5);

//         let style = `
// position: absolute;
// transform: translate(${x}px,${y}px) rotate(${randomInt(-1, 1)}deg);
// width: ${w}px;
// height: ${h}px;
// background-color: ${randomHex()};
// `;
        //output += `<div style="${style}"></div>`;

        let min = .75;
        let max = .9;

        let points = `
${-randomInt(w * min, w * max)},${-randomInt(h * min, h * max)} 
${randomInt(w * min, w * max)},${-randomInt(h * min, h * max)} 
${randomInt(w * min, w * max)},${randomInt(h * min, h * max)} 
${-randomInt(w * min, w * max)},${randomInt(h * min, h * max)} 
`;

        output += `<polygon stroke="none" points="${points}" 
transform ="translate(${x},${y}) rotate(${randomInt(-1, 1)})" 
fill="#${randomFromArray(colors)}" />`;


        viz.innerHTML = output;

    }
}
// listeners
window.addEventListener("load", generate);
document.addEventListener("click", generate);

// helpers
function randomInt(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function randomHex() {
//     //copilot returned the following code
//     return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
// }
function randomHex() {
    let hex = "", chars = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        hex += chars[randomInt(0, chars.length - 1)];
    }
    return hex;
}
function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}