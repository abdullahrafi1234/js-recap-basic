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

function Student(name, age, phone, language){
    this.name= name;
    this.age = age;
    this.phone = phone;
    this.language = language;
}