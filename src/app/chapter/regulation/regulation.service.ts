import { Injectable } from '@angular/core';
import { Regulation } from './regulation.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private chapters: Regulation[] = [
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

  getAllChapters(){
    return [...this.chapters];
  }

  getChapter(chapterId: string){
    return this.chapters.find(chapter => {
      return chapter.id === chapterId;
    });
  };

}

