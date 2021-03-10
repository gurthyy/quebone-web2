import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../shared/question';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'qb-questions',
  template: `
    <div *ngFor='let question of questions'>
      <question-snip (answerClicked)="answerToggle($event)" [question]=question></question-snip>
    </div>
  `
})
export class QuestionsComponent implements OnInit {

  questions: IQuestion[] = [];
  currentQuestion: IQuestion[] = [];

  constructor(private questionService: QuestionsService) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe({
      next: (questions) => {
        this.questions = questions;
      },
    });

    this.questionService.getCurrentQuestion().subscribe({
      next: (currentQuestion) => {
        this.currentQuestion = currentQuestion;
      }
    })
  }

  answerToggle(data:any) {

    if (data) {
      console.log('Question was marked as answered and this is firing from the main component.');

    }
    if (!data) {
      console.log('Question was marked as unanswered and this is firing from the main component');

    }

  }

}
