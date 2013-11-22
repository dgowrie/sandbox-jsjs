// JS JS project

// ! Arrays

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