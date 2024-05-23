// const cargos = ['Professor', 'Diretor', 'Aluno'];

// const cargosComFlexaoForOf = [];
// for (const cargo of cargos) {
//   cargosComFlexaoForOf.push(cargo + '(a)');
// }

// * O map é muito parecido com o for of
// const cargosComFlexao = cargos.map(function transformarCargos(cargo) { // ! forma de map com nome de função
// const cargosComFlexao = cargos.map(function (cargo) { // ! forma de map com função anônima
// const cargosComFlexao = cargos.map((cargo) => { // ! forma de map com arrow function
//   return cargo + '(a)';
// }); //! final das tês formas anteriores
// const cargosComFlexao = cargos.map((cargo) => cargo + '(a)'); // ! forma de map com arrow function simples em uma linha

// console.log(cargos);
// console.log(cargosComFlexaoForOf);
// console.log(cargosComFlexao);

// const frutas = ['uva', 'morango', 'laranja'];
// const frutasPlural = frutas.map((fruta) => {
//   return fruta + 's';
// });

// console.log(frutas);
// console.log(frutasPlural);

const usuarios = [
  {
    nome: 'Fábio',
    email: 'fabio@teste.com',
  },
  {
    nome: 'Maria',
    email: 'maria@testemail.com',
  },
  {
    nome: 'João',
    email: 'joao@teste.com',
  },
];

// const usuariosComNomeDeUsuario = usuarios.map((usuario) => {
//   return {
//     nome: usuario.nome,
//     email: usuario.email,
//     nomeDeUsuario: usuario.email.split('@')[0],
//   };
// });

// console.log(usuariosComNomeDeUsuario);

// ! removida primeira chave e return e acrescentado parênteses para melhorar a sintaxe
// const usuariosComNomeDeUsuario = usuarios.map((usuario) => ({
//   nome: usuario.nome,
//   email: usuario.email,
//   nomeDeUsuario: usuario.email.split('@')[0],
// }));

// console.log(usuariosComNomeDeUsuario);

// const usuariosComNomeDeUsuario = usuarios.map((usuario) => ({
//   ...usuario, // ! pega todas as propriedades do objeto utilizando rest operator
//   nomeDeUsuario: usuario.email.split('@')[0],
// }));

// console.log(usuariosComNomeDeUsuario);

const usuariosComNomeDeUsuario = usuarios.map((usuario) => ({
  //   ...usuario,
  //   nome: 'fulano', // ! fazendo nessa ordem, todos os nomes serão 'fulano', pois são sobrescritos

  //   nome: 'fulano', // ! fazendo nessa ordem, não terá efeito
  ...usuario,
  nomeDeUsuario: usuario.email.split('@')[0],
}));

console.log(usuariosComNomeDeUsuario);
