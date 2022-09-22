import { Component, OnInit } from '@angular/core';

import { Regulation } from './c10.model';
import { RegulationService } from './c10.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c10.page.html',
  styleUrls: ['./c10.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
