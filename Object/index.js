// import {text} from './77-ES6-modules-class.js';
// console.log(text)

class Student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    set studentName (name){
        this.name = name
    }

    get studentInfo(){
        return this.id + " " + this.name
    }
}

let s1 = new Student(101, 'Rafi')
console.log(s1)

s1.studentName= 'lalalal'
console.log(s1);

console.log(s1.studentInfo);