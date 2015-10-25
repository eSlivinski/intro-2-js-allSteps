/*
 *	Arrays
*/
var x, y, z;

var stringArray = ["text", "moreText", "stillMoreText"],
	numberArray = [0, 1, 2, 3],
	booleanArray = [true, false, true],
	variableArray = [x, y, z],
	mixedArray = ["text", 1, false, y, numberArray];

/*
 * Accessing Arrays
*/
 var wisconsinArray = ["Packers", "cheese", "cheese curds", "cheese heads"];

	console.log(wisconsinArray);
	//console.log(wisconsinArray[1]);
	//console.log(wisconsinArray[0]);

// wisconsinArray[4] = "Lizzi";
// wisconsinArray[3] = "Bon Iver";
// wisconsinArray.push("Badgers");

	// console.log(wisconsinArray)

/*
 * Objects
*/
var basicObject = { key : "value" };

var advancedObject = {
	'string key' : true,
	escapedKey : 'works too',
	numberValue : 1234
};

/*
 * Accessing Objects
*/
var wisconsinObject = {
	name : 'Wisconsin',
	founded : 1848,
	'State Bird' : 'Robin',
	isCold : true,
};
	// console.log(wisconsinObject['name']);
	// console.log(wisconsinObject.isCold);

wisconsinObject.capital = 'Madison';
wisconsinObject['State Soil'] = 'Antigo Silt Loam';

	// console.log(wisconsinObject);
