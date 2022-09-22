import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterPage } from './chapter.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterPage
  },
  {
    path: 'regulations',
    loadChildren: () => import('./c1/c1.module').then( m => m.RegulationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterPageRoutingModule {}
