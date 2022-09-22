import { Component, OnInit } from '@angular/core';

import { Regulation } from './c7.model';
import { RegulationService } from './c7.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c7.page.html',
  styleUrls: ['./c7.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
