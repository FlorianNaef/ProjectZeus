import { Component, OnInit } from '@angular/core';

import { Regulation } from './c6.model';
import { RegulationService } from './c6.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c6.page.html',
  styleUrls: ['./c6.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
