import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllItemComponent } from './all-item.component';

const routes: Routes = [
  {
    path: '',
    component: AllItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllItemRoutingModule { }
