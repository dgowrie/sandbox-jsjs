// ! ARRAYS

// @Section: Accessor Methods

//
// @topic: concat
// @page: 35
var arr1, arr2, arr3, arr4;

arr1 = ["Pay phone bill"];
arr2 = ["Write best-selling novel"];
arr3 = ["Walk the dog"];
arr4 = arr1.concat(arr2, arr3);

arr1;
//["Pay phone bill"]

arr2;
//["Write best-selling novel"]

arr3;
//["Walk the dog"]

arr4;
//["Pay phone bill", "Write best-selling novel", "Walk the dog"]


//
// @topic: join
// @page: 36
var nums;

nums = [4, 8, 15, 16, 23, 42];
alert("The winning lottery numbers are: " + nums.join(", "));


//
// @topic: slice
// @page: 37
var tasks, todo, cleanup, noCleaning;

tasks = [
	"Fly a kite",
	"Save the world",
	[
		"Clean bathroom",
		"Clean garage",
		"Clean up act"
	]
];

todo = tasks.slice(0); // makes a copy of tasks - i.e. from index[0] to end (b/c the optional second 'terminate at this index' parameter was not supplied)

cleanup = tasks.slice(-1); // copies only the nested array (i.e. the last indexed item)

noCleaning = tasks.slice(0, 2); // copies only the first two items

tasks;
// ["Fly a kite", "Save the world", 
// Array[3]
// 0: "Clean bathroom"
// 1: "Clean garage"
// 2: "Clean up act"
// length: 3
// __proto__: Array[0]
// ]

todo;
// ["Fly a kite", "Save the world", 
// Array[3]
// 0: "Clean bathroom"
// 1: "Clean garage"
// 2: "Clean up act"
// length: 3
// __proto__: Array[0]
// ]

cleanup;
// [
// Array[3]
// 0: "Clean bathroom"
// 1: "Clean garage"
// 2: "Clean up act"
// length: 3
// __proto__: Array[0]
// ]

noCleaning;
// ["Fly a kite", "Save the world"]


//
// @topic: toString
// @page: 38
var arr = ["These", "words", "are", "separated", "by", "commas"];

arr.toString();
// returns: "These,words,are,separated,by,commas"


var arrMixed = ["These", 8, "words", "and", "numbers", "are", "separated", "by", "commas"];

arrMixed.toString();
// "These,8,words,and,numbers,are,separated,by,commas"


var arrMixedObjsArrays = ["a", "b", "c", 100, 200, 300, [1,2,3], {"foo": "bar"}];

arrMixedObjsArrays.toString();
// "a,b,c,100,200,300,1,2,3,[object Object]"
// flattens out nested arrays, only outputs [object Object] for object literals



//
// @topic: indexOf
// @page: 39
array.indexOf(searchElement, [fromIndex]);

var alphabet; 

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alert("The letter 'm' is at index: " + alphabet.indexOf("m"));
// alert includes "12"

alert("The letter 'm' is at index: " + alphabet.indexOf("m", 10)); // optionally start from index [10]
// same alert result, but the fromIndex option can be performant in large arrays


//
// @topic: lastIndexOf
// @page: 40
array.lastIndexOf(searchElement, [fromIndex]);
// just like indexOf but begins search from the end of the array, thus will find last occurence of the searchElement



