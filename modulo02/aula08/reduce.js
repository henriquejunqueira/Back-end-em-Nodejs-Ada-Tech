const provasDeMatematicaDaJosefina = [7.5, 4, 9];

// TODO: solução 1 com for-of
let media = 0;
let soma = 0;
for (const prova of provasDeMatematicaDaJosefina) {
  soma = soma + prova;
}

media = soma / provasDeMatematicaDaJosefina.length;

console.log(media.toFixed(2));

// TODO: solução 2 com reduce
// ? O reduce precisa de dois parâmetros: função e em que valor começa
// const somaDasProvas1 = provasDeMatematicaDaJosefina.reduce(
//   (acumulador, prova) => {
//     return acumulador + prova;
//   },
//   0,
// );

const somaDasProvas2 = provasDeMatematicaDaJosefina.reduce(
  (acumulador, prova) => acumulador + prova,
  0,
);

const mediaDasProvas = somaDasProvas2 / provasDeMatematicaDaJosefina.length;

console.log(somaDasProvas2);
console.log(mediaDasProvas.toFixed(2));
