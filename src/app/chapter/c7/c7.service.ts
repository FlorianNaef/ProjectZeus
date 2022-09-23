import { Injectable } from '@angular/core';
import { Regulation } from './c7.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private regulation: Regulation[] = [
    {
      id: 'r1',
      num: 'C7.1 (2) Allgemeines',
      text: "Bauseitig sind Zählersteckklemmen nach den Vorgaben des VNB zu installieren.",
      selected: true
    },
    {
      id: 'r2',
      num: 'C7.1 (3) Allgemeines',
      text: 'Die Montage der Messeinrichtung durch den VNB erfolgt erst, wenn diese anschliessend dauerhaft in Betrieb stehen und die notwendige Kommunikationsverbindung zur Fernauslesung dauerhaft sichergestellt ist. Die Messeinrichtung wird durch den VNB ab dem Montagedatum verrechnet.',
      selected: true
    },
    {
      id: 'r3',
      num: 'C7.1 (4) Allgemeines',
      text: 'Wird die Messeinrichtung z.B. infolge Umbauarbeiten für mehr als einen Tag ausser Betrieb genommen, muss dies dem VNB gemeldet werden. Sollte die Ausschaltung nicht gemeldet werden, werden allfällige Aufwände des VNB dem Verursacher verrechnet.',
      selected: true
    },
    {
      id: 'r4',
      num: 'C7.1 (6) Allgemeines',
      text: 'Die Beschriftung der Messeinrichtung hat gemäss C1.5 (7) und den Vorgaben des Bundesamtes für Statistik zu erfolgen.',
      selected: true
    },
    {
      id: 'r5',
      num: 'C7.4 (3) Fernauslesung',
      text: 'Zur Anbindung weiterer Werke an die Fernauslesung der elektrischen Mess-einrichtung ist ein Installationsrohr M25 von der Messeinrichtung zu den weiteren Werkszählern (Wasser, Gas etc.) zu führen und eine Zugschnur einzuziehen. Das Rohr bzw. die Zugschnur ist beidseitig dauerhaft zu beschriften.',
      selected: true
    },
    {
      id: 'r6',
      num: 'C7.7 (2) Anordnung und Bezeichnung der Messeinrichtung',
      text: 'Die offiziellen Objekt- und Lagebezeichnungen haben gemäss C1.5 (7) und den Vorgaben des Bundesamtes für Statistik zu erfolgen.',
      selected: true
    },
    {
      id: 'r7',
      num: 'C7.8 (5) Nischen, Schutzkästen und Schliesssysteme',
      text: 'Als Schliessvorrichtung ist ein a) Vierkantdorn; b) ein Schliesszylinder mit Schlüssel KABA 5000 oder c) ein werkseigener Schliesszylinder einzusetzen. Die Zugangstüre ist entsprechend vorzubereiten.',
      selected: true
    },
    {
      id: 'r8',
      num: 'C7.9 (10) Messeinrichtungen mit Stromwandlern',
      text: 'Der Querschnitt der Leiter des Spannungspfades zwischen Messwandler und Zähler beträgt 2,5mm². Der Qurschnitt der Leiter des Strompfades zwischen Messwwandler und Zähler beträgt bis max. 15m Länge 4mm². Die Leiter müssen durchgängig verlegt werden, es sind keine Klemmen zulässig.',
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

