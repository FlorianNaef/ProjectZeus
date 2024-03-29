import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regulation } from 'src/app/chapter/c1/c1.model';
import { RegulationService } from 'src/app/chapter/c1/c1.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService, private router: Router) { }

  ngOnInit() {
  }

  enterExport(){
    this.router.navigateByUrl('export');
  }

  enterChapter(){
    this.router.navigateByUrl('chapter');
  }

}
