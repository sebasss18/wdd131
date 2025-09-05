const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};

// To use a variable, you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword let followed by the name you want to call your variable:


// Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it. For example

let myName;

myName = "Sebastian"; // Assigning a value to the variable

myName // "Sebastian"

//You can declare and initialize a variable at the same time, like this:

let myAge = 19;

// An array is a single object that contains multiple values enclosed in square brackets and separated by commas.

let myArray = [myName, myAge];

myArray = [myName, myAge];

// Use const when you can, and use let when you have to

const bird = {species: "Kestrel"};