// const numero1 = 100;
// const numero2 = 20;

// const numero1 = 20;
// const numero2 = '20';
const numeroCorreto = 30;
const stringDeNumero = '30';

if (numero1 > 1) {
  console.log('Este número é maior que 1');
}

if (numero1 > 200) {
  console.log('Este número é maior que 200');
} else {
  console.log('Este número é menor que 200');
}

if (numero1 >= 200) {
  console.log('Este número é maior ou igual a 200');
} else {
  console.log('Este número é menor que 200');
}

if (numero2 < numero1) {
  console.log(`${numero2} é menor que ${numero1}`);
}

if (numero2 <= numero1) {
  console.log(`${numero2} é menor ou igual a ${numero1}`);
}

// if (numero1 == numero2) {
//   console.log(
//     'Os números são iguais apenas em valor (podem ter ocorrido coerções implícitas)',
//   );
// }

if (numeroCorreto == stringDeNumero) {
  console.log(
    'Os números são iguais apenas em valor (podem ter ocorrido coerções implícitas)',
  );
}

if (numeroCorreto === stringDeNumero) {
  console.log('Os números são iguais em valor e tipo');
}
