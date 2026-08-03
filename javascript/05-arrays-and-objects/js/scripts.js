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

// 10 - Array loop
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - Push and pop
const array = ["a", "b", "c"];

array.push("d");
console.log(array);
console.log(array.length);

array.pop();
console.log(array);

const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");
console.log(array);

// 12 - Shift and unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();
console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");
console.log(letters);

// 13 - IndexOf and lastIndexOf
const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);
