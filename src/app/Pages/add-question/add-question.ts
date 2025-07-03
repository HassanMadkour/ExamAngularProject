import { Component } from '@angular/core';
import { QuestionService } from '../../Services/question-service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  imports: [ReactiveFormsModule],
  templateUrl: './add-question.html',
  styleUrl: './add-question.css'
})
export class AddQuestion {
 createQuestion! : ICreateQuestionModel ; 

 constructor (private questionService :QuestionService){}

 createQuestionFunc() {
  return this.questionService.createQuestion(this.createQuestion);
 }

}
