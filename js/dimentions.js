export default class Dimention {
  constructor() {
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    this.heigth =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    this.sideTiles = 100;
    this.scale = 1;
  }

  start = () => {
    window.addEventListener('resize', (event) => {
      this.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      this.heigth =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      console.log(`Alto: ${this.heigth} | Ancho: ${this.width}`);
    });
  };

  getHorizontalTiles = () => {
    const endSide = this.sideTiles * this.scale;

    return Math.ceil((this.width - endSide) / endSide);
  };

  getVerticalTiles = () => {
    const endSide = this.sideTiles * this.scale;

    return Math.ceil((this.heigth - endSide) / endSide);
  };

  getTotalTiles = () => {
    return this.getHorizontalTiles() + this.getVerticalTiles();
  };
}
