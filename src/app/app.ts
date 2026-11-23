import { Component } from '@angular/core';
import { First } from './components/first/first';
import { Second } from './components/second/second';
import { Color } from './components/color/color';
import { Som } from './components/som/som';

@Component({
  // Tout ce dont j'ai besoin dans la vue
  imports: [First, Second, Color, Som],
  // Comment appeler mon composant
  selector: 'app-root',
  // mon css
  styleUrl: './app.css',
  // mon fichier html (ma vue)
  templateUrl: './app.html',
})
export class App {
}
