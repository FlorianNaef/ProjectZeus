import { Component, OnInit } from '@angular/core';

import { Regulation } from './c5.model';
import { RegulationService } from './c5.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c5.page.html',
  styleUrls: ['./c5.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
