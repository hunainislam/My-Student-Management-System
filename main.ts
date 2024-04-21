#! /usr/bin/env node

class School {
    name : string ;
    students : Student[]=[]
    teachers : Teacher[]=[]

    addStudent(stdObj: Student){
        this.students.push(stdObj)
    }
    addTeacher(teObj : Teacher) {
        this.teachers.push(teObj)
    }
    constructor (name:string){
        this.name = name;
    }
}

class Student {
    name : string ;
    age : number ;
    schoolName : string;

    constructor (name:string,age:number,schoolName:string){
        this.name = name
        this.age = age
        this.schoolName = schoolName
    }
}

class Teacher extends Student{
    email: string = "";
    contact: string = "";
    addInfo(email:string,contact:string){
        this.email = email;
        this.contact = contact;
    }
}

// School 
let school1 = new School("Dar-ul-Madinah")
let school2 = new School("The Smart School")
let school3 = new School("Karachi Academy")

// Student

let s1 = new Student ("Rayan",13,school1.name)
let s2 = new Student ("Hania",10,school2.name)
let s3 = new Student ("Ali",11,school3.name)

// Teacher

let t1 = new Teacher ("Malik Hunain",35,school1.name)
let t2 = new Teacher ("Laraib",40,school2.name)
let t3 = new Teacher ("Fiza",42,school3.name)

// Add info:

t1.addInfo("malikhunain@056gmail.com","123456");
t2.addInfo("laraib025@gamil.com","789123");
t3.addInfo("fiza123@gamil.com","145891");

// Add student:
school1.addStudent(s1)
school2.addStudent(s2)
school3.addStudent(s3)

school1.addTeacher(t1)
school2.addTeacher(t2)
school3.addTeacher(t3)

console.log(t1);
console.log(t2);
console.log(t3);

console.log(school1);
console.log(school2);
console.log(school3);