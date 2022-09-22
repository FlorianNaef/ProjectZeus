import { Injectable } from '@angular/core';
import { Regulation } from './c8.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C8.4 (1) Übrige Verbraucheranlagen',
      text: "Eine allfällige Steuerung von übrigen Verbraucheranlagen erfolgt gemäss C1.9.4 (3) und C1.9.5 (2). Für Ladestationen gelten die Bestimmungen gemäss Kapitel 12.",
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

