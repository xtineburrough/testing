// main.js

console.log("Hello, World!");
let myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let q1 = this.q1.value;
    console.log(q1);

    //duplicate the variable 9 more times and change its name
    let q2 = this.q2.value;
    console.log(q2);
    let q3 = this.q3.value;
    console.log(q3);
    let q4 = this.q4.value;
    console.log(q3);
    let q5 = this.q5.value;
    console.log(q3);
    let q6 = this.q6.value;
    console.log(q3);
    let q7 = this.q7.value;
    console.log(q3);
    let q8 = this.q8.value;
    console.log(q3);
    let q9 = this.q9.value;
    console.log(q3);
    let q10 = this.q10.value;
    console.log(q3);

    // Add all submitted values
	let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10);

	// store in a new input
	this.answer.value = answer;

    console.log(answer);

});
