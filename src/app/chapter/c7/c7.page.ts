import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Regulation } from './c7.model';
import { RegulationService } from './c7.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c7.page.html',
  styleUrls: ['./c7.page.scss'],
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
