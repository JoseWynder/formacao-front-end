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
