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

    // let q3 = this.q3.value;
    // console.log(q3);
    // let q4 = this.q4.value;
    // console.log(q4);
    // let q5 = this.q5.value;
    // console.log(q5);
    // let q6 = this.q6.value;
    // console.log(q6);
    // let q7 = this.q7.value;
    // console.log(q7);
    // let q8 = this.q8.value;
    // console.log(q8);
    // let q9 = this.q9.value;
    // console.log(q9);
    // let q10 = this.q10.value;
    // console.log(q10);

    // Add all converted responses 
    // -----> I added parseInt to convert the string to a number
	let answer = (parseInt(q1) + parseInt(q2));

	// store in a new input
	this.answer.value = answer;

    console.log(answer);

});
