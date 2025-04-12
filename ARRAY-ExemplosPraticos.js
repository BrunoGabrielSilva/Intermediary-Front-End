var valores = [1, 2, 3, 4, 5];
var valores2 = [6, 7, 8, 9, 10];

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
//Valor original do array valores
console.log("Array invertido: " + valores.reverse());
//Valor invertido do array valores
console.log("Array ordenado: " + valores.sort());
//Valor ordenado do array valores
valores.join(" - ");
console.log("Array com join: " + valores.join(" - "));
//Inserindo valores no array
valores.pop();
console.log("Array após o pop: " + valores);
//Removendo o último valor do array
valores.shift();
console.log("Array após o shift: " + valores);
//Removendo o primeiro valor do array
valores.push(10);
console.log("Array após o push: " + valores);
//Adicionando o valor 10 ao final do array
console.log("Array após o splice: " + valores.splice(2, 1));
//Removendo 1 valor na posição 2 do array
valores.unshift(1);
console.log("Array após o unshift: " + valores);
//Adicionando o valor 1 na primeira posição do array
valores.slice(2, 1);
console.log("Array após o slice: " + valores);
//Retorna os valores do array a partir da posição 2
valores.concat(valores2);
console.log("Array após o concat: " + valores.concat(valores2));
//Concatena os dois arrays

