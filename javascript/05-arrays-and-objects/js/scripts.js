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

// 15 - Foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" }
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - Includes
const brands = ["BMW", "VW", "Fiat"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// 17 - Reverse
const reverseTest = [1, 2, 3, 4, 5];
console.log(reverseTest);

reverseTest.reverse();
console.log(reverseTest);

// 18 - Trim
const trimTest = "  testando \n  ";
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 19 - Padstart
const testePadStart = "1";
console.log(testePadStart);

const newNumber = testePadStart.padStart(4, "0");
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// 20 - Split
const frase = "O rato roeu a roupa do rei de Roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 21 - Join
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
console.log(fraseDeCompra);

// 22 - Repeat
const palavra = "Testando ";
console.log(palavra.repeat(5));

// 23 - Rest operator
const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 25, 50, 100, 200, 300, 400, 500, 600, -76));

// 24 - For of
const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
};

console.log(somaInfinita2(1, 2, 3));
console.log(somaInfinita2(1, 25, 50, 100, 200, 300, 400, 500, 600, -76));

// 25 - Object destructuring
const userDetails = {
    firstName: "José",
    lastName: "Wynder",
    job: "Programador"
};

const { firstName, lastName, job } = userDetails;
console.log(firstName, lastName, job);

// Renaming variables
const { firstName: primeiroNome } = userDetails;
console.log(primeiroNome);
