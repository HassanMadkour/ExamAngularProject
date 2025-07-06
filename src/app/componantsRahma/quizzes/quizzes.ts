import { Component, Pipe, PipeTransform } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { forwardRef } from "@angular/core";
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from "../../customs/quiz-card/quiz-card";
import { QuizModel } from '../../Models/quiz-model';
import { QuizService } from '../../Services/quizdata';

@Component({
  selector: 'app-quizzes',
  imports: [CommonModule, forwardRef(() => ShufflePipe), RouterLink, RouterLinkActive, QuizCardComponent],
  templateUrl: './quizzes.html',
  styleUrl: './quizzes.css'
})
export class Quizzes {
  quizzes: QuizModel[] = [];

  constructor(private router: Router, private quizService: QuizService) {
    this.quizzes = this.quizService.getQuizzes();
  }



  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/image.png';
  }

  randomHue(): number {
    return Math.floor(Math.random() * 360);
  }

  randomQuestionCount(): number {
    return Math.floor(Math.random() * 50) + 10;
  }

  randomPlayerCount(): number {
    return Math.floor(Math.random() * 1000) + 100;
  }
  navigateToAllQuizzes(): void {
  this.router.navigate(['/quizzes/all']);
}
}


@Pipe({ name: 'shuffle' })
export class ShufflePipe implements PipeTransform {
  transform(value: any[]): any[] {
    return [...value].sort(() => Math.random() - 0.5);
  }
}
