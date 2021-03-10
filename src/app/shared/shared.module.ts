import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './date-ago.pipe';
import { FormsModule } from '@angular/forms';

//for use in DateAgoPipe
import { Pipe, PipeTransform } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {MatButtonModule} from '@angular/material/button/'


@NgModule({
  declarations: [DateAgoPipe, ConfirmDialogComponent],
  imports: [
    CommonModule, MatCheckboxModule, MatDialogModule, BrowserAnimationsModule, MatButtonModule
  ],
  exports:[DateAgoPipe, CommonModule, FormsModule, MatCheckboxModule,MatDialogModule, BrowserAnimationsModule, MatButtonModule]
})
export class SharedModule { }
