//This is the code from the JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]. From Programming with Mosh on Youtube.
//Link https://www.youtube.com/watch?v=W6NZfCO5SIk

//In the video he is using the Chrome Console for writing the following code.
console.log('Hello World'); //Prints Hello World to console output

2 + 2 //Prints 4 to the console output

alert('yo') //Launches a Javascript pop-up window with the word yo printed on it and an OK button.

//Setting up the Development Environment - Using a code editor (e.g. Visual Studio Code (VSCode), Sublime Text, Atom, Notepad++, etc.). Also, recommended installing node.js from: nodejs.org.
//Create a folder for the code in this course.

//Create a new file called index.html and populate it with the following code (starting with <!DOCTYPE html>) and save changes:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
*/

//if using Visual Studio Code (VSCode), search for extension called Live Server, and install it. You will need to restart VSCode to activate the install.

//After restarting VSCode go to menu on the left side and right click the index.html file and select 'Open with Live Server.'
//This will open a chrome web browser tab on your computer.

//Go back to the index.html file and edit it, by adding Hello World in between <h1></h1> tags.

//Writing your first JavaScript(JS) code.
/*You will add a script element (<script></script) to the index.html file inbetween the <body></body> tags at the end after all existing elements. The browser parses the html file from top to bottom. By having the <script> element at the end of the body, it ensures that the other code before it will have been read and loaded into the browser before the JS runs.
*/

// using two forward slashes is a way to make a single line comment in JS
/*
is a way to add multi-line comments in JS
*/

//Separation of concerns is the better way to structure our code when using multiple languages in a program.
//We will put our JS code in this file, however the video recommends creating and saving the code below to a new file called index.js

console.log('Hello World');

//You can run the code using node in VSCode.
//Right-click the file index.js (in my case Mosh_LearnJSin1hr.js)
//Select Open in integrated terminal
//you will see the terminal open in a split screen at the bottom of VSCode
//The file path should be the path to the folder which has index.js stored in it.
//You can type ls to verify that index.js is in the folder
//to run the file type: node index.js (in my case: node Mosh_LearnJSin1hr.js)
//you should see Hello World in the terminal

//From now on we will not be using node to run our .js files.

//Variables are used to store data
//the old variable declaration was 'var'
//In ES6 we use 'let' to declare a variable
//Once a variable is declared with 'let', it can be used without using the 'let' designation again (see example in Constants section below).
let name;
console.log(name); //Prints 'undefined' to the console since name has no value

let name = 'Mosh';
console.log(name); //Prints 'Mosh' to the console.

//Variable names cannot be a reserved keyword (if, else, let, etc.)
//Variable names should be meaningful so you know what the purpose of the variable is.
//Variables cannot start with a number.
//Variables cannot contain a space or a hyphen (-).
//Variables by convention should be in camelCase. (e.g. thisIsCamelCase)
//Variables are case sensitive. VARIABLE is not equal to variable or Variable.
//If you want to declare multiple variables you can do it on one line separated by comma. 
//Best practice is to declare each variable on a separate line
//(e.g. let firstName = 'Mosh');
//      let lastName = 'Hamedani');

//Constants (const). Note: The const declaration creates a read-only reference to a value. It doesn't mean the value it holds is immutable, just that the variable identifier cannot be reassigned. A constant cannot share its name with a function or a variable in the same scope.
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);//Prints 1. The initial value for interestRate 0.3 has been rewritten by the second value of 1.

//Trying to reassign a constant (const) variable.
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate); //Prints Uncaught TypeError: Assignment to constant variable at <filename>:<line#>.

//Note : a common naming convention for constant (const) variables is to use ALL_CAPS
//(e.g. const INTEREST_RATE = 'value').

//Primitive Types
//There are two categories of Types:
//1)Primitives are also known as Value Types
//2)Reference Types

//Primitive Types are: String, Number, Boolean, undefined, null, symbol
let name = 'Mosh'; //declaring a variable and initializing its value to a string type known as a string literal.
let age = 30; //a number literal
let isApproved = true; //Boolean literal. Boolean variable values can be true or false.
//Note that True and False are reserved keywords, so cannot be variable names.
let firstName; //By default this variable is undefined.
let firstName = undefined; //Explicitly initializing the value to undefined, not used often.
let selectedColor = null; //Explicitly clears the variable's value.

//Dynamic Typing
//Variable types can change at run-time

//Checking variable types using typeof (typeof is a reserved keyword)
typeof name //"string"
typeof age  //"number"
typeof isApproved //"boolean"
typeof firstName //"undefined" undefined is a type as well as a value.
typeof selectedColor //"object"

//Objects are Reference Types, as are Arrays, Functions
let name = 'Mosh';
let age = 30;
let person = {  //Creating an object literal
    name: 'Mosh',   //Key: Value pairs (properties) within the Object literal
    age: 30
};
console.log(person); //Prints {name: "Mosh", age: 30}

//Changing information in an Object
//Dot Notation - more concise
person.name = 'John';
console.log(person.name); //Prints John to console

//Bracket Notation - when user-selected key-values may be changed in the future
person['name'] = 'Mary';
console.log(person.name); //Prints Mary to console

//Bracket Notation Continued: In cases where you don't know which target key (of the key: value pair) will be changed until runtime.
//A user may be selecting the target key at some point in the future in order to change its value.
//Example:
let selection = 'name'; //the 'name' key in the object is set to the variable 'selection'
person[selection] = 'Mary'; //selection variable is what the user enters as the value 'Mary'
                            //'Mary' is passed to the the selection variable which is then passed to the 'name' key-value in the Object 'person' as the value 'Mary'.
console.log(person.name); //Prints Mary.

//Arrays - can be used for a list of items. Arrays are objects.
let selectedColors = []; //Square brackets [] is an Array Literal, by themselves they indicate an empty array.
let selectedColors = ['red', 'blue']; //Populating the array with values, in this case colors red and blue
console.log(selectedColors); //Prints ["red", "blue"]
//Note that each element in an array has a position number assigned to it. In arrays the first element is assigned as index (position) 0, the second element is index (position) 1, the third element is index (position) 2, etc.
//In the above array, "red" is at index 0, and "blue" is at index 1.

//To access the elements of an array, you would use its index number to refer to it.
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]); //Prints red to the console, since you are 'asking' for the 0th element in the array in the console.log

//Note that the length of an array as well as the types of elements in them are dynamic, they can change at runtime. For example, you have an array of your 10 favorite songs. You hear a new song and want to add it to your existing array. You can simply add this new song into your existing array. The array will now have 11 songs in it. Remember that the indexing for the array starts at 0, so the 11th song will have an index of 10.

//Adding elements to an array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; //setting index 2 (3rd element) to green
console.log(selectedColors); ["red", "blue", "green"]

//You can also add different types of elements to an existing array. You can mix strings and numbers together
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1; //setting index 2 (3rd element) to 1
console.log(selectedColors); ["red", "blue", 1]

typeof selectedColors //"object"

//Arrays have a variety of properties automatically inherited. (e.g. length property)
//Properties are used by taking the name of the array, adding a period, and then the property name. (e.g. selectedColors.length)
//length property gives us the number of items in an array
//Example:
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1; //setting index 2 (3rd element) to 1
console.log(selectedColors.length); //Prints 3 to the console. There are 3 elements.

//Functions are a Reference Type. Functions are one of the fundamental building blocks in JS.
//Functions are a set of code statements that perform a task or calculates a value.
//Example:
function greet() {  //declaring the function and calling it 'greet'
    console.log('Hello World'); //this is what the function is doing. Printing to console.
}
greet();   //Calling (running/executing) the function. Results in printing to the console Hello World

//Functions can have inputs which can change how the function behaves or can pass data into the function for calculation purposes.
//Example:
function greet(name) { //adding a parameter to the function, in this case name is the parameter. name is like a variable that is only meaningful inside of the function. It is not accessible outside of the function. name is an input to the function greet.
console.log('Hello ' + name); //this creates a string concatenated (+) with the parameter
}
greet('John'); //When calling (running/executing) the function, we put in 'John' as an argument. This argument gets put into the parameter (name) in the greet function above.

//The parameter is the variable we use at the time of declaring the function, and the argument is the value we pass into the parameter when calling the function.

function greet(name) {
    console.log('Hello ' + name); //Note we added a space after hello
}
greet('John'); //Prints John
greet('Mary'); //Prints Mary

//A function can have multiple parameters. When using multiple parameters you separate them using a comma (e.g. a, b, c).
//Example 1
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName); //Note that we added a space (' ') inbetween name and lastName.
}
greet('John'); //Prints Hello John and undefined, because the parameter (variable) lastName was not given any information it is undefined by default.

//Example 2
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith'); //Prints Hello John Smith

//The function above performs a task such as printing to the console.

//Functions can also calculate and return a value
function square(number) {
    return number * number; //any number times itself is the square of that number.
                            //using the reserved keyword 'return' tells the function to 
                            //give the result of the calculation to whomever is calling
                            //the function.
}
let number = square(2); //here we create a variable also called number and give it the
                        //value of the output (return value) of the function square(2). 
                        //We could create a variable called result, output, etc, instead
                        //of reusing number again. This may help avoid confusion.
console.log(number); //Prints 4

//Example 2 using less confusing variable naming
function square(number) {
    return number * number;
}
let result = square(2);
console.log(result); //Prints 4

//Example 3 using fewer lines of code
function square(number) {
    return number * number;
}
console.log(square(2)); //Prints 4. Note: console.log() is also a function.
                        //So, we actually have 2 function calls in the above line of code

//This is the end of the JavaScript Tutorial for Beginners: Learn JavaScript in 1 hour [2020].