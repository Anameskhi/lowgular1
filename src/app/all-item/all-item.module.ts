import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllItemRoutingModule } from './all-item-routing.module';
import { AllItemComponent } from './all-item.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AllItemComponent
  ],
  imports: [
    CommonModule,
    AllItemRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AllItemModule { }
