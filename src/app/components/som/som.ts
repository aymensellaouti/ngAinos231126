import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-som',
  styleUrl: './som.css',
  templateUrl: './som.html',
})
export class Som {
  x = signal(5);
  y = signal(7);
  // z = 12
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => {
    console.log('In DoubleZ');

    return 2 * this.z()
  })
}
