/*
 * Functions
*/
function myFunction() {
	console.log("Hello World");
}
	myFunction();



function withParameters(parameterOne, parameterTwo) {
	console.log(parameterOne + parameterTwo);
}
	// withParameters("Hello ", "Again");
	// withParameters(1, 3);



function withReturn(){
	var x = (7 / 56) * 100;

	x = x.toString();
	x = x + ' %';

	return x;
}

var theAnswer =  withReturn();
	// console.log(theAnswer);


/*
 * Functions: Scope
*/

function hasScope(){
	var localVar = "I am inside the function";
	console.log(localVar);
}
	// hasScope();
	// console.log(localVar);		// Returns error
