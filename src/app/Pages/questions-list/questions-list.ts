import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { QuestionService } from '../../Services/question-service';
import { QuestionCard } from "./question-card/question-card";
import { EmptyCard } from "../../Components/empty-card/empty-card";
import { SearchBar } from "../../Components/search-bar/search-bar";

@Component({
  selector: 'app-questions-list',
  imports: [QuestionCard, EmptyCard, SearchBar],
  templateUrl: './questions-list.html',
  styleUrl: './questions-list.css'
})
export class QuestionsList {
  @Input({required : true}) displayedQuestions! : IQuestionModel[]  ; 

  constructor(private questionService :QuestionService) { }
 
 

}
