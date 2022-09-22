import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegulationPage } from './c12.page';

const routes: Routes = [
  {
    path: '',
    component: RegulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegulationsPageRoutingModule {}
