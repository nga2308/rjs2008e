//object
//this pointer
var car = {
  name: "Kia",
  model: "500",
  start: function () {
    console.log(this.name + "'s starting to running");
  },
};

car.color = "Balck"; //c1

car["color"] = "Red"; //c2
function getData(prop) {
  console.log(car[prop]);
}
getData("color");
getData("model");

console.log("Car:", car);
console.log("Car name:", car.name);

//invoke
car.start();

for (var prop in car) {
  //lay het property cua object
  console.log(prop);
}

//OPP
function CarTemplate(name, color) {
  this.name = name;
  this.color = color;
  this.stop = function () {
    console.log(this.name + "'s stopping");
  };
}

var carFiat = new CarTemplate("Fiat", "white");
var carKia = new CarTemplate("Kia", "black");
console.log("carFiat:", carFiat);
console.log("carKia:", carKia);
carFiat.stop;
carKia.stop;

//Class

class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  start() {
    console.log(this.name + "'s starting");
  }
}

var kia = new Car("Kia", "Red");
console.log("Kia: ", kia);
kia.start();

//Inherit
class Person {
  constructor(lastName, firstName) {
    this.name = "Anonymous";
    this.firstName = firstName;
    this.lastName = lastName;
  }
  go = function () {
    console.log(this.name + "'s going");
  };
}
var otherPerson = new Person("John");
console.log("otherPerson:", otherPerson);
class Student extends Person {
  constructor(lastName, studentId) {
    super("", lastName);
    this.studentId = studentId;
  }
  getName = function () {
    return this.name;
  };
}

var nhan = new Student("Nhan", 1);
console.log("Nhan: ", nhan, nhan.getName());

//advance
