//This is an example of a JavaScript object literal (a collection of 
// key-value pairs) representing a person in a concise 
// and readable format.
let person = {
  name: "Antonia Francesca",
  age: 30,
  profession: "Software Engineer",
  hobbies: ["reading", "playing guitar", "hiking"],
  address: {
    street: "123 Camino Real",
    city: "Santa Rosa",
    country: "Honduras"
  },
  isEmployed: true,
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

// This 2 do the same exact thing, the dot its easier to use
// if you need something easy to choose
person.age = 31;
person['age'] = 31;


