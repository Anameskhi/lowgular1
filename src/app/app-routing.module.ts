import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'; 


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
