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

//Variables to store data temporarily

