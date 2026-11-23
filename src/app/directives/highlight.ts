import { Directive, HostBinding, HostListener, input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]':'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class Highlight implements OnInit{
  ngOnInit(): void {
    this.bgc = signal(this.out());
  }
  in = input('yellow');
  out = input('red');
  bgc = signal(this.out());

  onMouseEnter() {
    this.bgc.set(this.in())
  }
  onMouseLeave() {
    this.bgc.set(this.out())
  }
}
