import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizModel } from '../../models/quiz-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-card.html',
  styleUrls: ['./quiz-card.css']
})
export class QuizCardComponent {
  constructor(private router: Router){}
  @Input() quiz!: QuizModel;


  @Input() randomHue!: number;
  @Input() randomQuestionCount!: number;
  @Input() randomPlayerCount!: number;
  navigateToQuiz(): void {
    this.router.navigate(['quizScreen']);
  }
  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/image.png';
  }
}
