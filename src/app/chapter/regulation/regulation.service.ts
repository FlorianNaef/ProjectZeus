import { Injectable } from '@angular/core';
import { Regulation } from './regulation.model';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {
  private chapters: Regulation[] = [
    {
      id: 'r1',
      num: 'Kapitel 1',
      text: '...',
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

