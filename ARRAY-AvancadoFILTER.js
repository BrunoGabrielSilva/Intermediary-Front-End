var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Utilização do filter para filtrar os números pares e ímpares com iteração direto na variavel.
var numerosPares = num.filter(item => item % 2 === 0);
var numerosImpares = num.filter(item => item % 2 !== 0);
console.log("Utilizando o filter(nº pares) diretamente na variavel:  " + numerosPares);
console.log("Utilizando o filter(nº impares) diretamente na variavel: " + numerosImpares);

//Utilização do filter agora com uma função.
function par(item) {
    if (item % 2 === 0) {
        return item;
    }
}
var numerosPares = num.filter(par);
console.log("Utilizando a função par para buscar números pares: " + numerosPares);

var produtos = [
    {id: 1, descricao: "Liquidificador", categoria: "Eletrodoméstico", preco: 199.99},
    {id: 2, descricao: "Camiseta", categoria: "Vestuário", preco: 49.99},
    {id: 3, descricao: "Celular", categoria: "Eletrônicos", preco: 999.99},
    {id: 4, descricao: "Tênis", categoria: "Vestuário", preco: 299.99},
    {id: 5, descricao: "Ferro de Passar", categoria: "Eletrodoméstico", preco: 129.99},
    {id: 6, descricao: "Monitor", categoria: "Eletrônicos", preco: 799.99},
    {id: 7, descricao: "Cadeira", categoria: "Móveis", preco: 399.99},
    {id: 8, descricao: "Mesa", categoria: "Móveis", preco: 599.99},
    {id: 9, descricao: "Geladeira", categoria: "Eletrodoméstico", preco: 2499.99},
    {id: 10, descricao: "Sofá", categoria: "Móveis", preco: 1499.99},
]

var produtosEletronicos = produtos.filter(
    function (item) {
        return item.categoria == "Eletrônicos";
    }
)
console.log("Utilizando o filter para filtrar produtos Eletrônicos:");
produtosEletronicos.forEach(item => console.log(item));



