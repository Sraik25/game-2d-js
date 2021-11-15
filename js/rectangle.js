'use strict';

export default class Rectangle {
  constructor(x, y, width, heigth) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    this.id = `r${x}${y}`;

    this.insertInDOM();
  }

  insertInDOM() {
    const { random, floor } = Math;

    const div = `<div id="${this.id}"></div>`;
    const html = document.getElementById('juego').innerHTML;
    const color = `#${floor(random() * 16777215).toString(16)}`;

    console.log({ div, html, color, id: this.id });
    document.getElementById('juego').innerHTML = html + div;

    //ADD: styles
    document.getElementById(`${this.id}`).style.position = 'absolute';
    document.getElementById(`${this.id}`).style.left = `${this.x}px`;
    document.getElementById(`${this.id}`).style.top = `${this.y}px`;
    document.getElementById(`${this.id}`).style.width = `${this.width}px`;
    document.getElementById(`${this.id}`).style.height = `${this.heigth}px`;
    document.getElementById(`${this.id}`).style.backgroundColor = color;
  }
}
