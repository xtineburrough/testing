// main.js

console.log("Hello, World!");
let myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", (event) => {
    //prevent default form behavior
    event.preventDefault();

    //create variables for question scores (field inputs)
    let q1 = this.q1.value;
    console.log(q1);

    let q2 = this.q2.value;
    console.log(q2);

    //duplicate the variable 8 more times and change its name in prompt 5.2

    let q3 = this.q3.value;
    console.log(q3);
    let q4 = this.q4.value;
    console.log(q4);
    let q5 = this.q5.value;
    console.log(q5);
    let q6 = this.q6.value;
    console.log(q6);
    let q7 = this.q7.value;
    console.log(q7);
    let q8 = this.q8.value;
    console.log(q8);
    let q9 = this.q9.value;
    console.log(q9);
    let q10 = this.q10.value;
    console.log(q10);

	// For odd items: subtract one from the user response.
	q1 -= 1;
	q3 -= 1;
	q5 -= 1;
	q7 -= 1;
	q9 -= 1;

	// For even-numbered items: subtract the user responses from 5
	q2 = 5 - q2;
	q4 = 5 - q4;
	q6 = 5 - q6;
	q8 = 5 - q8;
	q10 = 5 - q10;

	// Add all converted responses; multiply that total by 2.5.
	let answer = (parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10)) * 2.5;

	// store in a new input
	this.answer.value = answer;
});

