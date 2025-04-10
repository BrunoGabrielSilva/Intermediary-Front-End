var nome = "Bruno Gabriel da Silva";
//Método length usado para contar o número de caracteres da string
var x = nome.length;
console.log("O tamanho da string é: " + x);

//Exemplo prático, validação de tamanho de string para cadastro
validação = x > 15 ? "VALIDAÇÃO INPUT || Nome aceito, obrigado" : "Nome muito curto, tente novamente";
console.log(validação);

//Método toUpperCase() usado para transformar a string em letras maiúsculas
var nomeMaiusculo = nome.toUpperCase();
console.log("Nome em letras maiúsculas: " + nomeMaiusculo);

//Método toLowerCase() usado para transformar a string em letras minúsculas
var nomeMinusculo = nome.toLowerCase();
console.log("Nome em letras minúsculas: " + nomeMinusculo);

//Método indexOf() usado para encontrar a posição de uma substring dentro da string
var posicao = nome.indexOf("Gabriel");
console.log("A posição da substring 'Gabriel' é: " + posicao);

//Método lastIndexOf() usado para encontrar a última posição de uma substring dentro da string
var posicaoUltima = nome.lastIndexOf("a");  
console.log("A última posição da substring 'a' é: " + posicaoUltima);

//Método slice() usado para extrair uma parte da string
var parteNome = nome.slice(0, 5); // Extrai os primeiros 5 caracteres
console.log("A parte extraída da string é: " + parteNome);

//Método substring() usado para extrair uma parte da string
var parteNome2 = nome.substring(0, 5); // Extrai os primeiros 5 caracteres
console.log("A parte extraída da string é: " + parteNome2);

//Método includes() usado para verificar se uma substring está presente na string
var existe = nome.includes("Gabriel");
console.log("A substring 'Gabriel' está presente na string? " + existe);

//Método concat() usado para concatenar duas strings
var sobrenome = " - Esposo da Naty e Pai do Noah";
var nomeCompleto = nome.concat(sobrenome);
console.log("Nome completo: " + nomeCompleto);

//Método trim() usado para remover espaços em branco do início e do fim da string
var nomeComEspacos = "   Bruno Gabriel   ";
var nomeSemEspacos = nomeComEspacos.trim();
console.log("Nome sem espaços: '" + nomeSemEspacos + "'");

//Método split() usado para dividir a string em um array de substrings
var nomeArray = nome.split(" "); // Divide a string em um array usando o espaço como delimitador
console.log("Array de substrings: ", nomeArray);
console.log(nomeArray[0]); // Acessando o primeiro elemento do array

//método replace() usado para substituir uma substring por outra
var nomeSubstituido = nome.replace("Bruno", "Gabriel");
console.log("Nome substituído: " + nomeSubstituido);