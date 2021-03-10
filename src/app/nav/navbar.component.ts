import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';



@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavBarComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() { }

  openClearModal() {

  }

  async clear(user: string) {
    status;
    let clearUrl = 'https://api.quebone.app/questions/' + user + '/clear';
    this.http.delete(clearUrl).subscribe({
      next: () => {
          console.log('Delete successful');
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
  });
  }
}

