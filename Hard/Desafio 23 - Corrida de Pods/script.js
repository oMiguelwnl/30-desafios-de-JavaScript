class Race {
  constructor(...racers) {
    this.racers = racers;
  }
  getClassification() {
    const classification = {};
    for (let i = 0; i < this.racers.length; i++) {
      classification[`${i + 1}º`] = this.racers[i];
    }
    return classification;
  }
  updateclassification(str) {
    const [racer, action] = str.split(" ");
    if (action.includes("ELIMINATE")) {
      this.eliminateRacer(racer);
    } else {
      this.updateRacer(racer, action);
    }
  }
  updateRacer(racer, action) {
    const eliminated = this.racers.filter((racer) =>
      racer.includes("ELIMINATE")
    );
    const active = this.racers.filter((racer) => !racer.includes("ELIMINATE"));

    const currentPosition = active.indexOf(racer);
    const updatedPosition = currentPosition + Number(action) * -1;
    if (updatedPosition >= this.racers.length || updatedPosition < 0) {
      console.log("Erro! Atualização inválida");
      return;
    }
    active.splice(currentPosition, 1);

    this.racers = [
      ...active.slice(0, updatedPosition),
      racer,
      ...active.slice(updatedPosition),
      ...eliminated,
    ];
  }
  eliminateRacer(racer) {
    const eliminated = this.racers.filter((racer) =>
      racer.includes("ELIMINATE")
    );
    const active = this.racers.filter((racer) => !racer.includes("ELIMINATE"));

    active.splice(active.indexOf(racer), 1);

    this.racers = [...active, `${racer} ELIMINATED`, ...eliminated];
  }
}

const race1 = new Race("Alfa", "Beta", "Gama", "Delta");

console.log(race1.getClassification());
race1.updateclassification("Beta +1");

console.log(race1.getClassification());
race1.updateclassification("Gama -1");

console.log(race1.getClassification());
race1.updateclassification("Delta ELIMINATE");

console.log(race1.getClassification());
race1.updateclassification("Gama +2");

console.log(race1.getClassification());
race1.updateclassification(race1.getClassification());

console.log(race1.getClassification());
