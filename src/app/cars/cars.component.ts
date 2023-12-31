import { ICarForm } from './../core/interfaces/carForm';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { CarsService } from './../core/services/cars.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  carSecurityFeatures: any[] = [{ name: 'Default Radio' }];;
  isChecked: boolean = false;
  getCarsBrand$: Observable<ICarForm[]> = this.carsSrvc.getCarBrands();
  getCarSecurityFeatures$: Observable<ICarForm[]> = this.carsSrvc.getCarSecurityFeatures()
  getCarComfortFeatures$: Observable<ICarForm[] > = this.carsSrvc.getCarComfortFeatures()
  maxCheckboxes!:number
 
  constructor(
    private carsSrvc: CarsService,
    private fb: FormBuilder,
    private toastAlert: NgToastService,
    private router: Router
  ) { }

  get getModel() {
    return this.form.get('model')
  }
  get getDescription() {
    return this.form.get('description')
  }
  get getbrandId() {
    return this.form.get('brandId')
  }

  form: FormGroup = new FormGroup(
    {
      model: new FormControl('', Validators.required),
      brandId: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      securityFeatureIds: this.fb.array([]),
      comfortFeatureIds: this.fb.array([]),
    })

  ngOnInit(): void {
    this.getCarSecurityFeatures$.subscribe(res =>this.maxCheckboxes = res.length )
  }

  addCheckbox() {
    const selectedSecurityArray = this.form.get('securityFeatureIds') as FormArray;
    selectedSecurityArray.push(this.fb.control(''));

    if (this.carSecurityFeatures.length < this.maxCheckboxes) {
      this.carSecurityFeatures.push({ name: 'New Radio' }); 
    }
  }

 handleSecurity(event: any, lineIndex: number) {
  const selectedSecurityArray = this.form.get('securityFeatureIds') as FormArray;

  while (selectedSecurityArray.length  <= lineIndex) {
    selectedSecurityArray.push(this.fb.control(''));
  }
  selectedSecurityArray.at(lineIndex).setValue(event.source.value);
  console.log( lineIndex + ':', selectedSecurityArray.at(lineIndex).value);
}


  handleComfort(event: any){
    const getCarComfort = this.form.get('comfortFeatureIds') as FormArray
    if(event.checked){
      getCarComfort.push(new FormControl(event.source.value))
    }else{
      let i = 0
      getCarComfort.controls.forEach(
        (item:any)=>{
          if(item.value === event.source.value){
            getCarComfort.removeAt(item)
          }
        }
      )
    }
    console.log(event.source.value)
  }

  submit(){
    this.form.markAllAsTouched()
    if (this.form.invalid) return;
    if (this.form.valid) {
   this.carsSrvc.submit(this.form.value).subscribe(res=>{
    this.toastAlert.success({ detail: "Success Message", summary: "Form successfully created", duration: 3000 })
   })
   this.router.navigate(['all-item'])
   this.carsSrvc.getAllCreatedForm().subscribe()
  }
  }
}


