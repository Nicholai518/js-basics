// Objects
// Array
// Function


// Object
// Key Value pairs
let person = {
    // K      V
    name: 'Nicholai',
    age: 30
};


// how to change properties

// Dot notation  (More common, cleaner and easier)
person.name = 'John';

// Bracket Notation
person['name'] = 'Tommy';

// Can also use this for Bracket Notation
let selection = 'name';
person[selection] = "Dante"

console.log(person.name);

// name = person.name
// object destructuring
const { name } = person;

console.log(name);
