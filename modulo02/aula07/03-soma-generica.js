// ! rest operator é representado por ... (3 pontos) e ele está transformando o parãmetro numeros em um array
function soma(...numeros) {
  let resultado = 0;

  for (const numero of numeros) {
    resultado = resultado + numero;
  }

  return resultado;
}

const resultado1 = soma(2, 3, 1);
const resultado2 = soma(1, 6);

console.log(resultado1);
console.log(resultado2);

console.log(soma(2, 3, 1) + soma(1, 6));
console.log(resultado1 + resultado2);
