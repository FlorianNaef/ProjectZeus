import { Component, OnInit } from '@angular/core';

import { Regulation } from './regulation.model';
import { RegulationService } from './regulation.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulation.page.html',
  styleUrls: ['./regulation.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
