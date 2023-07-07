const dataBase = ["erick_14", "pam_ls2", "VICTOR_99A"];

function validateUser(userName) {
  if (userName.length < 4 || userName.length > 32) {
    console.log("Tamanho Inválido");
    return false;
  }
  if (userName.match(/\W/)) {
    // Caracteres que não são letras, números ou underscore.
    console.log("Caracters Inválidos");
    return false;
  }
  if (userName.match(/^[_0-9]/)) {
    // Verifica se o primeiro caractere é uma letra.
    console.log("Caracters Inválidos");
    return false;
  }
  if (userName.match(/_$/)) {
    // Verifica se existe um _ no final da string.
    console.log("Caracters Inválidos");
    return false;
  }
  if (
    !(userName.match(/[A-Za-z]/) && userName.match(/[0-9]/)) ||
    !userName.match(/_/) // Verifica se não tem um número, uma letra e um _.
  ) {
    console.log("É necessario um de cada tipo de caracter");
    return false;
  }
  const userNameAlreadyExists = dataBase.includes(userName); // Verifica se o nome já existe no dataBase.

  if (userNameAlreadyExists) {
    console.log("Nome do Usuário ja existe");
    return false;
  }
  return true; // Se ele chegou até aqui, ele não quebrou nenhuma regra.
}

console.log(validateUser("52alfred")); // true
console.log(validateUser("erick_14")); // false (já existe no dataBase)
console.log(validateUser("josh_g15")); // true
console.log(validateUser("hugo123")); // true
console.log(validateUser("k 9")); // false (caractere inválido)
