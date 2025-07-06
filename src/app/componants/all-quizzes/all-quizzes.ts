import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../services/quizdata';
import { QuizModel } from '../../models/quiz-model';
import { ShufflePipe } from '../quizzes/quizzes';
import { QuizCardComponent } from '../../customs/quiz-card/quiz-card';

@Component({
  selector: 'app-all-quizzes',
  standalone: true,
  imports: [CommonModule, RouterLink, ShufflePipe, QuizCardComponent],
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
