import { HeaderPageComponent } from './../../components/header-page/header-page.component';
import { SuccessModalComponent } from './../../components/modals/success-modal/success-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule,
  ],
  declarations: [RegisterPage, SuccessModalComponent, HeaderPageComponent],
})
export class RegisterPageModule {}
