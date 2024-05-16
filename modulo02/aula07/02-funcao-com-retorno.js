function soma(numero1, numero2) {
  const resultado = numero1 + numero2;
  //   console.log(resultado);

  return resultado;
}

// soma(2, 3);
// soma(1, 6);

// soma(2, 3) + soma(1, 6); // ! vai exibir 5 e 7 no console se não tiver o return e o console log envolvendo a chamada
console.log(soma(2, 3) + soma(1, 6));

const resultado1 = soma(2, 3);
const resultado2 = soma(1, 6);
console.log(resultado1 + resultado2);
