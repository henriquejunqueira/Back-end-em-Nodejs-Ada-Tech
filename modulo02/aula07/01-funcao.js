// ! dentro dos parênteses da função é chamado de parãmetro
function cumprimenta(nome) {
  console.log(`Olá, ${nome}!`);
}

cumprimenta('João'); // ! dentro dos parênteses da chama da função é chamado de argumento
cumprimenta('Ana');
cumprimenta('Paula');

function cumprimentaComHora(nome, hora) {
  let cumprimento;
  if (hora < 6) {
    cumprimento = 'Boa madrugada';
  } else if (hora < 12) {
    cumprimento = 'Bom dia';
  } else if (hora < 18) {
    cumprimento = 'Boa tarde';
  } else {
    cumprimento = 'Boa noite';
  }

  console.log(`${cumprimento}, ${nome}!`);
}

cumprimentaComHora('Henrique', 10);
cumprimentaComHora('Marlon', 19);

function cumprimentaComHoraEArgumentos(nome, hora) {
  let cumprimento;

  // ! arguments[1] representa o parâmetro hora
  if (arguments[1] < 6) {
    cumprimento = 'Boa madrugada';
  } else if (arguments[1] < 12) {
    cumprimento = 'Bom dia';
  } else if (arguments[1] < 18) {
    cumprimento = 'Boa tarde';
  } else {
    cumprimento = 'Boa noite';
  }

  console.log(`${cumprimento}, ${arguments[0]}!`); // ! arguments[0] representa o parâmetro nome
}

cumprimentaComHoraEArgumentos('Fernanda', 3);
cumprimentaComHoraEArgumentos('Priscila', 22);
