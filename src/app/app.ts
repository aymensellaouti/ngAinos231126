import { Component } from '@angular/core';
import { First } from './components/first/first';
import { Second } from './components/second/second';
import { Color } from './components/color/color';
import { Som } from './components/som/som';
import { TtcComponent } from './signals/ttc/ttc.component';
import { Pere } from './interactionInterComposants/pere/pere';
import { CvPage } from './cv/cv-page/cv-page';
import { NgStyleExample } from './directives/ng-style-example/ng-style-example';
import { NgClassExample } from './directives/ng-class-example/ng-class-example';
import { TodoComponent } from './todo/todo/todo.component';

@Component({
  // Tout ce dont j'ai besoin dans la vue
  imports: [First, Second, Color, Som, TtcComponent, Pere, CvPage, NgStyleExample, NgClassExample, TodoComponent],
  // Comment appeler mon composant
  selector: 'app-root',
  // mon css
  styleUrl: './app.css',
  // mon fichier html (ma vue)
  templateUrl: './app.html',
})
export class App {
}
