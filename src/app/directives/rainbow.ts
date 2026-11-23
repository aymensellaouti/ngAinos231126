import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text],textarea[appRainbow]',
  host: {
    '[style.color]': 'this.color()',
    '(keyup)': 'this.onKeyup()',
  },
})
export class Rainbow {
  color = signal('black');
  onKeyup() {
    this.color.set(this.getRandomHexColor());
  }
  getRandomHexColor() {
    const randomInt = Math.floor(Math.random() * 0x1000000); // 0 to 16777215 (#ffffff)
    return '#' + randomInt.toString(16).padStart(6, '0');
  }
  constructor() {
    console.log('AppRainbow');
  }
}
