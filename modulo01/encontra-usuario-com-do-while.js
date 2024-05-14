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

// const listaDeContatos = [];

let encontraUsuarioOuPercorreLista = false;
let indiceDoUsuario = 0;

do {
  console.log('Rodei?');
  const usuarioAtual = listaDeContatos[indiceDoUsuario];

  if (usuarioAtual && usuarioAtual.startsWith('Z')) {
    encontraUsuarioOuPercorreLista = true;
    console.log(`Usuário encontrado: ${usuarioAtual}`);
  }

  indiceDoUsuario++;

  if (indiceDoUsuario >= listaDeContatos.length) {
    encontraUsuarioOuPercorreLista = true;
    console.log(`Usuário não foi encontrado`);
  }
} while (!encontraUsuarioOuPercorreLista);
