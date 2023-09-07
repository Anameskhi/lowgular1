import { Observable } from 'rxjs';
import { CarsService } from './../core/services/cars.service';
import { Component, OnInit } from '@angular/core';
import { ICarForm } from '../core/interfaces/carForm';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  carSecurityFeatures: any[] = [{ name: 'Default Checkbox' }];;
  isChecked: boolean = false;
  getCarsBrand$: Observable<ICarForm[]> = this.carsSrvc.getCarBrands();
  getCarSecurityFeatures$: Observable<ICarForm[]> = this.carsSrvc.getCarSecurityFeatures()
  getCarComfortFeatures$: Observable<ICarForm[] > = this.carsSrvc.getCarComfortFeatures()
  maxCheckboxes!:number
  constructor(
    private carsSrvc: CarsService,
  ) { }

  ngOnInit(): void {
    this.getCarSecurityFeatures$.subscribe(res =>this.maxCheckboxes = res.length )
  }

  addCheckbox() {
    if (this.carSecurityFeatures.length < this.maxCheckboxes) {
      // You can create a new checkbox object and push it to the array
      this.carSecurityFeatures.push({ name: 'New Checkbox' }); // You can provide a default name here
    }
  }


}
