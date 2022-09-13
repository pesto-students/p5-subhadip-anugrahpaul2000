"use strict";
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  teach(subject) {
    this.subject = subject;
    console.log(this.name + ` is now teaching ` + this.subject);
  }
}

var him = new Teacher("Adam", 45);
him.teach("Inheritance");
