export default class Joystick {
  object = null;
  eventsAvailable = 'ongamepadconnected' in window;
  connected = false;

  start = () => {
    if (this.eventsAvailable) {
      window.addEventListener('gamepadconnected', this.connect);
      window.addEventListener('gamepaddisconnected', this.connect);
    } else {
      this.upgrade();
    }
  };

  connect = (event = GamepadEvent) => {
    this.object = event.gamepad;
  };

  disconnect = (event = GamepadEvent) => {
    console.log(
      `Mando desconectado del índice ${event.gamepad.index} ${event.gamepad.id}`
    );
  };

  upgrade = () => {
    if (!this.eventsAvailable) {
      try {
      } catch (error) {}
    }
  };

  identify = () => {};
}
