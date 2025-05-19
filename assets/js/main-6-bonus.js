// main.js

// (Owen add that finger pointer icon here) Start Module 6.3 by writing a custom function to generate a random number
function randomNumber(min, max) {
    return (Math.random() * (max - min) + 1) + min;
}

//Exercise 6.2.2
// Rotate the body 90 degrees
//let rotation = 0;
//document.addEventListener("click", function () {
//    let min = 10;
//    let max = 40;
//    rotation += randomNumber(1,200);
//    document.body.style.transform = `rotate(${rotation}deg)`;
//});

//Exercise 6.3.3
let divs = document.querySelectorAll(".grid-container div");
function randomize() {
    console.log(divs.length, "randomize!");
    divs.forEach(function (div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);
        div.style.transform =
            `scale(${scale}) 
 translate(${translateX}%, ${translateY}%) 
 rotate(${rotate}deg)`;
    })
}
//randomize();
//Conclude chapter content 
// document.addEventListener("click", randomize); 

//Bonus!
 let lastDiv = document.querySelectorAll("div .last");
function colorizeLast() {
   console.log(lastDiv.length, "color!");
   lastDiv.forEach(function (div) {
    div.style.color = `(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255))`;
   })
}

document.addEventListener("click", function(){ 
   randomize()
   colorizeLast()
})
