var custoFabrica = 38000.00;
var porcentagemDistribuidor = 20;
var porcentagemImposto = 48.6;

CarroNovo = custoFabrica + (custoFabrica * porcentagemDistribuidor / 100) + (custoFabrica * porcentagemImposto / 100);
console.log("Um carro novo custa: " + CarroNovo);  


