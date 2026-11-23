import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-ng-class-example',
  styleUrl: './ng-class-example.css',
  templateUrl: './ng-class-example.html',
})
export class NgClassExample {
  isOn =signal(false);
}
