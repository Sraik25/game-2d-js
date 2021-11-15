import Keyword from './keywords.js';

/**
 * @class MainLopp es el loop principal para el juego
 * @property aps - actualizaciones por segundo
 * @property fps - frames por segundo
 */
export default class MainLoop {
  constructor() {
    this.executionId = null;
    this.lastRecord = 0;
    this.aps = 0;
    this.fps = 0;
  }

  try = (temporaryRecord) => {
    this.executionId = requestAnimationFrame(this.try);

    this.update(temporaryRecord);
    this.draw();

    if (temporaryRecord - this.lastRecord > 999) {
      this.lastRecord = temporaryRecord;
      console.log(`APS: ${this.aps} | FPS: ${this.fps}`);
      this.aps = 0;
      this.fps = 0;
    }
  };

  stop = () => {};

  update = (temporaryRecord) => {
    Keyword.resetKeywords();
    this.aps++;
  };

  draw = (temporaryRecord) => {
    this.fps++;
  };
}
