import { Component, OnInit } from '@angular/core';
import { Regulation } from 'src/app/chapter/c1/c1.model';
import { RegulationService } from 'src/app/chapter/c1/c1.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  regulation: Regulation[];

  constructor(private regulationService: RegulationService) { }

  ngOnInit() {
  }

}
