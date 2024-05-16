const user = {
  name: 'JoSÉ mARIa SOUZA santos',
  email: 'JOSE.M1@gmail.com',
  age: 23,
  address: 'X Street',
};

const numeros = [11, 352, 14125];
// numeros[200] = 321;

// for (const key of user) {
//   console.log(key);
// }

// ? Quando devo usar for...of? Quando for manipular arrays
// ? Quando devo usar for...in? Quando for manipular objetos

// ! Má prática, evitar ao máximo
for (const key in numeros) {
  // console.log(key);
  console.log(numeros[key]);
}

// for (const key in user) {
//   console.log(user[key]);
// }

// for (const key in user) {
//   let value = user[key];
//   if (key === 'name' || key === 'email') {
//     user[key] = 'novo valor'; // ! altera o valor no determinado índice
//     user[key] = user[key].toLowerCase(); // ! padroniza o valor no determinado índice para minúsculo
//     user[key] = value.toLowerCase(); // ! padroniza também o valor no determinado índice para minúsculo
//   }
// }

// for (const key in user) {
//   if (key === 'name' || key === 'email') {
//     user[key] = user[key].toLowerCase(); // ! padroniza o valor no determinado índice para minúsculo
//   }
// }

// for (const key in user) {
//   if (key === 'name') {
//     const names = user[key].split(' ');
//     user[key] = ''; // ! limpa o nome desconfigurado do array
//     for (const name of names) {
//       const normalizedName = name.toLowerCase(); // ? joga o nome para minúsculo

//   const [primeiraLetra, restoDoNome] = normalizedName;
// const [primeiraLetra, restoDoNome] = normalizedName; // ? sem os três pontos, é pega apenas a próxima letra
//       const [primeiraLetra, ...restoDoNome] = normalizedName; // ? com os três pontos, a primeira letra de cada palavra do nome é pega

// ? user[key] pega o valor que tinha antes
// ? + ' ' + adiciona um espaço para separar as palavras
// ? primeiraLetra.toUpperCase() coloca a primeira letra em maiúscula
// ? restoDoNome adiciona o restante das letras, porém é um array e as letras serão sepadas pos vírgula
// ? restoDoNome.join('') troca a vírgula entre as palavras por falta de espaço, transformando em string
// user[key] =
//   user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('&');
//       user[key] =
//         user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('');
//       user[key] = user[key].trim();
//     }
//   }

//   if (key === 'email') {
//     user[key] = user[key].toLowerCase(); // ! padroniza o valor no determinado índice para minúsculo
//   }
// }

// console.log(user);

// ! parei aos 45 minutos
