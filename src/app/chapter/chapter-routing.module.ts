import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterPage } from './chapter.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterPage
  },
  {
    path: 'c1',
    loadChildren: () => import('./c1/c1.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c3',
    loadChildren: () => import('./c3/c3.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c4',
    loadChildren: () => import('./c4/c4.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c5',
    loadChildren: () => import('./c5/c5.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c6',
    loadChildren: () => import('./c6/c6.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c7',
    loadChildren: () => import('./c7/c7.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c8',
    loadChildren: () => import('./c8/c8.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c10',
    loadChildren: () => import('./c10/c10.module').then( m => m.RegulationsPageModule)
  },
  {
    path: 'c12',
    loadChildren: () => import('./c12/c12.module').then( m => m.RegulationsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterPageRoutingModule {}
