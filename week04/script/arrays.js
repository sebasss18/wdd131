const numbers = [1, 2, 3, 4, 5, 6];

//array filter, this creates a new array that only 
// contain the elements that meet a condition I define
const evens = numbers.filter(n => n < 4);
console.log(evens);

//array map, it iterates each element and do whatever you ask for 
// this sums one to each number in the array
const plusOne = numbers.map(n => n+1)
console.log(plusOne);

//array reduce, reduce the numbers to one number, depending on what you need
const addition = numbers.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
console.log(addition);

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const onlyB = names.filter(name => name.charAt(0) === 'B');

const namesLength = names.map(name => name.length);

const asl = names.reduce((total, name) => total + name.length,) / names.length;