import { Component, signal } from '@angular/core';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { Cv } from '../model/cv';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Btc2UsdPipe } from '../../pipes/btc2-usd-pipe';

@Component({
  imports: [CvList, CvCard, DatePipe, UpperCasePipe, Btc2UsdPipe, CurrencyPipe],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  today = new Date();
  selectedCv = signal<Cv | null>(null);
  cvs = signal([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', '', 44),
    new Cv(2, 'sellaouti', 'skander', 'enfant', '12324', '       ', 8),
    new Cv(3, 'Hever', 'Laurent', 'Computer Science', '4444', 'rotating_card_profile3.png',41),
  ]);
}
