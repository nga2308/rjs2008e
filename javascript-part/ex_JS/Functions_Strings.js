//--------11----------------
// const spaceCount = (str) => {
//   var count = 0;
//   for (let index = 0; index < str.length; index++) {
//     if (str[index] == ' ') count++;
//   }
//   console.log(count);
// };
// spaceCount(" hello  world");
//--------------12-----------
// const removeSpaces = (str) => {
//   var res = str.replaceAll(" ", "");
//   console.log(res);
// };
// removeSpaces("	Hello world   ");
//----------13------------
// const reverseString = (str) => {
//   var newString = "";
//   for (let index = str.length - 1; index >= 0; index--) {
//     newString += str[index];
//   }
//   console.log(newString);
// };
// reverseString("This is a beautiful day");
//-----------14----------------------------
// const occurences = (str1, str2) => {
//   var n = str1.indexOf(str2);
//   console.log(n);
// };
// occurences("This is a beautiful day", "is");
//---------------15---------------
// var name = "NguYen Thi Tho thu Ha";
// name = name
//   .toLowerCase()
//   .split(" ")
//   .map((item) => item[0].toUpperCase() + item.slice(1))
//   .join(" ");

// console.log("Name: ", name);

// var result = "";
// for (let i = 0; i < name.length; i++) {
//   if (i == 0 || name[i - 1] == " ") {
//     result += name[i].toUpperCase();
//   } else {
//     result += name[i].toLowerCase();
//   }
// }
// console.log("Result: ", result);

//------------16----------------------
// var name = "https://www.facebook.com/ngothucdat";
// var n = name.lastIndexOf("/");
// console.log(n);
// var idName = name.slice(n + 1, name.lenght);
// console.log(idName);

//--------------17-------------
const minMax = (a, b, c) => {};
