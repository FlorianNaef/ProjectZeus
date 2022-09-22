import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private chapters: Chapter[] = [
    {
      id: '1',
      title: 'C1 Allgemeines',
    },
    {
      id: '3',
      title: 'C3 Personen- und Sachschutz',
    },
    {
      id: '4',
      title: 'C4 Überstromschutz',
    },
    {
      id: '5',
      title: 'C5 Netz- und Hausanschlüsse',
    },
    {
      id: '6',
      title: 'C6 Bezüger- und Steuerleitungen',
    },
    {
      id: '7',
      title: 'C7 Mess-, Steuer- und Kommunikationseinrichtungen',
    },
    {
      id: '8',
      title: 'C8 Verbraucheranlagen',
    },
    {
      id: '10',
      title: 'C10 Energieerzeugungsanlagen (EEA',
    },
    {
      id: '12',
      title: 'C12 Ladeinfrastruktur für Elektrofahrzeuge',
    },

  ];

  constructor() { }

  getAllChapters(){
    return [...this.chapters];
  }

  getChapter(chapterId: string){
    return this.chapters.find(chapter => {
      return chapter.id === chapterId;
    });
  };

}

