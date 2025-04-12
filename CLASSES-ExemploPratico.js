class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    // Método
    // Método é uma função que pertence a um objeto
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
    // Getter
    // Getter é uma função que retorna o valor de uma propriedade
    get nomeCompleto(){
        console.log(`Meu nome completo é ${this.nome}.`);
    }
}

p1 = new Pessoa('João', 25);
p2 = new Pessoa('Maria', 30);
p3 = new Pessoa('José', 35);
s
p1.apresentar();
p1.nomeCompleto;

