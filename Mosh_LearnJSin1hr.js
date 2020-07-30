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
