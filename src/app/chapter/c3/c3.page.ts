import { Component, OnInit } from '@angular/core';

import { Regulation } from './c3.model';
import { RegulationService } from './c3.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c3.page.html',
  styleUrls: ['./c3.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
