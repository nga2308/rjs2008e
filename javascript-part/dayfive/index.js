// callback
function hello() {
  console.log("Hello");
}

function say(callback) {
  callback();
}
say(hello);

//arrays
var names = [" aNga", "Tuyen", "Linh", "Nhan", "Hung", "Thai"];
function findNameStartByN(name) {
  console.log("Name: ", name);
  return name[0] == "N";
}
var result = names.find(findNameStartByN);
console.log("Result: ", result);

var numbers = [1, 3, 5, 6, 9, 10, 4, 15];
// Use find(), search the first event number
function findFirstEvent(number, index, array) {
  //   console.log("Number: ", number, index, array);
  return number % 2 === 0;
}
// var firstEvent = numbers.find((number) => number % 2 == 0);
var firstEvent = numbers.find(findFirstEvent);
console.log("fisrtEvent: ", firstEvent);

//myFind - fake array.find
var myFind = (array, callback) => {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
};
console.log(myFind(numbers, findFirstEvent));

//filter
var filterAllEventNumber = (number) => {
  return number % 2 === 0;
};
var resultEventNumbers = numbers.filter(filterAllEventNumber);
console.log("Result Event Numbers: ", resultEventNumbers);

//map
var students = [
  {
    firstName: "Nguyen",
    lastName: "Nga",
    age: 20,
  },
  {
    firstName: "Ha Huy",
    lastName: "Tuyen",
    age: 21,
  },
  {
    firstName: "Nguyen",
    lastName: "Linh",
    age: 18,
  },
];
//triet xuat mot array gom fullName cua  cac hoc sinh
var fullNames = [];
for (var i = 0; i < students.length; i++) {
  fullNames.push(students[i].firstName + " " + students[i].lastName);
}
console.log("FullNames: ", fullNames);
var fullNames2 = students.map((item) => item.firstName + " " + item.lastName);
console.log("FullNames2: ", fullNames2);

//export an array contain of student with full name
//and age>20

var results = students
  .filter((student) => student.age >= 20)
  .map((student) => {
    return {
      age: student.age,
      fullName: student.firstName + " " + student.lastName,
    };
  });
console.log("Results: ", results);

//reduce()
var numbers = [1, 2, 3, 5, 6];
//calculate total of array numbers
var total = numbers.reduce((a, b) => {
  console.log("a,b: ", a, b);
  return a + b;
});
console.log("total: ", total);
//calculate quantity odd number
//solution 1: use filter
//solution 2: use reduce

console.log("quantity: ", numbers.filter((number) => number % 2 === 1).length);
var quantityOddNumbers = numbers.reduce((quantity, value) => {
  console.log("quantity: ", quantity, value);
  if (value % 2 === 1) {
    quantity += 1;
  }
  return quantity;
}, 0);
console.log("quantityOddNumbers: ", quantityOddNumbers);

//handle with DOM
