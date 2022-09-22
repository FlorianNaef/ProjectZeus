import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private chapters: Chapter[] = [
    {
      id: 'c1',
      title: 'C1 Allgemeines',
    },
    {
      id: 'c3',
      title: 'C3 Personen- und Sachschutz',
    },
    {
      id: 'c4',
      title: 'C4 Überstromschutz',
    },
    {
      id: 'c5',
      title: 'C5 Netz- und Hausanschlüsse',
    },
    {
      id: 'c6',
      title: 'C6 Bezüger- und Steuerleitungen',
    },
    {
      id: 'c7',
      title: 'C7 Mess-, Steuer- und Kommunikationseinrichtungen',
    },
    {
      id: 'c8',
      title: 'C8 Verbraucheranlagen',
    },
    {
      id: 'c10',
      title: 'C10 Energieerzeugungsanlagen (EEA)',
    },
    {
      id: 'c12',
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

