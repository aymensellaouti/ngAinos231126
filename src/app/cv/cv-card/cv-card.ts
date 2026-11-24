import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image-pipe';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  imports: [DefaultImagePipe],
  selector: 'app-cv-card',
  styleUrl: './cv-card.css',
  templateUrl: './cv-card.html',
})
export class CvCard {
  cv = input<Cv | null>(null);
  toastr = inject(ToastrService);
  embaucheService = inject(EmbaucheService)
  embaucher() {
    const cv = this.cv();
    if (cv) {
      if (this.embaucheService.embaucher(cv)) {
        this.toastr.success(`${cv.name} a été embauché avec succès`);
      } else {
        this.toastr.warning(`${cv.name} a été déjà embauché`);
      }
    }
  }
}
