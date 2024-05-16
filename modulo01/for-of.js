const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56];
const usuarios = ['José', 'Antônia', 'Maria', 'Pedro'];

// * código imperativo
// TODO: Precisa de contador, código mais extenso, mais difícil de entender dependendo dos casos
// for (let contador = 0; contador < listaDeNumeros.length; contador++) {
//   console.log(listaDeNumeros[contador]);
// }

// let indiceDoNumero = 0;
// while (indiceDoNumero < listaDeNumeros.length) {
//   console.log(listaDeNumeros[indiceDoNumero]);
//   indiceDoNumero++;
// }

// * código declarativo
// TODO: Percorre a lista sem a necessidade de um contador, mais recomendado para trabalhar com listas
for (const numero of listaDeNumeros) {
  console.log(numero);
}

for (const usuario of usuarios) {
  console.log(usuario);
}
