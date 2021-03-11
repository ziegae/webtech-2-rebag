import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTabPage } from './test-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TestTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTabPageRoutingModule {}
