// 1 - Arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12, []];
console.log(itens);

// 2 - More about arrays
const arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);

// 3 - Properties
const numbers = [5, 3, 4];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";
console.log(myName.length);

// 4 - Methods
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - Objects
const person = {
    name: "José",
    age: 31,
    job: "Programador"
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);
