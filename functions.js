// Greeting
function greet(){
    // body of the function
    console.log('Hello World');
}

// Call the basic greet function
greet();

// Greeting for a specific user
// Parameter = name  . It's what we have at the time of the function declaration
function greetUser(name){
console.log('Hello ' + name);
}
// Argument is what you provide to the function
greetUser('Billy');
greetUser('David');
greetUser('Jake');

// Greeting that includes the first and last name of a user
function greetFullName(firstName, lastName){
    console.log('Hello ' + firstName + ' ' + lastName);
}

// call function
greetFullName('John', 'Smith');

// If you do not provide a value for lastName, "undefined" will show in the console.
// This is because "undefined" is the default value for primitive variables
greetFullName('John');
