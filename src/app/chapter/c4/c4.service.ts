import { Injectable } from '@angular/core';
import { Regulation } from './c4.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C4.2 (2) Bezüger-Überstromunterbrecher',
      text: 'Die Beschriftung der Bezüger-Überstromunterbrecher hat gemäss C1.5 (7) und den Vorgaben des Bundesamtes für Statistik zu erfolgen.',
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

