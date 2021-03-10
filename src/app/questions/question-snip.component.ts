import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../shared/shared.module';




@Component({
  selector: 'question-snip',
  templateUrl: './question-snip.component.html',
  styleUrls: ['./question-snip.component.css']
})
export class QuestionSnipComponent {

  @Input() question: any;
  @Output() answerClicked = new EventEmitter;

  isAnswered = false;

  answerToggle(event:any) {

    if (event.checked) {
      //console.log('Question was marked as answered.');
      this.answerClicked.emit(true)
    }
    if (!event.checked) {
      //console.log('Question was marked as unanswered');
      this.answerClicked.emit(false)
    }

  }

}
