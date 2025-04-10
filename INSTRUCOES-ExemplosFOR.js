var a = [10, 20, 30, 40, 50];


a.forEach(valor => console.log(valor));

var tot = 0;
a.forEach(valor => {
    tot += valor;
})
console.log(tot);

a.forEach(function(valor, indice, array) {
    console.log(array[indice]);
});

var carro = [
    {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020,
    cor: 'azul'
},
    {
    marca: 'Chevrolet',
    modelo: 'Onix', 
    ano: 2021,
    cor: 'preto'
    },
    {
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: 2022,
    cor: 'branco'
    }
];

for (let caracteristica in carro) {
    console.log(carro[caracteristica].ano);
}

for (let i = 0; i < carro.length; i++) {
    console.log(carro[i]);
}
for (let item of carro) {
    console.log(item.marca);
}