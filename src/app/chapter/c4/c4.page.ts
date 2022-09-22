import { Component, OnInit } from '@angular/core';

import { Regulation } from './c4.model';
import { RegulationService } from './c4.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './c4.page.html',
  styleUrls: ['./c4.page.scss'],
})
export class RegulationPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
    this.regulation = this.regulationService.getAllRegulations();
  }

}
