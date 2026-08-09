// 1 - Methods
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    }
};

console.log(animal.nome);
animal.latir();

// 2 - Delving into methods
const pessoa = {
    nome: "José",
    getNome: function () {
        return this.nome;
    },
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Joaquim");
console.log(pessoa.getNome());

// 3 - Prototype
const text = "qualquer coisa";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

// 4 - More about prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Basic class
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// 6 - Function as a class - Constructor function
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro;
}

const bob = criarCachorro("Bob", "vira lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

// 7 - Functions as a class
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro();
console.log(husky);

// 8 - Methods in the constructor function
Cachorro.prototype.uivar = function () {
    console.log("Auuuuu!");
}

console.log(Cachorro);
console.log(Cachorro.prototype);
husky.uivar();

// 9 - ES6 Class
class CachorroClasse {
    construtor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

// 10 - More about class
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");
console.log(scania);
scania.descreverCaminhao();

Caminhao.motor = 4;
const c2 = new Caminhao(4, "Preta");
console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(6, "Azul");
console.log(c2);
console.log(c3.motor);

// 11 - Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano("Matheus", 31);
console.log(matheus);
console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";
console.log(matheus.idade);
console.log(Humano.prototype.idade);
