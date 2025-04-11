var valores = [1, 2, 3, 4, 5];

console.log(valores[2]);

for(var pos = 0; pos < valores.length; pos++){
    console.log("posição: " +  pos +  " valor: " + valores[pos]);
}

var motos = new Array("Fazer", "Honda", "Yamaha", "Suzuki");
console.log(motos[2]);

for(var pos = 0; pos < motos.length; pos++){
    console.log("posição: " +  pos +  " valor: " + motos[pos]);
}

var soma = 0;
for(var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
}
var media = soma / valores.length;
console.log("A média dos valores do Array é: " + media);

console.log("Array original: " + valores);
console.log("Array invertido: " + valores.reverse());
console.log("Array ordenado: " + valores.sort());
valores.join(" - ");
console.log("Array com join: " + valores.join(" - "));
valores.pop();
console.log("Array após o pop: " + valores);
valores.shift();
console.log("Array após o shift: " + valores);
valores.push(10);
console.log("Array após o push: " + valores);
console.log("Array após o splice: " + valores.splice(2, 1));
valores.unshift(1);
console.log("Array após o unshift: " + valores);
