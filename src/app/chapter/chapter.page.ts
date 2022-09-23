import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Chapter} from './chapter.model';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {
  chapter: Chapter[];

  constructor(private chapterService: ChapterService, private router: Router) { }

  ngOnInit() {
    this.chapter = this.chapterService.getAllChapters();
  }


  enterRegulation(regulation) {
    this.router.navigateByUrl('chapter/'+regulation);
  }

  enterEdit(){
    this.router.navigateByUrl('edit');
  }

}
