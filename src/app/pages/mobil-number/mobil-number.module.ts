import { ErrorModalComponent } from './../../components/modals/error-modal/error-modal.component';
import { HeaderPageComponent } from './../../components/header-page/header-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilNumberPageRoutingModule } from './mobil-number-routing.module';

import { MobilNumberPage } from './mobil-number.page';
import { TouchPanelComponent } from 'src/app/components/touch-panel/touch-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilNumberPageRoutingModule,
  ],
  declarations: [
    MobilNumberPage,
    HeaderPageComponent,
    TouchPanelComponent,
    ErrorModalComponent,
  ],
})
export class MobilNumberPageModule {}
