import { Component, OnInit } from '@angular/core';

import { Regulation } from './c12.model';
import { RegulationService } from './c12.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c12.page.html',
  styleUrls: ['./c12.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
