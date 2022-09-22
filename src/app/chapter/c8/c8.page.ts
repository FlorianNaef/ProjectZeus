import { Component, OnInit } from '@angular/core';

import { Regulation } from './c8.model';
import { RegulationService } from './c8.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c8.page.html',
  styleUrls: ['./c8.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
