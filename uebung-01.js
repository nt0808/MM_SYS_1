var students = ["Anna", "Matt", "Giovanni", "Julie", "Vlad", "Yoona"];
var newStudents = ["Leonard", "Mai", "Rana", "Melis"];

//1.1
//a
students.shift();
console.log(students);

//b)
students[3] = "Alex";
console.log(students);

//c)
students.splice(1, 3);
console.log(students);

//d)
console.log(students.toString());

//e)
students = students.concat(newStudents);
console.log(students);

var teams = [
  ["Ruby", "Angel"],
  ["Mia", "Yui", "Merve", "Agathe", ["Min"]],
  ["Nattapong", "Giulia", "Alva"],
];

//1.2
//a)
function findName(arr, str) {
  return arr.flat(Infinity).find((element) => element === str);
}

console.log(findName(teams, "Min"));

//b)
function findName2(arr, str) {
  const ind = arr.findIndex((element) => element.includes(str));
  return `${ind}: ${arr[ind]}`;
}

console.log(findName2(teams, "Giulia"));

//c)
function newteam(array) {
  array.forEach((array2) => {
    array2.reverse();
  });

  array = array.flat(Infinity);
  return array;
}

console.log(newteam(teams));
