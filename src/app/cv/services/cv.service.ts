import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', '', 44),
    new Cv(2, 'sellaouti', 'skander', 'enfant', '12324', '       ', 8),
    new Cv(3, 'Hever', 'Laurent', 'Computer Science', '4444', 'rotating_card_profile3.png',41),
  ]);

  #selectedCv =signal<Cv|null>(null);

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Signal<Cv[]> {
    return this.#cvs.asReadonly();
  }

  getSelectedCv() {
    return this.#selectedCv.asReadonly();
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }

}
