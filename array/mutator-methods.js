// JS JS project

// ! ARRAYS

var tasks;

tasks = [
	"Pay phone bill",
	"Write best-selling novel",
	"Walk the dog"
];


tasks.pop();
//"Walk the dog"
tasks
//["Pay phone bill", "Write best-selling novel"]

tasks.push('Remember to walk the dog');
//3
tasks
//["Pay phone bill", "Write best-selling novel", "Remember to walk the dog"]

tasks.reverse();
//["Remember to walk the dog", "Write best-selling novel", "Pay phone bill"]

tasks.reverse();
//["Pay phone bill", "Write best-selling novel", "Remember to walk the dog"]

tasks.shift();
//"Pay phone bill"
tasks
//["Write best-selling novel", "Remember to walk the dog"]

tasks.push('Pay the gas bill')
//3
tasks
//["Write best-selling novel", "Remember to walk the dog", "Pay the gas bill"]

tasks.sort();
//["Pay the gas bill", "Remember to walk the dog", "Write best-selling novel"]

// ! Splice
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


// ! Unshift
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




