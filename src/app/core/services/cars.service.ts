import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { ICarForm } from '../interfaces/carForm';
import { ICreateForm } from '../interfaces/createForm';

@Injectable({
  providedIn: 'root'
})
export class CarsService extends BaseService{

  getCarBrands():Observable<ICarForm[]>{
    return this.get('car-brands')
  }

  getCarSecurityFeatures(): Observable<ICarForm[]>{
    return this.get('car-security-features')
  }

  getCarComfortFeatures(): Observable<ICarForm[]>{
    return this.get('car-comfort-features')
  }

  deleteCarForm(id: number):Observable<ICreateForm>{
    return this.delete<ICreateForm>(`cars/${id}`)
  }

  getAllCreatedForm():Observable<ICarForm[]>{
    return this.get('cars')
  }

  submit(body: ICreateForm): Observable<ICreateForm>{
    return this.post('cars',body)
  }

}
