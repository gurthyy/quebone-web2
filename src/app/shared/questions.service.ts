import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IQuestion } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questionsUrl = 'https://api.quebone.app/questions/';
  private firstUrl = 'https://api.quebone.app/questions/first';

  //  private questionLocation = '/assets/demo-questions.json';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.questionsUrl).pipe(
      tap((data) => console.log('Questions Loaded')),
      catchError(this.handleError),
    );
  }

  getCurrentQuestion(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(this.firstUrl).pipe(
      tap((data) => console.log('Current question loaded')),
      catchError(this.handleError)
    )
}

  getQuestion(id: number): Observable<IQuestion | undefined> {
    return this.getQuestions().pipe(
      map((questions: IQuestion[]) =>
        questions.find((q) => q.questionId === id),
      ),
    );
  }

  clearQuestion(user: string){
    let clearUrl = 'https://api.quebone.app/questions/' + user + '/clear';
    console.log('were in the function at least...')
    return this.http.get(clearUrl)
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
