import { Component, OnInit, } from '@angular/core';
import { ICarForm } from '../core/interfaces/carForm';
import { CarsService } from '../core/services/cars.service';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.scss'],
  
})
export class AllItemComponent implements OnInit {
  
  dataSource: any
  displayedColumns: string[] = ['id', 'model', 'description','action'];
  allItem! : ICarForm[]

  constructor(
    private carSrvc: CarsService,
    private toastAlert: NgToastService,
    ){}
  
  ngOnInit(): void {
    this.getAllCreateForm()
  }

  getAllCreateForm(){
    this.carSrvc.getAllCreatedForm().subscribe(res =>{
      this.allItem = res
      this.dataSource = new MatTableDataSource<ICarForm>(this.allItem);

    })
  }
  
  deleteCar(carId: number) {
    this.carSrvc.deleteCarForm(carId).subscribe(
      () => {
        this.allItem = this.allItem.filter(item => item.id !== carId.toString());
        this.dataSource.data = this.allItem;
        this.toastAlert.success({ detail: "Success Message", summary: "Form successfully Deleted", duration: 3000 })
      },
      (error) => {
        this.toastAlert.error({ detail: "Success Message", summary: error.message, duration: 3000 })

        console.error('Error deleting item:', error);
      }
    );
  }
}
