import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryPage } from './entry.page';
import { EntryPageRoutingModule } from './entry-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EntryPageRoutingModule],
  declarations: [EntryPage],
})
export class EntryPageModule {}
