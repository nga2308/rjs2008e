//Regular function
function print(n) {
  if (n < 0) {
    return; //
  }
  print(n - 1); //Call Stack
  console.log("n: ", n);
  //   print(n - 1);
}
//Expression
const print2 = function (n) {
  if (n < 0) {
    return; //
  }
  print(n - 1); //De quy
  console.log("n: ", n);
};

//arrow function (fat arrow)
const print3 = (n) => {
  if (n < 0) {
    return; //
  }
  print(n - 1);
  console.log("n: ", n);
};
//Example
function isEven(n) {
  //   if (n % 2 == 0) {
  //     return true;
  //   } else return false;
  return n % 2 === 0;
}
const isEven2 = (n) => n % 2 === 0;
print(5);
print2(5);
print(5);
console.log("isEven(2)", isEven(2));
console.log("isEven2(3)", isEven2(3));

//tim hieu binding arrow function
function RandomDice() {
  return Math.floor(6 * Math.random()) + 1;
}
function Random(from, to) {
  return Math.floor((to - from + 1) * Math.random()) + from;
}
var value = RandomDice();
console.log("RandomDice(): ", value);
console.log("Random(18,24): ", Random(18, 24));

//String
// var name = "\"Thoai\"";
var name2 = '"\tPhong \n new line\\" ';
// console.log(name);
console.log(name2);
var currentDay = "Thursday";
var hello = "'Today is " + currentDay + "'";
var helloStr = `'Today is ${currentDay}'`; //template String
console.log("hello: ", hello);
console.log("hello: ", helloStr);

//immutrable
