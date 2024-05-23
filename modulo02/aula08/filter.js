const cargos = ['Professor', 'Diretor', 'Aluno'];

const usuarios = [
  {
    nome: 'Fábio',
    email: 'fabio@testelook.com',
  },
  {
    nome: 'Maria',
    email: 'maria@testemail.com',
  },
  {
    nome: 'João',
    email: 'joao@teste.com',
  },
  {
    nome: 'Ana',
    email: 'ana@testelook.com',
  },
];

// const usuariosTestelook = usuarios.filter((usuario) => {
//   const [nomeDeUsuario, dominioDoEmail] = usuario.email.split('@');
//   return dominioDoEmail === 'testelook.com';
// });

// const usuariosTestelook1 = usuarios.filter((usuario) => {
//   const [, dominioDoEmail] = usuario.email.split('@');
//   return dominioDoEmail === 'testelook.com';
// });

// const usuariosTestelook2 = usuarios.filter((usuario) => {
//   return usuario.email.includes('testelook.com');
// });

const usuariosTestelook3 = usuarios.filter((usuario) =>
  usuario.email.includes('testelook.com'),
);

// console.log(usuariosTestelook1);
// console.log(usuariosTestelook2);
console.log(usuariosTestelook3);
