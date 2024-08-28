//------How to Create Object----
//------How to print the value of an object----

var info = {
    name: 'Abdullah Al Rafi Bhuiyan',
    age: 22,
    phone: '01722438145',
    language: ['Ban', 'Eng', 'Turkey']
}

console.log(info)

//-----adding a constructor---

function Student(name, age, phone, language) {
    this.name = name;   //jei name ta deoa hbe oita oporer parameter er modde set hobe
    this.age = age;
    this.phone = phone;
    this.language = language;

//-----adding a function in a constructor---
    this.display = function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.phone)
        console.log(this.language)
    }

}

var student1 = new Student('Anisul', 25, '017224548554', ['ban', 'eng'])
var student2 = new Student('Ariful', 20, '017224548554', ['ban', 'eng'])
var student3 = new Student('Shopia', 65, '016424895', ['ban', 'eng'])

console.log(student1)
console.log(student1.name)

student2.display()

