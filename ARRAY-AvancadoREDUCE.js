// O método reduce() executa uma função redutora (forEach) em cada elemento do array, 
// resultando em um único valor de retorno. 
// O valor retornado é armazenado em um acumulador (total). 
// O primeiro parâmetro da função é o acumulador e o segundo parâmetro é o valor atual do array.
// O método reduce() pode ser usado para calcular a soma, média, produto, etc. de todos os elementos do array.
var numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

var numMult = numeros.reduce(function (total, numero){
    return total + numero;
}, 0);
console.log(numMult); 