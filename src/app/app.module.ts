import { RegisterPage } from './pages/register/register.page';
import { MobilNumberPage } from './pages/mobil-number/mobil-number.page';
import { ContractPage } from './pages/contract/contract.page';
import { ContractPageModule } from './pages/contract/contract.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EntryPageModule } from './pages/entry/entry.module';
import { HeaderPageComponent } from './components/header-page/header-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractPage,
    MobilNumberPage,
    RegisterPage,
    HeaderPageComponent,
  ],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    EntryPageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
