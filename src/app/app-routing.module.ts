import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

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
        path: 'c1',
        loadChildren: () => import('./chapter/c1/c1.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c3',
        loadChildren: () => import('./chapter/c3/c3.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c4',
        loadChildren: () => import('./chapter/c4/c4.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c5',
        loadChildren: () => import('./chapter/c5/c5.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c6',
        loadChildren: () => import('./chapter/c6/c6.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c7',
        loadChildren: () => import('./chapter/c7/c7.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c8',
        loadChildren: () => import('./chapter/c8/c8.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c10',
        loadChildren: () => import('./chapter/c1/c1.module').then(m => m.RegulationsPageModule)
      },
      {
        path: 'c12',
        loadChildren: () => import('./chapter/c1/c1.module').then(m => m.RegulationsPageModule)
      },
    ]
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'export',
    loadChildren: () => import('./export/export.module').then( m => m.ExportPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
