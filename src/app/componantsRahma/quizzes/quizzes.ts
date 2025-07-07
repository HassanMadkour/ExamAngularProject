import { ChangeDetectorRef, Component, Pipe, PipeTransform } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { forwardRef } from "@angular/core";
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from "../../customs/quiz-card/quiz-card";
import { QuizModel } from '../../Models/quiz-model';
import { QuizService } from '../../Services/quizdata';

@Component({
  selector: 'app-quizzes',
  imports: [CommonModule,RouterLink, RouterLinkActive, QuizCardComponent],
  templateUrl: './quizzes.html',
  styleUrl: './quizzes.css'
})
export class Quizzes {
  quizzes: QuizModel[] = [];

  constructor(private router: Router, private quizService: QuizService,private cdr:ChangeDetectorRef) {
    this.quizService.getQuizzes().subscribe((data) => {
      this.quizzes = data;
              this.cdr.detectChanges();

      console.log(this.quizzes);
    });
  }


  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/image.png';
  }


  navigateToAllQuizzes(): void {
  this.router.navigate(['allQuizzes']);
}
}



