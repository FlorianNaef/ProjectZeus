import { Injectable } from '@angular/core';
import { Regulation } from './c5.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C5.3 (2) Provisorische und temporäre Netzanschlüsse',
      text: "Vor dem Anschluss von provisorischen und temporären Anschlüssen ist das Anmeldeformular C5.3 auszufüllen.",
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

