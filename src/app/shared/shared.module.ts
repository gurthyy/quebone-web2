import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './date-ago.pipe';
import { FormsModule } from '@angular/forms';

//for use in DateAgoPipe
import { Pipe, PipeTransform } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ClearWarnModalComponent } from './clear-warn-modal.component';


@NgModule({
  declarations: [DateAgoPipe, ClearWarnModalComponent],
  imports: [
    CommonModule, MatCheckboxModule
  ],
  exports:[DateAgoPipe, CommonModule, FormsModule, MatCheckboxModule,]
})
export class SharedModule { }
