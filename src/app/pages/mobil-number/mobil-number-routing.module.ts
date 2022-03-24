import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilNumberPage } from './mobil-number.page';

const routes: Routes = [
  {
    path: '',
    component: MobilNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilNumberPageRoutingModule {}
