var course = {
  title: "mmsys1",
  room: 10,
  description: "Schwerpunkt: Grundlagen von JavaScript",
  credits: 4,
  num_students: 5,
};

//2.1
//a
delete course.description;
console.log(course);

//b
course["room"] = 20;
console.log(course);

//c
course["lecturer"] = "Rose";
console.log(course);

//d
arrcourse = Object.entries(course);
console.log(arrcourse);

//e
var moreCourseInformations = {
  building: "E12",
  students: ["Anna", "Tim", "Lukas", "Julia", "Lena"],
};

course = { ...course, ...moreCourseInformations };
console.log(course);

//2.2
//a
var library = {
  books: { total: 18000, subjects: 193400, digital: 12200 },
  cds: { total: 1320, subjects: 2339 },
  videos: { total: 9008, subjects: 8273, digital: 1299 },
};

console.log(library.books.digital);

//b
var books = [
  {
    title: "JavaScript for impatient programmers",
    isbn: 1091210098,
    pages: 526,
    language: "en",
  },
  {
    title: "Client Side Scripting: Using JavaScript",
    isbn: 9333223878,
    pages: 164,
    language: "en",
  },
];

console.log(books[1].pages);

//c
var student = {
  id: 1391,
  firstName: "Jonas",
  lastName: "Schulz",
  major: "bim",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var name = student.fullName();
console.log(name);
