import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'qb-clear-warn-modal',
  templateUrl: './clear-warn-modal.component.html',
  styles: [
  ]
})
export class ClearWarnModalComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {

  }

}
