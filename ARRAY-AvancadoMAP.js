// Descrição: Este código demonstra o uso do método map() 
// para multiplicar cada elemento de um array por 2 e retornar um novo array com os resultados.
// O método map() cria um novo array com os resultados da chamada de uma função 
// para cada elemento do array original.
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numMult = numeros.map(function (item){
    return item * 2;
});

console.log(numMult);

var jogadoresTimao = [
    {nome: 'Cássio', idade: 35},
    {nome: 'Fagner', idade: 33},
    {nome: 'Gil', idade: 36},
    {nome: 'Juliano', idade: 31},
    {nome: 'Roni', idade: 22}
]

nomes = jogadoresTimao.map(jogador => jogador.nome);
console.log(nomes);
