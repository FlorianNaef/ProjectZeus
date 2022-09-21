import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private chapters: Chapter[] = [
    {
      id: 'c1',
      title: 'Kapitel 1',
    },
    {
      id: 'c2',
      title: 'Kapitel 2',
    },
    {
      id: 'c3',
      title: 'Kapitel 3',
    },
    {
      id: 'c4',
      title: 'Kapitel 4',
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

