import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizModel } from '../../Models/quiz-model';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-card.html',
  styleUrls: ['./quiz-card.css']
})
export class QuizCardComponent {
  constructor(private router: Router) {}

  @Input() quiz!: QuizModel;
  @Input() randomHue!: number;
  @Input() randomQuestionCount!: number;

  navigateToQuiz(): void {
    const token = localStorage.getItem('token');
    const isFromProfile = this.router.url.includes('profile');

    if (token) {
      if (isFromProfile) {
        this.router.navigate([`/completedExam/${this.quiz.id}`]);
      } else {
        this.router.navigate([`/quizProcess/${this.quiz.id}`]);
      }
    } else {
      this.router.navigate(['/account/login']);
    }
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/image.png';
  }
}
