//----------------21--------------
// a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var total = a.reduce((a, b) => {
//   console.log("a,b: ", a, b);
//   return a + b;
// });
// console.log("total: ", total);

//----------------22---------------
// a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var max = a[0];
// for (var i = 1; i < a[i]; i++) {
//   if (a[i] > a[0]) {
//     max = a[i];
//   }
// }
// var min = a[0];
// for (var i = 1; i < a[i]; i++) {
//   if (a[i] < a[0]) {
//     min = a[i];
//   }
// }
// var med = (min + max) / 2;
// console.log("min, medi, max: ", max, min, med);

//--------------23---------------
// a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const getPopularElement = (arr) => {
//   var count = 1,tempCount;
//   var popular = arr[0];
//   var temp = 0;
//   for (var i = 0; i < arr.length - 1; i++) {
//     temp = arr[i];
//     tempCount = 0;
//     for (var j = 1; j < arr.length; j++) {
//       if (temp == arr[j]) tempCount++;
//     }
//     if (tempCount > count) {
//       popular = temp;
//       count = tempCount;
//     }
//   }
//   return popular;
// };
// console.log(getPopularElement(a));

//------------------24-----------------------
// var a = [1, 2, 3, 2, 3, 4, 6, 7];
// var count = 1;
// var arr = [];
// for (var i = 0; i < a.length; i++) {
//   if (a[i] >= 2) {
//     for (var j = 2; j <= a[i]; j++) {
//       if (a[i] % j == 0) {
//         count++;
//       }
//     }
//     if (count <= 2) {
//       arr.push(a[i]);
//       count = 1;
//     } else {
//       count = 1;
//     }
//   }
// }
// console.log(arr);

//-------------------25----------------
// var a = [1, 2, 3, 2, 3, 4, 6, 7];
// var arr = [];
// for (var i = 0; i < a.length; i++) {
//   arr.push(a[i] ** 2);
// }

// console.log(arr);

//------------------27----------------
// var students = [
//   {
//     id: "T3HXX1",
//     firstName: "NgAN",
//     lastName: "Duong Thuy",
//   },
//   {
//     id: "T3HXX2",
//     firstName: "Ha",
//     lastName: "Do Thi Thu",
//   },
//   {
//     id: "T3HXX5",
//     firstName: "Minh",
//     lastName: "Nguyen Nhat",
//   },
// ];
// var results = students
//   .filter((student) => student.firstName.length >= 3)
//   .map((student) => {
//     return {
//       id: student.id,
//       firstName: student.firstName
//         .toLowerCase()
//         .replace(
//           student.firstName[0].toLowerCase(),
//           student.firstName[0].toUpperCase()
//         ),
//       lastName: student.lastName
//         .toLowerCase()
//         .split(" ")
//         .map((item) => item[0].toUpperCase() + item.slice(1))
//         .join(" "),
//     };
//   });
// console.log(results);

//-----------------28---------------
// var students = [
//   {
//     id: "T3HXX1",
//     firstName: "NgAN",
//     lastName: "Duong Thuy",
//   },
//   {
//     id: "T3HXX2",
//     firstName: "Ha",
//     lastName: "Do Thi Thu",
//   },
//   {
//     id: "T3HXX5",
//     firstName: "Minh",
//     lastName: "Nguyen Nhat",
//   },
// ];
// Output: [
//   {
//     id: "T3HXX2",
//     firstName: "Ha",
//     lastName: "Do Thi Thu",
//   },
// ];
// var results = students.filter(
//   (student) => student.lastName.split(" ")[0] === "Do"
// );
// console.log(results);

//---------------------------29------------------
// var students = [
//   {
//     id: "T3HXX1",
//     firstName: "Ngan",
//     lastName: "Duong Thuy",
//   },
//   {
//     id: "T3HXX2",
//     firstName: "Ha",
//     lastName: "Do Thi Thu",
//   },
//   {
//     id: "T3HXX5",
//     firstName: "Minh",
//     lastName: "Nguyen Nhat",
//   },
// ];

// const sortFirstName = (arr) => {
//   for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i].firstName > arr[j].firstName) {
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };
// console.log(sortFirstName(students));

//-------------------31------------------
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var k = 26;
// for (var i = 0; i < a.length; i++) {
//   for (var j = i + 1; j < a.length; j++) {
//     for (var n = j + 1; n < a.length; n++) {
//       if (k == a[i] + a[j] + a[n]) {
//         var result = "YES";
//         break;
//       }
//     }
//   }
// }

// if (result != "YES") {
//   console.log("NO");
// } else {
//   console.log(result);
// }

//--------------------32----------------------
// var a = [1, 3, 6, 9, 11, 20];
// var k = 13;
// const insertNumber = (element, arr) => {
//   arr.push(element);
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   return arr;
// };

// console.log(insertNumber(k, a));

//-----------------------33-------------------------
var a = [9, 8, 7, 6, 4, 5, 3, 2, 1];
for (var i = 0; i < a.length - 1; i++) {
  for (var j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
  console.log(a);
}
