var wisconsinObject = {
	name : 'Wisconsin',
	founded : 1848,
	'State Bird' : 'Robin',
	isCold : true,
};


for (var key in wisconsinObject) {
	var value = wisconsinObject[key];
	// console.log(key);
	// console.log(value);
}

var wisconsinArray = ["Packers", "cheese", "cheese curds", "cheese heads"];

for (var index in wisconsinArray) {
	var entry = wisconsinArray[index];
	// console.log(index);
	// console.log(entry);
}


for (var index = 0; index<wisconsinArray.length; index++){
	var entry = wisconsinArray[index];
	// console.log(index);
	// console.log(entry);
}
