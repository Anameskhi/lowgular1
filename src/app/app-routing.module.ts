import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'; 
import { AllItemModule } from './all-item/all-item.module';


const routes: Route[] = [
 
  {
    path: '',
    redirectTo: 'car-form',
    pathMatch: 'full'
  },
  {
    path: 'car-form',
    loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: 'all-item',
    loadChildren: () => import('./all-item/all-item.module').then(m => m.AllItemModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
