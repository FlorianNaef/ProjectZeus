import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Regulation } from './c8.model';
import { RegulationService } from './c8.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c8.page.html',
  styleUrls: ['./c8.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService, private router: Router) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

  enterChapter(){
    this.router.navigateByUrl('chapter');
  }

}
