const listaDeContatos = [
  'Paulo',
  'Selina',
  'Roger',
  'Rubens',
  'Zeca',
  'Josué',
  'Natália',
  'Bianca',
];

// TODO Solução 1
// let encontraUsuario = false;
// let fimDaLista = false;
// let indiceDoUsuario = 0;

// while (!encontraUsuario && !fimDaLista) {
//   const usuarioAtual = listaDeContatos[indiceDoUsuario];

//   if (usuarioAtual.startsWith('Z')) {
//     encontraUsuario = true;
//     console.log(`Usuário encontrado: ${usuarioAtual}`);
//   }

//   indiceDoUsuario++;

//   if (indiceDoUsuario === listaDeContatos.length) {
//     fimDaLista = true;
//     console.log(`Usuário não foi encontrado`);
//   }
// }

// TODO Solução 2
// let indiceDoUsuario = 0;

// while (true) {
//   const usuarioAtual = listaDeContatos[indiceDoUsuario];

//   if (usuarioAtual.startsWith('Z')) {
//     console.log(`Usuário encontrado: ${usuarioAtual}`);
//     break;
//   }

//   indiceDoUsuario++;

//   if (indiceDoUsuario === listaDeContatos.length) {
//     console.log(`Usuário não foi encontrado`);
//     break;
//   }
// }

// TODO Solução 3
let encontraUsuarioOuPercorreLista = false;
let indiceDoUsuario = 0;

while (!encontraUsuarioOuPercorreLista) {
  const usuarioAtual = listaDeContatos[indiceDoUsuario];

  if (usuarioAtual.startsWith('Z')) {
    encontraUsuarioOuPercorreLista = true;
    console.log(`Usuário encontrado: ${usuarioAtual}`);
  }

  indiceDoUsuario++;

  if (indiceDoUsuario === listaDeContatos.length) {
    encontraUsuarioOuPercorreLista = true;
    console.log(`Usuário não foi encontrado`);
  }
}
