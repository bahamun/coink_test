import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full',
  },
  {
    path: 'entry',
    loadChildren: () =>
      import('./pages/entry/entry.module').then((m) => m.EntryPageModule),
  },
  {
    path: 'mobil-number',
    loadChildren: () =>
      import('./pages/mobil-number/mobil-number.module').then(
        (m) => m.MobilNumberPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'contract',
    loadChildren: () => import('./pages/contract/contract.module').then( m => m.ContractPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
