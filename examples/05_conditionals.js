/*
 * Conditionals
*/

function evaluate (x) {
	var y = 1;

	if (x == y) {
		console.log('They are the same');
	}
}
	// evaluate(0);
	// evaluate(1);
	// evaluate('1');


function evaluateStrict (x) {
	var y = 1;

	if (x === y) {
		console.log('They are the same');
	} else {
		console.log('They are not the same');
	}
}
	// evaluateStrict('1')

function evaluateMultiple (x) {
	var y = 1,
		z = 100;

	if (x === y) {
		return 'they are the same';
	}
	if (x > y && x < z) {
		return 'x is between y and z';
	}
	if (x < y || x > z) {
		return 'x is not between y and z';
	}
}

var a = evaluateMultiple(1);
var b = evaluateMultiple(50);
var c = evaluateMultiple(200);

	// console.log(a);
	// console.log(b);
	// console.log(c);
