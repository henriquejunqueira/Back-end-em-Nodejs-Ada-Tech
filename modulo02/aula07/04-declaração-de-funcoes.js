console.log(climaAtual()); // ! vai chamar a função, mesmo sendo chamada antes da criação da função
console.log(climaAtual());
console.log(climaAtual());
// console.log(climaAtualArrow()); // ! não vai chamar a função, pois ela está sendo chamada antes da criação da função

// console.log(this); // ! nessa forma o this é um objeto vazio

function climaAtual() {
  //   console.log(this); // ! dentro de uma função normail, essa declaração do this é redefin e exibe várias informações

  const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando'];
  const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)];

  return `Hoje está ${climaSorteado}`;
}

const climaAtualArrow = () => {
  //   console.log(this);
  const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando'];
  const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)];

  return `Hoje está ${climaSorteado}`;
};

console.log(climaAtual());
console.log(climaAtual());
console.log(climaAtual());
console.log(climaAtualArrow());
console.log(climaAtualArrow());
