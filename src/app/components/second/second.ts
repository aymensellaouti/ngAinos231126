import { Component, effect, inject, input, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../config/routes.config';

@Component({
  imports: [RouterLink],
  selector: 'app-second',
  styles: '',
  template: `
    <p [routerLink]="['/hello','Sandrine']">Sandrine</p>
    <p [routerLink]="['/hello','Laurent']">Laurant</p>
    <p [routerLink]="['/hello','Sara']">Sara</p>
    <div class="alert alert-success">
      <p>Hello {{name()}}</p>
    </div>
  `,
})
export class Second {
  acr = inject(ActivatedRoute);
  router = inject(Router);
  name = input('');

  blacklist = signal(['aymen']);
  redirectEffect = effect(() => {
    const blacklist = this.blacklist();
    if (blacklist && blacklist.includes(this.name())) {
      this.router.navigate([APP_ROUTES.home]);
    }
  })
  // constructor() {
  //   // const name = this.acr.snapshot.params['name'];
  //   // if (this.blacklist().includes(name)) {
  //   //   this.router.navigate([APP_ROUTES.home])
  //   // }
  //   // this.name.set(name);
  // }
}
