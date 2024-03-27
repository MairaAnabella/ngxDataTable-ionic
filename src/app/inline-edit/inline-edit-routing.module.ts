import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InlineEditPage } from './inline-edit.page';

const routes: Routes = [
  {
    path: '',
    component: InlineEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InlineEditPageRoutingModule {}
