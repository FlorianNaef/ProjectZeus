import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chapter',
    children:[
      {
        path: '',
        loadChildren: () => import('./chapter/chapter.module').then( m => m.ChapterPageModule)
      },
      {
        path: 'regulation',
        loadChildren: () => import('./chapter/regulation/regulation.module').then(m => m.RegulationsPageModule)
      }
    ]
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'export',
    loadChildren: () => import('./export/export.module').then( m => m.ExportPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
