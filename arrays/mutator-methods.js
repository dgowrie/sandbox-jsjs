// ! ARRAYS

// @Section: Mutator Methods

var tasks;

tasks = [
	"Pay phone bill",
	"Write best-selling novel",
	"Walk the dog"
];

//
// @topic: pop
// @page: 30
tasks.pop();
//"Walk the dog"
tasks
//["Pay phone bill", "Write best-selling novel"]


//
// @topic: push
// @page: 30
tasks.push('Remember to walk the dog');
//3
tasks
//["Pay phone bill", "Write best-selling novel", "Remember to walk the dog"]


//
// @topic: reverse
// @page: 31
tasks.reverse();
//["Remember to walk the dog", "Write best-selling novel", "Pay phone bill"]

tasks.reverse();
//["Pay phone bill", "Write best-selling novel", "Remember to walk the dog"]


//
// @topic: shift
// @page: 31
tasks.shift();
//"Pay phone bill"
tasks
//["Write best-selling novel", "Remember to walk the dog"]



//
// @topic: sort
// @page: 31
tasks.sort();
//["Pay the gas bill", "Remember to walk the dog", "Write best-selling novel"]



//
// @topic: splice
// @page: 32
var tasks = [
	"Pay phone bill",
	"Write best-selling novel",
	"Walk the dog"
];

tasks.splice(1, 1, "World domination");
//["Write best-selling novel"]

tasks;
//["Pay phone bill", "World domination", "Walk the dog"]

// Splice on multiple items
var tasks = [
	"Pay phone bill",
	"Write best-selling novel",
	"Walk the dog"
];

tasks.splice(1, 1, "World domination", "Rotate tires", "Hire hit squad");
//["Write best-selling novel"]

tasks;
//["Pay phone bill", "World domination", "Rotate tires", "Hire hit squad", "Walk the dog"]

// Splice out without adding
var tasks, task;

tasks = [
	"Pay phone bill",
	"Write best-selling novel",
	"Walk the dog"
];
task = tasks.splice(1, 1);

alert("REMINDER! Don't forget to: " + task);

tasks;
//["Pay phone bill", "Walk the dog"]
task;
//["Write best-selling novel"]


//
// @topic: unshift
// @page: 34
var tasks, len;

tasks = [
	"Pay phone bill",
	"Write best-selling novel",
	"Walk the dog"
];
len = tasks.unshift("Defeat nemesis", "Pick up dry cleaning");
alert("You now have " + len + " tasks to complete: " + tasks.join(", "));

tasks;
//["Defeat nemesis", "Pick up dry cleaning", "Pay phone bill", "Write best-selling novel", "Walk the dog"]

len;
//5




