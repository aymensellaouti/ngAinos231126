import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-color',
  styleUrl: './color.css',
  templateUrl: './color.html',
})
export class Color {
  defaultColor = 'red';
  bgc = signal(this.defaultColor);

  constructor() {
    setTimeout(() => {
      this.bgc.set('yellow');
    },2000)
  }
  changeColor(newColorInput: HTMLInputElement) {
    this.bgc.set(newColorInput.value);
    newColorInput.value = ''
  }

  reset() {
    this.bgc.set(this.defaultColor);
  }
}
