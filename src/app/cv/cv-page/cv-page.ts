import { Component, signal } from '@angular/core';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { Cv } from '../model/cv';

@Component({
  imports: [CvList, CvCard],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  selectedCv = signal<Cv | null>(null);
  cvs = signal([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', 'rotating_card_profile2.png', 44),
    new Cv(2, 'Hever', 'Laurent', 'Computer Science', '4444', 'rotating_card_profile3.png',41),
  ]);
}
