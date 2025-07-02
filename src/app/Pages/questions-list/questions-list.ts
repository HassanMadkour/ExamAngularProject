import { Component } from '@angular/core';
import { QuestionService } from '../../Services/question-service';

@Component({
  selector: 'app-questions-list',
  imports: [],
  templateUrl: './questions-list.html',
  styleUrl: './questions-list.css'
})
export class QuestionsList {
  constructor(private questionService :QuestionService) { }

}
