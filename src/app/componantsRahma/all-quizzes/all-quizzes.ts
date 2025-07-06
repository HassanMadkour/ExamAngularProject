import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShufflePipe } from '../quizzes/quizzes';
import { QuizCardComponent } from '../../customs/quiz-card/quiz-card';
import { QuizModel } from '../../Models/quiz-model';
import { QuizService } from '../../Services/quizdata';

@Component({
  selector: 'app-all-quizzes',
  standalone: true,
  imports: [CommonModule,  ShufflePipe, QuizCardComponent],
  templateUrl: './all-quizzes.html',
  styleUrl: './all-quizzes.css'
})
export class AllQuizzes {
  quizzes: QuizModel[] = [];

  constructor(private router: Router, private quizService: QuizService) {
    this.quizzes = this.quizService.getQuizzes();
  }

  navigateToQuiz(): void {
    this.router.navigate(['quizScreen']);
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
}
