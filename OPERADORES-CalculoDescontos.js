var ValorProduto = 100;
var ValorDesconto = 9;
var ProdutoComDesconto = 0;

ProdutoComDesconto = ValorProduto - (ValorProduto * ValorDesconto / 100);
console.log("O valor do produto era R$" + ValorProduto + " e com desconto de: " + ValorDesconto + "% agora é de: R$" + ProdutoComDesconto + " reais.");    