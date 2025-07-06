import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Component, OnInit, OnDestroy, ViewChild, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { QuizQuestion } from '../../Models/quiz-question';
import { QuizService } from '../../Services/QuizServices/quiz.service';

@Component({
  selector: 'app-quizprocess',
  standalone: true,
  templateUrl: './quizprocess.html',
  styleUrls: ['./quizprocess.css'],
  imports: [
      CommonModule,
    MatStepperModule,

    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class Quizprocess implements OnInit, OnDestroy {
  @ViewChild('stepper') stepper!: MatStepper;

  questions: QuizQuestion[] = [];
  answerForms: FormGroup[] = [];
  quizCompleted = false;
  score = 0;
  userAnswers: { selected: string, isCorrect: boolean }[] = [];
  unansweredIndices: number[] = [];
  timeLeft = 60;
  timerInterval: any;
  timeOver = false;

  private fb = inject(FormBuilder);
  private quizService = inject(QuizService);
getOptionLetter(index: number): string {
  return String.fromCharCode(65 + index);
}
  ngOnInit() {
    this.quizService.getQuizQuestions().subscribe((data) => {
      if (data && data.length > 0) {
        this.questions = data;
      } else {
        this.setFallbackQuestions();
      }
      this.buildForm();
      this.startTimer();
    }, () => {
      this.setFallbackQuestions();
      this.buildForm();
      this.startTimer();
    });
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  setFallbackQuestions() {
    this.questions = [
      {
        id: 1,
        text: 'What is the capital of France?',
        correctAnswer: 'Paris',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome']
      },
      {
        id: 2,
        text: 'Which planet is known as the Red Planet?',
        correctAnswer: 'Mars',
        options: ['Earth', 'Venus', 'Mars', 'Jupiter']
      },
      {
        id: 3,
        text: 'What is the largest mammal?',
        correctAnswer: 'Blue Whale',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear']
      }
    ];
  }

  buildForm() {
    this.answerForms = this.questions.map(() =>
      this.fb.group({
        answer: ['', Validators.required]
      })
    );
  }

  submitQuiz() {
    this.score = 0;
    this.userAnswers = [];
    this.unansweredIndices = [];

    this.questions.forEach((q, i) => {
      const selected = this.answerForms[i].value.answer;

      if (!selected) {
        this.unansweredIndices.push(i);
        this.userAnswers.push({ selected: '', isCorrect: false });
        return;
      }

      const isCorrect = selected === q.correctAnswer;
      this.userAnswers.push({ selected, isCorrect });

      if (isCorrect) {
        this.score++;
      }
    });

    this.quizCompleted = true;
    clearInterval(this.timerInterval);
    setTimeout(() => {
      if (this.stepper) {
        this.stepper.selectedIndex = this.questions.length; 
      }
    });
  }

  resetQuiz() {
    this.quizCompleted = false;
    this.timeLeft = 60;
    this.timeOver = false;
    this.userAnswers = [];
    this.unansweredIndices = [];
    this.buildForm();
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeOver = true;
        this.submitQuiz();
      }
    }, 1000);
  }

  getResultMessage(): string {
    const percentage = (this.score / this.questions.length) * 100;
    if (percentage >= 80) return 'Excellent work! You really know your stuff!';
    if (percentage >= 60) return 'Good job! You have a solid understanding.';
    if (percentage >= 40) return 'Not bad! Keep learning and improving.';
    return 'Keep practicing! You\'ll get better with time.';
  }

  trackByQuestionId(index: number, question: QuizQuestion): number {
    return question.id;
  }
}
