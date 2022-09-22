import { Injectable } from '@angular/core';
import { Regulation } from './regulation.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C1.2	Geltungsbereich',
      text: 'I han en grosse Dick',
      selected: true
    },
    {
      id: 'r1',
      num: 'C1.2	Geltungsbereich',
      text: 'Michi het en kline',
      selected: true
    },
    {
      id: 'r1',
      num: 'C1.2	Geltungsbereich',
      text: 'I han en grosse Dick',
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

