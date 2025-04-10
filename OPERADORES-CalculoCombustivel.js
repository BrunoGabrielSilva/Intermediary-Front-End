var QuantidadeLitros = 0;
var MediaConsumo = 10;
var TempoViagem = 6;
var VelocidadeMedia = 100;
var ValorCombustivel = 4.00;

var Distancia = TempoViagem * VelocidadeMedia;
var QuantidadeLitros = Distancia / MediaConsumo;
var ValorGasto = QuantidadeLitros * ValorCombustivel;

console.log("A velocidade média foi de: " + VelocidadeMedia + " Km/h.");
console.log("O tempo de viagem foi de: " + TempoViagem + " horas.");
console.log("A distância percorrida foi de: " + Distancia + " Km.");
console.log("O total de litros usados foi: " + QuantidadeLitros + " Litros.");
console.log("O valor gasto foi de: R$" + ValorGasto + " reais.");
