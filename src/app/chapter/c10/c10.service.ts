import { Injectable } from '@angular/core';
import { Regulation } from './c10.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C10.1 (1) Grundlagen',
      text: "Für das richtige Vorgehen bei der Anmeldung einer EEA dient Formular C10.1.",
      selected: true
    },
    {
      id: 'r2',
      num: 'C10.2.2 (1) Meldepflicht an den VNB',
      text: 'Steckerfertige PV-Anlagen mit einer Leistung bis und mit 600W pro Bezügeranlage (Zählerstromkreis) sind dem VNB mit Formular C10.2.2 zu melden.',
      selected: true
    },
    {
      id: 'r3',
      num: 'C10.7 (2) Zusammenschluss zum Eigenverbrauch',
      text: 'Für das richtige Vorgehen bei der Gründung eines Zusammenschlusses zum Eigenverbrauch dient Formular C10.7.',
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

