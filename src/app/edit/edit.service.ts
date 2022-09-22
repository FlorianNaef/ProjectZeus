import { Injectable } from '@angular/core';
import { Regulation } from './chapter/regulation/regulation.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: '2.3',
      text: '...',
      selected: true
    },
  ];

  constructor() { }

  getRegulation(regulationId: string){
    return this.regulation.find(regulation => {
      return regulation.id === regulationId;
    });
  };

}

