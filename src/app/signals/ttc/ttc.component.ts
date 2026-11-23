import { Component, computed, effect, inject, Injector, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css',
  imports: [FormsModule]
})
export class TtcComponent {

  injector = inject(Injector)

  /**
   * var entière
   * elle représente le prix hors taxe du produit
   */
  priceHt = signal(0);
  taxe = signal(18);
  qty = signal(1);

  // à vérifier
  unitaireTtc = computed(() => (this.priceHt() * (100 + this.taxe())) / 100);
  discount = computed(() => {
    let discountPercent = 0;
    if (this.qty() > 10 && this.qty() <= 15) {
      discountPercent = 20;
    } else if (this.qty() > 15) {
      discountPercent = 30;
    }
    return (this.unitaireTtc() * discountPercent) / 100;
  });
  totalTtc = computed(() => (this.unitaireTtc() - this.discount()) * this.qty());

  // hightPriceAlertEffect = effect(() => {
  //   if(this.totalTtc() > 1000) {
  //     alert("Le prix dépasse les 1000 euros faite attention à votre budget")
  //   }
  // })
  alerter() {
    effect(() => {
      if (this.totalTtc() > 1000) {
        alert('Le prix dépasse les 1000 euros faite attention à votre budget');
      }
    }, {
      injector: this.injector
    });
  }
  constructor() {
    effect(() => {

    })
  }

}
