// Aula introdutória

var teste; // ? (hoisting)
console.log(teste); // ! variável retorna undefined. Problema de hoisting do var
// var teste = 'meu teste';
const qualquerCoisa = null;
console.log(qualquerCoisa);
let numero = 20;
const Numero2 = 300; // inteiro
const numeroFavorito = 5.5; // real
const estaChovendo = false;

const nome = 'Henrique';

console.log(numero);
console.log(numeroFavorito);

numero = 8;
console.log(numero);

console.log('Oi,', nome, '!');
console.log(`Oi, ${nome}! Seu número favorito é: ${numeroFavorito}`);

console.log(`Condição do clima é chuvoso: ${estaChovendo}`);
