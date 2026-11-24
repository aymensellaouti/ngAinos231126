import { Component, inject, signal } from '@angular/core';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { Cv } from '../model/cv';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Btc2UsdPipe } from '../../pipes/btc2-usd-pipe';
import { LoggerService } from '../../services/logger.service';
import { SayHello } from '../../services/sayHello.service';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from '../embauche/embauche.component';

@Component({
  imports: [CvList, CvCard, DatePipe, UpperCasePipe, Btc2UsdPipe, CurrencyPipe, EmbaucheComponent],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html'
})
export class CvPage {
  today = new Date();
  cvService = inject(CvService);
  selectedCv = this.cvService.getSelectedCv();
  constructor(private logger: LoggerService, private sayHello: SayHello) {
    logger.log('je suis le cvPageComponent');
    this.sayHello.hello()
  }
  cvs = this.cvService.getCvs()
}
