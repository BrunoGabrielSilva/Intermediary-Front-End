///// Descrição: Exemplo de uso do método forEach() p
// para iterar sobre um array e exibir os elementos no console.
// O método forEach() executa uma função fornecida uma vez para cada elemento do array.
var comidas = [
    "Pizza", 
    "Hamburguer",
    "Batata frita",
    "Sushi",
    "Salada",];

comidas.forEach(valor => console.log(valor));
// O método forEach() não retorna um novo array,
// ele apenas executa a função fornecida para cada elemento do array original.
var ComidaBoa = [];
comidas.forEach(valor => {
    if (valor !== "Salada") {
        ComidaBoa.push("Comida boa - " + valor);
    }
    else {
        ComidaBoa.push("Comida ruim - " + valor);
    }
});
console.log("Comida boa: " + ComidaBoa.join(", "));