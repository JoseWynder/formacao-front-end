// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Arithmetic Operations
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);
console.log(5 + 4 * 2);

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "abc");
console.log(typeof NaN);

// 4 Strings
console.log("Um texto");
console.log('Outro texto');
console.log(`Mais um texto`);
console.log(`13`)

console.log(typeof 'Outro texto');
console.log(typeof `Mais um texto`);

// 5 - Special Symbols in a String
console.log("testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

// 6 - Concatenation
console.log("Oi," + " tudo" + " bem?");
console.log(`Testando` + ` com` + ` crase!`);

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui: ${console.log("teste")}`);

// 8 - Boolean
console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof true);

// 9 - Comparations
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Identical
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");


// 11 - Logical Operators
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Matheus" === 1);
console.log(5 > 2 || "Matheus" === 1);
console.log(5 > 2 || 5 > 100);
console.log(!true);
console.log(!5 > 2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - Type Change
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);
