import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { OptionCard } from "./option-card/option-card";

@Component({
  selector: 'app-question-card',
  imports: [OptionCard],
  templateUrl: './question-card.html',
  styleUrl: './question-card.css'
})
export class QuestionCard implements OnInit {
  options : IOptionModel[] = [];
 @Input({required : true}) questionModel! : IQuestionModel ; 
 @Input({required : true}) index! : number ;
 constructor (){

 }
  ngOnInit(): void {
    this.options.push({option : this.questionModel.choice1 , label : "a" , isCorrect : this.questionModel.correctAnswer == 1})
    this.options.push({option : this.questionModel.choice2 , label : "b" , isCorrect : this.questionModel.correctAnswer == 2})
    this.options.push({option : this.questionModel.choice3 , label : "c" , isCorrect : this.questionModel.correctAnswer == 3})
    this.options.push({option : this.questionModel.choice4 , label : "d" , isCorrect : this.questionModel.correctAnswer == 4})
  }



}
