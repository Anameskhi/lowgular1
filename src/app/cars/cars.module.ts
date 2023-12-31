import { MatCheckboxModule } from '@angular/material/checkbox'; // Import other modules as needed
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import {  CarsRoutingModule } from './cars-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { AllItemComponent } from '../all-item/all-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    RouterModule
  ]
})
export class CarsModule { }
