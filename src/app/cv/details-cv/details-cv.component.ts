import { Component, computed, effect, inject, input, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/routes.config";
import { DefaultImagePipe } from "../pipes/default-image-pipe";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {
  id = input.required<number>();
  cvService = inject(CvService);
  cv = computed<Cv | null>(() => this.cvService.findCvById(this.id()));
  router = inject(Router);
  notFoundEffect = effect(() => {
    if (!this.cv()) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  });

  deleteCv() {
    const cv = this.cv();
    if(cv) {
      this.cvService.deleteCv(cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
