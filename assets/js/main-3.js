// main.js

console.log("Hello, World!");
let targetElement = document.querySelector("h2");
targetElement.addEventListener("mouseover", function () {
    console.log(this.innerText);
    this.innerText = "TIME";
    this.style = "cursor: wait";
});
targetElement.addEventListener("mouseout", function () {
    this.innerText = "IKEA";
    this.style = "cursor: pointer";
});
