class Location {
  constructor(x, y, z) {
    this.coordinates = [x, y, z];
  }

  static sector = {
    "+++": "Alfa",
    "++-": "Beta",
    "+-+": "Gama",
    "+--": "Delta",
    "-++": "Épsilon",
    "-+-": "Zeta",
    "--+": "Sigma",
    "---": "Ômega",
  };

  getSector() {
    const signs = this.coordinates
      .map((coordinate) => (coordinate >= 0 ? "+" : "-"))
      .join("");
    return Location.sector[signs];
  }

  getDistance() {
    const [x, y, z] = this.coordinates;
    return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
  }
}

const point1 = new Location(37, 42, 15);
const point2 = new Location(144, 49, 0);
const point3 = new Location(-37, 0, 0);
const point4 = new Location(-19, -80, -32);

console.log(point1.getSector(), `\nDistance: ${point1.getDistance()} units`);
console.log(point2.getSector(), `\nDistance: ${point2.getDistance()} units`);
console.log(point3.getSector(), `\nDistance: ${point3.getDistance()} units`);
console.log(point4.getSector(), `\nDistance: ${point4.getDistance()} units`);
