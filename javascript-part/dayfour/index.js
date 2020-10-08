//Strings
var name = "Toai Toai";
console.log("first character: ", name[0]);
console.log("last character: ", name[name.length - 1]);
// format special name
//c1
// console.log("Name: ", name);
// var formatName = "";
// for (var i = 0; i < name.length; i++) {
//   if (i === 0) {
//     formatName += name[i].toUpperCase();
//   } else {
//     formatName += name[i].toLowerCase();
//   }
// }
//c2

var formatName =
  name[0].toUpperCase() + name.substring(1, name.length).toLowerCase();
console.log("Name: ", formatName);

console.log("toUpperCase(): ", name.toUpperCase());
console.log("toLowerCase(): ", name.toLowerCase());
console.log("charAt(): ", name.charAt(0));
console.log("indexOf(substr,pos): ", name.indexOf("ai")); //pos bat dau tu vi tri
console.log("lastIndexOf(substr,pos): ", name.lastIndexOf("ai")); //pos lay den vi tri day
console.log(`slice(2,3):  '${name.slice(2, 3)}'`);
console.log(`substring(2,3):  '${name.substring(2, 3)}'`);
console.log(`substr(2,3):  '${name.substr(2, 3)}'`); //3 la so ki tu muon lay
console.log(`replace(substr), substr):  '${name.replace("T", "t")}'`);
console.log(`replaceAll(substr), substr):  '${name.replaceAll("T", "t")}'`);
console.log(`includes("oai"):  '${name.includes("oai")}'`);

//Practice
var description = "Today is a awful day!";
//thay "awful " thanh "beautiful"( no  use replace)
// description.replace("awful", " beautiful");
// var words = description.split(" ");
// console.log("words: ", words);
//regex(regular expression) hinh thuc so sanh loc ra tat ca cac String no maping theo mau nao day
var newDes = myReplace(description, "awful", "beautiful");
function myReplace(curStr, oldSubStr, newSubstr) {
  var firstIndex = curStr.indexOf(oldSubStr);
  var secondIndex = firstIndex + oldSubStr.length;
  return (
    curStr.substring(0, firstIndex) + newSubstr + curStr.substring(secondIndex)
  );
}
console.log("newDes: ", newDes);

//Array
//javascrip is dynamic type

var numbers = [2, 3, 5, 4];
var names = ["Toai", "Linh", "Nhan", "Phong", 4];
matrix = [
  [10, 10, 10, 10],
  [0, 0, 0, 0],
  [1, 10, 1, 5],
];
var studentTruong = {
  name: "Truong",
  age: 20,
};
var students = [
  {
    name: "Toai",
    age: 20,
  },
  {
    name: "Linh",
    age: 18,
  },
  studentTruong,
];
// console.log("Numbers: ", numbers);
// console.log("First Number: ", numbers[0]);
// numbers[0] = 10;
// console.log("First Number: ", numbers[0]);
// console.log("Last Number: ", numbers[numbers.length - 1]);
// console.log("names: ", names);
// console.log("students: ", students);
// for (var i = 0; i < matrix.length; i++) {
//   for (var j = 0; j < matrix[i].length; j++) {
//     console.log(`matrix[${i}][${j}]`, matrix[i][j]);
//   }
// }
// function push(arr, value) {
//   arr[arr.length] = value;
// }
// function pop(arr) {
//   var result = arr[arr.length - 1];
//   arr.length -= 1;
//   return result;
// }
// var stack = [];
// console.log("stack: ", stack);
// stack.push(1);
// push(stack, 3);
// console.log("stack: ", stack);
// stack.push(2);
// console.log("stack: ", stack);
// var lastValue = stack;
// console.log("lastValue: ", lastValue);
// console.log("Stack: ", stack);
// stack.unshift(0);
// console.log("Stack: ", stack);
// var firstValue = stack.shift();
// console.log("firstValue: ", firstValue);

//indexOf array

console.log("indexOf(3): ", numbers.indexOf(3));
console.log("student: ", students);
console.log(
  'indexOf({name: "Linh", age: 18})',
  students.indexOf({ name: "Linh", age: 18 })
);
console.log("indexOf(studentTruong)", students.indexOf(studentTruong));
console.log("original number: ", numbers);
console.log("number.reverse()", numbers.slice(0).reverse()); //slice tra ve các phan tu từ 0
//numbers.reverse
console.log("numbers: ", numbers);
//splice
// var subArray = numbers.splice(numbers.length - 2, 1);
var subArray = numbers.splice(0, 0, 1, 2, 1, 2, 1, 2, 0); //dynamic parameter

console.log("subArray: ", subArray);
console.log("numbers: ", numbers);
console.log("students: ", students);
console.log("join: ", numbers.join(","));
var tags = ["reactjs", "html", "css"];
console.log("join: ", tags.join("|"));

var result = "";
for (var i = 0; i < tags.length; i++) {
  if (i === tags.length - 1) {
    result += tags[i];
  } else {
    result += tag[i] + "|";
  }
}
console.log("result: ", result);

//callback functionso
function helloWorld() {
  console.log("Hello world");
}
function say(callback) {
  callback();
}
say(helloWorld);
