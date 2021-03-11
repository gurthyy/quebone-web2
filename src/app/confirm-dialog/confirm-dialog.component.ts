import { Component, Inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'qb-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: ['']
})
export class ConfirmDialogComponent {

  title: string;
  message: string;
  cancelText: string;
  confirmText: string;


  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    this.title = data.title;
    this.message = data.message
    this.cancelText = data.cancelText
    this.confirmText = data.confirmText
  }

  onConfirm(): void {
    // Close dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void{
    // Close dialog, return false
    this.dialogRef.close(false)
  }
}

export class ConfirmDialogModel{
  constructor(public title: string, public message: string, public cancelText: string, public confirmText: string){}
}


