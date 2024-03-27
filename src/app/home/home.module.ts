import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterComponent } from '../filter/filter.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [HomePage,FilterComponent]
})
export class HomePageModule {}
