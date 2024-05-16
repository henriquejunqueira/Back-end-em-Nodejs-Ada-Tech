// TODO: Criação do animal como variável
// const especieDoAnimal1 = 'Canis Lupus';
// const habitatComumDoAnimal1 = 'Florestas dos EUA';
// const expectativaDeVidaDoAnimal1 = 20;
// const animalTerrestre1 = true;

// TODO: Criação do animal como objeto
const animal = {
  especie: 'Canis Lupus',
  habitatComum: 'Florestas dos EUA',
  expectativaDeVida: 20,
  'animal Terrestre': true,
};

// ! Acessando propriedades do animal
// console.log(animal);
// console.log(animal.animalTerrestre);
console.log(animal['animal Terrestre']);
console.log(animal.especie);

// ! Adicionando propriedades ao objeto animal
// animal.populacao = 600000000;
// animal.populacao = 6 * 10 ** 9; // 600 milhões
animal.populacao = 600_000_000; // ! o underline está apenas auxiliando na visualização, não é obrigatório
console.log(animal.populacao);
