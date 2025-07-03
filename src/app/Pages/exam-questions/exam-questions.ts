import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuestionService } from './../../Services/question-service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuestionsList } from "../questions-list/questions-list";

@Component({
  selector: 'app-exam-questions',
  imports: [QuestionsList , RouterLink ],
  templateUrl: './exam-questions.html',
  styleUrl: './exam-questions.css'
})
export class ExamQuestions implements OnInit{

examId! : number;
cachedQuestions: {page : number , questions : IQuestionModel[] }[] =[] ;
currentQuestions! : IQuestionModel[] ;

constructor( private questionService :QuestionService , private activatedRoute: ActivatedRoute 
 , private changeDetectorRef: ChangeDetectorRef
) {
  this.examId =Number(this.activatedRoute.snapshot.paramMap.get('id')!);

}

cashQuestions(page : number , questions : IQuestionModel[]) {
  this.cachedQuestions.push({page , questions});
}
getIfCashed(page : number) {
  return this.cachedQuestions.find(cachedPage => cachedPage.page === page);
}

ngOnInit(): void {
  this.questionService.getAllQuestion(this.examId).subscribe({
    next: (response) => {
      this.cashQuestions(1 , response);
      this.currentQuestions = response;
      console.log(this.currentQuestions);
      this.changeDetectorRef.detectChanges();
      
    },
    error: (error) => {
      console.log(error);
    }
  });
 }

 changePage(page : number) {
  const cachedPage = this.getIfCashed(page);
  if (cachedPage) {
    this.currentQuestions = cachedPage.questions;
  } else {
    this.questionService.getAllQuestion(this.examId , page).subscribe({
      next: (response) => {
        this.cashQuestions(page , response);
        this.currentQuestions = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
 }
}



