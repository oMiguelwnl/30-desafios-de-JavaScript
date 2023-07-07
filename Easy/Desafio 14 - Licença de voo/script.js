class Pilot {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.FlyingLicense = false;
  }
  generateFlyingLicense() {
    let license = "";

    //licensa vai concatenar se a letra existir(concatenar em maiuscula),senao coloca o numero 9
    for (let i = 0; i < 5; i++) {
      license += this.lastName[i] ? this.lastName[i].toUpperCase() : "9";
    }
    //concatena um traco
    license += "-";

    //recebe o o ultimo numero do ano ex:1977 o primeiro 7
    license += this.birthday.getFullYear().toString()[2];

    //dois digitos do mes de nascimento
    license += this.getBirthdayFullMounth();
    license += this.birthday.getFullYear().toString()[3];

    license += ".";

    //Primeira letra do primeiro nome
    license += this.firstName[0].toLowerCase();

    this.FlyingLicense = license;
  }
  getBirthdayFullMounth() {
    if (this.birthday.getMonth() < 9) {
      return `0 ${this.birthday.getMonth() + 1}`;
    } else {
      return `${this.birthday.getMounth() + 1}`;
    }
  }
}

const pilot1 = new Pilot("John", "Doe", "05-25-1977");
const pilot2 = new Pilot("Hai", "Jordan", "09-02-1995");
const pilot3 = new Pilot("Carol", "Danvers", "08-17-1968");
const pilot4 = new Pilot("Poe", "Dameron", "03-09-1979");

pilot1.generateFlyingLicense();
pilot2.generateFlyingLicense();
pilot3.generateFlyingLicense();
pilot4.generateFlyingLicense();

console.log(pilot1);
console.log(pilot2);
console.log(pilot3);
console.log(pilot4);
