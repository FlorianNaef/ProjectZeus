import { Component, OnInit } from '@angular/core';

import { Regulation } from './c1.model';
import { RegulationService } from './c1.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c1.page.html',
  styleUrls: ['./c1.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
