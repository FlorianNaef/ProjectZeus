import { Injectable } from '@angular/core';
import { Regulation } from './c5.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C1.2 (3) Geltungsbereich',
      text: "Vorliegende Bestimmungen gelten als harmonisierte Ergänzungen im Verteilnetzgebiet der Mitglieder des Elektrizitätswerke-Verbandes St.Gallen-Appenzell und können durch diese übernommen, ergänzt oder geändert werden.",
      selected: true
    },
    {
      id: 'r1',
      num: 'C1.5 (7) (Haus-)Anschlusspunkt (AP) und Verknüpfungspunkt (V)',
      text: 'Sämtliche Beschriftungen (Wohnungen, Messeinrichtungen, Bezüger-Überstrom-unterbrecher, Unterverteilungen, Sonnerietaster usw.) sind von Beginn der Planung bis zur Ausführung nach den Vorgaben des Bundesamtes für Statistik vorzunehmen, welche auf dem Formular C1.5 ersichtlich sind.',
      selected: true
    },
    {
      id: 'r1',
      num: 'C1.9.4 (3)	Abwendung eines gefährdeten oder gestörten Netzbetriebs',
      text: 'Folgende Verbraucher sind zur Abwendung eines gefährdeten oder gestörten Netzzustands mit einem Sperrschütz auszurüsten (unabhängig von einer 24-h-Freigabe), welcher es dem VNB erlaubt, die Verbraucher bei Bedarf auszuschalten:',
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

