import { Injectable } from '@angular/core';
import { Regulation } from './c3.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C3.2.1 (1) Erstellung der Erder',
      text: "Die Erdungsleitung ist vor Inbetriebnahme des Hausanschlusses zum Standort des Hausanschlusskastens (Einspeisefeld) zu führen.",
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

