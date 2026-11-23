import { Component } from '@angular/core';
import { Second } from '../second/second';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  imports: [Second],
  selector: 'app-first',
  styleUrl: './first.css',
  templateUrl: './first.html',
})
export class First {
  isHidden = false;
  name = 'laurent';
  showHide() {
    this.isHidden = !this.isHidden
  }

  constructor() {
    setTimeout(() => {
      this.name = 'aymen';
    },1000);
    let x = 0;
    // setInterval(() =>{
    //   console.log(x++);

    // },1000)
  }
}
