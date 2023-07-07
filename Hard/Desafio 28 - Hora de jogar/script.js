class Explorer {
  // Características gerais dos personagens
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.experience = 0;
    this.expToNextLevel = 110;
    this.knowPlanets = [];
    this.terrainExpertise = [];
    this.alive = true;
  }

  // Rank dos personagens
  get Rank() {
    if (this.level < 10) return "Newbie";
    if (this.level < 30) return "Explorer";
    if (this.level < 50) return "Veterano";
    if (this.level < 80) return "Elite";
    if (this.level < 99) return "Mestre";
    return "Legend";
  }

  // Pontos de Experiência de cada tipo de planeta.
  static explorationHandler = {
    pacific: (diceResult) => (diceResult >= 5 ? 15 : 0),
    neutral: (diceResult) => (diceResult >= 7 ? 25 : 0),
    hostile: (diceResult) => (diceResult >= 9 ? 50 : 10),
  };

  // Xp up
  gainExperience(points) {
    this.experience += points;

    // O level 99 não pode mais subir de nível.
    if (this.level === 99) {
      return;
    }

    if (points < this.expToNextLevel) {
      // Pontos de experiência recebidos não são suficientes para alcançar o próximo nível.
      this.expToNextLevel -= points;
      return;
    }

    // Subir de nível
    this.level++;

    // Quantidade de pontos necessários para alcançar o próximo nível após receber os pontos de experiência.
    const newExpToNextLevel =
      100 + 10 * this.level - (points - this.expToNextLevel);

    // Ele somente irá uppar de nível caso o personagem não estiver no nível 99.
    this.expToNextLevel = this.level !== 99 ? newExpToNextLevel : 0;

    // Subiu de nível
    console.log(
      `Level up! You are now level ${this.level}. Experience to next level: ${this.expToNextLevel}`
    );
  }

  // Explorer
  explore(planet) {
    // Caso o personagem esteja morto
    if (!this.alive) {
      console.log("You are dead");
      return;
    }

    const { id, hostility, terrain } = planet; // Cada planeta vai ter um id, nível de hostilidade e um tipo de terreno.

    // Resultado da exploração
    const dice1 = Math.floor(1 + Math.random() * 6);
    const dice2 = Math.floor(1 + Math.random() * 6);

    const bonus = this.terrainExpertise[terrain] > 2 ? 1 : 0; // Verifica se a especialização do explorador em um determinado terreno é maior que 2. Se for, a variável bônus receberá o valor 1.

    const dices = dice1 + dice2 + bonus; // Resultado total dos lançamentos dos dados

    console.log(`Rolled ${dice1} and ${dice2} ${bonus ? "+1 bonus" : ""}`); // Mensagem que informa os resultados dos lançamentos dos dados.

    if (dices === 12) {
      this.terrainExpertise[terrain] = this.terrainExpertise[terrain] + 1 || 1; // Após 3 resultados 12 em um planeta do mesmo terreno, o explorador se torna um especialista naquele terreno e recebe +1 de bônus.
    }

    // Resultado 2 em planetas hostis o explorador morre.
    if (dices === 2 && hostility === "hostile") {
      console.log("You're dead");
      this.alive = false;
      return;
    }

    // Results
    const handler = Explorer.explorationHandler[hostility];
    const obtainedExperience = handler(dices); // Pontuação de experiência calculada pela função handler com base nos dados fornecidos.

    this.gainExperience(obtainedExperience); // Adiciona essa pontuação de experiência à experiência total do explorador.

    // Planets with success
    if (obtainedExperience > 10) {
      const planetAlreadyExplored = this.knowPlanets.find(
        (planet) => planet.id === id
      );
      if (!planetAlreadyExplored) {
        this.knowPlanets.push(planet);
      }
      console.log(`Success! Earned ${obtainedExperience} pts.`);
    } else {
      console.log(`Failure! Earned ${obtainedExperience} pts.`);
    }
  }
}

const Reinhard = new Explorer("Reinhard von Lohengramm");

const planetz = {
  id: 1,
  name: "Planet Z",
  hostility: "hostile",
  terrain: "desert",
};

const Avalon = {
  id: 2,
  name: "valon",
  hostility: "pacific",
  terrain: "forest",
};

const novaris = {
  id: 3,
  name: "Novaris",
  hostility: "neutral",
  terrain: "snow",
};

const andor = {
  id: 4,
  name: "Andor",
  hostility: "neutral",
  terrain: "snow",
};

setInterval(() => {
  Reinhard.explore(planetz);
  Reinhard.explore(Avalon);
  Reinhard.explore(novaris);
  Reinhard.explore(andor);

  console.log(Reinhard);
}, 5000);
