import { Injectable } from '@angular/core';
import { Regulation } from './c6.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C6.2 (2) Steuerleitungen',
      text: "Die Anzahl Steuerleitungen zu weiteren Unterverteilungen sind unabhängig von Grösse und Anschluss der Unterverteilung frei durch den Installateur zu bestimmen. Bei allfällig zukünftig geforderten Steuermöglichkeiten von neu installierten oder bestehenden Verbrauchern sind die Steuerleitungen zu Lasten des Netz-anschlussnehmers nachzurüsten.",
      selected: true
    },
    {
      id: 'r2',
      num: 'C6.2 (7) Steuerleitungen',
      text: 'Die Nummerierung der Steuerleiter darf nach eigenen Vorgaben des Installateurs erstellt werden. Die Steuerfunktionen müssen durch den Installateur allerdings auf einer unmittelbar beim Steuerapparat dauerhaft befestigten Legende mit den zugehörigen Leiternummern beschriftet werden. Bei unvollständiger Beschriftung behält sich der VNB vor, die Mess- und Tarifapparate nicht zu montieren und die entstandenen Mehrkosten weiter zu verrechnen.',
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

