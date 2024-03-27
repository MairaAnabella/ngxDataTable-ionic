import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InlineEditPageRoutingModule } from './inline-edit-routing.module';

import { InlineEditPage } from './inline-edit.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InlineEditPageRoutingModule,NgxDatatableModule
  ],
  declarations: [InlineEditPage]
})
export class InlineEditPageModule {}
