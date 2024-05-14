const numero1 = 10;
const numero2 = 30;
// let numero3;
const numero3 = 2;
const numero4 = 3;

// const soma = numero1 + numero2;
// const soma = numero3 + numero2; // ? NaN
// const soma = undefined + numero2; // ? NaN
// const soma = null + numero2; // ? converte o null pra zero const soma = 0 + numero2; (coerção/conversão implícita)
// const soma = 'ab' + numero2; // ? ab30
// const subtracao = numero2 - numero1;
// const subtracao = 'ab' - numero1; // ? NaN

// console.log(soma);
// console.log(subtracao);

// * Operações
const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;
const elevado1 = numero3 ** numero4;
// const elevado = Math.pow(2, 3)
const elevado2 = Math.pow(numero3, numero4);
const divisao2 = 3 / 2;
const restoDaDivisao2 = 3 % 2;

const numeroNegativo = -3;
const numeroAbsoluto = Math.abs(numeroNegativo);

console.log({ soma });
console.log({ subtracao });
console.log({ multiplicacao });
console.log({ divisao });
console.log({ elevado1 });
console.log({ elevado2 });
console.log({ divisao });
console.log({ restoDaDivisao2 });
console.log({ numeroNegativo });
console.log({ numeroAbsoluto });
