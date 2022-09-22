import { Component, OnInit } from '@angular/core';
import { Regulation } from 'src/app/chapter/regulation/regulation.model';
import { RegulationService } from 'src/app/chapter/regulation/regulation.service';

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
