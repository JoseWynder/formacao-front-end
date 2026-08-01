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

// 6 - Creating and deleting properties
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20_000
};
console.log(car);

car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// 7 - More about objects
const obj = {
    a: "teste",
    b: true
};
console.log(obj instanceof Object);

const obj2 = {
    c: []
};
Object.assign(obj2, obj);
console.log(obj);
console.log(obj2);

// 8 - Getting to know objects
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));
console.log(Object.entries(car));

// 9 - Mutability
const a = {
    name: "José"
};

const b = a;
console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;
console.log(a);
console.log(b);

delete b.age;
console.log(a);
console.log(b);
