import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavBarComponent {
  result: string = '';
  constructor(
    public dialog: MatDialog,
    private http: HttpClient
  ) { };
  confirmDialog(): void{
    const message = `Are you sure you'd like to clear your question queue? WARNING: THIS CANNOT BE UNDONE.`;
    const dialogData = new ConfirmDialogModel("Are you sure?", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (dialogResult === true) {
        console.log('Dialog Accepted');
        let user = "naaackers";

        let clearUrl = 'https://api.quebone.app/questions/' + user + '/clear';
        this.http.delete(clearUrl).subscribe({
          next: () => {
              console.log('Delete successful');
            location.reload();
          },
          error: (error: any) => {
            console.error('There was an error!', error);
          }
        });
        }
      if (dialogResult === false) {
        console.log('Dialog Cancelled');
      }
    })
  }
}

export class ClearQuestions {
  constructor(private http: HttpClient) { }


}



