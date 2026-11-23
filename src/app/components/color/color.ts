import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-color',
  styleUrl: './color.css',
  templateUrl: './color.html',
})
export class Color {
  defaultColor = 'red';
  bgc = this.defaultColor;

  changeColor(newColorInput: HTMLInputElement) {
    this.bgc = newColorInput.value;
    newColorInput.value = ''
  }

  reset() {
    this.bgc = this.defaultColor;
  }
}
