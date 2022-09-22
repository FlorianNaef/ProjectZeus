import { Injectable } from '@angular/core';
import { Regulation } from './c12.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C12.2 (3) Allgemeines',
      text: "Ladeinfrastrukturen dürfen die Leistungen gemäss untenstehender Tabelle nicht überschreiten. Anschlussüberstromunterbrecher	Maximale Leistung der Ladeinfrastruktur bis 40A: 11kVA, 63 – 80A:	22kVA, 100 – 125A:	44kVA, 160 – 200A:	66kVA, >200A:	nach Absprache. Die Bewilligung durch den VNB aufgrund des TAG bleibt vorbehalten.",
      selected: true
    },

  ];

  constructor() { }

  getAllRegulations(){
    return [...this.regulation];
  }

  getRegulation(regulationId: string){
    return this.regulation.find(regulation => {
      return regulation.id === regulationId;
    });
  };

}

