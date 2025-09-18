// Creating functions
// Basic understanding
function happyBirthday(username, age) {
    console.log(`happy birthday ${username}`);
    console.log(`you are ${age} years old`);
}

happyBirthday("Ana", 18);
happyBirthday("sebas", 19);

//

function add(x,y){
    let result = x+y;
    return result;
}

let answer = add(x,y);
console.log(answer);

// easier

function add(x,y){
    return x + y;
}

function substract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

console.log(add(2,3));

console.log(substract(2,3));

console.log(multiply(2,3));

// complex example

function isEven(number){
    
    if(number % 2 === 0) {
        return true;
    }
    else{
        false;
    }
}

// simplified version

function isEven(number){
    return number % 2 === 0 ? true : false;
}

console.log(isEven(10)) // 10 IS even

// other example

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

// simplified version

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("sebasbernals@gmail.com"))

// activity

let firstName = "sebastian";
let lastName = "Bernal";

function addNames(firstName, lastName) {
    return `${lastName} ${firstName}`;
}

function addNames(firstName, lastName){
    let fullName = `${lastName} ${firstName}`;
    return fullName
}

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);