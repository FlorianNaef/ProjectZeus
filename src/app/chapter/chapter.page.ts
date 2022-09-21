import { Component, OnInit } from '@angular/core';

import { Chapters} from './chapter.model';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {
  chapter: Chapters[];

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapter = this.chapterService.getAllChapters();
  }

}
