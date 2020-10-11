// var h3 = document.getElementById("h3");
var parent = document.getElementById("parent");
var h3_2 = document.getElementsByTagName("h3")[0];
console.log("h3", h3);

// h3.style.color = "red";
h3_2.style.color = "blue";
h3_2.style.backgroundColor = "yellow";

var p = document.getElementsByClassName("hello");
p.style.color = "yellow";
var data = "<span style='color:red'>Hello change by js</span>";
p.innerHTML = data;
p.innerText = data;
