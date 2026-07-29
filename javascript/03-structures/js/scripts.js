// 1 - Variables
let nome = "Matheus";
console.log(nome);

nome = "José Wynder";
console.log(nome);

const idade = 20;
console.log(idade);
// idade = 21; // Error

console.log(typeof nome);
console.log(typeof idade);


// 2 - More about variables

// let 2teste = "inválido";
// let @teste = "inválido";

let a = 10, b = 20, c = 30;
console.log(a, b, c);

const nomecompleto = "José Wynder";
const nomeCompleto = "João da Silva";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";
console.log(_teste, $teste);

// 3 - Prompt
// const age = prompt("Digite a sua idade:");
// console.log(`Você tem ${age} anos!`);

// 4 - Alert
// alert("Testando");
// const z = 10;
// alert("O número é " + z);

// 5 - Math
console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6 - Console
console.log("teste!");
console.error("erro!");
console.warn("aviso!");

// 7 - If
const m = 10;
if (m > 5) {
    console.log("M é maior que 5!");
}

const user = "João";
if (user === "João") {
    console.log("Olá João!");
}

if (user === "Maria") {
    console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8 - Else
const loggedIn = false;
if (loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10;
const w = 25;

if (q > 5 && w > 20) {
    console.log("Os números são mais altos.");
} else {
    console.log("Os números não são mais altos.");
}

// 9 - Else if
if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "José";
const userAge = 20;

if (userName === "Matheus") {
    console.log("Bem vindo Matheus!");
} else if (userName === "José" && userAge === 20) {
    console.log("Olá José, você tem 20 anos!");
} else {
    console.log("Nenhuma condição aceita!");
}

// 10 - While
let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// 11 - Do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);

// 12 - For
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 10;
for (r; r > 0; r--) {
    console.log(`O r está diminuindo: ${r}`);
}

// 13 - Indentation
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("deu 0");
        }
    }
}
