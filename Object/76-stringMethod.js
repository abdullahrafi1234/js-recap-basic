// startWith(searchString, position) => check a string starts with another string

const message = 'Today is friday'
console.log(message.startsWith('Today'));

// endsWith(searchString, length) => check a string ends with another string

console.log(message.endsWith('friday'));
console.log(message.endsWith('Friday'));

// includes(searchString, position) => check if a string contains another string

console.log(message.includes('x'));

// all these method are case sensitive