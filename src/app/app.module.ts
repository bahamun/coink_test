import { ErrorModalComponent } from './components/modals/error-modal/error-modal.component';
import { EntryPage } from './pages/entry/entry.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TouchPanelComponent } from './components/touch-panel/touch-panel.component';
import { RegisterPage } from './pages/register/register.page';
import { MobilNumberPage } from './pages/mobil-number/mobil-number.page';
import { ContractPage } from './pages/contract/contract.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { SuccessModalComponent } from './components/modals/success-modal/success-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractPage,
    MobilNumberPage,
    RegisterPage,
    HeaderPageComponent,
    TouchPanelComponent,
    EntryPage,
    SuccessModalComponent,
    ErrorModalComponent,
  ],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
