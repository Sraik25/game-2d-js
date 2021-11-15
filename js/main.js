import Dimention from './dimentions.js';
import Keyword from './keywords.js';
import MainLoop from './mainLoop.js';
import Rectangle from './rectangle.js';

addEventListener('DOMContentLoaded', () => {
  // const mainLoop = new MainLoop();
  const main = new Main();
  main.run();
});

class Main {
  mainLoop = new MainLoop();
  dimentions = new Dimention();
  constructor() {}

  run = () => {
    console.log(`Juego iniciado`);
    Keyword.start();
    this.dimentions.start();
    this.mainLoop.try();
    this.refreshTiles();
  };

  refreshTiles = () => {
    document.getElementById('juego').innerHTML = '';
    for (let y = 0; y < this.dimentions.getVerticalTiles(); y++) {
      for (let x = 0; x < this.dimentions.getHorizontalTiles(); x++) {
        const r = new Rectangle(
          x * this.dimentions.sideTiles,
          y * this.dimentions.sideTiles,
          this.dimentions.sideTiles,
          this.dimentions.sideTiles
        );
      }
    }
  };
}
