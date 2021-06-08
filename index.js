const input = require('readline-sync');
let str = "LaunchCode";
let move = input.question('How many characters to relocate? ');
let error = ""

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
if (move > str.length) {
  move = 3
  error = "Invalid entry: 10 or less characters allowed. Default of 3 characters: "
}

let moveStr = str.slice(0, move);
str = str.substr(move);
str = str.concat(moveStr);

//console.log(str);

//Use a template literal to print the original and modified string in a descriptive phrase.

`${error}The original string "LaunchCode" was converted to "pseudo-pig latin:" ${str}`

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
