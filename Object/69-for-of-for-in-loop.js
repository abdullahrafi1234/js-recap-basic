// for of and for in loop

const names = ["s1", "s2", "s3", "s4"]
for(let name of names){  // for of use kora hoy array te
    console.log(name)
}

const objects = {
    name: 'rafi',
    id: 12,
    cgpa: 3.54
}
for(let object in objects){  // for in use kora hoy object er modde
    console.log(object)
}
