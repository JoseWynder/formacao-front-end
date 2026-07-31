// 1 - Creating a function
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("Outra função");

// 2 - Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);

console.log(soma(c, d));

// 3 - Function scope
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();
console.log(`Y fora da função é: ${y}`);
y = 15;
console.log(`Y fora da função é: ${y}`);
testandoEscopo();


// 4 - Nested scope
let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {
        let m = 30;

        if (true) {
            let m = 40;
            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhado();
console.log(m);

// 5 - Arrow function
const testeArrow = () => {
    console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    }
    console.log("Impar");
};

parOuImpar(5);
parOuImpar(10);
