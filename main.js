#! /usr/bin/env node
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teObj) {
        this.teachers.push(teObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
// School 
let school1 = new School("Dar-ul-Madinah");
let school2 = new School("The Smart School");
let school3 = new School("Karachi Academy");
// Student
let s1 = new Student("Rayan", 13, school1.name);
let s2 = new Student("Hania", 10, school2.name);
let s3 = new Student("Ali", 11, school3.name);
// Teacher
let t1 = new Teacher("Malik Hunain", 35, school1.name);
let t2 = new Teacher("Laraib", 40, school2.name);
let t3 = new Teacher("Fiza", 42, school3.name);
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(school1);
console.log(school2);
console.log(school3);
export {};
