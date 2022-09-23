import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Regulation } from './c5.model';
import { RegulationService } from './c5.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c5.page.html',
  styleUrls: ['./c5.page.scss'],
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
