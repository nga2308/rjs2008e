var n = prompt("Please enter your name");
// for (let number = 1; number <= n; number++) {
//   console.log(number);
// }
// for (let number = 1; number <= n; number++) {
//   if (number % 2 === 1) {
//     console.log(number);
//   }
// }
// for (let number = 1; number <= n; number++) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }
//-------------
// console.log(Math.sqrt(4));
// function isPrime(number) {
//   if (number <= 1) return false;
//   for (i = 2; i <= Math.sqrt(number); i++) if (number % i == 0) return false;
//   return true;
// }

// for (let i = 1; i <= n; i++) {
//   if (isPrime(i) == true) {
//     console.log(i);
//   }
// }
//---------------
//var tong = 0;
// for (let number = 1; number <= n; number++) {
//   tong = tong + number;
// }
// alert("Tong cac so la: " + tong);
// for (let number = 1; number <= n; number++) {
//   tong = tong + number * number;
// }
// alert("Tong binh phuong cac so la: " + tong);
// for (let number = 1; number <= n; number++) {
//   if (number % 2 === 1) {
//     tong = tong + number;
//   }
// }
// alert("Tong cac so le la: " + tong);
//----------------
// var check = true; //bigInt hoac String
// while (n > 0) {
//   remain = n % 10;
//   if (remain % 2 == 0) {
//     check = false;
//     break;
//   }
//   n = Math.floor(n / 10); //!
// }
// if (check) {
//   alert("YES");
// } else alert("NO");
//  /cach2----
// var evenCount = 0;
// var oddCount = 0;
// while (n > 0) {
//   remain = n % 10;
//   if (remain % 2 == 0) {
//     evenCount++;
//   } else oddCount++;
//   n = Math.floor(n / 10); //!
// }
// if (evenCount == 0) {
//   alert("YES");
// } else alert("NO");

//-----------------
var nInput = n;
var inverse = 0;
while (n != 0) {
  inverse = inverse * 10 + (n % 10);
  n = Math.floor(n / 10);
}
alert(inverse);
if (nInput == inverse) {
  alert("YES");
} else {
  alert("NO");
}
//-----------------------------------------------
// for (var n = 0; n <= 10; n++) {
//   if (n == 2) {
//     console.log("Multiplication Table 2");
//     for (i = 1; i <= 10; i++) {
//       console.log("2 * " + i + " = " + 2 * i);
//     }
//   }

//   if (n == 3) {
//     console.log("Multiplication Table 3");
//     for (i = 1; i <= 10; i++) {
//       console.log("3 * " + i + " = " + 3 * i);
//     }
//   }
//   if (n == 4) {
//     console.log("Multiplication Table 4");
//     for (i = 1; i <= 10; i++) {
//       console.log("4 * " + i + " = " + 4 * i);
//     }
//   }
//   if (n == 5) {
//     console.log("Multiplication Table 5");
//     for (i = 1; i <= 10; i++) {
//       console.log("5 * " + i + " = " + 5 * i);
//     }
//   }
//   if (n == 6) {
//     console.log("Multiplication Table 6");
//     for (i = 1; i <= 10; i++) {
//       console.log("6 * " + i + " = " + 6 * i);
//     }
//   }
//   if (n == 7) {
//     console.log("Multiplication Table 7");
//     for (i = 1; i <= 10; i++) {
//       console.log("7 * " + i + " = " + 7 * i);
//     }
//   }
//   if (n == 8) {
//     console.log("Multiplication Table 8");
//     for (i = 1; i <= 10; i++) {
//       console.log("8 * " + i + " = " + 8 * i);
//     }
//   }
//   if (n == 9) {
//     console.log("Multiplication Table 9");
//     for (i = 1; i <= 10; i++) {
//       console.log("9 * " + i + " = " + 9 * i);
//     }
//   }
// }
//-----------------------------------------------------
